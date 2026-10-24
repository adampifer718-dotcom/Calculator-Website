import { englishContext, fill, plural, type EngineContext, type PluralForms } from "@/calculators/framework/i18n";
import { defineEngine, type FieldErrors } from "@/calculators/framework/types";
import { superscript } from "@/lib/math/numbers";
import en, { type PasswordEntropyText } from "./text/en";

export type PasswordEntropyValues = {
  mode: string;
  length: number | null;
  poolMode: string;
  lower: string;
  upper: string;
  digits: string;
  symbols: string;
  symbolCount: number | null;
  customPool: number | null;
  words: number | null;
  wordList: number | null;
  guessRate: number;
};

export const SET_SIZES = { lower: 26, upper: 26, digits: 10 } as const;
export const DEFAULT_SYMBOLS = 32;
export const DICEWARE_WORDS = 7776;
export const SECONDS_PER_YEAR = 365.25 * 86400;

/** Entropy in bits of `count` independent uniform choices from `pool` options: count × log₂(pool). */
export function entropyBits(count: number, pool: number): number {
  return count * Math.log2(pool);
}

/** Pool size from the chosen character sets (0 if none are chosen). */
export function poolFromSets(sets: { lower: boolean; upper: boolean; digits: boolean; symbols: boolean }, symbolCount: number): number {
  return (sets.lower ? SET_SIZES.lower : 0) + (sets.upper ? SET_SIZES.upper : 0) + (sets.digits ? SET_SIZES.digits : 0) + (sets.symbols ? symbolCount : 0);
}

/** log₁₀ of the average number of seconds to guess: half the combinations ÷ guesses per second. */
export function log10AverageSeconds(bits: number, guessesPerSecond: number): number {
  return (bits - 1) * Math.LOG10E * Math.LN2 - Math.log10(guessesPerSecond);
}

