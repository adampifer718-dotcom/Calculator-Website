import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CombinationsText } from "../text/en";

const fr: CalculatorTranslation<CombinationsText> = {
  content: {
    title: "Calculateur de permutations et combinaisons",
    shortTitle: "Permutations et combinaisons",
    summary: "Dénombrez exactement les façons de choisir ou d’ordonner r éléments parmi n : nCr, nPr et les deux comptes avec répétition.",
    metaTitle: "Calculateur de permutations et combinaisons – nCr, nPr",
    metaDescription:
      "Calculez nCr et nPr exacts pour n jusqu’à 10 000, avec ou sans répétition ; les très grands résultats s’affichent en notation scientifique.",
    keywords: ["permutations", "combinaisons", "arrangements", "nCr", "nPr", "k parmi n", "coefficient binomial", "combinaisons avec répétition", "dénombrement", "factorielle"],
    intro: [
      "Combien de comités différents de 4 personnes un club de 12 membres peut-il former ? De combien de façons peut-on attribuer 3 prix à 25 participants ? Ce sont des problèmes de dénombrement, et la réponse dépend de l’importance de l’ordre.",
      "Une combinaison compte les sélections où l’ordre n’a pas d’importance : le comité {Ana, Ben, Cy} est le même dans n’importe quel ordre. Une permutation compte les arrangements où l’ordre compte : premier, deuxième et troisième prix sont des résultats différents. Ce calculateur donne les deux, de façon exacte, ainsi que les versions où un même élément peut être choisi plusieurs fois.",
    ],
    howToUse: [
      "Saisissez n, le nombre d’éléments distincts parmi lesquels choisir (de 0 à 10 000).",
      "Saisissez r, le nombre d’éléments choisis (de 0 à n).",
      "Lisez nCr pour les sélections non ordonnées et nPr pour les arrangements ordonnés.",
      "Utilisez les résultats avec répétition lorsqu’un même élément peut être choisi de nouveau, comme des boules de glace (combinaisons) ou les chiffres d’un code PIN (permutations).",
    ],
    formulas: [
      { title: "Combinaisons", expression: "nCr = n! ÷ (r! × (n − r)!)", explanation: "Sélections de r éléments parmi n où l’ordre n’a pas d’importance." },
      { title: "Permutations", expression: "nPr = n! ÷ (n − r)! = n × (n − 1) × … × (n − r + 1)", explanation: "Arrangements ordonnés de r éléments parmi n. nPr = nCr × r!" },
      { title: "Combinaisons avec répétition", expression: "C(n + r − 1, r)", explanation: "Sélections de r éléments parmi n types lorsqu’un type peut être choisi plusieurs fois (le dénombrement « étoiles et barres »)." },
      { title: "Permutations avec répétition", expression: "nʳ", explanation: "Suites ordonnées de longueur r où chaque position peut être n’importe lequel des n éléments." },
    ],
    examples: [
      {
        title: "Comités de 4 dans un club de 12",
        steps: ["12C4 = 12! ÷ (4! × 8!)", "= (12 × 11 × 10 × 9) ÷ (4 × 3 × 2 × 1) = 11 880 ÷ 24", "= 495 comités différents"],
      },
      {
        title: "Or, argent et bronze parmi 25 participants",
        steps: ["L’ordre compte pour les médailles : 25P3 = 25 × 24 × 23 = 13 800", "Si les 3 gagnants recevaient des prix identiques : 25C3 = 13 800 ÷ 3! = 2 300", "Le résultat principal affiche 2 300 ; le nombre de permutations apparaît en dessous"],
      },
      {
        title: "Choisir 100 éléments parmi 200",
        steps: ["200C100 = 200! ÷ (100! × 100!)", "La valeur exacte compte 59 chiffres et commence par 9 054 851 465…", "Affichée sous la forme 9,054851 × 10⁵⁸ (59 chiffres)"],
      },
    ],
    assumptions: [
      "Les n éléments sont distincts. Dénombrer les arrangements d’éléments comportant des doublons (comme les lettres de BANANA) nécessite une autre formule.",
      "Les quatre résultats sont calculés exactement en arithmétique entière. Les résultats de plus de 30 chiffres sont affichés en notation scientifique, arrondis à 7 chiffres significatifs, avec le nombre total de chiffres.",
      "Par convention 0! = 1, donc nC0 = nP0 = 1 : ne rien choisir compte comme une façon de faire.",
      "n est limité à 10 000 pour que les calculs restent rapides ; nʳ peut alors compter jusqu’à 40 001 chiffres.",
    ],
    faqs: [
      {
        question: "Comment savoir s’il faut une permutation ou une combinaison ?",
        answer: "Demandez-vous si échanger deux éléments choisis donne un résultat différent. Si oui, comme pour des places, des classements ou des mots de passe, utilisez une permutation. Sinon, comme pour une main de cartes ou un groupe de personnes, utilisez une combinaison.",
      },
      {
        question: "Pourquoi nCr est-il égal à nC(n − r) ?",
        answer: "Choisir r éléments à prendre revient à choisir les n − r éléments à laisser. Par exemple, choisir 3 personnes sur 10 pour une équipe (120 façons) équivaut à choisir les 7 qui restent à l’écart (120 façons également).",
      },
      {
        question: "Que signifie « avec répétition » ?",
        answer: "Cela signifie qu’un élément peut être choisi plusieurs fois. Un code PIN à 4 chiffres relève des permutations avec répétition : 10⁴ = 10 000 codes. Choisir 3 boules parmi 5 parfums, deux boules pouvant avoir le même parfum, relève des combinaisons avec répétition : C(7, 3) = 35.",
      },
    ],
    sourcesUsedFor: [
      "Le principe multiplicatif et les formules des permutations et combinaisons de n objets distincts.",
    ],
  },
  text: {
    n: "Nombre total d’éléments (n)",
    nHelp: "Un nombre entier de 0 à 10 000.",
    r: "Éléments choisis (r)",
    rHelp: "Un nombre entier de 0 à n.",
    rTooLarge: "r ne peut pas être supérieur à n ({n}). On ne peut pas choisir plus d’éléments distincts qu’il n’y en a.",
    combinations: "Combinaisons, nCr (l’ordre ne compte pas)",
    permutations: "Permutations, nPr (l’ordre compte)",
    combinationsRepeat: "Combinaisons avec répétition, C(n + r − 1, r)",
    permutationsRepeat: "Permutations avec répétition, nʳ",
    digits: { zero: "{n} chiffre", one: "{n} chiffre", two: "{n} chiffres", few: "{n} chiffres", many: "{n} de chiffres", other: "{n} chiffres" },
    large: "{value} ({digits})",
    caption: "Façons de choisir {r} éléments parmi {n} lorsque l’ordre ne compte pas.",
    largeNote: "Les résultats de plus de 30 chiffres sont affichés en notation scientifique, arrondis à 7 chiffres significatifs, avec le nombre exact de chiffres.",
    zeroRepeat: "Avec n = 0 et r = 0, il existe exactement une façon de ne rien choisir : chaque compte vaut donc 1.",
  },
};

export default fr;
