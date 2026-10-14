import type { NextConfig } from "next";

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
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [{ source: "/categories", destination: "/calculators", permanent: true }];
  },
};

export default nextConfig;
