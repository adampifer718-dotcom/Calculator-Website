/**
 * Calendar arithmetic on ISO dates ("YYYY-MM-DD") in the proleptic Gregorian
 * calendar. Dates are converted to whole day numbers with Date.UTC, so time
 * zones and daylight-saving changes can never shift a result by a day.
 */

export interface CalendarDate {
  year: number;
  month: number; // 1–12
  day: number;
}

const ISO = /^(\d{4})-(\d{2})-(\d{2})$/;
const MS_PER_DAY = 86_400_000;

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function daysInMonth(year: number, month: number): number {
  return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
}

/** Parses a real calendar date ("2024-02-29" yes, "2023-02-29" no); undefined otherwise. */
export function parseIsoDate(text: string): CalendarDate | undefined {
  const match = ISO.exec(text.trim());
  if (!match) return undefined;
  const [year, month, day] = match.slice(1).map(Number);
  if (year < 1 || month < 1 || month > 12 || day < 1 || day > daysInMonth(year, month)) return undefined;
  return { year, month, day };
}

export function toIso({ year, month, day }: CalendarDate): string {
  return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

/** Days since 1970-01-01 (negative before). */
export function dayNumber({ year, month, day }: CalendarDate): number {
  const date = new Date(0);
  date.setUTCFullYear(year, month - 1, day);
  return Math.round(date.getTime() / MS_PER_DAY);
}

export function fromDayNumber(days: number): CalendarDate {
  const date = new Date(days * MS_PER_DAY);
  return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() };
}

/** 0 = Sunday … 6 = Saturday. */
export function weekday(date: CalendarDate): number {
  return (((dayNumber(date) + 4) % 7) + 7) % 7;
}

export function compareDates(a: CalendarDate, b: CalendarDate): number {
  return dayNumber(a) - dayNumber(b);
}

/** How a 29 February date is moved in years without one. */
export type LeapDayRule = "feb28" | "mar1";

/**
 * Adds whole months. When the target month is shorter, the date is clamped to
 * its last day (31 January + 1 month = 28 or 29 February), except that 29
 * February moved to a common year becomes 1 March under the "mar1" rule.
 */
export function addMonths(date: CalendarDate, months: number, leapDay: LeapDayRule = "feb28"): CalendarDate {
  const index = date.year * 12 + (date.month - 1) + months;
  const year = Math.floor(index / 12);
  const month = (index % 12) + 1;
  const last = daysInMonth(year, month);
  if (date.day <= last) return { year, month, day: date.day };
  if (leapDay === "mar1" && date.month === 2 && date.day === 29 && month === 2) return { year, month: 3, day: 1 };
  return { year, month, day: last };
}

export function addDays(date: CalendarDate, days: number): CalendarDate {
  return fromDayNumber(dayNumber(date) + days);
}

/**
 * Calendar difference from `start` to `end` (end ≥ start) in whole years,
 * months and days: the largest number of months that fits (counted from
 * `start`, with month-end clamping), then the remaining days.
 */
export function diffYearsMonthsDays(start: CalendarDate, end: CalendarDate, leapDay: LeapDayRule = "feb28"): { years: number; months: number; days: number } {
  let months = (end.year - start.year) * 12 + (end.month - start.month);
  while (months > 0 && compareDates(addMonths(start, months, leapDay), end) > 0) months--;
  const anchor = addMonths(start, months, leapDay);
  return { years: Math.floor(months / 12), months: months % 12, days: dayNumber(end) - dayNumber(anchor) };
}

/** Number of Monday–Friday days in the range [from, to] (inclusive, from ≤ to). */
export function countWeekdays(from: CalendarDate, to: CalendarDate): number {
  const first = dayNumber(from);
  const total = dayNumber(to) - first + 1;
  if (total <= 0) return 0;
  const fullWeeks = Math.floor(total / 7);
  let count = fullWeeks * 5;
  const startDay = weekday(from);
  for (let i = 0; i < total % 7; i++) {
    const d = (startDay + i) % 7;
    if (d !== 0 && d !== 6) count++;
  }
  return count;
}

/** The visitor's local calendar date (used only to prefill "today"). */
export function localToday(now: Date = new Date()): string {
  return toIso({ year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() });
}
