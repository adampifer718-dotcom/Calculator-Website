import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ResistorsText } from "../text/en";

const count = { zero: "{n} weerstanden", one: "{n} weerstand", two: "{n} weerstanden", few: "{n} weerstanden", many: "{n} weerstanden", other: "{n} weerstanden" };

const nl: CalculatorTranslation<ResistorsText> = {
  content: {
    title: "Weerstandcalculator voor serie- en parallelschakeling",
    shortTitle: "Weerstanden in serie/parallel",
    summary: "Bereken de totale weerstand van maximaal 50 weerstanden in serie of parallel, plus de geleidbaarheid van de parallelschakeling.",
    metaTitle: "Weerstanden in serie en parallel – totale Ω",
    metaDescription:
      "Tel maximaal 50 weerstanden in serie of parallel op tot de vervangingsweerstand in Ω, kΩ of MΩ, plus de totale geleidbaarheid in siemens.",
    keywords: [
      "weerstand berekenen",
      "weerstanden in serie",
      "weerstanden parallel",
      "vervangingsweerstand",
      "totale weerstand",
      "parallelschakeling",
      "geleidbaarheid",
      "siemens",
    ],
    intro: [
      "Als je weerstanden achter elkaar schakelt, in serie, loopt door elke weerstand dezelfde stroom en tel je de weerstandswaarden gewoon op. Schakel je ze naast elkaar, parallel, dan staat over elke weerstand dezelfde spanning en verdeelt de stroom zich. De combinatie heeft dan een kleinere weerstand dan elke afzonderlijke weerstand.",
      "Vul een lijst met weerstandswaarden in en je krijgt beide totalen tegelijk. Kies de schakeling die je bouwt om die als hoofdresultaat te tonen, en kies de eenheid waarin je de waarden hebt getypt. De totalen worden getoond in de best leesbare eenheid en ook gewoon in ohm.",
    ],
    howToUse: [
      "Kies of je de waarden in ohm, kilo-ohm of megaohm hebt getypt.",
      "Kies serie of parallel om te bepalen welk totaal het hoofdresultaat is.",
      "Vul 1 tot 50 weerstandswaarden in, gescheiden door puntkomma's, spaties of nieuwe regels.",
      "Lees de totale weerstand af, het totaal van de andere schakeling en de parallelle geleidbaarheid in siemens.",
    ],
    formulas: [
      { title: "Serie", expression: "R_totaal = R₁ + R₂ + … + Rₙ", explanation: "Door elke weerstand loopt dezelfde stroom, dus de spanningsvallen tellen op." },
      {
        title: "Parallel",
        expression: "1 ÷ R_totaal = 1 ÷ R₁ + 1 ÷ R₂ + … + 1 ÷ Rₙ",
        explanation: "Over elke weerstand staat de volledige spanning, dus de stromen (en geleidbaarheden) tellen op.",
      },
      { title: "Geleidbaarheid", expression: "G = 1 ÷ R, in siemens (S)", explanation: "De totale parallelle geleidbaarheid is de som van de afzonderlijke geleidbaarheden." },
    ],
    examples: [
      {
        title: "220 Ω, 470 Ω en 1 kΩ in serie",
        steps: ["R_totaal = 220 + 470 + 1.000 = 1.690 Ω", "Weergegeven als 1,69 kΩ", "Parallel zouden dezelfde drie ongeveer 130,325 Ω geven"],
      },
      {
        title: "4,7 kΩ, 10 kΩ en 22 kΩ parallel",
        steps: [
          "G = 1/4.700 + 1/10.000 + 1/22.000 ≈ 0,000358221 S",
          "R_totaal = 1 ÷ 0,000358221 ≈ 2.791,58 Ω",
          "Weergegeven als 2,79158 kΩ, kleiner dan de kleinste weerstand (4,7 kΩ)",
        ],
      },
      {
        title: "Drie gelijke weerstanden van 330 Ω parallel",
        steps: ["Gelijke weerstanden parallel: R_totaal = R ÷ n", "330 ÷ 3 = 110 Ω", "In serie zouden ze 990 Ω geven"],
      },
    ],
    assumptions: [
      "De weerstanden zijn ideaal: hun waarden veranderen niet met temperatuur, stroom of frequentie, en de verbindingsdraden hebben geen weerstand.",
      "Alle weerstanden vormen één eenvoudige serieketen of één parallelle groep. Combineer bij gemengde netwerken elke groep stap voor stap en vul de tussentotalen in.",
      "Echte weerstanden hebben een tolerantie (vaak ±1% of ±5%), dus een gemeten totaal kan afwijken van het berekende.",
      "Resultaten worden getoond met 6 significante cijfers in de leesbare eenheid en met 12 significante cijfers in ohm.",
    ],
    faqs: [
      {
        question: "Waarom is de parallelle weerstand kleiner dan elke afzonderlijke weerstand?",
        answer: "Elke weerstand die je parallel toevoegt, geeft de stroom een extra pad, waardoor de totale geleidbaarheid toeneemt. De totale weerstand, het omgekeerde daarvan, zakt daardoor onder de kleinste afzonderlijke waarde. Twee weerstanden van 1 kΩ parallel geven 500 Ω.",
      },
      {
        question: "Is er een snelle formule voor twee weerstanden parallel?",
        answer: "Ja: R_totaal = (R₁ × R₂) ÷ (R₁ + R₂), het product gedeeld door de som. Voor 6 Ω en 3 Ω is dat 18 ÷ 9 = 2 Ω. Bij meer dan twee weerstanden tel je in plaats daarvan de omgekeerde waarden op.",
      },
      {
        question: "Wat is een siemens?",
        answer: "De siemens (S) is de SI-eenheid van geleidbaarheid, het omgekeerde van de ohm. Een weerstand van 100 Ω heeft een geleidbaarheid van 0,01 S. De siemens vervangt de oudere naam “mho”.",
      },
    ],
    sourcesUsedFor: ["Vervangingsweerstand van weerstanden in serie (de som) en parallel (het omgekeerde van de som van de omgekeerde waarden)."],
  },
  text: {
    unit: "Eenheid van de waarden",
    unitOptions: { ohm: "Ω (ohm)", kohm: "kΩ (kilo-ohm)", megohm: "MΩ (megaohm)" },
    connection: "Schakeling",
    connectionHelp: "Kies welk totaal als hoofdresultaat wordt getoond. Het andere staat eronder.",
    connectionOptions: { series: "Serie", parallel: "Parallel" },
    values: "Weerstandswaarden",
    valuesHelp: "1 tot 50 waarden, gescheiden door puntkomma's, spaties of nieuwe regels (een komma gevolgd door een spatie scheidt ook). Elke waarde moet groter zijn dan 0.",
    errors: {
      empty: "Vul minstens één weerstandswaarde in.",
      tooMany: "Vul hoogstens {max} weerstandswaarden in.",
      notNumber: "“{token}” is geen getal. Scheid waarden met puntkomma's, spaties of nieuwe regels.",
      tooLarge: "“{token}” is te groot.",
    },
    maxCount: "Vul hoogstens {max} weerstandswaarden in.",
    notPositive: "Elke weerstandswaarde moet groter zijn dan 0 ({value} is dat niet).",
    tooBig: "{value} is te groot. Elke waarde mag hoogstens {max} zijn.",
    series: "Totale serieweerstand",
    parallel: "Totale parallelle weerstand",
    seriesOhms: "Serieweerstand in ohm",
    parallelOhms: "Parallelle weerstand in ohm",
    conductance: "Totale parallelle geleidbaarheid",
    count,
    caption: "{count}, {connection}.",
    connectionWords: { series: "in serie geschakeld", parallel: "parallel geschakeld" },
    single: "Bij één weerstand zijn het serie- en het paralleltotaal allebei gewoon de eigen weerstand.",
    parallelNote: "Een paralleltotaal is altijd kleiner dan de kleinste weerstand in de groep ({smallest}).",
    table: "Afzonderlijke weerstanden",
    resistorColumn: "Weerstand",
    ohmsColumn: "Weerstandswaarde",
    conductanceColumn: "Geleidbaarheid",
    resistorLabel: "R{i}",
  },
};

export default nl;
