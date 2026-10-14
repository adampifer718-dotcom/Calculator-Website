import { isFieldVisible, rawFromValues } from "./evaluate";
import type { AnyEngine, EngineValues, Field } from "./types";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { DEFAULT_CURRENCY, getFormatter } from "@/lib/format";

/** Human-readable list of the inputs used for a worked example, in the engine's locale. */
export function describeInputs(engine: AnyEngine, values: EngineValues): { label: string; value: string }[] {
  const fmt = getFormatter(engine.locale ?? DEFAULT_LOCALE);
  const raw = rawFromValues(engine, values);
  const currency = (engine.currencyField && (values[engine.currencyField] as string)) || DEFAULT_CURRENCY;
  return (engine.fields as readonly Field[])
    .filter((field) => field.id !== engine.currencyField && isFieldVisible(field, raw))
    .flatMap((field) => {
      const value = values[field.id];
      if (field.type === "select") {
        if (field.display === "segmented") return [];
        return [{ label: field.label, value: field.options.find((o) => o.value === value)?.label ?? String(value) }];
      }
      if (field.type === "text") return typeof value === "string" ? [{ label: field.label, value }] : [];
      if (field.type === "date") return typeof value === "string" && value ? [{ label: field.label, value: fmt.date(value) }] : [];
      if (typeof value !== "number") return [];
      let text = field.prefix === "currency" ? fmt.currency(value, currency) : fmt.number(value, 6);
      if (field.suffix) text = field.suffix === "%" ? fmt.percent(value, 6) : `${text} ${field.suffix}`;
      return [{ label: field.label, value: text }];
    });
}
