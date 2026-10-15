import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TileText } from "../text/en";

const de: CalculatorTranslation<TileText> = {
  content: {
    title: "Fliesenrechner",
    shortTitle: "Fliesen",
    summary: "Schätzen Sie, wie viele Fliesen und Pakete Sie für Boden oder Wand brauchen – aus Fläche, Fliesengröße, Fugenbreite und Verschnittzuschlag.",
    metaTitle: "Fliesenrechner – wie viele Fliesen und Pakete kaufen?",
    metaDescription: "Schätzen Sie den Fliesenbedarf für Boden oder Wand aus Fläche, Fliesengröße und Fugenbreite, mit Verschnittzuschlag und auf volle Pakete aufgerundet.",
    keywords: ["Fliesenrechner", "Fliesenbedarf berechnen", "wie viele Fliesen brauche ich", "Bodenfliesen", "Wandfliesen", "Fugenbreite", "Fliesen Verschnitt", "Fliesenspiegel"],
    intro: [
      "Bevor Sie Fliesen kaufen, brauchen Sie eine Stückzahl, nicht nur eine Fläche. Dieser Rechner teilt die zu belegende Fläche durch den Platz, den jede Fliese einschließlich der umgebenden Fuge einnimmt, und schlägt dann einen Zuschlag für Verschnitt und Bruch auf.",
      "Geben Sie die Größe der Fläche und einer Fliese ein, wählen Sie Fugenbreite und Verschnittanteil und optional die Anzahl der Fliesen pro Paket. Sie erhalten die Zahl der zu kaufenden Fliesen und, falls Sie eine Paketgröße angegeben haben, die Zahl der Pakete.",
    ],
    howToUse: [
      "Wählen Sie US-Einheiten (Fläche in Fuß, Fliese und Fuge in Zoll) oder metrische Einheiten (Fläche in Metern, Fliese und Fuge in Millimetern).",
      "Geben Sie Länge und Breite der zu fliesenden Fläche ein. Teilen Sie einen L-förmigen Raum in Rechtecke, berechnen Sie jedes einzeln und addieren Sie die Ergebnisse.",
      "Geben Sie Länge und Breite der Fliese sowie die Fugenbreite ein.",
      "Legen Sie einen Verschnittzuschlag fest und, falls bekannt, die Anzahl der Fliesen pro Paket.",
      "Lesen Sie die benötigten Fliesen und die zu kaufenden Pakete ab.",
    ],
    formulas: [
      { title: "Fläche pro Fliese mit Fuge", expression: "a = (Fliesenlänge + g) × (Fliesenbreite + g)", explanation: "Jede Fliese belegt ihre eigene Größe plus eine Fugenbreite g in jede Richtung." },
      { title: "Benötigte Fliesen", expression: "Fliesen = ⌈Fläche ÷ a × (1 + Verschnitt %)⌉", explanation: "Teilen Sie die Fläche durch den Platz pro Fliese, schlagen Sie den Verschnitt auf und runden Sie auf eine ganze Fliese auf. Fliesengrößen werden mit 144 in² pro ft² bzw. 1.000.000 mm² pro m² umgerechnet." },
      { title: "Pakete", expression: "Pakete = ⌈Fliesen ÷ Fliesen pro Paket⌉", explanation: "Aufrunden, da Pakete nur ganz verkauft werden." },
    ],
    examples: [
      {
        title: "Ein Boden von 10 × 14 ft mit 18-Zoll-Fliesen",
        steps: ["Fläche = 10 × 14 = 140 ft²", "Pro Fliese = 18,25 × 18,25 = 333,0625 in² ≈ 2,3129 ft²", "140 ÷ 2,3129 ≈ 60,53 Fliesen; × 1,10 ≈ 66,58, aufgerundet auf 67 Fliesen"],
      },
      {
        title: "Ein Bad von 3,2 × 2,5 m mit Fliesen 600 × 300 mm, 8 pro Paket",
        steps: ["Fläche = 3,2 × 2,5 = 8 m²", "Pro Fliese = 602 × 302 = 181.804 mm² = 0,181804 m²", "8 ÷ 0,181804 ≈ 44,00; × 1,12 ≈ 49,28, aufgerundet auf 50 Fliesen", "50 ÷ 8 = 6,25, also 7 Pakete"],
      },
      {
        title: "Ein Fliesenspiegel von 8 × 5 ft mit 4-Zoll-Fliesen",
        steps: ["Fläche = 8 × 5 = 40 ft²", "Pro Fliese = 4,0625 × 4,0625 ≈ 16,504 in² ≈ 0,11461 ft²", "40 ÷ 0,11461 ≈ 349,01; × 1,15 ≈ 401,36, aufgerundet auf 402 Fliesen"],
      },
    ],
    assumptions: [
      "Die Fläche ist ein einfaches Rechteck. Echte Verlegungen mit vielen Schnitten, Bordüren, Nischen oder Mustern wie diagonal oder im Fischgrät können mehr Fliesen erfordern als diese Schätzung.",
      "Der Verschnittzuschlag liegt bei Ihnen. Etwa 10 % sind ein üblicher Ausgangswert für eine gerade Verlegung; das ist eine typische Faustregel, keine Norm.",
      "Die Schätzung umfasst nur die Fliesen. Kleber, Fugenmasse, Abschlussprofile und die Vorbereitung des Untergrunds sind nicht enthalten; befolgen Sie dafür die Anweisungen der Fliesen- und Produkthersteller.",
    ],
    faqs: [
      { question: "Warum wird die Fuge mitgerechnet?", answer: "Jede Fuge vergrößert den Platz, den eine Fliese abdeckt, ein wenig, sodass weniger Fliesen nötig sind. Bei kleinen Fliesen und breiten Fugen kann der Unterschied mehrere Prozent betragen." },
      { question: "Wie viele Fliesen sollte ich zusätzlich kaufen?", answer: "Viele Fliesenleger rechnen bei gerader Verlegung etwa 10 % hinzu, bei diagonaler oder gemusterter Verlegung oder in Räumen mit vielen Ecken mehr. Ein paar Ersatzfliesen helfen außerdem bei späteren Reparaturen." },
      { question: "Wie messe ich einen L-förmigen Raum aus?", answer: "Teilen Sie ihn in zwei Rechtecke, berechnen Sie jedes mit denselben Fliesenangaben und addieren Sie die beiden Stückzahlen." },
    ],
    sourcesUsedFor: ["Fläche eines Rechtecks, verwendet für die zu fliesende Fläche und für jede Fliese mit ihrer Fuge."],
  },
  text: {
    units: "Einheiten",
    unitSystems: { imperial: "US (ft, in)", metric: "Metrisch (m, mm)" },
    areaLength: "Länge der Fläche",
    areaWidth: "Breite der Fläche",
    areaHelp: "Die zu fliesende Boden- oder Wandfläche, als Rechteck gemessen.",
    tileLength: "Fliesenlänge",
    tileWidth: "Fliesenbreite",
    grout: "Fugenbreite",
    groutHelpImperial: "Der Abstand zwischen den Fliesen. 1/8 in sind 0,125 in; geben Sie 0 ein, wenn keine Fuge vorgesehen ist.",
    groutHelpMetric: "Der Abstand zwischen den Fliesen. Geben Sie 0 ein, wenn keine Fuge vorgesehen ist.",
    waste: "Verschnittzuschlag",
    wasteHelp: "Zusätzliche Fliesen für Schnitte, Bruch und Reserve. Bei gerader Verlegung sind etwa 10 % üblich; diagonale und gemusterte Verlegungen brauchen mehr.",
    perBox: "Fliesen pro Paket (optional)",
    perBoxHelp: "Leer lassen, wenn Sie Fliesen einzeln kaufen.",
    tilesNeeded: "Benötigte Fliesen",
    caption: "{area} bei {perTile} pro Fliese einschließlich Fuge, plus {waste} Verschnitt.",
    tilesBeforeWaste: "Fliesen ohne Verschnitt",
    area: "Zu fliesende Fläche",
    tileFootprint: "Fläche pro Fliese mit Fuge",
    boxes: "Zu kaufende Pakete",
    boxesCaption: "{boxes} ({tiles})",
    boxesCount: { zero: "{n} Pakete", one: "{n} Paket", two: "{n} Pakete", few: "{n} Pakete", many: "{n} Pakete", other: "{n} Pakete" },
    tilesCount: { zero: "{n} Fliesen", one: "{n} Fliese", two: "{n} Fliesen", few: "{n} Fliesen", many: "{n} Fliesen", other: "{n} Fliesen" },
    spare: "Übrige Fliesen in den Paketen",
    notes: {
      layout: "Geht von einer einfachen rechteckigen Fläche aus. Echte Verlegungen mit vielen Schnitten, Bordüren oder Mustern können mehr Fliesen erfordern.",
      batch: "Kaufen Sie nach Möglichkeit alle Fliesen aus derselben Charge, denn die Farbe kann zwischen Chargen abweichen.",
    },
  },
};

export default de;
