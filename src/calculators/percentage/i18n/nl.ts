import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentageText } from "../text/en";

const nl: CalculatorTranslation<PercentageText> = {
  content: {
    title: "Procentcalculator",
    shortTitle: "Procenten",
    summary: "Bereken X% van een getal, hoeveel procent een getal van een ander is, of het geheel uit een deel en een percentage.",
    metaTitle: "Procentcalculator – Percentage van een getal en meer",
    metaDescription:
      "Gratis procentcalculator. Bereken X% van Y, hoeveel procent X van Y is, of het geheel als X gelijk is aan Y% ervan, met formules en uitgewerkte voorbeelden.",
    keywords: ["procent berekenen", "percentage berekenen", "procent van een getal", "hoeveel procent is", "percentage uitrekenen", "procentcalculator"],
    intro: [
      "Deze calculator beantwoordt de drie meest gestelde vragen over procenten. Kies een vraag, vul twee getallen in en het resultaat wordt bijgewerkt terwijl je typt.",
      "Een percentage is een deel per honderd: 25% betekent 25 van elke 100.",
    ],
    howToUse: [
      "Kies de vraag die je wilt beantwoorden.",
      "Vul de twee bekende waarden in. Negatieve getallen en decimalen zijn toegestaan.",
      "Lees het resultaat af en de formule die is gebruikt.",
    ],
    formulas: [
      { title: "Wat is X% van Y?", expression: "Resultaat = X ÷ 100 × Y", explanation: "Zet het percentage om in een decimaal getal en vermenigvuldig." },
      { title: "Hoeveel procent van Y is X?", expression: "Percentage = X ÷ Y × 100", explanation: "Deel het deel door het geheel en vermenigvuldig met 100. Y mag niet 0 zijn." },
      { title: "X is Y% van welk getal?", expression: "Geheel = X ÷ (Y ÷ 100)", explanation: "Deel het deel door het percentage als decimaal getal. Y mag niet 0 zijn." },
    ],
    examples: [
      { title: "Wat is 20% van 150?", steps: ["20 ÷ 100 = 0,2", "0,2 × 150 = 30"] },
      { title: "Hoeveel procent van 180 is 45?", steps: ["45 ÷ 180 = 0,25", "0,25 × 100 = 25%"] },
      { title: "30 is 12% van welk getal?", steps: ["12 ÷ 100 = 0,12", "30 ÷ 0,12 = 250"] },
    ],
    assumptions: [
      "Resultaten worden getoond met maximaal 4 tot 6 decimalen. De berekeningen gebruiken de volledige precisie.",
      "Delen door nul heeft geen uitkomst, dus het geheel (of het percentage) mag bij de tweede en derde vraag niet 0 zijn.",
    ],
    faqs: [
      {
        question: "Hoe bereken ik een percentage van een getal?",
        answer: "Deel het percentage door 100 en vermenigvuldig met het getal. Zo is 15% van 80 gelijk aan 0,15 × 80 = 12.",
      },
      {
        question: "Hoe bereken ik hoeveel procent een getal van een ander getal is?",
        answer: "Deel het deel door het geheel en vermenigvuldig met 100. Zo is 18 van 24 gelijk aan 18 ÷ 24 × 100 = 75%.",
      },
      {
        question: "Kan een percentage groter zijn dan 100%?",
        answer: "Ja. Een waarde die groter is dan het geheel is meer dan 100% ervan. Zo is 300 gelijk aan 150% van 200.",
      },
      {
        question: "Hoe bereken ik de procentuele stijging tussen twee getallen?",
        answer: "Gebruik de calculator voor procentuele verandering: die deelt de verandering door de oorspronkelijke waarde en vermenigvuldigt met 100.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    question: "Vraag",
    modes: { percentOf: "Wat is X% van Y?", whatPercent: "Hoeveel % van Y is X?", findWhole: "X is Y% van wat?" },
    percentX: "Percentage (X)",
    valueY: "Waarde (Y)",
    partX: "Deel (X)",
    wholeY: "Geheel (Y)",
    percentY: "Percentage (Y)",
    wholeZero: "Het geheel mag niet 0 zijn.",
    percentZero: "Het percentage mag niet 0 zijn.",
    percentResult: "Percentage",
    percentCaption: "{part} is {percent} van {whole}.",
    percentFormula: "Formule: {part} ÷ {whole} × 100.",
    wholeResult: "Totale waarde",
    wholeCaption: "{part} is {percent} van {whole}.",
    wholeFormula: "Formule: {part} ÷ ({percent} ÷ 100).",
    result: "Resultaat",
    resultCaption: "{percent} van {value} is {result}.",
    minus: "{value} min {percent}",
    plus: "{value} plus {percent}",
    resultFormula: "Formule: {percent} ÷ 100 × {value}.",
  },
};

export default nl;
