import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RunningPaceText } from "../text/en";

const fr: CalculatorTranslation<RunningPaceText> = {
  content: {
    title: "Calculateur d’allure de course",
    shortTitle: "Allure de course",
    summary: "Calculez votre allure de course au kilomètre et au mile, ainsi que votre vitesse moyenne, à partir de la distance et du temps final.",
    metaTitle: "Calculateur d’allure de course – Allure au km et au mile",
    metaDescription:
      "Calculez votre allure au kilomètre et au mile et votre vitesse moyenne à partir de votre temps pour un 5 km, un 10 km, un semi-marathon, un marathon ou une distance libre.",
    keywords: ["calcul allure course", "allure au km", "min/km", "allure marathon", "allure semi-marathon", "5 km", "10 km", "course à pied"],
    intro: [
      "L’allure est le temps nécessaire pour parcourir un kilomètre ou un mile. C’est ainsi que la plupart des coureurs préparent et comparent leurs courses.",
      "Choisissez une distance de course ou saisissez la vôtre, ajoutez votre temps final, et consultez votre allure et votre vitesse.",
    ],
    howToUse: [
      "Choisissez une distance de course, ou « Distance personnalisée » et saisissez-la.",
      "Saisissez votre temps final en heures, minutes et secondes.",
      "Consultez votre allure au km et au mile, ainsi que votre vitesse moyenne.",
    ],
    formulas: [
      { title: "Allure", expression: "allure = temps ÷ distance", explanation: "Affichée en minutes:secondes par km ou par mile." },
      { title: "Vitesse", expression: "vitesse = distance ÷ temps", explanation: "Affichée en km/h et en mph." },
    ],
    examples: [
      { title: "10 km en 50 minutes", steps: ["3 000 s ÷ 10 km = 300 s", "= 5:00 par km"] },
      { title: "Marathon en 3 h 30 min", steps: ["12 600 s ÷ 42,195 km ≈ 298,6 s", "≈ 4:59 par km"] },
    ],
    assumptions: [
      "Suppose une allure moyenne régulière sur toute la distance ; les temps intermédiaires varient selon le terrain et l’effort.",
      "Les allures sont arrondies à la seconde près.",
      "Distances de course : semi-marathon 21,0975 km, marathon 42,195 km.",
    ],
    faqs: [
      {
        question: "Qu’est-ce qu’une bonne allure sur 5 km ?",
        answer: "Cela dépend de l’âge, de l’expérience et du terrain. Suivez l’évolution de votre propre allure plutôt que de vous comparer aux autres.",
      },
      {
        question: "Comment convertir une allure au km en allure au mile ?",
        answer: "Multipliez par 1,609344. Une allure de 5:00/km correspond à environ 8:03/mi.",
      },
      {
        question: "Comment déterminer un temps cible ?",
        answer: "Choisissez une allure cible et multipliez-la par la distance, ou ajustez ici le temps jusqu’à ce que l’allure corresponde à votre objectif.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    race: "Distance",
    races: { "5k": "5 km", "10k": "10 km", half: "Semi-marathon", marathon: "Marathon", custom: "Distance personnalisée" },
    distance: "Distance personnalisée",
    unit: "Unité",
    units: { km: "Kilomètres", mi: "Miles" },
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes",
    timeZero: "Saisissez un temps final supérieur à zéro.",
    perKm: "Allure au kilomètre",
    caption: "Temps final de {time} sur {km} km.",
    perMile: "Allure au mile",
    speed: "Vitesse moyenne",
    speedMph: "Vitesse moyenne (mph)",
  },
};

export default fr;
