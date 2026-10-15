const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const text = {
  fieldLabels: {
    first: { days: "Days (first duration)", hours: "Hours (first duration)", minutes: "Minutes (first duration)", seconds: "Seconds (first duration)" },
    second: { days: "Days (second duration)", hours: "Hours (second duration)", minutes: "Minutes (second duration)", seconds: "Seconds (second duration)" },
  },
  partsHelp: "Leave a part at 0 if you do not need it. Values above 24 hours, 60 minutes or 60 seconds are fine and are carried over.",
  operation: "Operation",
  operations: { add: "Add (+)", subtract: "Subtract (−)" },
  operationHelp: "Subtracting takes the second duration away from the first. The result is negative when the second one is longer.",
  result: "Result",
  caption: "{first} {op} {second}.",
  opSymbols: { add: "+", subtract: "−" },
  units: {
    days: forms("{n} day", "{n} days"),
    hours: forms("{n} hour", "{n} hours"),
    minutes: forms("{n} minute", "{n} minutes"),
    seconds: forms("{n} second", "{n} seconds"),
  },
  separator: ", ",
  /** Placed before a negative duration. */
  negative: "−{duration}",
  totalDays: "Total in days",
  totalHours: "Total in hours",
  totalMinutes: "Total in minutes",
  totalSeconds: "Total in seconds",
  notes: {
    negative: "The second duration is longer than the first, so the result is negative.",
    days: "A day is counted as exactly 24 hours. Daylight-saving changes and leap seconds are not included.",
    rounding: "The result is rounded to the nearest thousandth of a second.",
  },
};
export type TimeCalculatorText = typeof text;
export default text;
