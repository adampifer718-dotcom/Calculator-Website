import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FoodCostPercentageText } from "../text/en";

const fr: CalculatorTranslation<FoodCostPercentageText> = {
  content: {
    title: "Calculateur de ratio coût matière",
    shortTitle: "Ratio coût matière",
    summary: "Calculez le ratio coût matière d’un plat ou de toute une période à partir des stocks et des ventes, et le prix de carte qui atteint un coût matière cible.",
    metaTitle: "Calculateur de ratio coût matière – Coût portion et prix",
    metaDescription:
      "Calculez le ratio coût matière d’un plat ou d’une période (stocks, achats, ventes), avec la marge brute et le prix de carte qui atteint votre coût cible.",
    keywords: ["ratio coût matière", "coût matière restaurant", "coût portion", "calcul prix de vente plat", "coût des marchandises vendues", "CMV", "food cost", "prix de carte"],
    intro: [
      "Le ratio coût matière est la part du prix d’un plat, ou des ventes alimentaires d’un restaurant, consacrée aux ingrédients. C’est l’un des chiffres les plus surveillés en restauration, car il montre rapidement si les prix suivent le coût d’achat des denrées.",
      "Utilisez le mode plat pour vérifier un article de la carte à partir de son coût portion et de son prix, et pour trouver le prix qui donne un coût matière cible. Utilisez le mode période pour calculer le coût matière d’une semaine ou d’un mois à partir de vos inventaires, de vos achats et de vos ventes alimentaires.",
    ],
    howToUse: [
      "Choisissez la devise, et indiquez si vous travaillez sur un plat ou sur toute une période.",
      "Pour un plat, saisissez le coût portion (le coût de tous les ingrédients d’une portion) et le prix de carte hors taxes.",
      "Pour une période, saisissez la valeur des denrées en stock au début et à la fin, les denrées achetées entre-temps et les ventes alimentaires de la même période.",
      "Saisissez éventuellement un ratio coût matière cible pour obtenir un prix de carte suggéré, ou les ventes nécessaires au coût matière de la période.",
    ],
    formulas: [
      {
        title: "Ratio coût matière d’un plat",
        expression: "coût matière % = coût portion ÷ prix de carte × 100",
        explanation: "Le prix de carte est le prix hors taxe sur les ventes.",
      },
      {
        title: "Prix de carte pour une cible",
        expression: "prix = coût portion ÷ (cible % ÷ 100)",
        explanation: "Par exemple, une portion à 4,20 $US avec une cible de 28 % donne 4,20 ÷ 0,28 = 15,00 $US.",
      },
      {
        title: "Ratio coût matière d’une période",
        expression: "CMV = stock initial + achats − stock final ;  coût matière % = CMV ÷ ventes alimentaires × 100",
        explanation: "Le CMV (coût des marchandises vendues) est le coût des denrées consommées pendant la période, qu’elles aient été vendues, perdues ou offertes.",
      },
      {
        title: "Marge brute et taux de marge",
        expression: "marge brute = prix − coût matière ;  taux de marge % = marge brute ÷ prix × 100",
        explanation: "Cette marge ne déduit que le coût matière ; la main-d’œuvre et les frais généraux restent à payer dessus.",
      },
    ],
    examples: [
      {
        title: "Un plat à 14 $US avec un coût portion de 4,20 $US, cible de 28 %",
        steps: ["Coût matière = 4,20 ÷ 14 × 100 = 30 %", "Marge brute = 14 − 4,20 = 9,80 $US, soit une marge de 70 %", "Prix pour 28 % = 4,20 ÷ 0,28 = 15,00 $US"],
      },
      {
        title: "Un plat de pâtes à 12,50 € dont la préparation coûte 3,85 €",
        steps: ["Coût matière = 3,85 ÷ 12,50 × 100 = 30,8 %", "Prix pour une cible de 30 % = 3,85 ÷ 0,30 ≈ 12,83 €"],
      },
      {
        title: "Un mois à partir des inventaires",
        steps: [
          "CMV = 9 200 + 14 600 − 8 100 = 15 700 $US",
          "Coût matière = 15 700 ÷ 48 500 × 100 ≈ 32,37 %",
          "Marge brute sur les denrées = 48 500 − 15 700 = 32 800 $US ; à 30 %, le même CMV nécessiterait environ 52 333 $US de ventes",
        ],
      },
    ],
    assumptions: [
      "Tous les montants sont dans une même devise et hors taxe sur les ventes. Les stocks sont valorisés au prix d’achat.",
      "Le mode période suppose que les inventaires sont réalisés exactement au début et à la fin de la même période que les ventes, et que les achats ne comprennent que des denrées alimentaires (ni boissons ni fournitures, sauf si vous voulez les inclure).",
      "Il n’existe pas de ratio coût matière idéal unique. Une fourchette de 28 à 35 % du prix de vente est souvent citée, mais le bon chiffre dépend du type de restaurant, de ses prix et de ses autres coûts.",
    ],
    faqs: [
      {
        question: "Qu’est-ce qu’un bon ratio coût matière ?",
        answer: "Des chiffres d’environ 28 à 35 % sont souvent cités, mais il n’existe pas d’objectif universel. Un restaurant aux charges de personnel ou au loyer élevés peut avoir besoin d’un coût matière plus bas, alors qu’un établissement aux ingrédients haut de gamme et avec moins de personnel peut se permettre un ratio plus élevé.",
      },
      {
        question: "Pourquoi le coût matière de la période diffère-t-il de celui de mes plats ?",
        answer: "Le chiffre de la période comprend tout ce qui est sorti du stock : pertes, denrées avariées, repas du personnel, portions trop généreuses et vols, en plus des denrées vendues. Le comparer aux coûts prévus des plats est un bon moyen de repérer ces pertes.",
      },
      {
        question: "Faut-il inclure la taxe sur les ventes dans le prix de carte ?",
        answer: "Non. Utilisez le prix hors taxe, car la taxe sur les ventes est collectée pour l’État et ne constitue pas un chiffre d’affaires pour l’entreprise.",
      },
    ],
    sourcesUsedFor: [
      "Coût matière % = coût portion ÷ prix de carte × 100, et la fourchette souvent citée de 28 à 35 % du prix de vente.",
      "Coût matière % de la période = (stock initial + achats − stock final) ÷ ventes alimentaires × 100.",
    ],
  },
  text: {
    mode: "Calculer pour",
    modes: { dish: "Un plat", period: "Une période (inventaires)" },
    plateCost: "Coût portion",
    plateCostHelp: "Le coût de tous les ingrédients d’une portion, garniture et accompagnements compris.",
    menuPrice: "Prix de carte",
    menuPriceHelp: "Le prix de vente du plat, hors taxe sur les ventes.",
    beginInventory: "Stock initial",
    beginInventoryHelp: "La valeur des denrées en stock au début de la période.",
    purchases: "Achats de denrées",
    purchasesHelp: "La valeur des denrées achetées pendant la période.",
    endInventory: "Stock final",
    endInventoryHelp: "La valeur des denrées en stock à la fin de la période.",
    sales: "Ventes alimentaires",
    salesHelp: "Ventes alimentaires nettes de la même période, hors taxe sur les ventes.",
    target: "Ratio coût matière cible en % (facultatif)",
    targetHelp: "Le ratio coût matière visé, pour obtenir un prix de carte suggéré ou les ventes correspondantes.",
    errors: {
      inventory: "Le stock final ne peut pas dépasser le stock initial plus les achats.",
    },
    foodCost: "Ratio coût matière",
    captionDish: "Coût portion {cost} ÷ prix de carte {price}.",
    captionPeriod: "Coût des marchandises vendues {cogs} ÷ ventes alimentaires {sales}.",
    grossProfitPlate: "Marge brute par portion",
    grossProfitPeriod: "Marge brute sur les denrées pour la période",
    margin: "Taux de marge après coût matière",
    suggestedPrice: "Prix de carte suggéré pour la cible",
    salesAtTarget: "Ventes alimentaires nécessaires pour la cible",
    cogs: "Coût des marchandises vendues (denrées)",
    notes: {
      margin: "La marge ne déduit ici que le coût matière. La main-d’œuvre, le loyer et les autres coûts restent à payer dessus.",
      rounding: "Le prix suggéré est celui auquel ce coût portion correspond au pourcentage cible. Les prix de carte sont souvent arrondis à un chiffre pratique.",
      above100: "Le coût matière dépasse le prix de vente : chaque vente fait donc perdre de l’argent sur les seuls ingrédients.",
    },
  },
};

export default fr;
