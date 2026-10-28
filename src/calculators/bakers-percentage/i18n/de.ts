import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BakersPercentageText } from "../text/en";

const de: CalculatorTranslation<BakersPercentageText> = {
  content: {
    title: "Bäckerprozent-Rechner",
    shortTitle: "Bäckerprozente",
    summary: "Rechnen Sie Bäckerprozente aus einem Mehlgewicht in Zutatengewichte um oder ermitteln Sie das Mehl für ein Ziel-Teiggewicht – mit Hydration.",
    metaTitle: "Bäckerprozent-Rechner – Teiggewichte und Hydration",
    metaDescription: "Bäckerprozente in Gramm oder Unzen Mehl, Wasser, Salz, Hefe und weitere Zutaten umrechnen, das Mehl für ein Teiggewicht finden und die Hydration sehen.",
    keywords: ["Bäckerprozente", "Bäckerprozent-Rechner", "Teigrechner", "Hydration Brotteig", "Mehlanteil", "Brotrezept berechnen", "Pizzateig berechnen", "Teigausbeute"],
    intro: [
      "Bäcker schreiben Brotrezepte als Prozentsätze des Mehls. Das Mehl ist immer 100 %, und jede andere Zutat wird im Verhältnis dazu angegeben: Ein Teig mit 70 % Wasser enthält 700 g Wasser auf je 1.000 g Mehl. Weil sich die Prozente auf das Mehl beziehen, ergeben sie zusammen mehr als 100 %.",
      "So lassen sich Rezepte leicht skalieren und vergleichen. Geben Sie ein Mehlgewicht ein, um das Gewicht jeder Zutat zu erhalten, oder geben Sie die gewünschte Teigmenge ein, etwa vier Pizzateiglinge zu je 250 g, um zu ermitteln, mit wie viel Mehl Sie beginnen.",
    ],
    howToUse: [
      "Wählen Sie, ob Sie vom Mehlgewicht oder vom gewünschten Gesamtteiggewicht ausgehen.",
      "Wählen Sie Gramm oder Unzen und geben Sie das Gewicht ein.",
      "Geben Sie die Prozentsätze für Wasser, Salz und Hefe ein sowie bis zu drei weitere Zutaten wie Öl, Zucker oder Butter, jeweils mit optionalem Namen.",
      "Lesen Sie das Gewicht jeder Zutat in der Tabelle ab, dazu das Gesamtteiggewicht und die Hydration.",
    ],
    formulas: [
      { title: "Gewicht einer Zutat", expression: "Gewicht = Mehlgewicht × Prozentsatz ÷ 100", explanation: "Der Prozentsatz jeder Zutat bezieht sich auf das gesamte Mehlgewicht, das 100 % entspricht." },
      { title: "Gesamtteiggewicht", expression: "Teig = Mehl × Σ% ÷ 100", explanation: "Σ% ist die Summe aller Prozentsätze, einschließlich der 100 % des Mehls." },
      { title: "Mehl für ein Ziel-Teiggewicht", expression: "Mehl = Zielteig ÷ (Σ% ÷ 100)", explanation: "Für 1.500 g Teig mit Σ% = 171,5 % beträgt das Mehl 1.500 ÷ 1,715 ≈ 874,6 g." },
      { title: "Hydration", expression: "Hydration = Wasser ÷ Mehl × 100 %", explanation: "In Bäckerprozenten ist das einfach der Wasseranteil." },
    ],
    examples: [
      {
        title: "Einfaches Brot mit 1.000 g Mehl bei 70 % Hydration",
        steps: ["Wasser = 1.000 × 0,70 = 700 g", "Salz = 20 g und Hefe = 10 g", "Gesamt = 1.000 × 173 % = 1.730 g Teig"],
      },
      {
        title: "1.500 g Pizzateig mit 3 % Olivenöl",
        steps: ["Σ% = 100 + 65 + 2 + 1,5 + 3 = 171,5 %", "Mehl = 1.500 ÷ 1,715 ≈ 874,6 g", "Wasser = 874,6 × 0,65 ≈ 568,5 g"],
      },
      {
        title: "Kastenbrot mit 16 oz Mehl und 5 % Zucker",
        steps: ["Σ% = 100 + 68 + 2 + 0,5 + 5 = 175,5 %", "Wasser = 16 × 0,68 = 10,88 oz; Zucker = 0,8 oz", "Gesamt = 16 × 1,755 = 28,08 oz Teig"],
      },
    ],
    assumptions: [
      "Alle Prozentsätze beziehen sich auf das Gewicht, relativ zum Gesamtgewicht aller Mehle im Rezept.",
      "Die Hydration zählt nur die Wasserzeile. Milch, Eier, Butter oder Sauerteig enthalten ebenfalls Wasser (und Sauerteig enthält Mehl); tragen Sie sie daher als weitere Zeilen ein und passen Sie das Wasser an, wenn Sie eine genaue Gesamthydration möchten.",
      "Das Teiggewicht ist die Summe der Zutaten vor dem Backen. Etwas Teig bleibt immer an Schüssel und Werkzeug hängen, und Brot verliert im Ofen an Gewicht; planen Sie daher etwas mehr ein, wenn Sie genaue Stückgewichte brauchen.",
    ],
    faqs: [
      { question: "Warum ergeben Bäckerprozente mehr als 100 %?", answer: "Weil jede Zutat mit dem Mehl verglichen wird, nicht mit dem ganzen Teig. Das Mehl allein ist 100 %, sobald also Wasser, Salz und Hefe hinzukommen, liegt die Summe immer über 100 %, bei Brot oft bei etwa 160–180 %." },
      { question: "Was bedeutet 70 % Hydration?", answer: "Der Teig enthält 70 g Wasser auf je 100 g Mehl. Eine höhere Hydration ergibt einen feuchteren, klebrigeren Teig und meist eine offenere Krume; eine niedrigere ergibt einen festeren Teig, der sich leichter formen lässt." },
      { question: "Wie skaliere ich ein Rezept mit Bäckerprozenten?", answer: "Lassen Sie die Prozentsätze gleich und ändern Sie nur das Mehlgewicht, oder geben Sie die benötigte Teigmenge ein und lassen Sie den Rechner das Mehl ermitteln. Alle anderen Zutaten skalieren automatisch mit." },
    ],
    sourcesUsedFor: ["Die Definition der Bäckerprozente: jede Zutat als Prozentsatz des gesamten Mehlgewichts, wobei das Mehl immer 100 % ist."],
  },
  text: {
    mode: "Ausgangspunkt",
    modes: { fromFlour: "Mehlgewicht", fromDough: "Ziel-Teiggewicht" },
    unit: "Gewichtseinheit",
    units: { g: "Gramm (g)", oz: "Unzen (oz)" },
    flour: "Gesamtes Mehlgewicht",
    flourHelp: "Alles Mehl im Rezept zusammen. Es zählt als 100 %.",
    dough: "Ziel-Teiggewicht",
    doughHelp: "Das gewünschte Gesamtgewicht des Teigs, zum Beispiel die Anzahl der Brote oder Pizzen mal das Gewicht jedes Stücks.",
    water: "Wasser",
    salt: "Salz",
    yeast: "Hefe",
    pctHelp: "In Prozent des Mehlgewichts.",
    extraName: "Weitere Zutat {n} (optional)",
    extraNamePlaceholder: "z. B. Olivenöl",
    extraPct: "Weitere Zutat {n}, % vom Mehl",
    extraDefault: "Weitere Zutat {n}",
    doughWeight: "Gesamtteiggewicht",
    flourNeeded: "Benötigtes Mehl",
    captionFlour: "{flour} Mehl bei insgesamt {total}.",
    captionDough: "{dough} Teig ÷ ({total} ÷ 100).",
    flourOut: "Mehl",
    totalPct: "Summe aller Prozentsätze",
    hydration: "Hydration (Wasser ÷ Mehl)",
    waterOut: "Wassergewicht",
    tableCaption: "Gewichte der Zutaten",
    colIngredient: "Zutat",
    colPercent: "Bäckerprozent",
    colWeight: "Gewicht",
    flourRow: "Mehl",
    totalRow: "Teig gesamt",
    notes: {
      hydration: "Die Hydration zählt nur die Wasserzeile. Milch, Eier, Sauerteig oder andere feuchte Zutaten bringen ebenfalls Wasser mit, die tatsächliche Hydration des Teigs ist also höher, wenn Sie sie verwenden.",
      rounding: "Kleine Mengen wie Hefe und Salz lassen sich mit einer Waage, die auf 0,1 g genau anzeigt, leichter exakt abwiegen.",
    },
  },
};

export default de;
