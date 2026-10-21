import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SigFigText } from "../text/en";

const fr: CalculatorTranslation<SigFigText> = {
  content: {
    title: "Calculateur de chiffres significatifs",
    shortTitle: "Chiffres significatifs",
    summary: "Comptez les chiffres significatifs d’un nombre ou arrondissez un nombre au nombre de chiffres significatifs souhaité.",
    metaTitle: "Chiffres significatifs – Compter et arrondir un nombre",
    metaDescription:
      "Comptez les chiffres significatifs de n’importe quel nombre, notation E comprise, ou arrondissez à un nombre de chiffres donné, avec la notation scientifique.",
    keywords: ["chiffres significatifs", "compter chiffres significatifs", "arrondir chiffres significatifs", "précision", "notation scientifique", "chimie", "physique"],
    intro: [
      "Les chiffres significatifs indiquent avec quelle précision un nombre est connu. Ce calculateur les compte selon les règles habituelles, ou arrondit un nombre à la précision choisie.",
      "Saisissez le nombre exactement tel qu’il est écrit, car les zéros finaux et la virgule décimale modifient le décompte.",
    ],
    howToUse: [
      "Choisissez de compter ou d’arrondir.",
      "Saisissez le nombre exactement tel qu’il est écrit, zéros finaux compris.",
      "Pour arrondir, indiquez le nombre de chiffres significatifs à conserver.",
    ],
    formulas: [
      {
        title: "Règles de comptage",
        expression:
          "1. Les chiffres non nuls sont significatifs.\n2. Les zéros situés entre des chiffres non nuls sont significatifs.\n3. Les zéros de tête ne sont jamais significatifs.\n4. Les zéros finaux ne sont significatifs qu’en présence d’une virgule décimale.",
        explanation: "Ce sont les règles enseignées dans la plupart des cours de chimie et de physique.",
      },
      {
        title: "Arrondi",
        expression: "Conservez n chiffres à partir du premier chiffre non nul, puis arrondissez le dernier.",
        explanation: "La notation scientifique lève toute ambiguïté sur les zéros finaux.",
      },
    ],
    examples: [
      {
        title: "Combien de chiffres significatifs dans 0,004050 ?",
        steps: ["Les zéros de tête 0,00 ne comptent pas", "Le 4, le 0, le 5 et le 0 final comptent : 4 chiffres significatifs"],
      },
      {
        title: "Arrondir 123 456 à 3 chiffres significatifs",
        steps: ["On garde 1, 2, 3 ; le chiffre suivant est 4, donc on arrondit vers le bas", "123 000, soit 1,23 × 10⁵"],
      },
    ],
    assumptions: [
      "Les zéros finaux d’un nombre entier sans virgule décimale sont considérés comme non significatifs.",
      "Les nombres sont traités avec 15 chiffres significatifs au maximum.",
    ],
    faqs: [
      {
        question: "Les zéros finaux sont-ils significatifs ?",
        answer: "Seulement si le nombre comporte une virgule décimale. 2,50 a 3 chiffres significatifs, mais 250 n’en a que 2, sauf s’il est écrit « 250. » ou 2,50 × 10².",
      },
      {
        question: "Les zéros de tête sont-ils significatifs ?",
        answer: "Non. Dans 0,0071, les zéros ne servent qu’à placer la virgule : le nombre a donc 2 chiffres significatifs.",
      },
      {
        question: "Pourquoi utiliser la notation scientifique ?",
        answer: "Elle montre exactement quels chiffres sont significatifs : 1,20 × 10³ en a clairement 3.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    task: "Opération",
    tasks: { count: "Compter les chiffres significatifs", round: "Arrondir à n chiffres significatifs" },
    number: "Nombre",
    numberHelp: "Saisissez-le exactement tel qu’il est écrit, zéros finaux compris. La virgule décimale (0,004050) et le point (0.004050) sont acceptés ; les espaces entre milliers sont ignorés. La notation E, comme 6,02e23, est acceptée.",
    invalid: "Saisissez un nombre comme 1200, 0,0045 ou 6,02e23.",
    zero: "Saisissez un nombre non nul.",
    tooLarge: "Saisissez un nombre plus petit.",
    digits: "Chiffres significatifs à conserver",
    rounded: "Arrondi à {digits} chiffres significatifs",
    scientific: "Notation scientifique",
    originalCount: "Chiffres significatifs du nombre d’origine",
    roundNote: "Les zéros finaux d’un nombre entier comme 123 000 sont ambigus ; la notation scientifique indique exactement quels chiffres sont significatifs.",
    count: "Chiffres significatifs",
    countCaption: "{number} a {count} chiffres significatifs.",
    countCaptionOne: "{number} a 1 chiffre significatif.",
    inScientific: "En notation scientifique",
    countNote: "Les zéros finaux d’un nombre entier sans virgule décimale (comme 1200) sont considérés comme non significatifs. Saisissez « 1200, » ou « 1200. » pour les rendre significatifs.",
  },
};

export default fr;
