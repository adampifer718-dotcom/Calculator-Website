import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { NpvText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const nl: CalculatorTranslation<NpvText> = {
  content: {
    title: "NCW- en IRR-calculator",
    shortTitle: "NCW en IRR",
    summary:
      "Disconteer een reeks jaarlijkse kasstromen om de netto contante waarde, de interne rentabiliteit, de rentabiliteitsindex en de verdisconteerde terugverdientijd te vinden.",
    metaTitle: "NCW- en IRR-calculator – netto contante waarde van kasstromen",
    metaDescription:
      "Bereken de netto contante waarde en de interne rentabiliteit (IRR) van een investering uit de jaarlijkse kasstromen, met rentabiliteitsindex en terugverdientijd.",
    keywords: ["NCW berekenen", "netto contante waarde", "IRR berekenen", "interne rentabiliteit", "verdisconteerde kasstromen", "rentabiliteitsindex", "terugverdientijd", "investeringsbeslissing"],
    intro: [
      "Geld dat je later ontvangt is minder waard dan hetzelfde bedrag vandaag, omdat je het geld van vandaag in de tussentijd kunt beleggen. De netto contante waarde (NCW) zet elke toekomstige kasstroom van een project om naar de waarde van vandaag door haar te disconteren tegen je vereiste rendement, en trekt daarna af wat je vooraf betaalt.",
      "Een positieve NCW betekent dat het project naar verwachting meer oplevert dan dat percentage; een negatieve NCW betekent dat het minder oplevert. De interne rentabiliteit (IRR) is het percentage waarbij de NCW precies nul is, dus die toont het eigen jaarlijkse rendement van het project. Deze pagina behandelt beide, dus er is geen aparte IRR-calculator.",
    ],
    howToUse: [
      "Kies de valuta en vul de initiële investering in als positief bedrag.",
      "Vul de netto kasstroom per jaar in, te beginnen met jaar 1. Gebruik een minteken voor een jaar met een netto uitgaande kasstroom, zoals een grote reparatie.",
      "Vul de disconteringsvoet in: het jaarlijkse rendement dat je vereist of je kapitaalkosten.",
      "Lees de NCW, de IRR, de rentabiliteitsindex en de verdisconteerde terugverdientijd af, en bekijk de tabel per jaar.",
    ],
    formulas: [
      {
        title: "Netto contante waarde",
        expression: "NCW = −C₀ + Σ CFₜ ÷ (1 + r)ᵗ",
        explanation: "C₀ is de initiële investering, CFₜ de kasstroom aan het eind van jaar t en r de disconteringsvoet als decimaal getal. De som loopt van jaar 1 tot het laatste jaar.",
      },
      {
        title: "Interne rentabiliteit",
        expression: "−C₀ + Σ CFₜ ÷ (1 + IRR)ᵗ = 0",
        explanation:
          "Gevonden met bisectie tussen −99,99% en 1.000% per jaar. Als de kasstromen meer dan één keer van teken wisselen, kunnen er meerdere oplossingen zijn, en dan wordt er geen IRR gegeven.",
      },
      {
        title: "Rentabiliteitsindex",
        expression: "PI = (Σ CFₜ ÷ (1 + r)ᵗ) ÷ C₀",
        explanation: "De contante waarde die je ontvangt per geïnvesteerde eenheid. Een PI boven 1 komt overeen met een positieve NCW.",
      },
      {
        title: "Verdisconteerde terugverdientijd",
        expression: "k + (−cumulatiefₖ) ÷ verdisconteerde CFₖ₊₁",
        explanation: "k is het laatste jaar waarin de cumulatieve verdisconteerde waarde nog negatief is. De breuk gaat ervan uit dat de kasstroom van het volgende jaar gelijkmatig binnenkomt.",
      },
    ],
    examples: [
      {
        title: "Machine van $ 50.000 met vijf jaar kasstromen bij 8%",
        steps: [
          "Verdisconteerde waarden: 12.000 ÷ 1,08 ≈ 11.111,11; 15.000 ÷ 1,08² ≈ 12.860,08; 18.000 ÷ 1,08³ ≈ 14.288,98; 20.000 ÷ 1,08⁴ ≈ 14.700,60; 9.000 ÷ 1,08⁵ ≈ 6.125,25",
          "Contante waarde van de kasstromen ≈ $ 59.086,02",
          "NCW = 59.086,02 − 50.000 ≈ $ 9.086,02, en de IRR is ongeveer 14,60%",
        ],
      },
      {
        title: "Project van € 250.000 bij een vereist rendement van 12%",
        steps: [
          "Contante waarde van de vijf kasstromen ≈ € 246.211,12",
          "NCW = 246.211,12 − 250.000 ≈ −€ 3.788,88",
          "De IRR is ongeveer 11,38%, net onder het vereiste rendement van 12%, en daarom is de NCW negatief",
        ],
      },
      {
        title: "Kasstromen die twee keer van teken wisselen",
        steps: [
          "NCW = −1.000 + 3.000 ÷ 1,1 − 2.200 ÷ 1,1² = −1.000 + 2.727,27 − 1.818,18 ≈ −$ 90,91",
          "Zowel 27,64% als 72,36% maken de NCW nul, dus de IRR wordt als niet uniek weergegeven",
        ],
      },
    ],
    assumptions: [
      "Elke kasstroom komt binnen aan het eind van zijn jaar, en de initiële investering wordt aan het begin betaald (jaar 0). Een timing halverwege het jaar of per maand geeft een andere NCW.",
      "Voor elk jaar wordt één constante disconteringsvoet gebruikt. Belastingen, inflatie en financieringskosten tellen alleen mee als je ze al in de kasstromen of het percentage hebt verwerkt.",
      "De IRR gaat ervan uit dat de kasstromen maar één keer van teken wisselen. Bij meerdere tekenwisselingen kan de IRR meer dan één waarde hebben of geen enkele, en is de NCW de betrouwbaardere maatstaf.",
      "Dit is een schatting om opties te vergelijken, geen beleggings- of financieel advies, en is niet professioneel gecontroleerd.",
    ],
    faqs: [
      {
        question: "Welke disconteringsvoet moet ik gebruiken?",
        answer:
          "Gebruik het rendement dat je elders kunt halen met een investering met een vergelijkbaar risico, of de kapitaalkosten van je organisatie. Een hoger percentage verlaagt de waarde van latere kasstromen, dus riskantere projecten krijgen meestal een hoger percentage.",
      },
      {
        question: "Waarom kunnen IRR en NCW elkaar tegenspreken als ik projecten vergelijk?",
        answer:
          "De IRR is een percentage en negeert de omvang van het project, terwijl de NCW een bedrag is. Een klein project kan een hogere IRR hebben maar minder waarde toevoegen dan een groter project. Als de twee projecten verschillend rangschikken, gaat de voorkeur meestal uit naar de NCW bij je vereiste rendement.",
      },
      {
        question: "Waarom wordt de IRR als niet uniek weergegeven?",
        answer:
          "Als de kasstromen meer dan één keer wisselen tussen uitgaand en inkomend, bijvoorbeeld door hoge opruimkosten aan het eind, kan de NCW bij meerdere percentages door nul gaan. Geen enkel percentage beschrijft het project dan, dus de calculator geeft alleen de NCW.",
      },
    ],
    sourcesUsedFor: [
      "De definities van netto contante waarde en interne rentabiliteit en de beslisregels voor aanvaarden of verwerpen bij elk van beide.",
      "De disconteringsformule voor de NCW en de definitie van de IRR als het percentage waarbij de NCW nul is.",
    ],
  },
  text: {
    initial: "Initiële investering",
    initialHelp: "Het bedrag dat aan het begin wordt betaald (jaar 0). Vul het in als positief getal; het wordt als uitgaande kasstroom behandeld.",
    cashFlows: "Jaarlijkse kasstromen",
    cashFlowsHelp:
      "Netto kasstroom aan het eind van jaar 1, jaar 2 enzovoort, gescheiden door komma's, spaties of nieuwe regels. Gebruik een minteken voor een jaar met een netto uitgaande kasstroom.",
    rate: "Disconteringsvoet",
    rateHelp: "Je vereiste rendement of je kapitaalkosten per jaar.",
    errors: {
      empty: "Vul ten minste één kasstroom in.",
      tooMany: "Vul hoogstens {max} kasstromen in.",
      notNumber: "“{token}” is geen getal. Scheid waarden met komma's, spaties of nieuwe regels.",
      tooLarge: "“{token}” is te groot.",
    },
    tooBig: "{value} is te groot. Elke kasstroom mag hoogstens {max} groot zijn.",
    npv: "Netto contante waarde (NCW)",
    caption: "{count} verdisconteerd tegen {rate} per jaar, na een initiële investering van {initial}.",
    yearCount: forms("{n} jaar aan kasstromen", "{n} jaar aan kasstromen"),
    irr: "Interne rentabiliteit (IRR)",
    irrNone: "Niet gevonden",
    irrNotUnique: "Niet uniek",
    irrOutOfRange: "Niet gevonden tussen {low} en {high}",
    pvInflows: "Contante waarde van de jaarlijkse kasstromen",
    profitabilityIndex: "Rentabiliteitsindex (CW van de kasstromen ÷ initiële investering)",
    totalUndiscounted: "Totale onverdisconteerde kasstroom (inclusief de initiële investering)",
    payback: "Verdisconteerde terugverdientijd",
    paybackYears: forms("{n} jaar", "{n} jaar"),
    paybackNever: "Niet bereikt binnen deze kasstromen",
    table: {
      caption: "Kasstromen per jaar",
      year: "Jaar",
      cashFlow: "Kasstroom",
      discounted: "Verdisconteerde waarde",
      cumulative: "Cumulatieve verdisconteerde waarde",
      yearLabel: "Jaar {n}",
    },
    notes: {
      positive: "Een positieve NCW betekent dat de kasstromen meer opleveren dan de disconteringsvoet, nadat de initiële investering is terugverdiend.",
      negative: "Een negatieve NCW betekent dat de kasstromen minder opleveren dan de disconteringsvoet.",
      zero: "Een NCW van nul betekent dat de kasstromen precies de disconteringsvoet opleveren.",
      irrNone: "De kasstromen wisselen nooit van teken (ze zijn allemaal uitgaand of allemaal inkomend), dus geen enkel percentage maakt de NCW nul.",
      irrNotUnique:
        "De kasstromen wisselen meer dan één keer van teken, dus er kunnen meerdere percentages zijn die de NCW nul maken, of geen enkel. De IRR wordt niet gegeven; ga in plaats daarvan uit van de NCW.",
      irrOutOfRange: "Geen enkel percentage tussen {low} en {high} per jaar maakt de NCW nul.",
      payback: "De verdisconteerde terugverdientijd gaat ervan uit dat de kasstroom van het jaar waarin nul wordt gepasseerd gelijkmatig over dat jaar binnenkomt.",
      timing: "Kasstromen worden geacht aan het eind van elk jaar binnen te komen, verdisconteerd tegen een constant percentage.",
    },
  },
};

export default nl;
