import type { Metadata } from "next";
import { Suspense } from "react";
import { categoryPath } from "@/calculators/categories";
import { CALCULATORS, activeCategories, activeCollections, calculatorPath, collectionPath, searchEntries } from "@/calculators/registry";
import { DirectoryGroups, type DirectoryGroup } from "@/components/directory/DirectoryResults";
import { SearchableDirectory, type FilterOption } from "@/components/directory/SearchableDirectory";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { itemListJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "All Calculators",
  description: `Browse, search and filter all ${CALCULATORS.length} free CalcNest calculators by category or industry: finance, math, statistics, health, physics and more.`,
  path: "/calculators",
});

export default function CalculatorsPage() {
  const entries = searchEntries();
  const categories: FilterOption[] = activeCategories().map((c) => ({ slug: c.slug, name: c.name, href: categoryPath(c.slug), count: c.count }));
  const collections: FilterOption[] = activeCollections().map((c) => ({ slug: c.slug, name: c.name, href: collectionPath(c.slug), count: c.count }));
  const groups: DirectoryGroup[] = categories.map((category) => ({
    name: category.name,
    href: category.href,
    entries: entries.filter((e) => e.categorySlug === category.slug),
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "All calculators", href: "/calculators" }]} />
      <header className="mt-5 mb-8 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">All calculators</h1>
        <p className="mt-3 text-lg text-neutral-600">
          {CALCULATORS.length} calculators across {categories.length} categories and {collections.length} industry collections. Each one shows its formula, assumptions and
          worked examples.
        </p>
      </header>
      <Suspense fallback={<DirectoryGroups groups={groups} />}>
        <SearchableDirectory entries={entries} categories={categories} collections={collections} />
      </Suspense>
      <JsonLd data={itemListJsonLd("All calculators", CALCULATORS.map((c) => ({ name: c.title, href: calculatorPath(c.slug) })))} />
    </div>
  );
}
