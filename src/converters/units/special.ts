import type { CurrencySpec, NumberBaseSpec, TextCaseSpec, ToolSpec } from "../types";

/** Currency: amounts are multiplied by an exchange rate the visitor enters. No rates are built in or fetched. */
export const currency: CurrencySpec = {
  id: "currency",
  slug: "currency-converter",
  group: "common",
  kind: "currency",
  related: ["numbers", "prefixes"],
};

export const caseConverter: TextCaseSpec = {
  id: "case",
  slug: "case-converter",
  group: "common",
  kind: "text-case",
  related: ["numbers", "typography"],
};

export const numbers: NumberBaseSpec = {
  id: "numbers",
  slug: "number-base-converter",
  group: "common",
  kind: "number-base",
  related: ["data-storage", "prefixes", "case"],
};

export const roman: ToolSpec = { id: "roman", slug: "roman-numeral-converter", group: "other", kind: "tool", tool: "roman", related: ["numbers", "unix-time", "morse"] };

export const unixTime: ToolSpec = { id: "unix-time", slug: "unix-timestamp-converter", group: "other", kind: "tool", tool: "unix-time", related: ["time", "numbers", "data-storage"] };

export const color: ToolSpec = { id: "color", slug: "color-converter", group: "other", kind: "tool", tool: "color", related: ["numbers", "typography", "image-resolution"] };

export const morse: ToolSpec = { id: "morse", slug: "morse-code-translator", group: "other", kind: "tool", tool: "morse", related: ["text-binary", "case", "roman"] };

export const textBinary: ToolSpec = { id: "text-binary", slug: "text-to-binary-converter", group: "other", kind: "tool", tool: "text-binary", related: ["numbers", "morse", "data-storage"] };

export const coordinates: ToolSpec = { id: "coordinates", slug: "coordinate-converter", group: "other", kind: "tool", tool: "coordinates", related: ["angle", "astronomical", "length"] };

export const base64: ToolSpec = { id: "base64", slug: "base64-converter", group: "other", kind: "tool", tool: "base64", related: ["url", "text-binary", "numbers"] };

export const url: ToolSpec = { id: "url", slug: "url-encoder", group: "other", kind: "tool", tool: "url", related: ["base64", "text-binary", "case"] };

export const tire: ToolSpec = { id: "tire", slug: "tire-size-converter", group: "other", kind: "tool", tool: "tire", related: ["length", "speed", "fraction"] };

export const fraction: ToolSpec = { id: "fraction", slug: "decimal-to-fraction-converter", group: "other", kind: "tool", tool: "fraction", related: ["length", "parts-per", "numbers"] };

export const paperSize: ToolSpec = { id: "paper-size", slug: "paper-size-converter", group: "other", kind: "tool", tool: "paper-size", related: ["paper-weight", "typography", "image-resolution"] };

/** The text-based tools, in directory order. */
export const toolConverters: readonly ToolSpec[] = [roman, unixTime, color, morse, textBinary, coordinates, base64, url, tire, fraction, paperSize];
