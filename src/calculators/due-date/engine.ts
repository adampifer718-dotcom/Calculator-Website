import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import { addDays, dayNumber, fromDayNumber, parseIsoDate, toIso } from "@/lib/math/dates";
import en, { type DueDateText } from "./text/en";

export type DueDateValues = {
  method: string;
  /* Hidden date fields evaluate to null at runtime; only the visible one is read. */
  lmp: string;
  cycle: number | null;
  conception: string;
  transfer: string;
  embryoAge: string;
  asOf: string;
};

export const DATE_MIN = "1900-01-01";
export const DATE_MAX = "2199-12-31";

/** Naegele's rule: 280 days (40 weeks) from the first day of the last period, for a 28-day cycle. */
export const LMP_TO_DUE = 280;
/** 38 weeks from conception (or fertilization). */
export const CONCEPTION_TO_DUE = 266;
/** Day 13 + 6 of week 13: the last day of the first trimester, counted from the LMP-equivalent start. */
export const FIRST_TRIMESTER_LAST_DAY = 13 * 7 + 6;
export const SECOND_TRIMESTER_LAST_DAY = 27 * 7 + 6;

export type DueMethod = "lmp" | "conception" | "ivf";

/** Days from the entered date to the estimated due date. */
export function daysToDueDate(method: DueMethod, cycle = 28, embryoAge = 5): number {
  if (method === "conception") return CONCEPTION_TO_DUE;
  if (method === "ivf") return CONCEPTION_TO_DUE - embryoAge;
  return LMP_TO_DUE + (cycle - 28);
}

/** Estimated due date (ISO) from an ISO start date. */
export function estimateDueDate(startIso: string, method: DueMethod, cycle = 28, embryoAge = 5): string {
  return toIso(addDays(parseIsoDate(startIso)!, daysToDueDate(method, cycle, embryoAge)));
}

export type Trimester = "first" | "second" | "third";

export function trimesterOf(gestationalDays: number): Trimester {
  if (gestationalDays <= FIRST_TRIMESTER_LAST_DAY) return "first";
  if (gestationalDays <= SECOND_TRIMESTER_LAST_DAY) return "second";
  return "third";
}

const MIN_DAY = dayNumber(parseIsoDate(DATE_MIN)!);
const MAX_DAY = dayNumber(parseIsoDate(DATE_MAX)!);

function methodOf(value: string): DueMethod {
  return value === "conception" || value === "ivf" ? value : "lmp";
}

export function makeDueDateEngine(ctx: EngineContext<DueDateText>) {
  const t = ctx.text;
  const p = (n: number, forms: DueDateText["units"]["weeks"]) => plural(ctx, n, forms);
  const startOf = (v: DueDateValues): string => {
    const m = methodOf(v.method);
    return (m === "lmp" ? v.lmp : m === "conception" ? v.conception : v.transfer) ?? "";
  };
  const offsetOf = (v: DueDateValues) => daysToDueDate(methodOf(v.method), v.cycle ?? 28, v.embryoAge === "3" ? 3 : 5);
  const startField = (v: DueDateValues) => (methodOf(v.method) === "lmp" ? "lmp" : methodOf(v.method) === "conception" ? "conception" : "transfer");

  return defineEngine<DueDateValues>({
    locale: ctx.locale,
    fields: [
      { id: "method", type: "select", label: t.method, options: (["lmp", "conception", "ivf"] as const).map((value) => ({ value, label: t.methods[value] })), defaultValue: "lmp" },
      { id: "lmp", type: "date", label: t.lmp, defaultValue: "2026-06-01", min: DATE_MIN, max: DATE_MAX, visibleWhen: { field: "method", oneOf: ["lmp"] } },
      { id: "cycle", type: "number", label: t.cycle, help: t.cycleHelp, defaultValue: 28, min: 20, max: 45, integer: true, suffix: t.daysSuffix, visibleWhen: { field: "method", oneOf: ["lmp"] } },
      { id: "conception", type: "date", label: t.conception, help: t.conceptionHelp, defaultValue: "2026-06-15", min: DATE_MIN, max: DATE_MAX, visibleWhen: { field: "method", oneOf: ["conception"] } },
      { id: "transfer", type: "date", label: t.transfer, defaultValue: "2026-06-20", min: DATE_MIN, max: DATE_MAX, visibleWhen: { field: "method", oneOf: ["ivf"] } },
      {
        id: "embryoAge",
        type: "select",
        label: t.embryoAge,
        options: (["3", "5"] as const).map((value) => ({ value, label: t.embryoAges[value] })),
        defaultValue: "5",
        visibleWhen: { field: "method", oneOf: ["ivf"] },
      },
      { id: "asOf", type: "date", label: t.asOf, help: t.asOfHelp, defaultValue: "2026-10-24", defaultToday: true, min: DATE_MIN, max: DATE_MAX },
    ],
    validate: (v): FieldErrors => {
      const due = dayNumber(parseIsoDate(startOf(v))!) + offsetOf(v);
      return due > MAX_DAY || due - LMP_TO_DUE < MIN_DAY ? { [startField(v)]: t.errors.range } : {};
    },
    compute: (v) => {
      const offset = offsetOf(v);
      const dueDay = dayNumber(parseIsoDate(startOf(v))!) + offset;
      const startDay = dueDay - LMP_TO_DUE;
      const iso = (day: number) => toIso(fromDayNumber(day));
      const gestational = dayNumber(parseIsoDate(v.asOf)!) - startDay;
      const notes: string[] = [];
      const secondary: ResultItem[] = [];
      if (gestational < 0) {
        secondary.push({ label: t.gestationalAge, value: { kind: "text", text: t.notStarted } });
        notes.push(t.notes.beforeStart);
      } else {
        secondary.push(
          { label: t.gestationalAge, value: { kind: "text", text: fill(t.weeksDays, { weeks: p(Math.floor(gestational / 7), t.units.weeks), days: p(gestational % 7, t.units.days) }) } },
          { label: t.trimester, value: { kind: "text", text: t.trimesters[trimesterOf(gestational)] } },
        );
        if (gestational > 42 * 7) notes.push(t.notes.veryLate);
        else if (gestational >= LMP_TO_DUE) notes.push(t.notes.pastDue);
      }
      if (gestational < LMP_TO_DUE) secondary.push({ label: t.daysToDue, value: { kind: "number", value: LMP_TO_DUE - gestational, decimals: 0 } });
      secondary.push(
        { label: t.startDate, value: { kind: "date", iso: iso(startDay) } },
        { label: t.firstEnds, value: { kind: "date", iso: iso(startDay + FIRST_TRIMESTER_LAST_DAY) } },
        { label: t.secondEnds, value: { kind: "date", iso: iso(startDay + SECOND_TRIMESTER_LAST_DAY) } },
        { label: t.thirdStarts, value: { kind: "date", iso: iso(startDay + SECOND_TRIMESTER_LAST_DAY + 1) } },
      );
      notes.push(t.notes.estimate, t.notes.clinician);
      return {
        primary: {
          label: t.dueDate,
          value: { kind: "date", iso: iso(dueDay) },
          caption: fill(t.caption, { days: ctx.fmt.number(offset, 0), from: t.captionFrom[methodOf(v.method)] }),
        },
        secondary,
        notes,
      };
    },
  });
}

export const dueDateEngine = makeDueDateEngine(englishContext(en));
