import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryPath } from "@/calculators/categories";
import { categoriesFor, categoryLocales, findCategoryFor, inCategory } from "@/calculators/localize";
import { calculatorPath } from "@/calculators/registry";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { JsonLd } from "@/components/ui/JsonLd";
import { isLocale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";
import { currentLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";
import { itemListJsonLd } from "@/lib/structured-data";

/** Only categories with at least one calculator published in the language get a page. */
export function generateStaticParams({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return [];
  return categoriesFor(params.locale).map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/categories/[slug]">): Promise<Metadata> {
  const locale = await currentLocale();
  const category = findCategoryFor(locale, (await params).slug);
  if (!category) return {};
  return pageMetadata({
    locale,
    title: category.metaTitle,
    description: category.metaDescription,
    path: categoryPath(category.slug),
    locales: categoryLocales(category.slug),
  });
}

export default async function CategoryPage({ params }: PageProps<"/[locale]/categories/[slug]">) {
  const locale = await currentLocale();
  const category = findCategoryFor(locale, (await params).slug);
  if (!category) notFound();
  const t = await getTranslations("category");
  const tc = await getTranslations("common");
  const href = (path: string) => localizePath(locale, path);
  const calculators = inCategory(locale, category.slug);
  const others = categoriesFor(locale).filter((c) => c.slug !== category.slug);
  const heading = t("heading", { name: category.name });

  return (
    <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
      <Breadcrumbs
        crumbs={[
          { name: tc("home"), href: href("/") },
          { name: category.name, href: href(categoryPath(category.slug)) },
        ]}
      />
      <header className="mt-5 flex max-w-3xl items-start gap-4">
        <CategoryIcon category={category.slug} size="lg" />
        <div className="min-w-0 break-words hyphens-auto">
          <h1 className="text-3xl font-extrabold tracking-[-0.025em] text-ink-900 sm:text-4xl">{heading}</h1>
          <p className="mt-3 text-lg text-neutral-600">{category.description}</p>
          <p className="mt-2 text-sm text-neutral-500">{tc("calculatorCount", { count: calculators.length })}</p>
        </div>
      </header>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {calculators.map((calculator) => (
          <li key={calculator.def.slug}>
            <CalculatorCard calculator={calculator} headingLevel="h2" />
          </li>
        ))}
      </ul>
      {others.length > 0 && (
        <section aria-labelledby="other-categories" className="mt-14">
          <h2 id="other-categories" className="text-lg font-extrabold text-ink-900">
            {t("others")}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={href(categoryPath(other.slug))}
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
