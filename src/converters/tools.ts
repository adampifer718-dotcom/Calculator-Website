/*
 * Logic for the text-based converter tools: Roman numerals, Unix time, CSS
 * colours, Morse code, text ↔ UTF-8 bytes, geographic coordinates and the
 * text tools (counts, HTML entities, hashes, Unicode, time zones, JSON).
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

// ── Word and character counts ─────────────────────────────────────────────

export interface TextStats {
  words: number;
  /** User-perceived characters (extended grapheme clusters). */
  characters: number;
  charactersNoSpaces: number;
  sentences: number;
  /** Blocks of text separated by one or more blank lines. */
  paragraphs: number;
  lines: number;
  bytes: number;
}

export const TEXT_STATS_MAX_CHARS = 1_000_000;

type SegmenterLike = { segment(text: string): Iterable<{ segment: string; isWordLike?: boolean }> };
type SegmenterCtor = new (locale: string, options: { granularity: "grapheme" | "word" | "sentence" }) => SegmenterLike;

function segmenter(locale: string, granularity: "grapheme" | "word" | "sentence"): SegmenterLike | null {
  const Ctor = (Intl as unknown as { Segmenter?: SegmenterCtor }).Segmenter;
  if (!Ctor) return null;
  try {
    return new Ctor(locale, { granularity });
  } catch {
    return new Ctor("en", { granularity });
  }
}

const WHITESPACE = /^\s+$/u;

/**
 * Counts words, characters, sentences, paragraphs, lines and UTF-8 bytes.
 * Words and sentences use Intl.Segmenter (Unicode UAX #29 with the browser's
 * dictionaries), so scripts without spaces between words are handled; without
 * Segmenter, words are split on whitespace. Pass `useSegmenter = false` to force the fallback.
 */
export function textStats(text: string, locale: string, useSegmenter = true): TextStats {
  const normalized = text.replace(/\r\n?/g, "\n");
  const graphemes = useSegmenter ? segmenter(locale, "grapheme") : null;
  const wordSeg = useSegmenter ? segmenter(locale, "word") : null;
  const sentenceSeg = useSegmenter ? segmenter(locale, "sentence") : null;

  let characters = 0;
  let charactersNoSpaces = 0;
  const chars = graphemes ? Array.from(graphemes.segment(normalized), (s) => s.segment) : Array.from(normalized);
  for (const c of chars) {
    characters++;
    if (!WHITESPACE.test(c)) charactersNoSpaces++;
  }

  let words = 0;
  if (wordSeg) {
    for (const s of wordSeg.segment(normalized)) if (s.isWordLike) words++;
  } else {
    words = normalized.split(/\s+/u).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  }

  let sentences = 0;
  if (sentenceSeg) {
    for (const s of sentenceSeg.segment(normalized)) if (/[\p{L}\p{N}]/u.test(s.segment)) sentences++;
  } else {
    sentences = normalized.split(/[.!?。؟۔]+(?:\s+|$)/u).filter((s) => /[\p{L}\p{N}]/u.test(s)).length;
  }

  const paragraphs = normalized.split(/\n[^\S\n]*\n\s*/).filter((p) => p.trim() !== "").length;
  const lines = normalized === "" ? 0 : normalized.split("\n").length;
  return { words, characters, charactersNoSpaces, sentences, paragraphs, lines, bytes: new TextEncoder().encode(text).length };
}

/** Time to read or speak a number of words at a rate in words per minute, in whole seconds (rounded up). */
export function durationSeconds(words: number, wordsPerMinute: number): number {
  if (!(wordsPerMinute > 0) || words <= 0) return 0;
  return Math.ceil((words / wordsPerMinute) * 60);
}

// ── HTML character references (WHATWG HTML) ───────────────────────────────

