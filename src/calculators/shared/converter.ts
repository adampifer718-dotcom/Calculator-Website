import { defineEngine } from "@/calculators/framework/types";
import { formatSignificant } from "@/lib/format";
import { convertUnits, findUnit, type UnitDef } from "@/lib/math/units";

export type ConverterValues = { value: number; from: string; to: string };

/** Engine for a linear unit converter over one table of units. */
export function unitConverterEngine(units: readonly UnitDef[], defaults: { value: number; from: string; to: string }, quantity: string) {
  const options = units.map((u) => ({ value: u.value, label: `${u.label} (${u.symbol})` }));
  return defineEngine<ConverterValues>({
    fields: [
      { id: "value", type: "number", label: "Value", defaultValue: defaults.value },
      { id: "from", type: "select", label: "From", options, defaultValue: defaults.from },
      { id: "to", type: "select", label: "To", options, defaultValue: defaults.to },
    ],
    compute: ({ value, from, to }) => {
      const fromUnit = findUnit(units, from);
      const toUnit = findUnit(units, to);
      const result = convertUnits(value, fromUnit, toUnit);
      return {
        primary: {
          label: `${formatSignificant(value, 10)} ${fromUnit.symbol} in ${toUnit.label.toLowerCase()}`,
          value: { kind: "text", text: `${formatSignificant(result, 10)} ${toUnit.symbol}` },
          caption: `1 ${fromUnit.symbol} = ${formatSignificant(convertUnits(1, fromUnit, toUnit), 10)} ${toUnit.symbol}`,
        },
        tables: [
          {
            caption: `${formatSignificant(value, 10)} ${fromUnit.symbol} in every ${quantity} unit`,
            columns: ["Unit", "Value"],
            rows: units.map((unit) => ({
              label: unit.label,
              highlight: unit.value === toUnit.value,
              cells: [{ kind: "text" as const, text: `${formatSignificant(convertUnits(value, fromUnit, unit), 10)} ${unit.symbol}` }],
            })),
          },
        ],
        notes: ["Results are shown to 10 significant digits."],
      };
    },
  });
}
