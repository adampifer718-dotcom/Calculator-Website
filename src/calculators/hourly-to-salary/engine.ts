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
import { annualHours, convertPay } from "@/lib/math/pay";

export type HourlyToSalaryValues = ScheduleValues & {
  hourlyRate: number;
};

export const hourlyToSalaryEngine = defineEngine<HourlyToSalaryValues>({
  currencyField: "currency",
  fields: [
    {
      id: "hourlyRate",
      type: "number",
      label: "Hourly rate",
      help: "Gross pay per hour, before taxes and deductions.",
      defaultValue: 25,
      min: 0,
      prefix: "currency",
    },
    ...scheduleFields,
    currencyField,
  ],
  validate: (values) => validateScheduleValues(values),
  compute: (values) => {
    const schedule = scheduleFrom(values);
    const breakdown = convertPay(values.hourlyRate, "hourly", schedule);
    return {
      primary: {
        label: "Annual salary equivalent",
        value: { kind: "currency", amount: breakdown.annual },
        caption: "Gross pay per year at the hourly rate and schedule entered.",
      },
      secondary: [
        { label: "Monthly gross pay", value: { kind: "currency", amount: breakdown.monthly } },
        { label: "Paid hours per year", value: { kind: "number", value: annualHours(schedule), decimals: 2 } },
      ],
      tables: [breakdownTable(breakdown, schedule, ["annual", "hourly"])],
      notes: scheduleNotes(schedule),
    };
  },
});