/** Latin-1 Supplement names, U+00A0 to U+00FF in order. */
const LATIN1_NAMES =
  "nbsp iexcl cent pound curren yen brvbar sect uml copy ordf laquo not shy reg macr deg plusmn sup2 sup3 acute micro para middot cedil sup1 ordm raquo frac14 frac12 frac34 iquest Agrave Aacute Acirc Atilde Auml Aring AElig Ccedil Egrave Eacute Ecirc Euml Igrave Iacute Icirc Iuml ETH Ntilde Ograve Oacute Ocirc Otilde Ouml times Oslash Ugrave Uacute Ucirc Uuml Yacute THORN szlig agrave aacute acirc atilde auml aring aelig ccedil egrave eacute ecirc euml igrave iacute icirc iuml eth ntilde ograve oacute ocirc otilde ouml divide oslash ugrave uacute ucirc uuml yacute thorn yuml".split(
    " ",
  );

/** Common named character references decoded by the tool (a subset of the WHATWG list). */
export const HTML_NAMED_ENTITIES: Readonly<Record<string, number>> = {
  amp: 0x26,
  lt: 0x3c,
  gt: 0x3e,
  quot: 0x22,
  apos: 0x27,
  ...Object.fromEntries(LATIN1_NAMES.map((name, i) => [name, 0xa0 + i])),
  OElig: 0x152,
  oelig: 0x153,
  Scaron: 0x160,
  scaron: 0x161,
  Yuml: 0x178,
  fnof: 0x192,
  circ: 0x2c6,
  tilde: 0x2dc,
  ensp: 0x2002,
  emsp: 0x2003,
  thinsp: 0x2009,
  zwnj: 0x200c,
  zwj: 0x200d,
  lrm: 0x200e,
  rlm: 0x200f,
  ndash: 0x2013,
  mdash: 0x2014,
  lsquo: 0x2018,
  rsquo: 0x2019,
  sbquo: 0x201a,
  ldquo: 0x201c,
  rdquo: 0x201d,
  bdquo: 0x201e,
  dagger: 0x2020,
  Dagger: 0x2021,
  bull: 0x2022,
  hellip: 0x2026,
  permil: 0x2030,
  prime: 0x2032,
  Prime: 0x2033,
  lsaquo: 0x2039,
  rsaquo: 0x203a,
  euro: 0x20ac,
  trade: 0x2122,
  larr: 0x2190,
  uarr: 0x2191,
  rarr: 0x2192,
  darr: 0x2193,
  harr: 0x2194,
  minus: 0x2212,
  infin: 0x221e,
  asymp: 0x2248,
  ne: 0x2260,
  le: 0x2264,
  ge: 0x2265,
};

/** WHATWG HTML: numeric references to C1 controls 0x80–0x9F map to their windows-1252 characters. */
const C1_REPLACEMENTS: Readonly<Record<number, number>> = {
  0x80: 0x20ac, 0x82: 0x201a, 0x83: 0x0192, 0x84: 0x201e, 0x85: 0x2026, 0x86: 0x2020, 0x87: 0x2021, 0x88: 0x02c6, 0x89: 0x2030, 0x8a: 0x0160, 0x8b: 0x2039, 0x8c: 0x0152, 0x8e: 0x017d,
  0x91: 0x2018, 0x92: 0x2019, 0x93: 0x201c, 0x94: 0x201d, 0x95: 0x2022, 0x96: 0x2013, 0x97: 0x2014, 0x98: 0x02dc, 0x99: 0x2122, 0x9a: 0x0161, 0x9b: 0x203a, 0x9c: 0x0153, 0x9e: 0x017e, 0x9f: 0x0178,
};

export const HTML_MAX_CHARS = 200_000;

export type HtmlResult = { ok: true; output: string; replaced: number; unknown: string[] } | { ok: false; error: "empty" | "tooLong" };

const isSurrogate = (cp: number) => cp >= 0xd800 && cp <= 0xdfff;
const hexUpper = (n: number) => n.toString(16).toUpperCase();

