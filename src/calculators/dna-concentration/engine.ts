import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type ResultItem } from "@/calculators/framework/types";
import en, { type DnaConcentrationText } from "./text/en";

/** µg/mL of nucleic acid per A260 unit at a 1 cm path length. */
export const CONVERSION_FACTORS = { dsDNA: 50, ssDNA: 33, rna: 40 } as const;
/** Commonly cited A260/A280 values for pure samples. */
export const PURE_260_280 = { dsDNA: 1.8, ssDNA: 1.8, rna: 2.0 } as const;
/** Ratios within this distance of the reference are reported as "close to" it. */
export const RATIO_TOLERANCE = 0.1;

const TYPES = ["dsDNA", "ssDNA", "rna", "custom"] as const;
type SampleType = (typeof TYPES)[number];

export type DnaConcentrationValues = {
  type: string;
  factor: number | null;
  a260: number | null;
  pathLength: number | null;
  dilution: number | null;
  a280: number | null;
  a230: number | null;
  volume: number | null;
};

/** Concentration in µg/mL (= ng/µL): A260 ÷ path length (cm) × factor × dilution factor. */
export function concentration(a260: number, factor: number, dilution = 1, pathCm = 1): number {
  return (a260 / pathCm) * factor * dilution;
}

export function makeDnaConcentrationEngine(ctx: EngineContext<DnaConcentrationText>) {
  const t = ctx.text;
  const positive = { min: 0, minExclusive: true } as const;
  return defineEngine<DnaConcentrationValues>({
    locale: ctx.locale,
    fields: [
      { id: "type", type: "select", label: t.type, options: TYPES.map((value) => ({ value, label: t.types[value] })), defaultValue: "dsDNA" },
      { id: "factor", type: "number", label: t.factor, help: t.factorHelp, defaultValue: 50, ...positive, max: 1000, suffix: "µg/mL", visibleWhen: { field: "type", oneOf: ["custom"] } },
      { id: "a260", type: "number", label: t.a260, help: t.a260Help, defaultValue: 0.65, ...positive, max: 100 },
      { id: "pathLength", type: "number", label: t.pathLength, help: t.pathLengthHelp, defaultValue: 1, ...positive, max: 10, suffix: "cm" },
      { id: "dilution", type: "number", label: t.dilution, help: t.dilutionHelp, defaultValue: 10, min: 1, max: 1e6 },
      { id: "a280", type: "number", label: t.a280, help: t.optionalHelp, defaultValue: 0.36, optional: true, ...positive, max: 100 },
      { id: "a230", type: "number", label: t.a230, help: t.optionalHelp, defaultValue: null, optional: true, ...positive, max: 100 },
      { id: "volume", type: "number", label: t.volume, help: t.volumeHelp, defaultValue: 50, optional: true, ...positive, max: 1e9, suffix: "µL" },
    ],
    compute: (v) => {
      const type: SampleType = (TYPES as readonly string[]).includes(v.type) ? (v.type as SampleType) : "dsDNA";
      const factor = type === "custom" ? (v.factor ?? 50) : CONVERSION_FACTORS[type];
      const a260 = v.a260 ?? 0;
      const path = v.pathLength ?? 1;
      const dilution = v.dilution ?? 1;
      const conc = concentration(a260, factor, dilution, path);
      const a260cm = a260 / path;
      const notes: string[] = [];
      const secondary: ResultItem[] = [
        { label: t.ugPerMl, value: { kind: "number", value: conc, decimals: 2, suffix: "µg/mL" } },
        { label: t.factorUsed, value: { kind: "number", value: factor, decimals: 4, suffix: "µg/mL" } },
        { label: t.a260Normalized, value: { kind: "number", value: a260cm, decimals: 4 } },
      ];
      if (v.volume !== null) {
        const totalUg = (conc * v.volume) / 1000;
        secondary.push({ label: fill(t.totalYield, { volume: ctx.fmt.number(v.volume, 2) }), value: { kind: "number", value: totalUg, decimals: 3, suffix: "µg" } });
      }
      if (v.a280 !== null) {
        const r = a260 / v.a280;
        secondary.push({ label: t.ratio280, value: { kind: "number", value: r, decimals: 2 } });
        if (type === "custom") notes.push(t.notes.ratio280Generic);
        else {
          const ref = PURE_260_280[type];
          const position = Math.abs(r - ref) <= RATIO_TOLERANCE ? "near" : r < ref ? "below" : "above";
          notes.push(fill(t.notes.ratio280[position], { ratio: ctx.fmt.number(r, 2), reference: ctx.fmt.number(ref, 1), sample: t.sampleNames[type] }));
        }
      }
      if (v.a230 !== null) {
        const r = a260 / v.a230;
        secondary.push({ label: t.ratio230, value: { kind: "number", value: r, decimals: 2 } });
        notes.push(fill(r < 2 ? t.notes.ratio230Low : t.notes.ratio230, { ratio: ctx.fmt.number(r, 2) }));
      }
      if (a260cm > 1 || a260cm < 0.1) notes.push(t.notes.range);
      notes.push(t.notes.general);
      return {
        primary: { label: t.result, value: { kind: "number", value: conc, decimals: 2, suffix: "ng/µL" }, caption: t.caption },
        secondary,
        notes,
      };
    },
  });
}

export const dnaConcentrationEngine = makeDnaConcentrationEngine(englishContext(en));
