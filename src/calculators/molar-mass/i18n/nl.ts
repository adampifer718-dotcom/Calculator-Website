import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MolarMassText } from "../text/en";

const nl: CalculatorTranslation<MolarMassText> = {
  content: {
    title: "Molaire-massacalculator",
    shortTitle: "Molaire massa",
    summary: "Typ een chemische formule, ook met haakjes en hydraten, en krijg de molaire massa in g/mol met het massa-aandeel van elk element.",
    metaTitle: "Molaire-massacalculator – g/mol uit een chemische formule",
    metaDescription:
      "Bereken de molaire massa van elke chemische formule in g/mol, met haakjes en hydraten zoals CuSO4·5H2O, plus het aantal atomen en massaprocent per element.",
    keywords: ["molaire massa berekenen", "molecuulmassa", "g/mol", "formulemassa", "molaire massa verbinding", "massapercentage", "hydraat molaire massa"],
    intro: [
      "De molaire massa van een stof is de massa van één mol ervan, in gram per mol. Voor een verbinding is het gewoon de som van de atoommassa's van alle atomen in de formule: water, H2O, bestaat uit twee waterstofatomen en één zuurstofatoom, dus ongeveer 2 × 1,008 + 15,999 = 18,015 g/mol.",
      "Typ een formule en deze calculator telt de atomen voor je, ook groepen tussen ronde of vierkante haakjes zoals Ca(OH)2 of K4[Fe(CN)6] en hydraten zoals CuSO4·5H2O. Hij laat ook zien hoeveel elk element bijdraagt aan de totale massa.",
    ],
    howToUse: [
      "Typ de formule met de juiste hoofdletters: Co is kobalt, CO is koolstofmonoxide.",
      "Zet het aantal achter elk element of elke groep tussen haakjes, bijvoorbeeld Al2(SO4)3. Geen getal betekent 1.",
      "Scheid bij een hydraat de delen met ·, . of * en zet het aantal watermoleculen ervoor, zoals in MgSO4·7H2O.",
      "Lees de molaire massa af en de tabel met het aantal atomen, de massabijdragen en de massapercentages.",
    ],
    formulas: [
      {
        title: "Molaire massa",
        expression: "M = Σ (nᵢ × Aᵣ,ᵢ)  g/mol",
        explanation: "nᵢ is het aantal atomen van element i in de formule en Aᵣ,ᵢ de standaardatoommassa ervan.",
      },
      {
        title: "Groepen en hydraten",
        expression: "(X)ₖ → elk aantal binnen de haakjes × k\nA·nB → atomen van A + n × atomen van B",
        explanation: "Een getal achter haakjes geldt voor alles daarbinnen, ook geneste groepen; de coëfficiënt van een hydraat geldt voor het deel na de punt.",
      },
      {
        title: "Massaprocent",
        expression: "% element i = nᵢ × Aᵣ,ᵢ ÷ M × 100",
        explanation: "Het deel van de molaire massa dat van elk element afkomstig is.",
      },
    ],
    examples: [
      {
        title: "Glucose, C6H12O6",
        steps: ["Koolstof: 6 × 12,011 = 72,066", "Waterstof: 12 × 1,008 = 12,096", "Zuurstof: 6 × 15,999 = 95,994", "M = 72,066 + 12,096 + 95,994 = 180,156 g/mol"],
      },
      {
        title: "Kopersulfaatpentahydraat (koper(II)sulfaat), CuSO4·5H2O",
        steps: [
          "CuSO4: 63,546 + 32,06 + 4 × 15,999 = 159,602",
          "5 H2O: 5 × (2 × 1,008 + 15,999) = 5 × 18,015 = 90,075",
          "M = 159,602 + 90,075 = 249,677 g/mol",
          "Koper vormt 63,546 ÷ 249,677 ≈ 25,45% van de massa",
        ],
      },
      {
        title: "Kaliumferrocyanide, K4[Fe(CN)6]",
        steps: ["Kalium: 4 × 39,098 = 156,392", "IJzer: 1 × 55,845 = 55,845", "(CN)6: 6 × (12,011 + 14,007) = 156,108", "M = 156,392 + 55,845 + 156,108 = 368,345 g/mol"],
      },
    ],
    assumptions: [
      "De atoommassa's zijn de verkorte standaardatoommassa's van IUPAC/CIAAW. Waar de atoommassa van een element in de natuur varieert en als bereik wordt opgegeven, wordt de conventionele enkele waarde gebruikt, dus het laatste cijfer kan afwijken van andere tabellen.",
      "Elementen zonder standaardatoommassa, zoals technetium, promethium, polonium en de meeste elementen zwaarder dan bismut behalve thorium, protactinium en uraan, worden geweigerd, omdat hun molaire massa van de isotoop afhangt.",
      "Ladingen, isotopen (zoals D of ¹³C) en aggregatietoestanden worden niet ondersteund. De formule wordt behandeld als een neutrale formule-eenheid met natuurlijke isotopenverhoudingen; de massa van de elektronen die een ion opneemt of afstaat is verwaarloosbaar.",
    ],
    faqs: [
      {
        question: "Is molaire massa hetzelfde als molecuulmassa?",
        answer: "Ze hebben hetzelfde getal. De molecuulmassa (relatieve molecuulmassa) heeft geen eenheid, terwijl de molaire massa wordt uitgedrukt in gram per mol. Water heeft een molecuulmassa van 18,015 en een molaire massa van 18,015 g/mol.",
      },
      {
        question: "Hoe voer ik een hydraat in?",
        answer: "Schrijf het zout, dan een punt (·, . of *), dan het aantal watermoleculen en H2O, bijvoorbeeld CuSO4·5H2O of Na2CO3*10H2O. De coëfficiënt vermenigvuldigt alles in het deel na de punt.",
      },
      {
        question: "Waarom geeft mijn schoolboek een iets andere waarde?",
        answer: "Tabellen ronden atoommassa's verschillend af en sommige gebruiken oudere waarden. Chloor staat hier bijvoorbeeld als 35,45, maar in oudere tabellen als 35,453, wat de laatste decimaal van NaCl verandert.",
      },
    ],
    sourcesUsedFor: ["De verkorte standaardatoommassa's en conventionele waarden die voor elk element worden gebruikt."],
  },
  text: {
    formula: "Chemische formule",
    formulaHelp:
      "Elementsymbolen zijn hoofdlettergevoelig (Co is kobalt, CO is koolstofmonoxide). Gebruik ( ) of [ ] voor groepen en ·, . of * voor hydraten, bijv. CuSO4·5H2O.",
    formulaPlaceholder: "bijv. Ca(OH)2",
    errors: {
      empty: "Vul een chemische formule in.",
      tooLong: "De formule is te lang. Gebruik hoogstens 200 tekens.",
      invalidChar: "Ongeldig teken “{token}” op positie {position}. Gebruik alleen elementsymbolen, getallen, haakjes en hydraatpunten.",
      lowercase: "Onverwachte kleine letter “{token}” op positie {position}. Elementsymbolen beginnen met een hoofdletter, bijv. Na of Cl.",
      unknownElement: "Onbekend elementsymbool “{token}” op positie {position}.",
      noStandardWeight: "{token} (positie {position}) heeft geen standaardatoommassa, dus de molaire massa kan niet worden berekend.",
      unclosed: "Haakjes kloppen niet: de “{token}” op positie {position} wordt nergens gesloten.",
      unexpectedClose: "Haakjes kloppen niet: bij de “{token}” op positie {position} hoort geen openingshaakje.",
      mismatched: "Haakjes passen niet bij elkaar: de “{token}” op positie {position} hoort niet bij het haakje dat hij sluit.",
      emptyGroup: "De groep tussen haakjes die begint op positie {position} is leeg.",
      zeroCount: "Het aantal op positie {position} is nul. Aantallen moeten hele getallen van minstens 1 zijn.",
      misplacedNumber: "Het getal op positie {position} hoort niet bij een element of groep.",
      misplacedDot: "De hydraatpunt op positie {position} moet tussen twee delen van de formule staan, bijv. CuSO4·5H2O.",
      tooManyAtoms: "De formule heeft te veel atomen. Gebruik in totaal hoogstens 1.000.000 atomen.",
    },
    molarMass: "Molaire massa",
    caption: "{formula}: som van elk aantal atomen × standaardatoommassa",
    totalAtoms: "Atomen per formule-eenheid",
    elements: "Verschillende elementen",
    massOfMole: "Massa van één mol",
    tableCaption: "Samenstelling per element",
    columns: { element: "Element", count: "Atomen", weight: "Atoommassa", mass: "Massa (g/mol)", percent: "Massa-%" },
    note: "De atoommassa's zijn de verkorte standaardwaarden van IUPAC. Voor elementen met een natuurlijk bereik (zoals H, C, N, O en S) wordt de conventionele enkele waarde gebruikt.",
  },
};

export default nl;