/** Escapes & < > " ' (the apostrophe as &#39;); optionally writes every non-ASCII character as &#x…; by code point. */
export function encodeHtml(text: string, nonAscii: boolean): HtmlResult {
  if (text === "") return { ok: false, error: "empty" };
  if (text.length > HTML_MAX_CHARS) return { ok: false, error: "tooLong" };
  const basic: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  let out = "";
  for (const ch of text) {
    const cp = ch.codePointAt(0)!;
    if (basic[ch]) out += basic[ch];
    else if (nonAscii && cp > 0x7f) out += `&#x${hexUpper(isSurrogate(cp) ? 0xfffd : cp)};`;
    else out += ch;
  }
  return { ok: true, output: out, replaced: 0, unknown: [] };
}

/**
 * Decodes decimal and hexadecimal numeric references and the common named
 * references above. Following the WHATWG HTML parser, a numeric reference to
 * 0, a surrogate or a value above 0x10FFFF becomes U+FFFD and C1 controls map
 * to windows-1252. Unknown names (and references without a semicolon) are left as they are.
 */
export function decodeHtml(text: string): HtmlResult {
  if (text === "") return { ok: false, error: "empty" };
  if (text.length > HTML_MAX_CHARS) return { ok: false, error: "tooLong" };
  let replaced = 0;
  const unknown = new Set<string>();
  const output = text.replace(/&(?:#([0-9]+)|#[xX]([0-9A-Fa-f]+)|([A-Za-z][A-Za-z0-9]*));/g, (match, dec: string | undefined, hex: string | undefined, name: string | undefined) => {
    if (name !== undefined) {
      const cp = HTML_NAMED_ENTITIES[name];
      if (cp === undefined) {
        unknown.add(match);
        return match;
      }
      return String.fromCodePoint(cp);
    }
    const digits = (dec ?? hex)!.replace(/^0+/, "");
    let cp = digits.length > 8 ? Infinity : parseInt(digits || "0", dec !== undefined ? 10 : 16);
    if (cp === 0 || cp > 0x10ffff || isSurrogate(cp)) {
      replaced++;
      cp = 0xfffd;
    } else if (C1_REPLACEMENTS[cp]) cp = C1_REPLACEMENTS[cp];
    return String.fromCodePoint(cp);
  });
  return { ok: true, output, replaced, unknown: [...unknown] };
}

// ── SHA hashes (FIPS 180-4, via Web Crypto) ───────────────────────────────

export const HASH_ALGORITHMS = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"] as const;
export type HashAlgorithm = (typeof HASH_ALGORITHMS)[number];
export const HASH_MAX_CHARS = 5_000_000;

export function bytesToHex(bytes: Uint8Array): string {
  let out = "";
  for (const b of bytes) out += b.toString(16).padStart(2, "0");
  return out;
}

export function bytesToBase64(bytes: Uint8Array): string {
  return btoa(bytesToBinary(bytes));
}

/** Whether the browser offers crypto.subtle (only in secure contexts: HTTPS or localhost). */
export function hashAvailable(): boolean {
  return typeof globalThis.crypto !== "undefined" && typeof globalThis.crypto.subtle?.digest === "function";
}

/** Digest of the UTF-8 bytes of a text, as lower-case hex and Base64. */
export async function hashText(text: string, algorithm: HashAlgorithm): Promise<{ hex: string; base64: string }> {
  const digest = new Uint8Array(await globalThis.crypto.subtle.digest(algorithm, new TextEncoder().encode(text)));
  return { hex: bytesToHex(digest), base64: bytesToBase64(digest) };
}

// ── Unicode code points (The Unicode Standard, RFC 3629) ──────────────────

export const MAX_CODE_POINT = 0x10ffff;
export const CODE_POINT_TABLE_LIMIT = 500;

export interface CodePointInfo {
  char: string;
  codePoint: number;
  /** U+00E9 */
  notation: string;
  /** UTF-8 bytes in hex, e.g. "C3 A9"; empty for a lone surrogate, which has no UTF-8 form. */
  utf8: string;
  /** UTF-16 code units in hex, e.g. "D83D DE00". */
  utf16: string;
  html: string;
  js: string;
  /** A lone surrogate code unit (not a Unicode scalar value). */
  loneSurrogate: boolean;
}

