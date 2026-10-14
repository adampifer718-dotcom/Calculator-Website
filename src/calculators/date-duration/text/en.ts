const years = { zero: "{n} years", one: "{n} year", two: "{n} years", few: "{n} years", many: "{n} years", other: "{n} years" };
const months = { zero: "{n} months", one: "{n} month", two: "{n} months", few: "{n} months", many: "{n} months", other: "{n} months" };
const weeks = { zero: "{n} weeks", one: "{n} week", two: "{n} weeks", few: "{n} weeks", many: "{n} weeks", other: "{n} weeks" };
const days = { zero: "{n} days", one: "{n} day", two: "{n} days", few: "{n} days", many: "{n} days", other: "{n} days" };

const text = {
  start: "Start date",
  end: "End date",
  endHelp: "Today by default.",
  includeEnd: "Count the end date",
  includeEndOptions: { no: "No (difference between dates)", yes: "Yes (both dates included)" },
  includeEndHelp: "Include the end date when counting days of an event, such as a 3-day festival from Friday to Sunday.",
  units: { years, months, weeks, days },
  ymd: "{years}, {months} and {days}",
  weeksDays: "{weeks} and {days}",
  totalDays: "Duration in days",
  caption: "From {start} to {end}.",
  calendar: "In years, months and days",
  inWeeks: "In weeks and days",
  weekdays: "Weekdays (Monday to Friday)",
  weekendDays: "Weekend days",
  hours: "Hours",
  reversed: "The end date is before the start date, so the dates were swapped.",
  weekdaysNote: "Weekdays exclude Saturdays and Sundays but not public holidays.",
  hoursNote: "Hours assume 24-hour days; daylight-saving changes are not included.",
};
export type DateDurationText = typeof text;
export default text;
