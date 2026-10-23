import { expect, test, type Page } from "@playwright/test";

const results = (page: Page) => page.locator('section[aria-labelledby="results-heading"]');
const primary = (page: Page) => results(page).locator("[aria-live] p").nth(1);
const field = (page: Page, id: string) => page.locator(`[id$="-${id}"]`).first();
/** The big result number of a linear converter widget. */
const converterResult = (page: Page) => page.locator('[aria-live="polite"] p.text-3xl').first();
const toolValues = (page: Page) => page.locator("[data-tool-value]");

async function open(page: Page, path: string) {
  await page.goto(path);
  await page.waitForLoadState("networkidle");
}

const BATCH_6 = [
  "area-calculator",
  "ratio-calculator",
  "rounding-calculator",
  "triangle-calculator",
  "quartile-calculator",
  "correlation-coefficient-calculator",
  "bayes-theorem-calculator",
  "projectile-motion-calculator",
  "force-calculator",
  "momentum-calculator",
  "potential-energy-calculator",
  "molar-mass-calculator",
  "ph-calculator",
  "race-time-predictor",
  "hours-calculator",
  "overtime-calculator",
  "depreciation-calculator",
  "cap-rate-calculator",
  "drywall-calculator",
  "gravel-calculator",
];

test("every batch-6 calculator renders a default result without errors", async ({ page }) => {
  for (const slug of BATCH_6) {
    await open(page, `/calculators/${slug}`);
    await expect(page.locator("h1"), slug).toHaveCount(1);
    await expect(primary(page), slug).not.toHaveText(/^\s*(—|-)?\s*$/);
    await expect(page.locator("[aria-invalid=true]"), slug).toHaveCount(0);
  }
});

test("molar mass calculator parses formulas with hydrates and brackets", async ({ page }) => {
  await open(page, "/calculators/molar-mass-calculator");
  await expect(primary(page)).toContainText("180.156");
  await field(page, "formula").fill("CuSO4·5H2O");
  await expect(primary(page)).toContainText("249.677");
  await field(page, "formula").fill("Xy2");
  await expect(page.locator("[aria-invalid=true]")).toHaveCount(1);
});

test("rounding calculator rounds decimals exactly", async ({ page }) => {
  await open(page, "/calculators/rounding-calculator");
  await expect(primary(page)).toHaveText(/1,?234\.57/);
  await field(page, "number").fill("2.5");
  await field(page, "places").fill("0");
  await field(page, "method").selectOption("halfEven");
  await expect(primary(page)).toHaveText(/^\s*2\s*$/);
});

test("hours calculator handles breaks and overnight shifts", async ({ page }) => {
  await open(page, "/calculators/hours-calculator");
  await expect(primary(page)).toContainText("8:00");
  await field(page, "start").fill("22:00");
  await field(page, "end").fill("6:30");
  await field(page, "breakMinutes").fill("0");
  await expect(primary(page)).toContainText("8:30");
});

test("overtime calculator pays hours over the threshold at the multiplier", async ({ page }) => {
  await open(page, "/calculators/overtime-calculator");
  // 40 × $22 + 6 × $22 × 1.5 = $1,078
  await expect(primary(page)).toContainText("1,078.00");
  await field(page, "hours").fill("38");
  await expect(primary(page)).toContainText("836.00");
});

test("ratio calculator simplifies decimal ratios", async ({ page }) => {
  await open(page, "/calculators/ratio-calculator");
  await expect(primary(page)).toContainText("3 : 4");
});

test.describe("new unit converters", () => {
  test("wire gauge, blood sugar, water hardness and astronomical distance convert", async ({ page }) => {
    await open(page, "/unit-converters/wire-gauge-converter");
    // π/4 × (0.127 × 92^(24/39))² = 3.30877 mm²
    await expect(converterResult(page)).toContainText("3.30877");
    await open(page, "/unit-converters/blood-sugar-converter");
    await expect(converterResult(page)).toContainText("5.55074");
    await open(page, "/unit-converters/water-hardness-converter");
    await expect(converterResult(page)).toContainText("171.18");
    await open(page, "/unit-converters/astronomical-distance-converter");
    await expect(converterResult(page)).toContainText("9,460,730,472,580.8");
  });

  test("Roman numerals convert both ways and reject non-standard numerals", async ({ page }) => {
    await open(page, "/unit-converters/roman-numeral-converter");
    await expect(page.locator("[data-tool-result]")).toHaveText("MMXXVI");
    await page.getByLabel("Number or Roman numeral").fill("mcmxciv");
    await expect(page.locator("[data-tool-result]")).toHaveText("1,994");
    await page.getByLabel("Number or Roman numeral").fill("IIII");
    await expect(page.getByText("This is not a standard Roman numeral", { exact: false })).toBeVisible();
  });

  test("Unix timestamps convert to ISO dates and back", async ({ page }) => {
    await open(page, "/unit-converters/unix-timestamp-converter");
    await expect(toolValues(page).first()).toHaveText("2023-11-14T22:13:20Z");
    await page.getByLabel("Date and time", { exact: true }).fill("2026-01-01T00:00:00");
    await expect(page.getByText("1767225600", { exact: true })).toBeVisible();
    await expect(page.getByText("1767225600000", { exact: true })).toBeVisible();
  });

  test("colors, Morse code, text bytes and coordinates convert", async ({ page, context, browserName }) => {
    await open(page, "/unit-converters/color-converter");
    await expect(toolValues(page).nth(1)).toHaveText("rgb(30, 122, 90)");
    await page.getByLabel("Color", { exact: true }).fill("hsl(120, 100%, 25%)");
    await expect(toolValues(page).first()).toHaveText("#008000");

    await open(page, "/unit-converters/morse-code-translator");
    await expect(page.locator("[data-tool-result]")).toHaveValue("... --- ...");
    await page.getByLabel("Text or Morse code").fill(".... ..");
    await expect(page.locator("[data-tool-result]")).toHaveValue("HI");

    await open(page, "/unit-converters/text-to-binary-converter");
    await expect(page.locator("[data-tool-result]")).toHaveValue("01001000 01101001 00100001");
    if (browserName === "chromium") {
      await context.grantPermissions(["clipboard-read", "clipboard-write"]);
      await page.getByRole("button", { name: "Copy result" }).click();
      await expect(page.getByRole("button", { name: "Copied" })).toBeVisible();
    }

    await open(page, "/unit-converters/coordinate-converter");
    await expect(toolValues(page).nth(1)).toHaveText("48° 51′ 30.24″ N, 2° 17′ 40.20″ E");
    await page.getByLabel("Latitude").fill("33°52'7.7\"S");
    await expect(toolValues(page).first()).toContainText("-33.868806");
    await page.getByLabel("Latitude").fill("95");
    await expect(page.locator("[aria-invalid=true]")).toHaveCount(1);
  });

  test("the directory lists and finds the new converters", async ({ page }) => {
    await open(page, "/unit-converters");
    const search = page.getByRole("searchbox", { name: "Search converters and units" });
    await search.fill("morse");
    await expect(page.locator("[data-converter-results] a").first()).toContainText("Morse Code Translator");
    await search.fill("AWG");
    await expect(page.locator("[data-converter-results]")).toContainText("Wire Gauge Converter");
  });
});
