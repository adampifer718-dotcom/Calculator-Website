import type { CalcCommonText } from "./en";

/** German shared calculator strings. {labelLower} receives the label unchanged (German capitalizes nouns). */
const de: CalcCommonText = {
  validation: {
    required: "Geben Sie einen Wert für „{labelLower}“ ein.",
    invalidNumber: "Geben Sie eine gültige Zahl ein, zum Beispiel {example}.",
    tooLarge: "Geben Sie eine kleinere Zahl ein.",
    wholeNumber: "Geben Sie eine ganze Zahl ein.",
    greaterThan: "Der Wert muss größer als {bound} sein.",
    atLeast: "Der Wert muss mindestens {bound} betragen.",
    atMost: "Der Wert darf höchstens {bound} betragen.",
    choose: "Wählen Sie eine Option für „{labelLower}“.",
    invalidDate: "Geben Sie ein gültiges Datum ein.",
    dateAtLeast: "Muss am {bound} oder später liegen.",
    dateAtMost: "Muss am {bound} oder früher liegen.",
    notFinite: "Diese Eingaben ergeben kein endliches Ergebnis. Prüfen Sie die Werte und versuchen Sie es erneut.",
  },
  optional: "Optional",
  currency: {
    label: "Währung",
    help: "Ändert nur die Formatierung der Beträge. Es findet keine Wechselkursumrechnung statt.",
  },
  units: {
    hours: "Stunden",
    days: "Tage",
    weeks: "Wochen",
    years: "Jahre",
    people: "Personen",
    h: "Std.",
    min: "Min.",
    s: "Sek.",
  },
  schedule: {
    hoursPerWeek: "Stunden pro Woche",
    hoursPerWeekHelp: "Bezahlte Stunden in einer typischen Woche.",
    daysPerWeek: "Arbeitstage pro Woche",
    daysPerWeekHelp: "Wird für den Tageswert verwendet.",
    weeksPerYear: "Bezahlte Wochen pro Jahr",
    weeksPerYearHelp: "52 für ein ganzes Jahr. Verringern Sie den Wert, um unbezahlte Wochen auszuschließen.",
    errors: {
      hoursPositive: "Die Stunden pro Woche müssen größer als 0 sein.",
      hoursMax: "Eine Woche hat höchstens 168 Stunden.",
      daysPositive: "Die Arbeitstage pro Woche müssen größer als 0 sein.",
      daysMax: "Eine Woche hat höchstens 7 Tage.",
      weeksPositive: "Die Wochen pro Jahr müssen größer als 0 sein.",
      weeksMax: "Verwenden Sie höchstens 53 Wochen pro Jahr.",
      hoursPerDay: "Stunden pro Woche geteilt durch Arbeitstage pro Woche dürfen 24 Stunden pro Tag nicht überschreiten.",
    },
    notes: {
      annualHours: "Annahme: {hours} Stunden pro Woche × {weeks} Wochen = {annual} bezahlte Stunden pro Jahr.",
      daily: "Der Tageslohn geht von {days} Arbeitstagen pro Woche bzw. {perDay} Stunden pro Arbeitstag aus.",
      gross: "Alle Beträge sind Bruttolohn vor Steuern und Abzügen, nicht der Nettolohn.",
    },
    table: {
      caption: "Bruttolohn nach Zeitraum",
      period: "Abrechnungszeitraum",
      periodsPerYear: "Zeiträume pro Jahr",
      grossPay: "Bruttolohn",
    },
  },
  payPeriods: {
    annual: "Jährlich",
    monthly: "Monatlich",
    semimonthly: "Halbmonatlich",
    biweekly: "Zweiwöchentlich",
    weekly: "Wöchentlich",
    daily: "Täglich",
    hourly: "Stündlich",
  },
  choosePayPeriod: "Wählen Sie einen Abrechnungszeitraum.",
};

export default de;
