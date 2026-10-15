import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import en, { type DownloadTimeText } from "./text/en";

export type DownloadTimeValues = { size: number; sizeUnit: string; speed: number; speedUnit: string; overhead: number | null };

/** Bytes per unit: decimal (SI) prefixes and binary (IEC) prefixes. */
export const SIZE_UNITS = {
  B: 1,
  kB: 1e3,
  MB: 1e6,
  GB: 1e9,
  TB: 1e12,
  KiB: 2 ** 10,
  MiB: 2 ** 20,
  GiB: 2 ** 30,
  TiB: 2 ** 40,
} as const;
export type SizeUnit = keyof typeof SIZE_UNITS;

/** Bits per second per unit. */
export const SPEED_UNITS = { kbps: 1e3, Mbps: 1e6, Gbps: 1e9, MBps: 8e6 } as const;
export type SpeedUnit = keyof typeof SPEED_UNITS;
const SPEED_SYMBOL: Record<SpeedUnit, string> = { kbps: "kbit/s", Mbps: "Mbit/s", Gbps: "Gbit/s", MBps: "MB/s" };

/** Seconds to transfer `size` at `speed`, after removing `overheadPercent` of the speed. */
export function downloadSeconds(size: number, sizeUnit: SizeUnit, speed: number, speedUnit: SpeedUnit, overheadPercent = 0): number {
  const bits = size * SIZE_UNITS[sizeUnit] * 8;
  const bitsPerSecond = speed * SPEED_UNITS[speedUnit] * (1 - overheadPercent / 100);
  return bits / bitsPerSecond;
}

/** Splits whole seconds into days, hours, minutes and seconds. */
export function splitSeconds(total: number): { days: number; hours: number; minutes: number; seconds: number } {
  const days = Math.floor(total / 86400);
  const rest = total - days * 86400;
  const hours = Math.floor(rest / 3600);
  const minutes = Math.floor((rest - hours * 3600) / 60);
  return { days, hours, minutes, seconds: rest - hours * 3600 - minutes * 60 };
}

export function makeDownloadTimeEngine(ctx: EngineContext<DownloadTimeText>) {
  const t = ctx.text;
  const sizeUnits = Object.keys(SIZE_UNITS) as SizeUnit[];
  const speedUnits = Object.keys(SPEED_UNITS) as SpeedUnit[];

  const formatDuration = (seconds: number): string => {
    if (seconds < 10) return fill(t.secondsDecimal, { n: seconds < 0.01 ? ctx.fmt.significant(seconds, 3) : ctx.fmt.number(seconds, 2) });
    // Beyond about 274 years the hours and minutes no longer matter, so only whole days are shown.
    if (seconds >= 1e10) return plural(ctx, Math.round(seconds / 86400), t.units.days);
    const parts = splitSeconds(Math.round(seconds));
    return (["days", "hours", "minutes", "seconds"] as const)
      .filter((key) => parts[key] > 0)
      .map((key) => plural(ctx, parts[key], t.units[key]))
      .join(t.separator);
  };

  return defineEngine<DownloadTimeValues>({
    locale: ctx.locale,
    fields: [
      { id: "size", type: "number", label: t.size, defaultValue: 4.7, min: 0, minExclusive: true },
      { id: "sizeUnit", type: "select", label: t.sizeUnit, options: sizeUnits.map((value) => ({ value, label: t.sizeUnits[value] })), defaultValue: "GB" },
      { id: "speed", type: "number", label: t.speed, defaultValue: 50, min: 0, minExclusive: true },
      { id: "speedUnit", type: "select", label: t.speedUnit, options: speedUnits.map((value) => ({ value, label: t.speedUnits[value] })), defaultValue: "Mbps" },
      { id: "overhead", type: "number", label: t.overhead, help: t.overheadHelp, defaultValue: 0, optional: true, min: 0, max: 90, suffix: "%" },
    ],
    compute: ({ size, sizeUnit, speed, speedUnit, overhead }) => {
      const sUnit = sizeUnit as SizeUnit;
      const vUnit = speedUnit as SpeedUnit;
      const loss = overhead ?? 0;
      const seconds = downloadSeconds(size, sUnit, speed, vUnit, loss);
      const effectiveMbps = (speed * SPEED_UNITS[vUnit] * (1 - loss / 100)) / 1e6;
      return {
        primary: {
          label: t.time,
          value: { kind: "text", text: formatDuration(seconds) },
          caption: fill(t.caption, { size: `${ctx.fmt.number(size, 4)} ${sUnit}`, speed: `${ctx.fmt.number(speed, 4)} ${SPEED_SYMBOL[vUnit]}` }),
        },
        secondary: [
          { label: t.totalSeconds, value: { kind: "number", value: seconds, decimals: 3, suffix: "s" } },
          { label: t.effectiveSpeed, value: { kind: "number", value: effectiveMbps, decimals: 4, suffix: "Mbit/s" } },
          { label: t.sizeInBits, value: { kind: "number", value: (size * SIZE_UNITS[sUnit] * 8) / 1e6, decimals: 4, suffix: "Mbit" } },
        ],
        notes: [t.notes.bits, t.notes.prefixes, t.notes.real],
      };
    },
  });
}

export const downloadTimeEngine = makeDownloadTimeEngine(englishContext(en));
