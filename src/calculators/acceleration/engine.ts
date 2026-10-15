import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type ResultItem } from "@/calculators/framework/types";
import { sciNumber } from "@/lib/math/sci-result";
import { LENGTH, SPEED, findUnit } from "@/lib/math/units";
import en, { type AccelerationText } from "./text/en";

/** Standard acceleration of gravity, exact by definition (3rd CGPM, 1901). */
export const STANDARD_GRAVITY = 9.80665;
const FOOT_M = 0.3048;

const MODES = ["velocity", "distance", "force"] as const;
type Mode = (typeof MODES)[number];
const SPEED_UNITS = ["ms", "kmh", "mph", "fts"] as const;
const DISTANCE_UNITS = ["m", "km", "ft", "mi"] as const;

export type AccelerationValues = {
  mode: string;
  speedUnit: string;
  v0: number | null;
  v: number | null;
  time: number | null;
  distanceUnit: string;
  distance: number | null;
  force: number | null;
  mass: number | null;
};

/** Acceleration from a velocity change (m/s, s). */
export const fromVelocity = (v0: number, v: number, t: number) => (v - v0) / t;
/** Constant acceleration from distance and time with initial velocity (m, m/s, s): d = v₀t + ½at². */
export const fromDistance = (v0: number, d: number, t: number) => (2 * (d - v0 * t)) / (t * t);
/** Newton's second law (N, kg). */
export const fromForce = (f: number, m: number) => f / m;

export function makeAccelerationEngine(ctx: EngineContext<AccelerationText>) {
  const t = ctx.text;
  const kinematic = { field: "mode", oneOf: ["velocity", "distance"] } as const;
  return defineEngine<AccelerationValues>({
    locale: ctx.locale,
    fields: [
      { id: "mode", type: "select", label: t.mode, options: MODES.map((value) => ({ value, label: t.modes[value] })), defaultValue: "velocity", display: "segmented" },
      { id: "speedUnit", type: "select", label: t.speedUnit, options: SPEED_UNITS.map((value) => ({ value, label: t.speedUnits[value] })), defaultValue: "kmh", visibleWhen: kinematic },
      { id: "v0", type: "number", label: t.initialVelocity, help: t.initialHelp, defaultValue: 0, visibleWhen: kinematic },
      { id: "v", type: "number", label: t.finalVelocity, defaultValue: 100, visibleWhen: { field: "mode", oneOf: ["velocity"] } },
      { id: "distanceUnit", type: "select", label: t.distanceUnit, options: DISTANCE_UNITS.map((value) => ({ value, label: t.distanceUnits[value] })), defaultValue: "m", visibleWhen: { field: "mode", oneOf: ["distance"] } },
      { id: "distance", type: "number", label: t.distance, help: t.distanceHelp, defaultValue: 100, min: 0, visibleWhen: { field: "mode", oneOf: ["distance"] } },
      { id: "time", type: "number", label: t.time, defaultValue: 8, min: 0, minExclusive: true, suffix: "s", visibleWhen: kinematic },
      { id: "force", type: "number", label: t.force, help: t.forceHelp, defaultValue: 3000, suffix: "N", visibleWhen: { field: "mode", oneOf: ["force"] } },
      { id: "mass", type: "number", label: t.mass, defaultValue: 1200, min: 0, minExclusive: true, suffix: "kg", visibleWhen: { field: "mode", oneOf: ["force"] } },
    ],
    compute: (values) => {
      const mode: Mode = (MODES as readonly string[]).includes(values.mode) ? (values.mode as Mode) : "velocity";
      const speed = findUnit(SPEED, values.speedUnit);
      const length = findUnit(LENGTH, values.distanceUnit);
      const v0 = (values.v0 ?? 0) * speed.factor;
      const time = values.time ?? 1;
      const extra: ResultItem[] = [];
      const notes: string[] = [];
      let a: number;
      if (mode === "force") {
        a = fromForce(values.force ?? 0, values.mass ?? 1);
      } else if (mode === "distance") {
        a = fromDistance(v0, (values.distance ?? 0) * length.factor, time);
        extra.push({ label: t.finalVelocityResult, value: sciNumber(ctx.fmt, (v0 + a * time) / speed.factor, speed.symbol) });
        notes.push(t.notes.constant);
      } else {
        const v = (values.v ?? 0) * speed.factor;
        a = fromVelocity(v0, v, time);
        extra.push({ label: t.distanceCovered, value: sciNumber(ctx.fmt, ((v0 + v) / 2) * time, "m") });
        notes.push(t.notes.average);
      }
      // Remove floating-point noise such as 1e-16 when the true answer is zero.
      if (Math.abs(a) < 1e-12) a = 0;
      if (a < 0) notes.unshift(t.notes.negative);
      else if (a === 0) notes.unshift(t.notes.zero);
      notes.push(t.notes.g);
      return {
        primary: { label: t.acceleration, value: sciNumber(ctx.fmt, a, "m/s²"), caption: t.formula[mode] },
        secondary: [
          { label: t.inFeet, value: sciNumber(ctx.fmt, a / FOOT_M, "ft/s²") },
          { label: t.inG, value: sciNumber(ctx.fmt, a / STANDARD_GRAVITY, "g") },
          ...extra,
        ],
        notes,
      };
    },
  });
}

export const accelerationEngine = makeAccelerationEngine(englishContext(en));
