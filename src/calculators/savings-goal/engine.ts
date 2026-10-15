import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type SavingsGoalText } from "./text/en";

export type SavingsGoalValues = { currency: string; goal: number; current: number; rate: number; years: number };

export const MAX_YEARS = 100;

export function monthsFor(years: number): number {
  return Math.round(years * 12);
}

/** Growth factor (1 + i)^n. */
function growth(i: number, n: number): number {
  return Math.exp(n * Math.log1p(i));
}

/**
 * End-of-month deposit that grows current savings PV to the goal FV in n months
 * at monthly rate i = r/12: (FV − PV(1+i)^n)·i/((1+i)^n − 1), or (FV − PV)/n at 0%.
 * Never negative: 0 when the current savings already reach the goal.
 */
export function monthlyDeposit(goal: number, current: number, annualPercent: number, n: number): number {
  const i = annualPercent / 100 / 12;
  const pmt = i === 0 ? (goal - current) / n : ((goal - current * growth(i, n)) * i) / Math.expm1(n * Math.log1p(i));
  return Math.max(0, pmt);
}

export function makeSavingsGoalEngine(ctx: EngineContext<SavingsGoalText>) {
  const t = ctx.text;
  return defineEngine<SavingsGoalValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      currencyField(ctx),
      { id: "goal", type: "number", label: t.goal, help: t.goalHelp, defaultValue: 20000, min: 0, minExclusive: true, prefix: "currency" },
      { id: "current", type: "number", label: t.current, help: t.currentHelp, defaultValue: 2500, min: 0, prefix: "currency" },
      { id: "rate", type: "number", label: t.rate, help: t.rateHelp, defaultValue: 4, min: 0, max: 30, suffix: "%" },
      { id: "years", type: "number", label: t.years, help: t.yearsHelp, defaultValue: 5, min: 0, minExclusive: true, max: MAX_YEARS, suffix: t.yearsSuffix },
    ],
    validate: ({ years }): FieldErrors => (monthsFor(years) < 1 ? { years: t.tooShort } : {}),
    compute: ({ currency, goal, current, rate, years }) => {
      const n = monthsFor(years);
      const i = rate / 100 / 12;
      const pmt = monthlyDeposit(goal, current, rate, n);
      const currentAtEnd = current * growth(i, n);
      const deposits = pmt * n;
      const end = pmt > 0 ? goal : currentAtEnd;
      const notes = pmt === 0 ? [t.notes.reached, t.notes.constant] : [t.notes.constant];
      return {
        primary: {
          label: t.deposit,
          value: { kind: "currency", amount: pmt },
          caption: fill(t.caption, {
            months: plural(ctx, n, t.months),
            rate: ctx.fmt.percent(rate, 4),
            current: ctx.fmt.currency(current, currency),
            goal: ctx.fmt.currency(goal, currency),
          }),
        },
        secondary: [
          { label: t.totalDeposits, value: { kind: "currency", amount: deposits } },
          { label: t.growth, value: { kind: "currency", amount: end - current - deposits } },
          { label: t.currentGrows, value: { kind: "currency", amount: currentAtEnd } },
          { label: t.endBalance, value: { kind: "currency", amount: end } },
          { label: t.numberOfDeposits, value: { kind: "number", value: n, decimals: 0 } },
        ],
        notes,
      };
    },
  });
}

export const savingsGoalEngine = makeSavingsGoalEngine(englishContext(en));
