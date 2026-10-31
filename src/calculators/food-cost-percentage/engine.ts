import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type FoodCostPercentageText } from "./text/en";

export type FoodCostPercentageValues = {
  currency: string;
  mode: string;
  plateCost: number | null;
  menuPrice: number | null;
  beginInventory: number | null;
  purchases: number | null;
  endInventory: number | null;
  sales: number | null;
  target: number | null;
};

export const MODES = ["dish", "period"] as const;

/** Food cost % = cost ÷ price (or sales) × 100. */
export function foodCostPercent(cost: number, price: number): number {
  return (cost / price) * 100;
}

/** Cost of goods sold = beginning inventory + purchases − ending inventory. */
export function costOfGoodsSold(begin: number, purchases: number, end: number): number {
  return begin + purchases - end;
}

/** Price at which a cost equals the target food cost %: cost ÷ (target ÷ 100). */
export function priceForTarget(cost: number, targetPercent: number): number {
  return cost / (targetPercent / 100);
}

export function makeFoodCostPercentageEngine(ctx: EngineContext<FoodCostPercentageText>) {
  const t = ctx.text;
  const dish = { field: "mode", oneOf: ["dish"] } as const;
  const period = { field: "mode", oneOf: ["period"] } as const;
  const money = { min: 0, max: 1e10, prefix: "currency" } as const;
  return defineEngine<FoodCostPercentageValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      currencyField(ctx),
      { id: "mode", type: "select", label: t.mode, options: MODES.map((value) => ({ value, label: t.modes[value] })), defaultValue: "dish", display: "segmented" },
      { id: "plateCost", type: "number", label: t.plateCost, help: t.plateCostHelp, defaultValue: 4.2, ...money, visibleWhen: dish },
      { id: "menuPrice", type: "number", label: t.menuPrice, help: t.menuPriceHelp, defaultValue: 14, ...money, minExclusive: true, visibleWhen: dish },
      { id: "beginInventory", type: "number", label: t.beginInventory, help: t.beginInventoryHelp, defaultValue: 8000, ...money, visibleWhen: period },
      { id: "purchases", type: "number", label: t.purchases, help: t.purchasesHelp, defaultValue: 12000, ...money, visibleWhen: period },
      { id: "endInventory", type: "number", label: t.endInventory, help: t.endInventoryHelp, defaultValue: 7000, ...money, visibleWhen: period },
      { id: "sales", type: "number", label: t.sales, help: t.salesHelp, defaultValue: 45000, ...money, minExclusive: true, visibleWhen: period },
      { id: "target", type: "number", label: t.target, help: t.targetHelp, defaultValue: 30, optional: true, min: 0, minExclusive: true, max: 100, suffix: "%" },
    ],
    validate: ({ mode, beginInventory, purchases, endInventory }): FieldErrors =>
      mode === "period" && (endInventory ?? 0) > (beginInventory ?? 0) + (purchases ?? 0) ? { endInventory: t.errors.inventory } : {},
    compute: (v) => {
      const isDish = v.mode !== "period";
      const cost = isDish ? (v.plateCost ?? 0) : costOfGoodsSold(v.beginInventory ?? 0, v.purchases ?? 0, v.endInventory ?? 0);
      const price = isDish ? (v.menuPrice ?? 1) : (v.sales ?? 1);
      const percent = foodCostPercent(cost, price);
      const profit = price - cost;
      const secondary: ResultItem[] = [];
      if (!isDish) secondary.push({ label: t.cogs, value: { kind: "currency", amount: cost } });
      secondary.push(
        { label: isDish ? t.grossProfitPlate : t.grossProfitPeriod, value: { kind: "currency", amount: profit } },
        { label: t.margin, value: { kind: "percent", value: (profit / price) * 100, decimals: 2 } },
      );
      const notes = [t.notes.margin];
      if (v.target !== null) {
        secondary.push({ label: isDish ? t.suggestedPrice : t.salesAtTarget, value: { kind: "currency", amount: priceForTarget(cost, v.target) } });
        if (isDish) notes.push(t.notes.rounding);
      }
      if (percent > 100) notes.unshift(t.notes.above100);
      return {
        primary: {
          label: t.foodCost,
          value: { kind: "percent", value: percent, decimals: 2 },
          caption: isDish
            ? fill(t.captionDish, { cost: ctx.fmt.currency(cost, v.currency), price: ctx.fmt.currency(price, v.currency) })
            : fill(t.captionPeriod, { cogs: ctx.fmt.currency(cost, v.currency), sales: ctx.fmt.currency(price, v.currency) }),
        },
        secondary,
        notes,
      };
    },
  });
}

export const foodCostPercentageEngine = makeFoodCostPercentageEngine(englishContext(en));
