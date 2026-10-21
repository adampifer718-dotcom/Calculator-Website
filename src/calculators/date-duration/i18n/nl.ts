import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DateDurationText } from "../text/en";

const years = { zero: "{n} jaar", one: "{n} jaar", two: "{n} jaar", few: "{n} jaar", many: "{n} jaar", other: "{n} jaar" };
const months = { zero: "{n} maanden", one: "{n} maand", two: "{n} maanden", few: "{n} maanden", many: "{n} maanden", other: "{n} maanden" };
const weeks = { zero: "{n} weken", one: "{n} week", two: "{n} weken", few: "{n} weken", many: "{n} weken", other: "{n} weken" };
const days = { zero: "{n} dagen", one: "{n} dag", two: "{n} dagen", few: "{n} dagen", many: "{n} dagen", other: "{n} dagen" };

const nl: CalculatorTranslation<DateDurationText> = {
  content: {
    title: "Datumverschilcalculator",
    shortTitle: "Dagen tussen datums",
    summary: "Tel de dagen, weken, maanden en jaren tussen twee datums, inclusief werkdagen en weekenddagen.",
    metaTitle: "Dagen tussen twee datums berekenen – Duur en werkdagen",
    metaDescription:
      "Tel de dagen tussen twee datums, met de duur in jaren, maanden en dagen, in weken, werkdagen en weekenddagen. Tel desgewenst de einddatum mee.",
    keywords: ["dagen tussen datums", "datumverschil", "hoeveel dagen nog", "dagen tellen", "tijdsduur berekenen", "werkdagen", "weken tussen datums"],
    intro: [
      "Bereken hoeveel dagen er tussen twee datums liggen, voor een deadline, een opzegtermijn, een reis of een aftelling.",
      "Het resultaat zie je ook in jaren, maanden en dagen, in weken en als werkdagen en weekenddagen. Kies of de einddatum zelf meetelt.",
    ],
    howToUse: [
      "Vul de begindatum in.",
      "Vul de einddatum in (standaard vandaag).",
      "Kies of de einddatum als volledige dag meetelt.",
      "Lees het aantal dagen en de andere uitsplitsingen af.",
    ],
    formulas: [
      { title: "Dagen tussen datums", expression: "Dagen = einddatum − begindatum (+ 1 als de einddatum meetelt)", explanation: "Kalenderdagen, inclusief 29 februari in schrikkeljaren." },
      { title: "Jaren, maanden en dagen", expression: "Hele kalendermaanden vanaf de begindatum, daarna de resterende dagen", explanation: "Maanden worden op de kalender geteld, dus hun lengte (28 tot 31 dagen) wordt meegenomen." },
      { title: "Werkdagen", expression: "Werkdagen = dagen die geen weekenddagen zijn", explanation: "Kies een weekend van zaterdag–zondag of vrijdag–zaterdag. Feestdagen worden niet afgetrokken; doe dat zelf voor zakelijke werkdagen." },
    ],
    examples: [
      {
        title: "1 januari tot 14 oktober 2026",
        steps: ["31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 dagen (januari–september) + 13 dagen = 286 dagen", "286 dagen = 40 weken en 6 dagen; 9 maanden en 13 dagen", "204 van die dagen vallen op maandag tot en met vrijdag"],
      },
      {
        title: "1 februari tot 1 maart 2024, beide datums meegeteld",
        steps: ["2024 is een schrikkeljaar, dus februari heeft 29 dagen", "29 dagen van 1 februari tot 1 maart, plus de einddatum = 30 dagen", "22 werkdagen en 8 weekenddagen"],
      },
    ],
    assumptions: [
      "Datums zijn kalenderdagen in de gregoriaanse kalender; tijdstippen en tijdzones worden niet gebruikt.",
      "Werkdagen sluiten het gekozen weekend uit (zaterdag–zondag of vrijdag–zaterdag); feestdagen worden niet uitgesloten.",
      "Uren zijn dagen × 24, zonder rekening te houden met de zomertijd.",
    ],
    faqs: [
      { question: "Moet ik de einddatum meetellen?", answer: "Niet bij vragen als “hoe lang nog”, zoals opzegtermijnen of leeftijden. Tel hem wel mee als zowel de eerste als de laatste dag bij de periode horen, zoals een hotelverblijf geteld in dagen of het programma van een evenement." },
      { question: "Hoe wordt met schrikkeljaren omgegaan?", answer: "Elke 29 februari tussen de datums wordt meegeteld, dus periodes over een schrikkeldag heen zijn een dag langer." },
      { question: "Hoe tel ik zakelijke werkdagen?", answer: "Gebruik het aantal werkdagen en trek daar de feestdagen van af die in jouw land op een doordeweekse dag vallen." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    start: "Begindatum",
    end: "Einddatum",
    endHelp: "Standaard vandaag.",
    includeEnd: "Einddatum meetellen",
    includeEndOptions: { no: "Nee (verschil tussen de datums)", yes: "Ja (beide datums meegeteld)" },
    includeEndHelp: "Tel de einddatum mee als je de dagen van een evenement telt, zoals een festival van 3 dagen van vrijdag tot en met zondag.",
    units: { years, months, weeks, days },
    ymd: "{years}, {months} en {days}",
    weeksDays: "{weeks} en {days}",
    totalDays: "Duur in dagen",
    caption: "Van {start} tot {end}.",
    calendar: "In jaren, maanden en dagen",
    inWeeks: "In weken en dagen",
    weekdays: "Werkdagen",
    weekend: "Weekend",
    weekendOptions: { satSun: "Zaterdag en zondag", friSat: "Vrijdag en zaterdag" },
    weekendHelp: "Kies de dagen die in jouw land of op je werk als weekend gelden.",
    weekendDays: "Weekenddagen",
    hours: "Uren",
    reversed: "De einddatum ligt vóór de begindatum, dus de datums zijn omgewisseld.",
    weekdaysNote: "Werkdagen sluiten de gekozen weekenddagen uit, maar geen feestdagen.",
    hoursNote: "Uren gaan uit van dagen van 24 uur; de overgang naar zomer- of wintertijd is niet meegenomen.",
  },
};

export default nl;
