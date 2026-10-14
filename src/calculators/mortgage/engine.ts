import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import { balanceAfter, loanPayment } from "@/lib/math/loan";
import en, { type MortgageText } from "./text/en";

export type MortgageValues = {
  price: number;
  down: number;
  rate: number;
  years: number;
  propertyTax: number;
  insurance: number;
  hoa: number;
  pmiRate: number;
  currency: string;
};

/** Loan-to-value at which PMI is required (above) and at which it stops on schedule. */
export const PMI_START_LTV = 0.8;
export const PMI_END_LTV = 0.78;

/** Number of payments carrying PMI: until the scheduled balance falls to 78% of the price. */
export function pmiPayments(loan: number, price: number, rate: number, payment: number, n: number): number {
  if (loan <= PMI_START_LTV * price) return 0;
  for (let k = 1; k <= n; k++) if (balanceAfter(loan, rate, payment, k) <= PMI_END_LTV * price) return k;
  return n;
}

/**
 * Monthly housing payment: principal and interest on a fixed-rate loan (the
 * standard annuity formula) plus the escrowed costs the buyer enters.
 */
export function makeMortgageEngine(ctx: EngineContext<MortgageText>) {
  const t = ctx.text;
  return defineEngine<MortgageValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      { id: "price", type: "number", label: t.price, defaultValue: 400000, min: 0, minExclusive: true, prefix: "currency" },
      { id: "down", type: "number", label: t.down, defaultValue: 80000, min: 0, prefix: "currency" },
      { id: "rate", type: "number", label: t.rate, help: t.rateHelp, defaultValue: 6.5, min: 0, max: 30, suffix: "%" },
      { id: "years", type: "number", label: t.years, defaultValue: 30, min: 0, minExclusive: true, max: 50, suffix: ctx.common.units.years },
      { id: "propertyTax", type: "number", label: t.propertyTax, defaultValue: 4800, min: 0, prefix: "currency" },
      { id: "insurance", type: "number", label: t.insurance, defaultValue: 1500, min: 0, prefix: "currency" },
      { id: "hoa", type: "number", label: t.hoa, defaultValue: 0, min: 0, prefix: "currency" },
      { id: "pmiRate", type: "number", label: t.pmiRate, help: t.pmiHelp, defaultValue: 0.5, min: 0, max: 5, suffix: "%" },
      currencyField(ctx),
    ],
    validate: ({ price, down, years }): FieldErrors => {
      const errors: FieldErrors = {};
      if (down >= price) errors.down = t.errors.downTooLarge;
      if (Math.round(years * 12) < 1) errors.years = t.errors.termTooShort;
      return errors;
    },
    compute: ({ price, down, rate, years, propertyTax, insurance, hoa, pmiRate, currency }) => {
      const loan = price - down;
      const n = Math.round(years * 12);
      const pi = loanPayment(loan, rate, n);
      const tax = propertyTax / 12;
      const ins = insurance / 12;
      const months = pmiRate > 0 ? pmiPayments(loan, price, rate, pi, n) : 0;
      const pmi = months > 0 ? (loan * pmiRate) / 100 / 12 : 0;
      const monthly = pi + tax + ins + hoa + pmi;
      const totalInterest = pi * n - loan;
      const totalCost = pi * n + (tax + ins + hoa) * n + pmi * months;
      const yearsInTable = Math.ceil(n / 12);
      const notes = [t.notes.fixed, months > 0 ? t.notes.pmi : t.notes.noPmi, t.notes.excluded];
      return {
        primary: {
          label: t.monthly,
          value: { kind: "currency", amount: monthly },
          caption: fill(t.caption, { pi: ctx.fmt.currency(pi, currency), extras: ctx.fmt.currency(monthly - pi, currency) }),
        },
        secondary: [
          { label: t.principalInterest, value: { kind: "currency", amount: pi } },
          { label: t.monthlyTax, value: { kind: "currency", amount: tax } },
          { label: t.monthlyInsurance, value: { kind: "currency", amount: ins } },
          { label: t.monthlyHoa, value: { kind: "currency", amount: hoa } },
          { label: t.monthlyPmi, value: { kind: "currency", amount: pmi } },
          { label: t.pmiMonths, value: { kind: "number", value: months, decimals: 0 } },
          { label: t.loanAmount, value: { kind: "currency", amount: loan } },
          { label: t.downShare, value: { kind: "percent", value: (down / price) * 100, decimals: 2 } },
          { label: t.totalInterest, value: { kind: "currency", amount: totalInterest } },
          { label: t.totalCost, value: { kind: "currency", amount: totalCost } },
        ],
        tables: [
          {
            caption: t.tableCaption,
            columns: [t.tableColumns.year, t.tableColumns.principal, t.tableColumns.interest, t.tableColumns.balance],
            rows: Array.from({ length: yearsInTable }, (_, i) => {
              const start = i * 12;
              const end = Math.min(n, start + 12);
              const opening = balanceAfter(loan, rate, pi, start);
              const closing = end === n ? 0 : balanceAfter(loan, rate, pi, end);
              const paid = pi * (end - start);
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
        notes,
      };
    },
  });
}

export const mortgageEngine = makeMortgageEngine(englishContext(en));
