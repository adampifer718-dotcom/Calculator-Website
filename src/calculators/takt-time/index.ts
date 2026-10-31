import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeTaktTimeEngine, taktTimeEngine } from "./engine";

export const taktTime = defineCalculator({
  id: "takt-time",
  slug: "takt-time-calculator",
  status: "published",
  title: "Takt Time Calculator",
  shortTitle: "Takt time",
  category: "other",
  collections: ["manufacturing-operations", "business"],
  summary: "Find the takt time, the pace of production needed to meet customer demand, from shift length, breaks, shifts and demand, plus the minimum number of operators.",
  metaTitle: "Takt Time Calculator – Pace of Production per Unit",
  metaDescription: "Calculate takt time from shift length, breaks, shifts per day and customer demand, with units per hour, minimum operators and a check against your cycle time.",
  keywords: ["takt time calculator", "takt time formula", "lean manufacturing", "available production time", "customer demand rate", "cycle time vs takt time", "line balancing", "minimum operators"],
  addedOn: "2026-10-28",
  sources: [
    {
      title: "Takt time (Lean Lexicon)",
      publisher: "Lean Enterprise Institute",
      url: "https://www.lean.org/lexicon-terms/takt-time/",
      usedFor: "The definition of takt time as the available production time divided by customer demand.",
    },
    {
      title: "Takt time",
      publisher: "GoLeanSixSigma.com",
      url: "https://goleansixsigma.com/takt-time/",
      usedFor: "Net available time after breaks, and comparing the cycle time with the takt time.",
    },
  ],
  intro: [
    "Takt time is the rhythm a production line has to keep to make exactly what customers need: if customers want 645 units in a day with 860 minutes of working time, one unit must come off the line every 80 seconds. The word comes from the German for a beat in music.",
    "This calculator works out the net available time from the shift length, breaks, number of shifts and working days, divides it by the demand, and shows the takt time in seconds and minutes. With the total work content per unit it estimates the minimum number of operators, and with a measured cycle time it shows whether the line can keep pace.",
  ],
  howToUse: [
    "Enter the length of one shift in hours and minutes, and the planned breaks per shift in minutes.",
    "Enter the number of shifts per day and the number of working days in the period you have demand for.",
    "Enter the customer demand for that period.",
    "Optionally add the total work content per unit and the actual cycle time, both in seconds, to see the minimum operators and whether the line keeps pace with takt.",
  ],
  formulas: [
    { title: "Net available time", expression: "available = (shift length − breaks) × shifts per day × days", explanation: "In minutes. Only time when the line is meant to run counts." },
    { title: "Takt time", expression: "takt = available time ÷ customer demand", explanation: "Shown in seconds per unit. The units per hour are 3,600 ÷ takt." },
    { title: "Minimum operators", expression: "operators = ⌈work content ÷ takt⌉", explanation: "The total manual work per unit divided by the takt time, rounded up to a whole person or station." },
  ],
  examples: [
    {
      title: "Two 8-hour shifts for 645 units a day",
      inputs: { shiftHours: 8, shiftMinutes: 0, breaks: 50, shifts: 2, days: 1, demand: 645, workContent: 300, actualCycle: null },
      steps: ["Available = (480 − 50) × 2 × 1 = 860 min = 51,600 s", "Takt = 51,600 ÷ 645 = 80 s per unit (1:20)", "Operators = ⌈300 ÷ 80⌉ = ⌈3.75⌉ = 4"],
      expectedPrimary: 80,
    },
    {
      title: "A weekly demand of 1,400 units on one shift",
      inputs: { shiftHours: 7, shiftMinutes: 30, breaks: 30, shifts: 1, days: 5, demand: 1400, workContent: null, actualCycle: 95 },
      steps: ["Available = (450 − 30) × 1 × 5 = 2,100 min = 126,000 s", "Takt = 126,000 ÷ 1,400 = 90 s per unit", "An actual cycle of 95 s is 5 s longer than takt, so about 1,326 units can be made instead of 1,400"],
      expectedPrimary: 90,
    },
    {
      title: "A 10-hour shift for 216 units",
      inputs: { shiftHours: 10, shiftMinutes: 0, breaks: 60, shifts: 1, days: 1, demand: 216, workContent: null, actualCycle: null },
      steps: ["Available = 600 − 60 = 540 min = 32,400 s", "Takt = 32,400 ÷ 216 = 150 s per unit, or 2:30", "Units per hour = 3,600 ÷ 150 = 24"],
      expectedPrimary: 150,
    },
  ],
  assumptions: [
    "Takt time is set by demand, not by the equipment. It assumes the demand is spread evenly over the period.",
    "Only the breaks are taken out of the shift. Include planned maintenance, meetings or start-up time in the breaks if the line does not run then.",
    "The minimum number of operators is a lower bound. Uneven work, walking, and variation in task times usually require more.",
  ],
  faqs: [
    { question: "What is the difference between takt time and cycle time?", answer: "Takt time is the pace customers require: available time divided by demand. Cycle time is how long the process actually takes per unit. If the cycle time is longer than the takt time, the line cannot keep up without overtime or changes." },
    { question: "Should takt time include breakdowns?", answer: "No. Takt time uses the planned available time. Unplanned stops make the line slower, so the cycle time has to be shorter than takt to leave room for them. Overall equipment effectiveness (OEE) measures those losses." },
    { question: "What if demand changes during the month?", answer: "Recalculate takt for each period with its own demand. Many plants review takt time weekly or monthly and rebalance the work between stations when it changes a lot." },
  ],
  related: ["oee-calculator", "time-calculator", "hours-calculator"],
  updated: "2026-10-28",
  engine: taktTimeEngine,
  text,
  makeEngine: makeTaktTimeEngine,
  translations,
});
