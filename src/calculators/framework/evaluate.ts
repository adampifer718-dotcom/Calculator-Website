import type {
  AnyEngine,
  CalculationResult,
  EngineValues,
  Field,
  FieldErrors,
  NumberField,
  RawValues,
} from "./types";
import { formatNumber } from "@/lib/format";

/** Largest magnitude accepted by number inputs, to keep results readable and precise. */
export const MAX_INPUT_MAGNITUDE = 1e12;

const NUMBER_PATTERN = /^[-+]?(\d+\.?\d*|\.\d+)$/;

/**
 * Parses user-typed numbers. Accepts thousands separators ("52,000"),
 * surrounding whitespace and a leading currency symbol. Returns null for
 * empty input and NaN for anything that is not a number.
 */
export function parseNumberInput(raw: string): number | null {
  const cleaned = raw.trim().replace(/^[$€£¥₹]/, "").replace(/[,\s_]/g, "");
  if (cleaned === "") return null;
  if (!NUMBER_PATTERN.test(cleaned)) return Number.NaN;
  return Number(cleaned);
}

export function isFieldVisible(field: Field, raw: RawValues): boolean {
  if (!field.visibleWhen) return true;
  return field.visibleWhen.oneOf.includes(raw[field.visibleWhen.field] ?? "");
}

function describeBound(field: NumberField, bound: number): string {
  return formatNumber(bound, 4) + (field.suffix ? ` ${field.suffix}` : "");
}

function validateNumber(field: NumberField, value: number | null): string | undefined {
  if (value === null) return field.optional ? undefined : `Enter ${field.label.toLowerCase()}.`;
  if (Number.isNaN(value)) return "Enter a valid number, for example 1250.50.";
  if (Math.abs(value) > MAX_INPUT_MAGNITUDE) return "Enter a smaller number.";
  if (field.integer && !Number.isInteger(value)) return "Enter a whole number.";
  if (field.min !== undefined) {
    if (field.minExclusive && value <= field.min) return `Must be greater than ${describeBound(field, field.min)}.`;
    if (!field.minExclusive && value < field.min) return `Must be at least ${describeBound(field, field.min)}.`;
  }
  if (field.max !== undefined && value > field.max) return `Must be no more than ${describeBound(field, field.max)}.`;
  return undefined;
}

export function defaultRawValues(engine: AnyEngine): RawValues {
  const raw: RawValues = {};
  for (const field of engine.fields as readonly Field[]) {
    raw[field.id] = field.defaultValue === null ? "" : String(field.defaultValue);
  }
  return raw;
}

/** Builds raw input text from typed values, e.g. for worked examples. */
export function rawFromValues(engine: AnyEngine, values: EngineValues): RawValues {
  const raw = defaultRawValues(engine);
  for (const [key, value] of Object.entries(values)) {
    raw[key] = value === null ? "" : String(value);
  }
  return raw;
}

export type Evaluation =
  | { ok: true; values: EngineValues; result: CalculationResult }
  | { ok: false; errors: FieldErrors };

/** Parses, validates and computes. Pure and deterministic. */
export function evaluate(engine: AnyEngine, raw: RawValues): Evaluation {
  const errors: FieldErrors = {};
  const values: EngineValues = {};

  for (const field of engine.fields as readonly Field[]) {
    const visible = isFieldVisible(field, raw);
    const text = raw[field.id] ?? "";
    if (field.type === "select") {
      const valid = field.options.some((o) => o.value === text);
      if (!valid) errors[field.id] = `Choose a ${field.label.toLowerCase()}.`;
      values[field.id] = valid ? text : field.defaultValue;
      continue;
    }
    if (!visible) {
      values[field.id] = null;
      continue;
    }
    const parsed = parseNumberInput(text);
    const error = validateNumber(field, parsed);
    if (error) errors[field.id] = error;
    values[field.id] = parsed;
  }

  if (Object.keys(errors).length === 0 && engine.validate) {
    for (const [key, message] of Object.entries(engine.validate(values))) {
      if (message) errors[key] = message;
    }
  }
  if (Object.keys(errors).length > 0) return { ok: false, errors };

  const result = engine.compute(values);
  if (!resultIsFinite(result)) {
    return { ok: false, errors: { [FORM_ERROR_KEY]: "These inputs do not produce a finite result. Check the values and try again." } };
  }
  return { ok: true, values, result };
}

/** Key used for errors that do not belong to a single field. */
export const FORM_ERROR_KEY = "_form";

function valueIsFinite(value: CalculationResult["primary"]["value"]): boolean {
  switch (value.kind) {
    case "currency":
      return Number.isFinite(value.amount);
    case "percent":
    case "number":
      return Number.isFinite(value.value);
    case "text":
      return true;
  }
}

function resultIsFinite(result: CalculationResult): boolean {
  const values = [
    result.primary.value,
    ...(result.secondary ?? []).map((item) => item.value),
    ...(result.tables ?? []).flatMap((table) => table.rows.flatMap((row) => row.cells)),
  ];
  return values.every(valueIsFinite);
}
