import type { ConverterGroup } from "@/converters/types";

const GROUP_PATHS: Record<ConverterGroup, string> = {
  common: "M3 17h18M5 17v-3M9 17v-5M13 17v-3M17 17v-5M21 17V7H3v10",
  engineering: "M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1",
  heat: "M12 3a2 2 0 0 0-2 2v9.3a4 4 0 1 0 4 0V5a2 2 0 0 0-2-2zM12 10v7",
  fluids: "M12 3s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11zM9 15a3 3 0 0 0 3 3",
  light: "M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z",
  electricity: "M13 3 5 14h6l-1 7 8-11h-6z",
  magnetism: "M6 4v8a6 6 0 0 0 12 0V4h-4v8a2 2 0 0 1-4 0V4zM6 8h4M14 8h4",
  radiology: "M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 3a9 9 0 0 1 7.8 4.5L14 11M12 3a9 9 0 0 0-7.8 4.5L10 11M7.5 19.8A9 9 0 0 0 16.5 19.8L13.5 14h-3z",
  other: "M5 5h5v5H5zM14 5h5v5h-5zM5 14h5v5H5zM14 14h5v5h-5z",
};

/** Pastel tile and deep glyph colour per converter group (tile + glyph contrast ≥ 4.5:1). */
const GROUP_TONES: Record<ConverterGroup, { bg: string; fg: string }> = {
  common: { bg: "#E5EDF7", fg: "#35588A" },
  engineering: { bg: "#ECE5DC", fg: "#564B3E" },
  heat: { bg: "#F6D9CC", fg: "#9A4330" },
  fluids: { bg: "#CDE8F1", fg: "#1D5A72" },
  light: { bg: "#F9E7B8", fg: "#7A4F00" },
  electricity: { bg: "#E6DFF4", fg: "#553A8C" },
  magnetism: { bg: "#F7DCDA", fg: "#9C3832" },
  radiology: { bg: "#D9EFE4", fg: "#1F6B4A" },
  other: { bg: "#DCE6F3", fg: "#2C4A75" },
};

const SIZES = {
  sm: { box: "size-8 rounded-lg", icon: "size-4" },
  md: { box: "size-10 rounded-xl", icon: "size-5" },
  lg: { box: "size-12 rounded-2xl", icon: "size-6" },
} as const;

export function ConverterIcon({ group, size = "md" }: { group: ConverterGroup; size?: keyof typeof SIZES }) {
  const tone = GROUP_TONES[group];
  const s = SIZES[size];
  return (
    <span aria-hidden="true" className={`inline-flex shrink-0 items-center justify-center ${s.box}`} style={{ backgroundColor: tone.bg, color: tone.fg }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={s.icon}>
        <path d={GROUP_PATHS[group]} />
      </svg>
    </span>
  );
}
