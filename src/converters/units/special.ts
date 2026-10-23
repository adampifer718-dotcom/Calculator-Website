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

/** The text-based tools, in directory order. */
export const toolConverters: readonly ToolSpec[] = [roman, unixTime, color, morse, textBinary, coordinates];
