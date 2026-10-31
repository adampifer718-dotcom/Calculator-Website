import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeOeeEngine, oeeEngine } from "./engine";

export const oee = defineCalculator({
  id: "oee",
  slug: "oee-calculator",
  status: "published",
  title: "OEE Calculator",
  shortTitle: "OEE",
  category: "other",
  collections: ["manufacturing-operations", "business"],
  summary: "Calculate overall equipment effectiveness from planned time, stops, ideal cycle time and piece counts, with availability, performance, quality and the time lost to each.",
  metaTitle: "OEE Calculator – Availability × Performance × Quality",
  metaDescription: "Work out overall equipment effectiveness (OEE) from planned time, stops, ideal cycle time or rate and rejected pieces, with the time lost to each loss.",
  keywords: ["oee calculator", "overall equipment effectiveness", "oee formula", "availability performance quality", "ideal cycle time", "manufacturing efficiency", "machine utilization", "production losses"],
  addedOn: "2026-10-28",
  sources: [
    {
      title: "How to Calculate OEE: Formula, Examples, and Honest Limitations",
      publisher: "Reliable Magazine",
      url: "https://reliamag.com/guides/how-to-calculate-oee/",
      usedFor: "The OEE formula as availability × performance × quality, with availability = run time ÷ planned production time, performance = ideal cycle time × total count ÷ run time and quality = good count ÷ total count, and the often quoted 85% benchmark.",
    },
    {
      title: "Overall Equipment Effectiveness (OEE): how to measure and improve equipment efficiency",
      publisher: "Kaizen Institute",
      url: "https://kaizen.com/insights/oee-improve-equipment-efficiency/",
      usedFor: "The three OEE factors and the losses each one measures.",
    },
  ],
  intro: [
    "Overall equipment effectiveness (OEE) measures how much of the planned production time is truly productive: making only good pieces, as fast as possible, with no stops. A score of 100% means perfect production; real lines lose time to breakdowns, slow cycles and rejects.",
    "OEE splits those losses into three factors. Availability counts the time the equipment was stopped, performance counts running slower than the ideal speed, and quality counts pieces that were not good the first time. This calculator gives all three, the OEE, and the minutes lost to each.",
  ],
  howToUse: [
    "Enter the planned production time in minutes, leaving out planned breaks and time with no production scheduled.",
    "Enter the total stop time during that period, such as breakdowns and changeovers.",
    "Give the ideal speed as a cycle time in seconds per piece, or as a rate in pieces per minute.",
    "Enter the total number of pieces made and how many of them were rejected. The OEE and the time-loss table update immediately.",
  ],
  formulas: [
    { title: "Availability", expression: "A = run time ÷ planned production time, run time = planned − stop time", explanation: "The share of the planned time the equipment was actually running." },
    { title: "Performance", expression: "P = (ideal cycle time × total count) ÷ run time", explanation: "How close the equipment ran to its ideal speed. With an ideal rate, the ideal cycle time is 60 ÷ rate seconds." },
    { title: "Quality", expression: "Q = good count ÷ total count, good = total − rejects", explanation: "The share of pieces that were good the first time." },
    { title: "OEE", expression: "OEE = A × P × Q = (good count × ideal cycle time) ÷ planned production time", explanation: "The fully productive time (good pieces made at the ideal speed) as a share of the planned time." },
  ],
  examples: [
    {
      title: "A 450-minute shift with 54 minutes of stops",
      inputs: { planned: 450, stopTime: 54, speedMode: "cycle", idealCycle: 1.5, totalCount: 13200, rejects: 330 },
      steps: [
        "Run time = 450 − 54 = 396 min, so availability = 396 ÷ 450 = 88%",
        "Performance = 1.5 s × 13,200 ÷ (396 × 60 s) = 19,800 ÷ 23,760 = 83.33%",
        "Quality = (13,200 − 330) ÷ 13,200 = 97.5%",
        "OEE = 0.88 × 0.8333 × 0.975 = 71.5%",
      ],
      expectedPrimary: 71.5,
    },
    {
      title: "Ideal rate of 25 pieces per minute",
      inputs: { planned: 420, stopTime: 36, speedMode: "rate", idealRate: 25, totalCount: 8800, rejects: 176 },
      steps: [
        "Ideal cycle time = 60 ÷ 25 = 2.4 s",
        "Availability = 384 ÷ 420 = 91.43%; performance = 2.4 × 8,800 ÷ (384 × 60) = 91.67%",
        "Quality = 8,624 ÷ 8,800 = 98%",
        "OEE = 0.9143 × 0.9167 × 0.98 ≈ 82.13%",
      ],
      expectedPrimary: 82.13333333333334,
    },
    {
      title: "Two 8-hour shifts on a slower machine",
      inputs: { planned: 960, stopTime: 120, speedMode: "cycle", idealCycle: 12, totalCount: 3900, rejects: 85 },
      steps: [
        "Availability = 840 ÷ 960 = 87.5%",
        "Performance = 12 × 3,900 ÷ (840 × 60) = 46,800 ÷ 50,400 = 92.86%",
        "Quality = 3,815 ÷ 3,900 = 97.82%",
        "OEE = good count × ideal cycle time ÷ planned time = 3,815 × 12 ÷ 57,600 ≈ 79.48%",
      ],
      expectedPrimary: 79.47916666666667,
    },
  ],
  assumptions: [
    "Planned production time excludes planned breaks and periods when no production is scheduled; how you treat changeovers and maintenance changes the result, so keep the definitions the same when comparing.",
    "The ideal cycle time is the fastest the equipment can make one piece under ideal conditions. If it is set too slow, performance can exceed 100%, which signals a wrong ideal rather than an excellent line.",
    "Rejects include every piece that was not good the first time, including pieces that were reworked. The often quoted 85% “world class” figure is a rough reference only.",
  ],
  faqs: [
    { question: "What is a good OEE score?", answer: "An OEE of 85% is often quoted as world class for discrete manufacturing, and many plants run well below that. Because the score depends on how stops and the ideal speed are defined, the trend on one line is more useful than comparing different plants." },
    { question: "Why do the time losses add up to the planned time?", answer: "The planned production time is split into the stops (availability loss), running below the ideal speed (performance loss), making rejects (quality loss) and the fully productive time that remains. OEE is the fully productive time divided by the planned time." },
    { question: "Should I enter the ideal cycle time or the ideal rate?", answer: "Either one; they are the same thing written two ways. An ideal rate of 40 pieces per minute equals an ideal cycle time of 60 ÷ 40 = 1.5 seconds per piece." },
  ],
  related: ["takt-time-calculator", "percentage-calculator", "break-even-calculator"],
  updated: "2026-10-28",
  engine: oeeEngine,
  text,
  makeEngine: makeOeeEngine,
  translations,
});
