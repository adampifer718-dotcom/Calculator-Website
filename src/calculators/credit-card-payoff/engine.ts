import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem, type ResultValue } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type CreditCardPayoffText } from "./text/en";

export type CreditCardPayoffValues = {
  currency: string;
  mode: string;
  balance: number;
  apr: number;
  payment: number | null;
  months: number | null;
};

export const MODES = ["payment", "months"] as const;
/** The month-by-month simulation stops here (100 years). */
export const MAX_MONTHS = 1200;
export const MAX_TARGET_MONTHS = 600;

export interface PayoffYear {
  interest: number;
  paid: number;
  balance: number;
}

export interface Payoff {
  /** False when the balance is still above zero after MAX_MONTHS. */
  paidOff: boolean;
  months: number;
  totalInterest: number;
  totalPaid: number;
  lastPayment: number;
  years: PayoffYear[];
}

/** Monthly rate as a decimal: APR ÷ 12. */
export function monthlyRate(aprPercent: number): number {
  return aprPercent / 100 / 12;
}

/**
 * Month-by-month payoff: each month interest = balance × APR/12 is added, then
 * the payment is subtracted. The month in which the payment covers what is
 * owed ends the loan with a smaller final payment. `endAt` forces the balance
 * to be cleared in that month (used for the target-months mode).
 */
export function simulatePayoff(balance: number, aprPercent: number, payment: number, endAt?: number): Payoff {
  const i = monthlyRate(aprPercent);
  const years: PayoffYear[] = [];
  let b = balance;
  let totalInterest = 0;
  let totalPaid = 0;
  let lastPayment = 0;
  let year: PayoffYear = { interest: 0, paid: 0, balance: b };
  for (let m = 1; m <= Math.min(endAt ?? MAX_MONTHS, MAX_MONTHS); m++) {
    const interest = b * i;
    const due = b + interest;
    const finalMonth = due - payment <= 1e-9 || m === endAt;
    const paid = finalMonth ? due : payment;
    b = finalMonth ? 0 : due - payment;
    totalInterest += interest;
    totalPaid += paid;
    year.interest += interest;
    year.paid += paid;
    year.balance = b;
    if (finalMonth || m % 12 === 0) {
      years.push(year);
      year = { interest: 0, paid: 0, balance: b };
    }
    if (finalMonth) return { paidOff: true, months: m, totalInterest, totalPaid, lastPayment: paid, years };
    lastPayment = paid;
  }
  return { paidOff: false, months: MAX_MONTHS, totalInterest, totalPaid, lastPayment, years };
}

/** Level payment that clears the balance in n months: B·i/(1 − (1+i)^−n), or B/n at 0%. */
export function requiredPayment(balance: number, aprPercent: number, n: number): number {
  const i = monthlyRate(aprPercent);
  if (i === 0) return balance / n;
  return (balance * i) / -Math.expm1(-n * Math.log1p(i));
}

export function makeCreditCardPayoffEngine(ctx: EngineContext<CreditCardPayoffText>) {
  const t = ctx.text;
  const duration = (months: number) => {
    const y = Math.floor(months / 12);
    const m = months % 12;
    if (y === 0) return plural(ctx, m, t.units.months);
    if (m === 0) return plural(ctx, y, t.units.years);
    return fill(t.yearsMonths, { years: plural(ctx, y, t.units.years), months: plural(ctx, m, t.units.months) });
  };
  return defineEngine<CreditCardPayoffValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      currencyField(ctx),
      { id: "mode", type: "select", label: t.mode, options: MODES.map((value) => ({ value, label: t.modes[value] })), defaultValue: "payment", display: "segmented" },
      { id: "balance", type: "number", label: t.balance, help: t.balanceHelp, defaultValue: 4800, min: 0, minExclusive: true, prefix: "currency" },
      { id: "apr", type: "number", label: t.apr, help: t.aprHelp, defaultValue: 22.9, min: 0, max: 100, suffix: "%" },
      {
        id: "payment",
        type: "number",
        label: t.payment,
        help: t.paymentHelp,
        defaultValue: 180,
        min: 0,
        minExclusive: true,
        prefix: "currency",
        visibleWhen: { field: "mode", oneOf: ["payment"] },
      },
      {
        id: "months",
        type: "number",
        label: t.months,
        help: t.monthsHelp,
        defaultValue: 24,
        min: 1,
        max: MAX_TARGET_MONTHS,
        integer: true,
        suffix: t.monthsSuffix,
        visibleWhen: { field: "mode", oneOf: ["months"] },
      },
    ],
    validate: ({ currency, mode, balance, apr, payment }): FieldErrors => {
      if (mode !== "payment" || payment === null) return {};
      const firstInterest = balance * monthlyRate(apr);
      if (payment <= firstInterest) return { payment: fill(t.errors.neverPaid, { interest: ctx.fmt.currency(firstInterest, currency) }) };
      if (!simulatePayoff(balance, apr, payment).paidOff) return { payment: t.errors.tooLong };
      return {};
    },
    compute: ({ currency, mode, balance, apr, payment, months }) => {
      const byPayment = mode !== "months";
      const amount = byPayment ? (payment ?? 0) : requiredPayment(balance, apr, months ?? 1);
      const plan = simulatePayoff(balance, apr, amount, byPayment ? undefined : (months ?? 1));
      const vars = { balance: ctx.fmt.currency(balance, currency), apr: ctx.fmt.percent(apr, 4), payment: ctx.fmt.currency(amount, currency), duration: duration(plan.months) };
      const money = (value: number): ResultValue => ({ kind: "currency", amount: value });
      const secondary: ResultItem[] = byPayment
        ? [
            { label: t.totalInterest, value: money(plan.totalInterest) },
            { label: t.totalPaid, value: money(plan.totalPaid) },
            { label: t.lastPayment, value: money(plan.lastPayment) },
            { label: t.firstInterest, value: money(balance * monthlyRate(apr)) },
          ]
        : [
            { label: t.totalInterest, value: money(plan.totalInterest) },
            { label: t.totalPaid, value: money(plan.totalPaid) },
            { label: t.numberOfPayments, value: { kind: "number", value: plan.months, decimals: 0 } },
            { label: t.firstInterest, value: money(balance * monthlyRate(apr)) },
          ];
      const notes = [t.notes.monthly, t.notes.noPurchases];
      if (apr === 0) notes.push(t.notes.zeroRate);
      return {
        primary: byPayment
          ? { label: t.timeToPayoff, value: { kind: "number", value: plan.months, decimals: 0, suffix: t.monthsSuffix }, caption: fill(t.captionPayment, vars) }
          : { label: t.requiredPayment, value: money(amount), caption: fill(t.captionMonths, vars) },
        secondary,
        tables: [
          {
            caption: t.tableCaption,
            columns: [t.tableColumns.year, t.tableColumns.interest, t.tableColumns.paid, t.tableColumns.balance],
            rows: plan.years.map((y, index) => ({
              label: ctx.fmt.number(index + 1, 0),
              cells: [money(y.interest), money(y.paid), money(y.balance)],
            })),
          },
        ],
        notes,
      };
    },
  });
}

export const creditCardPayoffEngine = makeCreditCardPayoffEngine(englishContext(en));