export const codePointNotation = (cp: number) => `U+${hexUpper(cp).padStart(4, "0")}`;

/** UTF-8 encoding of a Unicode scalar value (RFC 3629 §3). */
export function utf8Bytes(cp: number): number[] {
  if (cp < 0x80) return [cp];
  if (cp < 0x800) return [0xc0 | (cp >> 6), 0x80 | (cp & 0x3f)];
  if (cp < 0x10000) return [0xe0 | (cp >> 12), 0x80 | ((cp >> 6) & 0x3f), 0x80 | (cp & 0x3f)];
  return [0xf0 | (cp >> 18), 0x80 | ((cp >> 12) & 0x3f), 0x80 | ((cp >> 6) & 0x3f), 0x80 | (cp & 0x3f)];
}

export function utf16Units(cp: number): number[] {
  if (cp < 0x10000) return [cp];
  const v = cp - 0x10000;
  return [0xd800 + (v >> 10), 0xdc00 + (v & 0x3ff)];
}

export function describeCodePoint(char: string): CodePointInfo {
  const cp = char.codePointAt(0)!;
  const lone = isSurrogate(cp);
  const hex2 = (n: number) => hexUpper(n).padStart(2, "0");
  return {
    char,
    codePoint: cp,
    notation: codePointNotation(cp),
    utf8: lone ? "" : utf8Bytes(cp).map(hex2).join(" "),
    utf16: utf16Units(cp)
      .map((u) => hexUpper(u).padStart(4, "0"))
      .join(" "),
    html: `&#x${hexUpper(lone ? 0xfffd : cp)};`,
    js: `\\u{${hexUpper(cp)}}`,
    loneSurrogate: lone,
  };
}

/** One row per code point (not per UTF-16 unit), capped at `limit` rows. */
export function describeText(text: string, limit = CODE_POINT_TABLE_LIMIT): { rows: CodePointInfo[]; total: number } {
  const rows: CodePointInfo[] = [];
  let total = 0;
  for (const ch of text) {
    if (total < limit) rows.push(describeCodePoint(ch));
    total++;
  }
  return { rows, total };
}

export type CodePointParseResult =
  | { ok: true; text: string; count: number }
  | { ok: false; error: "empty" | "invalidToken" | "range" | "surrogate" | "loneSurrogate" | "tooLong"; token?: string };

export const CODE_POINT_MAX_TOKENS = 5000;

/**
 * Parses code points written as U+XXXX, 0xXXXX, \u{X…} or \uXXXX (UTF-16 units;
 * a high and low surrogate in a row form one character), separated by spaces or commas.
 */
export function parseCodePoints(raw: string): CodePointParseResult {
  const text = raw.trim();
  if (text === "") return { ok: false, error: "empty" };
  const token = /(?:[Uu]\+([0-9A-Fa-f]{1,6})|0[xX]([0-9A-Fa-f]{1,6})|\\u\{([0-9A-Fa-f]{1,6})\}|\\u([0-9A-Fa-f]{4}))(?=$|[\s,]|\\u)/y;
  const separator = /[\s,]*/y;
  const units: { value: number; raw: string; utf16: boolean }[] = [];
  let pos = 0;
  while (pos < text.length) {
    token.lastIndex = pos;
    const m = token.exec(text);
    if (!m) {
      const bad = /^[^\s,]+/.exec(text.slice(pos))?.[0] ?? text.slice(pos, pos + 1);
      return { ok: false, error: "invalidToken", token: bad };
    }
    const hex = m[1] ?? m[2] ?? m[3] ?? m[4];
    units.push({ value: parseInt(hex, 16), raw: m[0], utf16: m[4] !== undefined });
    if (units.length > CODE_POINT_MAX_TOKENS) return { ok: false, error: "tooLong" };
    pos = token.lastIndex;
    separator.lastIndex = pos;
    separator.exec(text);
    pos = separator.lastIndex;
  }
  let out = "";
  let count = 0;
  for (let i = 0; i < units.length; i++) {
    const u = units[i];
    if (u.value > MAX_CODE_POINT) return { ok: false, error: "range", token: u.raw };
    if (isSurrogate(u.value)) {
      const next = units[i + 1];
      const pair = u.utf16 && u.value <= 0xdbff && next?.utf16 && next.value >= 0xdc00 && next.value <= 0xdfff;
      if (pair) {
        out += String.fromCharCode(u.value, next.value);
        i++;
        count++;
        continue;
      }
      return { ok: false, error: u.utf16 ? "loneSurrogate" : "surrogate", token: u.raw };
    }
    out += String.fromCodePoint(u.value);
    count++;
  }
  return { ok: true, text: out, count };
}

