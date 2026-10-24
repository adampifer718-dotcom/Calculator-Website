import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeSwimPaceEngine, swimPaceEngine } from "./engine";

export const swimPace = defineCalculator({
  id: "swim-pace",
  slug: "swim-pace-calculator",
  status: "published",
  title: "Swim Pace Calculator",
  shortTitle: "Swim Pace",
  category: "sports",
  collections: ["fitness-sports"],
  summary: "Work out your swim pace per 100 m or 100 yd from a distance and time, or the time for a distance at a given pace.",
  metaTitle: "Swim Pace Calculator – Pace per 100 m and 100 yd",
  metaDescription: "Find your swimming pace per 100 metres or 100 yards from distance and time, or the finish time from a pace, with speed and projected split times.",
  keywords: ["swim pace", "swimming pace", "pace per 100m", "pace per 100 yards", "swim speed", "swim time", "triathlon swim"],
  addedOn: "2026-10-24",
  sources: [
    {
      title: "Guide for the Use of the International System of Units (SI), NIST Special Publication 811, Appendix B.8",
      publisher: "National Institute of Standards and Technology",
      usedFor: "The exact conversion 1 yd = 0.9144 m, used between yard and metre pools.",
    },
  ],
  intro: [
    "Swimmers usually measure pace as the time taken for every 100 metres or 100 yards. It lets you compare a pool session with an open-water swim or a race, whatever the total distance.",
    "Enter a distance and a time to get your pace in both units, your speed and the times you would swim over common distances at that pace. Or switch modes, enter a target pace and see how long a distance will take.",
  ],
  howToUse: [
    "Choose whether to calculate the pace or the total time.",
    "Enter the distance and choose metres or yards.",
    "Enter your time in hours, minutes and seconds, or the pace per 100 m or 100 yd.",
    "Read the pace, speed and the projected times for 50 m to 1,500 m.",
  ],
  formulas: [
    { title: "Pace", expression: "pace per 100 m = time (s) ÷ distance (m) × 100", explanation: "Shown as minutes:seconds, rounded to the nearest second." },
    { title: "Time from pace", expression: "time = pace per 100 m × distance (m) ÷ 100", explanation: "A pace per 100 yd is first divided by 0.9144 to give the pace per 100 m." },
    { title: "Yards and metres", expression: "1 yd = 0.9144 m exactly\npace per 100 yd = pace per 100 m × 0.9144", explanation: "100 yards is a little shorter than 100 metres, so the pace per 100 yd is faster." },
    { title: "Speed", expression: "speed (m/s) = 100 ÷ pace per 100 m (s)\nkm/h = m/s × 3.6", explanation: "Average speed over the whole swim." },
  ],
  examples: [
    {
      title: "1,500 m in 27:30",
      inputs: { mode: "pace", distance: 1500, unit: "m", hours: 0, minutes: 27, seconds: 30 },
      steps: ["27:30 = 1,650 s", "1,650 ÷ 1,500 × 100 = 110 s = 1:50 per 100 m", "Per 100 yd: 110 × 0.9144 ≈ 101 s = 1:41; speed ≈ 0.909 m/s"],
      expectedPrimary: "1:50 /100 m",
    },
    {
      title: "500 yd in 7:05",
      inputs: { mode: "pace", distance: 500, unit: "yd", hours: 0, minutes: 7, seconds: 5 },
      steps: ["7:05 = 425 s", "425 ÷ 500 × 100 = 85 s = 1:25 per 100 yd", "Per 100 m: 85 ÷ 0.9144 ≈ 93 s = 1:33"],
      expectedPrimary: "1:25 /100 yd",
    },
    {
      title: "1,650 yd at 1:30 per 100 yd",
      inputs: { mode: "time", distance: 1650, unit: "yd", paceMinutes: 1, paceSeconds: 30, paceUnit: "yd" },
      steps: ["1,650 yd ÷ 100 = 16.5 lengths of 100 yd", "16.5 × 90 s = 1,485 s", "1,485 s = 24:45"],
      expectedPrimary: "24:45",
    },
  ],
  assumptions: [
    "The pace is an average over the whole distance; projected times assume you could hold that pace for each distance, which is rarely true for much longer swims.",
    "Pool length and the number of turns affect times: the same swim is usually a little faster in a 25 m pool than in a 50 m pool.",
    "Times are rounded to the nearest second for display.",
  ],
  faqs: [
    { question: "Why is my pace per 100 yd faster than per 100 m?", answer: "100 yards is 91.44 metres, so it takes less time to swim. At the same speed the pace per 100 yd is about 8.6% lower than the pace per 100 m." },
    { question: "What is a good swim pace?", answer: "It depends on age, experience and distance. Many recreational swimmers swim around 2 to 3 minutes per 100 m, while trained distance swimmers are often well under 1:30." },
    { question: "Can I use this for open-water swims?", answer: "Yes, if you know the distance. GPS distances in open water can be inaccurate, so the pace is only as good as the measured distance." },
  ],
  related: ["running-pace-calculator", "race-time-predictor", "calories-burned-calculator"],
  updated: "2026-10-24",
  engine: swimPaceEngine,
  text,
  makeEngine: makeSwimPaceEngine,
  translations,
});
