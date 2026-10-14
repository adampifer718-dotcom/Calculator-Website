import type { ResultValue } from "./types";
import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import { getFormatter } from "@/lib/format";

export function formatResultValue(value: ResultValue, currency: string, locale: Locale = DEFAULT_LOCALE): string {
  const fmt = getFormatter(locale);
  const sign = (signed?: boolean) => (signed ? "exceptZero" : "negative");
  switch (value.kind) {
    case "currency":
      return fmt.currency(value.amount, currency, sign(value.signed));
    case "percent":
      return fmt.percent(value.value, value.decimals ?? 2, sign(value.signed));
    case "number": {
      const text = fmt.number(value.value, value.decimals ?? 4, sign(value.signed));
      return value.suffix ? `${text} ${value.suffix}` : text;
    }
    case "text":
      return value.text;
    case "date":
      return fmt.date(value.iso, "full");
  }
}

/**
 * Text direction for a displayed result. Amounts and plain numbers are kept
 * left-to-right so symbols such as "US$" or "−" stay attached in RTL pages;
 * values with translated words follow their own direction.
 */
export function resultDir(value: ResultValue): "ltr" | "auto" {
  if (value.kind === "currency" || value.kind === "percent") return "ltr";
  if (value.kind === "number" && !value.suffix) return "ltr";
  // Fractions, scientific notation and other symbol-only text ("-1/12", "1.2 × 10³").
  if (value.kind === "text" && !/\p{L}/u.test(value.text)) return "ltr";
  return "auto";
}
