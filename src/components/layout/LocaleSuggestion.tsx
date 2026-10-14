"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LOCALE_INFO, LOCALE_SUGGESTION, isLocale, type Locale } from "@/i18n/config";
import { equivalentPath, rememberLocale, rememberedLocale } from "@/i18n/switch";

const DISMISS_KEY = "calcnest:locale-suggestion-dismissed";

/**
 * Offers (never forces) the visitor's preferred language: the language they
 * chose before, or else their browser language. Only shown when the same
 * page exists in that language. Dismissal is remembered in this browser.
 */
export function LocaleSuggestion({
  locale,
  availability,
  readyLocales,
}: {
  locale: Locale;
  availability: Record<string, readonly Locale[]>;
  readyLocales: readonly Locale[];
}) {
  const pathname = usePathname();
  const [suggested, setSuggested] = useState<Locale | null>(null);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = window.localStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      // Storage unavailable: still show the suggestion.
    }
    if (dismissed) return;
    const remembered = rememberedLocale();
    const browser = (navigator.languages ?? [navigator.language]).map((tag) => tag.slice(0, 2).toLowerCase()).find(isLocale);
    const preferred = isLocale(remembered) ? remembered : browser;
    if (!preferred || preferred === locale || !readyLocales.includes(preferred)) return;
    if (!equivalentPath(pathname, preferred, availability).exists) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reads browser-only preferences after hydration
    setSuggested(preferred);
  }, [locale, pathname, availability, readyLocales]);

  if (!suggested) return null;
  const text = LOCALE_SUGGESTION[suggested];
  const { href } = equivalentPath(pathname, suggested, availability, typeof window === "undefined" ? "" : window.location.search);

  const dismiss = () => {
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Ignore storage errors; the banner just closes for this page view.
    }
    setSuggested(null);
  };

  return (
    <div role="region" aria-label={text.prompt} lang={suggested} dir={LOCALE_INFO[suggested].dir} className="border-b border-brand-100 bg-brand-50">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-2.5 text-sm sm:px-6">
        <p className="text-ink-800">{text.prompt}</p>
        <div className="flex items-center gap-2">
          <a href={href} hrefLang={suggested} onClick={() => rememberLocale(suggested)} className="focus-ring rounded-md bg-brand-600 px-3 py-1.5 font-semibold text-white hover:bg-brand-700">
            {text.action}
          </a>
          <button type="button" onClick={dismiss} className="focus-ring rounded-md px-3 py-1.5 font-medium text-brand-800 hover:bg-brand-100">
            {text.dismiss}
          </button>
        </div>
      </div>
    </div>
  );
}
