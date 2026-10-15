import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { densityEngine, makeDensityEngine } from "./engine";

export const density = defineCalculator({
  id: "density",
  slug: "density-calculator",
  status: "published",
  title: "Density Calculator",
  shortTitle: "Density",
  category: "physics",
  collections: ["education-research", "manufacturing-operations"],
  summary: "Find density from mass and volume, or work backward to a mass or a volume, in metric or US units.",
  metaTitle: "Density Calculator – Solve ρ = m/V for Any Value",
  metaDescription: "Solve ρ = m/V for density, mass or volume. Enter grams, kilograms or pounds and cm³, liters, m³ or ft³; see kg/m³, g/cm³ and lb/ft³.",
  keywords: ["density", "mass", "volume", "rho", "kg/m3", "g/cm3", "lb/ft3", "specific gravity"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "College Physics (OpenStax), 11.3 Density",
      publisher: "OpenStax via LibreTexts",
      url: "https://phys.libretexts.org/Bookshelves/College_Physics/Book%3A_College_Physics_(OpenStax)/11%3A_Fluid_Statics/11.03_Density",
      usedFor: "Definition ρ = m/V and the SI unit kg/m³.",
    },
    {
      title: "NIST Guide to the SI, Appendix B.9: Factors for units listed by kind of quantity or field of science",
      publisher: "National Institute of Standards and Technology (NIST)",
      url: "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9",
      usedFor: "Conversion factors for the pound, the cubic foot and lb/ft³.",
    },
  ],
  intro: [
    "Density tells you how much mass is packed into a given volume. A liter of water has a mass of about one kilogram, while a liter of steel has nearly eight.",
    "This calculator rearranges ρ = m/V, so you can find whichever of the three values is missing. Units are converted for you, and the answer is also shown in kg/m³, g/cm³ and lb/ft³ or in the other mass or volume units.",
  ],
  howToUse: [
    "Choose what you want to find: density, mass or volume.",
    "Enter the two known values and pick a unit for each.",
    "Pick the unit you want the answer in using the unit list for the value you are finding.",
    "Read the result, its other units and how it compares with water.",
  ],
  formulas: [
    { title: "Density", expression: "ρ = m ÷ V", explanation: "Mass divided by the volume it occupies." },
    { title: "Mass", expression: "m = ρ × V", explanation: "Multiply density by volume." },
    { title: "Volume", expression: "V = m ÷ ρ", explanation: "Divide mass by density." },
    { title: "Unit factors", expression: "1 g/cm³ = 1,000 kg/m³ ≈ 62.428 lb/ft³", explanation: "Based on the exact definitions 1 lb = 0.45359237 kg and 1 ft³ = 0.028316846592 m³." },
  ],
  examples: [
    {
      title: "A metal block of 810 g and 300 cm³",
      inputs: { solve: "density", mass: 810, massUnit: "g", volume: 300, volumeUnit: "cm3", densityUnit: "gcm3" },
      steps: ["ρ = 810 g ÷ 300 cm³", "= 2.7 g/cm³, which is 2,700 kg/m³"],
      expectedPrimary: 2.7,
    },
    {
      title: "Mass of 2.5 L of oil at 0.92 g/cm³",
      inputs: { solve: "mass", volume: 2.5, volumeUnit: "L", density: 0.92, densityUnit: "gcm3", massUnit: "kg" },
      steps: ["0.92 g/cm³ = 920 kg/m³ and 2.5 L = 0.0025 m³", "m = 920 × 0.0025 = 2.3 kg"],
      expectedPrimary: 2.3,
    },
    {
      title: "Volume of 39.25 kg of steel at 7,850 kg/m³",
      inputs: { solve: "volume", mass: 39.25, massUnit: "kg", density: 7850, densityUnit: "kgm3", volumeUnit: "L" },
      steps: ["V = 39.25 ÷ 7,850 = 0.005 m³", "0.005 m³ = 5 L"],
      expectedPrimary: 5,
    },
  ],
  assumptions: [
    "The material is treated as uniform, so one density describes the whole sample.",
    "The comparison with water uses 1,000 kg/m³. Real water is slightly less dense at room temperature (about 998 kg/m³ at 20 °C).",
    "Liquid and gas densities depend on temperature and pressure. Use a density measured under your conditions.",
  ],
  faqs: [
    { question: "Is 1 g/cm³ the same as 1 g/mL?", answer: "Yes. One cubic centimeter and one milliliter are the same volume, so the two units are identical." },
    { question: "How do I convert g/cm³ to kg/m³?", answer: "Multiply by 1,000. For example, 2.7 g/cm³ equals 2,700 kg/m³." },
    { question: "What is specific gravity?", answer: "It is the density of a material divided by the density of water. A value above 1 means the material sinks in water; below 1 means it floats." },
  ],
  related: ["molarity-calculator", "volume-converter", "weight-converter"],
  updated: "2026-10-15",
  engine: densityEngine,
  text,
  makeEngine: makeDensityEngine,
  translations,
});
