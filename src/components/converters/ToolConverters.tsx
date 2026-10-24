"use client";

import { useLocale, useTranslations } from "next-intl";
import { useId, useState, useSyncExternalStore } from "react";
import {
  BYTE_FORMATS,
  contrastRatios,
  convertMorse,
  convertRoman,
  decodeBytes,
  encodeText,
  formatHex,
  formatHsl,
  formatRgb,
  hemisphere,
  isoUtc,
  parseColor,
  parseCoordinate,
  parseDateTime,
  parseTimestamp,
  toDdm,
  toDms,
  PAPER_SIZES,
  bestRational,
  decodeBase64,
  decodeUrl,
  encodeBase64,
  encodeUrl,
  mixedParts,
  nearestFraction,
  paperDimensions,
  parseExactFraction,
  parseTireSize,
  reduceFraction,
  type UrlMode,
  type ByteFormat,
  type CoordinateAxis,
} from "@/converters/tools";
import type { ToolId } from "@/converters/types";
import { LOCALE_INFO, type Locale } from "@/i18n/config";
import { getFormatter } from "@/lib/format";
import { normalizeNumberText } from "@/lib/parse";
import { CopyButton, FIELD, GHOST_BUTTON, LABEL, SELECT } from "./widget-ui";

const RESULT_PANEL = "border-t border-brand-100 bg-brand-50 px-5 py-6 sm:px-7";
const VALUE_ROW = "flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl bg-white p-4 ring-1 ring-line";

/** True only in the browser after hydration, so time-zone dependent text never differs between server and client. */
function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="mt-1.5 text-sm font-semibold text-danger">
      {children}
    </p>
  );
}

/** A labelled read-only value with a copy button. */
function ValueRow({ label, value, mono = true }: { label: string; value: string; mono?: boolean }) {
  const t = useTranslations("converters.widget");
  return (
    <li className={VALUE_ROW}>
      <span className="w-full text-xs font-semibold text-neutral-600 sm:w-48">{label}</span>
      <span className={`min-w-0 flex-1 text-lg font-bold break-all text-ink-900 ${mono ? "font-mono" : ""}`} dir="ltr" data-tool-value>
        {value || "—"}
      </span>
      <CopyButton text={value} label={t("copy")} copiedLabel={t("copied")} disabled={!value} />
    </li>
  );
}

function RomanTool() {
  const locale = useLocale() as Locale;
  const t = useTranslations("converters.widget");
  const uid = useId();
  const [input, setInput] = useState("2026");
  const result = convertRoman(input);
  const error = !result.ok && result.error !== "empty" ? t(`tools.roman.errors.${result.error}`) : null;
  const output = result.ok ? (result.direction === "toRoman" ? result.roman : getFormatter(locale).number(result.value, 0)) : "";
  return (
    <div className="card overflow-hidden">
      <div className="p-5 sm:p-7">
        <label htmlFor={`${uid}-input`} className={LABEL}>
          {t("tools.roman.input")}
        </label>
        <input
          id={`${uid}-input`}
          type="text"
          dir="ltr"
          autoComplete="off"
          spellCheck={false}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={`${uid}-help${error ? ` ${uid}-error` : ""}`}
          className={`${FIELD} font-mono text-lg`}
        />
        <p id={`${uid}-help`} className="mt-1.5 text-xs text-neutral-600">
          {t("tools.roman.help")}
        </p>
        {error && <ErrorText id={`${uid}-error`}>{error}</ErrorText>}
      </div>
      <div className={RESULT_PANEL} aria-live="polite">
        <h2 className="eyebrow text-brand-800">{result.ok && result.direction === "toNumber" ? t("tools.roman.toNumber") : t("tools.roman.toRoman")}</h2>
        <p className="mt-2 font-mono text-3xl font-extrabold break-all text-ink-900 tabular-nums" dir="ltr" data-tool-result>
          {output || "—"}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <CopyButton text={result.ok ? (result.direction === "toRoman" ? result.roman : String(result.value)) : ""} label={t("copy")} copiedLabel={t("copied")} disabled={!result.ok} />
          <button type="button" onClick={() => setInput("")} className={GHOST_BUTTON}>
            {t("clear")}
          </button>
        </div>
      </div>
    </div>
  );
}

/** Minutes east of UTC of the browser's time zone at the given instant. */
const localOffset = (ms: number) => -new Date(ms).getTimezoneOffset();

/** Parses a local wall-clock time, re-checking the offset once so dates across a DST change resolve correctly. */
function parseLocalDateTime(raw: string) {
  const utc = parseDateTime(raw, 0);
  if (!utc.ok) return utc;
  const guess = utc.ms - localOffset(utc.ms) * 60000;
  return parseDateTime(raw, localOffset(guess));
}

function toDateTimeInput(ms: number, local: boolean): string {
  const shifted = new Date(ms + (local ? localOffset(ms) * 60000 : 0));
  return shifted.toISOString().slice(0, 19);
}

