import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultValue } from "@/calculators/framework/types";
import { sciNumber } from "@/lib/math/sci-result";
import en, { type ProjectileMotionText } from "./text/en";

export type ProjectileMotionValues = {
  speed: number;
  speedUnit: string;
  angle: number;
  height: number;
  lengthUnit: string;
  gravity: string;
  customGravity: number | null;
};

/** Standard acceleration of gravity, exact by definition (3rd CGPM, 1901). */
export const STANDARD_GRAVITY = 9.80665;
/** Surface gravity from the NASA NSSDC planetary fact sheets. */
export const GRAVITY = { earth: STANDARD_GRAVITY, moon: 1.62, mars: 3.73 } as const;

const FOOT_M = 0.3048;
export const SPEED_MS = { ms: 1, kmh: 1000 / 3600, mph: 1609.344 / 3600, fts: FOOT_M } as const;
export const LENGTH_M = { m: 1, ft: FOOT_M } as const;
const SPEED_SYMBOL = { ms: "m/s", kmh: "km/h", mph: "mph", fts: "ft/s" } as const;
const TABLE_ROWS = 10;

const pick = <T extends Record<string, number>>(table: T, key: string, fallback: keyof T): keyof T => (key in table ? (key as keyof T) : fallback);

/** Projectile without drag, in SI units (m/s, degrees, m, m/s²). */
export function projectile(v: number, angleDeg: number, h: number, g: number) {
  const rad = (angleDeg * Math.PI) / 180;
  // Exact components at the end points avoid cos(90°) ≈ 6e-17.
  const vx = angleDeg === 90 ? 0 : v * Math.cos(rad);
  const vy = angleDeg === 0 ? 0 : angleDeg === 90 ? v : v * Math.sin(rad);
  const vyImpact = Math.sqrt(vy * vy + 2 * g * h);
  const time = (vy + vyImpact) / g;
  return {
    vx,
    vy,
    time,
    range: vx * time,
    maxHeight: h + (vy * vy) / (2 * g),
    apexTime: vy / g,
    impactSpeed: Math.sqrt(vx * vx + vyImpact * vyImpact),
    impactAngle: (Math.atan2(vyImpact, vx) * 180) / Math.PI,
    at: (s: number) => ({ x: vx * s, y: Math.max(0, h + vy * s - 0.5 * g * s * s) }),
  };
}

export function makeProjectileMotionEngine(ctx: EngineContext<ProjectileMotionText>) {
  const t = ctx.text;
  return defineEngine<ProjectileMotionValues>({
    locale: ctx.locale,
    fields: [
      { id: "speed", type: "number", label: t.speed, defaultValue: 20, min: 0, minExclusive: true },
      { id: "speedUnit", type: "select", label: t.speedUnit, options: (Object.keys(SPEED_MS) as (keyof typeof SPEED_MS)[]).map((value) => ({ value, label: t.speedUnits[value] })), defaultValue: "ms" },
      { id: "angle", type: "number", label: t.angle, help: t.angleHelp, defaultValue: 45, min: 0, max: 90, suffix: "°" },
      { id: "height", type: "number", label: t.height, help: t.heightHelp, defaultValue: 0, min: 0 },
      { id: "lengthUnit", type: "select", label: t.lengthUnit, help: t.lengthUnitHelp, options: (Object.keys(LENGTH_M) as (keyof typeof LENGTH_M)[]).map((value) => ({ value, label: t.lengthUnits[value] })), defaultValue: "m" },
      { id: "gravity", type: "select", label: t.gravity, options: (["earth", "moon", "mars", "custom"] as const).map((value) => ({ value, label: t.gravityOptions[value] })), defaultValue: "earth" },
      { id: "customGravity", type: "number", label: t.customGravity, help: t.customGravityHelp, defaultValue: 9.81, min: 0, minExclusive: true, suffix: "m/s²", visibleWhen: { field: "gravity", oneOf: ["custom"] } },
    ],
    validate: ({ angle, height }): FieldErrors => (angle === 0 && height === 0 ? { angle: t.flatLaunch } : {}),
    compute: (values) => {
      const speedKey = pick(SPEED_MS, values.speedUnit, "ms");
      const lengthKey = pick(LENGTH_M, values.lengthUnit, "m");
      const lf = LENGTH_M[lengthKey];
      const sf = SPEED_MS[speedKey];
      const g = values.gravity === "custom" ? (values.customGravity ?? STANDARD_GRAVITY) : GRAVITY[pick(GRAVITY, values.gravity, "earth")];
      const p = projectile(values.speed * sf, values.angle, values.height * lf, g);
      const length = (m: number): ResultValue => sciNumber(ctx.fmt, m / lf, lengthKey, 6);
      const speed = (ms: number) => sciNumber(ctx.fmt, ms / sf, SPEED_SYMBOL[speedKey], 6);
      const seconds = (s: number) => sciNumber(ctx.fmt, s, "s", 6);
      const cell = (m: number): ResultValue => ({ kind: "number", value: m / lf, decimals: 3, suffix: lengthKey });
      const rows = Array.from({ length: TABLE_ROWS }, (_, i) => {
        const s = (p.time * i) / (TABLE_ROWS - 1);
        const pos = i === TABLE_ROWS - 1 ? { x: p.range, y: 0 } : p.at(s);
        return { label: `${ctx.fmt.number(s, 3)} s`, cells: [cell(pos.x), cell(pos.y)] };
      });
      return {
        primary: { label: t.range, value: length(p.range), caption: t.caption },
        secondary: [
          { label: t.flightTime, value: seconds(p.time) },
          { label: t.maxHeight, value: length(p.maxHeight) },
          { label: t.apexTime, value: seconds(p.apexTime) },
          { label: t.impactSpeed, value: speed(p.impactSpeed) },
          { label: t.impactAngle, value: { kind: "number", value: p.impactAngle, decimals: 2, suffix: "°" } },
          {
            label: t.components,
            value: { kind: "text", text: fill(t.componentsText, { vx: `${ctx.fmt.significant(p.vx / sf, 6)} ${SPEED_SYMBOL[speedKey]}`, vy: `${ctx.fmt.significant(p.vy / sf, 6)} ${SPEED_SYMBOL[speedKey]}` }) },
          },
        ],
        tables: [{ caption: t.tableCaption, columns: [t.tableColumns.time, t.tableColumns.x, t.tableColumns.y], rows }],
        notes: [values.angle === 90 ? t.verticalNote : "", t.note].filter(Boolean),
      };
    },
  });
}

export const projectileMotionEngine = makeProjectileMotionEngine(englishContext(en));
