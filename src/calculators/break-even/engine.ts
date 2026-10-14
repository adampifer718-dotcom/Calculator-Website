import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";

export type BreakEvenValues = { fixed: number; price: number; variable: number; currency: string };

export const breakEvenEngine = defineEngine<BreakEvenValues>({
  currencyField: "currency",
  fields: [
    { id: "fixed", type: "number", label: "Fixed costs", help: "Costs that don't change with volume, e.g. rent and salaries.", defaultValue: 10000, min: 0, prefix: "currency" },
    { id: "price", type: "number", label: "Price per unit", defaultValue: 50, min: 0, minExclusive: true, prefix: "currency" },
    { id: "variable", type: "number", label: "Variable cost per unit", help: "Materials, packaging and other per-unit costs.", defaultValue: 30, min: 0, prefix: "currency" },
    currencyField,
  ],
  validate: ({ price, variable }): FieldErrors => (variable >= price ? { variable: "The variable cost must be lower than the price, or you never break even." } : {}),
  compute: ({ fixed, price, variable }) => {
    const contribution = price - variable;
    const units = fixed / contribution;
    return {
      primary: { label: "Break-even volume", value: { kind: "number", value: units, decimals: 2, suffix: "units" }, caption: `Round up to ${Math.ceil(units - 1e-9).toLocaleString("en-US")} whole units.` },
      secondary: [
        { label: "Break-even revenue", value: { kind: "currency", amount: units * price } },
        { label: "Contribution margin per unit", value: { kind: "currency", amount: contribution } },
        { label: "Contribution margin ratio", value: { kind: "percent", value: (contribution / price) * 100 } },
      ],
    };
  },
});
