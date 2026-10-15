import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type ResultItem } from "@/calculators/framework/types";
import { sciNumber } from "@/lib/math/sci-result";
import { LENGTH, findUnit } from "@/lib/math/units";
import en, { type SurfaceAreaText } from "./text/en";

const SHAPES = ["cube", "box", "cylinder", "sphere", "hemisphere", "cone", "pyramid"] as const;
type Shape = (typeof SHAPES)[number];
const UNITS = ["mm", "cm", "m", "in", "ft"] as const;
const SQ_FT_M2 = 0.09290304; // (0.3048 m)², exact

export type SurfaceAreaValues = {
  shape: string;
  unit: string;
  edge: number | null;
  length: number | null;
  width: number | null;
  radius: number | null;
  baseSide: number | null;
  height: number | null;
};

export interface SurfaceParts {
  total: number;
  /** Area of the sides without the end faces. */
  lateral?: number;
  /** Curved part of a hemisphere. */
  curved?: number;
  /** One base (or one end of a cylinder). */
  base?: number;
  slant?: number;
}

/** Surface areas in the square of the input unit. Missing dimensions count as 0. */
export function surfaceArea(shape: Shape, d: Partial<Record<"edge" | "length" | "width" | "radius" | "baseSide" | "height", number>>): SurfaceParts {
  const r = d.radius ?? 0;
  const h = d.height ?? 0;
  switch (shape) {
    case "cube": {
      const a = d.edge ?? 0;
      return { total: 6 * a * a, lateral: 4 * a * a, base: a * a };
    }
    case "box": {
      const l = d.length ?? 0;
      const w = d.width ?? 0;
      return { total: 2 * (l * w + l * h + w * h), lateral: 2 * h * (l + w), base: l * w };
    }
    case "cylinder": {
      const base = Math.PI * r * r;
      const lateral = 2 * Math.PI * r * h;
      return { total: 2 * base + lateral, lateral, base };
    }
    case "sphere":
      return { total: 4 * Math.PI * r * r };
    case "hemisphere": {
      const base = Math.PI * r * r;
      return { total: 3 * base, curved: 2 * base, base };
    }
    case "cone": {
      const slant = Math.hypot(r, h);
      const base = Math.PI * r * r;
      const lateral = Math.PI * r * slant;
      return { total: base + lateral, lateral, base, slant };
    }
    case "pyramid": {
      const a = d.baseSide ?? 0;
      const slant = Math.hypot(a / 2, h);
      const lateral = 2 * a * slant;
      return { total: a * a + lateral, lateral, base: a * a, slant };
    }
  }
}

export function makeSurfaceAreaEngine(ctx: EngineContext<SurfaceAreaText>) {
  const t = ctx.text;
  const dim = (id: "edge" | "length" | "width" | "radius" | "baseSide" | "height", defaultValue: number, shapes: readonly Shape[], help?: string) =>
    ({ id, type: "number", label: t[id], help, defaultValue, min: 0, minExclusive: true, visibleWhen: { field: "shape", oneOf: shapes } }) as const;
  return defineEngine<SurfaceAreaValues>({
    locale: ctx.locale,
    fields: [
      { id: "shape", type: "select", label: t.shape, options: SHAPES.map((value) => ({ value, label: t.shapes[value] })), defaultValue: "box" },
      { id: "unit", type: "select", label: t.unit, help: t.unitHelp, options: UNITS.map((value) => ({ value, label: t.units[value] })), defaultValue: "cm" },
      dim("edge", 8, ["cube"]),
      dim("length", 30, ["box"]),
      dim("width", 20, ["box"]),
      dim("radius", 5, ["cylinder", "sphere", "hemisphere", "cone"], t.radiusHelp),
      dim("baseSide", 12, ["pyramid"]),
      dim("height", 10, ["box", "cylinder", "cone", "pyramid"], t.heightHelp),
    ],
    compute: (v) => {
      const shape: Shape = (SHAPES as readonly string[]).includes(v.shape) ? (v.shape as Shape) : "box";
      const unit = findUnit(LENGTH, v.unit);
      const parts = surfaceArea(shape, {
        edge: v.edge ?? undefined,
        length: v.length ?? undefined,
        width: v.width ?? undefined,
        radius: v.radius ?? undefined,
        baseSide: v.baseSide ?? undefined,
        height: v.height ?? undefined,
      });
      const sq = `${unit.symbol}²`;
      const m2 = parts.total * unit.factor ** 2;
      const secondary: ResultItem[] = [];
      if (parts.lateral !== undefined) secondary.push({ label: t.lateral, value: sciNumber(ctx.fmt, parts.lateral, sq) });
      if (parts.curved !== undefined) secondary.push({ label: t.curved, value: sciNumber(ctx.fmt, parts.curved, sq) });
      if (parts.base !== undefined) {
        const label = shape === "cylinder" ? t.eachEnd : shape === "cube" ? t.face : t.base;
        secondary.push({ label, value: sciNumber(ctx.fmt, parts.base, sq) });
      }
      if (parts.slant !== undefined) secondary.push({ label: t.slant, value: sciNumber(ctx.fmt, parts.slant, unit.symbol) });
      secondary.push({ label: t.inSquareMeters, value: sciNumber(ctx.fmt, m2, "m²") });
      secondary.push({ label: t.inSquareFeet, value: sciNumber(ctx.fmt, m2 / SQ_FT_M2, "ft²") });
      return {
        primary: { label: t.total, value: sciNumber(ctx.fmt, parts.total, sq), caption: t.formula[shape] },
        secondary,
        notes: parts.lateral !== undefined ? [t.note] : undefined,
      };
    },
  });
}

export const surfaceAreaEngine = makeSurfaceAreaEngine(englishContext(en));
