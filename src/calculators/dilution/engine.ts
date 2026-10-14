import { defineEngine, type FieldErrors } from "@/calculators/framework/types";

export type DilutionValues = { solve: string; c1: number | null; v1: number | null; c2: number | null; v2: number | null };

const positive = { min: 0, minExclusive: true } as const;
const unless = (solved: string) => ({ field: "solve", oneOf: ["c1", "v1", "c2", "v2"].filter((s) => s !== solved) });

export const dilutionEngine = defineEngine<DilutionValues>({
  fields: [
    {
      id: "solve",
      type: "select",
      label: "Find",
      options: [
        { value: "v1", label: "Stock volume needed (V₁)" },
        { value: "c2", label: "Final concentration (C₂)" },
        { value: "v2", label: "Final volume (V₂)" },
        { value: "c1", label: "Stock concentration (C₁)" },
      ],
      defaultValue: "v1",
    },
    { id: "c1", type: "number", label: "Stock concentration (C₁)", defaultValue: 2, ...positive, visibleWhen: unless("c1") },
    { id: "v1", type: "number", label: "Stock volume (V₁)", defaultValue: 25, ...positive, visibleWhen: unless("v1") },
    { id: "c2", type: "number", label: "Final concentration (C₂)", defaultValue: 0.5, ...positive, visibleWhen: unless("c2") },
    { id: "v2", type: "number", label: "Final volume (V₂)", defaultValue: 100, ...positive, visibleWhen: unless("v2") },
  ],
  validate: ({ solve, c1, v1, c2, v2 }): FieldErrors => {
    if ((solve === "v1" || solve === "v2") && (c2 ?? 0) > (c1 ?? 0)) return { c2: "A dilution cannot be more concentrated than the stock (C₂ ≤ C₁)." };
    if ((solve === "c1" || solve === "c2") && (v1 ?? 0) > (v2 ?? 0)) return { v1: "The stock volume cannot exceed the final volume (V₁ ≤ V₂)." };
    return {};
  },
  compute: ({ solve, c1, v1, c2, v2 }) => {
    const C1 = solve === "c1" ? ((c2 ?? 0) * (v2 ?? 0)) / (v1 ?? 1) : (c1 ?? 0);
    const V1 = solve === "v1" ? ((c2 ?? 0) * (v2 ?? 0)) / C1 : (v1 ?? 0);
    const V2 = solve === "v2" ? (C1 * V1) / (c2 ?? 1) : (v2 ?? 0);
    const C2 = solve === "c2" ? (C1 * V1) / V2 : (c2 ?? 0);
    const solved = { c1: C1, v1: V1, c2: C2, v2: V2 }[solve as "c1" | "v1" | "c2" | "v2"] ?? V1;
    const labels: Record<string, string> = { c1: "Stock concentration (C₁)", v1: "Stock volume needed (V₁)", c2: "Final concentration (C₂)", v2: "Final volume (V₂)" };
    return {
      primary: { label: labels[solve] ?? labels.v1, value: { kind: "number", value: solved, decimals: 6 }, caption: "In the same units as the matching inputs." },
      secondary: [
        { label: "Solvent to add (V₂ − V₁)", value: { kind: "number", value: V2 - V1, decimals: 6 } },
        { label: "Dilution factor (C₁ ÷ C₂)", value: { kind: "number", value: C1 / C2, decimals: 4 } },
      ],
      notes: ["Use the same concentration unit for C₁ and C₂, and the same volume unit for V₁ and V₂."],
    };
  },
});