// ── Time zones (IANA tz database via Intl) ────────────────────────────────

/** Used when Intl.supportedValuesOf is missing, and for the first (server) render. */
export const FALLBACK_TIME_ZONES: readonly string[] = [
  "UTC",
  "Africa/Cairo",
  "Africa/Johannesburg",
  "Africa/Lagos",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "America/Mexico_City",
  "America/New_York",
  "America/Sao_Paulo",
  "America/Toronto",
  "Asia/Dhaka",
  "Asia/Dubai",
  "Asia/Hong_Kong",
  "Asia/Jakarta",
  "Asia/Karachi",
  "Asia/Kolkata",
  "Asia/Riyadh",
  "Asia/Seoul",
  "Asia/Shanghai",
  "Asia/Singapore",
  "Asia/Tokyo",
  "Australia/Sydney",
  "Europe/Amsterdam",
  "Europe/Berlin",
  "Europe/Istanbul",
  "Europe/Lisbon",
  "Europe/London",
  "Europe/Madrid",
  "Europe/Moscow",
  "Europe/Paris",
  "Europe/Rome",
  "Pacific/Auckland",
];

/** Every IANA zone the browser knows, with UTC first. */
export function supportedTimeZones(): string[] {
  const list = (Intl as unknown as { supportedValuesOf?: (key: string) => string[] }).supportedValuesOf?.("timeZone");
  if (!list || list.length === 0) return [...FALLBACK_TIME_ZONES];
  return ["UTC", ...list.filter((z) => z !== "UTC")];
}

export function isTimeZone(zone: string): boolean {
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: zone });
    return true;
  } catch {
    return false;
  }
}

