import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProfitMarginText } from "../text/en";

const fr: CalculatorTranslation<ProfitMarginText> = {
  content: {
    title: "Calculateur de marge bénéficiaire",
    shortTitle: "Marge bénéficiaire",
    summary: "Calculez le bénéfice, le taux de marge et le taux de marque à partir du coût et du prix de vente.",
    metaTitle: "Calculateur de marge bénéficiaire – Taux de marge et marque",
    metaDescription:
      "Calculez la marge brute, le taux de marge et le taux de marque à partir du coût et du prix de vente, et comprenez la différence entre marge et marque.",
    keywords: ["calcul marge", "marge bénéficiaire", "taux de marge", "taux de marque", "marge brute", "coefficient multiplicateur", "prix de vente", "e-commerce"],
    intro: [
      "Le taux de marge et le taux de marque décrivent tous deux le bénéfice, mais par rapport à des bases différentes. La marge compare le bénéfice au prix de vente ; la marque le compare au coût.",
      "Saisissez ce qu’un article vous coûte et le prix auquel vous le vendez.",
    ],
    howToUse: ["Saisissez le coût.", "Saisissez le prix de vente.", "Consultez le bénéfice, le taux de marge et le taux de marque."],
    formulas: [
      { title: "Bénéfice", expression: "bénéfice = prix − coût", explanation: "Bénéfice brut par article ou pour une commande entière." },
      { title: "Taux de marge", expression: "marge = bénéfice ÷ prix × 100", explanation: "Part du prix qui constitue le bénéfice." },
      { title: "Taux de marque", expression: "marque = bénéfice ÷ coût × 100", explanation: "Ce qui a été ajouté au coût." },
    ],
    examples: [
      {
        title: "Coût de 60 $US, prix de 100 $US",
        steps: ["Bénéfice = 40 $US", "Marge = 40 ÷ 100 = 40 % ; marque = 40 ÷ 60 ≈ 66,67 %"],
      },
      {
        title: "Coût de 25 $US, prix de 40 $US",
        steps: ["Bénéfice = 15 $US", "Marge = 15 ÷ 40 = 37,5 %"],
      },
    ],
    assumptions: [
      "Il s’agit de la marge brute : seul le coût saisi est pris en compte, pas les frais généraux ni les impôts.",
      "Le choix d’une devise ne modifie que la mise en forme.",
    ],
    faqs: [
      {
        question: "Quelle est la différence entre taux de marge et taux de marque ?",
        answer: "Le taux de marge divise le bénéfice par le prix ; le taux de marque le divise par le coût. Un taux de marque de 50 % correspond à un taux de marge de 33,3 %.",
      },
      {
        question: "La marge peut-elle dépasser 100 % ?",
        answer: "Non. La marge est une part du prix de vente : elle vaut au maximum 100 % (lorsque le coût est nul).",
      },
      {
        question: "Comment fixer un prix pour atteindre une marge cible ?",
        answer: "Prix = coût ÷ (1 − marge cible). Pour une marge de 40 % sur un coût de 60 $US, prix = 60 ÷ 0,6 = 100 $US.",
      },
    ],
    sourcesUsedFor: ["Définitions du bénéfice brut et de la marge."],
  },
  text: {
    cost: "Coût",
    price: "Prix de vente (chiffre d’affaires)",
    margin: "Taux de marge",
    caption: "Bénéfice exprimé en part du prix de vente.",
    profit: "Bénéfice",
    loss: "Perte",
    markup: "Taux de marque",
    undefinedMarkup: "Non défini si le coût est nul",
  },
};

export default fr;
