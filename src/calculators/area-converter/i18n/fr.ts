import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AreaConverterText } from "../text/en";

const fr: CalculatorTranslation<AreaConverterText> = {
  content: {
    title: "Convertisseur de surfaces",
    shortTitle: "Surfaces",
    summary: "Convertissez entre mètres carrés, hectares, kilomètres carrés, pieds carrés, yards carrés, acres, miles carrés et plus encore.",
    metaTitle: "Convertisseur de surfaces – Acres, hectares, m² et ft²",
    metaDescription: "Convertissez des surfaces entre mètres carrés, hectares, km², pouces carrés, pieds carrés, yards carrés, acres et miles carrés, avec des facteurs exacts.",
    keywords: ["convertisseur de surface", "conversion superficie", "acres en hectares", "pieds carrés en mètres carrés", "m2 en ft2", "hectare", "acre", "miles carrés"],
    intro: [
      "Convertissez une surface d’une unité à une autre, que vous compariez un terrain annoncé en acres avec un autre en hectares ou que vous calculiez la surface d’une pièce en mètres carrés. Le tableau affiche votre valeur dans les dix unités à la fois.",
      "Tous les facteurs sont exacts. Une unité carrée est le carré d’une unité de longueur : un pied carré vaut donc 0,3048 m × 0,3048 m = 0,09290304 m², et une acre vaut 43 560 pieds carrés.",
    ],
    howToUse: [
      "Saisissez la surface à convertir.",
      "Choisissez son unité et l’unité souhaitée.",
      "Lisez la valeur convertie, ou parcourez le tableau pour les autres unités.",
    ],
    formulas: [
      { title: "Conversion via le mètre carré", expression: "résultat = valeur × (m² par unité de départ) ÷ (m² par unité d’arrivée)", explanation: "Chaque unité vaut un nombre fixe de mètres carrés : toute paire d’unités peut donc être convertie via le m²." },
      {
        title: "Facteurs clés",
        expression: "1 ha = 10 000 m²\n1 ft² = 0,09290304 m²\n1 yd² = 9 ft² = 0,83612736 m²\n1 acre = 43 560 ft² = 4 046,8564224 m²\n1 mi² = 640 acres = 2 589 988,110336 m²",
        explanation: "Les valeurs impériales découlent du pied international, qui vaut exactement 0,3048 m.",
      },
    ],
    examples: [
      { title: "2,5 acres en hectares", steps: ["2,5 × 4 046,8564224 m² = 10 117,141056 m²", "10 117,141056 ÷ 10 000 ≈ 1,0117 ha"] },
      { title: "1 500 mètres carrés en pieds carrés", steps: ["1 ft² = 0,09290304 m²", "1 500 ÷ 0,09290304 ≈ 16 145,87 ft²"] },
      { title: "640 acres en miles carrés", steps: ["640 × 4 046,8564224 m² = 2 589 988,110336 m²", "2 589 988,110336 ÷ 2 589 988,110336 = 1 mi²"] },
    ],
    assumptions: [
      "Les acres et les miles carrés reposent sur le pied international. L’ancienne acre d’arpentage américaine (US survey) est plus grande d’environ 4 millionièmes, ce qui ne compte que pour les levés fonciers de précision.",
      "Les résultats sont affichés avec 10 chiffres significatifs.",
    ],
    faqs: [
      { question: "Combien de pieds carrés y a-t-il dans une acre ?", answer: "Exactement 43 560 pieds carrés. Un terrain carré d’une acre mesure environ 208,7 pieds de côté." },
      { question: "Un hectare est-il plus grand qu’une acre ?", answer: "Oui. Un hectare vaut 10 000 m², soit environ 2,471 acres ; une acre fait donc à peu près 0,405 hectare." },
      { question: "Pourquoi un mètre carré ne vaut-il pas 3,28 pieds carrés ?", answer: "Parce qu’une surface varie comme le carré de la longueur. Un mètre vaut environ 3,2808 pieds, donc un mètre carré vaut environ 3,2808² ≈ 10,764 pieds carrés." },
    ],
    sourcesUsedFor: [
      "Facteurs de conversion de l’acre, du mile carré, du pied carré et d’autres unités de surface en mètres carrés.",
      "Définitions de l’acre (43 560 ft²) et du mile carré (640 acres).",
    ],
  },
  text: {
    value: "Valeur",
    from: "De",
    to: "Vers",
    unitNames: {
      mm2: "Millimètres carrés",
      cm2: "Centimètres carrés",
      m2: "Mètres carrés",
      ha: "Hectares",
      km2: "Kilomètres carrés",
      in2: "Pouces carrés",
      ft2: "Pieds carrés",
      yd2: "Yards carrés",
      acre: "Acres",
      mi2: "Miles carrés",
    },
    primary: "{value} {symbol} en {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} dans toutes les unités de surface",
    tableUnit: "Unité",
    tableValue: "Valeur",
    note: "Les résultats sont affichés avec 10 chiffres significatifs.",
  },
};

export default fr;
