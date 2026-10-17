import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { categoryPath } from "@/calculators/categories";
import { collectionPath } from "@/calculators/collections";
import { calculatorsForLocale, categoriesFor, collectionsFor, featuredFor, getLocalizedCalculator, inCategory, popularFor, readyLocales } from "@/calculators/localize";
import { PAY_CONVERTER_TEXT } from "@/calculators/pay-converter/translations";
import PayConverter from "@/calculators/pay-converter/widget";
import { calculatorPath } from "@/calculators/registry";
import { HomeDirectory, type DirectoryCategory } from "@/components/home/HomeDirectory";
import { ConversionChart, HowToUse, PayFormulas } from "@/components/home/PayGuide";
import { HeaderSearch } from "@/components/layout/HeaderSearch";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { ArrowIcon, CheckCircleIcon } from "@/components/ui/Icons";
import { JsonLd } from "@/components/ui/JsonLd";
import { localizePath } from "@/i18n/paths";
import { currentLocale } from "@/i18n/server";
import { CURRENCY_CODES } from "@/lib/format";
import { midSentence } from "@/lib/parse";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { websiteJsonLd } from "@/lib/structured-data";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  const t = await getTranslations("meta");
  return pageMetadata({
    locale,
    title: t("homeTitle", { site: SITE.name }),
    absoluteTitle: true,
    description: t("homeDescription"),
    path: "/",
    locales: readyLocales(),
  });
}

function SectionHeader({ kicker, id, title, children, center = false }: { kicker: string; id: string; title: string; children?: React.ReactNode; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : ""}>
      <p className="eyebrow text-accent-700">{kicker}</p>
      <h2 id={id} className="mt-2 text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
        {title}
      </h2>
      {children && <p className={`mt-3 text-neutral-600 ${center ? "" : "max-w-2xl"}`}>{children}</p>}
    </div>
  );
}

/** Soft pastel shapes behind the hero, after the layered waves of the colour reference. Decorative only. */
function HeroShapes() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 760">
      <path d="M760 760c120-150 260-210 420-190s210-90 260-210v400z" fill="#CCDAEC" opacity="0.55" />
      <path d="M900 760c80-90 190-120 300-110s170-40 240-120v230z" fill="#EEB49F" opacity="0.45" />
      <circle cx="1310" cy="120" r="70" fill="#F7E6E4" />
      <circle cx="1225" cy="210" r="18" fill="#CDE8F1" />
      <circle cx="80" cy="640" r="120" fill="#F7E6E4" opacity="0.7" />
    </svg>
  );
}

