import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SpeedDistanceTimeText } from "../text/en";

const de: CalculatorTranslation<SpeedDistanceTimeText> = {
  content: {
    title: "Geschwindigkeits-, Strecken- und Zeitrechner",
    shortTitle: "Geschwindigkeit, Strecke, Zeit",
    summary: "Ermitteln Sie Durchschnittsgeschwindigkeit, zurückgelegte Strecke oder Fahrzeit aus den beiden anderen Werten.",
    metaTitle: "Geschwindigkeit, Strecke und Zeit berechnen",
    metaDescription: "Berechnen Sie Durchschnittsgeschwindigkeit, Strecke oder Fahrzeit aus den beiden anderen Werten in Kilometern und km/h oder Meilen und mph – mit Umrechnungen.",
    keywords: ["Geschwindigkeit berechnen", "Weg-Zeit-Rechner", "Fahrzeit berechnen", "Durchschnittsgeschwindigkeit", "Strecke berechnen", "km/h berechnen"],
    intro: [
      "Geschwindigkeit, Strecke und Zeit hängen über eine einfache Beziehung zusammen. Kennen Sie zwei davon, können Sie den dritten Wert berechnen.",
      "Der Rechner arbeitet mit Kilometern und km/h oder mit Meilen und mph und zeigt Umrechnungen an.",
    ],
    howToUse: [
      "Wählen Sie, was Sie berechnen möchten.",
      "Wählen Sie metrische oder imperiale Einheiten.",
      "Geben Sie die beiden bekannten Werte ein, die Zeit in Stunden und Minuten.",
      "Lesen Sie das Ergebnis ab.",
    ],
    formulas: [
      {
        title: "Der Zusammenhang",
        expression: "Geschwindigkeit = Strecke ÷ Zeit\nStrecke = Geschwindigkeit × Zeit\nZeit = Strecke ÷ Geschwindigkeit",
        explanation: "Verwenden Sie zueinander passende Einheiten, etwa km und Stunden für km/h.",
      },
    ],
    examples: [
      { title: "150 km in 2 h 30 min", steps: ["Zeit = 2,5 h", "Geschwindigkeit = 150 ÷ 2,5 = 60 km/h"] },
      { title: "90 Meilen mit 60 mph", steps: ["Zeit = 90 ÷ 60 = 1,5 h", "= 1 h 30 min"] },
    ],
    assumptions: [
      "Ergibt die Durchschnittsgeschwindigkeit über die gesamte Fahrt; die tatsächliche Geschwindigkeit kann unterwegs schwanken.",
      "Zeiten werden für die Anzeige auf die nächste Minute gerundet.",
    ],
    faqs: [
      { question: "Wie berechne ich die Durchschnittsgeschwindigkeit?", answer: "Teilen Sie die Gesamtstrecke durch die Gesamtzeit. 120 km in 1,5 Stunden ergeben 80 km/h." },
      { question: "Wie rechne ich km/h in m/s um?", answer: "Teilen Sie durch 3,6. 72 km/h sind also 20 m/s." },
      {
        question: "Ist Geschwindigkeit dasselbe wie Geschwindigkeitsvektor?",
        answer: "Der Geschwindigkeitsvektor hat zusätzlich eine Richtung. Für eine Fahrt entlang einer Route benötigen Sie in der Regel die Durchschnittsgeschwindigkeit.",
      },
    ],
    sourcesUsedFor: ["Definition von Durchschnittsgeschwindigkeit und Geschwindigkeitsvektor."],
  },
  text: {
    solve: "Berechnen",
    solveOptions: { speed: "Geschwindigkeit", distance: "Strecke", time: "Zeit" },
    units: "Einheiten",
    unitOptions: { metric: "Kilometer und km/h", imperial: "Meilen und mph" },
    distance: "Strecke",
    speed: "Geschwindigkeit",
    hours: "Stunden",
    minutes: "Minuten",
    timeZero: "Geben Sie eine Zeit über null ein.",
    distanceOut: "Strecke",
    inKm: "In Kilometern",
    inMiles: "In Meilen",
    timeOut: "Zeit",
    inHours: "In Stunden",
    speedOut: "Durchschnittsgeschwindigkeit",
    inKmh: "In km/h",
    inMph: "In mph",
    inMps: "In Metern pro Sekunde",
    hoursMinutes: "{h} h {m} min",
    hoursOnly: "{h} h",
    minutesOnly: "{m} min",
  },
};

export default de;
