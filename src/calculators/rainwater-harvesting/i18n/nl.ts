import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RainwaterText } from "../text/en";

const nl: CalculatorTranslation<RainwaterText> = {
  content: {
    title: "Regenwateropvangcalculator",
    shortTitle: "Regenwater",
    summary: "Schat hoeveel regenwater een dak kan opvangen op basis van de dakoppervlakte, de neerslag en een afvoercoëfficiënt.",
    metaTitle: "Regenwateropvangcalculator – Opbrengst van je dak",
    metaDescription:
      "Schat hoeveel regenwater een dak opvangt, in liter of Amerikaanse gallon, op basis van het opvangoppervlak, de neerslag en de afvoercoëfficiënt.",
    keywords: ["regenwater opvangen", "regenwateropvang", "regenwater dak", "regenton", "regenwatertank", "liter per vierkante meter"],
    intro: [
      "Elke millimeter regen die op een vierkante meter dak valt, levert één liter water op. Deze calculator rekent dat op grotere schaal uit en houdt rekening met verliezen.",
      "Gebruik hem om een regenton of tank op maat te kiezen, of om de jaarlijkse opbrengst te schatten uit de gemiddelde neerslag.",
    ],
    howToUse: [
      "Kies metrische of Amerikaanse eenheden.",
      "Vul de horizontale (geprojecteerde) dakoppervlakte in.",
      "Vul de neerslag in voor de periode die je wilt bekijken.",
      "Pas de afvoercoëfficiënt aan voor verliezen en lees het opgevangen volume af.",
    ],
    formulas: [
      { title: "Metrisch", expression: "Liter = oppervlakte (m²) × neerslag (mm) × afvoercoëfficiënt", explanation: "1 mm regen op 1 m² is 1 liter." },
      {
        title: "Amerikaanse eenheden",
        expression: "Gallon = oppervlakte (ft²) × neerslag (in) × 0,6234 × afvoercoëfficiënt",
        explanation: "0,6234 = 144 in³ ÷ 231 in³ per Amerikaanse gallon.",
      },
    ],
    examples: [
      {
        title: "Dak van 100 m², 25 mm regen",
        steps: ["100 × 25 = 2.500 L regen", "2.500 × 0,8 = 2.000 L opgevangen"],
      },
      {
        title: "Dak van 1.000 ft², 1 inch regen",
        steps: ["1.000 × 1 × 0,6234 ≈ 623 gal", "623 × 0,8 ≈ 499 gal opgevangen"],
      },
    ],
    assumptions: [
      "De afvoercoëfficiënt dekt verliezen door verdamping, opspatten, first-flush-afscheiders en overlopende dakgoten. Hij hangt af van het dakmateriaal en het ontwerp van de installatie; raadpleeg lokale richtlijnen.",
      "Gebruik de horizontale dakoppervlakte, niet het hellende oppervlak.",
      "Controleer de lokale regels voor het opvangen en gebruiken van regenwater, en behandel het water voordat je het drinkt.",
    ],
    faqs: [
      {
        question: "Hoeveel water levert 1 inch regen op?",
        answer: "Ongeveer 0,623 Amerikaanse gallon per vierkante voet dak vóór verliezen, oftewel 623 gallon per 1.000 ft².",
      },
      {
        question: "Welke afvoercoëfficiënt moet ik gebruiken?",
        answer: "Gladde, harde daken verliezen minder water dan ruwe of absorberende daken. 0,8 is een voorzichtige middenwaarde; pas die aan je dak aan.",
      },
      {
        question: "Is opgevangen regenwater drinkbaar?",
        answer: "Niet zonder goede filtering en desinfectie. Veel mensen gebruiken het voor de tuin en om het toilet door te spoelen.",
      },
    ],
    sourcesUsedFor: ["Definities van de Amerikaanse gallon (231 in³) en de liter."],
  },
  text: {
    units: "Eenheden",
    unitOptions: { metric: "Metrisch (m², mm, liter)", imperial: "VS (ft², inch, gallon)" },
    area: "Opvangoppervlak (dak)",
    areaHelp: "De horizontale dakoppervlakte, niet het hellende oppervlak.",
    rainfall: "Neerslag",
    rainfallHelp: "Voor één bui, een maand of een jaar.",
    coefficient: "Afvoercoëfficiënt",
    coefficientHelp: "Het deel van de regen dat na verliezen de opslag bereikt (0 tot 1).",
    collected: "Opgevangen water",
    inLiters: "In liter",
    inGallons: "In Amerikaanse gallon",
    inCubic: "In kubieke meter",
    gallons: "gal (VS)",
    note: "1 mm regen op 1 m² is precies 1 liter; 1 inch regen op 1 ft² is 144 ÷ 231 ≈ 0,623 Amerikaanse gallon.",
  },
};

export default nl;
