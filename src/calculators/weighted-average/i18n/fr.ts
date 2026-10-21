import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WeightedAverageText } from "../text/en";

const fr: CalculatorTranslation<WeightedAverageText> = {
  content: {
    title: "Calculateur de moyenne pondérée",
    shortTitle: "Moyenne pondérée",
    summary: "Faites la moyenne d’une liste de valeurs dont certaines comptent plus que d’autres, et comparez-la à la moyenne simple.",
    metaTitle: "Calculateur de moyenne pondérée – Moyenne avec coefficients",
    metaDescription:
      "Calculez la moyenne pondérée de 100 valeurs maximum avec leurs coefficients, la somme des coefficients et la moyenne simple non pondérée pour comparaison.",
    keywords: ["moyenne pondérée", "calcul moyenne pondérée", "moyenne avec coefficients", "coefficient", "moyenne des notes", "prix moyen", "pondération"],
    intro: [
      "Une moyenne pondérée est une moyenne dans laquelle chaque valeur compte selon son poids, ou coefficient. Un examen final qui vaut la moitié de la note tire le résultat plus fortement qu’une interrogation qui en vaut un dixième, et un gros achat pèse davantage sur le prix moyen qu’un petit.",
      "Saisissez les valeurs et la liste de coefficients correspondante. Le calculateur donne la moyenne pondérée et, pour comparaison, la moyenne ordinaire, qui traite toutes les valeurs de la même façon.",
    ],
    howToUse: [
      "Saisissez les valeurs dans le premier champ, séparées par des points-virgules, des espaces ou des retours à la ligne.",
      "Saisissez les coefficients dans le second champ, dans le même ordre, un pour chaque valeur.",
      "Les coefficients peuvent être des pourcentages, des crédits, des quantités ou tout autre nombre positif ou nul. Leur somme n’a pas besoin de faire 100 ni 1.",
      "Lisez la moyenne pondérée. Si elle s’écarte beaucoup de la moyenne non pondérée, c’est que les valeurs à fort coefficient l’attirent vers elles.",
    ],
    formulas: [
      { title: "Moyenne pondérée", expression: "x̄w = Σ(wᵢ·xᵢ) ÷ Σwᵢ", explanation: "Multipliez chaque valeur par son coefficient, additionnez les produits, puis divisez par la somme des coefficients." },
      { title: "Moyenne non pondérée", expression: "x̄ = Σxᵢ ÷ n", explanation: "La moyenne ordinaire, égale à la moyenne pondérée quand tous les coefficients sont identiques." },
    ],
    examples: [
      {
        title: "Note d’un cours composée de plusieurs épreuves pondérées",
        steps: [
          "Produits : 82 × 20 = 1 640 ; 90 × 50 = 4 500 ; 75 × 30 = 2 250",
          "Somme des produits = 8 390 et somme des coefficients = 100",
          "Moyenne pondérée = 8 390 ÷ 100 = 83,9, alors que la moyenne simple vaut environ 82,33",
        ],
      },
      {
        title: "Points de note pondérés par le nombre de crédits",
        steps: ["Produits : 14,8 + 9 + 12 + 4,6 = 40,4", "Somme des coefficients = 4 + 3 + 3 + 2 = 12 crédits", "Moyenne pondérée = 40,4 ÷ 12 ≈ 3,3667"],
      },
      {
        title: "Prix moyen payé au kilogramme",
        steps: [
          "Prix au kg pondérés par les kilogrammes achetés : 12,5 × 40 + 14 × 25 + 11,75 × 35 = 500 + 350 + 411,25 = 1 261,25",
          "Quantité totale = 100 kg",
          "Prix moyen = 1 261,25 ÷ 100 = 12,6125 par kg",
        ],
      },
    ],
    assumptions: [
      "Les valeurs et les coefficients sont associés selon leur position : le premier coefficient va avec la première valeur, et ainsi de suite.",
      "Les coefficients doivent être nuls ou positifs, et au moins l’un d’eux doit être supérieur à zéro. Un coefficient de 0 exclut la valeur correspondante de la moyenne pondérée, mais pas de la moyenne non pondérée.",
      "Les résultats sont affichés avec 10 chiffres significatifs. Jusqu’à 100 paires sont acceptées.",
    ],
    faqs: [
      {
        question: "La somme des coefficients doit-elle faire 100 % ?",
        answer: "Non. La formule divise par la somme des coefficients : 20, 50 et 30 donnent donc le même résultat que 0,2 ; 0,5 et 0,3, ou que 2, 5 et 3.",
      },
      {
        question: "Quand la moyenne pondérée est-elle égale à la moyenne ordinaire ?",
        answer: "Quand tous les coefficients sont égaux. Chaque valeur a alors la même influence, et la formule se ramène à la somme des valeurs divisée par leur nombre.",
      },
      {
        question: "Comment trouver la note nécessaire à l’examen final ?",
        answer: "Écrivez la moyenne pondérée en prenant la note de l’examen final comme inconnue, puis résolvez l’équation. Par exemple, avec 80 sur des travaux qui comptent pour 60 % et un objectif de 85, il faut 0,6 × 80 + 0,4 × s = 85, donc s = 92,5.",
      },
    ],
    sourcesUsedFor: ["Définition d’une moyenne pondérée : chaque valeur multipliée par son poids, les produits additionnés, puis divisés par la somme des poids."],
  },
  text: {
    values: "Valeurs",
    valuesHelp: "Une valeur par élément, séparées par des points-virgules, des espaces ou des retours à la ligne.",
    weights: "Coefficients",
    weightsHelp: "Un coefficient par valeur, dans le même ordre. Pourcentages, crédits ou quantités conviennent tous ; leur somme n’a pas besoin de faire 100.",
    errors: {
      empty: "Saisissez au moins un nombre.",
      tooMany: "Saisissez au plus {max} nombres.",
      notNumber: "« {token} » n’est pas un nombre. Séparez les valeurs par des points-virgules, des espaces ou des retours à la ligne.",
      tooLarge: "« {token} » est trop grand.",
    },
    maxCount: "Saisissez au plus {max} nombres.",
    tooBig: "{value} est trop grand. Chaque nombre peut valoir au plus {max} en valeur absolue.",
    negativeWeight: "Les coefficients ne peuvent pas être négatifs ({value}).",
    zeroTotal: "La somme des coefficients vaut 0. Au moins un coefficient doit être supérieur à 0.",
    countMismatch: "Saisissez un coefficient pour chaque valeur : vous avez saisi {values} et {weights}.",
    valueCount: { zero: "{n} valeur", one: "{n} valeur", two: "{n} valeurs", few: "{n} valeurs", many: "{n} de valeurs", other: "{n} valeurs" },
    weightCount: { zero: "{n} coefficient", one: "{n} coefficient", two: "{n} coefficients", few: "{n} coefficients", many: "{n} de coefficients", other: "{n} coefficients" },
    weightedMean: "Moyenne pondérée",
    caption: "Calculée sur {count}.",
    sumOfWeights: "Somme des coefficients",
    sumOfProducts: "Somme des produits valeur × coefficient",
    unweightedMean: "Moyenne non pondérée (pour comparaison)",
  },
};

export default fr;
