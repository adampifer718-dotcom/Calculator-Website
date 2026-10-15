import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import en, { type ExponentText } from "./text/en";

export type ExponentValues = { base: number; exponent: number };

export function makeExponentEngine(ctx: EngineContext<ExponentText>) {
  const t = ctx.text;
  const s = (v: number, d = 12) => ctx.fmt.significant(v, d);
  return defineEngine<ExponentValues>({
    locale: ctx.locale,
    fields: [
      { id: "base", type: "number", label: t.base, defaultValue: 2 },
      { id: "exponent", type: "number", label: t.exponent, defaultValue: 10 },
    ],
    validate: ({ base, exponent }): FieldErrors => {
      if (base === 0 && exponent < 0) return { exponent: t.zeroNegative };
      if (base < 0 && !Number.isInteger(exponent)) return { exponent: t.negativeBase };
      return {};
    },
    compute: ({ base, exponent }) => {
      const result = Math.pow(base, exponent);
      const finite = Number.isFinite(result);
      // Results smaller than the smallest double underflow to 0; show a bound instead of a false 0.
      if (finite && result === 0 && base !== 0) {
        return { primary: { label: "aᵇ", value: { kind: "text", text: `0 < |aᵇ| < ${s(1e-300)}` } }, secondary: [{ label: t.eNotation, value: { kind: "text", text: "—" } }] };
      }
      return {
        primary: { label: "aᵇ", value: { kind: "text", text: finite ? s(result) : t.tooLarge } },
        secondary: [{ label: t.eNotation, value: { kind: "text", text: finite ? result.toExponential(10).replace(/\.?0+e/, "e").replace("e+", "e") : "—" } }],
        notes: [exponent < 0 ? fill(t.negativeNote, { base: s(base), exponent: s(-exponent) }) : fill(t.positiveNote, { base: s(base), exponent: s(exponent) })],
      };
    },
  });
}

export const exponentEngine = makeExponentEngine(englishContext(en));
