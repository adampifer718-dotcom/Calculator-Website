import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { calculatorsForLocale, readyLocales } from "@/calculators/localize";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";
import { SITE } from "@/lib/site";
import { HeaderSearch } from "./HeaderSearch";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { LogoMark } from "./Logo";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { navCollections, navGroups } from "./nav-data";

const LINK = "focus-ring rounded-md px-3 py-2 hover:bg-neutral-100 hover:text-ink-900";

export async function SiteHeader({ locale, availability }: { locale: Locale; availability: Record<string, Locale[]> }) {
  const t = await getTranslations("nav");
  const tc = await getTranslations("common");
  const groups = navGroups(locale);
  const collections = navCollections(locale);
  const total = calculatorsForLocale(locale).length;
  const locales = readyLocales();
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6 lg:gap-4">
        <Link href={localizePath(locale, "/")} className="focus-ring flex shrink-0 items-center gap-2 rounded-md font-semibold text-ink-900">
          <LogoMark />
          <span className="text-lg tracking-tight" dir="ltr">
            {SITE.name}
          </span>
        </Link>
        <nav aria-label={t("main")} className="hidden lg:block">
          <ul className="flex items-center gap-1 text-sm font-medium whitespace-nowrap text-neutral-700">
            <li>
              <MegaMenu groups={groups} collections={collections} total={total} allHref={localizePath(locale, "/calculators")} />
            </li>
            <li>
              <Link href={localizePath(locale, "/calculators")} className={LINK}>
                {tc("allCalculators")}
              </Link>
            </li>
            <li>
              <Link href={localizePath(locale, "/about")} className={LINK}>
                {tc("about")}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="ms-auto hidden w-56 lg:block xl:w-64">
          <HeaderSearch id="header-search" label={t("siteSearch")} />
        </div>
        <div className="ms-auto lg:ms-0">
          <span className="hidden sm:inline lg:inline">
            <LanguageSwitcher locale={locale} locales={locales} availability={availability} variant="full" />
          </span>
          <span className="sm:hidden">
            <LanguageSwitcher locale={locale} locales={locales} availability={availability} variant="compact" />
          </span>
        </div>
        <MobileMenu groups={groups} collections={collections} locale={locale} />
      </div>
    </header>
  );
}
