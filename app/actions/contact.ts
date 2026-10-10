"use server";

import { contactSchema, type ContactState } from "@/lib/contact-schema";
import { logSubmission, sendEmail } from "@/lib/delivery";

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    const errors: NonNullable<ContactState["errors"]> = {};
    for (const issue of parsed.error.issues) {
      const k = issue.path[0] as keyof typeof errors;
      if (k && !errors[k]) errors[k] = issue.message;
    }
    return { status: "error", errors };
  }

  const { website, ...data } = parsed.data;
  if (website) return { status: "success" }; // bot: pretend success

  try {
    const sent = await sendEmail(`Enquiry — ${data.orgType} (${data.intent ?? "site"})`, data);
    if (!sent) logSubmission("contact", data);
  } catch (error) {
    // Never lose a message because delivery is misconfigured.
    console.error("[contact] delivery failed", error);
    logSubmission("contact", data);
  }

  return { status: "success" };
}
