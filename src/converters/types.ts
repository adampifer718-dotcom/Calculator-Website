/**
 * Unit converter types.
 *
 * Unit data (factors, offsets, formulas) is client-safe and contains no prose;
 * page content (titles, explanations, unit names) lives in ./content and is
 * translated per language. A converter is published in a language only when
 * its content, including every unit name, exists in that language.
 */

/** Unit converter groups shown on the directory page. */
export const CONVERTER_GROUPS = ["common", "engineering", "heat", "fluids", "light", "electricity", "magnetism", "radiology", "other"] as const;
export type ConverterGroup = (typeof CONVERTER_GROUPS)[number];

/** Measurement system, used to group units in the selectors. */
export type UnitSystem = "si" | "metric" | "us" | "imperial" | "other";

/** Values of a converter's extra parameters (for example a propagation speed or screen resolution). */
export type Params = Record<string, number>;

export interface UnitSpec {
  /** Stable id, unique within its converter (used in URLs and translations). */
  id: string;
  /** Symbol shown next to numbers; never translated. */
  symbol: string;
  /**
   * Size of one unit in the converter's base unit: base = value × factor + offset.
   * Omit when toBase/fromBase are given.
   */
  factor?: number;
  /** Additive offset for affine scales (temperature): base = value × factor + offset. */
  offset?: number;
  /** Explicit formula for non-linear units (reciprocal or logarithmic scales). */
  toBase?: (value: number, params: Params) => number;
  fromBase?: (base: number, params: Params) => number;
  /**
   * Physical dimension when a converter mixes incompatible quantities (for
   * example sound levels and sound pressures). Units with different dimensions
   * are never converted into each other. Defaults to the converter's dimension.
   */
  dimension?: string;
  system?: UnitSystem;
  /** Smallest valid input in this unit (inclusive unless minExclusive), e.g. absolute zero. */
  min?: number;
  minExclusive?: boolean;
}

export interface ParamSpec {
  id: string;
  /** Default value; a translated label comes from the converter content (paramLabels). */
  defaultValue: number;
  /** Unit symbol shown after the parameter input. */
  symbol: string;
  min?: number;
  minExclusive?: boolean;
  /** Preset values offered next to the input, with content keys for their labels. */
  presets?: { key: string; value: number }[];
}

/** A conversion with an independently known answer; used in tests and as worked examples. */
export interface KnownValue {
  value: number;
  from: string;
  to: string;
  expected: number;
  /** Relative tolerance; defaults to 1e-12. */
  tolerance?: number;
  params?: Params;
}

interface SpecBase {
  /** Stable id, never changes. */
  id: string;
  /** URL segment: /unit-converters/<slug>. */
  slug: string;
  group: ConverterGroup;
  /** Related converter ids. */
  related: readonly string[];
  /**
   * When an existing calculator page already provides this converter, its
   * calculator slug. The directory links there and no duplicate page is built.
   */
  calculatorSlug?: string;
}

export interface LinearSpec extends SpecBase {
  kind: "linear";
  /** Name of the quantity's dimension, e.g. "pressure". */
  dimension: string;
  /** Id of the unit with factor 1. */
  baseUnit: string;
  units: readonly UnitSpec[];
  defaultFrom: string;
  defaultTo: string;
  defaultValue: number;
  /** Popular unit pairs [from, to] shown as shortcuts. */
  popularPairs: readonly (readonly [string, string])[];
  params?: readonly ParamSpec[];
  /** Whether negative values are meaningful (temperature, angles); default false. */
  allowNegative?: boolean;
  known: readonly KnownValue[];
}

/** Currency: the user supplies the exchange rate; no rates are built in. */
export interface CurrencySpec extends SpecBase {
  kind: "currency";
}

/** Text case conversion. */
export interface TextCaseSpec extends SpecBase {
  kind: "text-case";
}

/** Number bases (binary, octal, decimal, hexadecimal and others). */
export interface NumberBaseSpec extends SpecBase {
  kind: "number-base";
}

/** Text-based conversion tools with their own widget and logic in ../tools.ts. */
export const TOOL_IDS = ["roman", "unix-time", "color", "morse", "text-binary", "coordinates", "base64", "url", "tire", "fraction", "paper-size", "word-count", "html-entities", "hash", "unicode", "time-zone", "json"] as const;
export type ToolId = (typeof TOOL_IDS)[number];

export interface ToolSpec extends SpecBase {
  kind: "tool";
  tool: ToolId;
}

export type ConverterSpec = LinearSpec | CurrencySpec | TextCaseSpec | NumberBaseSpec | ToolSpec;

export interface ConverterSource {
  title: string;
  publisher: string;
  url?: string;
  usedFor: string;
}

/** Page content in one language. English content also carries sources (not translated). */
export interface ConverterContent {
  title: string;
  shortTitle: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  keywords: readonly string[];
  intro: readonly string[];
  formula: { expression: string; explanation: string };
  assumptions: readonly string[];
  faqs: readonly { question: string; answer: string }[];
  /** Display name of every unit, keyed by unit id (linear converters). */
  units: Readonly<Record<string, string>>;
  /** Labels of parameters and parameter presets, keyed by id (linear converters with params). */
  paramLabels?: Readonly<Record<string, string>>;
  /** Translation of each source's usedFor, in source order. */
  sourcesUsedFor: readonly string[];
}

export interface ConverterMeta {
  sources: readonly ConverterSource[];
  /**
   * How factors were checked. "exact" = defined exactly by SI or international
   * agreement and checked arithmetically; "standard" = taken from a standards
   * table (cited) and checked against an independent computation.
   */
  verification: "exact" | "standard" | "user-supplied";
  /** ISO date of the last content update. */
  updated: string;
}