function UnixTimeTool() {
  const locale = useLocale() as Locale;
  const t = useTranslations("converters.widget");
  const uid = useId();
  const isClient = useIsClient();
  const [stamp, setStamp] = useState("1700000000");
  const [unit, setUnit] = useState<"s" | "ms">("s");
  const [dateText, setDateText] = useState("2026-01-01T00:00:00");
  const [zone, setZone] = useState<"utc" | "local">("utc");

  const parsed = parseTimestamp(stamp, unit);
  const stampError = !parsed.ok && parsed.error !== "empty" ? t(`tools.unix.errors.${parsed.error}`) : null;
  const intl = LOCALE_INFO[locale].intl;
  const describe = (ms: number, timeZone?: string) =>
    new Intl.DateTimeFormat(intl, { dateStyle: "full", timeStyle: "long", ...(timeZone ? { timeZone } : {}) }).format(new Date(ms));
  const localZone = isClient ? Intl.DateTimeFormat().resolvedOptions().timeZone : "";

  const date = zone === "local" && isClient ? parseLocalDateTime(dateText) : parseDateTime(dateText, 0);
  const dateError = !date.ok && date.error !== "empty" ? t(date.error === "range" ? "tools.unix.errors.range" : "tools.unix.errors.date") : null;

  const useNow = () => {
    const now = Date.now();
    setStamp(unit === "s" ? String(Math.floor(now / 1000)) : String(now));
    setDateText(toDateTimeInput(now, zone === "local"));
  };

  return (
    <div className="card overflow-hidden">
      <div className="grid gap-4 p-5 sm:grid-cols-[minmax(0,1fr)_12rem] sm:p-7">
        <h2 className="text-lg font-extrabold text-ink-900 sm:col-span-2">{t("tools.unix.toDate")}</h2>
        <div>
          <label htmlFor={`${uid}-stamp`} className={LABEL}>
            {t("tools.unix.timestamp")}
          </label>
          <input
            id={`${uid}-stamp`}
            type="text"
            inputMode="numeric"
            dir="ltr"
            autoComplete="off"
            value={stamp}
            onChange={(e) => setStamp(e.target.value)}
            aria-invalid={stampError ? true : undefined}
            aria-describedby={stampError ? `${uid}-stamp-error` : undefined}
            className={`${FIELD} font-mono tabular-nums`}
          />
          {stampError && <ErrorText id={`${uid}-stamp-error`}>{stampError}</ErrorText>}
        </div>
        <div>
          <label htmlFor={`${uid}-unit`} className={LABEL}>
            {t("tools.unix.unit")}
          </label>
          <select id={`${uid}-unit`} value={unit} onChange={(e) => setUnit(e.target.value as "s" | "ms")} className={SELECT}>
            <option value="s">{t("tools.unix.seconds")}</option>
            <option value="ms">{t("tools.unix.milliseconds")}</option>
          </select>
        </div>
      </div>
      <div className={RESULT_PANEL} aria-live="polite">
        <ul className="grid gap-3">
          <ValueRow label={t("tools.unix.iso")} value={parsed.ok ? isoUtc(parsed.ms) : ""} />
          {/* Long date names come from the browser's own locale data, so they are rendered after hydration only. */}
          <ValueRow label={t("tools.unix.utc")} value={parsed.ok && isClient ? describe(parsed.ms, "UTC") : ""} mono={false} />
          {isClient && <ValueRow label={t("tools.unix.local", { zone: localZone })} value={parsed.ok ? describe(parsed.ms) : ""} mono={false} />}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" onClick={useNow} className={GHOST_BUTTON}>
            {t("tools.unix.now")}
          </button>
        </div>
      </div>
      <div className="grid gap-4 border-t border-line p-5 sm:grid-cols-[minmax(0,1fr)_12rem] sm:p-7">
        <h2 className="text-lg font-extrabold text-ink-900 sm:col-span-2">{t("tools.unix.toTimestamp")}</h2>
        <div>
          <label htmlFor={`${uid}-date`} className={LABEL}>
            {t("tools.unix.dateTime")}
          </label>
          <input
            id={`${uid}-date`}
            type="datetime-local"
            step={1}
            dir="ltr"
            value={dateText}
            onChange={(e) => setDateText(e.target.value)}
            aria-invalid={dateError ? true : undefined}
            aria-describedby={dateError ? `${uid}-date-error` : undefined}
            className={`${FIELD} tabular-nums`}
          />
          {dateError && <ErrorText id={`${uid}-date-error`}>{dateError}</ErrorText>}
        </div>
        <div>
          <label htmlFor={`${uid}-zone`} className={LABEL}>
            {t("tools.unix.zone")}
          </label>
          <select id={`${uid}-zone`} value={zone} onChange={(e) => setZone(e.target.value as "utc" | "local")} className={SELECT}>
            <option value="utc">{t("tools.unix.zoneUtc")}</option>
            <option value="local">{t("tools.unix.zoneLocal")}</option>
          </select>
        </div>
      </div>
      <div className={RESULT_PANEL} aria-live="polite">
        <ul className="grid gap-3">
          <ValueRow label={t("tools.unix.inSeconds")} value={date.ok ? String(Math.floor(date.ms / 1000)) : ""} />
          <ValueRow label={t("tools.unix.inMilliseconds")} value={date.ok ? String(date.ms) : ""} />
        </ul>
      </div>
    </div>
  );
}

