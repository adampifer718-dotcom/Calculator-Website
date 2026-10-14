import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { dateDurationEngine, makeDateDurationEngine } from "./engine";

export const dateDuration = defineCalculator({
  id: "date-difference",
  slug: "date-duration-calculator",
  status: "published",
  title: "Date Duration Calculator",
  shortTitle: "Date Duration",
  category: "everyday-life",
  collections: ["business", "hr-payroll"],
  summary: "Count the days, weeks, months and years between two dates, including weekdays and weekend days.",
  metaTitle: "Date Duration Calculator – Days Between Two Dates",
  metaDescription: "Count the days between two dates, with the duration in years, months and days, weeks, weekdays and weekend days. Optionally include the end date.",
  keywords: ["days between dates", "date difference", "how many days until", "count days", "date duration", "business days", "weeks between dates"],
  popularRank: 12,
  addedOn: "2026-10-14",
  sources: [],
  intro: [
    "Find how many days lie between two dates, for a deadline, a notice period, a trip or a countdown.",
    "The result is also shown in years, months and days, in weeks, and as weekdays and weekend days. Choose whether the end date itself is counted.",
  ],
  howToUse: ["Enter the start date.", "Enter the end date (today by default).", "Choose whether to count the end date as a full day.", "Read the number of days and the other breakdowns."],
  formulas: [
    { title: "Days between dates", expression: "Days = end date − start date (+ 1 if the end date is counted)", explanation: "Calendar days, including 29 February in leap years." },
    { title: "Years, months and days", expression: "Whole calendar months from the start date, then the remaining days", explanation: "Months are counted on the calendar, so their length (28 to 31 days) is taken into account." },
    { title: "Weekdays", expression: "Weekdays = days that fall Monday to Friday", explanation: "Public holidays are not removed; subtract them yourself for business days." },
  ],
  examples: [
    {
      title: "1 January to 14 October 2026",
      inputs: { start: "2026-01-01", end: "2026-10-14", includeEnd: "no" },
      steps: ["31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 days (January–September) + 13 days = 286 days", "286 days = 40 weeks and 6 days; 9 months and 13 days", "204 of those days are Monday to Friday"],
      expectedPrimary: 286,
    },
    {
      title: "1 February to 1 March 2024, both dates included",
      inputs: { start: "2024-02-01", end: "2024-03-01", includeEnd: "yes" },
      steps: ["2024 is a leap year, so February has 29 days", "29 days from 1 February to 1 March, plus the end date = 30 days", "22 weekdays and 8 weekend days"],
      expectedPrimary: 30,
    },
  ],
  assumptions: [
    "Dates are calendar days in the Gregorian calendar; times of day and time zones are not used.",
    "Weekdays are Monday to Friday; public holidays are not excluded.",
    "Hours are days × 24 and ignore daylight-saving changes.",
  ],
  faqs: [
    { question: "Should I count the end date?", answer: "Not for “how long until” questions such as notice periods or ages. Count it when both the first and last day are part of the period, such as a hotel stay counted in days or an event schedule." },
    { question: "How are leap years handled?", answer: "Every 29 February between the dates is counted, so periods that cross a leap day are one day longer." },
    { question: "How do I count business days?", answer: "Use the weekday count, then subtract any public holidays that fall on weekdays in your country." },
  ],
  related: ["age-calculator", "speed-distance-time-calculator", "salary-to-hourly-calculator"],
  updated: "2026-10-14",
  engine: dateDurationEngine,
  text,
  makeEngine: makeDateDurationEngine,
  translations,
});
