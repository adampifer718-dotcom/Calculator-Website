import { midSentence } from "@/lib/parse";
import { fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { convertUnits, findUnit, type UnitDef } from "@/lib/math/units";

export type ConverterValues = { value: number; from: string; to: string };

/** Strings for a unit converter: unit names keyed by unit value, plus shared labels. */
export interface ConverterText {
  value: string;
  from: string;
  to: string;
  unitNames: Record<string, string>;
  /** e.g. "{value} {symbol} in {unit}" */
  primary: string;
  /** e.g. "1 {from} = {factor} {to}" */
  caption: string;
  tableCaption: string;
  tableUnit: string;
  tableValue: string;
  note: string;
}

/** Engine for a linear unit converter over one table of units. */
export function unitConverterEngine(ctx: EngineContext<ConverterText>, units: readonly UnitDef[], defaults: { value: number; from: string; to: string }) {
  const t = ctx.text;
  const s = (v: number) => ctx.fmt.significant(v, 10);
  const name = (u: UnitDef) => t.unitNames[u.value] ?? u.label;
  const options = units.map((u) => ({ value: u.value, label: `${name(u)} (${u.symbol})` }));
  return defineEngine<ConverterValues>({
    locale: ctx.locale,
    fields: [
      { id: "value", type: "number", label: t.value, defaultValue: defaults.value },
      { id: "from", type: "select", label: t.from, options, defaultValue: defaults.from },
      { id: "to", type: "select", label: t.to, options, defaultValue: defaults.to },
    ],
    compute: ({ value, from, to }) => {
      const fromUnit = findUnit(units, from);
      const toUnit = findUnit(units, to);
      const result = convertUnits(value, fromUnit, toUnit);
      return {
        primary: {
          label: fill(t.primary, { value: s(value), symbol: fromUnit.symbol, unit: midSentence(name(toUnit), ctx.locale) }),
          value: { kind: "text", text: `${s(result)} ${toUnit.symbol}` },
          caption: fill(t.caption, { from: fromUnit.symbol, factor: s(convertUnits(1, fromUnit, toUnit)), to: toUnit.symbol }),
        },
        tables: [
          {
            caption: fill(t.tableCaption, { value: s(value), symbol: fromUnit.symbol }),
            columns: [t.tableUnit, t.tableValue],
            rows: units.map((unit) => ({
              label: name(unit),
              highlight: unit.value === toUnit.value,
              cells: [{ kind: "text" as const, text: `${s(convertUnits(value, fromUnit, unit))} ${unit.symbol}` }],
            })),
          },
        ],
        notes: [t.note],
      };
    },
  });
}
