import { defineEngine } from "@/calculators/framework/types";
import {
  breakdownTable,
  currencyField,
  scheduleFields,
  scheduleFrom,
  scheduleNotes,
  validateScheduleValues,
  type ScheduleValues,
} from "@/calculators/shared/pay";
import { formatCurrency } from "@/lib/format";
import {
  PAY_PERIOD_LABELS,
  PAY_PERIODS,
  convertPay,
  formatHoursMinutes,
  higherHourlyRates,
  hoursToEarn,
  isPayPeriod,
} from "@/lib/math/pay";

export type PayConverterValues = ScheduleValues & {
  amount: number;
  period: string;
};

/** Amount used for the "time to earn" figure, in the selected currency. */
export const EARNING_TARGET = 100;

/**
 * Homepage pay converter: any pay period in, annual salary and every other
 * period out. Uses the same pay math as the salary and hourly calculators.
 */
export const payConverterEngine = defineEngine<PayConverterValues>({
  currencyField: "currency",
  fields: [
    {
      id: "amount",
      type: "number",
      label: "Your pay",
      help: "Gross pay before taxes and deductions.",
      defaultValue: 20,
      min: 0,
      prefix: "currency",
    },
    {
      id: "period",
      type: "select",
      label: "Pay period",
      help: "How often you receive the amount above.",
      options: PAY_PERIODS.map((p) => ({ value: p, label: PAY_PERIOD_LABELS[p] })),
      defaultValue: "hourly",
    },
    ...scheduleFields,
    currencyField,
  ],
  validate: (values) => {
    const errors = validateScheduleValues(values);
    if (!isPayPeriod(values.period)) errors.period = "Choose a pay period.";
    return errors;
  },
  compute: (values) => {
    const period = isPayPeriod(values.period) ? values.period : "hourly";
    const schedule = scheduleFrom(values);
    const breakdown = convertPay(values.amount, period, schedule);
    const hours = hoursToEarn(EARNING_TARGET, breakdown.hourly);
    const target = formatCurrency(EARNING_TARGET, values.currency, "negative", 0);
    return {
      primary: {
        label: "Estimated annual salary",
        value: { kind: "currency", amount: breakdown.annual },
        caption: `Gross pay per year, converted from ${PAY_PERIOD_LABELS[period].toLowerCase()} pay.`,
      },
      secondary: [
        { label: "Hourly rate", value: { kind: "currency", amount: breakdown.hourly } },
        { label: "Monthly pay", value: { kind: "currency", amount: breakdown.monthly } },
        { label: "Earned per minute", value: { kind: "currency", amount: breakdown.hourly / 60 } },
        {
          label: `Time to earn ${target}`,
          value: { kind: "text", text: hours === null ? "Not reachable at zero pay" : formatHoursMinutes(hours) },
        },
      ],
      tables: [
        breakdownTable(breakdown, schedule, [period, "annual"]),
        {
          caption: "Earnings at higher hourly rates",
          columns: ["Hourly rate", "Weekly", "Monthly", "Annual"],
          rows: higherHourlyRates(breakdown.hourly).map((rate) => {
            const annual = rate * schedule.hoursPerWeek * schedule.weeksPerYear;
            return {
              label: formatCurrency(rate, values.currency, "negative", 0),
              cells: [
                { kind: "currency", amount: annual / schedule.weeksPerYear },
                { kind: "currency", amount: annual / 12 },
                { kind: "currency", amount: annual },
              ],
            };
          }),
        },
      ],
      notes: scheduleNotes(schedule),
    };
  },
});
