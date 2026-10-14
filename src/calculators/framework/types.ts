/* ------------------------------------------------------------------ */
/* Engine: inputs, validation and calculation (runs in the browser).   */
/* ------------------------------------------------------------------ */

export type FieldValue = number | string | null;
export type EngineValues = Record<string, FieldValue>;

/** Raw text as typed by the user, keyed by field id. */
export type RawValues = Record<string, string>;

interface BaseField<Id extends string> {
  id: Id;
  label: string;
  help?: string;
  /** Show the field only when another (select) field has one of these values. */
  visibleWhen?: { field: string; oneOf: readonly string[] };
}

export interface NumberField<Id extends string = string> extends BaseField<Id> {
  type: "number";
  defaultValue: number | null;
  /** Empty input is allowed and parsed as null. */
  optional?: boolean;
  min?: number;
  /** When true the value must be strictly greater than `min`. */
  minExclusive?: boolean;
  max?: number;
  integer?: boolean;
  /** "currency" shows the selected currency symbol. */
  prefix?: "currency" | string;
  suffix?: string;
  placeholder?: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectField<Id extends string = string> extends BaseField<Id> {
  type: "select";
  options: readonly SelectOption[];
  defaultValue: string;
  /** Render as a segmented control instead of a dropdown. */
  display?: "dropdown" | "segmented";
}

/** Free text, for inputs whose exact spelling matters (e.g. trailing zeros in significant figures). */
export interface TextField<Id extends string = string> extends BaseField<Id> {
  type: "text";
  defaultValue: string;
  placeholder?: string;
  optional?: boolean;
  /** Validates the trimmed text; return an error message or undefined. */
  check?: (text: string) => string | undefined;
}

export type Field<Id extends string = string> = NumberField<Id> | SelectField<Id> | TextField<Id>;

/** Field definition matched to the value type it produces. */
export type FieldFor<V extends EngineValues> = {
  [K in keyof V & string]: V[K] extends string ? SelectField<K> | TextField<K> : NumberField<K>;
}[keyof V & string];

export type ResultValue =
  | { kind: "currency"; amount: number; signed?: boolean }
  | { kind: "percent"; value: number; decimals?: number; signed?: boolean }
  | { kind: "number"; value: number; decimals?: number; suffix?: string; signed?: boolean }
  | { kind: "text"; text: string };

export interface ResultItem {
  label: string;
  value: ResultValue;
}

export interface ResultTable {
  caption: string;
  columns: readonly string[];
  rows: { label: string; cells: ResultValue[]; highlight?: boolean }[];
}

export interface CalculationResult {
  primary: ResultItem & { caption?: string };
  secondary?: ResultItem[];
  tables?: ResultTable[];
  /** Short, input-dependent explanations (e.g. the hours assumed). */
  notes?: string[];
}

export type FieldErrors = Partial<Record<string, string>>;

export interface CalculatorEngine<V extends EngineValues = EngineValues> {
  fields: readonly FieldFor<V>[];
  /** Field whose value is used as the currency code for formatting. */
  currencyField?: keyof V & string;
  /** Cross-field validation, run after per-field parsing succeeds. */
  validate?: (values: V) => FieldErrors;
  compute: (values: V) => CalculationResult;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyEngine = CalculatorEngine<any>;

/** Helper that keeps per-calculator value types while erasing them for the registry. */
export function defineEngine<V extends EngineValues>(engine: CalculatorEngine<V>): CalculatorEngine<V> {
  return engine;
}

/* ------------------------------------------------------------------ */
/* Content: metadata and page copy (rendered on the server).           */
/* ------------------------------------------------------------------ */

export type CategorySlug =
  | "salary-and-pay"
  | "finance-and-investing"
  | "math"
  | "statistics"
  | "construction"
  | "everyday-life"
  | "health";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export interface Formula {
  title: string;
  expression: string;
  explanation: string;
}

export interface WorkedExample {
  title: string;
  /** Values passed to the engine; the page renders the computed result. */
  inputs: EngineValues;
  steps: string[];
  /** Expected primary result, verified by unit tests: a number, or the formatted text for text results. */
  expectedPrimary: number | string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface CalculatorDefinition {
  slug: string;
  title: string;
  /** Short label for cards and navigation. */
  shortTitle: string;
  category: CategorySlug;
  /** One-sentence summary for cards and search. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  /** Extra search terms. */
  keywords: readonly string[];
  /** Lower ranks appear first among popular tools. */
  popularRank?: number;
  intro: readonly string[];
  howToUse: readonly string[];
  formulas: readonly Formula[];
  examples: readonly WorkedExample[];
  assumptions: readonly string[];
  faqs: readonly Faq[];
  related: readonly string[];
  /** ISO date (YYYY-MM-DD) the page content was last updated. */
  updated: string;
  /** Used on the server for worked examples; the interactive form is registered in widgets.tsx. */
  engine: AnyEngine;
}
