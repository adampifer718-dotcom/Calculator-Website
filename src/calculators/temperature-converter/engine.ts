import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { TEMPERATURE_UNITS, convertTemperature, toKelvin, type TemperatureUnit } from "@/lib/math/units";
import en, { type TemperatureConverterText } from "./text/en";

export type TemperatureValues = { value: number; from: string; to: string };

const unit = (value: string): TemperatureUnit => (TEMPERATURE_UNITS.some((u) => u.value === value) ? (value as TemperatureUnit) : "C");
const symbol = (u: TemperatureUnit) => TEMPERATURE_UNITS.find((t) => t.value === u)!.symbol;

export function makeTemperatureConverterEngine(ctx: EngineContext<TemperatureConverterText>) {
  const t = ctx.text;
  const s = (v: number) => ctx.fmt.significant(v, 10);
  const options = TEMPERATURE_UNITS.map((u) => ({ value: u.value, label: t.scales[u.value] }));
  return defineEngine<TemperatureValues>({
    locale: ctx.locale,
    fields: [
      { id: "value", type: "number", label: t.value, defaultValue: 100 },
      { id: "from", type: "select", label: t.from, options, defaultValue: "C" },
      { id: "to", type: "select", label: t.to, options, defaultValue: "F" },
    ],
    validate: ({ value, from }): FieldErrors => (toKelvin(value, unit(from)) < 0 ? { value: t.belowZero } : {}),
    compute: ({ value, from, to }) => {
      const f = unit(from);
      const target = unit(to);
      const result = convertTemperature(value, f, target);
      return {
        primary: { label: t.primary, value: { kind: "text", text: `${s(result)} ${symbol(target)}` }, caption: `${s(value)} ${symbol(f)}` },
        tables: [
          {
            caption: t.tableCaption,
            columns: [t.tableScale, t.tableValue],
            rows: TEMPERATURE_UNITS.map((u) => ({
              label: t.scales[u.value],
              highlight: u.value === target,
              cells: [{ kind: "text" as const, text: `${s(convertTemperature(value, f, u.value))} ${u.symbol}` }],
            })),
          },
        ],
      };
    },
  });
}

export const temperatureConverterEngine = makeTemperatureConverterEngine(englishContext(en));
