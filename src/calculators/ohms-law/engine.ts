import { defineEngine } from "@/calculators/framework/types";

export type OhmsValues = { known: string; voltage: number | null; current: number | null; resistance: number | null };

const positive = { min: 0, minExclusive: true } as const;

export const ohmsLawEngine = defineEngine<OhmsValues>({
  fields: [
    {
      id: "known",
      type: "select",
      label: "I know",
      options: [
        { value: "VR", label: "Voltage and resistance" },
        { value: "VI", label: "Voltage and current" },
        { value: "IR", label: "Current and resistance" },
      ],
      defaultValue: "VR",
    },
    { id: "voltage", type: "number", label: "Voltage (V)", defaultValue: 12, ...positive, suffix: "V", visibleWhen: { field: "known", oneOf: ["VR", "VI"] } },
    { id: "current", type: "number", label: "Current (I)", defaultValue: 3, ...positive, suffix: "A", visibleWhen: { field: "known", oneOf: ["VI", "IR"] } },
    { id: "resistance", type: "number", label: "Resistance (R)", defaultValue: 4, ...positive, suffix: "Ω", visibleWhen: { field: "known", oneOf: ["VR", "IR"] } },
  ],
  compute: ({ known, voltage, current, resistance }) => {
    let V = voltage ?? 0;
    let I = current ?? 0;
    let R = resistance ?? 0;
    if (known === "VR") I = V / R;
    else if (known === "VI") R = V / I;
    else V = I * R;
    const primary =
      known === "VR"
        ? { label: "Current (I = V ÷ R)", value: { kind: "number" as const, value: I, decimals: 6, suffix: "A" } }
        : known === "VI"
          ? { label: "Resistance (R = V ÷ I)", value: { kind: "number" as const, value: R, decimals: 6, suffix: "Ω" } }
          : { label: "Voltage (V = I × R)", value: { kind: "number" as const, value: V, decimals: 6, suffix: "V" } };
    return {
      primary,
      secondary: [
        { label: "Power (P = V × I)", value: { kind: "number", value: V * I, decimals: 6, suffix: "W" } },
        { label: "Voltage", value: { kind: "number", value: V, decimals: 6, suffix: "V" } },
        { label: "Current", value: { kind: "number", value: I, decimals: 6, suffix: "A" } },
        { label: "Resistance", value: { kind: "number", value: R, decimals: 6, suffix: "Ω" } },
      ],
      notes: ["Applies to ohmic (linear) components and DC circuits, or to RMS values for purely resistive AC loads."],
    };
  },
});
