import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SpeedConverterText } from "../text/en";

const nl: CalculatorTranslation<SpeedConverterText> = {
  content: {
    title: "Snelheid omrekenen",
    shortTitle: "Snelheid",
    summary: "Reken een snelheid om tussen meter per seconde, kilometer per uur, mijl per uur, voet per seconde, knopen en centimeter per seconde.",
    metaTitle: "Snelheid omrekenen – km/h, mph, m/s, ft/s en knopen",
    metaDescription:
      "Reken snelheid om tussen km/h, mph, m/s, ft/s, knopen en cm/s met exacte factoren, en zie je waarde in één tabel in alle eenheden tegelijk.",
    keywords: ["snelheid omrekenen", "km/h naar mph", "mph naar km/h", "m/s naar km/h", "knopen naar km/h", "voet per seconde", "snelheidseenheden"],
    intro: [
      "Snelheden komen in veel eenheden voor: verkeersborden gebruiken km/h of mph, natuurkundeopgaven m/s, piloten en zeilers knopen, en in het lab kom je cm/s tegen. Deze omrekentool zet een waarde om van de ene eenheid naar de andere en toont hem in alle zes tegelijk.",
      "Elke eenheid is een vast aantal meter per seconde, dus omrekenen is één vermenigvuldiging en één deling. Alle factoren zijn exact; zo is één mijl per uur precies 0,44704 m/s, omdat een mijl precies 1609,344 m is.",
    ],
    howToUse: [
      "Typ de snelheid die je wilt omrekenen.",
      "Kies bij Van de eenheid ervan en bij Naar de eenheid die je wilt.",
      "Lees de omgerekende snelheid af, of kijk in de tabel voor de andere eenheden.",
    ],
    formulas: [
      {
        title: "Omrekenen via meter per seconde",
        expression: "uitkomst = waarde × (m/s per begineenheid) ÷ (m/s per doeleenheid)",
        explanation: "Elke eenheid wordt eerst omgezet naar meter per seconde en daarna naar de doeleenheid.",
      },
      {
        title: "Exacte factoren",
        expression: "1 km/h = 1/3,6 m/s ≈ 0,2778 m/s\n1 mph = 0,44704 m/s\n1 ft/s = 0,3048 m/s\n1 kn = 1852/3600 m/s ≈ 0,5144 m/s\n1 cm/s = 0,01 m/s",
        explanation: "Ze volgen uit 1 km = 1000 m, 1 mi = 1609,344 m, 1 ft = 0,3048 m, 1 zeemijl = 1852 m en 1 h = 3600 s.",
      },
    ],
    examples: [
      { title: "Snelwegsnelheid van 100 km/h in mph", steps: ["100 km/h = 100 ÷ 3,6 ≈ 27,778 m/s", "27,778 ÷ 0,44704 ≈ 62,137 mph"] },
      { title: "Een boot met 30 knopen in km/h", steps: ["1 kn = 1,852 km/h", "30 × 1,852 = 55,56 km/h"] },
      { title: "25 mph in voet per seconde", steps: ["25 × 0,44704 = 11,176 m/s", "11,176 ÷ 0,3048 ≈ 36,667 ft/s"] },
    ],
    assumptions: [
      "Mijl en voet zijn de internationale eenheden (1 ft = 0,3048 m). De knoop gebruikt de internationale zeemijl van 1852 m.",
      "Hardloop- of wandeltempo, zoals minuten per kilometer, is niet opgenomen omdat dat het omgekeerde van snelheid is en geen veelvoud ervan. Gebruik de tempocalculator voor hardlopen voor tempo.",
      "De uitkomsten worden met 10 significante cijfers weergegeven.",
    ],
    faqs: [
      {
        question: "Hoe reken ik km/h om naar m/s?",
        answer: "Deel door 3,6. Bijvoorbeeld 90 km/h ÷ 3,6 = 25 m/s. Van m/s naar km/h vermenigvuldig je met 3,6.",
      },
      {
        question: "Is een knoop sneller dan een mijl per uur?",
        answer: "Ja. Een knoop is één zeemijl per uur, en een zeemijl (1852 m) is langer dan een landmijl (1609,344 m), dus 1 knoop is ongeveer 1,151 mph.",
      },
      {
        question: "Waarom staat tempo niet in de lijst?",
        answer: "Tempo is tijd per afstand, dus als je snelheid verdubbelt, halveert je tempo. Dat omgekeerde verband is niet als één omrekenfactor te schrijven, daarom heeft tempo een eigen calculator.",
      },
    ],
    sourcesUsedFor: [
      "Omrekenfactoren voor mijl per uur, voet per seconde en knoop in meter per seconde.",
      "De internationale zeemijl van 1852 m, waarmee de knoop is gedefinieerd als 1852 m per uur.",
    ],
  },
  text: {
    value: "Waarde",
    from: "Van",
    to: "Naar",
    unitNames: {
      ms: "Meter per seconde",
      kmh: "Kilometer per uur",
      mph: "Mijl per uur",
      fts: "Voet per seconde",
      kn: "Knopen",
      cms: "Centimeter per seconde",
    },
    primary: "{value} {symbol} in {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} in alle snelheidseenheden",
    tableUnit: "Eenheid",
    tableValue: "Waarde",
    note: "De uitkomsten worden met 10 significante cijfers weergegeven.",
  },
};

export default nl;
