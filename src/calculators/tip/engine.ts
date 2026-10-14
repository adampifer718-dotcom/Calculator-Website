import { defineEngine } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";

export type TipValues = { bill: number; percent: number; people: number; currency: string };

export const tipEngine = defineEngine<TipValues>({
  currencyField: "currency",
  fields: [
    { id: "bill", type: "number", label: "Bill amount", defaultValue: 80, min: 0, prefix: "currency" },
    { id: "percent", type: "number", label: "Tip percentage", defaultValue: 18, min: 0, max: 100, suffix: "%" },
    { id: "people", type: "number", label: "Split between", defaultValue: 4, min: 1, max: 1000, integer: true, suffix: "people" },
    currencyField,
  ],
  compute: ({ bill, percent, people }) => {
    const tip = (bill * percent) / 100;
    const total = bill + tip;
    return {
      primary: { label: "Tip", value: { kind: "currency", amount: tip } },
      secondary: [
        { label: "Total with tip", value: { kind: "currency", amount: total } },
        { label: "Each person pays", value: { kind: "currency", amount: total / people } },
        { label: "Tip per person", value: { kind: "currency", amount: tip / people } },
      ],
    };
  },
});
