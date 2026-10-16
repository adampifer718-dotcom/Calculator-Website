import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { CONVERTERS_PATH, converterPath, relatedConverters, type LocalizedConverter } from "@/converters/catalog";
import { convert, findUnitSpec } from "@/converters/engine";
import { isLinear } from "@/converters/specs";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { LOCALE_INFO } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";
import { getFormatter } from "@/lib/format";
import { calculatorJsonLd } from "@/lib/structured-data";
import { ConverterIcon } from "./ConverterIcon";
import { ConverterWidget } from "./ConverterWidget";

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-2xl font-extrabold tracking-tight text-ink-900">
      {children}
    </h2>
  );
}

/** A dedicated converter page: the converter first, then explanation, examples, units, FAQ and sources. */
export async function ConverterPage({ converter }: { converter: LocalizedConverter }) {
  const { spec, content, locale, meta } = converter;
  const t = await getTranslations("converters");
  const tc = await getTranslations("common");
  const fmt = getFormatter(locale);
  const href = (p: string) => localizePath(locale, p);
  const path = converterPath(spec.slug);
  const related = relatedConverters(spec, locale);
  const linear = isLinear(spec) ? spec : undefined;
  const name = (id: string) => content.units[id] ?? id;
  const examples = (linear?.known ?? [])
    .filter((k) => {
      const r = linear && convert(linear, k.value, k.from, k.to, k.params ?? {});
      return r?.ok;
    })
    .slice(0, 5);
  const updated = meta
    ? new Intl.DateTimeFormat(LOCALE_INFO[locale].intl, { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(`${meta.updated}T00:00:00Z`))
    : undefined;
  const base = linear ? findUnitSpec(linear, linear.baseUnit) : undefined;

  const sections = [
    { id: "formula", label: t("page.formula") },
    ...(examples.length ? [{ id: "examples", label: t("page.examples") }] : []),
    ...(linear && linear.popularPairs.length ? [{ id: "popular", label: t("page.popular") }] : []),
    ...(linear ? [{ id: "units", label: t("page.units") }] : []),
    { id: "assumptions", label: t("page.assumptions") },
    { id: "faq", label: t("page.faq") },
    ...(meta?.sources.length ? [{ id: "sources", label: t("page.sources") }] : []),
    ...(related.length ? [{ id: "related", label: t("page.related") }] : []),
  ];

  return (
    <div>
      <div className="relative overflow-hidden border-b border-line bg-white">
        <svg aria-hidden="true" viewBox="0 0 400 200" className="pointer-events-none absolute -end-10 -bottom-10 hidden w-[28rem] sm:block rtl:-scale-x-100">
          <path d="M0 200c60-70 140-100 220-85s130-35 180-115v200z" fill="#E5EDF7" />
          <path d="M120 200c50-45 110-60 170-52s80-25 110-60v112z" fill="#FBE8E0" />
        </svg>
        <div className="relative mx-auto max-w-7xl px-4 pt-6 pb-24 sm:px-6">
          <Breadcrumbs
            crumbs={[
              { name: tc("home"), href: href("/") },
              { name: t("breadcrumb"), href: href(CONVERTERS_PATH) },
              { name: content.title, href: href(path) },
            ]}
          />
          <header className="mt-6 flex max-w-4xl items-start gap-4 sm:gap-5">
            <span className="hidden sm:block">
              <ConverterIcon group={spec.group} size="lg" />
            </span>
            <div className="min-w-0">
              <h1 className="text-3xl leading-tight font-extrabold tracking-[-0.025em] text-balance text-ink-900 sm:text-[2.6rem]">{content.title}</h1>
              <p className="mt-3 text-lg leading-relaxed text-neutral-600">{content.summary}</p>
            </div>
          </header>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative -mt-16">
          <ConverterWidget specId={spec.id} labels={{ names: content.units, paramLabels: content.paramLabels }} syncUrl />
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <article className="min-w-0 space-y-12">
            <section aria-label={content.shortTitle} className="prose-calc max-w-3xl">
              {content.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <section aria-labelledby="formula">
              <SectionHeading id="formula">{t("page.formula")}</SectionHeading>
              <div className="card mt-4 p-5">
                <pre dir="auto" className="overflow-x-auto rounded-2xl bg-brand-950 px-5 py-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-brand-50">
                  {content.formula.expression}
                </pre>
                <p className="mt-3 text-sm text-neutral-700">{content.formula.explanation}</p>
              </div>
            </section>

            {linear && examples.length > 0 && (
              <section aria-labelledby="examples">
                <SectionHeading id="examples">{t("page.examples")}</SectionHeading>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {examples.map((k) => {
                    const from = findUnitSpec(linear, k.from)!;
                    const to = findUnitSpec(linear, k.to)!;
                    return (
                      <li key={`${k.value}-${k.from}-${k.to}`} className="card p-4">
                        <p className="text-sm text-neutral-600">
                          {name(k.from)} → {name(k.to)}
                        </p>
                        <p className="mt-1 font-bold text-ink-900 tabular-nums">
                          <bdi dir="ltr">
                            {fmt.significant(k.value, 12)} {from.symbol} = {fmt.significant(k.expected, 10)} {to.symbol}
                          </bdi>
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}

            {linear && linear.popularPairs.length > 0 && (
              <section aria-labelledby="popular">
                <SectionHeading id="popular">{t("page.popular")}</SectionHeading>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {linear.popularPairs.map(([from, to]) => (
                    <li key={`${from}-${to}`}>
                      <a
                        href={`${href(path)}?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`}
                        className="focus-ring inline-flex rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-brand-800 ring-1 ring-brand-100 transition-colors hover:bg-brand-50"
                      >
                        {name(from)} → {name(to)}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {linear && (
              <section aria-labelledby="units">
                <SectionHeading id="units">{t("page.units")}</SectionHeading>
                {base && <p className="mt-2 text-sm text-neutral-600">{t("page.unitsLead", { base: `${name(base.id)} (${base.symbol})` })}</p>}
                <div role="region" aria-labelledby="units" tabIndex={0} className="focus-ring card mt-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-neutral-50 text-xs text-neutral-600">
                      <tr>
                        <th scope="col" className="px-4 py-2.5 text-start font-semibold">
                          {t("widget.unit")}
                        </th>
                        <th scope="col" className="px-4 py-2.5 text-start font-semibold">
                          {t("widget.symbol")}
                        </th>
                        <th scope="col" className="px-4 py-2.5 text-end font-semibold">
                          {base ? base.symbol || name(base.id) : t("widget.value")}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {linear.units.map((unit) => {
                        const sameBase = !unit.dimension || unit.dimension === base?.dimension;
                        const linearFactor = unit.factor !== undefined && !unit.offset && !unit.toBase && sameBase;
                        return (
                          <tr key={unit.id} className="border-t border-neutral-100 even:bg-neutral-50/60">
                            <th scope="row" className="px-4 py-2 text-start font-medium text-ink-800">
                              {name(unit.id)}
                            </th>
                            <td className="px-4 py-2 text-ink-800">
                              <bdi dir="ltr">{unit.symbol || "—"}</bdi>
                            </td>
                            <td className="px-4 py-2 text-end text-ink-900 tabular-nums">
                              <bdi dir="ltr">{linearFactor ? fmt.significant(unit.factor!, 10) : "—"}</bdi>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            <section aria-labelledby="assumptions">
              <SectionHeading id="assumptions">{t("page.assumptions")}</SectionHeading>
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
              <SectionHeading id="faq">{t("page.faq")}</SectionHeading>
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

            {meta && meta.sources.length > 0 && (
              <section aria-labelledby="sources">
                <SectionHeading id="sources">{t("page.sources")}</SectionHeading>
                <p className="mt-2 text-sm text-neutral-600">{t("page.sourcesLead")}</p>
                <ul className="mt-4 space-y-3">
                  {meta.sources.map((source, index) => (
                    <li key={source.title} className="card p-4 text-sm">
                      <p className="font-semibold text-ink-900" lang="en" dir="ltr">
                        {source.url ? (
                          <a href={source.url} rel="noopener" className="focus-ring rounded text-brand-700 underline-offset-2 hover:underline">
                            {source.title}
                          </a>
                        ) : (
                          source.title
                        )}
                      </p>
                      <p className="mt-0.5 text-neutral-600" lang="en" dir="ltr">
                        {source.publisher}
                      </p>
                      {content.sourcesUsedFor[index] && <p className="mt-2 text-neutral-700">{t("page.usedFor", { text: content.sourcesUsedFor[index] })}</p>}
                    </li>
                  ))}
                </ul>
                {updated && <p className="mt-4 text-sm text-neutral-600">{t("page.updated", { date: updated })}</p>}
              </section>
            )}

            {related.length > 0 && (
              <section aria-labelledby="related">
                <SectionHeading id="related">{t("page.related")}</SectionHeading>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {related.map((r) => (
                    <li key={r.spec.id}>
                      <Link href={r.href} className="card-link flex items-start gap-3 p-4">
                        <ConverterIcon group={r.spec.group} size="sm" />
                        <span className="min-w-0">
                          <span className="block font-bold text-ink-900">{r.content.title}</span>
                          <span className="mt-0.5 line-clamp-2 block text-sm text-neutral-600">{r.content.summary}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </article>

          <aside className="hidden lg:block">
            <nav aria-label={t("page.onThisPage")} className="sticky top-24">
              <p className="eyebrow text-neutral-600">{t("page.onThisPage")}</p>
              <ul className="mt-3 space-y-1.5 border-s border-line ps-4 text-sm">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="focus-ring rounded text-neutral-700 hover:text-brand-700">
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </div>
      <JsonLd data={calculatorJsonLd({ name: content.title, description: content.metaDescription, path: href(path), category: "UtilitiesApplication", locale })} />
    </div>
  );
}
