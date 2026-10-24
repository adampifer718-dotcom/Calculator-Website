import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type ResultItem } from "@/calculators/framework/types";
import { molarMass, parseFormula, type FormulaError } from "@/lib/math/chem-formula";
import en, { type PercentYieldText } from "./text/en";

/** Grams per unit. */
export const MASS_UNITS = { mg: 0.001, g: 1, kg: 1000 } as const;
type MassUnit = keyof typeof MASS_UNITS;
const UNITS = Object.keys(MASS_UNITS) as MassUnit[];

const MODES = ["direct", "stoichiometry"] as const;
const SOURCES = ["formula", "molarMass"] as const;

export type PercentYieldValues = {
  mode: string;
  unit: string;
  actual: number | null;
  theoretical: number | null;
  moles: number | null;
  reactantCoef: number | null;
  productCoef: number | null;
  massSource: string;
  formula: string;
  molarMass: number | null;
};

/** Percent yield = actual ÷ theoretical × 100 (both in the same unit). */
export const percentYield = (actual: number, theoretical: number) => (actual / theoretical) * 100;

/** Theoretical yield in grams from moles of limiting reactant, coefficients and the product's molar mass. */
export const theoreticalGrams = (moles: number, reactantCoef: number, productCoef: number, molar: number) => moles * (productCoef / reactantCoef) * molar;

export function makePercentYieldEngine(ctx: EngineContext<PercentYieldText>) {
  const t = ctx.text;
  const positive = { min: 0, minExclusive: true } as const;
  const stoich = { field: "mode", oneOf: ["stoichiometry"] } as const;
  const formulaMessage = (error: FormulaError) => fill(t.formulaErrors[error.code], { token: error.token ?? "", position: ctx.fmt.number(error.position ?? 1, 0) });
  const formulaMass = (text: string) => {
    const parsed = parseFormula(text);
    return parsed.ok ? molarMass(parsed.counts).total : Number.NaN;
  };

  return defineEngine<PercentYieldValues>({
    locale: ctx.locale,
    fields: [
      { id: "mode", type: "select", label: t.mode, options: MODES.map((value) => ({ value, label: t.modes[value] })), defaultValue: "direct", display: "segmented" },
      { id: "unit", type: "select", label: t.unit, options: UNITS.map((value) => ({ value, label: value })), defaultValue: "g", display: "segmented" },
      { id: "actual", type: "number", label: t.actual, help: t.actualHelp, defaultValue: 4.25, min: 0 },
      { id: "theoretical", type: "number", label: t.theoretical, help: t.theoreticalHelp, defaultValue: 5.6, ...positive, visibleWhen: { field: "mode", oneOf: ["direct"] } },
      { id: "moles", type: "number", label: t.moles, help: t.molesHelp, defaultValue: 0.02, ...positive, suffix: "mol", visibleWhen: stoich },
      { id: "reactantCoef", type: "number", label: t.reactantCoef, help: t.coefHelp, defaultValue: 1, ...positive, max: 1000, visibleWhen: stoich },
      { id: "productCoef", type: "number", label: t.productCoef, help: t.coefHelp, defaultValue: 1, ...positive, max: 1000, visibleWhen: stoich },
      { id: "massSource", type: "select", label: t.massSource, options: SOURCES.map((value) => ({ value, label: t.massSources[value] })), defaultValue: "formula", display: "segmented", visibleWhen: stoich },
      {
        id: "formula",
        type: "text",
        label: t.formula,
        help: t.formulaHelp,
        placeholder: "C9H8O4",
        defaultValue: "C9H8O4",
        check: (text) => {
          const parsed = parseFormula(text);
          return parsed.ok ? undefined : formulaMessage(parsed.error);
        },
        visibleWhen: [stoich, { field: "massSource", oneOf: ["formula"] }],
      },
      { id: "molarMass", type: "number", label: t.molarMass, defaultValue: 180.159, ...positive, max: 1e7, suffix: "g/mol", visibleWhen: [stoich, { field: "massSource", oneOf: ["molarMass"] }] },
    ],
    compute: (v) => {
      const unit: MassUnit = (UNITS as string[]).includes(v.unit) ? (v.unit as MassUnit) : "g";
      const actual = v.actual ?? 0;
      const secondary: ResultItem[] = [];
      let theoretical: number;
      if (v.mode === "stoichiometry") {
        const molar = v.massSource === "molarMass" ? (v.molarMass ?? 0) : formulaMass(v.formula ?? "");
        const productMoles = (v.moles ?? 0) * ((v.productCoef ?? 1) / (v.reactantCoef ?? 1));
        theoretical = theoreticalGrams(v.moles ?? 0, v.reactantCoef ?? 1, v.productCoef ?? 1, molar) / MASS_UNITS[unit];
        secondary.push(
          { label: t.theoreticalResult, value: { kind: "number", value: theoretical, decimals: 4, suffix: unit } },
          { label: t.productMoles, value: { kind: "number", value: productMoles, decimals: 6, suffix: "mol" } },
          { label: t.molarMassUsed, value: { kind: "number", value: molar, decimals: 3, suffix: "g/mol" } },
        );
      } else {
        theoretical = v.theoretical ?? 1;
        secondary.push({ label: t.theoreticalResult, value: { kind: "number", value: theoretical, decimals: 4, suffix: unit } });
      }
      const pct = percentYield(actual, theoretical);
      const loss = theoretical - actual;
      secondary.push(
        { label: loss >= 0 ? t.loss : t.excess, value: { kind: "number", value: Math.abs(loss), decimals: 4, suffix: unit } },
        { label: loss >= 0 ? t.lossPercent : t.excessPercent, value: { kind: "percent", value: Math.abs(100 - pct), decimals: 2 } },
      );
      const notes: string[] = [];
      if (pct > 100) notes.push(t.notes.over100);
      if (actual === 0) notes.push(t.notes.zero);
      notes.push(t.notes.general);
      return {
        primary: { label: t.result, value: { kind: "percent", value: pct, decimals: 2 }, caption: t.caption },
        secondary,
        notes,
      };
    },
  });
}

export const percentYieldEngine = makePercentYieldEngine(englishContext(en));
