import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TimeCalculatorText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const nl: CalculatorTranslation<TimeCalculatorText> = {
  content: {
    title: "Tijdsduurcalculator",
    shortTitle: "Tijdsduur",
    summary: "Tel twee tijdsduren in dagen, uren, minuten en seconden bij elkaar op of trek ze af, en zie het genormaliseerde resultaat plus totalen in uren, minuten en seconden.",
    metaTitle: "Tijd optellen of aftrekken – uren en minuten",
    metaDescription:
      "Tel tijdsduren in dagen, uren, minuten en seconden op of trek ze af. Je krijgt een netjes genormaliseerd resultaat en het totaal in decimale uren, minuten en seconden.",
    keywords: ["tijd berekenen", "uren en minuten optellen", "tijd aftrekken", "tijdsduur berekenen", "uren minuten seconden", "totaal aantal uren", "tijd optellen"],
    intro: [
      "Tijd met de hand optellen is lastig, omdat het niet per tien gaat: 60 seconden vormen een minuut, 60 minuten een uur en 24 uur een dag. Deze calculator doet het doorschuiven voor je.",
      "Vul twee tijdsduren in, kies of je ze optelt of aftrekt, en lees het resultaat af in dagen, uren, minuten en seconden, samen met dezelfde hoeveelheid als één totaal in uren, minuten of seconden.",
    ],
    howToUse: [
      "Vul de eerste tijdsduur in. Vul alleen de delen in die je nodig hebt en laat de rest op 0 staan.",
      "Kies Optellen of Aftrekken.",
      "Vul de tweede tijdsduur in.",
      "Lees het genormaliseerde resultaat af. De totalen eronder zijn handig voor urenstaten en spreadsheets die decimale uren nodig hebben.",
    ],
    formulas: [
      {
        title: "Tijdsduur in seconden",
        expression: "T = dagen × 86.400 + uren × 3600 + minuten × 60 + seconden",
        explanation: "Elke tijdsduur wordt eerst omgezet naar seconden.",
      },
      { title: "Resultaat", expression: "R = T₁ + T₂   of   R = T₁ − T₂", explanation: "Een negatieve R betekent dat de tweede tijdsduur langer is dan de eerste." },
      {
        title: "Normaliseren",
        expression: "dagen = ⌊|R| ÷ 86.400⌋, uren = ⌊rest ÷ 3600⌋, minuten = ⌊rest ÷ 60⌋, seconden = wat overblijft",
        explanation: "De rest na elke stap schuift door naar de eerstvolgende kleinere eenheid.",
      },
    ],
    examples: [
      {
        title: "Twee werkblokken op één dag",
        steps: [
          "7 u 45 min = 27.900 s en 2 u 30 min = 9000 s",
          "27.900 + 9000 = 36.900 s",
          "36.900 s = 10 uur en 900 s = 10 uur, 15 minuten (10,25 uur)",
        ],
      },
      {
        title: "Resterende tijd van een klus van 3 dagen en 4 uur na 1 dag en 20,5 uur",
        steps: [
          "3 d 4 u = 273.600 s; 1 d 20 u 30 min = 160.200 s",
          "273.600 − 160.200 = 113.400 s",
          "113.400 s = 1 dag (86.400 s) + 27.000 s = 1 dag, 7 uur, 30 minuten",
        ],
      },
      {
        title: "Twee rondetijden optellen",
        steps: [
          "48 min 37 s = 2917 s en 51 min 52 s = 3112 s",
          "2917 + 3112 = 6029 s",
          "6029 s = 1 uur (3600 s) + 2429 s = 1 uur, 40 minuten, 29 seconden",
        ],
      },
    ],
    assumptions: [
      "Elke dag telt precies 24 uur, elk uur 60 minuten en elke minuut 60 seconden. Schrikkelseconden en de overgang naar zomer- of wintertijd worden genegeerd.",
      "Deze tool werkt met tijdsduren, niet met kloktijden of datums. Gebruik de datumverschilcalculator om de dagen tussen twee datums te tellen.",
      "Fracties van een seconde worden afgerond op de dichtstbijzijnde milliseconde.",
    ],
    faqs: [
      {
        question: "Hoe reken ik minuten om naar decimale uren?",
        answer: "Deel de minuten door 60. Bijvoorbeeld 45 minuten is 45 ÷ 60 = 0,75 uur, dus 7 uur en 45 minuten is 7,75 uur. De calculator toont dit totaal voor je.",
      },
      {
        question: "Kan ik meer dan 60 minuten invullen?",
        answer: "Ja. Vul bijvoorbeeld 135 minuten in en het resultaat wordt doorgeschoven naar 2 uur, 15 minuten.",
      },
      {
        question: "Wat betekent een negatief resultaat?",
        answer: "Als je een langere tijdsduur van een kortere aftrekt, komt het verschil onder nul uit. Het resultaat krijgt dan een minteken, zodat je ziet hoeveel langer de tweede is.",
      },
    ],
    sourcesUsedFor: ["De minuut (60 s), het uur (3600 s) en de dag (86.400 s) als eenheden die naast het SI zijn toegestaan."],
  },
  text: {
    fieldLabels: {
      first: { days: "Dagen (eerste tijdsduur)", hours: "Uren (eerste tijdsduur)", minutes: "Minuten (eerste tijdsduur)", seconds: "Seconden (eerste tijdsduur)" },
      second: { days: "Dagen (tweede tijdsduur)", hours: "Uren (tweede tijdsduur)", minutes: "Minuten (tweede tijdsduur)", seconds: "Seconden (tweede tijdsduur)" },
    },
    partsHelp: "Laat een deel op 0 staan als je het niet nodig hebt. Waarden boven 24 uur, 60 minuten of 60 seconden mogen en worden doorgeschoven.",
    operation: "Bewerking",
    operations: { add: "Optellen (+)", subtract: "Aftrekken (−)" },
    operationHelp: "Bij aftrekken gaat de tweede tijdsduur van de eerste af. Het resultaat is negatief als de tweede langer is.",
    result: "Resultaat",
    caption: "{first} {op} {second}.",
    opSymbols: { add: "+", subtract: "−" },
    units: {
      days: forms("{n} dag", "{n} dagen"),
      hours: forms("{n} uur", "{n} uur"),
      minutes: forms("{n} minuut", "{n} minuten"),
      seconds: forms("{n} seconde", "{n} seconden"),
    },
    separator: ", ",
    negative: "−{duration}",
    totalDays: "Totaal in dagen",
    totalHours: "Totaal in uren",
    totalMinutes: "Totaal in minuten",
    totalSeconds: "Totaal in seconden",
    notes: {
      negative: "De tweede tijdsduur is langer dan de eerste, dus het resultaat is negatief.",
      days: "Een dag telt als precies 24 uur. De overgang naar zomer- of wintertijd en schrikkelseconden zijn niet meegenomen.",
      rounding: "Het resultaat wordt afgerond op een duizendste seconde.",
    },
  },
};

export default nl;
