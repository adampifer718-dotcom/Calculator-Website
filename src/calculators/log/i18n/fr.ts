import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LogText } from "../text/en";

const fr: CalculatorTranslation<LogText> = {
  content: {
    title: "Calculateur de logarithme",
    shortTitle: "Logarithme",
    summary: "Calculez des logarithmes en base 10, en base e (logarithme népérien), en base 2 ou dans toute autre base.",
    metaTitle: "Calculateur de logarithme – Log dans n’importe quelle base",
    metaDescription: "Calculez le logarithme décimal, le logarithme népérien (ln), le logarithme en base 2 ou un logarithme dans toute base, avec la formule de changement de base.",
    keywords: ["calcul logarithme", "logarithme népérien", "ln", "log base 10", "logarithme en base 2", "changement de base", "log"],
    intro: [
      "Un logarithme répond à la question : à quelle puissance faut-il élever la base pour obtenir ce nombre ? log₁₀(1 000) = 3, car 10³ = 1 000.",
      "Choisissez une base courante ou saisissez la vôtre. Les logarithmes népérien, décimal et binaire sont affichés en complément.",
    ],
    howToUse: [
      "Saisissez un nombre x positif.",
      "Choisissez la base, ou sélectionnez Autre base et saisissez-la.",
      "Consultez le logarithme ainsi que les valeurs de ln, log₁₀ et log₂.",
    ],
    formulas: [
      { title: "Définition", expression: "log_b(x) = y  signifie  bʸ = x", explanation: "Le nombre et la base doivent être positifs, et la base ne peut pas être égale à 1." },
      { title: "Changement de base", expression: "log_b(x) = ln(x) ÷ ln(b)", explanation: "Tout logarithme peut se calculer à partir de logarithmes népériens." },
    ],
    examples: [
      {
        title: "log₁₀ de 1 000",
        steps: ["10³ = 1 000", "Donc log₁₀(1 000) = 3"],
      },
      {
        title: "log₂ de 8",
        steps: ["2³ = 8", "Donc log₂(8) = 3"],
      },
      {
        title: "Logarithme en base 3 de 81",
        steps: ["ln(81) ÷ ln(3) = 4,394 ÷ 1,099", "= 4, car 3⁴ = 81"],
      },
    ],
    assumptions: [
      "Les logarithmes ne sont définis que pour des nombres positifs et des bases positives différentes de 1.",
      "Les résultats sont affichés avec 12 chiffres significatifs.",
    ],
    faqs: [
      { question: "Quelle est la différence entre log et ln ?", answer: "log désigne généralement la base 10, et ln la base e (environ 2,71828), c’est-à-dire le logarithme népérien." },
      { question: "Pourquoi ne peut-on pas calculer le logarithme d’un nombre négatif ?", answer: "Aucune puissance réelle d’une base positive ne donne un nombre négatif ou nul : le logarithme n’est donc pas défini dans les nombres réels." },
      { question: "À quoi sert le logarithme en base 2 ?", answer: "Il compte les doublements et apparaît en informatique, par exemple pour déterminer le nombre de bits nécessaires pour représenter une valeur." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    value: "Nombre (x)",
    base: "Base",
    bases: { ten: "10 (logarithme décimal)", e: "e (logarithme népérien, ln)", two: "2 (logarithme binaire)", custom: "Autre base" },
    customBase: "Base personnalisée (b)",
    baseOne: "La base ne peut pas être égale à 1.",
    primaryNatural: "Logarithme népérien de x",
    primaryBase: "Logarithme en base {base} de x",
    caption: "{base} élevé à cette puissance donne {value}.",
    ln: "Logarithme népérien (ln x)",
    log10: "Logarithme décimal (log₁₀ x)",
    log2: "Logarithme binaire (log₂ x)",
  },
};

export default fr;
