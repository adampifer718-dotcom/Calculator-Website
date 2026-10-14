import { defineEngine } from "@/calculators/framework/types";

export type MolarityValues = { mass: number; molarMass: number; volume: number; volumeUnit: string };

const positive = { min: 0, minExclusive: true } as const;

export const molarityEngine = defineEngine<MolarityValues>({
  fields: [
    { id: "mass", type: "number", label: "Mass of solute", defaultValue: 58.44, ...positive, suffix: "g" },
    { id: "molarMass", type: "number", label: "Molar mass", help: "From the periodic table, e.g. NaCl = 58.44 g/mol.", defaultValue: 58.44, ...positive, suffix: "g/mol" },
    { id: "volume", type: "number", label: "Volume of solution", defaultValue: 1, ...positive },
    { id: "volumeUnit", type: "select", label: "Volume unit", options: [{ value: "L", label: "Liters (L)" }, { value: "mL", label: "Milliliters (mL)" }], defaultValue: "L" },
  ],
  compute: ({ mass, molarMass, volume, volumeUnit }) => {
    const liters = volumeUnit === "mL" ? volume / 1000 : volume;
    const moles = mass / molarMass;
    const molarity = moles / liters;
    return {
      primary: { label: "Molarity", value: { kind: "number", value: molarity, decimals: 6, suffix: "mol/L (M)" } },
      secondary: [
        { label: "Amount of solute", value: { kind: "number", value: moles, decimals: 6, suffix: "mol" } },
        { label: "In millimolar", value: { kind: "number", value: molarity * 1000, decimals: 4, suffix: "mM" } },
      ],
      notes: ["Volume is the final volume of the solution, not the volume of solvent added."],
    };
  },
});
