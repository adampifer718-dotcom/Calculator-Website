import type { CalculatorDefinition } from "@/calculators/framework/types";
import { bmrEngine } from "./engine";

export const bmr: CalculatorDefinition = {
  id: "bmr",
  slug: "bmr-calculator",
  status: "published",
  title: "BMR Calculator",
  shortTitle: "BMR",
  category: "health",
  collections: ["healthcare", "fitness-sports"],
  summary: "Estimate basal metabolic rate (calories at rest) with the Mifflin–St Jeor equation.",
  metaTitle: "BMR Calculator – Mifflin-St Jeor Equation",
  metaDescription: "Estimate your basal metabolic rate (BMR) in kcal and kJ per day using the Mifflin–St Jeor equation, with metric or imperial units.",
  keywords: ["bmr", "basal metabolic rate", "calories", "resting metabolic rate", "mifflin st jeor", "energy", "kcal"],
  popularRank: 15,
  addedOn: "2026-10-14",
  expertReview: { area: "medical", status: "pending" },
  sources: [{"title": "Mifflin MD, St Jeor ST, et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr. 1990;51(2):241–247", "publisher": "The American Journal of Clinical Nutrition", "url": "https://doi.org/10.1093/ajcn/51.2.241", "usedFor": "The Mifflin–St Jeor equation and its coefficients."}],
  intro: ["Basal metabolic rate (BMR) is the energy your body uses at complete rest to keep you alive. It is the starting point for estimating daily calorie needs.", "This calculator uses the Mifflin–St Jeor equation, a widely used estimate for healthy adults."],
  howToUse: ["Choose metric or imperial units.", "Choose the sex used in the equation and enter your age.", "Enter your weight and height.", "Read your estimated BMR in kcal and kJ per day."],
  formulas: [
    { title: "Mifflin–St Jeor", expression: "BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age (years) + s\ns = +5 for males, −161 for females", explanation: "Result in kilocalories per day." },
    { title: "Energy units", expression: "1 kcal = 4.184 kJ", explanation: "The thermochemical calorie." },
  ],
  examples: [
    {
      title: "Male, 30 years, 80 kg, 180 cm",
      inputs: {"units": "metric", "sex": "male", "age": 30, "weightKg": 80, "heightCm": 180},
      steps: ["10 × 80 + 6.25 × 180 − 5 × 30 + 5", "= 800 + 1,125 − 150 + 5 = 1,780 kcal/day"],
      expectedPrimary: 1780,
    },
    {
      title: "Female, 25 years, 60 kg, 165 cm",
      inputs: {"units": "metric", "sex": "female", "age": 25, "weightKg": 60, "heightCm": 165},
      steps: ["10 × 60 + 6.25 × 165 − 5 × 25 − 161", "≈ 1,345 kcal/day"],
      expectedPrimary: 1345.25,
    },
  ],
  assumptions: ["For healthy adults. Not suitable for children, pregnancy, or people with medical conditions that affect metabolism.", "Equations estimate averages; individual BMR can differ by 10% or more.", "This is not medical or dietary advice. Talk to a healthcare professional or registered dietitian."],
  faqs: [
    { question: "What is the difference between BMR and daily calorie needs?", answer: "BMR covers rest only. Daily needs add the energy for activity and digestion, so they are higher." },
    { question: "Why does the equation use sex?", answer: "The original study fitted separate constants for men and women because body composition differs on average." },
    { question: "Why does BMR fall with age?", answer: "Muscle mass and metabolic rate tend to decline with age, which the −5 × age term reflects." },
  ],
  related: ["bmi-calculator", "running-pace-calculator", "weight-converter"],
  updated: "2026-10-14",
  engine: bmrEngine,
};
