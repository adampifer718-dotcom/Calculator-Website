"use client";

import type { Field } from "@/calculators/framework/types";
import { currencySymbol } from "@/lib/format";

interface FieldControlProps {
  formId: string;
  field: Field;
  value: string;
  error?: string;
  currency: string;
  onChange: (value: string) => void;
}

const inputBase =
  "block w-full rounded-lg border bg-white text-base text-navy-900 shadow-xs transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-2";

export function FieldControl({ formId, field, value, error, currency, onChange }: FieldControlProps) {
  const id = `${formId}-${field.id}`;
  const helpId = field.help ? `${id}-help` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [errorId, helpId].filter(Boolean).join(" ") || undefined;
  const stateClass = error
    ? "border-red-500 focus:border-red-600 focus:ring-red-200"
    : "border-slate-300 focus:border-blue-600 focus:ring-blue-200";

  if (field.type === "select" && field.display === "segmented") {
    return (
      <fieldset className="sm:col-span-2">
        <legend className="mb-1.5 text-sm font-medium text-navy-800">{field.label}</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {field.options.map((option) => {
            const optionId = `${id}-${option.value}`;
            return (
              <label
                key={option.value}
                htmlFor={optionId}
                className="flex min-h-11 cursor-pointer items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-center text-sm font-medium text-navy-800 transition-colors hover:border-blue-400 has-checked:border-blue-600 has-checked:bg-blue-50 has-checked:text-blue-800 has-focus-visible:ring-2 has-focus-visible:ring-blue-300"
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
          <p id={helpId} className="mt-1.5 text-xs text-slate-600">
            {field.help}
          </p>
        )}
      </fieldset>
    );
  }

  const prefix = field.type === "number" ? (field.prefix === "currency" ? currencySymbol(currency) : field.prefix) : undefined;
  const suffix = field.type === "number" ? field.suffix : undefined;

  return (
    <div className={field.type === "number" && field.prefix === "currency" ? "sm:col-span-2" : undefined}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy-800">
        {field.label}
      </label>
      {field.type === "select" ? (
        <select
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={`${inputBase} ${stateClass} h-11 appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%20fill='%2364748b'%3E%3Cpath%20fill-rule='evenodd'%20d='M5.23%207.21a.75.75%200%20011.06.02L10%2011.06l3.71-3.83a.75.75%200%20111.08%201.04l-4.25%204.4a.75.75%200%2001-1.08%200L5.21%208.27a.75.75%200%2001.02-1.06z'/%3E%3C/svg%3E")] bg-[length:1.25rem] bg-[right_0.6rem_center] bg-no-repeat pr-9 pl-3`}
        >
          {field.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <div className="relative">
          {prefix && (
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
              {prefix}
            </span>
          )}
          <input
            id={id}
            type="text"
            inputMode="decimal"
            autoComplete="off"
            spellCheck={false}
            value={value}
            placeholder={field.placeholder ?? (field.optional ? "Optional" : undefined)}
            onChange={(event) => onChange(event.target.value)}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            aria-required={field.optional ? undefined : true}
            className={`${inputBase} ${stateClass} h-11 tabular-nums ${prefix ? (prefix.length > 1 ? "pl-12" : "pl-8") : "pl-3"} ${suffix ? "pr-16" : "pr-3"}`}
          />
          {suffix && (
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-slate-500">
              {suffix}
            </span>
          )}
        </div>
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
      {field.help && (
        <p id={helpId} className="mt-1.5 text-xs text-slate-600">
          {field.help}
        </p>
      )}
    </div>
  );
}
