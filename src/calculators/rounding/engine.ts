import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { cleanNumberText } from "@/lib/math/numbers";
import {
  ROUNDING_METHODS,
  decimalPlaces,
  formatExactDecimal,
  neighbours,
  parseExactDecimal,
  roundToStep,
  subtract,
  type ExactDecimal,
  type RoundingMethod,
} from "@/lib/math/decimal-rounding";
import en, { type RoundingText } from "./text/en";

export const TARGETS = ["places", "whole", "tens", "hundreds", "thousands", "increment"] as const;
export type Target = (typeof TARGETS)[number];

export type RoundingValues = { number: string; target: string; places: number | null; increment: string; method: string };

const FIXED_STEPS: Record<Exclude<Target, "places" | "increment">, ExactDecimal> = {
  whole: { coef: 1n, exp: 0 },
  tens: { coef: 1n, exp: 1 },
  hundreds: { coef: 1n, exp: 2 },
  thousands: { coef: 1n, exp: 3 },
};

const asTarget = (v: string): Target => ((TARGETS as readonly string[]).includes(v) ? (v as Target) : "places");
const asMethod = (v: string): RoundingMethod => ((ROUNDING_METHODS as readonly string[]).includes(v) ? (v as RoundingMethod) : "halfUp");

/** The step to round to and the number of decimals to show. */
export function stepFor(target: Target, places: number, increment: ExactDecimal | null): { step: ExactDecimal; places: number } {
  if (target === "places") return { step: { coef: 1n, exp: -places }, places };
  if (target === "increment" && increment) return { step: increment, places: decimalPlaces(increment) };
  return { step: FIXED_STEPS[target === "increment" ? "whole" : target], places: 0 };
}

/**
 * Rounds exactly on the typed digits, with BigInt decimal arithmetic, so 1.005
 * rounds half up to 1.01 and 2.5 half even to 2, as in Python's decimal module.
 */
export function makeRoundingEngine(ctx: EngineContext<RoundingText>) {
  const t = ctx.text;
  const read = (text: string) => parseExactDecimal(cleanNumberText(text, ctx.locale));
  const show = (d: ExactDecimal, places?: number, signed = false) => ctx.fmt.numberText(formatExactDecimal(d, places, signed));
  return defineEngine<RoundingValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "number",
        type: "text",
        label: t.number,
        help: t.numberHelp,
        defaultValue: "1234.5675",
        check: (text) => {
          const cleaned = cleanNumberText(text, ctx.locale);
          if (!/^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i.test(cleaned)) return t.invalid;
          return read(text) ? undefined : t.tooLong;
        },
      },
      { id: "target", type: "select", label: t.target, options: TARGETS.map((value) => ({ value, label: t.targets[value] })), defaultValue: "places" },
      { id: "places", type: "number", label: t.places, defaultValue: 2, min: 0, max: 20, integer: true, visibleWhen: { field: "target", oneOf: ["places"] } },
      {
        id: "increment",
        type: "text",
        label: t.increment,
        help: t.incrementHelp,
        defaultValue: "0.05",
        visibleWhen: { field: "target", oneOf: ["increment"] },
        check: (text) => {
          const d = read(text);
          return d && d.coef > 0n ? undefined : t.incrementInvalid;
        },
      },
      { id: "method", type: "select", label: t.method, options: ROUNDING_METHODS.map((value) => ({ value, label: t.methods[value] })), defaultValue: "halfUp" },
    ],
    compute: (v) => {
      const value = read(v.number) ?? { coef: 0n, exp: 0 };
      const method = asMethod(v.method);
      const { step, places } = stepFor(asTarget(v.target), v.places ?? 0, v.increment ? read(v.increment) : null);
      const rounded = roundToStep(value, step, method);
      const { lower, upper } = neighbours(value, step);
      const diff = subtract(rounded, value);
      const isMultiple = lower.coef === upper.coef && lower.exp === upper.exp;
      const fromLower = subtract(value, lower);
      const isTie = !isMultiple && subtract({ coef: 2n * fromLower.coef, exp: fromLower.exp }, step).coef === 0n;
      const notes: string[] = [];
      if (isMultiple) notes.push(t.exact);
      else if (isTie && ["halfUp", "halfEven", "halfDown"].includes(method)) notes.push(t.tie);
      if (value.coef < 0n && (method === "ceiling" || method === "floor")) notes.push(t.negativeNote);
      return {
        primary: {
          label: t.rounded,
          value: { kind: "text", text: show(rounded, places) },
          caption: fill(t.caption, { original: show(value), method: t.methodShort[method] }),
        },
        secondary: [
          { label: t.difference, value: { kind: "text", text: show(diff, undefined, true) } },
          { label: t.lower, value: { kind: "text", text: show(lower, places) } },
          { label: t.upper, value: { kind: "text", text: show(upper, places) } },
        ],
        notes,
      };
    },
  });
}

export const roundingEngine = makeRoundingEngine(englishContext(en));
