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
import { PAY_PERIOD_LABELS, PAY_PERIODS, annualHours, convertPay, isPayPeriod } from "@/lib/math/pay";

export type SalaryToHourlyValues = ScheduleValues & {
  amount: number;
  period: string;
};

export const salaryToHourlyEngine = defineEngine<SalaryToHourlyValues>({
  currencyField: "currency",
  fields: [
    {
      id: "amount",
      type: "number",
      label: "Gross pay amount",
      help: "Pay before taxes and deductions.",
      defaultValue: 60000,
      min: 0,
      prefix: "currency",
    },
    {
      id: "period",
      type: "select",
      label: "Pay period",
      help: "How often you receive the amount above.",
      options: PAY_PERIODS.map((p) => ({ value: p, label: PAY_PERIOD_LABELS[p] })),
      defaultValue: "annual",
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
    const period = isPayPeriod(values.period) ? values.period : "annual";
    const schedule = scheduleFrom(values);
    const breakdown = convertPay(values.amount, period, schedule);
    return {
      primary: {
        label: "Hourly equivalent",
        value: { kind: "currency", amount: breakdown.hourly },
        caption: `Gross pay per hour, based on ${PAY_PERIOD_LABELS[period].toLowerCase()} pay of the amount entered.`,
      },
      secondary: [
        { label: "Annual gross pay", value: { kind: "currency", amount: breakdown.annual } },
        { label: "Paid hours per year", value: { kind: "number", value: annualHours(schedule), decimals: 2 } },
      ],
      table: breakdownTable(breakdown, schedule, [period, "hourly"]),
      notes: scheduleNotes(schedule),
    };
  },
});
