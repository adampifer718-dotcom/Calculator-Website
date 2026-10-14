import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import { balanceAfter, loanPayment } from "@/lib/math/loan";
import en, { type LoanPaymentText } from "./text/en";

export type LoanValues = { principal: number; rate: number; years: number; currency: string };

export function makeLoanPaymentEngine(ctx: EngineContext<LoanPaymentText>) {
  const t = ctx.text;
  return defineEngine<LoanValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      { id: "principal", type: "number", label: t.principal, defaultValue: 200000, min: 0, minExclusive: true, prefix: "currency" },
      { id: "rate", type: "number", label: t.rate, defaultValue: 6, min: 0, max: 100, suffix: "%" },
      { id: "years", type: "number", label: t.years, defaultValue: 30, min: 0, minExclusive: true, max: 50, suffix: ctx.common.units.years },
      currencyField(ctx),
    ],
    validate: ({ years }): FieldErrors => (Math.round(years * 12) < 1 ? { years: t.termTooShort } : {}),
    compute: ({ principal, rate, years }) => {
      const n = Math.round(years * 12);
      const payment = loanPayment(principal, rate, n);
      const total = payment * n;
      const yearsInTable = Math.ceil(n / 12);
      return {
        primary: { label: t.payment, value: { kind: "currency", amount: payment }, caption: fill(t.caption, { count: ctx.fmt.number(n, 0), rate: ctx.fmt.percent(rate, 4) }) },
        secondary: [
          { label: t.total, value: { kind: "currency", amount: total } },
          { label: t.interest, value: { kind: "currency", amount: total - principal } },
        ],
        tables: [
          {
            caption: t.tableCaption,
            columns: [t.tableColumns.year, t.tableColumns.principal, t.tableColumns.interest, t.tableColumns.balance],
            rows: Array.from({ length: yearsInTable }, (_, i) => {
              const start = i * 12;
              const end = Math.min(n, start + 12);
              const opening = balanceAfter(principal, rate, payment, start);
              const closing = end === n ? 0 : balanceAfter(principal, rate, payment, end);
              const paid = payment * (end - start);
              return {
                label: ctx.fmt.number(i + 1, 0),
                cells: [
                  { kind: "currency" as const, amount: opening - closing },
                  { kind: "currency" as const, amount: paid - (opening - closing) },
                  { kind: "currency" as const, amount: closing },
                ],
              };
            }),
          },
        ],
        notes: [t.note],
      };
    },
  });
}

export const loanPaymentEngine = makeLoanPaymentEngine(englishContext(en));
