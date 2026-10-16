import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { categoryPath } from "@/calculators/categories";
import { collectionPath, getCollection } from "@/calculators/collections";
import type { CalculatorDefinition } from "@/calculators/framework/types";
import { relatedFor, type LocalizedCalculator } from "@/calculators/localize";
import { calculatorPath } from "@/calculators/registry";
import { CalculatorWidget } from "@/calculators/widgets";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { JsonLd } from "@/components/ui/JsonLd";
import { LOCALE_INFO } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";
import { categoryText, collectionText } from "@/i18n/taxonomy";
import { midSentence } from "@/lib/parse";
import { calculatorJsonLd } from "@/lib/structured-data";
import { WorkedExamples } from "./WorkedExamples";

const SECTIONS = [
  { id: "how-to-use", key: "howTo" },
  { id: "formula", key: "formula" },
  { id: "examples", key: "examples" },
  { id: "assumptions", key: "assumptions" },
  { id: "faq", key: "faq" },
  { id: "sources", key: "sources" },
  { id: "related", key: "related" },
] as const;

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-2xl font-extrabold tracking-tight text-ink-900">
      {children}
    </h2>
  );
}

const APPLICATION_CATEGORY: Record<CalculatorDefinition["category"], string> = {
  biology: "EducationalApplication",
  chemistry: "EducationalApplication",
  construction: "UtilitiesApplication",
  conversion: "UtilitiesApplication",
  ecology: "UtilitiesApplication",
  "everyday-life": "UtilitiesApplication",
  finance: "FinanceApplication",
  food: "LifestyleApplication",
  health: "HealthApplication",
  math: "EducationalApplication",
  physics: "EducationalApplication",
  sports: "SportsApplication",
  statistics: "EducationalApplication",
  other: "UtilitiesApplication",
};

