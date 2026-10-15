import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type QuadraticText } from "./text/en";

export type QuadraticValues = { a: number; b: number; c: number };

export type QuadraticRoots =
  | { kind: "real"; x1: number; x2: number }
  | { kind: "double"; x: number }
  | { kind: "complex"; re: number; im: number };

/**
 * Roots of ax² + bx + c = 0 (a ≠ 0) using the cancellation-free form
 * q = −½(b + sign(b)√D), x₁ = q/a, x₂ = c/q. A discriminant that is zero
 * up to rounding error (relative to b² and 4ac) is treated as exactly zero.
 */
export function solveQuadratic(a: number, b: number, c: number): { discriminant: number; roots: QuadraticRoots } {
  const bb = b * b;
  const ac4 = 4 * a * c;
  let discriminant = bb - ac4;
  if (Math.abs(discriminant) <= 1e-14 * (bb + Math.abs(ac4))) discriminant = 0;
  if (discriminant === 0) return { discriminant, roots: { kind: "double", x: -b / (2 * a) } };
  if (discriminant < 0) {
    return { discriminant, roots: { kind: "complex", re: -b / (2 * a), im: Math.sqrt(-discriminant) / (2 * Math.abs(a)) } };
  }
  const sign = b < 0 ? -1 : 1;
  const q = -0.5 * (b + sign * Math.sqrt(discriminant));
  const r1 = q / a;
  const r2 = c / q;
  return { discriminant, roots: { kind: "real", x1: Math.max(r1, r2), x2: Math.min(r1, r2) } };
}

export function makeQuadraticEngine(ctx: EngineContext<QuadraticText>) {
  const t = ctx.text;
  // Adding 0 turns −0 into 0 so results never read "-0".
  const f = (x: number) => ctx.fmt.significant(x + 0, 10);
  return defineEngine<QuadraticValues>({
    locale: ctx.locale,
    fields: [
      { id: "a", type: "number", label: t.a, help: t.aHelp, defaultValue: 1 },
      { id: "b", type: "number", label: t.b, help: t.bHelp, defaultValue: -3 },
      { id: "c", type: "number", label: t.c, help: t.cHelp, defaultValue: -10 },
    ],
    validate: ({ a }): FieldErrors => (a === 0 ? { a: t.aZero } : {}),
    compute: ({ a, b, c }) => {
      const { discriminant, roots } = solveQuadratic(a, b, c);
      const text =
        roots.kind === "real"
          ? fill(t.twoRoots, { x1: f(roots.x1), x2: f(roots.x2) })
          : roots.kind === "double"
            ? fill(t.oneRoot, { x: f(roots.x) })
            : roots.re === 0
              ? fill(t.imaginaryRoots, { im: f(roots.im) })
              : fill(t.complexRoots, { re: f(roots.re), im: f(roots.im) });
      const h = -b / (2 * a);
      const k = -discriminant / (4 * a);
      const meaning = discriminant > 0 ? t.meanings.positive : discriminant === 0 ? t.meanings.zero : t.meanings.negative;
      return {
        primary: { label: t.roots, value: { kind: "text", text } },
        secondary: [
          { label: t.discriminant, value: { kind: "text", text: f(discriminant) } },
          { label: t.meaning, value: { kind: "text", text: meaning } },
          { label: t.vertex, value: { kind: "text", text: fill(t.vertexValue, { h: f(h), k: f(k) }) } },
          { label: t.axis, value: { kind: "text", text: fill(t.axisValue, { h: f(h) }) } },
          { label: t.sum, value: { kind: "text", text: f(-b / a) } },
          { label: t.product, value: { kind: "text", text: f(c / a) } },
        ],
        notes: [a > 0 ? t.opensUp : t.opensDown],
      };
    },
  });
}

export const quadraticEngine = makeQuadraticEngine(englishContext(en));
