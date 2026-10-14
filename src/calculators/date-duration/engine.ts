import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { WEEKENDS, addDays, compareDates, countWeekdays, dayNumber, diffYearsMonthsDays, parseIsoDate, toIso } from "@/lib/math/dates";
import en, { type DateDurationText } from "./text/en";

export type DateDurationValues = { start: string; end: string; includeEnd: string; weekend: string };

const DATE_MIN = "1000-01-01";
const DATE_MAX = "9999-12-31";

/** Time between two calendar dates, optionally counting the end date itself. */
export function makeDateDurationEngine(ctx: EngineContext<DateDurationText>) {
  const t = ctx.text;
  const p = (n: number, forms: DateDurationText["units"]["days"]) => plural(ctx, n, forms);
  return defineEngine<DateDurationValues>({
    locale: ctx.locale,
    fields: [
      { id: "start", type: "date", label: t.start, defaultValue: "2026-01-01", min: DATE_MIN, max: DATE_MAX },
      { id: "end", type: "date", label: t.end, help: t.endHelp, defaultValue: "2026-10-14", defaultToday: true, min: DATE_MIN, max: DATE_MAX },
      {
        id: "includeEnd",
        type: "select",
        label: t.includeEnd,
        help: t.includeEndHelp,
        options: (["no", "yes"] as const).map((v) => ({ value: v, label: t.includeEndOptions[v] })),
        defaultValue: "no",
      },
      {
        id: "weekend",
        type: "select",
        label: t.weekend,
        help: t.weekendHelp,
        options: (["satSun", "friSat"] as const).map((v) => ({ value: v, label: t.weekendOptions[v] })),
        defaultValue: "satSun",
      },
    ],
    compute: ({ start, end, includeEnd, weekend }) => {
      let from = parseIsoDate(start)!;
      let to = parseIsoDate(end)!;
      const reversed = compareDates(to, from) < 0;
      if (reversed) [from, to] = [to, from];
      // Counting the end date is the same as measuring up to the following day.
      const until = includeEnd === "yes" ? addDays(to, 1) : to;
      const total = dayNumber(until) - dayNumber(from);
      const calendar = diffYearsMonthsDays(from, until);
      const weekendDays = WEEKENDS[weekend === "friSat" ? "friSat" : "satSun"];
      const weekdays = total > 0 ? countWeekdays(from, addDays(until, -1), weekendDays) : 0;
      const notes = [t.weekdaysNote, t.hoursNote];
      if (reversed) notes.unshift(t.reversed);
      return {
        primary: {
          label: t.totalDays,
          value: { kind: "number", value: total, decimals: 0 },
          caption: fill(t.caption, { start: ctx.fmt.date(toIso(from)), end: ctx.fmt.date(toIso(to)) }),
        },
        secondary: [
          { label: t.calendar, value: { kind: "text", text: fill(t.ymd, { years: p(calendar.years, t.units.years), months: p(calendar.months, t.units.months), days: p(calendar.days, t.units.days) }) } },
          { label: t.inWeeks, value: { kind: "text", text: fill(t.weeksDays, { weeks: p(Math.floor(total / 7), t.units.weeks), days: p(total % 7, t.units.days) }) } },
          { label: t.weekdays, value: { kind: "number", value: weekdays, decimals: 0 } },
          { label: t.weekendDays, value: { kind: "number", value: total - weekdays, decimals: 0 } },
          { label: t.hours, value: { kind: "number", value: total * 24, decimals: 0 } },
        ],
        notes,
      };
    },
  });
}

export const dateDurationEngine = makeDateDurationEngine(englishContext(en));
