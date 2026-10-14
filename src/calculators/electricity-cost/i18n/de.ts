import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ElectricityCostText } from "../text/en";

const de: CalculatorTranslation<ElectricityCostText> = {
  content: {
    title: "Stromkostenrechner",
    shortTitle: "Stromkosten",
    summary: "Ermitteln Sie, was der Betrieb eines Geräts kostet – anhand der Leistung, der Nutzungsdauer und Ihres Strompreises.",
    metaTitle: "Stromkostenrechner – Betriebskosten von Geräten berechnen",
    metaDescription:
      "Berechnen Sie den Stromverbrauch in kWh und die Betriebskosten eines Geräts pro Tag, pro Zeitraum und pro Jahr aus seiner Leistung in Watt und Ihrem Strompreis.",
    keywords: ["Stromkosten berechnen", "Stromverbrauch berechnen", "kWh Kosten", "Stromkostenrechner", "Gerät Stromverbrauch", "Watt in kWh", "Stromrechnung"],
    intro: [
      "Strom wird nach Kilowattstunden (kWh) abgerechnet: 1.000 Watt für eine Stunde. Multiplizieren Sie den Verbrauch mit Ihrem Preis pro kWh, um die Kosten zu erhalten.",
      "Die Leistung finden Sie auf dem Typenschild des Geräts, Ihren Arbeitspreis auf der Stromrechnung.",
    ],
    howToUse: [
      "Geben Sie die Nennleistung in Watt ein.",
      "Geben Sie ein, wie viele Stunden pro Tag und an wie vielen Tagen das Gerät läuft.",
      "Geben Sie Ihren Preis pro kWh ein.",
      "Lesen Sie die Kosten und den Energieverbrauch ab.",
    ],
    formulas: [
      { title: "Energie", expression: "kWh = Watt × Stunden pro Tag × Tage ÷ 1.000", explanation: "Rechnet Wattstunden in Kilowattstunden um." },
      { title: "Kosten", expression: "Kosten = kWh × Preis pro kWh", explanation: "Verwendet den Arbeitspreis Ihres Tarifs." },
    ],
    examples: [
      { title: "Ein 100-W-Gerät, 5 Stunden täglich, 30 Tage lang zu 0,15 $/kWh", steps: ["100 × 5 × 30 ÷ 1.000 = 15 kWh", "15 × 0,15 $ = 2,25 $"] },
      { title: "Ein 1.500-W-Heizgerät, 1 Stunde täglich, 30 Tage lang zu 0,20 $/kWh", steps: ["1.500 × 1 × 30 ÷ 1.000 = 45 kWh", "45 × 0,20 $ = 9,00 $"] },
    ],
    assumptions: [
      "Es wird angenommen, dass das Gerät im Betrieb seine volle Nennleistung aufnimmt. Thermostate, Taktbetrieb und wechselnde Lasten verbrauchen meist weniger.",
      "Grundgebühren, Steuern, zeitabhängige Tarife und Standby-Verbrauch sind nicht enthalten.",
      "Die Wahl der Währung ändert nur die Formatierung.",
    ],
    faqs: [
      { question: "Was ist eine Kilowattstunde?", answer: "Die Energie, die ein Gerät mit 1.000 Watt in einer Stunde verbraucht." },
      {
        question: "Wo finde ich die Leistung eines Geräts?",
        answer: "Auf dem Typenschild oder in der Bedienungsanleitung. Ist nur die Stromstärke in Ampere angegeben, multiplizieren Sie sie mit der Spannung, um die Leistung näherungsweise zu erhalten.",
      },
      {
        question: "Wie senke ich die Betriebskosten?",
        answer: "Nutzen Sie effiziente Geräte, verkürzen Sie die Nutzungsdauer und prüfen Sie, ob Ihr Tarif günstigere Nebenzeiten bietet.",
      },
    ],
    sourcesUsedFor: ["Definition von Watt und Kilowattstunde sowie der Abrechnung des Stromverbrauchs."],
  },
  text: {
    power: "Nennleistung",
    powerHelp: "Laut Typenschild, z. B. 100 W. 1 kW entspricht 1.000 W.",
    hours: "Nutzung pro Tag",
    days: "Anzahl der Tage",
    rate: "Strompreis pro kWh",
    cost: "Kosten für {days} Tage",
    energy: "Energieverbrauch",
    perDay: "Kosten pro Tag",
    perYear: "Kosten pro Jahr (365 Tage)",
    note: "Es wird angenommen, dass das Gerät im Betrieb stets seine Nennleistung aufnimmt. Der tatsächliche Verbrauch schwankt oft, und Standby-Verbrauch ist nicht enthalten.",
  },
};

export default de;
