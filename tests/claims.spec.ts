import { readFileSync, readdirSync } from "node:fs";
import { test, expect } from "@playwright/test";
import { pages } from "./pages";

/**
 * The claims firewall, enforced. Dovmant is a research instrument, so clinical
 * and outcome language must not appear in the content or on a rendered page.
 *
 * The Research Use Statement and the footer notice have to use some of these
 * words to disclaim them, so they are allowed by exact phrase below.
 */
const BANNED = [
  "rehabilitation",
  "rehabilitate",
  "therapy",
  "therapist",
  "therapeutic",
  "patient",
  "clinician",
  "indication",
  "injury prevention",
  "prevent injury",
  "improves outcomes",
  "improve outcomes",
  "reduces risk",
  "return to play",
  "return to competition",
  "restores gait",
  "recovery time",
  "revolutionary",
  "breakthrough",
];

/** Sentences that legitimately contain a banned word in order to deny it. */
const ALLOWED_PHRASES = [
  // the mandatory research-use notice and its page
  "is not intended for the diagnosis, treatment, mitigation, or prevention of any disease or condition",
  "not intended for diagnosis, treatment or prevention of any condition",
  "we make no claims about injury prevention, recovery, or return to competition",
  "there is no published evidence for any such claim",
  "makes no claim regarding safety or effectiveness for any clinical purpose",
  "no clinical claims",
  "is not a medical device",
  // terms of use, forbidding exactly this reading of the site
  "presents the instrument as a medical device or attributes to it a clinical, therapeutic or performance outcome",
];

const strip = (text: string) => {
  let out = text.toLowerCase();
  for (const phrase of ALLOWED_PHRASES) out = out.split(phrase).join(" ");
  return out;
};

const findBanned = (text: string) => BANNED.filter((w) => strip(text).includes(w));

test.describe("claims firewall", () => {
  test("content files carry no clinical or outcome language", () => {
    const dir = "content";
    const offenders: string[] = [];
    for (const file of readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
      const found = findBanned(readFileSync(`${dir}/${file}`, "utf8"));
      if (found.length) offenders.push(`${file}: ${found.join(", ")}`);
    }
    expect(offenders, "banned wording in content").toEqual([]);
  });

  for (const path of pages) {
    test(`rendered page has no banned wording: ${path}`, async ({ page }) => {
      await page.goto(path, { waitUntil: "domcontentloaded" });
      const text = await page.locator("body").innerText();
      expect(findBanned(text), `banned wording on ${path}`).toEqual([]);
    });
  }

  test("the research use notice is in the footer of every page", async ({ page }) => {
    for (const path of ["/", "/specifications", "/news", "/about"]) {
      await page.goto(path, { waitUntil: "domcontentloaded" });
      await expect(
        page.getByText("Dovmant is a research instrument.", { exact: false }).first(),
        `missing research use notice on ${path}`,
      ).toBeVisible();
    }
  });
});
