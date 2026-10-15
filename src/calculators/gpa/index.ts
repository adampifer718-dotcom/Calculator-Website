import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { gpaEngine, makeGpaEngine } from "./engine";

export const gpa = defineCalculator({
  id: "gpa",
  slug: "gpa-calculator",
  status: "published",
  title: "GPA Calculator",
  shortTitle: "GPA",
  category: "math",
  collections: ["education-research"],
  summary: "Calculate a credit-weighted grade point average from letter grades or grade points, and update your cumulative GPA.",
  metaTitle: "GPA Calculator – Term and Cumulative Grade Point Average",
  metaDescription: "Calculate your term GPA from letter grades and credit hours on a 4.0 or 4.3 scale, then combine it with your current GPA for a new cumulative GPA.",
  keywords: ["gpa", "grade point average", "college gpa", "cumulative gpa", "semester gpa", "4.0 scale", "credit hours"],
  popularRank: 10,
  addedOn: "2026-10-14",
  sources: [],
  intro: [
    "Your grade point average (GPA) weights each course's grade points by its credits, so a 4-credit course counts more than a 2-credit one.",
    "List your courses with their grades and credits to see this term's GPA. Add your current GPA and completed credits to see your new cumulative GPA.",
  ],
  howToUse: [
    "Choose the 4.0 or 4.3 scale your school uses (they differ only in the value of A+).",
    "Enter one course per line with its grade and credits, for example “Biology B+ 3”.",
    "Optionally enter your current cumulative GPA and the credits it covers.",
    "Read the term GPA, the new cumulative GPA and the per-course table.",
  ],
  formulas: [
    { title: "Term GPA", expression: "GPA = Σ(grade points × credits) ÷ Σ credits", explanation: "Each course's quality points are its grade points multiplied by its credits." },
    { title: "Cumulative GPA", expression: "New GPA = (current GPA × current credits + term quality points) ÷ (current credits + term credits)", explanation: "Combines your record so far with the new term, weighted by credits." },
    { title: "Letter grades (4.0 scale)", expression: "A = 4.0, A− = 3.7, B+ = 3.3, B = 3.0, B− = 2.7, C+ = 2.3, C = 2.0, C− = 1.7, D+ = 1.3, D = 1.0, D− = 0.7, F = 0", explanation: "The common US scale. On the 4.3 scale, A+ = 4.3." },
  ],
  examples: [
    {
      title: "Four courses on a 4.0 scale",
      inputs: { scale: "4.0", courses: "Calculus A 3\nPhysics B+ 4\nHistory A- 3\nArt C 2" },
      steps: ["Quality points: 4.0 × 3 + 3.3 × 4 + 3.7 × 3 + 2.0 × 2 = 40.3", "Credits: 3 + 4 + 3 + 2 = 12", "GPA = 40.3 ÷ 12 ≈ 3.36"],
      expectedPrimary: 40.3 / 12,
    },
    {
      title: "New term added to a 3.2 GPA over 45 credits",
      inputs: { scale: "4.0", courses: "Biology A 4\nStatistics B 3", priorGpa: 3.2, priorCredits: 45 },
      steps: ["Term: (4.0 × 4 + 3.0 × 3) ÷ 7 = 25 ÷ 7 ≈ 3.57", "Cumulative: (3.2 × 45 + 25) ÷ (45 + 7) = 169 ÷ 52 = 3.25"],
      expectedPrimary: 25 / 7,
    },
  ],
  assumptions: [
    "Letter grades follow the common US 4-point scale; schools that use other scales, pluses or weighting for honors courses may differ.",
    "Pass/fail and withdrawn courses should be left out, because they usually do not count toward GPA.",
    "Results are rounded to two decimals for display; your school may round or truncate differently.",
  ],
  faqs: [
    { question: "What is the difference between the 4.0 and 4.3 scales?", answer: "Only A+: some schools give it 4.0, others 4.3. All other grades have the same points." },
    { question: "Can I enter percentages or numeric grades?", answer: "Enter grade points directly (for example 3.5) instead of a letter. Converting percentages to grade points depends on your school's policy." },
    { question: "Why does a course with more credits change my GPA more?", answer: "GPA is weighted by credits, so each credit hour counts equally. A 4-credit A adds twice the quality points of a 2-credit A, so it pulls your GPA further toward 4.0, although not exactly twice as far." },
  ],
  related: ["test-grade-calculator", "mean-median-mode-calculator", "percentage-calculator"],
  updated: "2026-10-14",
  engine: gpaEngine,
  text,
  makeEngine: makeGpaEngine,
  translations,
});
