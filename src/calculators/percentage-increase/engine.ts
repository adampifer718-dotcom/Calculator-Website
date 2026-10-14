import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { formatNumber } from "@/lib/format";
import { percentChange } from "@/lib/math/percentage";

export type PercentageIncreaseValues = {
  original: number;
  newValue: number;
};

export const percentageIncreaseEngine = defineEngine<PercentageIncreaseValues>({
  fields: [
    { id: "original", type: "number", label: "Original value", help: "The starting value. It cannot be 0.", defaultValue: 80 },
    { id: "newValue", type: "number", label: "New value", help: "The value after the change.", defaultValue: 100 },
  ],
  validate: (values): FieldErrors =>
    values.original === 0 ? { original: "The original value cannot be 0. A change from 0 has no percentage." } : {},
  compute: ({ original, newValue }) => {
    const change = percentChange(original, newValue) ?? Number.NaN;
    const difference = newValue - original;
    const direction = difference > 0 ? "increase" : difference < 0 ? "decrease" : "no change";
    return {
      primary: {
        label: "Percentage change",
        value: { kind: "percent", value: change, decimals: 4, signed: true },
        caption:
          direction === "no change"
            ? "The values are equal, so there is no change."
            : `A ${direction} from ${formatNumber(original, 6)} to ${formatNumber(newValue, 6)}.`,
      },
      secondary: [
        { label: "Absolute change", value: { kind: "number", value: difference, decimals: 6, signed: true } },
        { label: "New value as % of original", value: { kind: "percent", value: (newValue / original) * 100, decimals: 4 } },
      ],
      notes: [
        `Formula: (${formatNumber(newValue, 6)} − ${formatNumber(original, 6)}) ÷ |${formatNumber(original, 6)}| × 100.`,
        ...(original < 0 ? ["The original value is negative, so the change is measured against its absolute value."] : []),
      ],
    };
  },
});
