import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LinearRegressionText } from "../text/en";

const fr: CalculatorTranslation<LinearRegressionText> = {
  content: {
    title: "Calculateur de régression linéaire",
    shortTitle: "Régression linéaire",
    summary: "Ajustez une droite des moindres carrés ŷ = a + bx à des données appariées, avec r², l’erreur type de la pente, un test t et des prédictions.",
    metaTitle: "Calculateur de régression linéaire – Moindres carrés et r²",
    metaDescription: "Collez des données X et Y appariées pour obtenir la droite des moindres carrés ŷ = a + bx, r et r², l’erreur type de la pente, la statistique t et la valeur p.",
    keywords: ["régression linéaire", "moindres carrés", "droite de régression", "équation de régression", "pente", "ordonnée à l’origine", "coefficient de détermination", "erreur type de la pente"],
    intro: [
      "La régression linéaire simple trouve la droite qui prédit le mieux une variable, Y, à partir d’une autre, X. La droite des moindres carrés ordinaires est celle qui rend la somme des carrés des distances verticales entre les points et la droite aussi petite que possible.",
      "Saisissez des observations appariées : le calculateur renvoie l’équation ŷ = a + bx, la part de la variation expliquée par la droite (r²), l’erreur type de la pente avec un test t indiquant si la pente pourrait être nulle, et une prédiction facultative. Si vous n’avez besoin que de la force de la relation, le Calculateur de coefficient de corrélation donne seuls le r de Pearson et le ρ de Spearman.",
    ],
    howToUse: [
      "Saisissez les valeurs de X (la variable explicative) dans la première zone, séparées par des points-virgules, des espaces ou des retours à la ligne.",
      "Saisissez les valeurs de Y correspondantes (la variable réponse) dans la seconde zone, dans le même ordre. Il faut au moins 3 paires.",
      "Si vous le souhaitez, saisissez une valeur de x pour obtenir le ŷ prédit.",
      "Lisez l’équation, puis vérifiez r² et la valeur p de la pente.",
    ],
    formulas: [
      { title: "Pente et ordonnée à l’origine", expression: "b = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ Σ(xᵢ − x̄)²,  a = ȳ − b·x̄", explanation: "La droite des moindres carrés passe toujours par le point moyen (x̄, ȳ)." },
      { title: "Erreur type résiduelle", expression: "s = √[Σ(yᵢ − ŷᵢ)² ÷ (n − 2)]", explanation: "La distance verticale typique des points à la droite, dans l’unité de Y. Deux degrés de liberté sont consommés par a et b." },
      { title: "Erreur type et test t de la pente", expression: "SE(b) = s ÷ √Σ(xᵢ − x̄)²,  t = b ÷ SE(b),  ddl = n − 2", explanation: "La valeur p bilatérale issue de la loi de Student teste l’hypothèse nulle selon laquelle la vraie pente vaut 0." },
      { title: "Coefficient de détermination", expression: "r² = 1 − Σ(yᵢ − ŷᵢ)² ÷ Σ(yᵢ − ȳ)²", explanation: "La part de la variation de Y expliquée par la droite. En régression simple, elle est égale au carré du r de Pearson." },
    ],
    examples: [
      {
        title: "Heures de révision hebdomadaires et notes d’examen",
        steps: ["x̄ = 4,5, ȳ = 66,125 ; Σ(x − x̄)² = 42 et Σ(x − x̄)(y − ȳ) = 171,5", "b = 171,5 ÷ 42 ≈ 4,08333 et a = 66,125 − 4,08333 × 4,5 = 47,75", "r² ≈ 0,9935 ; SE(b) ≈ 0,1349, t ≈ 30,28 avec 6 ddl, p ≈ 8,6 × 10⁻⁸"],
      },
      {
        title: "Prix d’une voiture d’occasion selon son âge",
        steps: ["Le prix baisse quand l’âge augmente : la pente est donc négative, b ≈ −1 245,26 par an.", "a ≈ 24 998,8, le prix estimé d’une voiture neuve.", "À 5 ans : ŷ ≈ 24 998,78 − 1 245,26 × 5 ≈ 18 772,5"],
      },
      {
        title: "Droite d’étalonnage d’un capteur",
        steps: ["b = 5510 ÷ 1750 ≈ 3,14857 unités de signal par unité de concentration", "a ≈ 2,28571, le signal d’un blanc", "r² ≈ 0,9990 et l’erreur type résiduelle vaut environ 2,08"],
      },
    ],
    assumptions: [
      "La relation est à peu près linéaire sur l’étendue des données. Une tendance courbe nécessite un autre modèle, même si r² paraît élevé.",
      "La valeur p et les erreurs types supposent des observations indépendantes, avec des résidus à peu près normaux et de dispersion constante.",
      "X est considéré comme mesuré sans erreur ; seules les distances verticales sont minimisées. Échanger X et Y donne une autre droite.",
      "Les valeurs aberrantes et les points aux valeurs de X extrêmes peuvent fortement attirer la droite. Les prédictions hors de l’étendue observée de X sont des extrapolations.",
    ],
    faqs: [
      { question: "Quelle différence avec le coefficient de corrélation ?", answer: "La corrélation donne un seul nombre pour la force et le sens d’une relation linéaire et traite X et Y de la même façon. La régression donne une équation qui prédit Y à partir de X, avec une pente exprimée en unités de Y par unité de X. Utilisez le Calculateur de coefficient de corrélation si r vous suffit." },
      { question: "Que signifie la valeur p de la pente ?", answer: "C’est la probabilité d’obtenir une pente au moins aussi éloignée de 0 si, en réalité, Y ne variait pas linéairement avec X. Une petite valeur p (par exemple inférieure à 0,05) suggère une vraie tendance linéaire ; elle ne dit rien de l’ampleur ni de l’importance de cette tendance." },
      { question: "Pourquoi les valeurs de X doivent-elles différer ?", answer: "La pente se calcule en divisant par la dispersion des valeurs de X. Si tous les X sont identiques, cette dispersion est nulle et n’importe quelle droite verticale conviendrait : aucune pente ne peut donc être calculée." },
    ],
    sourcesUsedFor: [
      "La droite des moindres carrés, sa pente, son ordonnée à l’origine et le coefficient de détermination.",
      "L’écart type (erreur type) de la pente d’un ajustement linéaire par les moindres carrés.",
    ],
  },
  text: {
    x: "Valeurs de X (variable explicative)",
    xHelp: "Une valeur par observation, séparées par des points-virgules, des espaces ou des retours à la ligne. Utilisez la virgule décimale.",
    y: "Valeurs de Y (variable réponse)",
    yHelp: "Une valeur par observation, dans le même ordre que les valeurs de X.",
    x0: "Prédire y pour x =",
    x0Help: "Facultatif. Une valeur de x pour laquelle estimer ŷ à partir de la droite ajustée.",
    errors: {
      empty: "Saisissez au moins un nombre.",
      tooMany: "Saisissez au maximum {max} nombres.",
      notNumber: "« {token} » n’est pas un nombre. Utilisez la virgule décimale et séparez les valeurs par des points-virgules, des espaces ou des retours à la ligne.",
      tooLarge: "« {token} » est trop grand.",
    },
    tooBig: "{value} est trop grand. Chaque nombre peut valoir au plus {max} en valeur absolue.",
    tooFew: "Saisissez au moins {min} paires de valeurs.",
    countMismatch: "Saisissez une valeur de Y pour chaque valeur de X : vous en avez {x} et {y}.",
    xCount: { zero: "{n} valeur de X", one: "{n} valeur de X", two: "{n} valeurs de X", few: "{n} valeurs de X", many: "{n} de valeurs de X", other: "{n} valeurs de X" },
    yCount: { zero: "{n} valeur de Y", one: "{n} valeur de Y", two: "{n} valeurs de Y", few: "{n} valeurs de Y", many: "{n} de valeurs de Y", other: "{n} valeurs de Y" },
    pairCount: { zero: "{n} paire", one: "{n} paire", two: "{n} paires", few: "{n} paires", many: "{n} de paires", other: "{n} paires" },
    constantX: "Toutes les valeurs de X sont identiques : aucune droite ne peut donc être ajustée. Au moins deux valeurs de X doivent différer.",
    equationLabel: "Droite de régression",
    equation: "ŷ = {a} {sign} {b}x",
    caption: "Ajustement par les moindres carrés sur {count}.",
    slope: "Pente (b)",
    intercept: "Ordonnée à l’origine (a)",
    rSquared: "Coefficient de détermination (r²)",
    r: "Coefficient de corrélation (r)",
    slopeSe: "Erreur type de la pente",
    tStat: "Statistique t de la pente",
    tInfinite: "Infinie (ajustement parfait)",
    df: "Degrés de liberté (n − 2)",
    pValue: "Valeur p bilatérale (H₀ : pente = 0)",
    residualSe: "Erreur type résiduelle",
    prediction: "ŷ prédit pour x = {x0}",
    notDefined: "Non défini (toutes les valeurs de Y sont égales)",
    perfectNote: "Les points sont exactement alignés : les résidus et les erreurs types valent 0, et la valeur p vaut 0.",
    constantYNote: "Toutes les valeurs de Y sont égales : la droite est donc horizontale (pente 0), et r, r² et le test de la pente ne sont pas définis.",
    extrapolationNote: "La valeur de x est en dehors de l’étendue des données. Les prédictions au-delà des valeurs de X observées (extrapolation) peuvent être très éloignées de la réalité si la relation change.",
    note: "La valeur p suppose des résidus indépendants, à peu près normaux et de dispersion constante. Un bon ajustement ne montre pas que X est la cause de Y.",
  },
};

export default fr;
