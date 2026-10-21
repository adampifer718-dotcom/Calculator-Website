import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TestGradeText } from "../text/en";

const nl: CalculatorTranslation<TestGradeText> = {
  content: {
    title: "Toetsscorecalculator",
    shortTitle: "Toetsscore",
    summary: "Zet goede antwoorden of punten om in een score als percentage en een lettercijfer.",
    metaTitle: "Toetsscorecalculator – percentage en lettercijfer",
    metaDescription:
      "Bereken het scorepercentage en het lettercijfer van een toets uit het aantal goede of foute antwoorden, of uit de behaalde punten van het totaal.",
    keywords: ["toetsscore", "toets", "examen", "score berekenen", "percentage goed", "lettercijfer", "punten"],
    intro: [
      "Vul in hoeveel vragen of punten een toets had en hoeveel je er goed of fout had. De calculator toont de score als percentage en het bijbehorende lettercijfer.",
      "Hij werkt voor overhoringen, examens en opdrachten die met punten worden beoordeeld.",
    ],
    howToUse: [
      "Vul het totale aantal vragen of punten in.",
      "Kies of je het aantal goede of het aantal foute antwoorden weet.",
      "Vul dat aantal in en lees het percentage en het lettercijfer af.",
    ],
    formulas: [
      {
        title: "Score als percentage",
        expression: "Score % = behaalde punten ÷ totaal aantal punten × 100",
        explanation: "Behaalde punten = totaal − verloren punten als je het aantal foute antwoorden weet.",
      },
      {
        title: "Lettercijfer",
        expression: "A ≥ 90%, B ≥ 80%, C ≥ 70%, D ≥ 60%, F < 60%",
        explanation: "Een gangbare Amerikaanse schaal. Scholen gebruiken soms plus- en mincijfers of andere grenzen.",
      },
    ],
    examples: [
      { title: "45 goed van de 50", steps: ["45 ÷ 50 = 0,9", "0,9 × 100 = 90%, een A"] },
      { title: "7 fout van de 30", steps: ["Goed = 30 − 7 = 23", "23 ÷ 30 × 100 = 76,67%, een C"] },
    ],
    assumptions: [
      "Elke vraag telt even zwaar, tenzij je punten invult.",
      "Lettercijfers gebruiken de gangbare Amerikaanse schaal; controleer het beoordelingsbeleid van je school.",
      "Gedeeltelijk goede antwoorden kun je als decimale punten invullen.",
    ],
    faqs: [
      {
        question: "Hoe bereken ik het percentage van een toets?",
        answer: "Deel de behaalde punten door het maximaal haalbare aantal en vermenigvuldig met 100. 18 van de 20 is 90%.",
      },
      { question: "Welk lettercijfer hoort bij 75%?", answer: "Op de gangbare Amerikaanse schaal is 75% een C." },
      {
        question: "Kan ik punten gebruiken in plaats van vragen?",
        answer: "Ja. Vul het totaal aantal punten en de behaalde punten in; de formule is hetzelfde.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    total: "Totaal aantal vragen of punten",
    mode: "Ik weet het aantal",
    modes: { correct: "Goed (behaalde punten)", wrong: "Fout (verloren punten)" },
    correct: "Goede antwoorden of behaalde punten",
    wrong: "Foute antwoorden of verloren punten",
    overTotal: "Mag niet meer zijn dan het totaal.",
    grade: "Score",
    caption: "{earned} van de {total}.",
    letter: "Lettercijfer (schaal A–F)",
    lost: "Verloren punten",
    note: "Lettercijfers gebruiken de gangbare schaal A ≥ 90%, B ≥ 80%, C ≥ 70%, D ≥ 60%, F onder 60%. De schaal van je school kan afwijken.",
  },
};

export default nl;
