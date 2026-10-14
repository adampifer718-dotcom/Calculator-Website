import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SquareFootageText } from "../text/en";

const de: CalculatorTranslation<SquareFootageText> = {
  content: {
    title: "Quadratfußrechner",
    shortTitle: "Quadratfuß",
    summary: "Berechnen Sie die Fläche eines Rechtecks, Kreises oder Dreiecks in Quadratfuß, Quadratmetern und Quadratyards.",
    metaTitle: "Quadratfußrechner – Fläche in sq ft und m²",
    metaDescription: "Berechnen Sie die Fläche von Rechtecken, Kreisen und Dreiecken in Quadratfuß aus Fuß, Zoll, Yards, Metern oder Zentimetern – mit Quadratmetern und Quadratyards.",
    keywords: ["Quadratfuß", "sq ft in m²", "Fläche berechnen", "Grundfläche", "Raumgröße", "Bodenbelag berechnen", "Quadratmeter"],
    intro: [
      "Die Fläche in Quadratfuß („square footage“) ist eine in Quadratfuß gemessene Fläche. Sie wird für Bodenbeläge, Farbe, Fliesen, Teppiche und Immobilienanzeigen verwendet.",
      "Messen Sie jede Abmessung, wählen Sie Form und Einheit, und der Rechner rechnet die Fläche in Quadratfuß, Quadratmeter und Quadratyards um.",
    ],
    howToUse: [
      "Wählen Sie die Form: Rechteck, Kreis oder Dreieck.",
      "Wählen Sie die Einheit, in der Sie gemessen haben.",
      "Geben Sie die Abmessungen und bei Bedarf die Anzahl gleicher Flächen ein.",
      "Lesen Sie die Fläche in Quadratfuß, Quadratmetern und Quadratyards ab.",
    ],
    formulas: [
      { title: "Rechteck", expression: "Fläche = Länge × Breite", explanation: "Für quadratische und rechteckige Räume." },
      { title: "Kreis", expression: "Fläche = π × (Durchmesser ÷ 2)²", explanation: "Der halbe Durchmesser ist der Radius." },
      { title: "Dreieck", expression: "Fläche = Grundseite × Höhe ÷ 2", explanation: "Die Höhe wird im rechten Winkel zur Grundseite gemessen." },
      { title: "Einheitenumrechnung", expression: "1 ft = 12 in = 0,3048 m\n1 sq ft = 0,09290304 m²\n1 sq yd = 9 sq ft", explanation: "Flächen werden mit dem Quadrat des Längenfaktors umgerechnet." },
    ],
    examples: [
      { title: "Ein Raum von 12 ft × 15 ft", steps: ["Fläche = 12 × 15 = 180 sq ft", "180 × 0,09290304 = 16,72 m²"] },
      { title: "Ein Raum von 4 m × 3,5 m", steps: ["Fläche = 4 × 3,5 = 14 m²", "14 ÷ 0,09290304 = 150,69 sq ft"] },
      { title: "Eine runde Terrasse mit 10 ft Durchmesser", steps: ["Radius = 10 ÷ 2 = 5 ft", "Fläche = π × 5² = 78,54 sq ft"] },
    ],
    assumptions: [
      "Die Maße werden im rechten Winkel genommen, und die Form ist regelmäßig.",
      "Teilen Sie L-förmige oder unregelmäßige Räume in Rechtecke auf und addieren Sie die Ergebnisse.",
      "Planen Sie zusätzliches Material (oft 5–10 %) für Zuschnitt und Verschnitt ein; dieser Rechner liefert nur die exakte Fläche.",
    ],
    faqs: [
      { question: "Wie berechne ich die Fläche in Quadratfuß?", answer: "Multiplizieren Sie Länge und Breite in Fuß. Ein Raum von 10 ft × 12 ft hat 120 Quadratfuß." },
      { question: "Wie rechne ich Quadratmeter in Quadratfuß um?", answer: "Teilen Sie durch 0,09290304 oder multiplizieren Sie mit etwa 10,764. 20 m² sind also etwa 215,3 sq ft." },
      { question: "Wie messe ich einen L-förmigen Raum aus?", answer: "Teilen Sie ihn in zwei Rechtecke, berechnen Sie jede Fläche und addieren Sie beide." },
    ],
    sourcesUsedFor: ["Exakte Umrechnungsfaktoren für Längen (1 ft = 0,3048 m, 1 in = 2,54 cm)."],
  },
  text: {
    shape: "Form",
    shapes: { rectangle: "Rechteck oder Quadrat", circle: "Kreis", triangle: "Dreieck" },
    unit: "Maßeinheit",
    units: { ft: "Fuß (ft)", in: "Zoll (in)", yd: "Yards (yd)", m: "Meter (m)", cm: "Zentimeter (cm)" },
    length: "Länge",
    width: "Breite",
    diameter: "Durchmesser",
    base: "Grundseite",
    height: "Höhe",
    quantity: "Anzahl der Flächen",
    quantityHelp: "Für mehrere gleiche Räume oder Stücke.",
    area: "Fläche",
    quantityCaption: "Gesamtfläche für {count} gleiche Flächen.",
    sqM: "Quadratmeter",
    sqYd: "Quadratyards",
    sqUnit: "Quadrat-{unit}",
    sqFtSuffix: "sq ft",
    sqYdSuffix: "sq yd",
  },
};

export default de;
