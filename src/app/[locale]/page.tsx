import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { categoryPath } from "@/calculators/categories";
import { collectionPath } from "@/calculators/collections";
import { calculatorsForLocale, categoriesFor, collectionsFor, featuredFor, inCategory, popularFor, readyLocales, recentFor } from "@/calculators/localize";
import { PAY_CONVERTER_TEXT } from "@/calculators/pay-converter/translations";
import PayConverter from "@/calculators/pay-converter/widget";
import { calculatorPath } from "@/calculators/registry";
import { ConversionChart, HowToUse, PayFormulas } from "@/components/home/PayGuide";
import { HeaderSearch } from "@/components/layout/HeaderSearch";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { ArrowIcon, CheckCircleIcon, StarIcon } from "@/components/ui/Icons";
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
  const recent = recentFor(locale, 6);
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
      {/* Hero: split layout, text and search on one side, popular tools panel on the other. */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-line bg-gradient-to-b from-white to-cream">
        <HeroShapes />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 lg:pb-20">
          <div>
            <p className="text-base font-bold text-ink-900 sm:text-lg">{tm("tagline")}</p>
            <span aria-hidden="true" className="mt-4 block h-1 w-14 rounded-full bg-accent-500" />
            <h1 id="hero-heading" className="mt-6 text-4xl leading-[1.04] font-extrabold tracking-[-0.03em] text-balance text-ink-900 sm:text-5xl xl:text-6xl">
              <span className="block">{t("heroLead")}</span>
              <span className="block text-brand-700">{t("heroCount", { count: all.length })}</span>
              <span className="block text-brand-700">{t("heroTail")}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-600">{tm("siteDescription")}</p>
            <div className="mt-7 max-w-xl">
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
            </div>
            <ul className="mt-7 grid max-w-xl gap-x-6 gap-y-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 font-semibold text-ink-800">
                  <CheckCircleIcon className="size-6 text-success" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={href("/calculators")}
              className="focus-ring btn-primary mt-8 h-14 ps-6 pe-2 text-base shadow-[0_10px_24px_-12px_rgb(63_100_150/0.8)]"
            >
              {t("viewAll", { count: all.length })}
              <span className="flex size-10 items-center justify-center rounded-full bg-accent-400 text-ink-900">
                <ArrowIcon className="size-5" />
              </span>
            </Link>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -top-10 -start-8 z-10 hidden size-36 rotate-[-8deg] flex-col items-center justify-center rounded-full bg-brand-800 p-3 text-center text-white shadow-lift ring-8 ring-white lg:flex"
            >
              <span className="absolute inset-2 rounded-full border-2 border-dashed border-white/35" />
              <StarIcon className="size-6 text-butter" />
              <span className="mt-1 text-lg leading-tight font-extrabold">{t("highlights.free")}</span>
              <span className="mt-0.5 text-xs leading-tight font-semibold text-accent-300">{t("highlights.noSignup")}</span>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-lift">
              <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-1 bg-brand-800 px-6 py-5 text-white lg:ps-32">
                <h2 id="popular-heading" className="text-xl font-extrabold tracking-tight">
                  {t("popular")}
                </h2>
                <Link href={href("/calculators")} className="focus-ring-light rounded text-sm font-semibold text-accent-300 hover:text-white hover:underline">
                  {t("viewAll", { count: all.length })}
                </Link>
              </div>
              <ul className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4 sm:p-5">
                {popular.map((calculator, index) => (
                  <li key={calculator.def.slug}>
                    <Link
                      href={href(calculatorPath(calculator.def.slug))}
                      className={`focus-ring group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border px-2 py-5 text-center transition-all duration-150 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 hover:shadow-soft ${
                        index === 0 ? "border-brand-300 bg-brand-50" : "border-line bg-white"
                      }`}
                    >
                      <CategoryIcon category={calculator.def.category} slug={calculator.def.slug} size="lg" />
                      <span className="text-sm leading-snug font-bold text-ink-900 group-hover:text-brand-800">{calculator.content.shortTitle}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The site's namesake tool, directly below the hero. */}
      <section aria-labelledby="pay-calculator-heading" className="mx-auto max-w-7xl px-4 pt-12 sm:px-6">
        <div className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-soft">
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
            <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-bold text-accent-300 ring-1 ring-white/20 sm:ms-auto">{t("payBadge")}</span>
          </div>
          <div className="p-3 sm:p-7">
            <p className="max-w-3xl px-1 pt-1 text-neutral-600 sm:px-0 sm:pt-0">{t("payLead")}</p>
            <div className="mt-6">
              <PayConverter locale={locale} text={PAY_CONVERTER_TEXT[locale]!} />
            </div>
          </div>
        </div>
      </section>

      {/* Categories row with dividers. */}
      <section aria-labelledby="categories-heading" className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
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

      <section aria-labelledby="featured-heading" className="pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader kicker={t("featuredKicker")} id="featured-heading" title={t("featured")} />
          <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((calculator) => (
              <li key={calculator.def.slug}>
                <CalculatorCard calculator={calculator} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="collections-heading" className="pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader kicker={t("collectionsKicker")} id="collections-heading" title={t("collections")}>
            {t("collectionsLead")}
          </SectionHeader>
          <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      <section aria-labelledby="recent-heading" className="pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader kicker={t("recentKicker")} id="recent-heading" title={t("recent")} />
            <Link href={href("/calculators")} className="focus-ring inline-flex items-center gap-2 rounded-full font-bold text-brand-700 hover:text-brand-800">
              {t("viewAll", { count: all.length })}
              <ArrowIcon />
            </Link>
          </div>
          <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((calculator) => (
              <li key={calculator.def.slug}>
                <CalculatorCard calculator={calculator} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="pt-6">
        <HowToUse locale={locale} />
        <PayFormulas locale={locale} />
        <ConversionChart locale={locale} />
      </div>

      <section aria-labelledby="directory-heading" className="mt-14 border-y border-line bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader kicker={t("directoryKicker")} id="directory-heading" title={t("directory")} />
          <div className="mt-9 columns-1 gap-10 sm:columns-2 lg:columns-4">
            {categories.map((category) => (
              <div key={category.slug} className="mb-9 break-inside-avoid">
                <h3>
                  <Link href={href(categoryPath(category.slug))} className="focus-ring group flex items-center gap-2.5 rounded-lg font-bold text-ink-900 hover:text-brand-700">
                    <CategoryIcon category={category.slug} size="sm" />
                    {category.name}
                  </Link>
                </h3>
                <ul className="mt-3 space-y-2 border-s-2 border-line ps-4 text-sm">
                  {inCategory(locale, category.slug).map((calculator) => (
                    <li key={calculator.def.slug}>
                      <Link href={href(calculatorPath(calculator.def.slug))} className="focus-ring rounded text-neutral-700 hover:text-brand-700 hover:underline">
                        {calculator.content.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link href={href("/calculators")} className="focus-ring btn-primary h-12 px-6 text-sm">
            {t("directoryLink", { count: all.length })}
            <ArrowIcon />
          </Link>
        </div>
      </section>

      <section aria-labelledby="trust-heading" className="py-16">
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

      {/* Trust band above the footer. */}
      <section aria-label={t("trustHeading", { site: SITE.name })} className="mx-auto -mb-10 max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-6 rounded-[1.75rem] bg-brand-800 px-6 py-7 text-white sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,1.2fr)] lg:px-8">
          {[
            { label: t("privateTitle"), icon: "M10 2l7 3v5c0 4.4-3 7.4-7 8-4-.6-7-3.6-7-8V5l7-3zM7 10l2 2 4-4" },
            { label: t("highlights.instant"), icon: "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM10 6v4l2.5 1.5" },
            { label: t("transparentTitle"), icon: "M4 4h12v12H4zM7 8h6M7 12h4" },
          ].map((item) => (
            <p key={item.label} className="flex items-center gap-3 font-bold">
              <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-full ring-2 ring-white/25">
                <svg viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon} />
                </svg>
              </span>
              {item.label}
            </p>
          ))}
          <Link
            href={href("/about")}
            className="focus-ring-light flex items-center justify-between gap-3 rounded-2xl border-2 border-butter/80 px-5 py-4 font-bold text-butter transition-colors hover:bg-white/5"
          >
            <span className="flex items-center gap-3">
              <StarIcon className="size-6" />
              {t("methodology")}
            </span>
            <ArrowIcon />
          </Link>
        </div>
      </section>
      <JsonLd data={websiteJsonLd({ locale, path: href("/"), description: tm("siteDescription") })} />
    </>
  );
}
