import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LengthConverterText } from "../text/en";

const nl: CalculatorTranslation<LengthConverterText> = {
  content: {
    title: "Lengte omrekenen",
    shortTitle: "Lengte",
    summary: "Reken om tussen millimeter, centimeter, meter, kilometer, inch, voet, yard, mijl en zeemijl.",
    metaTitle: "Lengte omrekenen – metrische en imperiale eenheden",
    metaDescription:
      "Reken lengtes om tussen metrische en imperiale eenheden: mm, cm, m, km, inch, voet, yard, mijl en zeemijl, met exacte omrekenfactoren.",
    keywords: ["lengte", "afstand", "omrekenen", "km naar mijl", "voet naar meter", "inch naar cm", "eenheden omrekenen"],
    intro: [
      "Reken elke lengte om tussen negen gangbare eenheden. De tabel toont je waarde in alle eenheden tegelijk.",
      "Alle factoren zijn per definitie exact: een inch is precies 2,54 cm en een mijl is precies 1609,344 m.",
    ],
    howToUse: [
      "Vul de waarde in.",
      "Kies de eenheid waarvan je omrekent en de eenheid die je wilt.",
      "Lees de uitkomst af, of gebruik de tabel om alle eenheden te zien.",
    ],
    formulas: [
      {
        title: "Omrekenen via meters",
        expression: "uitkomst = waarde × (meter per begineenheid) ÷ (meter per doeleenheid)",
        explanation: "Elke eenheid is gedefinieerd als een vast aantal meter.",
      },
      {
        title: "Belangrijkste factoren",
        expression: "1 in = 0,0254 m\n1 ft = 0,3048 m\n1 yd = 0,9144 m\n1 mi = 1609,344 m\n1 nmi = 1852 m",
        explanation: "Exacte waarden uit de internationale overeenkomst over yard en pond van 1959 en het SI.",
      },
    ],
    examples: [
      { title: "10 kilometer naar mijl", steps: ["10 × 1000 m = 10.000 m", "10.000 ÷ 1609,344 ≈ 6,2137 mi"] },
      { title: "6 voet naar meter", steps: ["6 × 0,3048", "= 1,8288 m"] },
    ],
    assumptions: [
      "Gebruikt internationale eenheden: de Amerikaanse survey foot, die ongeveer 2 miljoenste afwijkt, is niet opgenomen.",
      "De uitkomsten worden met 10 significante cijfers weergegeven.",
    ],
    faqs: [
      { question: "Hoeveel voet gaat er in een mijl?", answer: "Precies 5280 voet." },
      { question: "Hoe reken ik inch om naar centimeter?", answer: "Vermenigvuldig met 2,54. Bijvoorbeeld 12 in × 2,54 = 30,48 cm." },
      { question: "Wat is een zeemijl?", answer: "Een eenheid die op zee en in de luchtvaart wordt gebruikt, gedefinieerd als precies 1852 meter." },
    ],
    sourcesUsedFor: ["Exacte definities van de inch, voet, yard, mijl en zeemijl in meters."],
  },
  text: {
    value: "Waarde",
    from: "Van",
    to: "Naar",
    unitNames: {
      mm: "Millimeter",
      cm: "Centimeter",
      m: "Meter",
      km: "Kilometer",
      in: "Inch",
      ft: "Voet",
      yd: "Yard",
      mi: "Mijl",
      nmi: "Zeemijl",
    },
    primary: "{value} {symbol} in {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} in alle lengte-eenheden",
    tableUnit: "Eenheid",
    tableValue: "Waarde",
    note: "De uitkomsten worden met 10 significante cijfers weergegeven.",
  },
};

export default nl;
