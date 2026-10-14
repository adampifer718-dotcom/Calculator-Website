import { defineRouting } from "next-intl/routing";
import { DEFAULT_LOCALE, LOCALES } from "./config";

/**
 * English is served without a prefix (/calculators/...); other languages use
 * /ur, /es, /fr, /de and /ar. The language is never changed automatically
 * from the browser or IP address (localeDetection: false); the visitor's
 * manual choice is remembered by the language selector and src/proxy.ts.
 */
export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: "as-needed",
  localeDetection: false,
  localeCookie: false,
  // hreflang alternates are emitted in page metadata, only for pages that really exist.
  alternateLinks: false,
});
