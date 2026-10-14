/**
 * Display formatting. Values are rounded only here, never during calculation.
 * Every formatter is bound to an explicit locale, so server-rendered and
 * browser-rendered output are identical. Changing the language changes how
 * numbers look, never their value or currency.
 */
import { CURRENCY_NAMES } from "./currency-names";
import { DEFAULT_LOCALE, LOCALE_INFO, isLocale, type Locale } from "@/i18n/config";

/** USD first as the default, then alphabetical by code. Names come from Intl.DisplayNames per locale. */
export const CURRENCY_CODES = [
  "USD",
  "AUD",
  "BRL",
  "GBP",
  "CAD",
  "CNY",
  "EUR",
  "HKD",
  "INR",
  "JPY",
  "MXN",
  "TWD",
  "NZD",
  "NOK",
  "PKR",
  "PLN",
  "SGD",
  "ZAR",
  "KRW",
  "SEK",
  "CHF",
] as const;

export type CurrencyCode = (typeof CURRENCY_CODES)[number];

export const DEFAULT_CURRENCY: CurrencyCode = "USD";

export function isCurrencyCode(value: unknown): value is CurrencyCode {
  return typeof value === "string" && (CURRENCY_CODES as readonly string[]).includes(value);
}

type SignDisplay = "negative" | "exceptZero";

const SUPERSCRIPT: Record<string, string> = { "-": "⁻", "+": "", "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹" };

export interface Formatter {
  locale: Locale;
  currency(amount: number, currency?: string, signDisplay?: SignDisplay, decimals?: number): string;
  number(value: number, maxDecimals?: number, signDisplay?: SignDisplay): string;
  /** Formats a value in percent units: 12.5 → "12.5%". */
  percent(value: number, maxDecimals?: number, signDisplay?: SignDisplay): string;
  /** Up to `significant` digits, switching to "1.23 × 10⁻⁸" style for very large or small values. */
  significant(value: number, significant?: number): string;
  /** Currency symbol for an input prefix, e.g. "$" or "€". */
  currencySymbol(currency: string): string;
  /** Localized currency name with its code, e.g. "Euro (EUR)". */
  currencyLabel(currency: string): string;
  /**
   * Rewrites number text built in universal notation ("123,000", "1.20 × 10³",
   * "250.") with the locale's separators, keeping every digit, so significant
   * trailing zeros survive: "123.000" and "1,20 × 10³" in German.
   */
  numberText(text: string): string;
  /** An ISO calendar date in the locale, e.g. "14 October 2026" ("long") or with the weekday ("full"). */
  date(iso: string, style?: "long" | "full"): string;
}

const formatterCache = new Map<string, Formatter>();

export function getFormatter(locale: Locale | string = DEFAULT_LOCALE): Formatter {
  const key = isLocale(locale) ? locale : DEFAULT_LOCALE;
  let formatter = formatterCache.get(key);
  if (!formatter) {
    formatter = createFormatter(key);
    formatterCache.set(key, formatter);
  }
  return formatter;
}

function createFormatter(locale: Locale): Formatter {
  const tag = LOCALE_INFO[locale].intl;
  const cache = new Map<string, Intl.NumberFormat>();
  const nf = (key: string, options: Intl.NumberFormatOptions) => {
    let format = cache.get(key);
    if (!format) {
      format = new Intl.NumberFormat(tag, options);
      cache.set(key, format);
    }
    return format;
  };
  const dateCache = new Map<string, Intl.DateTimeFormat>();
  const code = (currency: string) => (isCurrencyCode(currency) ? currency : DEFAULT_CURRENCY);

  return {
    locale,
    currency(amount, currency = DEFAULT_CURRENCY, signDisplay = "negative", decimals) {
      const c = code(currency);
      return nf(`c:${c}:${signDisplay}:${decimals ?? "auto"}`, {
        style: "currency",
        currency: c,
        signDisplay,
        ...(decimals === undefined ? {} : { minimumFractionDigits: decimals, maximumFractionDigits: decimals }),
      }).format(amount);
    },
    number(value, maxDecimals = 4, signDisplay = "negative") {
      return nf(`n:${maxDecimals}:${signDisplay}`, { maximumFractionDigits: maxDecimals, signDisplay }).format(value);
    },
    percent(value, maxDecimals = 2, signDisplay = "negative") {
      // Intl percent style multiplies by 100; dividing first keeps the value exact for display.
      return nf(`p:${maxDecimals}:${signDisplay}`, { style: "percent", maximumFractionDigits: maxDecimals, signDisplay }).format(value / 100);
    },
    significant(value, significant = 10) {
      if (value === 0) return nf("n:0:negative", { maximumFractionDigits: 0 }).format(0);
      const abs = Math.abs(value);
      if (abs >= 1e15 || abs < 1e-6) {
        const [mantissa, exponent] = value.toExponential(significant - 1).split("e");
        const formatted = nf(`sigm:${significant}`, { maximumSignificantDigits: significant }).format(Number(mantissa));
        return `${formatted} × 10${exponent.split("").map((ch) => SUPERSCRIPT[ch] ?? ch).join("")}`;
      }
      return nf(`sig:${significant}`, { maximumSignificantDigits: significant }).format(value);
    },
    currencySymbol(currency) {
      const part = nf(`s:${code(currency)}`, { style: "currency", currency: code(currency) })
        .formatToParts(0)
        .find((p) => p.type === "currency");
      return part?.value ?? code(currency);
    },
    date(iso, style = "long") {
      const [year, month, day] = iso.split("-").map(Number);
      const date = new Date(0);
      date.setUTCFullYear(year, month - 1, day);
      let format = dateCache.get(style);
      if (!format) {
        format = new Intl.DateTimeFormat(tag, { dateStyle: style, timeZone: "UTC" });
        dateCache.set(style, format);
      }
      return format.format(date);
    },
    numberText(text) {
      const parts = nf("n:4:negative", { maximumFractionDigits: 4 }).formatToParts(1234567.5);
      const group = parts.find((p) => p.type === "group")?.value ?? ",";
      const decimal = parts.find((p) => p.type === "decimal")?.value ?? ".";
      if (group === "," && decimal === ".") return text;
      return text.replace(/[.,]/g, (ch) => (ch === "," ? group : decimal));
    },
    currencyLabel(currency) {
      const c = code(currency);
      return `${CURRENCY_NAMES[locale][c] ?? c} (${c})`;
    },
  };
}

/* English helpers kept for existing callers and tests. */
const en = () => getFormatter("en");

export function formatCurrency(amount: number, currency: string = DEFAULT_CURRENCY, signDisplay: SignDisplay = "negative", decimals?: number): string {
  return en().currency(amount, currency, signDisplay, decimals);
}

export function formatNumber(value: number, maxDecimals = 4, signDisplay: SignDisplay = "negative"): string {
  return en().number(value, maxDecimals, signDisplay);
}

export function formatPercent(value: number, maxDecimals = 2, signDisplay: SignDisplay = "negative"): string {
  return en().percent(value, maxDecimals, signDisplay);
}

export function currencySymbol(currency: string): string {
  return en().currencySymbol(currency);
}

export function formatSignificant(value: number, significant = 10): string {
  return en().significant(value, significant);
}
