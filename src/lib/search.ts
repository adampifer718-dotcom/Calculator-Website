export interface SearchEntry {
  slug: string;
  title: string;
  summary: string;
  /** Category display name. */
  category: string;
  categorySlug: string;
  collections: string[];
  keywords: string[];
  href: string;
  /** Lower is more popular. */
  popularRank: number;
  /** ISO date published. */
  addedOn: string;
  /** Registry position, used to break ties. */
  order: number;
}

export type SortOrder = "category" | "popular" | "az" | "newest";

export function sortEntries(entries: readonly SearchEntry[], order: SortOrder, categoryOrder: readonly string[] = []): SearchEntry[] {
  const list = [...entries];
  switch (order) {
    case "az":
      return list.sort((a, b) => a.title.localeCompare(b.title, "en"));
    case "popular":
      return list.sort((a, b) => a.popularRank - b.popularRank || a.title.localeCompare(b.title, "en"));
    case "newest":
      return list.sort((a, b) => (a.addedOn === b.addedOn ? b.order - a.order : a.addedOn < b.addedOn ? 1 : -1));
    case "category":
      return list.sort((a, b) => categoryOrder.indexOf(a.categorySlug) - categoryOrder.indexOf(b.categorySlug) || a.order - b.order);
  }
}

export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9%]+/g, " ")
    .trim();
}

/**
 * Returns entries matching every word of the query, ranked so that title
 * matches come before keyword, category and summary matches.
 */
export function searchCalculators(entries: readonly SearchEntry[], query: string): SearchEntry[] {
  const terms = normalize(query).split(" ").filter(Boolean);
  if (terms.length === 0) return [...entries];

  const scored: { entry: SearchEntry; score: number }[] = [];
  for (const entry of entries) {
    const title = normalize(entry.title);
    const keywords = normalize(entry.keywords.join(" "));
    const rest = normalize(`${entry.category} ${entry.summary}`);
    let score = 0;
    let matchesAll = true;
    for (const term of terms) {
      if (title.split(" ").some((word) => word.startsWith(term))) score += 3;
      else if (keywords.includes(term)) score += 2;
      else if (rest.includes(term)) score += 1;
      else {
        matchesAll = false;
        break;
      }
    }
    if (matchesAll) scored.push({ entry, score });
  }
  return [...scored].sort((a, b) => b.score - a.score).map((s) => s.entry);
}
