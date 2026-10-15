import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type ProbabilityEventsText } from "./text/en";

export type ProbabilityEventsValues = { pA: number; pB: number; relation: string };

const RELATIONS = ["independent", "exclusive"] as const;
/** Allows for decimal input such as 33.3 + 66.7 that sums to 100.00000000000001. */
const TOLERANCE = 1e-9;
const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

/** Two-event probabilities from P(A) and P(B) as fractions. */
export function twoEvents(a: number, b: number, exclusive: boolean) {
  const and = exclusive ? 0 : a * b;
  const or = clamp01(a + b - and);
  return { and, or, exactlyOne: clamp01(a + b - 2 * and), neither: clamp01(1 - or), notA: 1 - a, notB: 1 - b };
}

export function makeProbabilityEventsEngine(ctx: EngineContext<ProbabilityEventsText>) {
  const t = ctx.text;
  const pct = (fraction: number) => ({ kind: "percent" as const, value: fraction * 100, decimals: 4 });
  return defineEngine<ProbabilityEventsValues>({
    locale: ctx.locale,
    fields: [
      { id: "pA", type: "number", label: t.pA, help: t.pHelp, defaultValue: 40, min: 0, max: 100, suffix: "%" },
      { id: "pB", type: "number", label: t.pB, help: t.pHelp, defaultValue: 25, min: 0, max: 100, suffix: "%" },
      {
        id: "relation",
        type: "select",
        label: t.relation,
        help: t.relationHelp,
        display: "segmented",
        options: RELATIONS.map((value) => ({ value, label: t.relationOptions[value] })),
        defaultValue: "independent",
      },
    ],
    validate: ({ pA, pB, relation }): FieldErrors =>
      relation === "exclusive" && pA + pB > 100 + TOLERANCE ? { pB: fill(t.exclusiveTooLarge, { sum: ctx.fmt.percent(pA + pB, 4) }) } : {},
    compute: ({ pA, pB, relation }) => {
      const exclusive = relation === "exclusive";
      const r = twoEvents(pA / 100, pB / 100, exclusive);
      const notes = exclusive && Math.abs(pA + pB - 100) <= TOLERANCE ? [t.certainNote] : undefined;
      return {
        primary: { label: t.and, value: pct(r.and), caption: exclusive ? t.exclusiveCaption : t.independentCaption },
        secondary: [
          { label: t.or, value: pct(r.or) },
          { label: t.exactlyOne, value: pct(r.exactlyOne) },
          { label: t.neither, value: pct(r.neither) },
          { label: t.notA, value: pct(r.notA) },
          { label: t.notB, value: pct(r.notB) },
        ],
        notes,
      };
    },
  });
}

export const probabilityEventsEngine = makeProbabilityEventsEngine(englishContext(en));
