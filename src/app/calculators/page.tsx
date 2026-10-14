import type { Metadata } from "next";
import { Suspense } from "react";
import { categoryPath } from "@/calculators/categories";
import { CALCULATORS, activeCategories, calculatorPath, calculatorsInCategory, searchEntries } from "@/calculators/registry";
import { DirectoryGroups, type DirectoryGroup } from "@/components/directory/DirectoryResults";
import { DirectorySearchBox, SearchableDirectory } from "@/components/directory/SearchableDirectory";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { itemListJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "All Calculators",
  description: `Browse and search all ${CALCULATORS.length} free CalcNest calculators for salary and pay, percentages and investment returns.`,
  path: "/calculators",
});

export default function CalculatorsPage() {
  const entries = searchEntries();
  const groups: DirectoryGroup[] = activeCategories().map((category) => ({
    name: category.name,
    href: categoryPath(category.slug),
    entries: entries.filter((e) => calculatorsInCategory(category.slug).some((c) => c.slug === e.slug)),
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "All calculators", href: "/calculators" }]} />
      <header className="mt-5 mb-8 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">All calculators</h1>
        <p className="mt-3 text-lg text-slate-600">
          {CALCULATORS.length} calculators across {groups.length} categories. Each one shows its formula, assumptions and worked examples.
        </p>
      </header>
      <Suspense
        fallback={
          <>
            <DirectorySearchBox value="" count={`Showing all ${entries.length} calculators.`} />
            <div className="mt-8">
              <DirectoryGroups groups={groups} />
            </div>
          </>
        }
      >
        <SearchableDirectory entries={entries} groups={groups} />
      </Suspense>
      <JsonLd data={itemListJsonLd("All calculators", CALCULATORS.map((c) => ({ name: c.title, href: calculatorPath(c.slug) })))} />
    </div>
  );
}
