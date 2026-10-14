import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { salaryToHourlyEngine, makeSalaryToHourlyEngine } from "./engine";

export const salaryToHourly = defineCalculator({
  id: "salary-to-hourly",
  slug: "salary-to-hourly-calculator",
  status: "published",
  title: "Salary to Hourly Calculator",
  shortTitle: "Salary to Hourly",
  category: "finance",
  collections: ["hr-payroll", "personal-finance", "accounting-finance"],
  summary: "Convert annual, monthly, biweekly or other gross pay into an hourly rate using your own work schedule.",
  metaTitle: "Salary to Hourly Calculator – Convert Any Pay Period",
  metaDescription:
    "Convert a salary to an hourly wage. Enter annual, monthly, semi-monthly, biweekly, weekly or daily gross pay and your hours, workdays and weeks per year.",
  keywords: ["salary", "hourly", "wage", "pay", "annual to hourly", "monthly to hourly", "biweekly", "paycheck", "rate"],
  popularRank: 1,
  addedOn: "2026-10-14",
  featured: true,
  sources: [],
  intro: [
    "This calculator converts gross pay from any common pay period into an hourly equivalent. It also shows what the same pay works out to per year, month, semi-month, two weeks, week and workday.",
    "Results depend on the schedule you enter. A $60,000 salary is about $28.85 an hour at 40 hours a week for 52 weeks, but about $30.77 an hour at 37.5 hours a week.",
  ],
  howToUse: [
    "Enter your gross pay amount, before taxes and deductions.",
    "Choose how often you receive that amount: annual, monthly, semi-monthly, biweekly, weekly, daily or hourly.",
    "Set your paid hours per week, workdays per week and paid weeks per year. The defaults are 40 hours, 5 days and 52 weeks.",
    "Read the hourly equivalent and the full breakdown by pay period. Results update as you type.",
  ],
  formulas: [
    {
      title: "Annualize the amount",
      expression:
        "Annual pay = amount × periods per year\nAnnual = 1, Monthly = 12, Semi-monthly = 24, Biweekly = 26\nWeekly = weeks per year\nDaily = workdays per week × weeks per year\nHourly = hours per week × weeks per year",
      explanation:
        "Annual, monthly, semi-monthly and biweekly pay use fixed calendar counts. Weekly, daily and hourly pay are annualized with the schedule you enter.",
    },
    {
      title: "Divide by paid hours",
      expression: "Annual hours = hours per week × weeks per year\nHourly equivalent = annual pay ÷ annual hours",
      explanation: "The hourly equivalent spreads annualized gross pay evenly across every paid hour in the year.",
    },
    {
      title: "Other pay periods",
      expression: "Pay per period = annual pay ÷ periods per year",
      explanation: "The breakdown table divides the annualized amount by each period's count. Values are rounded only for display.",
    },
  ],
  examples: [
    {
      title: "$60,000 annual salary, full time",
      inputs: { amount: 60000, period: "annual", hoursPerWeek: 40, daysPerWeek: 5, weeksPerYear: 52, currency: "USD" },
      steps: ["Annual hours = 40 × 52 = 2,080", "Hourly = $60,000 ÷ 2,080 = $28.846…"],
      expectedPrimary: 60000 / 2080,
    },
    {
      title: "$4,500 per month",
      inputs: { amount: 4500, period: "monthly", hoursPerWeek: 40, daysPerWeek: 5, weeksPerYear: 52, currency: "USD" },
      steps: ["Annual pay = $4,500 × 12 = $54,000", "Annual hours = 40 × 52 = 2,080", "Hourly = $54,000 ÷ 2,080 = $25.961…"],
      expectedPrimary: 54000 / 2080,
    },
    {
      title: "$2,000 biweekly at 37.5 hours a week",
      inputs: { amount: 2000, period: "biweekly", hoursPerWeek: 37.5, daysPerWeek: 5, weeksPerYear: 52, currency: "USD" },
      steps: ["Annual pay = $2,000 × 26 = $52,000", "Annual hours = 37.5 × 52 = 1,950", "Hourly = $52,000 ÷ 1,950 = $26.666…"],
      expectedPrimary: 52000 / 1950,
    },
    {
      title: "$250 a day, 4 days a week, 48 paid weeks",
      inputs: { amount: 250, period: "daily", hoursPerWeek: 32, daysPerWeek: 4, weeksPerYear: 48, currency: "USD" },
      steps: ["Annual pay = $250 × 4 × 48 = $48,000", "Annual hours = 32 × 48 = 1,536", "Hourly = $48,000 ÷ 1,536 = $31.25"],
      expectedPrimary: 31.25,
    },
  ],
  assumptions: [
    "All amounts are gross pay before income tax, social security, retirement contributions and other deductions. This calculator does not estimate taxes or take-home pay.",
    "Monthly, semi-monthly and biweekly pay are annualized with 12, 24 and 26 periods per year, regardless of the weeks per year you enter.",
    "Weekly, daily and hourly pay are annualized with your weeks per year, workdays per week and hours per week.",
    "Overtime, bonuses, commissions, benefits and unpaid breaks are not included unless you add them to the amount.",
    "Choosing a currency only changes the symbol and formatting. No exchange-rate conversion is performed.",
    "Results are rounded for display. Calculations use full precision.",
  ],
  faqs: [
    {
      question: "How do I convert my annual salary to an hourly rate?",
      answer:
        "Divide the annual salary by the number of paid hours in a year. At 40 hours a week for 52 weeks that is 2,080 hours, so a $50,000 salary is $50,000 ÷ 2,080 ≈ $24.04 an hour.",
    },
    {
      question: "Why is biweekly pay multiplied by 26 instead of 2 × weeks per year?",
      answer:
        "A biweekly schedule pays every two weeks, which gives 26 paychecks in a typical year. Monthly, semi-monthly and biweekly salaries are usually fixed per paycheck, so they are annualized with a calendar count rather than the paid weeks you enter.",
    },
    {
      question: "What is the difference between semi-monthly and biweekly pay?",
      answer:
        "Semi-monthly pay arrives twice a month, for 24 paychecks a year. Biweekly pay arrives every two weeks, for 26 paychecks a year. The same annual salary gives a smaller biweekly paycheck than a semi-monthly one.",
    },
    {
      question: "Is the hourly rate my take-home pay?",
      answer:
        "No. The result is gross pay before taxes and deductions. Your take-home pay depends on your tax situation, benefits and withholding, which this calculator does not estimate.",
    },
    {
      question: "Should I use 52 weeks per year?",
      answer:
        "Use 52 if you are paid for every week of the year, including paid holidays and vacation. If some weeks are unpaid, enter only the paid weeks. A calendar year is about 52.14 weeks, which you can also enter.",
    },
    {
      question: "Does changing the currency convert the amount?",
      answer: "No. The currency setting only changes how numbers are formatted. Enter amounts in the currency you are paid in.",
    },
  ],
  related: ["hourly-to-salary-calculator", "percentage-increase-calculator", "percentage-calculator"],
  updated: "2026-10-14",
  engine: salaryToHourlyEngine,
  text,
  makeEngine: makeSalaryToHourlyEngine,
  translations,
});
