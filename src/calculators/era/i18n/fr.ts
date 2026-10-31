import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { EraText } from "../text/en";

const fr: CalculatorTranslation<EraText> = {
  content: {
    title: "Calculateur d’ERA au baseball",
    shortTitle: "ERA",
    summary: "Calculez la moyenne de points mérités (ERA) d’un lanceur à partir des points mérités et des manches lancées, avec WHIP, K/9 et BB/9, pour le baseball à 9 manches ou les matchs à 7 manches.",
    metaTitle: "Calculateur d’ERA – Moyenne de points mérités, WHIP et K/9",
    metaDescription:
      "Calculez l’ERA d’un lanceur à partir des points mérités, des manches et des retraits, avec le WHIP, les K/9 et les BB/9, pour des matchs de 9 ou 7 manches.",
    keywords: ["calcul ERA", "moyenne de points mérités", "ERA baseball", "ERA softball", "calcul WHIP", "K/9", "BB/9", "manches lancées"],
    intro: [
      "La moyenne de points mérités (ERA) est le nombre de points mérités accordés par un lanceur par match complet. Elle ramène les points accordés à une durée de match standard, ce qui permet de comparer des lanceurs partants et des releveurs aux charges de travail très différentes.",
      "Saisissez les points mérités et les manches lancées pour obtenir l’ERA. Les manches se saisissent en manches complètes plus les retraits supplémentaires, car chaque retrait vaut un tiers de manche. Ajoutez les coups sûrs, les buts sur balles et les retraits sur prises pour voir aussi le WHIP, le K/9 et le BB/9. Choisissez 7 manches pour le softball et de nombreuses ligues de jeunes.",
    ],
    howToUse: [
      "Saisissez les points mérités accordés.",
      "Saisissez les manches complètes lancées et choisissez 0, 1 ou 2 retraits supplémentaires. Dans une feuille de match, 5.1 signifie 5 manches et 1 retrait.",
      "Choisissez 9 manches par match pour le baseball ou 7 pour le softball et de nombreuses ligues de jeunes.",
      "Saisissez éventuellement les coups sûrs, les buts sur balles et les retraits sur prises, puis lisez l’ERA et les autres taux.",
    ],
    formulas: [
      {
        title: "Manches lancées",
        expression: "IP = manches complètes + retraits supplémentaires ÷ 3",
        explanation: "Chaque retrait vaut un tiers de manche : 6.2 en notation de feuille de match correspond donc à 6⅔ = 6,667 manches.",
      },
      {
        title: "Moyenne de points mérités",
        expression: "ERA = points mérités × manches par match ÷ IP",
        explanation: "Le nombre de manches par match est de 9 au baseball ; 7 est utilisé pour le softball et de nombreuses ligues de jeunes.",
      },
      {
        title: "WHIP",
        expression: "WHIP = (buts sur balles + coups sûrs) ÷ IP",
        explanation: "Coureurs accordés par manche sur coups sûrs et buts sur balles.",
      },
      {
        title: "Taux par neuf manches",
        expression: "K/9 = retraits sur prises × 9 ÷ IP\nBB/9 = buts sur balles × 9 ÷ IP",
        explanation: "Retraits sur prises et buts sur balles par neuf manches.",
      },
    ],
    examples: [
      {
        title: "3 points mérités en 6⅔ manches",
        steps: ["IP = 6 + 2 ÷ 3 = 6,667", "ERA = 3 × 9 ÷ 6,667 = 4,05", "WHIP = (2 + 7) ÷ 6,667 = 1,35 ; K/9 = 8 × 9 ÷ 6,667 = 10,8"],
      },
      {
        title: "Une saison : 61 points mérités en 187⅓ manches",
        steps: ["IP = 187 + 1 ÷ 3 = 187,333", "ERA = 61 × 9 ÷ 187,333 ≈ 2,93", "WHIP = (45 + 158) ÷ 187,333 ≈ 1,08 ; K/9 ≈ 9,66 ; BB/9 ≈ 2,16"],
      },
      {
        title: "Softball : 4 points mérités en un match complet de 7 manches",
        steps: ["IP = 7", "ERA = 4 × 7 ÷ 7 = 4,00", "WHIP = (3 + 5) ÷ 7 ≈ 1,14"],
      },
    ],
    assumptions: [
      "Les points mérités sont ceux qu’a enregistrés le marqueur officiel. Les points marqués à la suite d’une erreur ou d’une balle passée sont non mérités et ne doivent pas être inclus.",
      "Les manches se saisissent en manches complètes plus les retraits, plutôt qu’en décimal comme 6.2, car dans les feuilles de match le chiffre après le point compte des retraits, et non des dixièmes.",
      "L’ERA dépend de la défense derrière le lanceur, du stade et de la ligue : comparez donc si possible des lanceurs de la même ligue et de la même saison.",
      "Le K/9 et le BB/9 utilisent toujours 9 manches, comme d’habitude, même lorsque 7 manches par match sont sélectionnées pour l’ERA.",
    ],
    faqs: [
      {
        question: "Que signifient 6.2 manches lancées ?",
        answer: "Cela signifie 6 manches et 2 retraits, soit 6⅔ manches, et non 6,2 en décimal. Chaque retrait vaut un tiers de manche : le chiffre après le point ne peut donc être que 0, 1 ou 2. Saisissez ici 6 manches et 2 retraits supplémentaires.",
      },
      {
        question: "Qu’est-ce qu’une bonne ERA ?",
        answer: "Cela dépend de la ligue et de l’époque. Lors des saisons récentes de la Major League Baseball, la moyenne de la ligue tournait autour de 4,00, et une ERA inférieure à 3,00 sur une saison complète est généralement considérée comme excellente.",
      },
      {
        question: "Pourquoi le softball utilise-t-il 7 manches ?",
        answer: "Les matchs de softball, ainsi que de nombreux matchs de baseball scolaires et de jeunes, se jouent en sept manches : l’ERA est donc ramenée à un match de sept manches pour indiquer les points accordés par match complet dans ce format.",
      },
    ],
    sourcesUsedFor: [
      "La définition d’un point mérité et ERA = 9 × points mérités ÷ manches lancées.",
      "WHIP = (buts sur balles + coups sûrs) ÷ manches lancées, sans compter les frappeurs atteints ni les erreurs.",
    ],
  },
  text: {
    earnedRuns: "Points mérités accordés",
    earnedRunsHelp: "Points marqués sans l’aide d’une erreur ou d’une balle passée, selon la décision du marqueur officiel.",
    innings: "Manches lancées (manches complètes)",
    inningsHelp: "Saisissez ici les manches complètes et les éventuels retraits supplémentaires dans le champ suivant. 6⅔ manches, noté 6.2 dans les feuilles de match, correspond à 6 manches et 2 retraits.",
    outs: "Retraits supplémentaires",
    outsOptions: { "0": "0 retrait", "1": "1 retrait (⅓ de manche)", "2": "2 retraits (⅔ de manche)" },
    gameLength: "Manches par match",
    gameLengthHelp: "Utilisez 9 pour le baseball professionnel et la plupart du baseball universitaire, 7 pour le softball et de nombreuses ligues scolaires et de jeunes.",
    gameLengths: { "9": "9 manches (baseball)", "7": "7 manches (softball, nombreuses ligues de jeunes)" },
    hits: "Coups sûrs accordés (facultatif)",
    walks: "Buts sur balles accordés (facultatif)",
    walksHelp: "Buts sur balles. Les frappeurs atteints ne sont pas comptés dans le WHIP.",
    strikeouts: "Retraits sur prises (facultatif)",
    errors: {
      noInnings: "Saisissez au moins un retrait lancé.",
    },
    era: "Moyenne de points mérités (ERA)",
    caption: "{er} points mérités × {length} ÷ {ip} manches lancées ({notation} en notation de feuille de match).",
    notation: "{whole}.{outs}",
    inningsNotation: "Manches lancées (notation du baseball)",
    inningsDecimal: "Manches lancées en décimal",
    totalOuts: "Retraits enregistrés",
    whip: "WHIP (buts sur balles + coups sûrs par manche)",
    k9: "Retraits sur prises par 9 manches (K/9)",
    bb9: "Buts sur balles par 9 manches (BB/9)",
    kbb: "Rapport retraits sur prises/buts sur balles",
    notes: {
      notation: "Dans les feuilles de match, le chiffre après le point compte les retraits, et non les dixièmes : 6.1 signifie 6⅓ manches et 6.2 signifie 6⅔ manches.",
      whip: "Saisissez les coups sûrs et les buts sur balles pour voir le WHIP.",
      perNine: "Le K/9 et le BB/9 sont toujours calculés sur 9 manches, quelle que soit la durée du match.",
    },
  },
};

export default fr;
