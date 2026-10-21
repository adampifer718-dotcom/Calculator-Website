import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SquareRootText } from "../text/en";

const nl: CalculatorTranslation<SquareRootText> = {
  content: {
    title: "Wortelcalculator",
    shortTitle: "Wortel",
    summary: "Bereken de vierkantswortel of derdemachtswortel van een getal en controleer of het een kwadraat of derde macht is.",
    metaTitle: "Wortel berekenen – vierkantswortel en derdemachtswortel",
    metaDescription:
      "Bereken de vierkantswortel of derdemachtswortel van elk getal, zie of het een volkomen kwadraat of derde macht is en controleer de uitkomst door terug te rekenen.",
    keywords: ["wortel", "vierkantswortel", "wortel berekenen", "derdemachtswortel", "kwadraat", "sqrt", "wortelteken"],
    intro: [
      "De vierkantswortel van x is het getal dat x oplevert als je het met zichzelf vermenigvuldigt. √144 = 12, omdat 12 × 12 = 144.",
      "Kies derdemachtswortel om het getal te vinden dat x oplevert als je het drie keer met zichzelf vermenigvuldigt. Derdemachtswortels van negatieve getallen zijn toegestaan.",
    ],
    howToUse: [
      "Kies vierkantswortel of derdemachtswortel.",
      "Vul het getal in.",
      "Lees de wortel af en of het getal een volkomen kwadraat of derde macht is.",
    ],
    formulas: [
      { title: "Vierkantswortel", expression: "√x = x^(1/2)", explanation: "Binnen de reële getallen gedefinieerd voor x ≥ 0." },
      { title: "Derdemachtswortel", expression: "∛x = x^(1/3)", explanation: "Gedefinieerd voor elk reëel getal." },
    ],
    examples: [
      { title: "Vierkantswortel van 144", steps: ["12 × 12 = 144", "√144 = 12"] },
      { title: "Vierkantswortel van 2", steps: ["2 is geen volkomen kwadraat", "√2 ≈ 1,41421356237"] },
      { title: "Derdemachtswortel van −27", steps: ["(−3) × (−3) × (−3) = −27", "∛−27 = −3"] },
    ],
    assumptions: [
      "Alleen reële wortels worden getoond; negatieve getallen hebben geen reële vierkantswortel.",
      "De uitkomsten worden met 12 significante cijfers weergegeven.",
    ],
    faqs: [
      {
        question: "Wat is een volkomen kwadraat?",
        answer: "Een geheel getal waarvan de vierkantswortel ook een geheel getal is, zoals 1, 4, 9, 16 of 25.",
      },
      {
        question: "Heeft een vierkantswortel twee antwoorden?",
        answer: "Elk positief getal heeft een positieve en een negatieve vierkantswortel. De calculator toont de positieve wortel (de hoofdwaarde).",
      },
      { question: "Kan ik de derdemachtswortel van een negatief getal nemen?", answer: "Ja. ∛−8 = −2, omdat (−2)³ = −8." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    kind: "Wortel",
    kinds: { square: "Vierkantswortel (√x)", cube: "Derdemachtswortel (∛x)" },
    value: "Getal (x)",
    negative: "Negatieve getallen hebben geen reële vierkantswortel.",
    squareRoot: "Vierkantswortel",
    cubeRoot: "Derdemachtswortel",
    perfectSquare: "Volkomen kwadraat?",
    perfectCube: "Volkomen derde macht?",
    yes: "Ja",
    no: "Nee",
    checkSquare: "Controle: wortel²",
    checkCube: "Controle: wortel³",
    principalNote: "−{root} is ook een vierkantswortel; de calculator toont de hoofdwaarde (de positieve wortel).",
  },
};

export default nl;
