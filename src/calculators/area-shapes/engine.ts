import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import { sciNumber } from "@/lib/math/sci-result";
import { LENGTH, findUnit } from "@/lib/math/units";
import en, { type AreaShapesText } from "./text/en";

export const SHAPES = ["trapezoid", "parallelogram", "rhombus", "ellipse", "sector", "annulus", "heron", "polygon"] as const;
export type Shape = (typeof SHAPES)[number];
export const LENGTH_UNITS = ["mm", "cm", "m", "km", "in", "ft", "yd"] as const;

type Dim = "trapA" | "trapB" | "trapH" | "paraBase" | "paraH" | "d1" | "d2" | "semiA" | "semiB" | "radius" | "angle" | "outer" | "inner" | "sideA" | "sideB" | "sideC" | "sides" | "side";

export type AreaShapesValues = { shape: string; unit: string } & Record<Dim, number | null>;

/** Heron's formula in the numerically stable form (Kahan): sides sorted a ≥ b ≥ c. Returns NaN when the sides cannot form a triangle. */
export function heronArea(x: number, y: number, z: number): number {
  const [a, b, c] = [x, y, z].sort((p, q) => q - p);
  if (!(c - (a - b) > 0)) return Number.NaN;
  return 0.25 * Math.sqrt((a + (b + c)) * (c - (a - b)) * (c + (a - b)) * (a + (b - c)));
}

/** Ramanujan's second approximation of the ellipse perimeter. */
export function ellipsePerimeter(a: number, b: number): number {
  const h = ((a - b) / (a + b)) ** 2;
  return Math.PI * (a + b) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));
}

/** Area, apothem, circumradius, perimeter and interior angle (degrees) of a regular polygon with n sides of length s. */
export function regularPolygon(n: number, s: number) {
  return {
    area: (n * s * s) / (4 * Math.tan(Math.PI / n)),
    apothem: s / (2 * Math.tan(Math.PI / n)),
    circumradius: s / (2 * Math.sin(Math.PI / n)),
    perimeter: n * s,
    interiorAngle: ((n - 2) * 180) / n,
  };
}

const asShape = (value: string): Shape => ((SHAPES as readonly string[]).includes(value) ? (value as Shape) : "trapezoid");

