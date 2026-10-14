import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { formatHoursText } from "@/lib/math/time";

export type SpeedValues = { solve: string; units: string; distance: number | null; speed: number | null; hours: number | null; minutes: number | null };

const KM_PER_MILE = 1.609344;

export const speedDistanceTimeEngine = defineEngine<SpeedValues>({
  fields: [
    {
      id: "solve",
      type: "select",
      label: "Find",
      options: [
        { value: "speed", label: "Speed" },
        { value: "distance", label: "Distance" },
        { value: "time", label: "Time" },
      ],
      defaultValue: "speed",
    },
    {
      id: "units",
      type: "select",
      label: "Units",
      options: [
        { value: "metric", label: "Kilometers and km/h" },
        { value: "imperial", label: "Miles and mph" },
      ],
      defaultValue: "metric",
    },
    { id: "distance", type: "number", label: "Distance", defaultValue: 150, min: 0, visibleWhen: { field: "solve", oneOf: ["speed", "time"] } },
    { id: "speed", type: "number", label: "Speed", defaultValue: 60, min: 0, minExclusive: true, visibleWhen: { field: "solve", oneOf: ["distance", "time"] } },
    { id: "hours", type: "number", label: "Hours", defaultValue: 2, min: 0, suffix: "h", visibleWhen: { field: "solve", oneOf: ["speed", "distance"] } },
    { id: "minutes", type: "number", label: "Minutes", defaultValue: 30, min: 0, max: 59.999, suffix: "min", visibleWhen: { field: "solve", oneOf: ["speed", "distance"] } },
  ],
  validate: ({ solve, hours, minutes }): FieldErrors =>
    solve !== "time" && (hours ?? 0) * 60 + (minutes ?? 0) <= 0 ? { minutes: "Enter a time greater than zero." } : {},
  compute: ({ solve, units, distance, speed, hours, minutes }) => {
    const imperial = units === "imperial";
    const dUnit = imperial ? "mi" : "km";
    const sUnit = imperial ? "mph" : "km/h";
    const time = (hours ?? 0) + (minutes ?? 0) / 60;
    if (solve === "distance") {
      const d = (speed ?? 0) * time;
      return {
        primary: { label: "Distance", value: { kind: "number", value: d, decimals: 4, suffix: dUnit } },
        secondary: [{ label: imperial ? "In kilometers" : "In miles", value: { kind: "number", value: imperial ? d * KM_PER_MILE : d / KM_PER_MILE, decimals: 4, suffix: imperial ? "km" : "mi" } }],
      };
    }
    if (solve === "time") {
      const t = (distance ?? 0) / (speed ?? 1);
      return {
        primary: { label: "Time", value: { kind: "text", text: formatHoursText(t) } },
        secondary: [{ label: "In hours", value: { kind: "number", value: t, decimals: 4, suffix: "h" } }],
      };
    }
    const s = (distance ?? 0) / time;
    const metersPerSecond = ((imperial ? s * KM_PER_MILE : s) * 1000) / 3600;
    return {
      primary: { label: "Average speed", value: { kind: "number", value: s, decimals: 4, suffix: sUnit } },
      secondary: [
        { label: imperial ? "In km/h" : "In mph", value: { kind: "number", value: imperial ? s * KM_PER_MILE : s / KM_PER_MILE, decimals: 4, suffix: imperial ? "km/h" : "mph" } },
        { label: "In meters per second", value: { kind: "number", value: metersPerSecond, decimals: 4, suffix: "m/s" } },
      ],
    };
  },
});
