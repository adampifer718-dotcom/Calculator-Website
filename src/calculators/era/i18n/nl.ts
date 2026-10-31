import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { EraText } from "../text/en";

const nl: CalculatorTranslation<EraText> = {
  content: {
    title: "ERA-calculator voor honkbal",
    shortTitle: "ERA",
    summary: "Bereken het gemiddelde aantal verdiende punten (ERA) van een werper uit verdiende punten en gegooide innings, met WHIP, K/9 en BB/9, voor honkbal met 9 innings of wedstrijden van 7 innings.",
    metaTitle: "ERA-calculator – earned run average, WHIP en K/9",
    metaDescription:
      "Bereken de ERA van een werper uit verdiende punten en innings plus uit, met WHIP en strikeouts en vrije lopen per negen innings, voor 9 of 7 innings.",
    keywords: ["era berekenen", "earned run average", "honkbal era", "softbal era", "whip berekenen", "k/9", "bb/9", "gegooide innings"],
    intro: [
      "De earned run average (ERA) is het aantal verdiende punten dat een werper per volledige wedstrijd weggeeft. Het herschaalt de tegenpunten van een werper naar een standaardwedstrijdlengte, zodat startende werpers en relievers met heel verschillende werklasten vergeleken kunnen worden.",
      "Vul de verdiende punten en de gegooide innings in om de ERA te krijgen. Innings vul je in als hele innings plus extra uit, omdat elke uit een derde inning is. Voeg honkslagen, vrije lopen en strikeouts toe om ook WHIP, K/9 en BB/9 te zien. Kies 7 innings voor softbal en veel jeugdcompetities.",
    ],
    howToUse: [
      "Vul het aantal toegestane verdiende punten in.",
      "Vul de volledige gegooide innings in en kies 0, 1 of 2 extra uit. In een box score betekent 5.1 dat er 5 innings en 1 uit zijn gegooid.",
      "Kies 9 innings per wedstrijd voor honkbal of 7 voor softbal en veel jeugdcompetities.",
      "Vul eventueel honkslagen, vrije lopen en strikeouts in en lees dan de ERA en de andere verhoudingen af.",
    ],
    formulas: [
      { title: "Gegooide innings", expression: "IP = hele innings + extra uit ÷ 3", explanation: "Elke uit is een derde inning, dus 6.2 in box-scorenotatie is 6⅔ = 6,667 innings." },
      { title: "Earned run average", expression: "ERA = verdiende punten × innings per wedstrijd ÷ IP", explanation: "Bij honkbal zijn het 9 innings per wedstrijd; bij softbal en veel jeugdcompetities 7." },
      { title: "WHIP", expression: "WHIP = (vrije lopen + honkslagen) ÷ IP", explanation: "Toegestane honklopers per inning via honkslagen en vrije lopen." },
      { title: "Verhoudingen per negen innings", expression: "K/9 = strikeouts × 9 ÷ IP\nBB/9 = vrije lopen × 9 ÷ IP", explanation: "Strikeouts en vrije lopen per negen innings." },
    ],
    examples: [
      {
        title: "3 verdiende punten in 6⅔ innings",
        steps: ["IP = 6 + 2 ÷ 3 = 6,667", "ERA = 3 × 9 ÷ 6,667 = 4,05", "WHIP = (2 + 7) ÷ 6,667 = 1,35; K/9 = 8 × 9 ÷ 6,667 = 10,8"],
      },
      {
        title: "Een seizoen: 61 verdiende punten in 187⅓ innings",
        steps: ["IP = 187 + 1 ÷ 3 = 187,333", "ERA = 61 × 9 ÷ 187,333 ≈ 2,93", "WHIP = (45 + 158) ÷ 187,333 ≈ 1,08; K/9 ≈ 9,66; BB/9 ≈ 2,16"],
      },
      {
        title: "Softbal: 4 verdiende punten in een volledige wedstrijd van 7 innings",
        steps: ["IP = 7", "ERA = 4 × 7 ÷ 7 = 4,00", "WHIP = (3 + 5) ÷ 7 ≈ 1,14"],
      },
    ],
    assumptions: [
      "Verdiende punten zijn wat de officiële scorer heeft genoteerd. Punten die door een fout of een doorgeschoten bal vallen, zijn onverdiend en horen er niet bij.",
      "Innings worden ingevuld als hele innings plus uit, niet als een decimaal getal zoals 6.2, omdat het cijfer na de punt in een box score uit telt en geen tienden.",
      "De ERA hangt af van de verdediging achter de werper, het stadion en de competitie, dus vergelijk werpers waar mogelijk binnen dezelfde competitie en hetzelfde seizoen.",
      "K/9 en BB/9 gebruiken zoals gebruikelijk altijd 9 innings, ook als voor de ERA 7 innings per wedstrijd is gekozen.",
    ],
    faqs: [
      { question: "Wat betekent 6.2 gegooide innings?", answer: "Het betekent 6 innings en 2 uit, oftewel 6⅔ innings, niet 6,2 als decimaal getal. Elke uit is een derde inning, dus het cijfer na de punt kan alleen 0, 1 of 2 zijn. Vul hier 6 innings en 2 extra uit in." },
      { question: "Wat is een goede ERA?", answer: "Dat hangt af van de competitie en de periode. In recente seizoenen van de Major League Baseball lag het competitiegemiddelde rond 4,00, en een ERA onder 3,00 over een heel seizoen geldt doorgaans als uitstekend." },
      { question: "Waarom gebruikt softbal 7 innings?", answer: "Softbalwedstrijden, en veel honkbalwedstrijden op high schools en in de jeugd, duren zeven innings, dus de ERA wordt herschaald naar een wedstrijd van zeven innings om de tegenpunten per volledige wedstrijd in dat formaat te tonen." },
    ],
    sourcesUsedFor: [
      "De definitie van een verdiend punt en ERA = 9 × verdiende punten ÷ gegooide innings.",
      "WHIP = (vrije lopen + honkslagen) ÷ gegooide innings, waarbij geraakte slagmensen en fouten niet meetellen.",
    ],
  },
  text: {
    earnedRuns: "Toegestane verdiende punten",
    earnedRunsHelp: "Punten die zijn gescoord zonder hulp van een fout of een doorgeschoten bal, zoals vastgesteld door de officiële scorer.",
    innings: "Gegooide innings (hele innings)",
    inningsHelp: "Vul hier volledige innings in en eventuele extra uit in het volgende veld. 6⅔ innings, in box scores geschreven als 6.2, is 6 innings en 2 uit.",
    outs: "Extra uit",
    outsOptions: { "0": "0 uit", "1": "1 uit (⅓ inning)", "2": "2 uit (⅔ inning)" },
    gameLength: "Innings per wedstrijd",
    gameLengthHelp: "Gebruik 9 voor profhonkbal en het meeste universiteitshonkbal, 7 voor softbal en veel high-school- en jeugdcompetities.",
    gameLengths: { "9": "9 innings (honkbal)", "7": "7 innings (softbal, veel jeugdcompetities)" },
    hits: "Toegestane honkslagen (optioneel)",
    walks: "Gegeven vrije lopen (optioneel)",
    walksHelp: "Vier wijd. Geraakte slagmensen tellen niet mee in WHIP.",
    strikeouts: "Strikeouts (optioneel)",
    errors: {
      noInnings: "Vul minstens één gegooide uit in.",
    },
    era: "Earned run average (ERA)",
    caption: "{er} verdiende punten × {length} ÷ {ip} gegooide innings ({notation} in box-scorenotatie).",
    notation: "{whole}.{outs}",
    inningsNotation: "Gegooide innings (honkbalnotatie)",
    inningsDecimal: "Gegooide innings als decimaal getal",
    totalOuts: "Gemaakte uit",
    whip: "WHIP (vrije lopen + honkslagen per inning)",
    k9: "Strikeouts per 9 innings (K/9)",
    bb9: "Vrije lopen per 9 innings (BB/9)",
    kbb: "Verhouding strikeouts tot vrije lopen",
    notes: {
      notation: "In box scores telt het cijfer na de punt uit, geen tienden: 6.1 betekent 6⅓ innings en 6.2 betekent 6⅔ innings.",
      whip: "Vul zowel honkslagen als vrije lopen in om WHIP te zien.",
      perNine: "K/9 en BB/9 gelden altijd per 9 innings, ongeacht de wedstrijdlengte.",
    },
  },
};

export default nl;
