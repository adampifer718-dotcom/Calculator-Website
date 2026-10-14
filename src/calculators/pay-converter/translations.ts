import type { Locale } from "@/i18n/config";
import en, { type PayConverterText } from "./text/en";

/** Strings for the homepage pay converter. A locale's homepage exists only when this is translated. */
export const PAY_CONVERTER_TEXT: Partial<Record<Locale, PayConverterText>> = { en };
