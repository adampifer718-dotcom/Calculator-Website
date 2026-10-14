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
  await expect(page.locator("#directory-count")).toHaveText(/^2 of \d+ calculators match “hourly”\.$/);
});

test("directory search updates results and handles no matches", async ({ page }) => {
  await page.goto("/calculators");
  const search = page.locator("#directory-search");
  await search.fill("investment");
  await expect(page.locator("main").getByRole("link", { name: /ROI Calculator/ })).toBeVisible();
  await expect(page).toHaveURL(/q=investment/);
  await search.fill("qqqq");
  await expect(page.getByText("No calculators match “qqqq”.")).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).first().click();
  await expect(search).toHaveValue("");
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
  await menu.getByRole("link", { name: "P-value", exact: true }).click();
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
  for (const name of ["Biology", "Chemistry", "Construction", "Conversion", "Ecology", "Everyday Life", "Finance", "Food", "Health", "Math", "Physics", "Sports", "Statistics", "Other"]) {
    await expect(menu.getByRole("link", { name: new RegExp(`^${name} \\d+ calculators?$`) })).toBeVisible();
  }
  await page.keyboard.press("Escape");
  await expect(menu).toHaveCount(0);
  await expect(button).toBeFocused();
  await button.click();
  await expect(menu.getByRole("link", { name: /^Real Estate & Property \d+$/ })).toBeVisible();
  await menu.getByRole("link", { name: "Square Footage", exact: true }).click();
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

test("search autocomplete suggests calculators and supports the keyboard", async ({ page, isMobile }) => {
  test.skip(isMobile, "desktop hero search");
  await page.goto("/");
  const input = page.locator("#hero-search");
  await input.fill("loan");
  const listbox = page.getByRole("listbox", { name: "Suggested calculators" });
  await expect(listbox.getByRole("option").first()).toContainText("Loan Payment Calculator");
  await expect(input).toHaveAttribute("aria-expanded", "true");
  await input.press("ArrowDown");
  await expect(listbox.getByRole("option").first()).toHaveAttribute("aria-selected", "true");
  await input.press("Enter");
  await expect(page).toHaveURL(/\/calculators\/loan-payment-calculator$/);
  await page.goto("/");
  await page.locator("#hero-search").fill("zzzz");
  await expect(page.getByText("No calculators match “zzzz”. Press Enter to search the directory.")).toBeVisible();
  await page.locator("#hero-search").press("Escape");
  await expect(page.locator("#hero-search")).toHaveAttribute("aria-expanded", "false");
});

test("directory filters by category and industry, sorts and keeps state in the URL", async ({ page }) => {
  await page.goto("/calculators?category=physics");
  await expect(page.locator("#directory-category")).toHaveValue("physics");
  await expect(page.locator("main").getByRole("link", { name: /Ohm's Law Calculator/ })).toBeVisible();
  await expect(page.locator("main").getByRole("link", { name: /BMI Calculator/ })).toHaveCount(0);
  await page.locator("#directory-category").selectOption("");
  await page.locator("#directory-collection").selectOption("real-estate");
  await expect(page).toHaveURL(/collection=real-estate/);
  await expect(page.locator("main").getByRole("link", { name: /Square Footage Calculator/ })).toBeVisible();
  await page.locator("#directory-sort").selectOption("az");
  await expect(page).toHaveURL(/sort=az/);
  const titles = await page.locator("main ul li a span.block.font-semibold").allTextContents();
  expect(titles).toEqual([...titles].sort((a, b) => a.localeCompare(b, "en")));
  await page.locator("#directory-search").fill("molarity");
  await expect(page.getByText("No calculators match “molarity”.")).toBeVisible();
});

test("old category URLs redirect to the new taxonomy", async ({ page }) => {
  await page.goto("/categories/salary-and-pay");
  await expect(page).toHaveURL(/\/categories\/finance$/);
  await page.goto("/categories/finance-and-investing");
  await expect(page).toHaveURL(/\/categories\/finance$/);
});

test("collection pages link to canonical calculator pages", async ({ page }) => {
  await page.goto("/collections/hr-payroll");
  await expect(page.locator("h1")).toHaveText("HR, Payroll & Employment calculators");
  await page.locator("main").getByRole("link", { name: /Salary to Hourly Calculator/ }).click();
  await expect(page).toHaveURL(/\/calculators\/salary-to-hourly-calculator$/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/calculators\/salary-to-hourly-calculator$/);
  await expect(page.getByRole("list", { name: "Industry collections" }).getByRole("link", { name: "HR, Payroll & Employment" })).toBeVisible();
});
