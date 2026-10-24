import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { dueDateEngine, makeDueDateEngine } from "./engine";

export const dueDate = defineCalculator({
  id: "due-date",
  slug: "due-date-calculator",
  status: "published",
  title: "Pregnancy Due Date Calculator",
  shortTitle: "Due Date",
  category: "health",
  collections: ["healthcare"],
  summary: "Estimate a pregnancy due date from the last period, the conception date or an IVF transfer, with today's gestational age and trimester dates.",
  metaTitle: "Pregnancy Due Date Calculator – LMP, Conception or IVF",
  metaDescription: "Estimate your due date from the first day of your last period, conception or an IVF embryo transfer, and see gestational age and trimester dates.",
  keywords: ["due date", "pregnancy calculator", "estimated due date", "EDD", "Naegele's rule", "gestational age", "IVF due date", "how many weeks pregnant"],
  addedOn: "2026-10-24",
  expertReview: { area: "medical", status: "pending" },
  sources: [
    {
      title: "ACOG Committee Opinion No. 700: Methods for Estimating the Due Date",
      publisher: "American College of Obstetricians and Gynecologists (with AIUM and SMFM)",
      url: "https://publications.smfm.org/publications/239-acog-committee-opinion-700-methods-for-estimating-the/",
      usedFor: "That first-trimester ultrasound is the most accurate way to confirm the due date, and that IVF pregnancies are dated from the transfer.",
    },
    {
      title: "Pregnancy due date calculator",
      publisher: "NHS 111 Wales",
      url: "https://111.wales.nhs.uk/livewell/pregnancy/duedatecalc/",
      usedFor: "Counting 280 days (40 weeks) from the first day of the last period, adjusting for cycles longer or shorter than 28 days, and that a dating scan gives a more accurate date.",
    },
  ],
  intro: [
    "Most pregnancies are dated from the first day of the last menstrual period, even though conception usually happens about two weeks later. A typical pregnancy lasts about 40 weeks, or 280 days, from that date.",
    "This calculator estimates the due date from the last period (adjusted for your cycle length), from a known conception date or from an IVF embryo transfer. It also shows how many weeks pregnant you are on a chosen date, the trimester and the dates when each trimester ends.",
  ],
  howToUse: [
    "Choose what you want to calculate from: the last period, conception or an IVF transfer.",
    "Enter the date. For the last period, also enter your usual cycle length; for IVF, choose the embryo's age at transfer.",
    "Keep today's date or pick another date to see the gestational age on that day.",
    "Read the estimated due date, the gestational age, the trimester and the trimester dates.",
  ],
  formulas: [
    { title: "From the last period (Naegele's rule, cycle-adjusted)", expression: "Due date = first day of last period + 280 days + (cycle length − 28)", explanation: "For a 28-day cycle this is exactly 40 weeks. Longer cycles move ovulation, and so the due date, later." },
    { title: "From conception", expression: "Due date = conception date + 266 days", explanation: "266 days is 38 weeks, the usual time from fertilization to birth." },
    { title: "From an IVF transfer", expression: "Due date = transfer date + 266 days − embryo age (3 or 5 days)", explanation: "The embryo was already 3 or 5 days past fertilization when it was transferred." },
    { title: "Gestational age", expression: "Gestational age = date − (due date − 280 days), in weeks and days", explanation: "Counted from the date that would have been the first day of the last period, the usual clinical convention." },
  ],
  examples: [
    {
      title: "Last period began 1 June 2026, 28-day cycle",
      inputs: { method: "lmp", lmp: "2026-06-01", cycle: 28, asOf: "2026-10-24" },
      steps: ["1 June 2026 + 280 days = 8 March 2027", "On 24 October 2026: 145 days = 20 weeks, 5 days", "That is in the second trimester (14 weeks 0 days to 27 weeks 6 days)"],
      expectedPrimary: "Monday, March 8, 2027",
    },
    {
      title: "Last period began 10 March 2026, 32-day cycle",
      inputs: { method: "lmp", lmp: "2026-03-10", cycle: 32, asOf: "2026-10-24" },
      steps: ["10 March 2026 + 280 + (32 − 28) = 284 days = 19 December 2026", "Dating then starts on 14 March 2026 (due date − 280 days)", "On 24 October 2026: 224 days = 32 weeks, 0 days, third trimester"],
      expectedPrimary: "Saturday, December 19, 2026",
    },
    {
      title: "Day 5 embryo transferred on 20 June 2026",
      inputs: { method: "ivf", transfer: "2026-06-20", embryoAge: "5", asOf: "2026-10-24" },
      steps: ["266 − 5 = 261 days", "20 June 2026 + 261 days = 8 March 2027", "This is the same date as a last period starting on 1 June 2026"],
      expectedPrimary: "Monday, March 8, 2027",
    },
  ],
  assumptions: [
    "The due date is an estimate, not medical advice, and this calculator has not yet been professionally reviewed. Only a small share of babies are born on the due date itself; most arrive within about two weeks of it.",
    "A dating ultrasound in early pregnancy is more accurate than a date-based estimate and may change the due date. Your midwife or doctor sets the due date used for your care.",
    "The cycle adjustment assumes ovulation about 14 days before the next period. It does not account for irregular cycles, recent hormonal contraception or uncertain dates.",
    "Trimesters are taken as up to 13 weeks 6 days, 14 weeks 0 days to 27 weeks 6 days, and from 28 weeks 0 days. Some sources draw the lines a week earlier or later.",
  ],
  faqs: [
    { question: "Why is pregnancy counted from the last period and not from conception?", answer: "The first day of the last period is usually known, while the day of conception is not. Counting from it is a long-standing convention, so at conception a pregnancy is already about 2 weeks along." },
    { question: "How does cycle length change the due date?", answer: "In a 28-day cycle ovulation is around day 14. In a longer cycle it is later, so the due date moves later by the same number of days; a shorter cycle moves it earlier." },
    { question: "Can the due date change?", answer: "Yes. An early ultrasound may give a different date, and your clinician may update it, usually only once, based on that scan." },
  ],
  related: ["date-duration-calculator", "add-days-calculator", "age-calculator"],
  updated: "2026-10-24",
  engine: dueDateEngine,
  text,
  makeEngine: makeDueDateEngine,
  translations,
});
