"use client";

import { useTranslations } from "next-intl";
import type { Evaluation } from "@/calculators/framework/evaluate";
import { formatResultValue, resultDir } from "@/calculators/framework/format-result";
import type { Locale } from "@/i18n/config";

interface ResultPanelProps {
  evaluation: Evaluation;
  currency: string;
  locale: Locale;
  formError?: string;
}

export function ResultPanel({ evaluation, currency, locale, formError }: ResultPanelProps) {
  const t = useTranslations("calculator");
  const format = (value: Parameters<typeof formatResultValue>[0]) => formatResultValue(value, currency, locale);
  return (
    <section aria-labelledby="results-heading" className="card overflow-hidden @4xl:sticky @4xl:top-20">
      <div className="relative overflow-hidden border-b border-brand-100 bg-brand-50 p-5 sm:p-7">
        <svg aria-hidden="true" viewBox="0 0 200 120" className="pointer-events-none absolute -end-6 -bottom-8 w-56 opacity-90 rtl:-scale-x-100">
          <path d="M0 120c30-40 70-60 110-50s70-20 90-60v110z" fill="#CCDAEC" />
          <path d="M60 120c25-25 55-35 90-30s40-15 50-35v65z" fill="#F6D2C4" />
        </svg>
        <h2 id="results-heading" className="eyebrow relative flex items-center gap-2 text-brand-800">
          <span aria-hidden="true" className="size-2 rounded-full bg-accent-500" />
          {t("results")}
        </h2>
        <div aria-live="polite" aria-atomic="true">
          {evaluation.ok ? (
            <>
              <p className="relative mt-3 text-sm font-semibold text-neutral-700">{evaluation.result.primary.label}</p>
              <p className="relative mt-1 text-4xl font-extrabold tracking-tight break-words text-brand-900 tabular-nums sm:text-5xl">
                <bdi dir={resultDir(evaluation.result.primary.value)}>{format(evaluation.result.primary.value)}</bdi>
              </p>
              {evaluation.result.primary.caption && <p className="relative mt-2 max-w-md text-sm text-neutral-700">{evaluation.result.primary.caption}</p>}
            </>
          ) : (
            <p className="relative mt-3 flex items-start gap-2 rounded-2xl border border-amber-300 bg-warning-tint p-4 text-sm font-semibold text-warning">
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 size-4 shrink-0">
                <path fillRule="evenodd" d="M8.49 2.86a1.75 1.75 0 0 1 3.02 0l6.28 10.88A1.75 1.75 0 0 1 16.28 16.4H3.72a1.75 1.75 0 0 1-1.51-2.63L8.49 2.86ZM10 6.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 10 6.5Zm0 7.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
              </svg>
              <span>{formError ?? t("checkInputs")}</span>
            </p>
          )}
        </div>
      </div>
      {evaluation.ok && (
        <div className="space-y-6 p-5 sm:p-7">
          {evaluation.result.secondary && evaluation.result.secondary.length > 0 && (
            <dl className="grid gap-3 sm:grid-cols-2">
              {evaluation.result.secondary.map((item) => (
                <div key={item.label} className="rounded-2xl bg-cream p-4 ring-1 ring-line">
                  <dt className="text-xs font-semibold text-neutral-600">{item.label}</dt>
                  <dd className="mt-1 text-lg font-extrabold break-words text-ink-900 tabular-nums">
                    <bdi dir={resultDir(item.value)}>{format(item.value)}</bdi>
                  </dd>
                </div>
              ))}
            </dl>
          )}
          {evaluation.result.tables?.map((table) => (
            <div key={table.caption} role="region" aria-label={table.caption} tabIndex={0} className="focus-ring overflow-x-auto rounded-2xl ring-1 ring-line">
              <table className="w-full text-start text-sm">
                <caption className="bg-white px-4 pt-4 pb-3 text-start text-sm font-bold text-ink-900">{table.caption}</caption>
                <thead>
                  <tr className="bg-neutral-50 text-xs text-neutral-600">
                    {table.columns.map((column, index) => (
                      <th key={column} scope="col" className={`px-4 py-2.5 font-semibold ${index === 0 ? "text-start" : "text-end"}`}>
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, rowIndex) => (
                    <tr key={`${rowIndex}-${row.label}`} className={`border-t border-neutral-100 ${row.highlight ? "bg-brand-50" : "even:bg-neutral-50/50"}`}>
                      <th scope="row" className={`px-4 py-2.5 text-start font-semibold ${row.highlight ? "text-brand-900" : "text-ink-800"}`}>
                        <bdi>{row.label}</bdi>
                      </th>
                      {row.cells.map((cell, index) => (
                        <td key={index} className="px-4 py-2.5 text-end font-medium text-ink-900 tabular-nums">
                          <bdi dir={resultDir(cell)}>{format(cell)}</bdi>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
          {evaluation.result.notes && evaluation.result.notes.length > 0 && (
            <ul className="space-y-1.5 text-sm text-neutral-600">
              {evaluation.result.notes.map((note) => (
                <li key={note} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-500" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}
