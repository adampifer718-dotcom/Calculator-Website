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

/** Distinct glyphs for frequently used calculators, so neighbouring tiles of one category are easy to tell apart. */
const CALCULATOR_GLYPHS: Record<string, string> = {
  "salary-to-hourly-calculator": "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
  "hourly-to-salary-calculator": "M4 7h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4zM4 7l11-3v3M16 13h2",
  "loan-payment-calculator": "M12 3l9 5H3zM5 10v7M9.5 10v7M14.5 10v7M19 10v7M3 20h18",
  "mortgage-calculator": "M4 11l8-7 8 7M6 9.5V20h12V9.5M10 20v-5h4v5",
  "percentage-increase-calculator": "M4 17l6-6 4 4 6-8M15 7h5v5",
  "roi-calculator": "M9 7c0-1.4 2.2-2.5 5-2.5S19 5.6 19 7s-2.2 2.5-5 2.5S9 8.4 9 7zM9 7v4c0 1.4 2.2 2.5 5 2.5M5 13c0-1.4 2.2-2.5 5-2.5M5 13v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-1",
  "compound-interest-calculator": "M4 4v16h16M7 16c3 0 5-2 6-5s4-5 7-5",
  "bmi-calculator": "M5 4h14v16H5zM9 10a3 3 0 0 1 6 0M12 10l1.5-2",
  "tip-calculator": "M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6M9 16h3",
  "sales-tax-calculator": "M6 3h12v18l-3-2-3 2-3-2-3 2zM9 9l6 6M9.5 15h.01M14.5 9h.01",
  "discount-calculator": "M3 12V4h8l10 10-8 8zM7.5 7.5h.01",
  "unit-price-calculator": "M3 12V4h8l10 10-8 8zM7.5 7.5h.01M11 14l3-3",
  "credit-card-payoff-calculator": "M3 6h18v12H3zM3 10h18M7 15h4",
  "savings-goal-calculator": "M12 3a9 9 0 1 0 9 9M12 7a5 5 0 1 0 5 5M12 11.5a.5.5 0 1 0 .5.5M13 11l7-7",
  "budget-calculator": "M12 3v9h9a9 9 0 1 1-9-9zM15 3.5A9 9 0 0 1 20.5 9H15z",
  "debt-to-income-calculator": "M12 4v16M6 20h12M5 8h14M5 8l-2.5 6h5zM19 8l-2.5 6h5z",
  "age-calculator": "M5 11h14v9H5zM5 15c2 1 3-1 4.7 0s3.6 1 5.3 0 2.6-1 4 0M12 11V8M12 5.5v.01",
  "time-calculator": "M7 3h10M7 21h10M8 3c0 5 8 5 8 9s-8 4-8 9M16 3c0 5-8 5-8 9",
};

/** Pastel tile and deep glyph colour per category, from the reference palette (tile + glyph contrast ≥ 4.5:1). */
const TONES: Record<CategorySlug, { bg: string; fg: string }> = {
  finance: { bg: "#F9E7B8", fg: "#7A4F00" },
  math: { bg: "#DCE6F3", fg: "#2C4A75" },
  statistics: { bg: "#E6DFF4", fg: "#553A8C" },
  health: { bg: "#F7DCDA", fg: "#9C3832" },
  physics: { bg: "#CDE8F1", fg: "#1D5A72" },
  chemistry: { bg: "#D9EFE4", fg: "#1F6B4A" },
  biology: { bg: "#E3EFD8", fg: "#3D6526" },
  construction: { bg: "#F6D9CC", fg: "#9A4330" },
  conversion: { bg: "#E5EDF7", fg: "#35588A" },
  ecology: { bg: "#D6EEE6", fg: "#1E6655" },
  "everyday-life": { bg: "#F7E6E4", fg: "#94403A" },
  food: { bg: "#FBE3D2", fg: "#8F4718" },
  sports: { bg: "#D3E9F3", fg: "#1F5876" },
  other: { bg: "#ECE5DC", fg: "#564B3E" },
};

const SIZES = {
  sm: { box: "size-8 rounded-lg", icon: "size-4" },
  md: { box: "size-10 rounded-xl", icon: "size-5" },
  lg: { box: "size-12 rounded-2xl", icon: "size-6" },
  xl: { box: "size-14 rounded-2xl", icon: "size-7" },
} as const;

export function CategoryIcon({ category, size = "md", slug }: { category: CategorySlug; size?: keyof typeof SIZES; slug?: string }) {
  const tone = TONES[category];
  const dims = SIZES[size];
  return (
    <span
      aria-hidden="true"
      style={{ backgroundColor: tone.bg, color: tone.fg }}
      className={`inline-flex shrink-0 items-center justify-center shadow-[inset_0_0_0_1px_rgb(255_255_255/0.6),0_1px_2px_rgb(30_36_51/0.06)] ${dims.box}`}
    >
      <svg viewBox="0 0 24 24" className={dims.icon} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d={(slug && CALCULATOR_GLYPHS[slug]) || PATHS[category]} />
      </svg>
    </span>
  );
}
