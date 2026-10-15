import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type ResultItem } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type PizzaSizeText } from "./text/en";

export type PizzaSizeValues = { unit: string; diameterA: number; priceA: number; diameterB: number; priceB: number; currency: string };

/** Area of a round pizza: π × d² ÷ 4. */
export function pizzaArea(diameter: number): number {
  return (Math.PI * diameter * diameter) / 4;
}

export function makePizzaSizeEngine(ctx: EngineContext<PizzaSizeText>) {
  const t = ctx.text;
  const diameter = (id: "diameterA" | "diameterB", label: string, defaultValue: number) =>
    ({ id, type: "number", label, help: t.diameterHelp, defaultValue, min: 0, minExclusive: true, max: 10000 }) as const;
  const price = (id: "priceA" | "priceB", label: string, defaultValue: number) => ({ id, type: "number", label, defaultValue, min: 0, minExclusive: true, prefix: "currency" }) as const;
  return defineEngine<PizzaSizeValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      { id: "unit", type: "select", label: t.unit, options: (["in", "cm"] as const).map((value) => ({ value, label: t.units[value] })), defaultValue: "in", display: "segmented" },
      diameter("diameterA", t.diameterA, 12),
      price("priceA", t.priceA, 12.99),
      diameter("diameterB", t.diameterB, 16),
      price("priceB", t.priceB, 18.99),
      currencyField(ctx),
    ],
    compute: ({ unit, diameterA, priceA, diameterB, priceB, currency }) => {
      const sq = unit === "cm" ? "cm²" : "in²";
      const areaA = pizzaArea(diameterA);
      const areaB = pizzaArea(diameterB);
      const perA = priceA / areaA;
      const perB = priceB / areaB;
      const sameValue = Math.abs(perA - perB) <= 1e-9 * Math.max(perA, perB);
      const verdict = sameValue ? t.same : perA < perB ? t.aBetter : t.bBetter;
      const perArea = (v: number) => fill(t.perArea, { price: ctx.fmt.currency(v, currency, "negative", 4), unit: sq });
      const sameSize = diameterA === diameterB;
      const more: ResultItem = sameSize
        ? { label: t.sameSize, value: { kind: "text", text: t.sameSizeValue } }
        : {
            label: areaA > areaB ? t.moreA : t.moreB,
            value: { kind: "percent", value: (Math.max(areaA, areaB) / Math.min(areaA, areaB) - 1) * 100, decimals: 2 },
          };
      return {
        primary: {
          label: t.result,
          value: { kind: "text", text: verdict },
          caption: fill(t.caption, { a: perArea(perA), b: perArea(perB) }),
        },
        secondary: [
          { label: t.areaA, value: { kind: "number", value: areaA, decimals: 2, suffix: sq } },
          { label: t.areaB, value: { kind: "number", value: areaB, decimals: 2, suffix: sq } },
          { label: fill(t.pricePerAreaA, { unit: sq }), value: { kind: "text", text: ctx.fmt.currency(perA, currency, "negative", 4) } },
          { label: fill(t.pricePerAreaB, { unit: sq }), value: { kind: "text", text: ctx.fmt.currency(perB, currency, "negative", 4) } },
          { label: t.aPerB, value: { kind: "number", value: areaB / areaA, decimals: 3 } },
          more,
        ],
        notes: [t.note],
      };
    },
  });
}

export const pizzaSizeEngine = makePizzaSizeEngine(englishContext(en));
