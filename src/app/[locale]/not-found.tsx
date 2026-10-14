import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { popularFor } from "@/calculators/localize";
import { calculatorPath } from "@/calculators/registry";
import { localizePath } from "@/i18n/paths";
import { layoutLocale } from "@/i18n/server";

export default async function NotFound() {
  const locale = await layoutLocale();
  const t = await getTranslations("notFound");
  const href = (path: string) => localizePath(locale, path);
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
      <p className="text-sm font-semibold text-brand-700">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-900">{t("title")}</h1>
      <p className="mt-3 text-neutral-600">{t("body")}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href={href("/calculators")} className="focus-ring rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
          {t("browse")}
        </Link>
        <Link href={href("/")} className="focus-ring rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-ink-900 hover:bg-neutral-50">
          {t("home")}
        </Link>
      </div>
      <ul className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
        {popularFor(locale, 5).map((c) => (
          <li key={c.def.slug}>
            <Link href={href(calculatorPath(c.def.slug))} className="focus-ring rounded text-brand-700 hover:underline">
              {c.content.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
