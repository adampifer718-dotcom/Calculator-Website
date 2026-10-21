import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProbabilityEventsText } from "../text/en";

const nl: CalculatorTranslation<ProbabilityEventsText> = {
  content: {
    title: "Kanscalculator voor twee gebeurtenissen",
    shortTitle: "Kansberekening",
    summary:
      "Combineer de kansen van twee onafhankelijke of elkaar uitsluitende gebeurtenissen: beide, minstens één, precies één of geen van beide.",
    metaTitle: "Kanscalculator voor twee gebeurtenissen – en, of, geen",
    metaDescription:
      "Bereken P(A en B), P(A of B), precies één en geen van beide voor twee onafhankelijke of elkaar uitsluitende gebeurtenissen, plus het complement van elk.",
    keywords: [
      "kansberekening",
      "kans berekenen",
      "kans op twee gebeurtenissen",
      "onafhankelijke gebeurtenissen",
      "elkaar uitsluitende gebeurtenissen",
      "P(A en B)",
      "P(A of B)",
      "complementregel",
      "somregel",
      "productregel",
    ],
    intro: [
      "Veel alledaagse vragen combineren twee kansen. Hoe groot is de kans dat twee machines op dezelfde dag uitvallen, of dat een klant met kaart of contant betaalt? Deze calculator beantwoordt zulke vragen voor twee gebeurtenissen, A en B.",
      "Vul de kans op elke gebeurtenis in en geef aan hoe ze samenhangen. Onafhankelijke gebeurtenissen beïnvloeden elkaar niet, zoals twee afzonderlijke worpen met een munt. Elkaar uitsluitende gebeurtenissen kunnen niet tegelijk plaatsvinden, zoals een dobbelsteen die tegelijk een 2 en een 5 gooit. De calculator geeft dan de kans op beide, op minstens één, op precies één en op geen van beide.",
    ],
    howToUse: [
      "Vul P(A) en P(B) in als percentages tussen 0% en 100%.",
      "Kies Onafhankelijk als het weten dat de ene gebeurtenis plaatsvond de kans op de andere niet verandert.",
      "Kies Elkaar uitsluitend als de twee gebeurtenissen nooit samen kunnen plaatsvinden. Hun kansen kunnen dan samen niet meer dan 100% zijn.",
      "Lees P(A en B) af als hoofdresultaat en de andere combinaties daaronder.",
    ],
    formulas: [
      {
        title: "Beide (onafhankelijk)",
        expression: "P(A en B) = P(A) × P(B)",
        explanation: "De productregel voor onafhankelijke gebeurtenissen.",
      },
      {
        title: "Beide (elkaar uitsluitend)",
        expression: "P(A en B) = 0",
        explanation: "De gebeurtenissen hebben geen enkele uitkomst gemeen.",
      },
      {
        title: "Minstens één",
        expression: "P(A of B) = P(A) + P(B) − P(A en B)",
        explanation: "De somregel. De doorsnede wordt afgetrokken om die niet dubbel te tellen.",
      },
      {
        title: "Precies één",
        expression: "P(precies één) = P(A) + P(B) − 2 × P(A en B)",
        explanation: "Minstens één, min het geval waarin beide plaatsvinden.",
      },
      {
        title: "Geen van beide en complementen",
        expression: "P(geen van beide) = 1 − P(A of B)\nP(niet A) = 1 − P(A)",
        explanation: "De complementregel: een gebeurtenis vindt plaats of vindt niet plaats.",
      },
    ],
    examples: [
      {
        title: "Twee onafhankelijke machines die op 8% en 5% van de dagen uitvallen",
        steps: [
          "P(beide vallen uit) = 0,08 × 0,05 = 0,004 = 0,4%",
          "P(minstens één valt uit) = 0,08 + 0,05 − 0,004 = 0,126 = 12,6%",
          "P(geen van beide valt uit) = 1 − 0,126 = 87,4%",
        ],
      },
      {
        title: "Een klant betaalt met kaart (62%) of contant (18%), nooit allebei",
        steps: [
          "De gebeurtenissen sluiten elkaar uit, dus P(beide) = 0",
          "P(kaart of contant) = 62% + 18% = 80%",
          "P(geen van beide, bijv. een cadeaubon) = 100% − 80% = 20%",
        ],
      },
      {
        title: "Twee vrije worpen raak gooien als elke worp 75% van de keren raak is",
        steps: [
          "P(beide raak) = 0,75 × 0,75 = 0,5625 = 56,25%",
          "P(precies één) = 0,75 + 0,75 − 2 × 0,5625 = 37,5%",
          "P(geen van beide) = 0,25 × 0,25 = 6,25%",
        ],
      },
    ],
    assumptions: [
      "Kansen worden als percentages ingevuld en als exacte waarden behandeld.",
      "De calculator behandelt alleen de twee speciale gevallen van onafhankelijke en elkaar uitsluitende gebeurtenissen. Voor gebeurtenissen die geen van beide zijn, heb je P(A en B) of een voorwaardelijke kans nodig, en daar vraagt deze tool niet naar.",
      "Onafhankelijkheid is een eigenschap van de situatie, niet van de getallen. Behandel gebeurtenissen als afhankelijk, tenzij je goede redenen hebt om aan te nemen dat ze onafhankelijk zijn.",
      "Resultaten worden getoond met vier decimalen in procenten.",
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen onafhankelijk en elkaar uitsluitend?",
        answer:
          "Onafhankelijke gebeurtenissen beïnvloeden elkaar niet, dus ze kunnen allebei plaatsvinden. Elkaar uitsluitende gebeurtenissen kunnen niet samen plaatsvinden: als de ene gebeurt, is de andere uitgesloten. Twee gebeurtenissen met kansen groter dan nul kunnen nooit tegelijk onafhankelijk en elkaar uitsluitend zijn.",
      },
      {
        question: "Waarom kunnen de kansen van elkaar uitsluitende gebeurtenissen samen niet boven 100% uitkomen?",
        answer:
          "Als A en B nooit overlappen, is P(A of B) gelijk aan P(A) + P(B). Een kans kan niet groter zijn dan 100%, en die som dus ook niet. Een totaal boven 100% betekent dat de gebeurtenissen overlappen en elkaar niet uitsluiten.",
      },
      {
        question: "Hoe bereken ik de kans dat iets minstens één keer gebeurt bij meerdere pogingen?",
        answer:
          "Bereken voor onafhankelijke pogingen de kans dat het nooit gebeurt en trek die af van 1. Bij twee pogingen van elk 30% is P(geen van beide) = 0,7 × 0,7 = 0,49, dus P(minstens één keer) = 51%. Deze calculator toont dat als P(A of B).",
      },
    ],
    sourcesUsedFor: [
      "Definities van onafhankelijke en elkaar uitsluitende gebeurtenissen, P(A en B) = P(A)·P(B) voor onafhankelijke gebeurtenissen en P(A en B) = 0 voor elkaar uitsluitende gebeurtenissen.",
    ],
  },
  text: {
    pA: "Kans op A, P(A)",
    pB: "Kans op B, P(B)",
    pHelp: "Als percentage van 0% tot 100%.",
    relation: "Hoe hangen A en B samen?",
    relationHelp:
      "Onafhankelijk: als de ene plaatsvindt, verandert de kans op de andere niet. Elkaar uitsluitend: ze kunnen niet allebei plaatsvinden.",
    relationOptions: { independent: "Onafhankelijk", exclusive: "Elkaar uitsluitend" },
    exclusiveTooLarge: "Bij elkaar uitsluitende gebeurtenissen kan P(A) + P(B) niet boven 100% liggen. Hier is de som {sum}.",
    and: "P(A en B): beide vinden plaats",
    or: "P(A of B): minstens één vindt plaats",
    exactlyOne: "P(precies één van A of B)",
    neither: "P(A noch B)",
    notA: "P(niet A)",
    notB: "P(niet B)",
    independentCaption: "Voor onafhankelijke gebeurtenissen geldt P(A en B) = P(A) × P(B).",
    exclusiveCaption: "Elkaar uitsluitende gebeurtenissen vinden nooit samen plaats, dus P(A en B) = 0.",
    certainNote: "Met P(A) + P(B) = 100% vindt zeker een van de twee elkaar uitsluitende gebeurtenissen plaats.",
  },
};

export default nl;
