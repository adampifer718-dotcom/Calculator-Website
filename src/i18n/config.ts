/** Supported interface languages. English is the default and uses unprefixed URLs. */
export const LOCALES = ["en", "ur", "es", "fr", "de", "ar", "it", "pt", "nl"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export interface LocaleInfo {
  /** Name in the language itself, shown in the language selector. */
  nativeName: string;
  englishName: string;
  dir: "ltr" | "rtl";
  /** BCP 47 language tag for lang and hreflang attributes ("pt-PT" for European Portuguese served under /pt). */
  lang: string;
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
  en: { nativeName: "English", englishName: "English", dir: "ltr", lang: "en", intl: "en-US", og: "en_US" },
  ur: { nativeName: "اردو", englishName: "Urdu", dir: "rtl", lang: "ur", intl: "ur-PK-u-nu-latn", og: "ur_PK" },
  es: { nativeName: "Español", englishName: "Spanish", dir: "ltr", lang: "es", intl: "es-ES", og: "es_ES" },
  fr: { nativeName: "Français", englishName: "French", dir: "ltr", lang: "fr", intl: "fr-FR", og: "fr_FR" },
  de: { nativeName: "Deutsch", englishName: "German", dir: "ltr", lang: "de", intl: "de-DE", og: "de_DE" },
  ar: { nativeName: "العربية", englishName: "Arabic", dir: "rtl", lang: "ar", intl: "ar-u-nu-latn", og: "ar_AR" },
  it: { nativeName: "Italiano", englishName: "Italian", dir: "ltr", lang: "it", intl: "it-IT", og: "it_IT" },
  pt: { nativeName: "Português", englishName: "Portuguese (Portugal)", dir: "ltr", lang: "pt-PT", intl: "pt-PT", og: "pt_PT" },
  nl: { nativeName: "Nederlands", englishName: "Dutch", dir: "ltr", lang: "nl", intl: "nl-NL", og: "nl_NL" },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/** Cookie that stores a visitor's manually chosen language. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

/**
 * Text for the "available in your language" suggestion, written in the
 * suggested language itself so visitors can read it before switching.
 */
export const LOCALE_SUGGESTION: Record<Locale, { prompt: string; action: string; dismiss: string }> = {
  en: { prompt: "This page is also available in English.", action: "Switch to English", dismiss: "No thanks" },
  ur: { prompt: "یہ صفحہ اردو میں بھی دستیاب ہے۔", action: "اردو میں دیکھیں", dismiss: "نہیں، شکریہ" },
  es: { prompt: "Esta página también está disponible en español.", action: "Ver en español", dismiss: "No, gracias" },
  fr: { prompt: "Cette page est aussi disponible en français.", action: "Voir en français", dismiss: "Non merci" },
  de: { prompt: "Diese Seite gibt es auch auf Deutsch.", action: "Auf Deutsch ansehen", dismiss: "Nein, danke" },
  ar: { prompt: "هذه الصفحة متاحة أيضًا باللغة العربية.", action: "عرض بالعربية", dismiss: "لا، شكرًا" },
  it: { prompt: "Questa pagina è disponibile anche in italiano.", action: "Passa all’italiano", dismiss: "No, grazie" },
  pt: { prompt: "Esta página também está disponível em português.", action: "Ver em português", dismiss: "Não, obrigado" },
  nl: { prompt: "Deze pagina is ook beschikbaar in het Nederlands.", action: "Bekijk in het Nederlands", dismiss: "Nee, bedankt" },
};
