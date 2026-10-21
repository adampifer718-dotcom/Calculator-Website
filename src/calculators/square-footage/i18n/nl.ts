import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SquareFootageText } from "../text/en";

const nl: CalculatorTranslation<SquareFootageText> = {
  content: {
    title: "Vierkante-voetcalculator",
    shortTitle: "Vierkante voet",
    summary: "Bereken de oppervlakte van een rechthoek, cirkel of driehoek in vierkante voet, vierkante meter en vierkante yard.",
    metaTitle: "Oppervlakte berekenen in vierkante voet en m²",
    metaDescription:
      "Bereken de oppervlakte van rechthoeken, cirkels en driehoeken vanuit voet, inch, yard, meter of centimeter, in vierkante voet, vierkante meter en vierkante yard.",
    keywords: ["vierkante voet", "oppervlakte berekenen", "vloeroppervlak", "kamergrootte", "vierkante meter", "m2", "sq ft naar m2"],
    intro: [
      "Het aantal vierkante voet (square footage) is de oppervlakte van een vlak gemeten in vierkante voet. Het wordt gebruikt voor vloeren, verf, tegels, tapijt en woningadvertenties, vooral in de Verenigde Staten.",
      "Meet elke afmeting, kies de vorm en de eenheid, en de calculator rekent de oppervlakte om naar vierkante voet, vierkante meter en vierkante yard.",
    ],
    howToUse: [
      "Kies de vorm: rechthoek, cirkel of driehoek.",
      "Kies de eenheid waarin je hebt gemeten.",
      "Vul de afmetingen in en, als dat nodig is, hoeveel gelijke oppervlakken er zijn.",
      "Lees de oppervlakte af in vierkante voet, vierkante meter en vierkante yard.",
    ],
    formulas: [
      { title: "Rechthoek", expression: "Oppervlakte = lengte × breedte", explanation: "Voor vierkante en rechthoekige kamers." },
      { title: "Cirkel", expression: "Oppervlakte = π × (diameter ÷ 2)²", explanation: "De halve diameter is de straal." },
      { title: "Driehoek", expression: "Oppervlakte = basis × hoogte ÷ 2", explanation: "De hoogte wordt loodrecht op de basis gemeten." },
      {
        title: "Eenheden omrekenen",
        expression: "1 ft = 12 in = 0,3048 m\n1 ft² = 0,09290304 m²\n1 yd² = 9 ft²",
        explanation: "Oppervlakten reken je om met het kwadraat van de lengtefactor.",
      },
    ],
    examples: [
      { title: "Een kamer van 12 ft × 15 ft", steps: ["Oppervlakte = 12 × 15 = 180 ft²", "180 × 0,09290304 = 16,72 m²"] },
      { title: "Een kamer van 4 m × 3,5 m", steps: ["Oppervlakte = 4 × 3,5 = 14 m²", "14 ÷ 0,09290304 = 150,69 ft²"] },
      { title: "Een rond terras met een doorsnede van 10 ft", steps: ["Straal = 10 ÷ 2 = 5 ft", "Oppervlakte = π × 5² = 78,54 ft²"] },
    ],
    assumptions: [
      "De maten zijn haaks gemeten en de vorm is regelmatig.",
      "Verdeel L-vormige of onregelmatige kamers in rechthoeken en tel de uitkomsten op.",
      "Reken extra materiaal (vaak 5–10%) voor zaagsnedes en verlies; deze calculator geeft alleen de exacte oppervlakte.",
    ],
    faqs: [
      {
        question: "Hoe bereken ik het aantal vierkante voet?",
        answer: "Vermenigvuldig de lengte met de breedte in voet. Een kamer van 10 bij 12 voet is 120 vierkante voet.",
      },
      {
        question: "Hoe reken ik vierkante meter om naar vierkante voet?",
        answer: "Deel door 0,09290304, of vermenigvuldig met ongeveer 10,764. Dus 20 m² is ongeveer 215,3 ft².",
      },
      {
        question: "Hoe meet ik een L-vormige kamer?",
        answer: "Verdeel hem in twee rechthoeken, bereken van elk de oppervlakte en tel ze bij elkaar op.",
      },
    ],
    sourcesUsedFor: ["Exacte omrekenfactoren voor lengte (1 ft = 0,3048 m, 1 in = 2,54 cm)."],
  },
  text: {
    shape: "Vorm",
    shapes: { rectangle: "Rechthoek of vierkant", circle: "Cirkel", triangle: "Driehoek" },
    unit: "Meeteenheid",
    units: { ft: "Voet (ft)", in: "Inch (in)", yd: "Yard (yd)", m: "Meter (m)", cm: "Centimeter (cm)" },
    length: "Lengte",
    width: "Breedte",
    diameter: "Diameter",
    base: "Basis",
    height: "Hoogte",
    quantity: "Aantal oppervlakken",
    quantityHelp: "Voor meerdere gelijke kamers of stukken.",
    area: "Oppervlakte",
    quantityCaption: "Totaal voor {count} gelijke oppervlakken.",
    sqM: "Vierkante meter",
    sqYd: "Vierkante yard",
    sqUnit: "Vierkante {unit}",
    sqFtSuffix: "ft²",
    sqYdSuffix: "yd²",
  },
};

export default nl;
