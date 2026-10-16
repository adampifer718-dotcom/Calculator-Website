import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { readyLocales } from "@/calculators/localize";
import { ConverterIcon } from "@/components/converters/ConverterIcon";
import { ConverterSearch, EntryLink } from "@/components/converters/ConverterSearch";
import { UniversalConverter } from "@/components/converters/UniversalConverter";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { CONVERTERS_PATH, convertersForLocale, type LocalizedConverter } from "@/converters/catalog";
import { converterEntries, universalOptions } from "@/converters/directory-data";
import { findUnitSpec } from "@/converters/engine";
import { getSpec, isLinear } from "@/converters/specs";
import { CONVERTER_GROUPS } from "@/converters/types";
import { localizePath } from "@/i18n/paths";
import { currentLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";
import { itemListJsonLd } from "@/lib/structured-data";

/** Everyday conversions shown as shortcuts at the top. */
const POPULAR: readonly [string, string, string][] = [
  ["length", "km", "mi"],
  ["weight", "lb", "kg"],
  ["temperature", "C", "F"],
  ["volume", "gal", "l"],
  ["pressure", "bar", "psi"],
  ["energy", "kwh", "btu"],
  ["power", "hp", "kw"],
  ["fuel-consumption", "mpgus", "l100km"],
  ["data-storage", "GB", "GiB"],
  ["speed", "kmh", "mph"],
  ["force", "n", "lbf"],
  ["angle", "deg", "rad"],
];

/** A shortcut link: new converter pages open with the pair selected; calculator pages open with their defaults. */
function pairHref(converter: LocalizedConverter, from: string, to: string) {
  return converter.existing ? converter.href : `${converter.href}?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  const t = await getTranslations("converters");
  return pageMetadata({
    locale,
    title: t("metaTitle"),
    description: t("metaDescription", { count: convertersForLocale(locale).length }),
    path: CONVERTERS_PATH,
    locales: readyLocales(),
  });
}

export default async function UnitConvertersPage() {
  const locale = await currentLocale();
  const t = await getTranslations("converters");
  const tc = await getTranslations("common");
  const href = (p: string) => localizePath(locale, p);
  const converters = convertersForLocale(locale);
  const byId = new Map(converters.map((c) => [c.spec.id, c]));
  const entries = converterEntries(locale);
  const groups = CONVERTER_GROUPS.map((id) => ({ id, name: t(`groups.${id}.name`), description: t(`groups.${id}.description`), count: converters.filter((c) => c.spec.group === id).length })).filter(
    (g) => g.count > 0,
  );
  const groupNames = Object.fromEntries(groups.map((g) => [g.id, g.name]));

  const pair = (converter: LocalizedConverter, from: string, to: string) => {
    const spec = converter.spec;
    if (!isLinear(spec) || !findUnitSpec(spec, from) || !findUnitSpec(spec, to)) return undefined;
    const name = (id: string) => converter.content.units[id] ?? id;
    return { key: `${spec.id}-${from}-${to}`, href: pairHref(converter, from, to), from: name(from), to: name(to), group: spec.group, title: converter.content.shortTitle };
  };
  const popular = POPULAR.flatMap(([id, from, to]) => {
    const c = byId.get(id);
    const p = c && pair(c, from, to);
    return p ? [p] : [];
  });
  const shown = new Set(popular.map((p) => p.key));
  // Two common pairs from each converter page, skipping the shortcuts above.
  const frequent = converters
    .filter((c) => !c.existing)
    .flatMap((c) => {
      const spec = getSpec(c.spec.id);
      return spec && isLinear(spec) ? spec.popularPairs.slice(0, 2).flatMap(([from, to]) => pair(c, from, to) ?? []) : [];
    })
    .filter((p) => !shown.has(p.key))
    .slice(0, 24);

  return (
    <div>
      <div className="relative overflow-hidden border-b border-line bg-white">
        <svg aria-hidden="true" viewBox="0 0 400 200" className="pointer-events-none absolute -end-10 -bottom-10 hidden w-[30rem] sm:block rtl:-scale-x-100">
          <path d="M0 200c60-70 140-100 220-85s130-35 180-115v200z" fill="#E5EDF7" />
          <path d="M120 200c50-45 110-60 170-52s80-25 110-60v112z" fill="#FBE8E0" />
        </svg>
        <div className="relative mx-auto max-w-7xl px-4 pt-6 pb-12 sm:px-6">
          <Breadcrumbs
            crumbs={[
              { name: tc("home"), href: href("/") },
              { name: t("breadcrumb"), href: href(CONVERTERS_PATH) },
            ]}
          />
          <header className="mt-6 max-w-3xl">
            <h1 className="text-3xl leading-tight font-extrabold tracking-[-0.025em] text-ink-900 sm:text-[2.6rem]">{t("title")}</h1>
            <p className="mt-3 text-lg leading-relaxed text-neutral-600">{t("lead", { count: converters.length })}</p>
          </header>
          <div className="mt-7">
            <ConverterSearch entries={entries} />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-14 px-4 py-12 sm:px-6">
        <section aria-labelledby="popular-heading">
          <h2 id="popular-heading" className="text-2xl font-extrabold tracking-tight text-ink-900">
            {t("popularHeading")}
          </h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:grid-cols-4">
            {popular.map((p) => (
              <li key={p.key}>
                <Link href={p.href} className="card-link flex h-full items-center gap-3 p-4">
                  <ConverterIcon group={p.group} size="sm" />
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold text-neutral-600">{p.title}</span>
                    <span className="block font-bold break-words hyphens-auto text-ink-900">
                      {p.from} <span aria-hidden="true">→</span>
                      <span className="sr-only">,</span> {p.to}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="groups-heading">
          <h2 id="groups-heading" className="text-2xl font-extrabold tracking-tight text-ink-900">
            {t("groupsHeading")}
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((g) => (
              <li key={g.id}>
                <a href={`#${g.id}-converters`} className="card-link flex h-full items-start gap-4 p-5">
                  <ConverterIcon group={g.id} size="lg" />
                  <span className="min-w-0">
                    <span className="block text-lg font-extrabold break-words hyphens-auto text-ink-900">{g.name}</span>
                    <span className="mt-0.5 block text-xs font-semibold text-brand-700">{t("groupCount", { count: g.count })}</span>
                    <span className="mt-1.5 block text-sm text-neutral-600">{g.description}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="quick-heading">
          <h2 id="quick-heading" className="text-2xl font-extrabold tracking-tight text-ink-900">
            {t("quickHeading")}
          </h2>
          <p className="mt-2 text-neutral-600">{t("quickLead")}</p>
          <div className="mt-5">
            <UniversalConverter options={universalOptions(locale)} groupNames={groupNames} initial="length" />
          </div>
        </section>

        {frequent.length > 0 && (
          <section aria-labelledby="pairs-heading">
            <h2 id="pairs-heading" className="text-2xl font-extrabold tracking-tight text-ink-900">
              {t("pairsHeading")}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {frequent.map((p) => (
                <li key={p.key}>
                  <Link href={p.href} className="focus-ring inline-flex rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-brand-800 ring-1 ring-brand-100 transition-colors hover:bg-brand-50">
                    {p.from} → {p.to}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section aria-labelledby="directory-heading">
          <h2 id="directory-heading" className="text-2xl font-extrabold tracking-tight text-ink-900">
            {t("directoryHeading")}
          </h2>
          <div className="mt-6 space-y-10">
            {groups.map((g) => (
              <section key={g.id} id={`${g.id}-converters`} aria-labelledby={`${g.id}-converters-heading`} className="scroll-mt-24">
                <h3 id={`${g.id}-converters-heading`} className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xl font-extrabold text-ink-900">
                  <ConverterIcon group={g.id} size="sm" />
                  {g.name}
                  <span className="text-sm font-semibold text-neutral-600">{t("groupCount", { count: g.count })}</span>
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {entries
                    .filter((e) => e.group === g.id)
                    .map((entry) => (
                      <li key={entry.id}>
                        <EntryLink entry={entry} />
                      </li>
                    ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="mt-10">
            <Link href={href("/calculators")} className="focus-ring rounded font-bold text-brand-700 hover:underline">
              {t("calculatorsLink")}
            </Link>
          </p>
        </section>
      </div>
      <JsonLd data={itemListJsonLd(t("title"), entries.map((e) => ({ name: e.title, href: e.href })))} />
    </div>
  );
}
