"use server";

import { z } from "zod";
import type { ContactState } from "@/lib/contact-schema";

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
  if (parsed.data.website) return { status: "success" };
  // TODO(phase 2): create a Supabase access request row + notify.
  console.log("[data-room] access request", { ...parsed.data, website: undefined });
  return { status: "success" };
}
