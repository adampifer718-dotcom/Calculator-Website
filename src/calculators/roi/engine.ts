import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import { annualizedRoiPercent, netReturn, roiPercent } from "@/lib/math/roi";
import en, { type RoiText } from "./text/en";

export type RoiValues = {
  invested: number;
  finalValue: number;
  years: number | null;
  currency: string;
};

export function makeRoiEngine(ctx: EngineContext<RoiText>) {
  const t = ctx.text;
  return defineEngine<RoiValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      { id: "invested", type: "number", label: t.invested, help: t.investedHelp, defaultValue: 10000, min: 0, minExclusive: true, prefix: "currency" },
      { id: "finalValue", type: "number", label: t.finalValue, help: t.finalValueHelp, defaultValue: 12500, min: 0, prefix: "currency" },
      { id: "years", type: "number", label: t.years, help: t.yearsHelp, defaultValue: 3, optional: true, min: 0, minExclusive: true, max: 100, suffix: ctx.common.units.years },
      currencyField(ctx),
    ],
    compute: ({ invested, finalValue, years }) => {
      const roi = roiPercent(invested, finalValue) ?? Number.NaN;
      const annualized = years === null ? null : annualizedRoiPercent(invested, finalValue, years);
      return {
        primary: {
          label: t.primary,
          value: { kind: "percent", value: roi, decimals: 2, signed: true },
          caption: roi >= 0 ? t.gainCaption : t.lossCaption,
        },
        secondary: [
          { label: t.net, value: { kind: "currency", amount: netReturn(invested, finalValue), signed: true } },
          annualized === null
            ? { label: t.annualized, value: { kind: "text", text: t.addLength } }
            : { label: t.annualized, value: { kind: "percent", value: annualized, decimals: 2, signed: true } },
        ],
        notes: [t.note],
      };
    },
  });
}

export const roiEngine = makeRoiEngine(englishContext(en));
