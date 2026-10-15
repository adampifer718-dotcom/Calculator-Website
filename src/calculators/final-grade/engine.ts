import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type FinalGradeText } from "./text/en";

export type FinalGradeValues = { current: number; weight: number; desired: number };

/** Overall grade (percent) for a given final score, with the weight in percent. */
export function overallGrade(current: number, weight: number, finalScore: number): number {
  const w = weight / 100;
  return current * (1 - w) + finalScore * w;
}

/** Final exam score (percent) needed: (desired − current·(1 − w)) ÷ w. */
export function neededScore(current: number, weight: number, desired: number): number {
  const w = weight / 100;
  return (desired - current * (1 - w)) / w;
}

export function makeFinalGradeEngine(ctx: EngineContext<FinalGradeText>) {
  const t = ctx.text;
  return defineEngine<FinalGradeValues>({
    locale: ctx.locale,
    fields: [
      { id: "current", type: "number", label: t.current, help: t.currentHelp, defaultValue: 84, min: 0, max: 200, suffix: "%" },
      { id: "weight", type: "number", label: t.weight, help: t.weightHelp, defaultValue: 30, min: 0, minExclusive: true, max: 100, suffix: "%" },
      { id: "desired", type: "number", label: t.desired, defaultValue: 88, min: 0, max: 200, suffix: "%" },
    ],
    validate: ({ weight }): FieldErrors => (weight >= 100 ? { weight: t.weightTooHigh } : {}),
    compute: ({ current, weight, desired }) => {
      const needed = neededScore(current, weight, desired);
      const notes: string[] = [];
      if (needed > 100) notes.push(t.notes.over);
      if (needed <= 0) notes.push(t.notes.secured);
      notes.push(t.notes.rounding);
      return {
        primary: {
          label: t.needed,
          value: { kind: "percent", value: needed, decimals: 2 },
          caption: fill(t.caption, { desired: ctx.fmt.percent(desired, 2), weight: ctx.fmt.percent(weight, 2), current: ctx.fmt.percent(current, 2) }),
        },
        secondary: [
          { label: t.ifFull, value: { kind: "percent", value: overallGrade(current, weight, 100), decimals: 2 } },
          { label: t.ifZero, value: { kind: "percent", value: overallGrade(current, weight, 0), decimals: 2 } },
          { label: t.currentShare, value: { kind: "percent", value: 100 - weight, decimals: 2 } },
        ],
        notes,
      };
    },
  });
}

export const finalGradeEngine = makeFinalGradeEngine(englishContext(en));
