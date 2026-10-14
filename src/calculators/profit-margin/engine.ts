import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type ProfitMarginText } from "./text/en";

export type MarginValues = { cost: number; price: number; currency: string };

export function makeProfitMarginEngine(ctx: EngineContext<ProfitMarginText>) {
  const t = ctx.text;
  return defineEngine<MarginValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      { id: "cost", type: "number", label: t.cost, defaultValue: 60, min: 0, prefix: "currency" },
      { id: "price", type: "number", label: t.price, defaultValue: 100, min: 0, minExclusive: true, prefix: "currency" },
      currencyField(ctx),
    ],
    compute: ({ cost, price }) => {
      const profit = price - cost;
      return {
        primary: { label: t.margin, value: { kind: "percent", value: (profit / price) * 100, decimals: 2 }, caption: t.caption },
        secondary: [
          { label: profit >= 0 ? t.profit : t.loss, value: { kind: "currency", amount: profit, signed: true } },
          cost > 0
            ? { label: t.markup, value: { kind: "percent", value: (profit / cost) * 100, decimals: 2 } }
            : { label: t.markup, value: { kind: "text", text: t.undefinedMarkup } },
        ],
      };
    },
  });
}

export const profitMarginEngine = makeProfitMarginEngine(englishContext(en));
