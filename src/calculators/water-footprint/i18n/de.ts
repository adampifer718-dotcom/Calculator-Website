import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WaterFootprintText } from "../text/en";

const de: CalculatorTranslation<WaterFootprintText> = {
  content: {
    title: "Duschwasserrechner",
    shortTitle: "Duschwasser",
    summary: "Schätzen Sie, wie viel Wasser die Duschen Ihres Haushalts im Jahr verbrauchen, was das Erwärmen an Energie und Geld kostet und was ein Sparduschkopf einsparen würde.",
    metaTitle: "Duschwasserrechner – Liter, Gallonen und kWh",
    metaDescription: "Schätzen Sie den Wasserverbrauch beim Duschen pro Jahr aus Durchfluss, Dauer und Häufigkeit – mit Heizenergie, Kosten und Ersparnis durch einen Sparduschkopf.",
    keywords: ["Wasserverbrauch Duschen", "Duschwasser berechnen", "Liter pro Dusche", "Sparduschkopf Ersparnis", "Durchfluss Duschkopf", "Energiekosten Duschen", "Warmwasser Kosten", "Wasserfußabdruck"],
    intro: [
      "Duschen gehören in den meisten Haushalten zu den größeren Wasserverbrauchern, und weil das Wasser erwärmt wird, machen sie auch einen spürbaren Teil der Energierechnung aus. Wie viel sie verbrauchen, hängt von wenigen Dingen ab: dem Durchfluss des Duschkopfs, der Dauer jeder Dusche und wie oft geduscht wird.",
      "Geben Sie diese Werte ein, um den Wasserverbrauch pro Dusche, pro Woche und pro Jahr zu schätzen. Ergänzen Sie die Wassertemperaturen und Ihren Energiepreis, um Energie und Kosten für das Erwärmen zu schätzen, und geben Sie einen zweiten Durchfluss ein, um zu sehen, was ein anderer Duschkopf einsparen würde.",
    ],
    howToUse: [
      "Geben Sie den Durchfluss Ihres Duschkopfs in US-Gallonen oder Litern pro Minute ein. Wenn Sie ihn nicht kennen, messen Sie, wie lange es dauert, einen Eimer bekannter Größe zu füllen, und teilen Sie.",
      "Geben Sie die Dauer einer typischen Dusche, die Duschen pro Person und Woche und die Zahl der Personen ein.",
      "Geben Sie optional den Durchfluss eines Duschkopfs ein, den Sie in Betracht ziehen, um die Ersparnis zu sehen.",
      "Um die Energie zu schätzen, lassen Sie die Energieoption eingeschaltet und geben Sie die Zulauf- und die Duschtemperatur, den Wirkungsgrad des Warmwasserbereiters und, wenn Sie möchten, Ihren Preis pro kWh ein.",
    ],
    formulas: [
      {
        title: "Wasser pro Jahr",
        expression: "V(Jahr) = Durchfluss × Minuten × Duschen pro Woche × Personen × 52,1775",
        explanation: "52,1775 ist die Zahl der Wochen in einem durchschnittlichen gregorianischen Jahr (365,2425 ÷ 7). Das Ergebnis hat die Einheit des Durchflusses: Gallonen oder Liter.",
      },
      {
        title: "Heizenergie",
        expression: "E (kWh) = V (L) × 1 kg/L × 4,186 kJ/(kg·K) × (T(Dusche) − T(Zulauf)) ÷ 3.600 ÷ Wirkungsgrad",
        explanation: "4,186 kJ erwärmen 1 kg Wasser um 1 °C, und 3.600 kJ sind 1 kWh. Der Wirkungsgrad wird in Prozent eingegeben und als Bruchteil verwendet.",
      },
      {
        title: "Ersparnis",
        expression: "gespart = V(aktuell) − V(neu)",
        explanation: "Die eingesparte Energie und die eingesparten Kosten ergeben sich mit derselben Formel aus dem eingesparten Wasser.",
      },
    ],
    examples: [
      {
        title: "Eine Person, tägliche Duschen von 8 Minuten bei 2,5 gpm",
        steps: ["Pro Dusche = 2,5 × 8 = 20 gal", "Pro Woche = 20 × 7 = 140 gal", "Pro Jahr = 140 × 52,1775 = 7.304,85 gal, etwa 27.652 L"],
      },
      {
        title: "Drei Personen, 9 L/min, Wechsel auf einen Duschkopf mit 6 L/min",
        steps: [
          "Pro Woche = 9 × 6 × 5 × 3 = 810 L, also pro Jahr = 810 × 52,1775 ≈ 42.263,78 L",
          "Heizenergie = 42.263,78 × 4,186 × (38 − 15) ÷ 3.600 ÷ 0,90 ≈ 1.256 kWh pro Jahr",
          "Mit 6 L/min: 540 × 52,1775 ≈ 28.175,85 L, eine Ersparnis von etwa 14.088 L und 419 kWh im Jahr",
        ],
      },
      {
        title: "Zwei Personen, Duschen von 10 Minuten, Temperaturen in °F und ein Energiepreis",
        steps: [
          "Pro Jahr = 2,5 × 10 × 7 × 2 × 52,1775 = 18.262,125 gal ≈ 69.130 L",
          "Temperaturanstieg = (100 − 55) × 5/9 = 25 K, also Energie ≈ 69.130 × 4,186 × 25 ÷ 3.600 ÷ 0,90 ≈ 2.233 kWh, Kosten etwa 357 $ im Jahr",
          "Ein Duschkopf mit 1,8 gpm spart etwa 5.113 gal und etwa 100 $ im Jahr",
        ],
      },
    ],
    assumptions: [
      "Der Durchfluss wird für die gesamte Dusche als konstant angenommen. Der tatsächliche Durchfluss hängt vom Wasserdruck und davon ab, wie weit die Armatur geöffnet ist, daher ist ein gemessener Wert besser als der Nennwert.",
      "Ein Jahr hat 52,1775 Wochen (365,2425 ÷ 7). Wochen außer Haus oder jahreszeitlich wechselnde Gewohnheiten werden nicht modelliert.",
      "Die Energieschätzung erwärmt das gesamte Duschwasser von der Zulauf- auf die Duschtemperatur. Wärmeverluste von Rohren und Speicher werden nicht berücksichtigt, daher ist der tatsächliche Verbrauch meist etwas höher.",
      "Wasser- und Abwassergebühren sind in den Kosten nicht enthalten; nur die Energie für das Erwärmen wird berechnet.",
    ],
    faqs: [
      {
        question: "Wie viel Wasser verbraucht ein Duschkopf?",
        answer: "In den USA dürfen neue Duschköpfe höchstens 2,5 Gallonen (etwa 9,5 Liter) pro Minute verbrauchen. Duschköpfe mit dem WaterSense-Label der EPA verbrauchen 2,0 Gallonen pro Minute oder weniger. Ältere Duschköpfe können mehr verbrauchen; am sichersten ist es, Ihren zu messen.",
      },
      {
        question: "Wie kann ich den Durchfluss meiner Dusche messen?",
        answer: "Halten Sie einen Eimer bekannter Größe bei Ihrer üblichen Einstellung unter die Dusche und messen Sie, wie lange das Füllen dauert. Teilen Sie das Volumen durch die Zeit in Minuten; zum Beispiel sind 10 Liter in 75 Sekunden 10 ÷ 1,25 = 8 L/min.",
      },
      {
        question: "Was spart mehr: kürzer duschen oder ein Sparduschkopf?",
        answer: "Beides senkt den Wasserverbrauch proportional. Von 10 auf 8 Minuten zu verkürzen spart 20 %, ebenso viel wie der Wechsel von 2,5 auf 2,0 gpm. Der Rechner zeigt die Wirkung von beidem, sodass Sie beides ausprobieren können.",
      },
    ],
    sourcesUsedFor: [
      "Das WaterSense-Maximum von 2,0 Gallonen pro Minute und der US-Bundeshöchstwert von 2,5 gpm für Duschköpfe.",
      "Der US-Bundeshöchstwert für den Wasserverbrauch von Duschköpfen von 2,5 Gallonen pro Minute.",
      "Die spezifische Wärmekapazität von Wasser, 1 cal/(g·°C) = 4,186 J/(g·°C).",
    ],
  },
  text: {
    flow: "Durchfluss des Duschkopfs",
    flowHelp: "2,5 US-Gallonen pro Minute (etwa 9,5 L/min) ist der US-Bundeshöchstwert für neue Duschköpfe; Duschköpfe mit WaterSense-Label verbrauchen 2,0 gpm (etwa 7,6 L/min) oder weniger. Sie können Ihren messen, indem Sie die Zeit zum Füllen eines Eimers stoppen.",
    flowUnit: "Durchflusseinheit",
    flowUnits: { gpm: "US-Gallonen pro Minute (gpm)", lpm: "Liter pro Minute (L/min)" },
    minutes: "Minuten pro Dusche",
    showersPerWeek: "Duschen pro Woche und Person",
    people: "Anzahl der Personen",
    newFlow: "Neuer Durchfluss zum Vergleich (optional)",
    newFlowHelp: "Der Durchfluss eines Duschkopfs, den Sie in Betracht ziehen, in derselben Einheit wie oben.",
    energy: "Energie für die Warmwasserbereitung schätzen",
    energyOptions: { yes: "Ja", no: "Nein" },
    tempUnit: "Temperatureinheit",
    tempUnits: { C: "Celsius (°C)", F: "Fahrenheit (°F)" },
    inletTemp: "Kaltwasser-Zulauftemperatur",
    inletTempHelp: "Die Temperatur des Wassers, das in den Warmwasserbereiter fließt. 15 °C (59 °F) ist ein typisches Beispiel; sie schwankt mit Klima und Jahreszeit.",
    showerTemp: "Duschtemperatur",
    showerTempHelp: "Die Temperatur des gemischten Wassers am Duschkopf. 38 °C (etwa 100 °F) ist eine typische angenehme Dusche.",
    efficiency: "Wirkungsgrad des Warmwasserbereiters",
    efficiencyHelp: "Der Anteil der eingesetzten Energie, der als Wärme im Wasser ankommt. 90 % ist ein Beispiel; ältere Gasgeräte liegen oft darunter, und Wärmepumpen können deutlich über 100 % liegen.",
    price: "Energiepreis pro kWh (optional)",
    priceHelp: "Ihr Preis pro kWh Strom oder pro in kWh umgerechnetem Gas, für die jährlichen Kosten.",
    errors: {
      showerAboveInlet: "Die Duschtemperatur muss höher sein als die Zulauftemperatur.",
      inletRange: "Geben Sie eine Zulauftemperatur zwischen 0 °C (32 °F) und 40 °C (104 °F) ein.",
      showerRange: "Geben Sie eine Duschtemperatur von höchstens 60 °C (140 °F) ein.",
    },
    annual: "Duschwasser pro Jahr",
    caption: "{flow} × {minutes} min × {showers} Duschen pro Woche × {people} × {weeks} Wochen pro Jahr.",
    annualOther: "Duschwasser pro Jahr in anderen Einheiten",
    perWeek: "Duschwasser pro Woche",
    perShower: "Wasser pro Dusche",
    energyYear: "Energie für die Warmwasserbereitung pro Jahr",
    costYear: "Kosten für die Warmwasserbereitung pro Jahr",
    newAnnual: "Wasser pro Jahr mit dem neuen Durchfluss",
    waterSaved: "Eingespartes Wasser pro Jahr",
    energySaved: "Eingesparte Energie pro Jahr",
    costSaved: "Eingesparte Kosten pro Jahr",
    peopleCount: { zero: "{n} Personen", one: "{n} Person", two: "{n} Personen", few: "{n} Personen", many: "{n} Personen", other: "{n} Personen" },
    notes: {
      weeks: "Ein Jahr wird mit 52,1775 Wochen angesetzt (365,2425 Tage ÷ 7, das durchschnittliche gregorianische Jahr).",
      energy: "Heizenergie = Liter × 1 kg/L × 4,186 kJ/(kg·K) × Temperaturanstieg ÷ 3.600 ÷ Wirkungsgrad. Wärmeverluste von Rohren und Speicher sind nicht enthalten.",
      moreWater: "Der neue Durchfluss ist höher als der aktuelle, daher ist die Ersparnis negativ: Es würde mehr Wasser verbraucht.",
    },
  },
};

export default de;
