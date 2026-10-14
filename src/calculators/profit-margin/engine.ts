import { defineEngine } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";

export type MarginValues = { cost: number; price: number; currency: string };

export const profitMarginEngine = defineEngine<MarginValues>({
  currencyField: "currency",
  fields: [
    { id: "cost", type: "number", label: "Cost", defaultValue: 60, min: 0, prefix: "currency" },
    { id: "price", type: "number", label: "Selling price (revenue)", defaultValue: 100, min: 0, minExclusive: true, prefix: "currency" },
    currencyField,
  ],
  compute: ({ cost, price }) => {
    const profit = price - cost;
    return {
      primary: { label: "Profit margin", value: { kind: "percent", value: (profit / price) * 100, decimals: 2 }, caption: "Profit as a share of the selling price." },
      secondary: [
        { label: profit >= 0 ? "Profit" : "Loss", value: { kind: "currency", amount: profit, signed: true } },
        cost > 0
          ? { label: "Markup", value: { kind: "percent", value: (profit / cost) * 100, decimals: 2 } }
          : { label: "Markup", value: { kind: "text", text: "Undefined at zero cost" } },
      ],
    };
  },
});
