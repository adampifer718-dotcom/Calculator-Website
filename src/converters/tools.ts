/*
 * Logic for the text-based converter tools: Roman numerals, Unix time, CSS
 * colours, Morse code, text ↔ UTF-8 bytes and geographic coordinates.
 * Pure functions with no prose; the widgets translate the error codes.
 */

// ── Roman numerals ────────────────────────────────────────────────────────

const ROMAN: readonly (readonly [number, string])[] = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];
export const ROMAN_MAX = 3999;
/** Standard subtractive form, 1–3999 (M{0,3} … I{0,3}); rejects IIII, IC, VX and similar. */
const STANDARD_ROMAN = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

export function toRoman(n: number): string {
  let rest = n;
  let out = "";
  for (const [value, symbol] of ROMAN) {
    while (rest >= value) {
      out += symbol;
      rest -= value;
    }
  }
  return out;
}

export type RomanResult =
  | { ok: true; direction: "toRoman"; value: number; roman: string }
  | { ok: true; direction: "toNumber"; value: number; roman: string }
  | { ok: false; error: "empty" | "range" | "notWhole" | "invalidNumeral" };

/** Converts in whichever direction the input implies: digits → numeral, letters → number. */
export function convertRoman(raw: string): RomanResult {
  const trimmed = raw.trim();
  if (trimmed === "") return { ok: false, error: "empty" };
  // Digits with thousands separators (3,999 / 3.999 / 3 999) are whole numbers; any other separator is a fraction.
  const digits = /^[+-]?\d{1,3}([,.'\s\u00a0\u202f]\d{3})+$/.test(trimmed) ? trimmed.replace(/[,.'\s\u00a0\u202f]/g, "") : trimmed;
  if (/^[+-]?\d+$/.test(digits)) {
    const n = Number(digits);
    if (n < 1 || n > ROMAN_MAX) return { ok: false, error: "range" };
    return { ok: true, direction: "toRoman", value: n, roman: toRoman(n) };
  }
  if (/^[+-]?\d*[.,]\d+$/.test(trimmed)) return { ok: false, error: "notWhole" };
  const upper = trimmed.replace(/\s/g, "").toUpperCase();
  if (upper === "" || !STANDARD_ROMAN.test(upper)) return { ok: false, error: "invalidNumeral" };
  let value = 0;
  let i = 0;
  for (const [v, symbol] of ROMAN) {
    while (upper.startsWith(symbol, i)) {
      value += v;
      i += symbol.length;
    }
  }
  return { ok: true, direction: "toNumber", value, roman: upper };
}

// ── Unix time ─────────────────────────────────────────────────────────────

/** ECMAScript time values are limited to ±8.64e15 ms (±100,000,000 days) around the epoch. */
export const MAX_TIME_MS = 8.64e15;

export type TimestampResult = { ok: true; ms: number } | { ok: false; error: "empty" | "invalid" | "range" };

/** Parses a Unix timestamp in seconds or milliseconds (decimals allowed for seconds). */
export function parseTimestamp(raw: string, unit: "s" | "ms"): TimestampResult {
  const text = raw.trim().replace(/[\s_]/g, "");
  if (text === "") return { ok: false, error: "empty" };
  if (!/^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(text)) return { ok: false, error: "invalid" };
  const ms = unit === "s" ? Number(text) * 1000 : Number(text);
  if (!Number.isFinite(ms) || Math.abs(ms) > MAX_TIME_MS) return { ok: false, error: "range" };
  return { ok: true, ms: Math.round(ms) };
}

/** ISO 8601 in UTC, with milliseconds only when they are not zero, and ± years outside 0000–9999. */
export function isoUtc(ms: number): string {
  const iso = new Date(ms).toISOString();
  return iso.replace(".000Z", "Z");
}

/**
 * Parses a date and time from a `datetime-local` style string
 * (YYYY-MM-DDTHH:MM[:SS]) as UTC or as a fixed offset in minutes east of UTC.
 */
