import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RatioText } from "../text/en";

const fr: CalculatorTranslation<RatioText> = {
  content: {
    title: "Calculateur de ratio",
    shortTitle: "Ratio",
    summary: "Simplifiez un ratio de deux ou trois termes, résolvez une proportion pour trouver un terme manquant ou partagez une quantité selon un ratio donné.",
    metaTitle: "Calculateur de ratio – Simplifier, résoudre et partager",
    metaDescription: "Simplifiez des ratios à termes entiers ou décimaux, trouvez le terme manquant de A : B = C : x ou partagez une quantité en deux ou trois parts selon un ratio.",
    keywords: ["calcul de ratio", "simplifier un ratio", "rapport de proportion", "produit en croix", "terme manquant", "partage proportionnel", "règle de trois"],
    intro: [
      "Un ratio compare des quantités : 3 : 4 signifie trois parts d’une chose pour quatre parts d’une autre. Les ratios servent dans les recettes, le dosage du béton ou de la peinture, les échelles de cartes, le format des écrans et le partage des frais.",
      "Ce calculateur effectue les trois opérations les plus demandées. Il réduit un ratio de deux ou trois termes aux plus petits nombres entiers, même lorsque les termes sont décimaux ; il résout une proportion A : B = C : x pour trouver le terme manquant ; et il partage une quantité en parts qui respectent un ratio.",
    ],
    howToUse: [
      "Choisissez l’opération.",
      "Pour simplifier ou partager, saisissez deux ou trois termes positifs. Laissez le troisième terme vide pour un ratio à deux termes.",
      "Pour trouver un terme manquant, saisissez A, B et C de A : B = C : x.",
      "Pour partager, saisissez aussi la quantité à répartir, puis lisez la part de chacun dans le tableau.",
    ],
    formulas: [
      { title: "Simplification", expression: "A : B : C = (A ÷ g) : (B ÷ g) : (C ÷ g)", explanation: "g est le plus grand commun diviseur des termes. Les termes décimaux sont d’abord multipliés par la même puissance de 10 pour devenir entiers : 1,5 : 2,25 devient 150 : 225." },
      { title: "Terme manquant", expression: "A : B = C : x  ⇒  x = B × C ÷ A", explanation: "Deux ratios sont égaux lorsque leurs produits en croix sont égaux, A × x = B × C. A ne peut pas valoir 0." },
      { title: "Partage d’une quantité", expression: "part i = quantité × terme i ÷ (somme des termes)", explanation: "Chaque part reçoit la fraction du total que représente son terme dans la somme de tous les termes." },
      { title: "Forme 1 : n", expression: "A : B = 1 : (B ÷ A)", explanation: "Diviser chaque terme par le premier donne un ratio unitaire, pratique pour les échelles et les instructions de dosage." },
    ],
    examples: [
      {
        title: "Simplifier 1,5 : 2,25 : 3",
        steps: ["Multipliez chaque terme par 100 : 150 : 225 : 300", "Le plus grand commun diviseur est 75", "150 ÷ 75 : 225 ÷ 75 : 300 ÷ 75 = 2 : 3 : 4"],
      },
      {
        title: "Adapter une recette : 4 œufs demandent 7 dl de lait ; combien de lait pour 10 œufs ?",
        steps: ["4 : 7 = 10 : x", "x = 7 × 10 ÷ 4", "x = 17,5 dl de lait"],
      },
      {
        title: "Partager 700 selon le ratio 2 : 3 : 5",
        steps: ["Total des parts = 2 + 3 + 5 = 10, donc une part vaut 700 ÷ 10 = 70", "Parts : 2 × 70 = 140, 3 × 70 = 210, 5 × 70 = 350", "Vérification : 140 + 210 + 350 = 700"],
      },
    ],
    assumptions: [
      "Pour simplifier et partager, les termes du ratio doivent être positifs. Les décimaux sont traités exactement à partir des chiffres saisis, jusqu’à 40 chiffres par terme.",
      "Le mode terme manquant accepte n’importe quel nombre, y compris négatif, tant que A ne vaut pas 0.",
      "Les parts sont affichées avec au plus 4 décimales et ne sont pas arrondies à l’unité ; pour de l’argent ou des personnes, il peut falloir ajuster la dernière part à la main.",
    ],
    faqs: [
      { question: "Comment simplifier un ratio avec des décimales ?", answer: "Multipliez tous les termes par la même puissance de 10 jusqu’à obtenir des entiers, puis divisez-les par leur plus grand commun diviseur. 0,6 : 0,8 devient 6 : 8, qui se simplifie en 3 : 4." },
      { question: "Quelle est la différence entre un ratio et une fraction ?", answer: "Une fraction compare une partie au tout, alors qu’un ratio peut comparer des parties entre elles. Dans une classe de 12 filles et 18 garçons, le ratio filles/garçons est 2 : 3, mais la fraction de filles est 12/30 = 2/5." },
      { question: "Comment partager une addition selon un ratio ?", answer: "Choisissez « Partager une quantité selon un ratio », saisissez le montant et la part de chaque personne dans le ratio. Pour 90 partagés 1 : 2, le total fait 3 parts de 30 ; les parts sont donc 30 et 60." },
    ],
    sourcesUsedFor: ["Définition d’une proportion et résolution pour un terme inconnu."],
  },
  text: {
    mode: "Opération",
    modes: {
      simplify: "Simplifier un ratio",
      missing: "Trouver un terme manquant (A : B = C : x)",
      divide: "Partager une quantité selon un ratio",
    },
    termA: "Premier terme (A)",
    termB: "Deuxième terme (B)",
    termC: "Troisième terme (facultatif)",
    termHelp: "Un nombre positif. Les décimaux comme 1,5 sont acceptés.",
    termInvalid: "Saisissez un nombre positif, comme 4 ou 1,5.",
    termTooLong: "Saisissez au maximum 40 chiffres.",
    propA: "A",
    propB: "B",
    propC: "C",
    propHelp: "Résout A : B = C : x pour trouver x.",
    propAZero: "A ne peut pas valoir 0, car x = B × C ÷ A.",
    amount: "Quantité à partager",
    amountHelp: "N’importe quelle quantité : argent, grammes, litres, personnes ou minutes.",
    simplified: "Ratio simplifié",
    simplifiedCaption: "{original} réduit aux plus petits termes entiers.",
    decimalValue: "Valeur décimale (A ÷ B)",
    oneToN: "Forme 1 : n",
    totalParts: "Total des parts",
    missingTerm: "Terme manquant x",
    missingCaption: "{a} : {b} = {c} : x",
    proportion: "Proportion complète",
    ratioValue: "Valeur du ratio (B ÷ A)",
    shares: "Parts",
    sharesCaption: "{amount} partagé selon le ratio {ratio}.",
    sharesTable: "Répartition de la quantité",
    colPart: "Part",
    colTerm: "Terme du ratio",
    colShare: "Montant",
    colPercent: "Pourcentage du total",
    partN: "Part {n}",
    decimalNote: "Les termes décimaux sont d’abord multipliés par la même puissance de 10 pour devenir entiers, puis divisés par leur plus grand commun diviseur.",
  },
};

export default fr;
