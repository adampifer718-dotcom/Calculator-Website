import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

if (process.argv.includes("build") && !process.env.NEXT_PUBLIC_SITE_URL && !process.env.VERCEL_PROJECT_PRODUCTION_URL) {
  console.warn(
    "\n⚠ NEXT_PUBLIC_SITE_URL is not set. Canonical URLs, the sitemap and structured data will use http://localhost:3000.\n" +
      "  Set it to the production origin, e.g. NEXT_PUBLIC_SITE_URL=https://www.example.com npm run build\n",
  );
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
      { source: "/categories", destination: "/calculators", permanent: true },
      { source: "/collections", destination: "/calculators", permanent: true },
      // Category slugs renamed when the taxonomy was expanded.
      { source: "/categories/salary-and-pay", destination: "/categories/finance", permanent: true },
      { source: "/categories/finance-and-investing", destination: "/categories/finance", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
