import { expect, test, type Page } from "@playwright/test";

const results = (page: Page) => page.locator('section[aria-labelledby="results-heading"]');
const primary = (page: Page) => results(page).locator("[aria-live] p").nth(1);

async function open(page: Page, path: string) {
  await page.goto(path);
  await page.waitForLoadState("networkidle");
}

const BATCH_8 = [
  "dna-to-mrna-calculator",
  "cell-count-calculator",
  "protein-concentration-calculator",
  "feed-conversion-ratio-calculator",
  "shannon-diversity-calculator",
  "solar-panel-calculator",
  "fertilizer-calculator",
  "shower-water-calculator",
  "food-cost-calculator",
  "abv-calculator",
  "aspect-ratio-calculator",
  "uptime-calculator",
  "oee-calculator",
  "takt-time-calculator",
  "resistor-color-code-calculator",
  "voltage-divider-calculator",
  "waist-to-height-ratio-calculator",
  "body-surface-area-calculator",
  "passer-rating-calculator",
  "era-calculator",
];

const BATCH_8_CONVERTERS = [
  "word-counter",
  "html-entity-encoder",
  "hash-generator",
  "unicode-converter",
  "time-zone-converter",
  "json-formatter",
  "yarn-count-converter",
];

test("every batch-8 calculator renders a default result without errors", async ({ page }) => {
  for (const slug of BATCH_8) {
    await open(page, `/calculators/${slug}`);
    await expect(page.locator("h1"), slug).toHaveCount(1);
    await expect(primary(page), slug).not.toHaveText(/^\s*(—|-)?\s*$/);
    await expect(page.locator("[aria-invalid=true]"), slug).toHaveCount(0);
  }
});

test("medical batch-8 calculators show their disclaimers", async ({ page }) => {
  for (const slug of ["waist-to-height-ratio-calculator", "body-surface-area-calculator"]) {
    await open(page, `/calculators/${slug}`);
    await expect(page.getByText(/professionally reviewed/i).first(), slug).toBeVisible();
  }
});

test("worked defaults match the verified examples", async ({ page }) => {
  await open(page, "/calculators/era-calculator");
  // 3 earned runs in 6⅔ innings: 3 × 9 ÷ 6.6667 = 4.05
  await expect(primary(page)).toContainText("4.05");
  await open(page, "/calculators/resistor-color-code-calculator");
  // yellow–violet–red–gold = 47 × 10² Ω
  await expect(primary(page)).toContainText("4.7 kΩ");
});

test.describe("batch-8 converters and text tools", () => {
  test("each page renders in English and in Arabic (RTL)", async ({ page }) => {
    for (const slug of BATCH_8_CONVERTERS) {
      await open(page, `/unit-converters/${slug}`);
      await expect(page.locator("h1"), slug).toHaveCount(1);
      await expect(page.locator("[aria-invalid=true]"), slug).toHaveCount(0);
      await open(page, `/ar/unit-converters/${slug}`);
      await expect(page.locator("html"), slug).toHaveAttribute("dir", "rtl");
      await expect(page.locator("h1"), slug).toHaveCount(1);
    }
  });

  test("the hash generator computes SHA-256 in the browser", async ({ page }) => {
    await open(page, "/unit-converters/hash-generator");
    await page.locator("textarea").first().fill("abc");
    // FIPS 180-4 example: SHA-256("abc")
    await expect(page.getByText("ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad").first()).toBeVisible();
  });

  test("the JSON formatter reports an error position", async ({ page }) => {
    await open(page, "/unit-converters/json-formatter");
    await page.locator("textarea").first().fill('{"a": 1,}');
    await expect(page.locator("[aria-invalid=true]").first()).toBeVisible();
  });
});
