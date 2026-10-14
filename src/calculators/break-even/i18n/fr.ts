import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BreakEvenText } from "../text/en";

const fr: CalculatorTranslation<BreakEvenText> = {
  content: {
    title: "Calculateur de seuil de rentabilité",
    shortTitle: "Seuil de rentabilité",
    summary: "Déterminez combien d'unités vous devez vendre pour couvrir vos coûts fixes, ainsi que le chiffre d'affaires au seuil de rentabilité.",
    metaTitle: "Seuil de rentabilité – Calcul en unités et chiffre d'affaires",
    metaDescription:
      "Calculez votre seuil de rentabilité en unités et en chiffre d'affaires à partir des coûts fixes, du prix unitaire et du coût variable unitaire, avec la marge sur coûts variables.",
    keywords: ["seuil de rentabilité", "point mort", "calcul seuil de rentabilité", "marge sur coûts variables", "coûts fixes", "coûts variables", "rentabilité entreprise"],
    intro: [
      "Le seuil de rentabilité est le point où le chiffre d'affaires total égale les coûts totaux : il n'y a alors ni bénéfice ni perte.",
      "Chaque unité vendue contribue à couvrir les coûts fixes à hauteur de son prix moins son coût variable. Une fois ces coûts couverts, les ventes supplémentaires constituent du bénéfice.",
    ],
    howToUse: [
      "Saisissez vos coûts fixes pour la période.",
      "Saisissez le prix de vente unitaire.",
      "Saisissez le coût variable unitaire.",
      "Consultez les unités et le chiffre d'affaires nécessaires pour atteindre le seuil de rentabilité.",
    ],
    formulas: [
      {
        title: "Seuil de rentabilité en unités",
        expression: "unités = coûts fixes ÷ (prix − coût variable)",
        explanation: "Le dénominateur correspond à la marge sur coûts variables unitaire.",
      },
      {
        title: "Seuil de rentabilité en chiffre d'affaires",
        expression: "chiffre d'affaires = unités × prix",
        explanation: "Ce qui revient à diviser les coûts fixes par le taux de marge sur coûts variables.",
      },
    ],
    examples: [
      {
        title: "10 000 $US de coûts fixes, prix de 50 $US, coût variable de 30 $US",
        steps: ["Marge unitaire = 50 $US − 30 $US = 20 $US", "Unités = 10 000 ÷ 20 = 500"],
      },
      {
        title: "2 500 $US de coûts fixes, prix de 12 $US, coût variable de 4,50 $US",
        steps: ["Marge unitaire = 7,50 $US", "Unités = 2 500 ÷ 7,5 ≈ 333,33, soit 334 unités"],
      },
    ],
    assumptions: [
      "Le prix et le coût variable unitaire restent constants quel que soit le volume.",
      "Les coûts fixes correspondent à la même période que les ventes prévues.",
      "Les impôts et les frais financiers ne sont pas inclus, sauf si vous les ajoutez aux coûts fixes.",
    ],
    faqs: [
      {
        question: "Qu'est-ce que la marge sur coûts variables ?",
        answer: "Le prix moins le coût variable unitaire : c'est le montant que chaque vente apporte pour couvrir les coûts fixes et dégager un bénéfice.",
      },
      {
        question: "Que se passe-t-il si le coût variable dépasse le prix ?",
        answer: "Chaque vente fait perdre de l'argent : vous ne pouvez donc jamais atteindre le seuil de rentabilité à ce prix.",
      },
      {
        question: "Comment calculer le nombre d'unités pour un bénéfice cible ?",
        answer: "Ajoutez le bénéfice visé aux coûts fixes et divisez le total par la marge sur coûts variables unitaire.",
      },
    ],
    sourcesUsedFor: ["Analyse coût-volume-profit et formules du seuil de rentabilité."],
  },
  text: {
    fixed: "Coûts fixes",
    fixedHelp: "Coûts qui ne varient pas avec le volume, par exemple le loyer et les salaires.",
    price: "Prix unitaire",
    variable: "Coût variable unitaire",
    variableHelp: "Matières premières, emballage et autres coûts par unité.",
    variableTooHigh: "Le coût variable doit être inférieur au prix, sinon le seuil de rentabilité n'est jamais atteint.",
    units: "Volume au seuil de rentabilité",
    unitsSuffix: "unités",
    caption: "Arrondi à {count} unités entières.",
    revenue: "Chiffre d'affaires au seuil de rentabilité",
    contribution: "Marge sur coûts variables unitaire",
    ratio: "Taux de marge sur coûts variables",
  },
};

export default fr;
