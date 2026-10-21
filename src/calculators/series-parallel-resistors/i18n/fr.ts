import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ResistorsText } from "../text/en";

const fr: CalculatorTranslation<ResistorsText> = {
  content: {
    title: "Calculateur de résistances en série et en parallèle",
    shortTitle: "Résistances en série/parallèle",
    summary: "Calculez la résistance totale d’un maximum de 50 résistances montées en série ou en parallèle, ainsi que la conductance en parallèle.",
    metaTitle: "Calculateur de résistances série et parallèle – Total en Ω",
    metaDescription:
      "Additionnez jusqu’à 50 résistances en série ou en parallèle pour obtenir la résistance équivalente en Ω, kΩ ou MΩ, ainsi que la conductance totale en siemens.",
    keywords: ["calcul résistance", "résistances en série", "résistances en parallèle", "résistance équivalente", "résistance totale", "association de résistances", "conductance", "siemens", "ohms"],
    intro: [
      "Lorsque des résistances sont reliées bout à bout, en série, le même courant les traverse toutes et leurs valeurs s’additionnent simplement. Lorsqu’elles sont branchées côte à côte, en parallèle, chacune reçoit la même tension et le courant se répartit entre elles : l’ensemble présente alors une résistance inférieure à celle de chaque résistance prise seule.",
      "Saisissez une liste de valeurs pour obtenir les deux totaux à la fois. Choisissez le montage que vous réalisez pour en faire le résultat principal, et indiquez l’unité dans laquelle vous avez saisi les valeurs. Les totaux sont affichés dans l’unité la plus lisible ainsi qu’en ohms.",
    ],
    howToUse: [
      "Indiquez si vous avez saisi les valeurs en ohms, en kilohms ou en mégohms.",
      "Choisissez série ou parallèle pour définir le total affiché comme résultat principal.",
      "Saisissez de 1 à 50 résistances, séparées par des points-virgules, des espaces ou des retours à la ligne.",
      "Lisez la résistance totale, le total de l’autre montage et la conductance en parallèle en siemens.",
    ],
    formulas: [
      { title: "Série", expression: "R_total = R₁ + R₂ + … + Rₙ", explanation: "Le même courant traverse chaque résistance : les chutes de tension s’additionnent." },
      { title: "Parallèle", expression: "1 ÷ R_total = 1 ÷ R₁ + 1 ÷ R₂ + … + 1 ÷ Rₙ", explanation: "Chaque résistance est soumise à la tension complète : les courants (et les conductances) s’additionnent." },
      { title: "Conductance", expression: "G = 1 ÷ R, en siemens (S)", explanation: "La conductance totale en parallèle est la somme des conductances individuelles." },
    ],
    examples: [
      {
        title: "220 Ω, 470 Ω et 1 kΩ en série",
        steps: ["R_total = 220 + 470 + 1 000 = 1 690 Ω", "Affiché sous la forme 1,69 kΩ", "En parallèle, ces trois résistances donneraient environ 130,325 Ω"],
      },
      {
        title: "4,7 kΩ, 10 kΩ et 22 kΩ en parallèle",
        steps: ["G = 1/4 700 + 1/10 000 + 1/22 000 ≈ 0,000358221 S", "R_total = 1 ÷ 0,000358221 ≈ 2 791,58 Ω", "Affiché sous la forme 2,79158 kΩ, moins que la plus petite résistance (4,7 kΩ)"],
      },
      {
        title: "Trois résistances identiques de 330 Ω en parallèle",
        steps: ["Résistances identiques en parallèle : R_total = R ÷ n", "330 ÷ 3 = 110 Ω", "En série, elles donneraient 990 Ω"],
      },
    ],
    assumptions: [
      "Les résistances sont idéales : leurs valeurs ne varient ni avec la température, ni avec le courant, ni avec la fréquence, et les fils de liaison n’ont aucune résistance.",
      "Toutes les résistances forment une simple chaîne en série ou un seul groupe en parallèle. Pour un réseau mixte, combinez chaque groupe étape par étape et saisissez les totaux partiels.",
      "Les résistances réelles ont une tolérance (souvent ±1 % ou ±5 %) : un total mesuré peut donc différer du total calculé.",
      "Les résultats sont affichés avec 6 chiffres significatifs dans l’unité lisible et 12 chiffres significatifs en ohms.",
    ],
    faqs: [
      {
        question: "Pourquoi la résistance en parallèle est-elle inférieure à chaque résistance ?",
        answer: "Chaque résistance ajoutée en parallèle offre au courant un chemin supplémentaire, ce qui augmente la conductance totale. La résistance totale, son inverse, descend donc sous la plus petite valeur individuelle. Deux résistances de 1 kΩ en parallèle donnent 500 Ω.",
      },
      {
        question: "Existe-t-il un raccourci pour deux résistances en parallèle ?",
        answer: "Oui : R_total = (R₁ × R₂) ÷ (R₁ + R₂), le produit sur la somme. Pour 6 Ω et 3 Ω, cela donne 18 ÷ 9 = 2 Ω. Pour plus de deux résistances, additionnez plutôt les inverses.",
      },
      {
        question: "Qu’est-ce qu’un siemens ?",
        answer: "Le siemens (S) est l’unité SI de conductance, l’inverse de l’ohm. Une résistance de 100 Ω a une conductance de 0,01 S. Il remplace l’ancienne appellation « mho ».",
      },
    ],
    sourcesUsedFor: [
      "Résistance équivalente de résistances en série (la somme) et en parallèle (l’inverse de la somme des inverses).",
    ],
  },
  text: {
    unit: "Unité des valeurs",
    unitOptions: { ohm: "Ω (ohms)", kohm: "kΩ (kilohms)", megohm: "MΩ (mégohms)" },
    connection: "Montage",
    connectionHelp: "Choisissez le total à afficher comme résultat principal. L’autre est affiché en dessous.",
    connectionOptions: { series: "Série", parallel: "Parallèle" },
    values: "Résistances",
    valuesHelp: "De 1 à 50 valeurs, séparées par des points-virgules, des espaces ou des retours à la ligne. Chacune doit être supérieure à 0.",
    errors: {
      empty: "Saisissez au moins une résistance.",
      tooMany: "Saisissez au plus {max} résistances.",
      notNumber: "« {token} » n’est pas un nombre. Séparez les valeurs par des points-virgules, des espaces ou des retours à la ligne.",
      tooLarge: "« {token} » est trop grand.",
    },
    maxCount: "Saisissez au plus {max} résistances.",
    notPositive: "Chaque résistance doit être supérieure à 0 ({value} ne l’est pas).",
    tooBig: "{value} est trop grand. Chaque valeur peut valoir au plus {max}.",
    series: "Résistance totale en série",
    parallel: "Résistance totale en parallèle",
    seriesOhms: "Résistance en série en ohms",
    parallelOhms: "Résistance en parallèle en ohms",
    conductance: "Conductance totale en parallèle",
    count: { zero: "{n} résistance", one: "{n} résistance", two: "{n} résistances", few: "{n} résistances", many: "{n} de résistances", other: "{n} résistances" },
    caption: "{count}, montage en {connection}.",
    connectionWords: { series: "série", parallel: "parallèle" },
    single: "Avec une seule résistance, les totaux en série et en parallèle sont tous deux égaux à sa propre valeur.",
    parallelNote: "Un total en parallèle est toujours inférieur à la plus petite résistance du groupe ({smallest}).",
    table: "Détail par résistance",
    resistorColumn: "Résistance",
    ohmsColumn: "Valeur",
    conductanceColumn: "Conductance",
    resistorLabel: "R{i}",
  },
};

export default fr;
