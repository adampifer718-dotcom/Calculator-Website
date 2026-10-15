import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type SimpleInterestText } from "./text/en";

export type SimpleInterestValues = { currency: string; principal: number; rate: number; time: number; timeUnit: string };

export const TIME_UNITS = ["years", "months", "days"] as const;
export type TimeUnit = (typeof TIME_UNITS)[number];

/** Days are converted with a 365-day year. */
export const DAYS_PER_YEAR = 365;
export const MAX_YEARS = 100;

export function toYears(time: number, unit: string): number {
  if (unit === "months") return time / 12;
  if (unit === "days") return time / DAYS_PER_YEAR;
  return time;
}

/** I = P × r × t, with r in percent per year and t in years. */
export function simpleInterest(principal: number, ratePercent: number, years: number): number {
  return (principal * ratePercent * years) / 100;
}

export function makeSimpleInterestEngine(ctx: EngineContext<SimpleInterestText>) {
  const t = ctx.text;
  return defineEngine<SimpleInterestValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      currencyField(ctx),
      { id: "principal", type: "number", label: t.principal, help: t.principalHelp, defaultValue: 5000, min: 0, minExclusive: true, prefix: "currency" },
      { id: "rate", type: "number", label: t.rate, defaultValue: 5, min: 0, max: 1000, suffix: "%" },
      { id: "time", type: "number", label: t.time, defaultValue: 3, min: 0, minExclusive: true },
      { id: "timeUnit", type: "select", label: t.timeUnit, options: TIME_UNITS.map((value) => ({ value, label: t.timeUnits[value] })), defaultValue: "years", display: "segmented" },
    ],
    validate: ({ time, timeUnit }): FieldErrors => (toYears(time, timeUnit) > MAX_YEARS ? { time: t.tooLong } : {}),
    compute: ({ currency, principal, rate, time, timeUnit }) => {
      const years = toYears(time, timeUnit);
      const interest = simpleInterest(principal, rate, years);
      const perYear = simpleInterest(principal, rate, 1);
      return {
        primary: {
          label: t.interest,
          value: { kind: "currency", amount: interest },
          caption: fill(t.caption, { principal: ctx.fmt.currency(principal, currency), rate: ctx.fmt.percent(rate, 4) }),
        },
        secondary: [
          { label: t.total, value: { kind: "currency", amount: principal + interest } },
          { label: t.perYear, value: { kind: "currency", amount: perYear } },
          { label: t.perMonth, value: { kind: "currency", amount: perYear / 12 } },
          { label: t.timeInYears, value: { kind: "number", value: years, decimals: 4, suffix: ctx.common.units.years } },
        ],
        notes: timeUnit === "days" ? [t.notes.simple, t.notes.days] : [t.notes.simple],
      };
    },
  });
}

export const simpleInterestEngine = makeSimpleInterestEngine(englishContext(en));
