import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DiscountText } from "../text/en";

const fr: CalculatorTranslation<DiscountText> = {
  content: {
    title: "Calculateur de remise",
    shortTitle: "Remise",
    summary: "Trouvez le prix soldé et l’économie réalisée à partir du prix initial et d’un pourcentage de remise.",
    metaTitle: "Calculateur de remise – Prix soldé et économies",
    metaDescription: "Calculez le prix après une remise en pourcentage et le montant économisé. Saisissez le prix initial et le pourcentage de remise pour un résultat immédiat.",
    keywords: ["calcul remise", "calcul réduction pourcentage", "prix soldé", "calcul soldes", "pourcentage de réduction", "code promo", "économies"],
    intro: [
      "Saisissez le prix initial et le pourcentage de réduction pour voir le prix soldé et votre économie.",
      "Pratique pour les soldes, les bons de réduction et la comparaison d’offres.",
    ],
    howToUse: [
      "Saisissez le prix initial.",
      "Saisissez le pourcentage de remise.",
      "Consultez le prix soldé et le montant économisé.",
    ],
    formulas: [
      { title: "Économie", expression: "Économie = prix × % de remise ÷ 100", explanation: "Le montant déduit du prix." },
      { title: "Prix soldé", expression: "Prix soldé = prix − économie = prix × (1 − remise ÷ 100)", explanation: "Ce que vous payez, hors taxe sur les ventes éventuelle." },
    ],
    examples: [
      {
        title: "120 $US avec 25 % de remise",
        steps: ["Économie = 120 $US × 0,25 = 30 $US", "Prix soldé = 120 $US − 30 $US = 90 $US"],
      },
      {
        title: "59,99 $US avec 15 % de remise",
        steps: ["Économie = 59,99 $US × 0,15 = 9,00 $US", "Prix soldé ≈ 50,99 $US"],
      },
    ],
    assumptions: [
      "La taxe sur les ventes n’est pas incluse ; utilisez le calculateur de taxe sur les ventes pour l’ajouter.",
      "Deux remises successives se multiplient au lieu de s’additionner : 20 % puis 10 % de remise font 28 % de remise, et non 30 %.",
    ],
    faqs: [
      { question: "Comment calculer une réduction en pourcentage ?", answer: "Multipliez le prix par la remise exprimée en décimal, puis soustrayez le résultat. 30 % de remise sur 50 $US donnent 50 $US − 15 $US = 35 $US." },
      { question: "Deux remises équivalent-elles à leur somme ?", answer: "Non. 20 % puis 10 % de remise laissent 0,8 × 0,9 = 72 % du prix, soit une remise totale de 28 %." },
      { question: "Comment retrouver le prix initial à partir du prix soldé ?", answer: "Divisez le prix soldé par (1 − remise ÷ 100). Un article à 60 $US après 25 % de remise coûtait 60 $US ÷ 0,75 = 80 $US." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    price: "Prix initial",
    percent: "Remise",
    sale: "Prix soldé",
    save: "Vous économisez",
    share: "Part du prix initial",
  },
};

export default fr;
