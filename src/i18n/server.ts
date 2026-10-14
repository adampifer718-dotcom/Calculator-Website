import { locale as rootLocale } from "next/root-params";
import { notFound } from "next/navigation";
import { DEFAULT_LOCALE, isLocale, type Locale } from "./config";
import { readyLocales } from "@/calculators/localize";

async function resolve(): Promise<Locale | undefined> {
  const value = await rootLocale();
  return isLocale(value) && readyLocales().includes(value) ? value : undefined;
}

/** The current page's locale from the [locale] root segment; 404 for unknown or unpublished locales. */
export async function currentLocale(): Promise<Locale> {
  const locale = await resolve();
  if (!locale) notFound();
  return locale;
}

/**
 * Locale for the root layout and its metadata. Never throws: the root layout
 * has no not-found boundary above it, so an unknown locale renders the
 * English shell and the page inside calls notFound() instead.
 */
export async function layoutLocale(): Promise<Locale> {
  return (await resolve()) ?? DEFAULT_LOCALE;
}
