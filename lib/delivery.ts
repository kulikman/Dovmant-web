/**
 * Where form submissions go. Everything is optional: with no environment
 * configured the submission is logged and the visitor still gets a success
 * state, so the site works before any backend exists.
 *
 * No SDKs — both providers are called over their REST APIs.
 */

type Fields = Record<string, string | undefined>;

const line = (fields: Fields) =>
  Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

/** Send a notification email through Resend, when it is configured. */
export async function sendEmail(subject: string, fields: Fields): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !from || !to) return false;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], subject, text: line(fields) }),
  });

  if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
  return true;
}

/** Insert a row through the Supabase REST API, when it is configured. */
export async function insertRow(table: string, row: Record<string, unknown>): Promise<boolean> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return false;

  const res = await fetch(`${url}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });

  if (!res.ok) throw new Error(`Supabase responded ${res.status}: ${await res.text()}`);
  return true;
}

/** Last resort so a submission is never silently dropped. */
export function logSubmission(kind: string, fields: Fields) {
  console.log(`[${kind}]`, line(fields));
}
