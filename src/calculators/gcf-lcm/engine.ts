import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import { listError, parseNumberList } from "@/lib/math/data";
import { gcd, groupDigits, lcmBig, primeFactors } from "@/lib/math/integers";
import en, { type GcfLcmText } from "./text/en";

export type GcfLcmValues = { numbers: string };

export const MAX_COUNT = 20;
export const MAX_VALUE = 1e12;

const SUPERSCRIPT: Record<string, string> = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹" };
const superscript = (n: number) => String(n).split("").map((d) => SUPERSCRIPT[d]).join("");

export function makeGcfLcmEngine(ctx: EngineContext<GcfLcmText>) {
  const t = ctx.text;
  const whole = (n: number) => ctx.fmt.number(n, 0);
  const shown = (n: number) => ctx.fmt.significant(n, 10);
  const parse = (text: string) => parseNumberList(text, ctx.locale);

  const check = (text: string): string | undefined => {
    const parsed = parse(text);
    const listProblem = listError(parsed, t.errors, whole(MAX_COUNT));
    if (listProblem || !parsed.ok) return listProblem;
    const values = parsed.values;
    if (values.length < 2) return t.needTwo;
    if (values.length > MAX_COUNT) return fill(t.maxCount, { max: whole(MAX_COUNT) });
    for (const v of values) {
      if (!Number.isInteger(v)) return fill(t.notWhole, { value: shown(v) });
      if (v < 1) return fill(t.notPositive, { value: shown(v) });
      if (v > MAX_VALUE) return fill(t.tooBig, { value: shown(v), max: whole(MAX_VALUE) });
    }
    return undefined;
  };

  const factorText = (n: number) => {
    if (n === 1) return t.noPrimeFactors;
    const factors = primeFactors(n);
    const text = factors.map(([p, e]) => (e > 1 ? `${whole(p)}${superscript(e)}` : whole(p))).join(" × ");
    return factors.length === 1 && factors[0][1] === 1 ? fill(t.isPrime, { factors: text }) : text;
  };

  return defineEngine<GcfLcmValues>({
    locale: ctx.locale,
    fields: [{ id: "numbers", type: "text", multiline: true, label: t.numbers, help: t.numbersHelp, defaultValue: "84, 126, 210", check }],
    compute: ({ numbers }) => {
      const parsed = parse(numbers);
      const values = parsed.ok ? parsed.values : [];
      const g = values.reduce((acc, v) => gcd(acc, v), 0);
      const l = lcmBig(values);
      const digits = l.toString().length;
      return {
        primary: { label: t.gcf, value: { kind: "number", value: g, decimals: 0 }, caption: t.gcfCaption },
        secondary: [
          { label: t.lcm, value: { kind: "text", text: ctx.fmt.numberText(groupDigits(l)) } },
          ...(digits > 15 ? [{ label: t.lcmDigits, value: { kind: "number" as const, value: digits, decimals: 0 } }] : []),
        ],
        tables: [
          {
            caption: t.factorTable,
            columns: [t.numberColumn, t.factorsColumn],
            rows: [...new Set(values)].map((v) => ({ label: whole(v), cells: [{ kind: "text" as const, text: factorText(v) }] })),
          },
        ],
        notes: g === 1 ? [t.coprime] : undefined,
      };
    },
  });
}

export const gcfLcmEngine = makeGcfLcmEngine(englishContext(en));
