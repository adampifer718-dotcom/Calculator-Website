import type { CategorySlug } from "@/calculators/framework/types";

const PATHS: Record<CategorySlug, string> = {
  "salary-and-pay": "M3 7h18v10H3zM12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M6 10v4M18 10v4",
  math: "M7 17L17 7M8 8.5a1.5 1.5 0 1 0 0-.01M16 16.5a1.5 1.5 0 1 0 0-.01",
  "finance-and-investing": "M4 18l5-6 4 3 7-8M15 7h5v5",
  statistics: "M5 20V11M10 20V5M15 20v-7M20 20V9M3 20h18",
  construction: "M4 20h16M6 20V10l6-5 6 5v10M10 20v-5h4v5",
  "everyday-life": "M8 3v3M16 3v3M4 8h16M5 5h14v15H5zM9 13l2 2 4-4",
  health: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10zM8 11h2l1-2 2 4 1-2h2",
};

export function CategoryIcon({ category, size = "md" }: { category: CategorySlug; size?: "md" | "lg" }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-200/70 ${
        size === "lg" ? "size-12" : "size-10"
      }`}
    >
      <svg viewBox="0 0 24 24" className={size === "lg" ? "size-6" : "size-5"} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d={PATHS[category]} />
      </svg>
    </span>
  );
}
