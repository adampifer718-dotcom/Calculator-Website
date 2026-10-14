import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { formatSignificant } from "@/lib/format";
import { TEMPERATURE_UNITS, convertTemperature, toKelvin, type TemperatureUnit } from "@/lib/math/units";

export type TemperatureValues = { value: number; from: string; to: string };

const unit = (value: string): TemperatureUnit => (TEMPERATURE_UNITS.some((u) => u.value === value) ? (value as TemperatureUnit) : "C");
const symbol = (u: TemperatureUnit) => TEMPERATURE_UNITS.find((t) => t.value === u)!.symbol;

export const temperatureConverterEngine = defineEngine<TemperatureValues>({
  fields: [
    { id: "value", type: "number", label: "Temperature", defaultValue: 100 },
    { id: "from", type: "select", label: "From", options: TEMPERATURE_UNITS, defaultValue: "C" },
    { id: "to", type: "select", label: "To", options: TEMPERATURE_UNITS, defaultValue: "F" },
  ],
  validate: ({ value, from }): FieldErrors => (toKelvin(value, unit(from)) < 0 ? { value: "This is below absolute zero (0 K, −273.15 °C, −459.67 °F)." } : {}),
  compute: ({ value, from, to }) => {
    const f = unit(from);
    const t = unit(to);
    const result = convertTemperature(value, f, t);
    return {
      primary: { label: "Converted temperature", value: { kind: "text", text: `${formatSignificant(result, 10)} ${symbol(t)}` }, caption: `${formatSignificant(value, 10)} ${symbol(f)}` },
      tables: [
        {
          caption: "On every scale",
          columns: ["Scale", "Temperature"],
          rows: TEMPERATURE_UNITS.map((u) => ({ label: u.label, highlight: u.value === t, cells: [{ kind: "text" as const, text: `${formatSignificant(convertTemperature(value, f, u.value), 10)} ${u.symbol}` }] })),
        },
      ],
    };
  },
});
