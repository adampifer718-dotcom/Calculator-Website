import type { Metadata } from "next";
import Link from "next/link";
import { categoryPath } from "@/calculators/categories";
import { collectionPath } from "@/calculators/collections";
import {
  CALCULATORS,
  activeCategories,
  activeCollections,
  calculatorPath,
  calculatorsInCategory,
  featuredCalculators,
  popularCalculators,
  recentlyAdded,
} from "@/calculators/registry";
import PayConverter from "@/calculators/pay-converter/widget";
import { ConversionChart, HowToUse, PayFormulas } from "@/components/home/PayGuide";
import { HeaderSearch } from "@/components/layout/HeaderSearch";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { JsonLd } from "@/components/ui/JsonLd";
import { CURRENCY_CODES } from "@/lib/format";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { websiteJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: `Hourly to Salary & Pay Calculator – Free Tools | ${SITE.name}`,
  absoluteTitle: true,
  description:
    "Convert hourly, daily, weekly, biweekly, monthly or annual pay into every pay period, plus free percentage and ROI calculators with formulas shown.",
  path: "/",
});

const HIGHLIGHTS = ["Instant results", `${CURRENCY_CODES.length} currencies`, "No sign-up"];

function Check({ className = "size-4 text-brand-600" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.58l7.3-7.29a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
    </svg>
  );
}

function Arrow({ className = "text-neutral-400" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className={`size-4 shrink-0 ${className}`}>
      <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.64l-3.72-3.72a.75.75 0 1 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
    </svg>
  );
}

function SectionHeader({ kicker, id, title, children }: { kicker: string; id: string; title: string; children?: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-wide text-brand-700 uppercase">{kicker}</p>
      <h2 id={id} className="mt-2 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
        {title}
      </h2>
      {children && <p className="mt-2 max-w-2xl text-neutral-600">{children}</p>}
    </div>
  );
}

