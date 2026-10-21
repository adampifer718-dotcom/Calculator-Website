import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FractionText } from "../text/en";

const de: CalculatorTranslation<FractionText> = {
  content: {
    title: "Bruchrechner",
    shortTitle: "Brüche",
    summary: "Addieren, subtrahieren, multiplizieren oder dividieren Sie Brüche und gemischte Zahlen – mit gekürztem Ergebnis und als Dezimalzahl.",
    metaTitle: "Bruchrechner – mit Brüchen und gemischten Zahlen rechnen",
    metaDescription:
      "Rechnen Sie mit Brüchen, gemischten Zahlen und Dezimalzahlen: Addition, Subtraktion, Multiplikation und Division mit exaktem, vollständig gekürztem Ergebnis.",
    keywords: ["Bruchrechner", "Brüche berechnen", "Brüche kürzen", "gemischte Zahlen", "Brüche addieren", "Brüche dividieren", "Bruchrechnung"],
    intro: [
      "Geben Sie zwei Zahlen als Brüche (3/4), gemischte Zahlen (1 1/2), ganze Zahlen oder Dezimalzahlen ein, wählen Sie eine Rechenart und erhalten Sie das exakte Ergebnis.",
      "Der Rechner arbeitet mit exakten ganzzahligen Zählern und Nennern, daher entstehen keine Rundungsfehler. Das Ergebnis wird vollständig gekürzt und zusätzlich als gemischte Zahl und als Dezimalzahl angezeigt.",
    ],
    howToUse: [
      "Geben Sie die erste Zahl ein, zum Beispiel 1/2 oder 2 1/4.",
      "Wählen Sie Addieren, Subtrahieren, Multiplizieren oder Dividieren.",
      "Geben Sie die zweite Zahl ein.",
      "Lesen Sie den gekürzten Bruch, die gemischte Zahl und die Dezimalzahl ab.",
    ],
    formulas: [
      { title: "Addieren und Subtrahieren", expression: "a/b ± c/d = (a × d ± c × b) ÷ (b × d)", explanation: "Bringen Sie beide Brüche auf einen gemeinsamen Nenner und addieren oder subtrahieren Sie dann die Zähler." },
      { title: "Multiplizieren", expression: "a/b × c/d = (a × c) ÷ (b × d)", explanation: "Multiplizieren Sie Zähler mit Zähler und Nenner mit Nenner." },
      { title: "Dividieren", expression: "a/b ÷ c/d = (a × d) ÷ (b × c)", explanation: "Multiplizieren Sie mit dem Kehrwert des zweiten Bruchs. Die Division durch null ist nicht definiert." },
      { title: "Vollständig kürzen", expression: "n/d = (n ÷ g) ÷ (d ÷ g), g = ggT(n, d)", explanation: "Teilen Sie Zähler und Nenner durch ihren größten gemeinsamen Teiler (ggT)." },
    ],
    examples: [
      { title: "1/2 + 1/3", steps: ["1/2 + 1/3 = (1 × 3 + 1 × 2) ÷ (2 × 3)", "= 5/6 ≈ 0,8333"] },
      { title: "2 1/4 × 4/3", steps: ["2 1/4 = 9/4", "9/4 × 4/3 = 36/12 = 3"] },
    ],
    assumptions: [
      "Ganze Zahlen, Brüche, gemischte Zahlen und endliche Dezimalzahlen werden in exakte Brüche umgewandelt; aus 0,75 wird 3/4.",
      "Zähler und Nenner sind auf 1.000.000.000.000 begrenzt, damit die Ergebnisse lesbar bleiben.",
      "Eine negative gemischte Zahl wie −1 1/2 bedeutet −(1 + 1/2).",
    ],
    faqs: [
      { question: "Wie gebe ich eine gemischte Zahl ein?", answer: "Tippen Sie die ganze Zahl, ein Leerzeichen und den Bruch, zum Beispiel 2 1/4. Bei einem negativen Wert steht das Minuszeichen vorne: -2 1/4." },
      { question: "Wie kürze ich einen Bruch?", answer: "Geben Sie ihn als erste Zahl ein, wählen Sie Multiplizieren und geben Sie als zweite Zahl 1 ein. Das Ergebnis wird vollständig gekürzt angezeigt." },
      { question: "Warum weicht die Dezimalzahl vom Bruch ab?", answer: "Manche Brüche wie 1/3 haben unendlich viele Nachkommastellen. Der Bruch ist exakt; die Dezimalzahl wird für die Anzeige gerundet." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    a: "Erste Zahl",
    aHelp: "Ein Bruch (3/4), eine gemischte Zahl (1 1/2), eine ganze Zahl oder eine Dezimalzahl.",
    b: "Zweite Zahl",
    bHelp: "Dieselben Formate wie bei der ersten Zahl.",
    operation: "Rechenart",
    operations: { add: "Addieren (+)", subtract: "Subtrahieren (−)", multiply: "Multiplizieren (×)", divide: "Dividieren (÷)" },
    errors: {
      invalid: "Geben Sie einen Bruch wie 3/4, eine gemischte Zahl wie 1 1/2, eine ganze Zahl oder eine Dezimalzahl ein.",
      zeroDenominator: "Ein Nenner darf nicht 0 sein.",
      tooLarge: "Verwenden Sie Zähler und Nenner, die nicht größer als {max} sind.",
      divideByZero: "Durch null kann nicht geteilt werden.",
    },
    result: "Vollständig gekürztes Ergebnis",
    caption: "{a} {op} {b} = {result}",
    mixed: "Als gemischte Zahl",
    decimal: "Als Dezimalzahl",
    note: "Brüche werden durch Teilen durch den größten gemeinsamen Teiler vollständig gekürzt. Die Dezimalzahl wird nur für die Anzeige gerundet.",
  },
};

export default de;
