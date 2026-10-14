import { defineEngine } from "@/calculators/framework/types";
import { POUND_KG } from "@/lib/math/units";

export type KineticValues = { mass: number; massUnit: string; velocity: number; velocityUnit: string };

const TO_MPS: Record<string, number> = { "m/s": 1, "km/h": 1000 / 3600, mph: 1609.344 / 3600 };

export const kineticEnergyEngine = defineEngine<KineticValues>({
  fields: [
    { id: "mass", type: "number", label: "Mass", defaultValue: 1000, min: 0 },
    { id: "massUnit", type: "select", label: "Mass unit", options: [{ value: "kg", label: "Kilograms (kg)" }, { value: "lb", label: "Pounds (lb)" }], defaultValue: "kg" },
    { id: "velocity", type: "number", label: "Speed", defaultValue: 20 },
    {
      id: "velocityUnit",
      type: "select",
      label: "Speed unit",
      options: [
        { value: "m/s", label: "Meters per second (m/s)" },
        { value: "km/h", label: "Kilometers per hour (km/h)" },
        { value: "mph", label: "Miles per hour (mph)" },
      ],
      defaultValue: "m/s",
    },
  ],
  compute: ({ mass, massUnit, velocity, velocityUnit }) => {
    const kg = massUnit === "lb" ? mass * POUND_KG : mass;
    const v = velocity * (TO_MPS[velocityUnit] ?? 1);
    const joules = 0.5 * kg * v * v;
    return {
      primary: { label: "Kinetic energy", value: { kind: "number", value: joules, decimals: 2, suffix: "J" } },
      secondary: [
        { label: "In kilojoules", value: { kind: "number", value: joules / 1000, decimals: 4, suffix: "kJ" } },
        { label: "In watt-hours", value: { kind: "number", value: joules / 3600, decimals: 4, suffix: "Wh" } },
        { label: "Speed in m/s", value: { kind: "number", value: v, decimals: 4, suffix: "m/s" } },
      ],
      notes: ["Classical (non-relativistic) kinetic energy, accurate for everyday speeds."],
    };
  },
});
