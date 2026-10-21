import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RecipeScalerText } from "../text/en";

const fr: CalculatorTranslation<RecipeScalerText> = {
  content: {
    title: "Calculateur de proportions de recette",
    shortTitle: "Proportions de recette",
    summary: "Augmentez ou réduisez les quantités d’ingrédients d’une recette pour n’importe quel nombre de portions.",
    metaTitle: "Calculateur de proportions de recette – Portions",
    metaDescription:
      "Adaptez n’importe quelle recette à un nouveau nombre de portions : collez la liste d’ingrédients et obtenez les quantités ajustées en fractions pratiques.",
    keywords: ["adapter une recette", "convertir recette nombre de personnes", "proportions recette", "portions", "ingrédients", "doubler une recette", "diviser une recette par deux"],
    intro: [
      "Adapter une recette consiste à multiplier chaque quantité par le même coefficient : le nombre de portions souhaité divisé par le nombre de portions d’origine.",
      "Collez votre liste d’ingrédients : chaque quantité est recalculée et affichée, si possible, sous forme de fraction usuelle.",
    ],
    howToUse: [
      "Saisissez le nombre de portions prévu par la recette.",
      "Saisissez le nombre de portions souhaité.",
      "Collez les ingrédients, un par ligne, en commençant par la quantité.",
      "Lisez le coefficient et la liste ajustée.",
    ],
    formulas: [
      {
        title: "Coefficient",
        expression: "coefficient = portions souhaitées ÷ portions d’origine",
        explanation: "Par exemple, 6 ÷ 4 = 1,5.",
      },
      {
        title: "Nouvelle quantité",
        expression: "nouvelle quantité = quantité d’origine × coefficient",
        explanation: "Appliqué à chaque ingrédient dont la ligne commence par une quantité.",
      },
    ],
    examples: [
      {
        title: "Une recette pour 4 adaptée à 6 personnes",
        steps: ["Coefficient = 6 ÷ 4 = 1,5", "2 tasses → 3 tasses ; 3/4 tasse → 1 1/8 tasse"],
      },
      {
        title: "Une recette pour 8 adaptée à 2 personnes",
        steps: ["Coefficient = 2 ÷ 8 = 0,25", "4 œufs → 1 œuf"],
      },
    ],
    assumptions: [
      "Les quantités doivent figurer en début de ligne, sous forme de nombres entiers, de décimaux, de fractions (1/2), de nombres fractionnaires (1 1/2) ou de symboles comme ½.",
      "Les unités ne sont pas converties ; les quantités ajustées conservent l’unité d’origine.",
      "Les temps de cuisson, la taille des moules, la levure et l’assaisonnement ne varient pas toujours de façon proportionnelle ; ajustez selon votre goût et vérifiez la cuisson.",
    ],
    faqs: [
      {
        question: "Comment diviser une recette par deux ?",
        answer: "Utilisez un coefficient de 0,5 en indiquant comme nombre de portions souhaité la moitié du nombre d’origine.",
      },
      {
        question: "Et pour les œufs ?",
        answer: "Arrondissez à l’œuf entier le plus proche, ou battez un œuf et utilisez-en une partie au poids.",
      },
      {
        question: "Les temps de cuisson changent-ils ?",
        answer: "Souvent. Un moule plus grand ou plus petit modifie le temps de cuisson : vérifiez tôt et ajustez.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    original: "Nombre de portions de la recette",
    desired: "Nombre de portions souhaité",
    ingredients: "Ingrédients (un par ligne)",
    ingredientsHelp: "Commencez chaque ligne par la quantité, par exemple « 1 1/2 tasse de farine ». Les lignes sans quantité sont conservées telles quelles.",
    defaultIngredients: "2 tasses de farine\n1 1/2 c. à café de levure chimique\n3/4 tasse de sucre\n2 œufs\n1 tasse de lait\nSel selon votre goût",
    factor: "Coefficient",
    caption: "Multipliez chaque quantité par {factor}.",
    tableCaption: "Ingrédients ajustés",
    original_: "Recette d’origine",
    scaled: "Quantité ajustée",
    note: "Les ingrédients entiers comme les œufs peuvent nécessiter un arrondi. Les temps de cuisson et la taille des moules ne varient pas proportionnellement.",
  },
};

export default fr;
