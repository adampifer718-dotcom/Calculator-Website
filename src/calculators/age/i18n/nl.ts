import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AgeText } from "../text/en";

const years = { zero: "{n} jaar", one: "{n} jaar", two: "{n} jaar", few: "{n} jaar", many: "{n} jaar", other: "{n} jaar" };
const months = { zero: "{n} maanden", one: "{n} maand", two: "{n} maanden", few: "{n} maanden", many: "{n} maanden", other: "{n} maanden" };
const weeks = { zero: "{n} weken", one: "{n} week", two: "{n} weken", few: "{n} weken", many: "{n} weken", other: "{n} weken" };
const days = { zero: "{n} dagen", one: "{n} dag", two: "{n} dagen", few: "{n} dagen", many: "{n} dagen", other: "{n} dagen" };

const nl: CalculatorTranslation<AgeText> = {
  content: {
    title: "Leeftijdscalculator",
    shortTitle: "Leeftijd",
    summary: "Bereken een exacte leeftijd in jaren, maanden en dagen op elke datum, met het totaal aantal dagen en weken en de volgende verjaardag.",
    metaTitle: "Leeftijdscalculator – Leeftijd in jaren, maanden en dagen",
    metaDescription:
      "Bereken de exacte leeftijd vanaf een geboortedatum in jaren, maanden en dagen, plus het aantal dagen en weken, de volgende verjaardag en je geboortedag.",
    keywords: ["leeftijd berekenen", "hoe oud ben ik", "geboortedatum", "verjaardag", "leeftijd in dagen", "exacte leeftijd", "kalenderleeftijd"],
    intro: [
      "Vul een geboortedatum in om de exacte leeftijd van vandaag te zien, of kies een andere datum om iemands leeftijd op die dag te vinden.",
      "De calculator telt echte kalendermaanden en houdt rekening met schrikkeljaren, maanden van verschillende lengte en verjaardagen op 29 februari.",
    ],
    howToUse: [
      "Vul de geboortedatum in.",
      "Houd de datum van vandaag aan of kies een andere datum.",
      "Valt de verjaardag op 29 februari, kies dan hoe die in andere jaren wordt geteld.",
      "Lees de leeftijd, de totalen en de volgende verjaardag af.",
    ],
    formulas: [
      { title: "Jaren, maanden en dagen", expression: "Leeftijd = het grootste aantal hele maanden van geboorte tot de datum, daarna de resterende dagen", explanation: "Hele maanden worden op de kalender geteld. Is een maand korter dan de geboortedag (bijvoorbeeld de 31e), dan telt de laatste dag van die maand." },
      { title: "Totaal aantal dagen", expression: "Dagen = datum − geboortedatum", explanation: "Kalenderdagen tussen de twee datums, inclusief elke schrikkeldag." },
      { title: "Volgende verjaardag", expression: "Volgende verjaardag = geboortedatum + (voltooide jaren + 1) jaar", explanation: "Een verjaardag op 29 februari valt in gewone jaren op 28 februari of 1 maart, naar keuze." },
    ],
    examples: [
      {
        title: "Geboren op 15 mei 1990, leeftijd op 14 oktober 2026",
        steps: ["15 mei 1990 → 15 mei 2026: 36 jaar", "15 mei → 15 september: 4 maanden; 15 september → 14 oktober: 29 dagen", "Totaal: 13.301 dagen; volgende verjaardag op 15 mei 2027, over 213 dagen"],
      },
      {
        title: "Geboren op 29 februari 2000, leeftijd op 28 februari 2025",
        steps: ["2025 is geen schrikkeljaar, dus de verjaardag valt op 28 februari", "29 februari 2000 → 28 februari 2025: precies 25 jaar", "Met de regel van 1 maart zou de leeftijd 24 jaar, 11 maanden en 30 dagen zijn"],
      },
    ],
    assumptions: [
      "Datums volgen de gregoriaanse kalender, ook voor datums van vóór de invoering ervan in sommige landen.",
      "Leeftijden worden geteld in kalenderdagen in je eigen tijdzone; het tijdstip van geboorte en tijdzoneverschillen tussen plaatsen worden niet gebruikt.",
      "Is een latere maand korter dan de geboortedag, dan telt de laatste dag van die maand als maandelijkse verjaardag.",
    ],
    faqs: [
      { question: "Hoe wordt een verjaardag op 29 februari behandeld?", answer: "In gewone jaren kun je hem op 28 februari of op 1 maart laten vallen. De praktijk verschilt per land en doel, dus controleer welke regel voor jou geldt, bijvoorbeeld voor wettelijke leeftijden." },
      { question: "Waarom kunnen de maanden en dagen ongelijk lijken?", answer: "Maanden hebben 28 tot 31 dagen, dus hetzelfde aantal dagen kan, afhankelijk van de datums, een ander aantal maanden zijn." },
      { question: "Maakt de tijdzone uit?", answer: "Alleen rond middernacht. De calculator gebruikt kalenderdatums; ben je laat op de avond in een andere tijdzone geboren, dan kan je geboortedatum daar afwijken van de lokale tijd." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    birth: "Geboortedatum",
    asOf: "Leeftijd op",
    asOfHelp: "Standaard vandaag. Wijzig de datum om de leeftijd op elke gewenste dag te zien.",
    leapDay: "Verjaardag op 29 februari in andere jaren",
    leapDayOptions: { feb28: "Vieren op 28 februari", mar1: "Vieren op 1 maart" },
    leapDayHelp: "Alleen van belang als je op 29 februari bent geboren. Wetten en gewoonten verschillen.",
    units: { years, months, weeks, days },
    ymd: "{years}, {months} en {days}",
    weeksDays: "{weeks} en {days}",
    orderError: "Deze datum moet op of na de geboortedatum liggen.",
    age: "Leeftijd",
    ageCaption: "Geboren op {birth}; leeftijd op {asOf}.",
    totalMonths: "Totaal aantal maanden",
    totalWeeks: "Totaal aantal weken",
    totalDays: "Totaal aantal dagen",
    nextBirthday: "Volgende verjaardag",
    daysToBirthday: "Dagen tot de volgende verjaardag",
    bornOn: "Dag van de week waarop je bent geboren",
    weekdays: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
    birthdayToday: "Gefeliciteerd! Vandaag is het de verjaardag van de geboortedatum.",
    note: "De leeftijd gebruikt kalenderdatums in je eigen tijdzone; met het tijdstip van geboorte wordt geen rekening gehouden.",
  },
};

export default nl;
