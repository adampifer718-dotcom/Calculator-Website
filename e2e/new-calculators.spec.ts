import { expect, test, type Page } from "@playwright/test";

const results = (page: Page) => page.locator('section[aria-labelledby="results-heading"]');
const primary = (page: Page) => results(page).locator("[aria-live] p").nth(1);
const field = (page: Page, id: string) => page.locator(`[id$="-${id}"]`).first();
/** A segmented option or other text inside the calculator's input form. */
const option = (page: Page, label: string) => page.locator("form").getByText(label, { exact: true });

async function open(page: Page, path: string) {
  await page.goto(path);
  await page.waitForLoadState("networkidle");
}

test("fraction calculator divides mixed numbers exactly", async ({ page }) => {
  await open(page, "/calculators/fraction-calculator");
  await expect(primary(page)).toHaveText("5/6");
  await field(page, "a").fill("1 1/2");
  await page.getByLabel("Operation").selectOption("divide");
  await field(page, "b").fill("3/8");
  await expect(primary(page)).toHaveText("4");
  await field(page, "b").fill("0");
  await expect(page.getByText("You cannot divide by zero.")).toBeVisible();
});

test("GPA calculator weights grades by credits", async ({ page }) => {
  await open(page, "/calculators/gpa-calculator");
  await expect(primary(page)).toHaveText("3.41");
  await field(page, "courses").fill("Biology A 4\nStatistics B 3");
  await field(page, "priorGpa").fill("3.2");
  await field(page, "priorCredits").fill("45");
  await expect(primary(page)).toHaveText("3.57");
  await expect(results(page).getByText("3.25", { exact: true })).toBeVisible();
});

test("age calculator prefills today and handles 29 February", async ({ page }) => {
  await open(page, "/calculators/age-calculator");
  const today = await page.evaluate(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  });
  await expect(field(page, "asOf")).toHaveValue(today);
  await field(page, "birth").fill("2000-02-29");
  await field(page, "asOf").fill("2025-02-28");
  await expect(primary(page)).toHaveText("25 years, 0 months and 0 days");
  await page.getByLabel("29 February birthdays in other years").selectOption("mar1");
  await expect(primary(page)).toHaveText("24 years, 11 months and 30 days");
});

test("date duration calculator counts days and weekdays", async ({ page }) => {
  await open(page, "/calculators/date-duration-calculator");
  await field(page, "start").fill("2026-01-01");
  await field(page, "end").fill("2026-10-14");
  await expect(primary(page)).toHaveText("286");
  await expect(results(page).getByText("204", { exact: true })).toBeVisible();
});

test("mortgage calculator separates principal and interest from other costs", async ({ page }) => {
  await open(page, "/calculators/mortgage-calculator");
  await expect(primary(page)).toHaveText("$2,547.62");
  await expect(results(page).getByText("$2,022.62", { exact: true })).toBeVisible();
  await field(page, "price").fill("300000");
  await field(page, "down").fill("15000");
  await field(page, "rate").fill("6");
  await field(page, "propertyTax").fill("3600");
  await field(page, "insurance").fill("1200");
  await field(page, "hoa").fill("50");
  await expect(primary(page)).toHaveText("$2,277.47");
  await expect(results(page).getByText("$118.75", { exact: true })).toBeVisible();
});

test("concrete calculator switches shapes and units", async ({ page }) => {
  await open(page, "/calculators/concrete-calculator");
  await expect(primary(page)).toHaveText("1.32 m³");
  await option(page, "Round column").click();
  await expect(field(page, "lengthMetric")).toHaveCount(0);
  await field(page, "diameterMetric").fill("30");
  await field(page, "heightMetric").fill("3");
  await field(page, "waste").fill("0");
  await expect(primary(page)).toHaveText("0.212 m³");
  await option(page, "US (ft, in)").click();
  await expect(field(page, "diameterImperial")).toBeVisible();
});

test("cups to grams uses each ingredient's density", async ({ page }) => {
  await open(page, "/calculators/cups-to-grams-converter");
  await expect(primary(page)).toHaveText("240 g");
  await field(page, "ingredient").selectOption("honey");
  await expect(primary(page)).toHaveText("680 g");
  await option(page, "Grams to cups").click();
  await field(page, "grams").fill("113.5");
  await field(page, "ingredient").selectOption("butter");
  await expect(primary(page)).toHaveText("0.5 cups");
});

test("volume converter uses exact gallon definitions", async ({ page }) => {
  await open(page, "/calculators/volume-converter");
  await expect(primary(page)).toHaveText("3.785411784 L");
  await page.getByLabel("From").selectOption("impgal");
  await expect(primary(page)).toHaveText("4.54609 L");
});

test.describe("new calculators in other languages", () => {
  test("Arabic mortgage page is right-to-left with amounts kept left-to-right", async ({ page }) => {
    await open(page, "/ar/calculators/mortgage-calculator");
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await expect(primary(page).locator("bdi")).toHaveAttribute("dir", "ltr");
    await expect(primary(page)).toHaveText(/2,547\.62/);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });

  test("German fraction calculator reads a decimal comma", async ({ page }) => {
    await open(page, "/de/calculators/fraction-calculator");
    await field(page, "a").fill("0,5");
    await field(page, "b").fill("1/4");
    await expect(primary(page)).toHaveText("3/4");
  });

  test("Urdu age calculator shows a localized result for the same dates", async ({ page }) => {
    await open(page, "/ur/calculators/age-calculator");
    await field(page, "birth").fill("1990-05-15");
    await field(page, "asOf").fill("2026-10-14");
    await expect(primary(page)).toContainText("36");
    await expect(primary(page)).toContainText("29");
  });

  test("switching language keeps the visitor on the new calculator", async ({ page }) => {
    await open(page, "/calculators/cups-to-grams-converter");
    const root = page.locator("[data-language-switcher]:visible");
    await root.locator("button").click();
    await root.locator('a[hreflang="fr"]').click();
    await expect(page).toHaveURL(/\/fr\/calculators\/cups-to-grams-converter$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  });
});
