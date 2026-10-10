import { test, expect } from "@playwright/test";
import { pages } from "./pages";

/**
 * Mechanical integrity of the built site: links resolve, anchors exist, images
 * load, nothing logs an error. Interaction and visual checks live in
 * a11y.spec.ts and visual.spec.ts; the brief is docs/ux-audit-prompt.md.
 */

const INTERNAL = (href: string) =>
  href.startsWith("/") || href.includes("127.0.0.1") || href.includes("localhost");

test.describe("integrity", () => {
  for (const path of pages) {
    test(`links, anchors and images: ${path}`, async ({ page, baseURL }) => {
      const consoleErrors: string[] = [];
      const failedRequests: string[] = [];
      page.on("console", (m) => m.type() === "error" && consoleErrors.push(m.text()));
      page.on("requestfailed", (r) =>
        failedRequests.push(`${r.url()} — ${r.failure()?.errorText}`),
      );
      page.on("response", (r) => {
        if (r.status() >= 400) failedRequests.push(`${r.url()} — ${r.status()}`);
      });

      await page.goto(path, { waitUntil: "networkidle" });

      // walk the page so lazy images below the fold actually load
      await page.evaluate(async () => {
        const step = window.innerHeight * 0.8;
        for (let y = 0; y < document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 120));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForLoadState("networkidle");

      // every link points somewhere
      const hrefs = await page
        .locator("a[href]")
        .evaluateAll((els) => els.map((e) => (e as HTMLAnchorElement).getAttribute("href") ?? ""));
      expect(
        hrefs.filter((h) => h === "" || h === "#"),
        `empty links on ${path}`,
      ).toEqual([]);

      // in-page anchors have a target
      for (const hash of hrefs.filter((h) => h.startsWith("#"))) {
        await expect(page.locator(hash), `missing anchor target ${hash} on ${path}`).toHaveCount(1);
      }

      // internal destinations resolve
      const targets = [
        ...new Set(
          hrefs
            .filter(INTERNAL)
            .map((h) => h.split("#")[0])
            .filter(Boolean),
        ),
      ];
      for (const t of targets) {
        const res = await page.request.get(new URL(t, baseURL).toString());
        expect(res.status(), `${t} linked from ${path}`).toBeLessThan(400);
      }

      // genuinely broken files: the browser finished and got nothing.
      // Images still queued by lazy loading are not failures — a 404 would be
      // caught by the response listener below.
      const broken = await page.locator("img").evaluateAll((els) =>
        els
          .filter((e) => {
            const img = e as HTMLImageElement;
            return img.complete && img.naturalWidth === 0 && img.getAttribute("src");
          })
          .map((e) => (e as HTMLImageElement).currentSrc || (e as HTMLImageElement).src),
      );
      expect(broken, `broken images on ${path}`).toEqual([]);

      const unlabelled = await page
        .locator("img")
        .evaluateAll((els) =>
          els
            .filter((e) => !(e as HTMLImageElement).alt.trim())
            .map((e) => (e as HTMLImageElement).src),
        );
      expect(unlabelled, `images without alt on ${path}`).toEqual([]);

      // exactly one h1, and no skipped heading level
      const levels = await page
        .locator("h1, h2, h3, h4")
        .evaluateAll((els) => els.map((e) => Number(e.tagName[1])));
      expect(levels.filter((l) => l === 1).length, `h1 count on ${path}`).toBe(1);
      for (let i = 1; i < levels.length; i++) {
        expect(
          levels[i] - levels[i - 1],
          `heading jump on ${path} at index ${i}`,
        ).toBeLessThanOrEqual(1);
      }

      expect(consoleErrors, `console errors on ${path}`).toEqual([]);
      expect(failedRequests, `failed requests on ${path}`).toEqual([]);
    });
  }

  test("no horizontal scroll at any supported width", async ({ page }) => {
    for (const width of [375, 768, 1280, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const path of [
        "/",
        "/system",
        "/specifications",
        "/research",
        "/performance",
        "/contact",
      ]) {
        await page.goto(path, { waitUntil: "domcontentloaded" });
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
        );
        expect(overflow, `horizontal overflow on ${path} at ${width}px`).toBeLessThanOrEqual(1);
      }
    }
  });

  test("reduced motion leaves nothing invisible", async ({ browser }) => {
    const ctx = await browser.newContext({ reducedMotion: "reduce" });
    const page = await ctx.newPage();
    await page.goto("/", { waitUntil: "networkidle" });
    const hidden = await page.locator("h2, p, figure").evaluateAll((els) =>
      els
        .filter((e) => {
          const s = getComputedStyle(e);
          return Number(s.opacity) < 0.9 && e.getBoundingClientRect().height > 0;
        })
        .map((e) => e.textContent?.slice(0, 40) ?? e.tagName),
    );
    expect(hidden, "elements stuck invisible under reduced motion").toEqual([]);
    await ctx.close();
  });
});
