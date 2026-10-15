import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { PRODUCTION_ORIGIN, SITE_URL, originProblem } from "./src/lib/site";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Canonical URLs, hreflang, Open Graph, the sitemap and robots.txt all use SITE_URL.
// A Vercel production deployment must use the intended domain; elsewhere a mismatch only warns.
if (process.argv.includes("build")) {
  const problem = originProblem(SITE_URL);
  if (problem && process.env.VERCEL_ENV === "production") {
    throw new Error(`Refusing to build production with site URL ${SITE_URL}: ${problem}. Set NEXT_PUBLIC_SITE_URL=${PRODUCTION_ORIGIN} for Production.`);
  }
  if (problem) console.warn(`\n⚠ Site URL is ${SITE_URL}: ${problem}. Canonical URLs and the sitemap will use it.\n`);
}

const nextConfig: NextConfig = {
  cacheComponents: true,
  // Off so unknown slugs return a real 404 status: with Partial Prefetching the
  // app shell streams (status 200) before notFound() runs. All valid calculator
  // and category URLs are prerendered by generateStaticParams.
  partialPrefetching: false,
  poweredByHeader: false,
  experimental: {
    // 404 page for URLs that match no route at all (the root layout lives under [locale]).
    globalNotFound: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // The non-www host is canonical: www.hourlytosalarycalculator.net/<path> → hourlytosalarycalculator.net/<path>.
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${new URL(PRODUCTION_ORIGIN).host}` }],
        destination: `${PRODUCTION_ORIGIN}/:path*`,
        permanent: true,
      },
      { source: "/categories", destination: "/calculators", permanent: true },
      { source: "/collections", destination: "/calculators", permanent: true },
      // Category slugs renamed when the taxonomy was expanded.
      { source: "/categories/salary-and-pay", destination: "/categories/finance", permanent: true },
      { source: "/categories/finance-and-investing", destination: "/categories/finance", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
