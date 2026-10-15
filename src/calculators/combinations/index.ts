import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { combinationsEngine, makeCombinationsEngine } from "./engine";

export const combinations = defineCalculator({
  id: "combinations",
  slug: "permutations-combinations-calculator",
  status: "published",
  title: "Permutations and Combinations Calculator",
  shortTitle: "Permutations & combinations",
  category: "math",
  collections: ["education-research"],
  summary: "Count the ways to choose or arrange r of n items exactly: nCr, nPr and both counts with repetition.",
  metaTitle: "Permutations and Combinations Calculator – nCr, nPr",
  metaDescription: "Calculate exact nCr and nPr for n up to 10,000, plus combinations and permutations with repetition, with huge results shown in scientific notation.",
  keywords: ["permutations", "combinations", "nCr", "nPr", "n choose r", "binomial coefficient", "combinations with repetition", "counting", "factorial"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "College Algebra, section 9.5: Counting Principles",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/college-algebra/pages/9-5-counting-principles",
      usedFor: "The multiplication principle and the formulas for permutations and combinations of n distinct objects.",
    },
  ],
  intro: [
    "How many different 4-person committees can a club of 12 form? How many ways can 3 prizes be handed out among 25 entrants? Questions like these are counting problems, and the answer depends on whether order matters.",
    "A combination counts selections where order does not matter: the committee {Ana, Ben, Cy} is the same in any order. A permutation counts arrangements where order matters: first, second and third prize are different outcomes. This calculator gives both, exactly, plus the versions where items can be picked more than once.",
  ],
  howToUse: [
    "Enter n, the number of distinct items to choose from (0 to 10,000).",
    "Enter r, how many you pick (0 to n).",
    "Read nCr for unordered selections and nPr for ordered arrangements.",
    "Use the repetition results when the same item can be picked again, such as scoops of ice cream (combinations) or digits of a PIN (permutations).",
  ],
  formulas: [
    { title: "Combinations", expression: "nCr = n! ÷ (r! × (n − r)!)", explanation: "Selections of r items from n where order does not matter." },
    { title: "Permutations", expression: "nPr = n! ÷ (n − r)! = n × (n − 1) × … × (n − r + 1)", explanation: "Ordered arrangements of r items from n. nPr = nCr × r!" },
    { title: "Combinations with repetition", expression: "C(n + r − 1, r)", explanation: "Selections of r items from n kinds when a kind can be chosen more than once (the “stars and bars” count)." },
    { title: "Permutations with repetition", expression: "nʳ", explanation: "Ordered sequences of length r where each position can be any of the n items." },
  ],
  examples: [
    {
      title: "Committees of 4 from a club of 12",
      inputs: { n: 12, r: 4 },
      steps: ["12C4 = 12! ÷ (4! × 8!)", "= (12 × 11 × 10 × 9) ÷ (4 × 3 × 2 × 1) = 11,880 ÷ 24", "= 495 different committees"],
      expectedPrimary: "495",
    },
    {
      title: "Gold, silver and bronze among 25 entrants",
      inputs: { n: 25, r: 3 },
      steps: ["Order matters for medals: 25P3 = 25 × 24 × 23 = 13,800", "If the 3 winners got identical prizes: 25C3 = 13,800 ÷ 3! = 2,300", "The main result shows 2,300; the permutation count appears below it"],
      expectedPrimary: "2,300",
    },
    {
      title: "Choosing 100 of 200 items",
      inputs: { n: 200, r: 100 },
      steps: ["200C100 = 200! ÷ (100! × 100!)", "The exact value has 59 digits, starting 9,054,851,465…", "Shown as 9.054851 × 10⁵⁸ (59 digits)"],
      expectedPrimary: "9.054851 × 10⁵⁸ (59 digits)",
    },
  ],
  assumptions: [
    "The n items are distinct. Counting arrangements of items with duplicates (such as the letters of BANANA) needs a different formula.",
    "All four results are computed exactly with whole-number arithmetic. Results with more than 30 digits are displayed in scientific notation, rounded to 7 significant digits, with the full digit count.",
    "By convention 0! = 1, so nC0 = nP0 = 1 and choosing nothing counts as one way.",
    "n is limited to 10,000 to keep results fast; nʳ can then have up to 40,001 digits.",
  ],
  faqs: [
    { question: "How do I know whether to use a permutation or a combination?", answer: "Ask whether swapping two chosen items gives a different result. If it does, as with seats, rankings or passwords, use a permutation. If it does not, as with a hand of cards or a group of people, use a combination." },
    { question: "Why is nCr the same as nC(n − r)?", answer: "Choosing r items to take is the same as choosing n − r items to leave behind. For example, picking 3 of 10 people for a team (120 ways) is equivalent to picking the 7 who are left out (also 120 ways)." },
    { question: "What does “with repetition” mean?", answer: "It means an item can be chosen more than once. A 4-digit PIN uses permutations with repetition: 10⁴ = 10,000 codes. Choosing 3 scoops from 5 flavors, where two scoops may be the same flavor, uses combinations with repetition: C(7, 3) = 35." },
  ],
  related: ["probability-calculator", "exponent-calculator", "gcf-lcm-calculator"],
  updated: "2026-10-15",
  engine: combinationsEngine,
  text,
  makeEngine: makeCombinationsEngine,
  translations,
});