export function makePasswordEntropyEngine(ctx: EngineContext<PasswordEntropyText>) {
  const t = ctx.text;
  const random = { field: "mode", oneOf: ["random"] } as const;
  const sets = { field: "poolMode", oneOf: ["sets"] } as const;
  const yesNo = (["yes", "no"] as const).map((value) => ({ value, label: t.yesNo[value] }));
  const setField = (id: "lower" | "upper" | "digits" | "symbols") =>
    ({ id, type: "select", label: t[id], options: yesNo, defaultValue: "yes", display: "segmented", visibleWhen: [random, sets] }) as const;

  const countWord = (value: number, text: string, forms: PluralForms) => {
    const category = new Intl.PluralRules(ctx.locale).select(value) as keyof PluralForms;
    return fill(forms[category] ?? forms.other, { n: text });
  };
  /** "1.23 × 10⁴⁵" from a base-10 logarithm. */
  const scientific = (log10: number) => {
    let exponent = Math.floor(log10);
    let mantissa = Number((10 ** (log10 - exponent)).toFixed(2));
    if (mantissa >= 10) {
      mantissa = 1;
      exponent += 1;
    }
    return `${ctx.fmt.number(mantissa, 2)} × 10${superscript(exponent)}`;
  };
  const bigNumber = (log10: number, exact: number) => (log10 < 15 ? ctx.fmt.number(Math.round(exact), 0) : scientific(log10));
  const duration = (log10Seconds: number): string => {
    if (log10Seconds < 0) return t.duration.lessThanSecond;
    const log10Years = log10Seconds - Math.log10(SECONDS_PER_YEAR);
    if (log10Years >= 6) return countWord(1e6, scientific(log10Years), t.duration.years);
    const seconds = 10 ** log10Seconds;
    const units: [number, PluralForms][] = [
      [SECONDS_PER_YEAR, t.duration.years],
      [86400, t.duration.days],
      [3600, t.duration.hours],
      [60, t.duration.minutes],
      [1, t.duration.seconds],
    ];
    const [size, forms] = units.find(([s]) => seconds >= s) ?? units[units.length - 1];
    const value = seconds / size;
    const decimals = value < 10 ? 1 : 0;
    const rounded = Number(value.toFixed(decimals));
    return countWord(rounded, ctx.fmt.number(rounded, decimals), forms);
  };

  return defineEngine<PasswordEntropyValues>({
    locale: ctx.locale,
    fields: [
      {
        id: "mode",
        type: "select",
        label: t.mode,
        options: (["random", "passphrase"] as const).map((value) => ({ value, label: t.modes[value] })),
        defaultValue: "random",
        display: "segmented",
      },
      { id: "length", type: "number", label: t.length, defaultValue: 16, min: 1, max: 1000, integer: true, visibleWhen: random },
      {
        id: "poolMode",
        type: "select",
        label: t.poolMode,
        options: (["sets", "custom"] as const).map((value) => ({ value, label: t.poolModes[value] })),
        defaultValue: "sets",
        visibleWhen: random,
      },
      setField("lower"),
      setField("upper"),
      setField("digits"),
      setField("symbols"),
      {
        id: "symbolCount",
        type: "number",
        label: t.symbolCount,
        help: t.symbolCountHelp,
        defaultValue: DEFAULT_SYMBOLS,
        min: 1,
        max: 1000,
        integer: true,
        visibleWhen: [random, sets, { field: "symbols", oneOf: ["yes"] }],
      },
      { id: "customPool", type: "number", label: t.customPool, help: t.customPoolHelp, defaultValue: 94, min: 2, max: 1e6, integer: true, visibleWhen: [random, { field: "poolMode", oneOf: ["custom"] }] },
      { id: "words", type: "number", label: t.words, defaultValue: 6, min: 1, max: 100, integer: true, visibleWhen: { field: "mode", oneOf: ["passphrase"] } },
      { id: "wordList", type: "number", label: t.wordList, help: t.wordListHelp, defaultValue: DICEWARE_WORDS, min: 2, max: 1e7, integer: true, visibleWhen: { field: "mode", oneOf: ["passphrase"] } },
      { id: "guessRate", type: "number", label: t.guessRate, help: t.guessRateHelp, defaultValue: 1e10, min: 0, minExclusive: true },
    ],
    validate: ({ mode, poolMode, lower, upper, digits, symbols }): FieldErrors =>
      mode === "random" && poolMode === "sets" && [lower, upper, digits, symbols].every((v) => v !== "yes") ? { lower: t.errors.noSets } : {},
    compute: ({ mode, length, poolMode, lower, upper, digits, symbols, symbolCount, customPool, words, wordList, guessRate }) => {
      const passphrase = mode === "passphrase";
      const count = (passphrase ? words : length) ?? 1;
      const pool = passphrase
        ? (wordList ?? DICEWARE_WORDS)
        : poolMode === "custom"
          ? (customPool ?? 2)
          : poolFromSets({ lower: lower === "yes", upper: upper === "yes", digits: digits === "yes", symbols: symbols === "yes" }, symbolCount ?? DEFAULT_SYMBOLS);
      const bits = entropyBits(count, pool);
      const log10Combinations = count * Math.log10(pool);
      const log10Average = log10AverageSeconds(bits, guessRate);
      const log10Worst = log10Combinations - Math.log10(guessRate);
      const caption = passphrase
        ? fill(t.captionPassphrase, { words: plural(ctx, count, t.wordCount), list: ctx.fmt.number(pool, 0) })
        : fill(t.captionRandom, { length: plural(ctx, count, t.lengthCount), pool: ctx.fmt.number(pool, 0) });
      return {
        primary: { label: t.entropy, value: { kind: "number", value: bits + 0, decimals: 2, suffix: t.bits }, caption },
        secondary: [
          { label: t.combinations, value: { kind: "text", text: bigNumber(log10Combinations, pool ** count) } },
          { label: t.averageTime, value: { kind: "text", text: duration(log10Average) } },
          { label: t.worstTime, value: { kind: "text", text: duration(log10Worst) } },
          { label: t.poolSize, value: { kind: "number", value: pool, decimals: 0 } },
          { label: t.bitsPerItem, value: { kind: "number", value: Math.log2(pool), decimals: 4, suffix: t.bits } },
        ],
        notes: [bits === 0 ? t.notes.zero : "", t.notes.random, t.notes.average, t.notes.notCollected].filter(Boolean),
      };
    },
  });
}

export const passwordEntropyEngine = makePasswordEntropyEngine(englishContext(en));
