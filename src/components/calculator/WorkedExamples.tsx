import { describeInputs } from "@/calculators/framework/describe-inputs";
import { evaluate, rawFromValues } from "@/calculators/framework/evaluate";
import { formatResultValue } from "@/calculators/framework/format-result";
import type { CalculatorDefinition } from "@/calculators/framework/types";
import { DEFAULT_CURRENCY } from "@/lib/format";

/** Worked examples whose results are computed by the calculator's own engine. */
export function WorkedExamples({ calculator }: { calculator: CalculatorDefinition }) {
  const { engine } = calculator;
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {calculator.examples.map((example) => {
        const raw = rawFromValues(engine, example.inputs);
        const evaluation = evaluate(engine, raw);
        const currency = (engine.currencyField && raw[engine.currencyField]) || DEFAULT_CURRENCY;
        return (
          <article key={example.title} className="card flex flex-col p-5">
            <h3 className="font-semibold text-ink-900">{example.title}</h3>
            <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
              {describeInputs(engine, example.inputs).map((input) => (
                <div key={input.label} className="contents">
                  <dt className="text-neutral-600">{input.label}</dt>
                  <dd className="text-right font-medium text-ink-900 tabular-nums">{input.value}</dd>
                </div>
              ))}
            </dl>
            <ol className="mt-4 space-y-1 border-l-2 border-brand-200 pl-3 font-mono text-[0.8125rem] text-neutral-700">
              {example.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            {evaluation.ok && (
              <p className="mt-auto pt-4 text-sm text-neutral-600">
                {evaluation.result.primary.label}:{" "}
                <strong className="text-base font-semibold text-brand-800 tabular-nums">
                  {formatResultValue(evaluation.result.primary.value, currency)}
                </strong>
              </p>
            )}
          </article>
        );
      })}
    </div>
  );
}
