import Link from "next/link";
import { useTranslations } from "next-intl";
import type { CategorySlug } from "@/calculators/framework/types";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import type { SearchEntry } from "@/lib/search";

export interface DirectoryGroup {
  name: string;
  href: string;
  entries: SearchEntry[];
}

function EntryList({ entries }: { entries: SearchEntry[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry) => (
        <li key={entry.slug}>
          <Link
            href={entry.href}
            className="card card-link focus-ring group flex h-full items-start gap-4 p-5"
          >
            <CategoryIcon category={entry.categorySlug as CategorySlug} slug={entry.slug} size="lg" />
            <span className="min-w-0">
              <span className="block font-bold text-ink-900 group-hover:text-brand-700">{entry.title}</span>
              <span className="mt-1 block text-sm leading-relaxed text-neutral-600">{entry.summary}</span>
              <span className="mt-2.5 inline-block rounded-full bg-cream px-2.5 py-0.5 text-xs font-bold text-neutral-700 ring-1 ring-line">{entry.category}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function DirectoryGroups({ groups }: { groups: DirectoryGroup[] }) {
  const t = useTranslations("directory");
  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <section key={group.href} aria-labelledby={`group-${group.href}`}>
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <h2 id={`group-${group.href}`} className="text-xl font-extrabold tracking-tight text-ink-900">
              {group.name}
            </h2>
            <Link href={group.href} className="focus-ring shrink-0 rounded text-sm font-bold text-brand-700 hover:underline">
              {t("viewCategory")}
            </Link>
          </div>
          <EntryList entries={group.entries} />
        </section>
      ))}
    </div>
  );
}

export function SearchResults({ entries }: { entries: SearchEntry[] }) {
  return <EntryList entries={entries} />;
}
