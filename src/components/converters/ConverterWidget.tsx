"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useId, useMemo, useState } from "react";
import { compatibleUnits, convert, findUnitSpec, type ConversionError } from "@/converters/engine";
import { parseAmount } from "@/converters/input";
import { BASES, CASE_MODES, DIGITS, convertCase, formatInBase, parseInBase, type CaseMode } from "@/converters/special";
import { getSpec } from "@/converters/specs";
import type { LinearSpec, Params, UnitSystem } from "@/converters/types";
import type { Locale } from "@/i18n/config";
import { CURRENCY_CODES, getFormatter } from "@/lib/format";
import { formatInputValue } from "@/lib/parse";

/** Localized strings for one converter, passed from the server page. */
export interface ConverterLabels {
  /** Unit (or mode/base) display names by id. */
  names: Readonly<Record<string, string>>;
  paramLabels?: Readonly<Record<string, string>>;
}

const FIELD =
  "block h-12 w-full rounded-[0.875rem] border border-neutral-300 bg-white px-3.5 text-base font-medium text-ink-900 shadow-[0_1px_2px_rgb(30_36_51/0.05)] transition-[border-color,box-shadow] placeholder:font-normal placeholder:text-neutral-400 hover:border-neutral-400 focus:border-brand-600 focus:ring-4 focus:ring-brand-200/70 focus:outline-none";
const SELECT = `${FIELD} appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%20fill='%23626a7c'%3E%3Cpath%20fill-rule='evenodd'%20d='M5.23%207.21a.75.75%200%20011.06.02L10%2011.06l3.71-3.83a.75.75%200%20111.08%201.04l-4.25%204.4a.75.75%200%2001-1.08%200L5.21%208.27a.75.75%200%2001.02-1.06z'/%3E%3C/svg%3E")] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pe-10 rtl:bg-[left_0.75rem_center]`;
const LABEL = "mb-1.5 block text-sm font-semibold text-ink-800";
const GHOST_BUTTON =
  "focus-ring inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-sm font-bold text-brand-700 ring-1 ring-brand-200 transition-colors hover:bg-brand-50 disabled:cursor-not-allowed disabled:opacity-50";

const PRECISIONS = [4, 6, 8, 10, 12] as const;
const SYSTEM_ORDER: UnitSystem[] = ["si", "metric", "us", "imperial", "other"];

function SwapIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
      <path d="M6 4 3 7l3 3M3 7h11M14 10l3 3-3 3M17 13H6" />
    </svg>
  );
}

function CopyButton({ text, label, copiedLabel, disabled = false }: { text: string; label: string; copiedLabel: string; disabled?: boolean }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };
  return (
    <button type="button" onClick={copy} disabled={disabled} className={GHOST_BUTTON}>
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-4">
        {copied ? <path d="M4.5 10.5 8 14l7.5-8" strokeLinecap="round" strokeLinejoin="round" /> : <path d="M7 7V4.5A1.5 1.5 0 0 1 8.5 3h7A1.5 1.5 0 0 1 17 4.5v7a1.5 1.5 0 0 1-1.5 1.5H13M4.5 7h7A1.5 1.5 0 0 1 13 8.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 15.5v-7A1.5 1.5 0 0 1 4.5 7Z" />}
      </svg>
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}

