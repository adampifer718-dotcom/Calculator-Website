import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { POUND_KG } from "@/lib/math/units";
import en, { type KineticEnergyText } from "./text/en";

export type KineticValues = { mass: number; massUnit: string; velocity: number; velocityUnit: string };

const TO_MPS = { "m/s": 1, "km/h": 1000 / 3600, mph: 1609.344 / 3600 } as const;

export function makeKineticEnergyEngine(ctx: EngineContext<KineticEnergyText>) {
  const t = ctx.text;
  return defineEngine<KineticValues>({
    locale: ctx.locale,
    fields: [
      { id: "mass", type: "number", label: t.mass, defaultValue: 1000, min: 0 },
      { id: "massUnit", type: "select", label: t.massUnit, options: (["kg", "lb"] as const).map((value) => ({ value, label: t.massUnits[value] })), defaultValue: "kg" },
      { id: "velocity", type: "number", label: t.velocity, defaultValue: 20 },
      { id: "velocityUnit", type: "select", label: t.velocityUnit, options: (["m/s", "km/h", "mph"] as const).map((value) => ({ value, label: t.velocityUnits[value] })), defaultValue: "m/s" },
    ],
    compute: ({ mass, massUnit, velocity, velocityUnit }) => {
      const kg = massUnit === "lb" ? mass * POUND_KG : mass;
      const v = velocity * (TO_MPS[velocityUnit as keyof typeof TO_MPS] ?? 1);
      const joules = 0.5 * kg * v * v;
      return {
        primary: { label: t.energy, value: { kind: "number", value: joules, decimals: 2, suffix: "J" } },
        secondary: [
          { label: t.kj, value: { kind: "number", value: joules / 1000, decimals: 4, suffix: "kJ" } },
          { label: t.wh, value: { kind: "number", value: joules / 3600, decimals: 4, suffix: "Wh" } },
          { label: t.mps, value: { kind: "number", value: v, decimals: 4, suffix: "m/s" } },
        ],
        notes: [t.note],
      };
    },
  });
}

export const kineticEnergyEngine = makeKineticEnergyEngine(englishContext(en));
