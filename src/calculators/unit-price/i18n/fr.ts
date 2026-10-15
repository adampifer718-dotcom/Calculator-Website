import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { UnitPriceText } from "../text/en";

const fr: CalculatorTranslation<UnitPriceText> = {
  content: {
    title: "Calculateur de prix unitaire",
    shortTitle: "Prix unitaire",
    summary: "Comparez deux formats d’emballage selon le prix au kilogramme, au litre ou à l’unité pour savoir lequel est le plus avantageux.",
    metaTitle: "Calculateur de prix unitaire – Comparer le prix au kilo",
    metaDescription:
      "Comparez deux produits selon leur prix au kg, au litre ou à l’unité, même si l’un est en onces ou en gallons, et voyez combien le moins cher fait économiser.",
    keywords: ["prix unitaire", "prix au kilo", "prix au kg", "prix au litre", "comparer les prix", "meilleur achat", "comparaison de prix", "courses"],
    intro: [
      "Un plus grand emballage n’est pas toujours moins cher au gramme. Le prix unitaire, c’est-à-dire le prix divisé par la quantité, est la façon juste de comparer deux formats ou deux marques.",
      "Saisissez le prix et la quantité de chaque article. Les quantités peuvent être en unités métriques ou américaines ; elles sont toutes deux converties dans une unité commune avant d’être comparées.",
    ],
    howToUse: [
      "Choisissez la devise des prix.",
      "Pour l’article A, saisissez le prix, la quantité contenue dans l’emballage et son unité.",
      "Faites de même pour l’article B, avec une unité de même nature : masse, volume ou nombre.",
      "Lisez quel article est le moins cher, le prix de chacun au kilogramme, au litre ou à l’unité, et le pourcentage économisé.",
    ],
    formulas: [
      { title: "Prix unitaire", expression: "prix unitaire = prix ÷ quantité", explanation: "La quantité est d’abord convertie en kilogrammes, en litres ou en nombre d’articles." },
      {
        title: "Pourcentage économisé",
        expression: "économie = (plus élevé − plus bas) ÷ plus élevé × 100",
        explanation: "Combien vous payez de moins par unité en choisissant l’article le moins cher.",
      },
      {
        title: "Unités américaines",
        expression: "1 oz = 28,349523125 g ; 1 lb = 453,59237 g ; 1 fl oz = 29,5735295625 mL ; 1 gal = 3,785411784 L",
        explanation: "Ce sont des définitions exactes : la comparaison ne dépend donc d’aucun arrondi.",
      },
    ],
    examples: [
      {
        title: "500 g à 3,49 $US contre 1 kg à 5,99 $US",
        steps: ["A : 3,49 ÷ 0,5 kg = 6,98 $US le kg", "B : 5,99 ÷ 1 kg = 5,99 $US le kg", "B fait économiser (6,98 − 5,99) ÷ 6,98 ≈ 14,18 %"],
      },
      {
        title: "64 fl oz de jus à 4,29 $US contre 1,75 L à 3,19 $US",
        steps: ["64 fl oz = 64 × 29,5735295625 mL ≈ 1,8927 L", "A : 4,29 ÷ 1,8927 ≈ 2,27 $US le L", "B : 3,19 ÷ 1,75 ≈ 1,82 $US le L, soit environ 19,58 % de moins"],
      },
      {
        title: "12 œufs à 3,60 $US contre 18 œufs à 5,58 $US",
        steps: ["A : 3,60 ÷ 12 = 0,30 $US l’œuf", "B : 5,58 ÷ 18 = 0,31 $US l’œuf", "A fait économiser (0,31 − 0,30) ÷ 0,31 ≈ 3,23 %"],
      },
    ],
    assumptions: [
      "Les deux articles vous sont aussi utiles l’un que l’autre : même qualité, et vous utiliserez tout le contenu du plus grand emballage.",
      "Les onces sont des onces avoirdupois (masse), et les onces liquides et les gallons sont des mesures américaines. Les pintes et gallons impériaux britanniques sont plus grands et ne sont pas proposés.",
      "Les prix sont comparés tels que saisis ; les taxes, consignes et bons de réduction ne sont pas ajoutés.",
      "Le choix d’une devise ne modifie que la mise en forme.",
    ],
    faqs: [
      {
        question: "Puis-je comparer un article vendu au poids et un article vendu au volume ?",
        answer: "Pas directement. Les grammes et les millilitres ne correspondent que pour des liquides semblables à l’eau : le calculateur demande donc des unités de même nature. Vérifiez l’étiquette : beaucoup d’emballages indiquent les deux.",
      },
      {
        question: "Pourquoi comparer au kilogramme ou au litre plutôt qu’au gramme ?",
        answer: "Les prix au gramme sont minuscules et difficiles à lire. Au kilogramme ou au litre, on obtient des nombres du même ordre que ceux des étiquettes en rayon, et le classement est le même dans les deux cas.",
      },
      {
        question: "Le prix unitaire affiché en rayon est-il toujours juste ?",
        answer: "En général, oui, mais les magasins peuvent utiliser des unités différentes sur des étiquettes voisines, par exemple à l’once sur l’une et à la livre sur l’autre. En saisissant les deux articles ici, vous les ramenez à la même unité.",
      },
    ],
    sourcesUsedFor: [
      "La façon dont les prix unitaires en magasin sont exprimés par unité de masse, de volume ou de nombre.",
      "Les facteurs de conversion exacts de l’once et de la livre avoirdupois, ainsi que de l’once liquide et du gallon américains.",
    ],
  },
  text: {
    priceA: "Prix de l’article A",
    quantityA: "Quantité de l’article A",
    unitA: "Unité de l’article A",
    priceB: "Prix de l’article B",
    quantityB: "Quantité de l’article B",
    unitB: "Unité de l’article B",
    quantityHelp: "La quantité contenue dans l’emballage, par exemple 500 pour un sachet de 500 g.",
    units: {
      g: "Grammes (g)",
      kg: "Kilogrammes (kg)",
      oz: "Onces (oz)",
      lb: "Livres (lb)",
      mL: "Millilitres (mL)",
      L: "Litres (L)",
      floz: "Onces liquides américaines (fl oz)",
      gal: "Gallons américains (gal)",
      item: "Articles (nombre)",
    },
    perUnit: { mass: "kg", volume: "L", count: "article" },
    kindMismatch: "L’article B doit être mesuré de la même façon que l’article A : les deux en masse, les deux en volume ou les deux en nombre.",
    aCheaper: "L’article A est moins cher à l’unité",
    bCheaper: "L’article B est moins cher à l’unité",
    same: "Les deux coûtent le même prix à l’unité",
    result: "Meilleur achat",
    caption: "{a} pour l’article A et {b} pour l’article B, par {unit}.",
    unitPriceA: "Prix de l’article A par {unit}",
    unitPriceB: "Prix de l’article B par {unit}",
    saving: "Économie par unité avec l’article le moins cher",
    difference: "Différence de prix par {unit}",
    notes: {
      compare: "Les prix sont comparés par {unit}, après conversion des deux quantités dans la même unité.",
      waste: "Un prix unitaire plus bas n’est une économie que si vous utilisez la plus grande quantité avant qu’elle ne se perde.",
    },
  },
};

export default fr;
