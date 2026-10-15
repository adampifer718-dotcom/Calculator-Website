import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { normalCdf } from "@/lib/math/stats";
import en, { type ZScoreText } from "./text/en";

export type ZScoreValues = { x: number; mean: number; sd: number };

export function makeZScoreEngine(ctx: EngineContext<ZScoreText>) {
  const t = ctx.text;
  const prob = (p: number) => ctx.fmt.significant(p, 6);
  return defineEngine<ZScoreValues>({
    locale: ctx.locale,
    fields: [
      { id: "x", type: "number", label: t.x, help: t.xHelp, defaultValue: 72 },
      { id: "mean", type: "number", label: t.mean, defaultValue: 64 },
      { id: "sd", type: "number", label: t.sd, help: t.sdHelp, defaultValue: 5, min: 0, minExclusive: true },
    ],
    compute: ({ x, mean, sd }) => {
      const z = (x - mean) / sd;
      // Each tail is computed directly so tiny tail probabilities keep their precision.
      const lower = normalCdf(z);
      const upper = normalCdf(-z);
      const twoTailed = Math.min(1, 2 * normalCdf(-Math.abs(z)));
      const distance = ctx.fmt.number(Math.abs(z), 4);
      const notes = [t.note];
      if (Math.abs(z) > 3) notes.push(t.unusual);
      return {
        primary: { label: t.z, value: { kind: "number", value: z, decimals: 4 } },
        secondary: [
          { label: t.position, value: { kind: "text", text: z > 0 ? fill(t.above, { n: distance }) : z < 0 ? fill(t.below, { n: distance }) : t.atMean } },
          { label: t.percentile, value: { kind: "percent", value: lower * 100, decimals: 2 } },
          { label: t.upper, value: { kind: "text", text: prob(upper) } },
          { label: t.twoTailed, value: { kind: "text", text: prob(twoTailed) } },
        ],
        notes,
      };
    },
  });
}

export const zScoreEngine = makeZScoreEngine(englishContext(en));
