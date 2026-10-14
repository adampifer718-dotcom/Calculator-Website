import { englishContext, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { cleanNumberText, isNumberText, notations } from "@/lib/math/numbers";
import en, { type ScientificNotationText } from "./text/en";

export type ScientificNotationValues = { number: string };

const MAX_DECIMAL_EXPONENT = 21;

/** Notation output uses universal mathematical notation in every language. */
export function makeScientificNotationEngine(ctx: EngineContext<ScientificNotationText>) {
  const t = ctx.text;
  return defineEngine<ScientificNotationValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "number",
        type: "text",
        label: t.number,
        help: t.numberHelp,
        defaultValue: "123400",
        check: (text) => {
          if (!isNumberText(text)) return t.invalid;
          if (!Number.isFinite(Number(cleanNumberText(text)))) return t.tooLarge;
          return undefined;
        },
      },
    ],
    compute: ({ number }) => {
      const value = Number(cleanNumberText(number));
      const forms = notations(value);
      const exponent = value === 0 ? 0 : Math.floor(Math.log10(Math.abs(value)));
      return {
        primary: { label: t.scientific, value: { kind: "text", text: forms.scientific } },
        secondary: [
          { label: t.eNotation, value: { kind: "text", text: forms.eNotation } },
          { label: t.engineering, value: { kind: "text", text: forms.engineering } },
          { label: t.decimal, value: { kind: "text", text: Math.abs(exponent) > MAX_DECIMAL_EXPONENT ? t.tooLong : forms.decimal } },
        ],
      };
    },
  });
}

export const scientificNotationEngine = makeScientificNotationEngine(englishContext(en));
