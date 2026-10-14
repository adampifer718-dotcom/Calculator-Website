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
import { convertPay, higherHourlyRates, hoursToEarn, isPayPeriod } from "@/lib/math/pay";
import en, { type PayConverterText } from "./text/en";

export type PayConverterValues = ScheduleValues & {
  amount: number;
  period: string;
};

/** Amount used for the "time to earn" figure, in the selected currency. */
export const EARNING_TARGET = 100;

/** Splits hours into whole hours and minutes, rounding to the nearest minute first. */
function hoursAndMinutes(hours: number): { h: number; m: number } {
  const total = Math.round(hours * 60);
  return { h: Math.floor(total / 60), m: total % 60 };
}

/**
 * Homepage pay converter: any pay period in, annual salary and every other
 * period out. Uses the same pay math as the salary and hourly calculators.
 */
export function makePayConverterEngine(ctx: EngineContext<PayConverterText>) {
  const t = ctx.text;
  return defineEngine<PayConverterValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      { id: "amount", type: "number", label: t.amount, help: t.amountHelp, defaultValue: 20, min: 0, prefix: "currency" },
      { id: "period", type: "select", label: t.period, help: t.periodHelp, options: payPeriodOptions(ctx), defaultValue: "hourly" },
      ...scheduleFields(ctx),
      currencyField(ctx),
    ],
    validate: (values) => {
      const errors = validateScheduleValues(ctx, values);
      if (!isPayPeriod(values.period)) errors.period = ctx.common.choosePayPeriod;
      return errors;
    },
    compute: (values) => {
      const period = isPayPeriod(values.period) ? values.period : "hourly";
      const schedule = scheduleFrom(values);
      const breakdown = convertPay(values.amount, period, schedule);
      const hours = hoursToEarn(EARNING_TARGET, breakdown.hourly);
      const target = ctx.fmt.currency(EARNING_TARGET, values.currency, "negative", 0);
      const duration = hours === null ? null : hoursAndMinutes(hours);
      return {
        primary: {
          label: t.primary,
          value: { kind: "currency", amount: breakdown.annual },
          caption: fill(t.caption, { period: ctx.common.payPeriods[period].toLocaleLowerCase(ctx.locale) }),
        },
        secondary: [
          { label: t.hourly, value: { kind: "currency", amount: breakdown.hourly } },
          { label: t.monthly, value: { kind: "currency", amount: breakdown.monthly } },
          { label: t.perMinute, value: { kind: "currency", amount: breakdown.hourly / 60 } },
          {
            label: fill(t.timeToEarn, { target }),
            value: {
              kind: "text",
              text: duration === null ? t.unreachable : fill(t.hoursMinutes, { h: ctx.fmt.number(duration.h, 0), m: ctx.fmt.number(duration.m, 0) }),
            },
          },
        ],
        tables: [
          breakdownTable(ctx, breakdown, schedule, [period, "annual"]),
          {
            caption: t.higherCaption,
            columns: [t.higherColumns.rate, t.higherColumns.weekly, t.higherColumns.monthly, t.higherColumns.annual],
            rows: higherHourlyRates(breakdown.hourly).map((rate) => {
              const annual = rate * schedule.hoursPerWeek * schedule.weeksPerYear;
              return {
                label: ctx.fmt.currency(rate, values.currency, "negative", 0),
                cells: [
                  { kind: "currency", amount: annual / schedule.weeksPerYear },
                  { kind: "currency", amount: annual / 12 },
                  { kind: "currency", amount: annual },
                ],
              };
            }),
          },
        ],
        notes: scheduleNotes(ctx, schedule),
      };
    },
  });
}

export const payConverterEngine = makePayConverterEngine(englishContext(en));
