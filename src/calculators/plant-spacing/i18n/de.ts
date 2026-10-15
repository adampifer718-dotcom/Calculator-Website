import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PlantSpacingText } from "../text/en";

const de: CalculatorTranslation<PlantSpacingText> = {
  content: {
    title: "Pflanzabstandsrechner",
    shortTitle: "Pflanzabstand",
    summary: "Ermitteln Sie, wie viele Pflanzen bei einem bestimmten Abstand in ein rechteckiges Beet passen – in geraden Reihen oder im Dreiecksverband.",
    metaTitle: "Pflanzabstandsrechner – Pflanzen pro Beet",
    metaDescription: "Berechnen Sie, wie viele Pflanzen bei gegebenem Pflanz- und Reihenabstand in ein Beet passen, im Quadrat- oder Dreiecksverband, plus Pflanzen pro m² oder ft².",
    keywords: ["Pflanzabstand berechnen", "wie viele Pflanzen", "Pflanzen pro Quadratmeter", "Dreiecksverband", "Beet planen", "Reihenabstand", "Pflanzdichte"],
    intro: [
      "Saatguttüten und Pflanzenetiketten nennen einen empfohlenen Abstand. Daraus die Pflanzenzahl für ein bestimmtes Beet zu berechnen ist einfache Arithmetik, doch man vergisst leicht, dass auch die äußeren Pflanzen Platz brauchen.",
      "Dieser Rechner hält jede Pflanze mindestens einen halben Abstand vom Beetrand entfernt, sodass die Pflanzen am Rand genauso viel Platz haben wie die in der Mitte. Er funktioniert für gerade Reihen und für den Dreiecksverband (versetzt), bei dem jede Reihe um einen halben Abstand verschoben ist.",
    ],
    howToUse: [
      "Wählen Sie die Einheit und geben Sie Länge und Breite des Beets ein.",
      "Wählen Sie gerade Reihen oder den Dreiecksverband.",
      "Geben Sie den Abstand zwischen den Pflanzen und bei Reihen den Reihenabstand ein.",
      "Lesen Sie ab, wie viele Pflanzen passen, die Pflanzdichte und die Anordnung der Reihen.",
    ],
    formulas: [
      {
        title: "Gerade Reihen",
        expression: "Pflanzen = ⌊L ÷ s⌋ × ⌊W ÷ r⌋",
        explanation: "L und W sind Länge und Breite des Beets, s der Abstand in der Reihe und r der Reihenabstand. Mit einem halben Abstand Freiraum an jedem Rand fasst eine Reihe der Länge L genau ⌊L ÷ s⌋ Pflanzen.",
      },
      {
        title: "Reihen im Dreiecksverband",
        expression: "h = s × √3 ÷ 2\nReihen = ⌊(W − s) ÷ h⌋ + 1 (0 wenn W < s)",
        explanation: "Jede Pflanze hat denselben Abstand s zu ihren Nachbarn, daher liegen die Reihen nur etwa 0,866 s auseinander.",
      },
      {
        title: "Pflanzen im Dreiecksverband",
        expression: "volle Reihen: ⌊L ÷ s⌋ Pflanzen\nversetzte Reihen: max(0, ⌊L ÷ s − 0,5⌋) Pflanzen",
        explanation: "Die Reihen wechseln sich ab, beginnend mit einer vollen Reihe; die versetzten Reihen sind um einen halben Abstand verschoben und fassen eventuell eine Pflanze weniger.",
      },
      {
        title: "Dichte",
        expression: "Dichte = Pflanzen ÷ (L × W)",
        explanation: "Angezeigt pro Quadratmeter bei metrischen Einheiten und pro Quadratfuß bei US-Einheiten.",
      },
    ],
    examples: [
      {
        title: "Paprika in einem Beet von 12 ft × 4 ft, 18 in Abstand, Reihen 2 ft auseinander",
        steps: ["Pflanzen pro Reihe: ⌊12 ÷ 1,5⌋ = 8", "Reihen: ⌊4 ÷ 2⌋ = 2", "Gesamt: 8 × 2 = 16 Pflanzen, also 16 ÷ 48 ft² ≈ 0,33 pro ft²"],
      },
      {
        title: "Salat in einem Beet von 300 cm × 120 cm, Dreiecksverband mit 40 cm",
        steps: [
          "Reihenabstand: 40 × √3 ÷ 2 ≈ 34,64 cm",
          "Reihen: ⌊(120 − 40) ÷ 34,64⌋ + 1 = 2 + 1 = 3",
          "Volle Reihen: ⌊300 ÷ 40⌋ = 7; versetzte Reihe: ⌊7,5 − 0,5⌋ = 7",
          "Gesamt: 2 × 7 + 1 × 7 = 21 Pflanzen",
        ],
      },
      {
        title: "Möhren in einem Kasten von 48 in × 24 in, 3 in Abstand in beide Richtungen",
        steps: ["Pflanzen pro Reihe: ⌊48 ÷ 3⌋ = 16", "Reihen: ⌊24 ÷ 3⌋ = 8", "Gesamt: 16 × 8 = 128 Pflanzen auf 8 ft², also 16 pro ft²"],
      },
    ],
    assumptions: [
      "Das Beet ist ein Rechteck ohne Wege, Einfassungen oder Hindernisse darin. Messen Sie nur die bepflanzte Fläche.",
      "Die Pflanzen stehen mindestens einen halben Abstand von jedem Rand entfernt, sodass benachbarte Beete oder Wege sich den Zwischenraum teilen. Grenzt Ihr Beet an eine Wand, passen eventuell ein paar Pflanzen mehr hinein.",
      "Die Reihen verlaufen entlang der Beetlänge. Abstandsempfehlungen hängen von Sorte, Boden und Klima ab; folgen Sie der Saatguttüte oder örtlicher Gartenbauberatung.",
      "Die Zahlen gelten für die endgültige Pflanzenanordnung. Säen Sie mehr aus und vereinzeln Sie, oder kaufen Sie ein paar Jungpflanzen zusätzlich, um Ausfälle auszugleichen.",
    ],
    faqs: [
      {
        question: "Passen im Dreiecksverband mehr Pflanzen?",
        answer: "In großen Beeten ja: Bei gleichem Abstand passen etwa 15 % mehr Pflanzen, weil die Reihen näher beieinander liegen. In kleinen Beeten kann in den versetzten Reihen am Ende eine Pflanze wegfallen, sodass der Gewinn kleiner oder sogar negativ ausfällt.",
      },
      {
        question: "Warum gibt es an den Rändern einen Freiraum?",
        answer: "Eine Pflanze braucht auf allen Seiten Platz. Ein halber Abstand Freiraum an jedem Rand gibt den Randpflanzen genauso viel Raum wie den übrigen, und zwei nebeneinanderliegende Beete haben am Ende einen vollen Abstand zueinander.",
      },
      {
        question: "Was bedeutet Pflanzen pro Quadratfuß?",
        answer: "Die Pflanzenzahl geteilt durch die Beetfläche. Sie ist nützlich, um Anordnungen zu vergleichen, oder für Tabellen zum Square-Foot-Gardening, die eine Pflanzenzahl pro Quadratfuß angeben.",
      },
    ],
    sourcesUsedFor: ["Hintergrund zur Pflanzung mit gleichen Abständen (Blockpflanzung) von Pflanzen und Reihen in Gartenbeeten."],
  },
  text: {
    unit: "Einheit",
    units: { m: "m", cm: "cm", ft: "ft", in: "in" },
    length: "Beetlänge",
    width: "Beetbreite",
    pattern: "Pflanzmuster",
    patterns: { grid: "Reihen (Quadratverband)", triangular: "Dreiecksverband (versetzt)" },
    spacing: "Abstand zwischen den Pflanzen",
    spacingHelp: "Der empfohlene Abstand zwischen den Pflanzen, laut Saatguttüte oder Pflanzenetikett.",
    rowSpacing: "Reihenabstand",
    errors: { tooMany: "Dieser Abstand ist für das Beet zu klein: Es ergäben sich mehr als eine Milliarde Pflanzen." },
    plants: "Passende Pflanzen",
    caption: "Jede Pflanze hält mindestens einen halben Abstand zu jedem Beetrand.",
    rows: "Reihen",
    perRow: "Pflanzen pro Reihe",
    perRowOffset: "Pflanzen pro Reihe (voll / versetzt)",
    perRowOffsetValue: "{full} / {offset}",
    bedArea: "Beetfläche",
    densityMetric: "Pflanzen pro Quadratmeter",
    densityImperial: "Pflanzen pro Quadratfuß",
    notes: {
      tooSmall: "Das Beet ist für diesen Abstand zu klein: Mit einem halben Abstand Freiraum zu jedem Rand passt nicht einmal eine Pflanze.",
      triangular: "Im Dreiecksverband ist jede Reihe um einen halben Abstand versetzt, und die Reihen liegen 0,866 (√3/2) Abstände auseinander.",
    },
  },
};

export default de;
