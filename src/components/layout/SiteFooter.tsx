import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { categoryPath } from "@/calculators/categories";
import { collectionPath } from "@/calculators/collections";
import { calculatorsForLocale, categoriesFor, collectionsFor, readyLocales } from "@/calculators/localize";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Wordmark } from "./Logo";

const LINK = "focus-ring-light rounded text-brand-100 transition-colors hover:text-white hover:underline";
const HEADING = "eyebrow text-accent-300";

export async function SiteFooter({ locale, availability }: { locale: Locale; availability: Record<string, Locale[]> }) {
  const t = await getTranslations("footer");
  const tc = await getTranslations("common");
  const tl = await getTranslations("language");
  const categories = categoriesFor(locale);
  const collections = collectionsFor(locale);
  return (
    <footer className="mt-20 bg-brand-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-14 pb-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.25fr_1fr_1.5fr]">
        <div>
          <Link href={localizePath(locale, "/")} className="focus-ring-light inline-flex rounded-lg p-1">
            <Wordmark tone="light" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-100">{t("blurb", { count: calculatorsForLocale(locale).length })}</p>
          <ul className="mt-5 space-y-2.5 text-sm font-semibold">
            <li>
              <Link href={localizePath(locale, "/calculators")} className={LINK}>
                {tc("allCalculators")}
              </Link>
            </li>
            <li>
              <Link href={localizePath(locale, "/about")} className={LINK}>
                {tc("aboutMethodology")}
              </Link>
            </li>
          </ul>
          <div className="mt-6">
            <p className={HEADING}>{tl("label")}</p>
            <div className="mt-3">
              <LanguageSwitcher locale={locale} locales={readyLocales()} availability={availability} tone="dark" placement="top" marker={false} />
            </div>
          </div>
        </div>
        <nav aria-label={t("categories")}>
          <h2 className={HEADING}>{t("categories")}</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={localizePath(locale, categoryPath(category.slug))} className={LINK}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={t("collections")}>
          <h2 className={HEADING}>{t("collections")}</h2>
          <ul className="mt-4 grid gap-x-4 gap-y-2.5 text-sm sm:grid-cols-2">
            {collections.map((collection) => (
              <li key={collection.slug}>
                <Link href={localizePath(locale, collectionPath(collection.slug))} className={LINK}>
                  {collection.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs leading-relaxed text-brand-200 sm:px-6">{t("disclaimer")}</p>
      </div>
    </footer>
  );
}
