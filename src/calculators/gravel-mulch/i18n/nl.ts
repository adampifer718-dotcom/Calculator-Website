import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { GravelMulchText } from "../text/en";

const nl: CalculatorTranslation<GravelMulchText> = {
  content: {
    title: "Grind- en mulchcalculator",
    shortTitle: "Grind en mulch",
    summary: "Bereken hoeveel kubieke yard of kubieke meter grind, steenslag of mulch je moet bestellen, met het gewicht, het aantal zakken en de kosten.",
    metaTitle: "Grind- en mulchcalculator – m³, ton en zakken",
    metaDescription:
      "Schat grind, steenslag of mulch voor een rechthoekig of rond vlak in kubieke yard of m³, met het gewicht in short ton of ton, het aantal zakken en de kosten.",
    keywords: ["grind berekenen", "mulch berekenen", "hoeveel grind nodig", "kuub grind", "ton grind", "steenslag berekenen", "boomschors", "zakken mulch"],
    intro: [
      "Grind, steenslag en mulch worden verkocht per volume (kubieke yard of kubieke meter) of per gewicht (Amerikaanse short ton of metrische ton). Om te weten hoeveel je moet bestellen, vermenigvuldig je de oppervlakte die je bedekt met de dikte van de laag, en gebruik je de stortdichtheid van het materiaal om dat volume om te rekenen naar een gewicht.",
      "Deze calculator werkt met rechthoekige en ronde bedden in Amerikaanse of metrische eenheden en toont het volume in beide stelsels, het gewicht, het aantal zakken als je verpakt materiaal koopt, en de kosten bij een prijs per ton of per kubieke yard.",
    ],
    howToUse: [
      "Kies Amerikaanse eenheden (voet en inch) of metrische eenheden (meter en centimeter).",
      "Kies een rechthoek of een cirkel en vul de afmetingen in.",
      "Vul de dikte in van de laag die je wilt uitspreiden.",
      "Kies het materiaal. Er is een gangbare stortdichtheid ingevuld; vervang die door het getal van je leverancier als je dat hebt.",
      "Vul eventueel een zakinhoud in, en een prijs per ton of per kubieke yard (per ton of m³ bij metrisch), om het aantal zakken en de kosten te zien.",
    ],
    formulas: [
      { title: "Oppervlakte", expression: "A = L × B, of A = π × d² ÷ 4 voor een cirkel", explanation: "L en B zijn de lengte en breedte, d de diameter." },
      {
        title: "Volume",
        expression: "V = A × dikte",
        explanation: "Met voet en inch is V (ft³) = A × dikte (in) ÷ 12 en 1 yd³ = 27 ft³. Met meter en centimeter is V (m³) = A × dikte (cm) ÷ 100.",
      },
      { title: "Gewicht", expression: "gewicht = V × stortdichtheid", explanation: "1 short ton = 2.000 lb; 1 metrische ton = 1.000 kg." },
      { title: "Zakken", expression: "zakken = ⌈V ÷ zakinhoud⌉", explanation: "Naar boven afgerond op een hele zak." },
    ],
    examples: [
      {
        title: "Grindpad van 20 ft × 4 ft, 3 in dik",
        steps: ["Volume = 20 × 4 × 3 ÷ 12 = 20 ft³", "= 20 ÷ 27 ≈ 0,74 yd³", "Gewicht = 20 × 100 = 2.000 lb = 1 short ton, dus ongeveer $45 bij $45 per ton"],
      },
      {
        title: "Rond boomvak van 3 m doorsnede met 8 cm boomschors in zakken van 50 L",
        steps: ["Oppervlakte = π × 3² ÷ 4 ≈ 7,07 m²", "Volume = 7,07 × 0,08 ≈ 0,565 m³ (565 L)", "Zakken = 565 ÷ 50 ≈ 11,3, dus koop 12 zakken; gewicht ≈ 170 kg"],
      },
      {
        title: "Ondergrond van steenslag van 12 ft × 10 ft, 4 in dik, tegen $38 per kubieke yard",
        steps: ["Volume = 12 × 10 × 4 ÷ 12 = 40 ft³ ≈ 1,48 yd³", "Gewicht = 40 × 92,6 = 3.704 lb ≈ 1,85 short ton", "Kosten = 1,48 × $38 ≈ $56,30"],
      },
    ],
    assumptions: [
      "De stortdichtheden zijn gangbare waarden voor los, droog materiaal, afgerond uit gepubliceerde tabellen. Werkelijke dichtheden variëren met gesteentesoort, vochtgehalte, korrelverdeling en verdichting; nat materiaal kan merkbaar zwaarder zijn. Vraag het na bij je leverancier.",
      "De oppervlakte wordt als vlak beschouwd en de laag als even dik. Verdichte funderingslagen vragen meer los materiaal dan hun eindvolume.",
      "De prijzen zijn wat je zelf invult; de kosten zijn exclusief bezorging, belasting en kantopsluiting of worteldoek.",
    ],
    faqs: [
      {
        question: "Hoe dik moet een laag grind of mulch zijn?",
        answer: "Decoratieve mulch wordt vaak ongeveer 2–4 in (5–10 cm) dik uitgespreid en decoratief grind 2–3 in. Opritten en paden met een verdichte fundering hebben dikkere lagen nodig; volg de richtlijnen voor je project.",
      },
      {
        question: "Hoeveel vierkante voet bedekt een kubieke yard?",
        answer: "Eén kubieke yard bedekt 324 ft² bij 1 in dikte, 108 ft² bij 3 in en 81 ft² bij 4 in. Deel 324 door de dikte in inch.",
      },
      {
        question: "Waarom noemt mijn leverancier een ander gewicht?",
        answer: "De stortdichtheid hangt af van de steensoort, de grootte van de stukken en hoe nat het materiaal is. Leveranciers kennen het gewicht van hun eigen producten, dus gebruik hun getal als je per ton bestelt.",
      },
    ],
    sourcesUsedFor: [
      "Gangbare gewichten van ongeveer 2.700 lb per kubieke yard voor grind en 2.500 lb per kubieke yard voor steenslag, gebruikt voor de standaarddichtheden.",
      "Een gangbaar gewicht van ongeveer 500 lb per kubieke yard voor gehakselde houtsnippers, gebruikt voor de standaardwaarde van mulch.",
    ],
  },
  text: {
    units: "Eenheden",
    unitSystems: { imperial: "Amerikaans (ft, in)", metric: "Metrisch (m, cm)" },
    shape: "Vorm van het vlak",
    shapes: { rectangle: "Rechthoek", circle: "Cirkel" },
    length: "Lengte",
    width: "Breedte",
    diameter: "Diameter",
    depth: "Dikte",
    depthHelp: "De uiteindelijke dikte van de laag. Decoratief grind en mulch worden vaak ongeveer 2–4 in (5–10 cm) dik uitgespreid.",
    material: "Materiaal",
    materials: { gravel: "Grind", crushedStone: "Steenslag", woodMulch: "Houtsnippers of boomschors", custom: "Anders (vul dichtheid in)" },
    density: "Stortdichtheid",
    densityHelp: "Gewicht per eenheid los volume. Er is een gangbare waarde ingevuld; het getal van je leverancier voor het exacte product is beter, omdat vocht en korrelverdeling het veranderen.",
    bag: "Zakinhoud (optioneel)",
    bagHelp: "Vul in om te zien hoeveel zakken je moet kopen in plaats van een levering in bulk.",
    priceBasis: "Prijs wordt opgegeven",
    priceBases: { weight: "Per short ton / ton", volume: "Per kubieke yard / m³" },
    price: "Prijs (optioneel)",
    priceHelp: "Laat leeg om de kostenschatting over te slaan.",
    volume: "Benodigd volume",
    caption: "{area} met een laag van {depth} dik.",
    area: "Bedekte oppervlakte",
    volumeCubicFeet: "Volume in kubieke voet",
    volumeOther: "Volume in het andere stelsel",
    weightShortTons: "Gewicht in Amerikaanse short ton",
    weightTonnes: "Gewicht in metrische ton",
    weightPounds: "Gewicht in pond",
    weightKilograms: "Gewicht in kilogram",
    bags: "Benodigde zakken",
    shortTonUnit: "short ton",
    cost: "Geschatte kosten",
    notes: {
      density: "Het gewicht gebruikt een stortdichtheid van {density}. Dichtheden variëren met vocht, korrelverdeling en verdichting; vraag het na bij je leverancier.",
      order: "Leveranciers verkopen meestal in vaste eenheden, dus rond je bestelling naar boven af en neem wat extra voor inklinken en oneffen grond.",
      shortTon: "Een Amerikaanse short ton is 2.000 lb (907,18474 kg); een metrische ton is 1.000 kg.",
    },
  },
};

export default nl;
