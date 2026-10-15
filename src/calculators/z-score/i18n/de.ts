import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ZScoreText } from "../text/en";

const de: CalculatorTranslation<ZScoreText> = {
  content: {
    title: "Z-Wert-Rechner",
    shortTitle: "Z-Wert",
    summary: "Standardisieren Sie einen Wert als z-Wert und ermitteln Sie sein Perzentil und die Randwahrscheinlichkeiten unter der Normalverteilungskurve.",
    metaTitle: "Z-Wert-Rechner – Perzentil und Normalverteilung",
    metaDescription: "Rechnen Sie einen Wert mit Mittelwert und Standardabweichung in einen z-Wert um und ermitteln Sie Perzentil, rechtsseitige und zweiseitige Wahrscheinlichkeit.",
    keywords: ["z-Wert berechnen", "z-Score", "Standardwert", "standardisieren", "Normalverteilung", "Perzentil", "Standardabweichungen vom Mittelwert", "Gaußsche Glockenkurve", "z-Transformation"],
    intro: [
      "Ein z-Wert gibt an, um wie viele Standardabweichungen ein Wert über oder unter dem Mittelwert liegt. Ein z-Wert von 0 ist genau durchschnittlich, positive Werte liegen über dem Durchschnitt und negative darunter.",
      "Da z-Werte die ursprünglichen Einheiten entfernen, lassen sich damit Ergebnisse auf verschiedenen Skalen vergleichen, etwa zwei Prüfungen mit unterschiedlichen Durchschnitten. Sind die Daten annähernd normalverteilt, liefert der z-Wert auch den Anteil der Werte unter oder über Ihrem.",
    ],
    howToUse: [
      "Geben Sie den Wert ein, den Sie einordnen möchten.",
      "Geben Sie Mittelwert und Standardabweichung der Gruppe ein, zu der er gehört. Die Standardabweichung muss positiv sein.",
      "Lesen Sie den z-Wert und die Lage in Worten ab.",
      "Nutzen Sie das Perzentil für den Anteil der Werte unter x, P(X > x) für den Anteil darüber und die zweiseitige Wahrscheinlichkeit für einen zweiseitigen Test.",
    ],
    formulas: [
      { title: "Z-Wert", expression: "z = (x − μ) ÷ σ", explanation: "μ ist der Mittelwert und σ die Standardabweichung der Verteilung." },
      { title: "Perzentil", expression: "P(X < x) = Φ(z)", explanation: "Φ ist die Verteilungsfunktion der Standardnormalverteilung: die Fläche unter der Glockenkurve links von z." },
      { title: "Rechter Rand", expression: "P(X > x) = 1 − Φ(z) = Φ(−z)", explanation: "Die Fläche rechts von z. Sie wird als Φ(−z) berechnet, um bei großem z die Genauigkeit zu erhalten." },
      { title: "Zweiseitige Wahrscheinlichkeit", expression: "P(|Z| > |z|) = 2·Φ(−|z|)", explanation: "Die Wahrscheinlichkeit eines Werts, der in beliebiger Richtung mindestens so weit vom Mittelwert entfernt ist." },
    ],
    examples: [
      {
        title: "Ein Prüfungsergebnis von 1.310 bei einem Mittelwert von 1.050 und σ = 210",
        steps: ["z = (1.310 − 1.050) ÷ 210 = 260 ÷ 210 ≈ 1,2381", "Φ(1,2381) ≈ 0,8922, das Ergebnis liegt also nahe dem 89. Perzentil", "Etwa 10,78 % der Ergebnisse sind höher"],
      },
      {
        title: "Ein Bauteil mit 58 mm bei einem Mittelwert von 70 mm und σ = 8 mm",
        steps: ["z = (58 − 70) ÷ 8 = −1,5", "Φ(−1,5) ≈ 0,0668, etwa 6,68 % der Bauteile sind also kürzer", "Zweiseitige Wahrscheinlichkeit = 2 × 0,0668 ≈ 0,1336"],
      },
    ],
    assumptions: [
      "Der z-Wert selbst gilt für jede Verteilung, Perzentil und Wahrscheinlichkeiten setzen jedoch normalverteilte Daten voraus.",
      "Mittelwert und Standardabweichung, die Sie eingeben, werden als wahre Werte der Grundgesamtheit behandelt. Bei einer kleinen Stichprobe und geschätztem σ kann eine t-Verteilung besser geeignet sein.",
      "Die Wahrscheinlichkeiten der Normalverteilung werden mit einer numerischen Näherung berechnet, die auf etwa sieben signifikante Stellen genau ist.",
    ],
    faqs: [
      { question: "Was ist ein guter z-Wert?", answer: "Das hängt davon ab, was gemessen wird. Bei Testergebnissen ist ein höherer z-Wert besser, bei etwas wie der Reaktionszeit ein niedrigerer. In einer Normalverteilung liegen etwa 68 % der Werte zwischen z = −1 und z = 1 und etwa 95 % zwischen −2 und 2." },
      { question: "Kann ein z-Wert negativ sein?", answer: "Ja. Ein negativer z-Wert bedeutet, dass der Wert unter dem Mittelwert liegt. Zum Beispiel liegt z = −2 zwei Standardabweichungen unter dem Durchschnitt." },
      { question: "Wie wandle ich einen z-Wert in ein Perzentil um?", answer: "Bestimmen Sie die Fläche unter der Kurve der Standardnormalverteilung links von z. Dieser Rechner erledigt das für Sie: z = 1,6 ergibt etwa 94,52 %, der Wert ist also höher als rund 94,5 % der Verteilung." },
    ],
    sourcesUsedFor: ["Definition des z-Werts, z = (x − μ)/σ, und der Standardnormalverteilung."],
  },
  text: {
    x: "Wert (x)",
    xHelp: "Die Beobachtung, die Sie standardisieren möchten.",
    mean: "Mittelwert (μ)",
    sd: "Standardabweichung (σ)",
    sdHelp: "Muss größer als 0 sein.",
    z: "Z-Wert",
    above: "{n} Standardabweichungen über dem Mittelwert",
    below: "{n} Standardabweichungen unter dem Mittelwert",
    atMean: "Genau auf dem Mittelwert",
    position: "Lage",
    percentile: "Perzentil, P(X < x)",
    upper: "P(X > x)",
    twoTailed: "Zweiseitig P(|Z| > |z|)",
    note: "Die Wahrscheinlichkeiten setzen voraus, dass die Werte einer Normalverteilung mit diesem Mittelwert und dieser Standardabweichung folgen.",
    unusual: "|z| ist größer als 3, was für normalverteilte Daten sehr ungewöhnlich ist. Prüfen Sie auf einen Eingabefehler oder einen Ausreißer.",
  },
};

export default de;
