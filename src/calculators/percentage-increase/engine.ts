import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { percentChange } from "@/lib/math/percentage";
import en, { type PercentageIncreaseText } from "./text/en";

export type PercentageIncreaseValues = {
  original: number;
  newValue: number;
};

export function makePercentageIncreaseEngine(ctx: EngineContext<PercentageIncreaseText>) {
  const t = ctx.text;
  const n = (value: number) => ctx.fmt.number(value, 6);
  return defineEngine<PercentageIncreaseValues>({
    locale: ctx.locale,
    fields: [
      { id: "original", type: "number", label: t.original, help: t.originalHelp, defaultValue: 80 },
      { id: "newValue", type: "number", label: t.newValue, help: t.newValueHelp, defaultValue: 100 },
    ],
    validate: (values): FieldErrors => (values.original === 0 ? { original: t.originalZero } : {}),
    compute: ({ original, newValue }) => {
      const change = percentChange(original, newValue) ?? Number.NaN;
      const difference = newValue - original;
      const vars = { from: n(original), to: n(newValue) };
      return {
        primary: {
          label: t.primary,
          value: { kind: "percent", value: change, decimals: 4, signed: true },
          caption: difference > 0 ? fill(t.increase, vars) : difference < 0 ? fill(t.decrease, vars) : t.noChange,
        },
        secondary: [
          { label: t.absolute, value: { kind: "number", value: difference, decimals: 6, signed: true } },
          { label: t.ratio, value: { kind: "percent", value: (newValue / original) * 100, decimals: 4 } },
        ],
        notes: [fill(t.formula, vars), ...(original < 0 ? [t.negativeNote] : [])],
      };
    },
  });
}

export const percentageIncreaseEngine = makePercentageIncreaseEngine(englishContext(en));
