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
    <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
      <p className="text-6xl font-extrabold tracking-tight text-accent-400">404</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-[-0.025em] text-ink-900">{t("title")}</h1>
      <p className="mt-3 text-neutral-600">{t("body")}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href={href("/calculators")} className="focus-ring btn-primary h-11 px-5 text-sm">
          {t("browse")}
        </Link>
        <Link href={href("/")} className="focus-ring inline-flex h-11 items-center rounded-full border border-neutral-300 bg-white px-5 text-sm font-bold text-ink-900 hover:bg-neutral-50">
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
