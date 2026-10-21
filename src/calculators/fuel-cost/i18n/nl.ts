import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FuelCostText } from "../text/en";

const nl: CalculatorTranslation<FuelCostText> = {
  content: {
    title: "Brandstofkostencalculator",
    shortTitle: "Brandstofkosten",
    summary: "Schat het brandstofverbruik en de kosten van een rit op basis van afstand, verbruik en brandstofprijs.",
    metaTitle: "Brandstofkostencalculator – kosten van een rit",
    metaDescription:
      "Bereken de brandstofkosten van een rit op basis van afstand, verbruik en brandstofprijs, in mijl en MPG of in kilometer en liter per 100 km.",
    keywords: ["brandstofkosten", "benzinekosten", "ritkosten", "mpg", "l/100km", "benzine", "diesel", "autovakantie"],
    intro: [
      "Bereken hoeveel brandstof een rit nodig heeft en wat die kost. Het werkt met mijl per gallon of met liter per 100 kilometer.",
      "Gebruik het werkelijke verbruik van je auto voor de beste schatting.",
    ],
    howToUse: [
      "Kies Amerikaanse of metrische eenheden.",
      "Vul de afstand van de rit in.",
      "Vul het verbruik en de brandstofprijs in.",
      "Lees het brandstofverbruik en de kosten af.",
    ],
    formulas: [
      { title: "Amerikaanse eenheden", expression: "gallons = mijl ÷ MPG\nkosten = gallons × prijs per gallon", explanation: "MPG staat voor mijl per gallon." },
      {
        title: "Metrische eenheden",
        expression: "liter = km × (L/100 km) ÷ 100\nkosten = liter × prijs per liter",
        explanation: "Een lager aantal L/100 km betekent een zuiniger verbruik.",
      },
    ],
    examples: [
      { title: "300 mijl bij 30 MPG, $ 3,50 per gallon", steps: ["300 ÷ 30 = 10 gallon", "10 × $ 3,50 = $ 35,00"] },
      { title: "500 km bij 6,5 L/100 km, € 1,80 per liter", steps: ["500 × 6,5 ÷ 100 = 32,5 L", "32,5 × € 1,80 = € 58,50"] },
    ],
    assumptions: [
      "Het verbruik hangt af van snelheid, belading, terrein en weer.",
      "Voor MPG worden Amerikaanse gallons gebruikt.",
      "Het kiezen van een valuta verandert alleen de weergave.",
    ],
    faqs: [
      {
        question: "Hoe bereken ik de brandstofkosten van een rit?",
        answer: "Vermenigvuldig de afstand in km met je verbruik in L/100 km en deel door 100 voor het aantal liters; vermenigvuldig dat met de literprijs. Met mijl deel je de afstand door je MPG en vermenigvuldig je met de prijs per gallon.",
      },
      { question: "Hoe reken ik MPG om naar L/100 km?", answer: "Deel 235,215 door de MPG (Amerikaanse gallons). 30 MPG is ongeveer 7,84 L/100 km." },
      { question: "Moet ik de terugreis meerekenen?", answer: "Ja, verdubbel de afstand voor een heen-en-terugreis." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    units: "Eenheden",
    unitOptions: { us: "Mijl, MPG en prijs per Amerikaanse gallon", metric: "Kilometer, L/100 km en prijs per liter" },
    distance: "Afstand van de rit",
    efficiency: "Verbruik",
    efficiencyHelp: "Mijl per gallon, of liter per 100 km.",
    price: "Brandstofprijs per gallon of liter",
    cost: "Brandstofkosten",
    fuel: "Brandstofverbruik",
    perKm: "Kosten per kilometer",
    perMile: "Kosten per mijl",
    gallons: "US gal",
  },
};

export default nl;
