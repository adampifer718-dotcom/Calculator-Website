import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { hemocytometerEngine, makeHemocytometerEngine } from "./engine";

export const hemocytometer = defineCalculator({
  id: "hemocytometer",
  slug: "cell-count-calculator",
  status: "published",
  title: "Cell Count Calculator (Hemocytometer)",
  shortTitle: "Cell count",
  category: "biology",
  collections: ["education-research", "healthcare"],
  summary: "Turn hemocytometer counts into cells per mL, with viability, the total live cells in a sample and the volume needed to seed a target number of cells.",
  metaTitle: "Hemocytometer Cell Count Calculator – Cells per mL",
  metaDescription: "Work out live and total cells per mL from improved Neubauer chamber counts, with the dilution factor, trypan blue viability and seeding volume.",
  keywords: ["hemocytometer", "haemocytometer", "cell count", "cells per ml", "neubauer chamber", "trypan blue", "cell viability", "cell seeding", "cell density"],
  addedOn: "2026-10-28",
  sources: [
    {
      title: "Cell Count (hemocytometer protocol)",
      publisher: "University of North Carolina at Chapel Hill, Microscopy and Imaging cell core",
      url: "https://www.med.unc.edu/mlicellcore/wp-content/uploads/sites/1021/2020/03/Cell-Count.pdf",
      usedFor: "Cells per mL = average count per large square × dilution factor × 10⁴, and the advice to recount at another dilution outside about 20–50 cells per square.",
    },
    {
      title: "Determination of cell numbers",
      publisher: "Lonza Bioscience",
      url: "https://bioscience.lonza.com/lonza_bs/CH/en/determination-of-cell-numbers",
      usedFor: "The counting error being roughly the square root of the number of cells counted, and the suggestion to count a few hundred cells in total.",
    },
  ],
  intro: [
    "A hemocytometer is a thick glass slide with a counting grid etched into a chamber of known depth. In an improved Neubauer chamber, each of the nine large squares is 1 mm × 1 mm and the chamber is 0.1 mm deep, so the liquid over one large square is 0.1 µL, or one ten-thousandth of a millilitre.",
    "So the average number of cells per large square, multiplied by 10⁴ and by any dilution, gives the number of cells per mL. This calculator does that for live cells, adds dead (stained) cells for the total count and viability, and works out how many cells a sample contains and how much of it to take to seed a set number of cells.",
  ],
  howToUse: [
    "Count the live cells in a number of large squares, for example the four corner squares, and enter the total and the number of squares.",
    "If you stained the cells, for example with trypan blue, also enter the dead (stained) cells counted in the same squares.",
    "Enter the dilution factor: 2 if you mixed equal volumes of cells and stain, 1 if the cells were not diluted.",
    "Optionally enter the volume of the suspension and the number of cells you want to seed.",
  ],
  formulas: [
    { title: "Cell concentration", expression: "cells/mL = (cells counted ÷ large squares counted) × dilution factor × 10⁴", explanation: "One large square holds 1 mm × 1 mm × 0.1 mm = 0.1 mm³ = 10⁻⁴ mL, so the count per square times 10⁴ gives cells per mL." },
    { title: "Viability", expression: "viability % = live ÷ (live + dead) × 100", explanation: "The share of counted cells that exclude the stain." },
    { title: "Total cells and seeding volume", expression: "total live cells = live cells/mL × volume; volume to seed = target cells ÷ live cells/mL", explanation: "The concentration scales up to the whole suspension, or down to the volume that contains the number of cells you need." },
  ],
  examples: [
    {
      title: "Trypan blue count of four corner squares",
      inputs: { live: 182, dead: 14, squares: 4, dilution: 2, volume: 10, target: 1000000 },
      steps: [
        "Average per square: 182 ÷ 4 = 45.5 live cells.",
        "Live cells/mL: 45.5 × 2 × 10⁴ = 910,000 = 9.1 × 10⁵.",
        "Viability: 182 ÷ (182 + 14) = 92.9%.",
        "Volume for 1,000,000 cells: 1,000,000 ÷ 910,000 ≈ 1.099 mL.",
      ],
      expectedPrimary: "9.1 × 10⁵ cells/mL",
    },
    {
      title: "A dense culture diluted 1 in 10",
      inputs: { live: 95, dead: null, squares: 5, dilution: 10, volume: null, target: null },
      steps: ["Average per square: 95 ÷ 5 = 19 cells.", "Live cells/mL: 19 × 10 × 10⁴ = 1.9 × 10⁶."],
      expectedPrimary: "1.9 × 10⁶ cells/mL",
    },
    {
      title: "A sparse, undiluted sample",
      inputs: { live: 37, dead: null, squares: 4, dilution: 1, volume: null, target: null },
      steps: [
        "Average per square: 37 ÷ 4 = 9.25 cells.",
        "Live cells/mL: 9.25 × 1 × 10⁴ = 9.25 × 10⁴.",
        "With only 37 cells counted, the counting error alone is about ±16% (1 ÷ √37).",
      ],
      expectedPrimary: "9.25 × 10⁴ cells/mL",
    },
  ],
  assumptions: [
    "The chamber is an improved Neubauer type with 1 mm² large squares and a 0.1 mm depth. Other chambers, such as Fuchs–Rosenthal, or counts of the smaller squares need a different factor.",
    "The cells are evenly mixed and the chamber was filled correctly, without overflow or bubbles.",
    "Cells are counted randomly, so the count follows Poisson statistics: the relative error is about 1 ÷ √(cells counted). Low counts are much less precise, and user-to-user differences add further error.",
    "Viability from dye exclusion is an estimate. Cells that exclude the dye are not necessarily healthy, and staining time affects the result.",
  ],
  faqs: [
    { question: "Why multiply by 10⁴?", answer: "A large square is 1 mm on each side and the chamber is 0.1 mm deep, so it holds 0.1 mm³. That is 0.1 µL, or 10⁻⁴ mL. Cells per square divided by 10⁻⁴ mL is the same as cells per square times 10⁴ per mL." },
    { question: "What dilution factor do I use with trypan blue?", answer: "The total volume divided by the volume of cell suspension. Equal volumes of cells and trypan blue (for example 10 µL + 10 µL) give a dilution factor of 2. Leaving it out halves the result." },
    { question: "How many cells should I count?", answer: "The more cells you count, the smaller the counting error, which is roughly 1 ÷ √(number counted). Counting a few hundred cells over several squares gives an error of around 5–6%; counting 30 gives around 18%." },
  ],
  related: ["dilution-calculator", "dna-concentration-calculator", "scientific-notation-calculator"],
  updated: "2026-10-28",
  engine: hemocytometerEngine,
  text,
  makeEngine: makeHemocytometerEngine,
  translations,
});
