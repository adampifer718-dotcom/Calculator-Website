import { defineEngine, type FieldErrors } from "@/calculators/framework/types";

export type PythagoreanValues = { solve: string; a: number | null; b: number | null; c: number | null; leg: number | null };

const positive = { min: 0, minExclusive: true } as const;

export const pythagoreanEngine = defineEngine<PythagoreanValues>({
  fields: [
    {
      id: "solve",
      type: "select",
      label: "Find",
      options: [
        { value: "hypotenuse", label: "Hypotenuse (c) from both legs" },
        { value: "leg", label: "A leg from the hypotenuse and other leg" },
      ],
      defaultValue: "hypotenuse",
    },
    { id: "a", type: "number", label: "Leg a", defaultValue: 3, ...positive, visibleWhen: { field: "solve", oneOf: ["hypotenuse"] } },
    { id: "b", type: "number", label: "Leg b", defaultValue: 4, ...positive, visibleWhen: { field: "solve", oneOf: ["hypotenuse"] } },
    { id: "c", type: "number", label: "Hypotenuse c", defaultValue: 13, ...positive, visibleWhen: { field: "solve", oneOf: ["leg"] } },
    { id: "leg", type: "number", label: "Known leg", defaultValue: 5, ...positive, visibleWhen: { field: "solve", oneOf: ["leg"] } },
  ],
  validate: ({ solve, c, leg }): FieldErrors => (solve === "leg" && (leg ?? 0) >= (c ?? 0) ? { leg: "A leg must be shorter than the hypotenuse." } : {}),
  compute: ({ solve, a, b, c, leg }) => {
    const [x, y, hyp] = solve === "leg" ? [leg ?? 0, Math.sqrt((c ?? 0) ** 2 - (leg ?? 0) ** 2), c ?? 0] : [a ?? 0, b ?? 0, Math.hypot(a ?? 0, b ?? 0)];
    return {
      primary: { label: solve === "leg" ? "Missing leg" : "Hypotenuse (c)", value: { kind: "number", value: solve === "leg" ? y : hyp, decimals: 6 } },
      secondary: [
        { label: "Triangle area", value: { kind: "number", value: (x * y) / 2, decimals: 6 } },
        { label: "Perimeter", value: { kind: "number", value: x + y + hyp, decimals: 6 } },
      ],
    };
  },
});
