import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type TestGradeText } from "./text/en";

export type TestGradeValues = { total: number; mode: string; correct: number | null; wrong: number | null };

/** Common US letter-grade scale. */
export function letterGrade(percent: number): string {
  if (percent >= 90) return "A";
  if (percent >= 80) return "B";
  if (percent >= 70) return "C";
  if (percent >= 60) return "D";
  return "F";
}

export function makeTestGradeEngine(ctx: EngineContext<TestGradeText>) {
  const t = ctx.text;
  return defineEngine<TestGradeValues>({
    locale: ctx.locale,
    fields: [
      { id: "total", type: "number", label: t.total, defaultValue: 50, min: 0, minExclusive: true },
      {
        id: "mode",
        type: "select",
        label: t.mode,
        options: [
          { value: "correct", label: t.modes.correct },
          { value: "wrong", label: t.modes.wrong },
        ],
        defaultValue: "correct",
      },
      { id: "correct", type: "number", label: t.correct, defaultValue: 45, min: 0, visibleWhen: { field: "mode", oneOf: ["correct"] } },
      { id: "wrong", type: "number", label: t.wrong, defaultValue: 5, min: 0, visibleWhen: { field: "mode", oneOf: ["wrong"] } },
    ],
    validate: ({ total, mode, correct, wrong }): FieldErrors => {
      if (mode === "correct" && (correct ?? 0) > total) return { correct: t.overTotal };
      if (mode === "wrong" && (wrong ?? 0) > total) return { wrong: t.overTotal };
      return {};
    },
    compute: ({ total, mode, correct, wrong }) => {
      const earned = mode === "wrong" ? total - (wrong ?? 0) : (correct ?? 0);
      const percent = (earned / total) * 100;
      return {
        primary: { label: t.grade, value: { kind: "percent", value: percent, decimals: 2 }, caption: fill(t.caption, { earned: ctx.fmt.number(earned), total: ctx.fmt.number(total) }) },
        secondary: [
          { label: t.letter, value: { kind: "text", text: letterGrade(percent) } },
          { label: t.lost, value: { kind: "number", value: total - earned } },
        ],
        notes: [t.note],
      };
    },
  });
}

export const testGradeEngine = makeTestGradeEngine(englishContext(en));
