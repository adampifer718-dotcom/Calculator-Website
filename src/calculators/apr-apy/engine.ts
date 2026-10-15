import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import en, { type AprApyText } from "./text/en";

export type AprApyValues = { direction: string; rate: number; compounding: string };

export const FREQUENCIES = ["1", "2", "4", "12", "52", "365", "continuous"] as const;
export type Frequency = (typeof FREQUENCIES)[number];

/** Periods per year, or Infinity for continuous compounding. */
export function periods(frequency: string): number {
  return frequency === "continuous" ? Infinity : Number(frequency);
}

/** APY = (1 + APR/n)^n − 1, or e^APR − 1 for continuous compounding. Rates are decimals. */
export function aprToApy(apr: number, n: number): number {
  return Number.isFinite(n) ? Math.expm1(n * Math.log1p(apr / n)) : Math.expm1(apr);
}

/** APR = n × ((1 + APY)^(1/n) − 1), or ln(1 + APY) for continuous compounding. Rates are decimals. */
export function apyToApr(apy: number, n: number): number {
  return Number.isFinite(n) ? n * Math.expm1(Math.log1p(apy) / n) : Math.log1p(apy);
}

export function makeAprApyEngine(ctx: EngineContext<AprApyText>) {
  const t = ctx.text;
  return defineEngine<AprApyValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "direction",
        type: "select",
        label: t.direction,
        options: (["aprToApy", "apyToApr"] as const).map((value) => ({ value, label: t.directions[value] })),
        defaultValue: "aprToApy",
        display: "segmented",
      },
      { id: "rate", type: "number", label: t.rate, help: t.rateHelp, defaultValue: 6, min: 0, max: 1000, suffix: "%" },
      { id: "compounding", type: "select", label: t.compounding, options: FREQUENCIES.map((value) => ({ value, label: t.frequencies[value] })), defaultValue: "12" },
    ],
    compute: ({ direction, rate, compounding }) => {
      const toApy = direction !== "apyToApr";
      const n = periods(compounding);
      const input = rate / 100;
      const apr = toApy ? input : apyToApr(input, n);
      const apy = toApy ? aprToApy(input, n) : input;
      const output = toApy ? apy : apr;
      const frequency = t.inSentence[compounding as Frequency];
      const secondary = [];
      if (Number.isFinite(n)) {
        secondary.push({ label: t.periodRate, value: { kind: "percent" as const, value: (apr / n) * 100, decimals: 6 } });
        secondary.push({ label: t.periodsPerYear, value: { kind: "number" as const, value: n, decimals: 0 } });
      }
      secondary.push({ label: t.difference, value: { kind: "percent" as const, value: (apy - apr) * 100, decimals: 4 } });
      return {
        primary: {
          label: toApy ? t.apy : t.apr,
          value: { kind: "percent", value: output * 100, decimals: 4 },
          caption: fill(toApy ? t.captionToApy : t.captionToApr, { rate: ctx.fmt.percent(rate, 4), frequency }),
        },
        secondary,
        tables: [
          {
            caption: t.tableCaption,
            columns: [t.tableColumns.frequency, toApy ? t.tableColumns.apy : t.tableColumns.apr],
            rows: FREQUENCIES.map((f) => ({
              label: t.frequencies[f],
              highlight: f === compounding,
              cells: [{ kind: "percent" as const, value: (toApy ? aprToApy(input, periods(f)) : apyToApr(input, periods(f))) * 100, decimals: 4 }],
            })),
          },
        ],
        notes: Number.isFinite(n) ? [t.notes.regZ] : [t.notes.continuous, t.notes.regZ],
      };
    },
  });
}

export const aprApyEngine = makeAprApyEngine(englishContext(en));
