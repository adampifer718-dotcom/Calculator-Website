import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { ageEngine, makeAgeEngine } from "./engine";

export const age = defineCalculator({
  id: "age",
  slug: "age-calculator",
  status: "published",
  title: "Age Calculator",
  shortTitle: "Age",
  category: "everyday-life",
  collections: ["personal-finance", "healthcare", "hr-payroll"],
  summary: "Find an exact age in years, months and days on any date, with total days, weeks and the next birthday.",
  metaTitle: "Age Calculator – Exact Age in Years, Months and Days",
  metaDescription: "Calculate exact age from a date of birth in years, months and days, plus total days and weeks, the next birthday and the weekday you were born.",
  keywords: ["age", "how old am i", "date of birth", "birthday", "age in days", "exact age", "chronological age"],
  popularRank: 11,
  addedOn: "2026-10-14",
  featured: true,
  sources: [],
  intro: [
    "Enter a date of birth to see the exact age today, or choose another date to find someone's age on that day.",
    "The calculator counts real calendar months and handles leap years, months of different lengths and birthdays on 29 February.",
  ],
  howToUse: ["Enter the date of birth.", "Keep today's date or choose another date.", "If the birthday is 29 February, choose how it is counted in other years.", "Read the age, the totals and the next birthday."],
  formulas: [
    { title: "Years, months and days", expression: "Age = the largest number of whole months from birth to the date, then the remaining days", explanation: "Whole months are counted on the calendar. When a month is shorter than the birth day (for example the 31st), the last day of that month is used." },
    { title: "Total days", expression: "Days = date − date of birth", explanation: "Calendar days between the two dates, counting each leap day." },
    { title: "Next birthday", expression: "Next birthday = date of birth + (completed years + 1) years", explanation: "A 29 February birthday falls on 28 February or 1 March in common years, as you choose." },
  ],
  examples: [
    {
      title: "Born 15 May 1990, age on 14 October 2026",
      inputs: { birth: "1990-05-15", asOf: "2026-10-14", leapDay: "feb28" },
      steps: ["15 May 1990 → 15 May 2026: 36 years", "15 May → 15 September: 4 months; 15 September → 14 October: 29 days", "Total: 13,301 days; next birthday on 15 May 2027, in 213 days"],
      expectedPrimary: "36 years, 4 months and 29 days",
    },
    {
      title: "Born 29 February 2000, age on 28 February 2025",
      inputs: { birth: "2000-02-29", asOf: "2025-02-28", leapDay: "feb28" },
      steps: ["2025 is not a leap year, so the birthday is taken as 28 February", "29 February 2000 → 28 February 2025: 25 years exactly", "With the 1 March rule the age would be 24 years, 11 months and 30 days"],
      expectedPrimary: "25 years, 0 months and 0 days",
    },
  ],
  assumptions: [
    "Dates use the Gregorian calendar, including for dates before it was adopted in some countries.",
    "Ages are counted in calendar days in your own time zone; the time of birth and time-zone differences between places are not used.",
    "When a later month is shorter than the birth day, the last day of that month counts as the monthly anniversary.",
  ],
  faqs: [
    { question: "How is a 29 February birthday handled?", answer: "In common years you can count it on 28 February or 1 March. Practice differs by country and purpose, so check the rule that applies to you, for example for legal ages." },
    { question: "Why can the months and days look uneven?", answer: "Months have 28 to 31 days, so the same number of days can be a different number of months depending on the dates." },
    { question: "Does the time zone matter?", answer: "Only near midnight. The calculator uses calendar dates; if you were born late in the evening in another time zone, your birth date there may differ from local time." },
  ],
  related: ["date-duration-calculator", "bmr-calculator", "bmi-calculator"],
  updated: "2026-10-14",
  engine: ageEngine,
  text,
  makeEngine: makeAgeEngine,
  translations,
});
