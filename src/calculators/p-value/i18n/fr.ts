import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PValueText } from "../text/en";

const fr: CalculatorTranslation<PValueText> = {
  content: {
    title: "Calculateur de valeur p",
    shortTitle: "Valeur p",
    summary: "Obtenez la valeur p d’un score z ou d’un score t pour un test bilatéral, unilatéral à gauche ou unilatéral à droite.",
    metaTitle: "Calculateur de valeur p – À partir d’un score z ou t",
    metaDescription:
      "Calculez la valeur p à partir d’un score z ou d’un score t avec ses degrés de liberté, pour des tests d’hypothèse bilatéraux ou unilatéraux à gauche ou à droite.",
    keywords: ["valeur p", "p-value", "calcul valeur p", "score z", "test t de Student", "test d’hypothèse", "seuil de significativité", "statistiques"],
    intro: [
      "Une valeur p mesure à quel point le résultat d’un test serait surprenant si l’hypothèse nulle était vraie. Une petite valeur p suggère que les données sont peu probables sous l’hypothèse nulle.",
      "Saisissez la statistique de test issue d’un test z ou d’un test t et choisissez le sens de votre hypothèse alternative.",
    ],
    howToUse: [
      "Choisissez un score z ou un score t.",
      "Saisissez la statistique et, pour un score t, les degrés de liberté.",
      "Choisissez un test bilatéral, unilatéral à gauche ou unilatéral à droite.",
      "Comparez la valeur p à votre seuil de signification, par exemple 0,05.",
    ],
    formulas: [
      { title: "Unilatéral à gauche", expression: "p = P(T ≤ t)", explanation: "La probabilité d’obtenir une valeur au moins aussi basse que la statistique." },
      { title: "Unilatéral à droite", expression: "p = P(T ≥ t)", explanation: "La probabilité d’obtenir une valeur au moins aussi élevée." },
      { title: "Bilatéral", expression: "p = 2 × P(T ≥ |t|)", explanation: "Prend en compte les valeurs extrêmes dans les deux sens." },
    ],
    examples: [
      { title: "z = 1,96, bilatéral", steps: ["P(Z ≥ 1,96) ≈ 0,025", "p = 2 × 0,025 ≈ 0,05"] },
      { title: "z = −1,645, unilatéral à gauche", steps: ["P(Z ≤ −1,645)", "≈ 0,05"] },
    ],
    assumptions: [
      "Utilise la loi normale centrée réduite pour z et la loi de Student pour t.",
      "La statistique doit provenir d’un test dont les conditions d’application sont respectées.",
      "Affichage avec 6 chiffres significatifs ; les très petites valeurs passent en notation scientifique.",
    ],
    faqs: [
      {
        question: "Qu’est-ce qu’une bonne valeur p ?",
        answer: "Il n’existe pas de seuil universel. Le seuil de 0,05 est courant : il signifie que des résultats aussi extrêmes se produiraient moins de 5 % du temps si l’hypothèse nulle était vraie.",
      },
      {
        question: "Faut-il utiliser un score z ou un score t ?",
        answer: "Utilisez t lorsque l’écart-type de la population est inconnu et estimé à partir de l’échantillon ; utilisez z lorsqu’il est connu ou que l’échantillon est grand.",
      },
      {
        question: "Quelle est la différence entre un test unilatéral et un test bilatéral ?",
        answer: "Un test unilatéral recherche un effet dans un seul sens ; un test bilatéral prend en compte les deux sens.",
      },
    ],
    sourcesUsedFor: ["Définitions de la loi normale et de la loi de Student, et valeurs critiques utilisées pour vérifier les résultats."],
  },
  text: {
    distribution: "Statistique de test",
    distributions: { z: "Score z (loi normale)", t: "Score t (loi de Student)" },
    statistic: "Valeur de la statistique",
    df: "Degrés de liberté",
    tail: "Hypothèse alternative",
    tails: { two: "Bilatéral (≠)", left: "Unilatéral à gauche (<)", right: "Unilatéral à droite (>)" },
    pValue: "Valeur p",
    sig05: "Significatif à α = 0,05 ?",
    sig01: "Significatif à α = 0,01 ?",
    yes05: "Oui (p < 0,05)",
    no05: "Non (p ≥ 0,05)",
    yes01: "Oui (p < 0,01)",
    no01: "Non (p ≥ 0,01)",
    note: "Une valeur p est la probabilité d’obtenir un résultat au moins aussi extrême si l’hypothèse nulle était vraie. Ce n’est pas la probabilité que l’hypothèse nulle soit vraie.",
  },
};

export default fr;
