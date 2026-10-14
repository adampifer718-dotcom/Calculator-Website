import { defineEngine } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";

export type SalesTaxValues = { mode: string; amount: number; rate: number; currency: string };

export const salesTaxEngine = defineEngine<SalesTaxValues>({
  currencyField: "currency",
  fields: [
    {
      id: "mode",
      type: "select",
      label: "Calculation",
      options: [
        { value: "add", label: "Add tax to a price" },
        { value: "remove", label: "Remove tax from a total" },
      ],
      defaultValue: "add",
    },
    { id: "amount", type: "number", label: "Amount", help: "Price before tax, or total including tax when removing tax.", defaultValue: 100, min: 0, prefix: "currency" },
    { id: "rate", type: "number", label: "Sales tax rate", defaultValue: 8.25, min: 0, max: 100, suffix: "%" },
    currencyField,
  ],
  compute: ({ mode, amount, rate }) => {
    if (mode === "remove") {
      const before = amount / (1 + rate / 100);
      return {
        primary: { label: "Price before tax", value: { kind: "currency", amount: before }, caption: "The total divided by (1 + tax rate)." },
        secondary: [
          { label: "Sales tax included", value: { kind: "currency", amount: amount - before } },
          { label: "Total including tax", value: { kind: "currency", amount } },
        ],
      };
    }
    const tax = (amount * rate) / 100;
    return {
      primary: { label: "Total including tax", value: { kind: "currency", amount: amount + tax }, caption: "The price plus sales tax." },
      secondary: [
        { label: "Sales tax", value: { kind: "currency", amount: tax } },
        { label: "Price before tax", value: { kind: "currency", amount } },
      ],
    };
  },
});
