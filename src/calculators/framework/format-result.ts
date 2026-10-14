import type { ResultValue } from "./types";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/format";

export function formatResultValue(value: ResultValue, currency: string): string {
  const sign = (signed?: boolean) => (signed ? "exceptZero" : "negative");
  switch (value.kind) {
    case "currency":
      return formatCurrency(value.amount, currency, sign(value.signed));
    case "percent":
      return formatPercent(value.value, value.decimals ?? 2, sign(value.signed));
    case "number": {
      const text = formatNumber(value.value, value.decimals ?? 4, sign(value.signed));
      return value.suffix ? `${text} ${value.suffix}` : text;
    }
    case "text":
      return value.text;
  }
}
