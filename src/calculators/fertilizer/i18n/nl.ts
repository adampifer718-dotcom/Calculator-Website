import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FertilizerText } from "../text/en";

const nl: CalculatorTranslation<FertilizerText> = {
  content: {
    title: "Meststofcalculator (N-P-K)",
    shortTitle: "Meststof (N-P-K)",
    summary: "Bereken hoeveel N-P-K-meststof je moet strooien om een gewenste gift stikstof, fosfaat of kali op een gazon, tuin of akker te geven.",
    metaTitle: "Meststofcalculator (N-P-K) – benodigde hoeveelheid mest",
    metaDescription:
      "Bereken hoeveel meststof je nodig hebt uit het N-P-K-gehalte, de gewenste gift per oppervlakte en het oppervlak, met de geleverde stikstof, fosfaat en kali.",
    keywords: ["meststofcalculator", "npk calculator", "bemesting berekenen", "kg n per hectare", "stikstofgift", "p2o5 naar p", "k2o naar k", "hoeveel kunstmest"],
    intro: [
      "Op zakken meststof staan drie getallen, zoals 10-10-10 of 46-0-0. Dat zijn de gewichtspercentages stikstof (N), fosfaat (P₂O₅) en kali (K₂O). Grondonderzoeken en teeltadviezen geven meestal een hoeveelheid nutriënt per oppervlakte aan, niet een hoeveelheid product, dus je moet het een in het ander omrekenen.",
      "Vul het gehalte van het product in, kies het nutriënt waarvoor je advies geldt en vul de gift en het oppervlak in. De calculator geeft de hoeveelheid product om te strooien en de hoeveelheden van alle drie de nutriënten die het levert, inclusief elementair fosfor en kalium.",
    ],
    howToUse: [
      "Vul de drie getallen van het meststofgehalte van de zak in, bijvoorbeeld 10, 20 en 10 voor een 10-20-10-product.",
      "Kies het nutriënt waarop de geadviseerde gift betrekking heeft: stikstof, fosfaat (P₂O₅) of kali (K₂O).",
      "Vul de geadviseerde gift en de eenheid in, bijvoorbeeld 1 lb per 1.000 ft² of 120 kg per hectare.",
      "Vul het oppervlak en de eenheid in. De hoeveelheid product wordt in pond getoond bij giften in pond en in kilogram bij metrische giften.",
    ],
    formulas: [
      { title: "Benodigd product", expression: "product = gift × oppervlak ÷ (gehalte % ÷ 100)", explanation: "Het gehalte % is het getal op de zak voor het gekozen nutriënt. Gift en oppervlak worden eerst naar een gemeenschappelijke eenheid omgerekend." },
      { title: "Geleverde nutriënten", expression: "N = product × N%;  P₂O₅ = product × P₂O₅%;  K₂O = product × K₂O%", explanation: "Elk percentage is het bijbehorende getal van het gehalte ÷ 100." },
      { title: "Elementair fosfor en kalium", expression: "P = P₂O₅ × 0,4364;  K = K₂O × 0,8302", explanation: "De factoren zijn de massa-aandelen 2P ÷ P₂O₅ en 2K ÷ K₂O, berekend uit de standaardatoommassa's (P 30,973762, K 39,0983, O 15,999)." },
    ],
    examples: [
      {
        title: "10-10-10 op een gazon van 5.000 ft² bij 1 lb N per 1.000 ft²",
        steps: ["Benodigde stikstof = 1 × 5.000 ÷ 1.000 = 5 lb", "Product = 5 ÷ 0,10 = 50 lb 10-10-10", "Het levert ook 5 lb P₂O₅ (≈ 2,18 lb P) en 5 lb K₂O (≈ 4,15 lb K)"],
      },
      {
        title: "Ureum (46-0-0) bij 120 kg N per hectare op 2,5 ha",
        steps: ["Benodigde stikstof = 120 × 2,5 = 300 kg", "Product = 300 ÷ 0,46 ≈ 652,17 kg ureum"],
      },
      {
        title: "15-30-15 bij 6 g fosfaat per m² op een border van 25 m²",
        steps: ["Benodigd fosfaat = 6 × 25 = 150 g", "Product = 150 ÷ 0,30 = 500 g = 0,5 kg", "Het levert ook 75 g N en 75 g K₂O"],
      },
    ],
    assumptions: [
      "Dit is alleen rekenwerk. Baseer de gift op een grondonderzoek en op lokale adviezen, en volg het etiket van het product en eventuele lokale regels over bemesting, het tijdstip en afspoeling.",
      "Het gehalte wordt opgevat als het gegarandeerde gewichtspercentage N, P₂O₅ en K₂O, zoals op etiketten staat. Bij vloeibare producten waarvan het gehalte in gewicht is opgegeven, heb je het gewicht nodig, niet het volume.",
      "De hoeveelheden gaan uit van een gelijkmatige verdeling over het hele oppervlak. De afstelling van de strooier en overlap beïnvloeden wat er werkelijk wordt gegeven.",
    ],
    faqs: [
      { question: "Waarom staan fosfor en kalium als P₂O₅ en K₂O vermeld?", answer: "Dat is een oude etiketteringsconventie. Het gehalte geeft fosfor op als het oxide P₂O₅ en kalium als K₂O, ook al bevat het product die oxiden niet als zodanig. Vermenigvuldig met ongeveer 0,436 en 0,830 voor de elementaire hoeveelheden." },
      { question: "Wat als mijn advies voor meerdere nutriënten geldt?", answer: "Bereken de hoeveelheid product voor het nutriënt dat je het meest nodig hebt en controleer dan de andere nutriënten die het levert. Zijn die te hoog of te laag, dan past een product met een andere verhouding, of losse producten per nutriënt, misschien beter." },
      { question: "Hoe reken ik lb per acre om naar kg per hectare?", answer: "1 lb per acre is ongeveer 1,121 kg per hectare, omdat een pond 0,45359237 kg is en een acre ongeveer 0,4047 ha. Je kunt de gift in beide eenheden invullen; de calculator rekent hem voor je om." },
    ],
    sourcesUsedFor: [
      "Het gehalte lezen als gewichtspercentage N, P₂O₅ en K₂O, en de nutriëntengift delen door de fractie van het gehalte.",
      "Het meststofgehalte als gegarandeerd N-P₂O₅-K₂O, en de omrekenfactoren van P₂O₅ naar P en van K₂O naar K.",
      "De atoommassa's van fosfor, kalium en zuurstof waarmee de omrekenfactoren van oxide naar element worden berekend.",
    ],
  },
  text: {
    gradeN: "Gehalte: stikstof (N)",
    gradeNHelp: "Het eerste getal op de zak, in gewichtsprocent. Bij 10-20-10 is dat 10.",
    gradeP: "Gehalte: fosfaat (P₂O₅)",
    gradePHelp: "Het tweede getal op de zak. Etiketten geven fosfor op als fosfaat (P₂O₅), niet als elementair P.",
    gradeK: "Gehalte: kali (K₂O)",
    gradeKHelp: "Het derde getal op de zak. Etiketten geven kalium op als kali (K₂O), niet als elementair K.",
    nutrient: "Nutriënt waarvoor de gift geldt",
    nutrients: { N: "Stikstof (N)", P2O5: "Fosfaat (P₂O₅)", K2O: "Kali (K₂O)" },
    rate: "Gewenste nutriëntengift",
    rateHelp: "De hoeveelheid van het gekozen nutriënt per oppervlakte-eenheid, meestal uit een grondonderzoek of een lokaal advies.",
    rateUnit: "Eenheid van de gift",
    rateUnits: { lb1000ft2: "lb per 1.000 ft²", lbAcre: "lb per acre", kgHa: "kg per hectare", gM2: "g per m²" },
    area: "Te bemesten oppervlak",
    areaUnit: "Eenheid van oppervlakte",
    areaUnits: { ft2: "Vierkante voet (ft²)", m2: "Vierkante meter (m²)", acre: "Acre", ha: "Hectare (ha)" },
    areaSymbols: { ft2: "ft²", m2: "m²", acre: "acre", ha: "ha" },
    errors: {
      zeroGrade: "Dit product bevat niets van het gekozen nutriënt. Kies een ander nutriënt of een product met een getal groter dan nul daarvoor.",
      gradeSum: "De drie getallen van het gehalte komen samen boven 100%. Controleer het etiket.",
    },
    product: "Benodigde hoeveelheid meststof",
    caption: "{rate} {nutrient} ÷ {grade} in een {label}-product, over {area}.",
    productOther: "Benodigd product in andere eenheden",
    productRate: "Productgift",
    applied: {
      N: "Gegeven stikstof (N)",
      P2O5: "Gegeven fosfaat (P₂O₅)",
      K2O: "Gegeven kali (K₂O)",
      P: "Gegeven elementair fosfor (P)",
      K: "Gegeven elementair kalium (K)",
    },
    notes: {
      others: "Dezelfde hoeveelheid product levert ook de andere nutriënten uit het gehalte, hieronder weergegeven. Komen die giften niet uit op wat je nodig hebt, gebruik dan losse producten per nutriënt.",
      elemental: "Elementaire hoeveelheden gebruiken P = P₂O₅ × {p} en K = K₂O × {k}, uit de standaardatoommassa's.",
    },
  },
};

export default nl;
