import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { MAX_FRACTION_PART, add, divide, formatFraction, formatMixed, multiply, parseFraction, subtract, toNumber, type Fraction } from "@/lib/math/rational";
import en, { type FractionText } from "./text/en";

export type FractionValues = { a: string; operation: string; b: string };

const OPERATIONS = { add: { symbol: "+", apply: add }, subtract: { symbol: "−", apply: subtract }, multiply: { symbol: "×", apply: multiply }, divide: { symbol: "÷", apply: divide } } as const;
type Operation = keyof typeof OPERATIONS;

/** Exact fraction arithmetic (BigInt), so 1/3 + 1/6 is exactly 1/2. */
export function makeFractionEngine(ctx: EngineContext<FractionText>) {
  const t = ctx.text;
  const read = (text: string) => parseFraction(text, ctx.locale);
  const check = (text: string) => {
    const parsed = read(text);
    if (parsed.ok) return undefined;
    return parsed.issue === "tooLarge" ? fill(t.errors.tooLarge, { max: ctx.fmt.number(Number(MAX_FRACTION_PART), 0) }) : t.errors[parsed.issue];
  };
  const value = (text: string): Fraction => {
    const parsed = read(text);
    if (!parsed.ok) throw new Error(parsed.issue);
    return parsed.value;
  };
  return defineEngine<FractionValues>({
    locale: ctx.locale,
    fields: [
      { id: "a", type: "text", label: t.a, help: t.aHelp, defaultValue: "1/2", check },
      {
        id: "operation",
        type: "select",
        label: t.operation,
        options: (Object.keys(OPERATIONS) as Operation[]).map((op) => ({ value: op, label: t.operations[op] })),
        defaultValue: "add",
      },
      { id: "b", type: "text", label: t.b, help: t.bHelp, defaultValue: "1/3", check },
    ],
    validate: ({ operation, b }): FieldErrors => (operation === "divide" && value(b).num === 0n ? { b: t.errors.divideByZero } : {}),
    compute: ({ a, operation, b }) => {
      const op = OPERATIONS[operation as Operation] ?? OPERATIONS.add;
      const x = value(a);
      const y = value(b);
      const result = op.apply(x, y);
      const text = formatFraction(result);
      return {
        primary: {
          label: t.result,
          value: { kind: "text", text },
          caption: fill(t.caption, { a: formatFraction(x), op: op.symbol, b: formatFraction(y), result: text }),
        },
        secondary: [
          { label: t.mixed, value: { kind: "text", text: formatMixed(result) } },
          { label: t.decimal, value: { kind: "number", value: toNumber(result), decimals: 10 } },
        ],
        notes: [t.note],
      };
    },
  });
}

export const fractionEngine = makeFractionEngine(englishContext(en));
