import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type ResultValue } from "@/calculators/framework/types";
import { cleanNumberText, isNumberText, superscript } from "@/lib/math/numbers";
import en, { type PhText } from "./text/en";

/** Ion product of water at 25 °C. */
export const KW = 1.0e-14;
export const PKW = 14;
export const MAX_CONCENTRATION = 20;
export const MAX_KA = 1000;

const MODES = ["hydrogen", "ph", "poh", "strongAcid", "strongBase", "weakAcid"] as const;
type Mode = (typeof MODES)[number];

/** [H⁺] (or [OH⁻]) of a strong monoprotic acid (or base) including water's autoionization: x² − Cx − Kw = 0. */
export const strongIon = (c: number) => (c + Math.sqrt(c * c + 4 * KW)) / 2;

/** [H⁺] of a weak monoprotic acid, ignoring water: x² + Ka·x − Ka·C = 0, in a cancellation-free form. */
export const weakAcidH = (c: number, ka: number) => (2 * ka * c) / (ka + Math.sqrt(ka * ka + 4 * ka * c));

export type PhValues = {
  mode: string;
  hydrogen: string;
  ph: number | null;
  poh: number | null;
  concentration: string;
  constantType: string;
  ka: string;
  pka: number | null;
};

export function makePhEngine(ctx: EngineContext<PhText>) {
  const t = ctx.text;
  const toNumber = (text: string) => (isNumberText(text, ctx.locale) ? Number(cleanNumberText(text, ctx.locale)) : Number.NaN);
  const positiveCheck = (max: number, tooLarge: string) => (text: string) => {
    const value = toNumber(text);
    if (!Number.isFinite(value)) return t.errors.notNumber;
    if (value <= 0) return t.errors.notPositive;
    if (value > max) return fill(tooLarge, { max: ctx.fmt.number(max) });
    return undefined;
  };
  const concentrationCheck = positiveCheck(MAX_CONCENTRATION, t.errors.tooConcentrated);
  const sci = (value: number, unit: string): ResultValue => {
    const [mantissa, exponent] = value.toExponential(3).split("e");
    return { kind: "text", text: `${ctx.fmt.number(Number(mantissa), 3)} × 10${superscript(Number(exponent))} ${unit}` };
  };
  const when = (...modes: Mode[]) => ({ field: "mode", oneOf: modes });

  return defineEngine<PhValues>({
    locale: ctx.locale,
    fields: [
      { id: "mode", type: "select", label: t.mode, options: MODES.map((value) => ({ value, label: t.modes[value] })), defaultValue: "strongAcid" },
      { id: "hydrogen", type: "text", label: t.hydrogen, help: t.concentrationHelp, defaultValue: "2.5e-9", placeholder: "1e-7", check: concentrationCheck, visibleWhen: when("hydrogen") },
      { id: "ph", type: "number", label: t.ph, help: t.phRangeHelp, defaultValue: 7, min: -2, max: 16, visibleWhen: when("ph") },
      { id: "poh", type: "number", label: t.poh, help: t.phRangeHelp, defaultValue: 7, min: -2, max: 16, visibleWhen: when("poh") },
      {
        id: "concentration",
        type: "text",
        label: t.concentration,
        help: t.concentrationModeHelp,
        defaultValue: "0.025",
        placeholder: "0.01",
        check: concentrationCheck,
        visibleWhen: when("strongAcid", "strongBase", "weakAcid"),
      },
      { id: "constantType", type: "select", label: t.constantType, options: (["pka", "ka"] as const).map((value) => ({ value, label: t.constantTypes[value] })), defaultValue: "pka", display: "segmented", visibleWhen: when("weakAcid") },
      { id: "ka", type: "text", label: t.ka, help: t.kaHelp, defaultValue: "1.7e-5", placeholder: "1e-5", check: positiveCheck(MAX_KA, t.errors.kaTooLarge), visibleWhen: [when("weakAcid"), { field: "constantType", oneOf: ["ka"] }] },
      { id: "pka", type: "number", label: t.pka, defaultValue: 4.76, min: -3, max: 20, visibleWhen: [when("weakAcid"), { field: "constantType", oneOf: ["pka"] }] },
    ],
    compute: (v) => {
      const mode: Mode = (MODES as readonly string[]).includes(v.mode) ? (v.mode as Mode) : "strongAcid";
      const notes: string[] = [];
      let ph: number;
      let poh: number;
      let ionization: number | null = null;
      if (mode === "hydrogen") {
        ph = -Math.log10(toNumber(v.hydrogen ?? ""));
        poh = PKW - ph;
      } else if (mode === "ph") {
        ph = v.ph ?? 7;
        poh = PKW - ph;
      } else if (mode === "poh") {
        poh = v.poh ?? 7;
        ph = PKW - poh;
      } else {
        const c = toNumber(v.concentration ?? "");
        if (mode === "strongBase") {
          poh = -Math.log10(strongIon(c));
          ph = PKW - poh;
          if (c < 1e-6) notes.push(t.notes.dilute);
        } else if (mode === "strongAcid") {
          ph = -Math.log10(strongIon(c));
          poh = PKW - ph;
          if (c < 1e-6) notes.push(t.notes.dilute);
        } else {
          const ka = v.constantType === "ka" ? toNumber(v.ka ?? "") : 10 ** -(v.pka ?? 0);
          const h = weakAcidH(c, ka);
          ph = -Math.log10(h);
          poh = PKW - ph;
          ionization = (h / c) * 100;
          notes.push(t.notes.weak);
          if (h < 1e-6) notes.push(t.notes.weakDilute);
        }
      }
      const nature = Math.abs(ph - 7) < 0.005 ? "neutral" : ph < 7 ? "acidic" : "basic";
      if (ph < 0 || ph > 14) notes.push(t.notes.outside);
      notes.push(t.notes.kw);
      return {
        primary: { label: t.phResult, value: { kind: "number", value: ph, decimals: 3 }, caption: t.captions[mode] },
        secondary: [
          { label: t.nature, value: { kind: "text", text: t.natures[nature] } },
          { label: t.pohResult, value: { kind: "number", value: poh, decimals: 3 } },
          { label: t.hResult, value: sci(10 ** -ph, "mol/L") },
          { label: t.ohResult, value: sci(10 ** -poh, "mol/L") },
          ...(ionization === null ? [] : [{ label: t.ionization, value: { kind: "percent", value: ionization, decimals: 3 } as ResultValue }]),
        ],
        notes,
      };
    },
  });
}

export const phEngine = makePhEngine(englishContext(en));
