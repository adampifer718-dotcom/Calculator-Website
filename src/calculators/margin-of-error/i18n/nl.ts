import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MarginOfErrorText } from "../text/en";

const nl: CalculatorTranslation<MarginOfErrorText> = {
  content: {
    title: "Foutmargecalculator",
    shortTitle: "Foutmarge",
    summary: "Bepaal de ±-foutmarge van een percentage uit een enquête of peiling op basis van de steekproefgrootte, de uitkomst en het betrouwbaarheidsniveau.",
    metaTitle: "Foutmargecalculator voor enquêtepercentages",
    metaDescription:
      "Bereken de ±-foutmarge van een percentage uit een peiling of enquête op basis van steekproefgrootte en betrouwbaarheidsniveau, met interval en standaardfout.",
    keywords: ["foutmarge", "foutmarge enquête", "foutmarge peiling", "plus of min", "steekproeffout", "betrouwbaarheidsinterval proportie", "standaardfout proportie"],
    intro: [
      "Als een peiling meldt dat 47% van de kiezers voor een plan is, dan is “±3 procentpunt” de foutmarge: het bereik rond de uitkomst waarbinnen het werkelijke cijfer voor de hele populatie waarschijnlijk ligt. Deze calculator bepaalt die marge voor elk enquêtepercentage.",
      "Vul in hoeveel mensen hebben geantwoord, welk aandeel het antwoord gaf dat je rapporteert en het betrouwbaarheidsniveau. De calculator geeft de foutmarge in procentpunten, het betrouwbaarheidsinterval en de standaardfout.",
      "Deze tool is bedoeld voor proporties (percentages van ja/nee-antwoorden). Schat je het gemiddelde van een meting, zoals lengte of uitgaven, gebruik dan de betrouwbaarheidsintervalcalculator.",
    ],
    howToUse: [
      "Vul de steekproefgrootte in: het aantal volledig ingevulde antwoorden.",
      "Vul de waargenomen proportie in als percentage. Gebruik 50% voor de grootst mogelijke marge bij die steekproefgrootte.",
      "Kies het betrouwbaarheidsniveau.",
      "Is de steekproef een groot deel van een bekende, beperkte populatie, vul dan de populatiegrootte in om de eindigepopulatiecorrectie toe te passen.",
      "Lees de foutmarge af en het interval dat die rond je uitkomst geeft.",
    ],
    formulas: [
      {
        title: "Standaardfout van een proportie",
        expression: "SE = √(p × (1 − p) ÷ n)",
        explanation: "p is de waargenomen proportie als decimaal getal en n de steekproefgrootte.",
      },
      {
        title: "Foutmarge",
        expression: "MOE = z* × SE",
        explanation: "z* is de kritieke waarde bij het betrouwbaarheidsniveau: 1,645 voor 90%, 1,960 voor 95% en 2,576 voor 99%.",
      },
      {
        title: "Eindigepopulatiecorrectie",
        expression: "MOE = z* × SE × √((N − n) ÷ (N − 1))",
        explanation: "Wordt gebruikt als een populatiegrootte N is ingevuld. Ze verkleint de marge als de steekproef een groot deel van de populatie is.",
      },
      { title: "Betrouwbaarheidsinterval", expression: "p − MOE tot p + MOE", explanation: "Het interval wordt begrensd tot het bereik van 0% tot 100%." },
    ],
    examples: [
      {
        title: "Een peiling onder 1000 mensen met een uitkomst van 50% bij 95% betrouwbaarheid",
        steps: ["SE = √(0,5 × 0,5 ÷ 1000) ≈ 0,015811", "MOE = 1,95996 × 0,015811 ≈ 0,030990", "Marge ≈ ±3,10 procentpunt; interval ≈ 46,90% tot 53,10%"],
      },
      {
        title: "600 klanten, 42% tevreden, bij 90% betrouwbaarheid",
        steps: ["SE = √(0,42 × 0,58 ÷ 600) ≈ 0,020149", "MOE = 1,64485 × 0,020149 ≈ 0,033143", "Marge ≈ ±3,31 procentpunt; interval ≈ 38,69% tot 45,31%"],
      },
      {
        title: "400 van de 3000 leerlingen van een school, 35% eens, bij 99% betrouwbaarheid",
        steps: [
          "SE vóór correctie = √(0,35 × 0,65 ÷ 400) ≈ 0,023848",
          "Correctie = √(2600 ÷ 2999) ≈ 0,93110",
          "MOE = 2,57583 × 0,023848 × 0,93110 ≈ 0,057197, dus ongeveer ±5,72 procentpunt",
        ],
      },
    ],
    assumptions: [
      "De steekproef is een enkelvoudige aselecte steekproef uit de populatie. Online peilingen met zelfselectie, quotasteekproeven en gewogen panels kunnen grotere fouten hebben dan deze formule aangeeft.",
      "De marge dekt alleen de toevallige steekproeffout. Ze houdt geen rekening met non-respons, sturende vraagformulering of mensen die niet eerlijk antwoorden.",
      "De calculator gebruikt de normale benadering (Wald), die zwak is als minder dan ongeveer 10 antwoorden in een van beide categorieën vallen; in dat geval geeft de calculator een waarschuwing.",
      "De kritieke waarden worden numeriek berekend en komen tot op veel meer cijfers dan getoond overeen met standaardtabellen.",
    ],
    faqs: [
      {
        question: "Wat betekent een foutmarge van ±3 procentpunt?",
        answer:
          "Bij 95% betrouwbaarheid geldt: als je de enquête vele malen herhaalt met nieuwe aselecte steekproeven, bevat ongeveer 95% van de op deze manier berekende intervallen het werkelijke percentage van de populatie. Het betekent niet dat de werkelijke waarde gegarandeerd binnen 3 procentpunt ligt.",
      },
      {
        question: "Hoe halveer ik de foutmarge?",
        answer:
          "De marge neemt af met de wortel van de steekproefgrootte, dus voor een halvering heb je ongeveer vier keer zoveel antwoorden nodig. Van ±3,1 procentpunt met 1000 mensen naar ongeveer ±1,55 procentpunt vraagt zo'n 4000 mensen.",
      },
      {
        question: "Kan ik dit gebruiken voor gemiddelden?",
        answer:
          "Nee. Deze calculator is bedoeld voor percentages van ja/nee-antwoorden. Gebruik voor het gemiddelde van een numerieke meting de betrouwbaarheidsintervalcalculator, die werkt met het gemiddelde en de standaardafwijking.",
      },
    ],
    sourcesUsedFor: [
      "De foutgrens voor een proportie, z·√(p′q′/n), en het interval p′ ± foutgrens.",
      "De eindigepopulatiecorrectie √((N − n)/(N − 1)).",
    ],
  },
  text: {
    n: "Steekproefgrootte (n)",
    nHelp: "Aantal volledig ingevulde antwoorden.",
    proportion: "Waargenomen proportie",
    proportionHelp: "Aandeel van de steekproef dat het antwoord gaf dat je rapporteert. Gebruik 50% voor de breedste, meest voorzichtige marge.",
    level: "Betrouwbaarheidsniveau",
    levelOptions: { "80": "80%", "90": "90%", "95": "95%", "98": "98%", "99": "99%" },
    population: "Populatiegrootte (optioneel)",
    populationHelp: "Totale omvang van de groep waaruit de steekproef is getrokken. Laat leeg bij een zeer grote of onbekende populatie.",
    populationTooSmall: "De populatie kan niet kleiner zijn dan de steekproef ({n}).",
    margin: "Foutmarge (± procentpunt)",
    caption: "{p} ± {moe} bij {level} betrouwbaarheid.",
    interval: "Betrouwbaarheidsinterval",
    intervalText: "{lower} tot {upper}",
    standardError: "Standaardfout",
    critical: "Kritieke waarde (z*)",
    correction: "Correctiefactor voor eindige populatie",
    correctionNone: "Niet toegepast",
    weakApproximation:
      "Minder dan 10 antwoorden vallen aan één kant (n × p = {yes}, n × (1 − p) = {no}). De normale benadering is hier zwak, dus beschouw deze marge als grof; een exact interval of een Wilson-interval is betrouwbaarder.",
    census: "De steekproef omvat de hele populatie, dus er is geen steekproeffout.",
    clipped: "Het interval is afgekapt bij {bound}, omdat een proportie daar niet overheen kan.",
    meansNote: "Deze marge geldt voor een percentage (proportie). Gebruik voor het gemiddelde van een meting de betrouwbaarheidsintervalcalculator.",
  },
};

export default nl;
