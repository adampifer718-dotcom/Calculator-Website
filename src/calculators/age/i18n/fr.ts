import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AgeText } from "../text/en";

const years = { zero: "{n} an", one: "{n} an", two: "{n} ans", few: "{n} ans", many: "{n} d’années", other: "{n} ans" };
const months = { zero: "{n} mois", one: "{n} mois", two: "{n} mois", few: "{n} mois", many: "{n} de mois", other: "{n} mois" };
const weeks = { zero: "{n} semaine", one: "{n} semaine", two: "{n} semaines", few: "{n} semaines", many: "{n} de semaines", other: "{n} semaines" };
const days = { zero: "{n} jour", one: "{n} jour", two: "{n} jours", few: "{n} jours", many: "{n} de jours", other: "{n} jours" };

const fr: CalculatorTranslation<AgeText> = {
  content: {
    title: "Calculateur d’âge",
    shortTitle: "Âge",
    summary: "Calculez un âge exact en années, mois et jours à n’importe quelle date, avec le total en jours et en semaines et le prochain anniversaire.",
    metaTitle: "Calculateur d’âge – Âge exact en années, mois et jours",
    metaDescription:
      "Calculez l’âge exact en années, mois et jours à partir d’une date de naissance, avec le total en jours et semaines et le prochain anniversaire.",
    keywords: ["calcul âge", "quel âge ai-je", "date de naissance", "calculer son âge", "âge en jours", "âge exact", "prochain anniversaire"],
    intro: [
      "Saisissez une date de naissance pour connaître l’âge exact aujourd’hui, ou choisissez une autre date pour savoir quel âge avait ou aura une personne ce jour-là.",
      "Le calculateur compte de vrais mois calendaires et gère les années bissextiles, les mois de longueurs différentes et les anniversaires le 29 février.",
    ],
    howToUse: [
      "Saisissez la date de naissance.",
      "Conservez la date du jour ou choisissez une autre date.",
      "Si l’anniversaire tombe un 29 février, choisissez comment il est compté les autres années.",
      "Consultez l’âge, les totaux et le prochain anniversaire.",
    ],
    formulas: [
      { title: "Années, mois et jours", expression: "Âge = le plus grand nombre de mois entiers entre la naissance et la date, puis les jours restants", explanation: "Les mois entiers sont comptés sur le calendrier. Lorsqu’un mois est plus court que le jour de naissance (par exemple le 31), le dernier jour de ce mois est retenu." },
      { title: "Total en jours", expression: "Jours = date − date de naissance", explanation: "Nombre de jours calendaires entre les deux dates, en comptant chaque 29 février." },
      { title: "Prochain anniversaire", expression: "Prochain anniversaire = date de naissance + (années révolues + 1) ans", explanation: "Un anniversaire le 29 février tombe le 28 février ou le 1er mars les années non bissextiles, selon votre choix." },
    ],
    examples: [
      {
        title: "Né le 15 mai 1990, âge au 14 octobre 2026",
        steps: [
          "15 mai 1990 → 15 mai 2026 : 36 ans",
          "15 mai → 15 septembre : 4 mois ; 15 septembre → 14 octobre : 29 jours",
          "Total : 13 301 jours ; prochain anniversaire le 15 mai 2027, dans 213 jours",
        ],
      },
      {
        title: "Né le 29 février 2000, âge au 28 février 2025",
        steps: [
          "2025 n’est pas une année bissextile : l’anniversaire est donc fixé au 28 février",
          "29 février 2000 → 28 février 2025 : 25 ans tout juste",
          "Avec la règle du 1er mars, l’âge serait de 24 ans, 11 mois et 30 jours",
        ],
      },
    ],
    assumptions: [
      "Les dates utilisent le calendrier grégorien, y compris pour les dates antérieures à son adoption dans certains pays.",
      "Les âges sont comptés en jours calendaires dans votre propre fuseau horaire ; l’heure de naissance et les décalages horaires entre les lieux ne sont pas pris en compte.",
      "Lorsqu’un mois ultérieur est plus court que le jour de naissance, son dernier jour compte comme date anniversaire mensuelle.",
    ],
    faqs: [
      { question: "Comment un anniversaire le 29 février est-il géré ?", answer: "Les années non bissextiles, vous pouvez le compter le 28 février ou le 1er mars. L’usage varie selon les pays et les finalités : vérifiez la règle qui s’applique à vous, par exemple pour l’âge légal." },
      { question: "Pourquoi les mois et les jours semblent-ils irréguliers ?", answer: "Les mois comptent de 28 à 31 jours : un même nombre de jours peut donc correspondre à un nombre de mois différent selon les dates." },
      { question: "Le fuseau horaire a-t-il une importance ?", answer: "Seulement autour de minuit. Le calculateur utilise des dates calendaires ; si vous êtes né tard le soir dans un autre fuseau horaire, votre date de naissance locale peut être différente." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    birth: "Date de naissance",
    asOf: "Âge au",
    asOfHelp: "Aujourd’hui par défaut. Modifiez-la pour connaître l’âge à n’importe quelle date.",
    leapDay: "Anniversaire du 29 février les autres années",
    leapDayOptions: { feb28: "Fêter le 28 février", mar1: "Fêter le 1er mars" },
    leapDayHelp: "Ne compte que si vous êtes né un 29 février. Les lois et les usages varient.",
    units: { years, months, weeks, days },
    ymd: "{years}, {months} et {days}",
    weeksDays: "{weeks} et {days}",
    orderError: "Cette date doit être identique ou postérieure à la date de naissance.",
    age: "Âge",
    ageCaption: "Date de naissance : {birth} ; âge au {asOf}.",
    totalMonths: "Total en mois",
    totalWeeks: "Total en semaines",
    totalDays: "Total en jours",
    nextBirthday: "Prochain anniversaire",
    daysToBirthday: "Jours avant le prochain anniversaire",
    bornOn: "Jour de la semaine de naissance",
    weekdays: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    birthdayToday: "Joyeux anniversaire ! C’est aujourd’hui l’anniversaire de la date de naissance.",
    note: "Les âges sont calculés en dates calendaires dans votre propre fuseau horaire ; l’heure de naissance n’est pas prise en compte.",
  },
};

export default fr;
