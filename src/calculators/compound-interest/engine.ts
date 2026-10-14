import { defineEngine } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";

export type CompoundInterestValues = { principal: number; rate: number; years: number; frequency: string; currency: string };

export const COMPOUNDING = [
  { value: "1", label: "Annually" },
  { value: "2", label: "Semi-annually" },
  { value: "4", label: "Quarterly" },
  { value: "12", label: "Monthly" },
  { value: "365", label: "Daily" },
] as const;

/** Future value: P × (1 + r/n)^(n·t). */
export function compound(principal: number, ratePercent: number, years: number, periodsPerYear: number): number {
  return principal * Math.pow(1 + ratePercent / 100 / periodsPerYear, periodsPerYear * years);
}

export const compoundInterestEngine = defineEngine<CompoundInterestValues>({
  currencyField: "currency",
  fields: [
    { id: "principal", type: "number", label: "Initial deposit", defaultValue: 10000, min: 0, prefix: "currency" },
    { id: "rate", type: "number", label: "Annual interest rate", defaultValue: 5, min: 0, max: 100, suffix: "%" },
    { id: "years", type: "number", label: "Time", defaultValue: 10, min: 0, minExclusive: true, max: 100, suffix: "years" },
    { id: "frequency", type: "select", label: "Compounding", options: COMPOUNDING, defaultValue: "12" },
    currencyField,
  ],
  compute: ({ principal, rate, years, frequency }) => {
    const n = Number(frequency) || 12;
    const future = compound(principal, rate, years, n);
    const wholeYears = Math.floor(years);
    return {
      primary: { label: "Future value", value: { kind: "currency", amount: future } },
      secondary: [
        { label: "Interest earned", value: { kind: "currency", amount: future - principal } },
        { label: "Effective annual rate", value: { kind: "percent", value: (Math.pow(1 + rate / 100 / n, n) - 1) * 100, decimals: 4 } },
      ],
      tables:
        wholeYears >= 1 && wholeYears <= 50
          ? [
              {
                caption: "Balance at the end of each year",
                columns: ["Year", "Balance", "Interest to date"],
                rows: Array.from({ length: wholeYears }, (_, i) => {
                  const balance = compound(principal, rate, i + 1, n);
                  return { label: String(i + 1), cells: [{ kind: "currency" as const, amount: balance }, { kind: "currency" as const, amount: balance - principal }] };
                }),
              },
            ]
          : undefined,
      notes: ["Assumes a fixed rate, no further deposits or withdrawals, and no taxes or fees."],
    };
  },
});
