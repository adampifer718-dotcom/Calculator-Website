import { isFieldVisible, rawFromValues } from "./evaluate";
import type { AnyEngine, EngineValues, Field } from "./types";
import { DEFAULT_CURRENCY, formatCurrency, formatNumber } from "@/lib/format";

/** Human-readable list of the inputs used for a worked example. */
export function describeInputs(engine: AnyEngine, values: EngineValues): { label: string; value: string }[] {
  const raw = rawFromValues(engine, values);
  const currency = (engine.currencyField && raw[engine.currencyField]) || DEFAULT_CURRENCY;
  return (engine.fields as readonly Field[])
    .filter((field) => field.id !== engine.currencyField && isFieldVisible(field, raw))
    .flatMap((field) => {
      const value = values[field.id];
      if (field.type === "select") {
        if (field.display === "segmented") return [];
        return [{ label: field.label, value: field.options.find((o) => o.value === value)?.label ?? String(value) }];
      }
      if (field.type === "text") return typeof value === "string" ? [{ label: field.label, value }] : [];
      if (typeof value !== "number") return [];
      let text = field.prefix === "currency" ? formatCurrency(value, currency) : formatNumber(value, 6);
      if (field.suffix) text = field.suffix === "%" ? `${text}%` : `${text} ${field.suffix}`;
      return [{ label: field.label, value: text }];
    });
}
