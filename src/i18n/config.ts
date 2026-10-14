/** Supported interface languages. English is the default and uses unprefixed URLs. */
export const LOCALES = ["en", "ur", "es", "fr", "de", "ar"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export interface LocaleInfo {
  /** Name in the language itself, shown in the language selector. */
  nativeName: string;
  englishName: string;
  dir: "ltr" | "rtl";
  /**
   * BCP 47 tag for Intl formatting. Arabic and Urdu use Latin digits (nu-latn)
   * so results match what visitors type and what formulas show, and so server
   * and browser output are identical.
   */
  intl: string;
  /** Open Graph locale. */
  og: string;
}

export const LOCALE_INFO: Record<Locale, LocaleInfo> = {
  en: { nativeName: "English", englishName: "English", dir: "ltr", intl: "en-US", og: "en_US" },
  ur: { nativeName: "اردو", englishName: "Urdu", dir: "rtl", intl: "ur-PK-u-nu-latn", og: "ur_PK" },
  es: { nativeName: "Español", englishName: "Spanish", dir: "ltr", intl: "es-ES", og: "es_ES" },
  fr: { nativeName: "Français", englishName: "French", dir: "ltr", intl: "fr-FR", og: "fr_FR" },
  de: { nativeName: "Deutsch", englishName: "German", dir: "ltr", intl: "de-DE", og: "de_DE" },
  ar: { nativeName: "العربية", englishName: "Arabic", dir: "rtl", intl: "ar-u-nu-latn", og: "ar_AR" },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/** Cookie that stores a visitor's manually chosen language. */
export const LOCALE_COOKIE = "NEXT_LOCALE";
