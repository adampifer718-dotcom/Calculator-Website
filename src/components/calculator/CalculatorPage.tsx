import Link from "next/link";
import { categoryPath, getCategory } from "@/calculators/categories";
import type { CalculatorDefinition } from "@/calculators/framework/types";
import { calculatorPath, relatedCalculators } from "@/calculators/registry";
import { CalculatorWidget } from "@/calculators/widgets";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { calculatorJsonLd } from "@/lib/structured-data";
import { WorkedExamples } from "./WorkedExamples";

const SECTIONS = [
  { id: "how-to-use", title: "How to use" },
  { id: "formula", title: "Formula" },
  { id: "examples", title: "Worked examples" },
  { id: "assumptions", title: "Assumptions" },
  { id: "faq", title: "FAQ" },
  { id: "related", title: "Related calculators" },
] as const;

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-2xl font-semibold tracking-tight text-ink-900">
      {children}
    </h2>
  );
}

const APPLICATION_CATEGORY: Record<CalculatorDefinition["category"], string> = {
  "salary-and-pay": "FinanceApplication",
  "finance-and-investing": "FinanceApplication",
  math: "EducationalApplication",
};

/** Shared layout for every calculator page. Content comes from the calculator definition. */
export function CalculatorPage({ calculator }: { calculator: CalculatorDefinition }) {
  const category = getCategory(calculator.category);
  const related = relatedCalculators(calculator);
  const path = calculatorPath(calculator.slug);

  return (
    <div className="bg-gradient-to-b from-brand-50/70 via-transparent to-transparent bg-[length:100%_28rem] bg-no-repeat">
      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
        <Breadcrumbs
          crumbs={[
            { name: "Home", href: "/" },
            ...(category ? [{ name: category.name, href: categoryPath(category.slug) }] : []),
            { name: calculator.title, href: path },
          ]}
        />
        <header className="mt-5 max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-balance text-ink-900 sm:text-4xl">{calculator.title}</h1>
          <p className="mt-3 text-lg text-neutral-600">{calculator.summary}</p>
        </header>

        <div className="mt-7">
          <CalculatorWidget slug={calculator.slug} />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_15rem]">
          <article className="min-w-0 space-y-12">
            <section aria-labelledby="about" className="prose-calc max-w-3xl">
              <h2 id="about" className="sr-only">
                About this calculator
              </h2>
              {calculator.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <section aria-labelledby="how-to-use">
              <SectionHeading id="how-to-use">How to use the {calculator.shortTitle.toLowerCase()} calculator</SectionHeading>
              <ol className="mt-4 max-w-3xl space-y-3">
                {calculator.howToUse.map((step, index) => (
                  <li key={step} className="flex gap-3 text-neutral-700">
                    <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-800">
                      {index + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="formula">
              <SectionHeading id="formula">Formula</SectionHeading>
              <div className="mt-4 grid gap-4">
                {calculator.formulas.map((formula) => (
                  <div key={formula.title} className="card p-5">
                    <h3 className="font-semibold text-ink-900">{formula.title}</h3>
                    <pre className="mt-3 overflow-x-auto rounded-lg bg-ink-950 px-4 py-3 font-mono text-sm leading-relaxed whitespace-pre-wrap text-brand-50">
                      {formula.expression}
                    </pre>
                    <p className="mt-3 text-sm text-neutral-700">{formula.explanation}</p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="examples">
              <SectionHeading id="examples">Worked examples</SectionHeading>
              <p className="mt-2 text-sm text-neutral-600">Each result below is calculated by the same code as the calculator above.</p>
              <div className="mt-4">
                <WorkedExamples calculator={calculator} />
              </div>
            </section>

            <section aria-labelledby="assumptions">
              <SectionHeading id="assumptions">Assumptions and limitations</SectionHeading>
              <ul className="mt-4 max-w-3xl space-y-2.5 text-neutral-700">
                {calculator.assumptions.map((item) => (
                  <li key={item} className="flex gap-3">
                    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="mt-1 size-4 shrink-0 text-brand-600">
                      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.5a.75.75 0 1 0-1.5 0v.01a.75.75 0 0 0 1.5 0V6.5ZM10 9a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0v-3.5A.75.75 0 0 0 10 9Z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="faq">
              <SectionHeading id="faq">Frequently asked questions</SectionHeading>
              <div className="mt-4 divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white">
                {calculator.faqs.map((faq) => (
                  <details key={faq.question} className="group px-5 py-1">
                    <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded py-3 font-medium text-ink-900 [&::-webkit-details-marker]:hidden">
                      <h3>{faq.question}</h3>
                      <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="size-5 shrink-0 text-neutral-500 transition-transform group-open:rotate-180">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.4a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
                      </svg>
                    </summary>
                    <p className="pb-4 text-neutral-700">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section aria-labelledby="related">
              <SectionHeading id="related">Related calculators</SectionHeading>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {related.map((item) => (
                  <li key={item.slug}>
                    <CalculatorCard calculator={item} />
                  </li>
                ))}
              </ul>
              {category && (
                <p className="mt-4 text-sm">
                  <Link href={categoryPath(category.slug)} className="focus-ring rounded font-medium text-brand-700 hover:underline">
                    Browse all {category.name} calculators
                  </Link>
                </p>
              )}
            </section>
            <p className="text-xs text-neutral-500">
              Last updated{" "}
              <time dateTime={calculator.updated}>
                {new Date(`${calculator.updated}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}
              </time>
              .
            </p>
          </article>

          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-24">
              <h2 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">On this page</h2>
              <ul className="mt-3 space-y-1 border-l border-neutral-200 text-sm">
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="focus-ring -ml-px block border-l border-transparent py-1 pl-3 text-neutral-600 hover:border-brand-500 hover:text-ink-900">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </div>
      <JsonLd
        data={calculatorJsonLd({
          name: calculator.title,
          description: calculator.metaDescription,
          path,
          category: APPLICATION_CATEGORY[calculator.category],
        })}
      />
    </div>
  );
}
