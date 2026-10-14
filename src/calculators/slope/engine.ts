import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { formatNumber } from "@/lib/format";

export type SlopeValues = { x1: number; y1: number; x2: number; y2: number };

/** "y = 2x + 1" style equation for a non-vertical line. */
export function lineEquation(slope: number, intercept: number): string {
  const m = formatNumber(slope, 6);
  const b = formatNumber(Math.abs(intercept), 6);
  const xTerm = slope === 0 ? "" : slope === 1 ? "x" : slope === -1 ? "−x" : `${m.replace("-", "−")}x`;
  if (!xTerm) return `y = ${formatNumber(intercept, 6).replace("-", "−")}`;
  if (intercept === 0) return `y = ${xTerm}`;
  return `y = ${xTerm} ${intercept < 0 ? "−" : "+"} ${b}`;
}

export const slopeEngine = defineEngine<SlopeValues>({
  fields: [
    { id: "x1", type: "number", label: "x₁", defaultValue: 1 },
    { id: "y1", type: "number", label: "y₁", defaultValue: 3 },
    { id: "x2", type: "number", label: "x₂", defaultValue: 4 },
    { id: "y2", type: "number", label: "y₂", defaultValue: 9 },
  ],
  validate: ({ x1, x2 }): FieldErrors => (x1 === x2 ? { x2: "x₂ must differ from x₁. A vertical line has an undefined slope." } : {}),
  compute: ({ x1, y1, x2, y2 }) => {
    const slope = (y2 - y1) / (x2 - x1);
    const intercept = y1 - slope * x1;
    return {
      primary: { label: "Slope (m)", value: { kind: "number", value: slope, decimals: 6 }, caption: `Rise of ${formatNumber(y2 - y1, 6)} over a run of ${formatNumber(x2 - x1, 6)}.` },
      secondary: [
        { label: "Equation of the line", value: { kind: "text", text: lineEquation(slope, intercept) } },
        { label: "y-intercept (b)", value: { kind: "number", value: intercept, decimals: 6 } },
        { label: "Angle to the x-axis", value: { kind: "number", value: (Math.atan(slope) * 180) / Math.PI, decimals: 4, suffix: "degrees" } },
        { label: "Distance between points", value: { kind: "number", value: Math.hypot(x2 - x1, y2 - y1), decimals: 6 } },
      ],
    };
  },
});
