import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { formatSignificant } from "@/lib/format";

export type LogValues = { value: number; baseType: string; base: number | null };

/** log_b(x), using the exact built-ins for bases 10, 2 and e. */
export function logarithm(x: number, base: number): number {
  if (base === 10) return Math.log10(x);
  if (base === 2) return Math.log2(x);
  if (base === Math.E) return Math.log(x);
  return Math.log(x) / Math.log(base);
}

export const logEngine = defineEngine<LogValues>({
  fields: [
    { id: "value", type: "number", label: "Number (x)", defaultValue: 1000, min: 0, minExclusive: true },
    {
      id: "baseType",
      type: "select",
      label: "Base",
      options: [
        { value: "10", label: "10 (common log)" },
        { value: "e", label: "e (natural log, ln)" },
        { value: "2", label: "2 (binary log)" },
        { value: "custom", label: "Other base" },
      ],
      defaultValue: "10",
    },
    { id: "base", type: "number", label: "Custom base (b)", defaultValue: 3, min: 0, minExclusive: true, visibleWhen: { field: "baseType", oneOf: ["custom"] } },
  ],
  validate: ({ baseType, base }): FieldErrors => (baseType === "custom" && base === 1 ? { base: "The base cannot be 1." } : {}),
  compute: ({ value, baseType, base }) => {
    const b = baseType === "e" ? Math.E : baseType === "2" ? 2 : baseType === "custom" ? (base ?? 10) : 10;
    const result = logarithm(value, b);
    const baseLabel = baseType === "e" ? "e" : formatSignificant(b);
    return {
      primary: { label: `log${baseType === "e" ? "" : ` base ${baseLabel}`} of x`, value: { kind: "text", text: formatSignificant(result, 12) }, caption: `${baseLabel} raised to this power equals ${formatSignificant(value)}.` },
      secondary: [
        { label: "Natural log (ln x)", value: { kind: "text", text: formatSignificant(Math.log(value), 12) } },
        { label: "Common log (log₁₀ x)", value: { kind: "text", text: formatSignificant(Math.log10(value), 12) } },
        { label: "Binary log (log₂ x)", value: { kind: "text", text: formatSignificant(Math.log2(value), 12) } },
      ],
    };
  },
});
