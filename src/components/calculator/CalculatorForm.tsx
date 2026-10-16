"use client";

import { useTranslations } from "next-intl";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { FORM_ERROR_KEY, defaultRawValues, evaluate, isFieldVisible } from "@/calculators/framework/evaluate";
import type { AnyEngine, Field, RawValues } from "@/calculators/framework/types";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { localToday } from "@/lib/math/dates";
import { DEFAULT_CURRENCY } from "@/lib/format";
import { FieldControl } from "./FieldControl";
import { MobileResultBar } from "./MobileResultBar";
import { ResultPanel } from "./ResultPanel";

export function CalculatorForm({ engine }: { engine: AnyEngine }) {
  const t = useTranslations("calculator");
  const locale = engine.locale ?? DEFAULT_LOCALE;
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

  // Date fields marked "today" start from a fixed date so the server and the
  // browser render the same HTML, then switch to the visitor's local date.
  const withToday = (values: RawValues): RawValues => {
    const next = { ...values };
    for (const field of engine.fields as readonly Field[]) if (field.type === "date" && field.defaultToday) next[field.id] = localToday();
    return next;
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the local date is only known in the browser, after hydration
    setRaw((prev) => {
      const defaults = defaultRawValues(engine);
      const next = { ...prev };
      for (const field of engine.fields as readonly Field[]) {
        if (field.type === "date" && field.defaultToday && prev[field.id] === defaults[field.id]) next[field.id] = localToday();
      }
      return next;
    });
  }, [engine]);

  const update = (id: string, value: string) => setRaw((prev) => ({ ...prev, [id]: value }));

  return (
    <div className="@container">
      <div className="grid grid-cols-1 gap-5 @4xl:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] @4xl:items-start">
        <section ref={inputsRef} aria-labelledby={`${formId}-inputs`} className="card p-5 sm:p-7">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 id={`${formId}-inputs`} className="flex items-center gap-3 text-lg font-extrabold text-ink-900">
              <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-xl bg-cream text-brand-700 ring-1 ring-line">
                <svg viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M4 6h7M15 6h1M4 14h1M9 14h7" />
                  <circle cx="13" cy="6" r="2" />
                  <circle cx="7" cy="14" r="2" />
                </svg>
              </span>
              {t("yourInputs")}
            </h2>
            <button
              type="button"
              onClick={() => setRaw(withToday(defaultRawValues(engine)))}
              className="rounded-full px-3.5 py-1.5 text-sm font-bold text-brand-700 ring-1 ring-brand-200 transition-colors hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              {t("reset")}
            </button>
          </div>
          <form noValidate onSubmit={(event) => event.preventDefault()} className="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-4" aria-describedby={`${formId}-live`}>
            {fields.map((field) => (
              <FieldControl
                key={field.id}
                formId={formId}
                field={field}
                value={raw[field.id] ?? ""}
                error={errors[field.id]}
                currency={currency}
                locale={locale}
                onChange={(value) => update(field.id, value)}
              />
            ))}
          </form>
          <p id={`${formId}-live`} className="sr-only">
            {t("liveUpdate")}
          </p>
        </section>
        <div ref={resultsRef} id="results">
          <ResultPanel evaluation={evaluation} currency={currency} locale={locale} formError={errors[FORM_ERROR_KEY]} />
        </div>
        <MobileResultBar evaluation={evaluation} currency={currency} locale={locale} hidden={!inputsVisible || resultsVisible} />
      </div>
    </div>
  );
}
