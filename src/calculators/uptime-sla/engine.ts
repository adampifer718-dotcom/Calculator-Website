import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import { listError, parseNumberList } from "@/lib/math/data";
import en, { type UptimeSlaText } from "./text/en";

export type UptimeSlaValues = {
  mode: string;
  sla: number | null;
  periodLength: number | null;
  periodUnit: string;
  downtime: number | null;
  downtimeUnit: string;
  components: string;
  topology: string;
};

export const DAY = 86400;
export const YEAR = 365 * DAY;
/** Seconds in each time unit; a month is one twelfth of a 365-day year. */
export const SECONDS = { s: 1, min: 60, h: 3600, d: DAY, w: 7 * DAY, mo: YEAR / 12, y: YEAR } as const;
export type TimeUnit = keyof typeof SECONDS;
export const PERIOD_UNITS = ["h", "d", "w", "mo", "y"] as const;
export const DOWNTIME_UNITS = ["s", "min", "h", "d"] as const;
export const TABLE_PERIODS = [
  ["day", DAY],
  ["week", 7 * DAY],
  ["month", YEAR / 12],
  ["year", YEAR],
] as const;
export const MAX_COMPONENTS = 100;

/** Allowed downtime in seconds for an availability (percent) over a period in seconds. */
export function allowedDowntime(slaPercent: number, periodSeconds: number): number {
  return ((100 - slaPercent) / 100) * periodSeconds;
}

/** "Nines" of an availability given as its unavailability U = 1 − A: −log10(U). */
export function ninesFromUnavailability(u: number): number {
  return -Math.log10(u);
}

/**
 * Combined unavailability (1 − A) of components given as availability fractions.
 * Series: 1 − Π Aᵢ (computed with log1p/expm1 for precision). Parallel: Π (1 − Aᵢ).
 */
export function combinedUnavailability(availabilities: readonly number[], topology: "serial" | "parallel"): number {
  if (topology === "parallel") return availabilities.reduce((u, a) => u * (1 - a), 1);
  if (availabilities.some((a) => a <= 0)) return 1;
  return -Math.expm1(availabilities.reduce((s, a) => s + Math.log1p(-(1 - a)), 0));
}

