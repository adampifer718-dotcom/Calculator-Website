import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { normalCdf, pValue, tCdf, type Tail } from "@/lib/math/stats";
import en, { type PValueText } from "./text/en";

export type PValueValues = { distribution: string; statistic: number; df: number | null; tail: string };

export function makePValueEngine(ctx: EngineContext<PValueText>) {
  const t = ctx.text;
  return defineEngine<PValueValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "distribution",
        type: "select",
        label: t.distribution,
        options: [
          { value: "z", label: t.distributions.z },
          { value: "t", label: t.distributions.t },
        ],
        defaultValue: "z",
      },
      { id: "statistic", type: "number", label: t.statistic, defaultValue: 1.96 },
      { id: "df", type: "number", label: t.df, defaultValue: 10, min: 1, integer: true, max: 1000000, visibleWhen: { field: "distribution", oneOf: ["t"] } },
      {
        id: "tail",
        type: "select",
        label: t.tail,
        options: (["two", "left", "right"] as const).map((value) => ({ value, label: t.tails[value] })),
        defaultValue: "two",
      },
    ],
    compute: ({ distribution, statistic, df, tail }) => {
      const cdf = distribution === "t" ? (x: number) => tCdf(x, df ?? 1) : normalCdf;
      const p = pValue(statistic, (["two", "left", "right"].includes(tail) ? tail : "two") as Tail, cdf);
      return {
        // A p-value is never exactly 0; below the smallest double it is reported as a bound.
        primary: { label: t.pValue, value: { kind: "text", text: p > 0 ? ctx.fmt.significant(p, 6) : `< ${ctx.fmt.significant(1e-300, 1)}` } },
        secondary: [
          { label: t.sig05, value: { kind: "text", text: p < 0.05 ? t.yes05 : t.no05 } },
          { label: t.sig01, value: { kind: "text", text: p < 0.01 ? t.yes01 : t.no01 } },
        ],
        notes: [t.note],
      };
    },
  });
}

export const pValueEngine = makePValueEngine(englishContext(en));
