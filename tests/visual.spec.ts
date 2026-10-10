import { test, expect } from "@playwright/test";
import { pages } from "./pages";

for (const path of pages) {
  test(`screenshot ${path}`, async ({ page }, info) => {
    const res = await page.goto(path, { waitUntil: "networkidle" });
    expect(res?.status(), `${path} should respond 200`).toBe(200);
    // settle reveal animations
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(900);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(400);
    const name = path === "/" ? "home" : path.replace(/^\//, "").replace(/\//g, "-");
    await page.screenshot({
      path: `screenshots/${info.project.name}/${name}.png`,
      fullPage: true,
    });
  });
}
