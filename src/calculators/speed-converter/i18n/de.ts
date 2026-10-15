import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SpeedConverterText } from "../text/en";

const de: CalculatorTranslation<SpeedConverterText> = {
  content: {
    title: "Umrechner für Geschwindigkeiten",
    shortTitle: "Geschwindigkeit",
    summary: "Rechnen Sie eine Geschwindigkeit zwischen Metern pro Sekunde, Kilometern pro Stunde, Meilen pro Stunde, Fuß pro Sekunde, Knoten und Zentimetern pro Sekunde um.",
    metaTitle: "Geschwindigkeit umrechnen – km/h, mph, m/s, ft/s, Knoten",
    metaDescription: "Rechnen Sie Geschwindigkeiten zwischen km/h, mph, m/s, ft/s, Knoten und cm/s mit exakten Faktoren um und sehen Sie Ihren Wert in einer Tabelle in allen Einheiten.",
    keywords: ["Geschwindigkeit umrechnen", "km/h in mph", "mph in km/h", "m/s in km/h", "Knoten in km/h", "Fuß pro Sekunde", "Einheiten Geschwindigkeit"],
    intro: [
      "Geschwindigkeiten tauchen in vielen Einheiten auf: Verkehrsschilder zeigen km/h oder mph, Physikaufgaben verwenden m/s, Piloten und Segler rechnen in Knoten, und im Labor sind cm/s üblich. Dieser Umrechner wandelt einen Wert von einer dieser Einheiten in eine andere um und zeigt ihn gleichzeitig in allen sechs.",
      "Jede Einheit entspricht einer festen Anzahl von Metern pro Sekunde, daher besteht die Umrechnung aus einer Multiplikation und einer Division. Alle Faktoren sind exakt; eine Meile pro Stunde sind zum Beispiel genau 0,44704 m/s, weil eine Meile genau 1.609,344 m lang ist.",
    ],
    howToUse: [
      "Geben Sie die Geschwindigkeit ein, die Sie umrechnen möchten.",
      "Wählen Sie ihre Einheit unter „Von“ und die gewünschte Einheit unter „In“.",
      "Lesen Sie die umgerechnete Geschwindigkeit ab oder sehen Sie in der Tabelle nach den anderen Einheiten.",
    ],
    formulas: [
      { title: "Umrechnung über Meter pro Sekunde", expression: "Ergebnis = Wert × (m/s pro Ausgangseinheit) ÷ (m/s pro Zieleinheit)", explanation: "Jede Einheit wird zuerst in Meter pro Sekunde und dann in die Zieleinheit umgerechnet." },
      {
        title: "Exakte Faktoren",
        expression: "1 km/h = 1/3,6 m/s ≈ 0,2778 m/s\n1 mph = 0,44704 m/s\n1 ft/s = 0,3048 m/s\n1 kn = 1.852/3.600 m/s ≈ 0,5144 m/s\n1 cm/s = 0,01 m/s",
        explanation: "Sie folgen aus 1 km = 1.000 m, 1 mi = 1.609,344 m, 1 ft = 0,3048 m, 1 Seemeile = 1.852 m und 1 h = 3.600 s.",
      },
    ],
    examples: [
      { title: "Autobahntempo 100 km/h in mph", steps: ["100 km/h = 100 ÷ 3,6 ≈ 27,778 m/s", "27,778 ÷ 0,44704 ≈ 62,137 mph"] },
      { title: "Ein Boot mit 30 Knoten in km/h", steps: ["1 kn = 1,852 km/h", "30 × 1,852 = 55,56 km/h"] },
      { title: "25 mph in Fuß pro Sekunde", steps: ["25 × 0,44704 = 11,176 m/s", "11,176 ÷ 0,3048 ≈ 36,667 ft/s"] },
    ],
    assumptions: [
      "Meilen und Fuß sind die internationalen Einheiten (1 ft = 0,3048 m). Der Knoten beruht auf der internationalen Seemeile von 1.852 m.",
      "Lauf- oder Gehtempo, etwa Minuten pro Kilometer, ist nicht enthalten, weil es der Kehrwert der Geschwindigkeit ist und kein Vielfaches davon. Verwenden Sie dafür den Laufpace-Rechner.",
      "Die Ergebnisse werden mit 10 signifikanten Stellen angezeigt.",
    ],
    faqs: [
      { question: "Wie rechne ich km/h in m/s um?", answer: "Teilen Sie durch 3,6. Zum Beispiel sind 90 km/h ÷ 3,6 = 25 m/s. Von m/s in km/h multiplizieren Sie mit 3,6." },
      { question: "Ist ein Knoten schneller als eine Meile pro Stunde?", answer: "Ja. Ein Knoten ist eine Seemeile pro Stunde, und eine Seemeile (1.852 m) ist länger als eine Landmeile (1.609,344 m), daher ist 1 Knoten etwa 1,151 mph." },
      { question: "Warum fehlt das Tempo (Pace) in der Liste?", answer: "Das Tempo ist Zeit pro Strecke: Wer doppelt so schnell läuft, halbiert sein Tempo. Dieser umgekehrte Zusammenhang lässt sich nicht mit einem einzigen Umrechnungsfaktor ausdrücken, deshalb gibt es dafür einen eigenen Rechner." },
    ],
    sourcesUsedFor: [
      "Umrechnungsfaktoren für Meile pro Stunde, Fuß pro Sekunde und Knoten in Metern pro Sekunde.",
      "Die internationale Seemeile von 1.852 m, die den Knoten als 1.852 m pro Stunde festlegt.",
    ],
  },
  text: {
    value: "Wert",
    from: "Von",
    to: "In",
    unitNames: {
      ms: "Meter pro Sekunde",
      kmh: "Kilometer pro Stunde",
      mph: "Meilen pro Stunde",
      fts: "Fuß pro Sekunde",
      kn: "Knoten",
      cms: "Zentimeter pro Sekunde",
    },
    primary: "{value} {symbol} in {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} in allen Einheiten der Geschwindigkeit",
    tableUnit: "Einheit",
    tableValue: "Wert",
    note: "Die Ergebnisse werden mit 10 signifikanten Stellen angezeigt.",
  },
};

export default de;
