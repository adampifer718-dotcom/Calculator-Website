import type { CalcCommonText } from "./en";

/** French (France) shared calculator strings. */
const fr: CalcCommonText = {
  validation: {
    required: "Saisissez une valeur pour « {labelLower} ».",
    invalidNumber: "Saisissez un nombre valide, par exemple {example}.",
    tooLarge: "Saisissez un nombre plus petit.",
    wholeNumber: "Saisissez un nombre entier.",
    greaterThan: "La valeur doit être supérieure à {bound}.",
    atLeast: "La valeur doit être au moins égale à {bound}.",
    atMost: "La valeur ne doit pas dépasser {bound}.",
    choose: "Choisissez une option pour « {labelLower} ».",
    invalidDate: "Saisissez une date valide.",
    dateAtLeast: "Doit être le {bound} ou après.",
    dateAtMost: "Doit être le {bound} ou avant.",
    notFinite: "Ces valeurs ne donnent pas de résultat fini. Vérifiez-les et réessayez.",
  },
  optional: "Facultatif",
  currency: {
    label: "Devise",
    help: "Modifie l’affichage des montants. Aucune conversion de change n’est appliquée.",
  },
  units: {
    hours: "heures",
    days: "jours",
    weeks: "semaines",
    years: "ans",
    people: "personnes",
    h: "h",
    min: "min",
    s: "s",
  },
  schedule: {
    hoursPerWeek: "Heures par semaine",
    hoursPerWeekHelp: "Heures payées au cours d’une semaine type.",
    daysPerWeek: "Jours travaillés par semaine",
    daysPerWeekHelp: "Sert au calcul de l’équivalent journalier.",
    weeksPerYear: "Semaines payées par an",
    weeksPerYearHelp: "52 pour une année complète. Réduisez cette valeur pour exclure les semaines non payées.",
    errors: {
      hoursPositive: "Le nombre d’heures par semaine doit être supérieur à 0.",
      hoursMax: "Une semaine compte au maximum 168 heures.",
      daysPositive: "Le nombre de jours travaillés par semaine doit être supérieur à 0.",
      daysMax: "Une semaine compte au maximum 7 jours.",
      weeksPositive: "Le nombre de semaines par an doit être supérieur à 0.",
      weeksMax: "Indiquez 53 semaines par an au maximum.",
      hoursPerDay: "Les heures par semaine divisées par les jours travaillés ne peuvent pas dépasser 24 heures par jour.",
    },
    notes: {
      annualHours: "Hypothèse : {hours} heures par semaine × {weeks} semaines = {annual} heures payées par an.",
      daily: "La paie journalière suppose {days} jours travaillés par semaine, soit {perDay} heures par jour travaillé.",
      gross: "Tous les montants sont bruts, avant impôts et retenues ; il ne s’agit pas du salaire net.",
    },
    table: {
      caption: "Rémunération brute par période",
      period: "Période de paie",
      periodsPerYear: "Périodes par an",
      grossPay: "Rémunération brute",
    },
  },
  payPeriods: {
    annual: "Annuel",
    monthly: "Mensuel",
    semimonthly: "Bimensuel",
    biweekly: "Toutes les deux semaines",
    weekly: "Hebdomadaire",
    daily: "Journalier",
    hourly: "Horaire",
  },
  choosePayPeriod: "Choisissez une période de paie.",
};

export default fr;
