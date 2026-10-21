import { expect, test, type Page } from "@playwright/test";

/** The language selector visible at the current viewport (full on desktop/tablet, compact on phones). */
function switcher(page: Page) {
  return page.locator("[data-language-switcher]:visible");
}

async function openSwitcher(page: Page) {
  const root = switcher(page);
  await root.locator("button").click();
  const list = root.locator("ul");
  await expect(list).toBeVisible();
  return list;
}

test("language selector is visible, lists native names and marks the active language", async ({ page }) => {
  await page.goto("/");
  await expect(switcher(page)).toHaveCount(1);
  const button = switcher(page).locator("button");
  await expect(button).toHaveAttribute("aria-expanded", "false");
  const list = await openSwitcher(page);
  await expect(button).toHaveAttribute("aria-expanded", "true");
  for (const name of ["English", "اردو", "Español", "Français", "Deutsch", "العربية", "Italiano", "Português", "Nederlands"]) {
    await expect(list.getByRole("link", { name: new RegExp(name) })).toBeVisible();
  }
  await expect(list.locator('[aria-current="true"]')).toHaveAttribute("hreflang", "en");
  await expect(list.locator('a[hreflang="ar"] [dir="rtl"]')).toHaveText("العربية");
  // The dropdown stays inside the viewport.
  const box = await list.boundingBox();
  const width = page.viewportSize()!.width;
  expect(box!.x).toBeGreaterThanOrEqual(0);
  expect(box!.x + box!.width).toBeLessThanOrEqual(width);
});

test("selector is keyboard accessible", async ({ page }) => {
  await page.goto("/calculators");
  const button = switcher(page).locator("button");
  await button.focus();
  await page.keyboard.press("Enter");
  const list = switcher(page).locator("ul");
  await expect(list).toBeVisible();
  await page.keyboard.press("ArrowDown");
  await expect(list.locator("a").first()).toBeFocused();
  await page.keyboard.press("ArrowDown");
  await expect(list.locator("a").nth(1)).toBeFocused();
  await page.keyboard.press("End");
  await expect(list.locator("a").last()).toBeFocused();
  await page.keyboard.press("Home");
  await expect(list.locator("a").first()).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(list).toHaveCount(0);
  await expect(button).toBeFocused();
});

test("switching keeps the equivalent page and remembers the choice", async ({ page, context }) => {
  await page.goto("/calculators/tip-calculator");
  const list = await openSwitcher(page);
  await list.locator('a[hreflang="es"]').click();
  await expect(page).toHaveURL(/\/es\/calculators\/tip-calculator$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
  await expect(page.locator("h1")).toHaveText("Calculadora de propinas");
  const cookies = await context.cookies();
  expect(cookies.find((c) => c.name === "NEXT_LOCALE")?.value).toBe("es");
  // The remembered choice applies when visiting the English homepage root.
  await page.goto("/");
  await expect(page).toHaveURL(/\/es$/);
  // Choosing English again clears the redirect.
  const back = await openSwitcher(page);
  await back.locator('a[hreflang="en"]').click();
  await expect(page).toHaveURL(/\/$/);
  await page.goto("/");
  await expect(page).toHaveURL(/localhost:\d+\/$/);
});

test("switching keeps directory filters and query parameters", async ({ page }) => {
  await page.goto("/calculators?q=loan&sort=az");
  const list = await openSwitcher(page);
  await expect(list.locator('a[hreflang="de"]')).toHaveAttribute("href", "/de/calculators?q=loan&sort=az");
  await list.locator('a[hreflang="de"]').click();
  await expect(page).toHaveURL(/\/de\/calculators\?q=loan&sort=az$/);
  await expect(page.locator("#directory-search")).toHaveValue("loan");
});

for (const locale of ["ar", "ur"] as const) {
  test(`${locale} pages are right-to-left without horizontal overflow`, async ({ page }) => {
    for (const path of ["", "/calculators", "/calculators/tip-calculator", "/categories/finance", "/collections/business", "/about"]) {
      await page.goto(`/${locale}${path}`);
      await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
      await expect(page.locator("html")).toHaveAttribute("lang", locale);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, `${locale}${path}`).toBeLessThanOrEqual(0);
    }
  });
}

