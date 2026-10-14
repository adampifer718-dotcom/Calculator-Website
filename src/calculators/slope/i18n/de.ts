import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SlopeText } from "../text/en";

const de: CalculatorTranslation<SlopeText> = {
  content: {
    title: "Steigungsrechner",
    shortTitle: "Steigung",
    summary: "Ermitteln Sie die Steigung zwischen zwei Punkten sowie Geradengleichung, y-Achsenabschnitt, Winkel und Abstand.",
    metaTitle: "Steigungsrechner – Steigung aus zwei Punkten",
    metaDescription: "Berechnen Sie die Steigung einer Geraden durch zwei Punkte – mit der Geradengleichung y = mx + b, dem y-Achsenabschnitt, dem Winkel und dem Abstand der Punkte.",
    keywords: ["Steigung berechnen", "Steigungsdreieck", "Geradengleichung", "y = mx + b", "Steigung zwei Punkte", "y-Achsenabschnitt", "lineare Funktion"],
    intro: [
      "Die Steigung gibt an, wie steil eine Gerade ist: um wie viel sich y bei jedem Schritt in x ändert. Man beschreibt sie oft als Höhenunterschied pro horizontaler Strecke.",
      "Geben Sie zwei Punkte ein, und der Rechner liefert zusätzlich die Gleichung der Geraden durch diese Punkte.",
    ],
    howToUse: [
      "Geben Sie die Koordinaten des ersten Punkts (x₁, y₁) ein.",
      "Geben Sie den zweiten Punkt (x₂, y₂) ein.",
      "Lesen Sie Steigung, Gleichung, Achsenabschnitt, Winkel und Abstand ab.",
    ],
    formulas: [
      { title: "Steigung", expression: "m = (y₂ − y₁) ÷ (x₂ − x₁)", explanation: "Nicht definiert, wenn x₁ = x₂ (eine senkrechte Gerade)." },
      { title: "Geradengleichung", expression: "y = mx + b, wobei b = y₁ − m × x₁", explanation: "b ist der Punkt, an dem die Gerade die y-Achse schneidet." },
      { title: "Winkel und Abstand", expression: "θ = arctan(m)\nd = √((x₂ − x₁)² + (y₂ − y₁)²)", explanation: "Der Winkel wird von der positiven x-Achse aus gemessen." },
    ],
    examples: [
      { title: "Punkte (1, 3) und (4, 9)", steps: ["m = (9 − 3) ÷ (4 − 1) = 6 ÷ 3 = 2", "b = 3 − 2 × 1 = 1, also y = 2x + 1"] },
      { title: "Punkte (−2, 5) und (3, −5)", steps: ["m = (−5 − 5) ÷ (3 − (−2)) = −10 ÷ 5", "= −2"] },
    ],
    assumptions: [
      "Senkrechte Geraden (x₁ = x₂) haben keine definierte Steigung und werden abgelehnt.",
      "Die Ergebnisse werden mit 6 Nachkommastellen angezeigt.",
    ],
    faqs: [
      { question: "Was bedeutet eine negative Steigung?", answer: "Die Gerade fällt von links nach rechts." },
      { question: "Welche Steigung hat eine waagerechte Gerade?", answer: "0, weil sich y nicht ändert." },
      {
        question: "Wie hängen Steigung und Winkel zusammen?",
        answer: "Die Steigung ist der Tangens des Winkels, den die Gerade mit der x-Achse bildet. Eine Steigung von 1 entspricht 45°.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    vertical: "x₂ muss sich von x₁ unterscheiden. Eine senkrechte Gerade hat keine definierte Steigung.",
    slope: "Steigung (m)",
    caption: "Höhenunterschied {rise} auf einer horizontalen Strecke von {run}.",
    equation: "Geradengleichung",
    intercept: "y-Achsenabschnitt (b)",
    angle: "Winkel zur x-Achse",
    degrees: "Grad",
    distance: "Abstand der Punkte",
  },
};

export default de;
