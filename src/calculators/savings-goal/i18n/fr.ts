import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SavingsGoalText } from "../text/en";

const fr: CalculatorTranslation<SavingsGoalText> = {
  content: {
    title: "Calculateur d’objectif d’épargne",
    shortTitle: "Objectif d’épargne",
    summary: "Calculez le versement mensuel nécessaire pour atteindre un objectif d’épargne à une date choisie, en tenant compte de ce que vous avez déjà épargné et de son rendement.",
    metaTitle: "Calculateur d’objectif d’épargne – Versement mensuel",
    metaDescription:
      "Calculez combien épargner chaque mois pour atteindre un objectif dans un délai donné, avec votre épargne actuelle, un rendement annuel prévu et une capitalisation mensuelle.",
    keywords: ["objectif d’épargne", "combien épargner par mois", "épargne mensuelle", "plan d’épargne", "épargner pour un projet", "valeur future", "versement mensuel"],
    intro: [
      "Épargner pour un apport, une voiture ou une épargne de précaution est plus facile avec un montant mensuel à viser. Ce calculateur détermine le versement régulier qui vous mène de ce que vous avez aujourd’hui à votre objectif dans le délai choisi.",
      "Il tient compte du rendement de votre épargne actuelle et de vos nouveaux versements, avec un rendement annuel fixe capitalisé chaque mois. Avec un rendement de 0 %, il répartit simplement le reste à épargner sur les mois.",
    ],
    howToUse: [
      "Choisissez la devise des montants.",
      "Saisissez le montant de l’objectif et ce que vous avez déjà épargné pour l’atteindre.",
      "Saisissez le rendement annuel attendu, par exemple le taux de votre compte d’épargne.",
      "Saisissez le nombre d’années dont vous disposez ; les décimales comme 2,5 sont acceptées.",
      "Lisez le versement mensuel, le total que vous verserez et la part provenant du rendement.",
    ],
    formulas: [
      {
        title: "Versement mensuel",
        expression: "PMT = (FV − PV × (1 + i)^n) × i ÷ ((1 + i)^n − 1)",
        explanation: "FV est l’objectif, PV l’épargne actuelle, i = rendement annuel ÷ 12 en décimal et n le nombre de mois. Les versements sont effectués à la fin de chaque mois.",
      },
      { title: "Rendement nul", expression: "PMT = (FV − PV) ÷ n", explanation: "Sans rendement, le montant manquant est réparti également sur les mois." },
      { title: "Croissance de l’épargne actuelle", expression: "PV × (1 + i)^n", explanation: "Si ce montant suffit à lui seul à atteindre l’objectif, aucun versement n’est nécessaire." },
    ],
    examples: [
      {
        title: "15 000 $US en 4 ans à partir de 1 000 $US à 4,5 %",
        steps: ["i = 0,045 ÷ 12 = 0,00375 ; n = 48", "1 000 × 1,00375^48 ≈ 1 196,81 $US", "PMT = (15 000 − 1 196,81) × 0,00375 ÷ (1,00375^48 − 1) ≈ 263,00 $US"],
      },
      {
        title: "30 000 $US en 10 ans en partant de zéro à 6 %",
        steps: ["i = 0,005 ; n = 120", "PMT = 30 000 × 0,005 ÷ (1,005^120 − 1)", "≈ 183,06 $US par mois ; les versements totalisent environ 21 967 $US"],
      },
      {
        title: "6 000 $US en 2 ans à partir de 1 200 $US sans intérêts",
        steps: ["n = 24 mois", "PMT = (6 000 − 1 200) ÷ 24 = 200 $US"],
      },
    ],
    assumptions: [
      "Le rendement annuel est constant et capitalisé chaque mois au taux annuel ÷ 12. Les rendements réels varient, et les placements peuvent perdre de la valeur.",
      "Les versements sont identiques chaque mois et effectués à la fin de chaque mois. Les impôts, les frais et l’inflation ne sont pas pris en compte.",
      "La durée est arrondie au mois entier le plus proche.",
      "Il s’agit d’une estimation, et non d’un conseil financier, et elle n’a pas été vérifiée par un professionnel.",
    ],
    faqs: [
      {
        question: "Pourquoi le versement mensuel est-il inférieur à l’objectif divisé par le nombre de mois ?",
        answer: "Votre épargne actuelle et chaque versement rapportent un rendement en attendant : une partie de l’objectif est donc couverte par la croissance. Plus le rendement est élevé et la durée longue, plus la croissance aide.",
      },
      {
        question: "Quel rendement saisir ?",
        answer: "Pour un compte d’épargne, utilisez son taux d’intérêt annuel. Pour des placements, utilisez une estimation prudente à long terme, et rappelez-vous que les rendements ne sont pas garantis. Saisir 0 % montre le versement nécessaire sans aucune croissance.",
      },
      {
        question: "Et si je verse au début de chaque mois ?",
        answer: "Chaque versement rapporte alors un mois de rendement supplémentaire : le versement nécessaire est donc un peu plus faible, environ le résultat affiché ici divisé par (1 + i), où i est le taux mensuel.",
      },
    ],
    sourcesUsedFor: ["La valeur future d’une annuité ordinaire et le versement d’un fonds d’amortissement qui en découle."],
  },
  text: {
    goal: "Objectif d’épargne",
    goalHelp: "Le montant que vous voulez avoir à la fin.",
    current: "Épargne actuelle",
    currentHelp: "Ce que vous avez déjà mis de côté pour cet objectif. Saisissez 0 si vous partez de zéro.",
    rate: "Rendement annuel",
    rateHelp: "Intérêt ou rendement annuel attendu, capitalisé chaque mois. Utilisez 0 % pour des liquidités non rémunérées.",
    years: "Délai pour atteindre l’objectif",
    yearsHelp: "En années ; les décimales sont acceptées (1,5 = 18 mois).",
    yearsSuffix: "ans",
    tooShort: "Indiquez au moins un mois (environ 0,05 an).",
    deposit: "Versement mensuel nécessaire",
    caption: "Versé à la fin de chaque mois pendant {months} à {rate} par an, en plus des {current} déjà épargnés, pour atteindre {goal}.",
    months: { zero: "{n} mois", one: "{n} mois", two: "{n} mois", few: "{n} mois", many: "{n} de mois", other: "{n} mois" },
    totalDeposits: "Total des versements",
    growth: "Rendement obtenu",
    currentGrows: "Épargne actuelle à la fin",
    endBalance: "Solde à la fin",
    numberOfDeposits: "Nombre de versements mensuels",
    notes: {
      reached: "Votre épargne actuelle devrait atteindre l’objectif à elle seule : aucun versement supplémentaire n’est nécessaire.",
      constant: "Le rendement est supposé identique chaque mois. Les rendements réels varient, et les impôts, les frais et l’inflation ne sont pas pris en compte.",
    },
  },
};

export default fr;
