import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem, type ResultTable } from "@/calculators/framework/types";
import { sciNumber } from "@/lib/math/sci-result";
import en, { type TriangleText } from "./text/en";

export const MODES = ["sss", "sas", "asa", "aas", "ssa"] as const;
export type TriangleMode = (typeof MODES)[number];

export type TriangleValues = {
  mode: string;
  sideA: number | null;
  sideB: number | null;
  sideC: number | null;
  angleA: number | null;
  angleB: number | null;
  angleC: number | null;
};

/** A solved triangle: sides a, b, c and the opposite angles A, B, C in degrees. */
export interface Triangle {
  a: number;
  b: number;
  c: number;
  A: number;
  B: number;
  C: number;
}

export type SolveResult = { ok: true; triangles: Triangle[] } | { ok: false; field: keyof TriangleValues; code: "notTriangle" | "angleSum" | "noSolution" | "noSolutionObtuse" };

const RAD = Math.PI / 180;
const sin = (deg: number) => Math.sin(deg * RAD);
const cos = (deg: number) => Math.cos(deg * RAD);
const clamp = (x: number) => Math.min(1, Math.max(-1, x));
/** Angle opposite side x, from the law of cosines. */
const angleFromSides = (x: number, y: number, z: number) => Math.acos(clamp((y * y + z * z - x * x) / (2 * y * z))) / RAD;

/** True when three positive lengths satisfy the strict triangle inequality (tested in a cancellation-free order). */
export function isTriangle(x: number, y: number, z: number): boolean {
  const [a, b, c] = [x, y, z].sort((p, q) => q - p);
  return c - (a - b) > 0;
}

/** Area by Heron's formula in Kahan's stable arrangement. */
export function triangleArea(x: number, y: number, z: number): number {
  const [a, b, c] = [x, y, z].sort((p, q) => q - p);
  return 0.25 * Math.sqrt((a + (b + c)) * (c - (a - b)) * (c + (a - b)) * (a + (b - c)));
}

/** Relative tolerance used to decide whether the SSA side equals the height b·sin A. */
const SSA_TOLERANCE = 1e-12;

export function solveTriangle(mode: TriangleMode, v: TriangleValues): SolveResult {
  const a = v.sideA ?? 0;
  const b = v.sideB ?? 0;
  const c = v.sideC ?? 0;
  const A = v.angleA ?? 0;
  const B = v.angleB ?? 0;
  const C = v.angleC ?? 0;
  switch (mode) {
    case "sss": {
      if (!isTriangle(a, b, c)) return { ok: false, field: "sideC", code: "notTriangle" };
      const angA = angleFromSides(a, b, c);
      const angB = angleFromSides(b, a, c);
      return { ok: true, triangles: [{ a, b, c, A: angA, B: angB, C: 180 - angA - angB }] };
    }
    case "sas": {
      const side = Math.sqrt(Math.max(0, a * a + b * b - 2 * a * b * cos(C)));
      const angA = Math.atan2(a * sin(C), b - a * cos(C)) / RAD;
      return { ok: true, triangles: [{ a, b, c: side, A: angA, B: 180 - angA - C, C }] };
    }
    case "asa": {
      if (A + B >= 180) return { ok: false, field: "angleB", code: "angleSum" };
      const angC = 180 - A - B;
      return { ok: true, triangles: [{ a: (c * sin(A)) / sin(angC), b: (c * sin(B)) / sin(angC), c, A, B, C: angC }] };
    }
    case "aas": {
      if (A + B >= 180) return { ok: false, field: "angleB", code: "angleSum" };
      const angC = 180 - A - B;
      return { ok: true, triangles: [{ a, b: (a * sin(B)) / sin(A), c: (a * sin(angC)) / sin(A), A, B, C: angC }] };
    }
    case "ssa": {
      const height = b * sin(A);
      const make = (angB: number): Triangle => {
        const angC = 180 - A - angB;
        return { a, b, c: (a * sin(angC)) / sin(A), A, B: angB, C: angC };
      };
      const acuteB = Math.asin(clamp(height / a)) / RAD;
      if (A >= 90) return a > b ? { ok: true, triangles: [make(acuteB)] } : { ok: false, field: "sideA", code: "noSolutionObtuse" };
      if (a < height * (1 - SSA_TOLERANCE)) return { ok: false, field: "sideA", code: "noSolution" };
      if (Math.abs(a - height) <= height * SSA_TOLERANCE) return { ok: true, triangles: [make(90)] };
      if (a < b) return { ok: true, triangles: [make(acuteB), make(180 - acuteB)] };
      return { ok: true, triangles: [make(acuteB)] };
    }
  }
}

/** Relative tolerance for equal sides and absolute tolerance (degrees) for a right angle. */
const SIDE_TOLERANCE = 1e-9;
const ANGLE_TOLERANCE = 1e-7;

