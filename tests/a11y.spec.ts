import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "parallel" });

test("keyboard: skip link, nav and FAQ accordion", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();

  const first = page.getByRole("button", { name: /Who is the device for/i });
  await first.scrollIntoViewIfNeeded();
  await expect(first).toHaveAttribute("aria-expanded", "true");
  await first.focus();
  await page.keyboard.press("Enter");
  await expect(first).toHaveAttribute("aria-expanded", "false");
});

test("contact form shows accessible validation errors", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: /send message/i }).click();
  const alert = page.getByRole("alert").first();
  await expect(alert).toBeVisible();
  await expect(alert).toContainText("Error");
});

test("video modal opens and closes with Escape", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /watch the film/i }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
});
