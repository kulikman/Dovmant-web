"use server";

import { contactSchema, type ContactState } from "@/lib/contact-schema";

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
  if (parsed.data.website) return { status: "success" }; // bot: pretend success
  // TODO(phase 2): deliver to CRM / email provider. For now: log only.
  console.log("[contact] new enquiry", { ...parsed.data, website: undefined });
  return { status: "success" };
}
