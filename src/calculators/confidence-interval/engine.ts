import { defineEngine } from "@/calculators/framework/types";
import { formatNumber } from "@/lib/format";
import { normalInv } from "@/lib/math/stats";

export type ConfidenceIntervalValues = { mean: number; sd: number; n: number; level: number };

export function confidenceInterval(mean: number, sd: number, n: number, level: number) {
  const z = normalInv(1 - (1 - level / 100) / 2);
  const standardError = sd / Math.sqrt(n);
  const margin = z * standardError;
  return { z, standardError, margin, lower: mean - margin, upper: mean + margin };
}

export const confidenceIntervalEngine = defineEngine<ConfidenceIntervalValues>({
  fields: [
    { id: "mean", type: "number", label: "Sample mean (x̄)", defaultValue: 100 },
    { id: "sd", type: "number", label: "Standard deviation (σ)", defaultValue: 15, min: 0, minExclusive: true },
    { id: "n", type: "number", label: "Sample size (n)", defaultValue: 36, min: 1, integer: true },
    { id: "level", type: "number", label: "Confidence level", defaultValue: 95, min: 0, minExclusive: true, max: 99.99, suffix: "%" },
  ],
  compute: ({ mean, sd, n, level }) => {
    const ci = confidenceInterval(mean, sd, n, level);
    return {
      primary: {
        label: `${formatNumber(level)}% confidence interval`,
        value: { kind: "text", text: `${formatNumber(ci.lower, 4)} to ${formatNumber(ci.upper, 4)}` },
        caption: `${formatNumber(mean, 4)} ± ${formatNumber(ci.margin, 4)}`,
      },
      secondary: [
        { label: "Margin of error", value: { kind: "number", value: ci.margin, decimals: 4 } },
        { label: "Standard error", value: { kind: "number", value: ci.standardError, decimals: 4 } },
        { label: "Critical value (z*)", value: { kind: "number", value: ci.z, decimals: 4 } },
      ],
      notes: ["Uses the normal (z) distribution, which assumes a known population standard deviation or a large sample (n ≥ 30)."],
    };
  },
});
