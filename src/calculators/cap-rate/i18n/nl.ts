import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CapRateText } from "../text/en";

const nl: CalculatorTranslation<CapRateText> = {
  content: {
    title: "Kapitalisatievoetcalculator (cap rate)",
    shortTitle: "Kapitalisatievoet",
    summary: "Bereken de kapitalisatievoet (cap rate) van een huurpand uit de inkomsten, leegstand en exploitatiekosten, of de waarde uit een gewenste cap rate.",
    metaTitle: "Kapitalisatievoetcalculator – NOI en vastgoedwaarde",
    metaDescription:
      "Bereken de cap rate van een huurpand uit huur, leegstand en exploitatiekosten, of schat de waarde uit het netto exploitatieresultaat en een gewenste cap rate.",
    keywords: ["cap rate berekenen", "kapitalisatievoet", "netto exploitatieresultaat", "NOI", "huurpand", "inkomstenbenadering", "vastgoedbelegging", "vastgoedwaarde"],
    intro: [
      "De kapitalisatievoet, of cap rate, vergelijkt de inkomsten die een pand oplevert met wat het waard is. Het is het netto exploitatieresultaat (NOI) over één jaar gedeeld door de waarde of prijs van het pand, uitgedrukt als percentage.",
      "Beleggers gebruiken hem om panden snel met elkaar te vergelijken, ongeacht hoe ze gefinancierd zijn. Vul de huur, leegstand en lopende kosten in om de cap rate te krijgen, of wissel van modus om een netto exploitatieresultaat en een gewenste cap rate om te zetten in een indicatieve waarde.",
    ],
    howToUse: [
      "Kies of je de cap rate of de waarde wilt berekenen, en kies de valuta.",
      "Vul voor de cap rate de waarde of vraagprijs van het pand in, de bruto jaarhuur, de leegstandsreserve en de jaarlijkse exploitatiekosten.",
      "Vul voor de waarde het netto exploitatieresultaat in en de cap rate die je nastreeft.",
      "Lees de cap rate of waarde af, samen met de effectieve bruto-inkomsten, de NOI en de kostenratio.",
    ],
    formulas: [
      {
        title: "Effectieve bruto-inkomsten",
        expression: "EGI = bruto-inkomsten × (1 − leegstand)",
        explanation: "Leegstand is het deel van de inkomsten dat verloren gaat aan lege eenheden en onbetaalde huur.",
      },
      {
        title: "Netto exploitatieresultaat",
        expression: "NOI = EGI − exploitatiekosten",
        explanation: "Exploitatiekosten omvatten geen hypotheeklasten, afschrijving en inkomstenbelasting.",
      },
      {
        title: "Cap rate",
        expression: "cap rate = NOI ÷ waarde × 100%",
        explanation: "Het jaarlijkse rendement dat het pand een koper zonder financiering zou opleveren, vóór belasting.",
      },
      {
        title: "Waarde uit een cap rate",
        expression: "waarde = NOI ÷ cap rate",
        explanation: "Deel door het percentage als decimaal getal, dus 6% is 0,06.",
      },
    ],
    examples: [
      {
        title: "Twee-onder-een-kappand van $450.000",
        steps: ["EGI = 48.000 × 0,95 = $45.600", "NOI = 45.600 − 16.000 = $29.600", "Cap rate = 29.600 ÷ 450.000 ≈ 6,58%"],
      },
      {
        title: "Klein appartementencomplex met een vraagprijs van $720.000",
        steps: ["EGI = 62.400 × 0,92 = $57.408", "NOI = 57.408 − 21.500 = $35.908", "Cap rate = 35.908 ÷ 720.000 ≈ 4,99%"],
      },
      {
        title: "Waarde van een winkelpand met $41.250 NOI bij een cap rate van 5,75%",
        steps: ["Waarde = 41.250 ÷ 0,0575", "≈ $717.391,30"],
      },
    ],
    assumptions: [
      "De cap rate houdt geen rekening met financiering, inkomstenbelasting, investeringen in het pand en toekomstige veranderingen in huur of waarde. Het is een momentopname van de inkomsten van één jaar.",
      "De uitkomst hangt volledig af van de inkomsten en kosten die je invult. Gebruik realistische exploitatiekosten voor een heel jaar, inclusief beheer en onderhoud, ook als je dat zelf doet.",
      "Een negatief netto exploitatieresultaat is toegestaan en geeft een negatieve cap rate, wat betekent dat het pand zijn lopende kosten niet dekt.",
      "Dit is een schatting, geen beleggings- of financieel advies, en is niet professioneel gecontroleerd.",
    ],
    faqs: [
      {
        question: "Wat is een goede cap rate?",
        answer: "Er is geen vast goed getal. Cap rates hangen af van de locatie, het soort pand, de staat ervan en de rentestand. Een hogere cap rate betekent meer inkomsten voor de prijs, maar meestal ook meer risico of minder verwachte groei.",
      },
      {
        question: "Waarom horen hypotheeklasten niet bij de exploitatiekosten?",
        answer: "De cap rate beschrijft het pand, niet de lening van de koper. Door de financiering weg te laten kun je panden eerlijk vergelijken. Wil je de lening meenemen, kijk dan naar het cash-on-cashrendement of de ROI.",
      },
      {
        question: "Hoe verhoogt een lagere cap rate de waarde?",
        answer: "De waarde is de NOI gedeeld door de cap rate. Bij dezelfde NOI van $40.000 geeft een cap rate van 5% een waarde van $800.000 en een cap rate van 8% een waarde van $500.000, dus kopers die lagere cap rates accepteren, betalen meer.",
      },
    ],
    sourcesUsedFor: [
      "De kapitalisatievoet als verhouding tussen netto exploitatieresultaat en waarde, en waarde = inkomsten ÷ voet.",
      "Het verband I = R × V tussen netto exploitatieresultaat, de totale kapitalisatievoet en de waarde.",
    ],
  },
  text: {
    mode: "Bereken",
    modes: { rate: "Cap rate uit inkomsten", value: "Waarde uit een gewenste cap rate" },
    value: "Waarde of prijs van het pand",
    gross: "Bruto jaarlijkse huurinkomsten",
    grossHelp: "Alle huur die het pand in een jaar zou opbrengen bij volledige verhuur, plus andere inkomsten zoals parkeren of wasruimte.",
    vacancy: "Leegstand en huurderving",
    vacancyHelp: "Het deel van de bruto-inkomsten dat je verwacht te verliezen aan lege eenheden en onbetaalde huur.",
    expenses: "Jaarlijkse exploitatiekosten",
    expensesHelp: "Onroerendgoedbelasting, verzekering, onderhoud, beheer, nutsvoorzieningen die jij betaalt en vergelijkbare lopende kosten. Tel hypotheeklasten, afschrijving en inkomstenbelasting niet mee.",
    noi: "Netto exploitatieresultaat (NOI) per jaar",
    noiHelp: "Inkomsten na leegstand en exploitatiekosten, vóór hypotheeklasten en inkomstenbelasting.",
    targetRate: "Gewenste cap rate",
    errors: {
      noiPositive: "Het netto exploitatieresultaat moet groter zijn dan 0 om een waarde te berekenen.",
    },
    capRate: "Cap rate",
    capCaption: "Netto exploitatieresultaat van {noi} bij een waarde van {value}.",
    propertyValue: "Indicatieve waarde van het pand",
    valueCaption: "{noi} netto exploitatieresultaat gekapitaliseerd tegen {rate}.",
    egi: "Effectieve bruto-inkomsten",
    noiResult: "Netto exploitatieresultaat (NOI)",
    monthlyNoi: "NOI per maand",
    expenseRatio: "Kostenratio (van de effectieve bruto-inkomsten)",
    grm: "Bruto huurfactor (waarde ÷ bruto-inkomsten)",
    valuePerPoint: "Waardeverandering als de cap rate 1 procentpunt lager is",
    notes: {
      negative: "De exploitatiekosten zijn hoger dan de inkomsten na leegstand, dus de NOI en de cap rate zijn negatief: het pand dekt zijn lopende kosten niet.",
      financing: "De cap rate houdt geen rekening met financiering, inkomstenbelasting en toekomstige waardeveranderingen.",
    },
  },
};

export default nl;
