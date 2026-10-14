import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { formatClock } from "@/lib/math/time";

export type PaceValues = { race: string; distance: number | null; unit: string; hours: number; minutes: number; seconds: number };

export const RACES = [
  { value: "5k", label: "5K", km: 5 },
  { value: "10k", label: "10K", km: 10 },
  { value: "half", label: "Half marathon", km: 21.0975 },
  { value: "marathon", label: "Marathon", km: 42.195 },
  { value: "custom", label: "Custom distance", km: 0 },
] as const;

const KM_PER_MILE = 1.609344;

export const runningPaceEngine = defineEngine<PaceValues>({
  fields: [
    { id: "race", type: "select", label: "Distance", options: RACES.map(({ value, label }) => ({ value, label })), defaultValue: "10k" },
    { id: "distance", type: "number", label: "Custom distance", defaultValue: 8, min: 0, minExclusive: true, visibleWhen: { field: "race", oneOf: ["custom"] } },
    { id: "unit", type: "select", label: "Unit", options: [{ value: "km", label: "Kilometers" }, { value: "mi", label: "Miles" }], defaultValue: "km", visibleWhen: { field: "race", oneOf: ["custom"] } },
    { id: "hours", type: "number", label: "Hours", defaultValue: 0, min: 0, integer: true, max: 100, suffix: "h" },
    { id: "minutes", type: "number", label: "Minutes", defaultValue: 50, min: 0, max: 59, integer: true, suffix: "min" },
    { id: "seconds", type: "number", label: "Seconds", defaultValue: 0, min: 0, max: 59.99, suffix: "s" },
  ],
  validate: ({ hours, minutes, seconds }): FieldErrors => (hours * 3600 + minutes * 60 + seconds <= 0 ? { seconds: "Enter a finish time greater than zero." } : {}),
  compute: ({ race, distance, unit, hours, minutes, seconds }) => {
    const preset = RACES.find((r) => r.value === race);
    const km = race === "custom" || !preset ? (unit === "mi" ? (distance ?? 0) * KM_PER_MILE : (distance ?? 0)) : preset.km;
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    const perKm = totalSeconds / km;
    const kmh = km / (totalSeconds / 3600);
    return {
      primary: { label: "Pace per kilometer", value: { kind: "text", text: `${formatClock(perKm)} /km` }, caption: `Finish time ${formatClock(totalSeconds)} over ${Number(km.toFixed(4))} km.` },
      secondary: [
        { label: "Pace per mile", value: { kind: "text", text: `${formatClock(perKm * KM_PER_MILE)} /mi` } },
        { label: "Average speed", value: { kind: "number", value: kmh, decimals: 2, suffix: "km/h" } },
        { label: "Average speed (mph)", value: { kind: "number", value: kmh / KM_PER_MILE, decimals: 2, suffix: "mph" } },
      ],
    };
  },
});
