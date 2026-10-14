import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PValueText } from "../text/en";

const de: CalculatorTranslation<PValueText> = {
  content: {
    title: "p-Wert-Rechner",
    shortTitle: "p-Wert",
    summary: "Ermitteln Sie den p-Wert für einen z-Wert oder t-Wert bei einem zweiseitigen, linksseitigen oder rechtsseitigen Test.",
    metaTitle: "p-Wert-Rechner – aus z-Wert oder t-Wert",
    metaDescription: "Berechnen Sie den p-Wert aus einem z-Wert oder einem t-Wert mit Freiheitsgraden – für zweiseitige, linksseitige oder rechtsseitige Hypothesentests.",
    keywords: ["p-Wert berechnen", "p-Wert", "z-Wert", "t-Wert", "Hypothesentest", "Signifikanz", "t-Test", "Statistik"],
    intro: [
      "Ein p-Wert gibt an, wie überraschend ein Testergebnis wäre, wenn die Nullhypothese zuträfe. Kleine p-Werte deuten darauf hin, dass die Daten unter der Nullhypothese unwahrscheinlich sind.",
      "Geben Sie die Teststatistik aus einem z-Test oder t-Test ein und wählen Sie die Richtung Ihrer Alternativhypothese.",
    ],
    howToUse: [
      "Wählen Sie einen z-Wert oder einen t-Wert.",
      "Geben Sie die Teststatistik ein, bei einem t-Wert außerdem die Freiheitsgrade.",
      "Wählen Sie zweiseitig, linksseitig oder rechtsseitig.",
      "Vergleichen Sie den p-Wert mit Ihrem Signifikanzniveau, zum Beispiel 0,05.",
    ],
    formulas: [
      { title: "Linksseitig", expression: "p = P(T ≤ t)", explanation: "Die Wahrscheinlichkeit eines Werts, der mindestens so niedrig ist wie die Teststatistik." },
      { title: "Rechtsseitig", expression: "p = P(T ≥ t)", explanation: "Die Wahrscheinlichkeit eines Werts, der mindestens so hoch ist." },
      { title: "Zweiseitig", expression: "p = 2 × P(T ≥ |t|)", explanation: "Berücksichtigt extreme Werte in beide Richtungen." },
    ],
    examples: [
      { title: "z = 1,96, zweiseitig", steps: ["P(Z ≥ 1,96) ≈ 0,025", "p = 2 × 0,025 ≈ 0,05"] },
      { title: "z = −1,645, linksseitig", steps: ["P(Z ≤ −1,645)", "≈ 0,05"] },
    ],
    assumptions: [
      "Für z wird die Standardnormalverteilung verwendet, für t die Student-t-Verteilung.",
      "Die Teststatistik muss aus einem Test stammen, dessen Voraussetzungen erfüllt sind.",
      "Die Anzeige erfolgt mit 6 signifikanten Stellen; sehr kleine Werte werden in wissenschaftlicher Schreibweise dargestellt.",
    ],
    faqs: [
      {
        question: "Was ist ein guter p-Wert?",
        answer: "Es gibt keine allgemeingültige Schwelle. Üblich ist 0,05: Ergebnisse, die so extrem sind, würden dann in weniger als 5 % der Fälle auftreten, wenn die Nullhypothese zuträfe.",
      },
      {
        question: "Sollte ich einen z-Wert oder einen t-Wert verwenden?",
        answer: "Verwenden Sie t, wenn die Standardabweichung der Grundgesamtheit unbekannt ist und aus der Stichprobe geschätzt wird; z, wenn sie bekannt ist oder die Stichprobe groß ist.",
      },
      {
        question: "Was ist der Unterschied zwischen einseitigen und zweiseitigen Tests?",
        answer: "Ein einseitiger Test sucht nur nach einem Effekt in eine Richtung; ein zweiseitiger Test berücksichtigt beide Richtungen.",
      },
    ],
    sourcesUsedFor: [
      "Definitionen der Normalverteilung und der Student-t-Verteilung sowie kritische Werte zur Überprüfung der Ergebnisse.",
    ],
  },
  text: {
    distribution: "Teststatistik",
    distributions: { z: "z-Wert (Normalverteilung)", t: "t-Wert (Student-t)" },
    statistic: "Wert der Teststatistik",
    df: "Freiheitsgrade",
    tail: "Alternativhypothese",
    tails: { two: "Zweiseitig (≠)", left: "Linksseitig (<)", right: "Rechtsseitig (>)" },
    pValue: "p-Wert",
    sig05: "Signifikant bei α = 0,05?",
    sig01: "Signifikant bei α = 0,01?",
    yes05: "Ja (p < 0,05)",
    no05: "Nein (p ≥ 0,05)",
    yes01: "Ja (p < 0,01)",
    no01: "Nein (p ≥ 0,01)",
    note: "Ein p-Wert ist die Wahrscheinlichkeit eines mindestens so extremen Ergebnisses unter der Annahme, dass die Nullhypothese zutrifft. Er ist nicht die Wahrscheinlichkeit, dass die Nullhypothese wahr ist.",
  },
};

export default de;
