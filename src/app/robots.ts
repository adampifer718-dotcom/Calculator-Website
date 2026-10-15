import type { MetadataRoute } from "next";
import { SITE_INDEXABLE, absoluteUrl } from "@/lib/site";

/** Production allows crawling and lists the sitemap; Vercel preview deployments disallow everything. */
export default function robots(): MetadataRoute.Robots {
  if (!SITE_INDEXABLE) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
