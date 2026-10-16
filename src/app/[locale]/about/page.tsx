import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { calculatorsForLocale, readyLocales } from "@/calculators/localize";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { localizePath } from "@/i18n/paths";
import { currentLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await currentLocale();
  const t = await getTranslations("meta");
  return pageMetadata({ locale, title: t("aboutTitle"), description: t("aboutDescription", { site: SITE.name }), path: "/about", locales: readyLocales() });
}

const PRINCIPLES = ["browser", "deterministic", "defaults", "currency", "language", "gross"] as const;

export default async function AboutPage() {
  const locale = await currentLocale();
  const t = await getTranslations("about");
  const tc = await getTranslations("common");
  const tn = await getTranslations("notFound");
  const href = (path: string) => localizePath(locale, path);
  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:px-6">
      <Breadcrumbs
        crumbs={[
          { name: tc("home"), href: href("/") },
          { name: tc("aboutMethodology"), href: href("/about") },
        ]}
      />
      <h1 className="mt-5 text-3xl font-extrabold tracking-[-0.025em] text-ink-900 sm:text-4xl">{t("title")}</h1>
      <div className="prose-calc card mt-6 space-y-8 p-6 sm:p-8">
        <section>
          <p>{t("intro", { site: SITE.name, count: calculatorsForLocale(locale).length })}</p>
        </section>
        <section aria-labelledby="principles">
          <h2 id="principles" className="mb-3 text-xl font-extrabold tracking-tight text-ink-900">
            {t("principles")}
          </h2>
          <ul className="list-disc space-y-2 ps-5">
            {PRINCIPLES.map((key) => (
              <li key={key}>{t(`principleList.${key}`)}</li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="limits">
          <h2 id="limits" className="mb-3 text-xl font-extrabold tracking-tight text-ink-900">
            {t("limitations")}
          </h2>
          <p>{t("limitationsBody")}</p>
        </section>
        <section aria-labelledby="translations">
          <h2 id="translations" className="mb-3 text-xl font-extrabold tracking-tight text-ink-900">
            {t("translations")}
          </h2>
          <p>{t("translationsBody")}</p>
        </section>
        <p>
          <Link href={href("/calculators")} className="focus-ring rounded font-medium text-brand-700 hover:underline">
            {tn("browse")}
          </Link>
        </p>
      </div>
    </div>
  );
}
