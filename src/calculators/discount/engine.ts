import { defineEngine } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";

export type DiscountValues = { price: number; percent: number; currency: string };

export const discountEngine = defineEngine<DiscountValues>({
  currencyField: "currency",
  fields: [
    { id: "price", type: "number", label: "Original price", defaultValue: 120, min: 0, prefix: "currency" },
    { id: "percent", type: "number", label: "Discount", defaultValue: 25, min: 0, max: 100, suffix: "%" },
    currencyField,
  ],
  compute: ({ price, percent }) => {
    const saving = (price * percent) / 100;
    return {
      primary: { label: "Sale price", value: { kind: "currency", amount: price - saving } },
      secondary: [
        { label: "You save", value: { kind: "currency", amount: saving } },
        { label: "Share of original price", value: { kind: "percent", value: 100 - percent } },
      ],
    };
  },
});
