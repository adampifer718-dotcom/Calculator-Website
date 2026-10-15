import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makePlantSpacingEngine, plantSpacingEngine } from "./engine";

export const plantSpacing = defineCalculator({
  id: "plant-spacing",
  slug: "plant-spacing-calculator",
  status: "published",
  title: "Plant Spacing Calculator",
  shortTitle: "Plant spacing",
  category: "ecology",
  collections: ["agriculture-gardening"],
  summary: "Count how many plants fit in a rectangular bed at a given spacing, in straight rows or a triangular offset pattern.",
  metaTitle: "Plant Spacing Calculator – Plants per Bed",
  metaDescription: "Find how many plants fit in a garden bed for a given plant and row spacing, in a square grid or triangular pattern, plus plants per m² or ft².",
  keywords: ["plant spacing", "how many plants", "plants per square foot", "triangular spacing", "garden bed layout", "row spacing", "plant density"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "CMG GardenNotes #713: Block Style Layout in Raised Bed Vegetable Gardens",
      publisher: "Colorado State University Extension",
      url: "https://cmg.extension.colostate.edu/Gardennotes/713.pdf",
      usedFor: "Background on equal-distance (block) spacing of plants and rows in garden beds.",
    },
  ],
  intro: [
    "Seed packets and plant labels give a recommended spacing. Turning that into a number of plants for a particular bed is simple arithmetic, but it is easy to forget that the outer plants also need room.",
    "This calculator keeps every plant at least half a spacing from the edge of the bed, so the plants along the border get the same space as those in the middle. It works for straight rows and for the triangular (offset) pattern, where each row is shifted by half a spacing.",
  ],
  howToUse: [
    "Choose the unit and enter the length and width of the bed.",
    "Pick straight rows or a triangular pattern.",
    "Enter the spacing between plants and, for rows, the spacing between rows.",
    "Read how many plants fit, the plant density and the layout of the rows.",
  ],
  formulas: [
    { title: "Straight rows", expression: "plants = ⌊L ÷ s⌋ × ⌊W ÷ r⌋", explanation: "L and W are the bed length and width, s the spacing within a row and r the spacing between rows. With half a spacing kept clear at each edge, a row of length L holds ⌊L ÷ s⌋ plants." },
    { title: "Triangular rows", expression: "h = s × √3 ÷ 2\nrows = ⌊(W − s) ÷ h⌋ + 1 (0 if W < s)", explanation: "Every plant is the same distance s from its neighbors, so rows are only about 0.866 s apart." },
    { title: "Plants in a triangular layout", expression: "full rows: ⌊L ÷ s⌋ plants\noffset rows: max(0, ⌊L ÷ s − 0.5⌋) plants", explanation: "Rows alternate, starting with a full row; the offset rows are shifted by half a spacing and may hold one plant fewer." },
    { title: "Density", expression: "density = plants ÷ (L × W)", explanation: "Shown per square meter for metric units and per square foot for US units." },
  ],
  examples: [
    {
      title: "Peppers in a 12 ft × 4 ft bed, 18 in apart in rows 2 ft apart",
      inputs: { unit: "ft", length: 12, width: 4, pattern: "grid", spacing: 1.5, rowSpacing: 2 },
      steps: ["Plants per row: ⌊12 ÷ 1.5⌋ = 8", "Rows: ⌊4 ÷ 2⌋ = 2", "Total: 8 × 2 = 16 plants, or 16 ÷ 48 ft² ≈ 0.33 per ft²"],
      expectedPrimary: 16,
    },
    {
      title: "Lettuce in a 300 cm × 120 cm bed, triangular at 40 cm",
      inputs: { unit: "cm", length: 300, width: 120, pattern: "triangular", spacing: 40 },
      steps: [
        "Row pitch: 40 × √3 ÷ 2 ≈ 34.64 cm",
        "Rows: ⌊(120 − 40) ÷ 34.64⌋ + 1 = 2 + 1 = 3",
        "Full rows: ⌊300 ÷ 40⌋ = 7; offset row: ⌊7.5 − 0.5⌋ = 7",
        "Total: 2 × 7 + 1 × 7 = 21 plants",
      ],
      expectedPrimary: 21,
    },
    {
      title: "Carrots in a 48 in × 24 in box, 3 in apart each way",
      inputs: { unit: "in", length: 48, width: 24, pattern: "grid", spacing: 3, rowSpacing: 3 },
      steps: ["Plants per row: ⌊48 ÷ 3⌋ = 16", "Rows: ⌊24 ÷ 3⌋ = 8", "Total: 16 × 8 = 128 plants in 8 ft², or 16 per ft²"],
      expectedPrimary: 128,
    },
  ],
  assumptions: [
    "The bed is a rectangle with no paths, edging or obstacles inside it. Measure only the planted area.",
    "Plants sit at least half a spacing from each edge, so neighboring beds or paths share the gap. If your bed is against a wall, you may fit a few more plants.",
    "Rows run along the length of the bed. Spacing recommendations vary by variety, soil and climate; follow the seed packet or local extension advice.",
    "Counts are for the final plant layout. Sow extra seed and thin, or buy a few spare transplants, to allow for losses.",
  ],
  faqs: [
    { question: "Does triangular spacing fit more plants?", answer: "In large beds, yes: at the same spacing it fits about 15% more plants, because the rows are closer together. In small beds the offset rows can lose a plant at the end, so the gain may be smaller or even negative." },
    { question: "Why is there a margin at the edges?", answer: "A plant needs space on every side. Keeping half a spacing clear at each edge gives border plants the same room as the others, and two beds side by side end up a full spacing apart." },
    { question: "What does plants per square foot mean?", answer: "It is the plant count divided by the bed area. It is useful for comparing layouts or for square-foot gardening charts, which give a number of plants per square foot." },
  ],
  related: ["square-footage-calculator", "rainwater-harvesting-calculator", "area-converter"],
  updated: "2026-10-15",
  engine: plantSpacingEngine,
  text,
  makeEngine: makePlantSpacingEngine,
  translations,
});
