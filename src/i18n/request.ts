import { getRequestConfig } from "next-intl/server";
import { locale as rootLocale } from "next/root-params";
import { readyLocales } from "@/calculators/localize";
import { DEFAULT_LOCALE, isLocale } from "./config";
import { loadMessages } from "./messages";

/**
 * Reads the locale from the [locale] root segment (next/root-params), so
 * pages stay statically prerendered under Cache Components.
 */
export default getRequestConfig(async () => {
  const value = await rootLocale();
  const locale = isLocale(value) && readyLocales().includes(value) ? value : DEFAULT_LOCALE;
  return { locale, messages: await loadMessages(locale), timeZone: "UTC" };
});
