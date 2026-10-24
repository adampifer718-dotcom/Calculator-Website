import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type NumberField, type ResultItem } from "@/calculators/framework/types";
import { GRAMS_PER_OUNCE, US_CUP_ML } from "@/lib/math/cooking";
import en, { type CoffeeRatioText } from "./text/en";

export const METHODS = ["drip", "frenchPress", "espresso", "coldBrew", "custom"] as const;
export type BrewMethod = (typeof METHODS)[number];

/** Typical starting ratios (grams of water per gram of coffee), editable on the page. */
export const TYPICAL_RATIO: Record<BrewMethod, number> = { drip: 16, frenchPress: 12, espresso: 2, coldBrew: 8, custom: 15 };

/** Exact: 1 US fl oz = 29.5735295625 mL; 1 US cup = 8 fl oz = 236.5882365 mL. Water is taken as 1 g/mL. */
export const US_FLOZ_ML = 29.5735295625;
export const WATER_ML = { mL: 1, g: 1, floz: US_FLOZ_ML, cup: US_CUP_ML } as const;
export const COFFEE_G = { g: 1, oz: GRAMS_PER_OUNCE } as const;
type WaterUnit = keyof typeof WATER_ML;
type CoffeeUnit = keyof typeof COFFEE_G;

export type CoffeeRatioValues = {
  method: string;
  solve: string;
  water: number | null;
  waterUnit: string;
  coffee: number | null;
  coffeeUnit: string;
} & Record<string, number | string | null>;

const ratioId = (method: BrewMethod) => `ratio${method[0].toUpperCase()}${method.slice(1)}`;
const methodOf = (value: string): BrewMethod => ((METHODS as readonly string[]).includes(value) ? (value as BrewMethod) : "drip");

export function makeCoffeeRatioEngine(ctx: EngineContext<CoffeeRatioText>) {
  const t = ctx.text;
  const opts = <K extends string>(labels: Record<K, string>) => (Object.keys(labels) as K[]).map((value) => ({ value, label: labels[value] }));
  const ratioFields: NumberField[] = METHODS.map((method) => ({
    id: ratioId(method),
    type: "number",
    label: t.ratio,
    help: t.ratioHelp[method],
    defaultValue: TYPICAL_RATIO[method],
    min: 1,
    max: 100,
    visibleWhen: { field: "method", oneOf: [method] },
  }));
  const decimals = (unit: string) => (unit === "g" || unit === "mL" ? 1 : 2);
  const waterSuffix = (unit: WaterUnit) => (unit === "cup" ? t.cupsUnit : unit === "floz" ? "fl oz" : unit);

  return defineEngine<CoffeeRatioValues>({
    locale: ctx.locale,
    fields: [
      { id: "method", type: "select", label: t.method, options: METHODS.map((value) => ({ value, label: t.methods[value] })), defaultValue: "drip" },
      ...ratioFields,
      { id: "solve", type: "select", label: t.solve, options: opts(t.solveOptions), defaultValue: "coffee", display: "segmented" },
      { id: "water", type: "number", label: t.water, defaultValue: 500, min: 0, minExclusive: true, max: 1e7, visibleWhen: { field: "solve", oneOf: ["coffee"] } },
      { id: "waterUnit", type: "select", label: t.waterUnit, options: opts(t.waterUnits), defaultValue: "mL" },
      { id: "coffee", type: "number", label: t.coffee, defaultValue: 30, min: 0, minExclusive: true, max: 1e7, visibleWhen: { field: "solve", oneOf: ["water"] } },
      { id: "coffeeUnit", type: "select", label: t.coffeeUnit, options: opts(t.coffeeUnits), defaultValue: "g", display: "segmented" },
    ] as never,
    compute: (values) => {
      const method = methodOf(values.method);
      const n = Number(values[ratioId(method)] ?? TYPICAL_RATIO[method]);
      const waterUnit = (values.waterUnit in WATER_ML ? values.waterUnit : "mL") as WaterUnit;
      const coffeeUnit = (values.coffeeUnit in COFFEE_G ? values.coffeeUnit : "g") as CoffeeUnit;
      const solveCoffee = values.solve !== "water";
      const waterMl = solveCoffee ? Number(values.water ?? 0) * WATER_ML[waterUnit] : Number(values.coffee ?? 0) * COFFEE_G[coffeeUnit] * n;
      const coffeeG = solveCoffee ? waterMl / n : Number(values.coffee ?? 0) * COFFEE_G[coffeeUnit];

      const coffeeOut = coffeeG / COFFEE_G[coffeeUnit];
      const waterOut = waterMl / WATER_ML[waterUnit];
      const ratioText = fill(t.ratioText, { n: ctx.fmt.number(n, 2) });
      const secondary: ResultItem[] = [
        { label: t.ratioOut, value: { kind: "text", text: ratioText } },
        { label: t.coffeeG, value: { kind: "number", value: coffeeG, decimals: 1, suffix: "g" } },
        { label: t.coffeeOz, value: { kind: "number", value: coffeeG / GRAMS_PER_OUNCE, decimals: 2, suffix: "oz" } },
        { label: t.waterMl, value: { kind: "number", value: waterMl, decimals: 1, suffix: "mL" } },
        { label: t.waterFloz, value: { kind: "number", value: waterMl / US_FLOZ_ML, decimals: 1, suffix: "fl oz" } },
        { label: t.waterCups, value: { kind: "number", value: waterMl / US_CUP_ML, decimals: 2, suffix: t.cupsUnit } },
        { label: t.strength, value: { kind: "number", value: (coffeeG / waterMl) * 1000, decimals: 1, suffix: "g/L" } },
      ];
      const notes = [t.notes.golden];
      if (method === "espresso") notes.unshift(t.notes.espresso);
      if (method === "coldBrew") notes.unshift(t.notes.coldBrew);
      notes.push(t.notes.water);
      const coffeeText = `${ctx.fmt.number(coffeeOut, decimals(coffeeUnit))} ${coffeeUnit}`;
      const waterText = `${ctx.fmt.number(waterOut, decimals(waterUnit))} ${waterSuffix(waterUnit)}`;
      return {
        primary: solveCoffee
          ? { label: t.coffeeNeeded, value: { kind: "number", value: coffeeOut, decimals: decimals(coffeeUnit), suffix: coffeeUnit }, caption: fill(t.caption, { ratio: ratioText, coffee: coffeeText, water: waterText }) }
          : { label: t.waterNeeded, value: { kind: "number", value: waterOut, decimals: decimals(waterUnit), suffix: waterSuffix(waterUnit) }, caption: fill(t.caption, { ratio: ratioText, coffee: coffeeText, water: waterText }) },
        secondary,
        notes,
      };
    },
  });
}

export const coffeeRatioEngine = makeCoffeeRatioEngine(englishContext(en));
