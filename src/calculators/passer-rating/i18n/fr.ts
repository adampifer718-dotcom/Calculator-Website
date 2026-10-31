import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PasserRatingText } from "../text/en";

const fr: CalculatorTranslation<PasserRatingText> = {
  content: {
    title: "Calculateur d’évaluation du passeur NFL",
    shortTitle: "Évaluation du passeur",
    summary: "Calculez l’évaluation du passeur (passer rating) NFL d’un quarterback à partir des tentatives, passes complétées, yards, touchdowns et interceptions, avec les quatre composantes et l’efficacité NCAA.",
    metaTitle: "Évaluation du passeur NFL – Passer rating et NCAA",
    metaDescription:
      "Calculez l’évaluation du passeur NFL (de 0 à 158,3) à partir des statistiques d’un quarterback, avec les quatre composantes et l’efficacité NCAA.",
    keywords: ["passer rating", "évaluation du passeur", "quarterback rating", "formule passer rating NFL", "158,3", "efficacité de passe NCAA", "football américain"],
    intro: [
      "L’évaluation du passeur (passer rating) est la mesure officielle de la NFL pour les passes d’un quarterback, utilisée depuis 1973. Elle combine quatre taux : le pourcentage de passes complétées, les yards par tentative, les touchdowns par tentative et les interceptions par tentative. Chaque composante est limitée à une plage, si bien que l’évaluation va de 0 à un score parfait de 158,3.",
      "Saisissez les statistiques de passe d’un match, d’une saison ou d’une carrière pour obtenir l’évaluation, la valeur de chaque composante et la part des tentatives qui ont été des passes complétées, des touchdowns et des interceptions. Le calculateur affiche aussi l’efficacité de passe NCAA, utilisée par le football universitaire sur une autre échelle.",
    ],
    howToUse: [
      "Saisissez les tentatives de passe, les passes complétées et les yards à la passe. Les yards peuvent être négatifs.",
      "Saisissez les passes de touchdown et les interceptions.",
      "Lisez l’évaluation du passeur et consultez le tableau des composantes pour voir lesquelles atteignent leurs limites.",
    ],
    formulas: [
      {
        title: "Les quatre composantes",
        expression: "a = (Cmp ÷ Att − 0,3) × 5\nb = (Yds ÷ Att − 3) × 0,25\nc = TD ÷ Att × 20\nd = 2,375 − INT ÷ Att × 25",
        explanation: "Chaque composante est limitée entre 0 et 2,375 avant l’addition.",
      },
      {
        title: "Évaluation du passeur",
        expression: "évaluation = (a + b + c + d) ÷ 6 × 100",
        explanation: "Avec toutes les composantes à 2,375, l’évaluation vaut 9,5 ÷ 6 × 100 ≈ 158,3, le maximum.",
      },
      {
        title: "Efficacité de passe NCAA",
        expression: "(8,4 × Yds + 330 × TD + 100 × Cmp − 200 × INT) ÷ Att",
        explanation: "La formule du football universitaire. Elle n’a pas de limites : elle peut donc dépasser largement 200 ou descendre sous 0.",
      },
    ],
    examples: [
      {
        title: "23 sur 34 pour 287 yards, 2 TD, 1 INT",
        steps: ["a = (23 ÷ 34 − 0,3) × 5 ≈ 1,8824 ; b = (287 ÷ 34 − 3) × 0,25 ≈ 1,3603", "c = 2 ÷ 34 × 20 ≈ 1,1765 ; d = 2,375 − 1 ÷ 34 × 25 ≈ 1,6397", "Évaluation = 6,0588 ÷ 6 × 100 ≈ 101,0"],
      },
      {
        title: "30 sur 41 pour 402 yards, 5 TD, 0 INT",
        steps: ["a ≈ 2,1585 et c ≈ 2,4390 dépassent 2,375 : chacune compte donc pour 2,375", "b ≈ 1,7012 ; d = 2,375", "Évaluation = (2,375 + 1,7012 + 2,375 + 2,375) ÷ 6 × 100 ≈ 143,5"],
      },
      {
        title: "12 sur 28 pour 96 yards, 0 TD, 3 INT",
        steps: ["a ≈ 0,6429 ; b ≈ 0,1071 ; c = 0", "d = 2,375 − 3 ÷ 28 × 25 ≈ −0,3036 : elle compte donc pour 0", "Évaluation = 0,75 ÷ 6 × 100 = 12,5"],
      },
    ],
    assumptions: [
      "Le calculateur utilise la formule NFL telle que publiée. Le football universitaire utilise la formule d’efficacité NCAA distincte, affichée sous l’évaluation.",
      "L’évaluation ne mesure que les passes. Elle ignore les sacks, les courses, les fumbles, la situation de jeu et la qualité des receveurs et des adversaires.",
      "Les limites de 0 à 2,375 font que des chiffres très élevés ou très faibles dans un domaine cessent d’influer sur l’évaluation : deux lignes de statistiques assez différentes peuvent donc avoir la même évaluation.",
      "L’évaluation affichée est arrondie à une décimale, comme dans les statistiques officielles.",
    ],
    faqs: [
      {
        question: "Qu’est-ce qu’une évaluation du passeur parfaite ?",
        answer: "158,3. Il faut au moins 77,5 % de passes complétées, au moins 12,5 yards par tentative, des touchdowns sur au moins 11,875 % des tentatives et aucune interception, pour que chaque composante atteigne 2,375.",
      },
      {
        question: "Qu’est-ce qu’une bonne évaluation du passeur ?",
        answer: "La formule a été conçue pour que 66,7 corresponde à un passeur moyen des années 1960. Le jeu de passe est devenu plus efficace depuis : les moyennes de la ligue tournent désormais autour de 90, et une évaluation supérieure à 100 est généralement considérée comme très bonne.",
      },
      {
        question: "L’évaluation du passeur est-elle la même chose que le QBR ?",
        answer: "Non. L’évaluation du passeur n’utilise que les cinq nombres de la feuille de statistiques. Le Total QBR d’ESPN est une mesure distincte et propriétaire qui tient aussi compte du contexte du match, des courses et des sacks.",
      },
    ],
    sourcesUsedFor: [
      "Les quatre composantes NFL, leurs limites de 0 à 2,375, la mise à l’échelle ÷ 6 × 100 et le maximum de 158,3.",
      "La formule d’efficacité de passe NCAA (8,4 × yards + 330 × TD + 100 × passes complétées − 200 × INT) ÷ tentatives.",
    ],
  },
  text: {
    attempts: "Tentatives de passe",
    completions: "Passes complétées",
    yards: "Yards à la passe",
    yardsHelp: "Total des yards à la passe ; il peut être négatif.",
    touchdowns: "Passes de touchdown",
    interceptions: "Interceptions",
    errors: {
      completions: "Les passes complétées ne peuvent pas dépasser les tentatives.",
      touchdowns: "Les passes de touchdown ne peuvent pas dépasser les passes complétées.",
      interceptions: "Les interceptions ne peuvent pas dépasser les passes incomplètes (tentatives moins passes complétées).",
    },
    rating: "Évaluation du passeur NFL",
    caption: "{cmp} sur {att} pour {yds} yards, {td} TD, {int} INT.",
    ncaa: "Efficacité de passe NCAA",
    completionPct: "Pourcentage de passes complétées",
    yardsPerAttempt: "Yards par tentative",
    tdPct: "Pourcentage de touchdowns",
    intPct: "Pourcentage d’interceptions",
    table: {
      caption: "Composantes de l’évaluation du passeur (chacune limitée à 0–2,375)",
      component: "Composante",
      raw: "Avant la limite",
      used: "Utilisée",
    },
    components: {
      a: "a : passes complétées par tentative",
      b: "b : yards par tentative",
      c: "c : touchdowns par tentative",
      d: "d : interceptions par tentative",
    },
    notes: {
      clamped: "Au moins une composante a atteint la limite de 0 ou de 2,375 : de meilleurs (ou de moins bons) chiffres dans ce domaine ne modifient donc plus l’évaluation.",
      perfect: "C’est une évaluation du passeur parfaite de 158,3, la plus élevée que permet la formule NFL.",
      scale: "Les évaluations NFL et NCAA utilisent des échelles différentes et ne peuvent pas être comparées entre elles.",
    },
  },
};

export default fr;
