import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type CapRateText } from "./text/en";

export const MODES = ["rate", "value"] as const;

export type CapRateValues = {
  mode: string;
  currency: string;
  value: number | null;
  gross: number | null;
  vacancy: number | null;
  expenses: number | null;
  noi: number | null;
  targetRate: number | null;
};

/** EGI = gross × (1 − vacancy); NOI = EGI − expenses; cap rate = NOI ÷ value (in percent). */
export function capRate(value: number, gross: number, vacancyPercent: number, expenses: number) {
  const egi = gross * (1 - vacancyPercent / 100);
  const noi = egi - expenses;
  return { egi, noi, rate: (noi / value) * 100 };
}

/** Value = NOI ÷ cap rate. */
export function valueFromCapRate(noi: number, ratePercent: number): number {
  return noi / (ratePercent / 100);
}

export function makeCapRateEngine(ctx: EngineContext<CapRateText>) {
  const t = ctx.text;
  const rateMode = { field: "mode", oneOf: ["rate"] } as const;
  const valueMode = { field: "mode", oneOf: ["value"] } as const;
  return defineEngine<CapRateValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      { id: "mode", type: "select", label: t.mode, options: MODES.map((value) => ({ value, label: t.modes[value] })), defaultValue: "rate", display: "segmented" },
      currencyField(ctx),
      { id: "value", type: "number", label: t.value, defaultValue: 450000, min: 0, minExclusive: true, prefix: "currency", visibleWhen: rateMode },
      { id: "gross", type: "number", label: t.gross, help: t.grossHelp, defaultValue: 48000, min: 0, prefix: "currency", visibleWhen: rateMode },
      { id: "vacancy", type: "number", label: t.vacancy, help: t.vacancyHelp, defaultValue: 5, min: 0, max: 100, suffix: "%", visibleWhen: rateMode },
      { id: "expenses", type: "number", label: t.expenses, help: t.expensesHelp, defaultValue: 16000, min: 0, prefix: "currency", visibleWhen: rateMode },
      { id: "noi", type: "number", label: t.noi, help: t.noiHelp, defaultValue: 30000, prefix: "currency", visibleWhen: valueMode },
      { id: "targetRate", type: "number", label: t.targetRate, defaultValue: 6.5, min: 0, minExclusive: true, max: 100, suffix: "%", visibleWhen: valueMode },
    ],
    validate: ({ mode, noi }): FieldErrors => (mode === "value" && noi !== null && noi <= 0 ? { noi: t.errors.noiPositive } : {}),
    compute: (v) => {
      const money = (amount: number) => ({ kind: "currency" as const, amount });
      if (v.mode === "value") {
        const noi = v.noi ?? 0;
        const rate = v.targetRate ?? 0;
        const value = valueFromCapRate(noi, rate);
        const secondary: ResultItem[] = [{ label: t.monthlyNoi, value: money(noi / 12) }];
        if (rate > 1) secondary.push({ label: t.valuePerPoint, value: { kind: "currency", amount: valueFromCapRate(noi, rate - 1) - value, signed: true } });
        return {
          primary: {
            label: t.propertyValue,
            value: money(value),
            caption: fill(t.valueCaption, { noi: ctx.fmt.currency(noi, v.currency), rate: ctx.fmt.percent(rate, 3) }),
          },
          secondary,
          notes: [t.notes.financing],
        };
      }
      const value = v.value ?? 0;
      const gross = v.gross ?? 0;
      const expenses = v.expenses ?? 0;
      const r = capRate(value, gross, v.vacancy ?? 0, expenses);
      const secondary: ResultItem[] = [
        { label: t.egi, value: money(r.egi) },
        { label: t.noiResult, value: money(r.noi) },
        { label: t.monthlyNoi, value: money(r.noi / 12) },
      ];
      if (r.egi > 0) secondary.push({ label: t.expenseRatio, value: { kind: "percent", value: (expenses / r.egi) * 100, decimals: 2 } });
      if (gross > 0) secondary.push({ label: t.grm, value: { kind: "number", value: value / gross, decimals: 2 } });
      return {
        primary: {
          label: t.capRate,
          value: { kind: "percent", value: r.rate, decimals: 2 },
          caption: fill(t.capCaption, { noi: ctx.fmt.currency(r.noi, v.currency), value: ctx.fmt.currency(value, v.currency) }),
        },
        secondary,
        notes: r.noi < 0 ? [t.notes.negative, t.notes.financing] : [t.notes.financing],
      };
    },
  });
}

export const capRateEngine = makeCapRateEngine(englishContext(en));
