import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FractionText } from "../text/en";

const fr: CalculatorTranslation<FractionText> = {
  content: {
    title: "Calculateur de fractions",
    shortTitle: "Fractions",
    summary: "Additionnez, soustrayez, multipliez ou divisez des fractions et des nombres fractionnaires, avec le résultat sous forme irréductible et en nombre décimal.",
    metaTitle: "Calculateur de fractions – Opérations et simplification",
    metaDescription:
      "Additionnez, soustrayez, multipliez et divisez fractions, nombres fractionnaires et décimaux, avec un résultat exact irréductible, fractionnaire et décimal.",
    keywords: ["calcul fraction", "calculatrice fraction", "simplifier une fraction", "fraction irréductible", "additionner des fractions", "diviser des fractions", "nombre fractionnaire"],
    intro: [
      "Saisissez deux nombres sous forme de fractions (3/4), de nombres fractionnaires (1 1/2), d’entiers ou de décimaux, choisissez une opération et obtenez le résultat exact.",
      "Le calculateur travaille avec des numérateurs et des dénominateurs entiers exacts : le résultat ne comporte donc aucune erreur d’arrondi. Il est réduit à sa forme irréductible et affiché aussi sous forme de nombre fractionnaire et de nombre décimal.",
    ],
    howToUse: [
      "Saisissez le premier nombre, par exemple 1/2 ou 2 1/4.",
      "Choisissez l’addition, la soustraction, la multiplication ou la division.",
      "Saisissez le second nombre.",
      "Lisez la fraction simplifiée, le nombre fractionnaire et la valeur décimale.",
    ],
    formulas: [
      { title: "Addition et soustraction", expression: "a/b ± c/d = (a × d ± c × b) ÷ (b × d)", explanation: "Réécrivez les deux fractions sur un dénominateur commun, puis additionnez ou soustrayez les numérateurs." },
      { title: "Multiplication", expression: "a/b × c/d = (a × c) ÷ (b × d)", explanation: "Multipliez les numérateurs entre eux et les dénominateurs entre eux." },
      { title: "Division", expression: "a/b ÷ c/d = (a × d) ÷ (b × c)", explanation: "Multipliez par l’inverse de la seconde fraction. La division par zéro n’est pas définie." },
      { title: "Forme irréductible", expression: "n/d = (n ÷ g) ÷ (d ÷ g), g = pgcd(n, d)", explanation: "Divisez le numérateur et le dénominateur par leur plus grand commun diviseur." },
    ],
    examples: [
      {
        title: "1/2 + 1/3",
        steps: ["1/2 + 1/3 = (1 × 3 + 1 × 2) ÷ (2 × 3)", "= 5/6 ≈ 0,8333"],
      },
      {
        title: "2 1/4 × 4/3",
        steps: ["2 1/4 = 9/4", "9/4 × 4/3 = 36/12 = 3"],
      },
    ],
    assumptions: [
      "Les entiers, fractions, nombres fractionnaires et décimaux finis sont convertis en fractions exactes : 0,75 devient 3/4.",
      "Les numérateurs et dénominateurs sont limités à 1 000 000 000 000 pour que les résultats restent lisibles.",
      "Un nombre fractionnaire négatif comme −1 1/2 signifie −(1 + 1/2).",
    ],
    faqs: [
      { question: "Comment saisir un nombre fractionnaire ?", answer: "Tapez la partie entière, une espace, puis la fraction, par exemple 2 1/4. Pour une valeur négative, placez le signe moins en premier : -2 1/4." },
      { question: "Comment simplifier une fraction ?", answer: "Saisissez-la comme premier nombre, choisissez la multiplication et saisissez 1 comme second nombre. Le résultat s’affiche sous forme irréductible." },
      { question: "Pourquoi la valeur décimale diffère-t-elle de la fraction ?", answer: "Certaines fractions, comme 1/3, ont un développement décimal infini. La fraction est exacte ; la valeur décimale est arrondie pour l’affichage." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    a: "Premier nombre",
    aHelp: "Une fraction (3/4), un nombre fractionnaire (1 1/2), un entier ou un décimal.",
    b: "Second nombre",
    bHelp: "Mêmes formats que pour le premier nombre.",
    operation: "Opération",
    operations: { add: "Addition (+)", subtract: "Soustraction (−)", multiply: "Multiplication (×)", divide: "Division (÷)" },
    errors: {
      invalid: "Saisissez une fraction comme 3/4, un nombre fractionnaire comme 1 1/2, un entier ou un décimal.",
      zeroDenominator: "Un dénominateur ne peut pas être égal à 0.",
      tooLarge: "Utilisez des numérateurs et des dénominateurs inférieurs ou égaux à {max}.",
      divideByZero: "La division par zéro est impossible.",
    },
    result: "Résultat sous forme irréductible",
    caption: "{a} {op} {b} = {result}",
    mixed: "En nombre fractionnaire",
    decimal: "En nombre décimal",
    note: "Les fractions sont réduites à leur forme irréductible en divisant par le plus grand commun diviseur. La valeur décimale n’est arrondie que pour l’affichage.",
  },
};

export default fr;