/** Shared layout for every calculator page, in any language. */
export async function CalculatorPage({ calculator: localized }: { calculator: LocalizedCalculator }) {
  const { def: calculator, content, locale } = localized;
  const t = await getTranslations("calculator");
  const tc = await getTranslations("common");
  const category = categoryText(locale, calculator.category);
  const related = relatedFor(calculator, locale);
  const collections = calculator.collections
    .filter((slug) => getCollection(slug) !== undefined)
    .map((slug) => ({ slug, name: collectionText(locale, slug).name }));
  const sections = SECTIONS.filter((section) => section.id !== "sources" || calculator.sources.length > 0);
  const path = calculatorPath(calculator.slug);
  const href = (p: string) => localizePath(locale, p);
  const updated = new Intl.DateTimeFormat(LOCALE_INFO[locale].intl, { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(
    new Date(`${calculator.updated}T00:00:00Z`),
  );

  return (
    <div>
      <div className="relative overflow-hidden border-b border-line bg-white">
        <svg aria-hidden="true" viewBox="0 0 400 200" className="pointer-events-none absolute -end-10 -bottom-10 hidden w-[28rem] sm:block rtl:-scale-x-100">
          <path d="M0 200c60-70 140-100 220-85s130-35 180-115v200z" fill="#E5EDF7" />
          <path d="M120 200c50-45 110-60 170-52s80-25 110-60v112z" fill="#FBE8E0" />
          <circle cx="330" cy="40" r="16" fill="#F7E6E4" />
        </svg>
        <div className="relative mx-auto max-w-7xl px-4 pt-6 pb-24 sm:px-6">
        <Breadcrumbs
          crumbs={[
            { name: tc("home"), href: href("/") },
            { name: category.name, href: href(categoryPath(calculator.category)) },
            { name: content.title, href: href(path) },
          ]}
        />
        <header className="mt-6 flex max-w-4xl items-start gap-4 sm:gap-5">
          <span className="hidden sm:block">
            <CategoryIcon category={calculator.category} slug={calculator.slug} size="xl" />
          </span>
          <div className="min-w-0">
          <h1 className="text-3xl leading-tight font-extrabold tracking-[-0.025em] text-balance text-ink-900 sm:text-[2.6rem]">{content.title}</h1>
          <p className="mt-3 text-lg leading-relaxed text-neutral-600">{content.summary}</p>
          {collections.length > 0 && (
            <ul aria-label={t("collections")} className="mt-4 flex flex-wrap gap-2">
              {collections.map((collection) => (
                <li key={collection.slug}>
                  <Link
                    href={href(collectionPath(collection.slug))}
                    className="focus-ring inline-flex rounded-full bg-cream px-3 py-1 text-xs font-bold text-neutral-700 ring-1 ring-line transition-colors hover:bg-brand-50 hover:text-brand-800 hover:ring-brand-200"
                  >
                    {collection.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          </div>
        </header>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative -mt-16">
          <CalculatorWidget slug={calculator.slug} locale={locale} text={localized.text} />
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <article className="min-w-0 space-y-12">
            <section aria-labelledby="about" className="prose-calc max-w-3xl">
              <h2 id="about" className="sr-only">
                {t("about")}
              </h2>
              {content.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <section aria-labelledby="how-to-use">
              <SectionHeading id="how-to-use">{t("howTo", { name: midSentence(content.shortTitle, locale) })}</SectionHeading>
              <ol className="mt-4 max-w-3xl space-y-3">
                {content.howToUse.map((step, index) => (
                  <li key={step} className="flex gap-3 text-neutral-700">
                    <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="formula">
              <SectionHeading id="formula">{t("formula")}</SectionHeading>
              <div className="mt-4 grid gap-4">
                {content.formulas.map((formula) => (
                  <div key={formula.title} className="card p-5">
                    <h3 className="font-bold text-ink-900">{formula.title}</h3>
                    <pre dir="auto" className="mt-3 overflow-x-auto rounded-2xl bg-brand-950 px-5 py-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-brand-50">
                      {formula.expression}
                    </pre>
                    <p className="mt-3 text-sm text-neutral-700">{formula.explanation}</p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="examples">
              <SectionHeading id="examples">{t("examples")}</SectionHeading>
              <p className="mt-2 text-sm text-neutral-600">{t("examplesLead")}</p>
              <div className="mt-4">
                <WorkedExamples calculator={localized} />
              </div>
            </section>

            <section aria-labelledby="assumptions">
              <SectionHeading id="assumptions">{t("assumptions")}</SectionHeading>
              <ul className="mt-4 max-w-3xl space-y-2.5 text-neutral-700">
                {content.assumptions.map((item) => (
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
              <SectionHeading id="faq">{t("faq")}</SectionHeading>
              <div className="card mt-4 divide-y divide-neutral-200 overflow-hidden">
                {content.faqs.map((faq) => (
                  <details key={faq.question} className="group px-5 py-1 open:bg-brand-50/40">
                    <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded py-4 font-bold text-ink-900 [&::-webkit-details-marker]:hidden">
                      <h3>{faq.question}</h3>
                      <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="size-6 shrink-0 rounded-full bg-cream p-0.5 text-brand-700 ring-1 ring-line transition-transform group-open:rotate-180">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.4a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
                      </svg>
                    </summary>
                    <p className="pb-5 leading-relaxed text-neutral-700">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {calculator.sources.length > 0 && (
              <section aria-labelledby="sources">
                <SectionHeading id="sources">{t("sources")}</SectionHeading>
                <p className="mt-2 text-sm text-neutral-600">{t("sourcesLead")}</p>
                <ol className="mt-4 max-w-3xl list-decimal space-y-3 ps-5 text-neutral-700">
                  {calculator.sources.map((source, index) => (
                    <li key={source.title}>
                      {source.url ? (
                        <a href={source.url} rel="noopener noreferrer" target="_blank" className="focus-ring rounded font-medium text-brand-700 hover:underline">
                          {source.title}
                        </a>
                      ) : (
                        <span className="font-medium text-ink-900">{source.title}</span>
                      )}
                      <span className="text-neutral-600">, {source.publisher}.</span>
                      <span className="block text-sm text-neutral-600">{t("usedFor", { text: content.sourcesUsedFor[index] ?? source.usedFor })}</span>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            <section aria-labelledby="related">
              <SectionHeading id="related">{t("related")}</SectionHeading>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {related.map((item) => (
                  <li key={item.def.slug}>
                    <CalculatorCard calculator={item} />
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm">
                <Link href={href(categoryPath(calculator.category))} className="focus-ring rounded font-medium text-brand-700 hover:underline">
                  {t("browseCategory", { category: category.name })}
                </Link>
              </p>
            </section>
            <p className="text-xs text-neutral-500">
              <time dateTime={calculator.updated}>{t("updated", { date: updated })}</time>
            </p>
          </article>

          <aside className="hidden lg:block">
            <nav aria-label={t("onThisPage")} className="card sticky top-24 p-5">
              <h2 className="eyebrow text-accent-700">{t("onThisPage")}</h2>
              <ul className="mt-3 space-y-0.5 border-s-2 border-line text-sm">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="focus-ring -ms-px block border-s-2 border-transparent py-1.5 ps-3 font-medium text-neutral-600 transition-colors hover:border-brand-600 hover:text-brand-800">
                      {t(`toc.${section.key}`)}
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
          name: content.title,
          description: content.metaDescription,
          path: href(path),
          category: APPLICATION_CATEGORY[calculator.category],
          locale,
        })}
      />
    </div>
  );
}
