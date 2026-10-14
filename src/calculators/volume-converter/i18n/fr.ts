import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { VolumeConverterText } from "../text/en";

const fr: CalculatorTranslation<VolumeConverterText> = {
  content: {
    title: "Convertisseur de volume",
    shortTitle: "Volume",
    summary: "Convertissez entre litres, millilitres, mètres cubes, gallons américains et impériaux, quarts, pintes, tasses, onces liquides, cuillères et pieds cubes.",
    metaTitle: "Convertisseur de volume – Litres, gallons, tasses et plus",
    metaDescription:
      "Convertissez des volumes entre litres, millilitres, mètres cubes, gallons américains et impériaux, quarts, pintes, tasses, onces liquides, cuillères et pieds cubes.",
    keywords: ["convertisseur volume", "conversion litre gallon", "gallon en litre", "ml en tasse", "once liquide en ml", "pied cube en litre", "gallon impérial"],
    intro: [
      "Convertissez n’importe quel volume entre 15 unités métriques, américaines et impériales. Le tableau affiche la valeur dans toutes les unités à la fois.",
      "Les unités américaines et impériales portent les mêmes noms mais n’ont pas la même taille : un gallon impérial est environ 20 % plus grand qu’un gallon américain, et une pinte impériale vaut 20 onces liquides au lieu de 16.",
    ],
    howToUse: [
      "Saisissez la valeur.",
      "Choisissez l’unité de départ et l’unité souhaitée.",
      "Lisez le résultat, ou utilisez le tableau pour comparer toutes les unités.",
    ],
    formulas: [
      { title: "Conversion via le litre", expression: "résultat = valeur × (litres par unité de départ) ÷ (litres par unité d’arrivée)", explanation: "Chaque unité est définie comme un nombre fixe de litres." },
      {
        title: "Facteurs clés",
        expression: "1 US gal = 231 in³ = 3,785411784 L\n1 US gal = 4 qt = 8 pt = 16 cups = 128 fl oz\n1 US fl oz = 2 tbsp = 6 tsp\n1 imp gal = 4,54609 L = 160 imp fl oz",
        explanation: "Valeurs exactes par définition. Un pied cube vaut 28,316846592 L.",
      },
    ],
    examples: [
      {
        title: "1 gallon américain en litres",
        steps: ["1 gallon américain = 231 in³ × 0,016387064 L/in³", "= 3,785411784 L"],
      },
      {
        title: "500 millilitres en tasses américaines",
        steps: ["1 tasse américaine = 236,5882365 mL", "500 ÷ 236,5882365 ≈ 2,113 tasses"],
      },
    ],
    assumptions: [
      "Les unités américaines sont les mesures usuelles américaines pour les liquides ; les pintes et quarts américains pour matières sèches, légèrement plus grands, ne sont pas inclus.",
      "Les cuillères et les tasses sont aux tailles usuelles américaines ; la tasse métrique (250 mL) et la cuillère à soupe (15 mL, ou 20 mL en Australie) diffèrent légèrement.",
      "Les résultats sont arrondis à 10 chiffres significatifs pour l’affichage.",
    ],
    faqs: [
      { question: "Combien de litres y a-t-il dans un gallon ?", answer: "Un gallon américain vaut 3,785 litres ; un gallon impérial (britannique) vaut 4,546 litres." },
      { question: "Combien de millilitres y a-t-il dans une tasse ?", answer: "Une tasse usuelle américaine vaut 236,6 mL, la tasse des étiquettes nutritionnelles américaines 240 mL et la tasse métrique 250 mL." },
      { question: "Pourquoi les pintes britannique et américaine diffèrent-elles ?", answer: "Les deux systèmes divisent leur propre gallon en 8 pintes, mais le gallon impérial est plus grand : une pinte impériale vaut donc 568 mL et une pinte américaine 473 mL." },
    ],
    sourcesUsedFor: ["Définitions exactes du gallon américain (231 pouces cubes) et de ses subdivisions, ainsi que du gallon impérial (4,54609 litres)."],
  },
  text: {
    value: "Valeur",
    from: "De",
    to: "Vers",
    unitNames: {
      ml: "Millilitres",
      l: "Litres",
      m3: "Mètres cubes",
      tsp: "Cuillères à café américaines",
      tbsp: "Cuillères à soupe américaines",
      floz: "Onces liquides américaines",
      cup: "Tasses américaines",
      pt: "Pintes américaines",
      qt: "Quarts américains",
      gal: "Gallons américains",
      impfloz: "Onces liquides impériales",
      imppt: "Pintes impériales",
      impgal: "Gallons impériaux",
      in3: "Pouces cubes",
      ft3: "Pieds cubes",
    },
    primary: "{value} {symbol} en {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} dans toutes les unités de volume",
    tableUnit: "Unité",
    tableValue: "Valeur",
    note: "Les unités américaines et impériales diffèrent : un gallon américain vaut 3,785 L, un gallon impérial 4,546 L. Les résultats sont affichés avec 10 chiffres significatifs.",
  },
};

export default fr;
