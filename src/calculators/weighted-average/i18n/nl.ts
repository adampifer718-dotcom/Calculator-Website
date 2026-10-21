import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WeightedAverageText } from "../text/en";

const nl: CalculatorTranslation<WeightedAverageText> = {
  content: {
    title: "Gewogen-gemiddeldecalculator",
    shortTitle: "Gewogen gemiddelde",
    summary: "Bereken het gemiddelde van een lijst waarden waarvan sommige zwaarder meetellen dan andere, en vergelijk het met het gewone gemiddelde.",
    metaTitle: "Gewogen gemiddelde berekenen – met wegingen",
    metaDescription:
      "Bereken het gewogen gemiddelde van maximaal 100 waarden en hun wegingen, met de som van de wegingen en het gewone ongewogen gemiddelde ter vergelijking.",
    keywords: ["gewogen gemiddelde", "gewogen gemiddelde berekenen", "weging", "gemiddeld cijfer", "cijfer met weging", "gemiddelde prijs", "wegingsfactor"],
    intro: [
      "Een gewogen gemiddelde is een gemiddelde waarin elke waarde meetelt naar haar weging. Een eindexamen dat voor de helft van het cijfer telt, trekt het resultaat sterker dan een overhoring die voor een tiende telt, en een grote aankoop beïnvloedt de gemiddelde prijs meer dan een kleine.",
      "Vul de waarden in en een bijpassende lijst met wegingen. De calculator geeft het gewogen gemiddelde en, ter vergelijking, het gewone gemiddelde waarin elke waarde even zwaar telt.",
    ],
    howToUse: [
      "Typ de waarden in het eerste vak, gescheiden door puntkomma's, spaties of nieuwe regels.",
      "Typ de wegingen in het tweede vak in dezelfde volgorde, één per waarde.",
      "Wegingen kunnen percentages, studiepunten, hoeveelheden of andere niet-negatieve getallen zijn. Ze hoeven niet op te tellen tot 100 of tot 1.",
      "Lees het gewogen gemiddelde af. Wijkt het sterk af van het ongewogen gemiddelde, dan trekken de zwaar wegende waarden het naar zich toe.",
    ],
    formulas: [
      {
        title: "Gewogen gemiddelde",
        expression: "x̄w = Σ(wᵢ·xᵢ) ÷ Σwᵢ",
        explanation: "Vermenigvuldig elke waarde met haar weging, tel de producten op en deel door de totale weging.",
      },
      {
        title: "Ongewogen gemiddelde",
        expression: "x̄ = Σxᵢ ÷ n",
        explanation: "Het gewone gemiddelde, gelijk aan het gewogen gemiddelde als alle wegingen gelijk zijn.",
      },
    ],
    examples: [
      {
        title: "Vakcijfer met gewogen onderdelen",
        steps: [
          "Producten: 82 × 20 = 1640; 90 × 50 = 4500; 75 × 30 = 2250",
          "Som van de producten = 8390 en som van de wegingen = 100",
          "Gewogen gemiddelde = 8390 ÷ 100 = 83,9, terwijl het gewone gemiddelde ongeveer 82,33 is",
        ],
      },
      {
        title: "Cijferpunten gewogen naar studiepunten",
        steps: ["Producten: 14,8 + 9 + 12 + 4,6 = 40,4", "Som van de wegingen = 4 + 3 + 3 + 2 = 12 studiepunten", "Gewogen gemiddelde = 40,4 ÷ 12 ≈ 3,3667"],
      },
      {
        title: "Gemiddeld betaalde prijs per kilogram",
        steps: [
          "Kiloprijzen gewogen naar gekochte kilo's: 12,5 × 40 + 14 × 25 + 11,75 × 35 = 500 + 350 + 411,25 = 1261,25",
          "Totale hoeveelheid = 100 kg",
          "Gemiddelde prijs = 1261,25 ÷ 100 = 12,6125 per kg",
        ],
      },
    ],
    assumptions: [
      "Waarden en wegingen worden op volgorde gekoppeld: de eerste weging hoort bij de eerste waarde, enzovoort.",
      "Wegingen moeten nul of positief zijn, en minstens één moet groter zijn dan nul. Een weging van 0 laat die waarde weg uit het gewogen gemiddelde, maar niet uit het ongewogen gemiddelde.",
      "De uitkomsten worden met 10 significante cijfers weergegeven. Maximaal 100 paren worden geaccepteerd.",
    ],
    faqs: [
      {
        question: "Moeten de wegingen optellen tot 100%?",
        answer: "Nee. De formule deelt door de som van de wegingen, dus 20, 50 en 30 geven hetzelfde resultaat als 0,2, 0,5 en 0,3, of 2, 5 en 3.",
      },
      {
        question: "Wanneer is het gewogen gemiddelde gelijk aan het gewone gemiddelde?",
        answer: "Als alle wegingen gelijk zijn. Dan heeft elke waarde evenveel invloed en wordt de formule de som van de waarden gedeeld door hun aantal.",
      },
      {
        question: "Hoe bereken ik welk cijfer ik op een eindexamen nodig heb?",
        answer: "Schrijf het gewogen gemiddelde op met de examenscore als onbekende en los die op. Heb je bijvoorbeeld 80 voor werk dat 60% telt en wil je 85, dan geldt 0,6 × 80 + 0,4 × s = 85, dus s = 92,5.",
      },
    ],
    sourcesUsedFor: [
      "Definitie van een gewogen gemiddelde: elke waarde vermenigvuldigd met haar weging, opgeteld en gedeeld door de som van de wegingen.",
    ],
  },
  text: {
    values: "Waarden",
    valuesHelp: "Eén waarde per item, gescheiden door puntkomma's, spaties of nieuwe regels (bijvoorbeeld 7,5; 8; 6,25). Gebruik de komma als decimaalteken.",
    weights: "Wegingen",
    weightsHelp: "Eén weging per waarde, in dezelfde volgorde. Percentages, studiepunten of aantallen werken allemaal; ze hoeven niet op te tellen tot 100.",
    errors: {
      empty: "Vul minstens één getal in.",
      tooMany: "Vul hoogstens {max} getallen in.",
      notNumber: "“{token}” is geen getal. Scheid waarden met puntkomma's, spaties of nieuwe regels.",
      tooLarge: "“{token}” is te groot.",
    },
    maxCount: "Vul hoogstens {max} getallen in.",
    tooBig: "{value} is te groot. Elk getal mag in grootte hoogstens {max} zijn.",
    negativeWeight: "Wegingen mogen niet negatief zijn ({value}).",
    zeroTotal: "De wegingen tellen op tot 0. Minstens één weging moet groter zijn dan 0.",
    countMismatch: "Vul voor elke waarde één weging in: je hebt {values} en {weights}.",
    valueCount: { zero: "{n} waarden", one: "{n} waarde", two: "{n} waarden", few: "{n} waarden", many: "{n} waarden", other: "{n} waarden" },
    weightCount: { zero: "{n} wegingen", one: "{n} weging", two: "{n} wegingen", few: "{n} wegingen", many: "{n} wegingen", other: "{n} wegingen" },
    weightedMean: "Gewogen gemiddelde",
    caption: "Op basis van {count}.",
    sumOfWeights: "Som van de wegingen",
    sumOfProducts: "Som van waarde × weging",
    unweightedMean: "Ongewogen gemiddelde (ter vergelijking)",
  },
};

export default nl;
