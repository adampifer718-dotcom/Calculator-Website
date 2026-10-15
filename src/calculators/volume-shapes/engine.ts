import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { sciNumber } from "@/lib/math/sci-result";
import { LENGTH, US_GALLON_L, findUnit } from "@/lib/math/units";
import en, { type VolumeShapesText } from "./text/en";

export const SHAPES = ["cube", "box", "cylinder", "sphere", "hemisphere", "cone", "pyramid"] as const;
export type Shape = (typeof SHAPES)[number];
export const LENGTH_UNITS = ["mm", "cm", "m", "in", "ft"] as const;

export type VolumeShapesValues = {
  shape: string;
  unit: string;
  edge: number | null;
  length: number | null;
  width: number | null;
  radius: number | null;
  baseSide: number | null;
  height: number | null;
};

export interface Dimensions {
  edge?: number;
  length?: number;
  width?: number;
  radius?: number;
  baseSide?: number;
  height?: number;
}

/** Volume of a solid in the cube of the input length unit. */
export function shapeVolume(shape: Shape, d: Dimensions): number {
  const a = d.edge ?? 0;
  const r = d.radius ?? 0;
  const h = d.height ?? 0;
  switch (shape) {
    case "cube":
      return a ** 3;
    case "box":
      return (d.length ?? 0) * (d.width ?? 0) * h;
    case "cylinder":
      return Math.PI * r * r * h;
    case "sphere":
      return (4 / 3) * Math.PI * r ** 3;
    case "hemisphere":
      return (2 / 3) * Math.PI * r ** 3;
    case "cone":
      return (Math.PI * r * r * h) / 3;
    case "pyramid":
      return ((d.baseSide ?? 0) ** 2 * h) / 3;
  }
}

const asShape = (value: string): Shape => ((SHAPES as readonly string[]).includes(value) ? (value as Shape) : "cube");

export function makeVolumeShapesEngine(ctx: EngineContext<VolumeShapesText>) {
  const t = ctx.text;
  const dim = (id: "edge" | "length" | "width" | "radius" | "baseSide" | "height", defaultValue: number, shapes: readonly Shape[], help?: string) =>
    ({ id, type: "number", label: t[id], help, defaultValue, min: 0, minExclusive: true, visibleWhen: { field: "shape", oneOf: shapes } }) as const;
  return defineEngine<VolumeShapesValues>({
    locale: ctx.locale,
    fields: [
      { id: "shape", type: "select", label: t.shape, options: SHAPES.map((value) => ({ value, label: t.shapes[value] })), defaultValue: "cylinder" },
      { id: "unit", type: "select", label: t.unit, help: t.unitHelp, options: LENGTH_UNITS.map((value) => ({ value, label: t.units[value] })), defaultValue: "cm" },
      dim("edge", 5, ["cube"]),
      dim("length", 40, ["box"]),
      dim("width", 25, ["box"]),
      dim("radius", 6, ["cylinder", "sphere", "hemisphere", "cone"], t.radiusHelp),
      dim("baseSide", 9, ["pyramid"]),
      dim("height", 15, ["box", "cylinder", "cone", "pyramid"], t.heightHelp),
    ],
    compute: (v) => {
      const shape = asShape(v.shape);
      const unit = findUnit(LENGTH, v.unit);
      const volume = shapeVolume(shape, {
        edge: v.edge ?? undefined,
        length: v.length ?? undefined,
        width: v.width ?? undefined,
        radius: v.radius ?? undefined,
        baseSide: v.baseSide ?? undefined,
        height: v.height ?? undefined,
      });
      const m3 = volume * unit.factor ** 3;
      const liters = m3 * 1000;
      return {
        primary: { label: t.volume, value: sciNumber(ctx.fmt, volume, `${unit.symbol}³`), caption: t.formula[shape] },
        secondary: [
          { label: t.liters, value: sciNumber(ctx.fmt, liters, "L") },
          { label: t.cubicMeters, value: sciNumber(ctx.fmt, m3, "m³") },
          { label: t.usGallons, value: sciNumber(ctx.fmt, liters / US_GALLON_L, "gal") },
        ],
        notes: [t.note],
      };
    },
  });
}

export const volumeShapesEngine = makeVolumeShapesEngine(englishContext(en));
