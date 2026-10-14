import type { EngineContext } from "@/calculators/framework/i18n";
import { fill } from "@/calculators/framework/i18n";
import type { NumberField, ResultTable, SelectField } from "@/calculators/framework/types";
import { CURRENCY_CODES, DEFAULT_CURRENCY } from "@/lib/format";
import {
  DEFAULT_SCHEDULE,
  PAY_PERIODS,
  SCHEDULE_LIMITS,
  annualHours,
  hoursPerDay,
  periodsPerYear,
  scheduleIssues,
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

type Ctx = EngineContext<unknown>;

/** Currency selector with names in the visitor's language. Formatting only; never converts amounts. */
export function currencyField(ctx: Ctx): SelectField<"currency"> {
  return {
    id: "currency",
    type: "select",
    label: ctx.common.currency.label,
    help: ctx.common.currency.help,
    options: CURRENCY_CODES.map((code) => ({ value: code, label: ctx.fmt.currencyLabel(code) })),
    defaultValue: DEFAULT_CURRENCY,
  };
}

export function payPeriodOptions(ctx: Ctx) {
  return PAY_PERIODS.map((p) => ({ value: p, label: ctx.common.payPeriods[p] }));
}

export function scheduleFields(ctx: Ctx): [NumberField<"hoursPerWeek">, NumberField<"daysPerWeek">, NumberField<"weeksPerYear">] {
  const s = ctx.common.schedule;
  const u = ctx.common.units;
  return [
    {
      id: "hoursPerWeek",
      type: "number",
      label: s.hoursPerWeek,
      help: s.hoursPerWeekHelp,
      defaultValue: DEFAULT_SCHEDULE.hoursPerWeek,
      min: SCHEDULE_LIMITS.hoursPerWeek.min,
      minExclusive: true,
      max: SCHEDULE_LIMITS.hoursPerWeek.max,
      suffix: u.hours,
    },
    {
      id: "daysPerWeek",
      type: "number",
      label: s.daysPerWeek,
      help: s.daysPerWeekHelp,
      defaultValue: DEFAULT_SCHEDULE.daysPerWeek,
      min: SCHEDULE_LIMITS.daysPerWeek.min,
      minExclusive: true,
      max: SCHEDULE_LIMITS.daysPerWeek.max,
      suffix: u.days,
    },
    {
      id: "weeksPerYear",
      type: "number",
      label: s.weeksPerYear,
      help: s.weeksPerYearHelp,
      defaultValue: DEFAULT_SCHEDULE.weeksPerYear,
      min: SCHEDULE_LIMITS.weeksPerYear.min,
      minExclusive: true,
      max: SCHEDULE_LIMITS.weeksPerYear.max,
      suffix: u.weeks,
    },
  ];
}

export function scheduleFrom(values: ScheduleValues): WorkSchedule {
  return {
    hoursPerWeek: values.hoursPerWeek,
    daysPerWeek: values.daysPerWeek,
    weeksPerYear: values.weeksPerYear,
  };
}

export function validateScheduleValues(ctx: Ctx, values: ScheduleValues): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const [field, issue] of Object.entries(scheduleIssues(scheduleFrom(values)))) {
    errors[field] = ctx.common.schedule.errors[issue];
  }
  return errors;
}

export function scheduleNotes(ctx: Ctx, schedule: WorkSchedule): string[] {
  const n = (v: number) => ctx.fmt.number(v, 2);
  const notes = ctx.common.schedule.notes;
  return [
    fill(notes.annualHours, { hours: n(schedule.hoursPerWeek), weeks: n(schedule.weeksPerYear), annual: n(annualHours(schedule)) }),
    fill(notes.daily, { days: n(schedule.daysPerWeek), perDay: n(hoursPerDay(schedule)) }),
    notes.gross,
  ];
}

export function breakdownTable(ctx: Ctx, breakdown: PayBreakdown, schedule: WorkSchedule, highlight: readonly PayPeriod[]): ResultTable {
  const t = ctx.common.schedule.table;
  return {
    caption: t.caption,
    columns: [t.period, t.periodsPerYear, t.grossPay],
    rows: PAY_PERIODS.map((period) => ({
      label: ctx.common.payPeriods[period],
      highlight: highlight.includes(period),
      cells: [
        { kind: "text", text: ctx.fmt.number(periodsPerYear(period, schedule), 2) },
        { kind: "currency", amount: breakdown[period] },
      ],
    })),
  };
}
