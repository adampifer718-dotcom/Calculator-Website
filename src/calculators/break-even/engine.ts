import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type BreakEvenText } from "./text/en";

export type BreakEvenValues = { fixed: number; price: number; variable: number; currency: string };

export function makeBreakEvenEngine(ctx: EngineContext<BreakEvenText>) {
  const t = ctx.text;
  return defineEngine<BreakEvenValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      { id: "fixed", type: "number", label: t.fixed, help: t.fixedHelp, defaultValue: 10000, min: 0, prefix: "currency" },
      { id: "price", type: "number", label: t.price, defaultValue: 50, min: 0, minExclusive: true, prefix: "currency" },
      { id: "variable", type: "number", label: t.variable, help: t.variableHelp, defaultValue: 30, min: 0, prefix: "currency" },
      currencyField(ctx),
    ],
    validate: ({ price, variable }): FieldErrors => (variable >= price ? { variable: t.variableTooHigh } : {}),
    compute: ({ fixed, price, variable }) => {
      const contribution = price - variable;
      const units = fixed / contribution;
      return {
        primary: {
          label: t.units,
          value: { kind: "number", value: units, decimals: 2, suffix: t.unitsSuffix },
          caption: fill(t.caption, { count: ctx.fmt.number(Math.ceil(units - 1e-9), 0) }),
        },
        secondary: [
          { label: t.revenue, value: { kind: "currency", amount: units * price } },
          { label: t.contribution, value: { kind: "currency", amount: contribution } },
          { label: t.ratio, value: { kind: "percent", value: (contribution / price) * 100 } },
        ],
      };
    },
  });
}

export const breakEvenEngine = makeBreakEvenEngine(englishContext(en));
