import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

async function sitemapPaths(page: Page): Promise<string[]> {
  const response = await page.request.get("/sitemap.xml");
  expect(response.ok()).toBe(true);
  const xml = await response.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
}

test.describe("published pages", () => {
  // These tests crawl every page in the sitemap.
  test.describe.configure({ timeout: 3_600_000 }); // ~1,200 pages across six languages

  test("sitemap lists only working, indexable, uniquely described pages", async ({ page }) => {
    const paths = await sitemapPaths(page);
    expect(paths.length).toBeGreaterThan(5);
    const titles = new Set<string>();
    const descriptions = new Set<string>();
    for (const path of paths) {
      const response = await page.goto(path);
      expect(response?.status(), path).toBe(200);
      const title = await page.title();
      const description = await page.locator('meta[name="description"]').getAttribute("content");
      const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
      expect(title, path).toBeTruthy();
      expect(description, path).toBeTruthy();
      expect(titles.has(title), `duplicate title on ${path}`).toBe(false);
      expect(descriptions.has(description!), `duplicate description on ${path}`).toBe(false);
      titles.add(title);
      descriptions.add(description!);
      expect(new URL(canonical!).pathname.replace(/\/$/, "") || "/", path).toBe(path.replace(/\/$/, "") || "/");
      expect(await page.locator('meta[property="og:url"]').getAttribute("content"), path).toBe(canonical);
      expect(await page.locator('meta[property="og:title"]').getAttribute("content"), path).toBeTruthy();
      expect(await page.locator('meta[property="og:site_name"]').getAttribute("content"), path).toBe("HourlyToSalaryCalculator.net");
      await expect(page.locator("h1"), path).toHaveCount(1);
      expect(await page.locator('meta[name="robots"][content*="noindex"]').count(), path).toBe(0);
      for (const json of await page.locator('script[type="application/ld+json"]').allTextContents()) {
        expect(() => JSON.parse(json), path).not.toThrow();
      }
    }
  });

  test("robots.txt allows crawling and points to the sitemap", async ({ request }) => {
    const text = await (await request.get("/robots.txt")).text();
    expect(text).toContain("Allow: /");
    expect(text).toMatch(/Sitemap: .*\/sitemap\.xml/);
  });

  test("every internal link on every page resolves", async ({ page }) => {
    const paths = await sitemapPaths(page);
    const checked = new Map<string, number>();
    for (const path of paths) {
      await page.goto(path);
      const hrefs = await page.locator("a[href]").evaluateAll((links) => links.map((a) => (a as HTMLAnchorElement).href));
      for (const href of hrefs) {
        const url = new URL(href);
        if (url.origin !== new URL(page.url()).origin) continue;
        if (url.hash && url.pathname === new URL(page.url()).pathname) {
          const id = decodeURIComponent(url.hash.slice(1));
          if (id) await expect(page.locator(`[id="${id}"]`), `${href} on ${path}`).toHaveCount(1);
          continue;
        }
        // Converter shortcuts only preselect units (?from=&to=); the page itself is what must resolve.
        const target = url.pathname.startsWith("/unit-converters/") || /^\/[a-z]{2}\/unit-converters\//.test(url.pathname) ? url.pathname : url.pathname + url.search;
        if (!checked.has(target)) checked.set(target, (await page.request.get(target)).status());
        expect(checked.get(target), `${target} linked from ${path}`).toBe(200);
      }
    }
  });

  test("unknown calculator and category URLs return 404", async ({ page }) => {
    expect((await page.goto("/calculators/not-a-real-calculator"))?.status()).toBe(404);
    expect((await page.goto("/categories/not-a-real-category"))?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
  });

  test("pages have no horizontal overflow, console errors or axe violations", async ({ page }) => {
    const paths = await sitemapPaths(page);
    const errors: string[] = [];
    page.on("console", (msg) => msg.type() === "error" && errors.push(`${page.url()}: ${msg.text()}`));
    page.on("pageerror", (error) => errors.push(`${page.url()}: ${error.message}`));
    for (const path of paths) {
      await page.goto(path);
      await page.waitForLoadState("networkidle");
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, `horizontal overflow on ${path}`).toBeLessThanOrEqual(0);
      const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"]).analyze();
      expect(
        results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`),
        path,
      ).toEqual([]);
    }
    expect(errors).toEqual([]);
  });
});

test("every calculator page renders a valid default result in every language", async ({ page }) => {
  test.setTimeout(900_000);
  const paths = (await sitemapPaths(page)).filter((p) => /^\/([a-z]{2}\/)?calculators\/./.test(p));
  expect(paths.length).toBeGreaterThanOrEqual(50 * 6);
  for (const path of paths) {
    await page.goto(path);
    const results = page.locator('section[aria-labelledby="results-heading"]');
    await expect(results, path).toBeVisible();
    // A failed evaluation shows the amber "check your inputs" notice instead of a value.
    await expect(results.locator(".border-amber-300"), path).toHaveCount(0);
    await expect(page.locator("[aria-invalid=true]"), path).toHaveCount(0);
  }
});

test("no horizontal scrolling on a 320px-wide phone", async ({ browser }) => {
  test.setTimeout(900_000);
  const context = await browser.newContext({ viewport: { width: 320, height: 640 } });
  const page = await context.newPage();
  for (const path of await sitemapPaths(page)) {
    await page.goto(path);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, path).toBeLessThanOrEqual(0);
  }
  await context.close();
});
