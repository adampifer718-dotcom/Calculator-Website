import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type PercentErrorText } from "./text/en";

export type PercentErrorValues = { measured: number; trueValue: number };

export function makePercentErrorEngine(ctx: EngineContext<PercentErrorText>) {
  const t = ctx.text;
  return defineEngine<PercentErrorValues>({
    locale: ctx.locale,
    fields: [
      { id: "measured", type: "number", label: t.measured, help: t.measuredHelp, defaultValue: 9.62 },
      { id: "trueValue", type: "number", label: t.trueValue, help: t.trueHelp, defaultValue: 9.81 },
    ],
    validate: ({ trueValue }): FieldErrors => (trueValue === 0 ? { trueValue: t.trueZero } : {}),
    compute: ({ measured, trueValue }) => {
      const difference = measured - trueValue;
      const absolute = Math.abs(difference);
      const relative = (difference / Math.abs(trueValue)) * 100;
      return {
        primary: { label: t.percentError, value: { kind: "percent", value: (absolute / Math.abs(trueValue)) * 100, decimals: 4 } },
        secondary: [
          { label: t.absoluteError, value: { kind: "text", text: ctx.fmt.significant(absolute, 10) } },
          { label: t.relativeError, value: { kind: "percent", value: relative, decimals: 4, signed: true } },
          { label: t.direction, value: { kind: "text", text: difference > 0 ? t.over : difference < 0 ? t.under : t.exact } },
        ],
        notes: [t.note],
      };
    },
  });
}

export const percentErrorEngine = makePercentErrorEngine(englishContext(en));
