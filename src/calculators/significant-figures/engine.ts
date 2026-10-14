import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { cleanNumberText, countSigFigs, isNumberText, roundToSigFigs } from "@/lib/math/numbers";
import en, { type SigFigText } from "./text/en";

export type SigFigValues = { mode: string; number: string; digits: number | null };

/**
 * Number text keeps universal notation (dot decimals, optional e-notation)
 * in every language, because trailing zeros and the decimal point are the
 * point of the calculation.
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
          if (!isNumberText(text)) return t.invalid;
          if (countSigFigs(text) === 0) return t.zero;
          if (!Number.isFinite(Number(cleanNumberText(text)))) return t.tooLarge;
          return undefined;
        },
      },
      { id: "digits", type: "number", label: t.digits, defaultValue: 3, min: 1, max: 15, integer: true, visibleWhen: { field: "mode", oneOf: ["round"] } },
    ],
    compute: ({ mode, number, digits }) => {
      const count = countSigFigs(number) ?? 0;
      const value = Number(cleanNumberText(number));
      if (mode === "round") {
        const rounded = roundToSigFigs(value, digits ?? 1);
        return {
          primary: { label: fill(t.rounded, { digits: ctx.fmt.number(digits ?? 1, 0) }), value: { kind: "text", text: rounded.plain } },
          secondary: [
            { label: t.scientific, value: { kind: "text", text: rounded.scientific } },
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
        secondary: [{ label: t.inScientific, value: { kind: "text", text: roundToSigFigs(value, count).scientific } }],
        notes: [t.countNote],
      };
    },
  });
}

export const sigFigEngine = makeSigFigEngine(englishContext(en));
