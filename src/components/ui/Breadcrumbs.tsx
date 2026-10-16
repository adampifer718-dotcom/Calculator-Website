import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { breadcrumbJsonLd, type Crumb } from "@/lib/structured-data";
import { JsonLd } from "./JsonLd";

/** Visible breadcrumb trail plus matching BreadcrumbList structured data. The last crumb is the current page. */
export async function Breadcrumbs({ crumbs }: { crumbs: readonly Crumb[] }) {
  const t = await getTranslations("common");
  return (
    <>
      <nav aria-label={t("breadcrumb")} className="text-sm">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-neutral-600">
          {crumbs.map((crumb, index) => {
            const last = index === crumbs.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {index > 0 && (
                  <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="size-4 text-neutral-400 rtl:-scale-x-100">
                    <path fillRule="evenodd" d="M7.2 14.8a.75.75 0 0 1 0-1.06L10.94 10 7.2 6.26a.75.75 0 1 1 1.06-1.06l4.27 4.27a.75.75 0 0 1 0 1.06L8.26 14.8a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                  </svg>
                )}
                {last ? (
                  <span aria-current="page" className="font-semibold text-ink-900">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.href} className="focus-ring rounded font-medium hover:text-brand-700 hover:underline">
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
