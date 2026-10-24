import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import en, { type BatteryLifeText } from "./text/en";

export type BatteryLifeValues = { capacity: number; capacityUnit: string; voltage: number | null; load: number; loadUnit: string; depth: number };

export const CAPACITY_UNITS = ["mAh", "Ah", "Wh"] as const;
export const LOAD_UNITS = ["mA", "A", "W"] as const;
export type CapacityUnit = (typeof CAPACITY_UNITS)[number];
export type LoadUnit = (typeof LOAD_UNITS)[number];

const isEnergy = (unit: string) => unit === "Wh";
const isPower = (unit: string) => unit === "W";

/** True when the capacity and the load are on different bases (charge vs energy), so a voltage is needed. */
export function needsVoltage(capacityUnit: string, loadUnit: string): boolean {
  return isEnergy(capacityUnit) !== isPower(loadUnit);
}

/**
 * Runtime in hours = usable capacity ÷ load:
 * Ah ÷ A, or Wh ÷ W, converting with Wh = Ah × V (and W = A × V) when the units differ.
 */
export function runtimeHours(capacity: number, capacityUnit: string, load: number, loadUnit: string, depthPercent: number, voltage: number | null): number {
  const fraction = depthPercent / 100;
  const ah = capacityUnit === "mAh" ? capacity / 1000 : capacity;
  const amps = loadUnit === "mA" ? load / 1000 : load;
  if (!needsVoltage(capacityUnit, loadUnit)) return isEnergy(capacityUnit) ? (capacity / load) * fraction : (ah / amps) * fraction;
  const v = voltage ?? Number.NaN;
  // Charge capacity with a power load: Wh = Ah × V. Energy capacity with a current load: W = A × V.
  return isEnergy(capacityUnit) ? (capacity / (amps * v)) * fraction : ((ah * v) / load) * fraction;
}

export function makeBatteryLifeEngine(ctx: EngineContext<BatteryLifeText>) {
  const t = ctx.text;
  const formatHm = (hours: number) => {
    const totalMinutes = Math.round(hours * 60);
    const h = Math.floor(totalMinutes / 60);
    const mm = String(totalMinutes - h * 60).padStart(2, "0");
    return fill(t.runtimeText, { h: ctx.fmt.number(h, 0), mm });
  };

  return defineEngine<BatteryLifeValues>({
    locale: ctx.locale,
    fields: [
      { id: "capacity", type: "number", label: t.capacity, defaultValue: 3000, min: 0, minExclusive: true },
      { id: "capacityUnit", type: "select", label: t.capacityUnit, options: CAPACITY_UNITS.map((value) => ({ value, label: t.capacityUnits[value] })), defaultValue: "mAh" },
      { id: "voltage", type: "number", label: t.voltage, help: t.voltageHelp, defaultValue: 3.7, optional: true, min: 0, minExclusive: true, max: 1000, suffix: "V" },
      { id: "load", type: "number", label: t.load, defaultValue: 150, min: 0, minExclusive: true },
      { id: "loadUnit", type: "select", label: t.loadUnit, options: LOAD_UNITS.map((value) => ({ value, label: t.loadUnits[value] })), defaultValue: "mA" },
      { id: "depth", type: "number", label: t.depth, help: t.depthHelp, defaultValue: 80, min: 0, minExclusive: true, max: 100, suffix: "%" },
    ],
    validate: ({ capacityUnit, loadUnit, voltage }): FieldErrors => (needsVoltage(capacityUnit, loadUnit) && voltage === null ? { voltage: t.errors.voltageNeeded } : {}),
    compute: ({ capacity, capacityUnit, voltage, load, loadUnit, depth }) => {
      const hours = runtimeHours(capacity, capacityUnit, load, loadUnit, depth, voltage);
      const ah = capacityUnit === "mAh" ? capacity / 1000 : capacity;
      const amps = loadUnit === "mA" ? load / 1000 : load;
      const ratedWh = isEnergy(capacityUnit) ? capacity : voltage !== null ? ah * voltage : null;
      const secondary: ResultItem[] = [
        { label: t.hours, value: { kind: "number", value: hours, decimals: 2, suffix: ctx.common.units.h } },
        { label: t.days, value: { kind: "number", value: hours / 24, decimals: 2 } },
      ];
      if (ratedWh !== null) {
        secondary.push({ label: t.energy, value: { kind: "number", value: ratedWh, decimals: 2, suffix: "Wh" } });
        secondary.push({ label: t.usableEnergy, value: { kind: "number", value: (ratedWh * depth) / 100, decimals: 2, suffix: "Wh" } });
      }
      if (voltage !== null) {
        if (isPower(loadUnit)) secondary.push({ label: t.current, value: { kind: "number", value: (load / voltage) * 1000, decimals: 1, suffix: "mA" } });
        else secondary.push({ label: t.power, value: { kind: "number", value: amps * voltage, decimals: 3, suffix: "W" } });
      }
      return {
        primary: {
          label: t.runtime,
          value: { kind: "text", text: formatHm(hours) },
          caption: fill(t.caption, {
            capacity: `${ctx.fmt.number(capacity, 4)} ${capacityUnit}`,
            load: `${ctx.fmt.number(load, 4)} ${loadUnit}`,
            depth: ctx.fmt.percent(depth, 2),
          }),
        },
        secondary,
        notes: [t.notes.constant, needsVoltage(capacityUnit, loadUnit) ? t.notes.conversion : "", t.notes.peukert].filter(Boolean),
      };
    },
  });
}

export const batteryLifeEngine = makeBatteryLifeEngine(englishContext(en));
