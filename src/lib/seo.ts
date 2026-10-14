import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALE_INFO, type Locale } from "@/i18n/config";
import { languageAlternates, localizePath } from "@/i18n/paths";
import { SITE } from "./site";

/**
 * Page metadata with a self-referencing canonical URL, matching Open Graph
 * and Twitter tags, and reciprocal hreflang alternates (plus x-default) for
 * every locale in which the same page exists.
 */
export function pageMetadata({
  locale,
  title,
  description,
  path,
  locales,
  absoluteTitle = false,
}: {
  locale: Locale;
  title: string;
  description: string;
  /** Unlocalized path, e.g. "/calculators/roi-calculator". */
  path: string;
  /** Locales in which this page exists. */
  locales: readonly Locale[];
  absoluteTitle?: boolean;
}): Metadata {
  const url = localizePath(locale, path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path, locales.includes(DEFAULT_LOCALE) ? locales : [...locales]) },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: LOCALE_INFO[locale].og,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => LOCALE_INFO[l].og),
      title,
      description,
      url,
    },
    twitter: { card: "summary", title, description },
  };
}
