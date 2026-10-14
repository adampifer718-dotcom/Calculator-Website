import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { addMonths, compareDates, dayNumber, diffYearsMonthsDays, parseIsoDate, toIso, weekday, type LeapDayRule } from "@/lib/math/dates";
import en, { type AgeText } from "./text/en";

export type AgeValues = { birth: string; asOf: string; leapDay: string };

export const DATE_MIN = "1000-01-01";
export const DATE_MAX = "9999-12-31";

/** Age in years, months and days between two calendar dates, with leap-year aware birthdays. */
export function makeAgeEngine(ctx: EngineContext<AgeText>) {
  const t = ctx.text;
  const p = (n: number, forms: AgeText["units"]["years"]) => plural(ctx, n, forms);
  return defineEngine<AgeValues>({
    locale: ctx.locale,
    fields: [
      { id: "birth", type: "date", label: t.birth, defaultValue: "1990-05-15", min: DATE_MIN, max: DATE_MAX },
      { id: "asOf", type: "date", label: t.asOf, help: t.asOfHelp, defaultValue: "2026-10-14", defaultToday: true, min: DATE_MIN, max: DATE_MAX },
      {
        id: "leapDay",
        type: "select",
        label: t.leapDay,
        help: t.leapDayHelp,
        options: (["feb28", "mar1"] as const).map((v) => ({ value: v, label: t.leapDayOptions[v] })),
        defaultValue: "feb28",
      },
    ],
    validate: ({ birth, asOf }): FieldErrors => (compareDates(parseIsoDate(asOf)!, parseIsoDate(birth)!) < 0 ? { asOf: t.orderError } : {}),
    compute: ({ birth, asOf, leapDay }) => {
      const rule: LeapDayRule = leapDay === "mar1" ? "mar1" : "feb28";
      const born = parseIsoDate(birth)!;
      const on = parseIsoDate(asOf)!;
      const age = diffYearsMonthsDays(born, on, rule);
      const totalDays = dayNumber(on) - dayNumber(born);
      const totalMonths = age.years * 12 + age.months;
      const isBirthday = age.months === 0 && age.days === 0;
      const next = isBirthday ? on : addMonths(born, (age.years + 1) * 12, rule);
      const notes = [t.note];
      if (isBirthday && totalDays > 0) notes.unshift(t.birthdayToday);
      return {
        primary: {
          label: t.age,
          value: { kind: "text", text: fill(t.ymd, { years: p(age.years, t.units.years), months: p(age.months, t.units.months), days: p(age.days, t.units.days) }) },
          caption: fill(t.ageCaption, { birth: ctx.fmt.date(birth), asOf: ctx.fmt.date(asOf) }),
        },
        secondary: [
          { label: t.totalMonths, value: { kind: "number", value: totalMonths, decimals: 0 } },
          { label: t.totalWeeks, value: { kind: "text", text: fill(t.weeksDays, { weeks: p(Math.floor(totalDays / 7), t.units.weeks), days: p(totalDays % 7, t.units.days) }) } },
          { label: t.totalDays, value: { kind: "number", value: totalDays, decimals: 0 } },
          { label: t.nextBirthday, value: { kind: "date", iso: toIso(next) } },
          { label: t.daysToBirthday, value: { kind: "number", value: dayNumber(next) - dayNumber(on), decimals: 0 } },
          { label: t.bornOn, value: { kind: "text", text: t.weekdays[weekday(born)] } },
        ],
        notes,
      };
    },
  });
}

export const ageEngine = makeAgeEngine(englishContext(en));
