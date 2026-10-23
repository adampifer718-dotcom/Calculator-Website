import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeRatioEngine, ratioEngine } from "./engine";

export const ratio = defineCalculator({
  id: "ratio",
  slug: "ratio-calculator",
  status: "published",
  title: "Ratio Calculator",
  shortTitle: "Ratio",
  category: "math",
  collections: ["education-research", "food-hospitality"],
  summary: "Simplify a ratio of two or three terms, solve a proportion for a missing term, or split an amount in a given ratio.",
  metaTitle: "Ratio Calculator – Simplify, Solve and Divide by Ratio",
  metaDescription: "Simplify ratios with whole or decimal terms, find the missing term in A : B = C : x, or divide an amount into two or three parts in a given ratio.",
  keywords: ["ratio calculator", "simplify ratio", "ratio to lowest terms", "proportion calculator", "missing term", "divide in a ratio", "share in a ratio", "1 to n ratio"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "Prealgebra 2e, section 6.5: Solve Proportions and their Applications",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/prealgebra-2e/pages/6-5-solve-proportions-and-their-applications",
      usedFor: "Definition of a proportion and solving it for an unknown term.",
    },
  ],
  intro: [
    "A ratio compares quantities: 3 : 4 means three parts of one thing for every four parts of another. Ratios turn up in recipes, mixing concrete or paint, map scales, screen shapes and sharing costs.",
    "This calculator does the three jobs people most often need. It reduces a ratio of two or three terms to lowest whole numbers, even when the terms are decimals; it solves a proportion A : B = C : x for the missing term; and it divides an amount into parts that follow a ratio.",
  ],
  howToUse: [
    "Choose the task.",
    "To simplify or divide, enter two or three positive terms. Leave the third term empty for a two-part ratio.",
    "To find a missing term, enter A, B and C from A : B = C : x.",
    "To divide, also enter the amount to share, then read each part's share in the table.",
  ],
  formulas: [
    { title: "Simplifying", expression: "A : B : C = (A ÷ g) : (B ÷ g) : (C ÷ g)", explanation: "g is the greatest common divisor of the terms. Decimal terms are first multiplied by the same power of 10 so they become whole numbers: 1.5 : 2.25 becomes 150 : 225." },
    { title: "Missing term", expression: "A : B = C : x  ⇒  x = B × C ÷ A", explanation: "Two ratios are equal when their cross products are equal, A × x = B × C. A cannot be 0." },
    { title: "Dividing an amount", expression: "share of part i = amount × term i ÷ (sum of terms)", explanation: "Each part gets the fraction of the total that its term is of the sum of all terms." },
    { title: "1 : n form", expression: "A : B = 1 : (B ÷ A)", explanation: "Dividing every term by the first one gives a unit ratio, handy for scales and mixing instructions." },
  ],
  examples: [
    {
      title: "Simplify 1.5 : 2.25 : 3",
      inputs: { mode: "simplify", a: "1.5", b: "2.25", c: "3" },
      steps: ["Multiply every term by 100: 150 : 225 : 300", "The greatest common divisor is 75", "150 ÷ 75 : 225 ÷ 75 : 300 ÷ 75 = 2 : 3 : 4"],
      expectedPrimary: "2 : 3 : 4",
    },
    {
      title: "Scale a recipe: 4 eggs need 7 dl of milk; how much milk for 10 eggs?",
      inputs: { mode: "missing", propA: 4, propB: 7, propC: 10 },
      steps: ["4 : 7 = 10 : x", "x = 7 × 10 ÷ 4", "x = 17.5 dl of milk"],
      expectedPrimary: 17.5,
    },
    {
      title: "Share 700 in the ratio 2 : 3 : 5",
      inputs: { mode: "divide", a: "2", b: "3", c: "5", amount: 700 },
      steps: ["Total parts = 2 + 3 + 5 = 10, so one part is 700 ÷ 10 = 70", "Shares: 2 × 70 = 140, 3 × 70 = 210, 5 × 70 = 350", "Check: 140 + 210 + 350 = 700"],
      expectedPrimary: "140 : 210 : 350",
    },
  ],
  assumptions: [
    "Ratio terms for simplifying and dividing must be positive. Decimals are handled exactly from the digits you type, up to 40 digits per term.",
    "The missing-term mode accepts any numbers, including negatives, as long as A is not 0.",
    "Shares are shown to up to 4 decimals and are not rounded to whole units, so for money or people you may need to adjust the last share by hand.",
  ],
  faqs: [
    { question: "How do I simplify a ratio with decimals?", answer: "Multiply all terms by the same power of 10 until they are whole numbers, then divide by their greatest common divisor. 0.6 : 0.8 becomes 6 : 8, which simplifies to 3 : 4." },
    { question: "What is the difference between a ratio and a fraction?", answer: "A fraction compares a part with the whole, while a ratio can compare parts with each other. In a class of 12 girls and 18 boys, the ratio of girls to boys is 2 : 3, but the fraction of girls is 12/30 = 2/5." },
    { question: "How do I split a bill in a ratio?", answer: "Choose “Divide an amount in a ratio”, enter the bill and each person's share of the ratio. For 90 split 1 : 2, the total is 3 parts of 30, so the shares are 30 and 60." },
  ],
  related: ["percentage-calculator", "fraction-calculator", "recipe-scaler"],
  updated: "2026-10-22",
  engine: ratioEngine,
  text,
  makeEngine: makeRatioEngine,
  translations,
});
