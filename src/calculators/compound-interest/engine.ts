import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type CompoundInterestText } from "./text/en";

export type CompoundInterestValues = { principal: number; rate: number; years: number; frequency: string; currency: string };

export const COMPOUNDING = ["1", "2", "4", "12", "365"] as const;

/** Future value: P × (1 + r/n)^(n·t). */
export function compound(principal: number, ratePercent: number, years: number, periodsPerYear: number): number {
  return principal * Math.pow(1 + ratePercent / 100 / periodsPerYear, periodsPerYear * years);
}

export function makeCompoundInterestEngine(ctx: EngineContext<CompoundInterestText>) {
  const t = ctx.text;
  return defineEngine<CompoundInterestValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      { id: "principal", type: "number", label: t.principal, defaultValue: 10000, min: 0, prefix: "currency" },
      { id: "rate", type: "number", label: t.rate, defaultValue: 5, min: 0, max: 100, suffix: "%" },
      { id: "years", type: "number", label: t.years, defaultValue: 10, min: 0, minExclusive: true, max: 100, suffix: ctx.common.units.years },
      { id: "frequency", type: "select", label: t.frequency, options: COMPOUNDING.map((value) => ({ value, label: t.frequencies[value] })), defaultValue: "12" },
      currencyField(ctx),
    ],
    compute: ({ principal, rate, years, frequency }) => {
      const n = Number(frequency) || 12;
      const future = compound(principal, rate, years, n);
      const wholeYears = Math.floor(years);
      return {
        primary: { label: t.future, value: { kind: "currency", amount: future } },
        secondary: [
          { label: t.interest, value: { kind: "currency", amount: future - principal } },
          { label: t.effective, value: { kind: "percent", value: (Math.pow(1 + rate / 100 / n, n) - 1) * 100, decimals: 4 } },
        ],
        tables:
          wholeYears >= 1 && wholeYears <= 50
            ? [
                {
                  caption: t.tableCaption,
                  columns: [t.tableColumns.year, t.tableColumns.balance, t.tableColumns.interest],
                  rows: Array.from({ length: wholeYears }, (_, i) => {
                    const balance = compound(principal, rate, i + 1, n);
                    return { label: ctx.fmt.number(i + 1, 0), cells: [{ kind: "currency" as const, amount: balance }, { kind: "currency" as const, amount: balance - principal }] };
                  }),
                },
              ]
            : undefined,
        notes: [t.note],
      };
    },
  });
}

export const compoundInterestEngine = makeCompoundInterestEngine(englishContext(en));
