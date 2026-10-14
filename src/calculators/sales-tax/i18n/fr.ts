import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SalesTaxText } from "../text/en";

const fr: CalculatorTranslation<SalesTaxText> = {
  content: {
    title: "Calculateur de taxe de vente",
    shortTitle: "Taxe de vente",
    summary: "Ajoutez la taxe de vente à un prix, ou retrouvez le prix hors taxe à partir d'un total taxe comprise.",
    metaTitle: "Calculateur de taxe de vente – Ajouter ou retirer la taxe",
    metaDescription:
      "Calculez la taxe de vente et le prix total, ou retirez la taxe d'un total taxe comprise pour retrouver le prix d'origine. Fonctionne avec tout taux et toute devise.",
    keywords: ["taxe de vente", "calcul TVA", "prix TTC", "prix hors taxe", "calcul HT TTC", "taux de taxe", "retirer la TVA"],
    intro: [
      "Saisissez un prix et un taux de taxe de vente pour connaître la taxe et le total à payer. Passez au retrait de la taxe pour retrouver le prix hors taxe à partir du total d'un ticket de caisse.",
      "Le même calcul s'applique à la TVA et à la TPS, qui sont elles aussi des pourcentages ajoutés à un prix.",
    ],
    howToUse: [
      "Choisissez d'ajouter la taxe à un prix ou de la retirer d'un total.",
      "Saisissez le montant et le taux de taxe en pourcentage.",
      "Consultez la taxe, le total et le prix hors taxe.",
    ],
    formulas: [
      {
        title: "Ajouter la taxe",
        expression: "Taxe de vente = prix × taux ÷ 100\nTotal = prix + taxe de vente",
        explanation: "Multipliez le prix par le taux exprimé en décimal.",
      },
      {
        title: "Retirer la taxe",
        expression: "Prix hors taxe = total ÷ (1 + taux ÷ 100)",
        explanation: "Diviser par 1 plus le taux annule la taxe. Soustraire le pourcentage du total ne donne pas le bon résultat.",
      },
    ],
    examples: [
      {
        title: "100 $US avec une taxe de vente de 8,25 %",
        steps: ["Taxe = 100 $US × 0,0825 = 8,25 $US", "Total = 100 $US + 8,25 $US = 108,25 $US"],
      },
      {
        title: "Un total de 54 $US incluant 8 % de taxe",
        steps: ["Prix = 54 $US ÷ 1,08 = 50 $US", "Taxe = 54 $US − 50 $US = 4 $US"],
      },
    ],
    assumptions: [
      "Le taux est un pourcentage unique appliqué à l'ensemble du montant. Certains endroits taxent différemment selon les articles ou ajoutent des taxes locales.",
      "Les résultats sont arrondis au centime uniquement à l'affichage.",
      "Le choix d'une devise ne modifie que la mise en forme.",
    ],
    faqs: [
      {
        question: "Comment calculer la taxe de vente ?",
        answer: "Multipliez le prix par le taux de taxe exprimé en décimal. Pour un taux de 7 %, 50 $US × 0,07 = 3,50 $US de taxe.",
      },
      {
        question: "Comment retirer la taxe de vente d'un total ?",
        answer: "Divisez le total par 1 plus le taux. Un total de 107 $US avec 7 % de taxe correspond à 107 $US ÷ 1,07 = 100 $US hors taxe.",
      },
      {
        question: "La TVA se calcule-t-elle de la même façon ?",
        answer: "Oui. La TVA et la TPS sont des pourcentages du prix : les mêmes formules s'appliquent.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    mode: "Calcul",
    modes: { add: "Ajouter la taxe à un prix", remove: "Retirer la taxe d'un total" },
    amount: "Montant",
    amountHelp: "Prix hors taxe, ou total taxe comprise si vous retirez la taxe.",
    rate: "Taux de taxe de vente",
    beforeTax: "Prix hors taxe",
    beforeTaxCaption: "Le total divisé par (1 + taux de taxe).",
    taxIncluded: "Taxe de vente incluse",
    total: "Total taxe comprise",
    totalCaption: "Le prix plus la taxe de vente.",
    tax: "Taxe de vente",
  },
};

export default fr;
