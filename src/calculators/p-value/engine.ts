import { defineEngine } from "@/calculators/framework/types";
import { formatSignificant } from "@/lib/format";
import { normalCdf, pValue, tCdf, type Tail } from "@/lib/math/stats";

export type PValueValues = { distribution: string; statistic: number; df: number | null; tail: string };

export const pValueEngine = defineEngine<PValueValues>({
  fields: [
    {
      id: "distribution",
      type: "select",
      label: "Test statistic",
      options: [
        { value: "z", label: "Z-score (normal)" },
        { value: "t", label: "T-score (Student's t)" },
      ],
      defaultValue: "z",
    },
    { id: "statistic", type: "number", label: "Statistic value", defaultValue: 1.96 },
    { id: "df", type: "number", label: "Degrees of freedom", defaultValue: 10, min: 1, integer: true, max: 1000000, visibleWhen: { field: "distribution", oneOf: ["t"] } },
    {
      id: "tail",
      type: "select",
      label: "Alternative hypothesis",
      options: [
        { value: "two", label: "Two-tailed (≠)" },
        { value: "left", label: "Left-tailed (<)" },
        { value: "right", label: "Right-tailed (>)" },
      ],
      defaultValue: "two",
    },
  ],
  compute: ({ distribution, statistic, df, tail }) => {
    const cdf = distribution === "t" ? (x: number) => tCdf(x, df ?? 1) : normalCdf;
    const p = pValue(statistic, (["two", "left", "right"].includes(tail) ? tail : "two") as Tail, cdf);
    return {
      primary: { label: "p-value", value: { kind: "text", text: formatSignificant(p, 6) } },
      secondary: [
        { label: "Significant at α = 0.05?", value: { kind: "text", text: p < 0.05 ? "Yes (p < 0.05)" : "No (p ≥ 0.05)" } },
        { label: "Significant at α = 0.01?", value: { kind: "text", text: p < 0.01 ? "Yes (p < 0.01)" : "No (p ≥ 0.01)" } },
      ],
      notes: ["A p-value is the probability of a result at least this extreme if the null hypothesis were true. It is not the probability that the null hypothesis is true."],
    };
  },
});
