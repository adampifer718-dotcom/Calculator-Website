import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { formatNumber } from "@/lib/format";

export type TestGradeValues = { total: number; mode: string; correct: number | null; wrong: number | null };

/** Common US letter-grade scale. */
export function letterGrade(percent: number): string {
  if (percent >= 90) return "A";
  if (percent >= 80) return "B";
  if (percent >= 70) return "C";
  if (percent >= 60) return "D";
  return "F";
}

export const testGradeEngine = defineEngine<TestGradeValues>({
  fields: [
    { id: "total", type: "number", label: "Total questions or points", defaultValue: 50, min: 0, minExclusive: true },
    {
      id: "mode",
      type: "select",
      label: "I know the number",
      options: [
        { value: "correct", label: "Correct (points earned)" },
        { value: "wrong", label: "Wrong (points lost)" },
      ],
      defaultValue: "correct",
    },
    { id: "correct", type: "number", label: "Correct answers or points earned", defaultValue: 45, min: 0, visibleWhen: { field: "mode", oneOf: ["correct"] } },
    { id: "wrong", type: "number", label: "Wrong answers or points lost", defaultValue: 5, min: 0, visibleWhen: { field: "mode", oneOf: ["wrong"] } },
  ],
  validate: ({ total, mode, correct, wrong }): FieldErrors => {
    if (mode === "correct" && (correct ?? 0) > total) return { correct: "Cannot be more than the total." };
    if (mode === "wrong" && (wrong ?? 0) > total) return { wrong: "Cannot be more than the total." };
    return {};
  },
  compute: ({ total, mode, correct, wrong }) => {
    const earned = mode === "wrong" ? total - (wrong ?? 0) : (correct ?? 0);
    const percent = (earned / total) * 100;
    return {
      primary: { label: "Grade", value: { kind: "percent", value: percent, decimals: 2 }, caption: `${formatNumber(earned)} out of ${formatNumber(total)}.` },
      secondary: [
        { label: "Letter grade (A–F scale)", value: { kind: "text", text: letterGrade(percent) } },
        { label: "Points lost", value: { kind: "number", value: total - earned } },
      ],
      notes: ["Letter grades use the common scale A ≥ 90%, B ≥ 80%, C ≥ 70%, D ≥ 60%, F below 60%. Your school's scale may differ."],
    };
  },
});