export default function HomePage() {
  const popular = popularCalculators(8);
  const categories = activeCategories();
  const collections = activeCollections();
  const featured = featuredCalculators(6);
  const recent = recentlyAdded(6);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div aria-hidden="true" className="absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-brand-100/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 pt-10 pb-24 sm:px-6 sm:pt-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <h1 className="text-3xl leading-tight font-bold tracking-tight text-ink-900 sm:text-4xl">
            <span className="block text-xl font-semibold sm:text-2xl">Clear answers from</span>
            <span className="block text-brand-700">{CALCULATORS.length} free calculators</span>
            <span className="block">with the formula shown</span>
          </h1>
          <div>
            <HeaderSearch id="hero-search" label="Find a calculator" size="xl" />
            <p className="mt-3 text-sm text-neutral-600">
              Try{" "}
              {popular.slice(0, 3).map((calculator, index) => (
                <span key={calculator.slug}>
                  {index > 0 && ", "}
                  <Link href={calculatorPath(calculator.slug)} className="focus-ring rounded font-medium text-brand-700 hover:underline">
                    {calculator.shortTitle.toLowerCase()}
                  </Link>
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="categories-heading" className="relative mx-auto -mt-14 max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-6">
          <h2 id="categories-heading" className="sr-only">
            Calculator categories
          </h2>
          <ul className="grid gap-3 sm:grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] sm:gap-4">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={categoryPath(category.slug)}
                  className="focus-ring flex h-full items-center gap-4 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 transition-colors hover:border-brand-300 hover:bg-brand-50 sm:flex-col sm:justify-start sm:gap-2 sm:px-3 sm:py-6 sm:text-center"
                >
                  <CategoryIcon category={category.slug} size="lg" />
                  <span className="sm:mt-1">
                    <span className="block font-semibold text-ink-900">{category.name}</span>
                    <span className="mt-0.5 block text-xs text-neutral-600 sm:mt-2">
                      {category.count} {category.count === 1 ? "calculator" : "calculators"}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="featured-heading" className="pt-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader kicker="Hand-picked" id="featured-heading" title="Featured tools" />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((calculator) => (
              <li key={calculator.slug}>
                <CalculatorCard calculator={calculator} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="popular-heading" className="pt-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div>
            <div>
              <p className="text-xs font-semibold tracking-wide text-brand-700 uppercase">Explore more tools</p>
              <h2 id="popular-heading" className="mt-2 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
                Popular calculators
              </h2>
            </div>

          </div>
          <ul className="mt-8 grid overflow-hidden rounded-xl border border-neutral-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
            {popular.map((calculator) => (
              <li key={calculator.slug} className="border-b border-neutral-200 sm:border-r">
                <Link
                  href={calculatorPath(calculator.slug)}
                  className="focus-ring group flex min-h-20 items-center justify-between gap-4 p-4 font-semibold text-ink-900 hover:bg-brand-50/60"
                >
                  {calculator.title}
                  <Arrow className="text-neutral-400 group-hover:text-brand-700" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            <Link href="/calculators" className="focus-ring rounded font-medium text-brand-700 hover:underline">
              View all {CALCULATORS.length} calculators
            </Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="collections-heading" className="pt-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader kicker="By industry" id="collections-heading" title="Industry collections">
            The same calculators, grouped for the work you do. Each tool still has a single page.
          </SectionHeader>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <li key={collection.slug}>
                <Link
                  href={collectionPath(collection.slug)}
                  className="card focus-ring group flex h-full flex-col p-4 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-semibold text-ink-900 group-hover:text-brand-800">{collection.name}</span>
                    <span className="shrink-0 rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">{collection.count}</span>
                  </span>
                  <span className="mt-1.5 text-sm text-neutral-600">{collection.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="recent-heading" className="pt-14 pb-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader kicker="New" id="recent-heading" title="Recently added" />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((calculator) => (
              <li key={calculator.slug}>
                <CalculatorCard calculator={calculator} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="pay-calculator-heading" className="pt-14 pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="inline-flex items-center rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold text-brand-800">Featured calculator</p>
          <h2 id="pay-calculator-heading" className="mt-3 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
            Hourly to salary pay calculator
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Convert any pay rate into hourly, daily, weekly, biweekly, monthly and annual earnings. Adjust your working schedule for a result that fits your real work year.
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-800">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <PayConverter />
          </div>
        </div>
      </section>

      <HowToUse />
      <PayFormulas />
      <ConversionChart />

      <section aria-labelledby="directory-heading" className="border-t border-neutral-200 bg-neutral-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader kicker="Everything in one place" id="directory-heading" title="Complete calculator directory" />
          <div className="mt-8 columns-1 gap-8 sm:columns-2 lg:columns-4">
            {categories.map((category) => (
              <div key={category.slug} className="mb-8 break-inside-avoid">
                <h3 className="font-semibold text-ink-900">
                  <Link href={categoryPath(category.slug)} className="focus-ring rounded hover:text-brand-700">
                    {category.name}
                  </Link>
                </h3>
                <ul className="mt-2 space-y-1.5 text-sm">
                  {calculatorsInCategory(category.slug).map((calculator) => (
                    <li key={calculator.slug}>
                      <Link href={calculatorPath(calculator.slug)} className="focus-ring rounded text-neutral-700 hover:text-brand-700 hover:underline">
                        {calculator.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm">
            <Link href="/calculators" className="focus-ring rounded font-semibold text-brand-700 hover:underline">
              Search and filter all {CALCULATORS.length} calculators →
            </Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="trust-heading" className="py-14">
        <h2 id="trust-heading" className="sr-only">
          How {SITE.name} works
        </h2>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <span aria-hidden="true" className="flex size-11 items-center justify-center rounded-lg bg-brand-600">
              <Check className="size-5 text-white" />
            </span>
            <h3 className="mt-5 text-xl font-semibold text-ink-900">Transparent calculation</h3>
            <p className="mt-3 text-neutral-600">
              Annual pay is your hourly rate × hours per week × paid weeks per year. Every other pay period divides that total, so results follow the exact schedule you enter.
            </p>
            <p className="mt-5 rounded-lg border border-neutral-200 bg-white p-4 font-mono text-sm font-semibold text-ink-900">
              Annual pay = hourly rate × weekly hours × paid weeks
            </p>
          </div>
          <div>
            <span aria-hidden="true" className="flex size-11 items-center justify-center rounded-lg bg-ink-900 text-white">
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
              </svg>
            </span>
            <h3 className="mt-5 text-xl font-semibold text-ink-900">Private and practical</h3>
            <p className="mt-3 text-neutral-600">
              Calculations run in your browser and your figures are not sent or stored. Results are gross income estimates; taxes, overtime, benefits and deductions change your
              take-home pay.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-ink-800">
              {["No account needed", "No pay data stored", "Clear assumptions"].map((pill) => (
                <li key={pill} className="rounded-full border border-neutral-200 bg-white px-3 py-1.5">
                  {pill}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm">
              <Link href="/about" className="focus-ring rounded font-medium text-brand-700 hover:underline">
                Read about our methodology
              </Link>
            </p>
          </div>
        </div>
      </section>
      <JsonLd data={websiteJsonLd()} />
    </>
  );
}
