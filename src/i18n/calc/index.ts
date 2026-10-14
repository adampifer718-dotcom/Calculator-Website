import type { Locale } from "@/i18n/config";
import en, { type CalcCommonText } from "./en";

/** Shared calculator strings per locale. A locale missing here has no calculator pages. */
export const CALC_COMMON: Partial<Record<Locale, CalcCommonText>> = { en };
