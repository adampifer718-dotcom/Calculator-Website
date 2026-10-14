import type { NumberField, ResultTable, SelectField } from "@/calculators/framework/types";
import { CURRENCIES, DEFAULT_CURRENCY, formatNumber } from "@/lib/format";
import {
  DEFAULT_SCHEDULE,
  PAY_PERIOD_LABELS,
  PAY_PERIODS,
  SCHEDULE_LIMITS,
  annualHours,
  hoursPerDay,
  periodsPerYear,
  validateSchedule,
  type PayBreakdown,
  type PayPeriod,
  type WorkSchedule,
} from "@/lib/math/pay";

/** Inputs shared by the pay conversion calculators. */
export type ScheduleValues = {
  hoursPerWeek: number;
  daysPerWeek: number;
  weeksPerYear: number;
  currency: string;
};

export const currencyField: SelectField<"currency"> = {
  id: "currency",
  type: "select",
  label: "Currency",
  help: "Changes how amounts are formatted. No exchange-rate conversion is applied.",
  options: CURRENCIES.map((c) => ({ value: c.code, label: c.label })),
  defaultValue: DEFAULT_CURRENCY,
};

export const hoursPerWeekField: NumberField<"hoursPerWeek"> = {
  id: "hoursPerWeek",
  type: "number",
  label: "Hours per week",
  help: "Paid hours in a typical week.",
  defaultValue: DEFAULT_SCHEDULE.hoursPerWeek,
  min: SCHEDULE_LIMITS.hoursPerWeek.min,
  minExclusive: true,
  max: SCHEDULE_LIMITS.hoursPerWeek.max,
  suffix: "hours",
};

export const daysPerWeekField: NumberField<"daysPerWeek"> = {
  id: "daysPerWeek",
  type: "number",
  label: "Workdays per week",
  help: "Used for the daily equivalent.",
  defaultValue: DEFAULT_SCHEDULE.daysPerWeek,
  min: SCHEDULE_LIMITS.daysPerWeek.min,
  minExclusive: true,
  max: SCHEDULE_LIMITS.daysPerWeek.max,
  suffix: "days",
};

export const weeksPerYearField: NumberField<"weeksPerYear"> = {
  id: "weeksPerYear",
  type: "number",
  label: "Paid weeks per year",
  help: "52 for a full year. Lower it to exclude unpaid weeks.",
  defaultValue: DEFAULT_SCHEDULE.weeksPerYear,
  min: SCHEDULE_LIMITS.weeksPerYear.min,
  minExclusive: true,
  max: SCHEDULE_LIMITS.weeksPerYear.max,
  suffix: "weeks",
};

export const scheduleFields = [hoursPerWeekField, daysPerWeekField, weeksPerYearField] as const;

export function scheduleFrom(values: ScheduleValues): WorkSchedule {
  return {
    hoursPerWeek: values.hoursPerWeek,
    daysPerWeek: values.daysPerWeek,
    weeksPerYear: values.weeksPerYear,
  };
}

export function validateScheduleValues(values: ScheduleValues): Record<string, string> {
  return validateSchedule(scheduleFrom(values)) as Record<string, string>;
}

export function scheduleNotes(schedule: WorkSchedule): string[] {
  return [
    `Assumes ${formatNumber(schedule.hoursPerWeek, 2)} hours per week × ${formatNumber(schedule.weeksPerYear, 2)} weeks = ${formatNumber(annualHours(schedule), 2)} paid hours per year.`,
    `Daily pay assumes ${formatNumber(schedule.daysPerWeek, 2)} workdays per week, or ${formatNumber(hoursPerDay(schedule), 2)} hours per workday.`,
    "All amounts are gross pay before taxes and deductions, not take-home pay.",
  ];
}

export function periodsLabel(period: PayPeriod, schedule: WorkSchedule): string {
  return formatNumber(periodsPerYear(period, schedule), 2);
}

export function breakdownTable(breakdown: PayBreakdown, schedule: WorkSchedule, highlight: readonly PayPeriod[]): ResultTable {
  return {
    caption: "Gross pay by period",
    columns: ["Pay period", "Periods per year", "Gross pay"],
    rows: PAY_PERIODS.map((period) => ({
      label: PAY_PERIOD_LABELS[period],
      highlight: highlight.includes(period),
      cells: [
        { kind: "text", text: periodsLabel(period, schedule) },
        { kind: "currency", amount: breakdown[period] },
      ],
    })),
  };
}
