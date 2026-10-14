import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import {
  breakdownTable,
  currencyField,
  payPeriodOptions,
  scheduleFields,
  scheduleFrom,
  scheduleNotes,
  validateScheduleValues,
  type ScheduleValues,
} from "@/calculators/shared/pay";
import { annualHours, convertPay, isPayPeriod } from "@/lib/math/pay";
import en, { type SalaryToHourlyText } from "./text/en";

export type SalaryToHourlyValues = ScheduleValues & {
  amount: number;
  period: string;
};

export function makeSalaryToHourlyEngine(ctx: EngineContext<SalaryToHourlyText>) {
  const t = ctx.text;
  return defineEngine<SalaryToHourlyValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      { id: "amount", type: "number", label: t.amount, help: t.amountHelp, defaultValue: 60000, min: 0, prefix: "currency" },
      { id: "period", type: "select", label: t.period, help: t.periodHelp, options: payPeriodOptions(ctx), defaultValue: "annual" },
      ...scheduleFields(ctx),
      currencyField(ctx),
    ],
    validate: (values) => {
      const errors = validateScheduleValues(ctx, values);
      if (!isPayPeriod(values.period)) errors.period = ctx.common.choosePayPeriod;
      return errors;
    },
    compute: (values) => {
      const period = isPayPeriod(values.period) ? values.period : "annual";
      const schedule = scheduleFrom(values);
      const breakdown = convertPay(values.amount, period, schedule);
      return {
        primary: {
          label: t.primary,
          value: { kind: "currency", amount: breakdown.hourly },
          caption: fill(t.caption, { period: ctx.common.payPeriods[period].toLocaleLowerCase(ctx.locale) }),
        },
        secondary: [
          { label: t.annual, value: { kind: "currency", amount: breakdown.annual } },
          { label: t.annualHours, value: { kind: "number", value: annualHours(schedule), decimals: 2 } },
        ],
        tables: [breakdownTable(ctx, breakdown, schedule, [period, "hourly"])],
        notes: scheduleNotes(ctx, schedule),
      };
    },
  });
}

export const salaryToHourlyEngine = makeSalaryToHourlyEngine(englishContext(en));
