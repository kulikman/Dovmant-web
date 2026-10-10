import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";
import { pages } from "./pages";

for (const path of pages) {
  test(`axe ${path}`, async ({ page }) => {
    await page.goto(path, { waitUntil: "networkidle" });
    const { violations } = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    const summary = violations.map(
      (v) => `${v.id} (${v.impact}) — ${v.nodes.length}×: ${v.nodes[0]?.target.join(" ")}`,
    );
    expect(summary, `${path} has accessibility violations`).toEqual([]);
  });
}
