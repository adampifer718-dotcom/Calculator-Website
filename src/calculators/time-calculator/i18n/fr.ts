import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TimeCalculatorText } from "../text/en";

const fr: CalculatorTranslation<TimeCalculatorText> = {
  content: {
    title: "Calculateur de temps",
    shortTitle: "Temps",
    summary: "Additionnez ou soustrayez deux durées exprimées en jours, heures, minutes et secondes, et obtenez le résultat normalisé ainsi que les totaux en heures, minutes et secondes.",
    metaTitle: "Calculateur de temps – Additionner ou soustraire des heures",
    metaDescription:
      "Additionnez ou soustrayez des durées en jours, heures, minutes et secondes. Obtenez un résultat normalisé et le total en heures décimales, minutes et secondes.",
    keywords: ["calcul de temps", "additionner des heures", "soustraire des heures", "calcul de durée", "heures minutes secondes", "total d’heures", "somme de durées", "heures décimales"],
    intro: [
      "Additionner des durées à la main est peu pratique, car le temps ne fonctionne pas en base dix : 60 secondes font une minute, 60 minutes une heure et 24 heures un jour. Ce calculateur fait les retenues à votre place.",
      "Saisissez deux durées, choisissez de les additionner ou de les soustraire, et lisez le résultat en jours, heures, minutes et secondes, ainsi que la même quantité exprimée en un seul total d’heures, de minutes ou de secondes.",
    ],
    howToUse: [
      "Saisissez la première durée. Ne remplissez que les parties utiles et laissez les autres à 0.",
      "Choisissez Additionner ou Soustraire.",
      "Saisissez la seconde durée.",
      "Lisez le résultat normalisé. Les totaux affichés en dessous sont pratiques pour les feuilles de temps et les tableurs qui demandent des heures décimales.",
    ],
    formulas: [
      { title: "Durée en secondes", expression: "T = jours × 86 400 + heures × 3 600 + minutes × 60 + secondes", explanation: "Chaque durée est d’abord convertie en secondes." },
      { title: "Résultat", expression: "R = T₁ + T₂   ou   R = T₁ − T₂", explanation: "Un R négatif signifie que la seconde durée est plus longue que la première." },
      {
        title: "Normalisation",
        expression: "jours = ⌊|R| ÷ 86 400⌋, heures = ⌊reste ÷ 3 600⌋, minutes = ⌊reste ÷ 60⌋, secondes = ce qui reste",
        explanation: "Le reste de chaque étape est reporté sur l’unité immédiatement inférieure.",
      },
    ],
    examples: [
      {
        title: "Deux séances de travail dans une même journée",
        steps: ["7 h 45 min = 27 900 s et 2 h 30 min = 9 000 s", "27 900 + 9 000 = 36 900 s", "36 900 s = 10 heures et 900 s = 10 heures, 15 minutes (10,25 heures)"],
      },
      {
        title: "Temps restant sur une tâche de 3 jours et 4 heures après 1 jour et 20,5 heures",
        steps: ["3 j 4 h = 273 600 s ; 1 j 20 h 30 min = 160 200 s", "273 600 − 160 200 = 113 400 s", "113 400 s = 1 jour (86 400 s) + 27 000 s = 1 jour, 7 heures, 30 minutes"],
      },
      {
        title: "Addition de deux temps au tour",
        steps: ["48 min 37 s = 2 917 s et 51 min 52 s = 3 112 s", "2 917 + 3 112 = 6 029 s", "6 029 s = 1 heure (3 600 s) + 2 429 s = 1 heure, 40 minutes, 29 secondes"],
      },
    ],
    assumptions: [
      "Chaque jour compte exactement 24 heures, chaque heure 60 minutes et chaque minute 60 secondes. Les secondes intercalaires et les changements d’heure sont ignorés.",
      "Cet outil travaille sur des durées, pas sur des heures d’horloge ni des dates. Pour compter les jours entre deux dates, utilisez le Calculateur de durée entre deux dates.",
      "Les fractions de seconde sont conservées à la milliseconde près.",
    ],
    faqs: [
      {
        question: "Comment convertir des minutes en heures décimales ?",
        answer: "Divisez les minutes par 60. Par exemple, 45 minutes font 45 ÷ 60 = 0,75 heure : 7 heures 45 minutes font donc 7,75 heures. Le calculateur affiche ce total pour vous.",
      },
      {
        question: "Puis-je saisir plus de 60 minutes ?",
        answer: "Oui. Saisissez par exemple 135 minutes : le résultat est reporté en 2 heures, 15 minutes.",
      },
      {
        question: "Que signifie un résultat négatif ?",
        answer: "Lorsque vous soustrayez une durée plus longue d’une durée plus courte, la différence est inférieure à zéro. Le résultat est affiché avec un signe moins pour que vous voyiez de combien la seconde durée est plus longue.",
      },
    ],
    sourcesUsedFor: ["La minute (60 s), l’heure (3 600 s) et le jour (86 400 s) comme unités en usage avec le SI."],
  },
  text: {
    fieldLabels: {
      first: { days: "Jours (première durée)", hours: "Heures (première durée)", minutes: "Minutes (première durée)", seconds: "Secondes (première durée)" },
      second: { days: "Jours (seconde durée)", hours: "Heures (seconde durée)", minutes: "Minutes (seconde durée)", seconds: "Secondes (seconde durée)" },
    },
    partsHelp: "Laissez une partie à 0 si vous n’en avez pas besoin. Les valeurs supérieures à 24 heures, 60 minutes ou 60 secondes sont acceptées et reportées.",
    operation: "Opération",
    operations: { add: "Additionner (+)", subtract: "Soustraire (−)" },
    operationHelp: "La soustraction retire la seconde durée de la première. Le résultat est négatif lorsque la seconde est plus longue.",
    result: "Résultat",
    caption: "{first} {op} {second}.",
    opSymbols: { add: "+", subtract: "−" },
    units: {
      days: { zero: "{n} jour", one: "{n} jour", two: "{n} jours", few: "{n} jours", many: "{n} de jours", other: "{n} jours" },
      hours: { zero: "{n} heure", one: "{n} heure", two: "{n} heures", few: "{n} heures", many: "{n} d’heures", other: "{n} heures" },
      minutes: { zero: "{n} minute", one: "{n} minute", two: "{n} minutes", few: "{n} minutes", many: "{n} de minutes", other: "{n} minutes" },
      seconds: { zero: "{n} seconde", one: "{n} seconde", two: "{n} secondes", few: "{n} secondes", many: "{n} de secondes", other: "{n} secondes" },
    },
    separator: ", ",
    negative: "−{duration}",
    totalDays: "Total en jours",
    totalHours: "Total en heures",
    totalMinutes: "Total en minutes",
    totalSeconds: "Total en secondes",
    notes: {
      negative: "La seconde durée est plus longue que la première : le résultat est donc négatif.",
      days: "Un jour compte exactement 24 heures. Les changements d’heure et les secondes intercalaires ne sont pas pris en compte.",
      rounding: "Le résultat est arrondi au millième de seconde le plus proche.",
    },
  },
};

export default fr;
