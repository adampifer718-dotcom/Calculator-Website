import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { molarMass, parseFormula, type FormulaError } from "@/lib/math/chem-formula";
import en, { type MolarMassText } from "./text/en";

export type MolarMassValues = { formula: string };

export function makeMolarMassEngine(ctx: EngineContext<MolarMassText>) {
  const t = ctx.text;
  const message = (error: FormulaError) =>
    fill(t.errors[error.code], { token: error.token ?? "", position: ctx.fmt.number(error.position ?? 1, 0) });
  return defineEngine<MolarMassValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "formula",
        type: "text",
        label: t.formula,
        help: t.formulaHelp,
        placeholder: t.formulaPlaceholder,
        defaultValue: "C6H12O6",
        check: (text) => {
          const parsed = parseFormula(text);
          return parsed.ok ? undefined : message(parsed.error);
        },
      },
    ],
    compute: ({ formula }) => {
      const parsed = parseFormula(formula);
      // The field check has already rejected invalid formulas.
      const counts = parsed.ok ? parsed.counts : new Map<string, number>();
      const { total, elements } = molarMass(counts);
      return {
        primary: { label: t.molarMass, value: { kind: "number", value: total, decimals: 3, suffix: "g/mol" }, caption: fill(t.caption, { formula: formula.replace(/\s+/g, "") }) },
        secondary: [
          { label: t.totalAtoms, value: { kind: "number", value: parsed.ok ? parsed.totalAtoms : 0, decimals: 0 } },
          { label: t.elements, value: { kind: "number", value: elements.length, decimals: 0 } },
          { label: t.massOfMole, value: { kind: "number", value: total / 1000, decimals: 6, suffix: "kg/mol" } },
        ],
        tables: [
          {
            caption: t.tableCaption,
            columns: [t.columns.element, t.columns.count, t.columns.weight, t.columns.mass, t.columns.percent],
            rows: elements.map((e) => ({
              label: e.symbol,
              cells: [
                { kind: "number", value: e.count, decimals: 0 },
                { kind: "number", value: e.atomicWeight, decimals: 5 },
                { kind: "number", value: e.mass, decimals: 3 },
                { kind: "percent", value: e.percent, decimals: 3 },
              ],
            })),
          },
        ],
        notes: [t.note],
      };
    },
  });
}

export const molarMassEngine = makeMolarMassEngine(englishContext(en));
