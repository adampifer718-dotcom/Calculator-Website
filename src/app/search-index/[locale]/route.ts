import { notFound } from "next/navigation";
import { readyLocales } from "@/calculators/localize";
import { searchEntriesFor } from "@/calculators/search-data";
import { isLocale } from "@/i18n/config";

/** One static search index per language, loaded on demand by the search boxes. */
export function generateStaticParams() {
  return readyLocales().map((locale) => ({ locale }));
}

export async function GET(_request: Request, { params }: RouteContext<"/search-index/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale) || !readyLocales().includes(locale)) notFound();
  return Response.json(searchEntriesFor(locale));
}
