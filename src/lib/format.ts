/**
 * Display formatting. Values are rounded only here, never during calculation.
 * A fixed locale keeps server-rendered and client-rendered output identical.
 */

export const DISPLAY_LOCALE = "en-US";

export const CURRENCIES = [
  { code: "USD", label: "US dollar (USD)" },
  { code: "EUR", label: "Euro (EUR)" },
  { code: "GBP", label: "British pound (GBP)" },
  { code: "CAD", label: "Canadian dollar (CAD)" },
  { code: "AUD", label: "Australian dollar (AUD)" },
  { code: "NZD", label: "New Zealand dollar (NZD)" },
  { code: "INR", label: "Indian rupee (INR)" },
  { code: "JPY", label: "Japanese yen (JPY)" },
  { code: "CHF", label: "Swiss franc (CHF)" },
  { code: "SGD", label: "Singapore dollar (SGD)" },
  { code: "ZAR", label: "South African rand (ZAR)" },
] as const;

export type CurrencyCode = (typeof CURRENCIES)[number]["code"];

export const DEFAULT_CURRENCY: CurrencyCode = "USD";

export function isCurrencyCode(value: unknown): value is CurrencyCode {
  return typeof value === "string" && CURRENCIES.some((c) => c.code === value);
}

const formatterCache = new Map<string, Intl.NumberFormat>();

function getFormatter(key: string, options: Intl.NumberFormatOptions): Intl.NumberFormat {
  let formatter = formatterCache.get(key);
  if (!formatter) {
    formatter = new Intl.NumberFormat(DISPLAY_LOCALE, options);
    formatterCache.set(key, formatter);
  }
  return formatter;
}

type SignDisplay = "negative" | "exceptZero";

export function formatCurrency(amount: number, currency: string = DEFAULT_CURRENCY, signDisplay: SignDisplay = "negative"): string {
  const code = isCurrencyCode(currency) ? currency : DEFAULT_CURRENCY;
  return getFormatter(`c:${code}:${signDisplay}`, {
    style: "currency",
    currency: code,
    signDisplay,
  }).format(amount);
}

export function formatNumber(value: number, maxDecimals = 4, signDisplay: SignDisplay = "negative"): string {
  return getFormatter(`n:${maxDecimals}:${signDisplay}`, {
    maximumFractionDigits: maxDecimals,
    signDisplay,
  }).format(value);
}

/** Formats a value in percent units: 12.5 → "12.5%". */
export function formatPercent(value: number, maxDecimals = 2, signDisplay: SignDisplay = "negative"): string {
  return `${formatNumber(value, maxDecimals, signDisplay)}%`;
}

/** Currency symbol for an input prefix, e.g. "$" or "€". */
export function currencySymbol(currency: string): string {
  const code = isCurrencyCode(currency) ? currency : DEFAULT_CURRENCY;
  const part = getFormatter(`s:${code}`, { style: "currency", currency: code })
    .formatToParts(0)
    .find((p) => p.type === "currency");
  return part?.value ?? code;
}
