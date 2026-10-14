import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type DiscountText } from "./text/en";

export type DiscountValues = { price: number; percent: number; currency: string };

export function makeDiscountEngine(ctx: EngineContext<DiscountText>) {
  const t = ctx.text;
  return defineEngine<DiscountValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      { id: "price", type: "number", label: t.price, defaultValue: 120, min: 0, prefix: "currency" },
      { id: "percent", type: "number", label: t.percent, defaultValue: 25, min: 0, max: 100, suffix: "%" },
      currencyField(ctx),
    ],
    compute: ({ price, percent }) => {
      const saving = (price * percent) / 100;
      return {
        primary: { label: t.sale, value: { kind: "currency", amount: price - saving } },
        secondary: [
          { label: t.save, value: { kind: "currency", amount: saving } },
          { label: t.share, value: { kind: "percent", value: 100 - percent } },
        ],
      };
    },
  });
}

export const discountEngine = makeDiscountEngine(englishContext(en));
