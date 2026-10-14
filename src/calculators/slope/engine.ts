import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { getFormatter, type Formatter } from "@/lib/format";
import en, { type SlopeText } from "./text/en";

export type SlopeValues = { x1: number; y1: number; x2: number; y2: number };

/** "y = 2x + 1" style equation for a non-vertical line. */
export function lineEquation(slope: number, intercept: number, fmt: Formatter = getFormatter("en")): string {
  const m = fmt.number(slope, 6);
  const b = fmt.number(Math.abs(intercept), 6);
  const xTerm = slope === 0 ? "" : slope === 1 ? "x" : slope === -1 ? "−x" : `${m.replace("-", "−")}x`;
  if (!xTerm) return `y = ${fmt.number(intercept, 6).replace("-", "−")}`;
  if (intercept === 0) return `y = ${xTerm}`;
  return `y = ${xTerm} ${intercept < 0 ? "−" : "+"} ${b}`;
}

export function makeSlopeEngine(ctx: EngineContext<SlopeText>) {
  const t = ctx.text;
  const n = (v: number) => ctx.fmt.number(v, 6);
  return defineEngine<SlopeValues>({
    locale: ctx.locale,
    fields: [
      { id: "x1", type: "number", label: "x₁", defaultValue: 1 },
      { id: "y1", type: "number", label: "y₁", defaultValue: 3 },
      { id: "x2", type: "number", label: "x₂", defaultValue: 4 },
      { id: "y2", type: "number", label: "y₂", defaultValue: 9 },
    ],
    validate: ({ x1, x2 }): FieldErrors => (x1 === x2 ? { x2: t.vertical } : {}),
    compute: ({ x1, y1, x2, y2 }) => {
      const slope = (y2 - y1) / (x2 - x1);
      const intercept = y1 - slope * x1;
      return {
        primary: { label: t.slope, value: { kind: "number", value: slope, decimals: 6 }, caption: fill(t.caption, { rise: n(y2 - y1), run: n(x2 - x1) }) },
        secondary: [
          { label: t.equation, value: { kind: "text", text: lineEquation(slope, intercept, ctx.fmt) } },
          { label: t.intercept, value: { kind: "number", value: intercept, decimals: 6 } },
          { label: t.angle, value: { kind: "number", value: (Math.atan(slope) * 180) / Math.PI, decimals: 4, suffix: t.degrees } },
          { label: t.distance, value: { kind: "number", value: Math.hypot(x2 - x1, y2 - y1), decimals: 6 } },
        ],
      };
    },
  });
}

export const slopeEngine = makeSlopeEngine(englishContext(en));
