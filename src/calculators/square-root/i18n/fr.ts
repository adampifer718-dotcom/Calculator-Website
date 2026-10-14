import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SquareRootText } from "../text/en";

const fr: CalculatorTranslation<SquareRootText> = {
  content: {
    title: "Calculateur de racine carrée",
    shortTitle: "Racine carrée",
    summary: "Trouvez la racine carrée ou la racine cubique d’un nombre et vérifiez s’il s’agit d’un carré ou d’un cube parfait.",
    metaTitle: "Calculateur de racine carrée – Racines carrées et cubiques",
    metaDescription: "Calculez la racine carrée ou la racine cubique de n’importe quel nombre, vérifiez s’il s’agit d’un carré ou d’un cube parfait et contrôlez le résultat.",
    keywords: ["racine carrée", "calcul racine carrée", "racine cubique", "radical", "carré parfait", "racine"],
    intro: [
      "La racine carrée de x est le nombre qui, multiplié par lui-même, donne x. √144 = 12, car 12 × 12 = 144.",
      "Passez à la racine cubique pour trouver le nombre qui, multiplié trois fois par lui-même, donne x. Les racines cubiques des nombres négatifs sont acceptées.",
    ],
    howToUse: [
      "Choisissez racine carrée ou racine cubique.",
      "Saisissez le nombre.",
      "Consultez la racine et vérifiez si le nombre est un carré ou un cube parfait.",
    ],
    formulas: [
      { title: "Racine carrée", expression: "√x = x^(1/2)", explanation: "Définie pour x ≥ 0 dans les nombres réels." },
      { title: "Racine cubique", expression: "∛x = x^(1/3)", explanation: "Définie pour tout nombre réel." },
    ],
    examples: [
      {
        title: "Racine carrée de 144",
        steps: ["12 × 12 = 144", "√144 = 12"],
      },
      {
        title: "Racine carrée de 2",
        steps: ["2 n’est pas un carré parfait", "√2 ≈ 1,41421356237"],
      },
      {
        title: "Racine cubique de −27",
        steps: ["(−3) × (−3) × (−3) = −27", "∛−27 = −3"],
      },
    ],
    assumptions: [
      "Seules les racines réelles sont affichées ; les nombres négatifs n’ont pas de racine carrée réelle.",
      "Les résultats sont affichés avec 12 chiffres significatifs.",
    ],
    faqs: [
      { question: "Qu’est-ce qu’un carré parfait ?", answer: "Un nombre entier dont la racine carrée est aussi un nombre entier, comme 1, 4, 9, 16 ou 25." },
      { question: "Une racine carrée a-t-elle deux réponses ?", answer: "Tout nombre positif possède une racine carrée positive et une négative. Le calculateur affiche la racine positive (principale)." },
      { question: "Peut-on calculer la racine cubique d’un nombre négatif ?", answer: "Oui. ∛−8 = −2, car (−2)³ = −8." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    kind: "Racine",
    kinds: { square: "Racine carrée (√x)", cube: "Racine cubique (∛x)" },
    value: "Nombre (x)",
    negative: "Les nombres négatifs n’ont pas de racine carrée réelle.",
    squareRoot: "Racine carrée",
    cubeRoot: "Racine cubique",
    perfectSquare: "Carré parfait ?",
    perfectCube: "Cube parfait ?",
    yes: "Oui",
    no: "Non",
    checkSquare: "Vérification : racine²",
    checkCube: "Vérification : racine³",
    principalNote: "−{root} est aussi une racine carrée ; le calculateur affiche la racine principale (positive).",
  },
};

export default fr;
