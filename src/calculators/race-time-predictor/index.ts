import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeRaceTimePredictorEngine, raceTimePredictorEngine } from "./engine";

export const raceTimePredictor = defineCalculator({
  id: "race-time-predictor",
  slug: "race-time-predictor",
  status: "published",
  title: "Race Time Predictor",
  shortTitle: "Race Time",
  category: "sports",
  collections: ["fitness-sports"],
  summary: "Predict your finish time for a mile, 5K, 10K, half marathon, marathon or any distance from a recent race, using Riegel's endurance formula.",
  metaTitle: "Race Time Predictor – 5K to Marathon (Riegel Formula)",
  metaDescription: "Predict a race finish time and pace from a recent result with Riegel's formula, T₂ = T₁ × (D₂/D₁)^1.06, for 5K, 10K, half marathon and marathon.",
  keywords: ["race time predictor", "marathon time predictor", "Riegel formula", "half marathon prediction", "5K to marathon", "race equivalency", "predicted finish time"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "Athletic Records and Human Endurance (American Scientist, vol. 69, 1981, pp. 285–290)",
      publisher: "Peter S. Riegel, American Scientist (Sigma Xi)",
      usedFor: "The endurance equation T = a·D^b relating time and distance, with an exponent of about 1.06 for running.",
    },
  ],
  intro: [
    "If you know how fast you ran one race, you can estimate how fast you could run another. Runners slow down a little as the distance grows, and in 1981 the engineer Peter Riegel showed that world-record times over many distances fit one simple power law.",
    "Enter a recent race and its finish time, choose the distance you want to run, and this tool predicts your time and pace with Riegel's formula. It also lists predictions for all the standard distances from the mile to the marathon.",
  ],
  howToUse: [
    "Choose the distance of a recent race you ran hard, or enter a custom distance in km or miles.",
    "Enter your finish time in hours, minutes and seconds.",
    "Choose the distance you want to predict.",
    "Leave the fatigue exponent at 1.06 unless you know you fade more (try 1.08) or less over long distances.",
    "Read the predicted time, the pace it needs and the table of predictions for other distances.",
  ],
  formulas: [
    { title: "Riegel's formula", expression: "T₂ = T₁ × (D₂ ÷ D₁)^k", explanation: "T₁ is your time over distance D₁, and T₂ the predicted time over D₂. With k = 1.06, doubling the distance multiplies the time by 2^1.06 ≈ 2.085." },
    { title: "Pace", expression: "pace per km = T₂ ÷ D₂ (km)\npace per mile = pace per km × 1.609344", explanation: "The average pace needed to run the predicted time." },
  ],
  examples: [
    {
      title: "From a 50:00 10K to a half marathon",
      inputs: { knownRace: "10k", hours: 0, minutes: 50, seconds: 0, targetRace: "half", exponent: 1.06 },
      steps: ["T₁ = 3,000 s, D₂ ÷ D₁ = 21.0975 ÷ 10 = 2.10975", "T₂ = 3,000 × 2.10975^1.06 ≈ 6,619 s", "6,619 s = 1:50:19, a pace of about 5:14 per km"],
      expectedPrimary: "1:50:19",
    },
    {
      title: "From a 22:30 5K to a marathon",
      inputs: { knownRace: "5k", hours: 0, minutes: 22, seconds: 30, targetRace: "marathon", exponent: 1.06 },
      steps: ["T₁ = 1,350 s, D₂ ÷ D₁ = 42.195 ÷ 5 = 8.439", "T₂ = 1,350 × 8.439^1.06 ≈ 12,948 s = 3:35:48", "The marathon is more than four times the 5K distance, so treat this as optimistic"],
      expectedPrimary: "3:35:48",
    },
    {
      title: "From a 1:45:00 half marathon to a 10K, with k = 1.08",
      inputs: { knownRace: "half", hours: 1, minutes: 45, seconds: 0, targetRace: "10k", exponent: 1.08 },
      steps: ["T₁ = 6,300 s, D₂ ÷ D₁ = 10 ÷ 21.0975 ≈ 0.474", "T₂ = 6,300 × 0.474^1.08 ≈ 2,813 s", "2,813 s = 0:46:53"],
      expectedPrimary: "0:46:53",
    },
  ],
  assumptions: [
    "You are equally well trained for the target distance. A fast 5K does not mean you have the endurance for a marathon without enough long runs.",
    "Predictions are less accurate for distances more than about four times longer or shorter than your race, and for events lasting longer than about 4 hours, where they tend to be too fast.",
    "Both races are run on similar, flat courses in similar weather. Hills, heat, wind and altitude are not taken into account.",
  ],
  faqs: [
    { question: "Why is the exponent 1.06?", answer: "Riegel fitted the exponent to world-record times and found about 1.06 for running. A value of 1 would mean you could hold the same pace at any distance; anything above 1 means you slow down as the race gets longer." },
    { question: "Which race should I use as input?", answer: "Use a recent race that you ran at full effort, ideally one closer in distance to the target. A half marathon predicts a marathon better than a mile does." },
    { question: "Why is my real marathon slower than predicted?", answer: "The marathon depends heavily on endurance training, fuelling and pacing, which a short race does not test. Many runners run slower than the formula predicts, so some coaches use a higher exponent such as 1.07 to 1.08 for the marathon." },
  ],
  related: ["running-pace-calculator", "heart-rate-zone-calculator", "speed-distance-time-calculator"],
  updated: "2026-10-22",
  engine: raceTimePredictorEngine,
  text,
  makeEngine: makeRaceTimePredictorEngine,
  translations,
});
