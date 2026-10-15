import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { dateAddEngine, makeDateAddEngine } from "./engine";

export const dateAdd = defineCalculator({
  id: "date-add",
  slug: "add-days-calculator",
  status: "published",
  title: "Add or Subtract Days Calculator",
  shortTitle: "Add or Subtract Days",
  category: "everyday-life",
  collections: ["business", "hr-payroll"],
  summary: "Find the date a number of years, months, weeks and days before or after a start date, with the weekday and the number of calendar days in between.",
  metaTitle: "Add or Subtract Days Calculator – Date Plus Days",
  metaDescription: "Add or subtract years, months, weeks and days from any date. See the resulting date and weekday and how many calendar days lie between the two dates.",
  keywords: ["add days to date", "subtract days from date", "date calculator", "days from today", "date plus days", "add months to date", "deadline calculator"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Leap Years",
      publisher: "U.S. Naval Observatory, Astronomical Applications Department",
      url: "https://aa.usno.navy.mil/faq/leap_years",
      usedFor: "The Gregorian leap-year rule used for month lengths and day counts.",
    },
  ],
  intro: [
    "Deadlines, notice periods, warranties and due dates are often stated as \"90 days from\" or \"6 months after\" a date. This calculator finds that date for you, forward or backward.",
    "It also tells you the day of the week and how many calendar days separate the start date from the result, which is useful when a period is set in months but you need the day count.",
  ],
  howToUse: [
    "Pick the start date. It is set to today when the page loads.",
    "Choose Add to go forward in time or Subtract to go back.",
    "Enter any mix of years, months, weeks and days. Leave the rest at 0.",
    "Read the result date with its weekday and the number of days between the two dates.",
  ],
  formulas: [
    {
      title: "Years and months",
      expression: "date₁ = start ± (12 × years + months) months",
      explanation: "The month changes and the day stays the same. If that day does not exist in the new month, the last day of the month is used.",
    },
    { title: "Weeks and days", expression: "result = date₁ ± (7 × weeks + days) days", explanation: "Whole days are then counted on the calendar, crossing month and year ends as needed." },
    { title: "Days between", expression: "N = |result − start| in calendar days", explanation: "The start date is not counted, so one day after Monday is Tuesday and N = 1." },
  ],
  examples: [
    {
      title: "One month after 31 January 2026",
      inputs: { start: "2026-01-31", operation: "add", years: 0, months: 1, weeks: 0, days: 0 },
      steps: ["February 2026 has 28 days, so 31 February does not exist", "The date is moved to the last day of February: 28 February 2026, a Saturday", "That is 28 calendar days after the start date"],
      expectedPrimary: "Saturday, February 28, 2026",
    },
    {
      title: "A 90-day period starting 15 October 2026",
      inputs: { start: "2026-10-15", operation: "add", years: 0, months: 0, weeks: 0, days: 90 },
      steps: ["16 days remain in October, then 30 in November and 31 in December: 77 days to 31 December", "13 more days reach 13 January 2027", "13 January 2027 is a Wednesday"],
      expectedPrimary: "Wednesday, January 13, 2027",
    },
    {
      title: "Two and a half years before 15 August 2024",
      inputs: { start: "2024-08-15", operation: "subtract", years: 2, months: 6, weeks: 0, days: 0 },
      steps: ["2 years and 6 months = 30 months", "30 months before August 2024 is February 2022, and the 15th exists in every month", "15 February 2022 was a Tuesday, 912 calendar days earlier"],
      expectedPrimary: "Tuesday, February 15, 2022",
    },
  ],
  assumptions: [
    "Dates follow the Gregorian calendar, including for years before it was adopted in a given country.",
    "Years and months are applied before weeks and days. When the start day does not exist in the target month, the last day of that month is used, so 31 March minus 1 month is 28 or 29 February.",
    "Every day counts, including weekends and public holidays. Business-day rules for legal or contract deadlines can differ.",
    "Results are limited to the years 1000 to 9999.",
  ],
  faqs: [
    {
      question: "Why does adding one month to 31 January give 28 February?",
      answer: "February has no 31st day, so the calculator uses the last day of February instead of spilling over into March. This month-end rule is the common convention for monthly periods.",
    },
    {
      question: "Is adding 1 month the same as adding 30 days?",
      answer: "No. A month is a calendar month, which can be 28 to 31 days long. If you need an exact number of days, enter it in the Days field instead.",
    },
    {
      question: "Does the count include the start date?",
      answer: "No. The days-between figure counts the days you move across, so the start date itself is not included. Add 1 if you want to count both the first and the last day.",
    },
  ],
  related: ["date-duration-calculator", "age-calculator", "time-calculator"],
  updated: "2026-10-15",
  engine: dateAddEngine,
  text,
  makeEngine: makeDateAddEngine,
  translations,
});
