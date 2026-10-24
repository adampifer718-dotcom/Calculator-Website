import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type ResultItem } from "@/calculators/framework/types";
import en, { type CarCo2Text } from "./text/en";

export type CarCo2Values = {
  method: string;
  distance: number | null;
  distanceUnit: string;
  economy: number | null;
  economyUnit: string;
  fuelAmount: number | null;
  fuelUnit: string;
  fuelType: string;
  customFactor: number | null;
  trips: number | null;
};

/** Exact: 1 US gallon = 3.785411784 L, 1 imperial gallon = 4.54609 L, 1 mile = 1.609344 km. */
export const US_GALLON_L = 3.785411784;
export const UK_GALLON_L = 4.54609;
export const MILE_KM = 1.609344;

/** US EPA tailpipe CO₂ per US gallon burned, in grams. */
export const EPA_G_PER_GALLON = { gasoline: 8887, diesel: 10180 } as const;
/** The EPA factors per liter, in kg CO₂/L. */
export const KG_CO2_PER_L = {
  gasoline: EPA_G_PER_GALLON.gasoline / 1000 / US_GALLON_L,
  diesel: EPA_G_PER_GALLON.diesel / 1000 / US_GALLON_L,
} as const;

const FUEL_L = { L: 1, galUs: US_GALLON_L, galUk: UK_GALLON_L } as const;

/** Liters of fuel to drive `km` at the given fuel economy. */
export function fuelLiters(km: number, economy: number, unit: string): number {
  switch (unit) {
    case "mpgUs":
      return (km / MILE_KM / economy) * US_GALLON_L;
    case "mpgUk":
      return (km / MILE_KM / economy) * UK_GALLON_L;
    case "kmL":
      return km / economy;
    default:
      return (km * economy) / 100;
  }
}

export function makeCarCo2Engine(ctx: EngineContext<CarCo2Text>) {
  const t = ctx.text;
  const byDistance = { field: "method", oneOf: ["distance"] };
  const byFuel = { field: "method", oneOf: ["fuel"] };
  const opts = <K extends string>(labels: Record<K, string>) => (Object.keys(labels) as K[]).map((value) => ({ value, label: labels[value] }));
  return defineEngine<CarCo2Values>({
    locale: ctx.locale,
    fields: [
      { id: "method", type: "select", label: t.method, options: opts(t.methodOptions), defaultValue: "distance", display: "segmented" },
      { id: "distance", type: "number", label: t.distance, defaultValue: 100, min: 0, minExclusive: true, max: 1e7, visibleWhen: byDistance },
      { id: "distanceUnit", type: "select", label: t.distanceUnit, options: opts(t.distanceUnits), defaultValue: "km", display: "segmented", visibleWhen: byDistance },
      { id: "economy", type: "number", label: t.economy, help: t.economyHelp, defaultValue: 7, min: 0, minExclusive: true, max: 1000, visibleWhen: byDistance },
      { id: "economyUnit", type: "select", label: t.economyUnit, options: opts(t.economyUnits), defaultValue: "l100km", visibleWhen: byDistance },
      { id: "fuelAmount", type: "number", label: t.fuelAmount, defaultValue: 40, min: 0, minExclusive: true, max: 1e7, visibleWhen: byFuel },
      { id: "fuelUnit", type: "select", label: t.fuelUnit, options: opts(t.fuelUnits), defaultValue: "L", visibleWhen: byFuel },
      { id: "fuelType", type: "select", label: t.fuelType, options: opts(t.fuelTypes), defaultValue: "gasoline" },
      { id: "customFactor", type: "number", label: t.customFactor, help: t.customFactorHelp, defaultValue: 2.3, min: 0, minExclusive: true, max: 10, suffix: "kg CO₂/L", visibleWhen: { field: "fuelType", oneOf: ["custom"] } },
      { id: "trips", type: "number", label: t.trips, help: t.tripsHelp, defaultValue: null, optional: true, min: 0, max: 100000, integer: true },
    ],
    compute: (v) => {
      const byDist = v.method === "distance";
      const km = byDist ? (v.distance ?? 0) * (v.distanceUnit === "mi" ? MILE_KM : 1) : null;
      const liters = km !== null ? fuelLiters(km, v.economy ?? 1, v.economyUnit) : (v.fuelAmount ?? 0) * (FUEL_L[v.fuelUnit as keyof typeof FUEL_L] ?? 1);
      const custom = v.fuelType === "custom";
      const factor = custom ? (v.customFactor ?? 0) : KG_CO2_PER_L[v.fuelType === "diesel" ? "diesel" : "gasoline"];
      const kg = liters * factor;

      const secondary: ResultItem[] = [];
      if (km !== null) {
        secondary.push(
          { label: t.perKm, value: { kind: "number", value: (kg * 1000) / km, decimals: 1, suffix: "g" } },
          { label: t.perMile, value: { kind: "number", value: (kg * 1000 * MILE_KM) / km, decimals: 1, suffix: "g" } },
        );
      }
      secondary.push(
        { label: t.fuelL, value: { kind: "number", value: liters, decimals: 2, suffix: "L" } },
        { label: t.fuelGal, value: { kind: "number", value: liters / US_GALLON_L, decimals: 2, suffix: t.gallonsUs } },
        { label: t.factor, value: { kind: "number", value: factor, decimals: 4, suffix: "kg CO₂/L" } },
      );
      if (v.trips !== null) {
        secondary.push(
          { label: t.annual, value: { kind: "number", value: kg * v.trips, decimals: 1, suffix: "kg" } },
          { label: t.annualTonnes, value: { kind: "number", value: (kg * v.trips) / 1000, decimals: 3, suffix: "t" } },
        );
      }
      return {
        primary: {
          label: t.co2,
          value: { kind: "number", value: kg, decimals: 2, suffix: "kg" },
          caption: fill(t.caption, {
            fuel: `${ctx.fmt.number(liters, 2)} L`,
            factor: `${ctx.fmt.number(factor, 4)} kg CO₂/L`,
          }),
        },
        secondary,
        notes: custom ? [t.notes.tailpipe, t.notes.custom, t.notes.electric] : [t.notes.tailpipe, t.notes.electric],
      };
    },
  });
}

export const carCo2Engine = makeCarCo2Engine(englishContext(en));
