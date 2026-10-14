import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type FuelCostText } from "./text/en";

export type FuelValues = { units: string; distance: number; efficiency: number; price: number; currency: string };

export function makeFuelCostEngine(ctx: EngineContext<FuelCostText>) {
  const t = ctx.text;
  return defineEngine<FuelValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      {
        id: "units",
        type: "select",
        label: t.units,
        options: [
          { value: "us", label: t.unitOptions.us },
          { value: "metric", label: t.unitOptions.metric },
        ],
        defaultValue: "us",
      },
      { id: "distance", type: "number", label: t.distance, defaultValue: 300, min: 0 },
      { id: "efficiency", type: "number", label: t.efficiency, help: t.efficiencyHelp, defaultValue: 30, min: 0, minExclusive: true },
      { id: "price", type: "number", label: t.price, defaultValue: 3.5, min: 0, prefix: "currency" },
      currencyField(ctx),
    ],
    compute: ({ units, distance, efficiency, price }) => {
      const metric = units === "metric";
      const fuel = metric ? (distance * efficiency) / 100 : distance / efficiency;
      const cost = fuel * price;
      return {
        primary: { label: t.cost, value: { kind: "currency", amount: cost } },
        secondary: [
          { label: t.fuel, value: { kind: "number", value: fuel, decimals: 2, suffix: metric ? "L" : t.gallons } },
          { label: metric ? t.perKm : t.perMile, value: { kind: "currency", amount: distance > 0 ? cost / distance : 0 } },
        ],
      };
    },
  });
}

export const fuelCostEngine = makeFuelCostEngine(englishContext(en));
