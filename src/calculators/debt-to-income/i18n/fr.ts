import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DebtToIncomeText } from "../text/en";

const fr: CalculatorTranslation<DebtToIncomeText> = {
  content: {
    title: "Calculateur de taux d’endettement",
    shortTitle: "Taux d’endettement",
    summary: "Calculez votre taux d’endettement global (back-end) et votre ratio de logement (front-end) à partir de votre revenu mensuel brut et de vos remboursements mensuels.",
    metaTitle: "Calculateur de taux d’endettement – Front-end et back-end",
    metaDescription:
      "Calculez votre taux d’endettement (DTI) : remboursements mensuels divisés par le revenu mensuel brut, avec le ratio de logement (front-end) et le total des dettes.",
    keywords: ["taux d’endettement", "ratio dette revenu", "DTI", "ratio back-end", "ratio front-end", "ratio de logement", "capacité d’emprunt", "dettes mensuelles"],
    intro: [
      "Votre taux d’endettement, ou DTI (debt-to-income), compare ce que vous consacrez chaque mois au remboursement de vos dettes à ce que vous gagnez avant impôts. Les prêteurs l’utilisent comme l’une des mesures de la marge dont dispose votre budget pour un nouveau prêt.",
      "Saisissez votre revenu mensuel brut et vos remboursements mensuels de dettes. Le calculateur donne le ratio back-end, qui inclut toutes les dettes, et le ratio front-end, qui ne compte que le logement.",
    ],
    howToUse: [
      "Choisissez la devise des montants.",
      "Saisissez votre revenu mensuel brut, avant impôts et retenues.",
      "Saisissez votre dépense mensuelle de logement : loyer, ou mensualité de crédit immobilier taxes et assurance comprises.",
      "Saisissez vos autres remboursements mensuels de dettes. Pour les cartes de crédit, utilisez le paiement minimum exigé.",
      "Lisez le ratio back-end, le ratio front-end et le total de vos remboursements.",
    ],
    formulas: [
      { title: "DTI back-end", expression: "DTI = remboursements mensuels totaux ÷ revenu mensuel brut × 100", explanation: "Tous les remboursements de dettes, logement compris." },
      { title: "Ratio front-end (logement)", expression: "ratio de logement = dépense de logement ÷ revenu mensuel brut × 100", explanation: "Uniquement le loyer ou la mensualité du crédit immobilier." },
      { title: "Dettes mensuelles totales", expression: "dettes = logement + voiture + études + cartes + autres", explanation: "Les paiements mensuels exigés, et non les soldes." },
    ],
    examples: [
      {
        title: "Revenu de 6 000 $US avec 2 000 $US de remboursements",
        steps: ["Dettes totales = 1 500 + 100 + 400 = 2 000 $US", "DTI = 2 000 ÷ 6 000 × 100 ≈ 33,33 %", "Ratio de logement = 1 500 ÷ 6 000 = 25 %"],
      },
      {
        title: "Revenu de 5 400 $US, un loyer et un crédit auto",
        steps: ["Dettes totales = 1 450 + 310 + 120 = 1 880 $US", "DTI = 1 880 ÷ 5 400 × 100 ≈ 34,81 %", "Ratio de logement = 1 450 ÷ 5 400 ≈ 26,85 %"],
      },
    ],
    assumptions: [
      "Le revenu est brut (avant impôts). Les prêteurs peuvent compter les revenus différemment, par exemple en faisant la moyenne des revenus d’indépendant ou en excluant les primes irrégulières.",
      "Seuls les paiements mensuels exigés sont inclus. L’énergie, les courses, le téléphone et les autres frais de la vie courante ne sont pas des dettes et sont exclus.",
      "Les prêteurs et les programmes de prêt fixent leurs propres limites et tiennent aussi compte de l’historique de crédit, de l’épargne et d’autres facteurs. Un ratio de 43 % a été un point de référence courant dans la réglementation américaine des prêts immobiliers, mais ce n’est pas un seuil universel.",
      "Il s’agit d’une estimation, et non d’un conseil financier, et elle n’a pas été vérifiée par un professionnel.",
    ],
    faqs: [
      {
        question: "Quelle est la différence entre DTI front-end et back-end ?",
        answer: "Le ratio front-end ne compte que votre dépense de logement. Le ratio back-end y ajoute tous les autres remboursements mensuels, comme ceux de la voiture, du prêt étudiant et des cartes de crédit. Lorsqu’on parle de DTI, on désigne généralement le ratio back-end.",
      },
      {
        question: "Pourquoi le chiffre de 43 % revient-il si souvent ?",
        answer: "La réglementation américaine des prêts immobiliers qualifiés (qualified mortgages) utilisait 43 % comme point de référence pour le taux d’endettement, d’où la diffusion de ce chiffre. Les prêteurs et les programmes de prêt appliquent leurs propres limites, qui peuvent être plus élevées ou plus basses.",
      },
      {
        question: "Comment réduire mon taux d’endettement ?",
        answer: "Réduisez vos remboursements mensuels, par exemple en soldant un prêt ou une carte de crédit, ou augmentez votre revenu brut. Contracter une nouvelle dette avant de demander un prêt fait augmenter le ratio.",
      },
    ],
    sourcesUsedFor: ["La définition du DTI comme remboursements mensuels divisés par le revenu mensuel brut, et le point de référence de 43 % dans la réglementation américaine des prêts immobiliers."],
  },
  text: {
    income: "Revenu mensuel brut",
    incomeHelp: "Votre salaire avant impôts et retenues, pour un mois. Incluez toutes vos sources de revenu régulières.",
    housing: "Dépense de logement",
    housingHelp: "Loyer mensuel, ou mensualité de crédit immobilier incluant la taxe foncière, l’assurance habitation et les éventuelles charges de copropriété (HOA).",
    car: "Remboursements de crédit auto",
    student: "Remboursements de prêt étudiant",
    creditCards: "Paiements minimums des cartes de crédit",
    creditCardsHelp: "Le minimum exigé sur chaque carte, et non le solde total.",
    other: "Autres remboursements de dettes",
    otherHelp: "Prêts personnels, pensions alimentaires pour enfants, pensions entre ex-époux et tous les autres remboursements mensuels de dettes obligatoires.",
    backEnd: "Taux d’endettement (back-end)",
    caption: "{debt} de remboursements mensuels pour {income} de revenu mensuel brut.",
    frontEnd: "Ratio de logement (front-end)",
    totalDebt: "Remboursements mensuels totaux",
    nonHousing: "Remboursements hors logement",
    remaining: "Revenu brut restant après remboursements",
    notes: {
      lenders: "Chaque prêteur et chaque programme de prêt fixe ses propres limites de taux d’endettement et examine aussi d’autres facteurs : ce ratio seul ne permet donc pas de savoir si un prêt vous serait accordé.",
      reference: "Selon le Consumer Financial Protection Bureau, un taux d’endettement de 43 % a été un point de référence courant dans la réglementation américaine des prêts immobiliers qualifiés.",
      overIncome: "Vos remboursements mensuels sont supérieurs à votre revenu mensuel brut.",
    },
  },
};

export default fr;
