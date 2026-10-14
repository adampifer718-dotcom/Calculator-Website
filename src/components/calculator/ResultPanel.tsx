"use client";

import { useTranslations } from "next-intl";
import type { Evaluation } from "@/calculators/framework/evaluate";
import { formatResultValue } from "@/calculators/framework/format-result";
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
    <section aria-labelledby="results-heading" className="card overflow-hidden lg:sticky lg:top-20">
      <div className="border-b border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-50 p-5 sm:p-6">
        <h2 id="results-heading" className="text-sm font-semibold tracking-wide text-brand-800 uppercase">
          {t("results")}
        </h2>
        <div aria-live="polite" aria-atomic="true">
          {evaluation.ok ? (
            <>
              <p className="mt-2 text-sm font-medium text-neutral-600">{evaluation.result.primary.label}</p>
              <p className="mt-1 text-4xl font-bold tracking-tight break-words text-ink-900 tabular-nums sm:text-5xl">
                <bdi>{format(evaluation.result.primary.value)}</bdi>
              </p>
              {evaluation.result.primary.caption && <p className="mt-2 text-sm text-neutral-600">{evaluation.result.primary.caption}</p>}
            </>
          ) : (
            <p className="mt-2 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">{formError ?? t("checkInputs")}</p>
          )}
        </div>
      </div>
      {evaluation.ok && (
        <div className="space-y-5 p-5 sm:p-6">
          {evaluation.result.secondary && evaluation.result.secondary.length > 0 && (
            <dl className="grid gap-3 sm:grid-cols-2">
              {evaluation.result.secondary.map((item) => (
                <div key={item.label} className="rounded-lg bg-neutral-50 p-3">
                  <dt className="text-xs font-medium text-neutral-600">{item.label}</dt>
                  <dd className="mt-0.5 text-lg font-semibold break-words text-ink-900 tabular-nums">
                    <bdi>{format(item.value)}</bdi>
                  </dd>
                </div>
              ))}
            </dl>
          )}
          {evaluation.result.tables?.map((table) => (
            <div key={table.caption} role="region" aria-label={table.caption} tabIndex={0} className="focus-ring overflow-x-auto rounded">
              <table className="w-full text-start text-sm">
                <caption className="mb-2 text-start text-sm font-semibold text-ink-900">{table.caption}</caption>
                <thead>
                  <tr className="border-b border-neutral-200 text-xs text-neutral-600">
                    {table.columns.map((column, index) => (
                      <th key={column} scope="col" className={`py-2 font-medium ${index === 0 ? "text-start" : "text-end"}`}>
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, rowIndex) => (
                    <tr key={`${rowIndex}-${row.label}`} className={`border-b border-neutral-100 last:border-0 ${row.highlight ? "bg-brand-50/60" : ""}`}>
                      <th scope="row" className={`py-2 ps-2 pe-2 text-start font-medium ${row.highlight ? "text-brand-900" : "text-ink-800"}`}>
                        <bdi>{row.label}</bdi>
                      </th>
                      {row.cells.map((cell, index) => (
                        <td key={index} className="py-2 pe-2 text-end text-ink-900 tabular-nums">
                          <bdi>{format(cell)}</bdi>
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
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
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
