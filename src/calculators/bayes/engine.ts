import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type BayesText } from "./text/en";

export type BayesValues = { prior: number; likelihood: number; falseAlarm: number };

const POPULATION = 10000;

/** Bayes' theorem with probabilities as fractions 0–1. */
export function bayes(pA: number, pBA: number, pBnA: number) {
  const tp = pA * pBA;
  const fp = (1 - pA) * pBnA;
  const fn = pA * (1 - pBA);
  const tn = (1 - pA) * (1 - pBnA);
  const pB = tp + fp;
  const pNotB = fn + tn;
  return { tp, fp, fn, tn, pB, posterior: pB > 0 ? tp / pB : Number.NaN, pAGivenNotB: pNotB > 0 ? fn / pNotB : Number.NaN };
}

export function makeBayesEngine(ctx: EngineContext<BayesText>) {
  const t = ctx.text;
  const percent = { min: 0, max: 100, suffix: "%" } as const;
  return defineEngine<BayesValues>({
    locale: ctx.locale,
    fields: [
      { id: "prior", type: "number", label: t.prior, help: t.priorHelp, defaultValue: 1, ...percent },
      { id: "likelihood", type: "number", label: t.likelihood, help: t.likelihoodHelp, defaultValue: 90, ...percent },
      { id: "falseAlarm", type: "number", label: t.falseAlarm, help: t.falseAlarmHelp, defaultValue: 5, ...percent },
    ],
    validate: ({ prior, likelihood, falseAlarm }): FieldErrors => (bayes(prior / 100, likelihood / 100, falseAlarm / 100).pB > 0 ? {} : { prior: t.zeroEvidence }),
    compute: ({ prior, likelihood, falseAlarm }) => {
      const r = bayes(prior / 100, likelihood / 100, falseAlarm / 100);
      const count = (p: number) => ({ kind: "number" as const, value: p * POPULATION, decimals: 1 });
      const notes: string[] = [];
      if (falseAlarm > 0 && likelihood > 0) notes.push(fill(t.liftNote, { ratio: ctx.fmt.significant(likelihood / falseAlarm, 4) }));
      if (r.posterior < 0.5 && prior < 10 && likelihood > falseAlarm) notes.push(t.rareNote);
      notes.push(t.note);
      return {
        primary: { label: t.posterior, value: { kind: "percent", value: r.posterior * 100, decimals: 2 }, caption: t.caption },
        secondary: [
          { label: t.pB, value: { kind: "percent", value: r.pB * 100, decimals: 4 } },
          { label: t.pNotAGivenB, value: { kind: "percent", value: (1 - r.posterior) * 100, decimals: 2 } },
          {
            label: t.pAGivenNotB,
            value: Number.isNaN(r.pAGivenNotB) ? { kind: "text", text: t.undefinedNotB } : { kind: "percent", value: r.pAGivenNotB * 100, decimals: 4 },
          },
        ],
        tables: [
          {
            caption: t.tableCaption,
            columns: [t.tableColumns.outcome, t.tableColumns.cases],
            rows: [
              { label: t.rows.tp, cells: [count(r.tp)], highlight: true },
              { label: t.rows.fp, cells: [count(r.fp)] },
              { label: t.rows.fn, cells: [count(r.fn)] },
              { label: t.rows.tn, cells: [count(r.tn)] },
            ],
          },
        ],
        notes,
      };
    },
  });
}

export const bayesEngine = makeBayesEngine(englishContext(en));
