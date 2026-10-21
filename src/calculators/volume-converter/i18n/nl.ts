import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { VolumeConverterText } from "../text/en";

const nl: CalculatorTranslation<VolumeConverterText> = {
  content: {
    title: "Volume omrekenen",
    shortTitle: "Volume",
    summary: "Reken om tussen liter, milliliter, kubieke meter, Amerikaanse en imperiale gallons, quarts, pints, cups, fluid ounces, lepels en kubieke voet.",
    metaTitle: "Volume omrekenen – liter, gallon, cups en meer",
    metaDescription:
      "Reken volume om tussen liter, milliliter, kubieke meter, Amerikaanse en Britse gallons, quarts, pints, cups, fluid ounces, theelepels, eetlepels en kubieke voet.",
    keywords: ["volume omrekenen", "liter naar gallon", "gallon naar liter", "ml naar cups", "fluid ounce", "kubieke voet", "imperiale gallon", "inhoud omrekenen"],
    intro: [
      "Reken elk volume om tussen 15 metrische, Amerikaanse en imperiale eenheden. De tabel toont de waarde in alle eenheden tegelijk.",
      "Amerikaanse en imperiale eenheden hebben dezelfde namen maar niet dezelfde grootte: een imperiale gallon is ongeveer 20% groter dan een Amerikaanse, en een imperiale pint is 20 fluid ounces in plaats van 16.",
    ],
    howToUse: [
      "Vul de waarde in.",
      "Kies de eenheid waarvan je omrekent en de eenheid die je wilt.",
      "Lees de uitkomst af, of gebruik de tabel om alle eenheden te vergelijken.",
    ],
    formulas: [
      {
        title: "Omrekenen via liter",
        expression: "uitkomst = waarde × (liter per begineenheid) ÷ (liter per doeleenheid)",
        explanation: "Elke eenheid is gedefinieerd als een vast aantal liter.",
      },
      {
        title: "Belangrijkste factoren",
        expression: "1 US gal = 231 in³ = 3,785411784 L\n1 US gal = 4 qt = 8 pt = 16 cups = 128 fl oz\n1 US fl oz = 2 tbsp = 6 tsp\n1 imp gal = 4,54609 L = 160 imp fl oz",
        explanation: "Per definitie exact. Een kubieke voet is 28,316846592 L.",
      },
    ],
    examples: [
      { title: "1 Amerikaanse gallon in liter", steps: ["1 Amerikaanse gallon = 231 in³ × 0,016387064 L/in³", "= 3,785411784 L"] },
      { title: "500 milliliter in Amerikaanse cups", steps: ["1 Amerikaanse cup = 236,5882365 mL", "500 ÷ 236,5882365 ≈ 2,113 cups"] },
    ],
    assumptions: [
      "Amerikaanse eenheden zijn de gangbare Amerikaanse vloeistofmaten; de iets grotere Amerikaanse droge pints en quarts zijn niet opgenomen.",
      "Lepels en cups zijn Amerikaanse maten; metrische cups (250 mL) en eetlepels (15 mL, of 20 mL in Australië) wijken iets af.",
      "De uitkomsten worden voor de weergave afgerond op 10 significante cijfers.",
    ],
    faqs: [
      {
        question: "Hoeveel liter gaat er in een gallon?",
        answer: "Een Amerikaanse gallon is 3,785 liter; een imperiale (Britse) gallon is 4,546 liter.",
      },
      {
        question: "Hoeveel milliliter gaat er in een cup?",
        answer: "Een gewone Amerikaanse cup is 236,6 mL, een cup op Amerikaanse voedingsetiketten 240 mL en een metrische cup 250 mL.",
      },
      {
        question: "Waarom verschillen Britse en Amerikaanse pints?",
        answer: "Beide stelsels delen hun eigen gallon in 8 pints, maar de imperiale gallon is groter. Daardoor is een imperiale pint 568 mL en een Amerikaanse pint 473 mL.",
      },
    ],
    sourcesUsedFor: [
      "Exacte definities van de Amerikaanse gallon (231 kubieke inch) en de onderverdelingen ervan, en van de imperiale gallon (4,54609 liter).",
    ],
  },
  text: {
    value: "Waarde",
    from: "Van",
    to: "Naar",
    unitNames: {
      ml: "Milliliter",
      l: "Liter",
      m3: "Kubieke meter",
      tsp: "Amerikaanse theelepels",
      tbsp: "Amerikaanse eetlepels",
      floz: "Amerikaanse fluid ounces",
      cup: "Amerikaanse cups",
      pt: "Amerikaanse pints",
      qt: "Amerikaanse quarts",
      gal: "Amerikaanse gallons",
      impfloz: "Imperiale fluid ounces",
      imppt: "Imperiale pints",
      impgal: "Imperiale gallons",
      in3: "Kubieke inch",
      ft3: "Kubieke voet",
    },
    primary: "{value} {symbol} in {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} in alle volume-eenheden",
    tableUnit: "Eenheid",
    tableValue: "Waarde",
    note: "Amerikaanse en imperiale eenheden verschillen: een Amerikaanse gallon is 3,785 L, een imperiale gallon 4,546 L. De uitkomsten worden met 10 significante cijfers weergegeven.",
  },
};

export default nl;