export function parseDateTime(raw: string, offsetMinutes: number): TimestampResult {
  const m = /^(\d{4,6})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{1,3}))?)?$/.exec(raw.trim());
  if (!m) return { ok: false, error: raw.trim() === "" ? "empty" : "invalid" };
  const [year, month, day, hour, minute, second = "0", fraction = "0"] = m.slice(1);
  const mo = Number(month);
  const d = Number(day);
  if (mo < 1 || mo > 12 || d < 1 || Number(hour) > 23 || Number(minute) > 59 || Number(second) > 59) return { ok: false, error: "invalid" };
  const date = new Date(0);
  date.setUTCFullYear(Number(year), mo - 1, d);
  date.setUTCHours(Number(hour), Number(minute), Number(second), Number(fraction.padEnd(3, "0")));
  // Reject dates such as 31 April, which Date would roll over to 1 May.
  if (date.getUTCDate() !== d) return { ok: false, error: "invalid" };
  const ms = date.getTime() - offsetMinutes * 60000;
  if (!Number.isFinite(ms) || Math.abs(ms) > MAX_TIME_MS) return { ok: false, error: "range" };
  return { ok: true, ms };
}

// ── Colours (CSS Color Module Level 4, sRGB) ─────────────────────────────

export interface Rgb {
  r: number;
  g: number;
  b: number;
  /** Alpha 0–1. */
  a: number;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/** Splits CSS function arguments separated by commas, spaces and an optional "/ alpha". */
function cssArgs(inner: string): string[] {
  return inner
    .replace(/\s*\/\s*/, " ")
    .split(/[\s,]+/)
    .filter(Boolean);
}

function channel(token: string): number | null {
  const m = /^([+-]?(?:\d+\.?\d*|\.\d+))(%?)$/.exec(token);
  if (!m) return null;
  const v = Number(m[1]);
  return m[2] ? clamp((v / 100) * 255, 0, 255) : clamp(v, 0, 255);
}

function alpha(token: string | undefined): number | null {
  if (token === undefined) return 1;
  const m = /^([+-]?(?:\d+\.?\d*|\.\d+))(%?)$/.exec(token);
  if (!m) return null;
  const v = Number(m[1]);
  return clamp(m[2] ? v / 100 : v, 0, 1);
}

function hue(token: string): number | null {
  const m = /^([+-]?(?:\d+\.?\d*|\.\d+))(deg|turn|rad|grad)?$/.exec(token);
  if (!m) return null;
  const v = Number(m[1]);
  const deg = m[2] === "turn" ? v * 360 : m[2] === "rad" ? (v * 180) / Math.PI : m[2] === "grad" ? v * 0.9 : v;
  return ((deg % 360) + 360) % 360;
}

function percent(token: string): number | null {
  const m = /^([+-]?(?:\d+\.?\d*|\.\d+))%?$/.exec(token);
  return m ? clamp(Number(m[1]), 0, 100) : null;
}

/** HSL (h in degrees, s and l in percent) to sRGB channels 0–255, per CSS Color 4 §7.1. */
export function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  const sat = s / 100;
  const light = l / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const a = sat * Math.min(light, 1 - light);
    return (light - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))) * 255;
  };
  return [f(0), f(8), f(4)];
}

/** sRGB channels 0–255 to HSL (h degrees, s and l percent). Achromatic colours get hue 0. */
export function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  const [rn, gn, bn] = [r / 255, g / 255, b / 255];
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  const d = max - min;
  if (d === 0) return [0, 0, l * 100];
  const s = d / (1 - Math.abs(2 * l - 1));
  let h: number;
  if (max === rn) h = ((gn - bn) / d) % 6;
  else if (max === gn) h = (bn - rn) / d + 2;
  else h = (rn - gn) / d + 4;
  return [((h * 60) % 360 + 360) % 360, s * 100, l * 100];
}

export type ColorResult = { ok: true; rgb: Rgb } | { ok: false; error: "empty" | "invalid" };

