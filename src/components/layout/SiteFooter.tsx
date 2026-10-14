import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { categoryPath } from "@/calculators/categories";
import { collectionPath } from "@/calculators/collections";
import { calculatorsForLocale, categoriesFor, collectionsFor } from "@/calculators/localize";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";
import { SITE } from "@/lib/site";
import { LogoMark } from "./Logo";

const LINK = "focus-ring rounded text-neutral-700 hover:text-brand-700";

export async function SiteFooter({ locale }: { locale: Locale }) {
  const t = await getTranslations("footer");
  const tc = await getTranslations("common");
  const categories = categoriesFor(locale);
  const collections = collectionsFor(locale);
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.2fr_1fr_1.4fr]">
        <div>
          <Link href={localizePath(locale, "/")} className="focus-ring inline-flex items-center gap-2 rounded-md font-semibold text-ink-900">
            <LogoMark className="size-7" />
            <span dir="ltr">{SITE.name}</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-neutral-600">{t("blurb", { count: calculatorsForLocale(locale).length })}</p>
          <ul className="mt-4 space-y-2 text-sm">
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
        </div>
        <nav aria-label={t("categories")}>
          <h2 className="text-sm font-semibold text-ink-900">{t("categories")}</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
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
          <h2 className="text-sm font-semibold text-ink-900">{t("collections")}</h2>
          <ul className="mt-3 grid gap-x-4 gap-y-2 text-sm sm:grid-cols-2">
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
      <div className="border-t border-neutral-100">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-neutral-500 sm:px-6">{t("disclaimer")}</p>
      </div>
    </footer>
  );
}
