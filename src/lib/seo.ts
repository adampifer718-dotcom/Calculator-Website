import type { Metadata } from "next";
import { SITE } from "./site";

/**
 * Page metadata with a canonical URL and matching Open Graph / Twitter tags.
 * Page-level openGraph replaces the layout's, so shared fields are repeated here.
 */
export function pageMetadata({ title, description, path, absoluteTitle = false }: { title: string; description: string; path: string; absoluteTitle?: boolean }): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: SITE.name, locale: "en_US", title, description, url: path },
    twitter: { card: "summary", title, description },
  };
}