/** Parses #rgb, #rgba, #rrggbb, #rrggbbaa, rgb()/rgba() and hsl()/hsla() colours. */
export function parseColor(raw: string): ColorResult {
  const text = raw.trim().toLowerCase();
  if (text === "") return { ok: false, error: "empty" };
  const hex = /^#?([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(text);
  if (hex) {
    let h = hex[1];
    if (h.length <= 4) h = Array.from(h, (c) => c + c).join("");
    const n = (i: number) => parseInt(h.slice(i, i + 2), 16);
    return { ok: true, rgb: { r: n(0), g: n(2), b: n(4), a: h.length === 8 ? n(6) / 255 : 1 } };
  }
  const fn = /^(rgba?|hsla?)\(\s*([^)]*)\)$/.exec(text);
  if (!fn) return { ok: false, error: "invalid" };
  const args = cssArgs(fn[2]);
  if (args.length !== 3 && args.length !== 4) return { ok: false, error: "invalid" };
  const a = alpha(args[3]);
  if (a === null) return { ok: false, error: "invalid" };
  if (fn[1].startsWith("rgb")) {
    const [r, g, b] = args.slice(0, 3).map(channel);
    if (r === null || g === null || b === null) return { ok: false, error: "invalid" };
    return { ok: true, rgb: { r, g, b, a } };
  }
  const h = hue(args[0]);
  const s = percent(args[1]);
  const l = percent(args[2]);
  if (h === null || s === null || l === null) return { ok: false, error: "invalid" };
  const [r, g, b] = hslToRgb(h, s, l);
  return { ok: true, rgb: { r, g, b, a } };
}

const hex2 = (v: number) => Math.round(clamp(v, 0, 255)).toString(16).padStart(2, "0").toUpperCase();
const trim = (v: number, digits: number) => String(Number(v.toFixed(digits)));

export function formatHex({ r, g, b, a }: Rgb): string {
  return `#${hex2(r)}${hex2(g)}${hex2(b)}${a < 1 ? hex2(a * 255) : ""}`;
}

export function formatRgb({ r, g, b, a }: Rgb): string {
  const rgb = [r, g, b].map((v) => Math.round(v)).join(", ");
  return a < 1 ? `rgba(${rgb}, ${trim(a, 3)})` : `rgb(${rgb})`;
}

export function formatHsl({ r, g, b, a }: Rgb): string {
  const [h, s, l] = rgbToHsl(Math.round(r), Math.round(g), Math.round(b));
  const body = `${trim(h, 1)}, ${trim(s, 1)}%, ${trim(l, 1)}%`;
  return a < 1 ? `hsla(${body}, ${trim(a, 3)})` : `hsl(${body})`;
}

