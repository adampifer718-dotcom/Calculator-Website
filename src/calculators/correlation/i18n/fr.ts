import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CorrelationText } from "../text/en";

const fr: CalculatorTranslation<CorrelationText> = {
  content: {
    title: "Calculateur de coefficient de corrélation",
    shortTitle: "Corrélation",
    summary: "Mesurez à quel point deux listes de nombres varient ensemble avec le r de Pearson, le ρ de Spearman, r² et un test de significativité.",
    metaTitle: "Coefficient de corrélation – r de Pearson et ρ de Spearman",
    metaDescription: "Collez des données X et Y appariées pour obtenir le r de Pearson, r², la statistique t et la valeur p, la corrélation de rang de Spearman et la covariance.",
    keywords: ["coefficient de corrélation", "corrélation de Pearson", "rho de Spearman", "corrélation de rang", "r carré", "covariance", "relation linéaire", "nuage de points"],
    intro: [
      "Un coefficient de corrélation résume, en un seul nombre compris entre −1 et +1, à quel point deux grandeurs mesurées suivent une tendance en ligne droite. Une valeur proche de +1 signifie que les grandes valeurs de X vont avec les grandes valeurs de Y ; une valeur proche de −1, l’inverse ; une valeur proche de 0, qu’il y a peu de tendance linéaire.",
      "Saisissez des observations appariées, comme des heures d’entraînement et des notes d’examen. Le calculateur donne le r de Pearson avec r², un test t indiquant si la corrélation pourrait être nulle, la corrélation de rang de Spearman pour les tendances monotones mais courbes, et la covariance d’échantillon.",
    ],
    howToUse: [
      "Saisissez les valeurs de X dans la première zone, séparées par des points-virgules, des espaces ou des retours à la ligne.",
      "Saisissez les valeurs de Y correspondantes dans la seconde zone, dans le même ordre. Les deux listes doivent compter le même nombre de valeurs, au moins 3.",
      "Lisez le r de Pearson et r², puis la valeur p pour savoir si la tendance pourrait facilement être due au hasard.",
      "Comparez r au ρ de Spearman. Un ρ bien plus proche de ±1 que r suggère une relation courbe mais toujours croissante ou toujours décroissante.",
    ],
    formulas: [
      { title: "r de Pearson", expression: "r = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ √[Σ(xᵢ − x̄)² · Σ(yᵢ − ȳ)²]", explanation: "La somme des produits croisés des écarts, rapportée à la dispersion de chaque liste. Elle varie de −1 à +1." },
      { title: "Test de significativité", expression: "t = r·√[(n − 2) ÷ (1 − r²)], ddl = n − 2", explanation: "La valeur p bilatérale est tirée de la loi t de Student. Elle teste l’hypothèse nulle selon laquelle la corrélation dans la population est nulle." },
      { title: "ρ de Spearman", expression: "ρ = r de Pearson des rangs", explanation: "Chaque liste est remplacée par ses rangs ; les valeurs ex aequo reçoivent la moyenne des rangs qu’elles occupent." },
      { title: "Covariance d’échantillon", expression: "cov = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ (n − 1)", explanation: "La variation conjointe non normalisée, exprimée en unités de X multipliées par les unités de Y." },
    ],
    examples: [
      {
        title: "Heures d’entraînement et notes à un quiz",
        steps: ["x̄ = 6, ȳ = 65,1667 ; Σ des produits croisés = 151, Σ(x − x̄)² = 42, Σ(y − ȳ)² = 550,8333", "r = 151 ÷ √(42 × 550,8333) ≈ 0,9928", "t = 0,9928 × √(4 ÷ 0,01444) ≈ 16,52 avec 4 ddl, p ≈ 0,0000785"],
      },
      {
        title: "Température extérieure et coût de chauffage hebdomadaire",
        steps: ["Le coût baisse quand la température monte, donc les produits croisés sont surtout négatifs.", "r ≈ −0,9924 et r² ≈ 0,9849", "Les deux listes sont dans l’ordre exactement inverse, donc le ρ de Spearman vaut −1."],
      },
      {
        title: "Une tendance courbe mais toujours croissante (y = x²)",
        steps: ["Le r de Pearson vaut environ 0,9789, car les points s’écartent d’une ligne droite.", "Les rangs de x et de y sont identiques, donc le ρ de Spearman vaut 1."],
      },
    ],
    assumptions: [
      "Le r de Pearson ne mesure que l’association linéaire. Une forte relation courbe peut donner un r modeste ; le ρ de Spearman capte toute tendance toujours croissante ou toujours décroissante.",
      "La valeur p suppose que les paires sont indépendantes et, pour le r de Pearson, que les données suivent à peu près une loi normale bivariée. Les valeurs aberrantes peuvent beaucoup modifier r.",
      "Les qualificatifs de force suivent une règle empirique courante (|r| inférieur à 0,1 négligeable, 0,1 faible, 0,4 modérée, 0,7 forte, 0,9 très forte). Ce qui est qualifié de fort varie selon les disciplines.",
      "Corrélation n’est pas causalité : un troisième facteur, le hasard ou une causalité inverse peuvent expliquer une association.",
    ],
    faqs: [
      { question: "Quelle est la différence entre r et r² ?", answer: "r indique le sens et la force d’une tendance linéaire. r² est la part de la variation de Y expliquée par un ajustement linéaire sur X : r = 0,8 donne r² = 0,64, soit 64 %." },
      { question: "Quand utiliser Spearman plutôt que Pearson ?", answer: "Utilisez le ρ de Spearman lorsque les données sont des rangs, lorsque la relation est monotone mais pas rectiligne, ou lorsque des valeurs aberrantes risquent de fausser le r de Pearson." },
      { question: "Pourquoi les listes doivent-elles compter au moins trois valeurs et varier ?", answer: "Avec deux points, n’importe quelle droite passe parfaitement, et le test exige n − 2 ≥ 1 degré de liberté. Si toutes les valeurs de X ou toutes celles de Y sont identiques, la formule divise par zéro et r n’est pas défini." },
    ],
    sourcesUsedFor: [
      "Test permettant de savoir si r diffère de zéro, avec n − 2 degrés de liberté.",
      "Définition du coefficient de corrélation comme mesure de l’association linéaire, comprise entre −1 et +1.",
    ],
  },
  text: {
    x: "Valeurs de X",
    xHelp: "Une valeur par observation, séparées par des points-virgules, des espaces ou des retours à la ligne. Utilisez la virgule décimale.",
    y: "Valeurs de Y",
    yHelp: "Une valeur par observation, dans le même ordre que les valeurs de X.",
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
    constantX: "Toutes les valeurs de X sont identiques : la corrélation n’est donc pas définie. Au moins deux valeurs de X doivent différer.",
    constantY: "Toutes les valeurs de Y sont identiques : la corrélation n’est donc pas définie. Au moins deux valeurs de Y doivent différer.",
    pearson: "Coefficient de corrélation de Pearson (r)",
    caption: "Calculé sur {count}.",
    rSquared: "Coefficient de détermination (r²)",
    tStat: "Statistique t",
    tInfinite: "Infinie (corrélation parfaite)",
    df: "Degrés de liberté (n − 2)",
    pValue: "Valeur p bilatérale (H₀ : aucune corrélation)",
    spearman: "Corrélation de rang de Spearman (ρ)",
    covariance: "Covariance d’échantillon",
    strength: "Force et sens (règle empirique)",
    describe: "{strength}, {direction}",
    strengths: { negligible: "Négligeable", weak: "Faible", moderate: "Modérée", strong: "Forte", veryStrong: "Très forte", perfect: "Parfaite" },
    directions: { positive: "positive", negative: "négative", none: "sans sens" },
    perfectNote: "Les points sont exactement alignés : |r| = 1 et la valeur p vaut 0.",
    smallNote: "Avec seulement quelques paires, même un r élevé peut être dû au hasard. Vérifiez la valeur p.",
    note: "La corrélation mesure à quel point deux variables varient ensemble. Elle ne montre pas que l’une est la cause de l’autre.",
  },
};

export default fr;
