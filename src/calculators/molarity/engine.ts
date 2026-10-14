import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import en, { type MolarityText } from "./text/en";

export type MolarityValues = { mass: number; molarMass: number; volume: number; volumeUnit: string };

const positive = { min: 0, minExclusive: true } as const;

export function makeMolarityEngine(ctx: EngineContext<MolarityText>) {
  const t = ctx.text;
  return defineEngine<MolarityValues>({
    locale: ctx.locale,
    fields: [
      { id: "mass", type: "number", label: t.mass, defaultValue: 58.44, ...positive, suffix: "g" },
      { id: "molarMass", type: "number", label: t.molarMass, help: t.molarMassHelp, defaultValue: 58.44, ...positive, suffix: "g/mol" },
      { id: "volume", type: "number", label: t.volume, defaultValue: 1, ...positive },
      { id: "volumeUnit", type: "select", label: t.volumeUnit, options: (["L", "mL"] as const).map((value) => ({ value, label: t.volumeUnits[value] })), defaultValue: "L" },
    ],
    compute: ({ mass, molarMass, volume, volumeUnit }) => {
      const liters = volumeUnit === "mL" ? volume / 1000 : volume;
      const moles = mass / molarMass;
      const molarity = moles / liters;
      return {
        primary: { label: t.molarity, value: { kind: "number", value: molarity, decimals: 6, suffix: "mol/L (M)" } },
        secondary: [
          { label: t.amount, value: { kind: "number", value: moles, decimals: 6, suffix: "mol" } },
          { label: t.millimolar, value: { kind: "number", value: molarity * 1000, decimals: 4, suffix: "mM" } },
        ],
        notes: [t.note],
      };
    },
  });
}

export const molarityEngine = makeMolarityEngine(englishContext(en));
