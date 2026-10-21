import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { StandardDeviationText } from "../text/en";

const fr: CalculatorTranslation<StandardDeviationText> = {
  content: {
    title: "Calculateur d’écart type",
    shortTitle: "Écart type",
    summary: "Calculez l’écart type d’un échantillon ou d’une population, la variance et l’erreur type à partir d’une série de données.",
    metaTitle: "Calculateur d’écart type – Échantillon et population",
    metaDescription: "Calculez l’écart type d’un échantillon ou d’une population, la variance, la moyenne et l’erreur type de la moyenne à partir d’une liste de nombres.",
    keywords: ["écart type", "calcul écart type", "variance", "écart type échantillon", "écart type population", "dispersion statistique", "erreur type"],
    intro: [
      "L’écart type mesure la dispersion des valeurs autour de la moyenne. Une petite valeur signifie que les données sont regroupées ; une grande valeur, qu’elles sont très dispersées.",
      "Choisissez « échantillon » lorsque vos données sont un sous-ensemble d’un groupe plus large, ce qui est le cas le plus courant.",
    ],
    howToUse: [
      "Saisissez vos nombres, séparés par des points-virgules, des espaces ou des retours à la ligne.",
      "Choisissez échantillon ou population.",
      "Consultez l’écart type, la variance, la moyenne et l’erreur type.",
    ],
    formulas: [
      { title: "Écart type d’un échantillon", expression: "s = √(Σ(x − x̄)² ÷ (n − 1))", explanation: "Diviser par n − 1 (correction de Bessel) corrige le biais de l’estimation de la dispersion à partir d’un échantillon." },
      { title: "Écart type d’une population", expression: "σ = √(Σ(x − μ)² ÷ n)", explanation: "À utiliser lorsque vous disposez de tous les membres du groupe." },
      { title: "Erreur type de la moyenne", expression: "ET = s ÷ √n", explanation: "Indique la précision avec laquelle la moyenne de l’échantillon estime la moyenne de la population." },
    ],
    examples: [
      {
        title: "Population : 2, 4, 4, 4, 5, 5, 7, 9",
        steps: ["Moyenne = 5 ; la somme des carrés des écarts vaut 32", "σ = √(32 ÷ 8) = 2"],
      },
      {
        title: "Échantillon : 2, 4, 4, 4, 5, 5, 7, 9",
        steps: ["La somme des carrés des écarts vaut 32", "s = √(32 ÷ 7) ≈ 2,138"],
      },
    ],
    assumptions: [
      "Accepte jusqu’à 10 000 nombres. Un échantillon en nécessite au moins deux.",
      "Utilise un calcul en deux passes, numériquement stable.",
      "Les résultats sont affichés avec 10 chiffres significatifs.",
    ],
    faqs: [
      { question: "Faut-il utiliser l’écart type de l’échantillon ou de la population ?", answer: "Utilisez l’échantillon (n − 1) lorsque vos données proviennent d’un groupe plus large, et la population (n) uniquement lorsque vous disposez du groupe entier." },
      { question: "Qu’est-ce que la variance ?", answer: "Le carré de l’écart type, exprimé en unités au carré." },
      { question: "Que signifie un écart type de 0 ?", answer: "Toutes les valeurs sont identiques." },
    ],
    sourcesUsedFor: ["Formules de l’écart type d’un échantillon et d’une population."],
  },
  text: {
    data: "Série de données",
    dataHelp: "Séparez les valeurs par des points-virgules, des espaces ou des retours à la ligne (par exemple 1,5 ; 2,25 ; 3). Utilisez la virgule décimale ; une virgule suivie d’une espace sépare aussi les valeurs.",
    errors: {
      empty: "Saisissez au moins un nombre.",
      tooMany: "Saisissez au maximum {max} nombres.",
      notNumber: "« {token} » n’est pas un nombre. Utilisez la virgule décimale et séparez les valeurs par des points-virgules, des espaces ou des retours à la ligne.",
      tooLarge: "« {token} » est trop grand.",
    },
    kind: "Type de données",
    kinds: { sample: "Échantillon (diviser par n − 1)", population: "Population entière (diviser par n)" },
    needTwo: "Un échantillon doit comporter au moins deux valeurs.",
    sampleSd: "Écart type de l’échantillon (s)",
    populationSd: "Écart type de la population (σ)",
    sampleVariance: "Variance de l’échantillon (s²)",
    populationVariance: "Variance de la population (σ²)",
    mean: "Moyenne",
    count: "Effectif (n)",
    standardError: "Erreur type de la moyenne",
  },
};

export default fr;
