import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type ResultItem } from "@/calculators/framework/types";
import en, { type ProteinConcentrationText } from "./text/en";

/** Molar absorption at 280 nm per residue in a folded protein in water, M⁻¹ cm⁻¹ (Pace et al. 1995). */
export const PACE_COEFFICIENTS = { trp: 5500, tyr: 1490, cystine: 125 } as const;
/** Measured absorbance per cm above which a linearity note is shown. */
export const HIGH_ABSORBANCE = 1.5;
export const LOW_ABSORBANCE = 0.1;

/** ε₂₈₀ = 5500·nW + 1490·nY + 125·nCystine. */
export function paceEpsilon(trp: number, tyr: number, cystine: number): number {
  return PACE_COEFFICIENTS.trp * trp + PACE_COEFFICIENTS.tyr * tyr + PACE_COEFFICIENTS.cystine * cystine;
}

/** Beer–Lambert: c (M) = A ÷ (ε · l), with A already multiplied by any dilution. */
export function molarConcentration(absorbance: number, epsilon: number, pathCm = 1): number {
  return absorbance / (epsilon * pathCm);
}

const MODES = ["molar", "mass", "residues"] as const;
type Mode = (typeof MODES)[number];

export type ProteinConcentrationValues = {
  mode: string;
  a280: number | null;
  pathLength: number | null;
  dilution: number | null;
  epsilon: number | null;
  mw: number | null;
  mwOptional: number | null;
  e01: number | null;
  trp: number | null;
  tyr: number | null;
  cystine: number | null;
  volume: number | null;
};

export function makeProteinConcentrationEngine(ctx: EngineContext<ProteinConcentrationText>) {
  const t = ctx.text;
  const positive = { min: 0, minExclusive: true } as const;
  const residue = { min: 0, max: 10000, integer: true } as const;
  const when = (...modes: Mode[]) => ({ field: "mode", oneOf: modes });
  const modeOf = (v: string): Mode => ((MODES as readonly string[]).includes(v) ? (v as Mode) : "molar");
  return defineEngine<ProteinConcentrationValues>({
    locale: ctx.locale,
    fields: [
      { id: "mode", type: "select", label: t.mode, options: MODES.map((value) => ({ value, label: t.modes[value] })), defaultValue: "molar" },
      { id: "a280", type: "number", label: t.a280, help: t.a280Help, defaultValue: 0.72, min: 0, max: 100 },
      { id: "pathLength", type: "number", label: t.pathLength, help: t.pathLengthHelp, defaultValue: 1, ...positive, max: 10, suffix: "cm" },
      { id: "dilution", type: "number", label: t.dilution, help: t.dilutionHelp, defaultValue: 1, min: 1, max: 1e6 },
      { id: "epsilon", type: "number", label: t.epsilon, help: t.epsilonHelp, defaultValue: 43824, ...positive, max: 1e7, suffix: "M⁻¹ cm⁻¹", visibleWhen: when("molar") },
      { id: "e01", type: "number", label: t.e01, help: t.e01Help, defaultValue: 1, ...positive, max: 100, visibleWhen: when("mass") },
      { id: "trp", type: "number", label: t.trp, defaultValue: 2, ...residue, visibleWhen: when("residues") },
      { id: "tyr", type: "number", label: t.tyr, defaultValue: 20, ...residue, visibleWhen: when("residues") },
      { id: "cystine", type: "number", label: t.cystine, help: t.cystineHelp, defaultValue: 17, ...residue, visibleWhen: when("residues") },
      { id: "mw", type: "number", label: t.mw, help: t.mwHelp, defaultValue: 66463, ...positive, max: 1e8, suffix: "Da", visibleWhen: when("molar", "residues") },
      { id: "mwOptional", type: "number", label: t.mwOptional, help: t.mwOptionalHelp, defaultValue: null, optional: true, ...positive, max: 1e8, suffix: "Da", visibleWhen: when("mass") },
      { id: "volume", type: "number", label: t.volume, help: t.volumeHelp, defaultValue: null, optional: true, ...positive, max: 1e6, suffix: "mL" },
    ],
    validate: (v) =>
      modeOf(v.mode) === "residues" && paceEpsilon(v.trp ?? 0, v.tyr ?? 0, v.cystine ?? 0) <= 0 ? { trp: t.errors.noChromophores } : {},
    compute: (v) => {
      const mode = modeOf(v.mode);
      const a = v.a280 ?? 0;
      const path = v.pathLength ?? 1;
      const dilution = v.dilution ?? 1;
      const corrected = a * dilution;
      const notes: string[] = [];
      let mgPerMl: number;
      let epsilon: number | null;
      let mw: number | null;
      let e01: number | null;
      if (mode === "mass") {
        e01 = v.e01 ?? 1;
        mgPerMl = corrected / (e01 * path);
        mw = v.mwOptional;
        epsilon = mw === null ? null : e01 * mw;
      } else {
        epsilon = mode === "molar" ? (v.epsilon ?? 1) : paceEpsilon(v.trp ?? 0, v.tyr ?? 0, v.cystine ?? 0);
        mw = v.mw ?? 1;
        mgPerMl = molarConcentration(corrected, epsilon, path) * mw;
        e01 = epsilon / mw;
      }
      const secondary: ResultItem[] = [];
      if (mw !== null) secondary.push({ label: t.micromolar, value: { kind: "number", value: (mgPerMl / mw) * 1e6, decimals: 3, suffix: "µM" } });
      if (v.volume !== null) secondary.push({ label: fill(t.totalMass, { volume: ctx.fmt.number(v.volume, 3) }), value: { kind: "number", value: mgPerMl * v.volume, decimals: 4, suffix: "mg" } });
      if (epsilon !== null) secondary.push({ label: t.epsilonUsed, value: { kind: "number", value: epsilon, decimals: 1, suffix: "M⁻¹ cm⁻¹" } });
      secondary.push({ label: t.e01Used, value: { kind: "number", value: e01, decimals: 4 } });
      const perCm = a / path;
      secondary.push({ label: t.a280Normalized, value: { kind: "number", value: perCm, decimals: 4 } });
      if (perCm > HIGH_ABSORBANCE) notes.push(t.notes.range);
      else if (perCm < LOW_ABSORBANCE) notes.push(t.notes.low);
      if (mode === "residues") {
        notes.push(t.notes.pace);
        if ((v.trp ?? 0) === 0) notes.push(t.notes.noTrp);
      }
      notes.push(t.notes.general);
      return {
        primary: { label: t.result, value: { kind: "number", value: mgPerMl, decimals: 4, suffix: "mg/mL" }, caption: t.caption },
        secondary,
        notes,
      };
    },
  });
}

export const proteinConcentrationEngine = makeProteinConcentrationEngine(englishContext(en));
