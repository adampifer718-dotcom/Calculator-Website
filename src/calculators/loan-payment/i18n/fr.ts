import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LoanPaymentText } from "../text/en";

const fr: CalculatorTranslation<LoanPaymentText> = {
  content: {
    title: "Calculateur de mensualités de prêt",
    shortTitle: "Mensualités de prêt",
    summary: "Calculez la mensualité, le coût total des intérêts et le tableau d’amortissement d’un prêt ou d’un crédit immobilier à taux fixe.",
    metaTitle: "Calculateur de mensualités de prêt – Mensualité et intérêts",
    metaDescription:
      "Calculez la mensualité d’un prêt ou d’un crédit immobilier à taux fixe, le total des intérêts et un tableau d’amortissement annuel à partir du montant, du taux et de la durée.",
    keywords: ["calcul mensualité prêt", "simulation crédit", "crédit immobilier", "tableau d’amortissement", "intérêts d’emprunt", "prêt auto", "prêt personnel"],
    intro: [
      "La plupart des prêts auto, prêts personnels et crédits immobiliers à taux fixe se remboursent par mensualités constantes. Chaque mensualité couvre les intérêts du mois et rembourse une partie du capital restant dû.",
      "Saisissez le montant emprunté, le taux annuel et la durée pour connaître la mensualité, le total des intérêts et l’évolution du capital restant dû année après année.",
    ],
    howToUse: [
      "Saisissez le montant emprunté.",
      "Saisissez le taux d’intérêt annuel.",
      "Saisissez la durée en années.",
      "Consultez la mensualité, le total des intérêts et le tableau annuel.",
    ],
    formulas: [
      { title: "Mensualité", expression: "M = P × r ÷ (1 − (1 + r)^(−n))", explanation: "P est le montant emprunté, r le taux mensuel (taux annuel ÷ 12) et n le nombre de mensualités." },
      { title: "Taux zéro", expression: "M = P ÷ n", explanation: "Sans intérêts, le prêt est réparti en parts égales." },
      { title: "Capital restant dû", expression: "B_k = P(1 + r)^k − M((1 + r)^k − 1) ÷ r", explanation: "Capital restant dû après k mensualités, utilisé pour le tableau." },
    ],
    examples: [
      {
        title: "200 000 $US à 6 % sur 30 ans",
        steps: ["r = 0,06 ÷ 12 = 0,005 ; n = 360", "M = 200 000 × 0,005 ÷ (1 − 1,005^−360) ≈ 1 199,10 $US"],
      },
      {
        title: "10 000 $US à 0 % sur 5 ans",
        steps: ["n = 60 mensualités", "M = 10 000 ÷ 60 ≈ 166,67 $US"],
      },
    ],
    assumptions: [
      "Taux fixe, mensualités constantes et aucun remboursement anticipé.",
      "La taxe foncière, l’assurance, les frais, les points et l’assurance hypothécaire privée (PMI, propre aux États-Unis) ne sont pas inclus.",
      "Les prêteurs peuvent arrondir les mensualités au centime chaque mois ; la dernière mensualité peut donc légèrement différer. Ceci ne constitue pas un conseil financier.",
    ],
    faqs: [
      { question: "Comment calcule-t-on la mensualité d’un prêt ?", answer: "Avec la formule de l’annuité M = P × r ÷ (1 − (1 + r)^−n), où r est le taux mensuel et n le nombre de mensualités." },
      { question: "Pourquoi les premières mensualités sont-elles surtout composées d’intérêts ?", answer: "Les intérêts sont calculés sur le capital restant dû, qui est le plus élevé au début. À mesure qu’il diminue, une part croissante de chaque mensualité rembourse le capital." },
      { question: "Une durée plus courte permet-elle d’économiser ?", answer: "En général, oui : les mensualités sont plus élevées, mais vous payez des intérêts pendant moins d’années, donc le total des intérêts est plus faible." },
    ],
    sourcesUsedFor: ["Valeur actuelle d’une annuité et formule du prêt à mensualités constantes."],
  },
  text: {
    principal: "Montant du prêt",
    rate: "Taux d’intérêt annuel",
    years: "Durée du prêt",
    termTooShort: "La durée doit être d’au moins un mois.",
    payment: "Mensualité",
    caption: "{count} mensualités au taux annuel de {rate}.",
    total: "Total des remboursements",
    interest: "Total des intérêts",
    tableCaption: "Amortissement par année",
    tableColumns: { year: "Année", principal: "Capital remboursé", interest: "Intérêts payés", balance: "Capital restant dû" },
    note: "Taux fixe avec mensualités constantes. Impôts, assurance, frais et éventuelles variations de taux non inclus.",
  },
};

export default fr;