function ColorTool() {
  const locale = useLocale() as Locale;
  const t = useTranslations("converters.widget");
  const uid = useId();
  const [input, setInput] = useState("#1E7A5A");
  const parsed = parseColor(input);
  const error = !parsed.ok && parsed.error !== "empty" ? t("tools.color.errors.invalid") : null;
  const rgb = parsed.ok ? parsed.rgb : null;
  const hex = rgb ? formatHex(rgb) : "";
  const fmt = getFormatter(locale);
  const contrast = rgb ? contrastRatios(rgb) : null;
  return (
    <div className="card overflow-hidden">
      <div className="grid gap-4 p-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:p-7">
        <div>
          <label htmlFor={`${uid}-input`} className={LABEL}>
            {t("tools.color.input")}
          </label>
          <input
            id={`${uid}-input`}
            type="text"
            dir="ltr"
            autoComplete="off"
            spellCheck={false}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-invalid={error ? true : undefined}
            aria-describedby={`${uid}-help${error ? ` ${uid}-error` : ""}`}
            className={`${FIELD} font-mono`}
          />
          <p id={`${uid}-help`} className="mt-1.5 text-xs text-neutral-600">
            {t("tools.color.help")}
          </p>
          {error && <ErrorText id={`${uid}-error`}>{error}</ErrorText>}
        </div>
        <div>
          <label htmlFor={`${uid}-picker`} className={LABEL}>
            {t("tools.color.picker")}
          </label>
          <input
            id={`${uid}-picker`}
            type="color"
            value={hex ? hex.slice(0, 7).toLowerCase() : "#000000"}
            onChange={(e) => setInput(e.target.value.toUpperCase())}
            className="block h-12 w-24 cursor-pointer rounded-[0.875rem] border border-neutral-300 bg-white p-1"
          />
        </div>
      </div>
      <div className={RESULT_PANEL} aria-live="polite">
        <div className="flex flex-wrap items-center gap-4">
          <span className="eyebrow text-brand-800">{t("tools.color.preview")}</span>
          <span
            aria-hidden="true"
            className="block h-14 w-28 rounded-2xl ring-1 ring-line"
            style={{ backgroundColor: rgb ? `rgba(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)}, ${rgb.a})` : "transparent" }}
          />
          {contrast && (
            <span className="text-sm text-neutral-700">
              {t("tools.color.contrastWhite", { ratio: fmt.number(contrast.white, 2) })} · {t("tools.color.contrastBlack", { ratio: fmt.number(contrast.black, 2) })}
            </span>
          )}
        </div>
        <ul className="mt-4 grid gap-3">
          <ValueRow label={t("tools.color.hex")} value={hex} />
          <ValueRow label={t("tools.color.rgb")} value={rgb ? formatRgb(rgb) : ""} />
          <ValueRow label={t("tools.color.hsl")} value={rgb ? formatHsl(rgb) : ""} />
        </ul>
      </div>
    </div>
  );
}

function MorseTool() {
  const t = useTranslations("converters.widget");
  const uid = useId();
  const [input, setInput] = useState("SOS");
  const result = convertMorse(input);
  const error = !result.ok && result.error !== "empty" ? t(`tools.morse.errors.${result.error}`, { code: result.token ?? "" }) : null;
  const output = result.ok ? result.output : "";
  return (
    <div className="card overflow-hidden">
      <div className="p-5 sm:p-7">
        <label htmlFor={`${uid}-input`} className={LABEL}>
          {t("tools.morse.input")}
        </label>
        <textarea
          id={`${uid}-input`}
          dir="auto"
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={`${uid}-help${error ? ` ${uid}-error` : ""}`}
          className={`${FIELD} h-auto min-h-28 py-3 font-mono leading-relaxed`}
        />
        <p id={`${uid}-help`} className="mt-1.5 text-xs text-neutral-600">
          {t("tools.morse.help")}
        </p>
        {error && <ErrorText id={`${uid}-error`}>{error}</ErrorText>}
      </div>
      <div className={RESULT_PANEL} aria-live="polite">
        <label htmlFor={`${uid}-output`} className="eyebrow text-brand-800">
          {result.ok && result.direction === "decode" ? t("tools.morse.toText") : t("tools.morse.toMorse")}
        </label>
        <textarea id={`${uid}-output`} readOnly dir="ltr" rows={4} value={output} className={`${FIELD} mt-2 h-auto min-h-28 py-3 font-mono leading-relaxed`} data-tool-result />
        {result.ok && result.unsupported.length > 0 && <p className="mt-2 text-sm text-neutral-700">{t("tools.morse.unsupported", { chars: result.unsupported.join(" ") })}</p>}
        <div className="mt-4 flex flex-wrap gap-2">
          <CopyButton text={output} label={t("copy")} copiedLabel={t("copied")} disabled={!output} />
          <button type="button" onClick={() => setInput("")} className={GHOST_BUTTON}>
            {t("clear")}
          </button>
        </div>
      </div>
    </div>
  );
}