export default async function HomePage() {
  const locale = await currentLocale();
  const t = await getTranslations("home");
  const tc = await getTranslations("common");
  const tm = await getTranslations("meta");
  const href = (path: string) => localizePath(locale, path);
  const all = calculatorsForLocale(locale);
  const popular = popularFor(locale, 8);
  const categories = categoriesFor(locale);
  const collections = collectionsFor(locale);
  const featured = featuredFor(locale, 6);
  const directions = ["hourly-to-salary-calculator", "salary-to-hourly-calculator"].flatMap((slug) => getLocalizedCalculator(slug, locale) ?? []);
  const directory: DirectoryCategory[] = categories.map((category) => ({
    slug: category.slug,
    name: category.name,
    href: href(categoryPath(category.slug)),
    count: category.count,
    calculators: inCategory(locale, category.slug).map((c) => ({ slug: c.def.slug, title: c.content.title, href: href(calculatorPath(c.def.slug)) })),
  }));
  const checklist = [
    t("highlights.free"),
    t("highlights.instant"),
    t("highlights.currencies", { count: CURRENCY_CODES.length }),
    t("pills.stored"),
    t("pills.assumptions"),
  ];
  const separator = locale === "ar" || locale === "ur" ? "، " : ", ";

  return (
    <>
      {/* Compact hero: heading and search, so the pay calculator sits near the top of the page. */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-line bg-gradient-to-b from-white to-cream">
        <HeroShapes />
        <div className="relative mx-auto grid max-w-7xl items-end gap-8 px-4 pt-8 pb-24 sm:px-6 sm:pt-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <p className="text-sm font-bold text-ink-900 sm:text-base">{tm("tagline")}</p>
            <h1 id="hero-heading" className="mt-3 text-3xl leading-[1.08] font-extrabold tracking-[-0.03em] text-balance text-ink-900 sm:text-4xl xl:text-5xl">
              {t("heroLead")} <span className="text-brand-700">{t("heroCount", { count: all.length })}</span> {t("heroTail")}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">{tm("siteDescription")}</p>
          </div>
          <div>
            <HeaderSearch id="hero-search" label={t("findCalculator")} size="xl" />
            <p className="mt-3 text-sm text-neutral-600">
              {t("try")}{" "}
              {popular.slice(0, 3).map((calculator, index) => (
                <span key={calculator.def.slug}>
                  {index > 0 && separator}
                  <Link href={href(calculatorPath(calculator.def.slug))} className="focus-ring rounded font-semibold text-brand-700 underline-offset-2 hover:underline">
                    {midSentence(calculator.content.shortTitle, locale)}
                  </Link>
                </span>
              ))}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-ink-800 ring-1 ring-line">
                  <CheckCircleIcon className="size-4 text-success" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The site's namesake tool: calculator in the wide column, a short how-to beside it (below it on phones). */}
      <div className="relative mx-auto -mt-16 grid max-w-7xl items-start gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_22rem]">
        <section aria-labelledby="pay-calculator-heading" className="min-w-0 overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-lift">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 bg-brand-800 px-5 py-4 text-white sm:px-7">
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-xl bg-accent-400 text-ink-900">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 7.5V12l3 2" />
              </svg>
            </span>
            <h2 id="pay-calculator-heading" className="text-xl font-extrabold tracking-tight sm:text-2xl">
              {t("payTitle")}
            </h2>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/25 sm:ms-auto">{t("payBadge")}</span>
          </div>
          <div className="p-3 sm:p-6">
            <p className="max-w-3xl px-1 pt-1 text-neutral-600 sm:px-0 sm:pt-0">{t("payLead")}</p>
            <div className="mt-5">
              <PayConverter locale={locale} text={PAY_CONVERTER_TEXT[locale]!} />
            </div>
            {directions.length > 0 && (
              <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line px-1 pt-4 text-sm text-neutral-600 sm:px-0">
                {t("payDirections")}
                {directions.map((calculator) => (
                  <Link
                    key={calculator.def.slug}
                    href={href(calculatorPath(calculator.def.slug))}
                    className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 font-bold text-brand-800 ring-1 ring-brand-100 hover:bg-brand-100"
                  >
                    {calculator.content.shortTitle}
                    <ArrowIcon className="size-4" />
                  </Link>
                ))}
              </p>
            )}
          </div>
        </section>
        <aside className="lg:sticky lg:top-24">
          <HowToUse locale={locale} />
        </aside>
      </div>

      {/* Formula guide and quick-reference chart, side by side on wide screens. */}
      <div className="mt-14 border-y border-line bg-white py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 xl:grid-cols-2 xl:gap-12">
          <PayFormulas locale={locale} />
          <ConversionChart locale={locale} />
        </div>
      </div>

      <section aria-labelledby="popular-heading" className="mx-auto max-w-7xl px-4 pt-14 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader kicker={t("popularKicker")} id="popular-heading" title={t("popular")} />
          <Link href={href("/calculators")} className="focus-ring inline-flex items-center gap-2 rounded-full font-bold text-brand-700 hover:text-brand-800">
            {t("viewAll", { count: all.length })}
            <ArrowIcon />
          </Link>
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {popular.map((calculator) => (
            <li key={calculator.def.slug}>
              <Link
                href={href(calculatorPath(calculator.def.slug))}
                className="focus-ring group flex h-full flex-col items-center justify-center gap-2.5 rounded-2xl border border-line bg-white px-2 py-4 text-center transition-all duration-150 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 hover:shadow-soft"
              >
                <CategoryIcon category={calculator.def.category} slug={calculator.def.slug} size="lg" />
                <span className="text-sm leading-snug font-bold text-ink-900 group-hover:text-brand-800">{calculator.content.shortTitle}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Categories row with dividers. */}
      <section aria-labelledby="categories-heading" className="mx-auto max-w-7xl px-4 pt-14 sm:px-6">
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="h-px flex-1 bg-line" />
          <h2 id="categories-heading" className="text-center text-xl font-extrabold tracking-tight text-brand-800 sm:text-2xl">
            {t("categoriesHeading")}
          </h2>
          <span aria-hidden="true" className="h-px flex-1 bg-line" />
        </div>
        <ul className="mt-6 grid grid-cols-2 overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-soft sm:grid-cols-4 lg:grid-cols-7">
          {categories.map((category) => (
            <li key={category.slug} className="border-line [&:not(:last-child)]:border-b sm:border-e">
              <Link
                href={href(categoryPath(category.slug))}
                className="focus-ring group flex h-full flex-col items-center gap-2.5 px-2 py-6 text-center transition-colors hover:bg-brand-50"
              >
                <CategoryIcon category={category.slug} size="xl" />
                <span className="text-sm leading-snug font-bold text-ink-900 group-hover:text-brand-800">{category.name}</span>
                <span className="text-xs font-medium text-neutral-500">{tc("calculatorCount", { count: category.count })}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="featured-heading" className="pt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader kicker={t("featuredKicker")} id="featured-heading" title={t("featured")} />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((calculator) => (
              <li key={calculator.def.slug}>
                <CalculatorCard calculator={calculator} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="collections-heading" className="pt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader kicker={t("collectionsKicker")} id="collections-heading" title={t("collections")}>
            {t("collectionsLead")}
          </SectionHeader>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection, index) => (
              <li key={collection.slug}>
                <Link
                  href={href(collectionPath(collection.slug))}
                  className="card card-link focus-ring group relative flex h-full flex-col overflow-hidden p-5 ps-6"
                >
                  <span aria-hidden="true" className={`absolute inset-y-0 start-0 w-1.5 ${["bg-brand-300", "bg-accent-400", "bg-sky", "bg-butter", "bg-blush"][index % 5]}`} />
                  <span className="flex items-start justify-between gap-3">
                    <span className="font-bold text-ink-900 group-hover:text-brand-700">{collection.name}</span>
                    <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-bold text-brand-800">{collection.count}</span>
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-neutral-600">{collection.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Complete directory, collapsed by default so the pay calculator stays the focus. */}
      <section aria-labelledby="directory-heading" className="mx-auto max-w-7xl px-4 pt-14 sm:px-6">
        <SectionHeader kicker={t("directoryKicker")} id="directory-heading" title={t("directory")} />
        <div className="mt-6">
          <HomeDirectory categories={directory} total={all.length} allHref={href("/calculators")} allLabel={t("directoryLink", { count: all.length })} />
        </div>
      </section>

      <section aria-labelledby="trust-heading" className="py-14">
        <h2 id="trust-heading" className="sr-only">
          {t("trustHeading", { site: SITE.name })}
        </h2>
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-2">
          <div className="card p-6 sm:p-8">
            <span aria-hidden="true" className="flex size-12 items-center justify-center rounded-2xl bg-mint text-success">
              <CheckCircleIcon className="size-6" />
            </span>
            <h3 className="mt-5 text-xl font-extrabold text-ink-900">{t("transparentTitle")}</h3>
            <p className="mt-3 leading-relaxed text-neutral-600">{t("transparentBody")}</p>
            <p dir="auto" className="mt-5 rounded-2xl bg-brand-50 p-4 font-mono text-sm font-semibold text-brand-900 ring-1 ring-brand-100">
              {t("transparentFormula")}
            </p>
            <Link href={href("/about")} className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full font-bold text-brand-700 hover:text-brand-800">
              {t("methodology")}
              <ArrowIcon />
            </Link>
          </div>
          <div className="card p-6 sm:p-8">
            <span aria-hidden="true" className="flex size-12 items-center justify-center rounded-2xl bg-blush text-accent-700">
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
              </svg>
            </span>
            <h3 className="mt-5 text-xl font-extrabold text-ink-900">{t("privateTitle")}</h3>
            <p className="mt-3 leading-relaxed text-neutral-600">{t("privateBody")}</p>
            <ul className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-ink-800">
              {[t("pills.account"), t("pills.stored"), t("pills.assumptions")].map((pill) => (
                <li key={pill} className="rounded-full bg-cream px-3 py-1.5 ring-1 ring-line">
                  {pill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <JsonLd data={websiteJsonLd({ locale, path: href("/"), description: tm("siteDescription") })} />
    </>
  );
}
