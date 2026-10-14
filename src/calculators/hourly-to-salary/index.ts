import type { CalculatorDefinition } from "@/calculators/framework/types";
import { hourlyToSalaryEngine } from "./engine";
import Widget from "./widget";

export const hourlyToSalary: CalculatorDefinition = {
  slug: "hourly-to-salary-calculator",
  title: "Hourly to Salary Calculator",
  shortTitle: "Hourly to Salary",
  category: "salary-and-pay",
  summary: "Turn an hourly wage into annual, monthly, biweekly, weekly and daily gross pay for your schedule.",
  metaTitle: "Hourly to Salary Calculator – Annual, Monthly & Weekly Pay",
  metaDescription:
    "Convert an hourly wage to an annual salary and see monthly, semi-monthly, biweekly, weekly and daily gross pay based on your hours and paid weeks.",
  keywords: ["hourly", "salary", "wage", "annual", "yearly", "monthly", "income", "pay rate", "per hour"],
  popularRank: 2,
  intro: [
    "Use this calculator to see what an hourly wage adds up to over a year and in each common pay period.",
    "It is useful for comparing an hourly job offer with a salaried one, or for checking how part-time hours or unpaid weeks change your yearly gross income.",
  ],
  howToUse: [
    "Enter your hourly rate before taxes and deductions.",
    "Set your paid hours per week and paid weeks per year.",
    "Set your workdays per week to get an accurate daily figure.",
    "Read the annual salary equivalent and the breakdown for each pay period.",
  ],
  formulas: [
    {
      title: "Annual salary",
      expression: "Annual pay = hourly rate × hours per week × weeks per year",
      explanation: "Multiplying by paid weeks, not calendar weeks, lets you exclude unpaid time off.",
    },
    {
      title: "Other pay periods",
      expression: "Monthly = annual ÷ 12\nSemi-monthly = annual ÷ 24\nBiweekly = annual ÷ 26\nWeekly = annual ÷ weeks per year\nDaily = annual ÷ (workdays per week × weeks per year)",
      explanation: "Each period divides the same annual amount, so the figures stay consistent with each other.",
    },
  ],
  examples: [
    {
      title: "$25 an hour, full time",
      inputs: { hourlyRate: 25, hoursPerWeek: 40, daysPerWeek: 5, weeksPerYear: 52, currency: "USD" },
      steps: ["Annual hours = 40 × 52 = 2,080", "Annual pay = $25 × 2,080 = $52,000"],
      expectedPrimary: 52000,
    },
    {
      title: "$18.50 an hour, 30 hours a week, 50 paid weeks",
      inputs: { hourlyRate: 18.5, hoursPerWeek: 30, daysPerWeek: 5, weeksPerYear: 50, currency: "USD" },
      steps: ["Annual hours = 30 × 50 = 1,500", "Annual pay = $18.50 × 1,500 = $27,750"],
      expectedPrimary: 27750,
    },
    {
      title: "$40 an hour, 37.5 hours a week, 48 paid weeks",
      inputs: { hourlyRate: 40, hoursPerWeek: 37.5, daysPerWeek: 5, weeksPerYear: 48, currency: "USD" },
      steps: ["Annual hours = 37.5 × 48 = 1,800", "Annual pay = $40 × 1,800 = $72,000"],
      expectedPrimary: 72000,
    },
  ],
  assumptions: [
    "Results are gross pay before taxes and deductions. Take-home pay is not estimated.",
    "Every paid hour is paid at the same rate. Overtime premiums, tips, bonuses and shift differentials are not included.",
    "Monthly, semi-monthly and biweekly amounts divide the annual total by 12, 24 and 26.",
    "Choosing a currency only changes formatting. No exchange-rate conversion is performed.",
    "Results are rounded for display. Calculations use full precision.",
  ],
  faqs: [
    {
      question: "How much is $20 an hour per year?",
      answer: "At 40 hours a week for 52 weeks, $20 an hour is $20 × 2,080 = $41,600 a year in gross pay.",
    },
    {
      question: "How many working hours are in a year?",
      answer:
        "A full-time schedule of 40 hours a week for 52 weeks gives 2,080 paid hours. Change the hours per week or paid weeks to match your situation.",
    },
    {
      question: "How do I account for unpaid vacation?",
      answer: "Lower the paid weeks per year. For example, two unpaid weeks means entering 50 weeks.",
    },
    {
      question: "Why does the monthly amount not equal four weeks of pay?",
      answer:
        "A month is longer than four weeks on average. Monthly pay is the annual total divided by 12, which is about 4.33 weeks of pay at 52 weeks a year.",
    },
    {
      question: "Is this my take-home pay?",
      answer: "No. These are gross figures before income tax and other deductions, which this calculator does not estimate.",
    },
  ],
  related: ["salary-to-hourly-calculator", "percentage-increase-calculator", "roi-calculator"],
  updated: "2026-10-14",
  engine: hourlyToSalaryEngine,
  Widget,
};
