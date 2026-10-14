import { defineEngine } from "@/calculators/framework/types";
import { cleanNumberText, isNumberText, notations } from "@/lib/math/numbers";

export type ScientificNotationValues = { number: string };

const MAX_DECIMAL_EXPONENT = 21;

export const scientificNotationEngine = defineEngine<ScientificNotationValues>({
  fields: [
    {
      id: "number",
      type: "text",
      label: "Number",
      help: "A decimal such as 0.00056 or e-notation such as 6.02e23.",
      defaultValue: "123400",
      check: (text) => {
        if (!isNumberText(text)) return "Enter a number such as 123400, 0.00056 or 6.02e23.";
        if (!Number.isFinite(Number(cleanNumberText(text)))) return "Enter a number below 1.8 × 10³⁰⁸.";
        return undefined;
      },
    },
  ],
  compute: ({ number }) => {
    const value = Number(cleanNumberText(number));
    const forms = notations(value);
    const exponent = value === 0 ? 0 : Math.floor(Math.log10(Math.abs(value)));
    return {
      primary: { label: "Scientific notation", value: { kind: "text", text: forms.scientific } },
      secondary: [
        { label: "E-notation", value: { kind: "text", text: forms.eNotation } },
        { label: "Engineering notation", value: { kind: "text", text: forms.engineering } },
        {
          label: "Decimal form",
          value: { kind: "text", text: Math.abs(exponent) > MAX_DECIMAL_EXPONENT ? "Too long to display" : forms.decimal },
        },
      ],
    };
  },
});
