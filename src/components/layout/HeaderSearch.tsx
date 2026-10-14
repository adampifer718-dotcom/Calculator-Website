"use client";

import { useLocale, useTranslations } from "next-intl";
import Form from "next/form";
import { useRouter } from "next/navigation";
import { useId, useMemo, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";
import { searchCalculators, type SearchEntry } from "@/lib/search";

type Size = "sm" | "lg" | "xl";

const INPUT: Record<Size, string> = {
  sm: "h-9 rounded-lg pe-3 ps-9 text-sm",
  lg: "h-13 rounded-lg pe-28 ps-11 text-base shadow-sm",
  xl: "h-16 rounded-full pe-20 ps-6 text-base shadow-md sm:text-lg",
};

const MAX_SUGGESTIONS = 8;

const indexPromises = new Map<Locale, Promise<SearchEntry[]>>();

/** Loads the prerendered search index for a language once per page view. */
function loadIndex(locale: Locale): Promise<SearchEntry[]> {
  let promise = indexPromises.get(locale);
  if (!promise) {
    promise = fetch(`/search-index/${locale}`)
      .then((response) => (response.ok ? (response.json() as Promise<SearchEntry[]>) : []))
      .catch(() => {
        indexPromises.delete(locale);
        return [];
      });
    indexPromises.set(locale, promise);
  }
  return promise;
}

function SearchIcon({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 3.47 9.77l3.13 3.13a.75.75 0 1 0 1.06-1.06l-3.13-3.13A5.5 5.5 0 0 0 9 3.5ZM5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" clipRule="evenodd" />
    </svg>
  );
}

/**
 * Search box with autocomplete suggestions (ARIA combobox). Without
 * JavaScript, or when no suggestion is chosen, it submits to the directory,
 * which filters by the `q` parameter.
 */
export function HeaderSearch({ id, label, size = "sm" }: { id: string; label: string; size?: Size }) {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("search");
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [entries, setEntries] = useState<SearchEntry[] | null>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);

  const suggestions = useMemo(
    () => (entries && query.trim() ? searchCalculators(entries, query).slice(0, MAX_SUGGESTIONS) : []),
    [entries, query],
  );
  const showList = open && query.trim().length > 0 && entries !== null;

  const ensureIndex = () => {
    if (!entries) void loadIndex(locale).then(setEntries);
  };

  const go = (entry: SearchEntry) => {
    setOpen(false);
    setQuery("");
    inputRef.current?.blur();
    router.push(entry.href);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" && suggestions.length > 0) {
      event.preventDefault();
      setOpen(true);
      setActive((i) => (i + 1) % suggestions.length);
    } else if (event.key === "ArrowUp" && suggestions.length > 0) {
      event.preventDefault();
      setActive((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (event.key === "Enter" && showList && active >= 0 && suggestions[active]) {
      event.preventDefault();
      go(suggestions[active]);
    } else if (event.key === "Escape") {
      setOpen(false);
      setActive(-1);
    }
  };

  return (
    <Form action={localizePath(locale, "/calculators")} role="search" aria-label={label} className="relative">
      <label htmlFor={id} className="sr-only">
        {t("label")}
      </label>
      {size !== "xl" && (
        <SearchIcon className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-neutral-400 ${size === "lg" ? "start-4 size-5" : "start-3 size-4"}`} />
      )}
      <input
        ref={inputRef}
        id={id}
        name="q"
        type="search"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={showList}
        aria-controls={listId}
        aria-activedescendant={showList && active >= 0 ? `${listId}-${active}` : undefined}
        autoComplete="off"
        value={query}
        onFocus={() => {
          ensureIndex();
          setOpen(true);
        }}
        onBlur={() => setOpen(false)}
        onChange={(event) => {
          ensureIndex();
          setQuery(event.target.value);
          setOpen(true);
          setActive(-1);
        }}
        onKeyDown={onKeyDown}
        placeholder={size === "lg" ? t("placeholderLong") : t("placeholderShort")}
        className={`block w-full border border-neutral-300 bg-white text-ink-900 placeholder:text-neutral-500 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 focus:outline-none ${INPUT[size]}`}
      />
      {size === "lg" && (
        <button type="submit" className="focus-ring absolute end-1.5 top-1.5 bottom-1.5 rounded-md bg-brand-600 px-4 text-sm font-semibold text-white hover:bg-brand-700">
          {t("submit")}
        </button>
      )}
      {size === "xl" && (
        <button
          type="submit"
          className="focus-ring absolute end-2 top-2 bottom-2 flex aspect-square items-center justify-center rounded-full bg-brand-600 text-white hover:bg-brand-700"
        >
          <span className="sr-only">{t("submit")}</span>
          <SearchIcon className="size-6" />
        </button>
      )}
      <div
        id={listId}
        role="listbox"
        aria-label={t("suggestions")}
        hidden={!showList}
        className={`absolute inset-x-0 top-full z-50 mt-2 max-h-96 overflow-y-auto rounded-xl border border-neutral-200 bg-white p-1.5 shadow-lg ${size === "xl" ? "rounded-2xl" : ""}`}
      >
        {suggestions.map((entry, index) => (
          <div
            key={entry.slug}
            id={`${listId}-${index}`}
            role="option"
            aria-selected={index === active}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => go(entry)}
            onMouseEnter={() => setActive(index)}
            className="flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-start aria-selected:bg-brand-50"
          >
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-ink-900">{entry.title}</span>
              <span className="block truncate text-xs text-neutral-600">{entry.summary}</span>
            </span>
            <span className="shrink-0 rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600">{entry.category}</span>
          </div>
        ))}
        {showList && suggestions.length === 0 && (
          <p className="px-3 py-3 text-sm text-neutral-600">{t("noMatches", { query: query.trim() })}</p>
        )}
      </div>
      <p aria-live="polite" className="sr-only">
        {showList ? t("count", { count: suggestions.length }) : ""}
      </p>
    </Form>
  );
}
