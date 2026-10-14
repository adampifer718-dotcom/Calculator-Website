"use client";

import { useId, useMemo, useState } from "react";
import { FORM_ERROR_KEY, defaultRawValues, evaluate, isFieldVisible } from "@/calculators/framework/evaluate";
import type { AnyEngine, Field, RawValues } from "@/calculators/framework/types";
import { DEFAULT_CURRENCY } from "@/lib/format";
import { FieldControl } from "./FieldControl";
import { ResultPanel } from "./ResultPanel";

export function CalculatorForm({ engine }: { engine: AnyEngine }) {
  const formId = useId();
  const [raw, setRaw] = useState<RawValues>(() => defaultRawValues(engine));
  const evaluation = useMemo(() => evaluate(engine, raw), [engine, raw]);
  const currency = (engine.currencyField && raw[engine.currencyField]) || DEFAULT_CURRENCY;
  const errors = evaluation.ok ? {} : evaluation.errors;
  const fields = (engine.fields as readonly Field[]).filter((field) => isFieldVisible(field, raw));

  const update = (id: string, value: string) => setRaw((prev) => ({ ...prev, [id]: value }));

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-start">
      <section aria-labelledby={`${formId}-inputs`} className="card p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 id={`${formId}-inputs`} className="text-lg font-semibold text-navy-900">
            Your inputs
          </h2>
          <button
            type="button"
            onClick={() => setRaw(defaultRawValues(engine))}
            className="rounded-md px-2.5 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Reset
          </button>
        </div>
        <form
          noValidate
          onSubmit={(event) => event.preventDefault()}
          className="grid gap-4 sm:grid-cols-2"
          aria-describedby={`${formId}-live`}
        >
          {fields.map((field) => (
            <FieldControl
              key={field.id}
              formId={formId}
              field={field}
              value={raw[field.id] ?? ""}
              error={errors[field.id]}
              currency={currency}
              onChange={(value) => update(field.id, value)}
            />
          ))}
        </form>
        <p id={`${formId}-live`} className="sr-only">
          Results update automatically as you type.
        </p>
      </section>
      <ResultPanel
        evaluation={evaluation}
        currency={currency}
        formError={errors[FORM_ERROR_KEY]}
      />
    </div>
  );
}
