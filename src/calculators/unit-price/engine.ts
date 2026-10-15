import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type NumberField } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type UnitPriceText } from "./text/en";

export type UnitPriceValues = {
  currency: string;
  priceA: number;
  quantityA: number;
  unitA: string;
  priceB: number;
  quantityB: number;
  unitB: string;
};

export type Kind = "mass" | "volume" | "count";

/** Each unit's kind and its size in the base unit of that kind (g, mL or one item). Factors are exact. */
export const UNITS = {
  g: { kind: "mass", base: 1 },
  kg: { kind: "mass", base: 1000 },
  oz: { kind: "mass", base: 28.349523125 },
  lb: { kind: "mass", base: 453.59237 },
  mL: { kind: "volume", base: 1 },
  L: { kind: "volume", base: 1000 },
  floz: { kind: "volume", base: 29.5735295625 },
  gal: { kind: "volume", base: 3785.411784 },
  item: { kind: "count", base: 1 },
} as const satisfies Record<string, { kind: Kind; base: number }>;

export type UnitId = keyof typeof UNITS;
const UNIT_IDS = Object.keys(UNITS) as UnitId[];

/** Size of the common pricing unit (kg, L or item) in base units. */
const COMMON: Record<Kind, number> = { mass: 1000, volume: 1000, count: 1 };

const unitOf = (id: string) => UNITS[id as UnitId] ?? UNITS.item;

/** Price per kg, per L or per item. */
export function unitPrice(price: number, quantity: number, unit: string): number {
  const u = unitOf(unit);
  return (price / (quantity * u.base)) * COMMON[u.kind];
}

export function makeUnitPriceEngine(ctx: EngineContext<UnitPriceText>) {
  const t = ctx.text;
  const options = UNIT_IDS.map((value) => ({ value, label: t.units[value] }));
  const price = (id: "priceA" | "priceB", label: string, defaultValue: number): NumberField<typeof id> => ({ id, type: "number", label, defaultValue, min: 0, minExclusive: true, prefix: "currency" });
  const quantity = (id: "quantityA" | "quantityB", label: string, defaultValue: number): NumberField<typeof id> => ({ id, type: "number", label, help: t.quantityHelp, defaultValue, min: 0, minExclusive: true });
  return defineEngine<UnitPriceValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      currencyField(ctx),
      price("priceA", t.priceA, 3.49),
      quantity("quantityA", t.quantityA, 500),
      { id: "unitA", type: "select", label: t.unitA, options, defaultValue: "g" },
      price("priceB", t.priceB, 5.99),
      quantity("quantityB", t.quantityB, 1),
      { id: "unitB", type: "select", label: t.unitB, options, defaultValue: "kg" },
    ],
    validate: ({ unitA, unitB }): FieldErrors => (unitOf(unitA).kind !== unitOf(unitB).kind ? { unitB: t.kindMismatch } : {}),
    compute: ({ currency, priceA, quantityA, unitA, priceB, quantityB, unitB }) => {
      const kind = unitOf(unitA).kind;
      const unit = t.perUnit[kind];
      const a = unitPrice(priceA, quantityA, unitA);
      const b = unitPrice(priceB, quantityB, unitB);
      const same = Math.abs(a - b) <= 1e-9 * Math.max(a, b);
      const verdict = same ? t.same : a < b ? t.aCheaper : t.bCheaper;
      const saving = same ? 0 : ((Math.max(a, b) - Math.min(a, b)) / Math.max(a, b)) * 100;
      return {
        primary: {
          label: t.result,
          value: { kind: "text", text: verdict },
          caption: fill(t.caption, { a: ctx.fmt.currency(a, currency), b: ctx.fmt.currency(b, currency), unit }),
        },
        secondary: [
          { label: fill(t.unitPriceA, { unit }), value: { kind: "currency", amount: a } },
          { label: fill(t.unitPriceB, { unit }), value: { kind: "currency", amount: b } },
          { label: t.saving, value: { kind: "percent", value: saving, decimals: 2 } },
          { label: fill(t.difference, { unit }), value: { kind: "currency", amount: same ? 0 : Math.abs(a - b) } },
        ],
        notes: [fill(t.notes.compare, { unit }), t.notes.waste],
      };
    },
  });
}

export const unitPriceEngine = makeUnitPriceEngine(englishContext(en));
