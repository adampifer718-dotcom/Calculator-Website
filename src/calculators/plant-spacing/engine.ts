import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type PlantSpacingText } from "./text/en";

export type PlantSpacingValues = { unit: string; length: number; width: number; pattern: string; spacing: number; rowSpacing: number | null };

type Unit = "m" | "cm" | "ft" | "in";

/** Length of one unit in meters (international foot, exact). */
const TO_METERS: Record<Unit, number> = { m: 1, cm: 0.01, ft: 0.3048, in: 0.0254 };
const FOOT_M = 0.3048;
const MAX_PLANTS = 1e9;

/** floor() that tolerates floating-point noise such as 0.3 / 0.1 = 2.9999999999999996. */
export function floorTol(x: number): number {
  return Math.floor(x + 1e-9 * Math.max(1, Math.abs(x)));
}

export interface Layout {
  count: number;
  rows: number;
  /** Plants in even (unshifted) rows. */
  perRow: number;
  /** Plants in odd (shifted) rows; equals perRow for a grid. */
  perOffsetRow: number;
}

/** Square grid: plants s apart along the length, rows r apart, half a spacing from each edge. */
export function gridLayout(length: number, width: number, s: number, r: number): Layout {
  const perRow = floorTol(length / s);
  const rows = floorTol(width / r);
  return { count: perRow * rows, rows, perRow, perOffsetRow: perRow };
}

/** Triangular (equilateral) pattern: rows s·√3/2 apart, alternate rows shifted by s/2. */
export function triangularLayout(length: number, width: number, s: number): Layout {
  const h = (s * Math.sqrt(3)) / 2;
  const rows = width >= s ? floorTol((width - s) / h) + 1 : 0;
  const perRow = floorTol(length / s);
  const perOffsetRow = Math.max(0, floorTol(length / s - 0.5));
  const even = Math.ceil(rows / 2);
  const odd = Math.floor(rows / 2);
  return { count: even * perRow + odd * perOffsetRow, rows, perRow, perOffsetRow };
}

export function makePlantSpacingEngine(ctx: EngineContext<PlantSpacingText>) {
  const t = ctx.text;
  const unitOf = (u: string): Unit => (u === "cm" || u === "ft" || u === "in" ? u : "m");
  const layout = (v: PlantSpacingValues) =>
    v.pattern === "triangular" ? triangularLayout(v.length, v.width, v.spacing) : gridLayout(v.length, v.width, v.spacing, v.rowSpacing ?? v.spacing);
  const dim = { type: "number" as const, min: 0, minExclusive: true, max: 100000 };
  return defineEngine<PlantSpacingValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "unit",
        type: "select",
        label: t.unit,
        options: Object.entries(t.units).map(([value, label]) => ({ value, label })),
        defaultValue: "ft",
        display: "segmented",
      },
      { id: "length", label: t.length, defaultValue: 10, ...dim },
      { id: "width", label: t.width, defaultValue: 4, ...dim },
      {
        id: "pattern",
        type: "select",
        label: t.pattern,
        options: Object.entries(t.patterns).map(([value, label]) => ({ value, label })),
        defaultValue: "grid",
        display: "segmented",
      },
      { id: "spacing", label: t.spacing, help: t.spacingHelp, defaultValue: 1.5, ...dim },
      { id: "rowSpacing", label: t.rowSpacing, defaultValue: 2, visibleWhen: { field: "pattern", oneOf: ["grid"] }, ...dim },
    ],
    validate: (v): FieldErrors => {
      // Rough upper bound on the count, checked before the exact layout is computed.
      const r = v.pattern === "triangular" ? (v.spacing * Math.sqrt(3)) / 2 : (v.rowSpacing ?? v.spacing);
      return (v.length / v.spacing + 1) * (v.width / r + 1) > MAX_PLANTS ? { spacing: t.errors.tooMany } : {};
    },
    compute: (v) => {
      const unit = unitOf(v.unit);
      const lay = layout(v);
      const metric = unit === "m" || unit === "cm";
      const areaM2 = v.length * v.width * TO_METERS[unit] ** 2;
      const area = metric ? areaM2 : areaM2 / FOOT_M ** 2;
      const areaUnit = metric ? "m²" : "ft²";
      const triangular = v.pattern === "triangular";
      const notes: string[] = [];
      if (lay.count === 0) notes.push(t.notes.tooSmall);
      if (triangular) notes.push(t.notes.triangular);
      return {
        primary: { label: t.plants, value: { kind: "number", value: lay.count, decimals: 0 }, caption: t.caption },
        secondary: [
          { label: metric ? t.densityMetric : t.densityImperial, value: { kind: "number", value: lay.count / area, decimals: 2 } },
          { label: t.bedArea, value: { kind: "number", value: area, decimals: 2, suffix: areaUnit } },
          { label: t.rows, value: { kind: "number", value: lay.rows, decimals: 0 } },
          triangular
            ? {
                label: t.perRowOffset,
                value: { kind: "text", text: fill(t.perRowOffsetValue, { full: ctx.fmt.number(lay.perRow, 0), offset: ctx.fmt.number(lay.perOffsetRow, 0) }) },
              }
            : { label: t.perRow, value: { kind: "number", value: lay.perRow, decimals: 0 } },
        ],
        notes,
      };
    },
  });
}

export const plantSpacingEngine = makePlantSpacingEngine(englishContext(en));
