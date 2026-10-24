import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { caloriesBurnedEngine, makeCaloriesBurnedEngine } from "./engine";

export const caloriesBurned = defineCalculator({
  id: "calories-burned",
  slug: "calories-burned-calculator",
  status: "published",
  title: "Calories Burned Calculator",
  shortTitle: "Calories Burned",
  category: "sports",
  collections: ["fitness-sports", "healthcare"],
  summary: "Estimate the calories burned by walking, running, cycling, swimming and other activities from MET values, body weight and duration.",
  metaTitle: "Calories Burned Calculator – MET Method by Activity",
  metaDescription: "Estimate calories burned during walking, running, cycling, swimming and more from published MET values, your weight and the time spent.",
  keywords: ["calories burned", "exercise calories", "MET", "metabolic equivalent", "energy expenditure", "compendium of physical activities", "kcal per hour"],
  addedOn: "2026-10-24",
  expertReview: { area: "medical", status: "pending" },
  sources: [
    {
      title: "Ainsworth BE, et al. 2011 Compendium of Physical Activities: a second update of codes and MET values. Med Sci Sports Exerc. 2011;43(8):1575–1581",
      publisher: "Medicine & Science in Sports & Exercise (PubMed record)",
      url: "https://pubmed.ncbi.nlm.nih.gov/21681120/",
      usedFor: "The MET values of the listed activities and the convention that 1 MET is about 1 kcal per kg per hour.",
    },
    {
      title: "Herrmann SD, et al. 2024 Adult Compendium of Physical Activities: a third update of the energy costs of human activities. J Sport Health Sci. 2024;13(1):6–12",
      publisher: "Journal of Sport and Health Science (PubMed record)",
      url: "https://pubmed.ncbi.nlm.nih.gov/38242596/",
      usedFor: "Background on the current edition of the Compendium, which revised some MET values; check pacompendium.com for the latest figure for an activity.",
    },
  ],
  intro: [
    "A MET (metabolic equivalent of task) compares the energy cost of an activity with sitting quietly. Brisk walking is about 4 METs, so it uses roughly four times as much energy as rest.",
    "This calculator multiplies the MET value of an activity by your body weight and the time spent to estimate the calories burned. Choose one of the common activities, with values from the Compendium of Physical Activities, or enter your own MET value.",
  ],
  howToUse: [
    "Choose an activity, or choose a custom MET value and enter it.",
    "Enter your body weight in kilograms or pounds.",
    "Enter how long you did the activity in hours and minutes.",
    "Read the estimated calories burned, the kilojoules and the hourly rate.",
  ],
  formulas: [
    { title: "MET method", expression: "kcal = MET × weight (kg) × time (h)", explanation: "Uses the convention that 1 MET is about 1 kcal per kilogram of body weight per hour." },
    { title: "Above resting", expression: "net kcal = (MET − 1) × weight (kg) × time (h)", explanation: "Leaves out the energy you would have used anyway while resting." },
    { title: "Units", expression: "1 lb = 0.45359237 kg · 1 kcal = 4.184 kJ", explanation: "Exact conversion factors." },
  ],
  examples: [
    {
      title: "Brisk walk for 45 minutes at 70 kg",
      inputs: { activity: "brisk", weight: 70, weightUnit: "kg", hours: 0, minutes: 45 },
      steps: ["Brisk walking (3.5 mph) = 4.3 MET", "4.3 × 70 × 0.75 = 225.75 ≈ 226 kcal", "In kilojoules: 225.75 × 4.184 ≈ 945 kJ"],
      expectedPrimary: 225.75,
    },
    {
      title: "Running at 6 mph for 1 h 30 min at 180 lb",
      inputs: { activity: "run6", weight: 180, weightUnit: "lb", hours: 1, minutes: 30 },
      steps: ["180 lb × 0.45359237 = 81.65 kg", "9.8 × 81.65 × 1.5 ≈ 1,200 kcal", "That is about 800 kcal per hour"],
      expectedPrimary: 1200.20541102,
    },
    {
      title: "Custom activity of 6.5 MET for 2 hours at 55 kg",
      inputs: { activity: "custom", customMet: 6.5, weight: 55, weightUnit: "kg", hours: 2, minutes: 0 },
      steps: ["6.5 × 55 × 2 = 715 kcal", "Above resting: (6.5 − 1) × 55 × 2 = 605 kcal"],
      expectedPrimary: 715,
    },
  ],
  assumptions: [
    "The result is an estimate, not medical advice, and this calculator has not yet been professionally reviewed. Check with a doctor before starting a new exercise programme.",
    "MET values are population averages for adults. Fitness, technique, terrain, body composition and temperature all change real energy use, so individual results vary.",
    "The calculation uses the convention that 1 MET ≈ 1 kcal per kg per hour. Measured resting energy use differs between people, which adds to the uncertainty.",
    "The MET values come from the 2011 Compendium of Physical Activities. The 2024 update changed some activities, so figures from other tools may differ slightly.",
  ],
  faqs: [
    { question: "What is a MET?", answer: "A MET is the energy cost of an activity relative to sitting quietly. An activity of 6 METs uses about six times the energy of rest." },
    { question: "Why does body weight matter?", answer: "Moving a heavier body takes more energy, so the same activity for the same time burns more calories for a heavier person." },
    { question: "Are fitness tracker numbers more accurate?", answer: "Trackers add heart-rate data, which can help, but they are also estimates. Both methods are best used to compare activities rather than as exact figures." },
  ],
  related: ["tdee-calculator", "running-pace-calculator", "heart-rate-zone-calculator"],
  updated: "2026-10-24",
  engine: caloriesBurnedEngine,
  text,
  makeEngine: makeCaloriesBurnedEngine,
  translations,
});
