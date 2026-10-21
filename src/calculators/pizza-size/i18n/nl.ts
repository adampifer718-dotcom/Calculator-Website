import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PizzaSizeText } from "../text/en";

const nl: CalculatorTranslation<PizzaSizeText> = {
  content: {
    title: "Pizzaformaatcalculator",
    shortTitle: "Pizzaformaat",
    summary: "Vergelijk twee pizza's op oppervlakte en op prijs per vierkante inch of vierkante centimeter om de beste deal te vinden.",
    metaTitle: "Pizzaformaatcalculator – Prijs per oppervlakte",
    metaDescription:
      "Vergelijk twee pizzaformaten op oppervlakte en prijs per vierkante inch of cm², zie welke de beste deal is en hoeveel kleine pizza's één grote evenaren.",
    keywords: [
      "pizzaformaat",
      "oppervlakte pizza",
      "prijs per cm2",
      "pizza's vergelijken",
      "grote of medium pizza",
      "welke pizza is voordeliger",
      "pizza aanbieding",
    ],
    intro: [
      "Pizzaformaten worden aangeduid met de diameter, maar wat je eet is de oppervlakte, en die groeit met het kwadraat van de diameter. Een pizza van 16 inch is maar een derde breder dan een van 12 inch, maar bevat bijna 78% meer pizza.",
      "Vul de diameter en de prijs van twee pizza's in om de oppervlakte van elk te zien, de prijs per vierkante eenheid en welke je het meest oplevert voor je geld.",
    ],
    howToUse: [
      "Kies of de diameters in inch of in centimeter zijn.",
      "Vul de diameter en de prijs van pizza A in.",
      "Vul de diameter en de prijs van pizza B in.",
      "Lees af welke pizza voordeliger is, de prijs per vierkante inch of vierkante centimeter en hoe de formaten zich tot elkaar verhouden.",
    ],
    formulas: [
      { title: "Oppervlakte", expression: "A = π × d² ÷ 4", explanation: "d is de diameter. Dit is gelijk aan π × r² met straal r = d ÷ 2." },
      { title: "Prijs per oppervlakte", expression: "prijs ÷ A", explanation: "Het laagste getal is de voordeligste keuze." },
      { title: "Verhouding van de formaten", expression: "A_B ÷ A_A = (d_B ÷ d_A)²", explanation: "Hoeveel pizza's A samen dezelfde oppervlakte hebben als één pizza B." },
    ],
    examples: [
      {
        title: "12 inch voor $12,99 tegenover 16 inch voor $18,99",
        steps: [
          "A: π × 12² ÷ 4 ≈ 113,10 in², dus $12,99 ÷ 113,10 ≈ $0,1149 per in²",
          "B: π × 16² ÷ 4 ≈ 201,06 in², dus $18,99 ÷ 201,06 ≈ $0,0944 per in²",
          "(16 ÷ 12)² ≈ 1,778, dus B heeft ongeveer 77,78% meer pizza",
        ],
      },
      {
        title: "30 cm voor € 9,50 tegenover 40 cm voor € 17,90",
        steps: [
          "A: π × 30² ÷ 4 ≈ 706,86 cm², dus € 9,50 ÷ 706,86 ≈ € 0,0134 per cm²",
          "B: π × 40² ÷ 4 ≈ 1.256,64 cm², dus € 17,90 ÷ 1.256,64 ≈ € 0,0142 per cm²",
          "Hier is de kleinere pizza goedkoper per vierkante centimeter",
        ],
      },
    ],
    assumptions: [
      "De pizza's zijn rond en de diameter is de volledige breedte, inclusief de korst.",
      "Beide pizza's zijn even dik en hebben dezelfde toppings, dus de oppervlakte is een eerlijke maat voor hoeveel eten je krijgt.",
      "Het kiezen van een valuta verandert alleen de weergave.",
    ],
    faqs: [
      {
        question: "Waarom heeft een iets grotere pizza zoveel meer oppervlakte?",
        answer: "De oppervlakte hangt af van het kwadraat van de diameter. Van 10 naar 14 inch is 40% breder, maar verdubbelt de oppervlakte bijna, omdat 1,4² = 1,96.",
      },
      {
        question: "Zijn twee medium pizza's beter dan één grote?",
        answer:
          "Vergelijk de oppervlakten. Twee pizza's van 12 inch zijn samen ongeveer 226 in², terwijl één pizza van 18 inch ongeveer 254 in² is, dus de grote is groter.",
      },
      {
        question: "Moet ik de korst meetellen?",
        answer:
          "Deze calculator telt hem mee, omdat formaten op de volledige diameter worden verkocht. Eet je de korst niet op, trek dan twee keer de breedte ervan af van de diameter van elke pizza voordat je die invult.",
      },
    ],
    sourcesUsedFor: ["De oppervlakte van een cirkel, A = πr², en de vorm ervan met de diameter."],
  },
  text: {
    unit: "Eenheid van de diameter",
    units: { in: "Inch (in)", cm: "Centimeter (cm)" },
    diameterA: "Diameter van pizza A",
    priceA: "Prijs van pizza A",
    diameterB: "Diameter van pizza B",
    priceB: "Prijs van pizza B",
    diameterHelp: "Gemeten door het midden, van rand tot rand.",
    result: "Beste prijs-kwaliteitverhouding",
    aBetter: "Pizza A is voordeliger",
    bBetter: "Pizza B is voordeliger",
    same: "Beide pizza's zijn even voordelig",
    caption: "Pizza A kost {a} en pizza B kost {b}.",
    perArea: "{price} per {unit}",
    areaA: "Oppervlakte van pizza A",
    areaB: "Oppervlakte van pizza B",
    pricePerAreaA: "Prijs van pizza A per {unit}",
    pricePerAreaB: "Prijs van pizza B per {unit}",
    aPerB: "Aantal pizza's A met samen de oppervlakte van één pizza B",
    moreA: "Extra pizza bij A ten opzichte van B",
    moreB: "Extra pizza bij B ten opzichte van A",
    sameSize: "Beide pizza's hebben dezelfde oppervlakte",
    sameSizeValue: "Zelfde formaat",
    note: "Vergelijkt de hele ronde oppervlakte, inclusief de korst. Er wordt aangenomen dat dikte en toppings gelijk zijn.",
  },
};

export default nl;
