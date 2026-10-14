import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CupsToGramsText } from "../text/en";

const fr: CalculatorTranslation<CupsToGramsText> = {
  content: {
    title: "Convertisseur de tasses en grammes",
    shortTitle: "Tasses en grammes",
    summary: "Convertissez des tasses en grammes et des grammes en tasses pour la farine, le sucre, le beurre et d’autres ingrédients de pâtisserie, chacun avec sa propre densité.",
    metaTitle: "Convertisseur de tasses en grammes – Farine, sucre, beurre…",
    metaDescription:
      "Convertissez des tasses en grammes et des grammes en tasses pour 18 ingrédients de pâtisserie grâce à la densité de chacun, avec les tasses américaine, métrique et impériale.",
    keywords: ["tasse en grammes", "conversion cup en grammes", "1 cup en grammes", "cup farine en grammes", "cup sucre en grammes", "conversion recette américaine", "grammes en tasses"],
    intro: [
      "Une tasse mesure un volume, mais une tasse de farine pèse bien moins lourd qu’une tasse de miel. Pour passer des tasses aux grammes, il faut donc connaître la densité de l’ingrédient concerné.",
      "Choisissez l’ingrédient et la tasse utilisée par votre recette. Les recettes américaines utilisent une tasse de 236,6 mL, tandis que de nombreuses recettes australiennes, néo-zélandaises et canadiennes utilisent une tasse métrique de 250 mL.",
    ],
    howToUse: [
      "Choisissez tasses en grammes ou grammes en tasses.",
      "Choisissez l’ingrédient.",
      "Choisissez la taille de tasse utilisée par la recette.",
      "Saisissez la quantité, puis lisez le résultat et le tableau par tasse.",
    ],
    formulas: [
      { title: "Tasses en grammes", expression: "grammes = tasses × volume de la tasse (mL) × densité (g/mL)", explanation: "Densité = grammes dans une tasse américaine ÷ 236,588 mL." },
      { title: "Grammes en tasses", expression: "tasses = grammes ÷ (volume de la tasse (mL) × densité (g/mL))", explanation: "La même relation, résolue pour obtenir le nombre de tasses." },
    ],
    examples: [
      {
        title: "2 tasses américaines de farine tout usage",
        steps: ["Une tasse américaine de farine tout usage pèse 120 g", "2 × 120 g = 240 g (environ 8,47 oz)"],
      },
      {
        title: "500 g de sucre en poudre en tasses américaines",
        steps: ["Une tasse américaine de sucre en poudre pèse 198 g", "500 ÷ 198 ≈ 2,53 tasses, soit un peu plus de 2 tasses et demie"],
      },
    ],
    assumptions: [
      "Les ingrédients secs sont versés à la cuillère dans la tasse puis arasés, sans tasser ni tamiser.",
      "Les poids sont des valeurs types ; la marque de farine, la finesse du sucre, l’humidité et la température peuvent les faire varier de plusieurs pour cent.",
      "Le beurre est mesuré solide et tassé ; les liquides sont mesurés à température ambiante.",
    ],
    faqs: [
      { question: "Pourquoi une tasse de farine pèse-t-elle moins qu’une tasse de sucre ?", answer: "Les particules de farine emprisonnent plus d’air et sont moins denses : un même volume contient donc moins de masse. C’est pourquoi chaque ingrédient nécessite sa propre conversion." },
      { question: "Quelle taille de tasse choisir ?", answer: "Utilisez la tasse américaine pour les recettes américaines et la tasse métrique de 250 mL pour la plupart des recettes australiennes, néo-zélandaises et canadiennes. Les anciennes recettes britanniques peuvent utiliser la tasse impériale, plus grande." },
      { question: "Vaut-il mieux peser que mesurer en tasses ?", answer: "Oui, en pâtisserie. Une balance de cuisine évite les écarts liés à la façon dont la tasse est remplie." },
    ],
    sourcesUsedFor: [
      "Grammes par tasse pour les farines, les sucres, le beurre, l’huile, le miel, le sirop d’érable, le cacao, les flocons d’avoine, les pépites de chocolat et la fécule de maïs.",
      "Poids d’une tasse de lait entier et de riz blanc à grain long cru.",
      "Taille de la tasse américaine (8 onces liquides américaines) et de l’once liquide impériale.",
    ],
  },
  text: {
    direction: "Conversion",
    directions: { toGrams: "Tasses en grammes", toCups: "Grammes en tasses" },
    ingredient: "Ingrédient",
    ingredients: {
      flourAllPurpose: "Farine tout usage",
      flourBread: "Farine à pain",
      flourWholeWheat: "Farine complète",
      flourAlmond: "Poudre d’amande",
      sugarGranulated: "Sucre en poudre",
      sugarBrown: "Sucre brun (tassé)",
      sugarPowdered: "Sucre glace",
      butter: "Beurre",
      oil: "Huile végétale",
      honey: "Miel",
      mapleSyrup: "Sirop d’érable",
      cocoa: "Cacao en poudre (non sucré)",
      oats: "Flocons d’avoine",
      chocolateChips: "Pépites de chocolat",
      cornstarch: "Fécule de maïs",
      rice: "Riz blanc (cru)",
      milk: "Lait (entier)",
      water: "Eau",
    },
    cup: "Taille de tasse",
    cups: {
      us: "Tasse américaine (236,6 mL)",
      metric: "Tasse métrique (250 mL)",
      usLegal: "Tasse des étiquettes nutritionnelles américaines (240 mL)",
      imperial: "Tasse impériale (284,1 mL)",
    },
    cupHelp: "Les recettes américaines utilisent la tasse américaine ; les recettes australiennes, néo-zélandaises et canadiennes utilisent généralement la tasse métrique de 250 mL.",
    amountCups: "Quantité en tasses",
    amountGrams: "Quantité en grammes",
    cupsUnit: "tasses",
    grams: "Poids",
    gramsCaption: "{amount} × {cup}, ingrédient : {ingredient}.",
    cupsResult: "Volume en tasses",
    cupsCaption: "{amount} g, ingrédient : {ingredient}, mesure : {cup}.",
    ounces: "En onces",
    milliliters: "Volume en millilitres",
    kitchen: "Mesure de cuisine la plus proche",
    density: "Densité",
    tableCaption: "Poids d’une tasse de chaque ingrédient ({cup})",
    tableIngredient: "Ingrédient",
    tableGrams: "Grammes",
    notes: {
      method: "Les poids supposent que les ingrédients sont versés à la cuillère dans la tasse puis arasés. Puiser la farine directement dans le paquet la tasse et peut ajouter 20 à 30 %.",
      sources: "Les densités sont des valeurs types issues du tableau des poids d’ingrédients de King Arthur Baking et de la base FoodData Central de l’USDA ; elles varient selon les marques et les conditions.",
    },
  },
};

export default fr;
