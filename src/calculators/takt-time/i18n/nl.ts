import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TaktTimeText } from "../text/en";

const units = "{n} stuks";

const nl: CalculatorTranslation<TaktTimeText> = {
  content: {
    title: "Takttijdcalculator",
    shortTitle: "Takttijd",
    summary: "Bereken de takttijd, het productietempo dat nodig is om aan de klantvraag te voldoen, uit dienstlengte, pauzes, diensten en vraag, plus het minimale aantal operators.",
    metaTitle: "Takttijdcalculator – productietempo per stuk",
    metaDescription:
      "Bereken de takttijd uit dienstlengte, pauzes, diensten per dag en klantvraag, met stuks per uur, het minimale aantal operators en een check op je cyclustijd.",
    keywords: ["takttijd berekenen", "takttijd formule", "lean productie", "beschikbare productietijd", "klantvraag", "cyclustijd vs takttijd", "lijnbalancering", "aantal operators"],
    intro: [
      "Takttijd is het ritme dat een productielijn moet aanhouden om precies te maken wat klanten nodig hebben: willen klanten 645 stuks op een dag met 860 minuten werktijd, dan moet er elke 80 seconden één stuk van de lijn komen. Het woord komt van het Duitse woord voor de maat in muziek.",
      "Deze calculator berekent de netto beschikbare tijd uit de dienstlengte, pauzes, het aantal diensten en werkdagen, deelt die door de vraag en toont de takttijd in seconden en minuten. Met de totale werkinhoud per stuk schat hij het minimale aantal operators, en met een gemeten cyclustijd laat hij zien of de lijn het tempo kan bijhouden.",
    ],
    howToUse: [
      "Vul de lengte van één dienst in uren en minuten in, en de geplande pauzes per dienst in minuten.",
      "Vul het aantal diensten per dag in en het aantal werkdagen in de periode waarvoor je de vraag kent.",
      "Vul de klantvraag voor die periode in.",
      "Vul eventueel de totale werkinhoud per stuk en de werkelijke cyclustijd in, beide in seconden, om het minimale aantal operators te zien en of de lijn de takttijd bijhoudt.",
    ],
    formulas: [
      { title: "Netto beschikbare tijd", expression: "beschikbaar = (dienstlengte − pauzes) × diensten per dag × dagen", explanation: "In minuten. Alleen tijd waarin de lijn hoort te draaien, telt mee." },
      { title: "Takttijd", expression: "takt = beschikbare tijd ÷ klantvraag", explanation: "Weergegeven in seconden per stuk. Het aantal stuks per uur is 3.600 ÷ takt." },
      { title: "Minimaal aantal operators", expression: "operators = ⌈werkinhoud ÷ takt⌉", explanation: "Het totale handwerk per stuk gedeeld door de takttijd, naar boven afgerond op een hele persoon of werkplek." },
    ],
    examples: [
      {
        title: "Twee diensten van 8 uur voor 645 stuks per dag",
        steps: ["Beschikbaar = (480 − 50) × 2 × 1 = 860 min = 51.600 s", "Takt = 51.600 ÷ 645 = 80 s per stuk (1:20)", "Operators = ⌈300 ÷ 80⌉ = ⌈3,75⌉ = 4"],
      },
      {
        title: "Een weekvraag van 1.400 stuks in één dienst",
        steps: ["Beschikbaar = (450 − 30) × 1 × 5 = 2.100 min = 126.000 s", "Takt = 126.000 ÷ 1.400 = 90 s per stuk", "Een werkelijke cyclus van 95 s is 5 s langer dan de takt, dus er kunnen ongeveer 1.326 stuks worden gemaakt in plaats van 1.400"],
      },
      {
        title: "Een dienst van 10 uur voor 216 stuks",
        steps: ["Beschikbaar = 600 − 60 = 540 min = 32.400 s", "Takt = 32.400 ÷ 216 = 150 s per stuk, oftewel 2:30", "Stuks per uur = 3.600 ÷ 150 = 24"],
      },
    ],
    assumptions: [
      "De takttijd wordt bepaald door de vraag, niet door de machines. Er wordt aangenomen dat de vraag gelijkmatig over de periode is verdeeld.",
      "Alleen de pauzes worden van de dienst afgetrokken. Reken gepland onderhoud, overleg of opstarttijd bij de pauzes als de lijn dan niet draait.",
      "Het minimale aantal operators is een ondergrens. Ongelijk verdeeld werk, looptijden en variatie in taaktijden vereisen meestal meer.",
    ],
    faqs: [
      { question: "Wat is het verschil tussen takttijd en cyclustijd?", answer: "Takttijd is het tempo dat klanten vragen: beschikbare tijd gedeeld door de vraag. Cyclustijd is hoe lang het proces werkelijk per stuk duurt. Is de cyclustijd langer dan de takttijd, dan kan de lijn het niet bijhouden zonder overwerk of aanpassingen." },
      { question: "Moet de takttijd storingen meenemen?", answer: "Nee. De takttijd gebruikt de geplande beschikbare tijd. Ongeplande stilstand maakt de lijn trager, dus de cyclustijd moet korter zijn dan de takt om daar ruimte voor te laten. De overall equipment effectiveness (OEE) meet die verliezen." },
      { question: "Wat als de vraag in de loop van de maand verandert?", answer: "Bereken de takt voor elke periode opnieuw met de eigen vraag. Veel fabrieken herzien de takttijd wekelijks of maandelijks en verdelen het werk opnieuw over de werkplekken als die sterk verandert." },
    ],
    sourcesUsedFor: [
      "De definitie van takttijd als de beschikbare productietijd gedeeld door de klantvraag.",
      "Netto beschikbare tijd na pauzes, en het vergelijken van de cyclustijd met de takttijd.",
    ],
  },
  text: {
    shiftHours: "Dienstlengte: uren",
    shiftMinutes: "Dienstlengte: minuten",
    breaks: "Pauzes per dienst",
    breaksHelp: "Geplande pauzes, maaltijden en overleg waarin de lijn niet draait, in minuten per dienst.",
    shifts: "Diensten per dag",
    days: "Werkdagen in de periode",
    daysHelp: "Gebruik 1 voor een dagvraag, 5 voor een weekvraag bij een vijfdaagse werkweek, enzovoort.",
    demand: "Klantvraag in de periode",
    demandHelp: "Het aantal stuks dat klanten in dezelfde periode nodig hebben.",
    workContent: "Totale werkinhoud per stuk (optioneel)",
    workContentHelp: "De som van alle handmatige werktijden om één stuk te maken, in seconden. Geeft het minimale aantal operators of werkplekken.",
    actualCycle: "Werkelijke cyclustijd (optioneel)",
    actualCycleHelp: "De gemeten tijd van de traagste werkplek, in seconden per stuk, om met de takttijd te vergelijken.",
    minutes: "min",
    seconds: "s",
    units: "stuks",
    errors: {
      noShift: "Vul een dienstlengte in van meer dan 0 minuten.",
      breaksTooLong: "De pauzes moeten korter zijn dan de dienst.",
      tooManyHours: "De diensten komen samen op meer dan 24 uur per dag.",
    },
    takt: "Takttijd",
    perUnit: "s per stuk",
    caption: "{available} beschikbare tijd ÷ {demand}.",
    demandUnits: {
      zero: units,
      one: "{n} stuk",
      two: units,
      few: units,
      many: units,
      other: units,
    },
    minutesText: "{n} min",
    taktClock: "Takttijd (m:ss)",
    clockText: "{m}:{ss}",
    clockTextHours: "{h}:{mm}:{ss}",
    unitsPerHour: "Stuks per uur beschikbare tijd",
    available: "Netto beschikbare tijd in de periode",
    availablePerShift: "Beschikbare tijd per dienst",
    operators: "Minimaal aantal operators of werkplekken",
    capacity: "Mogelijke stuks bij de werkelijke cyclustijd",
    gap: "Werkelijke cyclustijd min takttijd",
    meetsTakt: "Kan de lijn de takttijd bijhouden?",
    verdict: {
      yes: "Ja: de cyclustijd valt binnen de takttijd",
      no: "Nee: de cyclustijd is langer dan de takttijd",
    },
    notes: {
      operators: "Minimaal aantal operators = werkinhoud ÷ takttijd, naar boven afgerond ({ratio} → {operators}). Echte lijnen hebben er meestal meer nodig, omdat werk niet perfect te balanceren is.",
      slower: "Bij deze cyclustijd maakt de lijn in de periode ongeveer {capacity}, minder dan de vraag van {demand}. Mogelijkheden zijn de cyclus verkorten, een werkplek toevoegen of de beschikbare tijd verlengen.",
      faster: "De cyclustijd laat {gap} marge per stuk over, wat kleine verstoringen opvangt.",
      plannedStops: "Alleen pauzes worden van de dienst afgetrokken. Plan je ook onderhoud of overleg, reken die dan bij de pauzes voor een realistischere takttijd.",
    },
  },
};

export default nl;
