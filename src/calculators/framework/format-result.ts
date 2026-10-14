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
  }
}
