"use server";

import { z } from "zod";
import type { ContactState } from "@/lib/contact-schema";
import { insertRow, logSubmission, sendEmail } from "@/lib/delivery";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid work email."),
  fund: z.string().trim().min(2, "Enter the fund name."),
  checkSize: z.string().trim().max(60).optional().or(z.literal("")),
  link: z.string().trim().max(200).optional().or(z.literal("")),
  website: z.string().max(0).optional(), // honeypot
});

export async function requestDataRoom(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const k = String(issue.path[0]);
      if (k && !errors[k]) errors[k] = issue.message;
    }
    return { status: "error", errors: errors as ContactState["errors"] };
  }

  const { website, ...data } = parsed.data;
  if (website) return { status: "success" };

  try {
    // supabase/migrations/0001_access_requests.sql creates this table.
    const stored = await insertRow("access_requests", {
      name: data.name,
      email: data.email,
      fund: data.fund,
      check_size: data.checkSize || null,
      link: data.link || null,
    });
    const sent = await sendEmail(`Data room request — ${data.fund}`, data);
    if (!stored && !sent) logSubmission("data-room", data);
  } catch (error) {
    console.error("[data-room] delivery failed", error);
    logSubmission("data-room", data);
  }

  return { status: "success" };
}
