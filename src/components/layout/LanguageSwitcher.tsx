"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { LOCALE_INFO, type Locale } from "@/i18n/config";
import { equivalentPath, rememberLocale } from "@/i18n/switch";
import { Flag } from "./Flag";

interface Props {
  locale: Locale;
  locales: readonly Locale[];
  availability: Record<string, readonly Locale[]>;
  /** "full" shows the language name; "compact" shows only the code (mobile header). */
  variant?: "full" | "compact";
  /** "dark" for the coloured header and footer. */
  tone?: "light" | "dark";
  /** Open the list above the button (footer). */
  placement?: "bottom" | "top";
  /** Adds the `data-language-switcher` hook used by tests; only the header switcher sets it. */
  marker?: boolean;
}

/**
 * Language selector: a disclosure button with a list of links, one per
 * language, each pointing to the equivalent page. Keyboard: Enter/Space or
 * ArrowDown opens, arrow keys and Home/End move, Escape closes and returns
 * focus to the button.
 */
export function LanguageSwitcher({ locale, locales, availability, variant = "full", tone = "light", placement = "bottom", marker = true }: Props) {
  const t = useTranslations("language");
  const pathname = usePathname();
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const focusFirstOnOpen = useRef(false);

  const items = locales.map((target) => ({ target, ...equivalentPath(pathname, target, availability, search) }));
  const current = LOCALE_INFO[locale];

  useEffect(() => {
    if (!open) return;
    if (focusFirstOnOpen.current) {
      const index = Math.max(0, locales.indexOf(locale));
      itemRefs.current[index]?.focus();
      focusFirstOnOpen.current = false;
    }
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open, locale, locales]);

  const openMenu = (focusItem: boolean) => {
    // Keep filters and search terms when switching on equivalent pages.
    setSearch(window.location.search);
    focusFirstOnOpen.current = focusItem;
    setOpen(true);
  };

  const onButtonKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      // Already open (e.g. after Enter): move into the list; otherwise open and focus the first item.
      if (open) itemRefs.current[event.key === "ArrowUp" ? items.length - 1 : 0]?.focus();
      else openMenu(true);
    }
  };

  const onListKeyDown = (event: React.KeyboardEvent) => {
    const index = itemRefs.current.findIndex((el) => el === document.activeElement);
    const last = items.length - 1;
    const move = (i: number) => itemRefs.current[i]?.focus();
    if (event.key === "ArrowDown") {
      event.preventDefault();
      move(index >= last ? 0 : index + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      move(index <= 0 ? last : index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      move(0);
    } else if (event.key === "End") {
      event.preventDefault();
      move(last);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      buttonRef.current?.focus();
    } else if (event.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative" data-language-switcher={marker ? variant : undefined}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={t("change", { language: current.nativeName })}
        onClick={() => (open ? setOpen(false) : openMenu(false))}
        onKeyDown={onButtonKeyDown}
        className={`${tone === "dark" ? "focus-ring-light" : "focus-ring"} inline-flex h-10 items-center gap-1 rounded-full border px-2.5 text-sm sm:gap-1.5 sm:px-3 font-semibold transition-colors ${
          tone === "dark"
            ? "border-white/25 bg-white/10 text-white hover:bg-white/20 aria-expanded:bg-white aria-expanded:text-brand-800"
            : "border-neutral-300 bg-white text-ink-800 hover:border-brand-300 hover:text-brand-800 aria-expanded:border-brand-300 aria-expanded:bg-brand-50"
        }`}
      >
        <Flag locale={locale} size="sm" />
        {variant === "full" ? (
          <span lang={locale}>{current.nativeName}</span>
        ) : (
          <span className="uppercase" aria-hidden="true">
            {locale}
          </span>
        )}
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className={`size-4 transition-transform ${tone === "dark" ? "opacity-80" : "text-neutral-500"} ${open ? "rotate-180" : ""}`}>
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.4a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <ul
          id={listId}
          aria-label={t("label")}
          onKeyDown={onListKeyDown}
          className={`absolute end-0 z-50 w-64 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-neutral-200 bg-white p-1.5 shadow-lift ${placement === "top" ? "bottom-full mb-2" : "top-full mt-2"}`}
        >
          {items.map(({ target, href, exists }, index) => {
            const info = LOCALE_INFO[target];
            const active = target === locale;
            return (
              <li key={target}>
                <a
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  href={href}
                  hrefLang={target}
                  lang={target}
                  aria-current={active ? "true" : undefined}
                  title={exists ? undefined : t("untranslated", { language: info.nativeName })}
                  onClick={() => rememberLocale(target)}
                  className="focus-ring flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm text-ink-900 transition-colors hover:bg-neutral-100 focus:bg-neutral-100 aria-[current=true]:bg-brand-50 aria-[current=true]:text-brand-800"
                >
                  <Flag locale={target} />
                  <span className="flex min-w-0 flex-1 flex-col">
                    {/* Inline isolates keep each name's own direction while the row aligns to the page direction. */}
                    <span className={`text-start font-semibold ${active ? "text-brand-800" : "text-ink-900"}`}>
                      <bdi dir={info.dir}>{info.nativeName}</bdi>
                    </span>
                    <span className="text-start text-xs font-normal text-neutral-500">
                      <bdi lang="en" dir="ltr">
                        {info.englishName}
                      </bdi>
                    </span>
                  </span>
                  {active && (
                    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="size-4 shrink-0 text-brand-700">
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.58l7.3-7.29a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
                    </svg>
                  )}
                  {!exists && !active && <span className="sr-only">{t("untranslated", { language: info.nativeName })}</span>}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