test("number inputs stay left-to-right in RTL pages and results match English", async ({ page }) => {
  await page.goto("/ar/calculators/tip-calculator");
  const bill = page.locator('input[id$="-bill"]');
  await expect(bill.locator("xpath=..")).toHaveAttribute("dir", "ltr");
  await bill.fill("80");
  const arabic = (await page.locator("#results-heading ~ div p").nth(1).innerText()).replace(/[^\d.]/g, "");
  await page.goto("/calculators/tip-calculator");
  await page.locator('input[id$="-bill"]').fill("80");
  const english = (await page.locator("#results-heading ~ div p").nth(1).innerText()).replace(/[^\d.]/g, "");
  expect(arabic).toBe(english);
  expect(english).toBe("14.40");
});

test("German accepts a decimal comma and formats results the German way", async ({ page }) => {
  await page.goto("/de/calculators/tip-calculator");
  // Typing before hydration would be overwritten by the form's initial state.
  await page.waitForLoadState("networkidle");
  await page.locator('input[id$="-bill"]').fill("80,50");
  await expect(page.locator("#results-heading ~ div p").nth(1)).toHaveText(/14,49\s\$/);
});

test("localized pages have translated metadata, canonical and reciprocal hreflang", async ({ page }) => {
  await page.goto("/fr/calculators/tip-calculator");
  await expect(page).toHaveTitle(/pourboire/i);
  const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
  expect(canonical).toMatch(/\/fr\/calculators\/tip-calculator$/);
  const alternates = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((links) =>
    Object.fromEntries(links.map((l) => [l.getAttribute("hreflang"), l.getAttribute("href")])),
  );
  expect(Object.keys(alternates).sort()).toEqual(["ar", "de", "en", "es", "fr", "it", "nl", "pt-PT", "ur", "x-default"]);
  await page.goto("/calculators/tip-calculator");
  const english = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((links) =>
    Object.fromEntries(links.map((l) => [l.getAttribute("hreflang"), l.getAttribute("href")])),
  );
  expect(english).toEqual(alternates);
  expect(await page.locator('link[rel="canonical"]').getAttribute("href")).toMatch(/[^/]\/calculators\/tip-calculator$/);
});

test("English URLs, redirects and the /en prefix", async ({ page, request }) => {
  const en = await request.get("/en/about", { maxRedirects: 0 });
  expect(en.status()).toBe(307);
  expect(en.headers().location).toMatch(/\/about$/);
  const legacy = await request.get("/categories/salary-and-pay", { maxRedirects: 0 });
  expect(legacy.status()).toBe(308);
  expect(legacy.headers().location).toMatch(/\/categories\/finance$/);
  expect((await request.get("/xx/calculators")).status()).toBe(404);
  await page.goto("/calculators/roi-calculator");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("search suggestions work in another language", async ({ page, isMobile }) => {
  test.skip(isMobile, "uses the hero search");
  await page.goto("/es");
  await page.locator("#hero-search").fill("propina");
  const option = page.getByRole("option", { name: /Calculadora de propinas/ });
  await expect(option).toBeVisible();
  await option.click();
  await expect(page).toHaveURL(/\/es\/calculators\/tip-calculator$/);
});

test("navigation and related links stay in the visitor's language", async ({ page }) => {
  await page.goto("/de/calculators/tip-calculator");
  const hrefs = await page.locator("main a[href^='/']").evaluateAll((links) => links.map((l) => l.getAttribute("href")!));
  expect(hrefs.length).toBeGreaterThan(5);
  for (const href of hrefs) expect(href, href).toMatch(/^\/de(\/|$)/);
});

test.describe("unknown URLs without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  for (const [path, lang, heading] of [
    ["/calculators/not-a-real-calculator", "en", "Page not found"],
    ["/de/calculators/not-a-real-calculator", "de", "Seite nicht gefunden"],
    ["/ar/categories/not-a-category", "ar", "الصفحة غير موجودة"],
    ["/fr/something/else", "fr", "Page introuvable"],
  ] as const) {
    test(`${path} is a server-rendered 404 in ${lang}`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(404);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page.locator("h1")).toHaveText(heading);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
      // Useful links back into the site, in the same language.
      const links = await page.locator("main a[href]").evaluateAll((as) => as.map((a) => a.getAttribute("href")!));
      expect(links.length).toBeGreaterThan(3);
      if (lang !== "en") for (const href of links) expect(href).toMatch(new RegExp(`^/${lang}(/|$)`));
    });
  }
});

