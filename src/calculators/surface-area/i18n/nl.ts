import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SurfaceAreaText } from "../text/en";

const nl: CalculatorTranslation<SurfaceAreaText> = {
  content: {
    title: "Oppervlaktecalculator voor ruimtefiguren",
    shortTitle: "Buitenoppervlak",
    summary: "Bereken de totale oppervlakte, de manteloppervlakte en de grondvlakoppervlakte van een kubus, balk, cilinder, bol, halve bol, kegel of vierkante piramide.",
    metaTitle: "Oppervlaktecalculator voor ruimtefiguren – balk, bol",
    metaDescription:
      "Bereken de totale oppervlakte van zeven ruimtefiguren, plus mantel, grondvlak en schuine hoogte, in mm, cm, m, inch of voet, met totalen in m² en ft².",
    keywords: [
      "oppervlakte berekenen",
      "oppervlakte cilinder",
      "oppervlakte kegel",
      "oppervlakte bol",
      "manteloppervlakte",
      "schuine hoogte",
      "oppervlakte piramide",
      "buitenoppervlak",
    ],
    intro: [
      "De oppervlakte van een ruimtefiguur is de totale oppervlakte van alle zijvlakken en gebogen vlakken samen. Ze vertelt je hoeveel verf, inpakpapier, plaatmateriaal of stof je nodig hebt om een voorwerp helemaal te bedekken.",
      "Kies een van de zeven ruimtefiguren en vul de afmetingen in één eenheid in. Naast het totaal toont de calculator de manteloppervlakte (de zijkanten zonder boven- en ondervlak), de oppervlakte van het grondvlak en, bij kegels en piramides, de schuine hoogte. Het totaal wordt ook in vierkante meter en vierkante voet gegeven.",
    ],
    howToUse: [
      "Kies de vorm.",
      "Kies de eenheid van je maten.",
      "Vul de afmetingen in die bij die vorm horen. Gebruik bij ronde vormen de straal (de halve diameter) en bij kegels en piramides de loodrechte hoogte.",
      "Lees de totale oppervlakte af en de deeloppervlakken eronder.",
    ],
    formulas: [
      { title: "Kubus en balk", expression: "A = 6a²\nA = 2(lb + lh + bh)", explanation: "Tel de oppervlakken van de zes rechthoekige zijvlakken op." },
      {
        title: "Cilinder",
        expression: "A = 2πr² + 2πrh",
        explanation: "Twee ronde uiteinden plus de gebogen mantel, die uitgerold een rechthoek is van 2πr breed en h hoog.",
      },
      {
        title: "Bol en halve bol",
        expression: "A = 4πr²\nA = 2πr² + πr² = 3πr²",
        explanation: "Een gesloten halve bol heeft de helft van het gebogen boloppervlak plus een plat rond grondvlak.",
      },
      { title: "Kegel", expression: "s = √(r² + h²)\nA = πr² + πrs", explanation: "Het ronde grondvlak plus de mantel πrs, waarbij s de schuine hoogte is." },
      {
        title: "Vierkante piramide",
        expression: "s = √((a/2)² + h²)\nA = a² + 2as",
        explanation: "Het vierkante grondvlak plus vier driehoeken, elk met basis a en hoogte s (de schuine hoogte van een zijvlak).",
      },
    ],
    examples: [
      {
        title: "Een verzenddoos van 30 × 20 × 10 cm",
        steps: ["lb = 600, lh = 300, bh = 200", "A = 2 × (600 + 300 + 200) = 2.200 cm²", "2.200 cm² = 0,22 m²"],
      },
      {
        title: "Een kegel met een straal van 0,6 m en een hoogte van 0,8 m",
        steps: ["s = √(0,6² + 0,8²) = 1 m", "Grondvlak = π × 0,36 ≈ 1,131 m², mantel = π × 0,6 × 1 ≈ 1,885 m²", "A ≈ 1,131 + 1,885 ≈ 3,016 m²"],
      },
      {
        title: "Een vierkante piramide met een grondvlak van 6 ft en een hoogte van 4 ft",
        steps: ["s = √(3² + 4²) = 5 ft", "Mantel = 2 × 6 × 5 = 60 ft², grondvlak = 36 ft²", "A = 36 + 60 = 96 ft²"],
      },
    ],
    assumptions: [
      "De vormen zijn ideaal en recht: de top van kegels en piramides ligt recht boven het midden van het grondvlak, en ronde vormen zijn perfecte cirkels.",
      "De totalen gelden voor gesloten lichamen. Een cilinder telt beide uiteinden mee, een kegel en een piramide het grondvlak, en een halve bol het platte vlak. Gebruik voor open vormen de mantel- of gebogen oppervlakte.",
      "Echte voorwerpen hebben naden, overlappingen en dikte. Reken wat extra wanneer je materiaal koopt.",
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen de manteloppervlakte en de totale oppervlakte?",
        answer: "De manteloppervlakte telt alleen de zijkanten. De totale oppervlakte telt daar het grondvlak bij op en, bij prisma's en cilinders, ook het bovenvlak.",
      },
      {
        question: "Wat is de schuine hoogte?",
        answer: "Dat is de afstand langs het schuine oppervlak, van de rand van het grondvlak tot de top. Ze is langer dan de loodrechte hoogte en volgt uit de stelling van Pythagoras.",
      },
      {
        question: "Hoe reken ik cm² om naar m²?",
        answer: "Deel door 10.000, want een meter is 100 cm en oppervlakte schaalt met het kwadraat: 100 × 100 = 10.000.",
      },
    ],
    sourcesUsedFor: [
      "Oppervlakteformules voor de balk, cilinder, bol en kegel.",
      "Uitgewerkt gebruik van de oppervlakteformules voor de cilinder en de bol.",
    ],
  },
  text: {
    shape: "Vorm",
    shapes: {
      cube: "Kubus",
      box: "Balk",
      cylinder: "Cilinder (gesloten)",
      sphere: "Bol",
      hemisphere: "Halve bol (met plat grondvlak)",
      cone: "Kegel (met grondvlak)",
      pyramid: "Vierkante piramide (met grondvlak)",
    },
    unit: "Lengte-eenheid",
    unitHelp: "Vul elke afmeting in deze eenheid in. Oppervlakten worden getoond in dezelfde eenheid in het kwadraat.",
    units: { mm: "Millimeter (mm)", cm: "Centimeter (cm)", m: "Meter (m)", in: "Inch (in)", ft: "Voet (ft)" },
    edge: "Ribbe (a)",
    length: "Lengte (l)",
    width: "Breedte (b)",
    height: "Hoogte (h)",
    heightHelp: "De loodrechte hoogte, recht omhoog gemeten vanaf het grondvlak, niet langs de schuine zijde.",
    radius: "Straal (r)",
    radiusHelp: "De helft van de diameter.",
    baseSide: "Zijde van het grondvlak (a)",
    total: "Totale oppervlakte",
    formula: {
      cube: "A = 6a²",
      box: "A = 2(lb + lh + bh)",
      cylinder: "A = 2πr² + 2πrh",
      sphere: "A = 4πr²",
      hemisphere: "A = 3πr²",
      cone: "A = πr² + πr√(r² + h²)",
      pyramid: "A = a² + 2a√((a/2)² + h²)",
    },
    lateral: "Manteloppervlakte (alleen de zijkanten)",
    curved: "Gebogen oppervlakte",
    base: "Oppervlakte grondvlak",
    eachEnd: "Oppervlakte van elk rond uiteinde",
    face: "Oppervlakte van één zijvlak",
    slant: "Schuine hoogte",
    inSquareMeters: "Totaal in vierkante meter",
    inSquareFeet: "Totaal in vierkante voet",
    note: "De manteloppervlakte laat het boven- en ondervlak weg. Die heb je nodig voor een etiket, een wand of een bekleding van de zijkant.",
  },
};

export default nl;
