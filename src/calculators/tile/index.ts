import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeTileEngine, tileEngine } from "./engine";

export const tile = defineCalculator({
  id: "tile",
  slug: "tile-calculator",
  status: "published",
  title: "Tile Calculator",
  shortTitle: "Tile",
  category: "construction",
  collections: ["construction-engineering", "real-estate"],
  summary: "Estimate how many tiles and boxes you need for a floor or wall from the area, tile size, grout joint and a waste allowance.",
  metaTitle: "Tile Calculator – How Many Tiles and Boxes to Buy",
  metaDescription: "Estimate tiles for a floor or wall from the area, the tile size and the grout joint width, add a waste allowance and round up to whole boxes.",
  keywords: ["tile calculator", "how many tiles do I need", "floor tile", "wall tile", "grout joint", "tile boxes", "tile waste", "backsplash"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Prealgebra (OpenStax), Appendix C: Geometric Formulas",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/prealgebra/pages/c-geometric-formulas",
      usedFor: "Area of a rectangle, used for both the area to tile and each tile with its joint.",
    },
  ],
  intro: [
    "Before you buy tile you need a count, not just an area. This calculator divides the area you are covering by the space each tile takes up, including the grout joint around it, then adds a waste allowance for cuts and breakage.",
    "Enter the size of the area and of one tile, choose a joint width and a waste percentage, and optionally the number of tiles in a box. You get the number of tiles to buy and, if you entered a box size, the number of boxes.",
  ],
  howToUse: [
    "Choose US units (area in feet, tile and joint in inches) or metric units (area in meters, tile and joint in millimeters).",
    "Enter the length and width of the area to tile. For an L-shaped room, split it into rectangles, run each one and add the results.",
    "Enter the tile length and width, and the grout joint width.",
    "Set a waste allowance and, if you know it, the number of tiles per box.",
    "Read the tiles needed and the boxes to buy.",
  ],
  formulas: [
    { title: "Area per tile with joint", expression: "a = (tile length + g) × (tile width + g)", explanation: "Each tile occupies its own size plus one joint width g in each direction." },
    { title: "Tiles needed", expression: "tiles = ⌈area ÷ a × (1 + waste%)⌉", explanation: "Divide the area by the space per tile, add the waste allowance and round up to a whole tile. Tile sizes are converted with 144 in² per ft² or 1,000,000 mm² per m²." },
    { title: "Boxes", expression: "boxes = ⌈tiles ÷ tiles per box⌉", explanation: "Round up, since boxes are sold whole." },
  ],
  examples: [
    {
      title: "A 10 × 14 ft floor with 18-inch tiles",
      inputs: { units: "imperial", areaLengthImperial: 10, areaWidthImperial: 14, tileLengthImperial: 18, tileWidthImperial: 18, groutImperial: 0.25, waste: 10 },
      steps: ["Area = 10 × 14 = 140 ft²", "Per tile = 18.25 × 18.25 = 333.0625 in² ≈ 2.3129 ft²", "140 ÷ 2.3129 ≈ 60.53 tiles; × 1.10 ≈ 66.58, rounded up to 67 tiles"],
      expectedPrimary: 67,
    },
    {
      title: "A 3.2 × 2.5 m bathroom with 600 × 300 mm tiles, 8 per box",
      inputs: { units: "metric", areaLengthMetric: 3.2, areaWidthMetric: 2.5, tileLengthMetric: 600, tileWidthMetric: 300, groutMetric: 2, waste: 12, perBox: 8 },
      steps: ["Area = 3.2 × 2.5 = 8 m²", "Per tile = 602 × 302 = 181,804 mm² = 0.181804 m²", "8 ÷ 0.181804 ≈ 44.00; × 1.12 ≈ 49.28, rounded up to 50 tiles", "50 ÷ 8 = 6.25, so 7 boxes"],
      expectedPrimary: 50,
    },
    {
      title: "An 8 × 5 ft backsplash with 4-inch tiles",
      inputs: { units: "imperial", areaLengthImperial: 8, areaWidthImperial: 5, tileLengthImperial: 4, tileWidthImperial: 4, groutImperial: 0.0625, waste: 15 },
      steps: ["Area = 8 × 5 = 40 ft²", "Per tile = 4.0625 × 4.0625 ≈ 16.504 in² ≈ 0.11461 ft²", "40 ÷ 0.11461 ≈ 349.01; × 1.15 ≈ 401.36, rounded up to 402 tiles"],
      expectedPrimary: 402,
    },
  ],
  assumptions: [
    "The area is a simple rectangle. Real layouts with many cuts, borders, niches or patterns such as diagonal or herringbone can need more tiles than this estimate.",
    "The waste allowance is your choice. About 10% is a common starting point for a straight layout; it is a typical rule of thumb, not a standard.",
    "The estimate covers tiles only. It does not cover adhesive, grout, trim or the preparation of the surface underneath; follow the tile and product manufacturers' instructions for those.",
  ],
  faqs: [
    { question: "Why include the grout joint?", answer: "Each joint adds a little to the space each tile covers, so fewer tiles are needed. With small tiles and wide joints the difference can be several percent." },
    { question: "How much extra tile should I buy?", answer: "Many installers add about 10% for a straight layout and more for diagonal or patterned layouts or rooms with many corners. Keeping a few spare tiles also helps with future repairs." },
    { question: "How do I measure an L-shaped room?", answer: "Split it into two rectangles, run the calculator for each with the same tile settings, and add the two tile counts." },
  ],
  related: ["flooring-calculator", "square-footage-calculator", "paint-calculator"],
  updated: "2026-10-15",
  engine: tileEngine,
  text,
  makeEngine: makeTileEngine,
  translations,
});
