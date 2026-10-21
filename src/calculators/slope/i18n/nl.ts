import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SlopeText } from "../text/en";

const nl: CalculatorTranslation<SlopeText> = {
  content: {
    title: "Hellingscalculator voor rechte lijnen",
    shortTitle: "Helling",
    summary: "Bereken de helling tussen twee punten, plus de vergelijking van de lijn, het snijpunt met de y-as, de hoek en de afstand.",
    metaTitle: "Helling berekenen – richtingscoëfficiënt uit twee punten",
    metaDescription:
      "Bereken de helling van een lijn door twee punten, met de lijnvergelijking y = mx + b, het snijpunt met de y-as, de hoek en de afstand tussen de punten.",
    keywords: ["helling", "richtingscoëfficiënt", "hellingsgetal", "lijnvergelijking", "y = mx + b", "twee punten", "snijpunt y-as"],
    intro: [
      "De helling (richtingscoëfficiënt) geeft aan hoe steil een lijn is: hoeveel y verandert bij elke stap in x. Vaak omschreven als stijging gedeeld door de horizontale afstand.",
      "Vul twee punten in en de calculator geeft ook de vergelijking van de lijn door die punten.",
    ],
    howToUse: [
      "Vul de coördinaten van het eerste punt in (x₁, y₁).",
      "Vul het tweede punt in (x₂, y₂).",
      "Lees de helling, de vergelijking, het snijpunt met de y-as, de hoek en de afstand af.",
    ],
    formulas: [
      { title: "Helling", expression: "m = (y₂ − y₁) ÷ (x₂ − x₁)", explanation: "Niet gedefinieerd als x₁ = x₂ (een verticale lijn)." },
      { title: "Lijnvergelijking", expression: "y = mx + b, waarbij b = y₁ − m × x₁", explanation: "b is het punt waar de lijn de y-as snijdt." },
      {
        title: "Hoek en afstand",
        expression: "θ = arctan(m)\nd = √((x₂ − x₁)² + (y₂ − y₁)²)",
        explanation: "De hoek wordt gemeten vanaf de positieve x-as.",
      },
    ],
    examples: [
      { title: "Punten (1, 3) en (4, 9)", steps: ["m = (9 − 3) ÷ (4 − 1) = 6 ÷ 3 = 2", "b = 3 − 2 × 1 = 1, dus y = 2x + 1"] },
      { title: "Punten (−2, 5) en (3, −5)", steps: ["m = (−5 − 5) ÷ (3 − (−2)) = −10 ÷ 5", "= −2"] },
    ],
    assumptions: [
      "Verticale lijnen (x₁ = x₂) hebben een niet-gedefinieerde helling en worden geweigerd.",
      "De uitkomsten worden met 6 decimalen weergegeven.",
    ],
    faqs: [
      { question: "Wat betekent een negatieve helling?", answer: "Dat de lijn van links naar rechts daalt." },
      { question: "Wat is de helling van een horizontale lijn?", answer: "0, want y verandert niet." },
      {
        question: "Hoe hangt de helling samen met de hoek?",
        answer: "De helling is de tangens van de hoek die de lijn met de x-as maakt. Een helling van 1 komt overeen met 45°.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    vertical: "x₂ moet verschillen van x₁. Een verticale lijn heeft een niet-gedefinieerde helling.",
    slope: "Helling (m)",
    caption: "Een stijging van {rise} over een horizontale afstand van {run}.",
    equation: "Vergelijking van de lijn",
    intercept: "Snijpunt met de y-as (b)",
    angle: "Hoek met de x-as",
    degrees: "graden",
    distance: "Afstand tussen de punten",
  },
};

export default nl;
