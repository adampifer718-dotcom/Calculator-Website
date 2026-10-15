import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SurfaceAreaText } from "../text/en";

const de: CalculatorTranslation<SurfaceAreaText> = {
  content: {
    title: "Oberflächenrechner",
    shortTitle: "Oberfläche",
    summary: "Berechnen Sie Oberfläche, Mantelfläche und Grundfläche von Würfel, Quader, Zylinder, Kugel, Halbkugel, Kegel oder quadratischer Pyramide.",
    metaTitle: "Oberflächenrechner – Quader, Zylinder, Kegel, Kugel",
    metaDescription: "Berechnen Sie die Oberfläche von sieben Körpern samt Mantelfläche, Grundfläche und Mantelhöhe in mm, cm, m, in oder ft, mit Summe in m² und ft².",
    keywords: ["Oberfläche berechnen", "Oberflächenrechner", "Oberfläche Zylinder", "Oberfläche Kegel", "Oberfläche Kugel", "Mantelfläche", "Mantellinie", "Oberfläche Pyramide"],
    intro: [
      "Die Oberfläche ist die Gesamtfläche aller Seitenflächen und gekrümmten Flächen eines Körpers. Sie zeigt, wie viel Farbe, Verpackung, Blech oder Stoff Sie brauchen, um einen Gegenstand vollständig zu bedecken.",
      "Wählen Sie einen von sieben Körpern und geben Sie seine Maße in einer einzigen Einheit ein. Neben der Gesamtfläche zeigt der Rechner die Mantelfläche (die Seiten ohne die Enden), die Grundfläche und bei Kegeln und Pyramiden die Mantelhöhe. Die Gesamtfläche wird außerdem in Quadratmetern und Quadratfuß angegeben.",
    ],
    howToUse: [
      "Wählen Sie den Körper.",
      "Wählen Sie die Einheit Ihrer Maße.",
      "Geben Sie die für diesen Körper angezeigten Maße ein. Verwenden Sie bei runden Körpern den Radius (den halben Durchmesser) und bei Kegeln und Pyramiden die senkrechte Höhe.",
      "Lesen Sie die Gesamtoberfläche und darunter die Teilflächen ab.",
    ],
    formulas: [
      { title: "Würfel und Quader", expression: "A = 6a²\nA = 2(lw + lh + wh)", explanation: "Addieren Sie die Flächen der sechs rechteckigen Seiten." },
      { title: "Zylinder", expression: "A = 2πr² + 2πrh", explanation: "Zwei Kreisflächen plus die gekrümmte Seite, die abgerollt ein Rechteck von 2πr Breite und h Höhe ergibt." },
      { title: "Kugel und Halbkugel", expression: "A = 4πr²\nA = 2πr² + πr² = 3πr²", explanation: "Eine geschlossene Halbkugel hat die halbe gekrümmte Kugelfläche plus ihre flache, kreisförmige Grundfläche." },
      { title: "Kegel", expression: "s = √(r² + h²)\nA = πr² + πrs", explanation: "Der Grundkreis plus die Mantelfläche πrs, wobei s die Mantelhöhe ist." },
      { title: "Quadratische Pyramide", expression: "s = √((a/2)² + h²)\nA = a² + 2as", explanation: "Die quadratische Grundfläche plus vier Dreiecke mit der Grundseite a und der Höhe s (der Höhe einer Seitenfläche)." },
    ],
    examples: [
      {
        title: "Ein Versandkarton mit 30 × 20 × 10 cm",
        steps: ["lw = 600, lh = 300, wh = 200", "A = 2 × (600 + 300 + 200) = 2.200 cm²", "2.200 cm² = 0,22 m²"],
      },
      {
        title: "Ein Kegel mit 0,6 m Radius und 0,8 m Höhe",
        steps: ["s = √(0,6² + 0,8²) = 1 m", "Grundfläche = π × 0,36 ≈ 1,131 m², Mantelfläche = π × 0,6 × 1 ≈ 1,885 m²", "A ≈ 1,131 + 1,885 ≈ 3,016 m²"],
      },
      {
        title: "Quadratische Pyramide mit 6 ft Grundseite und 4 ft Höhe",
        steps: ["s = √(3² + 4²) = 5 ft", "Mantelfläche = 2 × 6 × 5 = 60 ft², Grundfläche = 36 ft²", "A = 36 + 60 = 96 ft²"],
      },
    ],
    assumptions: [
      "Die Körper sind ideal und gerade: Bei Kegeln und Pyramiden liegt die Spitze genau über der Mitte der Grundfläche, und runde Formen sind perfekte Kreise.",
      "Die Gesamtwerte gelten für geschlossene Körper. Ein Zylinder enthält beide Enden, Kegel und Pyramide die Grundfläche und eine Halbkugel ihre flache Seite. Verwenden Sie für offene Formen die Mantelfläche oder die gekrümmte Fläche.",
      "Echte Gegenstände haben Nähte, Überlappungen und eine Materialstärke. Rechnen Sie beim Materialkauf einen Zuschlag dafür ein.",
    ],
    faqs: [
      { question: "Was ist der Unterschied zwischen Mantelfläche und Oberfläche?", answer: "Die Mantelfläche umfasst nur die Seiten. Die Oberfläche addiert die Grundfläche und bei Prismen und Zylindern auch die Deckfläche." },
      { question: "Was ist die Mantelhöhe?", answer: "Der Abstand entlang der schrägen Fläche vom Rand der Grundfläche bis zur Spitze. Sie ist länger als die senkrechte Höhe und ergibt sich aus dem Satz des Pythagoras." },
      { question: "Wie rechne ich cm² in m² um?", answer: "Teilen Sie durch 10.000, denn ein Meter hat 100 cm und Flächen wachsen mit dem Quadrat: 100 × 100 = 10.000." },
    ],
    sourcesUsedFor: [
      "Oberflächenformeln für Quader, Zylinder, Kugel und Kegel.",
      "Durchgerechnete Anwendung der Oberflächenformeln für Zylinder und Kugel.",
    ],
  },
  text: {
    shape: "Körper",
    shapes: {
      cube: "Würfel",
      box: "Quader",
      cylinder: "Zylinder (geschlossen)",
      sphere: "Kugel",
      hemisphere: "Halbkugel (mit flacher Grundfläche)",
      cone: "Kegel (mit Grundfläche)",
      pyramid: "Quadratische Pyramide (mit Grundfläche)",
    },
    unit: "Längeneinheit",
    unitHelp: "Geben Sie alle Maße in dieser Einheit ein. Flächen werden in derselben Einheit zum Quadrat angezeigt.",
    units: { mm: "Millimeter (mm)", cm: "Zentimeter (cm)", m: "Meter (m)", in: "Zoll (in)", ft: "Fuß (ft)" },
    edge: "Kantenlänge (a)",
    length: "Länge (l)",
    width: "Breite (w)",
    height: "Höhe (h)",
    heightHelp: "Die senkrechte Höhe, gerade von der Grundfläche nach oben gemessen, nicht entlang der schrägen Seite.",
    radius: "Radius (r)",
    radiusHelp: "Der halbe Durchmesser.",
    baseSide: "Grundseite (a)",
    total: "Gesamte Oberfläche",
    formula: {
      cube: "A = 6a²",
      box: "A = 2(lw + lh + wh)",
      cylinder: "A = 2πr² + 2πrh",
      sphere: "A = 4πr²",
      hemisphere: "A = 3πr²",
      cone: "A = πr² + πr√(r² + h²)",
      pyramid: "A = a² + 2a√((a/2)² + h²)",
    },
    lateral: "Mantelfläche (nur Seiten)",
    curved: "Gekrümmte Fläche",
    base: "Grundfläche",
    eachEnd: "Fläche jeder Kreisseite",
    face: "Fläche einer Seite",
    slant: "Mantelhöhe",
    inSquareMeters: "Gesamt in Quadratmetern",
    inSquareFeet: "Gesamt in Quadratfuß",
    note: "Die Mantelfläche lässt Deck- und Grundfläche weg – genau das, was Sie für ein Etikett, eine Wand oder eine seitliche Verkleidung brauchen.",
  },
};

export default de;
