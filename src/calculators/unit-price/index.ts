import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeUnitPriceEngine, unitPriceEngine } from "./engine";

export const unitPrice = defineCalculator({
  id: "unit-price",
  slug: "unit-price-calculator",
  status: "published",
  title: "Unit Price Calculator",
  shortTitle: "Unit Price",
  category: "everyday-life",
  collections: ["personal-finance", "food-hospitality"],
  summary: "Compare two package sizes by price per kilogram, liter or item to see which is the better buy.",
  metaTitle: "Unit Price Calculator – Compare Price per Unit",
  metaDescription: "Compare two products by unit price per kg, per liter or per item, even when one is in ounces or gallons, and see how much the cheaper one saves.",
  keywords: ["unit price", "price per unit", "price per kg", "price per ounce", "compare prices", "better buy", "grocery comparison"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "NIST Handbook 130, Section IV.C: Uniform Unit Pricing Regulation",
      publisher: "National Institute of Standards and Technology",
      url: "https://www.nist.gov/document/2026-hb-130-section-iv-c",
      usedFor: "How retail unit prices are expressed per unit of weight, volume or count.",
    },
    {
      title: "NIST Special Publication 811, Appendix B.8: Factors for units listed alphabetically",
      publisher: "National Institute of Standards and Technology",
      usedFor: "Exact conversion factors for the avoirdupois ounce and pound and the US fluid ounce and gallon.",
    },
  ],
  intro: [
    "A bigger package is not always cheaper per gram. The unit price, the price divided by the amount, is the fair way to compare two sizes or two brands.",
    "Enter the price and amount of each item. Quantities can be in metric or US units; both are converted to a common unit before they are compared.",
  ],
  howToUse: [
    "Choose the currency for the prices.",
    "For item A, enter the price, the quantity in the package and its unit.",
    "Do the same for item B, using a unit of the same kind: weight, volume or count.",
    "Read which item is cheaper, the price of each per kilogram, liter or item, and the percentage saved.",
  ],
  formulas: [
    { title: "Unit price", expression: "unit price = price ÷ quantity", explanation: "The quantity is first converted to kilograms, liters or items." },
    { title: "Percentage saved", expression: "saving = (higher − lower) ÷ higher × 100", explanation: "How much less you pay per unit by choosing the cheaper item." },
    { title: "US units", expression: "1 oz = 28.349523125 g; 1 lb = 453.59237 g; 1 fl oz = 29.5735295625 mL; 1 gal = 3.785411784 L", explanation: "Exact definitions, so the comparison does not depend on rounding." },
  ],
  examples: [
    {
      title: "500 g for $3.49 against 1 kg for $5.99",
      inputs: { currency: "USD", priceA: 3.49, quantityA: 500, unitA: "g", priceB: 5.99, quantityB: 1, unitB: "kg" },
      steps: ["A: 3.49 ÷ 0.5 kg = $6.98 per kg", "B: 5.99 ÷ 1 kg = $5.99 per kg", "B saves (6.98 − 5.99) ÷ 6.98 ≈ 14.18%"],
      expectedPrimary: "Item B is cheaper per unit",
    },
    {
      title: "64 fl oz of juice for $4.29 against 1.75 L for $3.19",
      inputs: { currency: "USD", priceA: 4.29, quantityA: 64, unitA: "floz", priceB: 3.19, quantityB: 1.75, unitB: "L" },
      steps: ["64 fl oz = 64 × 29.5735295625 mL ≈ 1.8927 L", "A: 4.29 ÷ 1.8927 ≈ $2.27 per L", "B: 3.19 ÷ 1.75 ≈ $1.82 per L, about 19.58% cheaper"],
      expectedPrimary: "Item B is cheaper per unit",
    },
    {
      title: "12 eggs for $3.60 against 18 eggs for $5.58",
      inputs: { currency: "USD", priceA: 3.6, quantityA: 12, unitA: "item", priceB: 5.58, quantityB: 18, unitB: "item" },
      steps: ["A: 3.60 ÷ 12 = $0.30 per egg", "B: 5.58 ÷ 18 = $0.31 per egg", "A saves (0.31 − 0.30) ÷ 0.31 ≈ 3.23%"],
      expectedPrimary: "Item A is cheaper per unit",
    },
  ],
  assumptions: [
    "Both items are equally useful to you: same quality, and you will use all of the larger package.",
    "Ounces are avoirdupois weight ounces and fluid ounces and gallons are US measures. UK imperial pints and gallons are larger and are not listed.",
    "Prices are compared as entered; taxes, deposits and coupons are not added.",
    "Choosing a currency changes formatting only.",
  ],
  faqs: [
    { question: "Can I compare an item sold by weight with one sold by volume?", answer: "Not directly. Grams and milliliters only match for water-like liquids, so the calculator asks for units of the same kind. Check the label: many packages show both." },
    { question: "Why compare per kilogram or per liter instead of per gram?", answer: "Prices per gram are tiny and hard to read. Per kilogram or per liter gives numbers of a similar size to shelf labels, and the ranking is the same either way." },
    { question: "Is the shelf unit price always right?", answer: "Usually, but stores may use different units on neighboring labels, such as per ounce on one and per pound on another. Entering both items here puts them on the same unit." },
  ],
  related: ["discount-calculator", "sales-tax-calculator", "weight-converter", "volume-converter"],
  updated: "2026-10-15",
  engine: unitPriceEngine,
  text,
  makeEngine: makeUnitPriceEngine,
  translations,
});
