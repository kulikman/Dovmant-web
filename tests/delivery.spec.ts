import { test, expect } from "@playwright/test";

/**
 * The delivery path runs on the server and only comes alive when the
 * environment is configured, so it is exercised here against a stubbed fetch.
 * Without this, the first time anyone sets RESEND_API_KEY is the first time the
 * code is tried — on a real enquiry.
 */
test.describe("form delivery", () => {
  const load = async () => {
    const mod = await import("../lib/delivery");
    return mod;
  };

  test("stays silent and reports false when nothing is configured", async () => {
    delete process.env.RESEND_API_KEY;
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    const { sendEmail, insertRow } = await load();
    expect(await sendEmail("Subject", { name: "A" })).toBe(false);
    expect(await insertRow("access_requests", { name: "A" })).toBe(false);
  });

  test("posts to Resend with the configured addresses", async () => {
    process.env.RESEND_API_KEY = "test-key";
    process.env.CONTACT_FROM_EMAIL = "site@dovmant.tech";
    process.env.CONTACT_TO_EMAIL = "info@dovmant.tech";

    const calls: { url: string; init: RequestInit }[] = [];
    const original = globalThis.fetch;
    globalThis.fetch = (async (url: string, init: RequestInit) => {
      calls.push({ url: String(url), init });
      return { ok: true, status: 200, text: async () => "" } as Response;
    }) as typeof fetch;

    try {
      const { sendEmail } = await load();
      expect(
        await sendEmail("Lab evaluation request", { institution: "Test Lab", email: "pi@uni.edu" }),
      ).toBe(true);
      expect(calls).toHaveLength(1);
      expect(calls[0].url).toBe("https://api.resend.com/emails");
      const body = JSON.parse(String(calls[0].init.body));
      expect(body.from).toBe("site@dovmant.tech");
      expect(body.to).toEqual(["info@dovmant.tech"]);
      expect(body.subject).toBe("Lab evaluation request");
      // every field the visitor filled has to survive into the message
      expect(body.text).toContain("Test Lab");
      expect(body.text).toContain("pi@uni.edu");
    } finally {
      globalThis.fetch = original;
      delete process.env.RESEND_API_KEY;
      delete process.env.CONTACT_FROM_EMAIL;
      delete process.env.CONTACT_TO_EMAIL;
    }
  });

  test("surfaces a provider error instead of swallowing it", async () => {
    process.env.RESEND_API_KEY = "test-key";
    process.env.CONTACT_FROM_EMAIL = "site@dovmant.tech";
    process.env.CONTACT_TO_EMAIL = "info@dovmant.tech";
    const original = globalThis.fetch;
    globalThis.fetch = (async () =>
      ({
        ok: false,
        status: 422,
        text: async () => "domain not verified",
      }) as Response) as typeof fetch;
    try {
      const { sendEmail } = await load();
      await expect(sendEmail("Subject", { name: "A" })).rejects.toThrow(/422/);
    } finally {
      globalThis.fetch = original;
      delete process.env.RESEND_API_KEY;
    }
  });
});
