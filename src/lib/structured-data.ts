import type { Locale } from "@/i18n/config";
import { absoluteUrl, SITE } from "./site";

export interface Crumb {
  name: string;
  /** Public (already localized) path. */
  href: string;
}

export function breadcrumbJsonLd(crumbs: readonly Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.href),
    })),
  };
}

export function websiteJsonLd(options: { locale: Locale; path: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: absoluteUrl(options.path),
    description: options.description,
    inLanguage: options.locale,
  };
}

export function calculatorJsonLd(options: { name: string; description: string; path: string; category: string; locale: Locale }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    applicationCategory: options.category,
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    isAccessibleForFree: true,
    inLanguage: options.locale,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}

export function itemListJsonLd(name: string, items: readonly { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.href),
    })),
  };
}

/** Serializes JSON-LD safely for inline <script> tags. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
