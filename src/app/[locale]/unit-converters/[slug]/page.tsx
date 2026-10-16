import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConverterPage } from "@/components/converters/ConverterPage";
import { converterLocales, converterPagesForLocale, converterPath, getLocalizedConverterBySlug } from "@/converters/catalog";
import { isLocale } from "@/i18n/config";
import { currentLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";

/** One page per converter in each language with complete content (existing converters keep their calculator pages). */
export function generateStaticParams({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return [];
  return converterPagesForLocale(params.locale).map((converter) => ({ slug: converter.spec.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/unit-converters/[slug]">): Promise<Metadata> {
  const locale = await currentLocale();
  const converter = getLocalizedConverterBySlug((await params).slug, locale);
  if (!converter) return {};
  return pageMetadata({
    locale,
    title: converter.content.metaTitle,
    description: converter.content.metaDescription,
    path: converterPath(converter.spec.slug),
    locales: converterLocales(converter.spec),
  });
}

export default async function Page({ params }: PageProps<"/[locale]/unit-converters/[slug]">) {
  const locale = await currentLocale();
  const converter = getLocalizedConverterBySlug((await params).slug, locale);
  if (!converter) notFound();
  return <ConverterPage converter={converter} />;
}
