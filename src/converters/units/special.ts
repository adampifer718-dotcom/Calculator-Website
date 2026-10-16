import type { CurrencySpec, NumberBaseSpec, TextCaseSpec } from "../types";

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
