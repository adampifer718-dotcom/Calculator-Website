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
import { JsonLd } from "@/components/ui/JsonLd";
import { LOCALE_INFO } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";
import { currentLocale } from "@/i18n/server";
import { CURRENCY_CODES } from "@/lib/format";
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

function Check({ className = "size-4 text-brand-600" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.58l7.3-7.29a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
    </svg>
  );
}

function Arrow({ className = "text-neutral-400" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className={`size-4 shrink-0 rtl:-scale-x-100 ${className}`}>
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
  const highlights = [t("highlights.instant"), t("highlights.currencies", { count: CURRENCY_CODES.length }), t("highlights.noSignup")];
  const intl = LOCALE_INFO[locale].intl;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div aria-hidden="true" className="absolute -top-32 start-1/3 h-80 w-80 rounded-full bg-brand-100/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 pt-10 pb-24 sm:px-6 sm:pt-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <h1 className="text-3xl leading-tight font-bold tracking-tight text-ink-900 sm:text-4xl">
            <span className="block text-xl font-semibold sm:text-2xl">{t("heroLead")}</span>
            <span className="block text-brand-700">{t("heroCount", { count: all.length })}</span>
            <span className="block">{t("heroTail")}</span>
          </h1>
          <div>
            <HeaderSearch id="hero-search" label={t("findCalculator")} size="xl" />
            <p className="mt-3 text-sm text-neutral-600">
              {t("try")}{" "}
              {popular.slice(0, 3).map((calculator, index) => (
                <span key={calculator.def.slug}>
                  {index > 0 && (locale === "ar" || locale === "ur" ? "، " : ", ")}
                  <Link href={href(calculatorPath(calculator.def.slug))} className="focus-ring rounded font-medium text-brand-700 hover:underline">
                    {calculator.content.shortTitle.toLocaleLowerCase(intl)}
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
            {t("categoriesHeading")}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] sm:gap-4">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={href(categoryPath(category.slug))}
                  className="focus-ring flex h-full items-center gap-4 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 transition-colors hover:border-brand-300 hover:bg-brand-50 sm:flex-col sm:justify-start sm:gap-2 sm:px-3 sm:py-6 sm:text-center"
                >
                  <CategoryIcon category={category.slug} size="lg" />
                  <span className="sm:mt-1">
                    <span className="block font-semibold text-ink-900">{category.name}</span>
                    <span className="mt-0.5 block text-xs text-neutral-600 sm:mt-2">
                      {tc("calculatorCount", { count: category.count })}
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
          <SectionHeader kicker={t("featuredKicker")} id="featured-heading" title={t("featured")} />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((calculator) => (
              <li key={calculator.def.slug}>
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
              <p className="text-xs font-semibold tracking-wide text-brand-700 uppercase">{t("popularKicker")}</p>
              <h2 id="popular-heading" className="mt-2 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
                {t("popular")}
              </h2>
            </div>

          </div>
          <ul className="mt-8 grid overflow-hidden rounded-xl border border-neutral-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
            {popular.map((calculator) => (
              <li key={calculator.def.slug} className="border-b border-neutral-200 sm:border-e">
                <Link
                  href={href(calculatorPath(calculator.def.slug))}
                  className="focus-ring group flex min-h-20 items-center justify-between gap-4 p-4 font-semibold text-ink-900 hover:bg-brand-50/60"
                >
                  {calculator.content.title}
                  <Arrow className="text-neutral-400 group-hover:text-brand-700" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            <Link href={href("/calculators")} className="focus-ring rounded font-medium text-brand-700 hover:underline">
              {t("viewAll", { count: all.length })}
            </Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="collections-heading" className="pt-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader kicker={t("collectionsKicker")} id="collections-heading" title={t("collections")}>
            {t("collectionsLead")}
          </SectionHeader>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <li key={collection.slug}>
                <Link
                  href={href(collectionPath(collection.slug))}
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
          <SectionHeader kicker={t("recentKicker")} id="recent-heading" title={t("recent")} />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((calculator) => (
              <li key={calculator.def.slug}>
                <CalculatorCard calculator={calculator} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="pay-calculator-heading" className="pt-14 pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="inline-flex items-center rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold text-brand-800">{t("payBadge")}</p>
          <h2 id="pay-calculator-heading" className="mt-3 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
            {t("payTitle")}
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            {t("payLead")}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-800">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <PayConverter locale={locale} text={PAY_CONVERTER_TEXT[locale]!} />
          </div>
        </div>
      </section>

      <HowToUse locale={locale} />
      <PayFormulas locale={locale} />
      <ConversionChart locale={locale} />

      <section aria-labelledby="directory-heading" className="border-t border-neutral-200 bg-neutral-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader kicker={t("directoryKicker")} id="directory-heading" title={t("directory")} />
          <div className="mt-8 columns-1 gap-8 sm:columns-2 lg:columns-4">
            {categories.map((category) => (
              <div key={category.slug} className="mb-8 break-inside-avoid">
                <h3 className="font-semibold text-ink-900">
                  <Link href={href(categoryPath(category.slug))} className="focus-ring rounded hover:text-brand-700">
                    {category.name}
                  </Link>
                </h3>
                <ul className="mt-2 space-y-1.5 text-sm">
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
          <p className="text-sm">
            <Link href={href("/calculators")} className="focus-ring rounded font-semibold text-brand-700 hover:underline">
              {t("directoryLink", { count: all.length })}
            </Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="trust-heading" className="py-14">
        <h2 id="trust-heading" className="sr-only">
          {t("trustHeading", { site: SITE.name })}
        </h2>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <span aria-hidden="true" className="flex size-11 items-center justify-center rounded-lg bg-brand-600">
              <Check className="size-5 text-white" />
            </span>
            <h3 className="mt-5 text-xl font-semibold text-ink-900">{t("transparentTitle")}</h3>
            <p className="mt-3 text-neutral-600">
              {t("transparentBody")}
            </p>
            <p dir="auto" className="mt-5 rounded-lg border border-neutral-200 bg-white p-4 font-mono text-sm font-semibold text-ink-900">
              {t("transparentFormula")}
            </p>
          </div>
          <div>
            <span aria-hidden="true" className="flex size-11 items-center justify-center rounded-lg bg-ink-900 text-white">
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
              </svg>
            </span>
            <h3 className="mt-5 text-xl font-semibold text-ink-900">{t("privateTitle")}</h3>
            <p className="mt-3 text-neutral-600">
              {t("privateBody")}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-ink-800">
              {[t("pills.account"), t("pills.stored"), t("pills.assumptions")].map((pill) => (
                <li key={pill} className="rounded-full border border-neutral-200 bg-white px-3 py-1.5">
                  {pill}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm">
              <Link href={href("/about")} className="focus-ring rounded font-medium text-brand-700 hover:underline">
                {t("methodology")}
              </Link>
            </p>
          </div>
        </div>
      </section>
      <JsonLd data={websiteJsonLd({ locale, path: href("/"), description: tm("siteDescription") })} />
    </>
  );
}
