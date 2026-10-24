const weeks = { zero: "{n} weeks", one: "{n} week", two: "{n} weeks", few: "{n} weeks", many: "{n} weeks", other: "{n} weeks" };
const days = { zero: "{n} days", one: "{n} day", two: "{n} days", few: "{n} days", many: "{n} days", other: "{n} days" };

const text = {
  method: "Calculate from",
  methods: { lmp: "First day of last period", conception: "Conception date", ivf: "IVF embryo transfer date" },
  lmp: "First day of your last menstrual period",
  cycle: "Average cycle length",
  cycleHelp: "Days from the first day of one period to the first day of the next. Use 28 if you are unsure.",
  daysSuffix: "days",
  conception: "Conception date",
  conceptionHelp: "Usually only known approximately, for example from ovulation tracking.",
  transfer: "Embryo transfer date",
  embryoAge: "Embryo age at transfer",
  embryoAges: { "3": "Day 3 embryo", "5": "Day 5 embryo (blastocyst)" },
  asOf: "Gestational age on",
  asOfHelp: "Today by default. Change it to see how far along the pregnancy is on another date.",
  units: { weeks, days },
  weeksDays: "{weeks}, {days}",
  dueDate: "Estimated due date",
  caption: "{days} days after the {from}.",
  captionFrom: { lmp: "first day of the last period, adjusted for the cycle length", conception: "conception date", ivf: "transfer date" },
  gestationalAge: "Gestational age",
  trimester: "Trimester",
  trimesters: { first: "First trimester", second: "Second trimester", third: "Third trimester" },
  notStarted: "Not yet started on this date",
  firstEnds: "First trimester ends (13 weeks 6 days)",
  secondEnds: "Second trimester ends (27 weeks 6 days)",
  thirdStarts: "Third trimester begins (28 weeks 0 days)",
  daysToDue: "Days until the due date",
  startDate: "Pregnancy dating starts (0 weeks 0 days)",
  notes: {
    estimate: "An estimate only: only a small share of babies are born on their due date, and most arrive within about two weeks either side. A dating ultrasound may change it.",
    beforeStart: "The chosen date is before the start of the pregnancy dating, so there is no gestational age yet.",
    pastDue: "The chosen date is on or after the estimated due date.",
    veryLate: "The chosen date is more than 42 weeks into the pregnancy. Check that the dates are right.",
    clinician: "Gestational age is counted from the first day of the last period, even when the date comes from conception or transfer. Your midwife or doctor sets the official due date.",
  },
  errors: { range: "This date gives a due date outside the supported range." },
};
export type DueDateText = typeof text;
export default text;
