const years = { zero: "{n} years", one: "{n} year", two: "{n} years", few: "{n} years", many: "{n} years", other: "{n} years" };
const months = { zero: "{n} months", one: "{n} month", two: "{n} months", few: "{n} months", many: "{n} months", other: "{n} months" };
const weeks = { zero: "{n} weeks", one: "{n} week", two: "{n} weeks", few: "{n} weeks", many: "{n} weeks", other: "{n} weeks" };
const days = { zero: "{n} days", one: "{n} day", two: "{n} days", few: "{n} days", many: "{n} days", other: "{n} days" };

const text = {
  birth: "Date of birth",
  asOf: "Age on",
  asOfHelp: "Today by default. Change it to see an age on any date.",
  leapDay: "29 February birthdays in other years",
  leapDayOptions: { feb28: "Celebrate on 28 February", mar1: "Celebrate on 1 March" },
  leapDayHelp: "Only matters if you were born on 29 February. Laws and customs differ.",
  units: { years, months, weeks, days },
  ymd: "{years}, {months} and {days}",
  weeksDays: "{weeks} and {days}",
  orderError: "This date must be on or after the date of birth.",
  age: "Age",
  ageCaption: "Born on {birth}; age on {asOf}.",
  totalMonths: "Total months",
  totalWeeks: "Total weeks",
  totalDays: "Total days",
  nextBirthday: "Next birthday",
  daysToBirthday: "Days until next birthday",
  bornOn: "Day of the week you were born",
  weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  birthdayToday: "Happy birthday! Today is the anniversary of the date of birth.",
  note: "Ages use calendar dates in your own time zone; the time of birth is not taken into account.",
};
export type AgeText = typeof text;
export default text;
