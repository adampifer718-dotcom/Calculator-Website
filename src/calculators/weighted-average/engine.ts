import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { MAX_INPUT_MAGNITUDE } from "@/calculators/framework/evaluate";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { listError, mean, parseNumberList, sum } from "@/lib/math/data";
import en, { type WeightedAverageText } from "./text/en";

export type WeightedAverageValues = { values: string; weights: string };

export const MAX_ITEMS = 100;

export function makeWeightedAverageEngine(ctx: EngineContext<WeightedAverageText>) {
  const t = ctx.text;
  const f = (x: number) => ctx.fmt.significant(x + 0, 10);
  const list = (text: string) => {
    const parsed = parseNumberList(text, ctx.locale);
    return parsed.ok ? parsed.values : [];
  };
  const checkList = (text: string, isWeights: boolean): string | undefined => {
    const parsed = parseNumberList(text, ctx.locale);
    const problem = listError(parsed, t.errors, ctx.fmt.number(MAX_ITEMS, 0));
    if (problem || !parsed.ok) return problem;
    if (parsed.values.length > MAX_ITEMS) return fill(t.maxCount, { max: ctx.fmt.number(MAX_ITEMS, 0) });
    for (const v of parsed.values) {
      if (Math.abs(v) > MAX_INPUT_MAGNITUDE) return fill(t.tooBig, { value: f(v), max: ctx.fmt.number(MAX_INPUT_MAGNITUDE, 0) });
      if (isWeights && v < 0) return fill(t.negativeWeight, { value: f(v) });
    }
    return undefined;
  };

  return defineEngine<WeightedAverageValues>({
    locale: ctx.locale,
    fields: [
      { id: "values", type: "text", multiline: true, label: t.values, help: t.valuesHelp, defaultValue: "82, 90, 75", check: (text) => checkList(text, false) },
      { id: "weights", type: "text", multiline: true, label: t.weights, help: t.weightsHelp, defaultValue: "20, 50, 30", check: (text) => checkList(text, true) },
    ],
    validate: ({ values, weights }): FieldErrors => {
      const x = list(values);
      const w = list(weights);
      if (x.length !== w.length) {
        return { weights: fill(t.countMismatch, { values: plural(ctx, x.length, t.valueCount), weights: plural(ctx, w.length, t.weightCount) }) };
      }
      return sum(w) > 0 ? {} : { weights: t.zeroTotal };
    },
    compute: ({ values, weights }) => {
      const x = list(values);
      const w = list(weights);
      const totalWeight = sum(w);
      const products = sum(x.map((v, i) => v * w[i]));
      return {
        primary: {
          label: t.weightedMean,
          value: { kind: "text", text: f(products / totalWeight) },
          caption: fill(t.caption, { count: plural(ctx, x.length, t.valueCount) }),
        },
        secondary: [
          { label: t.sumOfWeights, value: { kind: "text", text: f(totalWeight) } },
          { label: t.sumOfProducts, value: { kind: "text", text: f(products) } },
          { label: t.unweightedMean, value: { kind: "text", text: f(mean(x)) } },
        ],
      };
    },
  });
}

export const weightedAverageEngine = makeWeightedAverageEngine(englishContext(en));
