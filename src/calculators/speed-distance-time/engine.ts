import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type SpeedDistanceTimeText } from "./text/en";

export type SpeedValues = { solve: string; units: string; distance: number | null; speed: number | null; hours: number | null; minutes: number | null };

const KM_PER_MILE = 1.609344;

export function makeSpeedDistanceTimeEngine(ctx: EngineContext<SpeedDistanceTimeText>) {
  const t = ctx.text;
  const formatTime = (hours: number) => {
    const minutes = Math.round(hours * 60);
    const h = ctx.fmt.number(Math.floor(minutes / 60), 0);
    const m = ctx.fmt.number(minutes % 60, 0);
    if (minutes < 60) return fill(t.minutesOnly, { m });
    return minutes % 60 === 0 ? fill(t.hoursOnly, { h }) : fill(t.hoursMinutes, { h, m });
  };
  return defineEngine<SpeedValues>({
    locale: ctx.locale,
    fields: [
      { id: "solve", type: "select", label: t.solve, options: (["speed", "distance", "time"] as const).map((value) => ({ value, label: t.solveOptions[value] })), defaultValue: "speed" },
      { id: "units", type: "select", label: t.units, options: (["metric", "imperial"] as const).map((value) => ({ value, label: t.unitOptions[value] })), defaultValue: "metric" },
      { id: "distance", type: "number", label: t.distance, defaultValue: 150, min: 0, visibleWhen: { field: "solve", oneOf: ["speed", "time"] } },
      { id: "speed", type: "number", label: t.speed, defaultValue: 60, min: 0, minExclusive: true, visibleWhen: { field: "solve", oneOf: ["distance", "time"] } },
      { id: "hours", type: "number", label: t.hours, defaultValue: 2, min: 0, suffix: ctx.common.units.h, visibleWhen: { field: "solve", oneOf: ["speed", "distance"] } },
      { id: "minutes", type: "number", label: t.minutes, defaultValue: 30, min: 0, max: 59.999, suffix: ctx.common.units.min, visibleWhen: { field: "solve", oneOf: ["speed", "distance"] } },
    ],
    validate: ({ solve, hours, minutes }): FieldErrors => (solve !== "time" && (hours ?? 0) * 60 + (minutes ?? 0) <= 0 ? { minutes: t.timeZero } : {}),
    compute: ({ solve, units, distance, speed, hours, minutes }) => {
      const imperial = units === "imperial";
      const dUnit = imperial ? "mi" : "km";
      const sUnit = imperial ? "mph" : "km/h";
      const time = (hours ?? 0) + (minutes ?? 0) / 60;
      if (solve === "distance") {
        const d = (speed ?? 0) * time;
        return {
          primary: { label: t.distanceOut, value: { kind: "number", value: d, decimals: 4, suffix: dUnit } },
          secondary: [{ label: imperial ? t.inKm : t.inMiles, value: { kind: "number", value: imperial ? d * KM_PER_MILE : d / KM_PER_MILE, decimals: 4, suffix: imperial ? "km" : "mi" } }],
        };
      }
      if (solve === "time") {
        const hoursNeeded = (distance ?? 0) / (speed ?? 1);
        return {
          primary: { label: t.timeOut, value: { kind: "text", text: formatTime(hoursNeeded) } },
          secondary: [{ label: t.inHours, value: { kind: "number", value: hoursNeeded, decimals: 4, suffix: ctx.common.units.h } }],
        };
      }
      const s = (distance ?? 0) / time;
      const metersPerSecond = ((imperial ? s * KM_PER_MILE : s) * 1000) / 3600;
      return {
        primary: { label: t.speedOut, value: { kind: "number", value: s, decimals: 4, suffix: sUnit } },
        secondary: [
          { label: imperial ? t.inKmh : t.inMph, value: { kind: "number", value: imperial ? s * KM_PER_MILE : s / KM_PER_MILE, decimals: 4, suffix: imperial ? "km/h" : "mph" } },
          { label: t.inMps, value: { kind: "number", value: metersPerSecond, decimals: 4, suffix: "m/s" } },
        ],
      };
    },
  });
}

export const speedDistanceTimeEngine = makeSpeedDistanceTimeEngine(englishContext(en));
