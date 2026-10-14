"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { FORM_ERROR_KEY, defaultRawValues, evaluate, isFieldVisible } from "@/calculators/framework/evaluate";
import type { AnyEngine, Field, RawValues } from "@/calculators/framework/types";
import { DEFAULT_CURRENCY } from "@/lib/format";
import { FieldControl } from "./FieldControl";
import { MobileResultBar } from "./MobileResultBar";
import { ResultPanel } from "./ResultPanel";

export function CalculatorForm({ engine }: { engine: AnyEngine }) {
  const formId = useId();
  const [raw, setRaw] = useState<RawValues>(() => defaultRawValues(engine));
  const evaluation = useMemo(() => evaluate(engine, raw), [engine, raw]);
  const currency = (engine.currencyField && raw[engine.currencyField]) || DEFAULT_CURRENCY;
  const errors = evaluation.ok ? {} : evaluation.errors;
  const fields = (engine.fields as readonly Field[]).filter((field) => isFieldVisible(field, raw));

  // The sticky mobile summary shows only while the inputs are on screen and the full results panel is not.
  const inputsRef = useRef<HTMLElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [inputsVisible, setInputsVisible] = useState(false);
  const [resultsVisible, setResultsVisible] = useState(true);
  useEffect(() => {
    const inputs = inputsRef.current;
    const results = resultsRef.current;
    if (!inputs || !results || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === inputs) setInputsVisible(entry.isIntersecting);
        else setResultsVisible(entry.isIntersecting);
      }
    });
    observer.observe(inputs);
    observer.observe(results);
    return () => observer.disconnect();
  }, []);

  const update = (id: string, value: string) => setRaw((prev) => ({ ...prev, [id]: value }));

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-start">
      <section ref={inputsRef} aria-labelledby={`${formId}-inputs`} className="card p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 id={`${formId}-inputs`} className="text-lg font-semibold text-ink-900">
            Your inputs
          </h2>
          <button
            type="button"
            onClick={() => setRaw(defaultRawValues(engine))}
            className="rounded-md px-2.5 py-1.5 text-sm font-medium text-brand-700 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            Reset
          </button>
        </div>
        <form
          noValidate
          onSubmit={(event) => event.preventDefault()}
          className="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-4"
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
      <div ref={resultsRef} id="results">
        <ResultPanel evaluation={evaluation} currency={currency} formError={errors[FORM_ERROR_KEY]} />
      </div>
      <MobileResultBar evaluation={evaluation} currency={currency} hidden={!inputsVisible || resultsVisible} />
    </div>
  );
}
