import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ShannonIndexText } from "../text/en";

const fr: CalculatorTranslation<ShannonIndexText> = {
  content: {
    title: "Calculateur d’indice de diversité de Shannon",
    shortTitle: "Indice de diversité de Shannon",
    summary: "Calculez l’indice de diversité de Shannon H′, l’équitabilité de Pielou, le nombre effectif d’espèces et les indices de Simpson à partir du nombre d’individus par espèce.",
    metaTitle: "Calculateur d’indice de Shannon – H′ et équitabilité",
    metaDescription:
      "Calculez l’indice de Shannon H′ à partir d’effectifs par espèce en ln, log2 ou log10, avec l’équitabilité de Pielou J′, le nombre effectif d’espèces et les indices de Simpson.",
    keywords: ["indice de Shannon", "indice de Shannon-Wiener", "diversité spécifique", "indice de biodiversité", "équitabilité de Pielou", "indice de Simpson", "richesse spécifique", "écologie"],
    intro: [
      "L’indice de Shannon H′ (aussi appelé indice de Shannon-Wiener ou de Shannon-Weaver) mesure la diversité d’une communauté à partir du nombre d’individus comptés pour chaque espèce. Il augmente avec le nombre d’espèces et avec la régularité de la répartition des individus entre elles, et il vaut 0 lorsqu’une seule espèce est présente.",
      "Ce calculateur donne H′ dans la base de logarithme choisie, l’équitabilité de Pielou J′, le nombre effectif d’espèces, ainsi que l’indice de Simpson avec ses formes de Gini-Simpson et inverse, plus un tableau de la proportion de chaque espèce dans le total.",
    ],
    howToUse: [
      "Saisissez le nombre d’individus comptés pour chaque espèce, un effectif par espèce, séparés par des virgules, des espaces ou des retours à la ligne.",
      "Choisissez la base du logarithme. Le logarithme népérien est le plus courant en écologie ; la base 2 donne H′ en bits.",
      "Lisez H′ et les autres indices. Les effectifs nuls sont acceptés mais ignorés, et le résultat indique combien il y en avait.",
    ],
    formulas: [
      {
        title: "Indice de Shannon",
        expression: "H′ = −Σ pᵢ log pᵢ, avec pᵢ = nᵢ ÷ N",
        explanation: "nᵢ est l’effectif de l’espèce i et N l’effectif total. Seules les espèces avec nᵢ > 0 sont prises en compte.",
      },
      {
        title: "Équitabilité de Pielou",
        expression: "J′ = H′ ÷ log S",
        explanation: "S est le nombre d’espèces présentes. J′ va de près de 0 (une espèce domine) à 1 (toutes les espèces sont aussi fréquentes), et nécessite S ≥ 2.",
      },
      {
        title: "Nombre effectif d’espèces",
        expression: "D₁ = base^H′ (e^H′ pour le logarithme népérien)",
        explanation: "Le nombre d’espèces également abondantes qui donnerait le même H′. Il ne dépend pas de la base.",
      },
      {
        title: "Indice de Simpson",
        expression: "D = Σ nᵢ(nᵢ − 1) ÷ (N(N − 1)) ; Gini-Simpson = 1 − D ; inverse = 1 ÷ D",
        explanation: "D est la probabilité que deux individus tirés au hasard sans remise appartiennent à la même espèce.",
      },
    ],
    examples: [
      {
        title: "Six espèces d’oiseaux le long d’un transect",
        steps: [
          "N = 100 : les proportions sont donc 0,42 ; 0,27 ; 0,15 ; 0,09 ; 0,05 et 0,02.",
          "H′ = −(0,42 ln 0,42 + 0,27 ln 0,27 + … + 0,02 ln 0,02) ≈ 1,4472.",
          "J′ = 1,4472 ÷ ln 6 ≈ 0,808 ; nombre effectif e^1,4472 ≈ 4,25 espèces.",
          "D de Simpson = (42·41 + 27·26 + 15·14 + 9·8 + 5·4 + 2·1) ÷ (100·99) = 2 728 ÷ 9 900 ≈ 0,2756.",
        ],
      },
      {
        title: "Comptages par quadrat avec des espèces absentes, en bits",
        steps: [
          "Les deux zéros sont ignorés : S = 5 espèces et N = 80 individus.",
          "H′ = −Σ pᵢ log₂ pᵢ ≈ 2,0478 bits.",
          "J′ = 2,0478 ÷ log₂ 5 ≈ 0,882.",
        ],
      },
      {
        title: "Une communauté dominée par une espèce, en base 10",
        steps: ["p = 0,60 ; 0,25 ; 0,10 ; 0,05.", "H′ = −Σ pᵢ log₁₀ pᵢ ≈ 0,4487.", "Nombre effectif 10^0,4487 ≈ 2,81 espèces."],
      },
    ],
    assumptions: [
      "Les effectifs sont un échantillon aléatoire de la communauté, et chaque individu a été identifié jusqu’à l’espèce. Les espèces rares passent facilement inaperçues dans les petits échantillons, ce qui abaisse H′.",
      "H′ utilise directement les proportions observées, sans les corrections du biais des petits échantillons que certaines études appliquent.",
      "Les valeurs calculées dans des bases de logarithme différentes diffèrent d’un facteur constant (H′ en bits = H′ en nats ÷ ln 2) : ne comparez donc que des indices dans la même base.",
      "L’indice de Simpson utilise ici la forme pour échantillon fini nᵢ(nᵢ − 1) ÷ (N(N − 1)). Certains ouvrages utilisent plutôt Σ pᵢ², qui donne des valeurs légèrement différentes pour les petits échantillons.",
    ],
    faqs: [
      {
        question: "Qu’est-ce qu’un indice de Shannon élevé ?",
        answer: "Il n’existe pas d’échelle fixe : H′ croît avec le nombre d’espèces et l’équitabilité, et son maximum est log S. C’est pourquoi l’équitabilité J′ (H′ ÷ log S) et le nombre effectif d’espèces sont souvent plus faciles à interpréter et à comparer.",
      },
      {
        question: "Pourquoi les effectifs nuls sont-ils ignorés ?",
        answer: "Une espèce sans individu a pᵢ = 0, et le terme pᵢ log pᵢ tend vers 0 quand pᵢ diminue : il n’ajoute donc rien à H′. Elle ne compte pas non plus dans la richesse spécifique S.",
      },
      {
        question: "En quoi l’indice de Shannon diffère-t-il de celui de Simpson ?",
        answer: "Tous deux combinent richesse et équitabilité, mais l’indice de Simpson donne plus de poids aux espèces communes, alors que H′ est plus sensible aux espèces rares. Donner les deux, ou les nombres effectifs d’espèces, offre une vision plus complète.",
      },
    ],
    sourcesUsedFor: [
      "L’indice de Shannon H′ = −Σ pᵢ ln pᵢ avec pᵢ = nᵢ ÷ N, et un exemple détaillé des indices de Shannon et de Simpson.",
      "L’indice de Simpson à partir des effectifs, Σ n(n − 1) ÷ (N(N − 1)).",
      "L’équitabilité comme H′ divisé par son maximum, log S, atteint lorsque toutes les espèces sont également abondantes.",
    ],
  },
  text: {
    counts: "Individus comptés par espèce",
    countsHelp: "Un effectif entier par espèce, séparés par des virgules, des espaces ou des retours à la ligne. Les zéros sont ignorés.",
    base: "Base du logarithme",
    bases: { e: "Logarithme népérien (ln), le choix habituel", "2": "Base 2 (bits)", "10": "Base 10" },
    errors: {
      empty: "Saisissez au moins un effectif.",
      tooMany: "Saisissez au plus {max} effectifs.",
      notNumber: "« {token} » n’est pas un nombre. Séparez les effectifs par des virgules, des espaces ou des retours à la ligne.",
      tooLarge: "« {token} » est trop grand.",
      notInteger: "{value} n’est pas un nombre entier. Saisissez le nombre d’individus de chaque espèce.",
      negative: "Les effectifs ne peuvent pas être négatifs ({value}).",
      countTooLarge: "Chaque effectif peut valoir au plus {max}.",
      allZero: "Saisissez au moins un effectif supérieur à zéro.",
    },
    result: "Indice de Shannon H′",
    caption: "H′ = −Σ pᵢ log pᵢ, avec {log}",
    logNames: { e: "le logarithme népérien", "2": "le logarithme en base 2", "10": "le logarithme en base 10" },
    richness: "Richesse spécifique S",
    total: "Nombre total d’individus N",
    evenness: "Équitabilité de Pielou J′",
    effective: "Nombre effectif d’espèces",
    simpson: "Indice de Simpson D",
    giniSimpson: "Indice de Gini-Simpson (1 − D)",
    inverseSimpson: "Indice de Simpson inverse (1 ÷ D)",
    notAvailable: "Non défini pour ces effectifs",
    table: {
      caption: "Proportions des espèces",
      species: "Espèce",
      count: "Effectif",
      proportion: "Proportion pᵢ",
      term: "−pᵢ log pᵢ",
      label: "Espèce {n}",
    },
    notes: {
      zeros: "Effectifs nuls ignorés : {count}. Les espèces sans individu ne contribuent ni à H′ ni à S.",
      single: "Une seule espèce compte des individus : H′ vaut donc 0 et l’équitabilité n’est pas définie.",
      simpsonUndefined: "L’indice de Simpson nécessite au moins 2 individus au total.",
      simpsonZero: "Chaque espèce compte exactement un individu : le D de Simpson vaut donc 0 et son inverse n’est pas défini.",
      truncated: "Le tableau affiche les {shown} premières espèces ayant des individus.",
      general: "H′ dépend de la base du logarithme : les valeurs dans des bases différentes diffèrent d’un facteur constant, mais pas l’équitabilité J′ ni le nombre effectif d’espèces. Ne comparez des indices que s’ils utilisent la même base et le même effort d’échantillonnage.",
    },
  },
};

export default fr;
