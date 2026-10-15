import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AccelerationText } from "../text/en";

const de: CalculatorTranslation<AccelerationText> = {
  content: {
    title: "Beschleunigungsrechner",
    shortTitle: "Beschleunigung",
    summary: "Berechnen Sie die Beschleunigung aus einer Geschwindigkeitsänderung, aus Strecke und Zeit oder aus Kraft und Masse – in m/s², ft/s² und g.",
    metaTitle: "Beschleunigungsrechner – aus Tempo, Strecke oder Kraft",
    metaDescription: "Berechnen Sie die Beschleunigung aus einer Geschwindigkeitsänderung, aus Strecke und Zeit oder aus Kraft und Masse (a = F/m). Ergebnis in m/s², ft/s² und g.",
    keywords: ["Beschleunigung berechnen", "Beschleunigungsrechner", "Formel Beschleunigung", "m/s²", "Bremsverzögerung", "g-Kraft", "a = F/m", "0 auf 100", "Kinematik"],
    intro: [
      "Die Beschleunigung gibt an, wie schnell sich die Geschwindigkeit ändert. Ein Auto, das in 8 Sekunden aus dem Stand auf 100 km/h kommt, wird jede Sekunde um etwa 3,5 Meter pro Sekunde schneller, geschrieben 3,5 m/s².",
      "Dieser Rechner ermittelt die Beschleunigung auf drei Arten: aus Anfangs- und Endgeschwindigkeit über eine Zeit, aus der in einer Zeit zurückgelegten Strecke oder aus der resultierenden Kraft auf einen Körper und seiner Masse. Das Ergebnis wird in m/s², in ft/s² und als Vielfaches der Normfallbeschleunigung g angezeigt.",
    ],
    howToUse: [
      "Wählen Sie, was Sie kennen: eine Geschwindigkeitsänderung, eine Strecke und eine Zeit oder eine Kraft und eine Masse.",
      "Wählen Sie die Einheiten für Geschwindigkeit und Strecke, wo danach gefragt wird. Die Zeit ist immer in Sekunden, die Kraft in Newton und die Masse in Kilogramm.",
      "Geben Sie die Werte ein. Eine negative Geschwindigkeit bedeutet Bewegung in die Gegenrichtung.",
      "Lesen Sie die Beschleunigung ab. Ein negatives Ergebnis bedeutet, dass der Körper langsamer wird.",
    ],
    formulas: [
      { title: "Aus einer Geschwindigkeitsänderung", expression: "a = (v − v₀) ÷ t", explanation: "Die mittlere Beschleunigung über die Zeit t, wobei v₀ die Anfangs- und v die Endgeschwindigkeit ist." },
      { title: "Aus Strecke und Zeit", expression: "d = v₀t + ½at²  ⇒  a = 2(d − v₀t) ÷ t²", explanation: "Gilt, wenn die Beschleunigung über das ganze Intervall konstant bleibt." },
      { title: "Aus Kraft und Masse", expression: "a = F ÷ m", explanation: "Das zweite newtonsche Gesetz, mit der resultierenden Kraft F in Newton und der Masse m in Kilogramm." },
      { title: "Umrechnungen", expression: "1 ft/s² = 0,3048 m/s²\n1 g = 9,80665 m/s²", explanation: "Geschwindigkeiten werden zuerst in m/s umgerechnet (1 km/h = 1/3,6 m/s, 1 mph = 0,44704 m/s)." },
    ],
    examples: [
      {
        title: "Ein Auto beschleunigt in 8 Sekunden von 0 auf 100 km/h",
        steps: ["100 km/h = 100 ÷ 3,6 ≈ 27,778 m/s", "a = (27,778 − 0) ÷ 8 ≈ 3,472 m/s²", "Das sind etwa 0,354 g"],
      },
      {
        title: "Bremsen von 60 mph bis zum Stillstand in 4 Sekunden",
        steps: ["60 mph = 60 × 0,44704 = 26,8224 m/s", "a = (0 − 26,8224) ÷ 4 = −6,7056 m/s²", "Das Minuszeichen zeigt eine Verzögerung von etwa 0,684 g"],
      },
      {
        title: "Ein Schlitten mit 75 kg wird mit 450 N geschoben",
        steps: ["a = F ÷ m", "= 450 ÷ 75 = 6 m/s²"],
      },
    ],
    assumptions: [
      "Die Bewegung verläuft geradlinig; Geschwindigkeiten und Kräfte in der Gegenrichtung werden als negative Werte eingegeben.",
      "Die Methode mit der Geschwindigkeitsänderung liefert die mittlere Beschleunigung über das Intervall. Die Methode mit Strecke und Zeit setzt eine konstante Beschleunigung voraus.",
      "Die Methode mit Kraft und Masse verwendet die resultierende Kraft, nachdem Reibung, Luftwiderstand und andere Gegenkräfte abgezogen sind.",
    ],
    faqs: [
      { question: "Was bedeutet eine negative Beschleunigung?", answer: "Die Beschleunigung zeigt in die negative Richtung. Bei einem Körper, der sich vorwärts bewegt, heißt das, dass er langsamer wird – oft Verzögerung oder Abbremsung genannt." },
      { question: "Was ist 1 g?", answer: "Die Normfallbeschleunigung, definiert als genau 9,80665 m/s² (etwa 32,17 ft/s²). Eine Beschleunigung in g vergleicht sie mit der Schwerkraft an der Erdoberfläche." },
      { question: "Warum wird die Beschleunigung in m/s² gemessen?", answer: "Beschleunigung ist eine Geschwindigkeitsänderung (m/s) pro Zeiteinheit (s), daher ist ihre Einheit Meter pro Sekunde pro Sekunde, geschrieben m/s²." },
    ],
    sourcesUsedFor: [
      "Definition der mittleren Beschleunigung als Geschwindigkeitsänderung geteilt durch die verstrichene Zeit und ihre SI-Einheit m/s².",
      "Das zweite newtonsche Gesetz, F = ma.",
      "Die Normfallbeschleunigung, 9,80665 m/s².",
    ],
  },
  text: {
    mode: "Berechnen aus",
    modes: { velocity: "Geschwindigkeitsänderung", distance: "Strecke und Zeit", force: "Kraft und Masse" },
    speedUnit: "Geschwindigkeitseinheit",
    speedUnits: { ms: "Meter pro Sekunde (m/s)", kmh: "Kilometer pro Stunde (km/h)", mph: "Meilen pro Stunde (mph)", fts: "Fuß pro Sekunde (ft/s)" },
    initialVelocity: "Anfangsgeschwindigkeit (v₀)",
    initialHelp: "Verwenden Sie einen negativen Wert für Bewegung in die Gegenrichtung.",
    finalVelocity: "Endgeschwindigkeit (v)",
    time: "Zeit (t)",
    distanceUnit: "Längeneinheit",
    distanceUnits: { m: "Meter (m)", km: "Kilometer (km)", ft: "Fuß (ft)", mi: "Meilen (mi)" },
    distance: "Zurückgelegte Strecke (d)",
    distanceHelp: "Die geradlinige Verschiebung während der Zeit t.",
    force: "Resultierende Kraft (F)",
    forceHelp: "Die Summe aller Kräfte, die auf den Körper wirken, in Newton.",
    mass: "Masse (m)",
    acceleration: "Beschleunigung",
    formula: { velocity: "a = (v − v₀) ÷ t", distance: "a = 2(d − v₀t) ÷ t²", force: "a = F ÷ m" },
    inFeet: "In Fuß pro Sekunde zum Quadrat",
    inG: "In Vielfachen der Normfallbeschleunigung (g)",
    distanceCovered: "Zurückgelegte Strecke",
    finalVelocityResult: "Endgeschwindigkeit",
    notes: {
      negative: "Die Beschleunigung ist negativ: Bewegt sich der Körper in positiver Richtung, wird er also langsamer (er bremst ab).",
      zero: "Beschleunigung null: Die Geschwindigkeit ändert sich nicht.",
      constant: "Setzt voraus, dass die Beschleunigung während des ganzen Zeitintervalls konstant ist.",
      average: "Dies ist die mittlere Beschleunigung über das Zeitintervall; in einzelnen Momenten kann die Beschleunigung höher oder niedriger sein.",
      g: "1 g ist die Normfallbeschleunigung, 9,80665 m/s², per Definition exakt.",
    },
  },
};

export default de;
