import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoofingText } from "../text/en";

const nl: CalculatorTranslation<RoofingText> = {
  content: {
    title: "Dakbedekkingscalculator",
    shortTitle: "Dakbedekking",
    summary:
      "Schat het dakoppervlak, het aantal squares en de pakken shingles voor een eenvoudig zadeldak of schilddak uit de plattegrond, de overstek en de dakhelling.",
    metaTitle: "Dakbedekkingscalculator – squares, pakken en dakoppervlak",
    metaDescription:
      "Schat het dakoppervlak uit plattegrond, overstek en helling, en daarna de squares, pakken shingles en rollen onderdakfolie die je koopt, met een marge voor verlies.",
    keywords: ["dakbedekking berekenen", "dakoppervlak berekenen", "shingles berekenen", "pakken shingles", "roofing square", "onderdakfolie rollen", "hellingsfactor", "dakbedekkingscalculator"],
    intro: [
      "Dakbedekking wordt in de VS per square verkocht: één square bedekt 100 ft² (ongeveer 9,29 m²) dak. Een hellend dak heeft meer oppervlak dan de plattegrond eronder, dus het grondoppervlak wordt vermenigvuldigd met een hellingsfactor die groter wordt naarmate het dak steiler is.",
      "Vul de lengte en breedte van het gebouw, de overstek en de dakhelling in om het dakoppervlak, het aantal squares en pakken shingles en eventueel de rollen onderdakfolie te schatten. Een marge voor verlies dekt zaagsnedes, starterrijen en nok- en hoekkappen.",
    ],
    howToUse: [
      "Kies Amerikaanse eenheden (voet) of metrische eenheden (meter).",
      "Vul de lengte en breedte van het gebouw in en hoe ver het dak over de muren uitsteekt.",
      "Vul de helling in als stijging per 12 horizontale lengte (bijvoorbeeld 6 voor een dak van 6 op 12), of als hoek.",
      "Kies zadeldak of schilddak en controleer de marge voor verlies; voor schilddaken is die standaard 15% vanwege het extra zaagwerk.",
      "Controleer het aantal pakken per square voor je shingles en vul eventueel de dekking van één rol onderdakfolie in.",
    ],
    formulas: [
      { title: "Grondoppervlak", expression: "grond = (L + 2 × overstek) × (B + 2 × overstek)", explanation: "L en B zijn de buitenlengte en buitenbreedte van het gebouw." },
      {
        title: "Hellingsfactor",
        expression: "factor = √(1 + (stijging ÷ 12)²)",
        explanation: "Voor een dak van 6 op 12 is de factor √1,25 ≈ 1,118. Vanuit een hoek θ is de factor 1 ÷ cos θ.",
      },
      {
        title: "Dakoppervlak en squares",
        expression: "oppervlak = grond × factor; squares = oppervlak × (1 + verlies) ÷ 100 ft²",
        explanation: "Metrische oppervlakken worden omgerekend met 1 ft² = 0,09290304 m².",
      },
      {
        title: "Pakken en rollen",
        expression: "pakken = ⌈squares × pakken per square⌉; rollen = ⌈oppervlak met verlies ÷ dekking per rol⌉",
        explanation: "Beide worden naar boven afgerond op hele eenheden.",
      },
    ],
    examples: [
      {
        title: "Huis van 40 × 30 ft, overstek 1 ft, zadeldak van 6 op 12",
        steps: [
          "Grondoppervlak = 42 × 32 = 1.344 ft²",
          "Dakoppervlak = 1.344 × √1,25 ≈ 1.502,64 ft²",
          "Met 10% verlies: 1.652,90 ft², oftewel 16,53 squares",
          "Pakken = ⌈16,53 × 3⌉ = 50",
        ],
      },
      {
        title: "Huis van 12 × 9 m, overstek 0,5 m, schilddak van 30°",
        steps: [
          "Grondoppervlak = 13 × 10 = 130 m²",
          "Hellingsfactor = 1 ÷ cos 30° ≈ 1,1547, dus het dakoppervlak ≈ 150,11 m²",
          "Met 15% verlies: 172,63 m² ÷ 0,09290304 ≈ 1.858,15 ft², oftewel 18,58 squares",
          "Pakken = ⌈18,58 × 3⌉ = 56",
        ],
      },
      {
        title: "50 × 28 ft, overstek 1,5 ft, dak van 8 op 12 met onderdakfolie",
        steps: [
          "Grondoppervlak = 53 × 31 = 1.643 ft²",
          "Hellingsfactor = √(1 + (8 ÷ 12)²) ≈ 1,2019, dus het dakoppervlak ≈ 1.974,64 ft²",
          "Met 12% verlies: 2.211,60 ft², oftewel 22,12 squares en ⌈66,35⌉ = 67 pakken",
          "Onderdakfolie met 400 ft² per rol: ⌈5,53⌉ = 6 rollen",
        ],
      },
    ],
    assumptions: [
      "Het dak heeft een eenvoudige rechthoekige plattegrond met dezelfde helling op elk dakvlak. Dakkapellen, kilgoten, schoorstenen, dakramen, L-vormige plattegronden en dakvlakken met verschillende hellingen vragen extra materiaal en moet je per deel opmeten.",
      "Een schilddak en een zadeldak op dezelfde plattegrond en met dezelfde helling hebben hetzelfde dakoppervlak; de hogere standaardmarge van het schilddak is voor het extra zaagwerk.",
      "Het aantal pakken per square en de dekking van onderdakfolie verschillen per product. Gebruik de cijfers op de verpakking.",
      "Dit is alleen een materiaalschatting. Dakconstructie, ventilatie, brandklasse en uitvoering moeten voldoen aan de instructies van de fabrikant en de lokale bouwregels.",
    ],
    faqs: [
      {
        question: "Wat is een square bij dakbedekking?",
        answer:
          "Een square is 100 ft² dakoppervlak, een vlak van 10 × 10 ft. Dakdekkers in de VS prijzen en bestellen shingles per square; 1 square is ongeveer 9,29 m².",
      },
      {
        question: "Hoeveel pakken shingles gaan er in een square?",
        answer:
          "Veel bitumen shingles zijn verpakt in drie pakken per square, maar zwaardere producten kunnen in vier of meer kleinere pakken komen. Op het etiket van het pak staat de dekking, dus controleer die en pas het aantal pakken per square aan.",
      },
      {
        question: "Waarom is het dakoppervlak groter dan het huis?",
        answer:
          "Omdat het dak schuin loopt en over de muren uitsteekt. Een dak van 6 op 12 heeft ongeveer 12% meer oppervlak dan zijn grondoppervlak, en een dak van 12 op 12 ongeveer 41% meer, nog vóór de overstek erbij komt.",
      },
    ],
    sourcesUsedFor: [
      "Een square van 100 ft² en de gangbare verpakking van drie pakken shingles per square, die per product verschilt.",
      "De algemene methode om dakbedekkingsmateriaal te schatten uit dakoppervlak, squares en een marge voor verlies.",
    ],
  },
  text: {
    units: "Eenheden",
    unitSystems: { imperial: "Amerikaans (ft)", metric: "Metrisch (m)" },
    length: "Lengte van het gebouw",
    lengthHelp: "De buitenlengte van de plattegrond van het gebouw, zonder de overstek.",
    width: "Breedte van het gebouw",
    overhang: "Overstek (goot- en gevelzijde)",
    overhangHelp: "Hoe ver het dak aan elke kant over de muren uitsteekt. Dit wordt aan beide uiteinden van de lengte en de breedte opgeteld.",
    pitchMode: "Dakhelling opgegeven als",
    pitchModes: { rise: "Stijging op 12", angle: "Hoek" },
    rise: "Stijging per 12 horizontale lengte",
    riseHelp: "Voor een dak van 6 op 12 (6/12) vul je 6 in. Stijging en horizontale lengte gebruiken dezelfde eenheid.",
    angle: "Dakhoek",
    roofType: "Daktype",
    roofTypes: { gable: "Zadeldak", hip: "Schilddak" },
    roofTypeHelp:
      "Bij dezelfde helling op elk dakvlak hebben een zadeldak en een schilddak op dezelfde plattegrond hetzelfde dakoppervlak. Schilddaken vragen meer zaagwerk, dus hun standaardmarge voor verlies is hoger.",
    waste: "Marge voor verlies",
    wasteHelp: "Extra voor zaagsnedes, starterrijen, nok- en hoekkappen en vergissingen.",
    bundles: "Pakken per square",
    bundlesHelp: "Veel bitumen shingles komen in 3 pakken per square (100 ft²), maar sommige producten wijken af. Controleer de dekking op het pak.",
    rollCoverage: "Dekking per rol onderdakfolie (optioneel)",
    rollCoverageHelp: "De netto dekking op het etiket van de rol, na overlappingen. Laat leeg om het aantal rollen over te slaan.",
    errors: {
      angle: "De dakhoek moet kleiner zijn dan 90°.",
    },
    squares: "Squares (inclusief verlies)",
    caption: "{area} dak plus {waste} verlies; 1 square = 100 ft² (9,29 m²).",
    planArea: "Grondoppervlak inclusief overstek",
    pitchFactor: "Hellingsfactor (dakoppervlak ÷ grondoppervlak)",
    pitchText: "Helling",
    pitchValue: "{rise} op 12",
    angleOut: "Dakhoek",
    roofArea: "Dakoppervlak",
    roofAreaOther: "Dakoppervlak in andere eenheden",
    areaWithWaste: "Dakoppervlak inclusief verlies",
    squaresNoWaste: "Squares zonder verlies",
    bundlesOut: "Pakken shingles",
    rolls: "Rollen onderdakfolie",
    notes: {
      hip: "Een schilddak met dezelfde helling op alle vier de dakvlakken heeft hetzelfde oppervlak als een zadeldak op dezelfde plattegrond; het vraagt alleen meer gezaagde stukken en hoekkappen.",
      shape:
        "Hierbij wordt uitgegaan van een eenvoudig rechthoekig dak. Dakkapellen, kilgoten, schoorstenen, dakramen en L-vormige plattegronden vragen extra materiaal; meet die delen apart op.",
      bundles: "Pakken worden naar boven afgerond op hele pakken. Nokkappen, starterstroken, druiplijsten, loodslabben en nagels zijn niet meegerekend.",
    },
  },
};

export default nl;
