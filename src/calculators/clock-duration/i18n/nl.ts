import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ClockDurationText } from "../text/en";

const nl: CalculatorTranslation<ClockDurationText> = {
  content: {
    title: "Urencalculator voor werktijden",
    shortTitle: "Uren",
    summary: "Tel de uren en minuten tussen een begin- en eindtijd, min een onbetaalde pauze, ook bij nachtdiensten, met uren als decimaal getal en eventueel het loon.",
    metaTitle: "Urencalculator voor werktijden – tijd tussen twee kloktijden",
    metaDescription:
      "Bereken de uren tussen twee kloktijden, min pauzes, ook na middernacht. Krijg u:mm, decimale uren voor je urenbriefje en het loon bij je uurtarief.",
    keywords: ["urencalculator", "gewerkte uren berekenen", "diensturen berekenen", "tijd tussen twee tijden", "urenbriefje", "decimale uren", "nachtdienst uren"],
    intro: [
      "Hoe lang is een dienst van 9:00 tot 17:30 met een half uur lunchpauze? Met de hand over de uren heen tellen gaat makkelijk mis, vooral als de dienst na middernacht eindigt of als je het totaal in decimale uren nodig hebt voor een urenbriefje.",
      "Typ een begintijd en een eindtijd in 24-uursnotatie of met am/pm, voeg een eventuele onbetaalde pauze toe, en deze calculator toont de gewerkte tijd in uren en minuten, in decimale uren en in totaal aantal minuten. Vul een uurtarief in om het loon voor de dienst te zien.",
    ],
    howToUse: [
      "Typ de begintijd, bijvoorbeeld 9:00 am, 9 am of 09:00.",
      "Typ de eindtijd. Als die vóór de begintijd ligt, wordt de dienst geteld alsof hij de volgende dag eindigt.",
      "Vul de onbetaalde pauze in minuten in, of 0 als er geen is.",
      "Kies eventueel een valuta en vul je uurtarief in.",
      "Lees de gewerkte tijd af, de decimale uren voor je urenbriefje en het loon.",
    ],
    formulas: [
      {
        title: "Tijd tussen de tijdstippen",
        expression: "duur = eind − begin   (tel 24 u op als eind ≤ begin)",
        explanation: "Beide tijden worden eerst omgerekend naar minuten na middernacht.",
      },
      { title: "Gewerkte tijd", expression: "gewerkt = duur − pauze", explanation: "De onbetaalde pauze wordt van de duur afgetrokken." },
      {
        title: "Decimale uren en loon",
        expression: "decimale uren = gewerkte minuten ÷ 60\nloon = decimale uren × uurtarief",
        explanation: "Zo is 7 u 30 min gelijk aan 450 ÷ 60 = 7,5 uur.",
      },
    ],
    examples: [
      {
        title: "Een werkdag van 9:00 am tot 5:30 pm met 30 minuten lunch",
        steps: ["9:00 am = 540 min en 5:30 pm = 17:30 = 1.050 min na middernacht", "Duur = 1.050 − 540 = 510 min", "Gewerkt = 510 − 30 = 480 min = 8:00, oftewel 8 decimale uren"],
      },
      {
        title: "Een nachtdienst van 22:00 tot 6:15 met 45 minuten pauze, tegen $18,50 per uur",
        steps: [
          "6:15 ligt vóór 22:00, dus de dienst gaat over middernacht heen: 375 + 1.440 − 1.320 = 495 min",
          "Gewerkt = 495 − 45 = 450 min = 7:30, oftewel 7,5 uur",
          "Loon = 7,5 × $18,50 = $138,75",
        ],
      },
      {
        title: "Een ochtend van 8:45 tot 12:10 zonder pauze",
        steps: ["8:45 = 525 min en 12:10 = 730 min", "Gewerkt = 730 − 525 = 205 min", "205 min = 3:25, oftewel ongeveer 3,42 decimale uren"],
      },
    ],
    assumptions: [
      "Een dienst duurt korter dan 24 uur. Als de eindtijd gelijk is aan of vóór de begintijd ligt, wordt aangenomen dat die op de volgende dag valt.",
      "De overgang naar zomer- of wintertijd tijdens de dienst wordt genegeerd, dus een nachtdienst waarin de klok verzet wordt, wijkt een uur af.",
      "Het loon is een eenvoudige schatting van het brutoloon: uren × tarief. Overwerktoeslagen, belastingen en de afrondingsregels van je werkgever zijn niet meegenomen. Gebruik voor overuren per week de overurencalculator.",
    ],
    faqs: [
      {
        question: "Hoe reken ik uren en minuten om naar decimale uren?",
        answer: "Deel de minuten door 60 en tel ze op bij de uren. 7 uur en 30 minuten is 7 + 30 ÷ 60 = 7,5 uur, en 3 uur en 25 minuten is ongeveer 3,42 uur.",
      },
      {
        question: "Hoe voer ik een dienst in die na middernacht eindigt?",
        answer: "Typ gewoon de echte eindtijd, zoals 6:15 of 6:15 am. Als de eindtijd vóór de begintijd ligt, telt de calculator er 24 uur bij op en toont hij een melding.",
      },
      {
        question: "Welke tijdnotaties kan ik typen?",
        answer: "24-uurstijden zoals 9:30, 09:30 of 21:30, en 12-uurstijden met am of pm zoals 9:30 pm, 9 pm of 9 am. Minuten moeten, als je ze opgeeft, uit twee cijfers bestaan.",
      },
    ],
    sourcesUsedFor: ["Het uur (60 minuten) en de minuut (60 seconden), gebruikt om kloktijd om te rekenen naar decimale uren en terug."],
  },
  text: {
    start: "Begintijd",
    end: "Eindtijd",
    timeHelp: "Typ een 24-uurstijd zoals 9:30, 09:30 of 21:30, of een 12-uurstijd met am/pm zoals 9:30 pm of 9 am.",
    breakMinutes: "Onbetaalde pauze",
    breakHelp: "Totale onbetaalde pauzetijd in minuten, zoals een lunchpauze. Vul 0 in als er geen is.",
    rate: "Uurtarief (optioneel)",
    rateHelp: "Laat leeg als je alleen de uren nodig hebt.",
    errors: {
      format: "Vul een tijd in zoals 9:30, 21:30, 9:30 pm of 9 am.",
      hour24: "Het uur moet tussen 0 en 23 liggen.",
      hour12: "Met am of pm moet het uur tussen 1 en 12 liggen.",
      minute: "De minuten moeten tussen 00 en 59 liggen.",
      breakTooLong: "De pauze moet korter zijn dan de tijd tussen begin en eind ({span}).",
    },
    worked: "Gewerkte tijd",
    caption: "{start} tot {end}, min {break} min pauze",
    decimalHours: "Decimale uren",
    totalMinutes: "Totaal aantal minuten",
    span: "Tijd tussen begin en eind",
    pay: "Loon voor deze dienst",
    notes: {
      overnight: "De eindtijd ligt niet na de begintijd, dus de dienst wordt behandeld alsof hij over middernacht doorloopt tot de volgende dag (24 uur opgeteld).",
      fullDay: "Begin en eind zijn gelijk, dus dit telt als een volle periode van 24 uur.",
      rounding: "Het loon is decimale uren × tarief, vóór belastingen, overwerktoeslagen of afrondingsregels die je werkgever kan hanteren.",
    },
  },
};

export default nl;
