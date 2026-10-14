import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SlopeText } from "../text/en";

const fr: CalculatorTranslation<SlopeText> = {
  content: {
    title: "Calculateur de pente",
    shortTitle: "Pente",
    summary: "Calculez la pente entre deux points, ainsi que l'équation de la droite, l'ordonnée à l'origine, l'angle et la distance.",
    metaTitle: "Calculateur de pente – Pente entre deux points",
    metaDescription:
      "Calculez la pente d'une droite passant par deux points, avec son équation y = mx + b, l'ordonnée à l'origine, l'angle et la distance entre les points.",
    keywords: ["pente d'une droite", "coefficient directeur", "calcul pente", "équation de droite", "y = mx + b", "deux points", "ordonnée à l'origine"],
    intro: [
      "La pente mesure l'inclinaison d'une droite : de combien y varie pour chaque unité de x. On la décrit souvent comme le rapport entre la variation verticale et la variation horizontale.",
      "Saisissez deux points et le calculateur donne aussi l'équation de la droite qui les relie.",
    ],
    howToUse: [
      "Saisissez les coordonnées du premier point (x₁ ; y₁).",
      "Saisissez le second point (x₂ ; y₂).",
      "Consultez la pente, l'équation, l'ordonnée à l'origine, l'angle et la distance.",
    ],
    formulas: [
      { title: "Pente", expression: "m = (y₂ − y₁) ÷ (x₂ − x₁)", explanation: "Non définie lorsque x₁ = x₂ (droite verticale)." },
      {
        title: "Équation de la droite",
        expression: "y = mx + b, où b = y₁ − m × x₁",
        explanation: "b est le point où la droite coupe l'axe des ordonnées.",
      },
      {
        title: "Angle et distance",
        expression: "θ = arctan(m)\nd = √((x₂ − x₁)² + (y₂ − y₁)²)",
        explanation: "L'angle est mesuré à partir du sens positif de l'axe des abscisses.",
      },
    ],
    examples: [
      {
        title: "Points (1 ; 3) et (4 ; 9)",
        steps: ["m = (9 − 3) ÷ (4 − 1) = 6 ÷ 3 = 2", "b = 3 − 2 × 1 = 1, donc y = 2x + 1"],
      },
      {
        title: "Points (−2 ; 5) et (3 ; −5)",
        steps: ["m = (−5 − 5) ÷ (3 − (−2)) = −10 ÷ 5", "= −2"],
      },
    ],
    assumptions: [
      "Les droites verticales (x₁ = x₂) ont une pente non définie et sont refusées.",
      "Les résultats sont affichés avec 6 décimales.",
    ],
    faqs: [
      { question: "Que signifie une pente négative ?", answer: "La droite descend de gauche à droite." },
      { question: "Quelle est la pente d'une droite horizontale ?", answer: "0, car y ne varie pas." },
      {
        question: "Quel est le lien entre la pente et l'angle ?",
        answer: "La pente est la tangente de l'angle que forme la droite avec l'axe des abscisses. Une pente de 1 correspond à 45°.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    vertical: "x₂ doit être différent de x₁. Une droite verticale a une pente non définie.",
    slope: "Pente (m)",
    caption: "Variation verticale de {rise} pour une variation horizontale de {run}.",
    equation: "Équation de la droite",
    intercept: "Ordonnée à l'origine (b)",
    angle: "Angle avec l'axe des abscisses",
    degrees: "degrés",
    distance: "Distance entre les points",
  },
};

export default fr;
