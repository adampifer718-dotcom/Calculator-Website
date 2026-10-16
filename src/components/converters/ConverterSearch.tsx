"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import type { ConverterGroup } from "@/converters/types";
import { normalize } from "@/lib/search";
import { ConverterIcon } from "./ConverterIcon";

export interface ConverterEntry {
  id: string;
  group: ConverterGroup;
  title: string;
  summary: string;
  href: string;
  /** Unit names (translated and English), symbols and keywords used for search. */
  terms: string[];
}

/** Ranks converters: title words first, then unit names, symbols and keywords, then the summary. */
export function searchConverters(entries: readonly ConverterEntry[], query: string): ConverterEntry[] {
  const words = normalize(query).split(" ").filter(Boolean);
  // Symbols such as "m²", "°C" or "µF" normalize poorly, so also match the raw lower-cased query against raw symbols.
  const raw = query.trim().toLocaleLowerCase();
  if (words.length === 0 && raw === "") return [...entries];
  const scored: { entry: ConverterEntry; score: number }[] = [];
  for (const entry of entries) {
    const title = normalize(entry.title).split(" ");
    const termText = entry.terms.map((term) => normalize(term)).join(" | ");
    const termWords = termText.split(/[ |]+/);
    const summary = normalize(entry.summary);
    let score = 0;
    let all = words.length > 0;
    for (const word of words) {
      if (title.some((w) => w.startsWith(word))) score += 4;
      else if (termWords.includes(word)) score += 3;
      else if (termText.includes(word)) score += 2;
      else if (summary.includes(word)) score += 1;
      else {
        all = false;
        break;
      }
    }
    if (!all && raw && entry.terms.some((term) => term.toLocaleLowerCase() === raw)) {
      all = true;
      score = 3;
    }
    if (all) scored.push({ entry, score });
  }
  return scored.sort((a, b) => b.score - a.score).map((s) => s.entry);
}

export function EntryLink({ entry }: { entry: ConverterEntry }) {
  return (
    <Link href={entry.href} className="card-link flex h-full items-start gap-3 p-4">
      <ConverterIcon group={entry.group} size="sm" />
      <span className="min-w-0">
        <span className="block font-bold break-words hyphens-auto text-ink-900">{entry.title}</span>
        <span className="mt-0.5 line-clamp-2 block text-sm text-neutral-600">{entry.summary}</span>
      </span>
    </Link>
  );
}

/** Prominent converter search; matching converters appear right below the box as you type. */
export function ConverterSearch({ entries }: { entries: ConverterEntry[] }) {
  const t = useTranslations("converters");
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchConverters(entries, query), [entries, query]);
  const searching = query.trim() !== "";

  return (
    <div>
      <div role="search" className="relative max-w-2xl">
        <label htmlFor="converter-search" className="sr-only">
          {t("searchLabel")}
        </label>
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="pointer-events-none absolute start-4 top-1/2 size-5 -translate-y-1/2 text-neutral-500">
          <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.45 4.39l3.08 3.08a.75.75 0 1 1-1.06 1.06l-3.08-3.08A7 7 0 0 1 2 9Z" clipRule="evenodd" />
        </svg>
        <input
          id="converter-search"
          type="search"
          autoComplete="off"
          spellCheck={false}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("searchPlaceholder")}
          className="block h-14 w-full rounded-full border border-neutral-300 bg-white ps-12 pe-28 text-base font-medium text-ink-900 shadow-[0_8px_24px_-16px_rgb(30_36_51/0.35)] placeholder:font-normal placeholder:text-neutral-500 hover:border-neutral-400 focus:border-brand-600 focus:ring-4 focus:ring-brand-200/70 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        {searching && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="focus-ring absolute end-2 top-1/2 h-10 -translate-y-1/2 rounded-full px-4 text-sm font-bold text-brand-700 hover:bg-brand-50"
          >
            {t("clearSearch")}
          </button>
        )}
      </div>
      <p role="status" className={searching ? "mt-3 text-sm text-neutral-700" : "sr-only"}>
        {searching ? t("searchCount", { count: results.length, query: query.trim() }) : ""}
      </p>

      {searching &&
        (results.length > 0 ? (
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" data-converter-results>
            {results.map((entry) => (
              <li key={entry.id}>
                <EntryLink entry={entry} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-5 rounded-2xl bg-cream p-5 text-neutral-700 ring-1 ring-line">{t("noResults")}</p>
        ))}
    </div>
  );
}
