import type { Metadata } from "next";
import Link from "next/link";
import { categoryPath } from "@/calculators/categories";
import { CALCULATORS, activeCategories, calculatorPath, calculatorsInCategory, popularCalculators } from "@/calculators/registry";
import { HeaderSearch } from "@/components/layout/HeaderSearch";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { JsonLd } from "@/components/ui/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { websiteJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: `${SITE.name} – Free Salary, Percentage & ROI Calculators`,
  absoluteTitle: true,
  description: SITE.description,
  path: "/",
});

const PRINCIPLES = [
  {
    title: "Formulas shown",
    body: "Every calculator page explains the formula it uses and walks through worked examples.",
  },
  {
    title: "Runs in your browser",
    body: "Calculations happen on your device as you type. Inputs are not sent to a server.",
  },
  {
    title: "Assumptions stated",
    body: "Defaults such as 40 hours a week are visible and editable, and limitations are listed on each page.",
  },
];

export default function HomePage() {
  const popular = popularCalculators(6);
  const categories = activeCategories();
  const salary = CALCULATORS[0];

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-blue-50 via-white to-[#f8fafd]">
        <div aria-hidden="true" className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold text-blue-700">
            {CALCULATORS.length} free calculators · {categories.length} categories
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-balance text-navy-900 sm:text-5xl">
            Calculators that show their work
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Convert salaries and hourly wages, work out percentages and measure investment returns. Clear inputs, instant results and the formula behind every answer.
          </p>
          <div className="mt-8 max-w-xl">
            <HeaderSearch id="hero-search" label="Find a calculator" size="lg" />
          </div>
          {salary && (
            <p className="mt-4 text-sm text-slate-600">
              Start with the{" "}
              <Link href={calculatorPath(salary.slug)} className="focus-ring rounded font-medium text-blue-700 underline-offset-2 hover:underline">
                {salary.title.toLowerCase()}
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 pt-12 sm:px-6">
        <section aria-labelledby="popular-heading">
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <h2 id="popular-heading" className="text-2xl font-semibold tracking-tight text-navy-900">
              Popular tools
            </h2>
            <Link href="/calculators" className="focus-ring shrink-0 rounded text-sm font-medium text-blue-700 hover:underline">
              View all {CALCULATORS.length}
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((calculator) => (
              <li key={calculator.slug}>
                <CalculatorCard calculator={calculator} />
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="categories-heading">
          <h2 id="categories-heading" className="mb-4 text-2xl font-semibold tracking-tight text-navy-900">
            Browse by category
          </h2>
          <ul className="grid gap-4 md:grid-cols-3">
            {categories.map((category) => (
              <li key={category.slug} className="card flex flex-col p-5">
                <div className="flex items-center gap-3">
                  <CategoryIcon category={category.slug} />
                  <h3 className="font-semibold text-navy-900">
                    <Link href={categoryPath(category.slug)} className="focus-ring rounded hover:text-blue-800">
                      {category.name}
                    </Link>
                  </h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">{category.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {calculatorsInCategory(category.slug)
                    .slice(0, 5)
                    .map((c) => (
                      <li key={c.slug}>
                        <Link href={calculatorPath(c.slug)} className="focus-ring rounded text-blue-700 hover:underline">
                          {c.title}
                        </Link>
                      </li>
                    ))}
                </ul>
                <p className="mt-auto pt-4 text-xs text-slate-500">
                  {category.count} {category.count === 1 ? "calculator" : "calculators"}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="principles-heading" className="rounded-2xl bg-navy-900 px-6 py-10 text-white sm:px-10">
          <h2 id="principles-heading" className="text-2xl font-semibold tracking-tight">
            How CalcNest calculators work
          </h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {PRINCIPLES.map((item) => (
              <li key={item.title}>
                <h3 className="font-semibold text-blue-200">{item.title}</h3>
                <p className="mt-2 text-sm text-blue-50/85">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm">
            <Link href="/about" className="focus-ring rounded font-medium text-white underline underline-offset-4 hover:text-blue-200">
              Read about our methodology
            </Link>
          </p>
        </section>
      </div>
      <JsonLd data={websiteJsonLd()} />
    </>
  );
}
