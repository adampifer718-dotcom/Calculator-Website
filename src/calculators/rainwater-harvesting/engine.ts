import { defineEngine } from "@/calculators/framework/types";
import { US_GALLON_L } from "@/lib/math/units";

export type RainwaterValues = { units: string; area: number; rainfall: number; coefficient: number };

/** US gallons collected per square foot per inch of rain: 144 in³ ÷ 231 in³. */
export const GALLONS_PER_SQFT_INCH = 144 / 231;

export const rainwaterEngine = defineEngine<RainwaterValues>({
  fields: [
    {
      id: "units",
      type: "select",
      label: "Units",
      options: [
        { value: "metric", label: "Metric (m², mm, liters)" },
        { value: "imperial", label: "US (ft², inches, gallons)" },
      ],
      defaultValue: "metric",
    },
    { id: "area", type: "number", label: "Catchment (roof) area", help: "The horizontal footprint of the roof, not the sloped surface.", defaultValue: 100, min: 0, minExclusive: true },
    { id: "rainfall", type: "number", label: "Rainfall", help: "For one storm, a month or a year.", defaultValue: 25, min: 0 },
    { id: "coefficient", type: "number", label: "Runoff coefficient", help: "Share of rain that reaches the tank after losses (0 to 1).", defaultValue: 0.8, min: 0, max: 1 },
  ],
  compute: ({ units, area, rainfall, coefficient }) => {
    const imperial = units === "imperial";
    const liters = imperial ? area * rainfall * GALLONS_PER_SQFT_INCH * coefficient * US_GALLON_L : area * rainfall * coefficient;
    const gallons = liters / US_GALLON_L;
    return {
      primary: imperial
        ? { label: "Water collected", value: { kind: "number", value: gallons, decimals: 1, suffix: "US gal" } }
        : { label: "Water collected", value: { kind: "number", value: liters, decimals: 1, suffix: "L" } },
      secondary: [
        imperial
          ? { label: "In liters", value: { kind: "number", value: liters, decimals: 1, suffix: "L" } }
          : { label: "In US gallons", value: { kind: "number", value: gallons, decimals: 1, suffix: "US gal" } },
        { label: "In cubic meters", value: { kind: "number", value: liters / 1000, decimals: 3, suffix: "m³" } },
      ],
      notes: ["1 mm of rain on 1 m² is exactly 1 liter; 1 inch of rain on 1 ft² is 144 ÷ 231 ≈ 0.623 US gallons."],
    };
  },
});
