"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { searchCalculators, sortEntries, type SearchEntry, type SortOrder } from "@/lib/search";
import { DirectoryGroups, SearchResults, type DirectoryGroup } from "./DirectoryResults";

export interface FilterOption {
  slug: string;
  name: string;
  href: string;
  count: number;
}

interface Props {
  entries: SearchEntry[];
  categories: FilterOption[];
  collections: FilterOption[];
}

const SORTS: { value: SortOrder; label: string }[] = [
  { value: "category", label: "By category" },
  { value: "popular", label: "Most popular" },
  { value: "az", label: "A–Z" },
  { value: "newest", label: "Newest" },
];

const selectClass =
  "block h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 text-sm text-ink-900 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 focus:outline-none";

function isSort(value: string | null): value is SortOrder {
  return SORTS.some((s) => s.value === value);
}

function updateUrl(params: Record<string, string>) {
  const url = new URL(window.location.href);
  for (const [key, value] of Object.entries(params)) {
    if (value && !(key === "sort" && value === "category")) url.searchParams.set(key, value);
    else url.searchParams.delete(key);
  }
  window.history.replaceState(window.history.state, "", url);
}

export function SearchableDirectory({ entries, categories, collections }: Props) {
  const params = useSearchParams();
  const [query, setQuery] = useState(() => params.get("q") ?? "");
  const [category, setCategory] = useState(() => (categories.some((c) => c.slug === params.get("category")) ? params.get("category")! : ""));
  const [collection, setCollection] = useState(() => (collections.some((c) => c.slug === params.get("collection")) ? params.get("collection")! : ""));
  const [sort, setSort] = useState<SortOrder>(() => {
    const value = params.get("sort");
    return isSort(value) ? value : "category";
  });

  const categoryOrder = useMemo(() => categories.map((c) => c.slug), [categories]);
  const results = useMemo(() => {
    const filtered = searchCalculators(entries, query).filter(
      (entry) => (!category || entry.categorySlug === category) && (!collection || entry.collections.includes(collection)),
    );
    // Search results keep relevance order unless the user picks a sort.
    return query.trim() && sort === "category" ? filtered : sortEntries(filtered, sort, categoryOrder);
  }, [entries, query, category, collection, sort, categoryOrder]);

  const filtersActive = Boolean(query.trim() || category || collection);
  const set = (key: "q" | "category" | "collection" | "sort", value: string) => {
    if (key === "q") setQuery(value);
    if (key === "category") setCategory(value);
    if (key === "collection") setCollection(value);
    if (key === "sort") setSort(value as SortOrder);
    updateUrl({ q: key === "q" ? value.trim() : query.trim(), category: key === "category" ? value : category, collection: key === "collection" ? value : collection, sort: key === "sort" ? value : sort });
  };
  const clear = () => {
    setQuery("");
    setCategory("");
    setCollection("");
    updateUrl({ q: "", category: "", collection: "", sort });
  };

  const groups: DirectoryGroup[] =
    sort === "category" && !query.trim()
      ? categories
          .map((c) => ({ name: c.name, href: c.href, entries: results.filter((e) => e.categorySlug === c.slug) }))
          .filter((g) => g.entries.length > 0)
      : [];

  const countText = filtersActive
    ? `${results.length} of ${entries.length} calculators${query.trim() ? ` match “${query.trim()}”` : ""}.`
    : `Showing all ${entries.length} calculators.`;

  return (
    <>
      <div className="card grid gap-4 p-4 sm:p-5 md:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))] md:items-end">
        <div role="search">
          <label htmlFor="directory-search" className="mb-1.5 block text-sm font-medium text-ink-800">
            Search calculators
          </label>
          <input
            id="directory-search"
            type="search"
            autoComplete="off"
            value={query}
            onChange={(event) => set("q", event.target.value)}
            placeholder="e.g. loan, percent, molarity"
            aria-describedby="directory-count"
            className="block h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 text-base text-ink-900 placeholder:text-neutral-500 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="directory-category" className="mb-1.5 block text-sm font-medium text-ink-800">
            Category
          </label>
          <select id="directory-category" value={category} onChange={(event) => set("category", event.target.value)} className={selectClass}>
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name} ({c.count})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="directory-collection" className="mb-1.5 block text-sm font-medium text-ink-800">
            Industry
          </label>
          <select id="directory-collection" value={collection} onChange={(event) => set("collection", event.target.value)} className={selectClass}>
            <option value="">All industries</option>
            {collections.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name} ({c.count})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="directory-sort" className="mb-1.5 block text-sm font-medium text-ink-800">
            Sort
          </label>
          <select id="directory-sort" value={sort} onChange={(event) => set("sort", event.target.value)} className={selectClass}>
            {SORTS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <p id="directory-count" aria-live="polite" className="text-sm text-neutral-600">
          {countText}
        </p>
        {filtersActive && (
          <button type="button" onClick={clear} className="focus-ring rounded-md px-2 py-1 text-sm font-medium text-brand-700 hover:bg-brand-50">
            Clear filters
          </button>
        )}
      </div>
      <div className="mt-6">
        {results.length === 0 ? (
          <div className="card p-6 text-neutral-700">
            <p className="font-medium text-ink-900">{query.trim() ? `No calculators match “${query.trim()}”` : "No calculators match these filters"}.</p>
            <p className="mt-1 text-sm">Try a shorter search term, another category or industry, or clear the filters.</p>
            <button type="button" onClick={clear} className="focus-ring mt-4 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
              Clear filters
            </button>
          </div>
        ) : groups.length > 0 ? (
          <DirectoryGroups groups={groups} />
        ) : (
          <SearchResults entries={results} query={query.trim()} />
        )}
      </div>
    </>
  );
}
