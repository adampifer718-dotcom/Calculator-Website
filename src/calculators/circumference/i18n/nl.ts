import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CircumferenceText } from "../text/en";

const nl: CalculatorTranslation<CircumferenceText> = {
  content: {
    title: "Omtrekcalculator voor cirkels",
    shortTitle: "Omtrek",
    summary: "Bereken de omtrek van een cirkel uit de straal, de diameter of de oppervlakte, plus de andere maten.",
    metaTitle: "Omtrekcalculator – Straal, diameter en oppervlakte",
    metaDescription:
      "Bereken de omtrek van een cirkel uit de straal, de diameter of de oppervlakte en zie de andere maten met de formule O = 2πr.",
    keywords: ["omtrek cirkel", "cirkel", "straal", "diameter", "oppervlakte cirkel", "omtrek berekenen", "pi"],
    intro: [
      "De omtrek is de afstand rondom een cirkel. Die is π keer de diameter, of 2π keer de straal.",
      "Vul de maat in die je kent en de calculator berekent de rest, in dezelfde eenheid.",
    ],
    howToUse: ["Kies welke maat je kent.", "Vul de waarde in.", "Lees de omtrek, straal, diameter en oppervlakte af."],
    formulas: [
      { title: "Omtrek", expression: "O = 2πr = πd", explanation: "π ≈ 3,14159265." },
      { title: "Uit de oppervlakte", expression: "r = √(A ÷ π)", explanation: "Gebruik daarna O = 2πr." },
    ],
    examples: [
      {
        title: "Straal van 5",
        steps: ["O = 2 × π × 5", "≈ 31,415927"],
      },
      {
        title: "Diameter van 10",
        steps: ["O = π × 10", "≈ 31,415927"],
      },
    ],
    assumptions: [
      "De resultaten gebruiken π met volledige precisie en worden getoond met 6 decimalen.",
      "De oppervlakte is in de vierkante eenheid van je invoer.",
    ],
    faqs: [
      { question: "Hoe bereken ik de omtrek uit de diameter?", answer: "Vermenigvuldig de diameter met π. Een diameter van 20 cm geeft ongeveer 62,83 cm." },
      { question: "Hoe vind ik de straal uit de omtrek?", answer: "Deel de omtrek door 2π." },
      { question: "Wat is het verschil tussen omtrek en oppervlakte?", answer: "De omtrek is de lengte rondom de cirkel; de oppervlakte is de ruimte erbinnen." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    known: "Ik ken de",
    options: { radius: "Straal", diameter: "Diameter", area: "Oppervlakte" },
    radius: "Straal (r)",
    diameter: "Diameter (d)",
    area: "Oppervlakte (A)",
    circumference: "Omtrek",
    caption: "In dezelfde eenheid als je invoer.",
    radiusOut: "Straal",
    diameterOut: "Diameter",
    areaOut: "Oppervlakte",
  },
};

export default nl;