export interface WallTime {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export type WallTimeResult = { ok: true; wall: WallTime } | { ok: false; error: "empty" | "invalid" };

/** Reads "YYYY-MM-DDTHH:mm" with optional ":ss" (a space instead of T is also accepted); years 1–9999. */
export function parseWallTime(raw: string): WallTimeResult {
  const text = raw.trim();
  if (text === "") return { ok: false, error: "empty" };
  const m = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?$/.exec(text);
  if (!m) return { ok: false, error: "invalid" };
  const [year, month, day, hour, minute, second] = m.slice(1).map((v) => Number(v ?? 0));
  if (year < 1 || month < 1 || month > 12 || hour > 23 || minute > 59 || second > 59) return { ok: false, error: "invalid" };
  const daysInMonth = new Date(Date.UTC(2000, month, 0)).getUTCDate() - (month === 2 && !isLeap(year) ? 1 : 0);
  if (day < 1 || day > daysInMonth) return { ok: false, error: "invalid" };
  return { ok: true, wall: { year, month, day, hour, minute, second } };
}

const isLeap = (y: number) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;

/** The wall time read as if it were UTC, in milliseconds (handles years below 100). */
export function wallAsUtc(w: WallTime): number {
  const d = new Date(Date.UTC(2000, w.month - 1, w.day, w.hour, w.minute, w.second));
  d.setUTCFullYear(w.year);
  return d.getTime();
}

const PART_FORMATS = new Map<string, Intl.DateTimeFormat>();

/** Wall-clock time of an instant in a zone. */
export function wallTimeAt(ms: number, timeZone: string): WallTime {
  let dtf = PART_FORMATS.get(timeZone);
  if (!dtf) {
    dtf = new Intl.DateTimeFormat("en-US", { timeZone, hourCycle: "h23", era: "short", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" });
    PART_FORMATS.set(timeZone, dtf);
  }
  const parts: Record<string, string> = {};
  for (const p of dtf.formatToParts(new Date(ms))) parts[p.type] = p.value;
  const year = Number(parts.year);
  return {
    year: /^B/.test(parts.era ?? "") ? 1 - year : year,
    month: Number(parts.month),
    day: Number(parts.day),
    hour: Number(parts.hour) % 24,
    minute: Number(parts.minute),
    second: Number(parts.second),
  };
}

/** Offset of a zone from UTC at an instant, in milliseconds (local − UTC). */
export function zoneOffsetMs(ms: number, timeZone: string): number {
  const whole = Math.floor(ms / 1000) * 1000;
  return wallAsUtc(wallTimeAt(whole, timeZone)) - whole;
}

export type ZonedResult = { ok: true; ms: number; offsetMs: number; status: "exact" | "gap" | "ambiguous"; laterOffsetMs?: number } | { ok: false; error: "zone" };

/**
 * The instant at which a zone's clocks show a wall time. Candidate offsets are
 * taken a day before and after, and kept when they map back to the same wall
 * time. Two matches (clocks set back): the earlier instant is used. No match
 * (clocks set forward): the time is moved forward by the gap, as most calendar software does.
 */
export function zonedToInstant(wall: WallTime, timeZone: string): ZonedResult {
  if (!isTimeZone(timeZone)) return { ok: false, error: "zone" };
  const local = wallAsUtc(wall);
  const day = 86_400_000;
  const before = zoneOffsetMs(local - day, timeZone);
  const after = zoneOffsetMs(local + day, timeZone);
  const offsets = [...new Set([before, zoneOffsetMs(local, timeZone), after])];
  const matches = offsets
    .map((offset) => local - offset)
    .filter((ms) => zoneOffsetMs(ms, timeZone) === local - ms)
    .sort((a, b) => a - b);
  const unique = [...new Set(matches)];
  if (unique.length >= 2) {
    return { ok: true, ms: unique[0], offsetMs: local - unique[0], status: "ambiguous", laterOffsetMs: local - unique[unique.length - 1] };
  }
  if (unique.length === 1) return { ok: true, ms: unique[0], offsetMs: local - unique[0], status: "exact" };
  const ms = local - before;
  return { ok: true, ms, offsetMs: zoneOffsetMs(ms, timeZone), status: "gap" };
}

/** ±hh:mm (±hh:mm:ss for historical offsets with seconds). */
export function formatOffset(offsetMs: number): string {
  const sign = offsetMs < 0 ? "-" : "+";
  const total = Math.round(Math.abs(offsetMs) / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${sign}${pad(h)}:${pad(m)}${s ? `:${pad(s)}` : ""}`;
}

/** "YYYY-MM-DDTHH:mm" for a datetime-local input. */
export function formatWallInput(w: WallTime): string {
  const pad = (n: number, l = 2) => String(n).padStart(l, "0");
  return `${pad(w.year, 4)}-${pad(w.month)}-${pad(w.day)}T${pad(w.hour)}:${pad(w.minute)}`;
}

// ── JSON (RFC 8259) ───────────────────────────────────────────────────────

export type JsonNode =
  | { type: "object"; entries: [string, JsonNode][] }
  | { type: "array"; items: JsonNode[] }
  | { type: "string"; value: string }
  /** Number tokens keep their source text, so no precision is lost when reformatting. */
  | { type: "number"; raw: string }
  | { type: "literal"; raw: "true" | "false" | "null" };

export type JsonErrorCode =
  | "empty"
  | "tooLong"
  | "tooDeep"
  | "unexpectedToken"
  | "unexpectedEnd"
  | "unterminatedString"
  | "invalidEscape"
  | "controlCharacter"
  | "invalidNumber"
  | "trailingComma"
  | "expectedColon"
  | "expectedKey"
  | "trailingData";

export type JsonParseResult =
  | { ok: true; value: JsonNode; duplicateKeys: number }
  | { ok: false; error: JsonErrorCode; offset: number; line: number; column: number };

export const JSON_MAX_CHARS = 2_000_000;
export const JSON_MAX_DEPTH = 1000;

class JsonSyntaxError extends Error {
  constructor(
    readonly code: JsonErrorCode,
    readonly offset: number,
  ) {
    super(code);
  }
}

/** 1-based line and column (in code points) of a UTF-16 offset. */
export function lineColumn(text: string, offset: number): { line: number; column: number } {
  const before = text.slice(0, offset);
  const lineStart = before.lastIndexOf("\n") + 1;
  const line = (before.match(/\n/g)?.length ?? 0) + 1;
  return { line, column: Array.from(before.slice(lineStart)).length + 1 };
}

/** A strict RFC 8259 parser that reports where and why a document is invalid. Duplicate keys: the last value wins, as in JSON.parse. */
export function parseJson(text: string): JsonParseResult {
  if (text.trim() === "") return { ok: false, error: "empty", offset: 0, line: 1, column: 1 };
  if (text.length > JSON_MAX_CHARS) return { ok: false, error: "tooLong", offset: 0, line: 1, column: 1 };
  let pos = text.charCodeAt(0) === 0xfeff ? 1 : 0;
  let duplicateKeys = 0;
  const fail = (code: JsonErrorCode, at = pos): never => {
    throw new JsonSyntaxError(code, at);
  };
  const ws = () => {
    while (pos < text.length) {
      const c = text.charCodeAt(pos);
      if (c === 0x20 || c === 0x09 || c === 0x0a || c === 0x0d) pos++;
      else break;
    }
  };
  const unexpected = (): never => fail(pos >= text.length ? "unexpectedEnd" : "unexpectedToken");

  const parseString = (): string => {
    const start = pos;
    pos++; // opening quote
    let out = "";
    let chunk = pos;
    while (true) {
      if (pos >= text.length) fail("unterminatedString", start);
      const c = text.charCodeAt(pos);
      if (c === 0x22) {
        out += text.slice(chunk, pos);
        pos++;
        return out;
      }
      if (c < 0x20) fail(c === 0x0a ? "unterminatedString" : "controlCharacter", c === 0x0a ? start : pos);
      if (c === 0x5c) {
        out += text.slice(chunk, pos);
        const e = text[pos + 1];
        const simple: Record<string, string> = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: "\n", r: "\r", t: "\t" };
        if (e !== undefined && simple[e] !== undefined) {
          out += simple[e];
          pos += 2;
        } else if (e === "u" && /^[0-9A-Fa-f]{4}$/.test(text.slice(pos + 2, pos + 6))) {
          out += String.fromCharCode(parseInt(text.slice(pos + 2, pos + 6), 16));
          pos += 6;
        } else fail(e === undefined ? "unterminatedString" : "invalidEscape", e === undefined ? start : pos);
        chunk = pos;
        continue;
      }
      pos++;
    }
  };

  const parseNumber = (): string => {
    const m = /-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/y;
    m.lastIndex = pos;
    const found = m.exec(text);
    if (!found) fail("invalidNumber");
    const end = m.lastIndex;
    // A number immediately followed by more number-like characters (01, 1., 1e, 1.5.2) is malformed.
    if (end < text.length && /[0-9.eE+\-]/.test(text[end])) fail("invalidNumber", end);
    pos = end;
    return found![0];
  };

  const parseValue = (depth: number): JsonNode => {
    if (depth > JSON_MAX_DEPTH) fail("tooDeep");
    ws();
    const c = text[pos];
    if (c === "{") {
      pos++;
      const entries: [string, JsonNode][] = [];
      const index = new Map<string, number>();
      ws();
      if (text[pos] === "}") {
        pos++;
        return { type: "object", entries };
      }
      while (true) {
        ws();
        if (text[pos] !== '"') fail(text[pos] === "}" ? "trailingComma" : pos >= text.length ? "unexpectedEnd" : "expectedKey");
        const key = parseString();
        ws();
        if (text[pos] !== ":") fail(pos >= text.length ? "unexpectedEnd" : "expectedColon");
        pos++;
        const value = parseValue(depth + 1);
        const existing = index.get(key);
        if (existing !== undefined) {
          entries[existing] = [key, value];
          duplicateKeys++;
        } else {
          index.set(key, entries.length);
          entries.push([key, value]);
        }
        ws();
        if (text[pos] === ",") {
          pos++;
          continue;
        }
        if (text[pos] === "}") {
          pos++;
          return { type: "object", entries };
        }
        unexpected();
      }
    }
    if (c === "[") {
      pos++;
      const items: JsonNode[] = [];
      ws();
      if (text[pos] === "]") {
        pos++;
        return { type: "array", items };
      }
      while (true) {
        ws();
        if (text[pos] === "]") fail("trailingComma");
        items.push(parseValue(depth + 1));
        ws();
        if (text[pos] === ",") {
          pos++;
          continue;
        }
        if (text[pos] === "]") {
          pos++;
          return { type: "array", items };
        }
        unexpected();
      }
    }
    if (c === '"') return { type: "string", value: parseString() };
    if (c === "-" || (c !== undefined && c >= "0" && c <= "9")) return { type: "number", raw: parseNumber() };
    for (const word of ["true", "false", "null"] as const) {
      if (text.startsWith(word, pos)) {
        pos += word.length;
        return { type: "literal", raw: word };
      }
    }
    return unexpected();
  };

  try {
    const value = parseValue(0);
    ws();
    if (pos < text.length) fail("trailingData");
    return { ok: true, value, duplicateKeys };
  } catch (e) {
    if (!(e instanceof JsonSyntaxError)) throw e;
    return { ok: false, error: e.code, offset: e.offset, ...lineColumn(text, e.offset) };
  }
}

/** Serializes a parse tree. indent "" = minified; keys can be sorted recursively (by UTF-16 code units, like Array.prototype.sort). */
export function formatJson(node: JsonNode, indent: string, sortKeys: boolean): string {
  const newline = indent ? "\n" : "";
  const colon = indent ? ": " : ":";
  const out: string[] = [];
  const write = (n: JsonNode, level: number) => {
    switch (n.type) {
      case "string":
        out.push(JSON.stringify(n.value));
        return;
      case "number":
      case "literal":
        out.push(n.raw);
        return;
      case "array": {
        if (n.items.length === 0) {
          out.push("[]");
          return;
        }
        const inner = indent.repeat(level + 1);
        out.push("[", newline);
        n.items.forEach((item, i) => {
          out.push(inner);
          write(item, level + 1);
          out.push(i < n.items.length - 1 ? "," : "", newline);
        });
        out.push(indent.repeat(level), "]");
        return;
      }
      case "object": {
        if (n.entries.length === 0) {
          out.push("{}");
          return;
        }
        const entries = sortKeys ? [...n.entries].sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)) : n.entries;
        const inner = indent.repeat(level + 1);
        out.push("{", newline);
        entries.forEach(([key, value], i) => {
          out.push(inner, JSON.stringify(key), colon);
          write(value, level + 1);
          out.push(i < entries.length - 1 ? "," : "", newline);
        });
        out.push(indent.repeat(level), "}");
        return;
      }
    }
  };
  write(node, 0);
  return out.join("");
}
