import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DilutionText } from "../text/en";

const nl: CalculatorTranslation<DilutionText> = {
  content: {
    title: "Verdunningscalculator (C₁V₁ = C₂V₂)",
    shortTitle: "Verdunning",
    summary: "Los C₁V₁ = C₂V₂ op voor het volume stockoplossing, de eindconcentratie, het eindvolume of de concentratie van de stockoplossing.",
    metaTitle: "Verdunningscalculator – C1V1 = C2V2",
    metaDescription:
      "Los de verdunningsformule C1V1 = C2V2 op voor één waarde: benodigd volume stockoplossing, eindconcentratie, eindvolume of stockconcentratie.",
    keywords: ["verdunning berekenen", "c1v1", "c1v1=c2v2", "stockoplossing", "concentratie", "oplossing maken", "scheikunde"],
    intro: [
      "Als je een oplossing verdunt, blijft de hoeveelheid opgeloste stof gelijk, dus C₁V₁ = C₂V₂.",
      "Kies de onbekende en vul de andere drie waarden in om een verdunning te plannen.",
    ],
    howToUse: [
      "Kies wat je wilt berekenen, meestal het benodigde volume stockoplossing.",
      "Vul de andere drie waarden in, met aan beide kanten dezelfde eenheden.",
      "Lees het resultaat af en hoeveel oplosmiddel je moet toevoegen.",
    ],
    formulas: [
      { title: "Verdunningsformule", expression: "C₁ × V₁ = C₂ × V₂", explanation: "C₁ en V₁ zijn de concentratie en het volume van de stockoplossing; C₂ en V₂ die van de eindoplossing." },
      { title: "Toe te voegen oplosmiddel", expression: "oplosmiddel = V₂ − V₁", explanation: "Voeg zoveel oplosmiddel toe dat je het eindvolume bereikt." },
    ],
    examples: [
      {
        title: "100 mL van 0,5 M maken uit een stockoplossing van 2 M",
        steps: ["V₁ = 0,5 × 100 ÷ 2", "= 25 mL stockoplossing, plus 75 mL oplosmiddel"],
      },
      {
        title: "10 mL van 1 M verdund tot 250 mL",
        steps: ["C₂ = 1 × 10 ÷ 250", "= 0,04 M"],
      },
    ],
    assumptions: [
      "De concentraties moeten dezelfde eenheid hebben en de volumes ook.",
      "Gaat ervan uit dat volumes optelbaar zijn; voor verdunde waterige oplossingen is dat een goede benadering.",
    ],
    faqs: [
      { question: "Wat betekent C1V1 = C2V2?", answer: "De hoeveelheid opgeloste stof vóór de verdunning is gelijk aan die erna: concentratie maal volume blijft constant." },
      { question: "Kan ik procenten of mg/mL gebruiken?", answer: "Ja, zolang C₁ en C₂ dezelfde eenheid hebben." },
      { question: "Wat is een verdunningsfactor?", answer: "De verhouding C₁ ÷ C₂. Een verdunning van 1:10 maakt de concentratie tien keer zo laag." },
    ],
    sourcesUsedFor: ["Het verdunningsverband C₁V₁ = C₂V₂."],
  },
  text: {
    solve: "Bereken",
    solveOptions: { v1: "Benodigd volume stockoplossing (V₁)", c2: "Eindconcentratie (C₂)", v2: "Eindvolume (V₂)", c1: "Concentratie stockoplossing (C₁)" },
    c1: "Concentratie stockoplossing (C₁)",
    v1: "Volume stockoplossing (V₁)",
    c2: "Eindconcentratie (C₂)",
    v2: "Eindvolume (V₂)",
    tooConcentrated: "Een verdunning kan niet geconcentreerder zijn dan de stockoplossing (C₂ ≤ C₁).",
    stockTooLarge: "Het volume stockoplossing kan niet groter zijn dan het eindvolume (V₁ ≤ V₂).",
    results: { c1: "Concentratie stockoplossing (C₁)", v1: "Benodigd volume stockoplossing (V₁)", c2: "Eindconcentratie (C₂)", v2: "Eindvolume (V₂)" },
    caption: "In dezelfde eenheden als de bijbehorende invoer.",
    solvent: "Toe te voegen oplosmiddel (V₂ − V₁)",
    factor: "Verdunningsfactor (C₁ ÷ C₂)",
    note: "Gebruik voor C₁ en C₂ dezelfde concentratie-eenheid, en voor V₁ en V₂ dezelfde volume-eenheid.",
  },
};

export default nl;
