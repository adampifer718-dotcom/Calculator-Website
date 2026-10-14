import { defineEngine } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";

export type FuelValues = { units: string; distance: number; efficiency: number; price: number; currency: string };

export const fuelCostEngine = defineEngine<FuelValues>({
  currencyField: "currency",
  fields: [
    {
      id: "units",
      type: "select",
      label: "Units",
      options: [
        { value: "us", label: "Miles, MPG and price per US gallon" },
        { value: "metric", label: "Kilometers, L/100 km and price per liter" },
      ],
      defaultValue: "us",
    },
    { id: "distance", type: "number", label: "Trip distance", defaultValue: 300, min: 0 },
    { id: "efficiency", type: "number", label: "Fuel economy", help: "Miles per gallon, or liters per 100 km.", defaultValue: 30, min: 0, minExclusive: true },
    { id: "price", type: "number", label: "Fuel price per gallon or liter", defaultValue: 3.5, min: 0, prefix: "currency" },
    currencyField,
  ],
  compute: ({ units, distance, efficiency, price }) => {
    const metric = units === "metric";
    const fuel = metric ? (distance * efficiency) / 100 : distance / efficiency;
    const cost = fuel * price;
    return {
      primary: { label: "Fuel cost", value: { kind: "currency", amount: cost } },
      secondary: [
        { label: "Fuel used", value: { kind: "number", value: fuel, decimals: 2, suffix: metric ? "L" : "US gal" } },
        { label: metric ? "Cost per kilometer" : "Cost per mile", value: { kind: "currency", amount: distance > 0 ? cost / distance : 0 } },
      ],
    };
  },
});