function TextBinaryTool() {
  const t = useTranslations("converters.widget");
  const uid = useId();
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [format, setFormat] = useState<ByteFormat>("binary");
  const [input, setInput] = useState("Hi!");
  let output = "";
  let count = 0;
  let error: string | null = null;
  if (mode === "encode") {
    const encoded = encodeText(input, format);
    if (encoded.bytes > 4096) error = t("tools.bytes.errors.tooLong");
    else {
      output = encoded.output;
      count = encoded.bytes;
    }
  } else {
    const decoded = decodeBytes(input, format);
    if (decoded.ok) {
      output = decoded.text;
      count = decoded.bytes;
    } else if (decoded.error !== "empty") error = t(`tools.bytes.errors.${decoded.error}`, { token: decoded.token ?? "" });
  }
  return (
    <div className="card overflow-hidden">
      <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
        <div>
          <label htmlFor={`${uid}-mode`} className={LABEL}>
            {t("tools.bytes.mode")}
          </label>
          <select id={`${uid}-mode`} value={mode} onChange={(e) => setMode(e.target.value as "encode" | "decode")} className={SELECT}>
            <option value="encode">{t("tools.bytes.encode")}</option>
            <option value="decode">{t("tools.bytes.decode")}</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${uid}-format`} className={LABEL}>
            {t("tools.bytes.format")}
          </label>
          <select id={`${uid}-format`} value={format} onChange={(e) => setFormat(e.target.value as ByteFormat)} className={SELECT}>
            {BYTE_FORMATS.map((f) => (
              <option key={f} value={f}>
                {t(`tools.bytes.${f}`)}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-input`} className={LABEL}>
            {mode === "encode" ? t("tools.bytes.inputText") : t("tools.bytes.inputBytes")}
          </label>
          <textarea
            id={`${uid}-input`}
            dir={mode === "encode" ? "auto" : "ltr"}
            rows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-invalid={error ? true : undefined}
            aria-describedby={[mode === "decode" ? `${uid}-help` : "", error ? `${uid}-error` : ""].filter(Boolean).join(" ") || undefined}
            className={`${FIELD} h-auto min-h-28 py-3 leading-relaxed ${mode === "decode" ? "font-mono" : ""}`}
          />
          {mode === "decode" && (
            <p id={`${uid}-help`} className="mt-1.5 text-xs text-neutral-600">
              {t("tools.bytes.bytesHelp")}
            </p>
          )}
          {error && <ErrorText id={`${uid}-error`}>{error}</ErrorText>}
        </div>
      </div>
      <div className={RESULT_PANEL} aria-live="polite">
        <label htmlFor={`${uid}-output`} className="eyebrow text-brand-800">
          {t("tools.bytes.output")}
        </label>
        <textarea
          id={`${uid}-output`}
          readOnly
          dir={mode === "encode" ? "ltr" : "auto"}
          rows={4}
          value={output}
          className={`${FIELD} mt-2 h-auto min-h-28 py-3 leading-relaxed ${mode === "encode" ? "font-mono" : ""}`}
          data-tool-result
        />
        <p className="mt-2 text-sm text-neutral-700">{t("tools.bytes.count", { count })}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <CopyButton text={output} label={t("copy")} copiedLabel={t("copied")} disabled={!output} />
          <button type="button" onClick={() => setInput("")} className={GHOST_BUTTON}>
            {t("clear")}
          </button>
        </div>
      </div>
    </div>
  );
}

const fixed = (v: number, digits: number) => v.toFixed(digits);

