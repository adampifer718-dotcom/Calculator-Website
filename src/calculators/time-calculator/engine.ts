import { englishContext, fill, type EngineContext, type PluralForms } from "@/calculators/framework/i18n";
import { defineEngine, type NumberField } from "@/calculators/framework/types";
import en, { type TimeCalculatorText } from "./text/en";

const PARTS = ["days", "hours", "minutes", "seconds"] as const;
type Part = (typeof PARTS)[number];
const SECONDS_PER: Record<Part, number> = { days: 86400, hours: 3600, minutes: 60, seconds: 1 };
const MAX: Record<Part, number> = { days: 1_000_000, hours: 24_000_000, minutes: 1_440_000_000, seconds: 86_400_000_000 };

export type TimeCalculatorValues = {
  d1: number;
  h1: number;
  m1: number;
  s1: number;
  operation: string;
  d2: number;
  h2: number;
  m2: number;
  s2: number;
};

export interface DurationParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function toSeconds(p: DurationParts): number {
  return PARTS.reduce((sum, key) => sum + p[key] * SECONDS_PER[key], 0);
}

/**
 * Splits a non-negative number of seconds into whole days, hours and minutes
 * plus the remaining seconds, rounded to the nearest millisecond first.
 */
export function splitDuration(totalSeconds: number): DurationParts {
  const ms = Math.round(totalSeconds * 1000);
  const days = Math.floor(ms / 86_400_000);
  let rest = ms - days * 86_400_000;
  const hours = Math.floor(rest / 3_600_000);
  rest -= hours * 3_600_000;
  const minutes = Math.floor(rest / 60_000);
  rest -= minutes * 60_000;
  return { days, hours, minutes, seconds: rest / 1000 };
}

/** result = first ± second, in seconds. */
export function combineDurations(first: DurationParts, second: DurationParts, operation: string): number {
  const a = toSeconds(first);
  const b = toSeconds(second);
  return operation === "subtract" ? a - b : a + b;
}

export function makeTimeCalculatorEngine(ctx: EngineContext<TimeCalculatorText>) {
  const t = ctx.text;
  const ids = { first: ["d1", "h1", "m1", "s1"], second: ["d2", "h2", "m2", "s2"] } as const;

  const fieldsFor = (which: "first" | "second"): NumberField[] =>
    PARTS.map((part, i) => ({
      id: ids[which][i],
      type: "number",
      label: t.fieldLabels[which][part],
      help: which === "first" && part === "days" ? t.partsHelp : undefined,
      defaultValue: DEFAULTS[which][part],
      min: 0,
      max: MAX[part],
    }));

  /** Plural form chosen from the exact value, so "1.5 seconds" and "1 second" both read correctly. */
  const counted = (n: number, forms: PluralForms, decimals: number) => {
    const category = new Intl.PluralRules(ctx.locale).select(n) as keyof PluralForms;
    return fill(forms[category] ?? forms.other, { n: ctx.fmt.number(n, decimals) });
  };

  const formatDuration = (seconds: number): string => {
    const parts = splitDuration(Math.abs(seconds));
    const shown = PARTS.filter((key) => parts[key] > 0);
    const text =
      shown.length === 0
        ? counted(0, t.units.seconds, 0)
        : shown.map((key) => counted(parts[key], t.units[key], key === "seconds" ? 3 : 0)).join(t.separator);
    return seconds < 0 && shown.length > 0 ? fill(t.negative, { duration: text }) : text;
  };

  const partsOf = (v: TimeCalculatorValues, which: "first" | "second"): DurationParts => {
    const [d, h, m, s] = ids[which];
    return { days: v[d], hours: v[h], minutes: v[m], seconds: v[s] };
  };

  return defineEngine<TimeCalculatorValues>({
    locale: ctx.locale,
    fields: [
      ...fieldsFor("first"),
      {
        id: "operation",
        type: "select",
        label: t.operation,
        help: t.operationHelp,
        options: (["add", "subtract"] as const).map((value) => ({ value, label: t.operations[value] })),
        defaultValue: "add",
        display: "segmented",
      },
      ...fieldsFor("second"),
    ] as never,
    compute: (values) => {
      const first = partsOf(values, "first");
      const second = partsOf(values, "second");
      const op = values.operation === "subtract" ? "subtract" : "add";
      // Rounded to the millisecond so floating-point noise never shows up in the totals.
      const total = Math.round(combineDurations(first, second, op) * 1000) / 1000;
      const notes: string[] = [];
      if (total < 0) notes.push(t.notes.negative);
      notes.push(t.notes.days);
      if (!Number.isInteger(toSeconds(first)) || !Number.isInteger(toSeconds(second))) notes.push(t.notes.rounding);
      return {
        primary: {
          label: t.result,
          value: { kind: "text", text: formatDuration(total) },
          caption: fill(t.caption, { first: formatDuration(toSeconds(first)), op: t.opSymbols[op], second: formatDuration(toSeconds(second)) }),
        },
        secondary: [
          { label: t.totalDays, value: { kind: "number", value: total / 86400, decimals: 6 } },
          { label: t.totalHours, value: { kind: "number", value: total / 3600, decimals: 4, suffix: "h" } },
          { label: t.totalMinutes, value: { kind: "number", value: total / 60, decimals: 3, suffix: "min" } },
          { label: t.totalSeconds, value: { kind: "number", value: total, decimals: 3, suffix: "s" } },
        ],
        notes,
      };
    },
  });
}

const DEFAULTS: Record<"first" | "second", DurationParts> = {
  first: { days: 0, hours: 7, minutes: 45, seconds: 0 },
  second: { days: 0, hours: 2, minutes: 30, seconds: 0 },
};

export const timeCalculatorEngine = makeTimeCalculatorEngine(englishContext(en));
