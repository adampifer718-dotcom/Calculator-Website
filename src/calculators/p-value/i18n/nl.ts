import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PValueText } from "../text/en";

const nl: CalculatorTranslation<PValueText> = {
  content: {
    title: "P-waardecalculator",
    shortTitle: "P-waarde",
    summary: "Bereken de p-waarde van een z- of t-score voor een tweezijdige, linkseenzijdige of rechtseenzijdige toets.",
    metaTitle: "P-waardecalculator – Uit een z-score of t-score",
    metaDescription:
      "Bereken de p-waarde uit een z-score of uit een t-score met vrijheidsgraden, voor tweezijdige of eenzijdige hypothesetoetsen.",
    keywords: ["p-waarde", "p-waarde berekenen", "z-score", "t-toets", "hypothesetoets", "statistische significantie", "overschrijdingskans"],
    intro: [
      "De p-waarde geeft aan hoe verrassend een toetsresultaat zou zijn als de nulhypothese waar is. Een kleine p-waarde betekent dat de gegevens onder de nulhypothese onwaarschijnlijk zijn.",
      "Vul de toetsingsgrootheid van een z- of t-toets in en kies de richting van je alternatieve hypothese.",
    ],
    howToUse: [
      "Kies z-score of t-score.",
      "Vul de toetsingsgrootheid in en, bij een t-score, het aantal vrijheidsgraden.",
      "Kies tweezijdig, linkseenzijdig of rechtseenzijdig.",
      "Vergelijk de p-waarde met je significantieniveau, bijvoorbeeld 0,05.",
    ],
    formulas: [
      { title: "Linkseenzijdig", expression: "p = P(T ≤ t)", explanation: "De kans op een waarde kleiner dan of gelijk aan de toetsingsgrootheid." },
      { title: "Rechtseenzijdig", expression: "p = P(T ≥ t)", explanation: "De kans op een waarde groter dan of gelijk aan de toetsingsgrootheid." },
      { title: "Tweezijdig", expression: "p = 2 × P(T ≥ |t|)", explanation: "Houdt rekening met extreme waarden in beide richtingen." },
    ],
    examples: [
      { title: "z = 1,96, tweezijdig", steps: ["P(Z ≥ 1,96) ≈ 0,025", "p = 2 × 0,025 ≈ 0,05"] },
      { title: "z = −1,645, linkseenzijdig", steps: ["P(Z ≤ −1,645)", "≈ 0,05"] },
    ],
    assumptions: [
      "Gebruikt de standaardnormale verdeling voor z en de t-verdeling van Student voor t.",
      "De toetsingsgrootheid moet afkomstig zijn van een toets waarvan aan de voorwaarden is voldaan.",
      "Weergegeven met 6 significante cijfers; heel kleine waarden worden in wetenschappelijke notatie getoond.",
    ],
    faqs: [
      {
        question: "Wat is een goede p-waarde?",
        answer: "Er is geen universele grens. Gebruikelijk is 0,05: zo extreme resultaten zouden dan in minder dan 5% van de gevallen voorkomen als de nulhypothese waar is.",
      },
      {
        question: "Gebruik ik een z-score of een t-score?",
        answer: "Gebruik t als de standaardafwijking van de populatie onbekend is en uit de steekproef wordt geschat; gebruik z als die bekend is of de steekproef groot is.",
      },
      {
        question: "Wat is het verschil tussen een eenzijdige en een tweezijdige toets?",
        answer: "Een eenzijdige toets zoekt alleen naar een effect in één richting; een tweezijdige toets kijkt naar beide richtingen.",
      },
    ],
    sourcesUsedFor: ["Definities van de normale verdeling en de t-verdeling van Student, en kritieke waarden om de uitkomsten te controleren."],
  },
  text: {
    distribution: "Toetsingsgrootheid",
    distributions: { z: "Z-score (normaal)", t: "T-score (t van Student)" },
    statistic: "Waarde van de toetsingsgrootheid",
    df: "Vrijheidsgraden",
    tail: "Alternatieve hypothese",
    tails: { two: "Tweezijdig (≠)", left: "Linkseenzijdig (<)", right: "Rechtseenzijdig (>)" },
    pValue: "P-waarde",
    sig05: "Significant bij α = 0,05?",
    sig01: "Significant bij α = 0,01?",
    yes05: "Ja (p < 0,05)",
    no05: "Nee (p ≥ 0,05)",
    yes01: "Ja (p < 0,01)",
    no01: "Nee (p ≥ 0,01)",
    note: "Een p-waarde is de kans op een resultaat dat minstens zo extreem is als de nulhypothese waar zou zijn. Het is niet de kans dat de nulhypothese waar is.",
  },
};

export default nl;
