import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { VolumeShapesText } from "../text/en";

const nl: CalculatorTranslation<VolumeShapesText> = {
  content: {
    title: "Inhoudscalculator voor ruimtefiguren",
    shortTitle: "Inhoud",
    summary: "Bereken de inhoud van een kubus, balk, cilinder, bol, halve bol, kegel of vierkante piramide, met de uitkomst in liter, kubieke meter en Amerikaanse gallons.",
    metaTitle: "Inhoud berekenen – cilinder, bol, kegel en meer",
    metaDescription:
      "Bereken de inhoud van een kubus, balk, cilinder, bol, halve bol, kegel of vierkante piramide in mm, cm, m, inch of voet, plus liter en Amerikaanse gallons.",
    keywords: ["inhoud berekenen", "volume berekenen", "inhoud cilinder", "inhoud bol", "inhoud kegel", "kubieke meter", "liter", "inhoud piramide"],
    intro: [
      "De inhoud (het volume) is de ruimte die een lichaam inneemt. Deze calculator behandelt zeven gangbare ruimtefiguren, van een eenvoudige kubus tot een kegel of een vierkante piramide, zodat je een tank, een plantenbak, een doos of een huiswerkopgave kunt uitrekenen.",
      "Kies een vorm en een lengte-eenheid en typ de afmetingen die nodig zijn. Het antwoord verschijnt in die eenheid tot de derde macht en wordt ook omgerekend naar liter, kubieke meter en Amerikaanse gallons. Handig als je wilt weten hoeveel vloeistof of materiaal erin past.",
    ],
    howToUse: [
      "Kies de vorm.",
      "Kies de eenheid waarin je hebt gemeten. Alle afmetingen moeten dezelfde eenheid hebben.",
      "Vul de afmetingen in die bij die vorm horen. Gebruik bij ronde vormen de straal, de helft van de diameter.",
      "Lees de inhoud af en de omrekening naar liter, kubieke meter en Amerikaanse gallons.",
    ],
    formulas: [
      {
        title: "Kubus en balk",
        expression: "V = a³\nV = l × b × h",
        explanation: "Een kubus heeft drie gelijke ribben a; bij een balk vermenigvuldig je lengte, breedte en hoogte.",
      },
      {
        title: "Cilinder en kegel",
        expression: "V = πr²h\nV = 1/3 πr²h",
        explanation: "Een kegel bevat precies een derde van de cilinder met dezelfde straal r en hoogte h.",
      },
      { title: "Bol en halve bol", expression: "V = 4/3 πr³\nV = 2/3 πr³", explanation: "Een halve bol is de helft van een bol met straal r." },
      { title: "Vierkante piramide", expression: "V = 1/3 a²h", explanation: "Een derde van de grondvlakoppervlakte a² maal de loodrechte hoogte h." },
      {
        title: "Eenheden omrekenen",
        expression: "1 m³ = 1000 L\n1 US gal = 3,785411784 L",
        explanation: "De inhoud in jouw eenheid tot de derde macht wordt met de exacte lengtefactor omgerekend naar kubieke meter, en daarna naar liter en gallons.",
      },
    ],
    examples: [
      {
        title: "Een cilindervormige watertank van 1,2 m hoog met een straal van 0,5 m",
        steps: ["V = π × 0,5² × 1,2", "= π × 0,3 ≈ 0,94248 m³", "0,94248 m³ × 1000 ≈ 942,48 L, ongeveer 248,98 Amerikaanse gallons"],
      },
      {
        title: "Een bal met een straal van 4 inch",
        steps: ["V = 4/3 × π × 4³", "= 4/3 × π × 64 ≈ 268,08 in³", "Dat is ongeveer 4,39 L of 1,16 Amerikaanse gallons"],
      },
      {
        title: "Een vierkante piramide met een grondvlak van 9 cm en een hoogte van 15 cm",
        steps: ["Grondvlak = 9² = 81 cm²", "V = 1/3 × 81 × 15 = 405 cm³", "405 cm³ = 0,405 L"],
      },
    ],
    assumptions: [
      "De vormen zijn ideaal: ribben zijn recht, ronde vormen zijn perfect rond, en de cilinder, kegel en piramide zijn recht (de top ligt recht boven het midden van het grondvlak).",
      "Het resultaat is de ruimte binnen de buitenmaten. Meet bij een bak met dikke wanden de binnenkant om te weten hoeveel erin past.",
      "Amerikaanse gallons zijn vloeistofgallons van 3,785411784 L. Imperiale gallons worden niet getoond.",
    ],
    faqs: [
      {
        question: "Hoe bereken ik de inhoud als ik alleen de diameter weet?",
        answer: "Deel de diameter door twee om de straal te krijgen en vul die straal in. Een pot van 30 cm breed heeft een straal van 15 cm.",
      },
      {
        question: "Hoeveel liter gaat er in een kubieke meter?",
        answer: "Precies 1000. Eén liter is de inhoud van een kubus met ribben van 10 cm, dus 1000 cm³ is 1 L.",
      },
      {
        question: "Waarom is een kegel een derde van een cilinder?",
        answer: "Een kegel loopt gelijkmatig taps toe naar een punt. Als je de ronde plakjes van grondvlak tot top optelt, kom je precies uit op een derde van πr²h. Om dezelfde reden is een piramide een derde van de balk met hetzelfde grondvlak en dezelfde hoogte.",
      },
    ],
    sourcesUsedFor: [
      "Inhoudsformules voor de balk, cilinder, bol en kegel.",
      "De Amerikaanse gallon van 231 kubieke inch (3,785411784 L) en de inch van 2,54 cm.",
    ],
  },
  text: {
    shape: "Vorm",
    shapes: {
      cube: "Kubus",
      box: "Balk",
      cylinder: "Cilinder",
      sphere: "Bol",
      hemisphere: "Halve bol",
      cone: "Kegel",
      pyramid: "Vierkante piramide",
    },
    unit: "Lengte-eenheid",
    unitHelp: "Vul elke afmeting in deze eenheid in. De inhoud wordt getoond in dezelfde eenheid tot de derde macht.",
    units: { mm: "Millimeter (mm)", cm: "Centimeter (cm)", m: "Meter (m)", in: "Inch (in)", ft: "Voet (ft)" },
    edge: "Ribbe (a)",
    length: "Lengte (l)",
    width: "Breedte (b)",
    height: "Hoogte (h)",
    heightHelp: "De loodrechte hoogte, van het grondvlak recht omhoog tot de bovenkant of de top.",
    radius: "Straal (r)",
    radiusHelp: "De helft van de diameter.",
    baseSide: "Zijde van het grondvlak (a)",
    volume: "Inhoud",
    formula: {
      cube: "V = a³",
      box: "V = l × b × h",
      cylinder: "V = πr²h",
      sphere: "V = 4/3 πr³",
      hemisphere: "V = 2/3 πr³",
      cone: "V = 1/3 πr²h",
      pyramid: "V = 1/3 a²h",
    },
    liters: "In liter",
    cubicMeters: "In kubieke meter",
    usGallons: "In Amerikaanse gallons",
    note: "1 liter is 1000 cm³ en 1 Amerikaanse gallon is 3,785411784 liter.",
  },
};

export default nl;
