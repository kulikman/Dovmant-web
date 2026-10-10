"use server";

import { insertRow, logSubmission, sendEmail } from "@/lib/delivery";
import { forms, isFormKind, schemaFor, type FormState } from "@/lib/forms";

export async function submitEnquiry(_prev: FormState, formData: FormData): Promise<FormState> {
  const raw = Object.fromEntries(formData);
  const kind = raw.kind;
  if (!isFormKind(kind)) return { status: "error", errors: { form: "Unknown form." } };

  const parsed = schemaFor(kind).safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const k = String(issue.path[0]);
      if (k && !errors[k]) errors[k] = issue.message;
    }
    return { status: "error", errors };
  }

  const { website, ...data } = parsed.data as Record<string, string>;
  if (website) return { status: "success" }; // bot: pretend success

  try {
    const sent = await sendEmail(forms[kind].subject, data);
    // Investor deck requests are also tracked, when Supabase is configured.
    const stored =
      kind === "deck"
        ? await insertRow("access_requests", {
            name: data.name,
            email: data.email,
            fund: data.fund,
            check_size: data.checkSize || null,
            link: data.portfolio || null,
          })
        : false;
    if (!sent && !stored) logSubmission(kind, data);
  } catch (error) {
    // Never lose an enquiry because delivery is misconfigured.
    console.error(`[${kind}] delivery failed`, error);
    logSubmission(kind, data);
  }

  return { status: "success" };
}
