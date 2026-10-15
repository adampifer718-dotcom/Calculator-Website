import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { gcfLcmEngine, makeGcfLcmEngine } from "./engine";

export const gcfLcm = defineCalculator({
  id: "gcf-lcm",
  slug: "gcf-lcm-calculator",
  status: "published",
  title: "GCF and LCM Calculator",
  shortTitle: "GCF and LCM",
  category: "math",
  collections: ["education-research"],
  summary: "Find the greatest common factor and least common multiple of a list of whole numbers, with prime factorizations.",
  metaTitle: "GCF and LCM Calculator – Greatest Common Factor & LCM",
  metaDescription: "Find the greatest common factor and least common multiple of 2 to 20 whole numbers, with the prime factorization of each number shown.",
  keywords: ["gcf", "lcm", "greatest common factor", "least common multiple", "gcd", "hcf", "prime factorization", "common denominator", "euclidean algorithm"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Euclid's algorithm",
      publisher: "NIST Dictionary of Algorithms and Data Structures",
      url: "https://xlinux.nist.gov/dads/HTML/euclidalgo.html",
      usedFor: "The Euclidean algorithm for the greatest common divisor.",
    },
    {
      title: "Prealgebra, section 2.5: Prime Factorization and the Least Common Multiple",
      publisher: "OpenStax, Rice University",
      url: "https://openstax.org/books/prealgebra/pages/2-5-prime-factorization-and-the-least-common-multiple",
      usedFor: "Prime factorization and the least common multiple.",
    },
  ],
  intro: [
    "The greatest common factor (GCF) of a set of whole numbers is the largest number that divides every one of them with no remainder. The least common multiple (LCM) is the smallest positive number that every one of them divides into.",
    "You need the GCF to simplify fractions and the LCM to find a common denominator or to work out when repeating cycles line up. Enter your numbers to get both, along with the prime factors of each number.",
  ],
  howToUse: [
    "Type between 2 and 20 positive whole numbers, separated by commas, spaces or new lines.",
    "Each number can be as large as one trillion (10¹²).",
    "Read the GCF and the LCM. The LCM is calculated exactly, even when it has many digits.",
    "Check the prime factorization table to see where both results come from.",
  ],
  formulas: [
    { title: "Euclidean algorithm", expression: "gcd(a, b) = gcd(b, a mod b),  gcd(a, 0) = a", explanation: "Replaces the larger number by the remainder until the remainder is 0. The last non-zero value is the GCF." },
    { title: "LCM of two numbers", expression: "lcm(a, b) = a ÷ gcd(a, b) × b", explanation: "Dividing first keeps the intermediate numbers small." },
    { title: "More than two numbers", expression: "gcd(a, b, c) = gcd(gcd(a, b), c),  lcm(a, b, c) = lcm(lcm(a, b), c)", explanation: "Both operations are applied one number at a time." },
    { title: "From prime factors", expression: "GCF = product of shared primes at their lowest power;  LCM = product of all primes at their highest power", explanation: "The same results, read from the factorization table." },
  ],
  examples: [
    {
      title: "48 and 180",
      inputs: { numbers: "48, 180" },
      steps: ["180 mod 48 = 36, 48 mod 36 = 12, 36 mod 12 = 0, so the GCF is 12", "LCM = 48 ÷ 12 × 180 = 720", "Check: 48 = 2⁴ × 3 and 180 = 2² × 3² × 5, so GCF = 2² × 3 = 12 and LCM = 2⁴ × 3² × 5 = 720"],
      expectedPrimary: 12,
    },
    {
      title: "84, 126 and 210",
      inputs: { numbers: "84, 126, 210" },
      steps: ["84 = 2² × 3 × 7, 126 = 2 × 3² × 7, 210 = 2 × 3 × 5 × 7", "Shared primes at their lowest power: 2 × 3 × 7 = 42", "All primes at their highest power: 2² × 3² × 5 × 7 = 1,260"],
      expectedPrimary: 42,
    },
    {
      title: "35 and 64 (no common factor)",
      inputs: { numbers: "35 64" },
      steps: ["35 = 5 × 7 and 64 = 2⁶ share no prime", "GCF = 1, so the numbers are coprime", "LCM = 35 × 64 = 2,240"],
      expectedPrimary: 1,
    },
  ],
  assumptions: [
    "Only positive whole numbers are accepted. The GCF and LCM of zero or negative numbers follow different conventions, so they are rejected.",
    "Each number is limited to 10¹² so that the prime factorization stays fast. The LCM itself is computed with exact big-integer arithmetic and can be much larger.",
    "Repeated numbers are allowed and do not change the results; each distinct number appears once in the factorization table.",
  ],
  faqs: [
    { question: "Is the GCF the same as the GCD or HCF?", answer: "Yes. Greatest common factor, greatest common divisor and highest common factor are three names for the same number." },
    { question: "How are the GCF and LCM related?", answer: "For two numbers, GCF × LCM equals the product of the numbers. For 48 and 180: 12 × 720 = 8,640 = 48 × 180. This shortcut does not hold for three or more numbers." },
    { question: "How do I use the LCM to add fractions?", answer: "The LCM of the denominators is the least common denominator. For 1/12 + 1/18, the LCM of 12 and 18 is 36, so rewrite the sum as 3/36 + 2/36 = 5/36." },
  ],
  related: ["fraction-calculator", "exponent-calculator", "square-root-calculator"],
  updated: "2026-10-15",
  engine: gcfLcmEngine,
  text,
  makeEngine: makeGcfLcmEngine,
  translations,
});
