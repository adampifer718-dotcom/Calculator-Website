import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SpeedDistanceTimeText } from "../text/en";

const fr: CalculatorTranslation<SpeedDistanceTimeText> = {
  content: {
    title: "Calculateur de vitesse, distance et temps",
    shortTitle: "Vitesse, distance, temps",
    summary: "Calculez la vitesse moyenne, la distance parcourue ou la durée du trajet à partir des deux autres valeurs.",
    metaTitle: "Calculateur de vitesse, distance et temps de trajet",
    metaDescription:
      "Calculez la vitesse moyenne, la distance ou le temps de trajet à partir des deux autres valeurs, en kilomètres et km/h ou en miles et mph, avec conversions.",
    keywords: ["calcul vitesse moyenne", "vitesse distance temps", "calcul temps de trajet", "calcul distance", "formule vitesse", "km/h", "conversion km/h en m/s"],
    intro: [
      "La vitesse, la distance et le temps sont liés par une relation simple : si vous en connaissez deux, vous pouvez trouver la troisième.",
      "Le calculateur fonctionne en kilomètres et km/h ou en miles et mph, et affiche les conversions.",
    ],
    howToUse: [
      "Choisissez la valeur que vous souhaitez trouver.",
      "Choisissez les unités métriques ou impériales.",
      "Saisissez les deux valeurs connues, en indiquant le temps en heures et en minutes.",
      "Lisez le résultat.",
    ],
    formulas: [
      {
        title: "La relation",
        expression: "vitesse = distance ÷ temps\ndistance = vitesse × temps\ntemps = distance ÷ vitesse",
        explanation: "Utilisez des unités cohérentes, par exemple des km et des heures pour obtenir des km/h.",
      },
    ],
    examples: [
      { title: "150 km en 2 h 30 min", steps: ["Temps = 2,5 h", "Vitesse = 150 ÷ 2,5 = 60 km/h"] },
      { title: "90 miles à 60 mph", steps: ["Temps = 90 ÷ 60 = 1,5 h", "= 1 h 30 min"] },
    ],
    assumptions: [
      "Donne la vitesse moyenne sur l’ensemble du trajet ; la vitesse réelle peut varier en cours de route.",
      "Les durées sont arrondies à la minute la plus proche à l’affichage.",
    ],
    faqs: [
      {
        question: "Comment calculer une vitesse moyenne ?",
        answer: "Divisez la distance totale par le temps total. 120 km parcourus en 1,5 heure correspondent à 80 km/h.",
      },
      { question: "Comment convertir des km/h en m/s ?", answer: "Divisez par 3,6. Ainsi, 72 km/h correspondent à 20 m/s." },
      {
        question: "La vitesse est-elle la même chose que la vélocité ?",
        answer: "La vélocité (vecteur vitesse) possède aussi une direction. Pour un trajet le long d’un itinéraire, c’est généralement la vitesse moyenne qui vous intéresse.",
      },
    ],
    sourcesUsedFor: ["Définition de la vitesse moyenne et du vecteur vitesse."],
  },
  text: {
    solve: "Rechercher",
    solveOptions: { speed: "Vitesse", distance: "Distance", time: "Temps" },
    units: "Unités",
    unitOptions: { metric: "Kilomètres et km/h", imperial: "Miles et mph" },
    distance: "Distance",
    speed: "Vitesse",
    hours: "Heures",
    minutes: "Minutes",
    timeZero: "Saisissez une durée supérieure à zéro.",
    distanceOut: "Distance",
    inKm: "En kilomètres",
    inMiles: "En miles",
    timeOut: "Temps",
    inHours: "En heures",
    speedOut: "Vitesse moyenne",
    inKmh: "En km/h",
    inMph: "En mph",
    inMps: "En mètres par seconde",
    hoursMinutes: "{h} h {m} min",
    hoursOnly: "{h} h",
    minutesOnly: "{m} min",
  },
};

export default fr;
