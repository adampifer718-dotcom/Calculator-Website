import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ExponentText } from "../text/en";

const fr: CalculatorTranslation<ExponentText> = {
  content: {
    title: "Calculateur de puissances",
    shortTitle: "Puissances",
    summary: "Élevez n’importe quel nombre à une puissance, y compris avec des exposants négatifs ou fractionnaires.",
    metaTitle: "Calculateur de puissances – Exposants positifs et négatifs",
    metaDescription: "Calculez un nombre élevé à n’importe quelle puissance, exposants négatifs ou fractionnaires compris, avec les très grands résultats en notation scientifique.",
    keywords: ["calcul puissance", "exposant", "élever à la puissance", "au carré", "au cube", "exposant négatif", "exposant fractionnaire"],
    intro: [
      "Un exposant indique combien de fois multiplier une base par elle-même. 2¹⁰ signifie dix 2 multipliés entre eux, soit 1 024.",
      "Les exposants négatifs donnent des inverses, et les exposants fractionnaires des racines.",
    ],
    howToUse: [
      "Saisissez la base a.",
      "Saisissez l’exposant b. Les valeurs décimales et négatives sont acceptées.",
      "Consultez aᵇ. Les résultats très grands ou très petits passent en notation scientifique.",
    ],
    formulas: [
      { title: "Exposant positif", expression: "aᵇ = a × a × … × a (b fois)", explanation: "Pour les exposants entiers." },
      { title: "Exposant négatif", expression: "a⁻ᵇ = 1 ÷ aᵇ", explanation: "La base ne peut pas être 0." },
      { title: "Exposant fractionnaire", expression: "a^(1/n) = ⁿ√a", explanation: "Par exemple, 9^0,5 = √9 = 3." },
    ],
    examples: [
      {
        title: "2 puissance 10",
        steps: ["2 × 2 × … (10 fois)", "= 1 024"],
      },
      {
        title: "5 puissance −2",
        steps: ["1 ÷ 5²", "= 1 ÷ 25 = 0,04"],
      },
      {
        title: "9 puissance 0,5",
        steps: ["9^0,5 = √9", "= 3"],
      },
    ],
    assumptions: [
      "Les résultats sont des nombres réels ; une base négative nécessite un exposant entier.",
      "Les résultats sont affichés avec 12 chiffres significatifs.",
    ],
    faqs: [
      { question: "Que vaut un nombre à la puissance 0 ?", answer: "Tout nombre non nul élevé à la puissance 0 vaut 1." },
      { question: "Que signifie un exposant négatif ?", answer: "Il désigne l’inverse : 2⁻³ = 1 ÷ 2³ = 0,125." },
      { question: "Comment fonctionnent les exposants fractionnaires ?", answer: "Le dénominateur correspond à une racine : 8^(1/3) est la racine cubique de 8, soit 2." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    base: "Base (a)",
    exponent: "Exposant (b)",
    zeroNegative: "0 élevé à une puissance négative n’est pas défini.",
    negativeBase: "Une base négative nécessite un exposant entier pour obtenir un résultat réel.",
    tooLarge: "Trop grand pour être affiché",
    eNotation: "Notation e",
    negativeNote: "Un exposant négatif signifie 1 ÷ {base}^{exponent}.",
    positiveNote: "{base} multiplié par lui-même {exponent} fois.",
  },
};

export default fr;
