import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type ClockDurationText } from "./text/en";

export const MINUTES_PER_DAY = 1440;

export type ClockParse = { ok: true; minutes: number } | { ok: false; error: "format" | "hour24" | "hour12" | "minute" };

const CLOCK = /^(\d{1,2})(?:[:.h](\d{2}))?\s*(?:([ap])\.?\s*m?\.?)?$/i;

/**
 * Parses a clock time into minutes after midnight. Accepts 24-hour "9", "9:30",
 * "09:30", "21:30" (also "9.30") and 12-hour "9:30 pm", "9 am", "9:30 p.m.", "9pm".
 */
export function parseClockTime(text: string): ClockParse {
  const match = CLOCK.exec(text.trim());
  if (!match) return { ok: false, error: "format" };
  const hour = Number(match[1]);
  const minute = match[2] === undefined ? 0 : Number(match[2]);
  const meridiem = match[3]?.toLowerCase();
  if (minute > 59) return { ok: false, error: "minute" };
  if (meridiem) {
    if (hour < 1 || hour > 12) return { ok: false, error: "hour12" };
    const h24 = (hour % 12) + (meridiem === "p" ? 12 : 0);
    return { ok: true, minutes: h24 * 60 + minute };
  }
  if (hour > 23) return { ok: false, error: "hour24" };
  return { ok: true, minutes: hour * 60 + minute };
}

/** Minutes from start to end, adding a day when the end is not after the start. */
export function spanMinutes(start: number, end: number): number {
  return end > start ? end - start : end - start + MINUTES_PER_DAY;
}

/** "h:mm", e.g. 450 minutes → "7:30". Fractions of a minute are rounded. */
export function formatHoursMinutes(minutes: number): string {
  const m = Math.round(minutes);
  return `${Math.floor(m / 60)}:${String(m % 60).padStart(2, "0")}`;
}

/** "HH:MM" on a 24-hour clock, for captions. */
const clock24 = (minutes: number) => `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;

export type ClockDurationValues = { start: string; end: string; breakMinutes: number; currency: string; rate: number | null };

export function makeClockDurationEngine(ctx: EngineContext<ClockDurationText>) {
  const t = ctx.text;
  const check = (text: string) => {
    const parsed = parseClockTime(text);
    return parsed.ok ? undefined : t.errors[parsed.error];
  };
  const minutesOf = (text: string) => {
    const parsed = parseClockTime(text);
    return parsed.ok ? parsed.minutes : 0;
  };
  return defineEngine<ClockDurationValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      { id: "start", type: "text", label: t.start, help: t.timeHelp, defaultValue: "9:00 am", placeholder: "9:00 am", check },
      { id: "end", type: "text", label: t.end, help: t.timeHelp, defaultValue: "5:30 pm", placeholder: "17:30", check },
      { id: "breakMinutes", type: "number", label: t.breakMinutes, help: t.breakHelp, defaultValue: 30, min: 0, max: MINUTES_PER_DAY, integer: true, suffix: ctx.common.units.min },
      currencyField(ctx),
      { id: "rate", type: "number", label: t.rate, help: t.rateHelp, defaultValue: null, optional: true, min: 0, prefix: "currency" },
    ],
    validate: ({ start, end, breakMinutes }): FieldErrors => {
      const span = spanMinutes(minutesOf(start), minutesOf(end));
      return breakMinutes >= span ? { breakMinutes: fill(t.errors.breakTooLong, { span: formatHoursMinutes(span) }) } : {};
    },
    compute: ({ start, end, breakMinutes, rate }) => {
      const s = minutesOf(start);
      const e = minutesOf(end);
      const span = spanMinutes(s, e);
      const worked = span - breakMinutes;
      const hours = worked / 60;
      const notes: string[] = [];
      if (e === s) notes.push(t.notes.fullDay);
      else if (e < s) notes.push(t.notes.overnight);
      const pay: ResultItem[] = rate === null ? [] : [{ label: t.pay, value: { kind: "currency", amount: hours * rate } }];
      if (rate !== null) notes.push(t.notes.rounding);
      return {
        primary: {
          label: t.worked,
          value: { kind: "text", text: formatHoursMinutes(worked) },
          caption: fill(t.caption, { start: clock24(s), end: clock24(e), break: ctx.fmt.number(breakMinutes, 0) }),
        },
        secondary: [
          { label: t.decimalHours, value: { kind: "number", value: hours, decimals: 2, suffix: ctx.common.units.h } },
          { label: t.totalMinutes, value: { kind: "number", value: worked, decimals: 0, suffix: ctx.common.units.min } },
          { label: t.span, value: { kind: "text", text: formatHoursMinutes(span) } },
          ...pay,
        ],
        notes,
      };
    },
  });
}

export const clockDurationEngine = makeClockDurationEngine(englishContext(en));
