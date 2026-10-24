import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type NumberField, type ResultItem } from "@/calculators/framework/types";
import en, { type StairsText } from "./text/en";

type Unit = "in" | "cm";
type Key = "rise" | "maxRiser" | "targetRiser" | "tread" | "runLimit";

export type StairsValues = { unit: string } & Record<string, number | string | null>;

export const CM_PER_IN = 2.54;
/** IRC R311.7.5.1 maximum riser, 7¾ in (196 mm), and R311.7.5.2 minimum tread, 10 in (254 mm). */
export const IRC_MAX_RISER = { in: 7.75, cm: 19.6 } as const;
export const IRC_MIN_TREAD = { in: 10, cm: 25.4 } as const;
/** The 2R + T comfort rule of thumb, in inches. */
export const COMFORT_RANGE_IN = [24, 25] as const;

const DEFAULTS: Record<Unit, Record<Key, number | null>> = {
  in: { rise: 108, maxRiser: IRC_MAX_RISER.in, targetRiser: null, tread: IRC_MIN_TREAD.in, runLimit: null },
  cm: { rise: 274, maxRiser: IRC_MAX_RISER.cm, targetRiser: null, tread: IRC_MIN_TREAD.cm, runLimit: null },
};
const MAX: Record<Unit, Record<Key, number>> = {
  in: { rise: 600, maxRiser: 24, targetRiser: 24, tread: 48, runLimit: 10000 },
  cm: { rise: 1500, maxRiser: 60, targetRiser: 60, tread: 120, runLimit: 25000 },
};
const fieldId = (key: Key, unit: Unit) => `${key}${unit === "cm" ? "Cm" : "In"}`;

export interface StairInputs {
  rise: number;
  maxRiser: number;
  targetRiser: number | null;
  tread: number;
}

/** Number of risers: ⌈rise ÷ max riser⌉, or the count nearest the target riser height when one is given. */
export function riserCount(p: StairInputs): number {
  if (p.targetRiser !== null) return Math.max(1, Math.round(p.rise / p.targetRiser));
  return Math.max(1, Math.ceil(p.rise / p.maxRiser - 1e-9));
}

export function stairLayout(p: StairInputs) {
  const risers = riserCount(p);
  const riser = p.rise / risers;
  const treads = risers - 1;
  const run = treads * p.tread;
  return {
    risers,
    riser,
    treads,
    run,
    angle: (Math.atan(riser / p.tread) * 180) / Math.PI,
    stringer: Math.hypot(p.rise, run),
    comfort: 2 * riser + p.tread,
  };
}

export function makeStairsEngine(ctx: EngineContext<StairsText>) {
  const t = ctx.text;
  const labels: Record<Key, string> = { rise: t.rise, maxRiser: t.maxRiser, targetRiser: t.targetRiser, tread: t.tread, runLimit: t.runLimit };
  const help: Record<Key, string> = { rise: t.riseHelp, maxRiser: t.maxRiserHelp, targetRiser: t.targetRiserHelp, tread: t.treadHelp, runLimit: t.runLimitHelp };
  const optional = (key: Key) => key === "targetRiser" || key === "runLimit";
  const system = (key: Key): NumberField[] =>
    (["in", "cm"] as const).map((unit) => ({
      id: fieldId(key, unit),
      type: "number",
      label: labels[key],
      help: help[key],
      defaultValue: DEFAULTS[unit][key],
      optional: optional(key),
      min: 0,
      minExclusive: true,
      max: MAX[unit][key],
      suffix: unit,
      visibleWhen: { field: "unit", oneOf: [unit] },
    }));

  return defineEngine<StairsValues>({
    locale: ctx.locale,
    fields: [
      { id: "unit", type: "select", label: t.unit, options: (["in", "cm"] as const).map((value) => ({ value, label: t.units[value] })), defaultValue: "in", display: "segmented" },
      ...system("rise"),
      ...system("maxRiser"),
      ...system("targetRiser"),
      ...system("tread"),
      ...system("runLimit"),
    ] as never,
    compute: (values) => {
      const unit: Unit = values.unit === "cm" ? "cm" : "in";
      const get = (key: Key) => {
        const v = values[fieldId(key, unit)];
        return typeof v === "number" ? v : null;
      };
      const p: StairInputs = { rise: get("rise") ?? 0, maxRiser: get("maxRiser") ?? IRC_MAX_RISER[unit], targetRiser: get("targetRiser"), tread: get("tread") ?? IRC_MIN_TREAD[unit] };
      const s = stairLayout(p);
      const len = (v: number, decimals = 2) => ({ kind: "number" as const, value: v, decimals, suffix: unit });
      const fmtLen = (v: number) => `${ctx.fmt.number(v, 2)} ${unit}`;
      const comfortIn = unit === "cm" ? s.comfort / CM_PER_IN : s.comfort;
      const status = comfortIn < COMFORT_RANGE_IN[0] - 1e-9 ? "low" : comfortIn > COMFORT_RANGE_IN[1] + 1e-9 ? "high" : "ok";

      const secondary: ResultItem[] = [
        { label: t.riserHeight, value: len(s.riser, 3) },
        { label: t.treads, value: { kind: "number", value: s.treads, decimals: 0 } },
        { label: t.totalRun, value: len(s.run) },
        { label: t.angle, value: { kind: "number", value: s.angle, decimals: 1, suffix: "°" } },
        { label: t.stringer, value: len(s.stringer) },
        { label: t.comfort, value: len(s.comfort) },
        { label: t.comfortStatus, value: { kind: "text", text: t.comfortOptions[status] } },
      ];
      const notes: string[] = [];
      if (s.riser > p.maxRiser + 1e-9) notes.push(fill(t.notes.overMax, { riser: fmtLen(s.riser), max: fmtLen(p.maxRiser) }));
      const limit = get("runLimit");
      if (limit !== null && s.run > limit + 1e-9) notes.push(fill(t.notes.overRun, { run: fmtLen(s.run), limit: fmtLen(limit), over: fmtLen(s.run - limit) }));
      notes.push(t.notes.comfort, t.notes.stringer, t.notes.code);
      return {
        primary: {
          label: t.steps,
          value: { kind: "number", value: s.risers, decimals: 0 },
          caption: fill(t.caption, { risers: plural(ctx, s.risers, t.risersCount), riser: fmtLen(s.riser), treads: plural(ctx, s.treads, t.treadsCount), tread: fmtLen(p.tread) }),
        },
        secondary,
        notes,
      };
    },
  });
}

export const stairsEngine = makeStairsEngine(englishContext(en));
