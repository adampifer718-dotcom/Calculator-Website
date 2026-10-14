import type { CalculatorDefinition } from "@/calculators/framework/types";
import { testGradeEngine } from "./engine";

export const testGrade: CalculatorDefinition = {
  id: "test-grade",
  slug: "test-grade-calculator",
  status: "published",
  title: "Test Grade Calculator",
  shortTitle: "Test Grade",
  category: "everyday-life",
  collections: ["education-research"],
  summary: "Turn correct answers or points into a percentage score and letter grade.",
  metaTitle: "Test Grade Calculator – Score Percentage and Letter",
  metaDescription: "Find a test score percentage and letter grade from the number of correct or wrong answers, or points earned out of the total possible.",
  keywords: ["grade", "test score", "exam", "quiz", "percentage grade", "letter grade", "marks"],
  popularRank: 10,
  addedOn: "2026-10-14",
  sources: [],
  intro: ["Enter how many questions or points a test had and how many you got right or wrong. The calculator shows the percentage score and the matching letter grade.", "It works for quizzes, exams and assignments marked in points."],
  howToUse: ["Enter the total number of questions or points.", "Choose whether you know the number correct or the number wrong.", "Enter that number and read the percentage and letter grade."],
  formulas: [
    { title: "Percentage score", expression: "Grade % = points earned ÷ total points × 100", explanation: "Points earned = total − points lost when you know the number wrong." },
    { title: "Letter grade", expression: "A ≥ 90%, B ≥ 80%, C ≥ 70%, D ≥ 60%, F < 60%", explanation: "A common US scale. Schools may use plus and minus grades or different cut-offs." },
  ],
  examples: [
    {
      title: "45 correct out of 50",
      inputs: {"total": 50, "mode": "correct", "correct": 45},
      steps: ["45 ÷ 50 = 0.9", "0.9 × 100 = 90%, an A"],
      expectedPrimary: 90,
    },
    {
      title: "7 wrong out of 30",
      inputs: {"total": 30, "mode": "wrong", "wrong": 7},
      steps: ["Correct = 30 − 7 = 23", "23 ÷ 30 × 100 = 76.67%, a C"],
      expectedPrimary: 23/30*100,
    },
  ],
  assumptions: ["Every question is worth the same unless you enter points.", "Letter grades use the common US scale; check your school's grading policy.", "Partial credit can be entered as decimal points."],
  faqs: [
    { question: "How do I calculate a test percentage?", answer: "Divide the points you earned by the total possible and multiply by 100. 18 out of 20 is 90%." },
    { question: "What grade is 75%?", answer: "On the common US scale, 75% is a C." },
    { question: "Can I use points instead of questions?", answer: "Yes. Enter total points and points earned; the formula is the same." },
  ],
  related: ["percentage-calculator", "percentage-increase-calculator", "significant-figures-calculator"],
  updated: "2026-10-14",
  engine: testGradeEngine,
};
