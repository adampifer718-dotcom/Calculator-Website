import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PythagoreanText } from "../text/en";

const fr: CalculatorTranslation<PythagoreanText> = {
  content: {
    title: "Calculateur du théorème de Pythagore",
    shortTitle: "Théorème de Pythagore",
    summary: "Trouvez le côté manquant d’un triangle rectangle grâce à a² + b² = c².",
    metaTitle: "Calculateur du théorème de Pythagore – Côté manquant",
    metaDescription: "Trouvez l’hypoténuse ou un côté de l’angle droit d’un triangle rectangle avec le théorème de Pythagore (a² + b² = c²), ainsi que son aire et son périmètre.",
    keywords: ["théorème de Pythagore", "Pythagore", "calcul hypoténuse", "triangle rectangle", "a2 + b2 = c2", "côté d’un triangle"],
    intro: [
      "Dans un triangle rectangle, le carré de l’hypoténuse est égal à la somme des carrés des deux autres côtés : a² + b² = c².",
      "Saisissez deux côtés pour trouver le troisième. Le calculateur affiche aussi l’aire et le périmètre du triangle.",
    ],
    howToUse: [
      "Indiquez si vous cherchez l’hypoténuse ou un côté de l’angle droit.",
      "Saisissez les deux côtés connus dans la même unité.",
      "Consultez le côté manquant, l’aire et le périmètre.",
    ],
    formulas: [
      { title: "Hypoténuse", expression: "c = √(a² + b²)", explanation: "L’hypoténuse est le côté le plus long, opposé à l’angle droit." },
      { title: "Côté manquant", expression: "a = √(c² − b²)", explanation: "L’hypoténuse doit être plus longue que le côté connu." },
    ],
    examples: [
      {
        title: "Côtés de l’angle droit de 3 et 4",
        steps: ["c = √(3² + 4²) = √25", "= 5"],
      },
      {
        title: "Hypoténuse de 13, côté de 5",
        steps: ["a = √(13² − 5²) = √144", "= 12"],
      },
    ],
    assumptions: [
      "Le triangle possède un angle droit.",
      "Tous les côtés sont exprimés dans la même unité ; les résultats sont affichés avec 6 décimales.",
    ],
    faqs: [
      { question: "Le théorème de Pythagore s’applique-t-il à tous les triangles ?", answer: "Non, uniquement aux triangles rectangles. Pour les autres triangles, utilisez la loi des cosinus (théorème d’Al-Kashi)." },
      { question: "Qu’est-ce qu’un triplet pythagoricien ?", answer: "Trois nombres entiers qui vérifient a² + b² = c², comme 3, 4, 5 ou 5, 12, 13." },
      { question: "Quel côté est l’hypoténuse ?", answer: "Le côté le plus long, opposé à l’angle droit." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    solve: "Calculer",
    modes: { hypotenuse: "L’hypoténuse (c) à partir des deux autres côtés", leg: "Un côté à partir de l’hypoténuse et de l’autre côté" },
    a: "Côté a",
    b: "Côté b",
    c: "Hypoténuse c",
    leg: "Côté connu",
    legTooLong: "Un côté de l’angle droit doit être plus court que l’hypoténuse.",
    missingLeg: "Côté manquant",
    hypotenuse: "Hypoténuse (c)",
    area: "Aire du triangle",
    perimeter: "Périmètre",
  },
};

export default fr;
