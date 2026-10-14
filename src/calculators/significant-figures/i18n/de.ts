import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SigFigText } from "../text/en";

// Numbers that are typed into or shown by this calculator keep universal notation
// (dot decimals, comma grouping), because the decimal point is part of the calculation.
const de: CalculatorTranslation<SigFigText> = {
  content: {
    title: "Rechner für signifikante Stellen",
    shortTitle: "Signifikante Stellen",
    summary: "Zählen Sie die signifikanten Stellen einer Zahl oder runden Sie eine Zahl auf eine gewählte Anzahl signifikanter Stellen.",
    metaTitle: "Rechner für signifikante Stellen – zählen und runden",
    metaDescription: "Zählen Sie die signifikanten Stellen jeder Zahl, auch bei Dezimalzahlen und E-Notation, oder runden Sie auf eine feste Stellenzahl – mit wissenschaftlicher Schreibweise.",
    keywords: ["signifikante Stellen", "geltende Ziffern", "signifikante Ziffern", "auf signifikante Stellen runden", "Rundung Chemie", "wesentliche Stellen"],
    intro: [
      "Signifikante Stellen zeigen, wie genau eine Zahl bekannt ist. Dieser Rechner zählt sie nach den üblichen Regeln oder rundet eine Zahl auf die von Ihnen gewählte Genauigkeit.",
      "Geben Sie die Zahl genau so ein, wie sie geschrieben ist, denn nachgestellte Nullen und der Dezimalpunkt verändern die Anzahl.",
    ],
    howToUse: [
      "Wählen Sie, ob gezählt oder gerundet werden soll.",
      "Geben Sie die Zahl genau so ein, wie sie geschrieben ist, einschließlich nachgestellter Nullen.",
      "Geben Sie beim Runden an, wie viele signifikante Stellen erhalten bleiben sollen.",
    ],
    formulas: [
      {
        title: "Zählregeln",
        expression: "1. Ziffern ungleich null sind signifikant.\n2. Nullen zwischen Ziffern ungleich null sind signifikant.\n3. Führende Nullen sind nie signifikant.\n4. Nachgestellte Nullen sind nur mit Dezimalpunkt signifikant.",
        explanation: "Diese Regeln werden in den meisten Chemie- und Physikkursen gelehrt.",
      },
      {
        title: "Runden",
        expression: "Behalten Sie n Ziffern ab der ersten Ziffer ungleich null und runden Sie die letzte.",
        explanation: "Die wissenschaftliche Schreibweise beseitigt jede Mehrdeutigkeit bei nachgestellten Nullen.",
      },
    ],
    examples: [
      {
        title: "Wie viele signifikante Stellen hat 0.004050?",
        steps: ["Die führenden Nullen 0.00 zählen nicht", "4, 0 und die nachgestellten 5 0 zählen: 4 signifikante Stellen"],
      },
      {
        title: "123,456 auf 3 signifikante Stellen runden",
        steps: ["1, 2, 3 bleiben; die nächste Ziffer ist 4, also wird abgerundet", "123,000 bzw. 1.23 × 10⁵"],
      },
    ],
    assumptions: [
      "Nachgestellte Nullen in einer ganzen Zahl ohne Dezimalpunkt gelten als nicht signifikant.",
      "Zahlen werden mit bis zu 15 signifikanten Stellen verarbeitet.",
    ],
    faqs: [
      {
        question: "Sind nachgestellte Nullen signifikant?",
        answer: "Nur wenn die Zahl einen Dezimalpunkt hat. 2.50 hat 3 signifikante Stellen, 250 dagegen nur 2 – es sei denn, man schreibt 250. oder 2.50 × 10².",
      },
      {
        question: "Sind führende Nullen signifikant?",
        answer: "Nein. In 0.0071 legen die Nullen nur die Position des Dezimalpunkts fest, die Zahl hat also 2 signifikante Stellen.",
      },
      {
        question: "Wozu die wissenschaftliche Schreibweise?",
        answer: "Sie zeigt genau, welche Ziffern signifikant sind: 1.20 × 10³ hat eindeutig 3.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    task: "Aufgabe",
    tasks: { count: "Signifikante Stellen zählen", round: "Auf signifikante Stellen runden" },
    number: "Zahl",
    numberHelp: "Geben Sie die Zahl genau so ein, wie sie geschrieben ist, einschließlich nachgestellter Nullen. Verwenden Sie einen Punkt als Dezimaltrennzeichen. E-Notation wie 6.02e23 ist erlaubt.",
    invalid: "Geben Sie eine Zahl wie 1200, 0.0045 oder 6.02e23 ein.",
    zero: "Geben Sie eine Zahl ungleich null ein.",
    tooLarge: "Geben Sie eine kleinere Zahl ein.",
    digits: "Zu behaltende signifikante Stellen",
    rounded: "Gerundet auf {digits} signifikante Stellen",
    scientific: "Wissenschaftliche Schreibweise",
    originalCount: "Signifikante Stellen im Original",
    roundNote: "Nachgestellte Nullen in einer ganzen Zahl wie 123,000 sind mehrdeutig; die wissenschaftliche Schreibweise zeigt genau, welche Ziffern signifikant sind.",
    count: "Signifikante Stellen",
    countCaption: "{number} hat {count} signifikante Stellen.",
    countCaptionOne: "{number} hat 1 signifikante Stelle.",
    inScientific: "In wissenschaftlicher Schreibweise",
    countNote: "Nachgestellte Nullen in einer ganzen Zahl ohne Dezimalpunkt (wie 1200) gelten als nicht signifikant. Schreiben Sie 1200., um sie signifikant zu machen.",
  },
};

export default de;
