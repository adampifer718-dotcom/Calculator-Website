import type {
  AnyEngine,
  CalculationResult,
  EngineValues,
  Field,
  FieldErrors,
  NumberField,
  RawValues,
} from "./types";
import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import { getFormatter } from "@/lib/format";
import { exampleNumber, formatInputValue, parseLocaleNumber } from "@/lib/parse";
import { commonText, fill } from "./i18n";

/** Largest magnitude accepted by number inputs, to keep results readable and precise. */
export const MAX_INPUT_MAGNITUDE = 1e12;

/**
 * Parses user-typed numbers in English format. Accepts thousands separators
 * ("52,000"), surrounding whitespace and a leading currency symbol. Returns
 * null for empty input and NaN for anything that is not a number. See
 * parseLocaleNumber for other locales.
 */
export function parseNumberInput(raw: string, locale: Locale = DEFAULT_LOCALE): number | null {
  return parseLocaleNumber(raw, locale);
}

export function isFieldVisible(field: Field, raw: RawValues): boolean {
  if (!field.visibleWhen) return true;
  return field.visibleWhen.oneOf.includes(raw[field.visibleWhen.field] ?? "");
}

function labelVars(field: Field, locale: Locale) {
  return { label: field.label, labelLower: locale === "de" ? field.label : field.label.toLocaleLowerCase(locale) };
}

function validateNumber(field: NumberField, value: number | null, locale: Locale): string | undefined {
  const m = commonText(locale).validation;
  const fmt = getFormatter(locale);
  const bound = (b: number) => fmt.number(b, 4) + (field.suffix ? (field.suffix === "%" ? "%" : ` ${field.suffix}`) : "");
  if (value === null) return field.optional ? undefined : fill(m.required, labelVars(field, locale));
  if (Number.isNaN(value)) return fill(m.invalidNumber, { example: exampleNumber(locale) });
  if (Math.abs(value) > MAX_INPUT_MAGNITUDE) return m.tooLarge;
  if (field.integer && !Number.isInteger(value)) return m.wholeNumber;
  if (field.min !== undefined) {
    if (field.minExclusive && value <= field.min) return fill(m.greaterThan, { bound: bound(field.min) });
    if (!field.minExclusive && value < field.min) return fill(m.atLeast, { bound: bound(field.min) });
  }
  if (field.max !== undefined && value > field.max) return fill(m.atMost, { bound: bound(field.max) });
  return undefined;
}

export function defaultRawValues(engine: AnyEngine): RawValues {
  const locale = engine.locale ?? DEFAULT_LOCALE;
  const raw: RawValues = {};
  for (const field of engine.fields as readonly Field[]) {
    const value = field.defaultValue;
    raw[field.id] = value === null ? "" : typeof value === "number" ? formatInputValue(value, locale) : String(value);
  }
  return raw;
}

/** Builds raw input text from typed values, e.g. for worked examples. */
export function rawFromValues(engine: AnyEngine, values: EngineValues): RawValues {
  const locale = engine.locale ?? DEFAULT_LOCALE;
  const raw = defaultRawValues(engine);
  for (const [key, value] of Object.entries(values)) {
    raw[key] = value === null ? "" : typeof value === "number" ? formatInputValue(value, locale) : String(value);
  }
  return raw;
}

export type Evaluation =
  | { ok: true; values: EngineValues; result: CalculationResult }
  | { ok: false; errors: FieldErrors };

/** Parses, validates and computes. Pure and deterministic. */
export function evaluate(engine: AnyEngine, raw: RawValues): Evaluation {
  const locale = engine.locale ?? DEFAULT_LOCALE;
  const m = commonText(locale).validation;
  const errors: FieldErrors = {};
  const values: EngineValues = {};

  for (const field of engine.fields as readonly Field[]) {
    const visible = isFieldVisible(field, raw);
    const text = raw[field.id] ?? "";
    if (field.type === "select") {
      const valid = field.options.some((o) => o.value === text);
      if (!valid) errors[field.id] = fill(m.choose, labelVars(field, locale));
      values[field.id] = valid ? text : field.defaultValue;
      continue;
    }
    if (!visible) {
      values[field.id] = null;
      continue;
    }
    if (field.type === "text") {
      const trimmed = text.trim();
      if (trimmed === "") {
        if (!field.optional) errors[field.id] = fill(m.required, labelVars(field, locale));
      } else {
        const error = field.check?.(trimmed);
        if (error) errors[field.id] = error;
      }
      values[field.id] = trimmed;
      continue;
    }
    const parsed = parseNumberInput(text, locale);
    const error = validateNumber(field, parsed, locale);
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
    return { ok: false, errors: { [FORM_ERROR_KEY]: m.notFinite } };
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
