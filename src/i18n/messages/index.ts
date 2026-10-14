import type { Locale } from "../config";
import type { Messages } from "./en";

/** Interface messages per locale, loaded on demand on the server. */
const LOADERS: Record<Locale, () => Promise<{ default: Messages }>> = {
  en: () => import("./en"),
  ur: () => import("./ur"),
  es: () => import("./es"),
  fr: () => import("./fr"),
  de: () => import("./de"),
  ar: () => import("./ar"),
};

export async function loadMessages(locale: Locale): Promise<Messages> {
  return (await LOADERS[locale]()).default;
}
