/**
 * Crawls a running build and checks every sitemap URL: HTTP 200, a single
 * self-referencing canonical, matching og:url, reciprocal hreflang
 * alternates (each alternate listed in the sitemap and pointing back),
 * html lang/dir, unique titles and descriptions per language, no noindex,
 * valid JSON-LD with breadcrumbs, and every internal link answering 200.
 * Unknown URLs must return 404.
 *
 * Usage: node scripts/seo-audit.mjs http://localhost:3100 https://hourlytosalarycalculator.net
 *        (server to crawl, then the production origin the build was made with)
 */
const [server = "http://localhost:3100", origin = "https://hourlytosalarycalculator.net"] = process.argv.slice(2);
const problems = [];
const fail = (msg) => problems.push(msg);
const local = (url) => url.replace(origin, server);
const attr = (html, re) => [...html.matchAll(re)].map((m) => m[1]);

const sitemap = await (await fetch(`${server}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const sitemapAlternates = new Map();
for (const block of sitemap.split("<url>").slice(1)) {
  const loc = /<loc>([^<]+)<\/loc>/.exec(block)[1];
  sitemapAlternates.set(loc, Object.fromEntries([...block.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]])));
}
const robots = await (await fetch(`${server}/robots.txt`)).text();
if (!robots.includes("Allow: /")) fail("robots.txt does not allow crawling");
if (!robots.includes(`Sitemap: ${origin}/sitemap.xml`)) fail(`robots.txt sitemap line is not ${origin}/sitemap.xml`);
if (urls.some((u) => !u.startsWith(origin))) fail("sitemap contains URLs outside the production origin");
if (new Set(urls).size !== urls.length) fail("sitemap has duplicate URLs");

const titles = new Map();
const descriptions = new Map();
const pageAlternates = new Map();
const links = new Set();
for (const url of urls) {
  const response = await fetch(local(url), { redirect: "manual" });
  if (response.status !== 200) {
    fail(`${url}: HTTP ${response.status}`);
    continue;
  }
  const html = await response.text();
  const canonicals = attr(html, /<link rel="canonical" href="([^"]+)"/g);
  if (canonicals.length !== 1 || canonicals[0] !== url) fail(`${url}: canonical ${canonicals.join(", ")}`);
  const og = attr(html, /<meta property="og:url" content="([^"]+)"/g)[0];
  if (og !== url) fail(`${url}: og:url ${og}`);
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) fail(`${url}: noindex`);
  const lang = /<html[^>]* lang="([^"]+)"/.exec(html)?.[1];
  const dir = /<html[^>]* dir="([^"]+)"/.exec(html)?.[1];
  const segment = new URL(url).pathname.split("/")[1];
  const expectedLang = ["ur", "es", "fr", "de", "ar"].includes(segment) ? segment : "en";
  if (lang !== expectedLang) fail(`${url}: html lang ${lang}`);
  if (dir !== (["ur", "ar"].includes(expectedLang) ? "rtl" : "ltr")) fail(`${url}: dir ${dir}`);
  const title = /<title>([^<]*)<\/title>/.exec(html)?.[1];
  const description = attr(html, /<meta name="description" content="([^"]*)"/g)[0];
  if (!title || !description) fail(`${url}: missing title or description`);
  const key = (v) => `${expectedLang}|${v}`;
  if (titles.has(key(title))) fail(`${url}: duplicate title with ${titles.get(key(title))}`);
  if (descriptions.has(key(description))) fail(`${url}: duplicate description with ${descriptions.get(key(description))}`);
  titles.set(key(title), url);
  descriptions.set(key(description), url);
  if ((html.match(/<h1[\s>]/g) ?? []).length !== 1) fail(`${url}: expected one h1`);
  const alternates = Object.fromEntries([...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]));
  pageAlternates.set(url, alternates);
  if (alternates[expectedLang] !== url) fail(`${url}: hreflang does not include itself`);
  if (!alternates["x-default"]) fail(`${url}: no x-default`);
  if (JSON.stringify(alternates) !== JSON.stringify(sitemapAlternates.get(url))) fail(`${url}: page and sitemap alternates differ`);
  const jsonLd = attr(html, /<script type="application\/ld\+json">([^<]*)<\/script>/g);
  for (const block of jsonLd) {
    try {
      JSON.parse(block);
    } catch {
      fail(`${url}: invalid JSON-LD`);
    }
  }
  if (new URL(url).pathname.split("/").filter(Boolean).length > (expectedLang === "en" ? 0 : 1) && !jsonLd.some((b) => b.includes('"BreadcrumbList"'))) fail(`${url}: no BreadcrumbList`);
  for (const href of attr(html, /<a [^>]*href="(\/[^"#]*)"/g)) links.add(href);
}
// Reciprocity: every alternate is itself a page that lists the same alternates.
for (const [url, alternates] of pageAlternates) {
  for (const [lang, href] of Object.entries(alternates)) {
    if (lang === "x-default") continue;
    if (!pageAlternates.has(href)) fail(`${url}: alternate ${href} is not in the sitemap`);
    else if (JSON.stringify(pageAlternates.get(href)) !== JSON.stringify(alternates)) fail(`${url}: alternate ${href} is not reciprocal`);
  }
}
for (const href of links) {
  const status = (await fetch(server + href, { redirect: "manual" })).status;
  if (status !== 200) fail(`internal link ${href}: HTTP ${status}`);
}
for (const path of ["/calculators/not-a-tool", "/ar/categories/none", "/xx", "/es/page-not-found"]) {
  const status = (await fetch(server + path)).status;
  if (status !== 404) fail(`${path}: expected 404, got ${status}`);
}
console.log(`Checked ${urls.length} sitemap URLs and ${links.size} distinct internal links.`);
console.log(problems.length ? `${problems.length} problem(s):\n${problems.slice(0, 80).join("\n")}` : "No problems found.");
process.exitCode = problems.length ? 1 : 0;
