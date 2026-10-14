import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { calculatorLocales, calculatorsForLocale, getLocalizedCalculator } from "@/calculators/localize";
import { calculatorPath } from "@/calculators/registry";
import { CalculatorPage } from "@/components/calculator/CalculatorPage";
import { isLocale } from "@/i18n/config";
import { currentLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";

/** One page per calculator in each language it has been fully translated into. */
export function generateStaticParams({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return [];
  return calculatorsForLocale(params.locale).map((calculator) => ({ slug: calculator.def.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/calculators/[slug]">): Promise<Metadata> {
  const locale = await currentLocale();
  const calculator = getLocalizedCalculator((await params).slug, locale);
  if (!calculator) return {};
  return pageMetadata({
    locale,
    title: calculator.content.metaTitle,
    description: calculator.content.metaDescription,
    path: calculatorPath(calculator.def.slug),
    locales: calculatorLocales(calculator.def),
  });
}

export default async function Page({ params }: PageProps<"/[locale]/calculators/[slug]">) {
  const locale = await currentLocale();
  const calculator = getLocalizedCalculator((await params).slug, locale);
  if (!calculator) notFound();
  return <CalculatorPage calculator={calculator} />;
}
