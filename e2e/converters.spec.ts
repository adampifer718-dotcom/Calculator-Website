import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const LOCALES = [
  { prefix: "", dir: "ltr" },
  { prefix: "/ur", dir: "rtl" },
  { prefix: "/es", dir: "ltr" },
  { prefix: "/fr", dir: "ltr" },
  { prefix: "/de", dir: "ltr" },
  { prefix: "/ar", dir: "rtl" },
] as const;

/** Navigate and wait until the page is hydrated, so typed input is not reset. */
async function open(page: import("@playwright/test").Page, path: string) {
  await page.goto(path);
  await page.waitForLoadState("networkidle");
}

/** The big result number of the first converter widget on the page. */
const result = (page: import("@playwright/test").Page) => page.locator('[aria-live="polite"] p.text-3xl').first();

test.describe("unit converters directory", () => {
  test("search finds converters by name and by unit symbol", async ({ page }) => {
    await open(page, "/unit-converters");
    await expect(page.locator("h1")).toHaveText("Unit converters");
    const search = page.getByRole("searchbox", { name: "Search converters and units" });
    await search.fill("psi");
    await expect(page.locator("[data-converter-results] a").first()).toContainText("Pressure Converter");
    await search.fill("kWh");
    await expect(page.locator("[data-converter-results]")).toContainText("Energy Converter");
    await search.fill("henry");
    await expect(page.locator("[data-converter-results]")).toContainText("Inductance Converter");
    await search.fill("zzzxq");
    await expect(page.getByText(/No converters match/)).toBeVisible();
    await page.getByRole("button", { name: "Clear search" }).click();
    await expect(search).toHaveValue("");
  });

  test("category grid jumps to its group and every converter link opens", async ({ page }) => {
    await open(page, "/unit-converters");
    await page.getByRole("link", { name: /^Electricity/ }).first().click();
    await expect(page).toHaveURL(/#electricity-converters$/);
    await expect(page.locator("#electricity-converters")).toContainText("Capacitance Converter");
    await page.locator("#electricity-converters").getByRole("link", { name: /Capacitance Converter/ }).click();
    await expect(page).toHaveURL(/\/unit-converters\/capacitance-converter$/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Capacitance Converter");
  });

  test("existing converters link to their calculator pages instead of duplicates", async ({ page }) => {
    await open(page, "/unit-converters");
    await expect(page.locator("#common-converters").getByRole("link", { name: /Length Converter/ })).toHaveAttribute("href", "/calculators/length-converter");
    expect((await page.request.get("/unit-converters/length-converter")).status()).toBe(404);
  });

  test("quick converter switches measurement and converts", async ({ page }) => {
    await open(page, "/unit-converters");
    await page.getByLabel("Measurement").selectOption("pressure");
    const quick = page.locator('section[aria-labelledby="quick-heading"]');
    await quick.getByLabel("Amount").fill("1");
    await quick.getByLabel("From", { exact: true }).selectOption("bar");
    await quick.getByLabel("To", { exact: true }).selectOption("psi");
    await expect(quick.locator("p.text-3xl")).toContainText("14.503774");
  });
});

test.describe("converter pages", () => {
  test("convert, swap, clear and copy on a dedicated page", async ({ page, context, browserName }) => {
    await open(page, "/unit-converters/pressure-converter");
    await expect(page.getByLabel("From", { exact: true })).toHaveValue("bar");
    await expect(page.getByLabel("To", { exact: true })).toHaveValue("psi");
    await page.getByLabel("Amount").fill("2.5");
    await expect(result(page)).toContainText("36.259434");
    await page.getByRole("button", { name: "Swap units" }).click();
    await expect(page.getByLabel("From", { exact: true })).toHaveValue("psi");
    await expect(result(page)).toContainText("0.17236893");
    if (browserName === "chromium") {
      await context.grantPermissions(["clipboard-read", "clipboard-write"]);
      await page.getByRole("button", { name: "Copy result" }).click();
      await expect(page.getByRole("button", { name: "Copied" })).toBeVisible();
    }
    await page.getByRole("button", { name: "Clear" }).click();
    await expect(page.getByText("Enter an amount to see the result.")).toBeVisible();
  });

  test("accepts fractions and scientific notation, rejects text and impossible values", async ({ page }) => {
    await open(page, "/unit-converters/energy-converter?from=kwh&to=j");
    await page.getByLabel("Amount").fill("1/2");
    await expect(result(page)).toContainText("1,800,000");
    await page.getByLabel("Amount").fill("3e-3");
    await expect(result(page)).toContainText("10,800");
    await page.getByLabel("Amount").fill("abc");
    await expect(page.getByText(/Enter a number/)).toBeVisible();
    await open(page, "/unit-converters/fuel-consumption-converter");
    await page.getByLabel("Amount").fill("0");
    await expect(page.locator("[aria-invalid=true]")).toHaveCount(1);
  });

  test("temperature interval, reciprocal fuel units and wavelength use the right formulas", async ({ page }) => {
    await open(page, "/unit-converters/fuel-consumption-converter?from=mpgus&to=l100km&value=30");
    await expect(result(page)).toContainText("7.8404861");
    await open(page, "/unit-converters/temperature-interval-converter?from=c&to=f&value=10");
    await expect(result(page)).toContainText("18");
    await open(page, "/unit-converters/frequency-wavelength-converter?from=mhz&to=m&value=100");
    await expect(result(page)).toContainText("2.9979246");
  });

  test("units of different quantities are never offered together", async ({ page }) => {
    await open(page, "/unit-converters/sound-converter");
    const from = page.getByLabel("From", { exact: true });
    const to = page.getByLabel("To", { exact: true });
    await from.selectOption("db");
    const targets = await to.locator("option").evaluateAll((options) => options.map((o) => (o as HTMLOptionElement).value));
    expect(targets).not.toContain("pa");
  });

  test("currency converter is a clearly labelled manual-rate tool", async ({ page }) => {
    await open(page, "/unit-converters/currency-converter");
    await expect(page.getByText(/automatic exchange rates are not active/)).toBeVisible();
    await expect(page.getByText("Enter the exchange rate to convert.")).toBeVisible();
    await page.getByLabel("Exchange rate").fill("0.9");
    await expect(page.locator("p.text-3xl")).toContainText("90");
  });

  test("case and number base converters work", async ({ page }) => {
    await open(page, "/unit-converters/case-converter");
    await page.getByLabel("Your text").fill("hello world");
    await page.getByText("UPPER CASE", { exact: true }).click();
    await expect(page.getByLabel("Converted text")).toHaveValue("HELLO WORLD");
    await open(page, "/unit-converters/number-base-converter");
    await page.getByLabel("Number", { exact: true }).fill("255");
    await expect(page.locator("[data-base-value]").first()).toHaveText("11111111");
  });

  test("converter page is accessible and has no horizontal scroll", async ({ page }) => {
    for (const path of ["/unit-converters", "/unit-converters/frequency-wavelength-converter", "/ar/unit-converters/pressure-converter"]) {
      await open(page, path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow, path).toBeLessThanOrEqual(0);
      const axe = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
      expect(axe.violations.map((v) => v.id), path).toEqual([]);
    }
  });
});

test.describe("converters in every language", () => {
  for (const { prefix, dir } of LOCALES) {
    test(`directory and a converter page work in ${prefix || "/en"}`, async ({ page }) => {
      await open(page, `${prefix}/unit-converters`);
      await expect(page.locator("html")).toHaveAttribute("dir", dir);
      await expect(page.locator("h1")).toHaveCount(1);
      await open(page, `${prefix}/unit-converters/pressure-converter`);
      await expect(page.locator("html")).toHaveAttribute("dir", dir);
      const hreflangs = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((links) => links.map((l) => l.getAttribute("hreflang")));
      expect(hreflangs).toEqual(expect.arrayContaining(["en", "ur", "es", "fr", "de", "ar", "x-default"]));
      await page.getByRole("textbox").first().fill("1");
      // 1 bar = 14.503774 psi in every language (locale separators differ).
      await expect(result(page)).toContainText(/14[.,٫]503774/);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(0);
    });
  }
});
