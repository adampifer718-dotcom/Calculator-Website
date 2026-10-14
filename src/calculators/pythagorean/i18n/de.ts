import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PythagoreanText } from "../text/en";

const de: CalculatorTranslation<PythagoreanText> = {
  content: {
    title: "Satz-des-Pythagoras-Rechner",
    shortTitle: "Satz des Pythagoras",
    summary: "Ermitteln Sie die fehlende Seite eines rechtwinkligen Dreiecks mit a² + b² = c².",
    metaTitle: "Satz-des-Pythagoras-Rechner – fehlende Seite berechnen",
    metaDescription:
      "Berechnen Sie mit dem Satz des Pythagoras a² + b² = c² die Hypotenuse oder eine fehlende Kathete eines rechtwinkligen Dreiecks sowie Fläche und Umfang.",
    keywords: ["Satz des Pythagoras", "Pythagoras Rechner", "Hypotenuse berechnen", "Kathete berechnen", "rechtwinkliges Dreieck", "a² + b² = c²"],
    intro: [
      "In einem rechtwinkligen Dreieck ist das Quadrat der Hypotenuse gleich der Summe der Quadrate der beiden anderen Seiten: a² + b² = c².",
      "Geben Sie zwei Seiten ein, um die dritte zu berechnen. Der Rechner zeigt außerdem Fläche und Umfang des Dreiecks.",
    ],
    howToUse: [
      "Wählen Sie, ob Sie die Hypotenuse oder eine Kathete berechnen möchten.",
      "Geben Sie die beiden bekannten Seiten in derselben Einheit ein.",
      "Lesen Sie die fehlende Seite, die Fläche und den Umfang ab.",
    ],
    formulas: [
      { title: "Hypotenuse", expression: "c = √(a² + b²)", explanation: "Die Hypotenuse ist die längste Seite und liegt dem rechten Winkel gegenüber." },
      { title: "Fehlende Kathete", expression: "a = √(c² − b²)", explanation: "Die Hypotenuse muss länger sein als die bekannte Kathete." },
    ],
    examples: [
      { title: "Katheten 3 und 4", steps: ["c = √(3² + 4²) = √25", "= 5"] },
      { title: "Hypotenuse 13, Kathete 5", steps: ["a = √(13² − 5²) = √144", "= 12"] },
    ],
    assumptions: [
      "Das Dreieck hat einen rechten Winkel.",
      "Alle Seiten haben dieselbe Einheit; die Ergebnisse werden mit 6 Nachkommastellen angezeigt.",
    ],
    faqs: [
      {
        question: "Gilt der Satz des Pythagoras für alle Dreiecke?",
        answer: "Nein, nur für rechtwinklige Dreiecke. Für andere Dreiecke benötigen Sie den Kosinussatz.",
      },
      {
        question: "Was ist ein pythagoreisches Tripel?",
        answer: "Drei ganze Zahlen, die a² + b² = c² erfüllen, zum Beispiel 3, 4, 5 oder 5, 12, 13.",
      },
      { question: "Welche Seite ist die Hypotenuse?", answer: "Die längste Seite, die dem rechten Winkel gegenüberliegt." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    solve: "Gesucht",
    modes: { hypotenuse: "Hypotenuse (c) aus beiden Katheten", leg: "Eine Kathete aus Hypotenuse und anderer Kathete" },
    a: "Kathete a",
    b: "Kathete b",
    c: "Hypotenuse c",
    leg: "Bekannte Kathete",
    legTooLong: "Eine Kathete muss kürzer als die Hypotenuse sein.",
    missingLeg: "Fehlende Kathete",
    hypotenuse: "Hypotenuse (c)",
    area: "Fläche des Dreiecks",
    perimeter: "Umfang",
  },
};

export default de;
