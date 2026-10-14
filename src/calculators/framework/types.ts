import type { Locale } from "@/i18n/config";
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
  /** Render a multi-line text area, e.g. for lists of numbers or recipe lines. */
  multiline?: boolean;
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
  /** Locale used for input parsing, validation messages and result formatting. Defaults to English. */
  locale?: Locale;
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

export const CATEGORY_SLUGS = [
  "biology",
  "chemistry",
  "construction",
  "conversion",
  "ecology",
  "everyday-life",
  "finance",
  "food",
  "health",
  "math",
  "physics",
  "sports",
  "statistics",
  "other",
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export const COLLECTION_SLUGS = [
  "business",
  "accounting-finance",
  "hr-payroll",
  "marketing-ecommerce",
  "real-estate",
  "construction-engineering",
  "education-research",
  "healthcare",
  "agriculture-gardening",
  "food-hospitality",
  "manufacturing-operations",
  "software-data",
  "environment-energy",
  "fitness-sports",
  "personal-finance",
] as const;

/** Industry collection: a cross-cutting grouping. A calculator can belong to several. */
export type CollectionSlug = (typeof COLLECTION_SLUGS)[number];

export interface Collection {
  slug: CollectionSlug;
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

/** Lifecycle of a calculator. Only "published" calculators appear on public pages. */
export type PublicationStatus = "planned" | "researching" | "implementing" | "testing" | "published";

/** Topics that should be checked by a qualified professional. */
export type ReviewArea = "medical" | "financial" | "tax" | "engineering" | "safety";

export interface SourceReference {
  title: string;
  publisher: string;
  url?: string;
  /** What the source was used to verify. */
  usedFor: string;
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
  /** Stable internal identifier; never changes even if the slug does. */
  id: string;
  /** URL segment: /calculators/<slug>. Each calculator has exactly one canonical page. */
  slug: string;
  status: PublicationStatus;
  title: string;
  /** Short label for cards and navigation. */
  shortTitle: string;
  /** Primary category: sets the breadcrumb and the category page that owns the tool. */
  category: CategorySlug;
  /** Industry collections the calculator is also listed in (no duplicate pages). */
  collections: readonly CollectionSlug[];
  /** One-sentence summary for cards and search. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  /** Extra search terms. */
  keywords: readonly string[];
  /** Lower ranks appear first among popular tools (editorial until usage analytics exist). */
  popularRank?: number;
  /** Shown in the homepage "Featured" section. */
  featured?: boolean;
  /** ISO date the calculator was first published, for "Recently added". */
  addedOn: string;
  /** References used to verify formulas, constants or ranges. Required for review-flagged tools. */
  sources: readonly SourceReference[];
  /** Set when the topic needs checking by a qualified professional before relying on it. */
  expertReview?: { area: ReviewArea; status: "pending" | "completed" };
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
