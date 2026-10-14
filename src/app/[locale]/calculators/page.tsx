import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { categoryPath } from "@/calculators/categories";
import { collectionPath } from "@/calculators/collections";
import { categoriesFor, collectionsFor, readyLocales } from "@/calculators/localize";
import { searchEntriesFor } from "@/calculators/search-data";
import { DirectoryGroups, type DirectoryGroup } from "@/components/directory/DirectoryResults";
import { SearchableDirectory, type FilterOption } from "@/components/directory/SearchableDirectory";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { localizePath } from "@/i18n/paths";
import { currentLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { itemListJsonLd } from "@/lib/structured-data";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  const t = await getTranslations("meta");
  return pageMetadata({
    locale,
    title: t("directoryTitle"),
    description: t("directoryDescription", { count: searchEntriesFor(locale).length, site: SITE.name }),
    path: "/calculators",
    locales: readyLocales(),
  });
}

export default async function CalculatorsPage() {
  const locale = await currentLocale();
  const t = await getTranslations("directory");
  const tc = await getTranslations("common");
  const href = (path: string) => localizePath(locale, path);
  const entries = searchEntriesFor(locale);
  const categories: FilterOption[] = categoriesFor(locale).map((c) => ({ slug: c.slug, name: c.name, href: href(categoryPath(c.slug)), count: c.count }));
  const collections: FilterOption[] = collectionsFor(locale).map((c) => ({ slug: c.slug, name: c.name, href: href(collectionPath(c.slug)), count: c.count }));
  const groups: DirectoryGroup[] = categories.map((category) => ({
    name: category.name,
    href: category.href,
    entries: entries.filter((e) => e.categorySlug === category.slug),
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <Breadcrumbs
        crumbs={[
          { name: tc("home"), href: href("/") },
          { name: tc("allCalculators"), href: href("/calculators") },
        ]}
      />
      <header className="mt-5 mb-8 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{t("title")}</h1>
        <p className="mt-3 text-lg text-neutral-600">{t("lead", { count: entries.length, categories: categories.length, collections: collections.length })}</p>
      </header>
      <Suspense fallback={<DirectoryGroups groups={groups} />}>
        <SearchableDirectory entries={entries} categories={categories} collections={collections} />
      </Suspense>
      <JsonLd data={itemListJsonLd(t("itemListName"), entries.map((e) => ({ name: e.title, href: e.href })))} />
    </div>
  );
}
