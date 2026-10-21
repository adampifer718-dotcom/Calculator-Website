import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { calculatorsForLocale, readyLocales } from "@/calculators/localize";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";
import { HeaderSearch } from "./HeaderSearch";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Wordmark } from "./Logo";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { navCollections, navGroups } from "./nav-data";

const LINK = "focus-ring-light rounded-full px-2.5 py-2 xl:px-3 transition-colors hover:bg-white/10 hover:text-white";

export async function SiteHeader({ locale, availability }: { locale: Locale; availability: Record<string, Locale[]> }) {
  const t = await getTranslations("nav");
  const tc = await getTranslations("common");
  const tu = await getTranslations("converters");
  const groups = navGroups(locale);
  const collections = navCollections(locale);
  const total = calculatorsForLocale(locale).length;
  const locales = readyLocales();
  return (
    <header className="sticky top-0 z-40 bg-brand-800 text-white shadow-[0_1px_0_rgb(255_255_255/0.08),0_8px_24px_-16px_rgb(23_40_67/0.6)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-4 sm:gap-3 sm:px-6 lg:gap-2 xl:gap-4">
        <Link href={localizePath(locale, "/")} className="focus-ring-light -ms-1 flex shrink-0 items-center rounded-lg p-1">
          <Wordmark tone="light" />
        </Link>
        <nav aria-label={t("main")} className="hidden lg:block">
          <ul className="flex items-center gap-0.5 text-sm font-semibold whitespace-nowrap text-white/90">
            <li>
              <MegaMenu groups={groups} collections={collections} total={total} allHref={localizePath(locale, "/calculators")} />
            </li>
            <li>
              <Link href={localizePath(locale, "/calculators")} className={LINK}>
                {tc("allCalculators")}
              </Link>
            </li>
            <li>
              <Link href={localizePath(locale, "/unit-converters")} className={LINK}>
                {tu("nav")}
              </Link>
            </li>
            <li>
              <Link href={localizePath(locale, "/about")} className={LINK}>
                {tc("about")}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="ms-auto hidden max-w-64 min-w-38 flex-1 xl:block">
          <HeaderSearch id="header-search" label={t("siteSearch")} compact />
        </div>
        <div className="ms-auto xl:ms-0">
          <span className="hidden sm:inline lg:hidden xl:inline">
            <LanguageSwitcher locale={locale} locales={locales} availability={availability} variant="full" tone="dark" />
          </span>
          <span className="sm:hidden lg:inline xl:hidden">
            <LanguageSwitcher locale={locale} locales={locales} availability={availability} variant="compact" tone="dark" />
          </span>
        </div>
        <MobileMenu groups={groups} collections={collections} locale={locale} />
      </div>
    </header>
  );
}
