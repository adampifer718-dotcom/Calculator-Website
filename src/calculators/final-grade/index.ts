import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { finalGradeEngine, makeFinalGradeEngine } from "./engine";

export const finalGrade = defineCalculator({
  id: "final-grade",
  slug: "final-grade-calculator",
  status: "published",
  title: "Final Grade Calculator",
  shortTitle: "Final Grade",
  category: "everyday-life",
  collections: ["education-research"],
  summary: "Find the score you need on your final exam to reach the overall course grade you want.",
  metaTitle: "Final Grade Calculator – Score Needed on the Final",
  metaDescription: "Work out what you need on the final exam to reach a target course grade, from your current grade and how much the final is worth.",
  keywords: ["final grade", "final exam", "what do I need on my final", "grade needed", "course grade", "weighted grade", "exam score"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Weighted averages (MDEV 102, Unit 4)",
      publisher: "Minnesota State University Moorhead",
      url: "https://web.mnstate.edu/peil/MDEV102/U4/S35/S354.html",
      usedFor: "How a course grade is a weighted average of the parts listed in the syllabus, including the final exam.",
    },
  ],
  intro: [
    "Near the end of a course, the big question is often what you need on the final. Your overall grade is a weighted average: your current grade counts for part of it and the final exam for the rest.",
    "Enter your grade so far, how much the final is worth and the overall grade you are aiming for. The calculator gives the final exam score that gets you there, and shows the best and worst overall grade you could end up with.",
  ],
  howToUse: [
    "Enter your current grade in the course as a percentage.",
    "Enter the weight of the final exam, as given in your syllabus.",
    "Enter the overall grade you want to finish with.",
    "Read the score you need on the final, and the overall grade for a perfect or a zero score.",
  ],
  formulas: [
    { title: "Score needed on the final", expression: "needed = (desired − current × (1 − w)) ÷ w", explanation: "w is the final's weight as a fraction (30% = 0.3). Grades are percentages." },
    { title: "Overall grade", expression: "overall = current × (1 − w) + final × w", explanation: "The course grade as a weighted average of what you have now and the final." },
  ],
  examples: [
    {
      title: "78% now, final worth 25%, aiming for 80%",
      inputs: { current: 78, weight: 25, desired: 80 },
      steps: ["w = 0.25, so the current grade counts for 0.75", "needed = (80 − 78 × 0.75) ÷ 0.25", "= (80 − 58.5) ÷ 0.25 = 86%"],
      expectedPrimary: 86.00000000000003,
    },
    {
      title: "91% now, final worth 40%, aiming for 90%",
      inputs: { current: 91, weight: 40, desired: 90 },
      steps: ["needed = (90 − 91 × 0.6) ÷ 0.4", "= (90 − 54.6) ÷ 0.4 = 88.5%"],
      expectedPrimary: 88.49999999999999,
    },
    {
      title: "65% now, final worth 20%, aiming for 75%",
      inputs: { current: 65, weight: 20, desired: 75 },
      steps: ["needed = (75 − 65 × 0.8) ÷ 0.2", "= (75 − 52) ÷ 0.2 = 115%", "More than 100%, so this goal needs extra credit"],
      expectedPrimary: 114.99999999999999,
    },
  ],
  assumptions: [
    "Your current grade already reflects every other part of the course, and together they count for 100% minus the final's weight.",
    "Grades are percentages. Letter-grade cut-offs, rounding and curves vary by instructor and are not applied.",
    "Some courses drop a low score, let the final replace a midterm or require a minimum score on the final. Check your syllabus for such rules.",
  ],
  faqs: [
    {
      question: "How do I find my current grade?",
      answer: "Your course website or instructor usually shows it. If not, take the weighted average of every grade you have so far, using the weights in the syllabus and leaving out the final.",
    },
    {
      question: "What does it mean if I need more than 100%?",
      answer: "Even a perfect score on the final would not lift your overall grade to the target. It may still be reachable with extra credit, but otherwise aim for a lower goal.",
    },
    {
      question: "What if the result is 0% or less?",
      answer: "Then your goal is already secured: even with no points on the final, your overall grade stays at or above the target. Check that skipping the exam is allowed, since some courses require you to sit it.",
    },
  ],
  related: ["test-grade-calculator", "gpa-calculator", "weighted-average-calculator"],
  updated: "2026-10-15",
  engine: finalGradeEngine,
  text,
  makeEngine: makeFinalGradeEngine,
  translations,
});
