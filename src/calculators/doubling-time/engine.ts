import { defineEngine, type FieldErrors } from "@/calculators/framework/types";

export type DoublingValues = { initial: number; final: number; time: number; unit: string };

const positive = { min: 0, minExclusive: true } as const;

export const doublingTimeEngine = defineEngine<DoublingValues>({
  fields: [
    { id: "initial", type: "number", label: "Initial count (N₀)", defaultValue: 1000, ...positive },
    { id: "final", type: "number", label: "Final count (N)", defaultValue: 64000, ...positive },
    { id: "time", type: "number", label: "Elapsed time", defaultValue: 6, ...positive },
    {
      id: "unit",
      type: "select",
      label: "Time unit",
      options: [
        { value: "minutes", label: "Minutes" },
        { value: "hours", label: "Hours" },
        { value: "days", label: "Days" },
      ],
      defaultValue: "hours",
    },
  ],
  validate: ({ initial, final }): FieldErrors => (final <= initial ? { final: "The final count must be larger than the initial count for growth." } : {}),
  compute: ({ initial, final, time, unit }) => {
    const ratio = final / initial;
    const generations = Math.log2(ratio);
    const doubling = time / generations;
    const singular = unit.replace(/s$/, "");
    return {
      primary: { label: "Doubling time", value: { kind: "number", value: doubling, decimals: 4, suffix: unit } },
      secondary: [
        { label: "Number of doublings (generations)", value: { kind: "number", value: generations, decimals: 4 } },
        { label: `Growth rate constant (k)`, value: { kind: "number", value: Math.log(ratio) / time, decimals: 6, suffix: `per ${singular}` } },
        { label: "Fold increase (N ÷ N₀)", value: { kind: "number", value: ratio, decimals: 4 } },
      ],
      notes: ["Assumes steady exponential growth over the whole period, such as the log phase of a bacterial culture."],
    };
  },
});
