import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ScientificNotationText } from "../text/en";

const fr: CalculatorTranslation<ScientificNotationText> = {
  content: {
    title: "Calculateur de notation scientifique",
    shortTitle: "Notation scientifique",
    summary: "Convertissez des nombres en notation scientifique, ingénieur et exponentielle (e), ou développez-les en écriture décimale.",
    metaTitle: "Calculateur de notation scientifique – Convertir des nombres",
    metaDescription: "Convertissez n’importe quel nombre en notation scientifique, en notation e et en notation ingénieur, ou développez une notation e en nombre décimal classique.",
    keywords: ["notation scientifique", "écriture scientifique", "convertir en notation scientifique", "notation ingénieur", "puissances de dix", "notation exponentielle"],
    intro: [
      "La notation scientifique écrit un nombre sous la forme d’une valeur comprise entre 1 et 10 multipliée par une puissance de dix, par exemple 1,234 × 10⁵. Elle rend lisibles les nombres très grands comme très petits.",
      "Saisissez un nombre décimal ou en notation e : le calculateur affiche toutes les formes courantes.",
    ],
    howToUse: [
      "Saisissez un nombre comme 123400 ou 0.00056, ou une notation e comme 6.02e23.",
      "Consultez les formes scientifique, en notation e, ingénieur et décimale.",
    ],
    formulas: [
      { title: "Notation scientifique", expression: "x = a × 10ⁿ, où 1 ≤ |a| < 10", explanation: "Déplacez la virgule jusqu’à ce qu’il reste un seul chiffre non nul à sa gauche ; n compte le nombre de déplacements." },
      { title: "Notation ingénieur", expression: "x = a × 10ⁿ, où n est un multiple de 3", explanation: "Correspond aux préfixes d’unités comme kilo (10³) et micro (10⁻⁶)." },
    ],
    examples: [
      {
        title: "123 400",
        steps: ["Déplacez la virgule de 5 rangs vers la gauche", "1,234 × 10⁵"],
      },
      {
        title: "0,00056",
        steps: ["Déplacez la virgule de 4 rangs vers la droite", "5,6 × 10⁻⁴"],
      },
    ],
    assumptions: [
      "Les nombres sont convertis en double précision JavaScript, soit environ 15 à 17 chiffres significatifs.",
      "Les formes décimales de plus de 21 chiffres ne sont pas affichées.",
    ],
    faqs: [
      { question: "Comment écrire un nombre en notation scientifique ?", answer: "Déplacez la virgule pour qu’il reste un seul chiffre non nul à sa gauche, puis multipliez par 10 puissance le nombre de rangs déplacés. 4 500 devient 4,5 × 10³." },
      { question: "Que signifie 6.02e23 ?", answer: "C’est la notation e de 6,02 × 10²³. Le e signifie « fois dix puissance »." },
      { question: "Qu’est-ce que la notation ingénieur ?", answer: "Elle ressemble à la notation scientifique, mais l’exposant est toujours un multiple de 3, ce qui correspond aux préfixes kilo, méga et milli." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    number: "Nombre",
    numberHelp: "Un nombre décimal comme 0.00056 ou une notation e comme 6.02e23. Utilisez le point comme séparateur décimal.",
    invalid: "Saisissez un nombre comme 123400, 0.00056 ou 6.02e23.",
    tooLarge: "Saisissez un nombre inférieur à 1,8 × 10³⁰⁸.",
    scientific: "Notation scientifique",
    eNotation: "Notation e",
    engineering: "Notation ingénieur",
    decimal: "Forme décimale",
    tooLong: "Trop long pour être affiché",
  },
};

export default fr;
