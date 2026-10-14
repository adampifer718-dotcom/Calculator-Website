import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import en, { type OhmsLawText } from "./text/en";

export type OhmsValues = { known: string; voltage: number | null; current: number | null; resistance: number | null };

const positive = { min: 0, minExclusive: true } as const;

export function makeOhmsLawEngine(ctx: EngineContext<OhmsLawText>) {
  const t = ctx.text;
  return defineEngine<OhmsValues>({
    locale: ctx.locale,
    fields: [
      { id: "known", type: "select", label: t.known, options: (["VR", "VI", "IR"] as const).map((value) => ({ value, label: t.knownOptions[value] })), defaultValue: "VR" },
      { id: "voltage", type: "number", label: t.voltage, defaultValue: 12, ...positive, suffix: "V", visibleWhen: { field: "known", oneOf: ["VR", "VI"] } },
      { id: "current", type: "number", label: t.current, defaultValue: 3, ...positive, suffix: "A", visibleWhen: { field: "known", oneOf: ["VI", "IR"] } },
      { id: "resistance", type: "number", label: t.resistance, defaultValue: 4, ...positive, suffix: "Ω", visibleWhen: { field: "known", oneOf: ["VR", "IR"] } },
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
          ? { label: t.currentOut, value: { kind: "number" as const, value: I, decimals: 6, suffix: "A" } }
          : known === "VI"
            ? { label: t.resistanceOut, value: { kind: "number" as const, value: R, decimals: 6, suffix: "Ω" } }
            : { label: t.voltageOut, value: { kind: "number" as const, value: V, decimals: 6, suffix: "V" } };
      return {
        primary,
        secondary: [
          { label: t.power, value: { kind: "number", value: V * I, decimals: 6, suffix: "W" } },
          { label: t.voltageShort, value: { kind: "number", value: V, decimals: 6, suffix: "V" } },
          { label: t.currentShort, value: { kind: "number", value: I, decimals: 6, suffix: "A" } },
          { label: t.resistanceShort, value: { kind: "number", value: R, decimals: 6, suffix: "Ω" } },
        ],
        notes: [t.note],
      };
    },
  });
}

export const ohmsLawEngine = makeOhmsLawEngine(englishContext(en));
