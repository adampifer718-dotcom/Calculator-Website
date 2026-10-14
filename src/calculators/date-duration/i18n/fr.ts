import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DateDurationText } from "../text/en";

const years = { zero: "{n} an", one: "{n} an", two: "{n} ans", few: "{n} ans", many: "{n} d’années", other: "{n} ans" };
const months = { zero: "{n} mois", one: "{n} mois", two: "{n} mois", few: "{n} mois", many: "{n} de mois", other: "{n} mois" };
const weeks = { zero: "{n} semaine", one: "{n} semaine", two: "{n} semaines", few: "{n} semaines", many: "{n} de semaines", other: "{n} semaines" };
const days = { zero: "{n} jour", one: "{n} jour", two: "{n} jours", few: "{n} jours", many: "{n} de jours", other: "{n} jours" };

const fr: CalculatorTranslation<DateDurationText> = {
  content: {
    title: "Calculateur de durée entre deux dates",
    shortTitle: "Durée entre dates",
    summary: "Comptez les jours, semaines, mois et années entre deux dates, y compris les jours ouvrés et les jours de week-end.",
    metaTitle: "Calculateur de durée entre deux dates – Nombre de jours",
    metaDescription:
      "Comptez les jours entre deux dates, avec la durée en années, mois et jours, en semaines, en jours de semaine et de week-end. Incluez la date de fin si besoin.",
    keywords: ["nombre de jours entre deux dates", "calcul durée entre dates", "différence entre deux dates", "compte à rebours jours", "calcul jours ouvrés", "nombre de semaines entre deux dates"],
    intro: [
      "Découvrez combien de jours séparent deux dates, pour une échéance, un préavis, un voyage ou un compte à rebours.",
      "Le résultat est aussi affiché en années, mois et jours, en semaines, ainsi qu’en jours de semaine et jours de week-end. Choisissez si la date de fin elle-même est comptée.",
    ],
    howToUse: [
      "Saisissez la date de début.",
      "Saisissez la date de fin (aujourd’hui par défaut).",
      "Choisissez si la date de fin doit compter comme un jour entier.",
      "Consultez le nombre de jours et les autres décompositions.",
    ],
    formulas: [
      { title: "Jours entre deux dates", expression: "Jours = date de fin − date de début (+ 1 si la date de fin est comptée)", explanation: "Jours calendaires, y compris le 29 février des années bissextiles." },
      { title: "Années, mois et jours", expression: "Mois calendaires entiers depuis la date de début, puis les jours restants", explanation: "Les mois sont comptés sur le calendrier : leur longueur (28 à 31 jours) est donc prise en compte." },
      { title: "Jours de semaine", expression: "Jours de semaine = jours tombant du lundi au vendredi", explanation: "Les jours fériés ne sont pas retirés ; soustrayez-les vous-même pour obtenir les jours ouvrés." },
    ],
    examples: [
      {
        title: "Du 1er janvier au 14 octobre 2026",
        steps: [
          "31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 jours (janvier–septembre) + 13 jours = 286 jours",
          "286 jours = 40 semaines et 6 jours ; 9 mois et 13 jours",
          "204 de ces jours tombent du lundi au vendredi",
        ],
      },
      {
        title: "Du 1er février au 1er mars 2024, les deux dates incluses",
        steps: [
          "2024 est une année bissextile : février compte donc 29 jours",
          "29 jours du 1er février au 1er mars, plus la date de fin = 30 jours",
          "22 jours de semaine et 8 jours de week-end",
        ],
      },
    ],
    assumptions: [
      "Les dates sont des jours calendaires du calendrier grégorien ; les heures et les fuseaux horaires ne sont pas pris en compte.",
      "Les jours de semaine vont du lundi au vendredi ; les jours fériés ne sont pas exclus.",
      "Les heures correspondent aux jours × 24 et ignorent les changements d’heure.",
    ],
    faqs: [
      { question: "Faut-il compter la date de fin ?", answer: "Pas pour les questions du type « dans combien de temps », comme un préavis ou un âge. Comptez-la lorsque le premier et le dernier jour font tous deux partie de la période, par exemple pour un séjour compté en jours ou le programme d’un événement." },
      { question: "Comment les années bissextiles sont-elles gérées ?", answer: "Chaque 29 février compris entre les dates est compté : les périodes qui incluent ce jour durent donc un jour de plus." },
      { question: "Comment compter les jours ouvrés ?", answer: "Utilisez le nombre de jours de semaine, puis soustrayez les jours fériés de votre pays qui tombent en semaine." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    start: "Date de début",
    end: "Date de fin",
    endHelp: "Aujourd’hui par défaut.",
    includeEnd: "Compter la date de fin",
    includeEndOptions: { no: "Non (écart entre les dates)", yes: "Oui (les deux dates incluses)" },
    includeEndHelp: "Incluez la date de fin pour compter les jours d’un événement, comme un festival de 3 jours du vendredi au dimanche.",
    units: { years, months, weeks, days },
    ymd: "{years}, {months} et {days}",
    weeksDays: "{weeks} et {days}",
    totalDays: "Durée en jours",
    caption: "Du {start} au {end}.",
    calendar: "En années, mois et jours",
    inWeeks: "En semaines et jours",
    weekdays: "Jours de semaine (du lundi au vendredi)",
    weekendDays: "Jours de week-end",
    hours: "Heures",
    reversed: "La date de fin est antérieure à la date de début : les dates ont donc été inversées.",
    weekdaysNote: "Les jours de semaine excluent les samedis et dimanches, mais pas les jours fériés.",
    hoursNote: "Les heures supposent des journées de 24 heures ; les changements d’heure ne sont pas pris en compte.",
  },
};

export default fr;