test("German significant figures accept a decimal comma", async ({ page }) => {
  await page.goto("/de/calculators/significant-figures-calculator");
  await page.waitForLoadState("networkidle");
  await page.locator('input[id$="-number"]').fill("0,004050");
  await expect(page.locator("#results-heading ~ div p").nth(1)).toHaveText("4");
});

test("French data lists accept decimal commas", async ({ page }) => {
  await page.goto("/fr/calculators/mean-median-mode-calculator");
  await page.waitForLoadState("networkidle");
  await page.locator('textarea[id$="-data"]').fill("1,5; 2,5; 3,5");
  await expect(page.locator("#results-heading ~ div p").nth(1)).toHaveText("2,5");
});

for (const { locale, lang, h1, bill, tip } of [
  { locale: "it", lang: "it", h1: /mancia/i, bill: "80,50", tip: /14,49\sUSD/ },
  { locale: "pt", lang: "pt-PT", h1: /gorjeta/i, bill: "80,50", tip: /14,49\sUS\$/ },
  { locale: "nl", lang: "nl", h1: /fooi/i, bill: "80,50", tip: /US\$\s14,49/ },
] as const) {
  test(`${locale}: translated calculator accepts a decimal comma and matches the English result`, async ({ page }) => {
    await page.goto(`/${locale}/calculators/tip-calculator`);
    await page.waitForLoadState("networkidle");
    await expect(page.locator("html")).toHaveAttribute("lang", lang);
    await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
    await expect(page.locator("h1")).toHaveText(h1);
    await page.locator('input[id$="-bill"]').fill(bill);
    await expect(page.locator("#results-heading ~ div p").nth(1)).toHaveText(tip);
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical).toMatch(new RegExp(`/${locale}/calculators/tip-calculator$`));
  });

  test(`${locale}: switching from English keeps the page, filters and the remembered choice`, async ({ page, context }) => {
    await page.goto("/calculators?q=loan&sort=az");
    const list = await openSwitcher(page);
    const link = list.locator(`a[hreflang="${lang}"]`);
    await expect(link).toHaveAttribute("href", `/${locale}/calculators?q=loan&sort=az`);
    await link.click();
    await expect(page).toHaveURL(new RegExp(`/${locale}/calculators\\?q=loan&sort=az$`));
    await expect(page.locator("#directory-search")).toHaveValue("loan");
    expect((await context.cookies()).find((c) => c.name === "NEXT_LOCALE")?.value).toBe(locale);
  });
}

test("desktop header fits every language without clipping the search placeholder", async ({ browser }) => {
  test.setTimeout(240_000);
  for (const width of [1024, 1280]) {
    const context = await browser.newContext({ viewport: { width, height: 800 } });
    const page = await context.newPage();
    for (const prefix of ["", "/ur", "/es", "/fr", "/de", "/ar", "/it", "/pt", "/nl"]) {
      await page.goto(`${prefix}/calculators`);
      await page.evaluate(() => document.fonts.ready);
      const fit = await page.evaluate(() => {
        const row = document.querySelector("header > div")!;
        const input = document.querySelector<HTMLInputElement>("#header-search");
        let placeholderFits = true;
        if (input && input.offsetParent) {
          const style = getComputedStyle(input);
          const ctx = document.createElement("canvas").getContext("2d")!;
          ctx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
          const room = input.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
          placeholderFits = ctx.measureText(input.placeholder).width <= room;
        }
        return { rowOverflow: row.scrollWidth - row.clientWidth, pageOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth, placeholderFits };
      });
      expect(fit, `${prefix || "/en"} at ${width}px`).toEqual({ rowOverflow: 0, pageOverflow: 0, placeholderFits: true });
    }
    await context.close();
  }
});
