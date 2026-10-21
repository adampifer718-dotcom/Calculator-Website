import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ScientificNotationText } from "../text/en";

const nl: CalculatorTranslation<ScientificNotationText> = {
  content: {
    title: "Wetenschappelijke-notatiecalculator",
    shortTitle: "Wetenschappelijke notatie",
    summary: "Zet getallen om naar wetenschappelijke notatie, ingenieursnotatie en E-notatie, of schrijf ze weer uit als decimaal getal.",
    metaTitle: "Wetenschappelijke notatie – getallen omzetten",
    metaDescription:
      "Zet elk getal om naar wetenschappelijke notatie, E-notatie en ingenieursnotatie, of schrijf een E-notatie weer uit als gewoon decimaal getal.",
    keywords: ["wetenschappelijke notatie", "standaardvorm", "E-notatie", "ingenieursnotatie", "machten van tien", "exponent", "grote getallen schrijven"],
    intro: [
      "In wetenschappelijke notatie schrijf je een getal als een waarde tussen 1 en 10 vermenigvuldigd met een macht van tien, zoals 1,234 × 10⁵. Zo blijven heel grote en heel kleine getallen leesbaar.",
      "Vul een decimaal getal of een E-notatie in en de calculator toont alle gangbare schrijfwijzen.",
    ],
    howToUse: [
      "Typ een getal zoals 123400 of 0,00056, of een E-notatie zoals 6,02e23.",
      "Lees de wetenschappelijke notatie, de E-notatie, de ingenieursnotatie en de decimale vorm af.",
    ],
    formulas: [
      {
        title: "Wetenschappelijke notatie",
        expression: "x = a × 10ⁿ, waarbij 1 ≤ |a| < 10",
        explanation: "Verschuif de komma tot er één cijfer dat geen nul is links van staat; n telt het aantal plaatsen.",
      },
      {
        title: "Ingenieursnotatie",
        expression: "x = a × 10ⁿ, waarbij n een veelvoud van 3 is",
        explanation: "Sluit aan bij voorvoegsels zoals kilo (10³) en micro (10⁻⁶).",
      },
    ],
    examples: [
      { title: "123.400", steps: ["Verschuif de komma 5 plaatsen naar links", "1,234 × 10⁵"] },
      { title: "0,00056", steps: ["Verschuif de komma 4 plaatsen naar rechts", "5,6 × 10⁻⁴"] },
    ],
    assumptions: [
      "Getallen worden omgezet met de dubbele precisie van JavaScript, ongeveer 15–17 significante cijfers.",
      "Decimale vormen met meer dan 21 cijfers worden niet weergegeven.",
    ],
    faqs: [
      {
        question: "Hoe schrijf ik een getal in wetenschappelijke notatie?",
        answer: "Verschuif de komma zodat er één cijfer dat geen nul is links van staat, en vermenigvuldig met 10 tot de macht van het aantal verschoven plaatsen. 4.500 wordt 4,5 × 10³.",
      },
      {
        question: "Wat betekent 6,02e23?",
        answer: "Het is E-notatie voor 6,02 × 10²³. De e staat voor 'maal tien tot de macht'.",
      },
      {
        question: "Wat is ingenieursnotatie?",
        answer: "Hetzelfde als wetenschappelijke notatie, maar de exponent is altijd een veelvoud van 3, passend bij voorvoegsels als kilo, mega en milli.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    number: "Getal",
    numberHelp: "Een decimaal getal zoals 0,00056 of een E-notatie zoals 6,02e23. Een decimale punt (0.00056) wordt ook geaccepteerd.",
    invalid: "Vul een getal in zoals 123400, 0,00056 of 6,02e23.",
    tooLarge: "Vul een getal in kleiner dan 1,8 × 10³⁰⁸.",
    scientific: "Wetenschappelijke notatie",
    eNotation: "E-notatie",
    engineering: "Ingenieursnotatie",
    decimal: "Decimale vorm",
    tooLong: "Te lang om weer te geven",
  },
};

export default nl;
