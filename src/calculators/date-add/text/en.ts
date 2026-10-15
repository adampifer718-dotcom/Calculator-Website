const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const text = {
  start: "Start date",
  startHelp: "Today by default.",
  operation: "Operation",
  operations: { add: "Add", subtract: "Subtract" },
  years: "Years",
  months: "Months",
  monthsHelp: "Years and months are applied first. If the day does not exist in the new month, the last day of that month is used (31 January + 1 month = 28 or 29 February).",
  weeks: "Weeks",
  days: "Days",
  errors: {
    outOfRange: "The result falls outside the supported dates ({min} to {max}). Use a smaller amount.",
  },
  result: "Result date",
  captionAdd: "{start} plus {amount}.",
  captionSubtract: "{start} minus {amount}.",
  units: {
    years: forms("{n} year", "{n} years"),
    months: forms("{n} month", "{n} months"),
    weeks: forms("{n} week", "{n} weeks"),
    days: forms("{n} day", "{n} days"),
  },
  separator: ", ",
  weekday: "Day of the week",
  weekdayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  totalDays: "Calendar days between the dates",
  inWeeks: "In weeks and days",
  weeksDays: "{weeks} and {days}",
  isoDate: "Result in ISO format",
  notes: {
    clamped: "The start day does not exist in the month reached, so the last day of that month was used.",
    calendar: "Dates use the Gregorian calendar, with leap years every 4 years except century years not divisible by 400.",
  },
};
export type DateAddText = typeof text;
export default text;
