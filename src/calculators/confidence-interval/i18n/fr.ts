import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ConfidenceIntervalText } from "../text/en";

const fr: CalculatorTranslation<ConfidenceIntervalText> = {
  content: {
    title: "Calculateur d’intervalle de confiance",
    shortTitle: "Intervalle de confiance",
    summary: "Calculez un intervalle de confiance pour une moyenne à partir de la moyenne, de l’écart-type et de la taille de l’échantillon.",
    metaTitle: "Calculateur d’intervalle de confiance – Pour une moyenne",
    metaDescription:
      "Calculez un intervalle de confiance pour une moyenne à partir de la moyenne, de l’écart-type, de la taille de l’échantillon et du niveau de confiance, avec marge d’erreur et z*.",
    keywords: ["intervalle de confiance", "calcul intervalle de confiance", "marge d’erreur", "erreur type", "niveau de confiance 95 %", "statistiques", "moyenne"],
    intro: [
      "Un intervalle de confiance donne une plage de valeurs plausibles pour la moyenne d’une population. Un intervalle à 95 % est construit de sorte que 95 % des intervalles obtenus de cette façon contiennent la vraie moyenne.",
      "Saisissez la moyenne de l’échantillon, l’écart-type, la taille de l’échantillon et le niveau de confiance.",
    ],
    howToUse: [
      "Saisissez la moyenne de l’échantillon.",
      "Saisissez l’écart-type et la taille de l’échantillon.",
      "Choisissez le niveau de confiance, par exemple 95 %.",
      "Consultez l’intervalle, la marge d’erreur et la valeur critique.",
    ],
    formulas: [
      { title: "Intervalle de confiance", expression: "IC = x̄ ± z* × σ ÷ √n", explanation: "z* est la valeur critique associée au niveau de confiance." },
      { title: "Valeur critique", expression: "z* = Φ⁻¹(1 − (1 − niveau) ÷ 2)", explanation: "Pour 95 %, z* ≈ 1,96 ; pour 99 %, z* ≈ 2,576." },
    ],
    examples: [
      {
        title: "Moyenne 100, σ 15, n 36, 95 %",
        steps: ["ET = 15 ÷ √36 = 2,5", "ME = 1,96 × 2,5 ≈ 4,9", "IC ≈ 95,1 à 104,9"],
      },
      {
        title: "Moyenne 50, σ 8, n 64, 99 %",
        steps: ["ET = 8 ÷ √64 = 1", "ME = 2,576 × 1", "IC ≈ 47,42 à 52,58"],
      },
    ],
    assumptions: [
      "Utilise la loi normale (z) : adaptée lorsque σ est connu ou que l’échantillon est grand (n ≥ 30). Les petits échantillons dont σ est estimé nécessitent un intervalle t, plus large.",
      "Suppose un échantillon aléatoire d’observations indépendantes.",
    ],
    faqs: [
      {
        question: "Que signifie un niveau de confiance de 95 % ?",
        answer: "Si vous répétiez l’échantillonnage de nombreuses fois, environ 95 % des intervalles contiendraient la vraie moyenne. Cela ne signifie pas qu’un intervalle donné a 95 % de chances de la contenir.",
      },
      {
        question: "Comment réduire la largeur de l’intervalle ?",
        answer: "Augmentez la taille de l’échantillon ou acceptez un niveau de confiance plus faible.",
      },
      { question: "Qu’est-ce que la marge d’erreur ?", answer: "La moitié de la largeur de l’intervalle : z* × σ ÷ √n." },
    ],
    sourcesUsedFor: ["Intervalle de confiance pour une moyenne et valeurs critiques de z."],
  },
  text: {
    mean: "Moyenne de l’échantillon (x̄)",
    sd: "Écart-type (σ)",
    n: "Taille de l’échantillon (n)",
    level: "Niveau de confiance",
    primary: "Intervalle de confiance à {level}",
    interval: "{lower} à {upper}",
    margin: "Marge d’erreur",
    standardError: "Erreur type",
    critical: "Valeur critique (z*)",
    note: "Utilise la loi normale (z), ce qui suppose un écart-type de la population connu ou un grand échantillon (n ≥ 30).",
  },
};

export default fr;
