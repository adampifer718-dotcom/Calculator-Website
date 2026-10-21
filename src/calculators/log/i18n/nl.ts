import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LogText } from "../text/en";

const nl: CalculatorTranslation<LogText> = {
  content: {
    title: "Logaritmecalculator",
    shortTitle: "Logaritme",
    summary: "Bereken logaritmen met grondtal 10, grondtal e (natuurlijke logaritme), grondtal 2 of elk ander grondtal.",
    metaTitle: "Logaritmecalculator – logaritme met elk grondtal",
    metaDescription:
      "Bereken de logaritme met grondtal 10, de natuurlijke logaritme (ln), de logaritme met grondtal 2 of met elk ander grondtal, met de formule voor grondtalwissel.",
    keywords: ["logaritme", "log", "ln", "natuurlijke logaritme", "logaritme grondtal 2", "log10", "grondtal wisselen"],
    intro: [
      "Een logaritme beantwoordt de vraag: tot welke macht moet je het grondtal verheffen om dit getal te krijgen? log₁₀(1000) = 3 omdat 10³ = 1000.",
      "Kies een gangbaar grondtal of vul je eigen grondtal in. De natuurlijke, de briggse en de binaire logaritme worden ernaast getoond.",
    ],
    howToUse: [
      "Vul een positief getal x in.",
      "Kies het grondtal, of selecteer Ander grondtal en vul het in.",
      "Lees de logaritme en de waarden van ln, log₁₀ en log₂ af.",
    ],
    formulas: [
      {
        title: "Definitie",
        expression: "log_b(x) = y  betekent  bʸ = x",
        explanation: "Het getal en het grondtal moeten positief zijn, en het grondtal mag niet 1 zijn.",
      },
      { title: "Grondtalwisseling", expression: "log_b(x) = ln(x) ÷ ln(b)", explanation: "Elke logaritme kan met natuurlijke logaritmen worden berekend." },
    ],
    examples: [
      { title: "log₁₀ van 1000", steps: ["10³ = 1000", "Dus log₁₀(1000) = 3"] },
      { title: "log₂ van 8", steps: ["2³ = 8", "Dus log₂(8) = 3"] },
      { title: "Logaritme met grondtal 3 van 81", steps: ["ln(81) ÷ ln(3) = 4,394 ÷ 1,099", "= 4, omdat 3⁴ = 81"] },
    ],
    assumptions: [
      "Logaritmen zijn alleen gedefinieerd voor positieve getallen en positieve grondtallen anders dan 1.",
      "De uitkomsten worden met 12 significante cijfers weergegeven.",
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen log en ln?",
        answer: "log betekent meestal grondtal 10 en ln betekent grondtal e (ongeveer 2,71828), de natuurlijke logaritme.",
      },
      {
        question: "Waarom kan ik geen logaritme van een negatief getal nemen?",
        answer: "Geen enkele reële macht van een positief grondtal geeft een negatief getal of nul, dus de logaritme is binnen de reële getallen niet gedefinieerd.",
      },
      {
        question: "Waarvoor wordt de logaritme met grondtal 2 gebruikt?",
        answer: "Die telt verdubbelingen en komt veel voor in de informatica, bijvoorbeeld bij het aantal bits dat nodig is om een waarde weer te geven.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    value: "Getal (x)",
    base: "Grondtal",
    bases: { ten: "10 (briggse logaritme)", e: "e (natuurlijke logaritme, ln)", two: "2 (binaire logaritme)", custom: "Ander grondtal" },
    customBase: "Eigen grondtal (b)",
    baseOne: "Het grondtal mag niet 1 zijn.",
    primaryNatural: "log van x",
    primaryBase: "log met grondtal {base} van x",
    caption: "{base} tot deze macht is gelijk aan {value}.",
    ln: "Natuurlijke logaritme (ln x)",
    log10: "Briggse logaritme (log₁₀ x)",
    log2: "Binaire logaritme (log₂ x)",
  },
};

export default nl;
