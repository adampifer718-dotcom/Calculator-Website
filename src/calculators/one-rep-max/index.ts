import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeOneRepMaxEngine, oneRepMaxEngine } from "./engine";

export const oneRepMax = defineCalculator({
  id: "one-rep-max",
  slug: "one-rep-max-calculator",
  status: "published",
  title: "One-Rep Max Calculator",
  shortTitle: "One-rep max",
  category: "sports",
  collections: ["fitness-sports"],
  summary: "Estimate your one-repetition maximum from a set of 1–12 reps using the Epley, Brzycki and Lombardi formulas, with a table of training loads.",
  metaTitle: "One-Rep Max Calculator – Epley, Brzycki, Lombardi",
  metaDescription: "Estimate your one-rep max (1RM) from the weight and reps of a hard set, using three published formulas, and get training loads from 60% to 95% of 1RM.",
  keywords: ["one rep max", "1RM calculator", "max lift", "Epley formula", "Brzycki formula", "bench press max", "squat max", "training percentages"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Strength Testing – Predicting a One-Rep Max from Reps-to-Fatigue",
      publisher: "Matt Brzycki, Journal of Physical Education, Recreation & Dance 64(1), 1993 (listed on Princeton University scholar pages)",
      url: "https://brzycki.scholar.princeton.edu/publications/strength-testing-%E2%80%93-predicting-one-rep-max-reps-fatigue",
      usedFor: "Origin of the Brzycki prediction equation and its intended use with sets of up to about 10 repetitions.",
    },
    {
      title: "Accuracy of 1RM Prediction Equations Before and After Resistance Training in Three Different Lifts",
      publisher: "International Journal of Strength and Conditioning (2024), via DOAJ",
      url: "https://doaj.org/article/248a0c4089a641d5b87f1ca3f9770895",
      usedFor: "Evidence that the accuracy of the Epley, Brzycki, Lombardi and other equations varies by lift and population.",
    },
  ],
  intro: [
    "Your one-repetition maximum (1RM) is the heaviest weight you can lift once with good form. Testing it directly is tiring and carries more risk, so lifters often estimate it from a heavier set taken close to failure.",
    "This calculator applies three widely used equations, from Epley, Brzycki and Lombardi, and averages them. Each was fitted to different lifters, so the spread between them gives a sense of how uncertain any single estimate is.",
    "The table converts the estimate into loads at common training percentages, from 60% for lighter volume work to 95% for heavy singles.",
  ],
  howToUse: [
    "Enter the weight you lifted and choose kilograms or pounds.",
    "Enter how many full repetitions you completed in that set, from 1 to 12.",
    "Read the averaged estimate and the result of each formula.",
    "Use the table to pick loads for a training plan.",
  ],
  formulas: [
    { title: "Epley", expression: "1RM = w × (1 + r ÷ 30), and 1RM = w when r = 1", explanation: "w is the weight lifted and r the number of repetitions. Adds about 3.3% of the weight per repetition." },
    { title: "Brzycki", expression: "1RM = w × 36 ÷ (37 − r)", explanation: "Gives the same result as Epley at 10 reps and slightly lower values below that." },
    { title: "Lombardi", expression: "1RM = w × r^0.10", explanation: "A power law that rises quickly over the first few reps and then flattens." },
    { title: "Estimate shown", expression: "1RM ≈ (Epley + Brzycki + Lombardi) ÷ 3", explanation: "Training loads in the table are this average multiplied by each percentage." },
  ],
  examples: [
    {
      title: "Squat: 82.5 kg for 6 reps",
      inputs: { weight: 82.5, unit: "kg", reps: 6 },
      steps: [
        "Epley: 82.5 × (1 + 6 ÷ 30) = 99.0 kg",
        "Brzycki: 82.5 × 36 ÷ 31 ≈ 95.8 kg",
        "Lombardi: 82.5 × 6^0.1 ≈ 98.7 kg",
        "Average ≈ (99.0 + 95.8 + 98.7) ÷ 3 ≈ 97.8 kg",
      ],
      expectedPrimary: 97.83184183937892,
    },
    {
      title: "Bench press: 185 lb for 8 reps",
      inputs: { weight: 185, unit: "lb", reps: 8 },
      steps: [
        "Epley: 185 × (1 + 8 ÷ 30) ≈ 234.3 lb",
        "Brzycki: 185 × 36 ÷ 29 ≈ 229.7 lb",
        "Lombardi: 185 × 8^0.1 ≈ 227.8 lb",
        "Average ≈ 230.6 lb",
      ],
      expectedPrimary: 230.58340740531196,
    },
  ],
  assumptions: [
    "The set was taken close to failure with consistent technique. Stopping well short of failure makes the estimate too low.",
    "The formulas are least reliable above about 10 repetitions, where endurance matters more than maximal strength. Sets of 3–8 reps give better estimates.",
    "The equations were developed mostly on free-weight lifts such as the bench press and squat. Results for machines, isolation exercises and untrained lifters can differ.",
    "Testing a true maximum needs proper technique, a thorough warm-up and a spotter or safety bars. This tool is not medical or coaching advice.",
  ],
  faqs: [
    { question: "Which one-rep max formula is most accurate?", answer: "None is best for everyone. Studies comparing them find that accuracy depends on the lift, the lifter and the number of reps, which is why this calculator averages three and shows each one." },
    { question: "How many reps should I use for the estimate?", answer: "A set of roughly 3 to 8 hard reps works best. With one rep the estimate is just the weight lifted, and beyond about 10 reps the predictions spread apart." },
    { question: "Can I use the training table for a program?", answer: "Yes, as a starting point. Many programs prescribe work as a percentage of 1RM, such as 80% for sets of about 5. Adjust the loads based on how the sets feel." },
  ],
  related: ["running-pace-calculator", "bmr-calculator", "bmi-calculator"],
  updated: "2026-10-15",
  engine: oneRepMaxEngine,
  text,
  makeEngine: makeOneRepMaxEngine,
  translations,
});