export function classify(tri: Triangle): { angle: "acute" | "right" | "obtuse"; side: "equilateral" | "isosceles" | "scalene" } {
  const largest = Math.max(tri.A, tri.B, tri.C);
  const angle = Math.abs(largest - 90) <= ANGLE_TOLERANCE ? "right" : largest > 90 ? "obtuse" : "acute";
  const same = (x: number, y: number) => Math.abs(x - y) <= SIDE_TOLERANCE * Math.max(x, y);
  const pairs = [same(tri.a, tri.b), same(tri.b, tri.c), same(tri.a, tri.c)].filter(Boolean).length;
  return { angle, side: pairs === 3 ? "equilateral" : pairs >= 1 ? "isosceles" : "scalene" };
}

/** Area, perimeter, inradius and circumradius. */
export function measures(tri: Triangle) {
  const area = triangleArea(tri.a, tri.b, tri.c);
  const perimeter = tri.a + tri.b + tri.c;
  return { area, perimeter, inradius: area / (perimeter / 2), circumradius: (tri.a * tri.b * tri.c) / (4 * area) };
}

const asMode = (v: string): TriangleMode => ((MODES as readonly string[]).includes(v) ? (v as TriangleMode) : "sss");

export function makeTriangleEngine(ctx: EngineContext<TriangleText>) {
  const t = ctx.text;
  const side = (id: "sideA" | "sideB" | "sideC", defaultValue: number, modes: readonly TriangleMode[]) =>
    ({ id, type: "number", label: t[id], defaultValue, min: 0, minExclusive: true, visibleWhen: { field: "mode", oneOf: modes } }) as const;
  const angle = (id: "angleA" | "angleB" | "angleC", defaultValue: number, modes: readonly TriangleMode[]) =>
    ({ id, type: "number", label: t[id], help: t.angleHelp, defaultValue, min: 0, minExclusive: true, suffix: "°", visibleWhen: { field: "mode", oneOf: modes } }) as const;
  const len = (x: number) => ({ kind: "text", text: ctx.fmt.significant(x, 10) }) as const;
  const deg = (x: number) => ({ kind: "text", text: fill(t.degrees, { value: ctx.fmt.number(x, 6) }) }) as const;
  const typeText = (tri: Triangle) => {
    const k = classify(tri);
    return fill(t.type, { angle: t.byAngle[k.angle], side: t.bySide[k.side] });
  };
  const table = (tri: Triangle, caption: string): ResultTable => ({
    caption,
    columns: [t.colVertex, t.colAngle, t.colSide],
    rows: [
      { label: t.rowA, cells: [deg(tri.A), len(tri.a)] },
      { label: t.rowB, cells: [deg(tri.B), len(tri.b)] },
      { label: t.rowC, cells: [deg(tri.C), len(tri.c)] },
    ],
  });
  return defineEngine<TriangleValues>({
    locale: ctx.locale,
    fields: [
      { id: "mode", type: "select", label: t.given, help: t.givenHelp, options: MODES.map((value) => ({ value, label: t.modes[value] })), defaultValue: "sss" },
      side("sideA", 5, ["sss", "sas", "aas", "ssa"]),
      side("sideB", 6, ["sss", "sas", "ssa"]),
      side("sideC", 7, ["sss", "asa"]),
      angle("angleA", 40, ["asa", "aas", "ssa"]),
      angle("angleB", 65, ["asa", "aas"]),
      angle("angleC", 60, ["sas"]),
    ],
    validate: (v): FieldErrors => {
      const mode = asMode(v.mode);
      const tooWide = (["angleA", "angleB", "angleC"] as const).find((id) => (v[id] ?? 0) >= 180);
      if (tooWide) return { [tooWide]: t.angleRange };
      const solved = solveTriangle(mode, v);
      return solved.ok ? {} : { [solved.field]: t[solved.code] };
    },
    compute: (v) => {
      const mode = asMode(v.mode);
      const solved = solveTriangle(mode, v);
      const triangles = solved.ok ? solved.triangles : [];
      const [first, second] = triangles;
      const m = measures(first);
      const secondary: ResultItem[] = [
        { label: t.perimeter, value: len(m.perimeter) },
        { label: t.classification, value: { kind: "text", text: typeText(first) } },
        { label: t.inradius, value: len(m.inradius) },
        { label: t.circumradius, value: len(m.circumradius) },
      ];
      const notes: string[] = [];
      if (second) {
        const m2 = measures(second);
        secondary.push(
          { label: t.secondArea, value: len(m2.area) },
          { label: t.secondPerimeter, value: len(m2.perimeter) },
          { label: t.secondClassification, value: { kind: "text", text: typeText(second) } },
        );
        notes.unshift(t.ambiguous);
      }
      const special = (tri: Triangle) => {
        const k = classify(tri);
        return k.angle === "right" || k.side !== "scalene";
      };
      if (triangles.some(special)) notes.push(t.tolerance);
      return {
        primary: { label: second ? t.areaTwo : t.area, value: sciNumber(ctx.fmt, m.area, undefined, 10), caption: fill(t.caption, { method: t.methods[mode] }) },
        secondary,
        tables: second
          ? triangles.map((tri, i) => table(tri, fill(t.tableCaptionN, { n: ctx.fmt.number(i + 1, 0) })))
          : [table(first, t.tableCaption)],
        notes,
      };
    },
  });
}

export const triangleEngine = makeTriangleEngine(englishContext(en));
