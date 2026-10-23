import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import { currencyField } from "@/calculators/shared/pay";
import en, { type OvertimePayText } from "./text/en";

export type OvertimePayValues = {
  currency: string;
  rate: number;
  hours: number;
  threshold: number;
  multiplier: number;
  doubleHours: number | null;
  doubleMultiplier: number;
};

/** Hours in a week. */
export const HOURS_PER_WEEK = 168;

export interface OvertimeInputs {
  rate: number;
  hours: number;
  threshold: number;
  multiplier: number;
  doubleHours: number;
  doubleMultiplier: number;
}

/**
 * Weekly gross pay: hours up to the threshold at the regular rate, hours above it at
 * rate × multiplier, except the double-time hours (a part of the overtime hours) at
 * rate × double-time multiplier.
 */
export function overtimePay(p: OvertimeInputs) {
  const regularHours = Math.min(p.hours, p.threshold);
  const overtimeHours = Math.max(0, p.hours - p.threshold);
  const timeAndHalfHours = overtimeHours - p.doubleHours;
  const regular = regularHours * p.rate;
  const overtime = timeAndHalfHours * p.rate * p.multiplier;
  const double = p.doubleHours * p.rate * p.doubleMultiplier;
  const total = regular + overtime + double;
  return { regularHours, overtimeHours, regular, overtime, double, total, effective: p.hours > 0 ? total / p.hours : 0 };
}

/** Tolerance for comparing hours typed with decimals. */
const EPS = 1e-9;

export function makeOvertimePayEngine(ctx: EngineContext<OvertimePayText>) {
  const t = ctx.text;
  const h = ctx.common.units.h;
  const read = (v: OvertimePayValues): OvertimeInputs => ({
    rate: v.rate,
    hours: v.hours,
    threshold: v.threshold,
    multiplier: v.multiplier,
    doubleHours: v.doubleHours ?? 0,
    doubleMultiplier: v.doubleMultiplier,
  });
  return defineEngine<OvertimePayValues>({
    locale: ctx.locale,
    currencyField: "currency",
    fields: [
      currencyField(ctx),
      { id: "rate", type: "number", label: t.rate, help: t.rateHelp, defaultValue: 22, min: 0, minExclusive: true, max: 100000, prefix: "currency" },
      { id: "hours", type: "number", label: t.hours, defaultValue: 46, min: 0, max: HOURS_PER_WEEK, suffix: h },
      { id: "threshold", type: "number", label: t.threshold, help: t.thresholdHelp, defaultValue: 40, min: 0, max: HOURS_PER_WEEK, suffix: h },
      { id: "multiplier", type: "number", label: t.multiplier, help: t.multiplierHelp, defaultValue: 1.5, min: 1, max: 5, suffix: "×" },
      { id: "doubleHours", type: "number", label: t.doubleHours, help: t.doubleHoursHelp, defaultValue: 0, optional: true, min: 0, max: HOURS_PER_WEEK, suffix: h },
      { id: "doubleMultiplier", type: "number", label: t.doubleMultiplier, defaultValue: 2, min: 1, max: 5, suffix: "×" },
    ],
    validate: (v): FieldErrors => {
      const p = read(v);
      const overtimeHours = Math.max(0, p.hours - p.threshold);
      return p.doubleHours > overtimeHours + EPS ? { doubleHours: fill(t.errors.doubleExceeds, { overtime: ctx.fmt.number(overtimeHours, 2) }) } : {};
    },
    compute: (v) => {
      const p = read(v);
      const r = overtimePay(p);
      const hours = (value: number) => ({ kind: "number" as const, value, decimals: 2, suffix: h });
      const secondary: ResultItem[] = [
        { label: t.regularPay, value: { kind: "currency", amount: r.regular } },
        { label: t.overtimePay, value: { kind: "currency", amount: r.overtime } },
      ];
      if (p.doubleHours > 0) secondary.push({ label: t.doublePay, value: { kind: "currency", amount: r.double } });
      secondary.push(
        { label: t.regularHours, value: hours(r.regularHours) },
        { label: t.overtimeHours, value: hours(r.overtimeHours) },
        { label: t.overtimeRate, value: { kind: "currency", amount: p.rate * p.multiplier } },
      );
      if (p.doubleHours > 0) secondary.push({ label: t.doubleRate, value: { kind: "currency", amount: p.rate * p.doubleMultiplier } });
      if (p.hours > 0) secondary.push({ label: t.effectiveRate, value: { kind: "currency", amount: r.effective } });
      const notes = r.overtimeHours > 0 ? [t.notes.gross, t.notes.rules] : [t.notes.noOvertime, t.notes.gross, t.notes.rules];
      return {
        primary: {
          label: t.grossPay,
          value: { kind: "currency", amount: r.total },
          caption: fill(t.caption, {
            hours: ctx.fmt.number(p.hours, 2),
            rate: ctx.fmt.currency(p.rate, v.currency),
            threshold: ctx.fmt.number(p.threshold, 2),
            multiplier: ctx.fmt.number(p.multiplier, 2),
          }),
        },
        secondary,
        notes,
      };
    },
  });
}

export const overtimePayEngine = makeOvertimePayEngine(englishContext(en));
