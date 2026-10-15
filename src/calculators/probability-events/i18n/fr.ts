import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProbabilityEventsText } from "../text/en";

const fr: CalculatorTranslation<ProbabilityEventsText> = {
  content: {
    title: "Calculateur de probabilités (deux événements)",
    shortTitle: "Probabilités",
    summary: "Combinez les probabilités de deux événements indépendants ou incompatibles : les deux, l’un ou l’autre, exactement un ou aucun.",
    metaTitle: "Calculateur de probabilités – Deux événements, et, ou, aucun",
    metaDescription:
      "Calculez P(A et B), P(A ou B), exactement un et aucun pour deux événements indépendants ou incompatibles, ainsi que le complémentaire de chacun.",
    keywords: ["probabilité", "calcul de probabilité", "probabilité de deux événements", "événements indépendants", "événements incompatibles", "P(A et B)", "P(A ou B)", "événement contraire", "règle d’addition", "règle de multiplication"],
    intro: [
      "Beaucoup de questions du quotidien combinent deux probabilités. Quelle est la probabilité que deux machines tombent en panne le même jour, ou qu’un client paie par carte ou en espèces ? Ce calculateur répond à ce type de question pour deux événements, A et B.",
      "Saisissez la probabilité de chaque événement et indiquez leur relation. Des événements indépendants ne s’influencent pas, comme deux lancers de pièce distincts. Des événements incompatibles ne peuvent pas se produire ensemble, comme un même dé qui montrerait à la fois un 2 et un 5. Le calculateur donne alors la probabilité des deux, d’au moins un, d’exactement un et d’aucun.",
    ],
    howToUse: [
      "Saisissez P(A) et P(B) en pourcentages compris entre 0 % et 100 %.",
      "Choisissez Indépendants si le fait de savoir qu’un événement s’est produit ne change pas la probabilité de l’autre.",
      "Choisissez Incompatibles si les deux événements ne peuvent jamais se produire ensemble. Leurs probabilités ne peuvent alors pas dépasser 100 % au total.",
      "Lisez P(A et B) comme résultat principal, et les autres combinaisons en dessous.",
    ],
    formulas: [
      { title: "Les deux (indépendants)", expression: "P(A et B) = P(A) × P(B)", explanation: "La règle de multiplication pour des événements indépendants." },
      { title: "Les deux (incompatibles)", expression: "P(A et B) = 0", explanation: "Les événements n’ont aucune issue en commun." },
      { title: "Au moins un", expression: "P(A ou B) = P(A) + P(B) − P(A et B)", explanation: "La règle d’addition. L’intersection est soustraite pour ne pas être comptée deux fois." },
      { title: "Exactement un", expression: "P(exactement un) = P(A) + P(B) − 2 × P(A et B)", explanation: "Au moins un, moins le cas où les deux se produisent." },
      { title: "Aucun et complémentaires", expression: "P(aucun) = 1 − P(A ou B)\nP(non A) = 1 − P(A)", explanation: "La règle du complémentaire : un événement se produit ou ne se produit pas." },
    ],
    examples: [
      {
        title: "Deux machines indépendantes en panne 8 % et 5 % des jours",
        steps: ["P(les deux en panne) = 0,08 × 0,05 = 0,004 = 0,4 %", "P(au moins une en panne) = 0,08 + 0,05 − 0,004 = 0,126 = 12,6 %", "P(aucune en panne) = 1 − 0,126 = 87,4 %"],
      },
      {
        title: "Un client paie par carte (62 %) ou en espèces (18 %), jamais les deux",
        steps: ["Les événements sont incompatibles, donc P(les deux) = 0", "P(carte ou espèces) = 62 % + 18 % = 80 %", "P(ni l’un ni l’autre, par exemple un bon d’achat) = 100 % − 80 % = 20 %"],
      },
      {
        title: "Réussir deux lancers francs quand chacun rentre 75 % du temps",
        steps: ["P(les deux rentrent) = 0,75 × 0,75 = 0,5625 = 56,25 %", "P(exactement un) = 0,75 + 0,75 − 2 × 0,5625 = 37,5 %", "P(aucun) = 0,25 × 0,25 = 6,25 %"],
      },
    ],
    assumptions: [
      "Les probabilités sont saisies en pourcentages et traitées comme des valeurs exactes.",
      "Le calculateur ne couvre que les deux cas particuliers des événements indépendants et incompatibles. Pour des événements qui ne sont ni l’un ni l’autre, il faut P(A et B) ou une probabilité conditionnelle, que cet outil ne demande pas.",
      "L’indépendance est une propriété de la situation, pas des nombres. Considérez les événements comme dépendants, sauf si vous avez une bonne raison de les croire indépendants.",
      "Les résultats sont affichés avec quatre décimales de pourcentage.",
    ],
    faqs: [
      {
        question: "Quelle est la différence entre indépendants et incompatibles ?",
        answer: "Des événements indépendants ne s’influencent pas, et les deux peuvent donc se produire. Des événements incompatibles ne peuvent pas se produire ensemble : si l’un survient, l’autre est exclu. Deux événements de probabilités non nulles ne peuvent jamais être à la fois indépendants et incompatibles.",
      },
      {
        question: "Pourquoi des probabilités incompatibles ne peuvent-elles pas dépasser 100 % au total ?",
        answer: "Si A et B ne se chevauchent jamais, P(A ou B) est égal à P(A) + P(B). Une probabilité ne peut pas dépasser 100 %, cette somme non plus. Un total supérieur à 100 % signifie que les événements se chevauchent forcément et ne sont pas incompatibles.",
      },
      {
        question: "Comment trouver la probabilité qu’un événement se produise au moins une fois en plusieurs essais ?",
        answer: "Pour des essais indépendants, calculez la probabilité qu’il ne se produise jamais et soustrayez-la de 1. Avec deux essais à 30 % chacun, P(aucun) = 0,7 × 0,7 = 0,49, donc P(au moins une fois) = 51 %. Ce calculateur l’affiche sous la forme P(A ou B).",
      },
    ],
    sourcesUsedFor: [
      "Définitions des événements indépendants et incompatibles, P(A et B) = P(A)·P(B) pour des événements indépendants et P(A et B) = 0 pour des événements incompatibles.",
    ],
  },
  text: {
    pA: "Probabilité de A, P(A)",
    pB: "Probabilité de B, P(B)",
    pHelp: "En pourcentage, de 0 % à 100 %.",
    relation: "Quelle est la relation entre A et B ?",
    relationHelp: "Indépendants : la réalisation de l’un ne change pas la probabilité de l’autre. Incompatibles : ils ne peuvent pas se produire tous les deux.",
    relationOptions: { independent: "Indépendants", exclusive: "Incompatibles" },
    exclusiveTooLarge: "Pour des événements incompatibles, P(A) + P(B) ne peut pas dépasser 100 %. Ici, la somme vaut {sum}.",
    and: "P(A et B) : les deux se produisent",
    or: "P(A ou B) : au moins un se produit",
    exactlyOne: "P(exactement un de A ou B)",
    neither: "P(ni A ni B)",
    notA: "P(non A)",
    notB: "P(non B)",
    independentCaption: "Pour des événements indépendants, P(A et B) = P(A) × P(B).",
    exclusiveCaption: "Des événements incompatibles ne se produisent jamais ensemble, donc P(A et B) = 0.",
    certainNote: "Avec P(A) + P(B) = 100 %, l’un des deux événements incompatibles se produit forcément.",
  },
};

export default fr;
