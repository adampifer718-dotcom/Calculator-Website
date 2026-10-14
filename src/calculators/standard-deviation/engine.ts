import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { MAX_DATA_POINTS, listError, mean, parseNumberList, variance } from "@/lib/math/data";
import en, { type StandardDeviationText } from "./text/en";

export type DeviationValues = { data: string; kind: string };

const numbers = (text: string) => {
  const parsed = parseNumberList(text);
  return parsed.ok ? parsed.values : [];
};

export function makeStandardDeviationEngine(ctx: EngineContext<StandardDeviationText>) {
  const t = ctx.text;
  const f = (x: number) => ctx.fmt.significant(x, 10);
  return defineEngine<DeviationValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "data",
        type: "text",
        multiline: true,
        label: t.data,
        help: t.dataHelp,
        defaultValue: "2, 4, 4, 4, 5, 5, 7, 9",
        check: (text) => listError(parseNumberList(text), t.errors, ctx.fmt.number(MAX_DATA_POINTS, 0)),
      },
      { id: "kind", type: "select", label: t.kind, options: (["sample", "population"] as const).map((value) => ({ value, label: t.kinds[value] })), defaultValue: "sample" },
    ],
    validate: ({ data, kind }): FieldErrors => (kind === "sample" && numbers(data).length < 2 ? { data: t.needTwo } : {}),
    compute: ({ data, kind }) => {
      const values = numbers(data);
      const sample = kind !== "population";
      const v = variance(values, sample);
      const sd = Math.sqrt(v);
      return {
        primary: { label: sample ? t.sampleSd : t.populationSd, value: { kind: "text", text: f(sd) } },
        secondary: [
          { label: sample ? t.sampleVariance : t.populationVariance, value: { kind: "text", text: f(v) } },
          { label: t.mean, value: { kind: "text", text: f(mean(values)) } },
          { label: t.count, value: { kind: "number", value: values.length } },
          ...(sample ? [{ label: t.standardError, value: { kind: "text" as const, text: f(sd / Math.sqrt(values.length)) } }] : []),
        ],
      };
    },
  });
}

export const standardDeviationEngine = makeStandardDeviationEngine(englishContext(en));
