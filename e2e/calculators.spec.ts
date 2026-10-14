import { expect, test, type Page } from "@playwright/test";

const results = (page: Page) => page.getByRole("region", { name: "Results" });
const primary = (page: Page) => results(page).locator("[aria-live] p").nth(1);
const row = (page: Page, label: string) => results(page).getByRole("row", { name: new RegExp(`^${label} `) });

test.describe("salary to hourly", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/calculators/salary-to-hourly-calculator");
  });

  test("renders the default result before hydration", async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto("/calculators/salary-to-hourly-calculator");
    await expect(primary(page)).toHaveText("$28.85");
    await context.close();
  });

  test("converts every pay period", async ({ page }) => {
    const cases: [string, string, string][] = [
      ["Annual", "52000", "$25.00"],
      ["Annual", "60,000", "$28.85"],
      ["Monthly", "5000", "$28.85"],
      ["Semi-monthly", "2500", "$28.85"],
      ["Biweekly", "2000", "$25.00"],
      ["Weekly", "1000", "$25.00"],
      ["Daily", "200", "$25.00"],
      ["Hourly", "25", "$25.00"],
    ];
    for (const [period, amount, hourly] of cases) {
      await page.getByLabel("Pay period").selectOption({ label: period });
      await page.getByLabel("Gross pay amount").fill(amount);
      await expect(primary(page), `${period} ${amount}`).toHaveText(hourly);
    }
  });

  test("shows the full breakdown for $60,000 a year", async ({ page }) => {
    await expect(row(page, "Annual")).toContainText("$60,000.00");
    await expect(row(page, "Monthly")).toContainText("$5,000.00");
    await expect(row(page, "Semi-monthly")).toContainText("$2,500.00");
    await expect(row(page, "Biweekly")).toContainText("$2,307.69");
    await expect(row(page, "Weekly")).toContainText("$1,153.85");
    await expect(row(page, "Daily")).toContainText("$230.77");
    await expect(row(page, "Hourly")).toContainText("$28.85");
  });

  test("uses hours, workdays and weeks per year", async ({ page }) => {
    await page.getByLabel("Gross pay amount").fill("250");
    await page.getByLabel("Pay period").selectOption("daily");
    await page.getByLabel("Hours per week").fill("32");
    await page.getByLabel("Workdays per week").fill("4");
    await page.getByLabel("Paid weeks per year").fill("48");
    await expect(primary(page)).toHaveText("$31.25");
    await expect(row(page, "Annual")).toContainText("$48,000.00");
    await expect(results(page)).toContainText("1,536 paid hours per year");
  });

  test("formats with the selected currency without converting", async ({ page }) => {
    await page.getByLabel("Currency").selectOption("EUR");
    await expect(primary(page)).toHaveText("€28.85");
    await expect(page.getByText("€", { exact: true })).toBeVisible();
    await page.getByLabel("Currency").selectOption("JPY");
    await expect(row(page, "Annual")).toContainText("¥60,000");
  });

  test("shows accessible validation errors and recovers", async ({ page }) => {
    const amount = page.getByLabel("Gross pay amount");
    await amount.fill("abc");
    await expect(amount).toHaveAttribute("aria-invalid", "true");
    await expect(page.getByText("Enter a valid number")).toBeVisible();
    await expect(results(page)).toContainText("Check the highlighted inputs");
    await amount.fill("-5");
    await expect(page.getByText("Must be at least 0.")).toBeVisible();
    await amount.fill("");
    await expect(page.getByText("Enter gross pay amount.")).toBeVisible();
    await amount.fill("52000");
    await expect(amount).not.toHaveAttribute("aria-invalid");
    await expect(primary(page)).toHaveText("$25.00");

    const hours = page.getByLabel("Hours per week");
    await hours.fill("0");
    await expect(page.getByText("Must be greater than 0 hours.")).toBeVisible();
    await hours.fill("100");
    await page.getByLabel("Workdays per week").fill("4");
    await expect(page.getByText("cannot exceed 24 hours per day")).toBeVisible();
    await page.getByLabel("Workdays per week").fill("5");
    await expect(primary(page)).toHaveText("$10.00");
  });

  test("reset restores defaults", async ({ page }) => {
    await page.getByLabel("Gross pay amount").fill("1");
    await page.getByRole("button", { name: "Reset" }).click();
    await expect(page.getByLabel("Gross pay amount")).toHaveValue("60000");
    await expect(primary(page)).toHaveText("$28.85");
  });

  test("shows formula, worked examples, FAQ and related calculators", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Formula", exact: true })).toBeVisible();
    const examples = page.locator("section", { has: page.getByRole("heading", { name: "Worked examples" }) });
    await expect(examples).toContainText("Hourly equivalent: $28.85");
    await expect(examples).toContainText("Hourly equivalent: $25.96");
    await expect(examples).toContainText("Hourly equivalent: $26.67");
    await expect(examples).toContainText("Hourly equivalent: $31.25");
    const faq = page.getByText("Is the hourly rate my take-home pay?");
    await faq.click();
    await expect(page.getByText("The result is gross pay before taxes")).toBeVisible();
    const related = page.locator("section", { has: page.getByRole("heading", { name: "Related calculators" }) });
    await related.getByRole("link", { name: /Hourly to Salary Calculator/ }).click();
    await expect(page).toHaveURL(/\/calculators\/hourly-to-salary-calculator$/);
  });
});

