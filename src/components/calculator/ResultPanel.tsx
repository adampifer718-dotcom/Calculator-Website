import type { Evaluation } from "@/calculators/framework/evaluate";
import { formatResultValue } from "@/calculators/framework/format-result";

interface ResultPanelProps {
  evaluation: Evaluation;
  currency: string;
  formError?: string;
}

export function ResultPanel({ evaluation, currency, formError }: ResultPanelProps) {
  return (
    <section aria-labelledby="results-heading" className="card overflow-hidden lg:sticky lg:top-20">
      <div className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-5 sm:p-6">
        <h2 id="results-heading" className="text-sm font-semibold tracking-wide text-blue-800 uppercase">
          Results
        </h2>
        <div aria-live="polite" aria-atomic="true">
          {evaluation.ok ? (
            <>
              <p className="mt-2 text-sm font-medium text-slate-600">{evaluation.result.primary.label}</p>
              <p className="mt-1 text-4xl font-bold tracking-tight break-words text-navy-900 tabular-nums sm:text-5xl">
                {formatResultValue(evaluation.result.primary.value, currency)}
              </p>
              {evaluation.result.primary.caption && (
                <p className="mt-2 text-sm text-slate-600">{evaluation.result.primary.caption}</p>
              )}
            </>
          ) : (
            <p className="mt-2 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
              {formError ?? "Check the highlighted inputs. Results will appear when every value is valid."}
            </p>
          )}
        </div>
      </div>
      {evaluation.ok && (
        <div className="space-y-5 p-5 sm:p-6">
          {evaluation.result.secondary && evaluation.result.secondary.length > 0 && (
            <dl className="grid gap-3 sm:grid-cols-2">
              {evaluation.result.secondary.map((item) => (
                <div key={item.label} className="rounded-lg bg-slate-50 p-3">
                  <dt className="text-xs font-medium text-slate-600">{item.label}</dt>
                  <dd className="mt-0.5 text-lg font-semibold break-words text-navy-900 tabular-nums">
                    {formatResultValue(item.value, currency)}
                  </dd>
                </div>
              ))}
            </dl>
          )}
          {evaluation.result.table && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <caption className="mb-2 text-left text-sm font-semibold text-navy-900">
                  {evaluation.result.table.caption}
                </caption>
                <thead>
                  <tr className="border-b border-slate-200 text-xs text-slate-600">
                    {evaluation.result.table.columns.map((column, index) => (
                      <th key={column} scope="col" className={`py-2 font-medium ${index === 0 ? "" : "text-right"}`}>
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {evaluation.result.table.rows.map((row) => (
                    <tr key={row.label} className={`border-b border-slate-100 last:border-0 ${row.highlight ? "bg-blue-50/60" : ""}`}>
                      <th scope="row" className={`py-2 pr-2 pl-2 font-medium ${row.highlight ? "text-blue-900" : "text-navy-800"}`}>
                        {row.label}
                      </th>
                      {row.cells.map((cell, index) => (
                        <td key={index} className="py-2 pr-2 text-right text-navy-900 tabular-nums">
                          {formatResultValue(cell, currency)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {evaluation.result.notes && evaluation.result.notes.length > 0 && (
            <ul className="space-y-1.5 text-sm text-slate-600">
              {evaluation.result.notes.map((note) => (
                <li key={note} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-500" />
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
