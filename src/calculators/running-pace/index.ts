import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { runningPaceEngine, makeRunningPaceEngine } from "./engine";

export const runningPace = defineCalculator({
  id: "running-pace",
  slug: "running-pace-calculator",
  status: "published",
  title: "Running Pace Calculator",
  shortTitle: "Running Pace",
  category: "sports",
  collections: ["fitness-sports"],
  summary: "Work out your running pace per kilometer and per mile, and average speed, from distance and finish time.",
  metaTitle: "Running Pace Calculator – Pace per km and Mile",
  metaDescription: "Calculate running pace per kilometer and per mile and average speed from your finish time for 5K, 10K, half marathon, marathon or a custom distance.",
  keywords: ["pace", "running pace", "min per km", "min per mile", "marathon pace", "5k", "10k", "race", "running"],
  popularRank: 16,
  addedOn: "2026-10-14",
  sources: [],
  intro: ["Pace is the time it takes to cover one kilometer or one mile. It is how most runners plan and compare races.", "Choose a race distance or enter your own, add your finish time, and see pace and speed."],
  howToUse: ["Choose a race distance, or Custom and enter it.", "Enter your finish time in hours, minutes and seconds.", "Read your pace per km and per mile and your average speed."],
  formulas: [
    { title: "Pace", expression: "pace = time ÷ distance", explanation: "Shown as minutes:seconds per km or mile." },
    { title: "Speed", expression: "speed = distance ÷ time", explanation: "Shown in km/h and mph." },
  ],
  examples: [
    {
      title: "10K in 50 minutes",
      inputs: {"race": "10k", "hours": 0, "minutes": 50, "seconds": 0},
      steps: ["3,000 s ÷ 10 km = 300 s", "= 5:00 per km"],
      expectedPrimary: "5:00 /km",
    },
    {
      title: "Marathon in 3 h 30 min",
      inputs: {"race": "marathon", "hours": 3, "minutes": 30, "seconds": 0},
      steps: ["12,600 s ÷ 42.195 km ≈ 298.6 s", "≈ 4:59 per km"],
      expectedPrimary: "4:59 /km",
    },
  ],
  assumptions: ["Assumes an even average over the whole distance; splits will vary with terrain and effort.", "Paces are rounded to the nearest second.", "Race distances: half marathon 21.0975 km, marathon 42.195 km."],
  faqs: [
    { question: "What is a good 5K pace?", answer: "It depends on age, experience and terrain. Track your own pace over time rather than comparing to others." },
    { question: "How do I convert pace per km to pace per mile?", answer: "Multiply by 1.609344. A 5:00/km pace is about 8:03/mi." },
    { question: "How do I find a goal finish time?", answer: "Pick a target pace and multiply by the distance, or adjust the time here until the pace matches your goal." },
  ],
  related: ["speed-distance-time-calculator", "bmr-calculator", "bmi-calculator"],
  updated: "2026-10-14",
  engine: runningPaceEngine,
  text,
  makeEngine: makeRunningPaceEngine,
  translations,
});
