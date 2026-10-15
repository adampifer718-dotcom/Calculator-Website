import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ZScoreText } from "../text/en";

const fr: CalculatorTranslation<ZScoreText> = {
  content: {
    title: "Calculateur de score z",
    shortTitle: "Score z",
    summary: "Centrez et réduisez une valeur pour obtenir son score z, puis trouvez son percentile et les probabilités des queues de la loi normale.",
    metaTitle: "Calculateur de score z – Percentile et probabilités normales",
    metaDescription:
      "Convertissez une valeur en score z à partir de la moyenne et de l’écart type, et trouvez son percentile et les probabilités normales unilatérale et bilatérale.",
    keywords: ["score z", "cote z", "z-score", "valeur centrée réduite", "centrer réduire", "loi normale", "percentile", "écarts types par rapport à la moyenne", "courbe en cloche"],
    intro: [
      "Un score z indique de combien d’écarts types une valeur se situe au-dessus ou au-dessous de la moyenne. Un score z de 0 correspond exactement à la moyenne ; les scores positifs sont au-dessus de la moyenne et les scores négatifs au-dessous.",
      "Comme les scores z font disparaître les unités d’origine, ils permettent de comparer des résultats obtenus sur des échelles différentes, par exemple deux examens dont les moyennes diffèrent. Si les données suivent à peu près une loi normale, le score z donne aussi la part des valeurs inférieures ou supérieures à la vôtre.",
    ],
    howToUse: [
      "Saisissez la valeur que vous voulez situer.",
      "Saisissez la moyenne et l’écart type du groupe auquel elle appartient. L’écart type doit être positif.",
      "Lisez le score z et sa position exprimée en clair.",
      "Utilisez le percentile pour la part des valeurs inférieures à x, P(X > x) pour la part des valeurs supérieures, et la probabilité bilatérale pour un test bilatéral.",
    ],
    formulas: [
      { title: "Score z", expression: "z = (x − μ) ÷ σ", explanation: "μ est la moyenne et σ l’écart type de la distribution." },
      {
        title: "Percentile",
        expression: "P(X < x) = Φ(z)",
        explanation: "Φ est la fonction de répartition de la loi normale centrée réduite : l’aire sous la courbe en cloche à gauche de z.",
      },
      { title: "Queue droite", expression: "P(X > x) = 1 − Φ(z) = Φ(−z)", explanation: "L’aire à droite de z. Elle est calculée comme Φ(−z) pour conserver la précision quand z est grand." },
      { title: "Probabilité bilatérale", expression: "P(|Z| > |z|) = 2·Φ(−|z|)", explanation: "La probabilité d’obtenir une valeur au moins aussi éloignée de la moyenne, dans un sens ou dans l’autre." },
    ],
    examples: [
      {
        title: "Une note d’examen de 1 310 quand la moyenne est de 1 050 et σ = 210",
        steps: ["z = (1 310 − 1 050) ÷ 210 = 260 ÷ 210 ≈ 1,2381", "Φ(1,2381) ≈ 0,8922 : la note se situe donc vers le 89e percentile", "Environ 10,78 % des notes sont plus élevées"],
      },
      {
        title: "Une pièce mesurant 58 mm quand la moyenne est de 70 mm et σ = 8 mm",
        steps: ["z = (58 − 70) ÷ 8 = −1,5", "Φ(−1,5) ≈ 0,0668 : environ 6,68 % des pièces sont donc plus courtes", "Probabilité bilatérale = 2 × 0,0668 ≈ 0,1336"],
      },
    ],
    assumptions: [
      "Le score z lui-même est valable pour toute distribution, mais le percentile et les probabilités supposent que les données suivent une loi normale.",
      "La moyenne et l’écart type saisis sont considérés comme les vraies valeurs de la population. Avec un petit échantillon et un σ estimé, une loi de Student peut être plus appropriée.",
      "Les probabilités normales sont calculées par une approximation numérique précise à environ sept chiffres significatifs.",
    ],
    faqs: [
      {
        question: "Qu’est-ce qu’un bon score z ?",
        answer: "Cela dépend de ce que l’on mesure. Pour des notes d’examen, un score z plus élevé est meilleur ; pour un temps de réaction, par exemple, c’est l’inverse. Dans une loi normale, environ 68 % des valeurs se situent entre z = −1 et z = 1, et environ 95 % entre −2 et 2.",
      },
      {
        question: "Un score z peut-il être négatif ?",
        answer: "Oui. Un score z négatif signifie que la valeur est inférieure à la moyenne. Par exemple, z = −2 correspond à deux écarts types au-dessous de la moyenne.",
      },
      {
        question: "Comment convertir un score z en percentile ?",
        answer: "Cherchez l’aire sous la courbe de la loi normale centrée réduite à gauche de z. Ce calculateur le fait pour vous : z = 1,6 donne environ 94,52 %, la valeur est donc supérieure à environ 94,5 % de la distribution.",
      },
    ],
    sourcesUsedFor: ["Définition du score z, z = (x − μ)/σ, et de la loi normale centrée réduite."],
  },
  text: {
    x: "Valeur (x)",
    xHelp: "L’observation que vous voulez centrer et réduire.",
    mean: "Moyenne (μ)",
    sd: "Écart type (σ)",
    sdHelp: "Doit être supérieur à 0.",
    z: "Score z",
    above: "{n} écarts types au-dessus de la moyenne",
    below: "{n} écarts types au-dessous de la moyenne",
    atMean: "Exactement à la moyenne",
    position: "Position",
    percentile: "Percentile, P(X < x)",
    upper: "P(X > x)",
    twoTailed: "Bilatérale, P(|Z| > |z|)",
    note: "Les probabilités supposent que les valeurs suivent une loi normale de cette moyenne et de cet écart type.",
    unusual: "|z| est supérieur à 3, ce qui est très inhabituel pour des données distribuées normalement. Vérifiez qu’il ne s’agit pas d’une erreur de saisie ou d’une valeur aberrante.",
  },
};

export default fr;
