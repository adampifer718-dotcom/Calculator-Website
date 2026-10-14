import { expect, test } from "@playwright/test";

test("header search filters the directory", async ({ page, isMobile }) => {
  await page.goto("/");
  if (isMobile) {
    await page.getByRole("button", { name: "Open menu" }).click();
    await page.locator("#mobile-search").fill("hourly");
    await page.locator("#mobile-search").press("Enter");
  } else {
    await page.locator("#hero-search").fill("hourly");
    await page.getByRole("button", { name: "Search" }).click();
  }
  await expect(page).toHaveURL(/\/calculators\?q=hourly/);
  await expect(page.locator("#directory-search")).toHaveValue("hourly");
  await expect(page.locator("#directory-count")).toHaveText("2 calculators match “hourly”.");
});

test("directory search updates results and handles no matches", async ({ page }) => {
  await page.goto("/calculators");
  const search = page.locator("#directory-search");
  await search.fill("investment");
  await expect(page.locator("main").getByRole("link", { name: /ROI Calculator/ })).toBeVisible();
  await expect(page).toHaveURL(/q=investment/);
  await search.fill("qqqq");
  await expect(page.getByText("No calculators match “qqqq”.")).toBeVisible();
  await search.fill("");
  await expect(page.locator("#directory-count")).toHaveText(/Showing all \d+ calculators/);
});

test("mobile menu opens, navigates and closes", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile only");
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await expect(page.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(page.locator("#mobile-menu")).toHaveCount(0);
  await page.getByRole("button", { name: "Open menu" }).click();
  const menu = page.locator("#mobile-menu");
  await menu.locator("summary", { hasText: "Statistics" }).click();
  await menu.getByRole("link", { name: "P-value Calculator" }).click();
  await expect(page).toHaveURL(/\/calculators\/p-value-calculator$/);
  await expect(page.locator("#mobile-menu")).toHaveCount(0);
});

test("desktop mega menu lists every category and navigates", async ({ page, isMobile }) => {
  test.skip(isMobile, "desktop only");
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Main" });
  const button = nav.getByRole("button", { name: "Calculators" });
  await button.click();
  await expect(button).toHaveAttribute("aria-expanded", "true");
  const menu = page.locator("#mega-menu");
  for (const name of ["Salary & Pay", "Finance", "Math", "Statistics", "Construction", "Everyday Life", "Health"]) {
    await expect(menu.getByRole("link", { name: new RegExp(`^${name} \\d+ calculators?$`) })).toBeVisible();
  }
  await page.keyboard.press("Escape");
  await expect(menu).toHaveCount(0);
  await expect(button).toBeFocused();
  await button.click();
  await menu.getByRole("link", { name: "Square Footage Calculator" }).click();
  await expect(page).toHaveURL(/\/calculators\/square-footage-calculator$/);
  await expect(page.locator("#mega-menu")).toHaveCount(0);
  await expect(page.locator("h1:visible")).toHaveText("Square Footage Calculator");
  await nav.getByRole("link", { name: "All calculators" }).click();
  await expect(page.locator("h1:visible")).toHaveText("All calculators");
});

test("skip link moves focus to main content", async ({ page, isMobile }) => {
  test.skip(isMobile, "keyboard only");
  await page.goto("/calculators/salary-to-hourly-calculator");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to main content" });
  await expect(skip).toBeFocused();
  await skip.press("Enter");
  await expect(page).toHaveURL(/#main$/);
});

test("/categories redirects to the directory", async ({ page }) => {
  await page.goto("/categories");
  await expect(page).toHaveURL(/\/calculators$/);
});
