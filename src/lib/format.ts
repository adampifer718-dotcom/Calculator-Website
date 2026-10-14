/**
 * Display formatting. Values are rounded only here, never during calculation.
 * A fixed locale keeps server-rendered and client-rendered output identical.
 */

export const DISPLAY_LOCALE = "en-US";

/** USD first as the default, then alphabetical by name. */
export const CURRENCIES = [
  { code: "USD", label: "US dollar (USD)" },
  { code: "AUD", label: "Australian dollar (AUD)" },
  { code: "BRL", label: "Brazilian real (BRL)" },
  { code: "GBP", label: "British pound (GBP)" },
  { code: "CAD", label: "Canadian dollar (CAD)" },
  { code: "CNY", label: "Chinese yuan (CNY)" },
  { code: "EUR", label: "Euro (EUR)" },
  { code: "HKD", label: "Hong Kong dollar (HKD)" },
  { code: "INR", label: "Indian rupee (INR)" },
  { code: "JPY", label: "Japanese yen (JPY)" },
  { code: "MXN", label: "Mexican peso (MXN)" },
  { code: "TWD", label: "New Taiwan dollar (TWD)" },
  { code: "NZD", label: "New Zealand dollar (NZD)" },
  { code: "NOK", label: "Norwegian krone (NOK)" },
  { code: "PKR", label: "Pakistani rupee (PKR)" },
  { code: "PLN", label: "Polish złoty (PLN)" },
  { code: "SGD", label: "Singapore dollar (SGD)" },
  { code: "ZAR", label: "South African rand (ZAR)" },
  { code: "KRW", label: "South Korean won (KRW)" },
  { code: "SEK", label: "Swedish krona (SEK)" },
  { code: "CHF", label: "Swiss franc (CHF)" },
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

export function formatCurrency(
  amount: number,
  currency: string = DEFAULT_CURRENCY,
  signDisplay: SignDisplay = "negative",
  /** Override the currency's usual decimals, e.g. 0 for whole amounts. */
  decimals?: number,
): string {
  const code = isCurrencyCode(currency) ? currency : DEFAULT_CURRENCY;
  return getFormatter(`c:${code}:${signDisplay}:${decimals ?? "auto"}`, {
    style: "currency",
    currency: code,
    signDisplay,
    ...(decimals === undefined ? {} : { minimumFractionDigits: decimals, maximumFractionDigits: decimals }),
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
