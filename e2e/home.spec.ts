import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const calculator = (page: Page) => page.locator('section[aria-labelledby="pay-calculator-heading"]');

async function open(page: Page, path: string) {
  await page.goto(path);
  await page.waitForLoadState("networkidle");
}

const primary = (page: Page) => calculator(page).locator("[aria-live] p").nth(1);

test.describe("homepage salary calculator", () => {
  test("converts hourly to salary and salary to hourly, without the higher-rates table", async ({ page }) => {
    await open(page, "/");
    await expect(page.getByRole("heading", { name: "Hourly to salary pay calculator" })).toBeVisible();
    await expect(page.getByText("Earnings at higher hourly rates")).toHaveCount(0);
    const calc = calculator(page);
    // Hourly → salary (default $20/hour, 40 h × 52 weeks).
    await expect(calc.getByText("$41,600.00").first()).toBeVisible();
    await calc.getByLabel("Your pay").fill("25");
    await expect(calc.getByText("$52,000.00").first()).toBeVisible();
    // Salary → hourly.
    await calc.getByLabel("Pay period").selectOption("annual");
    await calc.getByLabel("Your pay").fill("60000");
    await expect(calc.getByText("$28.85").first()).toBeVisible();
    // Schedule inputs still drive the result: 60,000 ÷ (30 × 50) = 40.
    await calc.getByLabel("Hours per week").fill("30");
    await calc.getByLabel("Paid weeks per year").fill("50");
    await expect(calc.getByText("$40.00").first()).toBeVisible();
    // Dedicated one-direction calculators are linked.
    await expect(calc.getByRole("link", { name: /Hourly to Salary/ })).toHaveAttribute("href", "/calculators/hourly-to-salary-calculator");
    await expect(calc.getByRole("link", { name: /Salary to Hourly/ })).toHaveAttribute("href", "/calculators/salary-to-hourly-calculator");
  });

  test("how-to guide sits beside the calculator on desktop and below it on phones", async ({ page, isMobile }) => {
    await open(page, "/");
    const calc = await calculator(page).boundingBox();
    const guide = await page.locator('section[aria-labelledby="how-to-use"]').boundingBox();
    expect(calc && guide).toBeTruthy();
    if (isMobile) expect(guide!.y).toBeGreaterThan(calc!.y + calc!.height - 1);
    else {
      expect(guide!.x).toBeGreaterThan(calc!.x + calc!.width - 1);
      expect(Math.abs(guide!.y - calc!.y)).toBeLessThan(40);
    }
    await expect(page.locator('section[aria-labelledby="how-to-use"] ol > li')).toHaveCount(5);
  });

  test("formula guide and conversion chart are grouped, with correct values", async ({ page }) => {
    await open(page, "/");
    await expect(page.getByRole("heading", { name: "How to convert between hourly pay and salary" })).toBeVisible();
    const chart = page.locator('section[aria-labelledby="conversion-chart"]');
    await expect(chart.getByRole("row")).toHaveCount(7);
    await expect(chart.getByRole("row", { name: /^\$30,000 / })).toContainText("$14.42");
    await expect(chart.getByRole("row", { name: /^\$75,000 / })).toContainText("$2,884.62");
    // The chart scrolls inside its own region on narrow screens; the page never does.
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
});

test.describe("homepage calculator directory", () => {
  test("is collapsed by default and expands with search and category filters", async ({ page }) => {
    await open(page, "/");
    const toggle = page.getByRole("button", { name: "Browse all calculators" });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    const search = page.locator("#home-directory-search");
    await expect(search).toBeHidden();
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(search).toBeVisible();
    const status = page.locator("[data-home-directory-status]");
    await expect(status).toHaveText(/^Showing all \d+ calculators\.$/);
    await search.fill("mortgage");
    await expect(status).toHaveText(/^\d+ of \d+ calculators match “mortgage”\.$/);
    await search.fill("");
    await page.getByRole("button", { name: /^Physics \d+$/ }).click();
    await expect(page.getByRole("button", { name: /^Physics \d+$/ })).toHaveAttribute("aria-pressed", "true");
    await expect(status).toHaveText(/^\d+ of \d+ calculators\.$/);
    const panel = page.locator("[data-home-directory-panel]");
    await panel.getByRole("link", { name: "Kinetic Energy Calculator" }).click();
    await expect(page).toHaveURL(/\/calculators\/kinetic-energy-calculator$/);
  });

  test("works from the keyboard", async ({ page, isMobile }) => {
    test.skip(isMobile, "keyboard test on desktop");
    await open(page, "/");
    const toggle = page.getByRole("button", { name: "Browse all calculators" });
    await toggle.focus();
    await page.keyboard.press("Enter");
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Tab");
    await expect(page.locator("#home-directory-search")).toBeFocused();
    await page.keyboard.type("bmi");
    await expect(page.locator("[data-home-directory-status]")).toContainText("“bmi”");
    await toggle.focus();
    await page.keyboard.press("Space");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  test("homepage has no accessibility violations", async ({ page }) => {
    await open(page, "/");
    await page.getByRole("button", { name: "Browse all calculators" }).click();
    const axe = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"]).analyze();
    expect(axe.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`)).toEqual([]);
  });
});

test.describe("homepage in every language", () => {
  for (const [prefix, dir] of [["", "ltr"], ["/ur", "rtl"], ["/es", "ltr"], ["/fr", "ltr"], ["/de", "ltr"], ["/ar", "rtl"]] as const) {
    test(`layout, calculator and directory work in ${prefix || "/en"}`, async ({ page }) => {
      await open(page, prefix || "/");
      await expect(page.locator("html")).toHaveAttribute("dir", dir);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator('section[aria-labelledby="how-to-use"] ol > li')).toHaveCount(5);
      await expect(page.locator('section[aria-labelledby="conversion-chart"] tbody tr')).toHaveCount(6);
      await expect(primary(page)).toContainText(/41[,.\s\u00a0\u202f]?600/);
      const toggle = page.locator("[data-home-directory-toggle]");
      await expect(toggle).toHaveAttribute("aria-expanded", "false");
      await toggle.click();
      await expect(page.locator("#home-directory-search")).toBeVisible();
      const axe = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"]).analyze();
      expect(axe.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`)).toEqual([]);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow).toBeLessThanOrEqual(0);
    });
  }
});
