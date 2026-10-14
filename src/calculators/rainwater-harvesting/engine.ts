import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { US_GALLON_L } from "@/lib/math/units";
import en, { type RainwaterText } from "./text/en";

export type RainwaterValues = { units: string; area: number; rainfall: number; coefficient: number };

/** US gallons collected per square foot per inch of rain: 144 in³ ÷ 231 in³. */
export const GALLONS_PER_SQFT_INCH = 144 / 231;

export function makeRainwaterEngine(ctx: EngineContext<RainwaterText>) {
  const t = ctx.text;
  return defineEngine<RainwaterValues>({
    locale: ctx.locale,
    fields: [
      { id: "units", type: "select", label: t.units, options: (["metric", "imperial"] as const).map((value) => ({ value, label: t.unitOptions[value] })), defaultValue: "metric" },
      { id: "area", type: "number", label: t.area, help: t.areaHelp, defaultValue: 100, min: 0, minExclusive: true },
      { id: "rainfall", type: "number", label: t.rainfall, help: t.rainfallHelp, defaultValue: 25, min: 0 },
      { id: "coefficient", type: "number", label: t.coefficient, help: t.coefficientHelp, defaultValue: 0.8, min: 0, max: 1 },
    ],
    compute: ({ units, area, rainfall, coefficient }) => {
      const imperial = units === "imperial";
      const liters = imperial ? area * rainfall * GALLONS_PER_SQFT_INCH * coefficient * US_GALLON_L : area * rainfall * coefficient;
      const gallons = liters / US_GALLON_L;
      return {
        primary: imperial
          ? { label: t.collected, value: { kind: "number", value: gallons, decimals: 1, suffix: t.gallons } }
          : { label: t.collected, value: { kind: "number", value: liters, decimals: 1, suffix: "L" } },
        secondary: [
          imperial
            ? { label: t.inLiters, value: { kind: "number", value: liters, decimals: 1, suffix: "L" } }
            : { label: t.inGallons, value: { kind: "number", value: gallons, decimals: 1, suffix: t.gallons } },
          { label: t.inCubic, value: { kind: "number", value: liters / 1000, decimals: 3, suffix: "m³" } },
        ],
        notes: [t.note],
      };
    },
  });
}

export const rainwaterEngine = makeRainwaterEngine(englishContext(en));
