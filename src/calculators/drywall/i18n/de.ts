import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DrywallText } from "../text/en";

const de: CalculatorTranslation<DrywallText> = {
  content: {
    title: "Gipskartonrechner",
    shortTitle: "Gipskarton",
    summary: "Schätzen Sie, wie viele Gipskartonplatten Sie für Wände und optional die Decke brauchen, abzüglich Türen und Fenster und mit Verschnittzuschlag.",
    metaTitle: "Gipskartonrechner – benötigte Gipskartonplatten",
    metaDescription: "Berechnen Sie, wie viele Gipskartonplatten (4×8, 4×10 oder 4×12 ft oder metrisch) Sie für Wände und Decke nach Abzug von Türen und Fenstern samt Verschnitt brauchen.",
    keywords: ["Gipskarton berechnen", "Gipskartonplatten Bedarf", "Trockenbau Rechner", "wie viele Gipskartonplatten", "Rigipsplatten", "Fugenspachtel", "Plattenbedarf"],
    intro: [
      "Gipskarton, auch Gipskartonplatte, Trockenbauplatte oder nach einer bekannten Marke Rigips genannt, wird in Platten fester Größe verkauft. Um zu wissen, wie viele Sie kaufen müssen, berechnen Sie die Fläche der Wände (und der Decke, falls Sie diese beplanken), ziehen Türen und Fenster ab, geben etwas für Verschnitt hinzu und teilen durch die Fläche einer Platte.",
      "Dieser Rechner erledigt das für gängige US- und metrische Plattengrößen und rundet auf ganze Platten auf. Er schätzt außerdem grob die Menge an gebrauchsfertiger Fugenspachtelmasse, die zum Verspachteln der Fugen nötig ist.",
    ],
    howToUse: [
      "Wählen Sie US-Einheiten (Fuß) oder metrische Einheiten (Meter).",
      "Geben Sie die Gesamtlänge der zu verkleidenden Wände und ihre Höhe ein. Für einen ganzen Raum ist die Gesamtlänge der Umfang.",
      "Wählen Sie, ob die Decke einbezogen werden soll; wenn ja, geben Sie Länge und Breite des Raums ein.",
      "Geben Sie an, wie viele Türen und Fenster es gibt, und passen Sie bei Bedarf ihre typischen Größen an.",
      "Wählen Sie die Plattengröße und einen Verschnittzuschlag und lesen Sie die Anzahl der zu kaufenden Platten ab.",
    ],
    formulas: [
      { title: "Nettofläche", expression: "A = L × H + Deckenlänge × Deckenbreite − Öffnungen", explanation: "L ist die gesamte Wandlänge und H die Wandhöhe. Die Öffnungen sind Türen und Fenster mal ihre Flächen." },
      { title: "Benötigte Platten", expression: "Platten = ⌈A × (1 + Verschnitt) ÷ Plattenfläche⌉", explanation: "Auf eine ganze Platte aufgerundet. Eine Platte mit 4 × 8 ft deckt 32 ft² ab, eine mit 1,2 × 2,4 m deckt 2,88 m² ab." },
      { title: "Fugenspachtel (ungefähr)", expression: "Spachtelmasse ≈ A × 9 gal ÷ 1.000 ft² (≈ 0,37 L/m²)", explanation: "Eine Faustregel für gebrauchsfertige Spachtelmasse; das Datenblatt des Produkts liefert einen genaueren Wert." },
    ],
    examples: [
      { title: "Wände eines Raums mit 50 ft Wandlänge, 8 ft hoch", steps: ["Wandfläche = 50 × 8 = 400 ft²", "Öffnungen = 20 + 2 × 15 = 50 ft², die Nettofläche beträgt also 350 ft²", "Mit 10 % Verschnitt: 385 ft² ÷ 32 ft² ≈ 12,03, also 13 Platten kaufen"] },
      {
        title: "Raum mit 14 × 12 ft, 9 ft hohen Wänden und Decke, Platten mit 4 × 12 ft",
        steps: [
          "Wände = 52 × 9 = 468 ft²; Decke = 14 × 12 = 168 ft²",
          "Öffnungen = 2 × 20 + 2 × 15 = 70 ft², die Nettofläche beträgt also 566 ft²",
          "Mit 12 % Verschnitt: 633,92 ft² ÷ 48 ft² ≈ 13,21, also 14 Platten kaufen",
          "Fugenspachtel ≈ 566 × 9 ÷ 1.000 ≈ 5,1 gal",
        ],
      },
      {
        title: "Metrischer Raum mit 15,6 m Wandlänge, 2,6 m hoch, mit Decke",
        steps: [
          "Wände = 15,6 × 2,6 = 40,56 m²; Decke = 4,5 × 3,3 = 14,85 m²",
          "Öffnungen = 1,9 + 1,4 = 3,3 m², die Nettofläche beträgt also 52,11 m²",
          "Mit 10 % Verschnitt: 57,32 m² ÷ 2,88 m² ≈ 19,9, also 20 Platten kaufen",
        ],
      },
    ],
    assumptions: [
      "Wände und Decken werden als ebene Rechtecke behandelt. Berechnen Sie Giebelwände, Dachschrägen und Unterzüge getrennt und addieren Sie sie zur Wandlänge oder als zusätzliche Deckenfläche.",
      "Die Anzahl beruht auf der Fläche. Eine Planung Platte für Platte kann einige Platten mehr erfordern, besonders wenn die Wandhöhe nicht zur Plattenlänge passt.",
      "Die Tür- und Fenstergrößen sind typische Werte. Messen Sie Ihre eigenen für eine genauere Schätzung.",
      "Die Menge an Fugenspachtel ist ein Näherungswert auf Grundlage einer Herstellerfaustregel für gebrauchsfertige Spachtelmasse. Schrauben, Fugenband und Kantenschutzprofile werden nicht geschätzt.",
    ],
    faqs: [
      { question: "Wie viel Verschnitt sollte ich bei Gipskarton einplanen?", answer: "Für einfache rechteckige Räume sind etwa 10 % üblich. Räume mit vielen Ecken, Öffnungen, Schrägen oder kurzen Wandabschnitten erzeugen mehr Reststücke, dort sind 15 % oder mehr sicherer." },
      { question: "Sollte ich längere Platten verwenden?", answer: "Längere Platten, etwa 4 × 12 ft, bedeuten weniger Fugen zum Bewehren und Verspachteln, was Zeit und Spachtelmasse spart. Sie sind schwerer und lassen sich schlechter durch Türen und Treppen hinauf tragen, eignen sich also für offene Räume und Zwei-Personen-Teams." },
      { question: "Ziehe ich Fenster und Türen ab?", answer: "Ja, für die Fläche. Viele Handwerker beplanken kleine Öffnungen einfach durchgehend und schneiden sie anschließend aus, sodass der Verschnittzuschlag die Reststücke abdeckt." },
    ],
    sourcesUsedFor: ["Die Faustregel von etwa zwei 4,5-Gallonen-Eimern gebrauchsfertiger Fugenspachtelmasse zum Verspachteln von 1.000 ft² Gipskarton."],
  },
  text: {
    units: "Einheiten",
    unitSystems: { imperial: "US (ft)", metric: "Metrisch (m)" },
    length: "Gesamte Wandlänge",
    lengthHelp: "Addieren Sie die Breiten aller zu verkleidenden Wände. Für einen ganzen Raum ist das der Umfang.",
    height: "Wandhöhe",
    ceiling: "Decke einbeziehen?",
    ceilingOptions: { no: "Nein", yes: "Ja" },
    roomLength: "Raumlänge (Decke)",
    roomWidth: "Raumbreite (Decke)",
    doors: "Anzahl der Türen",
    doorArea: "Fläche einer Tür",
    windows: "Anzahl der Fenster",
    windowArea: "Fläche eines Fensters",
    openingHelp: "Ein typischer Wert ist vorausgefüllt; messen Sie Ihren eigenen für eine genauere Schätzung.",
    sheet: "Plattengröße",
    waste: "Verschnittzuschlag",
    wasteHelp: "Zuschlag für Reststücke, Fehler und beschädigte Platten. Etwa 10 % passen für einfache rechteckige Räume; nehmen Sie mehr bei vielen Ecken, Öffnungen oder Schrägen.",
    errors: { openings: "Türen und Fenster ergeben zusammen mindestens die gesamte Wandfläche. Prüfen Sie die Anzahlen, die Größe der Öffnungen und die Wandmaße." },
    sheets: "Benötigte Gipskartonplatten",
    caption: "{area} Plattenfläche plus {waste} Verschnitt, in Platten mit {sheet} (je {sheetArea}).",
    wallArea: "Wandfläche",
    ceilingArea: "Deckenfläche",
    openingArea: "Türen und Fenster",
    netArea: "Zu verkleidende Nettofläche",
    areaWithWaste: "Fläche einschließlich Verschnitt",
    sheetArea: "Fläche einer Platte",
    compound: "Fugenspachtel, ungefähr (gebrauchsfertig)",
    notes: {
      compound: "Die Menge an Fugenspachtel beruht auf der Faustregel von etwa 9 US-Gallonen (zwei 4,5-Gallonen-Eimer) gebrauchsfertiger Spachtelmasse pro 1.000 ft² Plattenfläche, also etwa 0,37 L pro m². Die Menge hängt von Produkt und Qualitätsstufe der Verspachtelung ab, prüfen Sie daher das Datenblatt des Produkts.",
      layout: "Dies ist eine Flächenschätzung. Eine Planung Platte für Platte, besonders bei hohen Wänden und um Öffnungen herum, kann die Anzahl verändern.",
      extras: "Schrauben, Fugenband und Kantenschutzprofile sind nicht enthalten.",
    },
  },
};

export default de;
