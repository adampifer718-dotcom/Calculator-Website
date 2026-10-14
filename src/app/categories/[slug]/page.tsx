import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryPath } from "@/calculators/categories";
import { activeCategories, calculatorPath, calculatorsInCategory } from "@/calculators/registry";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { JsonLd } from "@/components/ui/JsonLd";
import { itemListJsonLd } from "@/lib/structured-data";

/** Only categories with at least one published calculator get a page. */
function findCategory(slug: string) {
  return activeCategories().find((c) => c.slug === slug);
}

export function generateStaticParams() {
  return activeCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps<"/categories/[slug]">): Promise<Metadata> {
  const category = findCategory((await params).slug);
  if (!category) return {};
  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: { canonical: categoryPath(category.slug) },
  };
}

export default async function CategoryPage({ params }: PageProps<"/categories/[slug]">) {
  const category = findCategory((await params).slug);
  if (!category) notFound();
  const calculators = calculatorsInCategory(category.slug);
  const others = activeCategories().filter((c) => c.slug !== category.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: category.name, href: categoryPath(category.slug) }]} />
      <header className="mt-5 flex max-w-3xl items-start gap-4">
        <CategoryIcon category={category.slug} size="lg" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{category.name} calculators</h1>
          <p className="mt-3 text-lg text-slate-600">{category.description}</p>
          <p className="mt-2 text-sm text-slate-500">
            {calculators.length} {calculators.length === 1 ? "calculator" : "calculators"}
          </p>
        </div>
      </header>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {calculators.map((calculator) => (
          <li key={calculator.slug}>
            <CalculatorCard calculator={calculator} headingLevel="h2" />
          </li>
        ))}
      </ul>
      {others.length > 0 && (
        <section aria-labelledby="other-categories" className="mt-14">
          <h2 id="other-categories" className="text-lg font-semibold text-navy-900">
            Other categories
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={categoryPath(other.slug)}
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-navy-800 hover:border-blue-400 hover:text-blue-800"
                >
                  {other.name}
                  <span className="text-slate-500">{other.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      <JsonLd
        data={itemListJsonLd(`${category.name} calculators`, calculators.map((c) => ({ name: c.title, href: calculatorPath(c.slug) })))}
      />
    </div>
  );
}
