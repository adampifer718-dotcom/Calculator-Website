import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { addDays, addMonths, compareDates, dayNumber, parseIsoDate, toIso, weekday, type CalendarDate } from "@/lib/math/dates";
import en, { type DateAddText } from "./text/en";

export type DateAddValues = { start: string; operation: string; years: number; months: number; weeks: number; days: number };

/** Same limits as the age and date duration calculators. */
export const DATE_MIN = "1000-01-01";
export const DATE_MAX = "9999-12-31";
const MIN = parseIsoDate(DATE_MIN)!;
const MAX = parseIsoDate(DATE_MAX)!;
export const MAX_AMOUNT = 10_000;

export interface DateShift {
  years: number;
  months: number;
  weeks: number;
  days: number;
}

/**
 * Moves a date forward (sign 1) or back (sign −1): years and months first,
 * clamped to the end of a shorter month, then weeks and days.
 */
export function shiftDate(start: CalendarDate, shift: DateShift, sign: 1 | -1): { date: CalendarDate; clamped: boolean } {
  const totalMonths = shift.years * 12 + shift.months;
  const afterMonths = totalMonths === 0 ? start : addMonths(start, sign * totalMonths);
  const clamped = totalMonths !== 0 && afterMonths.day !== start.day;
  return { date: addDays(afterMonths, sign * (shift.weeks * 7 + shift.days)), clamped };
}

export function inSupportedRange(date: CalendarDate): boolean {
  return compareDates(date, MIN) >= 0 && compareDates(date, MAX) <= 0;
}

export function makeDateAddEngine(ctx: EngineContext<DateAddText>) {
  const t = ctx.text;
  const amount = (id: "years" | "months" | "weeks" | "days", defaultValue: number, help?: string) => ({
    id,
    type: "number" as const,
    label: t[id],
    help,
    defaultValue,
    min: 0,
    max: MAX_AMOUNT,
    integer: true,
  });
  const run = (v: DateAddValues) => shiftDate(parseIsoDate(v.start)!, v, v.operation === "subtract" ? -1 : 1);

  return defineEngine<DateAddValues>({
    locale: ctx.locale,
    fields: [
      { id: "start", type: "date", label: t.start, help: t.startHelp, defaultValue: "2026-10-15", defaultToday: true, min: DATE_MIN, max: DATE_MAX },
      {
        id: "operation",
        type: "select",
        label: t.operation,
        options: (["add", "subtract"] as const).map((value) => ({ value, label: t.operations[value] })),
        defaultValue: "add",
        display: "segmented",
      },
      amount("years", 0),
      amount("months", 0, t.monthsHelp),
      amount("weeks", 0),
      amount("days", 90),
    ],
    validate: (values): FieldErrors => {
      const { date } = run(values);
      if (inSupportedRange(date)) return {};
      const field = values.days > 0 || values.weeks > 0 ? (values.days > 0 ? "days" : "weeks") : values.months > 0 ? "months" : "years";
      return { [field]: fill(t.errors.outOfRange, { min: ctx.fmt.date(DATE_MIN), max: ctx.fmt.date(DATE_MAX) }) };
    },
    compute: (values) => {
      const start = parseIsoDate(values.start)!;
      const { date, clamped } = run(values);
      const iso = toIso(date);
      const between = Math.abs(dayNumber(date) - dayNumber(start));
      const parts = (["years", "months", "weeks", "days"] as const).filter((key) => values[key] > 0).map((key) => plural(ctx, values[key], t.units[key]));
      const amountText = parts.length > 0 ? parts.join(t.separator) : plural(ctx, 0, t.units.days);
      const notes = clamped ? [t.notes.clamped, t.notes.calendar] : [t.notes.calendar];
      return {
        primary: {
          label: t.result,
          value: { kind: "date", iso },
          caption: fill(values.operation === "subtract" ? t.captionSubtract : t.captionAdd, { start: ctx.fmt.date(toIso(start)), amount: amountText }),
        },
        secondary: [
          { label: t.weekday, value: { kind: "text", text: t.weekdayNames[weekday(date)] } },
          { label: t.totalDays, value: { kind: "number", value: between, decimals: 0 } },
          { label: t.inWeeks, value: { kind: "text", text: fill(t.weeksDays, { weeks: plural(ctx, Math.floor(between / 7), t.units.weeks), days: plural(ctx, between % 7, t.units.days) }) } },
          { label: t.isoDate, value: { kind: "text", text: iso } },
        ],
        notes,
      };
    },
  });
}

export const dateAddEngine = makeDateAddEngine(englishContext(en));
