import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { normalInv } from "@/lib/math/stats";
import en, { type ConfidenceIntervalText } from "./text/en";

export type ConfidenceIntervalValues = { mean: number; sd: number; n: number; level: number };

export function confidenceInterval(mean: number, sd: number, n: number, level: number) {
  const z = normalInv(1 - (1 - level / 100) / 2);
  const standardError = sd / Math.sqrt(n);
  const margin = z * standardError;
  return { z, standardError, margin, lower: mean - margin, upper: mean + margin };
}

export function makeConfidenceIntervalEngine(ctx: EngineContext<ConfidenceIntervalText>) {
  const t = ctx.text;
  const n4 = (v: number) => ctx.fmt.number(v, 4);
  return defineEngine<ConfidenceIntervalValues>({
    locale: ctx.locale,
    fields: [
      { id: "mean", type: "number", label: t.mean, defaultValue: 100 },
      { id: "sd", type: "number", label: t.sd, defaultValue: 15, min: 0, minExclusive: true },
      { id: "n", type: "number", label: t.n, defaultValue: 36, min: 1, integer: true },
      { id: "level", type: "number", label: t.level, defaultValue: 95, min: 0, minExclusive: true, max: 99.99, suffix: "%" },
    ],
    compute: ({ mean, sd, n, level }) => {
      const ci = confidenceInterval(mean, sd, n, level);
      return {
        primary: {
          label: fill(t.primary, { level: ctx.fmt.percent(level, 2) }),
          value: { kind: "text", text: fill(t.interval, { lower: n4(ci.lower), upper: n4(ci.upper) }) },
          caption: `${n4(mean)} ± ${n4(ci.margin)}`,
        },
        secondary: [
          { label: t.margin, value: { kind: "number", value: ci.margin, decimals: 4 } },
          { label: t.standardError, value: { kind: "number", value: ci.standardError, decimals: 4 } },
          { label: t.critical, value: { kind: "number", value: ci.z, decimals: 4 } },
        ],
        notes: [t.note],
      };
    },
  });
}

export const confidenceIntervalEngine = makeConfidenceIntervalEngine(englishContext(en));
