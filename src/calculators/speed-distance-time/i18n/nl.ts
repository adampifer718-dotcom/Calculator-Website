import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SpeedDistanceTimeText } from "../text/en";

const nl: CalculatorTranslation<SpeedDistanceTimeText> = {
  content: {
    title: "Snelheid-, afstand- en tijdcalculator",
    shortTitle: "Snelheid, afstand, tijd",
    summary: "Bereken de gemiddelde snelheid, de afgelegde afstand of de reistijd uit de andere twee waarden.",
    metaTitle: "Snelheid, afstand en tijd berekenen",
    metaDescription:
      "Bereken gemiddelde snelheid, afstand of reistijd uit de andere twee waarden, in kilometer en km/h of in mijl en mph, met omrekeningen erbij.",
    keywords: ["snelheid berekenen", "afstand berekenen", "reistijd", "gemiddelde snelheid", "snelheid afstand tijd", "km/h", "mph"],
    intro: [
      "Snelheid, afstand en tijd hangen samen via één eenvoudig verband. Ken je er twee, dan kun je de derde berekenen.",
      "De calculator werkt in kilometer en km/h of in mijl en mph, en toont omrekeningen.",
    ],
    howToUse: [
      "Kies wat je wilt berekenen.",
      "Kies metrische of imperiale eenheden.",
      "Vul de twee bekende waarden in, met de tijd in uren en minuten.",
      "Lees het resultaat af.",
    ],
    formulas: [
      {
        title: "Het verband",
        expression: "snelheid = afstand ÷ tijd\nafstand = snelheid × tijd\ntijd = afstand ÷ snelheid",
        explanation: "Gebruik passende eenheden, zoals km en uren voor km/h.",
      },
    ],
    examples: [
      { title: "150 km in 2 u 30 min", steps: ["Tijd = 2,5 u", "Snelheid = 150 ÷ 2,5 = 60 km/h"] },
      { title: "90 mijl met 60 mph", steps: ["Tijd = 90 ÷ 60 = 1,5 u", "= 1 u 30 min"] },
    ],
    assumptions: [
      "Geeft de gemiddelde snelheid over de hele rit; de werkelijke snelheid kan onderweg variëren.",
      "Tijden worden voor de weergave afgerond op hele minuten.",
    ],
    faqs: [
      {
        question: "Hoe bereken ik de gemiddelde snelheid?",
        answer: "Deel de totale afstand door de totale tijd. 120 km in 1,5 uur is 80 km/h.",
      },
      { question: "Hoe reken ik km/h om naar m/s?", answer: "Deel door 3,6. Dus 72 km/h is 20 m/s." },
      {
        question: "Is snelheid hetzelfde als velocity?",
        answer: "Een snelheidsvector (velocity) heeft ook een richting. Voor een reis langs een route heb je meestal de gemiddelde snelheid nodig.",
      },
    ],
    sourcesUsedFor: ["Definitie van gemiddelde snelheid en snelheidsvector."],
  },
  text: {
    solve: "Bereken",
    solveOptions: { speed: "Snelheid", distance: "Afstand", time: "Tijd" },
    units: "Eenheden",
    unitOptions: { metric: "Kilometer en km/h", imperial: "Mijl en mph" },
    distance: "Afstand",
    speed: "Snelheid",
    hours: "Uren",
    minutes: "Minuten",
    timeZero: "Vul een tijd in die groter is dan nul.",
    distanceOut: "Afstand",
    inKm: "In kilometer",
    inMiles: "In mijl",
    timeOut: "Tijd",
    inHours: "In uren",
    speedOut: "Gemiddelde snelheid",
    inKmh: "In km/h",
    inMph: "In mph",
    inMps: "In meter per seconde",
    hoursMinutes: "{h} u {m} min",
    hoursOnly: "{h} u",
    minutesOnly: "{m} min",
  },
};

export default nl;
