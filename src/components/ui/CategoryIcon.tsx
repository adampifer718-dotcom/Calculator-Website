import type { CategorySlug } from "@/calculators/framework/types";

const PATHS: Record<CategorySlug, string> = {
  biology: "M7 3c0 5 10 7 10 12s-4 5-4 6M17 3c0 5-10 7-10 12s4 5 4 6M8.5 7h7M8.5 17h7",
  chemistry: "M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3M7.5 15h9",
  construction: "M4 20h16M6 20V10l6-5 6 5v10M10 20v-5h4v5",
  conversion: "M4 8h14l-3-3M20 16H6l3 3",
  ecology: "M5 19c0-8 6-14 14-14 0 8-6 14-14 14zM5 19l7-7",
  "everyday-life": "M8 3v3M16 3v3M4 8h16M5 5h14v15H5zM9 13l2 2 4-4",
  finance: "M4 18l5-6 4 3 7-8M15 7h5v5",
  food: "M4 11h16a8 8 0 0 1-16 0zM9 7.5c0-1 1-1.5 1-2.5M14 7.5c0-1 1-1.5 1-2.5",
  health: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10zM8 11h2l1-2 2 4 1-2h2",
  math: "M7 17L17 7M8 8.5a1.5 1.5 0 1 0 0-.01M16 16.5a1.5 1.5 0 1 0 0-.01",
  physics: "M13 3L5 14h6l-1 7 8-11h-6l1-7z",
  sports: "M12 9v4l2.5 1.5M9 2h6M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16z",
  statistics: "M5 20V11M10 20V5M15 20v-7M20 20V9M3 20h18",
  other: "M5 5h5v5H5zM14 5h5v5h-5zM5 14h5v5H5zM14 14h5v5h-5z",
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
