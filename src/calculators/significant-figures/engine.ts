import { defineEngine } from "@/calculators/framework/types";
import { cleanNumberText, countSigFigs, isNumberText, roundToSigFigs } from "@/lib/math/numbers";

export type SigFigValues = { mode: string; number: string; digits: number | null };

export const sigFigEngine = defineEngine<SigFigValues>({
  fields: [
    {
      id: "mode",
      type: "select",
      label: "Task",
      options: [
        { value: "count", label: "Count significant figures" },
        { value: "round", label: "Round to significant figures" },
      ],
      defaultValue: "count",
    },
    {
      id: "number",
      type: "text",
      label: "Number",
      help: "Type it exactly as written, including trailing zeros. E-notation such as 6.02e23 is allowed.",
      defaultValue: "0.004050",
      check: (text) => {
        if (!isNumberText(text)) return "Enter a number such as 1200, 0.0045 or 6.02e23.";
        if (countSigFigs(text) === 0) return "Enter a non-zero number.";
        if (!Number.isFinite(Number(cleanNumberText(text)))) return "Enter a smaller number.";
        return undefined;
      },
    },
    { id: "digits", type: "number", label: "Significant figures to keep", defaultValue: 3, min: 1, max: 15, integer: true, visibleWhen: { field: "mode", oneOf: ["round"] } },
  ],
  compute: ({ mode, number, digits }) => {
    const count = countSigFigs(number) ?? 0;
    const value = Number(cleanNumberText(number));
    if (mode === "round") {
      const rounded = roundToSigFigs(value, digits ?? 1);
      return {
        primary: { label: `Rounded to ${digits} significant figures`, value: { kind: "text", text: rounded.plain } },
        secondary: [
          { label: "Scientific notation", value: { kind: "text", text: rounded.scientific } },
          { label: "Significant figures in the original", value: { kind: "number", value: count } },
        ],
        notes: ["Trailing zeros in a whole number such as 123,000 are ambiguous; the scientific form shows exactly which digits are significant."],
      };
    }
    return {
      primary: { label: "Significant figures", value: { kind: "number", value: count }, caption: `${number} has ${count} significant ${count === 1 ? "figure" : "figures"}.` },
      secondary: [{ label: "In scientific notation", value: { kind: "text", text: roundToSigFigs(value, count).scientific } }],
      notes: ["Trailing zeros in a whole number without a decimal point (such as 1200) are treated as not significant. Write 1200. to make them significant."],
    };
  },
});
