import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type ResultItem, type ResultValue } from "@/calculators/framework/types";
import { cleanNumberText, isNumberText } from "@/lib/math/numbers";
import en, { type HendersonHasselbalchText } from "./text/en";

/** pKa values at 25 °C for common buffer pairs. */
export const PRESETS = { acetic: 4.76, carbonic: 6.35, phosphate: 7.21, tris: 8.07, ammonium: 9.25 } as const;
type Preset = keyof typeof PRESETS;
const ACIDS = [...(Object.keys(PRESETS) as Preset[]), "custom"] as const;
type Acid = (typeof ACIDS)[number];

const SOLVES = ["ph", "ratio", "base"] as const;
type Solve = (typeof SOLVES)[number];

export const MAX_CONCENTRATION = 20;

export type HendersonHasselbalchValues = {
  solve: string;
  acid: string;
  pka: number | null;
  base: string;
  acidConc: string;
  targetPh: number | null;
};

/** pH = pKa + log₁₀([A⁻] ÷ [HA]). */
export const bufferPh = (pka: number, base: number, acid: number) => pka + Math.log10(base / acid);
/** [A⁻] ÷ [HA] = 10^(pH − pKa). */
export const bufferRatio = (pka: number, ph: number) => 10 ** (ph - pka);

export function makeHendersonHasselbalchEngine(ctx: EngineContext<HendersonHasselbalchText>) {
  const t = ctx.text;
  const toNumber = (text: string) => (isNumberText(text, ctx.locale) ? Number(cleanNumberText(text, ctx.locale)) : Number.NaN);
  const concentrationCheck = (text: string) => {
    const value = toNumber(text);
    if (!Number.isFinite(value)) return t.errors.notNumber;
    if (value <= 0) return t.errors.notPositive;
    if (value > MAX_CONCENTRATION) return fill(t.errors.tooConcentrated, { max: ctx.fmt.number(MAX_CONCENTRATION) });
    return undefined;
  };
  const when = (...solves: Solve[]) => ({ field: "solve", oneOf: solves });
  const sig = (value: number) => ctx.fmt.significant(value, 4);
  const molar = (value: number): ResultValue => ({ kind: "text", text: fill(t.molar, { value: sig(value) }) });

  return defineEngine<HendersonHasselbalchValues>({
    locale: ctx.locale,
    fields: [
      { id: "solve", type: "select", label: t.solve, options: SOLVES.map((value) => ({ value, label: t.solves[value] })), defaultValue: "ph" },
      {
        id: "acid",
        type: "select",
        label: t.acid,
        options: ACIDS.map((value) => ({ value, label: value === "custom" ? t.acids.custom : fill(t.acids[value], { pka: ctx.fmt.number(PRESETS[value], 2) }) })),
        defaultValue: "acetic",
      },
      { id: "pka", type: "number", label: t.pka, help: t.pkaHelp, defaultValue: 4.76, min: -2, max: 16, visibleWhen: { field: "acid", oneOf: ["custom"] } },
      { id: "base", type: "text", label: t.base, help: t.concentrationHelp, placeholder: "0.1", defaultValue: "0.15", check: concentrationCheck, visibleWhen: when("ph") },
      { id: "acidConc", type: "text", label: t.acidConc, help: t.concentrationHelp, placeholder: "0.1", defaultValue: "0.1", check: concentrationCheck, visibleWhen: when("ph", "base") },
      { id: "targetPh", type: "number", label: t.targetPh, help: t.targetPhHelp, defaultValue: 5, min: 0, max: 14, visibleWhen: when("ratio", "base") },
    ],
    compute: (v) => {
      const solve: Solve = (SOLVES as readonly string[]).includes(v.solve) ? (v.solve as Solve) : "ph";
      const acid: Acid = (ACIDS as readonly string[]).includes(v.acid) ? (v.acid as Acid) : "acetic";
      const pka = acid === "custom" ? (v.pka ?? 4.76) : PRESETS[acid];
      let ph: number;
      let ratio: number;
      let primary: ResultItem & { caption?: string };
      const secondary: ResultItem[] = [];
      const notes: string[] = [];
      if (solve === "ph") {
        const base = toNumber(v.base ?? "");
        const acidConc = toNumber(v.acidConc ?? "");
        ratio = base / acidConc;
        ph = bufferPh(pka, base, acidConc);
        primary = { label: t.results.ph, value: { kind: "number", value: ph, decimals: 3 }, caption: t.captions.ph };
        secondary.push({ label: t.ratio, value: { kind: "text", text: sig(ratio) } });
      } else {
        ph = v.targetPh ?? 7;
        ratio = bufferRatio(pka, ph);
        if (solve === "ratio") {
          primary = { label: t.results.ratio, value: { kind: "text", text: sig(ratio) }, caption: t.captions.ratio };
        } else {
          const acidConc = toNumber(v.acidConc ?? "");
          const base = acidConc * ratio;
          primary = { label: t.results.base, value: molar(base), caption: t.captions.base };
          secondary.push({ label: t.ratio, value: { kind: "text", text: sig(ratio) } });
          if (base > MAX_CONCENTRATION) notes.push(t.notes.tooMuchBase);
        }
      }
      const baseShare = (ratio / (1 + ratio)) * 100;
      secondary.push(
        { label: t.pkaUsed, value: { kind: "number", value: pka, decimals: 2 } },
        { label: t.range, value: { kind: "text", text: fill(t.rangeText, { low: ctx.fmt.number(pka - 1, 2), high: ctx.fmt.number(pka + 1, 2) }) } },
        { label: t.baseShare, value: { kind: "percent", value: baseShare, decimals: 2 } },
      );
      if (solve !== "ph") secondary.unshift({ label: t.phUsed, value: { kind: "number", value: ph, decimals: 3 } });
      notes.unshift(Math.abs(ph - pka) > 1 + 1e-9 ? t.notes.outsideRange : t.notes.insideRange);
      if (ph < 0 || ph > 14) notes.push(t.notes.extreme);
      notes.push(t.notes.general);
      return { primary, secondary, notes };
    },
  });
}

export const hendersonHasselbalchEngine = makeHendersonHasselbalchEngine(englishContext(en));
