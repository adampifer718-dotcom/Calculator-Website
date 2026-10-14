import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { percentOf, percentageOfWhole, wholeFromPercent } from "@/lib/math/percentage";
import en, { type PercentageText } from "./text/en";

export const PERCENTAGE_MODES = ["percentOf", "whatPercent", "findWhole"] as const;

export type PercentageValues = {
  mode: string;
  percent: number | null;
  ofValue: number | null;
  part: number | null;
  whole: number | null;
  partKnown: number | null;
  percentKnown: number | null;
};

export function makePercentageEngine(ctx: EngineContext<PercentageText>) {
  const t = ctx.text;
  const n = (value: number) => ctx.fmt.number(value, 6);
  const pct = (value: number, d = 6) => ctx.fmt.percent(value, d);
  return defineEngine<PercentageValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "mode",
        type: "select",
        label: t.question,
        options: PERCENTAGE_MODES.map((value) => ({ value, label: t.modes[value] })),
        defaultValue: "percentOf",
        display: "segmented",
      },
      { id: "percent", type: "number", label: t.percentX, defaultValue: 20, suffix: "%", visibleWhen: { field: "mode", oneOf: ["percentOf"] } },
      { id: "ofValue", type: "number", label: t.valueY, defaultValue: 150, visibleWhen: { field: "mode", oneOf: ["percentOf"] } },
      { id: "part", type: "number", label: t.partX, defaultValue: 30, visibleWhen: { field: "mode", oneOf: ["whatPercent"] } },
      { id: "whole", type: "number", label: t.wholeY, defaultValue: 150, visibleWhen: { field: "mode", oneOf: ["whatPercent"] } },
      { id: "partKnown", type: "number", label: t.partX, defaultValue: 30, visibleWhen: { field: "mode", oneOf: ["findWhole"] } },
      { id: "percentKnown", type: "number", label: t.percentY, defaultValue: 20, suffix: "%", visibleWhen: { field: "mode", oneOf: ["findWhole"] } },
    ],
    validate: (values): FieldErrors => {
      if (values.mode === "whatPercent" && values.whole === 0) return { whole: t.wholeZero };
      if (values.mode === "findWhole" && values.percentKnown === 0) return { percentKnown: t.percentZero };
      return {};
    },
    compute: (values) => {
      if (values.mode === "whatPercent") {
        const part = values.part ?? 0;
        const whole = values.whole ?? 0;
        const result = percentageOfWhole(part, whole) ?? Number.NaN;
        return {
          primary: {
            label: t.percentResult,
            value: { kind: "percent", value: result, decimals: 4 },
            caption: fill(t.percentCaption, { part: n(part), percent: pct(result, 4), whole: n(whole) }),
          },
          notes: [fill(t.percentFormula, { part: n(part), whole: n(whole) })],
        };
      }
      if (values.mode === "findWhole") {
        const part = values.partKnown ?? 0;
        const percent = values.percentKnown ?? 0;
        const result = wholeFromPercent(part, percent) ?? Number.NaN;
        return {
          primary: {
            label: t.wholeResult,
            value: { kind: "number", value: result, decimals: 6 },
            caption: fill(t.wholeCaption, { part: n(part), percent: pct(percent), whole: n(result) }),
          },
          notes: [fill(t.wholeFormula, { part: n(part), percent: n(percent) })],
        };
      }
      const percent = values.percent ?? 0;
      const ofValue = values.ofValue ?? 0;
      const result = percentOf(percent, ofValue);
      return {
        primary: {
          label: t.result,
          value: { kind: "number", value: result, decimals: 6 },
          caption: fill(t.resultCaption, { percent: pct(percent), value: n(ofValue), result: n(result) }),
        },
        secondary: [
          { label: fill(t.minus, { value: n(ofValue), percent: pct(percent) }), value: { kind: "number", value: ofValue - result, decimals: 6 } },
          { label: fill(t.plus, { value: n(ofValue), percent: pct(percent) }), value: { kind: "number", value: ofValue + result, decimals: 6 } },
        ],
        notes: [fill(t.resultFormula, { percent: n(percent), value: n(ofValue) })],
      };
    },
  });
}

export const percentageEngine = makePercentageEngine(englishContext(en));