export function makeUptimeSlaEngine(ctx: EngineContext<UptimeSlaText>) {
  const t = ctx.text;
  const allowedMode = { field: "mode", oneOf: ["allowed"] } as const;
  const achievedMode = { field: "mode", oneOf: ["achieved"] } as const;
  const compositeMode = { field: "mode", oneOf: ["composite"] } as const;

  /** "1 d 2 h 3 min 4 s"; under a minute keeps up to two decimals of a second. */
  const duration = (seconds: number): string => {
    const d = t.duration;
    if (Math.round(seconds * 100) / 100 < 60) return fill(d.s, { n: ctx.fmt.number(seconds, seconds < 1 ? 3 : 2) });
    let rest = Math.round(seconds);
    const parts: string[] = [];
    const days = Math.floor(rest / DAY);
    rest -= days * DAY;
    const hours = Math.floor(rest / 3600);
    rest -= hours * 3600;
    const minutes = Math.floor(rest / 60);
    const secs = rest - minutes * 60;
    if (days) parts.push(fill(d.d, { n: ctx.fmt.number(days, 0) }));
    if (hours) parts.push(fill(d.h, { n: ctx.fmt.number(hours, 0) }));
    if (minutes) parts.push(fill(d.min, { n: ctx.fmt.number(minutes, 0) }));
    if (secs) parts.push(fill(d.s, { n: ctx.fmt.number(secs, 0) }));
    return parts.join(d.join);
  };
  const parseList = (text: string) => {
    const parsed = parseNumberList(text, ctx.locale);
    return parsed.ok ? parsed.values : [];
  };
  const checkList = (text: string): string | undefined => {
    const parsed = parseNumberList(text, ctx.locale);
    if (parsed.ok && parsed.values.length > MAX_COMPONENTS) return fill(t.errors.tooMany, { max: ctx.fmt.number(MAX_COMPONENTS, 0) });
    const problem = listError(parsed, t.errors, ctx.fmt.number(MAX_COMPONENTS, 0));
    if (problem || !parsed.ok) return problem;
    const bad = parsed.values.find((v) => !(v >= 0 && v <= 100));
    return bad === undefined ? undefined : fill(t.errors.outOfRange, { value: ctx.fmt.significant(bad, 10) });
  };
  const ninesItem = (u: number): ResultItem[] => (u > 0 ? [{ label: t.nines, value: { kind: "number", value: ninesFromUnavailability(u), decimals: 1 } }] : []);
  const unitOptions = (units: readonly TimeUnit[]) => units.map((value) => ({ value, label: t.timeUnits[value] }));

  return defineEngine<UptimeSlaValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "mode",
        type: "select",
        label: t.mode,
        options: (["allowed", "achieved", "composite"] as const).map((value) => ({ value, label: t.modes[value] })),
        defaultValue: "allowed",
        display: "segmented",
      },
      { id: "sla", type: "number", label: t.sla, help: t.slaHelp, defaultValue: 99.9, min: 0, minExclusive: true, max: 100, suffix: "%", visibleWhen: allowedMode },
      { id: "periodLength", type: "number", label: t.periodLength, defaultValue: 30, min: 0, minExclusive: true, max: 1e6, visibleWhen: achievedMode },
      { id: "periodUnit", type: "select", label: t.periodUnit, options: unitOptions(PERIOD_UNITS), defaultValue: "d", visibleWhen: achievedMode },
      { id: "downtime", type: "number", label: t.downtime, defaultValue: 25, min: 0, visibleWhen: achievedMode },
      { id: "downtimeUnit", type: "select", label: t.downtimeUnit, options: unitOptions(DOWNTIME_UNITS), defaultValue: "min", visibleWhen: achievedMode },
      { id: "components", type: "text", multiline: true, label: t.components, help: t.componentsHelp, defaultValue: "99.95, 99.99, 99.9", check: checkList, visibleWhen: compositeMode },
      {
        id: "topology",
        type: "select",
        label: t.topology,
        options: (["serial", "parallel"] as const).map((value) => ({ value, label: t.topologies[value] })),
        defaultValue: "serial",
        visibleWhen: compositeMode,
      },
    ],
    validate: ({ mode, periodLength, periodUnit, downtime, downtimeUnit }): FieldErrors => {
      if (mode !== "achieved" || periodLength === null || downtime === null) return {};
      const period = periodLength * SECONDS[periodUnit as TimeUnit];
      return downtime * SECONDS[downtimeUnit as TimeUnit] > period ? { downtime: t.errors.downtimeTooLong } : {};
    },
    compute: ({ mode, sla, periodLength, periodUnit, downtime, downtimeUnit, components, topology }) => {
      if (mode === "allowed") {
        const a = sla ?? 99.9;
        const u = (100 - a) / 100;
        const month = allowedDowntime(a, YEAR / 12);
        return {
          primary: { label: t.allowedMonth, value: { kind: "text", text: duration(month) }, caption: fill(t.captionAllowed, { sla: ctx.fmt.percent(a, 6) }) },
          secondary: [
            ...ninesItem(u),
            { label: t.downtimeYear, value: { kind: "text", text: duration(allowedDowntime(a, YEAR)) } },
            { label: t.downtimeYearHours, value: { kind: "number", value: allowedDowntime(a, YEAR) / 3600, decimals: 4, suffix: ctx.common.units.h } },
          ],
          tables: [
            {
              caption: t.table.caption,
              columns: [t.table.period, t.table.downtime, t.table.uptime],
              rows: TABLE_PERIODS.map(([key, seconds]) => ({
                label: t.periods[key],
                cells: [
                  { kind: "text", text: duration(allowedDowntime(a, seconds)) },
                  { kind: "text", text: duration(seconds - allowedDowntime(a, seconds)) },
                ],
                highlight: key === "month",
              })),
            },
          ],
          notes: [u === 0 ? t.notes.hundred : "", t.notes.periods].filter(Boolean),
        };
      }

      if (mode === "achieved") {
        const length = periodLength ?? 1;
        const period = length * SECONDS[periodUnit as TimeUnit];
        const down = (downtime ?? 0) * SECONDS[downtimeUnit as TimeUnit];
        const u = down / period;
        return {
          primary: {
            label: t.achievedAvailability,
            value: { kind: "percent", value: (1 - u) * 100, decimals: 6 },
            caption: fill(t.captionAchieved, { downtime: duration(down), period: duration(period) }),
          },
          secondary: [
            ...ninesItem(u),
            { label: t.downtimeFraction, value: { kind: "percent", value: u * 100, decimals: 6 } },
            { label: t.uptime, value: { kind: "text", text: duration(period - down) } },
            { label: t.equivalentMonth, value: { kind: "text", text: duration(u * (YEAR / 12)) } },
            { label: t.equivalentYear, value: { kind: "text", text: duration(u * YEAR) } },
          ],
          notes: [u === 0 ? t.notes.zero : "", t.notes.periods].filter(Boolean),
        };
      }

      const values = parseList(components).map((v) => v / 100);
      const top = topology === "parallel" ? "parallel" : "serial";
      const uSerial = combinedUnavailability(values, "serial");
      const uParallel = combinedUnavailability(values, "parallel");
      const u = top === "parallel" ? uParallel : uSerial;
      return {
        primary: {
          label: t.compositeAvailability,
          value: { kind: "percent", value: (1 - u) * 100, decimals: 6 },
          caption: fill(t.captionComposite, { count: plural(ctx, values.length, t.componentCount), topology: t.topologyCaption[top] }),
        },
        secondary: [
          ...ninesItem(u),
          { label: t.serialValue, value: { kind: "percent", value: (1 - uSerial) * 100, decimals: 6 } },
          { label: t.parallelValue, value: { kind: "percent", value: (1 - uParallel) * 100, decimals: 6 } },
          { label: t.weakest, value: { kind: "percent", value: Math.min(...values) * 100, decimals: 6 } },
          { label: t.equivalentMonth, value: { kind: "text", text: duration(u * (YEAR / 12)) } },
          { label: t.downtimeYear, value: { kind: "text", text: duration(u * YEAR) } },
        ],
        notes: [
          top === "serial" && u === 1 ? t.notes.allDown : "",
          u === 0 ? t.notes.hundred : "",
          top === "parallel" ? t.notes.parallelHelp : t.notes.serialHelp,
          t.notes.independent,
        ].filter(Boolean),
      };
    },
  });
}

export const uptimeSlaEngine = makeUptimeSlaEngine(englishContext(en));
