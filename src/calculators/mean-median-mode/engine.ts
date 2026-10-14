import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { MAX_DATA_POINTS, listError, mean, median, modes, parseNumberList, sum } from "@/lib/math/data";
import en, { type MeanMedianModeText } from "./text/en";

export type CentralValues = { data: string };

const numbers = (text: string) => {
  const parsed = parseNumberList(text);
  return parsed.ok ? parsed.values : [];
};

/** Data lists use dot decimals in every language so commas can separate values. */
export function makeMeanMedianModeEngine(ctx: EngineContext<MeanMedianModeText>) {
  const t = ctx.text;
  const f = (x: number) => ctx.fmt.significant(x, 10);
  return defineEngine<CentralValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "data",
        type: "text",
        multiline: true,
        label: t.data,
        help: t.dataHelp,
        defaultValue: "2, 4, 4, 5, 7, 9",
        check: (text) => listError(parseNumberList(text), t.errors, ctx.fmt.number(MAX_DATA_POINTS, 0)),
      },
    ],
    compute: ({ data }) => {
      const values = numbers(data);
      const m = modes(values);
      return {
        primary: { label: t.mean, value: { kind: "text", text: f(mean(values)) }, caption: fill(t.caption, { count: ctx.fmt.number(values.length, 0) }) },
        secondary: [
          { label: t.median, value: { kind: "text", text: f(median(values)) } },
          { label: m.length > 1 ? t.modes : t.mode, value: { kind: "text", text: m.length === 0 ? t.noMode : m.map(f).join(ctx.locale === "ar" ? "، " : ctx.locale === "ur" ? "، " : ", ") } },
          { label: t.range, value: { kind: "text", text: f(Math.max(...values) - Math.min(...values)) } },
          { label: t.sum, value: { kind: "text", text: f(sum(values)) } },
        ],
      };
    },
  });
}

export const meanMedianModeEngine = makeMeanMedianModeEngine(englishContext(en));