function CoordinatesTool() {
  const t = useTranslations("converters.widget");
  const uid = useId();
  const [lat, setLat] = useState("48.8584");
  const [lon, setLon] = useState("2.2945");
  const latResult = parseCoordinate(lat, "lat");
  const lonResult = parseCoordinate(lon, "lon");
  const errorOf = (r: ReturnType<typeof parseCoordinate>) => (!r.ok && r.error !== "empty" ? t(`tools.coordinates.errors.${r.error}`) : null);
  const latError = errorOf(latResult);
  const lonError = errorOf(lonResult);
  const both = latResult.ok && lonResult.ok ? { lat: latResult.degrees, lon: lonResult.degrees } : null;
  // Coordinates are written with a decimal point and N/S/E/W in every language (ISO 6709), so they paste into any map.
  const dms = (v: number, axis: CoordinateAxis) => {
    const { d, m, s } = toDms(v, 2);
    return `${d}° ${m}′ ${fixed(s, 2)}″ ${hemisphere(v, axis)}`;
  };
  const ddm = (v: number, axis: CoordinateAxis) => {
    const { d, m } = toDdm(v, 4);
    return `${d}° ${fixed(m, 4)}′ ${hemisphere(v, axis)}`;
  };
  const field = (id: "lat" | "lon", value: string, set: (v: string) => void, error: string | null) => (
    <div>
      <label htmlFor={`${uid}-${id}`} className={LABEL}>
        {id === "lat" ? t("tools.coordinates.latitude") : t("tools.coordinates.longitude")}
      </label>
      <input
        id={`${uid}-${id}`}
        type="text"
        dir="ltr"
        autoComplete="off"
        spellCheck={false}
        value={value}
        onChange={(e) => set(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={`${uid}-help${error ? ` ${uid}-${id}-error` : ""}`}
        className={`${FIELD} font-mono`}
      />
      {error && <ErrorText id={`${uid}-${id}-error`}>{error}</ErrorText>}
    </div>
  );
  return (
    <div className="card overflow-hidden">
      <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
        {field("lat", lat, setLat, latError)}
        {field("lon", lon, setLon, lonError)}
        <p id={`${uid}-help`} className="text-xs text-neutral-600 sm:col-span-2">
          {t("tools.coordinates.help")}
        </p>
      </div>
      <div className={RESULT_PANEL} aria-live="polite">
        <ul className="grid gap-3">
          <ValueRow label={t("tools.coordinates.decimal")} value={both ? `${fixed(both.lat, 6)}, ${fixed(both.lon, 6)}` : ""} />
          <ValueRow label={t("tools.coordinates.dms")} value={both ? `${dms(both.lat, "lat")}, ${dms(both.lon, "lon")}` : ""} />
          <ValueRow label={t("tools.coordinates.ddm")} value={both ? `${ddm(both.lat, "lat")}, ${ddm(both.lon, "lon")}` : ""} />
        </ul>
      </div>
    </div>
  );
}

/** A text area tool with a mode select: shared layout of the Base64 and URL tools. */
function EncodeLayout({
  uid,
  controls,
  inputLabel,
  input,
  setInput,
  output,
  error,
  footer,
  monoInput,
  monoOutput,
}: {
  uid: string;
  controls: React.ReactNode;
  inputLabel: string;
  input: string;
  setInput: (v: string) => void;
  output: string;
  error: string | null;
  footer?: React.ReactNode;
  monoInput: boolean;
  monoOutput: boolean;
}) {
  const t = useTranslations("converters.widget");
  return (
    <div className="card overflow-hidden">
      <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
        {controls}
        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-input`} className={LABEL}>
            {inputLabel}
          </label>
          <textarea
            id={`${uid}-input`}
            dir={monoInput ? "ltr" : "auto"}
            rows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${uid}-error` : undefined}
            className={`${FIELD} h-auto min-h-28 py-3 leading-relaxed break-all ${monoInput ? "font-mono" : ""}`}
          />
          {error && <ErrorText id={`${uid}-error`}>{error}</ErrorText>}
        </div>
      </div>
      <div className={RESULT_PANEL} aria-live="polite">
        <label htmlFor={`${uid}-output`} className="eyebrow text-brand-800">
          {t("result")}
        </label>
        <textarea
          id={`${uid}-output`}
          readOnly
          dir={monoOutput ? "ltr" : "auto"}
          rows={4}
          value={output}
          className={`${FIELD} mt-2 h-auto min-h-28 py-3 leading-relaxed break-all ${monoOutput ? "font-mono" : ""}`}
          data-tool-result
        />
        {footer}
        <div className="mt-4 flex flex-wrap gap-2">
          <CopyButton text={output} label={t("copy")} copiedLabel={t("copied")} disabled={!output} />
          <button type="button" onClick={() => setInput("")} className={GHOST_BUTTON}>
            {t("clear")}
          </button>
        </div>
      </div>
    </div>
  );
}

function SelectField({ id, label, value, onChange, options }: { id: string; label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
  return (
    <div>
      <label htmlFor={id} className={LABEL}>
        {label}
      </label>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className={SELECT}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function Base64Tool() {
  const t = useTranslations("converters.widget");
  const uid = useId();
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [variant, setVariant] = useState<"standard" | "url">("standard");
  const [input, setInput] = useState("Hello, world!");
  const result = mode === "encode" ? (input === "" ? null : encodeBase64(input, variant === "url")) : decodeBase64(input);
  const error = result && !result.ok && result.error !== "empty" ? t(`tools.base64.errors.${result.error}`) : null;
  const output = result && result.ok ? result.output : "";
  return (
    <EncodeLayout
      uid={uid}
      controls={
        <>
          <SelectField
            id={`${uid}-mode`}
            label={t("tools.base64.mode")}
            value={mode}
            onChange={(v) => setMode(v as "encode" | "decode")}
            options={[
              { value: "encode", label: t("tools.base64.encode") },
              { value: "decode", label: t("tools.base64.decode") },
            ]}
          />
          {mode === "encode" ? (
            <SelectField
              id={`${uid}-variant`}
              label={t("tools.base64.variant")}
              value={variant}
              onChange={(v) => setVariant(v as "standard" | "url")}
              options={[
                { value: "standard", label: t("tools.base64.standard") },
                { value: "url", label: t("tools.base64.urlSafe") },
              ]}
            />
          ) : (
            <div aria-hidden="true" />
          )}
        </>
      }
      inputLabel={mode === "encode" ? t("tools.base64.inputText") : t("tools.base64.inputBase64")}
      input={input}
      setInput={setInput}
      output={output}
      error={error}
      monoInput={mode === "decode"}
      monoOutput={mode === "encode"}
      footer={result && result.ok ? <p className="mt-2 text-sm text-neutral-700">{t("tools.base64.count", { count: result.bytes })}</p> : null}
    />
  );
}

function UrlTool() {
  const t = useTranslations("converters.widget");
  const uid = useId();
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [scope, setScope] = useState<UrlMode>("component");
  const [plus, setPlus] = useState(false);
  const [input, setInput] = useState("café & crème?");
  const result = mode === "encode" ? encodeUrl(input, scope) : decodeUrl(input, plus);
  const error = !result.ok && result.error !== "empty" ? t(`tools.url.errors.${result.error}`) : null;
  return (
    <EncodeLayout
      uid={uid}
      controls={
        <>
          <SelectField
            id={`${uid}-mode`}
            label={t("tools.url.mode")}
            value={mode}
            onChange={(v) => setMode(v as "encode" | "decode")}
            options={[
              { value: "encode", label: t("tools.url.encode") },
              { value: "decode", label: t("tools.url.decode") },
            ]}
          />
          {mode === "encode" ? (
            <SelectField
              id={`${uid}-scope`}
              label={t("tools.url.scope")}
              value={scope}
              onChange={(v) => setScope(v as UrlMode)}
              options={[
                { value: "component", label: t("tools.url.component") },
                { value: "uri", label: t("tools.url.uri") },
              ]}
            />
          ) : (
            <label className="flex items-center gap-2 self-end pb-3 text-sm font-semibold text-ink-800">
              <input type="checkbox" checked={plus} onChange={(e) => setPlus(e.target.checked)} className="size-4 accent-brand-600" />
              {t("tools.url.plus")}
            </label>
          )}
        </>
      }
      inputLabel={t("tools.url.input")}
      input={input}
      setInput={setInput}
      output={result.ok ? result.output : ""}
      error={error}
      monoInput={mode === "decode"}
      monoOutput={mode === "encode"}
    />
  );
}

function TireTool() {
  const locale = useLocale() as Locale;
  const t = useTranslations("converters.widget");
  const uid = useId();
  const fmt = getFormatter(locale);
  const [first, setFirst] = useState("225/45R17");
  const [second, setSecond] = useState("235/40R18");
  const a = parseTireSize(first);
  const b = second.trim() === "" ? null : parseTireSize(second);
  const errorOf = (r: ReturnType<typeof parseTireSize> | null) => (r && !r.ok && r.error !== "empty" ? t(`tools.tire.errors.${r.error}`) : null);
  const mmIn = (mm: number) => `${fmt.number(mm, 1)} mm (${fmt.number(mm / 25.4, 2)} in)`;
  const rows = (r: ReturnType<typeof parseTireSize>) =>
    r.ok
      ? [
          [t("tools.tire.width"), mmIn(r.size.width)],
          [t("tools.tire.sidewall"), mmIn(r.dims.sidewallMm)],
          [t("tools.tire.diameter"), mmIn(r.dims.diameterMm)],
          [t("tools.tire.circumference"), mmIn(r.dims.circumferenceMm)],
          [t("tools.tire.revsKm"), fmt.number(r.dims.revsPerKm, 1)],
          [t("tools.tire.revsMile"), fmt.number(r.dims.revsPerMile, 1)],
        ]
      : [];
  const both = a.ok && b && b.ok ? { ratio: b.dims.diameterMm / a.dims.diameterMm } : null;
  const field = (id: string, label: string, value: string, set: (v: string) => void, error: string | null) => (
    <div>
      <label htmlFor={`${uid}-${id}`} className={LABEL}>
        {label}
      </label>
      <input
        id={`${uid}-${id}`}
        type="text"
        dir="ltr"
        autoComplete="off"
        spellCheck={false}
        value={value}
        onChange={(e) => set(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={`${uid}-help${error ? ` ${uid}-${id}-error` : ""}`}
        className={`${FIELD} font-mono`}
      />
      {error && <ErrorText id={`${uid}-${id}-error`}>{error}</ErrorText>}
    </div>
  );
  return (
    <div className="card overflow-hidden">
      <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
        {field("first", t("tools.tire.size"), first, setFirst, errorOf(a))}
        {field("second", t("tools.tire.compare"), second, setSecond, errorOf(b))}
        <p id={`${uid}-help`} className="text-xs text-neutral-600 sm:col-span-2">
          {t("tools.tire.help")}
        </p>
      </div>
      <div className={RESULT_PANEL} aria-live="polite">
        <div className="grid gap-4 sm:grid-cols-2">
          {[a, b].map((r, i) =>
            r && r.ok ? (
              <table key={i} className="w-full text-sm">
                <caption className="pb-2 text-start font-mono text-lg font-bold text-ink-900" dir="ltr">
                  {i === 0 ? first.trim().toUpperCase() : second.trim().toUpperCase()}
                </caption>
                <tbody>
                  {rows(r).map(([label, value]) => (
                    <tr key={label} className="border-t border-line">
                      <th scope="row" className="py-2 pe-3 text-start font-semibold text-neutral-700">
                        {label}
                      </th>
                      <td className="py-2 text-end tabular-nums text-ink-900" data-tool-value>
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null,
          )}
        </div>
        {both && (
          <div className="mt-4 rounded-2xl bg-white p-4 ring-1 ring-line">
            <p className="font-bold text-ink-900" data-tool-result>
              {t("tools.tire.difference")}: {fmt.percent((both.ratio - 1) * 100, 2)}
            </p>
            <p className="mt-1 text-sm text-neutral-700">{t("tools.tire.speedo", { shown: "100 km/h", actual: `${fmt.number(100 * both.ratio, 1)} km/h` })}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function FractionTool() {
  const locale = useLocale() as Locale;
  const t = useTranslations("converters.widget");
  const uid = useId();
  const fmt = getFormatter(locale);
  const [input, setInput] = useState("0.6875");
  const [mode, setMode] = useState<"exact" | "nearest" | "best">("exact");
  const [denText, setDenText] = useState("16");
  const den = Number(denText);
  const denOk = Number.isInteger(den) && den >= 1 && den <= 1_000_000;
  const parsed = parseExactFraction(input.includes("/") ? input : normalizeNumberText(input, locale));
  let error = !parsed.ok && parsed.error !== "empty" ? t(`tools.fraction.errors.${parsed.error}`) : null;
  if (!error && mode !== "exact" && !denOk) error = t("tools.fraction.errors.denominator");
  let result: { num: bigint; den: bigint } | null = null;
  if (parsed.ok && !error) {
    if (mode === "exact") result = parsed.exact;
    else {
      const r = mode === "nearest" ? nearestFraction(parsed.value, den) : bestRational(parsed.value, den);
      result = reduceFraction(BigInt(r.num), BigInt(r.den));
    }
  }
  const fractionText = result ? (result.den === 1n ? String(result.num) : `${result.num}/${result.den}`) : "";
  const mixed = result ? mixedParts(result.num, result.den) : null;
  const mixedText = mixed ? (mixed.num === 0n ? `${mixed.negative ? "-" : ""}${mixed.whole}` : mixed.whole === 0n ? `${mixed.negative ? "-" : ""}${mixed.num}/${mixed.den}` : `${mixed.negative ? "-" : ""}${mixed.whole} ${mixed.num}/${mixed.den}`) : "";
  const approx = result ? Number(result.num) / Number(result.den) : 0;
  return (
    <div className="card overflow-hidden">
      <div className="grid gap-4 p-5 sm:grid-cols-3 sm:p-7">
        <div className="sm:col-span-3">
          <label htmlFor={`${uid}-input`} className={LABEL}>
            {t("tools.fraction.input")}
          </label>
          <input
            id={`${uid}-input`}
            type="text"
            inputMode="decimal"
            autoComplete="off"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-invalid={error ? true : undefined}
            aria-describedby={`${uid}-help${error ? ` ${uid}-error` : ""}`}
            className={`${FIELD} tabular-nums`}
          />
          <p id={`${uid}-help`} className="mt-1.5 text-xs text-neutral-600">
            {t("tools.fraction.help")}
          </p>
          {error && <ErrorText id={`${uid}-error`}>{error}</ErrorText>}
        </div>
        <div className="sm:col-span-2">
          <SelectField
            id={`${uid}-mode`}
            label={t("tools.fraction.mode")}
            value={mode}
            onChange={(v) => setMode(v as "exact" | "nearest" | "best")}
            options={[
              { value: "exact", label: t("tools.fraction.exact") },
              { value: "nearest", label: t("tools.fraction.nearest") },
              { value: "best", label: t("tools.fraction.best") },
            ]}
          />
        </div>
        {mode !== "exact" && (
          <div>
            <label htmlFor={`${uid}-den`} className={LABEL}>
              {t("tools.fraction.denominator")}
            </label>
            <input id={`${uid}-den`} type="text" inputMode="numeric" dir="ltr" value={denText} onChange={(e) => setDenText(e.target.value)} className={`${FIELD} tabular-nums`} />
          </div>
        )}
      </div>
      <div className={RESULT_PANEL} aria-live="polite">
        <ul className="grid gap-3">
          <ValueRow label={t("tools.fraction.fraction")} value={fractionText} />
          <ValueRow label={t("tools.fraction.mixed")} value={mixedText} />
          <ValueRow label={t("tools.fraction.decimal")} value={result ? fmt.significant(approx, 12) : ""} mono={false} />
          {result && mode !== "exact" && parsed.ok && <ValueRow label={t("tools.fraction.error")} value={fmt.significant(approx - parsed.value, 6)} mono={false} />}
        </ul>
      </div>
    </div>
  );
}

function PaperSizeTool() {
  const locale = useLocale() as Locale;
  const t = useTranslations("converters.widget");
  const uid = useId();
  const fmt = getFormatter(locale);
  const [id, setId] = useState("A4");
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait");
  const [dpiText, setDpiText] = useState("300");
  const dpi = Number(dpiText);
  const dpiOk = Number.isFinite(dpi) && dpi >= 1 && dpi <= 10000;
  const size = PAPER_SIZES.find((p) => p.id === id) ?? PAPER_SIZES[4];
  const d = paperDimensions(size, dpiOk ? dpi : 300);
  const pair = ([w, h]: [number, number], digits: number) => {
    const [a, b] = orientation === "portrait" ? [w, h] : [h, w];
    return `${fmt.number(a, digits)} × ${fmt.number(b, digits)}`;
  };
  const name = (sid: string) => (/^[ABC]\d+$/.test(sid) ? sid : t(`tools.paper.names.${sid}` as "tools.paper.names.letter"));
  const groups = (["a", "b", "c", "us", "ansi"] as const).map((series) => ({ series, sizes: PAPER_SIZES.filter((p) => p.series === series) }));
  return (
    <div className="card overflow-hidden">
      <div className="grid gap-4 p-5 sm:grid-cols-3 sm:p-7">
        <div>
          <label htmlFor={`${uid}-size`} className={LABEL}>
            {t("tools.paper.size")}
          </label>
          <select id={`${uid}-size`} value={id} onChange={(e) => setId(e.target.value)} className={SELECT}>
            {groups.map((g) => (
              <optgroup key={g.series} label={t(`tools.paper.series.${g.series}`)}>
                {g.sizes.map((p) => (
                  <option key={p.id} value={p.id}>
                    {name(p.id)}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
        <SelectField
          id={`${uid}-orientation`}
          label={t("tools.paper.orientation")}
          value={orientation}
          onChange={(v) => setOrientation(v as "portrait" | "landscape")}
          options={[
            { value: "portrait", label: t("tools.paper.portrait") },
            { value: "landscape", label: t("tools.paper.landscape") },
          ]}
        />
        <div>
          <label htmlFor={`${uid}-dpi`} className={LABEL}>
            {t("tools.paper.dpi")}
          </label>
          <input
            id={`${uid}-dpi`}
            type="text"
            inputMode="numeric"
            dir="ltr"
            value={dpiText}
            onChange={(e) => setDpiText(e.target.value)}
            aria-invalid={dpiOk ? undefined : true}
            aria-describedby={dpiOk ? undefined : `${uid}-dpi-error`}
            className={`${FIELD} tabular-nums`}
          />
          {!dpiOk && <ErrorText id={`${uid}-dpi-error`}>{t("tools.paper.errors.dpi")}</ErrorText>}
        </div>
      </div>
      <div className={RESULT_PANEL} aria-live="polite">
        <h2 className="eyebrow text-brand-800">{name(size.id)}</h2>
        <ul className="mt-3 grid gap-3">
          <ValueRow label={t("tools.paper.millimetres")} value={`${pair(d.mm, size.unit === "mm" ? 0 : 1)} mm`} mono={false} />
          <ValueRow label={t("tools.paper.centimetres")} value={`${pair(d.cm, 2)} cm`} mono={false} />
          <ValueRow label={t("tools.paper.inches")} value={`${pair(d.in, size.unit === "in" ? 2 : 2)} in`} mono={false} />
          <ValueRow label={t("tools.paper.points")} value={`${pair(d.pt, 1)} pt`} mono={false} />
          {dpiOk && <ValueRow label={t("tools.paper.pixels", { dpi: fmt.number(dpi, 0) })} value={`${pair(d.px, 0)} px`} mono={false} />}
        </ul>
      </div>
    </div>
  );
}

export function ToolConverter({ tool }: { tool: ToolId }) {
  switch (tool) {
    case "roman":
      return <RomanTool />;
    case "unix-time":
      return <UnixTimeTool />;
    case "color":
      return <ColorTool />;
    case "morse":
      return <MorseTool />;
    case "text-binary":
      return <TextBinaryTool />;
    case "coordinates":
      return <CoordinatesTool />;
    case "base64":
      return <Base64Tool />;
    case "url":
      return <UrlTool />;
    case "tire":
      return <TireTool />;
    case "fraction":
      return <FractionTool />;
    case "paper-size":
      return <PaperSizeTool />;
  }
}
