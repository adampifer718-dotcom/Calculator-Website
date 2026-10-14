import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type TipText } from "./text/en";

export type TipValues = { bill: number; percent: number; people: number; currency: string };

export function makeTipEngine(ctx: EngineContext<TipText>) {
  const t = ctx.text;
  return defineEngine<TipValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      { id: "bill", type: "number", label: t.bill, defaultValue: 80, min: 0, prefix: "currency" },
      { id: "percent", type: "number", label: t.percent, defaultValue: 18, min: 0, max: 100, suffix: "%" },
      { id: "people", type: "number", label: t.people, defaultValue: 4, min: 1, max: 1000, integer: true, suffix: ctx.common.units.people },
      currencyField(ctx),
    ],
    compute: ({ bill, percent, people }) => {
      const tip = (bill * percent) / 100;
      const total = bill + tip;
      return {
        primary: { label: t.tip, value: { kind: "currency", amount: tip } },
        secondary: [
          { label: t.total, value: { kind: "currency", amount: total } },
          { label: t.each, value: { kind: "currency", amount: total / people } },
          { label: t.tipEach, value: { kind: "currency", amount: tip / people } },
        ],
      };
    },
  });
}

export const tipEngine = makeTipEngine(englishContext(en));
