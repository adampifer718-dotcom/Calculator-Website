import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { cleanNumberText, countSigFigs, isNumberText, roundToSigFigs } from "@/lib/math/numbers";
import en, { type SigFigText } from "./text/en";

export type SigFigValues = { mode: string; number: string; digits: number | null };

/**
 * Number text is read in the visitor's notation ("0,004050" in German) and
 * normalized without losing trailing zeros or the decimal mark, which are the
 * point of the calculation. Dot decimals and e-notation work everywhere.
 */
export function makeSigFigEngine(ctx: EngineContext<SigFigText>) {
  const t = ctx.text;
  return defineEngine<SigFigValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "mode",
        type: "select",
        label: t.task,
        options: [
          { value: "count", label: t.tasks.count },
          { value: "round", label: t.tasks.round },
        ],
        defaultValue: "count",
      },
      {
        id: "number",
        type: "text",
        label: t.number,
        help: t.numberHelp,
        defaultValue: "0.004050",
        check: (text) => {
          if (!isNumberText(text, ctx.locale)) return t.invalid;
          if (countSigFigs(text, ctx.locale) === 0) return t.zero;
          if (!Number.isFinite(Number(cleanNumberText(text, ctx.locale)))) return t.tooLarge;
          return undefined;
        },
      },
      { id: "digits", type: "number", label: t.digits, defaultValue: 3, min: 1, max: 15, integer: true, visibleWhen: { field: "mode", oneOf: ["round"] } },
    ],
    compute: ({ mode, number, digits }) => {
      const count = countSigFigs(number, ctx.locale) ?? 0;
      const value = Number(cleanNumberText(number, ctx.locale));
      if (mode === "round") {
        const rounded = roundToSigFigs(value, digits ?? 1);
        return {
          primary: { label: fill(t.rounded, { digits: ctx.fmt.number(digits ?? 1, 0) }), value: { kind: "text", text: ctx.fmt.numberText(rounded.plain) } },
          secondary: [
            { label: t.scientific, value: { kind: "text", text: ctx.fmt.numberText(rounded.scientific) } },
            { label: t.originalCount, value: { kind: "number", value: count } },
          ],
          notes: [t.roundNote],
        };
      }
      return {
        primary: {
          label: t.count,
          value: { kind: "number", value: count },
          caption: fill(count === 1 ? t.countCaptionOne : t.countCaption, { number, count: ctx.fmt.number(count, 0) }),
        },
        secondary: [{ label: t.inScientific, value: { kind: "text", text: ctx.fmt.numberText(roundToSigFigs(value, count).scientific) } }],
        notes: [t.countNote],
      };
    },
  });
}

export const sigFigEngine = makeSigFigEngine(englishContext(en));
