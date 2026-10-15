import { englishContext, fill, plural, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { listError, parseNumberList, sum } from "@/lib/math/data";
import en, { type ResistorsText } from "./text/en";

export type ResistorsValues = { unit: string; connection: string; values: string };

export const MAX_RESISTORS = 50;
/** Largest value accepted in the chosen unit. */
export const MAX_VALUE = 1e9;

const UNITS = ["ohm", "kohm", "megohm"] as const;
type Unit = (typeof UNITS)[number];
const FACTOR: Record<Unit, number> = { ohm: 1, kohm: 1e3, megohm: 1e6 };
const SYMBOL: Record<Unit, string> = { ohm: "Ω", kohm: "kΩ", megohm: "MΩ" };

/** Series and parallel totals of resistances in ohms. */
export function combineResistors(ohms: readonly number[]) {
  const conductance = sum(ohms.map((r) => 1 / r));
  return { series: sum(ohms), parallel: 1 / conductance, conductance };
}

/** The most readable of Ω, kΩ and MΩ for a value in ohms. */
export function readableUnit(ohms: number): Unit {
  // Decide on the value as displayed (6 significant digits), so 999,999.9 Ω shows as 1 MΩ, not 1,000 kΩ.
  const shown = Number(ohms.toPrecision(6));
  if (shown >= 1e6) return "megohm";
  if (shown >= 1e3) return "kohm";
  return "ohm";
}

const CONNECTIONS = ["series", "parallel"] as const;

export function makeResistorsEngine(ctx: EngineContext<ResistorsText>) {
  const t = ctx.text;
  const f = (x: number, digits = 6) => ctx.fmt.significant(x, digits);
  const readable = (ohms: number) => {
    const unit = readableUnit(ohms);
    return `${f(ohms / FACTOR[unit])} ${SYMBOL[unit]}`;
  };
  const parse = (text: string) => parseNumberList(text, ctx.locale);
  const check = (text: string): string | undefined => {
    const parsed = parse(text);
    const problem = listError(parsed, t.errors, ctx.fmt.number(MAX_RESISTORS, 0));
    if (problem || !parsed.ok) return problem;
    if (parsed.values.length > MAX_RESISTORS) return fill(t.maxCount, { max: ctx.fmt.number(MAX_RESISTORS, 0) });
    for (const v of parsed.values) {
      if (!(v > 0)) return fill(t.notPositive, { value: f(v, 10) });
      if (v > MAX_VALUE) return fill(t.tooBig, { value: f(v, 10), max: ctx.fmt.number(MAX_VALUE, 0) });
    }
    return undefined;
  };

  return defineEngine<ResistorsValues>({
    locale: ctx.locale,
    fields: [
      { id: "unit", type: "select", label: t.unit, options: UNITS.map((value) => ({ value, label: t.unitOptions[value] })), defaultValue: "ohm" },
      {
        id: "connection",
        type: "select",
        label: t.connection,
        help: t.connectionHelp,
        display: "segmented",
        options: CONNECTIONS.map((value) => ({ value, label: t.connectionOptions[value] })),
        defaultValue: "series",
      },
      { id: "values", type: "text", multiline: true, label: t.values, help: t.valuesHelp, defaultValue: "220, 470, 1000", check },
    ],
    compute: ({ unit, connection, values }) => {
      const parsed = parse(values);
      const factor = FACTOR[unit as Unit] ?? 1;
      const ohms = (parsed.ok ? parsed.values : []).map((v) => v * factor);
      const totals = combineResistors(ohms);
      const parallelFirst = connection === "parallel";
      const seriesItem = { label: t.series, value: { kind: "text" as const, text: readable(totals.series) } };
      const parallelItem = { label: t.parallel, value: { kind: "text" as const, text: readable(totals.parallel) } };
      const main = parallelFirst ? parallelItem : seriesItem;
      const other = parallelFirst ? seriesItem : parallelItem;
      const notes = ohms.length === 1 ? [t.single] : [fill(t.parallelNote, { smallest: readable(Math.min(...ohms)) })];
      return {
        primary: {
          ...main,
          caption: fill(t.caption, { count: plural(ctx, ohms.length, t.count), connection: t.connectionWords[parallelFirst ? "parallel" : "series"] }),
        },
        secondary: [
          other,
          { label: t.seriesOhms, value: { kind: "text", text: `${f(totals.series, 12)} Ω` } },
          { label: t.parallelOhms, value: { kind: "text", text: `${f(totals.parallel, 12)} Ω` } },
          { label: t.conductance, value: { kind: "text", text: `${f(totals.conductance)} S` } },
        ],
        tables: [
          {
            caption: t.table,
            columns: [t.resistorColumn, t.ohmsColumn, t.conductanceColumn],
            rows: ohms.map((r, i) => ({
              label: fill(t.resistorLabel, { i: ctx.fmt.number(i + 1, 0) }),
              cells: [
                { kind: "text" as const, text: readable(r) },
                { kind: "text" as const, text: `${f(1 / r)} S` },
              ],
            })),
          },
        ],
        notes,
      };
    },
  });
}

export const resistorsEngine = makeResistorsEngine(englishContext(en));
