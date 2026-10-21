import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WeightConverterText } from "../text/en";

const nl: CalculatorTranslation<WeightConverterText> = {
  content: {
    title: "Gewicht omrekenen",
    shortTitle: "Gewicht",
    summary: "Reken om tussen milligram, gram, kilogram, ton, ounce, pond en stone.",
    metaTitle: "Gewicht omrekenen – kg, lb, oz, g en stone",
    metaDescription:
      "Reken gewicht (massa) om tussen kilogram, gram, milligram, ton, pond, ounce en stone met de exacte internationale definitie van het pond.",
    keywords: ["gewicht omrekenen", "massa", "kg naar lb", "pond naar kg", "ounce naar gram", "stone", "omrekenen"],
    intro: [
      "Reken een gewicht om tussen metrische en imperiale eenheden. Strikt genomen zijn dit eenheden van massa, en dat is ook wat een weegschaal aangeeft.",
      "Het pond is gedefinieerd als precies 0,45359237 kg, dus elke omrekening hier is exact tot de afronding voor de weergave.",
    ],
    howToUse: [
      "Vul de waarde in.",
      "Kies de eenheid waarvan en waarnaar je omrekent.",
      "Lees de uitkomst en de volledige tabel af.",
    ],
    formulas: [
      {
        title: "Omrekenen via kilogram",
        expression: "uitkomst = waarde × (kg per begineenheid) ÷ (kg per doeleenheid)",
        explanation: "Elke eenheid is gedefinieerd als een vast aantal kilogram.",
      },
      {
        title: "Belangrijkste factoren",
        expression: "1 lb = 0,45359237 kg\n1 oz = 1/16 lb = 28,349523125 g\n1 st = 14 lb\n1 t = 1000 kg",
        explanation: "Ounces zijn avoirdupois-ounces, zoals gebruikt voor voedsel en lichaamsgewicht.",
      },
    ],
    examples: [
      { title: "150 pond naar kilogram", steps: ["150 × 0,45359237", "≈ 68,04 kg"] },
      { title: "1 kilogram naar pond", steps: ["1 ÷ 0,45359237", "≈ 2,2046 lb"] },
    ],
    assumptions: [
      "Ounces zijn avoirdupois-ounces; troy-ounces (voor edelmetalen) zijn niet opgenomen.",
      "Ton is de metrische ton (1000 kg), niet de Amerikaanse short ton of de Britse long ton.",
    ],
    faqs: [
      { question: "Hoeveel pond gaat er in een kilogram?", answer: "Ongeveer 2,2046 pond." },
      { question: "Hoeveel ounces gaan er in een pond?", answer: "Precies 16 avoirdupois-ounces." },
      { question: "Hoeveel is een stone?", answer: "14 pond, oftewel ongeveer 6,35 kg." },
    ],
    sourcesUsedFor: ["Exacte definitie van het pond en verwante eenheden in kilogram."],
  },
  text: {
    value: "Waarde",
    from: "Van",
    to: "Naar",
    unitNames: { mg: "Milligram", g: "Gram", kg: "Kilogram", t: "Metrische ton", oz: "Ounce (avoirdupois)", lb: "Pond", st: "Stone" },
    primary: "{value} {symbol} in {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} in alle massa-eenheden",
    tableUnit: "Eenheid",
    tableValue: "Waarde",
    note: "De uitkomsten worden met 10 significante cijfers weergegeven.",
  },
};

export default nl;
