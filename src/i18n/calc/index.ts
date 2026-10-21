import type { Locale } from "@/i18n/config";
import en, { type CalcCommonText } from "./en";
import ur from "./ur";
import es from "./es";
import fr from "./fr";
import de from "./de";
import ar from "./ar";
import it from "./it";
import nl from "./nl";
import pt from "./pt";

/** Shared calculator strings per locale. A locale missing here has no calculator pages. */
export const CALC_COMMON: Partial<Record<Locale, CalcCommonText>> = { en, ur, es, fr, de, ar, it, pt, nl };
