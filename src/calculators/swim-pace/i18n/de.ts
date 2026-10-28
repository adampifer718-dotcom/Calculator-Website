import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SwimPaceText } from "../text/en";

const de: CalculatorTranslation<SwimPaceText> = {
  content: {
    title: "Schwimmpace-Rechner",
    shortTitle: "Schwimmpace",
    summary: "Ermitteln Sie Ihre Schwimmpace pro 100 m oder 100 yd aus Strecke und Zeit oder die Zeit für eine Strecke bei einer bestimmten Pace.",
    metaTitle: "Schwimmpace-Rechner – Pace pro 100 m und 100 yd",
    metaDescription: "Berechnen Sie Ihre Schwimmpace pro 100 Meter oder 100 Yards aus Strecke und Zeit oder die Endzeit aus einer Pace – mit Geschwindigkeit und Zwischenzeiten.",
    keywords: ["Schwimmpace berechnen", "Pace Schwimmen", "Pace pro 100 m", "Schwimmgeschwindigkeit", "Schwimmzeit berechnen", "Triathlon Schwimmen", "100-m-Zeit"],
    intro: [
      "Schwimmerinnen und Schwimmer messen die Pace meist als Zeit pro 100 Meter oder 100 Yards. So lässt sich eine Trainingseinheit im Becken mit einem Freiwasserschwimmen oder einem Wettkampf vergleichen, unabhängig von der Gesamtstrecke.",
      "Geben Sie eine Strecke und eine Zeit ein, um Ihre Pace in beiden Einheiten, Ihre Geschwindigkeit und die Zeiten für gängige Strecken bei dieser Pace zu erhalten. Oder wechseln Sie den Modus, geben Sie eine Zielpace ein und sehen Sie, wie lange eine Strecke dauert.",
    ],
    howToUse: [
      "Wählen Sie, ob die Pace oder die Gesamtzeit berechnet werden soll.",
      "Geben Sie die Strecke ein und wählen Sie Meter oder Yards.",
      "Geben Sie Ihre Zeit in Stunden, Minuten und Sekunden ein oder die Pace pro 100 m bzw. 100 yd.",
      "Lesen Sie Pace, Geschwindigkeit und die hochgerechneten Zeiten für 50 m bis 1.500 m ab.",
    ],
    formulas: [
      { title: "Pace", expression: "Pace pro 100 m = Zeit (s) ÷ Strecke (m) × 100", explanation: "Angezeigt als Minuten:Sekunden, auf die Sekunde gerundet." },
      {
        title: "Zeit aus der Pace",
        expression: "Zeit = Pace pro 100 m × Strecke (m) ÷ 100",
        explanation: "Eine Pace pro 100 yd wird zuerst durch 0,9144 geteilt, um die Pace pro 100 m zu erhalten.",
      },
      {
        title: "Yards und Meter",
        expression: "1 yd = 0,9144 m exakt\nPace pro 100 yd = Pace pro 100 m × 0,9144",
        explanation: "100 Yards sind etwas kürzer als 100 Meter, daher ist die Pace pro 100 yd schneller.",
      },
      {
        title: "Geschwindigkeit",
        expression: "Geschwindigkeit (m/s) = 100 ÷ Pace pro 100 m (s)\nkm/h = m/s × 3,6",
        explanation: "Durchschnittsgeschwindigkeit über die gesamte Strecke.",
      },
    ],
    examples: [
      {
        title: "1.500 m in 27:30",
        steps: ["27:30 = 1.650 s", "1.650 ÷ 1.500 × 100 = 110 s = 1:50 pro 100 m", "Pro 100 yd: 110 × 0,9144 ≈ 101 s = 1:41; Geschwindigkeit ≈ 0,909 m/s"],
      },
      {
        title: "500 yd in 7:05",
        steps: ["7:05 = 425 s", "425 ÷ 500 × 100 = 85 s = 1:25 pro 100 yd", "Pro 100 m: 85 ÷ 0,9144 ≈ 93 s = 1:33"],
      },
      {
        title: "1.650 yd bei 1:30 pro 100 yd",
        steps: ["1.650 yd ÷ 100 = 16,5 Abschnitte zu 100 yd", "16,5 × 90 s = 1.485 s", "1.485 s = 24:45"],
      },
    ],
    assumptions: [
      "Die Pace ist ein Durchschnitt über die gesamte Strecke; die hochgerechneten Zeiten setzen voraus, dass Sie diese Pace auf jeder Strecke halten könnten, was bei deutlich längeren Strecken selten zutrifft.",
      "Beckenlänge und Zahl der Wenden beeinflussen die Zeiten: Dieselbe Strecke ist im 25-m-Becken meist etwas schneller als im 50-m-Becken.",
      "Die angezeigten Zeiten sind auf die Sekunde gerundet.",
    ],
    faqs: [
      {
        question: "Warum ist meine Pace pro 100 yd schneller als pro 100 m?",
        answer: "100 Yards sind 91,44 Meter, daher brauchen Sie dafür weniger Zeit. Bei gleicher Geschwindigkeit ist die Pace pro 100 yd etwa 8,6 % niedriger als die Pace pro 100 m.",
      },
      {
        question: "Was ist eine gute Schwimmpace?",
        answer: "Das hängt von Alter, Erfahrung und Strecke ab. Viele Freizeitschwimmerinnen und -schwimmer liegen bei etwa 2 bis 3 Minuten pro 100 m, trainierte Langstreckenschwimmer oft deutlich unter 1:30.",
      },
      {
        question: "Kann ich den Rechner auch fürs Freiwasser nutzen?",
        answer: "Ja, wenn Sie die Strecke kennen. GPS-Strecken im Freiwasser können ungenau sein, daher ist die Pace nur so gut wie die gemessene Strecke.",
      },
    ],
    sourcesUsedFor: ["Die exakte Umrechnung 1 yd = 0,9144 m, verwendet zwischen Yard- und Meterbecken."],
  },
  text: {
    mode: "Berechnen",
    modes: { pace: "Pace aus Strecke und Zeit", time: "Zeit aus Strecke und Pace" },
    distance: "Strecke",
    unit: "Streckeneinheit",
    units: { m: "Meter (m)", yd: "Yards (yd)" },
    hours: "Stunden",
    minutes: "Minuten",
    seconds: "Sekunden",
    timeZero: "Geben Sie eine Zeit über 0 ein.",
    paceMinutes: "Pace: Minuten",
    paceSeconds: "Pace: Sekunden",
    paceUnit: "Pace pro",
    paceUnits: { m: "100 m", yd: "100 yd" },
    paceZero: "Geben Sie eine Pace über 0 ein.",
    pace: "Pace pro 100 {unit}",
    time: "Gesamtzeit",
    caption: "{distance} in {time}.",
    pace100m: "Pace pro 100 m",
    pace100yd: "Pace pro 100 yd",
    speedMs: "Geschwindigkeit (m/s)",
    speedKmh: "Geschwindigkeit (km/h)",
    distanceM: "Strecke in Metern",
    table: {
      caption: "Hochgerechnete Zeiten bei gleichmäßiger Pace",
      distance: "Strecke",
      time: "Zeit",
    },
    notes: {
      even: "Die hochgerechneten Zeiten setzen dieselbe Pace über die gesamte Strecke voraus. Längere Strecken sind pro 100 meist langsamer, und die Wenden unterscheiden sich zwischen 25-m-, 50-m- und 25-yd-Becken.",
    },
  },
};

export default de;
