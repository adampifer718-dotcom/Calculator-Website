import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import { balanceAfter, loanPayment } from "@/lib/math/loan";

export type LoanValues = { principal: number; rate: number; years: number; currency: string };

export const loanPaymentEngine = defineEngine<LoanValues>({
  currencyField: "currency",
  fields: [
    { id: "principal", type: "number", label: "Loan amount", defaultValue: 200000, min: 0, minExclusive: true, prefix: "currency" },
    { id: "rate", type: "number", label: "Annual interest rate (APR)", defaultValue: 6, min: 0, max: 100, suffix: "%" },
    { id: "years", type: "number", label: "Loan term", defaultValue: 30, min: 0, minExclusive: true, max: 50, suffix: "years" },
    currencyField,
  ],
  validate: ({ years }): FieldErrors => (Math.round(years * 12) < 1 ? { years: "The term must be at least one month." } : {}),
  compute: ({ principal, rate, years }) => {
    const n = Math.round(years * 12);
    const payment = loanPayment(principal, rate, n);
    const total = payment * n;
    const yearsInTable = Math.ceil(n / 12);
    return {
      primary: { label: "Monthly payment", value: { kind: "currency", amount: payment }, caption: `${n} monthly payments at ${rate}% APR.` },
      secondary: [
        { label: "Total of payments", value: { kind: "currency", amount: total } },
        { label: "Total interest", value: { kind: "currency", amount: total - principal } },
      ],
      tables: [
        {
          caption: "Amortization by year",
          columns: ["Year", "Principal paid", "Interest paid", "Balance"],
          rows: Array.from({ length: yearsInTable }, (_, i) => {
            const start = i * 12;
            const end = Math.min(n, start + 12);
            const opening = balanceAfter(principal, rate, payment, start);
            const closing = end === n ? 0 : balanceAfter(principal, rate, payment, end);
            const paid = payment * (end - start);
            return {
              label: String(i + 1),
              cells: [
                { kind: "currency" as const, amount: opening - closing },
                { kind: "currency" as const, amount: paid - (opening - closing) },
                { kind: "currency" as const, amount: closing },
              ],
            };
          }),
        },
      ],
      notes: ["Fixed rate with equal monthly payments. Taxes, insurance, fees and any rate changes are not included."],
    };
  },
});
