import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Geist, Noto_Naskh_Arabic } from "next/font/google";
import { calculatorLocales, readyLocales } from "@/calculators/localize";
import { CALCULATORS } from "@/calculators/registry";
import { LocaleSuggestion } from "@/components/layout/LocaleSuggestion";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { LOCALE_INFO, type Locale } from "@/i18n/config";
import { layoutLocale } from "@/i18n/server";
import { SITE, SITE_URL } from "@/lib/site";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// Urdu and Arabic. Not preloaded, so LTR pages never download it.
const notoArabic = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

export function generateStaticParams() {
  return readyLocales().map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await layoutLocale();
  const t = await getTranslations("meta");
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: `${SITE.name} – ${t("tagline")}`, template: `%s | ${SITE.name}` },
    description: t("siteDescription"),
    applicationName: SITE.name,
    openGraph: { type: "website", siteName: SITE.name, locale: LOCALE_INFO[locale].og },
    twitter: { card: "summary" },
    formatDetection: { telephone: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = await layoutLocale();
  const { dir } = LOCALE_INFO[locale];
  const messages = await getMessages();
  const t = await getTranslations("common");
  // Which locales each calculator exists in, so the language selector never links to a missing page.
  const availability = Object.fromEntries(CALCULATORS.map((c) => [c.slug, calculatorLocales(c)])) as Record<string, Locale[]>;

  return (
    <html lang={locale} dir={dir} className={`${geistSans.variable} ${dir === "rtl" ? notoArabic.variable : ""} antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
          <a
            href="#main"
            className="sr-only z-50 rounded-md bg-white px-4 py-2 font-medium text-brand-700 shadow focus:not-sr-only focus:fixed focus:start-3 focus:top-3"
          >
            {t("skipToContent")}
          </a>
          <SiteHeader locale={locale} availability={availability} />
          <LocaleSuggestion locale={locale} availability={availability} readyLocales={readyLocales()} />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
