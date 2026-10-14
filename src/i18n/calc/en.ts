/**
 * Shared calculator strings (validation, common fields, pay periods). Other
 * locales implement the same shape. Templates use {placeholders} filled by
 * `fill()`; `{labelLower}` is the field label in lower case where a language
 * lowercases nouns mid-sentence.
 */
const en = {
  validation: {
    required: "Enter {labelLower}.",
    invalidNumber: "Enter a valid number, for example {example}.",
    tooLarge: "Enter a smaller number.",
    wholeNumber: "Enter a whole number.",
    greaterThan: "Must be greater than {bound}.",
    atLeast: "Must be at least {bound}.",
    atMost: "Must be no more than {bound}.",
    choose: "Choose a {labelLower}.",
    invalidDate: "Enter a valid date.",
    dateAtLeast: "Must be on or after {bound}.",
    dateAtMost: "Must be on or before {bound}.",
    notFinite: "These inputs do not produce a finite result. Check the values and try again.",
  },
  optional: "Optional",
  currency: {
    label: "Currency",
    help: "Changes how amounts are formatted. No exchange-rate conversion is applied.",
  },
  units: {
    hours: "hours",
    days: "days",
    weeks: "weeks",
    years: "years",
    people: "people",
    h: "h",
    min: "min",
    s: "s",
  },
  schedule: {
    hoursPerWeek: "Hours per week",
    hoursPerWeekHelp: "Paid hours in a typical week.",
    daysPerWeek: "Workdays per week",
    daysPerWeekHelp: "Used for the daily equivalent.",
    weeksPerYear: "Paid weeks per year",
    weeksPerYearHelp: "52 for a full year. Lower it to exclude unpaid weeks.",
    errors: {
      hoursPositive: "Hours per week must be greater than 0.",
      hoursMax: "A week has at most 168 hours.",
      daysPositive: "Workdays per week must be greater than 0.",
      daysMax: "A week has at most 7 days.",
      weeksPositive: "Weeks per year must be greater than 0.",
      weeksMax: "Use 53 weeks per year or fewer.",
      hoursPerDay: "Hours per week divided by workdays per week cannot exceed 24 hours per day.",
    },
    notes: {
      annualHours: "Assumes {hours} hours per week × {weeks} weeks = {annual} paid hours per year.",
      daily: "Daily pay assumes {days} workdays per week, or {perDay} hours per workday.",
      gross: "All amounts are gross pay before taxes and deductions, not take-home pay.",
    },
    table: {
      caption: "Gross pay by period",
      period: "Pay period",
      periodsPerYear: "Periods per year",
      grossPay: "Gross pay",
    },
  },
  payPeriods: {
    annual: "Annual",
    monthly: "Monthly",
    semimonthly: "Semi-monthly",
    biweekly: "Biweekly",
    weekly: "Weekly",
    daily: "Daily",
    hourly: "Hourly",
  },
  choosePayPeriod: "Choose a pay period.",
};

export type CalcCommonText = typeof en;
export default en;
