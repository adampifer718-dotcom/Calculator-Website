import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RaceTimePredictorText } from "../text/en";

const fr: CalculatorTranslation<RaceTimePredictorText> = {
  content: {
    title: "Calculateur de prédiction de temps de course",
    shortTitle: "Temps de course",
    summary: "Prédisez votre temps sur un mile, 5 km, 10 km, semi-marathon, marathon ou toute autre distance à partir d’une course récente, avec la formule d’endurance de Riegel.",
    metaTitle: "Calculateur de temps de course – Du 5 km au marathon (Riegel)",
    metaDescription:
      "Prédisez un temps de course et l’allure associée à partir d’un résultat récent avec la formule de Riegel, T₂ = T₁ × (D₂/D₁)^1,06, du 5 km au marathon.",
    keywords: ["prédiction temps de course", "prédiction marathon", "formule de Riegel", "prédiction semi-marathon", "5 km au marathon", "équivalence de course", "temps prévu", "course à pied"],
    intro: [
      "Si vous savez à quelle vitesse vous avez couru une course, vous pouvez estimer votre temps sur une autre. Les coureurs ralentissent un peu quand la distance augmente, et en 1981 l’ingénieur Peter Riegel a montré que les records du monde sur de nombreuses distances suivent une simple loi de puissance.",
      "Saisissez une course récente et votre temps, choisissez la distance visée, et cet outil prédit votre temps et votre allure avec la formule de Riegel. Il affiche aussi les prédictions pour toutes les distances classiques, du mile au marathon.",
    ],
    howToUse: [
      "Choisissez la distance d’une course récente courue à fond, ou saisissez une distance personnalisée en km ou en miles.",
      "Saisissez votre temps en heures, minutes et secondes.",
      "Choisissez la distance à prédire.",
      "Laissez l’exposant de fatigue à 1,06, sauf si vous savez que vous faiblissez davantage (essayez 1,08) ou moins sur les longues distances.",
      "Lisez le temps prévu, l’allure nécessaire et le tableau des prédictions pour les autres distances.",
    ],
    formulas: [
      { title: "Formule de Riegel", expression: "T₂ = T₁ × (D₂ ÷ D₁)^k", explanation: "T₁ est votre temps sur la distance D₁, et T₂ le temps prévu sur D₂. Avec k = 1,06, doubler la distance multiplie le temps par 2^1,06 ≈ 2,085." },
      { title: "Allure", expression: "allure au km = T₂ ÷ D₂ (km)\nallure au mile = allure au km × 1,609344", explanation: "L’allure moyenne nécessaire pour réaliser le temps prévu." },
    ],
    examples: [
      { title: "D’un 10 km en 50:00 au semi-marathon", steps: ["T₁ = 3 000 s, D₂ ÷ D₁ = 21,0975 ÷ 10 = 2,10975", "T₂ = 3 000 × 2,10975^1,06 ≈ 6 619 s", "6 619 s = 1:50:19, soit une allure d’environ 5:14 par km"] },
      { title: "D’un 5 km en 22:30 au marathon", steps: ["T₁ = 1 350 s, D₂ ÷ D₁ = 42,195 ÷ 5 = 8,439", "T₂ = 1 350 × 8,439^1,06 ≈ 12 948 s = 3:35:48", "Le marathon fait plus de quatre fois la distance du 5 km : considérez ce résultat comme optimiste"] },
      { title: "D’un semi-marathon en 1:45:00 à un 10 km, avec k = 1,08", steps: ["T₁ = 6 300 s, D₂ ÷ D₁ = 10 ÷ 21,0975 ≈ 0,474", "T₂ = 6 300 × 0,474^1,08 ≈ 2 813 s", "2 813 s = 0:46:53"] },
    ],
    assumptions: [
      "Vous êtes aussi bien entraîné pour la distance visée. Un bon 5 km ne signifie pas que vous avez l’endurance d’un marathon sans suffisamment de sorties longues.",
      "Les prédictions sont moins précises pour des distances plus de quatre fois plus longues ou plus courtes que votre course, et pour des épreuves de plus de 4 heures environ, où elles ont tendance à être trop rapides.",
      "Les deux courses se déroulent sur des parcours plats et comparables, par une météo semblable. Le dénivelé, la chaleur, le vent et l’altitude ne sont pas pris en compte.",
    ],
    faqs: [
      { question: "Pourquoi l’exposant vaut-il 1,06 ?", answer: "Riegel a ajusté l’exposant sur les records du monde et a trouvé environ 1,06 pour la course à pied. Une valeur de 1 signifierait que vous pouvez tenir la même allure sur n’importe quelle distance ; toute valeur supérieure à 1 signifie que vous ralentissez quand la course s’allonge." },
      { question: "Quelle course utiliser comme référence ?", answer: "Utilisez une course récente courue à fond, idéalement d’une distance proche de l’objectif. Un semi-marathon prédit mieux un marathon qu’un mile." },
      { question: "Pourquoi mon marathon réel est-il plus lent que prévu ?", answer: "Le marathon dépend beaucoup de l’entraînement en endurance, du ravitaillement et de la gestion de l’allure, ce qu’une course courte ne teste pas. Beaucoup de coureurs sont plus lents que ne le prévoit la formule ; certains entraîneurs utilisent donc un exposant plus élevé, de 1,07 à 1,08, pour le marathon." },
    ],
    sourcesUsedFor: ["L’équation d’endurance T = a·D^b reliant le temps et la distance, avec un exposant d’environ 1,06 pour la course à pied."],
  },
  text: {
    knownRace: "Distance de la course récente",
    targetRace: "Distance à prédire",
    races: { mile: "1 mile", "5k": "5 km", "10k": "10 km", half: "Semi-marathon (21,0975 km)", marathon: "Marathon (42,195 km)", custom: "Distance personnalisée" },
    knownDistance: "Distance de la course récente",
    targetDistance: "Distance à prédire",
    unit: "Unité de distance",
    units: { km: "Kilomètres (km)", mi: "Miles (mi)" },
    hours: "Temps réalisé : heures",
    minutes: "Minutes",
    seconds: "Secondes",
    exponent: "Exposant de fatigue (k)",
    exponentHelp: "La valeur de Riegel pour la course à pied est 1,06. Une valeur plus élevée suppose que vous ralentissez davantage quand la distance augmente.",
    timeZero: "Saisissez un temps supérieur à zéro.",
    predicted: "Temps prévu",
    caption: "{time} sur {known} → {target}, k = {k}",
    perKm: "Allure prévue au kilomètre",
    perMile: "Allure prévue au mile",
    speed: "Vitesse moyenne",
    tableCaption: "Prédictions pour les distances classiques",
    columns: { distance: "Distance", time: "Temps prévu", perKm: "Allure /km", perMile: "Allure /mi" },
    tableRaces: { mile: "1 mile", "5k": "5 km", "10k": "10 km", half: "Semi-marathon", marathon: "Marathon" },
    notes: {
      far: "La distance visée est plus de quatre fois plus longue ou plus courte que votre course : la prédiction est donc moins fiable.",
      long: "Le temps prévu dépasse environ 4 heures, une durée pour laquelle la formule a tendance à être optimiste.",
      same: "Les deux distances sont identiques : la prédiction est donc égale à votre temps.",
      training: "Suppose que vous êtes aussi bien entraîné pour la distance visée, par exemple avec suffisamment de sorties longues pour un marathon.",
    },
  },
};

export default fr;
