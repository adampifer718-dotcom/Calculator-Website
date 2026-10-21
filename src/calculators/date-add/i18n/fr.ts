import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DateAddText } from "../text/en";

const fr: CalculatorTranslation<DateAddText> = {
  content: {
    title: "Calculateur d’ajout ou de retrait de jours",
    shortTitle: "Ajouter ou retirer des jours",
    summary: "Trouvez la date située un certain nombre d’années, de mois, de semaines et de jours avant ou après une date de départ, avec le jour de la semaine et le nombre de jours calendaires entre les deux.",
    metaTitle: "Calculateur d’ajout ou de retrait de jours – Date plus jours",
    metaDescription:
      "Ajoutez ou retirez des années, mois, semaines et jours à une date pour connaître la date résultante, son jour de la semaine et l’écart en jours calendaires.",
    keywords: ["ajouter des jours à une date", "soustraire des jours à une date", "calcul de date", "dans combien de jours", "date plus jours", "ajouter des mois à une date", "calcul d’échéance"],
    intro: [
      "Les échéances, préavis, garanties et dates limites s’expriment souvent sous la forme « 90 jours à compter du » ou « 6 mois après » une date. Ce calculateur trouve cette date pour vous, en avant ou en arrière.",
      "Il indique aussi le jour de la semaine et le nombre de jours calendaires qui séparent la date de départ du résultat, ce qui est utile lorsqu’une période est fixée en mois mais que vous avez besoin du nombre de jours.",
    ],
    howToUse: [
      "Choisissez la date de départ. Elle est réglée sur aujourd’hui au chargement de la page.",
      "Choisissez Ajouter pour avancer dans le temps ou Retirer pour reculer.",
      "Saisissez n’importe quelle combinaison d’années, de mois, de semaines et de jours. Laissez le reste à 0.",
      "Lisez la date obtenue avec son jour de la semaine et le nombre de jours entre les deux dates.",
    ],
    formulas: [
      {
        title: "Années et mois",
        expression: "date₁ = départ ± (12 × années + mois) mois",
        explanation: "Le mois change et le jour reste le même. Si ce jour n’existe pas dans le nouveau mois, le dernier jour du mois est utilisé.",
      },
      { title: "Semaines et jours", expression: "résultat = date₁ ± (7 × semaines + jours) jours", explanation: "Les jours entiers sont ensuite comptés sur le calendrier, en franchissant les fins de mois et d’année si nécessaire." },
      { title: "Jours d’écart", expression: "N = |résultat − départ| en jours calendaires", explanation: "La date de départ n’est pas comptée : un jour après un lundi, c’est mardi, et N = 1." },
    ],
    examples: [
      {
        title: "Un mois après le 31 janvier 2026",
        steps: ["Février 2026 compte 28 jours : le 31 février n’existe donc pas", "La date est ramenée au dernier jour de février : le 28 février 2026, un samedi", "Soit 28 jours calendaires après la date de départ"],
      },
      {
        title: "Un délai de 90 jours à partir du 15 octobre 2026",
        steps: ["Il reste 16 jours en octobre, puis 30 en novembre et 31 en décembre : 77 jours jusqu’au 31 décembre", "13 jours de plus mènent au 13 janvier 2027", "Le 13 janvier 2027 est un mercredi"],
      },
      {
        title: "Deux ans et demi avant le 15 août 2024",
        steps: ["2 ans et 6 mois = 30 mois", "30 mois avant août 2024, c’est février 2022, et le 15 existe dans tous les mois", "Le 15 février 2022 était un mardi, 912 jours calendaires plus tôt"],
      },
    ],
    assumptions: [
      "Les dates suivent le calendrier grégorien, y compris pour les années antérieures à son adoption dans un pays donné.",
      "Les années et les mois sont appliqués avant les semaines et les jours. Lorsque le jour de départ n’existe pas dans le mois cible, le dernier jour de ce mois est utilisé : le 31 mars moins 1 mois donne donc le 28 ou le 29 février.",
      "Tous les jours comptent, week-ends et jours fériés compris. Les règles de jours ouvrés applicables aux délais légaux ou contractuels peuvent être différentes.",
      "Les résultats sont limités aux années 1000 à 9999.",
    ],
    faqs: [
      {
        question: "Pourquoi ajouter un mois au 31 janvier donne-t-il le 28 février ?",
        answer: "Février n’a pas de 31e jour : le calculateur utilise donc le dernier jour de février au lieu de déborder sur mars. Cette règle de fin de mois est la convention courante pour les périodes mensuelles.",
      },
      {
        question: "Ajouter 1 mois revient-il à ajouter 30 jours ?",
        answer: "Non. Un mois est un mois calendaire, qui peut compter de 28 à 31 jours. Si vous avez besoin d’un nombre exact de jours, saisissez-le plutôt dans le champ Jours.",
      },
      {
        question: "Le décompte inclut-il la date de départ ?",
        answer: "Non. Le nombre de jours d’écart compte les jours franchis : la date de départ elle-même n’est donc pas incluse. Ajoutez 1 si vous voulez compter à la fois le premier et le dernier jour.",
      },
    ],
    sourcesUsedFor: ["La règle grégorienne des années bissextiles, utilisée pour la longueur des mois et le décompte des jours."],
  },
  text: {
    start: "Date de départ",
    startHelp: "Aujourd’hui par défaut.",
    operation: "Opération",
    operations: { add: "Ajouter", subtract: "Retirer" },
    years: "Années",
    months: "Mois",
    monthsHelp: "Les années et les mois sont appliqués en premier. Si le jour n’existe pas dans le nouveau mois, le dernier jour de ce mois est utilisé (31 janvier + 1 mois = 28 ou 29 février).",
    weeks: "Semaines",
    days: "Jours",
    errors: {
      outOfRange: "Le résultat sort de la plage de dates prise en charge ({min} à {max}). Utilisez une valeur plus petite.",
    },
    result: "Date obtenue",
    captionAdd: "{start} plus {amount}.",
    captionSubtract: "{start} moins {amount}.",
    units: {
      years: { zero: "{n} an", one: "{n} an", two: "{n} ans", few: "{n} ans", many: "{n} d’années", other: "{n} ans" },
      months: { zero: "{n} mois", one: "{n} mois", two: "{n} mois", few: "{n} mois", many: "{n} de mois", other: "{n} mois" },
      weeks: { zero: "{n} semaine", one: "{n} semaine", two: "{n} semaines", few: "{n} semaines", many: "{n} de semaines", other: "{n} semaines" },
      days: { zero: "{n} jour", one: "{n} jour", two: "{n} jours", few: "{n} jours", many: "{n} de jours", other: "{n} jours" },
    },
    separator: ", ",
    weekday: "Jour de la semaine",
    weekdayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    totalDays: "Jours calendaires entre les dates",
    inWeeks: "En semaines et jours",
    weeksDays: "{weeks} et {days}",
    isoDate: "Résultat au format ISO",
    notes: {
      clamped: "Le jour de départ n’existe pas dans le mois atteint : le dernier jour de ce mois a donc été utilisé.",
      calendar: "Les dates utilisent le calendrier grégorien, avec une année bissextile tous les 4 ans, sauf les années séculaires non divisibles par 400.",
    },
  },
};

export default fr;
