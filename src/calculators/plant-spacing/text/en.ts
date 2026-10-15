const text = {
  unit: "Unit",
  units: { m: "m", cm: "cm", ft: "ft", in: "in" },
  length: "Bed length",
  width: "Bed width",
  pattern: "Planting pattern",
  patterns: { grid: "Rows (square grid)", triangular: "Triangular (offset)" },
  spacing: "Spacing between plants",
  spacingHelp: "The recommended distance between plants, from the seed packet or plant label.",
  rowSpacing: "Spacing between rows",
  errors: { tooMany: "This spacing is too small for the bed: it would give more than a billion plants." },
  plants: "Plants that fit",
  caption: "Each plant is kept at least half a spacing from every edge of the bed.",
  rows: "Rows",
  perRow: "Plants per row",
  perRowOffset: "Plants per row (full / offset)",
  perRowOffsetValue: "{full} / {offset}",
  bedArea: "Bed area",
  densityMetric: "Plants per square meter",
  densityImperial: "Plants per square foot",
  notes: {
    tooSmall: "The bed is too small for this spacing: not even one plant fits with half a spacing clear of every edge.",
    triangular: "In a triangular pattern each row is offset by half a spacing, and rows are 0.866 (√3/2) spacings apart.",
  },
};
export type PlantSpacingText = typeof text;
export default text;
