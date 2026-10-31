import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors, type ResultItem } from "@/calculators/framework/types";
import en, { type AbvText } from "./text/en";

export type AbvValues = {
  scale: string;
  og: number | null;
  fg: number | null;
  ogPlato: number | null;
  fgPlato: number | null;
};

export const SG_MIN = 0.98;
export const SG_MAX = 1.2;
/** Density of ethanol relative to water at 20 °C, used for the ABV → ABW approximation. */
export const ETHANOL_DENSITY = 0.789;

/** SG = 1 + P ÷ (258.6 − (P ÷ 258.2) × 227.1). */
export function platoToSg(plato: number): number {
  return 1 + plato / (258.6 - (plato / 258.2) * 227.1);
}

/** Standard homebrew formula: ABV = (OG − FG) × 131.25. */
export function abvStandard(og: number, fg: number): number {
  return (og - fg) * 131.25;
}

/** Alternative formula: ABV = 76.08 (OG − FG) ÷ (1.775 − OG) × FG ÷ 0.794. */
export function abvAlternative(og: number, fg: number): number {
  return ((76.08 * (og - fg)) / (1.775 - og)) * (fg / 0.794);
}

/** ABW ≈ ABV × 0.789 ÷ FG. */
export function abwFromAbv(abv: number, fg: number): number {
  return (abv * ETHANOL_DENSITY) / fg;
}

/** Apparent attenuation % = (OG − FG) ÷ (OG − 1) × 100. */
export function apparentAttenuation(og: number, fg: number): number {
  return ((og - fg) / (og - 1)) * 100;
}

export function makeAbvEngine(ctx: EngineContext<AbvText>) {
  const t = ctx.text;
  const sg = { field: "scale", oneOf: ["sg"] } as const;
  const plato = { field: "scale", oneOf: ["plato"] } as const;
  const gravities = (v: AbvValues) =>
    v.scale === "plato" ? { og: platoToSg(v.ogPlato ?? 0), fg: platoToSg(v.fgPlato ?? 0) } : { og: v.og ?? 1, fg: v.fg ?? 1 };
  const outOfRange = (x: number) => x < SG_MIN - 1e-12 || x > SG_MAX + 1e-12;
  return defineEngine<AbvValues>({
    locale: ctx.locale,
    fields: [
      { id: "scale", type: "select", label: t.scale, options: (["sg", "plato"] as const).map((value) => ({ value, label: t.scales[value] })), defaultValue: "sg", display: "segmented" },
      { id: "og", type: "number", label: t.og, help: t.ogHelp, defaultValue: 1.05, min: SG_MIN, max: SG_MAX, visibleWhen: sg },
      { id: "fg", type: "number", label: t.fg, help: t.fgHelp, defaultValue: 1.01, min: SG_MIN, max: SG_MAX, visibleWhen: sg },
      { id: "ogPlato", type: "number", label: t.ogPlato, help: t.ogPlatoHelp, defaultValue: 12, min: -5, max: 45, suffix: "°P", visibleWhen: plato },
      { id: "fgPlato", type: "number", label: t.fgPlato, help: t.fgPlatoHelp, defaultValue: 2.5, min: -5, max: 45, suffix: "°P", visibleWhen: plato },
    ],
    validate: (v): FieldErrors => {
      const { og, fg } = gravities(v);
      const ogId = v.scale === "plato" ? "ogPlato" : "og";
      const fgId = v.scale === "plato" ? "fgPlato" : "fg";
      const errors: FieldErrors = {};
      if (outOfRange(og)) errors[ogId] = fill(t.errors.sgRange, { sg: ctx.fmt.number(og, 3) });
      if (outOfRange(fg)) errors[fgId] = fill(t.errors.sgRange, { sg: ctx.fmt.number(fg, 3) });
      if (!errors[fgId] && !errors[ogId] && fg > og) errors[fgId] = t.errors.fgAboveOg;
      return errors;
    },
    compute: (v) => {
      const { og, fg } = gravities(v);
      const abv = abvStandard(og, fg);
      const secondary: ResultItem[] = [
        { label: t.abvAlt, value: { kind: "percent", value: abvAlternative(og, fg), decimals: 2 } },
        { label: t.abw, value: { kind: "percent", value: abwFromAbv(abv, fg), decimals: 2 } },
      ];
      const notes: string[] = [];
      if (og > 1) secondary.push({ label: t.attenuation, value: { kind: "percent", value: apparentAttenuation(og, fg), decimals: 1 } });
      else notes.push(t.notes.noAttenuation);
      if (v.scale === "plato") {
        secondary.push({ label: t.ogSg, value: { kind: "number", value: og, decimals: 4 } }, { label: t.fgSg, value: { kind: "number", value: fg, decimals: 4 } });
      }
      if (og > 1.07) notes.push(t.notes.high);
      notes.push(t.notes.estimate);
      return {
        primary: {
          label: t.abv,
          value: { kind: "percent", value: abv, decimals: 2 },
          caption: fill(t.caption, { og: ctx.fmt.number(og, 4), fg: ctx.fmt.number(fg, 4), drop: ctx.fmt.number((og - fg) * 1000, 1) }),
        },
        secondary,
        notes,
      };
    },
  });
}

export const abvEngine = makeAbvEngine(englishContext(en));
