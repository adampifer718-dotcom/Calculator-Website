import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import en, { type RoofPitchText } from "./text/en";

export type RoofPitchValues = { mode: string; unit: string; rise: number | null; run: number | null; angle: number | null; roofRun: number | null };

const UNITS = ["in", "ft", "cm", "m"] as const;

/** Rise per unit of run (tan of the roof angle). */
export function roofSlope(mode: string, rise: number, run: number, angleDeg: number): number {
  return mode === "angle" ? Math.tan((angleDeg * Math.PI) / 180) : rise / run;
}

export function makeRoofPitchEngine(ctx: EngineContext<RoofPitchText>) {
  const t = ctx.text;
  const riseRun = { field: "mode", oneOf: ["riseRun"] };
  return defineEngine<RoofPitchValues>({
    locale: ctx.locale,
    fields: [
      { id: "mode", type: "select", label: t.mode, options: (["riseRun", "angle"] as const).map((value) => ({ value, label: t.modeOptions[value] })), defaultValue: "riseRun", display: "segmented" },
      { id: "unit", type: "select", label: t.unit, options: UNITS.map((value) => ({ value, label: t.units[value] })), defaultValue: "in" },
      { id: "rise", type: "number", label: t.rise, help: t.riseHelp, defaultValue: 6, min: 0, visibleWhen: riseRun },
      { id: "run", type: "number", label: t.run, help: t.runHelp, defaultValue: 12, min: 0, minExclusive: true, visibleWhen: riseRun },
      { id: "angle", type: "number", label: t.angle, defaultValue: 30, min: 0, suffix: "°", visibleWhen: { field: "mode", oneOf: ["angle"] } },
      { id: "roofRun", type: "number", label: t.roofRun, help: t.roofRunHelp, defaultValue: null, optional: true, min: 0, minExclusive: true },
    ],
    validate: ({ mode, angle }): FieldErrors => (mode === "angle" && (angle ?? 0) >= 90 ? { angle: t.angleTooSteep } : {}),
    compute: ({ mode, unit, rise, run, angle, roofRun }) => {
      const slope = roofSlope(mode, rise ?? 0, run ?? 1, angle ?? 0);
      const degrees = mode === "angle" ? (angle ?? 0) : (Math.atan(slope) * 180) / Math.PI;
      const multiplier = Math.sqrt(1 + slope * slope);
      const symbol = (UNITS as readonly string[]).includes(unit) ? unit : "in";
      const secondary: ResultItem[] = [
        { label: t.angleOut, value: { kind: "number", value: degrees, decimals: 2, suffix: "°" } },
        { label: t.slopePercent, value: { kind: "percent", value: slope * 100, decimals: 2 } },
        { label: t.multiplier, value: { kind: "number", value: multiplier, decimals: 4 } },
      ];
      if (roofRun !== null) {
        secondary.push(
          { label: t.rafter, value: { kind: "number", value: roofRun * multiplier, decimals: 3, suffix: symbol } },
          { label: t.roofRise, value: { kind: "number", value: roofRun * slope, decimals: 3, suffix: symbol } },
        );
      }
      return {
        primary: { label: t.pitch, value: { kind: "text", text: fill(t.pitchText, { rise: ctx.fmt.number(12 * slope, 2) }) }, caption: t.pitchCaption },
        secondary,
        notes: roofRun !== null ? [t.note] : [],
      };
    },
  });
}

export const roofPitchEngine = makeRoofPitchEngine(englishContext(en));
