"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { searchCalculators, type SearchEntry } from "@/lib/search";
import { DirectoryGroups, SearchResults, type DirectoryGroup } from "./DirectoryResults";

interface Props {
  entries: SearchEntry[];
  groups: DirectoryGroup[];
}

export function DirectorySearchBox({ value, onChange, count }: { value: string; onChange?: (value: string) => void; count: string }) {
  return (
    <div role="search" className="relative max-w-xl">
      <label htmlFor="directory-search" className="mb-1.5 block text-sm font-medium text-navy-800">
        Search calculators
      </label>
      <input
        id="directory-search"
        type="search"
        autoComplete="off"
        value={value}
        readOnly={!onChange}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder="e.g. salary, percent, return"
        aria-describedby="directory-count"
        className="block h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base text-navy-900 shadow-sm placeholder:text-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none"
      />
      <p id="directory-count" aria-live="polite" className="mt-2 text-sm text-slate-600">
        {count}
      </p>
    </div>
  );
}

function countLabel(n: number, query: string, total: number) {
  if (!query.trim()) return `Showing all ${total} calculators.`;
  return `${n} ${n === 1 ? "calculator matches" : "calculators match"} “${query.trim()}”.`;
}

export function SearchableDirectory({ entries, groups }: Props) {
  const params = useSearchParams();
  const [query, setQuery] = useState(() => params.get("q") ?? "");
  const results = useMemo(() => searchCalculators(entries, query), [entries, query]);

  const onChange = (value: string) => {
    setQuery(value);
    const url = new URL(window.location.href);
    if (value.trim()) url.searchParams.set("q", value);
    else url.searchParams.delete("q");
    window.history.replaceState(window.history.state, "", url);
  };

  return (
    <>
      <DirectorySearchBox value={query} onChange={onChange} count={countLabel(results.length, query, entries.length)} />
      <div className="mt-8">{query.trim() ? <SearchResults entries={results} query={query.trim()} /> : <DirectoryGroups groups={groups} />}</div>
    </>
  );
}
