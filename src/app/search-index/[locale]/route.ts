import { notFound } from "next/navigation";
import { readyLocales } from "@/calculators/localize";
import { searchEntriesFor } from "@/calculators/search-data";
import { converterPagesForLocale } from "@/converters/catalog";
import { isLocale } from "@/i18n/config";
import { loadMessages } from "@/i18n/messages";
import type { SearchEntry } from "@/lib/search";

/** One static search index per language, loaded on demand by the search boxes. */
export function generateStaticParams() {
  return readyLocales().map((locale) => ({ locale }));
}

export async function GET(_request: Request, { params }: RouteContext<"/search-index/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale) || !readyLocales().includes(locale)) notFound();
  const category = (await loadMessages(locale)).converters.nav;
  const calculators = searchEntriesFor(locale);
  // Converter pages (converters served by existing calculators are already listed).
  const converters: SearchEntry[] = converterPagesForLocale(locale).map((c, index) => ({
    slug: c.spec.slug,
    title: c.content.title,
    summary: c.content.summary,
    category,
    categorySlug: "unit-converters",
    collections: [],
    keywords: [...c.content.keywords, ...Object.values(c.content.units)],
    href: c.href,
    popularRank: Number.MAX_SAFE_INTEGER,
    addedOn: c.meta?.updated ?? "",
    order: calculators.length + index,
  }));
  return Response.json([...calculators, ...converters]);
}
