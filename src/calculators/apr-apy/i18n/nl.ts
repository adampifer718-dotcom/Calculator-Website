import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AprApyText } from "../text/en";

const nl: CalculatorTranslation<AprApyText> = {
  content: {
    title: "APR-naar-APY-calculator",
    shortTitle: "APR naar APY",
    summary: "Reken een nominale APR om naar de effectieve APY, of andersom, voor elke frequentie van rentebijschrijving.",
    metaTitle: "APR naar APY omrekenen – Effectieve jaarrente",
    metaDescription:
      "Reken APR om naar APY of APY naar APR bij jaarlijkse, driemaandelijkse, maandelijkse, dagelijkse of continue rentebijschrijving, met een vergelijkingstabel.",
    keywords: ["apr naar apy", "apy naar apr", "effectief jaarrendement", "nominale jaarrente", "effectieve jaarrente", "samengestelde rente", "rentebijschrijving"],
    intro: [
      "Banken noemen twee soorten jaarrente. De APR is de nominale rente: de rente per periode vermenigvuldigd met het aantal perioden. De APY is de effectieve rente: hoeveel een saldo in een jaar echt groeit zodra er rente over rente wordt berekend.",
      "Hoe vaker de rente wordt bijgeschreven, hoe verder de APY boven de APR uitkomt. Met deze tool vergelijk je een spaarrekening met een APY eerlijk met een lening met een APR.",
    ],
    howToUse: [
      "Kies of je APR naar APY of APY naar APR omrekent.",
      "Vul de rente in die je kent, als percentage.",
      "Kies hoe vaak de rente wordt bijgeschreven.",
      "Lees de omgerekende rente af, de rente per periode en de tabel met de andere frequenties.",
    ],
    formulas: [
      { title: "APR naar APY", expression: "APY = (1 + APR ÷ n)ⁿ − 1", explanation: "n is het aantal bijschrijvingsperioden per jaar en beide rentes zijn decimale getallen." },
      { title: "Continue rentebijschrijving", expression: "APY = e^APR − 1", explanation: "De limiet wanneer n onbeperkt groeit; e ≈ 2,71828." },
      { title: "APY naar APR", expression: "APR = n × ((1 + APY)^(1/n) − 1)", explanation: "De omgekeerde berekening. Bij continue bijschrijving geldt APR = ln(1 + APY)." },
      { title: "Rente per periode", expression: "i = APR ÷ n", explanation: "De rente die bij elke bijschrijving wordt toegepast." },
    ],
    examples: [
      {
        title: "6% APR met maandelijkse bijschrijving",
        steps: ["Rente per maand = 0,06 ÷ 12 = 0,005", "APY = 1,005¹² − 1", "≈ 0,061678, ofwel ongeveer 6,1678%"],
      },
      {
        title: "5% APY terugrekenen naar een maandelijkse APR",
        steps: ["APR = 12 × (1,05^(1/12) − 1)", "= 12 × 0,0040741", "≈ 4,8889%"],
      },
      {
        title: "8% APR met continue bijschrijving",
        steps: ["APY = e^0,08 − 1", "≈ 1,083287 − 1", "≈ 8,3287%"],
      },
    ],
    assumptions: [
      "De rente is een nominale rente die het hele jaar gelijk blijft, zonder stortingen, opnames of kosten.",
      "Bij Amerikaanse leningen kan de APR die onder de Truth in Lending Act (Regulation Z) wordt vermeld bepaalde kosten bevatten, waardoor hij hoger kan zijn dan de rente alleen. Deze tool rekent alleen nominale rentes om.",
      "Dagelijkse bijschrijving gebruikt 365 perioden per jaar. Banken kunnen in hun eigen berekeningen 360 of 366 dagen hanteren.",
      "Dit is geen financieel advies.",
    ],
    faqs: [
      { question: "Waarom is de APY hoger dan de APR?", answer: "Elke keer dat er rente wordt bijgeschreven, wordt de rente van de volgende periode over een hoger saldo berekend. De APY telt die extra groei mee, de APR niet. Bij jaarlijkse bijschrijving zijn ze gelijk." },
      { question: "Welke rente vergelijk ik tussen rekeningen?", answer: "Vergelijk bij sparen APY met APY, omdat daarin de rente-op-rente al is meegenomen. Vergelijk bij leningen de vermelde APR, waarin ook veel kosten zitten." },
      { question: "Maakt dagelijkse bijschrijving veel uit ten opzichte van maandelijkse?", answer: "Bij gangbare rentes maar weinig. Bij 5% APR geeft maandelijkse bijschrijving ongeveer 5,116% APY en dagelijkse ongeveer 5,127%." },
    ],
    sourcesUsedFor: [
      "Hoe het effectieve jaarrendement (APY) de rente-op-rente over een jaar weergeeft.",
      "De opmerking dat een vermelde APR van een lening de kosten van krediet meet en kan afwijken van een nominale rente.",
    ],
  },
  text: {
    direction: "Omrekenen",
    directions: { aprToApy: "APR naar APY", apyToApr: "APY naar APR" },
    rate: "Rente",
    rateHelp: "Vul de APR (nominale jaarrente) in om de APY te krijgen, of de APY (effectieve jaarrente) om de APR te krijgen.",
    compounding: "Rentebijschrijving",
    frequencies: {
      "1": "Jaarlijks",
      "2": "Halfjaarlijks",
      "4": "Per kwartaal",
      "12": "Maandelijks",
      "52": "Wekelijks",
      "365": "Dagelijks",
      continuous: "Continu",
    },
    inSentence: {
      "1": "jaarlijks",
      "2": "halfjaarlijks",
      "4": "per kwartaal",
      "12": "maandelijks",
      "52": "wekelijks",
      "365": "dagelijks",
      continuous: "continu",
    },
    apy: "Effectief jaarrendement (APY)",
    apr: "Nominale jaarrente (APR)",
    captionToApy: "{rate} APR, {frequency} bijgeschreven, geeft deze effectieve jaarrente.",
    captionToApr: "De nominale rente die, {frequency} bijgeschreven, {rate} APY oplevert.",
    periodRate: "Rente per bijschrijvingsperiode",
    periodsPerYear: "Bijschrijvingsperioden per jaar",
    difference: "Verschil tussen APY en APR",
    tableCaption: "Dezelfde rente bij andere bijschrijvingsfrequenties",
    tableColumns: { frequency: "Bijschrijving", apy: "APY", apr: "APR" },
    notes: {
      continuous: "Continue bijschrijving is de limiet van steeds vaker bijschrijven; er zijn geen afzonderlijke perioden.",
      regZ: "Bij Amerikaanse leningen kan de APR die onder Regulation Z wordt vermeld naast rente ook bepaalde kosten bevatten. Deze tool rekent alleen nominale rentes om en geeft dus niet de APR inclusief kosten van een kredietverstrekker.",
    },
  },
};

export default nl;
