import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { flooringEngine, makeFlooringEngine } from "./engine";

export const flooring = defineCalculator({
  id: "flooring",
  slug: "flooring-calculator",
  status: "published",
  title: "Flooring Calculator",
  shortTitle: "Flooring",
  category: "construction",
  collections: ["construction-engineering", "real-estate"],
  summary: "Work out how many boxes of laminate, vinyl plank or wood flooring to buy from the room size, a waste allowance and the coverage per box, with an optional cost.",
  metaTitle: "Flooring Calculator – Boxes of Laminate or Vinyl",
  metaDescription: "Estimate the boxes of flooring to buy for a rectangular or L-shaped room, with a waste allowance, the coverage per box and an optional price per area.",
  keywords: ["flooring calculator", "how much flooring", "laminate calculator", "vinyl plank calculator", "boxes of flooring", "flooring waste", "hardwood flooring estimate"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "International foot",
      publisher: "NOAA National Ocean Service",
      url: "https://oceanservice.noaa.gov/geodesy/international-foot.html",
      usedFor: "The exact international foot (0.3048 m) used to convert between square feet and square meters.",
    },
  ],
  intro: [
    "Flooring is sold by the box, and each box covers a fixed area. To know how many to buy, you need the floor area, an allowance for the pieces lost to cuts, and the coverage printed on the box.",
    "This calculator adds those up for a rectangular room or an L-shaped room made of two rectangles, rounds up to whole boxes and, if you enter a price, estimates the cost. If you only need the area of a room, the Square Footage Calculator gives it without boxes or waste.",
  ],
  howToUse: [
    "Choose US units (feet) or metric units (meters).",
    "Enter the room length and width. For an L-shaped room, enter the main rectangle first and the smaller one as the second area.",
    "Set the waste allowance: about 10% for a straight layout, about 15% for diagonal or herringbone patterns.",
    "Enter the coverage per box from the packaging and, optionally, the price per square foot or square meter.",
  ],
  formulas: [
    { title: "Floor area", expression: "A = L₁ × W₁ + L₂ × W₂", explanation: "The second rectangle is optional; leave it at 0 for a simple rectangular room." },
    { title: "Area with waste", expression: "A_w = A × (1 + waste ÷ 100)", explanation: "The extra covers offcuts at the walls, cutting mistakes and damaged boards." },
    { title: "Boxes", expression: "boxes = ⌈A_w ÷ coverage per box⌉", explanation: "Rounded up because flooring is sold in whole boxes." },
    { title: "Cost", expression: "cost = boxes × coverage per box × price per area", explanation: "You pay for whole boxes, so the cost uses the area in the boxes you buy." },
  ],
  examples: [
    {
      title: "Bedroom 14 ft × 12 ft with 20 ft² boxes",
      inputs: { units: "imperial", lengthImperial: 14, widthImperial: 12, length2Imperial: 0, width2Imperial: 0, waste: 10, coverageImperial: 20 },
      steps: ["Area = 14 × 12 = 168 ft²", "With 10% waste: 168 × 1.10 = 184.8 ft²", "184.8 ÷ 20 = 9.24, so buy 10 boxes (200 ft²)"],
      expectedPrimary: 10,
    },
    {
      title: "L-shaped living room in herringbone, metric",
      inputs: { units: "metric", lengthMetric: 5, widthMetric: 4, length2Metric: 2, width2Metric: 1.5, waste: 15, coverageMetric: 2.2 },
      steps: ["Area = 5 × 4 + 2 × 1.5 = 23 m²", "With 15% waste: 23 × 1.15 = 26.45 m²", "26.45 ÷ 2.2 ≈ 12.02, so buy 13 boxes"],
      expectedPrimary: 13,
    },
    {
      title: "Home office with a price per square foot",
      inputs: { units: "imperial", lengthImperial: 12, widthImperial: 10, length2Imperial: 0, width2Imperial: 0, waste: 10, coverageImperial: 23.4, priceImperial: 3.49 },
      steps: ["Area = 12 × 10 = 120 ft²; with 10% waste, 132 ft²", "132 ÷ 23.4 ≈ 5.64, so buy 6 boxes covering 140.4 ft²", "Cost = 140.4 ft² × $3.49 ≈ $490.00"],
      expectedPrimary: 6,
    },
  ],
  assumptions: [
    "The room is one rectangle or two rectangles that do not overlap. Measure other shapes as several rectangles and add them up.",
    "Waste allowances are rules of thumb. Plank length, room shape and the installer's method change how much is lost, so check the manufacturer's guidance for your product.",
    "Closets, doorways and areas under fixed cabinets are included only if you add them to the measurements.",
    "Underlayment, trim, transition strips, adhesive and labor are not included in the cost.",
  ],
  faqs: [
    {
      question: "How much extra flooring should I buy?",
      answer: "About 10% is a common allowance for a straight layout in a simple room. Diagonal, herringbone and chevron layouts, or rooms with many corners, usually need about 15% or more.",
    },
    {
      question: "Why should I keep spare boxes?",
      answer: "Leftover boards let you replace damaged pieces later with flooring from the same production batch, whose color and finish will match.",
    },
    {
      question: "How do I measure an L-shaped room?",
      answer: "Split the floor into two rectangles that do not overlap, measure the length and width of each, and enter them as the room and the second area.",
    },
  ],
  related: ["tile-calculator", "square-footage-calculator", "paint-calculator"],
  updated: "2026-10-15",
  engine: flooringEngine,
  text,
  makeEngine: makeFlooringEngine,
  translations,
});
