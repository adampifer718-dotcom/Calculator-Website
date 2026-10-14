import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, categoryPath } from "@/calculators/categories";
import { collectionPath } from "@/calculators/collections";
import { activeCollections, calculatorPath, calculatorsInCollection } from "@/calculators/registry";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { itemListJsonLd } from "@/lib/structured-data";

/** Only collections with at least one published calculator get a page. */
function findCollection(slug: string) {
  return activeCollections().find((c) => c.slug === slug);
}

export function generateStaticParams() {
  return activeCollections().map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: PageProps<"/collections/[slug]">): Promise<Metadata> {
  const collection = findCollection((await params).slug);
  if (!collection) return {};
  return pageMetadata({ title: collection.metaTitle, description: collection.metaDescription, path: collectionPath(collection.slug) });
}

export default async function CollectionPage({ params }: PageProps<"/collections/[slug]">) {
  const collection = findCollection((await params).slug);
  if (!collection) notFound();
  const calculators = calculatorsInCollection(collection.slug);
  const byCategory = CATEGORIES.map((category) => ({ category, items: calculators.filter((c) => c.category === category.slug) })).filter((g) => g.items.length > 0);
  const others = activeCollections().filter((c) => c.slug !== collection.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "All calculators", href: "/calculators" },
          { name: collection.name, href: collectionPath(collection.slug) },
        ]}
      />
      <header className="mt-5 max-w-3xl">
        <p className="text-xs font-semibold tracking-wide text-brand-700 uppercase">Industry collection</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{collection.name} calculators</h1>
        <p className="mt-3 text-lg text-neutral-600">{collection.description}</p>
        <p className="mt-2 text-sm text-neutral-500">
          {calculators.length} {calculators.length === 1 ? "calculator" : "calculators"} from {byCategory.length} {byCategory.length === 1 ? "category" : "categories"}
        </p>
      </header>
      <div className="mt-8 space-y-10">
        {byCategory.map(({ category, items }) => (
          <section key={category.slug} aria-labelledby={`cat-${category.slug}`}>
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 id={`cat-${category.slug}`} className="text-xl font-semibold text-ink-900">
                {category.name}
              </h2>
              <Link href={categoryPath(category.slug)} className="focus-ring rounded text-sm font-medium text-brand-700 hover:underline">
                All {category.name} calculators
              </Link>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((calculator) => (
                <li key={calculator.slug}>
                  <CalculatorCard calculator={calculator} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      {others.length > 0 && (
        <section aria-labelledby="other-collections" className="mt-14">
          <h2 id="other-collections" className="text-lg font-semibold text-ink-900">
            Other industry collections
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={collectionPath(other.slug)}
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-ink-800 hover:border-brand-400 hover:text-brand-800"
                >
                  {other.name}
                  <span className="text-neutral-500">{other.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      <JsonLd data={itemListJsonLd(`${collection.name} calculators`, calculators.map((c) => ({ name: c.title, href: calculatorPath(c.slug) })))} />
    </div>
  );
}
