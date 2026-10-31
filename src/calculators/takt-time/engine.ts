import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import en, { type TaktTimeText } from "./text/en";

export type TaktTimeValues = {
  shiftHours: number;
  shiftMinutes: number;
  breaks: number;
  shifts: number;
  days: number;
  demand: number;
  workContent: number | null;
  actualCycle: number | null;
};

/** Net available minutes = (shift length − breaks) × shifts per day × days. */
export function availableMinutes(shiftMinutes: number, breaks: number, shifts: number, days: number): number {
  return (shiftMinutes - breaks) * shifts * days;
}

/** Takt time in seconds per unit = available seconds ÷ demand. */
export function taktSeconds(available: number, demand: number): number {
  return (available * 60) / demand;
}

/** Minimum operators or stations = ⌈work content ÷ takt⌉, tolerant of floating-point noise. */
export function minimumOperators(workContentSeconds: number, takt: number): number {
  const ratio = workContentSeconds / takt;
  return Math.max(1, Math.ceil(ratio - 1e-9));
}

export function makeTaktTimeEngine(ctx: EngineContext<TaktTimeText>) {
  const t = ctx.text;
  const clock = (seconds: number) => {
    const total = Math.round(seconds);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total - h * 3600) / 60);
    const ss = String(total - h * 3600 - m * 60).padStart(2, "0");
    return h > 0 ? fill(t.clockTextHours, { h: ctx.fmt.number(h, 0), mm: String(m).padStart(2, "0"), ss }) : fill(t.clockText, { m: ctx.fmt.number(m, 0), ss });
  };
  const shiftLength = (hours: number, minutes: number) => hours * 60 + minutes;

  return defineEngine<TaktTimeValues>({
    locale: ctx.locale,
    fields: [
      { id: "shiftHours", type: "number", label: t.shiftHours, defaultValue: 8, min: 0, max: 24, integer: true, suffix: ctx.common.units.h },
      { id: "shiftMinutes", type: "number", label: t.shiftMinutes, defaultValue: 0, min: 0, max: 59, integer: true, suffix: t.minutes },
      { id: "breaks", type: "number", label: t.breaks, help: t.breaksHelp, defaultValue: 50, min: 0, suffix: t.minutes },
      { id: "shifts", type: "number", label: t.shifts, defaultValue: 2, min: 1, max: 24, integer: true },
      { id: "days", type: "number", label: t.days, help: t.daysHelp, defaultValue: 1, min: 0, minExclusive: true, max: 3660 },
      { id: "demand", type: "number", label: t.demand, help: t.demandHelp, defaultValue: 645, min: 1, integer: true, suffix: t.units },
      { id: "workContent", type: "number", label: t.workContent, help: t.workContentHelp, defaultValue: 300, optional: true, min: 0, minExclusive: true, suffix: t.seconds },
      { id: "actualCycle", type: "number", label: t.actualCycle, help: t.actualCycleHelp, defaultValue: null, optional: true, min: 0, minExclusive: true, suffix: t.seconds },
    ],
    validate: ({ shiftHours, shiftMinutes, breaks, shifts }): FieldErrors => {
      const shift = shiftLength(shiftHours, shiftMinutes);
      if (shift <= 0) return { shiftHours: t.errors.noShift };
      if (shift > 24 * 60) return { shiftHours: t.errors.tooManyHours };
      if (breaks >= shift) return { breaks: t.errors.breaksTooLong };
      if (shift * shifts > 24 * 60) return { shifts: t.errors.tooManyHours };
      return {};
    },
    compute: ({ shiftHours, shiftMinutes, breaks, shifts, days, demand, workContent, actualCycle }) => {
      const perShift = shiftLength(shiftHours, shiftMinutes) - breaks;
      const available = availableMinutes(shiftLength(shiftHours, shiftMinutes), breaks, shifts, days);
      const takt = taktSeconds(available, demand);
      const secondary: ResultItem[] = [
        { label: t.taktClock, value: { kind: "text", text: clock(takt) } },
        { label: t.unitsPerHour, value: { kind: "number", value: 3600 / takt, decimals: 2 } },
        { label: t.available, value: { kind: "number", value: available, decimals: 2, suffix: t.minutes } },
        { label: t.availablePerShift, value: { kind: "number", value: perShift, decimals: 2, suffix: t.minutes } },
      ];
      const notes: string[] = [];
      if (workContent !== null) {
        const operators = minimumOperators(workContent, takt);
        secondary.push({ label: t.operators, value: { kind: "number", value: operators, decimals: 0 } });
        notes.push(fill(t.notes.operators, { ratio: ctx.fmt.number(workContent / takt, 2), operators: ctx.fmt.number(operators, 0) }));
      }
      if (actualCycle !== null) {
        const meets = actualCycle <= takt + 1e-9;
        const capacity = (available * 60) / actualCycle;
        secondary.push({ label: t.meetsTakt, value: { kind: "text", text: meets ? t.verdict.yes : t.verdict.no } });
        secondary.push({ label: t.gap, value: { kind: "number", value: actualCycle - takt, decimals: 2, suffix: t.seconds, signed: true } });
        secondary.push({ label: t.capacity, value: { kind: "number", value: Math.floor(capacity + 1e-9), decimals: 0, suffix: t.units } });
        notes.push(
          meets
            ? fill(t.notes.faster, { gap: `${ctx.fmt.number(takt - actualCycle, 2)} ${t.seconds}` })
            : fill(t.notes.slower, { capacity: plural(ctx, Math.floor(capacity + 1e-9), t.demandUnits), demand: plural(ctx, demand, t.demandUnits) }),
        );
      }
      notes.push(t.notes.plannedStops);
      return {
        primary: {
          label: t.takt,
          value: { kind: "number", value: takt, decimals: 2, suffix: t.perUnit },
          caption: fill(t.caption, { available: fill(t.minutesText, { n: ctx.fmt.number(available, 2) }), demand: plural(ctx, demand, t.demandUnits) }),
        },
        secondary,
        notes,
      };
    },
  });
}

export const taktTimeEngine = makeTaktTimeEngine(englishContext(en));
