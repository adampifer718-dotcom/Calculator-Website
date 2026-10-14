import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { formatSignificant } from "@/lib/format";

export type ExponentValues = { base: number; exponent: number };

export const exponentEngine = defineEngine<ExponentValues>({
  fields: [
    { id: "base", type: "number", label: "Base (a)", defaultValue: 2 },
    { id: "exponent", type: "number", label: "Exponent (b)", defaultValue: 10 },
  ],
  validate: ({ base, exponent }): FieldErrors => {
    if (base === 0 && exponent < 0) return { exponent: "0 raised to a negative power is undefined." };
    if (base < 0 && !Number.isInteger(exponent)) return { exponent: "A negative base needs a whole-number exponent for a real result." };
    return {};
  },
  compute: ({ base, exponent }) => {
    const result = Math.pow(base, exponent);
    return {
      primary: { label: "aᵇ", value: { kind: "text", text: Number.isFinite(result) ? formatSignificant(result, 12) : "Too large to display" } },
      secondary: [{ label: "E-notation", value: { kind: "text", text: Number.isFinite(result) ? result.toExponential(10).replace(/\.?0+e/, "e").replace("e+", "e") : "—" } }],
      notes: [exponent < 0 ? `A negative exponent means 1 ÷ ${formatSignificant(base)}^${formatSignificant(-exponent)}.` : `${formatSignificant(base)} multiplied by itself ${formatSignificant(exponent)} times.`],
    };
  },
});
