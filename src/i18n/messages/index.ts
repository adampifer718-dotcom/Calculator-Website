import type { Locale } from "../config";
import type { Messages } from "./en";

/**
 * Interface messages per locale, loaded on demand on the server. A locale
 * without a file here falls back to English and stays unpublished.
 */
const LOADERS: Partial<Record<Locale, () => Promise<{ default: Messages }>>> = {
  en: () => import("./en"),
  ur: () => import("./ur"),
  es: () => import("./es"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  ar: () => import("./ar"),
  it: () => import("./it"),
  pt: () => import("./pt"),
  nl: () => import("./nl"),
};

export async function loadMessages(locale: Locale): Promise<Messages> {
  return (await (LOADERS[locale] ?? LOADERS.en!)()).default;
}

/**
 * Locales whose interface messages are fully translated. Kept in sync with
 * the message files by src/i18n/translations.test.ts; a locale is published
 * only when it is listed here (see isLocaleReady).
 */
export const MESSAGE_LOCALES: readonly Locale[] = ["en", "ur", "es", "fr", "de", "ar", "it", "pt", "nl"];
