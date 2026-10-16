/*
 * Logic for the non-physical converters: text case and number bases.
 * Currency is a single multiplication by a user-supplied rate (see the widget).
 */

export const CASE_MODES = ["upper", "lower", "title", "sentence", "camel", "pascal", "snake", "kebab", "constant", "alternating"] as const;
export type CaseMode = (typeof CASE_MODES)[number];

/** Splits text into words for programming cases: spaces, punctuation, case changes and digit boundaries. */
function words(text: string): string[] {
  return text
    .replace(/([\p{Ll}\p{N}])(\p{Lu})/gu, "$1 $2")
    .replace(/(\p{Lu})(\p{Lu}\p{Ll})/gu, "$1 $2")
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean);
}

const capitalize = (word: string, locale: string) => word.charAt(0).toLocaleUpperCase(locale) + word.slice(1).toLocaleLowerCase(locale);

/** Converts text to the given case using the language's casing rules (e.g. Turkish dotted i, German ß). */
export function convertCase(text: string, mode: CaseMode, locale: string): string {
  switch (mode) {
    case "upper":
      return text.toLocaleUpperCase(locale);
    case "lower":
      return text.toLocaleLowerCase(locale);
    case "title":
      return text.toLocaleLowerCase(locale).replace(/(^|[\s\-–—(["'“‘/])(\p{L})/gu, (_, sep: string, ch: string) => sep + ch.toLocaleUpperCase(locale));
    case "sentence":
      return text.toLocaleLowerCase(locale).replace(/(^\s*|[.!?؟۔]\s+)(\p{L})/gu, (_, sep: string, ch: string) => sep + ch.toLocaleUpperCase(locale));
    case "camel":
      return words(text)
        .map((w, i) => (i === 0 ? w.toLocaleLowerCase(locale) : capitalize(w, locale)))
        .join("");
    case "pascal":
      return words(text)
        .map((w) => capitalize(w, locale))
        .join("");
    case "snake":
      return words(text).map((w) => w.toLocaleLowerCase(locale)).join("_");
    case "kebab":
      return words(text).map((w) => w.toLocaleLowerCase(locale)).join("-");
    case "constant":
      return words(text).map((w) => w.toLocaleUpperCase(locale)).join("_");
    case "alternating": {
      let i = 0;
      return Array.from(text)
        .map((ch) => {
          if (!/\p{L}/u.test(ch)) return ch;
          return i++ % 2 === 0 ? ch.toLocaleLowerCase(locale) : ch.toLocaleUpperCase(locale);
        })
        .join("");
    }
  }
}

export const BASES = [2, 8, 10, 16] as const;
export const DIGITS = "0123456789abcdefghijklmnopqrstuvwxyz";
/** Largest accepted input length, to keep conversion instant. */
export const MAX_DIGITS = 256;

export type BaseResult = { ok: true; value: bigint } | { ok: false; error: "empty" | "digit" | "tooLong" };

/**
 * Parses an integer in any base from 2 to 36 exactly (BigInt), allowing a
 * leading minus sign, spaces or underscores as separators and the usual
 * prefixes 0b, 0o and 0x when they match the base.
 */
export function parseInBase(raw: string, base: number): BaseResult {
  let text = raw.trim().replace(/[\s_]/g, "").toLowerCase();
  if (text === "") return { ok: false, error: "empty" };
  let negative = false;
  if (text.startsWith("-")) {
    negative = true;
    text = text.slice(1);
  }
  const prefix = { 2: "0b", 8: "0o", 16: "0x" }[base as 2 | 8 | 16];
  if (prefix && text.startsWith(prefix)) text = text.slice(2);
  if (text === "") return { ok: false, error: "digit" };
  if (text.length > MAX_DIGITS) return { ok: false, error: "tooLong" };
  const big = BigInt(base);
  let value = 0n;
  for (const ch of text) {
    const d = DIGITS.indexOf(ch);
    if (d < 0 || d >= base) return { ok: false, error: "digit" };
    value = value * big + BigInt(d);
  }
  return { ok: true, value: negative ? -value : value };
}

/** Writes an integer in a base from 2 to 36 (upper-case letters for digits above 9). */
export function formatInBase(value: bigint, base: number): string {
  return value.toString(base).toUpperCase();
}
