import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { makeOvertimePayEngine, overtimePayEngine } from "./engine";

export const overtimePay = defineCalculator({
  id: "overtime-pay",
  slug: "overtime-calculator",
  status: "published",
  title: "Overtime Pay Calculator",
  shortTitle: "Overtime Pay",
  category: "finance",
  collections: ["hr-payroll", "business"],
  summary: "Work out a week's gross pay with overtime, including time and a half, an optional double-time portion and the effective hourly rate.",
  metaTitle: "Overtime Pay Calculator – Time and a Half and Double Time",
  metaDescription: "Calculate weekly gross pay with overtime: regular pay up to 40 hours or your own threshold, time and a half, optional double time and the effective rate.",
  keywords: ["overtime calculator", "overtime pay", "time and a half", "double time", "weekly pay", "FLSA overtime", "overtime rate", "40 hours"],
  addedOn: "2026-10-22",
  sources: [
    {
      title: "Overtime Pay",
      publisher: "U.S. Department of Labor, Wage and Hour Division",
      url: "https://www.dol.gov/agencies/whd/overtime",
      usedFor: "The US federal rule: covered non-exempt employees get at least one and one-half times the regular rate for hours over 40 in a workweek.",
    },
    {
      title: "Fact Sheet #23: Overtime Pay Requirements of the FLSA",
      publisher: "U.S. Department of Labor, Wage and Hour Division",
      url: "https://www.dol.gov/agencies/whd/fact-sheets/23-flsa-overtime-pay",
      usedFor: "The workweek as a fixed 168-hour period, the ban on averaging hours across weeks, and how the regular rate is found.",
    },
  ],
  expertReview: { area: "tax", status: "pending" },
  intro: [
    "Overtime pay rewards hours worked beyond a normal week with a higher rate. Under the US federal Fair Labor Standards Act, covered employees who are not exempt must get at least time and a half for every hour over 40 in a workweek.",
    "This calculator splits a week into regular hours and overtime hours, applies your overtime multiplier, and can pay part of the overtime at a double-time rate if your employer or contract provides it. Change the threshold or multipliers to match the rules that apply to you.",
  ],
  howToUse: [
    "Pick the currency and enter your regular hourly rate.",
    "Enter all the hours you worked in the week.",
    "Keep the threshold at 40 hours and the multiplier at 1.5 for the US federal rule, or change them to match your contract or local law.",
    "If some overtime hours are paid at double time, enter how many. They are counted inside the overtime hours.",
    "Read the total gross pay, the split between regular and overtime pay, and the effective hourly rate.",
  ],
  formulas: [
    { title: "Regular and overtime hours", expression: "regular = min(H, T); overtime = max(0, H − T)", explanation: "H is the hours worked in the week and T the regular-hours threshold." },
    { title: "Gross pay", expression: "pay = regular × r + (overtime − D) × r × m + D × r × d", explanation: "r is the hourly rate, m the overtime multiplier, D the double-time hours and d the double-time multiplier." },
    { title: "Effective hourly rate", expression: "effective = pay ÷ H", explanation: "The average paid for each hour worked once the overtime premium is included." },
  ],
  examples: [
    {
      title: "46 hours at $22 an hour",
      inputs: { currency: "USD", rate: 22, hours: 46, threshold: 40, multiplier: 1.5, doubleHours: 0, doubleMultiplier: 2 },
      steps: ["Regular pay = 40 × $22 = $880", "Overtime = 6 h × $22 × 1.5 = $198", "Total = $880 + $198 = $1,078"],
      expectedPrimary: 1078,
    },
    {
      title: "52 hours at $18.50 with 4 hours of double time",
      inputs: { currency: "USD", rate: 18.5, hours: 52, threshold: 40, multiplier: 1.5, doubleHours: 4, doubleMultiplier: 2 },
      steps: [
        "Regular pay = 40 × $18.50 = $740",
        "Overtime hours = 12, of which 8 are at time and a half: 8 × $27.75 = $222",
        "Double time = 4 × $37 = $148",
        "Total = $740 + $222 + $148 = $1,110, about $21.35 per hour worked",
      ],
      expectedPrimary: 1110,
    },
    {
      title: "37.5-hour contract with overtime at 1.25×",
      inputs: { currency: "GBP", rate: 16, hours: 44, threshold: 37.5, multiplier: 1.25, doubleHours: 0, doubleMultiplier: 2 },
      steps: ["Regular pay = 37.5 × £16 = £600", "Overtime = 6.5 h × £16 × 1.25 = £130", "Total = £730"],
      expectedPrimary: 730,
    },
  ],
  assumptions: [
    "This is an estimate of gross pay, before income tax, social security, benefits and other deductions. It is not legal or tax advice and has not been professionally reviewed.",
    "Overtime rules vary by country, state and contract. Some places require overtime after a set number of hours in a day, or double time after longer shifts; this tool only applies a weekly threshold and the double-time hours you enter.",
    "Under the US federal rule the regular rate can include bonuses, commissions and shift differentials. Here the regular rate is the hourly figure you enter.",
    "Exempt employees, such as many salaried managers and professionals, may not be entitled to overtime at all.",
  ],
  faqs: [
    { question: "What does time and a half mean?", answer: "Each overtime hour is paid at 1.5 times the regular rate. At $20 an hour, an overtime hour pays $30, so the premium is $10 on top of the straight-time pay." },
    { question: "Can my employer average hours over two weeks?", answer: "Under the US federal rule, no. Each workweek is a fixed 168-hour period that stands alone, so 50 hours one week and 30 the next still means 10 overtime hours in the first week." },
    { question: "Are double-time hours added to the overtime hours?", answer: "No. In this calculator, double-time hours are a part of the overtime hours. If you worked 12 overtime hours and 4 of them were at double time, the other 8 are paid at the overtime multiplier." },
  ],
  related: ["hourly-to-salary-calculator", "hours-calculator", "salary-to-hourly-calculator"],
  updated: "2026-10-22",
  engine: overtimePayEngine,
  text,
  makeEngine: makeOvertimePayEngine,
  translations,
});
