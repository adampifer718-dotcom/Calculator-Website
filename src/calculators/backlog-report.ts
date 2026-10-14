import { BACKLOG, priorityScore, type BacklogItem } from "./backlog.ts";
import { CATEGORIES } from "./categories.ts";
import { COLLECTIONS } from "./collections.ts";

const STATUS_ORDER = ["published", "testing", "implementing", "researching", "planned"] as const;

const categoryName = (slug: string) => CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
const collectionName = (slug: string) => COLLECTIONS.find((c) => c.slug === slug)?.name ?? slug;
const cell = (text: string) => text.replace(/\|/g, "\\|");

function sortByPriority(items: readonly BacklogItem[]): BacklogItem[] {
  return [...items].sort((a, b) => priorityScore(b) - priorityScore(a) || a.name.localeCompare(b.name, "en"));
}

/** Renders the backlog as Markdown. Deterministic, so the committed file can be checked in tests. */
export function renderBacklogMarkdown(): string {
  const out: string[] = [];
  out.push("# Calculator backlog", "");
  out.push("Generated from `src/calculators/backlog.ts` by `npm run backlog:report`. Do not edit by hand.", "");
  out.push(
    "Priority = 2 × usefulness + 2 × demand − difficulty (each scored 1–5). Scores are editorial estimates; demand is not yet backed by search-volume data.",
    "",
  );

  out.push("## Summary", "", "| Status | Count |", "| --- | --- |");
  for (const status of STATUS_ORDER) out.push(`| ${status} | ${BACKLOG.filter((i) => i.status === status).length} |`);
  out.push(`| **total** | **${BACKLOG.length}** |`, "");

  out.push("## Coverage by category", "", "| Category | Published | In backlog |", "| --- | --- | --- |");
  for (const category of CATEGORIES) {
    const items = BACKLOG.filter((i) => i.category === category.slug);
    out.push(`| ${category.name} | ${items.filter((i) => i.status === "published").length} | ${items.filter((i) => i.status !== "published").length} |`);
  }
  out.push("");

  out.push("## Coverage by industry collection", "", "| Collection | Published | In backlog |", "| --- | --- | --- |");
  for (const collection of COLLECTIONS) {
    const items = BACKLOG.filter((i) => i.collections.includes(collection.slug));
    out.push(`| ${collection.name} | ${items.filter((i) => i.status === "published").length} | ${items.filter((i) => i.status !== "published").length} |`);
  }
  out.push("");

  const flagged = sortByPriority(BACKLOG.filter((i) => i.review));
  out.push("## Needs expert review", "", "Medical, financial, tax, engineering and safety topics. Published items here have not yet had professional review.", "");
  out.push("| Concept | Area | Status |", "| --- | --- | --- |");
  for (const item of flagged) out.push(`| ${cell(item.name)} | ${item.review} | ${item.status} |`);
  out.push("");

  for (const status of STATUS_ORDER) {
    const items = sortByPriority(BACKLOG.filter((i) => i.status === status));
    if (items.length === 0) continue;
    out.push(`## ${status[0].toUpperCase()}${status.slice(1)} (${items.length})`, "");
    out.push("| Priority | Concept | Category | Collections | Difficulty | Review | Notes |", "| --- | --- | --- | --- | --- | --- | --- |");
    for (const item of items) {
      out.push(
        `| ${priorityScore(item)} | ${cell(item.name)} | ${categoryName(item.category)} | ${item.collections.map(collectionName).join(", ")} | ${item.difficulty} | ${item.review ?? ""} | ${cell(item.notes ?? "")} |`,
      );
    }
    out.push("");
  }
  return out.join("\n");
}
