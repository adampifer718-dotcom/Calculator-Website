import type { CategorySlug } from "@/calculators/framework/types";

const PATHS: Record<CategorySlug, string> = {
  "salary-and-pay": "M3 7h18v10H3zM12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M6 10v4M18 10v4",
  math: "M7 17L17 7M8 8.5a1.5 1.5 0 1 0 0-.01M16 16.5a1.5 1.5 0 1 0 0-.01",
  "finance-and-investing": "M4 18l5-6 4 3 7-8M15 7h5v5",
};

export function CategoryIcon({ category, size = "md" }: { category: CategorySlug; size?: "md" | "lg" }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 ring-1 ring-blue-200/70 ${
        size === "lg" ? "size-12" : "size-10"
      }`}
    >
      <svg viewBox="0 0 24 24" className={size === "lg" ? "size-6" : "size-5"} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d={PATHS[category]} />
      </svg>
    </span>
  );
}
