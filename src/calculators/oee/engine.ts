import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type OeeText } from "./text/en";

export type OeeValues = {
  planned: number;
  stopTime: number;
  speedMode: string;
  idealCycle: number | null;
  idealRate: number | null;
  totalCount: number;
  rejects: number;
};

export interface OeeResult {
  /** Fractions (1 = 100%). */
  availability: number;
  performance: number;
  quality: number;
  oee: number;
  runMinutes: number;
  goodCount: number;
  /** Minutes. */
  productive: number;
  performanceLoss: number;
  qualityLoss: number;
}

/**
 * OEE = availability × performance × quality, with
 * availability = run time ÷ planned time (run = planned − stops),
 * performance = ideal cycle time × total count ÷ run time,
 * quality = good count ÷ total count (good = total − rejects).
 */
export function oeeOf(plannedMin: number, stopMin: number, idealCycleSeconds: number, totalCount: number, rejects: number): OeeResult {
  const runMinutes = plannedMin - stopMin;
  const idealMin = idealCycleSeconds / 60;
  const goodCount = totalCount - rejects;
  const availability = runMinutes / plannedMin;
  const performance = (idealMin * totalCount) / runMinutes;
  const quality = goodCount / totalCount;
  return {
    availability,
    performance,
    quality,
    oee: availability * performance * quality,
    runMinutes,
    goodCount,
    productive: goodCount * idealMin,
    performanceLoss: runMinutes - totalCount * idealMin,
    qualityLoss: rejects * idealMin,
  };
}

export function makeOeeEngine(ctx: EngineContext<OeeText>) {
  const t = ctx.text;
  const pct = (fraction: number) => ctx.fmt.percent(fraction * 100, 2);

  return defineEngine<OeeValues>({
    locale: ctx.locale,
    fields: [
      { id: "planned", type: "number", label: t.planned, help: t.plannedHelp, defaultValue: 450, min: 0, minExclusive: true, max: 1e7, suffix: t.minutes },
      { id: "stopTime", type: "number", label: t.stopTime, help: t.stopTimeHelp, defaultValue: 54, min: 0, suffix: t.minutes },
      {
        id: "speedMode",
        type: "select",
        label: t.speedMode,
        options: (["cycle", "rate"] as const).map((value) => ({ value, label: t.speedModes[value] })),
        defaultValue: "cycle",
        display: "segmented",
      },
      { id: "idealCycle", type: "number", label: t.idealCycle, help: t.idealCycleHelp, defaultValue: 1.5, min: 0, minExclusive: true, max: 1e7, suffix: t.perPiece, visibleWhen: { field: "speedMode", oneOf: ["cycle"] } },
      { id: "idealRate", type: "number", label: t.idealRate, help: t.idealRateHelp, defaultValue: 40, min: 0, minExclusive: true, max: 1e7, suffix: t.perMinute, visibleWhen: { field: "speedMode", oneOf: ["rate"] } },
      { id: "totalCount", type: "number", label: t.totalCount, defaultValue: 13200, min: 1, integer: true, suffix: t.pieces },
      { id: "rejects", type: "number", label: t.rejects, help: t.rejectsHelp, defaultValue: 330, min: 0, integer: true, suffix: t.pieces },
    ],
    validate: ({ planned, stopTime, totalCount, rejects }): FieldErrors => {
      const errors: FieldErrors = {};
      if (stopTime >= planned) errors.stopTime = t.errors.stopTooLong;
      if (rejects > totalCount) errors.rejects = t.errors.rejectsTooMany;
      return errors;
    },
    compute: ({ planned, stopTime, speedMode, idealCycle, idealRate, totalCount, rejects }) => {
      const cycle = speedMode === "rate" ? 60 / (idealRate ?? 1) : (idealCycle ?? 1);
      const r = oeeOf(planned, stopTime, cycle, totalCount, rejects);
      const row = (label: string, minutes: number, highlight = false) => ({
        label,
        cells: [
          { kind: "number" as const, value: minutes, decimals: 2 },
          { kind: "percent" as const, value: (minutes / planned) * 100, decimals: 2 },
        ],
        highlight,
      });
      return {
        primary: {
          label: t.oee,
          value: { kind: "percent", value: r.oee * 100, decimals: 2 },
          caption: fill(t.caption, { a: pct(r.availability), p: pct(r.performance), q: pct(r.quality) }),
        },
        secondary: [
          { label: t.availability, value: { kind: "percent", value: r.availability * 100, decimals: 2 } },
          { label: t.performance, value: { kind: "percent", value: r.performance * 100, decimals: 2 } },
          { label: t.quality, value: { kind: "percent", value: r.quality * 100, decimals: 2 } },
          { label: t.goodCount, value: { kind: "number", value: r.goodCount, decimals: 0, suffix: t.pieces } },
          { label: t.runTime, value: { kind: "number", value: r.runMinutes, decimals: 2, suffix: t.minutes } },
          { label: t.productiveTime, value: { kind: "number", value: r.productive, decimals: 2, suffix: t.minutes } },
          { label: t.idealCycleUsed, value: { kind: "number", value: cycle, decimals: 4, suffix: t.perPiece } },
        ],
        tables: [
          {
            caption: t.table.caption,
            columns: [t.table.item, t.table.minutes, t.table.share],
            rows: [
              row(t.table.planned, planned),
              row(t.table.availabilityLoss, stopTime),
              row(t.table.performanceLoss, r.performanceLoss),
              row(t.table.qualityLoss, r.qualityLoss),
              row(t.table.productive, r.productive, true),
            ],
          },
        ],
        notes: [r.performance > 1 + 1e-12 ? t.notes.overPerformance : "", t.notes.benchmark].filter(Boolean),
      };
    },
  });
}

export const oeeEngine = makeOeeEngine(englishContext(en));
