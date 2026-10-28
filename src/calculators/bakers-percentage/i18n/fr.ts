import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BakersPercentageText } from "../text/en";

const fr: CalculatorTranslation<BakersPercentageText> = {
  content: {
    title: "Calculateur de pourcentage du boulanger",
    shortTitle: "Pourcentage du boulanger",
    summary: "Convertissez des pourcentages du boulanger en poids d’ingrédients à partir du poids de farine, ou trouvez la farine nécessaire pour un poids de pâte visé, avec l’hydratation.",
    metaTitle: "Calculateur de pourcentage du boulanger – Hydratation",
    metaDescription: "Convertissez des pourcentages du boulanger en grammes ou onces de farine, d’eau, de sel et de levure, trouvez la farine pour un poids de pâte et l’hydratation.",
    keywords: ["pourcentage du boulanger", "pourcentages en boulangerie", "hydratation pâte", "calcul pâte à pain", "recette de pain en pourcentage", "poids pâte à pizza", "taux d’hydratation"],
    intro: [
      "Les boulangers écrivent leurs recettes de pain en pourcentages de la farine. La farine vaut toujours 100 %, et chaque autre ingrédient est exprimé par rapport à elle : une pâte à 70 % d’eau utilise 700 g d’eau pour 1 000 g de farine. Comme les pourcentages sont rapportés à la farine, leur somme dépasse 100 %.",
      "Les recettes sont ainsi faciles à adapter et à comparer. Saisissez un poids de farine pour obtenir le poids de chaque ingrédient, ou le poids total de pâte souhaité, par exemple quatre pâtons à pizza de 250 g, pour savoir avec combien de farine commencer.",
    ],
    howToUse: [
      "Choisissez de partir du poids de farine ou du poids total de pâte souhaité.",
      "Choisissez les grammes ou les onces et saisissez le poids.",
      "Saisissez les pourcentages d’eau, de sel et de levure, et jusqu’à trois ingrédients supplémentaires comme l’huile, le sucre ou le beurre, chacun avec un nom facultatif.",
      "Lisez dans le tableau le poids de chaque ingrédient, le poids total de pâte et l’hydratation.",
    ],
    formulas: [
      { title: "Poids d’un ingrédient", expression: "poids = poids de farine × pourcentage ÷ 100", explanation: "Le pourcentage de chaque ingrédient est rapporté au poids total de farine, qui vaut 100 %." },
      { title: "Poids total de pâte", expression: "pâte = farine × Σ% ÷ 100", explanation: "Σ% est la somme de tous les pourcentages, y compris les 100 % de la farine." },
      { title: "Farine pour un poids de pâte visé", expression: "farine = pâte visée ÷ (Σ% ÷ 100)", explanation: "Pour 1 500 g de pâte avec Σ% = 171,5 %, la farine vaut 1 500 ÷ 1,715 ≈ 874,6 g." },
      { title: "Hydratation", expression: "hydratation = eau ÷ farine × 100 %", explanation: "En pourcentages du boulanger, c’est simplement le pourcentage d’eau." },
    ],
    examples: [
      {
        title: "Pain de base avec 1 000 g de farine à 70 % d’hydratation",
        steps: ["Eau = 1 000 × 0,70 = 700 g", "Sel = 20 g et levure = 10 g", "Total = 1 000 × 173 % = 1 730 g de pâte"],
      },
      {
        title: "1 500 g de pâte à pizza avec 3 % d’huile d’olive",
        steps: ["Σ% = 100 + 65 + 2 + 1,5 + 3 = 171,5 %", "Farine = 1 500 ÷ 1,715 ≈ 874,6 g", "Eau = 874,6 × 0,65 ≈ 568,5 g"],
      },
      {
        title: "Pain de mie avec 16 oz de farine et 5 % de sucre",
        steps: ["Σ% = 100 + 68 + 2 + 0,5 + 5 = 175,5 %", "Eau = 16 × 0,68 = 10,88 oz ; sucre = 0,8 oz", "Total = 16 × 1,755 = 28,08 oz de pâte"],
      },
    ],
    assumptions: [
      "Tous les pourcentages sont exprimés en poids, par rapport au poids total de toutes les farines de la recette.",
      "L’hydratation ne compte que la ligne d’eau. Le lait, les œufs, le beurre ou un levain contiennent aussi de l’eau (et un levain contient de la farine) : ajoutez-les comme lignes supplémentaires et ajustez l’eau si vous voulez une hydratation globale exacte.",
      "Le poids de pâte est la somme des ingrédients avant cuisson. Un peu de pâte reste toujours collée aux récipients et aux ustensiles, et le pain perd du poids au four : prévoyez un petit supplément si vous avez besoin de poids de pâtons exacts.",
    ],
    faqs: [
      { question: "Pourquoi la somme des pourcentages du boulanger dépasse-t-elle 100 % ?", answer: "Parce que chaque ingrédient est comparé à la farine, et non à la pâte entière. La farine seule vaut 100 % ; une fois l’eau, le sel et la levure ajoutés, le total dépasse donc toujours 100 %, souvent autour de 160 à 180 % pour le pain." },
      { question: "Que signifie une hydratation de 70 % ?", answer: "Cela signifie que la pâte contient 70 g d’eau pour 100 g de farine. Une hydratation plus élevée donne une pâte plus humide et plus collante, et généralement une mie plus alvéolée ; une hydratation plus faible donne une pâte plus ferme, plus facile à façonner." },
      { question: "Comment adapter une recette avec les pourcentages du boulanger ?", answer: "Gardez les mêmes pourcentages et modifiez seulement le poids de farine, ou saisissez le poids total de pâte souhaité et laissez le calculateur trouver la farine. Tous les autres ingrédients s’ajustent automatiquement." },
    ],
    sourcesUsedFor: ["La définition du pourcentage du boulanger : chaque ingrédient exprimé en pourcentage du poids total de farine, la farine valant toujours 100 %."],
  },
  text: {
    mode: "Partir du",
    modes: { fromFlour: "Poids de farine", fromDough: "Poids de pâte visé" },
    unit: "Unité de poids",
    units: { g: "Grammes (g)", oz: "Onces (oz)" },
    flour: "Poids total de farine",
    flourHelp: "Toute la farine de la recette réunie. Elle compte pour 100 %.",
    dough: "Poids de pâte visé",
    doughHelp: "Le poids total de pâte souhaité, par exemple le nombre de pains ou de pizzas multiplié par le poids de chacun.",
    water: "Eau",
    salt: "Sel",
    yeast: "Levure",
    pctHelp: "En pourcentage du poids de farine.",
    extraName: "Ingrédient supplémentaire {n} (facultatif)",
    extraNamePlaceholder: "par ex. huile d’olive",
    extraPct: "Ingrédient supplémentaire {n}, % de la farine",
    extraDefault: "Ingrédient supplémentaire {n}",
    doughWeight: "Poids total de pâte",
    flourNeeded: "Farine nécessaire",
    captionFlour: "{flour} de farine pour un total de {total}.",
    captionDough: "{dough} de pâte ÷ ({total} ÷ 100).",
    flourOut: "Farine",
    totalPct: "Somme de tous les pourcentages",
    hydration: "Hydratation (eau ÷ farine)",
    waterOut: "Poids d’eau",
    tableCaption: "Poids des ingrédients",
    colIngredient: "Ingrédient",
    colPercent: "Pourcentage du boulanger",
    colWeight: "Poids",
    flourRow: "Farine",
    totalRow: "Total de pâte",
    notes: {
      hydration: "L’hydratation ne compte que la ligne d’eau. Le lait, les œufs, un levain ou d’autres ingrédients humides apportent aussi de l’eau : si vous en utilisez, l’hydratation réelle de la pâte est plus élevée.",
      rounding: "Les petites quantités comme la levure et le sel sont plus faciles à peser précisément avec une balance au 0,1 g.",
    },
  },
};

export default fr;
