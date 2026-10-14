import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { formatNumber, formatPercent } from "@/lib/format";
import { percentOf, percentageOfWhole, wholeFromPercent } from "@/lib/math/percentage";

export const PERCENTAGE_MODES = [
  { value: "percentOf", label: "What is X% of Y?" },
  { value: "whatPercent", label: "X is what % of Y?" },
  { value: "findWhole", label: "X is Y% of what?" },
] as const;

export type PercentageValues = {
  mode: string;
  percent: number | null;
  ofValue: number | null;
  part: number | null;
  whole: number | null;
  partKnown: number | null;
  percentKnown: number | null;
};

const n = (value: number) => formatNumber(value, 6);

export const percentageEngine = defineEngine<PercentageValues>({
  fields: [
    {
      id: "mode",
      type: "select",
      label: "Question",
      options: PERCENTAGE_MODES,
      defaultValue: "percentOf",
      display: "segmented",
    },
    { id: "percent", type: "number", label: "Percentage (X)", defaultValue: 20, suffix: "%", visibleWhen: { field: "mode", oneOf: ["percentOf"] } },
    { id: "ofValue", type: "number", label: "Value (Y)", defaultValue: 150, visibleWhen: { field: "mode", oneOf: ["percentOf"] } },
    { id: "part", type: "number", label: "Part (X)", defaultValue: 30, visibleWhen: { field: "mode", oneOf: ["whatPercent"] } },
    { id: "whole", type: "number", label: "Whole (Y)", defaultValue: 150, visibleWhen: { field: "mode", oneOf: ["whatPercent"] } },
    { id: "partKnown", type: "number", label: "Part (X)", defaultValue: 30, visibleWhen: { field: "mode", oneOf: ["findWhole"] } },
    { id: "percentKnown", type: "number", label: "Percentage (Y)", defaultValue: 20, suffix: "%", visibleWhen: { field: "mode", oneOf: ["findWhole"] } },
  ],
  validate: (values): FieldErrors => {
    if (values.mode === "whatPercent" && values.whole === 0) return { whole: "The whole cannot be 0." };
    if (values.mode === "findWhole" && values.percentKnown === 0) return { percentKnown: "The percentage cannot be 0." };
    return {};
  },
  compute: (values) => {
    if (values.mode === "whatPercent") {
      const part = values.part ?? 0;
      const whole = values.whole ?? 0;
      const result = percentageOfWhole(part, whole) ?? Number.NaN;
      return {
        primary: {
          label: "Percentage",
          value: { kind: "percent", value: result, decimals: 4 },
          caption: `${n(part)} is ${formatPercent(result, 4)} of ${n(whole)}.`,
        },
        notes: [`Formula: ${n(part)} ÷ ${n(whole)} × 100.`],
      };
    }
    if (values.mode === "findWhole") {
      const part = values.partKnown ?? 0;
      const percent = values.percentKnown ?? 0;
      const result = wholeFromPercent(part, percent) ?? Number.NaN;
      return {
        primary: {
          label: "Whole value",
          value: { kind: "number", value: result, decimals: 6 },
          caption: `${n(part)} is ${formatPercent(percent, 6)} of ${n(result)}.`,
        },
        notes: [`Formula: ${n(part)} ÷ (${n(percent)} ÷ 100).`],
      };
    }
    const percent = values.percent ?? 0;
    const ofValue = values.ofValue ?? 0;
    const result = percentOf(percent, ofValue);
    return {
      primary: {
        label: "Result",
        value: { kind: "number", value: result, decimals: 6 },
        caption: `${formatPercent(percent, 6)} of ${n(ofValue)} is ${n(result)}.`,
      },
      secondary: [{ label: `${n(ofValue)} minus ${formatPercent(percent, 6)}`, value: { kind: "number", value: ofValue - result, decimals: 6 } },
        { label: `${n(ofValue)} plus ${formatPercent(percent, 6)}`, value: { kind: "number", value: ofValue + result, decimals: 6 } }],
      notes: [`Formula: ${n(percent)} ÷ 100 × ${n(ofValue)}.`],
    };
  },
});
