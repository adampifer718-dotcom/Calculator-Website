import type { CalcCommonText } from "./en";

/** Dutch shared calculator strings. */
const nl: CalcCommonText = {
  validation: {
    required: "Vul een waarde in voor {labelLower}.",
    invalidNumber: "Vul een geldig getal in, bijvoorbeeld {example}.",
    tooLarge: "Vul een kleiner getal in.",
    wholeNumber: "Vul een geheel getal in.",
    greaterThan: "Moet groter zijn dan {bound}.",
    atLeast: "Moet minimaal {bound} zijn.",
    atMost: "Mag niet meer zijn dan {bound}.",
    choose: "Maak een keuze voor {labelLower}.",
    invalidDate: "Vul een geldige datum in.",
    dateAtLeast: "Moet op of na {bound} liggen.",
    dateAtMost: "Moet op of vóór {bound} liggen.",
    notFinite: "Deze invoer levert geen eindig resultaat op. Controleer de waarden en probeer het opnieuw.",
  },
  optional: "Optioneel",
  currency: {
    label: "Valuta",
    help: "Bepaalt alleen hoe bedragen worden weergegeven. Er wordt niet omgerekend met een wisselkoers.",
  },
  units: {
    hours: "uur",
    days: "dagen",
    weeks: "weken",
    years: "jaar",
    people: "personen",
    h: "u",
    min: "min",
    s: "s",
  },
  schedule: {
    hoursPerWeek: "Uren per week",
    hoursPerWeekHelp: "Betaalde uren in een gewone werkweek.",
    daysPerWeek: "Werkdagen per week",
    daysPerWeekHelp: "Gebruikt voor het bedrag per dag.",
    weeksPerYear: "Betaalde weken per jaar",
    weeksPerYearHelp: "52 voor een volledig jaar. Verlaag dit om onbetaalde weken uit te sluiten.",
    errors: {
      hoursPositive: "Het aantal uren per week moet groter zijn dan 0.",
      hoursMax: "Een week heeft maximaal 168 uur.",
      daysPositive: "Het aantal werkdagen per week moet groter zijn dan 0.",
      daysMax: "Een week heeft maximaal 7 dagen.",
      weeksPositive: "Het aantal weken per jaar moet groter zijn dan 0.",
      weeksMax: "Gebruik maximaal 53 weken per jaar.",
      hoursPerDay: "Uren per week gedeeld door werkdagen per week mag niet meer zijn dan 24 uur per dag.",
    },
    notes: {
      annualHours: "Uitgaande van {hours} uur per week × {weeks} weken = {annual} betaalde uren per jaar.",
      daily: "Het dagloon gaat uit van {days} werkdagen per week, oftewel {perDay} uur per werkdag.",
      gross: "Alle bedragen zijn brutoloon vóór belastingen en inhoudingen, dus niet je nettoloon.",
    },
    table: {
      caption: "Brutoloon per periode",
      period: "Betaalperiode",
      periodsPerYear: "Perioden per jaar",
      grossPay: "Brutoloon",
    },
  },
  payPeriods: {
    annual: "Per jaar",
    monthly: "Per maand",
    semimonthly: "Per halve maand",
    biweekly: "Per twee weken",
    weekly: "Per week",
    daily: "Per dag",
    hourly: "Per uur",
  },
  choosePayPeriod: "Kies een betaalperiode.",
};

export default nl;
