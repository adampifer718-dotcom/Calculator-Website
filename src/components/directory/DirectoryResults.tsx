import Link from "next/link";
import type { SearchEntry } from "@/lib/search";

export interface DirectoryGroup {
  name: string;
  href: string;
  entries: SearchEntry[];
}

function EntryList({ entries }: { entries: SearchEntry[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry) => (
        <li key={entry.slug}>
          <Link
            href={entry.href}
            className="card focus-ring group block h-full p-4 transition-colors hover:border-blue-300 hover:bg-blue-50/30"
          >
            <span className="block font-semibold text-navy-900 group-hover:text-blue-800">{entry.title}</span>
            <span className="mt-1 block text-sm text-slate-600">{entry.summary}</span>
            <span className="mt-2 block text-xs font-medium text-blue-700">{entry.category}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function DirectoryGroups({ groups }: { groups: DirectoryGroup[] }) {
  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <section key={group.href} aria-labelledby={`group-${group.href}`}>
          <div className="mb-3 flex items-baseline justify-between gap-4">
            <h2 id={`group-${group.href}`} className="text-xl font-semibold text-navy-900">
              {group.name}
            </h2>
            <Link href={group.href} className="focus-ring shrink-0 rounded text-sm font-medium text-blue-700 hover:underline">
              View category
            </Link>
          </div>
          <EntryList entries={group.entries} />
        </section>
      ))}
    </div>
  );
}

export function SearchResults({ entries, query }: { entries: SearchEntry[]; query: string }) {
  if (entries.length === 0) {
    return (
      <div className="card p-6 text-slate-700">
        <p className="font-medium text-navy-900">No calculators match “{query}”.</p>
        <p className="mt-1 text-sm">Try a shorter or different term, such as “salary”, “percent” or “investment”.</p>
      </div>
    );
  }
  return <EntryList entries={entries} />;
}