/** WCAG 2.x relative luminance of an sRGB colour (alpha ignored). */
export function relativeLuminance({ r, g, b }: Rgb): number {
  const lin = (v: number) => {
    const c = v / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

/** WCAG contrast ratio of a colour against white and against black. */
export function contrastRatios(rgb: Rgb): { white: number; black: number } {
  const l = relativeLuminance(rgb);
  return { white: 1.05 / (l + 0.05), black: (l + 0.05) / 0.05 };
}

// ── Morse code (ITU-R M.1677-1) ───────────────────────────────────────────

/** Letters, figures and punctuation of the International Morse code, ITU-R M.1677-1 §1.1. */
export const MORSE: Readonly<Record<string, string>> = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  É: "..-..",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "0": "-----",
  ".": ".-.-.-",
  ",": "--..--",
  ":": "---...",
  "?": "..--..",
  "'": ".----.",
  "-": "-....-",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  '"': ".-..-.",
  "=": "-...-",
  "+": ".-.-.",
  "×": "-..-",
  "@": ".--.-.",
};

const FROM_MORSE: Readonly<Record<string, string>> = Object.fromEntries(
  Object.entries(MORSE)
    // × shares its code with X; decode to the letter.
    .filter(([ch]) => ch !== "×")
    .map(([ch, code]) => [code, ch]),
);

export const MORSE_MAX_LENGTH = 2000;

export type MorseResult =
  | { ok: true; direction: "encode" | "decode"; output: string; unsupported: string[] }
  | { ok: false; error: "empty" | "tooLong" | "unknownCode"; token?: string };

/** Whether the text looks like Morse code: only dots, dashes, slashes and spaces. */
export function isMorse(text: string): boolean {
  return /^[\s./|\-–—−·•_]+$/.test(text) && /[.\-·•_–—−]/.test(text);
}

/** Text → Morse (letters separated by spaces, words by " / ") or Morse → text, detected automatically. */
export function convertMorse(raw: string): MorseResult {
  const text = raw.trim();
  if (text === "") return { ok: false, error: "empty" };
  if (text.length > MORSE_MAX_LENGTH) return { ok: false, error: "tooLong" };
  if (isMorse(text)) {
    const normalized = text.replace(/[·•]/g, ".").replace(/[–—−_]/g, "-").replace(/\|/g, "/");
    const words = normalized.split(/\s*\/\s*|\s{3,}/).filter(Boolean);
    const out: string[] = [];
    for (const word of words) {
      let decoded = "";
      for (const code of word.split(/\s+/).filter(Boolean)) {
        const ch = FROM_MORSE[code];
        if (!ch) return { ok: false, error: "unknownCode", token: code };
        decoded += ch;
      }
      out.push(decoded);
    }
    return { ok: true, direction: "decode", output: out.join(" "), unsupported: [] };
  }
  const unsupported = new Set<string>();
  const words = text
    .toUpperCase()
    .split(/\s+/)
    .map((word) =>
      Array.from(word)
        .map((ch) => {
          const code = MORSE[ch];
          if (!code) unsupported.add(ch);
          return code;
        })
        .filter(Boolean)
        .join(" "),
    )
    .filter(Boolean);
  return { ok: true, direction: "encode", output: words.join(" / "), unsupported: [...unsupported] };
}

// ── Text ↔ UTF-8 bytes ────────────────────────────────────────────────────

export const BYTE_FORMATS = ["binary", "hex", "decimal"] as const;
export type ByteFormat = (typeof BYTE_FORMATS)[number];
export const TEXT_MAX_BYTES = 4096;

export function encodeText(text: string, format: ByteFormat): { bytes: number; output: string } {
  const bytes = new TextEncoder().encode(text);
  const parts = Array.from(bytes, (b) => (format === "binary" ? b.toString(2).padStart(8, "0") : format === "hex" ? b.toString(16).padStart(2, "0").toUpperCase() : String(b)));
  return { bytes: bytes.length, output: parts.join(" ") };
}

export type DecodeResult = { ok: true; text: string; bytes: number } | { ok: false; error: "empty" | "invalidDigits" | "byteRange" | "notUtf8" | "tooLong"; token?: string };

/** Decodes space-separated (or, for binary and hex, contiguous) bytes as UTF-8. */
export function decodeBytes(raw: string, format: ByteFormat): DecodeResult {
  const text = raw.trim().replace(/0x/gi, "");
  if (text === "") return { ok: false, error: "empty" };
  let tokens = text.split(/[\s,]+/).filter(Boolean);
  const width = format === "binary" ? 8 : format === "hex" ? 2 : 0;
  if (width && tokens.length === 1 && tokens[0].length > width && tokens[0].length % width === 0) {
    tokens = tokens[0].match(new RegExp(`.{${width}}`, "g")) ?? [];
  }
  if (tokens.length > TEXT_MAX_BYTES) return { ok: false, error: "tooLong" };
  const pattern = format === "binary" ? /^[01]{1,8}$/ : format === "hex" ? /^[0-9a-f]{1,2}$/i : /^\d{1,3}$/;
  const bytes: number[] = [];
  for (const token of tokens) {
    if (!pattern.test(token)) return { ok: false, error: "invalidDigits", token };
    const value = parseInt(token, format === "binary" ? 2 : format === "hex" ? 16 : 10);
    if (value > 255) return { ok: false, error: "byteRange", token };
    bytes.push(value);
  }
  try {
    return { ok: true, text: new TextDecoder("utf-8", { fatal: true }).decode(new Uint8Array(bytes)), bytes: bytes.length };
  } catch {
    return { ok: false, error: "notUtf8" };
  }
}

// ── Geographic coordinates ────────────────────────────────────────────────

export type CoordinateAxis = "lat" | "lon";
export type CoordinateResult = { ok: true; degrees: number } | { ok: false; error: "empty" | "invalid" | "range" | "minutes" | "hemisphere" };

/**
 * Parses one coordinate given as decimal degrees (−33.8688, 151.2093°E),
 * degrees and decimal minutes (33° 52.128′ S) or degrees, minutes and seconds
 * (33°52'7.7"S, 33 52 7.7 S). A hemisphere letter N, S, E or W (before or after)
 * sets the sign and must match the axis.
 */
export function parseCoordinate(raw: string, axis: CoordinateAxis): CoordinateResult {
  let text = raw
    .trim()
    .toUpperCase()
    .replace(/[′’‘`´]/g, "'")
    .replace(/[″“”]|''/g, '"')
    .replace(/,/g, ".")
    .replace(/−/g, "-");
  if (text === "") return { ok: false, error: "empty" };
  let sign = 1;
  // Only the international letters N, S, E and W: "O" means east in German but west in Romance languages.
  const hemi = /^([NSEW])\s*|\s*([NSEW])$/.exec(text);
  if (hemi) {
    const letter = hemi[1] ?? hemi[2];
    const valid = axis === "lat" ? "NS" : "EW";
    if (!valid.includes(letter)) return { ok: false, error: "hemisphere" };
    if (letter === "S" || letter === "W") sign = -1;
    text = text.replace(hemi[0], "").trim();
  }
  if (/^-/.test(text)) {
    if (hemi) return { ok: false, error: "invalid" };
    sign = -sign;
    text = text.slice(1).trim();
  } else if (/^\+/.test(text)) text = text.slice(1).trim();
  const parts = text
    .replace(/[°º˚'"]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0 || parts.length > 3 || !parts.every((p) => /^(\d+(\.\d*)?|\.\d+)$/.test(p))) return { ok: false, error: "invalid" };
  const [d, m = 0, s = 0] = parts.map(Number);
  if (parts.length >= 2 && !Number.isInteger(d)) return { ok: false, error: "invalid" };
  if (parts.length === 3 && !Number.isInteger(m)) return { ok: false, error: "invalid" };
  if (m >= 60 || s >= 60) return { ok: false, error: "minutes" };
  const degrees = sign * (d + m / 60 + s / 3600);
  const limit = axis === "lat" ? 90 : 180;
  if (Math.abs(degrees) > limit) return { ok: false, error: "range" };
  return { ok: true, degrees: degrees === 0 ? 0 : degrees };
}

/** Splits decimal degrees into whole degrees, minutes and seconds rounded to `secondsDecimals`, carrying 60s. */
export function toDms(degrees: number, secondsDecimals = 2): { d: number; m: number; s: number } {
  const abs = Math.abs(degrees);
  const scale = 10 ** secondsDecimals;
  let totalSeconds = Math.round(abs * 3600 * scale) / scale;
  const d = Math.floor(totalSeconds / 3600);
  totalSeconds -= d * 3600;
  const m = Math.floor(totalSeconds / 60);
  const s = Math.round((totalSeconds - m * 60) * scale) / scale;
  return { d, m, s };
}

/** Splits decimal degrees into whole degrees and decimal minutes rounded to `minutesDecimals`. */
export function toDdm(degrees: number, minutesDecimals = 4): { d: number; m: number } {
  const abs = Math.abs(degrees);
  const scale = 10 ** minutesDecimals;
  const totalMinutes = Math.round(abs * 60 * scale) / scale;
  const d = Math.floor(totalMinutes / 60);
  return { d, m: Math.round((totalMinutes - d * 60) * scale) / scale };
}

export function hemisphere(degrees: number, axis: CoordinateAxis): "N" | "S" | "E" | "W" {
  if (axis === "lat") return degrees < 0 ? "S" : "N";
  return degrees < 0 ? "W" : "E";
}

// ── Base64 (RFC 4648) ─────────────────────────────────────────────────────

export type Base64Result = { ok: true; output: string; bytes: number } | { ok: false; error: "empty" | "invalid" | "notUtf8" | "tooLong" };
export const BASE64_MAX_CHARS = 100_000;

function bytesToBinary(bytes: Uint8Array): string {
  let out = "";
  for (let i = 0; i < bytes.length; i += 0x8000) out += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return out;
}

/** Encodes text as UTF-8 and then Base64, optionally in the URL-safe alphabet without padding (RFC 4648 §5). */
export function encodeBase64(text: string, urlSafe: boolean): Base64Result {
  if (text.length > BASE64_MAX_CHARS) return { ok: false, error: "tooLong" };
  const bytes = new TextEncoder().encode(text);
  const standard = btoa(bytesToBinary(bytes));
  return { ok: true, bytes: bytes.length, output: urlSafe ? standard.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : standard };
}

/** Decodes standard or URL-safe Base64 (padding optional, whitespace ignored) and reads the bytes as UTF-8. */
export function decodeBase64(raw: string): Base64Result {
  const text = raw.replace(/\s+/g, "");
  if (text === "") return { ok: false, error: "empty" };
  if (text.length > BASE64_MAX_CHARS) return { ok: false, error: "tooLong" };
  const standard = text.replace(/-/g, "+").replace(/_/g, "/");
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(standard)) return { ok: false, error: "invalid" };
  const unpadded = standard.replace(/=+$/, "");
  if (unpadded.length % 4 === 1) return { ok: false, error: "invalid" };
  const padded = unpadded + "=".repeat((4 - (unpadded.length % 4)) % 4);
  let binary: string;
  try {
    binary = atob(padded);
  } catch {
    return { ok: false, error: "invalid" };
  }
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  try {
    return { ok: true, output: new TextDecoder("utf-8", { fatal: true }).decode(bytes), bytes: bytes.length };
  } catch {
    return { ok: false, error: "notUtf8" };
  }
}

// ── URL percent-encoding (RFC 3986) ───────────────────────────────────────

export type UrlMode = "component" | "uri";
export type UrlResult = { ok: true; output: string } | { ok: false; error: "empty" | "malformed" | "tooLong" };
export const URL_MAX_CHARS = 100_000;

/**
 * Percent-encodes UTF-8 text. "component" encodes everything except the RFC 3986
 * unreserved characters (also ! ' ( ) * as reserved sub-delimiters), for query values;
 * "uri" keeps the characters that structure a full URL (: / ? # & = …).
 */
export function encodeUrl(text: string, mode: UrlMode): UrlResult {
  if (text === "") return { ok: false, error: "empty" };
  if (text.length > URL_MAX_CHARS) return { ok: false, error: "tooLong" };
  try {
    const out = mode === "component" ? encodeURIComponent(text).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`) : encodeURI(text);
    return { ok: true, output: out };
  } catch {
    // Lone surrogates cannot be encoded as UTF-8.
    return { ok: false, error: "malformed" };
  }
}

/** Decodes %XX sequences as UTF-8; optionally turns "+" into a space (HTML form encoding). */
export function decodeUrl(text: string, plusAsSpace: boolean): UrlResult {
  if (text === "") return { ok: false, error: "empty" };
  if (text.length > URL_MAX_CHARS) return { ok: false, error: "tooLong" };
  try {
    return { ok: true, output: decodeURIComponent(plusAsSpace ? text.replace(/\+/g, " ") : text) };
  } catch {
    return { ok: false, error: "malformed" };
  }
}

// ── Tyre sizes (ISO metric designation) ───────────────────────────────────

export interface TireSize {
  /** Section width in millimetres. */
  width: number;
  /** Aspect ratio: sidewall height as a percentage of the width. */
  aspect: number;
  /** Rim diameter in inches. */
  rim: number;
}

export interface TireDimensions {
  sidewallMm: number;
  diameterMm: number;
  circumferenceMm: number;
  revsPerKm: number;
  revsPerMile: number;
}

export type TireResult = { ok: true; size: TireSize; dims: TireDimensions } | { ok: false; error: "empty" | "invalid" | "range" };

/** Parses designations such as 225/45R17, P215/65R15, LT245/75R16 or 205/55 ZR 16. */
export function parseTireSize(raw: string): TireResult {
  const text = raw.trim().toUpperCase();
  if (text === "") return { ok: false, error: "empty" };
  const m = /^(?:P|LT|T|ST)?\s*(\d{3})\s*\/\s*(\d{2,3})\s*(?:[A-Z]{0,2}R|-|D|B)?\s*(\d{2}(?:[.,]\d)?)(?:\s+.*)?$/.exec(text);
  if (!m) return { ok: false, error: "invalid" };
  const size = { width: Number(m[1]), aspect: Number(m[2]), rim: Number(m[3].replace(",", ".")) };
  if (size.width < 100 || size.width > 500 || size.aspect < 20 || size.aspect > 120 || size.rim < 10 || size.rim > 30) return { ok: false, error: "range" };
  return { ok: true, size, dims: tireDimensions(size) };
}

export function tireDimensions({ width, aspect, rim }: TireSize): TireDimensions {
  const sidewallMm = (width * aspect) / 100;
  const diameterMm = rim * 25.4 + 2 * sidewallMm;
  const circumferenceMm = Math.PI * diameterMm;
  return { sidewallMm, diameterMm, circumferenceMm, revsPerKm: 1e6 / circumferenceMm, revsPerMile: 1609344 / circumferenceMm };
}

// ── Decimals and fractions ────────────────────────────────────────────────

export interface Fraction {
  num: bigint;
  den: bigint;
}

const gcdBig = (a: bigint, b: bigint): bigint => {
  let x = a < 0n ? -a : a;
  let y = b < 0n ? -b : b;
  while (y) [x, y] = [y, x % y];
  return x || 1n;
};

export function reduceFraction(num: bigint, den: bigint): Fraction {
  const sign = den < 0n ? -1n : 1n;
  const g = gcdBig(num, den);
  return { num: (sign * num) / g, den: (sign * den) / g };
}

export type FractionResult = { ok: true; exact: Fraction; value: number } | { ok: false; error: "empty" | "invalid" | "tooLong" };

/**
 * Reads a decimal number given as plain text with a dot (already locale-normalised),
 * an optional exponent, or a fraction "a/b", and returns it as an exact reduced fraction.
 */
export function parseExactFraction(text: string): FractionResult {
  const t = text.trim();
  if (t === "") return { ok: false, error: "empty" };
  if (t.length > 40) return { ok: false, error: "tooLong" };
  const frac = /^([+-]?\d+)\s*\/\s*(\d+)$/.exec(t);
  if (frac) {
    if (BigInt(frac[2]) === 0n) return { ok: false, error: "invalid" };
    const exact = reduceFraction(BigInt(frac[1]), BigInt(frac[2]));
    return { ok: true, exact, value: Number(frac[1]) / Number(frac[2]) };
  }
  const m = /^([+-]?)(\d*)(?:\.(\d*))?(?:e([+-]?\d{1,3}))?$/i.exec(t);
  if (!m || (m[2] === "" && (m[3] ?? "") === "")) return { ok: false, error: "invalid" };
  const digits = `${m[2]}${m[3] ?? ""}` || "0";
  const exp = Number(m[4] ?? 0) - (m[3] ?? "").length;
  if (Math.abs(exp) > 60) return { ok: false, error: "tooLong" };
  let num = BigInt(digits) * (m[1] === "-" ? -1n : 1n);
  let den = 1n;
  if (exp >= 0) num *= 10n ** BigInt(exp);
  else den = 10n ** BigInt(-exp);
  const exact = reduceFraction(num, den);
  return { ok: true, exact, value: Number(t) };
}

/** Best rational approximation with denominator ≤ maxDen (continued fractions with semiconvergents). */
export function bestRational(x: number, maxDen: number): { num: number; den: number } {
  if (!Number.isFinite(x)) return { num: 0, den: 1 };
  const sign = x < 0 ? -1 : 1;
  let value = Math.abs(x);
  let [h0, h1, k0, k1] = [0, 1, 1, 0];
  for (let i = 0; i < 64; i++) {
    const a = Math.floor(value);
    const k2 = a * k1 + k0;
    if (k2 > maxDen) {
      // Largest semiconvergent that still fits.
      const t = Math.floor((maxDen - k0) / k1);
      const hs = t * h1 + h0;
      const ks = t * k1 + k0;
      const target = Math.abs(x);
      if (ks > 0 && Math.abs(hs / ks - target) < Math.abs(h1 / k1 - target)) return { num: sign * hs, den: ks };
      return { num: sign * h1, den: k1 };
    }
    [h0, h1] = [h1, a * h1 + h0];
    [k0, k1] = [k1, k2];
    const frac = value - a;
    if (frac < 1e-12) break;
    value = 1 / frac;
  }
  return { num: sign * h1, den: k1 };
}

/** Rounds to the nearest multiple of 1/den (for inch rulers), reduced. */
export function nearestFraction(x: number, den: number): { num: number; den: number } {
  const n = Math.round(x * den);
  const r = reduceFraction(BigInt(n), BigInt(den));
  return { num: Number(r.num), den: Number(r.den) };
}

/** Splits an improper fraction into a whole part and a proper fraction (sign on the whole part, or on the fraction if the whole part is 0). */
export function mixedParts(num: bigint, den: bigint): { whole: bigint; num: bigint; den: bigint; negative: boolean } {
  const negative = num < 0n;
  const a = negative ? -num : num;
  return { whole: a / den, num: a % den, den, negative };
}

// ── Paper sizes (ISO 216, ISO 269, ANSI) ─────────────────────────────────

export interface PaperSize {
  id: string;
  /** Width and height in the unit the standard defines them in. */
  width: number;
  height: number;
  unit: "mm" | "in";
  series: "a" | "b" | "c" | "us" | "ansi";
}

/** ISO series by repeated halving of the long side, rounding each result down to whole millimetres. */
function isoSeries(prefix: "A" | "B" | "C", w0: number, h0: number): PaperSize[] {
  const out: PaperSize[] = [];
  let [w, h] = [w0, h0];
  for (let i = 0; i <= 10; i++) {
    out.push({ id: `${prefix}${i}`, width: w, height: h, unit: "mm", series: prefix.toLowerCase() as "a" | "b" | "c" });
    [w, h] = [Math.floor(h / 2), w];
  }
  return out;
}

export const PAPER_SIZES: readonly PaperSize[] = [
  ...isoSeries("A", 841, 1189),
  ...isoSeries("B", 1000, 1414),
  ...isoSeries("C", 917, 1297),
  { id: "letter", width: 8.5, height: 11, unit: "in", series: "us" },
  { id: "legal", width: 8.5, height: 14, unit: "in", series: "us" },
  { id: "tabloid", width: 11, height: 17, unit: "in", series: "us" },
  { id: "executive", width: 7.25, height: 10.5, unit: "in", series: "us" },
  { id: "half-letter", width: 5.5, height: 8.5, unit: "in", series: "us" },
  { id: "ansi-c", width: 17, height: 22, unit: "in", series: "ansi" },
  { id: "ansi-d", width: 22, height: 34, unit: "in", series: "ansi" },
  { id: "ansi-e", width: 34, height: 44, unit: "in", series: "ansi" },
];

/** A paper size in millimetres, inches, points (1/72 in) and pixels at a given resolution. */
export function paperDimensions(size: PaperSize, dpi: number) {
  const mm = size.unit === "mm" ? [size.width, size.height] : [size.width * 25.4, size.height * 25.4];
  const inches = size.unit === "in" ? [size.width, size.height] : [size.width / 25.4, size.height / 25.4];
  return {
    mm: mm as [number, number],
    cm: [mm[0] / 10, mm[1] / 10] as [number, number],
    in: inches as [number, number],
    pt: [inches[0] * 72, inches[1] * 72] as [number, number],
    px: [Math.round(inches[0] * dpi), Math.round(inches[1] * dpi)] as [number, number],
  };
}
