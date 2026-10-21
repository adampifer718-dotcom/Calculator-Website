import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AreaConverterText } from "../text/en";

const nl: CalculatorTranslation<AreaConverterText> = {
  content: {
    title: "Oppervlakte omrekenen",
    shortTitle: "Oppervlakte",
    summary: "Reken om tussen vierkante meter, hectare, vierkante kilometer, vierkante voet, vierkante yard, acre, vierkante mijl en meer.",
    metaTitle: "Oppervlakte omrekenen – Acre, hectare, m² en ft²",
    metaDescription:
      "Reken oppervlakte om tussen vierkante meter, hectare, km², vierkante inch, vierkante voet, vierkante yard, acre en vierkante mijl, met exacte factoren.",
    keywords: ["oppervlakte omrekenen", "acre naar hectare", "vierkante voet naar vierkante meter", "m2 naar ft2", "hectare", "acre", "vierkante mijl", "grondoppervlakte"],
    intro: [
      "Reken een oppervlakte om van de ene eenheid naar de andere, of je nu een perceel in acres vergelijkt met een perceel in hectares of het vloeroppervlak van een kamer in vierkante meter uitrekent. De tabel toont je waarde in alle tien eenheden tegelijk.",
      "Elke factor is exact. Vierkante eenheden zijn het kwadraat van een lengte-eenheid, dus één vierkante voet is 0,3048 m × 0,3048 m = 0,09290304 m², en een acre is 43.560 vierkante voet.",
    ],
    howToUse: [
      "Typ de oppervlakte die je wilt omrekenen.",
      "Kies de eenheid waarin die staat en de eenheid die je wilt.",
      "Lees de omgerekende waarde af, of bekijk de tabel voor de andere eenheden.",
    ],
    formulas: [
      { title: "Omrekenen via vierkante meter", expression: "resultaat = waarde × (m² per broneenheid) ÷ (m² per doeleenheid)", explanation: "Elke eenheid is een vast aantal vierkante meter, dus elk paar kan via m² worden omgerekend." },
      {
        title: "Belangrijkste factoren",
        expression: "1 ha = 10.000 m²\n1 ft² = 0,09290304 m²\n1 yd² = 9 ft² = 0,83612736 m²\n1 acre = 43.560 ft² = 4.046,8564224 m²\n1 mi² = 640 acres = 2.589.988,110336 m²",
        explanation: "De imperiale waarden volgen uit de internationale voet van precies 0,3048 m.",
      },
    ],
    examples: [
      {
        title: "2,5 acre naar hectare",
        steps: ["2,5 × 4.046,8564224 m² = 10.117,141056 m²", "10.117,141056 ÷ 10.000 ≈ 1,0117 ha"],
      },
      {
        title: "1.500 vierkante meter naar vierkante voet",
        steps: ["1 ft² = 0,09290304 m²", "1.500 ÷ 0,09290304 ≈ 16.145,87 ft²"],
      },
      {
        title: "640 acre naar vierkante mijl",
        steps: ["640 × 4.046,8564224 m² = 2.589.988,110336 m²", "2.589.988,110336 ÷ 2.589.988,110336 = 1 mi²"],
      },
    ],
    assumptions: [
      "Acre en vierkante mijl gebruiken de internationale voet. De oudere Amerikaanse survey acre is ongeveer 4 miljoenste groter; dat telt alleen bij nauwkeurige landmetingen.",
      "Resultaten worden getoond met 10 significante cijfers.",
    ],
    faqs: [
      { question: "Hoeveel vierkante voet zit er in een acre?", answer: "Precies 43.560 vierkante voet. Een vierkant perceel van één acre heeft zijden van ongeveer 208,7 voet." },
      { question: "Is een hectare groter dan een acre?", answer: "Ja. Een hectare is 10.000 m², ongeveer 2,471 acre, dus één acre is ruwweg 0,405 hectare." },
      { question: "Waarom is een vierkante meter geen 3,28 vierkante voet?", answer: "Omdat oppervlakte schaalt met het kwadraat van de lengte. Eén meter is ongeveer 3,2808 voet, dus één vierkante meter is ongeveer 3,2808² ≈ 10,764 vierkante voet." },
    ],
    sourcesUsedFor: [
      "Omrekeningsfactoren voor de acre, vierkante mijl, vierkante voet en andere oppervlakte-eenheden in vierkante meter.",
      "Definities van de acre (43.560 ft²) en de vierkante mijl (640 acre).",
    ],
  },
  text: {
    value: "Waarde",
    from: "Van",
    to: "Naar",
    unitNames: {
      mm2: "Vierkante millimeter",
      cm2: "Vierkante centimeter",
      m2: "Vierkante meter",
      ha: "Hectare",
      km2: "Vierkante kilometer",
      in2: "Vierkante inch",
      ft2: "Vierkante voet",
      yd2: "Vierkante yard",
      acre: "Acre",
      mi2: "Vierkante mijl",
    },
    primary: "{value} {symbol} in {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} in elke oppervlakte-eenheid",
    tableUnit: "Eenheid",
    tableValue: "Waarde",
    note: "Resultaten worden getoond met 10 significante cijfers.",
  },
};

export default nl;
