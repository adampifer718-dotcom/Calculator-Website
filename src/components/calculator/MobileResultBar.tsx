import type { Evaluation } from "@/calculators/framework/evaluate";
import { formatResultValue } from "@/calculators/framework/format-result";

/**
 * Compact summary pinned to the bottom of small screens while the user is
 * editing inputs above the results. Hidden from assistive technology because
 * the results panel already announces changes.
 */
export function MobileResultBar({ evaluation, currency, hidden }: { evaluation: Evaluation; currency: string; hidden: boolean }) {
  if (hidden) return null;
  return (
    <div aria-hidden="true" className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-4px_16px_-8px_rgb(15_29_61/0.15)] backdrop-blur lg:hidden">
      <a href="#results" tabIndex={-1} className="mx-auto flex max-w-xl items-center justify-between gap-3">
        {evaluation.ok ? (
          <span className="min-w-0">
            <span className="block truncate text-xs font-medium text-slate-600">{evaluation.result.primary.label}</span>
            <span className="block truncate text-xl font-bold text-navy-900 tabular-nums">
              {formatResultValue(evaluation.result.primary.value, currency)}
            </span>
          </span>
        ) : (
          <span className="text-sm font-medium text-amber-800">Check the highlighted inputs</span>
        )}
        <span className="shrink-0 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white">See details</span>
      </a>
    </div>
  );
}