test("hourly to salary", async ({ page }) => {
  await page.goto("/calculators/hourly-to-salary-calculator");
  await expect(primary(page)).toHaveText("$52,000.00");
  await page.getByLabel("Hourly rate").fill("18.50");
  await page.getByLabel("Hours per week").fill("30");
  await page.getByLabel("Paid weeks per year").fill("50");
  await expect(primary(page)).toHaveText("$27,750.00");
  await expect(row(page, "Monthly")).toContainText("$2,312.50");
  await page.getByLabel("Hourly rate").fill("-1");
  await expect(page.getByText("Must be at least 0.")).toBeVisible();
});

test("percentage", async ({ page }) => {
  await page.goto("/calculators/percentage-calculator");
  await expect(primary(page)).toHaveText("30");
  await page.locator("label").filter({ has: page.getByRole("radio", { name: "X is what % of Y?" }) }).click();
  await expect(page.getByRole("radio", { name: "X is what % of Y?" })).toBeChecked();
  await page.getByLabel("Part (X)").fill("45");
  await page.getByLabel("Whole (Y)").fill("180");
  await expect(primary(page)).toHaveText("25%");
  await page.getByLabel("Whole (Y)").fill("0");
  await expect(page.locator("form").getByText("The whole cannot be 0.")).toBeVisible();
  await page.locator("label").filter({ has: page.getByRole("radio", { name: "X is Y% of what?" }) }).click();
  await expect(page.getByRole("radio", { name: "X is Y% of what?" })).toBeChecked();
  await page.getByLabel("Part (X)").fill("30");
  await page.getByLabel("Percentage (Y)").fill("12");
  await expect(primary(page)).toHaveText("250");
});

test("percentage increase", async ({ page }) => {
  await page.goto("/calculators/percentage-increase-calculator");
  await expect(primary(page)).toHaveText("+25%");
  await page.getByLabel("Original value").fill("250");
  await page.getByLabel("New value").fill("200");
  await expect(primary(page)).toHaveText("-20%");
  await page.getByLabel("Original value").fill("0");
  await expect(page.getByLabel("Original value")).toHaveAttribute("aria-invalid", "true");
  await expect(page.locator("form").getByText("The original value cannot be 0")).toBeVisible();
});

test("ROI", async ({ page }) => {
  await page.goto("/calculators/roi-calculator");
  await expect(primary(page)).toHaveText("+25%");
  await expect(results(page)).toContainText("+$2,500.00");
  await expect(results(page)).toContainText("+7.72%");
  await page.getByLabel("Investment length (optional)").fill("");
  await expect(results(page)).toContainText("Add investment length");
  await page.getByLabel("Amount invested").fill("0");
  await expect(page.getByText("Must be greater than 0.")).toBeVisible();
});

test("mobile result bar tracks the result while inputs are on screen", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile only");
  await page.goto("/calculators/salary-to-hourly-calculator");
  const bar = page.locator("a[href='#results']");
  await expect(bar).toContainText("$28.85");
  await page.getByLabel("Gross pay amount").fill("52000");
  await expect(bar).toContainText("$25.00");
  await page.getByRole("region", { name: "Results" }).scrollIntoViewIfNeeded();
  await expect(bar).toHaveCount(0);
});