export function makeAreaShapesEngine(ctx: EngineContext<AreaShapesText>) {
  const t = ctx.text;
  const dim = (id: Dim, defaultValue: number, shapes: readonly Shape[], help?: string, extra?: { min?: number; minExclusive?: boolean; max?: number; integer?: boolean; suffix?: string }) =>
    ({ id, type: "number", label: t[id], help, defaultValue, min: 0, minExclusive: true, ...extra, visibleWhen: { field: "shape", oneOf: shapes } }) as const;
  return defineEngine<AreaShapesValues>({
    locale: ctx.locale,
    fields: [
      { id: "shape", type: "select", label: t.shape, options: SHAPES.map((value) => ({ value, label: t.shapes[value] })), defaultValue: "trapezoid" },
      { id: "unit", type: "select", label: t.unit, help: t.unitHelp, options: LENGTH_UNITS.map((value) => ({ value, label: t.units[value] })), defaultValue: "m" },
      dim("trapA", 6, ["trapezoid"]),
      dim("trapB", 10, ["trapezoid"]),
      dim("trapH", 4, ["trapezoid"], t.trapHelp),
      dim("paraBase", 8, ["parallelogram"]),
      dim("paraH", 5, ["parallelogram"], t.paraHelp),
      dim("d1", 12, ["rhombus"]),
      dim("d2", 7, ["rhombus"]),
      dim("semiA", 5, ["ellipse"], t.semiHelp),
      dim("semiB", 3, ["ellipse"], t.semiHelp),
      dim("radius", 9, ["sector"]),
      dim("angle", 60, ["sector"], t.angleHelp, { max: 360, suffix: "°" }),
      dim("outer", 10, ["annulus"]),
      dim("inner", 6, ["annulus"], t.innerHelp, { minExclusive: false }),
      dim("sideA", 7, ["heron"]),
      dim("sideB", 8, ["heron"]),
      dim("sideC", 9, ["heron"]),
      dim("sides", 6, ["polygon"], undefined, { min: 3, minExclusive: false, max: 1000, integer: true }),
      dim("side", 4, ["polygon"]),
    ],
    validate: (v): FieldErrors => {
      const shape = asShape(v.shape);
      if (shape === "annulus" && (v.inner ?? 0) >= (v.outer ?? 0)) return { inner: t.innerTooLarge };
      if (shape === "heron" && Number.isNaN(heronArea(v.sideA ?? 0, v.sideB ?? 0, v.sideC ?? 0))) return { sideC: t.notTriangle };
      return {};
    },
    compute: (v) => {
      const shape = asShape(v.shape);
      const unit = findUnit(LENGTH, v.unit);
      const len = (x: number) => sciNumber(ctx.fmt, x, unit.symbol);
      const deg = (x: number) => ({ kind: "text", text: fill(t.degrees, { value: ctx.fmt.number(x, 4) }) }) as const;
      const extra: ResultItem[] = [];
      const notes: string[] = [];
      let area: number;
      switch (shape) {
        case "trapezoid": {
          const a = v.trapA ?? 0;
          const b = v.trapB ?? 0;
          area = ((a + b) / 2) * (v.trapH ?? 0);
          extra.push({ label: t.midsegment, value: len((a + b) / 2) });
          notes.push(t.noPerimeterTrapezoid);
          break;
        }
        case "parallelogram":
          area = (v.paraBase ?? 0) * (v.paraH ?? 0);
          notes.push(t.noPerimeterParallelogram);
          break;
        case "rhombus": {
          const p = v.d1 ?? 0;
          const q = v.d2 ?? 0;
          area = (p * q) / 2;
          const s = Math.hypot(p, q) / 2;
          extra.push({ label: t.perimeter, value: len(4 * s) }, { label: t.rhombusSide, value: len(s) });
          break;
        }
        case "ellipse": {
          const a = v.semiA ?? 0;
          const b = v.semiB ?? 0;
          area = Math.PI * a * b;
          extra.push({ label: t.perimeterApprox, value: len(ellipsePerimeter(a, b)) });
          notes.push(t.ellipseNote);
          break;
        }
        case "sector": {
          const r = v.radius ?? 0;
          const theta = ((v.angle ?? 0) * Math.PI) / 180;
          area = (r * r * theta) / 2;
          const arc = r * theta;
          extra.push({ label: t.perimeter, value: len(2 * r + arc) }, { label: t.arcLength, value: len(arc) });
          notes.push(t.sectorNote);
          break;
        }
        case "annulus": {
          const R = v.outer ?? 0;
          const r = v.inner ?? 0;
          area = Math.PI * (R - r) * (R + r);
          extra.push(
            { label: t.perimeter, value: len(2 * Math.PI * (R + r)) },
            { label: t.ringWidth, value: len(R - r) },
            { label: t.outerCircumference, value: len(2 * Math.PI * R) },
            { label: t.innerCircumference, value: len(2 * Math.PI * r) },
          );
          notes.push(t.annulusNote);
          break;
        }
        case "heron": {
          const a = v.sideA ?? 0;
          const b = v.sideB ?? 0;
          const c = v.sideC ?? 0;
          area = heronArea(a, b, c);
          extra.push({ label: t.perimeter, value: len(a + b + c) }, { label: t.semiPerimeter, value: len((a + b + c) / 2) });
          break;
        }
        case "polygon": {
          const p = regularPolygon(v.sides ?? 3, v.side ?? 0);
          area = p.area;
          extra.push(
            { label: t.perimeter, value: len(p.perimeter) },
            { label: t.apothem, value: len(p.apothem) },
            { label: t.circumradius, value: len(p.circumradius) },
            { label: t.interiorAngle, value: deg(p.interiorAngle) },
          );
          break;
        }
      }
      return {
        primary: { label: t.area, value: sciNumber(ctx.fmt, area, `${unit.symbol}²`), caption: t.formula[shape] },
        secondary: [{ label: t.squareMeters, value: sciNumber(ctx.fmt, area * unit.factor * unit.factor, "m²") }, ...extra],
        notes,
      };
    },
  });
}

export const areaShapesEngine = makeAreaShapesEngine(englishContext(en));