/** Reads ?from=&to=&value= once, so popular-conversion links open with the right units. */
function useQueryDefaults(spec: LinearSpec, apply: (from: string, to: string, value?: string) => void, enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    const params = new URLSearchParams(window.location.search);
    const from = params.get("from");
    const to = params.get("to");
    const value = params.get("value");
    if ((from && findUnitSpec(spec, from)) || (to && findUnitSpec(spec, to))) {
      apply(from && findUnitSpec(spec, from) ? from : spec.defaultFrom, to && findUnitSpec(spec, to) ? to : spec.defaultTo, value ?? undefined);
    }
    // Only on first render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

function UnitSelect({ id, label, spec, value, names, onChange, onlyCompatibleWith }: { id: string; label: string; spec: LinearSpec; value: string; names: Readonly<Record<string, string>>; onChange: (v: string) => void; onlyCompatibleWith?: string }) {
  const t = useTranslations("converters");
  const units = onlyCompatibleWith ? compatibleUnits(spec, onlyCompatibleWith) : spec.units;
  const systems = SYSTEM_ORDER.filter((s) => units.some((u) => (u.system ?? "other") === s));
  const option = (u: (typeof units)[number]) => (
    <option key={u.id} value={u.id}>
      {names[u.id] ?? u.id}
      {u.symbol ? ` (${u.symbol})` : ""}
    </option>
  );
  return (
    <div className="min-w-0">
      <label htmlFor={id} className={LABEL}>
        {label}
      </label>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className={SELECT}>
        {systems.length > 1
          ? systems.map((system) => (
              <optgroup key={system} label={t(`systems.${system}`)}>
                {units.filter((u) => (u.system ?? "other") === system).map(option)}
              </optgroup>
            ))
          : units.map(option)}
      </select>
    </div>
  );
}

function LinearConverter({ spec, labels, syncUrl }: { spec: LinearSpec; labels: ConverterLabels; syncUrl: boolean }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("converters.widget");
  const fmt = getFormatter(locale);
  const uid = useId();
  const [amount, setAmount] = useState(() => formatInputValue(spec.defaultValue, locale));
  const [from, setFrom] = useState(spec.defaultFrom);
  const [to, setTo] = useState(spec.defaultTo);
  const [precision, setPrecision] = useState<number>(8);
  const [paramText, setParamText] = useState<Record<string, string>>(() => Object.fromEntries((spec.params ?? []).map((p) => [p.id, formatInputValue(p.defaultValue, locale)])));

  useQueryDefaults(
    spec,
    (f, tt, v) => {
      setFrom(f);
      setTo(tt);
      if (v !== undefined) setAmount(v);
    },
    syncUrl,
  );

  const params: Params = Object.fromEntries((spec.params ?? []).map((p) => [p.id, parseAmount(paramText[p.id] ?? "", locale) ?? Number.NaN]));
  const parsed = parseAmount(amount, locale);
  const fromUnit = findUnitSpec(spec, from)!;
  const toUnit = findUnitSpec(spec, to)!;
  const result = parsed === null ? null : convert(spec, parsed, from, to, params);
  const show = (v: number) => fmt.significant(v, precision);
  const name = (id: string) => labels.names[id] ?? id;

  const errorText = (error: ConversionError) => {
    if (error === "belowMin") return fromUnit.min !== undefined ? t("errors.belowMin", { min: `${fmt.significant(fromUnit.min, 8)} ${fromUnit.symbol}` }) : t("errors.negative");
    if (error === "badParam") {
      const bad = (spec.params ?? []).find((p) => !Number.isFinite(params[p.id]) || (p.min !== undefined && (p.minExclusive ? params[p.id] <= p.min : params[p.id] < p.min)));
      return t("errors.badParam", { name: labels.paramLabels?.[bad?.id ?? ""] ?? "" });
    }
    return t(`errors.${error}`);
  };

  const unitRate = convert(spec, 1, from, to, params);
  const table = parsed === null || !result?.ok ? [] : compatibleUnits(spec, from);
  const resultText = result?.ok ? `${show(result.value)} ${toUnit.symbol}` : "";
  const errorId = `${uid}-error`;

  // When the target is incompatible with a newly chosen source (mixed-dimension converters), pick the first compatible unit.
  const chooseFrom = (id: string) => {
    setFrom(id);
    const units = compatibleUnits(spec, id);
    if (!units.some((u) => u.id === to)) setTo(units.find((u) => u.id !== id)?.id ?? id);
  };

  return (
    <div className="card overflow-hidden">
      <div className="grid gap-4 p-5 sm:p-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_auto_minmax(0,1.2fr)] md:items-end">
        <div>
          <label htmlFor={`${uid}-amount`} className={LABEL}>
            {t("amount")}
          </label>
          <input
            id={`${uid}-amount`}
            type="text"
            inputMode="decimal"
            autoComplete="off"
            spellCheck={false}
            dir="ltr"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            aria-invalid={result && !result.ok ? true : undefined}
            aria-describedby={result && !result.ok ? errorId : `${uid}-amount-help`}
            className={`${FIELD} text-lg tabular-nums`}
          />
        </div>
        <UnitSelect id={`${uid}-from`} label={t("from")} spec={spec} value={from} names={labels.names} onChange={chooseFrom} />
        <button
          type="button"
          onClick={() => {
            setFrom(to);
            setTo(from);
          }}
          aria-label={t("swap")}
          title={t("swap")}
          className="focus-ring mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white shadow-[0_8px_18px_-10px_rgb(63_100_150/0.9)] transition-transform hover:rotate-180 hover:bg-brand-700 md:mb-0 motion-reduce:transition-none"
        >
          <SwapIcon />
        </button>
        <UnitSelect id={`${uid}-to`} label={t("to")} spec={spec} value={to} names={labels.names} onChange={setTo} onlyCompatibleWith={from} />
        <p id={`${uid}-amount-help`} className="-mt-2 text-xs text-neutral-600 md:col-span-4 md:mt-0">
          {t("amountHelp")}
        </p>
        {(spec.params ?? []).map((param) => (
          <div key={param.id} className="md:col-span-4">
            <label htmlFor={`${uid}-param-${param.id}`} className={LABEL}>
              {labels.paramLabels?.[param.id] ?? param.id}
            </label>
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative w-48" dir="ltr">
                <input
                  id={`${uid}-param-${param.id}`}
                  type="text"
                  inputMode="decimal"
                  value={paramText[param.id] ?? ""}
                  onChange={(e) => setParamText((prev) => ({ ...prev, [param.id]: e.target.value }))}
                  className={`${FIELD} pe-16 tabular-nums`}
                />
                <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3 text-sm text-neutral-500">
                  {param.symbol}
                </span>
              </div>
              {param.presets?.map((preset) => (
                <button
                  key={preset.key}
                  type="button"
                  onClick={() => setParamText((prev) => ({ ...prev, [param.id]: formatInputValue(preset.value, locale) }))}
                  className="focus-ring rounded-full bg-cream px-3 py-1.5 text-xs font-bold text-neutral-700 ring-1 ring-line hover:bg-brand-50 hover:text-brand-800"
                >
                  {labels.paramLabels?.[preset.key] ?? preset.key}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="relative border-t border-brand-100 bg-brand-50 px-5 py-6 sm:px-7">
        <div aria-live="polite" aria-atomic="true">
          <p className="eyebrow text-brand-800">{t("result")}</p>
          {parsed === null ? (
            <p className="mt-2 text-neutral-700">{t("empty")}</p>
          ) : result && result.ok ? (
            <>
              <p className="mt-2 text-sm font-semibold text-neutral-700">
                <bdi dir="ltr">
                  {fmt.significant(parsed, 12)} {fromUnit.symbol}
                </bdi>{" "}
                =
              </p>
              <p className="mt-1 text-3xl font-extrabold tracking-tight break-words text-brand-900 tabular-nums sm:text-4xl">
                <bdi dir="ltr">{show(result.value)}</bdi> <span className="text-xl font-bold text-brand-700 sm:text-2xl">{toUnit.symbol}</span>
              </p>
              <p className="mt-1 text-sm text-neutral-700">{name(to)}</p>
            </>
          ) : (
            <p id={errorId} className="mt-2 flex items-start gap-2 rounded-2xl border border-amber-300 bg-warning-tint p-4 text-sm font-semibold text-warning">
              {result ? errorText(result.error) : t("errors.invalid")}
            </p>
          )}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <CopyButton text={resultText} label={t("copy")} copiedLabel={t("copied")} disabled={!result?.ok} />
          <button type="button" onClick={() => setAmount("")} className={GHOST_BUTTON}>
            {t("clear")}
          </button>
          <label className="ms-auto flex items-center gap-2 text-sm font-semibold text-ink-800">
            {t("precision")}
            <select value={precision} onChange={(e) => setPrecision(Number(e.target.value))} className="focus-ring h-10 rounded-full border border-neutral-300 bg-white px-3 text-sm font-semibold">
              {PRECISIONS.map((p) => (
                <option key={p} value={p}>
                  {t("significant", { count: p })}
                </option>
              ))}
            </select>
          </label>
        </div>
        {unitRate.ok && parsed !== 1 && (
          <p className="mt-4 text-sm text-neutral-700">
            <bdi dir="ltr">{t("oneUnit", { from: fromUnit.symbol, value: show(unitRate.value), to: toUnit.symbol })}</bdi>
          </p>
        )}
      </div>

      {table.length > 2 && parsed !== null && (
        <div className="border-t border-line px-5 py-5 sm:px-7">
          <h3 className="text-sm font-bold text-ink-900">{t("allUnits")}</h3>
          <div role="region" aria-label={t("allUnits")} tabIndex={0} className="focus-ring mt-3 max-h-80 overflow-auto rounded-2xl ring-1 ring-line">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-neutral-50 text-xs text-neutral-600">
                <tr>
                  <th scope="col" className="px-4 py-2.5 text-start font-semibold">
                    {t("unit")}
                  </th>
                  <th scope="col" className="px-4 py-2.5 text-end font-semibold">
                    {t("value")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {table.map((unit) => {
                  const r = convert(spec, parsed!, from, unit.id, params);
                  return (
                    <tr key={unit.id} className={`border-t border-neutral-100 ${unit.id === to ? "bg-brand-50" : "even:bg-neutral-50/60"}`}>
                      <th scope="row" className="px-4 py-2 text-start font-medium text-ink-800">
                        <button type="button" onClick={() => setTo(unit.id)} className="focus-ring rounded text-start hover:text-brand-700 hover:underline">
                          {name(unit.id)}
                        </button>
                      </th>
                      <td className="px-4 py-2 text-end font-semibold text-ink-900 tabular-nums">
                        <bdi dir="ltr">{r.ok ? `${show(r.value)} ${unit.symbol}` : "—"}</bdi>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function CurrencyConverter() {
  const locale = useLocale() as Locale;
  const t = useTranslations("converters.widget");
  const fmt = getFormatter(locale);
  const uid = useId();
  const [amount, setAmount] = useState(() => formatInputValue(100, locale));
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [rate, setRate] = useState("");
  const display = useMemo(() => new Intl.DisplayNames([locale], { type: "currency" }), [locale]);
  const parsedAmount = parseAmount(amount, locale);
  const parsedRate = parseAmount(rate, locale);
  const valid = parsedAmount !== null && !Number.isNaN(parsedAmount) && parsedAmount >= 0 && parsedRate !== null && parsedRate > 0;
  const result = valid ? parsedAmount! * parsedRate! : null;
  const resultText = result === null ? "" : fmt.currency(result, to);
  const options = CURRENCY_CODES.map((code) => (
    <option key={code} value={code}>
      {display.of(code) ?? code} ({code})
    </option>
  ));
  return (
    <div className="card overflow-hidden">
      <p className="flex items-start gap-2 border-b border-amber-200 bg-warning-tint px-5 py-3 text-sm font-semibold text-warning sm:px-7">{t("currency.notice")}</p>
      <div className="grid gap-4 p-5 sm:p-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_auto_minmax(0,1.2fr)] md:items-end">
        <div>
          <label htmlFor={`${uid}-amount`} className={LABEL}>
            {t("amount")}
          </label>
          <input id={`${uid}-amount`} type="text" inputMode="decimal" dir="ltr" value={amount} onChange={(e) => setAmount(e.target.value)} className={`${FIELD} text-lg tabular-nums`} />
        </div>
        <div className="min-w-0">
          <label htmlFor={`${uid}-from`} className={LABEL}>
            {t("from")}
          </label>
          <select id={`${uid}-from`} value={from} onChange={(e) => setFrom(e.target.value)} className={SELECT}>
            {options}
          </select>
        </div>
        <button
          type="button"
          aria-label={t("swap")}
          title={t("swap")}
          onClick={() => {
            setFrom(to);
            setTo(from);
            if (parsedRate && parsedRate > 0) setRate(formatInputValue(Number((1 / parsedRate).toPrecision(10)), locale));
          }}
          className="focus-ring mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white transition-transform hover:rotate-180 hover:bg-brand-700 motion-reduce:transition-none"
        >
          <SwapIcon />
        </button>
        <div className="min-w-0">
          <label htmlFor={`${uid}-to`} className={LABEL}>
            {t("to")}
          </label>
          <select id={`${uid}-to`} value={to} onChange={(e) => setTo(e.target.value)} className={SELECT}>
            {options}
          </select>
        </div>
        <div className="md:col-span-4">
          <label htmlFor={`${uid}-rate`} className={LABEL}>
            {t("currency.rate")}
          </label>
          <input
            id={`${uid}-rate`}
            type="text"
            inputMode="decimal"
            dir="ltr"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            aria-describedby={`${uid}-rate-help`}
            className={`${FIELD} max-w-xs tabular-nums`}
          />
          <p id={`${uid}-rate-help`} className="mt-1.5 text-xs text-neutral-600">
            {t("currency.rateHelp", { from, to })}
          </p>
        </div>
      </div>
      <div className="border-t border-brand-100 bg-brand-50 px-5 py-6 sm:px-7">
        <div aria-live="polite" aria-atomic="true">
          <p className="eyebrow text-brand-800">{t("result")}</p>
          {result === null ? (
            <p className="mt-2 text-neutral-700">{parsedRate === null ? t("currency.rateMissing") : t("errors.invalid")}</p>
          ) : (
            <>
              <p className="mt-2 text-3xl font-extrabold tracking-tight break-words text-brand-900 tabular-nums sm:text-4xl">{resultText}</p>
              <p className="mt-2 text-sm text-neutral-700">{t("currency.reverse", { to, rate: fmt.significant(1 / parsedRate!, 8), from })}</p>
            </>
          )}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <CopyButton text={resultText} label={t("copy")} copiedLabel={t("copied")} disabled={result === null} />
          <button type="button" onClick={() => setAmount("")} className={GHOST_BUTTON}>
            {t("clear")}
          </button>
        </div>
      </div>
    </div>
  );
}

function TextCaseConverter({ labels }: { labels: ConverterLabels }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("converters.widget");
  const uid = useId();
  const [text, setText] = useState("The quick brown fox jumps over the lazy dog");
  const [mode, setMode] = useState<CaseMode>("title");
  const output = convertCase(text, mode, locale);
  return (
    <div className="card overflow-hidden">
      <div className="grid gap-5 p-5 sm:p-7">
        <div>
          <label htmlFor={`${uid}-input`} className={LABEL}>
            {t("text.input")}
          </label>
          <textarea
            id={`${uid}-input`}
            dir="auto"
            rows={4}
            value={text}
            placeholder={t("text.placeholder")}
            onChange={(e) => setText(e.target.value)}
            className={`${FIELD} h-auto min-h-28 py-3 leading-relaxed`}
          />
          <p className="mt-1.5 text-xs text-neutral-600">{t("text.characters", { count: Array.from(text).length })}</p>
        </div>
        <fieldset>
          <legend className={LABEL}>{t("text.style")}</legend>
          <div className="flex flex-wrap gap-2">
            {CASE_MODES.map((m) => (
              <label
                key={m}
                className="flex cursor-pointer items-center rounded-full bg-brand-50 px-3.5 py-2 text-sm font-bold text-brand-800 ring-1 ring-brand-100 transition-colors hover:bg-white has-checked:bg-brand-600 has-checked:text-white has-focus-visible:ring-2 has-focus-visible:ring-brand-600"
              >
                <input type="radio" name={`${uid}-mode`} value={m} checked={mode === m} onChange={() => setMode(m)} className="sr-only" />
                {labels.names[m] ?? m}
              </label>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="border-t border-brand-100 bg-brand-50 px-5 py-6 sm:px-7">
        <label htmlFor={`${uid}-output`} className="eyebrow text-brand-800">
          {t("text.output")}
        </label>
        <textarea id={`${uid}-output`} readOnly dir="auto" rows={4} value={output} className={`${FIELD} mt-2 h-auto min-h-28 py-3 leading-relaxed`} />
        <div className="mt-4 flex flex-wrap gap-2">
          <CopyButton text={output} label={t("copy")} copiedLabel={t("copied")} disabled={output === ""} />
          <button type="button" onClick={() => setText("")} className={GHOST_BUTTON}>
            {t("clear")}
          </button>
        </div>
      </div>
    </div>
  );
}

function NumberBaseConverter({ labels }: { labels: ConverterLabels }) {
  const t = useTranslations("converters.widget");
  const uid = useId();
  const [input, setInput] = useState("255");
  const [baseChoice, setBaseChoice] = useState("10");
  const [customBase, setCustomBase] = useState("36");
  const custom = Number(customBase);
  const customValid = Number.isInteger(custom) && custom >= 2 && custom <= 36;
  const base = baseChoice === "custom" ? custom : Number(baseChoice);
  const parsed = baseChoice === "custom" && !customValid ? null : parseInBase(input, base);
  const targets = [...BASES, ...(customValid && !BASES.includes(custom as 2) ? [custom] : [])];
  const error =
    baseChoice === "custom" && !customValid
      ? t("base.badBase")
      : parsed && !parsed.ok && parsed.error !== "empty"
        ? parsed.error === "tooLong"
          ? t("base.tooLong")
          : t("base.digit", { base, max: DIGITS[base - 1].toUpperCase() })
        : null;
  const baseName = (b: number) => labels.names[String(b)] ?? `${labels.names.custom ?? "Base"} ${b}`;
  return (
    <div className="card overflow-hidden">
      <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-input`} className={LABEL}>
            {t("base.input")}
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
            aria-describedby={error ? `${uid}-error` : undefined}
            className={`${FIELD} font-mono text-lg`}
          />
          {error && (
            <p id={`${uid}-error`} className="mt-1.5 text-sm font-semibold text-danger">
              {error}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${uid}-base`} className={LABEL}>
            {t("base.fromBase")}
          </label>
          <select id={`${uid}-base`} value={baseChoice} onChange={(e) => setBaseChoice(e.target.value)} className={SELECT}>
            {BASES.map((b) => (
              <option key={b} value={String(b)}>
                {labels.names[String(b)] ?? b}
              </option>
            ))}
            <option value="custom">{labels.names.custom ?? "Other base"}</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${uid}-custom`} className={LABEL}>
            {t("base.customBase")}
          </label>
          <input id={`${uid}-custom`} type="text" inputMode="numeric" dir="ltr" value={customBase} onChange={(e) => setCustomBase(e.target.value)} className={`${FIELD} tabular-nums`} />
        </div>
      </div>
      <div className="border-t border-brand-100 bg-brand-50 px-5 py-6 sm:px-7" aria-live="polite">
        <h3 className="eyebrow text-brand-800">{t("base.results")}</h3>
        <dl className="mt-3 grid gap-3">
          {targets.map((b) => {
            const text = parsed && parsed.ok ? formatInBase(parsed.value, b) : "";
            return (
              <div key={b} className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl bg-white p-4 ring-1 ring-line">
                <dt className="w-full text-xs font-semibold text-neutral-600 sm:w-44">{baseName(b)}</dt>
                <dd className="min-w-0 flex-1 font-mono text-lg font-bold break-all text-ink-900" dir="ltr">
                  {text || "—"}
                </dd>
                <CopyButton text={text} label={t("copy")} copiedLabel={t("copied")} disabled={!text} />
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}

/**
 * Interactive converter for any converter id. Linear converters read
 * ?from=&to=&value= when `syncUrl` is set (dedicated pages).
 */
export function ConverterWidget({ specId, labels, syncUrl = false }: { specId: string; labels: ConverterLabels; syncUrl?: boolean }) {
  const spec = getSpec(specId);
  if (!spec) return null;
  if (spec.kind === "linear") return <LinearConverter key={spec.id} spec={spec} labels={labels} syncUrl={syncUrl} />;
  if (spec.kind === "currency") return <CurrencyConverter />;
  if (spec.kind === "text-case") return <TextCaseConverter labels={labels} />;
  return <NumberBaseConverter labels={labels} />;
}
