import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type ElectricityCostText } from "./text/en";

export type ElectricityValues = { power: number; hours: number; days: number; rate: number; currency: string };

export function makeElectricityCostEngine(ctx: EngineContext<ElectricityCostText>) {
  const t = ctx.text;
  const u = ctx.common.units;
  return defineEngine<ElectricityValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      { id: "power", type: "number", label: t.power, help: t.powerHelp, defaultValue: 100, min: 0, suffix: "W" },
      { id: "hours", type: "number", label: t.hours, defaultValue: 5, min: 0, max: 24, suffix: u.hours },
      { id: "days", type: "number", label: t.days, defaultValue: 30, min: 0, minExclusive: true, max: 3660, suffix: u.days },
      { id: "rate", type: "number", label: t.rate, defaultValue: 0.15, min: 0, prefix: "currency" },
      currencyField(ctx),
    ],
    compute: ({ power, hours, days, rate }) => {
      const dailyKwh = (power * hours) / 1000;
      const kwh = dailyKwh * days;
      return {
        primary: { label: fill(t.cost, { days: ctx.fmt.number(days) }), value: { kind: "currency", amount: kwh * rate } },
        secondary: [
          { label: t.energy, value: { kind: "number", value: kwh, decimals: 3, suffix: "kWh" } },
          { label: t.perDay, value: { kind: "currency", amount: dailyKwh * rate } },
          { label: t.perYear, value: { kind: "currency", amount: dailyKwh * 365 * rate } },
        ],
        notes: [t.note],
      };
    },
  });
}

export const electricityCostEngine = makeElectricityCostEngine(englishContext(en));
