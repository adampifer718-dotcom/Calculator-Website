import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DateAddText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const nl: CalculatorTranslation<DateAddText> = {
  content: {
    title: "Dagen optellen of aftrekken bij een datum",
    shortTitle: "Dagen optellen of aftrekken",
    summary: "Vind de datum een aantal jaren, maanden, weken en dagen voor of na een begindatum, met de weekdag en het aantal kalenderdagen ertussen.",
    metaTitle: "Dagen optellen of aftrekken – Datum plus dagen",
    metaDescription:
      "Tel jaren, maanden, weken en dagen op bij een datum of trek ze ervan af. Zie de nieuwe datum, de weekdag en hoeveel kalenderdagen er tussen de datums liggen.",
    keywords: ["dagen optellen bij datum", "dagen aftrekken van datum", "datumcalculator", "dagen vanaf vandaag", "datum plus dagen", "maanden optellen", "termijn berekenen"],
    intro: [
      "Deadlines, opzegtermijnen, garanties en vervaldatums worden vaak uitgedrukt als \"90 dagen na\" of \"6 maanden na\" een datum. Deze calculator vindt die datum voor je, vooruit of terug in de tijd.",
      "Je ziet ook de dag van de week en hoeveel kalenderdagen er tussen de begindatum en het resultaat liggen. Dat is handig als een termijn in maanden is vastgelegd, maar je het aantal dagen nodig hebt.",
    ],
    howToUse: [
      "Kies de begindatum. Bij het laden van de pagina staat die op vandaag.",
      "Kies Optellen om vooruit te gaan in de tijd of Aftrekken om terug te gaan.",
      "Vul een willekeurige combinatie van jaren, maanden, weken en dagen in. Laat de rest op 0 staan.",
      "Lees de nieuwe datum af, met de weekdag en het aantal dagen tussen de twee datums.",
    ],
    formulas: [
      {
        title: "Jaren en maanden",
        expression: "datum₁ = begin ± (12 × jaren + maanden) maanden",
        explanation: "De maand verandert en de dag blijft gelijk. Bestaat die dag niet in de nieuwe maand, dan wordt de laatste dag van de maand gebruikt.",
      },
      { title: "Weken en dagen", expression: "resultaat = datum₁ ± (7 × weken + dagen) dagen", explanation: "Daarna worden hele dagen op de kalender geteld, zo nodig over maand- en jaargrenzen heen." },
      { title: "Dagen ertussen", expression: "N = |resultaat − begin| in kalenderdagen", explanation: "De begindatum telt niet mee, dus één dag na maandag is dinsdag en N = 1." },
    ],
    examples: [
      {
        title: "Eén maand na 31 januari 2026",
        steps: ["Februari 2026 heeft 28 dagen, dus 31 februari bestaat niet", "De datum schuift naar de laatste dag van februari: 28 februari 2026, een zaterdag", "Dat is 28 kalenderdagen na de begindatum"],
      },
      {
        title: "Een termijn van 90 dagen vanaf 15 oktober 2026",
        steps: ["Er resten 16 dagen in oktober, dan 30 in november en 31 in december: 77 dagen tot 31 december", "Nog 13 dagen brengen je op 13 januari 2027", "13 januari 2027 is een woensdag"],
      },
      {
        title: "Tweeënhalf jaar vóór 15 augustus 2024",
        steps: ["2 jaar en 6 maanden = 30 maanden", "30 maanden vóór augustus 2024 is februari 2022, en de 15e bestaat in elke maand", "15 februari 2022 was een dinsdag, 912 kalenderdagen eerder"],
      },
    ],
    assumptions: [
      "Datums volgen de gregoriaanse kalender, ook voor jaren van vóór de invoering ervan in een bepaald land.",
      "Jaren en maanden worden vóór weken en dagen toegepast. Bestaat de begindag niet in de doelmaand, dan wordt de laatste dag van die maand gebruikt, dus 31 maart min 1 maand is 28 of 29 februari.",
      "Elke dag telt mee, ook weekends en feestdagen. Regels voor werkdagen bij wettelijke of contractuele termijnen kunnen afwijken.",
      "Resultaten zijn beperkt tot de jaren 1000 tot en met 9999.",
    ],
    faqs: [
      {
        question: "Waarom geeft één maand optellen bij 31 januari 28 februari?",
        answer: "Februari heeft geen 31e dag, dus de calculator gebruikt de laatste dag van februari in plaats van door te lopen naar maart. Deze regel voor het einde van de maand is de gangbare afspraak bij maandtermijnen.",
      },
      {
        question: "Is 1 maand optellen hetzelfde als 30 dagen optellen?",
        answer: "Nee. Een maand is een kalendermaand van 28 tot 31 dagen. Heb je een exact aantal dagen nodig, vul dat dan in het veld Dagen in.",
      },
      {
        question: "Telt de begindatum mee?",
        answer: "Nee. Het aantal dagen ertussen telt de dagen die je opschuift, dus de begindatum zelf telt niet mee. Tel er 1 bij op als je zowel de eerste als de laatste dag wilt meetellen.",
      },
    ],
    sourcesUsedFor: ["De gregoriaanse schrikkeljaarregel die wordt gebruikt voor maandlengtes en het tellen van dagen."],
  },
  text: {
    start: "Begindatum",
    startHelp: "Standaard vandaag.",
    operation: "Bewerking",
    operations: { add: "Optellen", subtract: "Aftrekken" },
    years: "Jaren",
    months: "Maanden",
    monthsHelp: "Jaren en maanden worden eerst toegepast. Bestaat de dag niet in de nieuwe maand, dan wordt de laatste dag van die maand gebruikt (31 januari + 1 maand = 28 of 29 februari).",
    weeks: "Weken",
    days: "Dagen",
    errors: {
      outOfRange: "Het resultaat valt buiten de ondersteunde datums ({min} tot {max}). Gebruik een kleiner aantal.",
    },
    result: "Nieuwe datum",
    captionAdd: "{start} plus {amount}.",
    captionSubtract: "{start} min {amount}.",
    units: {
      years: forms("{n} jaar", "{n} jaar"),
      months: forms("{n} maand", "{n} maanden"),
      weeks: forms("{n} week", "{n} weken"),
      days: forms("{n} dag", "{n} dagen"),
    },
    separator: ", ",
    weekday: "Dag van de week",
    weekdayNames: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
    totalDays: "Kalenderdagen tussen de datums",
    inWeeks: "In weken en dagen",
    weeksDays: "{weeks} en {days}",
    isoDate: "Resultaat in ISO-notatie",
    notes: {
      clamped: "De begindag bestaat niet in de bereikte maand, dus de laatste dag van die maand is gebruikt.",
      calendar: "Datums volgen de gregoriaanse kalender, met elke 4 jaar een schrikkeljaar, behalve eeuwjaren die niet deelbaar zijn door 400.",
    },
  },
};

export default nl;
