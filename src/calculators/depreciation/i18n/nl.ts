import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DepreciationText } from "../text/en";

const nl: CalculatorTranslation<DepreciationText> = {
  content: {
    title: "Afschrijvingscalculator",
    shortTitle: "Afschrijving",
    summary: "Stel een jaarlijks afschrijvingsschema op met lineaire afschrijving, degressieve afschrijving of de methode van de som van de jaarcijfers.",
    metaTitle: "Afschrijvingscalculator – lineair, degressief en SYD",
    metaDescription:
      "Bereken de jaarlijkse afschrijving en boekwaarde lineair, degressief (dubbel of 150%) of met de som van de jaarcijfers, en bekijk het volledige schema.",
    keywords: ["afschrijving berekenen", "lineaire afschrijving", "degressieve afschrijving", "dubbel degressief", "som van de jaarcijfers", "boekwaarde", "afschrijvingsschema", "restwaarde"],
    intro: [
      "Afschrijving verdeelt de kosten van een duurzaam bedrijfsmiddel, zoals een machine, voertuig of computer, over de jaren dat het wordt gebruikt. Elk jaar wordt een deel van de kosten een last, en de boekwaarde van het bedrijfsmiddel daalt tot die de verwachte restwaarde bereikt.",
      "Deze calculator vergelijkt vier gangbare boekhoudkundige methoden. Lineair schrijft elk jaar hetzelfde bedrag af. Degressief en de som van de jaarcijfers schrijven in de eerste jaren meer af en later minder, wat past bij bedrijfsmiddelen die snel in waarde dalen.",
    ],
    howToUse: [
      "Kies de valuta en vul de aanschafkosten van het bedrijfsmiddel in.",
      "Vul de restwaarde in die je aan het eind van de gebruiksduur verwacht, of 0.",
      "Vul de gebruiksduur in hele jaren in.",
      "Kies een methode en lees de afschrijving in het eerste jaar af en het volledige schema met afschrijving, cumulatieve afschrijving en boekwaarde.",
    ],
    formulas: [
      {
        title: "Lineair",
        expression: "D = (C − S) ÷ N",
        explanation: "C is de aanschafwaarde, S de restwaarde en N de gebruiksduur in jaren. De afschrijving is elk jaar gelijk.",
      },
      {
        title: "Degressief",
        expression: "Dₖ = min(Bₖ₋₁ × f ÷ N, Bₖ₋₁ − S)",
        explanation: "Bₖ₋₁ is de boekwaarde aan het begin van jaar k en f is 2 (dubbel degressief) of 1,5. In het laatste jaar wordt afgeschreven wat er boven de restwaarde over is.",
      },
      {
        title: "Som van de jaarcijfers",
        expression: "Dₖ = (C − S) × (N − k + 1) ÷ (N(N + 1) ÷ 2)",
        explanation: "Bij een gebruiksduur van 5 jaar is de som van de cijfers 15, dus de jaarlijkse fracties zijn 5/15, 4/15, 3/15, 2/15 en 1/15.",
      },
      {
        title: "Boekwaarde",
        expression: "Bₖ = C − (D₁ + … + Dₖ)",
        explanation: "De aanschafwaarde min de cumulatieve afschrijving. Ze eindigt op de restwaarde.",
      },
    ],
    examples: [
      {
        title: "Lineair: bestelbus van $30.000, restwaarde $3.000, 5 jaar",
        steps: ["Af te schrijven bedrag = 30.000 − 3.000 = $27.000", "Jaarlijkse afschrijving = 27.000 ÷ 5 = $5.400", "Boekwaarde na jaar 5 = $3.000"],
      },
      {
        title: "Dubbel degressief: apparatuur van $12.000, restwaarde $1.500, 5 jaar",
        steps: [
          "Percentage = 2 ÷ 5 = 40% van de boekwaarde per jaar",
          "Jaar 1 = 12.000 × 0,40 = $4.800, er blijft $7.200 over",
          "Jaar 2–4 = $2.880, $1.728 en $1.036,80, er blijft $1.555,20 over",
          "Jaar 5 neemt de resterende $55,20, zodat de boekwaarde op $1.500 eindigt",
        ],
      },
      {
        title: "Som van de jaarcijfers: machine van €50.000, restwaarde €5.000, 10 jaar",
        steps: ["Som van de cijfers = 10 × 11 ÷ 2 = 55", "Jaar 1 = 45.000 × 10 ÷ 55 ≈ €8.181,82", "Jaar 2 = 45.000 × 9 ÷ 55 ≈ €7.363,64"],
      },
    ],
    assumptions: [
      "Dit zijn boekhoudkundige methoden met een volle-jaarconventie: in het eerste jaar wordt een heel jaar afgeschreven, zonder conventies voor een half jaar, kwartaal of maand.",
      "Amerikaanse fiscale afschrijving gebruikt voor de meeste bedrijfsmiddelen MACRS, beschreven in IRS Publication 946, met eigen afschrijvingsperioden, conventies en percentagetabellen. Deze tool berekent geen MACRS, Section 179 of bonusafschrijving, en andere landen hebben hun eigen fiscale regels.",
      "Bij degressieve afschrijving komt de boekwaarde nooit onder de restwaarde en wordt het resterende bedrag in het laatste jaar afgeschreven. Sommige bedrijven stappen halverwege over op lineair; deze tool doet dat niet.",
      "Dit is een schatting, geen fiscaal of boekhoudkundig advies, en is niet professioneel gecontroleerd.",
    ],
    faqs: [
      {
        question: "Welke afschrijvingsmethode moet ik gebruiken?",
        answer: "Lineair is de eenvoudigste en meest gebruikte methode voor de jaarrekening. Versnelde methoden passen bij bedrijfsmiddelen die het grootste deel van hun waarde of nut vroeg verliezen, zoals voertuigen en computers. Je accountant en de lokale regels bepalen welke je fiscaal mag gebruiken.",
      },
      {
        question: "Waarom ziet het laatste jaar bij degressief er anders uit?",
        answer: "Een vast percentage van een dalend saldo komt nooit precies op de restwaarde uit. De calculator neemt in het laatste jaar wat er boven de restwaarde over is, en dat kan groter of kleiner zijn dan het jaar ervoor.",
      },
      {
        question: "Wordt de restwaarde afgetrokken voordat het degressieve percentage wordt toegepast?",
        answer: "Nee. Het degressieve percentage wordt toegepast op de volledige boekwaarde. De restwaarde werkt alleen als ondergrens: de boekwaarde mag er niet onder komen.",
      },
    ],
    sourcesUsedFor: [
      "Dat Amerikaanse fiscale afschrijving voor de meeste bedrijfsmiddelen MACRS gebruikt, wat afwijkt van de boekhoudkundige methoden die hier worden berekend, en de algemene begrippen lineaire en degressieve afschrijving.",
    ],
  },
  text: {
    cost: "Aanschafwaarde",
    costHelp: "De aankoopprijs plus de kosten om het bedrijfsmiddel gebruiksklaar te maken, zoals levering en installatie.",
    salvage: "Restwaarde",
    salvageHelp: "Wat het bedrijfsmiddel naar verwachting waard is aan het eind van de gebruiksduur. Vul 0 in als het geen waarde meer heeft.",
    life: "Gebruiksduur",
    method: "Methode",
    methods: {
      straightLine: "Lineair",
      declining200: "Dubbel degressief (200%)",
      declining150: "Degressief 150%",
      sumOfYears: "Som van de jaarcijfers",
    },
    errors: {
      salvage: "De restwaarde moet lager zijn dan de aanschafwaarde.",
    },
    firstYear: "Afschrijving in het eerste jaar",
    caption: "{method}: aanschafwaarde {cost}, restwaarde {salvage}, {life}.",
    lifeYears: { zero: "{n} jaar", one: "{n} jaar", two: "{n} jaar", few: "{n} jaar", many: "{n} jaar", other: "{n} jaar" },
    base: "Af te schrijven bedrag (aanschafwaarde − restwaarde)",
    rateStraight: "Toegepast percentage (deel van het af te schrijven bedrag per jaar)",
    rateDeclining: "Percentage dat elk jaar op de boekwaarde wordt toegepast",
    rateSumOfYears: "Fractie van het af te schrijven bedrag in het eerste jaar",
    total: "Totale afschrijving over de gebruiksduur",
    finalYear: "Afschrijving in het laatste jaar",
    table: {
      caption: "Afschrijvingsschema",
      year: "Jaar",
      depreciation: "Afschrijving",
      accumulated: "Cumulatieve afschrijving",
      bookValue: "Boekwaarde aan het eind van het jaar",
      yearLabel: "Jaar {n}",
    },
    notes: {
      fullYear: "In het eerste jaar wordt een volledig jaar afgeschreven, ongeacht de aankoopdatum.",
      declining: "De afschrijving van elk jaar is het percentage maal de boekwaarde aan het begin van het jaar, begrensd zodat de boekwaarde nooit onder de restwaarde komt. Wat overblijft, wordt in het laatste jaar afgeschreven.",
      macrs: "Amerikaanse fiscale afschrijving gebruikt MACRS (IRS Publication 946), wat deze tool niet berekent.",
    },
  },
};

export default nl;
