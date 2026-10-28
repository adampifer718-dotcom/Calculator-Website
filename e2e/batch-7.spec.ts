import { expect, test, type Page } from "@playwright/test";

const results = (page: Page) => page.locator('section[aria-labelledby="results-heading"]');
const primary = (page: Page) => results(page).locator("[aria-live] p").nth(1);
/** The big result number of a linear converter widget. */
const converterResult = (page: Page) => page.locator('[aria-live="polite"] p.text-3xl').first();
const toolResult = (page: Page) => page.locator("[data-tool-result]").first();
const toolValues = (page: Page) => page.locator("[data-tool-value]");

async function open(page: Page, path: string) {
  await page.goto(path);
  await page.waitForLoadState("networkidle");
}

const BATCH_7 = [
  "tdee-calculator",
  "due-date-calculator",
  "body-fat-calculator",
  "calories-burned-calculator",
  "swim-pace-calculator",
  "punnett-square-calculator",
  "dna-concentration-calculator",
  "percent-yield-calculator",
  "buffer-ph-calculator",
  "linear-regression-calculator",
  "wind-turbine-calculator",
  "car-co2-calculator",
  "coffee-ratio-calculator",
  "bakers-percentage-calculator",
  "roofing-calculator",
  "stair-calculator",
  "npv-calculator",
  "subnet-calculator",
  "password-entropy-calculator",
  "battery-life-calculator",
];

test("every batch-7 calculator renders a default result without errors", async ({ page }) => {
  for (const slug of BATCH_7) {
    await open(page, `/calculators/${slug}`);
    await expect(page.locator("h1"), slug).toHaveCount(1);
    await expect(primary(page), slug).not.toHaveText(/^\s*(—|-)?\s*$/);
    await expect(page.locator("[aria-invalid=true]"), slug).toHaveCount(0);
  }
});

test("review-flagged batch-7 calculators show their disclaimers", async ({ page }) => {
  for (const slug of ["tdee-calculator", "due-date-calculator", "body-fat-calculator", "calories-burned-calculator", "stair-calculator", "npv-calculator", "password-entropy-calculator"]) {
    await open(page, `/calculators/${slug}`);
    await expect(page.getByText(/professionally reviewed/i).first(), slug).toBeVisible();
  }
});

test.describe("batch-7 unit converters", () => {
  test("dBm, parts per million and paper weight convert", async ({ page }) => {
    await open(page, "/unit-converters/dbm-converter");
    // 20 dBm = 10^(20/10) mW = 100 mW
    await expect(converterResult(page)).toContainText("100");
    await open(page, "/unit-converters/ppm-converter");
    // 0.5 % = 5,000 ppm
    await expect(converterResult(page)).toContainText("5,000");
    await open(page, "/unit-converters/paper-weight-converter");
    // 20 lb bond ≈ 75.19 g/m²
    await expect(converterResult(page)).toContainText("75.19");
  });

  test("Base64 and URL encoders round-trip", async ({ page }) => {
    await open(page, "/unit-converters/base64-converter");
    await expect(toolResult(page)).toHaveValue("SGVsbG8sIHdvcmxkIQ==");
    await page.getByLabel("Direction").selectOption("decode");
    await page.getByRole("textbox", { name: "Base64", exact: true }).fill("SGkh");
    await expect(toolResult(page)).toHaveValue("Hi!");
    await open(page, "/unit-converters/url-encoder");
    await expect(toolResult(page)).toHaveValue("caf%C3%A9%20%26%20cr%C3%A8me%3F");
  });

  test("tire sizes, fractions and paper sizes convert", async ({ page }) => {
    await open(page, "/unit-converters/tire-size-converter");
    // 235/40R18 vs 225/45R17: 645.2 ÷ 634.3 − 1 = +1.72 %
    await expect(toolResult(page)).toContainText("1.72");
    await open(page, "/unit-converters/decimal-to-fraction-converter");
    await expect(toolValues(page).first()).toHaveText("11/16");
    await open(page, "/unit-converters/paper-size-converter");
    await expect(toolValues(page).first()).toContainText("210 × 297");
    await expect(toolValues(page).nth(4)).toContainText("2,480 × 3,508");
  });
});
