import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeTimeCalculatorEngine, timeCalculatorEngine } from "./engine";

export const timeCalculator = defineCalculator({
  id: "time-calculator",
  slug: "time-calculator",
  status: "published",
  title: "Time Calculator",
  shortTitle: "Time",
  category: "everyday-life",
  collections: ["hr-payroll", "business"],
  summary: "Add or subtract two durations given in days, hours, minutes and seconds, and see the result normalized plus totals in hours, minutes and seconds.",
  metaTitle: "Time Calculator – Add or Subtract Hours and Minutes",
  metaDescription: "Add or subtract durations in days, hours, minutes and seconds. Get a tidy normalized result and the total in decimal hours, minutes and seconds.",
  keywords: ["time calculator", "add hours and minutes", "subtract time", "duration calculator", "hours minutes seconds", "total hours", "time sum"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "NIST Guide to the SI, Chapter 5: Units Outside the SI",
      publisher: "National Institute of Standards and Technology (NIST)",
      url: "https://www.nist.gov/pml/pubs/sp811/sec05.cfm",
      usedFor: "The minute (60 s), hour (3,600 s) and day (86,400 s) as units accepted for use with the SI.",
    },
  ],
  intro: [
    "Adding up time by hand is awkward because it does not work in tens: 60 seconds make a minute, 60 minutes an hour and 24 hours a day. This calculator does the carrying for you.",
    "Enter two durations, choose whether to add or subtract them, and read the result in days, hours, minutes and seconds, along with the same amount as a single total in hours, minutes or seconds.",
  ],
  howToUse: [
    "Enter the first duration. Fill in only the parts you need and leave the others at 0.",
    "Choose Add or Subtract.",
    "Enter the second duration.",
    "Read the normalized result. The totals below it are handy for timesheets and spreadsheets that need decimal hours.",
  ],
  formulas: [
    { title: "Duration in seconds", expression: "T = days × 86,400 + hours × 3,600 + minutes × 60 + seconds", explanation: "Each duration is first turned into seconds." },
    { title: "Result", expression: "R = T₁ + T₂   or   R = T₁ − T₂", explanation: "A negative R means the second duration is longer than the first." },
    {
      title: "Normalizing",
      expression: "days = ⌊|R| ÷ 86,400⌋, hours = ⌊rest ÷ 3,600⌋, minutes = ⌊rest ÷ 60⌋, seconds = what remains",
      explanation: "The remainder after each step is carried to the next smaller unit.",
    },
  ],
  examples: [
    {
      title: "Two work sessions in one day",
      inputs: { d1: 0, h1: 7, m1: 45, s1: 0, operation: "add", d2: 0, h2: 2, m2: 30, s2: 0 },
      steps: ["7 h 45 min = 27,900 s and 2 h 30 min = 9,000 s", "27,900 + 9,000 = 36,900 s", "36,900 s = 10 hours and 900 s = 10 hours, 15 minutes (10.25 hours)"],
      expectedPrimary: "10 hours, 15 minutes",
    },
    {
      title: "Time left on a 3-day, 4-hour job after 1 day, 20.5 hours",
      inputs: { d1: 3, h1: 4, m1: 0, s1: 0, operation: "subtract", d2: 1, h2: 20, m2: 30, s2: 0 },
      steps: ["3 d 4 h = 273,600 s; 1 d 20 h 30 min = 160,200 s", "273,600 − 160,200 = 113,400 s", "113,400 s = 1 day (86,400 s) + 27,000 s = 1 day, 7 hours, 30 minutes"],
      expectedPrimary: "1 day, 7 hours, 30 minutes",
    },
    {
      title: "Adding two lap times",
      inputs: { d1: 0, h1: 0, m1: 48, s1: 37, operation: "add", d2: 0, h2: 0, m2: 51, s2: 52 },
      steps: ["48 min 37 s = 2,917 s and 51 min 52 s = 3,112 s", "2,917 + 3,112 = 6,029 s", "6,029 s = 1 hour (3,600 s) + 2,429 s = 1 hour, 40 minutes, 29 seconds"],
      expectedPrimary: "1 hour, 40 minutes, 29 seconds",
    },
  ],
  assumptions: [
    "Every day is exactly 24 hours, every hour 60 minutes and every minute 60 seconds. Leap seconds and daylight-saving clock changes are ignored.",
    "This tool works with lengths of time, not clock times or dates. To count the days between two dates, use the Date Duration Calculator.",
    "Fractions of a second are kept to the nearest millisecond.",
  ],
  faqs: [
    { question: "How do I convert minutes to decimal hours?", answer: "Divide the minutes by 60. For example, 45 minutes is 45 ÷ 60 = 0.75 hours, so 7 hours 45 minutes is 7.75 hours. The calculator shows this total for you." },
    { question: "Can I enter more than 60 minutes?", answer: "Yes. Enter 135 minutes, for example, and the result is carried over to 2 hours, 15 minutes." },
    { question: "What does a negative result mean?", answer: "When you subtract a longer duration from a shorter one, the difference is below zero. The result is shown with a minus sign so you can see by how much the second one is longer." },
  ],
  related: ["date-duration-calculator", "add-days-calculator", "hourly-to-salary-calculator"],
  updated: "2026-10-15",
  engine: timeCalculatorEngine,
  text,
  makeEngine: makeTimeCalculatorEngine,
  translations,
});
