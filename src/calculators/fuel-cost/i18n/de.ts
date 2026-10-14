import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FuelCostText } from "../text/en";

const de: CalculatorTranslation<FuelCostText> = {
  content: {
    title: "Spritkostenrechner",
    shortTitle: "Spritkosten",
    summary: "Schätzen Sie den Kraftstoffverbrauch und die Kosten einer Fahrt aus Strecke, Verbrauch und Kraftstoffpreis.",
    metaTitle: "Spritkostenrechner – Kraftstoffkosten einer Fahrt",
    metaDescription: "Berechnen Sie die Spritkosten einer Fahrt aus Strecke, Verbrauch und Kraftstoffpreis – in Kilometern und Litern pro 100 km oder in Meilen und MPG.",
    keywords: ["Spritkosten berechnen", "Benzinkosten", "Fahrtkosten berechnen", "Spritverbrauch", "l/100 km", "Dieselkosten", "Tankkosten"],
    intro: [
      "Ermitteln Sie, wie viel Kraftstoff eine Fahrt benötigt und was sie kostet. Der Rechner funktioniert mit Meilen pro Gallone oder mit Litern pro 100 Kilometer.",
      "Verwenden Sie den tatsächlichen Verbrauch Ihres Autos im Alltag, um die beste Schätzung zu erhalten.",
    ],
    howToUse: [
      "Wählen Sie US-Einheiten oder metrische Einheiten.",
      "Geben Sie die Strecke der Fahrt ein.",
      "Geben Sie den Verbrauch und den Kraftstoffpreis ein.",
      "Lesen Sie den Kraftstoffverbrauch und die Kosten ab.",
    ],
    formulas: [
      {
        title: "US-Einheiten",
        expression: "Gallonen = Meilen ÷ MPG\nKosten = Gallonen × Preis pro Gallone",
        explanation: "MPG steht für Meilen pro Gallone (miles per gallon).",
      },
      {
        title: "Metrische Einheiten",
        expression: "Liter = km × (L/100 km) ÷ 100\nKosten = Liter × Preis pro Liter",
        explanation: "Ein niedrigerer Wert in L/100 km bedeutet einen geringeren Verbrauch.",
      },
    ],
    examples: [
      { title: "300 Meilen bei 30 MPG, 3,50 $ pro Gallone", steps: ["300 ÷ 30 = 10 Gallonen", "10 × 3,50 $ = 35,00 $"] },
      { title: "500 km bei 6,5 L/100 km, 1,80 € pro Liter", steps: ["500 × 6,5 ÷ 100 = 32,5 L", "32,5 × 1,80 € = 58,50 €"] },
    ],
    assumptions: [
      "Der Verbrauch hängt von Geschwindigkeit, Beladung, Gelände und Wetter ab.",
      "Für MPG werden US-Gallonen verwendet.",
      "Die Wahl einer Währung ändert nur die Formatierung.",
    ],
    faqs: [
      {
        question: "Wie berechne ich die Spritkosten einer Fahrt?",
        answer: "Multiplizieren Sie die Strecke in km mit dem Verbrauch in L/100 km und teilen Sie durch 100, um die Liter zu erhalten; multiplizieren Sie diese dann mit dem Literpreis. Bei US-Einheiten teilen Sie die Strecke durch die MPG und multiplizieren mit dem Preis pro Gallone.",
      },
      {
        question: "Wie rechne ich MPG in L/100 km um?",
        answer: "Teilen Sie 235,215 durch den MPG-Wert (US-Gallonen). 30 MPG entsprechen etwa 7,84 L/100 km.",
      },
      { question: "Sollte ich Hin- und Rückfahrt berechnen?", answer: "Ja, verdoppeln Sie für eine Hin- und Rückfahrt die Strecke." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    units: "Einheiten",
    unitOptions: { us: "Meilen, MPG und Preis pro US-Gallone", metric: "Kilometer, L/100 km und Preis pro Liter" },
    distance: "Strecke",
    efficiency: "Verbrauch",
    efficiencyHelp: "Meilen pro Gallone oder Liter pro 100 km.",
    price: "Kraftstoffpreis pro Gallone oder Liter",
    cost: "Spritkosten",
    fuel: "Kraftstoffverbrauch",
    perKm: "Kosten pro Kilometer",
    perMile: "Kosten pro Meile",
    gallons: "US-Gal.",
  },
};

export default de;
