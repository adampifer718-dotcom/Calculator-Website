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

  // Fixed to the bottom of the viewport: it appears after hydration, so it must not push the page down (layout shift).
  return (
    <div role="region" aria-label={text.prompt} lang={LOCALE_INFO[suggested].lang} dir={LOCALE_INFO[suggested].dir} className="fixed inset-x-0 bottom-0 z-40 bg-brand-900 text-white shadow-[0_-8px_24px_-12px_rgb(23_40_67/0.5)]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-2.5 text-sm sm:px-6">
        <p className="font-medium text-brand-50">{text.prompt}</p>
        <div className="flex items-center gap-2">
          <a href={href} hrefLang={LOCALE_INFO[suggested].lang} onClick={() => rememberLocale(suggested)} className="focus-ring-light rounded-full bg-accent-400 px-4 py-1.5 font-bold text-ink-900 hover:bg-accent-300">
            {text.action}
          </a>
          <button type="button" onClick={dismiss} className="focus-ring-light rounded-full px-4 py-1.5 font-semibold text-brand-100 hover:bg-white/10 hover:text-white">
            {text.dismiss}
          </button>
        </div>
      </div>
    </div>
  );
}
