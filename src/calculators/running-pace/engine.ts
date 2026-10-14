import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { formatClock } from "@/lib/math/time";
import en, { type RunningPaceText } from "./text/en";

export type PaceValues = { race: string; distance: number | null; unit: string; hours: number; minutes: number; seconds: number };

export const RACES = [
  { value: "5k", km: 5 },
  { value: "10k", km: 10 },
  { value: "half", km: 21.0975 },
  { value: "marathon", km: 42.195 },
  { value: "custom", km: 0 },
] as const;

const KM_PER_MILE = 1.609344;

/** Paces use the universal m:ss clock format in every language. */
export function makeRunningPaceEngine(ctx: EngineContext<RunningPaceText>) {
  const t = ctx.text;
  const u = ctx.common.units;
  return defineEngine<PaceValues>({
    locale: ctx.locale,
    fields: [
      { id: "race", type: "select", label: t.race, options: RACES.map(({ value }) => ({ value, label: t.races[value] })), defaultValue: "10k" },
      { id: "distance", type: "number", label: t.distance, defaultValue: 8, min: 0, minExclusive: true, visibleWhen: { field: "race", oneOf: ["custom"] } },
      { id: "unit", type: "select", label: t.unit, options: (["km", "mi"] as const).map((value) => ({ value, label: t.units[value] })), defaultValue: "km", visibleWhen: { field: "race", oneOf: ["custom"] } },
      { id: "hours", type: "number", label: t.hours, defaultValue: 0, min: 0, integer: true, max: 100, suffix: u.h },
      { id: "minutes", type: "number", label: t.minutes, defaultValue: 50, min: 0, max: 59, integer: true, suffix: u.min },
      { id: "seconds", type: "number", label: t.seconds, defaultValue: 0, min: 0, max: 59.99, suffix: u.s },
    ],
    validate: ({ hours, minutes, seconds }): FieldErrors => (hours * 3600 + minutes * 60 + seconds <= 0 ? { seconds: t.timeZero } : {}),
    compute: ({ race, distance, unit, hours, minutes, seconds }) => {
      const preset = RACES.find((r) => r.value === race);
      const km = race === "custom" || !preset ? (unit === "mi" ? (distance ?? 0) * KM_PER_MILE : (distance ?? 0)) : preset.km;
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
      const perKm = totalSeconds / km;
      const kmh = km / (totalSeconds / 3600);
      return {
        primary: { label: t.perKm, value: { kind: "text", text: `${formatClock(perKm)} /km` }, caption: fill(t.caption, { time: formatClock(totalSeconds), km: ctx.fmt.number(km, 4) }) },
        secondary: [
          { label: t.perMile, value: { kind: "text", text: `${formatClock(perKm * KM_PER_MILE)} /mi` } },
          { label: t.speed, value: { kind: "number", value: kmh, decimals: 2, suffix: "km/h" } },
          { label: t.speedMph, value: { kind: "number", value: kmh / KM_PER_MILE, decimals: 2, suffix: "mph" } },
        ],
      };
    },
  });
}

export const runningPaceEngine = makeRunningPaceEngine(englishContext(en));
