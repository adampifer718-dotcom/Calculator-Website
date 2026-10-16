import type { LinearSpec, Params, UnitSpec } from "./types";

export type ConversionError = "invalid" | "incompatible" | "belowMin" | "notFinite" | "badParam";

export type Conversion = { ok: true; value: number } | { ok: false; error: ConversionError };

export function findUnitSpec(spec: LinearSpec, id: string): UnitSpec | undefined {
  return spec.units.find((u) => u.id === id);
}

export function unitDimension(spec: LinearSpec, unit: UnitSpec): string {
  return unit.dimension ?? spec.dimension;
}

/** Whether two units measure the same quantity and can be converted into each other. */
export function compatible(spec: LinearSpec, a: UnitSpec, b: UnitSpec): boolean {
  return unitDimension(spec, a) === unitDimension(spec, b);
}

/** Parameter values with defaults filled in. */
export function paramsWithDefaults(spec: LinearSpec, params: Params = {}): Params {
  const out: Params = {};
  for (const p of spec.params ?? []) out[p.id] = params[p.id] ?? p.defaultValue;
  return out;
}

function toBase(unit: UnitSpec, value: number, params: Params): number {
  if (unit.toBase) return unit.toBase(value, params);
  return value * (unit.factor ?? 1) + (unit.offset ?? 0);
}

function fromBase(unit: UnitSpec, base: number, params: Params): number {
  if (unit.fromBase) return unit.fromBase(base, params);
  return (base - (unit.offset ?? 0)) / (unit.factor ?? 1);
}

/** Checks a value against the unit's lower bound and the converter's sign rule. */
export function inputError(spec: LinearSpec, unit: UnitSpec, value: number): ConversionError | undefined {
  if (!Number.isFinite(value)) return "invalid";
  if (unit.min !== undefined) {
    if (unit.minExclusive ? value <= unit.min : value < unit.min) return "belowMin";
    return undefined;
  }
  if (!spec.allowNegative && value < 0) return "belowMin";
  return undefined;
}

/**
 * Converts `value` from one unit to another of the same converter.
 * Units of different dimensions are never converted. Same-unit conversions
 * return the input unchanged, so no rounding is introduced.
 */
export function convert(spec: LinearSpec, value: number, fromId: string, toId: string, params: Params = {}): Conversion {
  const from = findUnitSpec(spec, fromId);
  const to = findUnitSpec(spec, toId);
  if (!from || !to) return { ok: false, error: "invalid" };
  if (!compatible(spec, from, to)) return { ok: false, error: "incompatible" };
  const error = inputError(spec, from, value);
  if (error) return { ok: false, error };
  const p = paramsWithDefaults(spec, params);
  for (const param of spec.params ?? []) {
    const v = p[param.id];
    if (!Number.isFinite(v) || (param.min !== undefined && (param.minExclusive ? v <= param.min : v < param.min))) return { ok: false, error: "badParam" };
  }
  if (from.id === to.id) return { ok: true, value };
  const result = fromBase(to, toBase(from, value, p), p);
  if (!Number.isFinite(result)) return { ok: false, error: "notFinite" };
  // Avoid "-0" in results.
  return { ok: true, value: result === 0 ? 0 : result };
}

/** Units that can be converted from `unitId` (same dimension), in definition order. */
export function compatibleUnits(spec: LinearSpec, unitId: string): UnitSpec[] {
  const from = findUnitSpec(spec, unitId);
  return from ? spec.units.filter((u) => compatible(spec, from, u)) : [];
}
