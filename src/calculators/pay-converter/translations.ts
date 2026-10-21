import type { Locale } from "@/i18n/config";
import en, { type PayConverterText } from "./text/en";
import ur from "./text/ur";
import es from "./text/es";
import fr from "./text/fr";
import de from "./text/de";
import ar from "./text/ar";
import it from "./text/it";
import nl from "./text/nl";
import pt from "./text/pt";

/** Strings for the homepage pay converter. A locale's homepage exists only when this is translated. */
export const PAY_CONVERTER_TEXT: Partial<Record<Locale, PayConverterText>> = { en, ur, es, fr, de, ar, it, pt, nl };
