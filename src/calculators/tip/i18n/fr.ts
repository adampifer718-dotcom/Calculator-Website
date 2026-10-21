import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TipText } from "../text/en";

const fr: CalculatorTranslation<TipText> = {
  content: {
    title: "Calculateur de pourboire",
    shortTitle: "Pourboire",
    summary: "Calculez le pourboire, le total de l’addition et ce que chacun paie en cas de partage.",
    metaTitle: "Calculateur de pourboire – Montant et partage de l’addition",
    metaDescription:
      "Calculez le pourboire pour toute addition et tout pourcentage, le total pourboire compris et la part de chacun si l’addition est partagée.",
    keywords: ["calcul pourboire", "pourboire restaurant", "partager l’addition", "combien laisser de pourboire", "diviser l’addition", "frais de service"],
    intro: [
      "Saisissez le montant de l’addition et un pourcentage de pourboire pour voir le pourboire et le total. Indiquez le nombre de personnes pour le partager à parts égales.",
      "Les usages varient selon le pays et le service : choisissez le pourcentage qui convient.",
    ],
    howToUse: [
      "Saisissez le montant de l’addition.",
      "Saisissez le pourcentage de pourboire.",
      "Indiquez le nombre de personnes qui partagent l’addition.",
      "Consultez le pourboire, le total et le montant par personne.",
    ],
    formulas: [
      {
        title: "Pourboire",
        expression: "Pourboire = addition × % de pourboire ÷ 100",
        explanation: "Certaines personnes calculent le pourboire sur le montant hors taxes ; saisissez celui que vous préférez.",
      },
      { title: "Partage", expression: "Par personne = (addition + pourboire) ÷ personnes", explanation: "Un partage à parts égales." },
    ],
    examples: [
      {
        title: "Addition de 80 $US, pourboire de 18 %, 4 personnes",
        steps: ["Pourboire = 80 $US × 0,18 = 14,40 $US", "Total = 94,40 $US ; chacun paie 23,60 $US"],
      },
      {
        title: "Addition de 45 $US, pourboire de 20 %, 1 personne",
        steps: ["Pourboire = 45 $US × 0,20 = 9 $US", "Total = 54 $US"],
      },
    ],
    assumptions: [
      "L’addition est partagée à parts égales ; les montants sont arrondis au centime uniquement à l’affichage.",
      "Le choix d’une devise ne modifie que la mise en forme.",
    ],
    faqs: [
      {
        question: "Combien faut-il laisser de pourboire ?",
        answer: "Cela dépend des usages locaux et du service. Aux États-Unis, 15 à 20 % est courant au restaurant ; ailleurs, le pourboire peut être plus modeste ou déjà inclus.",
      },
      {
        question: "Faut-il calculer le pourboire avant ou après les taxes ?",
        answer: "Les deux sont courants. Saisissez comme addition le montant hors taxes ou taxes comprises, selon votre préférence.",
      },
      {
        question: "Comment partager une addition de façon inégale ?",
        answer: "Calculez séparément la part de l’addition de chaque personne, puis appliquez le pourcentage de pourboire à chacune.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    bill: "Montant de l’addition",
    percent: "Pourcentage de pourboire",
    people: "Nombre de personnes",
    tip: "Pourboire",
    total: "Total pourboire compris",
    each: "Chaque personne paie",
    tipEach: "Pourboire par personne",
  },
};

export default fr;
