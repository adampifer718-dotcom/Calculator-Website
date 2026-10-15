import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PaintText } from "../text/en";

const de: CalculatorTranslation<PaintText> = {
  content: {
    title: "Wandfarbenrechner",
    shortTitle: "Wandfarbe",
    summary: "Schätzen Sie, wie viele Gallonen oder Liter Wandfarbe Sie brauchen – aus Wandgröße, Türen, Fenstern, Anzahl der Anstriche und Ergiebigkeit.",
    metaTitle: "Wandfarbenrechner – Liter oder Gallonen für Ihre Wände",
    metaDescription: "Berechnen Sie, wie viel Wandfarbe Sie in Litern oder Gallonen kaufen müssen: aus Wandlänge und -höhe abzüglich Türen und Fenster, für beliebig viele Anstriche.",
    keywords: ["Farbrechner", "Wandfarbe berechnen", "wie viel Farbe", "Farbbedarf berechnen", "Liter Wandfarbe", "Ergiebigkeit Farbe", "Anstriche", "Streichen Zimmer"],
    intro: [
      "Farbe einzukaufen ist einfacher, wenn Sie die zu streichende Fläche kennen. Addieren Sie die Breiten der Wände, multiplizieren Sie mit der Höhe, ziehen Sie Türen und Fenster ab und teilen Sie durch die Fläche, die eine Gallone oder ein Liter Ihrer Farbe abdeckt.",
      "Der Rechner erledigt das für beliebig viele Anstriche und zeigt sowohl die genaue Menge als auch die ganze Zahl an Gallonen oder Litern, die Sie kaufen sollten.",
    ],
    howToUse: [
      "Wählen Sie US-Einheiten (Fuß und Gallonen) oder metrische Einheiten (Meter und Liter).",
      "Geben Sie die Gesamtlänge der zu streichenden Wände und ihre Höhe ein. Für einen ganzen Raum ist die Gesamtlänge der Umfang.",
      "Geben Sie an, wie viele Türen und Fenster es gibt. Passen Sie die typischen Öffnungsgrößen an, wenn Ihre größer oder kleiner sind.",
      "Legen Sie die Anzahl der Anstriche und die auf dem Farbeimer angegebene Ergiebigkeit fest und lesen Sie ab, wie viel Farbe Sie benötigen.",
    ],
    formulas: [
      {
        title: "Streichbare Fläche",
        expression: "A = L × H − (Türen × Türfläche) − (Fenster × Fensterfläche)",
        explanation: "L ist die gesamte Breite der Wände und H ihre Höhe.",
      },
      {
        title: "Benötigte Farbe",
        expression: "Farbe = A × Anstriche ÷ Ergiebigkeit",
        explanation: "Die Ergiebigkeit ist die Fläche, die eine Gallone oder ein Liter bei einem Anstrich laut Hersteller abdeckt.",
      },
      {
        title: "Kaufmenge",
        expression: "Kauf = ⌈Farbe⌉",
        explanation: "Auf eine ganze Gallone bzw. einen ganzen Liter aufgerundet. Größere Eimer und kleinere Gebinde (Quarts) können die Gesamtmenge näher an den tatsächlichen Bedarf bringen.",
      },
    ],
    examples: [
      {
        title: "Schlafzimmer 14 ft × 12 ft mit 9 ft hohen Wänden, zwei Anstriche",
        steps: [
          "Wandlänge = 14 + 12 + 14 + 12 = 52 ft; Wandfläche = 52 × 9 = 468 ft²",
          "Öffnungen = 2 × 20 + 3 × 15 = 85 ft², die streichbare Fläche beträgt also 383 ft²",
          "Farbe = 383 × 2 ÷ 350 ≈ 2,19 gal, also 3 Gallonen kaufen",
        ],
      },
      {
        title: "Metrischer Raum mit 16 m Wandlänge, 2,5 m hoch",
        steps: ["Wandfläche = 16 × 2,5 = 40 m²", "Öffnungen = 1,9 + 2 × 1,4 = 4,7 m², also sind 35,3 m² streichbar", "Farbe = 35,3 × 2 ÷ 10 = 7,06 L, also 8 L kaufen"],
      },
      {
        title: "Eine Akzentwand, ein Anstrich mit gut deckender Farbe",
        steps: ["Fläche = 14 × 9 = 126 ft²", "Farbe = 126 × 1 ÷ 400 = 0,315 gal, also eine Gallone (ein Quart mit 0,25 gal würde knapp nicht reichen)"],
      },
    ],
    assumptions: [
      "Der US-Standardwert von 350 ft² pro Gallone liegt am unteren Ende des für Wandfarbe häufig genannten Bereichs von 350–400 ft². Der metrische Standardwert von 10 m² pro Liter ist ein typischer Etikettwert. Die Ergiebigkeit hängt von Produkt, Glanzgrad und Untergrund ab, verwenden Sie daher den Wert auf Ihrem Eimer.",
      "Raue, saugfähige, ausgebesserte oder noch nie gestrichene Untergründe nehmen mehr Farbe auf, und ein Wechsel von dunkel zu hell kann einen zusätzlichen Anstrich oder eine Grundierung erfordern.",
      "Tür- und Fenstergrößen sind typische Werte. Wände werden als ebene Rechtecke mit einheitlicher Höhe behandelt; berechnen Sie Giebelflächen oder Dachschrägen separat.",
    ],
    faqs: [
      {
        question: "Wie viele Anstriche brauche ich?",
        answer: "Für ein gleichmäßiges Ergebnis werden üblicherweise zwei Anstriche empfohlen, besonders über einer anderen Farbe. Ein Anstrich kann genügen, wenn Sie in derselben Farbe über einen intakten Anstrich streichen.",
      },
      {
        question: "Sollte ich Türen und Fenster abziehen?",
        answer: "Ja, für eine genauere Schätzung. Wenn Sie auch Türen oder Zierleisten streichen, berechnen Sie diese separat, da dafür meist ein anderes Produkt verwendet wird.",
      },
      {
        question: "Wie viel Fläche deckt eine Gallone ab?",
        answer: "Die meisten Wandfarben geben auf glatten, grundierten Wänden etwa 350–400 ft² pro Gallone und Anstrich an, das sind ungefähr 8,5–10 m² pro Liter. Prüfen Sie das Etikett Ihres Produkts, denn die Ergiebigkeit schwankt.",
      },
    ],
    sourcesUsedFor: ["Typische Ergiebigkeit von Wandfarbe von etwa 350–400 ft² pro Gallone und Anstrich, verwendet für den US-Standardwert."],
  },
  text: {
    units: "Einheiten",
    unitSystems: { imperial: "US (ft, gal)", metric: "Metrisch (m, L)" },
    length: "Gesamte Wandlänge",
    lengthHelp: "Addieren Sie die Breiten aller Wände, die Sie streichen. Für einen ganzen Raum ist das der Umfang.",
    height: "Wandhöhe",
    doors: "Anzahl der Türen",
    doorArea: "Fläche einer Tür",
    windows: "Anzahl der Fenster",
    windowArea: "Fläche eines Fensters",
    openingHelp: "Ein typischer Wert ist voreingestellt; messen Sie selbst nach, um genauer zu schätzen.",
    coats: "Anzahl der Anstriche",
    coverage: "Ergiebigkeit",
    coverageHelp: "Die Fläche, die eine Einheit Farbe bei einem Anstrich abdeckt. Prüfen Sie Etikett oder Datenblatt Ihrer Farbe: Strukturierte, saugfähige oder ungestrichene Untergründe brauchen mehr Farbe.",
    errors: {
      openings: "Türen und Fenster ergeben zusammen mindestens die gesamte Wandfläche. Prüfen Sie die Anzahl, die Öffnungsgrößen und die Wandmaße.",
    },
    paintNeeded: "Benötigte Farbe",
    caption: "{area} gestrichen mit {coats} bei {coverage}.",
    coatsCount: { zero: "{n} Anstrichen", one: "{n} Anstrich", two: "{n} Anstrichen", few: "{n} Anstrichen", many: "{n} Anstrichen", other: "{n} Anstrichen" },
    wallArea: "Gesamte Wandfläche",
    openingArea: "Türen und Fenster",
    paintableArea: "Streichbare Fläche (ein Anstrich)",
    totalCoverage: "Zu streichende Fläche, alle Anstriche",
    wholeGallons: "Ganze Gallonen zum Kaufen",
    wholeLiters: "Ganze Liter zum Kaufen",
    inLiters: "In Litern",
    inGallons: "In US-Gallonen",
    notes: {
      cans: "Farbe wird in festen Gebindegrößen verkauft; runden Sie auf und behalten Sie etwas für Ausbesserungen übrig.",
      surfaces: "Decken, Zierleisten und Grundierung sind nicht enthalten. Rechnen Sie diese separat, wenn Sie sie streichen.",
    },
  },
};

export default de;
