import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PythagoreanText } from "../text/en";

const nl: CalculatorTranslation<PythagoreanText> = {
  content: {
    title: "Stelling van Pythagoras-calculator",
    shortTitle: "Stelling van Pythagoras",
    summary: "Bereken de ontbrekende zijde van een rechthoekige driehoek met a² + b² = c².",
    metaTitle: "Stelling van Pythagoras – Bereken de ontbrekende zijde",
    metaDescription:
      "Bereken de schuine zijde of een ontbrekende rechthoekszijde van een rechthoekige driehoek met de stelling van Pythagoras (a² + b² = c²), plus oppervlakte.",
    keywords: ["stelling van Pythagoras", "schuine zijde berekenen", "rechthoekszijde berekenen", "rechthoekige driehoek", "a2 + b2 = c2", "Pythagoras"],
    intro: [
      "In een rechthoekige driehoek is het kwadraat van de schuine zijde gelijk aan de som van de kwadraten van de andere twee zijden: a² + b² = c².",
      "Vul twee zijden in om de derde te vinden. De calculator toont ook de oppervlakte en de omtrek van de driehoek.",
    ],
    howToUse: [
      "Kies of je de schuine zijde of een rechthoekszijde wilt berekenen.",
      "Vul de twee bekende zijden in, in dezelfde eenheid.",
      "Lees de ontbrekende zijde, de oppervlakte en de omtrek af.",
    ],
    formulas: [
      { title: "Schuine zijde", expression: "c = √(a² + b²)", explanation: "De schuine zijde is de langste zijde, tegenover de rechte hoek." },
      { title: "Onbekende rechthoekszijde", expression: "a = √(c² − b²)", explanation: "De schuine zijde moet langer zijn dan de bekende rechthoekszijde." },
    ],
    examples: [
      {
        title: "Rechthoekszijden 3 en 4",
        steps: ["c = √(3² + 4²) = √25", "= 5"],
      },
      {
        title: "Schuine zijde 13 en rechthoekszijde 5",
        steps: ["a = √(13² − 5²) = √144", "= 12"],
      },
    ],
    assumptions: [
      "De driehoek heeft een rechte hoek.",
      "Alle zijden gebruiken dezelfde eenheid; resultaten worden getoond met 6 decimalen.",
    ],
    faqs: [
      {
        question: "Werkt de stelling van Pythagoras voor alle driehoeken?",
        answer: "Nee, alleen voor rechthoekige driehoeken. Voor andere driehoeken heb je de cosinusregel nodig.",
      },
      {
        question: "Wat is een pythagorees drietal?",
        answer: "Drie gehele getallen die voldoen aan a² + b² = c², zoals 3, 4, 5 of 5, 12, 13.",
      },
      { question: "Welke zijde is de schuine zijde?", answer: "De langste zijde, tegenover de rechte hoek." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    solve: "Berekenen",
    modes: { hypotenuse: "De schuine zijde (c) uit beide rechthoekszijden", leg: "Een rechthoekszijde uit de schuine zijde en de andere rechthoekszijde" },
    a: "Rechthoekszijde a",
    b: "Rechthoekszijde b",
    c: "Schuine zijde c",
    leg: "Bekende rechthoekszijde",
    legTooLong: "Een rechthoekszijde moet korter zijn dan de schuine zijde.",
    missingLeg: "Onbekende rechthoekszijde",
    hypotenuse: "Schuine zijde (c)",
    area: "Oppervlakte van de driehoek",
    perimeter: "Omtrek",
  },
};

export default nl;
