import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { formatClock } from "@/lib/math/time";
import en, { type SwimPaceText } from "./text/en";

export type SwimPaceValues = {
  mode: string;
  distance: number;
  unit: string;
  hours: number | null;
  minutes: number | null;
  seconds: number | null;
  paceMinutes: number | null;
  paceSeconds: number | null;
  paceUnit: string;
};

/** International yard, exact since 1959. */
export const METRES_PER_YARD = 0.9144;
export const PROJECTION_METRES = [50, 100, 200, 400, 800, 1500] as const;

type Unit = "m" | "yd";
const unitOf = (u: string): Unit => (u === "yd" ? "yd" : "m");
const metres = (x: number, u: Unit) => (u === "yd" ? x * METRES_PER_YARD : x);

/** Seconds per 100 m for a distance (m) swum in a time (s). */
export function pacePer100m(distanceM: number, seconds: number): number {
  return (seconds / distanceM) * 100;
}

export function makeSwimPaceEngine(ctx: EngineContext<SwimPaceText>) {
  const t = ctx.text;
  const u = ctx.common.units;
  const paceMode = { field: "mode", oneOf: ["pace"] } as const;
  const timeMode = { field: "mode", oneOf: ["time"] } as const;
  const totalTime = (v: SwimPaceValues) => (v.hours ?? 0) * 3600 + (v.minutes ?? 0) * 60 + (v.seconds ?? 0);
  const paceSeconds = (v: SwimPaceValues) => (v.paceMinutes ?? 0) * 60 + (v.paceSeconds ?? 0);

  return defineEngine<SwimPaceValues>({
    locale: ctx.locale,
    fields: [
      { id: "mode", type: "select", label: t.mode, options: (["pace", "time"] as const).map((value) => ({ value, label: t.modes[value] })), defaultValue: "pace", display: "segmented" },
      { id: "distance", type: "number", label: t.distance, defaultValue: 1500, min: 0, minExclusive: true, max: 100000 },
      { id: "unit", type: "select", label: t.unit, options: (["m", "yd"] as const).map((value) => ({ value, label: t.units[value] })), defaultValue: "m", display: "segmented" },
      { id: "hours", type: "number", label: t.hours, defaultValue: 0, min: 0, max: 99, integer: true, suffix: u.h, visibleWhen: paceMode },
      { id: "minutes", type: "number", label: t.minutes, defaultValue: 27, min: 0, max: 59, integer: true, suffix: u.min, visibleWhen: paceMode },
      { id: "seconds", type: "number", label: t.seconds, defaultValue: 30, min: 0, max: 59.99, suffix: u.s, visibleWhen: paceMode },
      { id: "paceMinutes", type: "number", label: t.paceMinutes, defaultValue: 1, min: 0, max: 59, integer: true, suffix: u.min, visibleWhen: timeMode },
      { id: "paceSeconds", type: "number", label: t.paceSeconds, defaultValue: 50, min: 0, max: 59.99, suffix: u.s, visibleWhen: timeMode },
      { id: "paceUnit", type: "select", label: t.paceUnit, options: (["m", "yd"] as const).map((value) => ({ value, label: t.paceUnits[value] })), defaultValue: "m", display: "segmented", visibleWhen: timeMode },
    ],
    validate: (v): FieldErrors => {
      if (v.mode === "time") return paceSeconds(v) <= 0 ? { paceSeconds: t.paceZero } : {};
      return totalTime(v) <= 0 ? { seconds: t.timeZero } : {};
    },
    compute: (v) => {
      const unit = unitOf(v.unit);
      const distanceM = metres(v.distance, unit);
      let per100m: number;
      let seconds: number;
      if (v.mode === "time") {
        const pu = unitOf(v.paceUnit);
        per100m = paceSeconds(v) / (pu === "yd" ? METRES_PER_YARD : 1);
        seconds = (per100m * distanceM) / 100;
      } else {
        seconds = totalTime(v);
        per100m = pacePer100m(distanceM, seconds);
      }
      const per100yd = per100m * METRES_PER_YARD;
      const ms = 100 / per100m;
      const paceIn = (pu: Unit) => `${formatClock(pu === "yd" ? per100yd : per100m)} /100 ${pu}`;
      const paceLabel = (pu: Unit) => fill(t.pace, { unit: pu });
      const caption = fill(t.caption, { distance: `${ctx.fmt.number(v.distance, 2)} ${unit}`, time: formatClock(seconds) });
      const timeMode = v.mode === "time";
      const primaryUnit = timeMode ? unitOf(v.paceUnit) : unit;
      return {
        primary: timeMode
          ? { label: t.time, value: { kind: "text", text: formatClock(seconds) }, caption }
          : { label: paceLabel(primaryUnit), value: { kind: "text", text: paceIn(primaryUnit) }, caption },
        secondary: [
          ...(timeMode ? [{ label: paceLabel(primaryUnit), value: { kind: "text" as const, text: paceIn(primaryUnit) } }] : []),
          { label: paceLabel(primaryUnit === "m" ? "yd" : "m"), value: { kind: "text", text: paceIn(primaryUnit === "m" ? "yd" : "m") } },
          { label: t.speedMs, value: { kind: "number", value: ms, decimals: 3, suffix: "m/s" } },
          { label: t.speedKmh, value: { kind: "number", value: ms * 3.6, decimals: 2, suffix: "km/h" } },
          ...(unit === "yd" ? [{ label: t.distanceM, value: { kind: "number" as const, value: distanceM, decimals: 2, suffix: "m" } }] : []),
        ],
        tables: [
          {
            caption: t.table.caption,
            columns: [t.table.distance, t.table.time],
            rows: PROJECTION_METRES.map((d) => ({
              label: `${ctx.fmt.number(d, 0)} m`,
              highlight: Math.abs(d - distanceM) < 1e-9,
              cells: [{ kind: "text", text: formatClock((per100m * d) / 100) }],
            })),
          },
        ],
        notes: [t.notes.even],
      };
    },
  });
}

export const swimPaceEngine = makeSwimPaceEngine(englishContext(en));
