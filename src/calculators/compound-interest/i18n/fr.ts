import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CompoundInterestText } from "../text/en";

const fr: CalculatorTranslation<CompoundInterestText> = {
  content: {
    title: "Calculateur d'intérêts composés",
    shortTitle: "Intérêts composés",
    summary: "Découvrez comment un dépôt fructifie grâce aux intérêts composés, avec un tableau du solde année par année.",
    metaTitle: "Calculateur d'intérêts composés – Valeur future",
    metaDescription:
      "Calculez les intérêts composés et la valeur future d'un dépôt avec une capitalisation annuelle, trimestrielle, mensuelle ou quotidienne, et un tableau annuel du solde.",
    keywords: ["intérêts composés", "calcul intérêts composés", "valeur future", "épargne", "taux d'intérêt", "taux annuel effectif", "capitalisation"],
    intro: [
      "Avec les intérêts composés, les intérêts rapportent eux-mêmes des intérêts en plus du dépôt initial : la croissance s'accélère donc avec le temps.",
      "Saisissez un dépôt, un taux, une durée et une fréquence de capitalisation pour voir la valeur future, les intérêts gagnés et le solde de chaque année.",
    ],
    howToUse: [
      "Saisissez le dépôt initial.",
      "Saisissez le taux d'intérêt annuel et le nombre d'années.",
      "Choisissez la fréquence de capitalisation des intérêts.",
      "Consultez la valeur future, les intérêts gagnés et le taux annuel effectif.",
    ],
    formulas: [
      {
        title: "Valeur future",
        expression: "A = P × (1 + r ÷ n)^(n × t)",
        explanation: "P est le dépôt, r le taux annuel exprimé en décimal, n le nombre de périodes de capitalisation par an et t le nombre d'années.",
      },
      {
        title: "Taux annuel effectif",
        expression: "TAE = (1 + r ÷ n)ⁿ − 1",
        explanation: "Le taux équivalent avec une seule capitalisation par an, souvent appelé rendement annuel (APY).",
      },
    ],
    examples: [
      {
        title: "10 000 $US à 5 % capitalisés mensuellement pendant 10 ans",
        steps: ["A = 10 000 × (1 + 0,05 ÷ 12)^120", "≈ 16 470,09 $US"],
      },
      {
        title: "1 000 $US à 10 % capitalisés annuellement pendant 2 ans",
        steps: ["A = 1 000 × 1,1²", "= 1 210 $US"],
      },
    ],
    assumptions: [
      "Le taux reste fixe et il n'y a ni dépôt ni retrait supplémentaire, ni impôts, ni frais.",
      "Les taux passés ou annoncés ne garantissent pas les rendements futurs. Ceci ne constitue pas un conseil financier.",
      "Le choix d'une devise ne modifie que la mise en forme.",
    ],
    faqs: [
      {
        question: "Quelle est la différence entre intérêts simples et intérêts composés ?",
        answer: "Les intérêts simples ne portent que sur le dépôt initial. Les intérêts composés portent aussi sur les intérêts déjà acquis.",
      },
      {
        question: "Une capitalisation plus fréquente est-elle avantageuse ?",
        answer: "Oui, légèrement. À taux nominal égal, une capitalisation mensuelle donne un taux effectif plus élevé qu'une capitalisation annuelle.",
      },
      {
        question: "Qu'est-ce que la règle de 72 ?",
        answer: "Divisez 72 par le taux annuel pour estimer le nombre d'années nécessaires pour doubler votre capital. À 6 %, l'argent double en 12 ans environ.",
      },
    ],
    sourcesUsedFor: ["Formules des intérêts composés et de la valeur future."],
  },
  text: {
    principal: "Dépôt initial",
    rate: "Taux d'intérêt annuel",
    years: "Durée",
    frequency: "Capitalisation",
    frequencies: { "1": "Annuelle", "2": "Semestrielle", "4": "Trimestrielle", "12": "Mensuelle", "365": "Quotidienne" },
    future: "Valeur future",
    interest: "Intérêts gagnés",
    effective: "Taux annuel effectif",
    tableCaption: "Solde à la fin de chaque année",
    tableColumns: { year: "Année", balance: "Solde", interest: "Intérêts cumulés" },
    note: "Suppose un taux fixe, aucun dépôt ni retrait supplémentaire, et aucun impôt ni frais.",
  },
};

export default fr;
