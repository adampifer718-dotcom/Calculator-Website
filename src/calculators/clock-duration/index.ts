import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { clockDurationEngine, makeClockDurationEngine } from "./engine";

export const clockDuration = defineCalculator({
  id: "clock-duration",
  slug: "hours-calculator",
  status: "published",
  title: "Hours Calculator",
  shortTitle: "Hours",
  category: "everyday-life",
  collections: ["hr-payroll", "business"],
  summary: "Count the hours and minutes between a start and end time, minus an unpaid break, including overnight shifts, with decimal hours and optional pay.",
  metaTitle: "Hours Calculator – Time Between Two Clock Times",
  metaDescription: "Work out the hours between two clock times, minus breaks, even past midnight. Get h:mm, decimal hours for timesheets and pay at your hourly rate.",
  keywords: ["hours calculator", "work hours calculator", "shift calculator", "time between two times", "timesheet calculator", "decimal hours", "hours worked", "overnight shift hours"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "NIST Guide to the SI, Chapter 5: Units Outside the SI",
      publisher: "National Institute of Standards and Technology (NIST)",
      url: "https://www.nist.gov/pml/nist-guide-si-chapter-5-units-outside-si",
      usedFor: "The hour (60 minutes) and minute (60 seconds) used to convert between clock time and decimal hours.",
    },
  ],
  intro: [
    "How long is a shift from 9:00 am to 5:30 pm with a half-hour lunch? Counting across the hours by hand is easy to get wrong, especially when the shift ends after midnight or you need the total as decimal hours for a timesheet.",
    "Type a start time and an end time in 24-hour or am/pm format, add any unpaid break, and this calculator shows the time worked as hours and minutes, as decimal hours and as total minutes. Add an hourly rate to see the pay for the shift.",
  ],
  howToUse: [
    "Type the start time, for example 9:00 am, 9 am or 09:00.",
    "Type the end time. If it is earlier than the start, the shift is counted as ending the next day.",
    "Enter the unpaid break in minutes, or 0 if there is none.",
    "Optionally choose a currency and enter your hourly rate.",
    "Read the time worked, the decimal hours for your timesheet and the pay.",
  ],
  formulas: [
    { title: "Span between the times", expression: "span = end − start   (add 24 h if end ≤ start)", explanation: "Both times are converted to minutes after midnight first." },
    { title: "Time worked", expression: "worked = span − break", explanation: "The unpaid break is subtracted from the span." },
    { title: "Decimal hours and pay", expression: "decimal hours = worked minutes ÷ 60\npay = decimal hours × hourly rate", explanation: "For example, 7 h 30 min is 450 ÷ 60 = 7.5 hours." },
  ],
  examples: [
    {
      title: "A 9:00 am to 5:30 pm day with a 30-minute lunch",
      inputs: { start: "9:00 am", end: "5:30 pm", breakMinutes: 30, rate: null },
      steps: ["9:00 am = 540 min and 5:30 pm = 17:30 = 1,050 min after midnight", "Span = 1,050 − 540 = 510 min", "Worked = 510 − 30 = 480 min = 8:00, or 8 decimal hours"],
      expectedPrimary: "8:00",
    },
    {
      title: "A night shift from 22:00 to 6:15 with a 45-minute break, at $18.50 an hour",
      inputs: { start: "22:00", end: "6:15", breakMinutes: 45, currency: "USD", rate: 18.5 },
      steps: ["6:15 is earlier than 22:00, so the shift crosses midnight: 375 + 1,440 − 1,320 = 495 min", "Worked = 495 − 45 = 450 min = 7:30, or 7.5 hours", "Pay = 7.5 × $18.50 = $138.75"],
      expectedPrimary: "7:30",
    },
    {
      title: "A morning from 8:45 to 12:10 with no break",
      inputs: { start: "8:45", end: "12:10", breakMinutes: 0, rate: null },
      steps: ["8:45 = 525 min and 12:10 = 730 min", "Worked = 730 − 525 = 205 min", "205 min = 3:25, or about 3.42 decimal hours"],
      expectedPrimary: "3:25",
    },
  ],
  assumptions: [
    "A shift lasts less than 24 hours. If the end time is the same as or earlier than the start time, it is taken to be on the next day.",
    "Daylight-saving clock changes during the shift are ignored, so a night shift that spans one is off by an hour.",
    "Pay is a simple estimate of gross pay: hours × rate. It does not include overtime premiums, taxes or your employer's rounding rules. For weekly overtime, use the Overtime Pay Calculator.",
  ],
  faqs: [
    { question: "How do I convert hours and minutes to decimal hours?", answer: "Divide the minutes by 60 and add them to the hours. 7 hours 30 minutes is 7 + 30 ÷ 60 = 7.5 hours, and 3 hours 25 minutes is about 3.42 hours." },
    { question: "How do I enter a shift that ends after midnight?", answer: "Just type the real end time, such as 6:15 or 6:15 am. When the end time is earlier than the start time, the calculator adds 24 hours and shows a note." },
    { question: "Which time formats can I type?", answer: "24-hour times such as 9:30, 09:30 or 21:30, and 12-hour times with am or pm such as 9:30 pm, 9 pm or 9 am. Minutes, when given, need two digits." },
  ],
  related: ["time-calculator", "hourly-to-salary-calculator", "overtime-calculator"],
  updated: "2026-10-22",
  engine: clockDurationEngine,
  text,
  makeEngine: makeClockDurationEngine,
  translations,
});
