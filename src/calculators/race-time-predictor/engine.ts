import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { formatClock } from "@/lib/math/time";
import en, { type RaceTimePredictorText } from "./text/en";

export const KM_PER_MILE = 1.609344;
export const STANDARD_RACES = [
  { value: "mile", km: KM_PER_MILE },
  { value: "5k", km: 5 },
  { value: "10k", km: 10 },
  { value: "half", km: 21.0975 },
  { value: "marathon", km: 42.195 },
] as const;
const RACE_OPTIONS = [...STANDARD_RACES.map((r) => r.value), "custom"] as const;
export const DEFAULT_EXPONENT = 1.06;
export const MAX_DISTANCE_KM = 1000;

/** Riegel (1981): T₂ = T₁ × (D₂ ÷ D₁)^k. */
export const riegel = (t1: number, d1: number, d2: number, k = DEFAULT_EXPONENT) => t1 * (d2 / d1) ** k;

/** Always "h:mm:ss", rounded to the nearest second. */
export function formatHms(totalSeconds: number): string {
  const s = Math.round(totalSeconds);
  return `${Math.floor(s / 3600)}:${String(Math.floor((s % 3600) / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

export type RaceValues = {
  knownRace: string;
  knownDistance: number | null;
  knownUnit: string;
  hours: number;
  minutes: number;
  seconds: number;
  targetRace: string;
  targetDistance: number | null;
  targetUnit: string;
  exponent: number;
};

const toKm = (race: string, distance: number | null, unit: string) =>
  STANDARD_RACES.find((r) => r.value === race)?.km ?? (unit === "mi" ? (distance ?? 0) * KM_PER_MILE : (distance ?? 0));

export function makeRaceTimePredictorEngine(ctx: EngineContext<RaceTimePredictorText>) {
  const t = ctx.text;
  const u = ctx.common.units;
  const raceOptions = RACE_OPTIONS.map((value) => ({ value, label: t.races[value] }));
  const unitOptions = (["km", "mi"] as const).map((value) => ({ value, label: t.units[value] }));
  const distance = { min: 0, minExclusive: true, max: MAX_DISTANCE_KM } as const;
  const custom = (field: string) => ({ field, oneOf: ["custom"] });
  return defineEngine<RaceValues>({
    locale: ctx.locale,
    fields: [
      { id: "knownRace", type: "select", label: t.knownRace, options: raceOptions, defaultValue: "10k" },
      { id: "knownDistance", type: "number", label: t.knownDistance, defaultValue: 8, ...distance, visibleWhen: custom("knownRace") },
      { id: "knownUnit", type: "select", label: t.unit, options: unitOptions, defaultValue: "km", visibleWhen: custom("knownRace") },
      { id: "hours", type: "number", label: t.hours, defaultValue: 0, min: 0, max: 100, integer: true, suffix: u.h },
      { id: "minutes", type: "number", label: t.minutes, defaultValue: 50, min: 0, max: 59, integer: true, suffix: u.min },
      { id: "seconds", type: "number", label: t.seconds, defaultValue: 0, min: 0, max: 59.99, suffix: u.s },
      { id: "targetRace", type: "select", label: t.targetRace, options: raceOptions, defaultValue: "half" },
      { id: "targetDistance", type: "number", label: t.targetDistance, defaultValue: 15, ...distance, visibleWhen: custom("targetRace") },
      { id: "targetUnit", type: "select", label: t.unit, options: unitOptions, defaultValue: "km", visibleWhen: custom("targetRace") },
      { id: "exponent", type: "number", label: t.exponent, help: t.exponentHelp, defaultValue: DEFAULT_EXPONENT, min: 1.01, max: 1.15 },
    ],
    validate: ({ hours, minutes, seconds }): FieldErrors => (hours * 3600 + minutes * 60 + seconds <= 0 ? { seconds: t.timeZero } : {}),
    compute: (v) => {
      const d1 = toKm(v.knownRace, v.knownDistance, v.knownUnit);
      const d2 = toKm(v.targetRace, v.targetDistance, v.targetUnit);
      const t1 = v.hours * 3600 + v.minutes * 60 + v.seconds;
      const k = v.exponent;
      const t2 = riegel(t1, d1, d2, k);
      const ratio = d2 / d1;
      const notes: string[] = [];
      if (Math.abs(ratio - 1) < 1e-12) notes.push(t.notes.same);
      if (ratio > 4 || ratio < 0.25) notes.push(t.notes.far);
      if (t2 > 4 * 3600) notes.push(t.notes.long);
      notes.push(t.notes.training);
      const label = (race: string, km: number) => (race === "custom" ? `${ctx.fmt.number(km, 3)} km` : t.races[race as keyof typeof t.races] ?? race);
      return {
        primary: {
          label: t.predicted,
          value: { kind: "text", text: formatHms(t2) },
          caption: fill(t.caption, { time: formatHms(t1), known: label(v.knownRace, d1), target: label(v.targetRace, d2), k: ctx.fmt.number(k, 3) }),
        },
        secondary: [
          { label: t.perKm, value: { kind: "text", text: `${formatClock(t2 / d2)} /km` } },
          { label: t.perMile, value: { kind: "text", text: `${formatClock((t2 / d2) * KM_PER_MILE)} /mi` } },
          { label: t.speed, value: { kind: "number", value: d2 / (t2 / 3600), decimals: 2, suffix: "km/h" } },
        ],
        tables: [
          {
            caption: t.tableCaption,
            columns: [t.columns.distance, t.columns.time, t.columns.perKm, t.columns.perMile],
            rows: STANDARD_RACES.map((r) => {
              const time = riegel(t1, d1, r.km, k);
              return {
                label: t.tableRaces[r.value],
                cells: [
                  { kind: "text", text: formatHms(time) },
                  { kind: "text", text: formatClock(time / r.km) },
                  { kind: "text", text: formatClock((time / r.km) * KM_PER_MILE) },
                ],
                highlight: r.value === v.targetRace,
              };
            }),
          },
        ],
        notes,
      };
    },
  });
}

export const raceTimePredictorEngine = makeRaceTimePredictorEngine(englishContext(en));
