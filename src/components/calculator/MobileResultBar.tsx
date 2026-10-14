"use client";

import { useTranslations } from "next-intl";
import type { Evaluation } from "@/calculators/framework/evaluate";
import { formatResultValue } from "@/calculators/framework/format-result";
import type { Locale } from "@/i18n/config";

/**
 * Compact summary pinned to the bottom of small screens while the user is
 * editing inputs above the results. Hidden from assistive technology because
 * the results panel already announces changes.
 */
export function MobileResultBar({ evaluation, currency, locale, hidden }: { evaluation: Evaluation; currency: string; locale: Locale; hidden: boolean }) {
  const t = useTranslations("calculator");
  if (hidden) return null;
  return (
    <div aria-hidden="true" className="fixed inset-x-0 bottom-0 z-30 border-t border-neutral-200 bg-white/95 px-4 py-3 shadow-[0_-4px_16px_-8px_rgb(17_17_17/0.15)] backdrop-blur lg:hidden">
      <a href="#results" tabIndex={-1} className="mx-auto flex max-w-xl items-center justify-between gap-3">
        {evaluation.ok ? (
          <span className="min-w-0">
            <span className="block truncate text-xs font-medium text-neutral-600">{evaluation.result.primary.label}</span>
            <span className="block truncate text-xl font-bold text-ink-900 tabular-nums">
              <bdi>{formatResultValue(evaluation.result.primary.value, currency, locale)}</bdi>
            </span>
          </span>
        ) : (
          <span className="text-sm font-medium text-amber-800">{t("checkInputsShort")}</span>
        )}
        <span className="shrink-0 rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white">{t("seeDetails")}</span>
      </a>
    </div>
  );
}
