import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { GcfLcmText } from "../text/en";

const nl: CalculatorTranslation<GcfLcmText> = {
  content: {
    title: "GGD- en KGV-calculator",
    shortTitle: "GGD en KGV",
    summary: "Bepaal de grootste gemene deler en het kleinste gemene veelvoud van een reeks gehele getallen, met de priemfactorontbinding.",
    metaTitle: "GGD- en KGV-calculator – grootste gemene deler en KGV",
    metaDescription:
      "Bepaal de grootste gemene deler en het kleinste gemene veelvoud van 2 tot 20 gehele getallen, met de priemfactorontbinding van elk getal.",
    keywords: ["ggd", "kgv", "grootste gemene deler", "kleinste gemene veelvoud", "priemfactorontbinding", "gemeenschappelijke noemer", "algoritme van euclides"],
    intro: [
      "De grootste gemene deler (GGD) van een reeks gehele getallen is het grootste getal waardoor elk van die getallen zonder rest deelbaar is. Het kleinste gemene veelvoud (KGV) is het kleinste positieve getal dat door elk van die getallen deelbaar is.",
      "Je hebt de GGD nodig om breuken te vereenvoudigen en het KGV om een gemeenschappelijke noemer te vinden of om te bepalen wanneer terugkerende cycli samenvallen. Vul je getallen in en je krijgt beide, samen met de priemfactoren van elk getal.",
    ],
    howToUse: [
      "Typ 2 tot 20 positieve gehele getallen, gescheiden door komma's, spaties of nieuwe regels.",
      "Elk getal mag hoogstens één biljoen (10¹²) zijn.",
      "Lees de GGD en het KGV af. Het KGV wordt exact berekend, ook als het veel cijfers heeft.",
      "Bekijk de tabel met priemfactoren om te zien waar beide uitkomsten vandaan komen.",
    ],
    formulas: [
      {
        title: "Algoritme van Euclides",
        expression: "ggd(a, b) = ggd(b, a mod b),  ggd(a, 0) = a",
        explanation: "Vervangt het grootste getal door de rest tot de rest 0 is. De laatste waarde die niet nul is, is de GGD.",
      },
      { title: "KGV van twee getallen", expression: "kgv(a, b) = a ÷ ggd(a, b) × b", explanation: "Door eerst te delen blijven de tussenuitkomsten klein." },
      {
        title: "Meer dan twee getallen",
        expression: "ggd(a, b, c) = ggd(ggd(a, b), c),  kgv(a, b, c) = kgv(kgv(a, b), c)",
        explanation: "Beide bewerkingen worden getal voor getal toegepast.",
      },
      {
        title: "Uit priemfactoren",
        expression: "GGD = product van de gemeenschappelijke priemfactoren met de laagste macht;  KGV = product van alle priemfactoren met de hoogste macht",
        explanation: "Dezelfde uitkomsten, afgelezen uit de tabel met priemfactoren.",
      },
    ],
    examples: [
      {
        title: "48 en 180",
        steps: [
          "180 mod 48 = 36, 48 mod 36 = 12, 36 mod 12 = 0, dus de GGD is 12",
          "KGV = 48 ÷ 12 × 180 = 720",
          "Controle: 48 = 2⁴ × 3 en 180 = 2² × 3² × 5, dus GGD = 2² × 3 = 12 en KGV = 2⁴ × 3² × 5 = 720",
        ],
      },
      {
        title: "84, 126 en 210",
        steps: [
          "84 = 2² × 3 × 7, 126 = 2 × 3² × 7, 210 = 2 × 3 × 5 × 7",
          "Gemeenschappelijke priemfactoren met de laagste macht: 2 × 3 × 7 = 42",
          "Alle priemfactoren met de hoogste macht: 2² × 3² × 5 × 7 = 1260",
        ],
      },
      {
        title: "35 en 64 (geen gemeenschappelijke deler)",
        steps: ["35 = 5 × 7 en 64 = 2⁶ hebben geen priemfactor gemeen", "GGD = 1, dus de getallen zijn onderling ondeelbaar", "KGV = 35 × 64 = 2240"],
      },
    ],
    assumptions: [
      "Alleen positieve gehele getallen worden geaccepteerd. Voor de GGD en het KGV van nul of negatieve getallen gelden andere afspraken, dus die worden geweigerd.",
      "Elk getal is beperkt tot 10¹² zodat de priemfactorontbinding snel blijft. Het KGV zelf wordt met exacte rekenkunde voor grote gehele getallen berekend en kan veel groter zijn.",
      "Herhaalde getallen zijn toegestaan en veranderen de uitkomsten niet; elk verschillend getal staat één keer in de tabel met priemfactoren.",
    ],
    faqs: [
      {
        question: "Is de GGD hetzelfde als de grootste gemeenschappelijke deler?",
        answer: "Ja. Grootste gemene deler, grootste gemeenschappelijke deler en het Engelse GCF, GCD of HCF zijn namen voor hetzelfde getal.",
      },
      {
        question: "Hoe hangen de GGD en het KGV samen?",
        answer:
          "Bij twee getallen is GGD × KGV gelijk aan het product van de getallen. Voor 48 en 180: 12 × 720 = 8640 = 48 × 180. Deze vuistregel geldt niet voor drie of meer getallen.",
      },
      {
        question: "Hoe gebruik ik het KGV om breuken op te tellen?",
        answer:
          "Het KGV van de noemers is de kleinste gemeenschappelijke noemer. Bij 1/12 + 1/18 is het KGV van 12 en 18 gelijk aan 36, dus schrijf je de som als 3/36 + 2/36 = 5/36.",
      },
    ],
    sourcesUsedFor: ["Het algoritme van Euclides voor de grootste gemene deler.", "Priemfactorontbinding en het kleinste gemene veelvoud."],
  },
  text: {
    numbers: "Gehele getallen",
    numbersHelp: "Vul 2 tot 20 positieve gehele getallen in, gescheiden door komma's, spaties of nieuwe regels.",
    errors: {
      empty: "Vul minstens twee getallen in.",
      tooMany: "Vul hoogstens {max} getallen in.",
      notNumber: "“{token}” is geen getal. Scheid waarden met komma's, spaties of nieuwe regels.",
      tooLarge: "“{token}” is te groot.",
    },
    needTwo: "Vul minstens twee getallen in.",
    maxCount: "Vul hoogstens {max} getallen in.",
    notWhole: "{value} is geen geheel getal. Vul alleen gehele getallen in.",
    notPositive: "{value} is niet positief. Elk getal moet minstens 1 zijn.",
    tooBig: "{value} is te groot. Elk getal mag hoogstens {max} zijn.",
    gcf: "Grootste gemene deler (GGD)",
    gcfCaption: "Ook grootste gemeenschappelijke deler genoemd (in het Engels GCF, GCD of HCF).",
    lcm: "Kleinste gemene veelvoud (KGV)",
    lcmDigits: "Aantal cijfers in het KGV",
    coprime: "De GGD is 1, dus deze getallen hebben geen gemeenschappelijke deler behalve 1 (ze zijn onderling ondeelbaar).",
    factorTable: "Priemfactorontbinding",
    numberColumn: "Getal",
    factorsColumn: "Priemfactoren",
    noPrimeFactors: "1 (geen priemfactoren)",
    isPrime: "{factors} (priemgetal)",
  },
};

export default nl;
