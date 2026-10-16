import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryPath } from "@/calculators/categories";
import { collectionPath } from "@/calculators/collections";
import { categoriesFor, collectionLocales, collectionsFor, findCollectionFor, inCollection } from "@/calculators/localize";
import { calculatorPath } from "@/calculators/registry";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { isLocale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";
import { currentLocale } from "@/i18n/server";
import { categoryText } from "@/i18n/taxonomy";
import { pageMetadata } from "@/lib/seo";
import { itemListJsonLd } from "@/lib/structured-data";

/** Only collections with at least one calculator published in the language get a page. */
export function generateStaticParams({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return [];
  return collectionsFor(params.locale).map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/collections/[slug]">): Promise<Metadata> {
  const locale = await currentLocale();
  const collection = findCollectionFor(locale, (await params).slug);
  if (!collection) return {};
  return pageMetadata({
    locale,
    title: collection.metaTitle,
    description: collection.metaDescription,
    path: collectionPath(collection.slug),
    locales: collectionLocales(collection.slug),
  });
}

export default async function CollectionPage({ params }: PageProps<"/[locale]/collections/[slug]">) {
  const locale = await currentLocale();
  const collection = findCollectionFor(locale, (await params).slug);
  if (!collection) notFound();
  const t = await getTranslations("collection");
  const tc = await getTranslations("common");
  const href = (path: string) => localizePath(locale, path);
  const calculators = inCollection(locale, collection.slug);
  const byCategory = categoriesFor(locale)
    .map((category) => ({ category, items: calculators.filter((c) => c.def.category === category.slug) }))
    .filter((g) => g.items.length > 0);
  const others = collectionsFor(locale).filter((c) => c.slug !== collection.slug);
  const heading = t("heading", { name: collection.name });

  return (
    <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
      <Breadcrumbs
        crumbs={[
          { name: tc("home"), href: href("/") },
          { name: tc("allCalculators"), href: href("/calculators") },
          { name: collection.name, href: href(collectionPath(collection.slug)) },
        ]}
      />
      <header className="mt-5 max-w-3xl">
        <p className="eyebrow text-accent-700">{t("kicker")}</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-[-0.025em] text-ink-900 sm:text-4xl">{heading}</h1>
        <p className="mt-3 text-lg text-neutral-600">{collection.description}</p>
        <p className="mt-2 text-sm text-neutral-500">{t("summary", { count: calculators.length, categories: byCategory.length })}</p>
      </header>
      <div className="mt-8 space-y-10">
        {byCategory.map(({ category, items }) => (
          <section key={category.slug} aria-labelledby={`cat-${category.slug}`}>
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 id={`cat-${category.slug}`} className="text-xl font-extrabold tracking-tight text-ink-900">
                {category.name}
              </h2>
              <Link href={href(categoryPath(category.slug))} className="focus-ring rounded text-sm font-bold text-brand-700 hover:underline">
                {t("allInCategory", { category: categoryText(locale, category.slug).name })}
              </Link>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((calculator) => (
                <li key={calculator.def.slug}>
                  <CalculatorCard calculator={calculator} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      {others.length > 0 && (
        <section aria-labelledby="other-collections" className="mt-14">
          <h2 id="other-collections" className="text-lg font-extrabold text-ink-900">
            {t("others")}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={href(collectionPath(other.slug))}
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-bold text-ink-800 shadow-soft transition-colors hover:border-brand-400 hover:text-brand-800"
                >
                  {other.name}
                  <span className="text-neutral-500">{other.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      <JsonLd data={itemListJsonLd(heading, calculators.map((c) => ({ name: c.content.title, href: href(calculatorPath(c.def.slug)) })))} />
    </div>
  );
}
