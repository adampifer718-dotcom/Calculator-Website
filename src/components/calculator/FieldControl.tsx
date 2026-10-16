"use client";

import type { Field } from "@/calculators/framework/types";
import type { Locale } from "@/i18n/config";
import { commonText } from "@/calculators/framework/i18n";
import { getFormatter } from "@/lib/format";

interface FieldControlProps {
  formId: string;
  field: Field;
  value: string;
  error?: string;
  currency: string;
  locale: Locale;
  onChange: (value: string) => void;
}

const inputBase =
  "block w-full rounded-[0.875rem] border bg-white text-base font-medium text-ink-900 shadow-[0_1px_2px_rgb(30_36_51/0.05)] transition-[border-color,box-shadow] placeholder:font-normal placeholder:text-neutral-400 hover:border-neutral-400 focus:outline-none focus:ring-4";

/** Main amounts and dropdowns take a full row on phones; short numeric inputs sit two per row. */
function fieldSpan(field: Field): string {
  if (field.type === "number") return field.prefix === "currency" ? "col-span-2" : "col-span-1";
  if (field.type === "text") return "col-span-2";
  return "col-span-2 sm:col-span-1";
}

export function FieldControl({ formId, field, value, error, currency, locale, onChange }: FieldControlProps) {
  const id = `${formId}-${field.id}`;
  const helpId = field.help ? `${id}-help` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [errorId, helpId].filter(Boolean).join(" ") || undefined;
  const stateClass = error
    ? "border-danger bg-danger-tint/40 focus:border-danger focus:ring-danger/15"
    : "border-neutral-300 focus:border-brand-600 focus:ring-brand-200/70";

  if (field.type === "select" && field.display === "segmented") {
    return (
      <fieldset className="col-span-2">
        <legend className="mb-2 text-sm font-semibold text-ink-800">{field.label}</legend>
        <div className="grid gap-1.5 rounded-2xl bg-brand-50 p-1.5 ring-1 ring-brand-100 sm:grid-cols-3">
          {field.options.map((option) => {
            const optionId = `${id}-${option.value}`;
            return (
              <label
                key={option.value}
                htmlFor={optionId}
                className="flex min-h-11 cursor-pointer items-center justify-center rounded-xl px-3 py-2 text-center text-sm font-semibold text-brand-800 transition-colors hover:bg-white/80 has-checked:bg-brand-600 has-checked:text-white has-checked:shadow-[0_6px_14px_-8px_rgb(63_100_150/0.9)] has-focus-visible:ring-2 has-focus-visible:ring-brand-600 has-focus-visible:ring-offset-2"
              >
                <input
                  id={optionId}
                  type="radio"
                  name={id}
                  value={option.value}
                  checked={value === option.value}
                  onChange={() => onChange(option.value)}
                  className="sr-only"
                />
                {option.label}
              </label>
            );
          })}
        </div>
        {field.help && (
          <p id={helpId} className="mt-1.5 text-xs text-neutral-600">
            {field.help}
          </p>
        )}
      </fieldset>
    );
  }

  const prefix = field.type === "number" ? (field.prefix === "currency" ? getFormatter(locale).currencySymbol(currency) : field.prefix) : undefined;
  const suffix = field.type === "number" ? field.suffix : undefined;

  return (
    <div className={fieldSpan(field)}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink-800">
        {field.label}
      </label>
      {field.type === "select" ? (
        <select
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={`${inputBase} ${stateClass} h-12 appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%20fill='%2364748b'%3E%3Cpath%20fill-rule='evenodd'%20d='M5.23%207.21a.75.75%200%20011.06.02L10%2011.06l3.71-3.83a.75.75%200%20111.08%201.04l-4.25%204.4a.75.75%200%2001-1.08%200L5.21%208.27a.75.75%200%2001.02-1.06z'/%3E%3C/svg%3E")] bg-[length:1.25rem] bg-[right_0.6rem_center] bg-no-repeat ps-3 pe-9 rtl:bg-[left_0.6rem_center]`}
        >
          {field.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : field.type === "date" ? (
        // The picker shows the date in the visitor's format; the value is always ISO (YYYY-MM-DD).
        <div dir="ltr">
          <input
            id={id}
            type="date"
            value={value}
            min={field.min}
            max={field.max}
            onChange={(event) => onChange(event.target.value)}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            aria-required={field.optional ? undefined : true}
            className={`${inputBase} ${stateClass} h-12 px-3 tabular-nums`}
          />
        </div>
      ) : (
        field.type === "text" && field.multiline ? (
        <textarea
          id={id}
          dir="auto"
          value={value}
          rows={6}
          spellCheck={false}
          placeholder={field.placeholder}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          aria-required={field.optional ? undefined : true}
          className={`${inputBase} ${stateClass} min-h-36 px-3 py-2.5 font-mono text-sm leading-relaxed`}
        />
      ) : (
        // Numbers, currency symbols and units read left to right in every language.
        <div className="relative" dir={field.type === "number" ? "ltr" : undefined}>
          {prefix && (
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3 font-semibold text-neutral-500">
              {prefix}
            </span>
          )}
          <input
            id={id}
            type="text"
            inputMode={field.type === "text" ? "text" : "decimal"}
            dir={field.type === "text" ? "auto" : undefined}
            autoComplete="off"
            spellCheck={false}
            value={value}
            placeholder={field.type === "number" || field.type === "text" ? (field.placeholder ?? (field.optional ? commonText(locale).optional : undefined)) : undefined}
            onChange={(event) => onChange(event.target.value)}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            aria-required={field.optional ? undefined : true}
            className={`${inputBase} ${stateClass} h-12 tabular-nums ${prefix ? (prefix.length > 3 ? "ps-16" : prefix.length > 1 ? "ps-12" : "ps-8") : "ps-3"} ${suffix ? (suffix.length > 6 ? "pe-24" : "pe-16") : "pe-3"}`}
          />
          {suffix && (
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3 text-sm text-neutral-500">
              {suffix}
            </span>
          )}
        </div>
      )
      )}
      {error && (
        <p id={errorId} className="mt-1.5 flex items-start gap-1.5 text-sm font-semibold text-danger">
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 size-4 shrink-0">
            <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-4.75a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </p>
      )}
      {field.help && (
        <p id={helpId} className="mt-1.5 text-xs text-neutral-600">
          {field.help}
        </p>
      )}
    </div>
  );
}
