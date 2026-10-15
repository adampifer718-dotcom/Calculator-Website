import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FlooringText } from "../text/en";

const de: CalculatorTranslation<FlooringText> = {
  content: {
    title: "Bodenbelagsrechner",
    shortTitle: "Bodenbelag",
    summary: "Berechnen Sie, wie viele Pakete Laminat, Vinyldielen oder Holzboden Sie brauchen – aus Raumgröße, Verschnittzuschlag und Deckfläche pro Paket, optional mit Kosten.",
    metaTitle: "Bodenbelagsrechner – Pakete Laminat oder Vinyl",
    metaDescription: "Schätzen Sie die Pakete Bodenbelag für einen rechteckigen oder L-förmigen Raum – mit Verschnittzuschlag, Deckfläche pro Paket und optionalem Preis pro Fläche.",
    keywords: ["Bodenbelag berechnen", "wie viel Laminat brauche ich", "Laminatrechner", "Vinylboden berechnen", "Pakete Laminat", "Verschnitt Laminat", "Parkett berechnen"],
    intro: [
      "Bodenbelag wird paketweise verkauft, und jedes Paket deckt eine feste Fläche ab. Um zu wissen, wie viele Sie kaufen müssen, brauchen Sie die Bodenfläche, einen Zuschlag für den Verschnitt und die auf dem Paket angegebene Deckfläche.",
      "Dieser Rechner fasst das für einen rechteckigen Raum oder einen L-förmigen Raum aus zwei Rechtecken zusammen, rundet auf volle Pakete auf und schätzt, wenn Sie einen Preis eingeben, die Kosten. Wenn Sie nur die Fläche eines Raums brauchen, liefert der Quadratfußrechner sie ohne Pakete und Verschnitt.",
    ],
    howToUse: [
      "Wählen Sie US-Einheiten (Fuß) oder metrische Einheiten (Meter).",
      "Geben Sie Länge und Breite des Raums ein. Geben Sie bei einem L-förmigen Raum zuerst das Hauptrechteck und das kleinere als zweite Fläche ein.",
      "Legen Sie den Verschnittzuschlag fest: etwa 10 % für eine gerade Verlegung, etwa 15 % für Diagonal- oder Fischgrätmuster.",
      "Geben Sie die Deckfläche pro Paket laut Verpackung und optional den Preis pro Quadratfuß oder Quadratmeter ein.",
    ],
    formulas: [
      { title: "Bodenfläche", expression: "A = L₁ × W₁ + L₂ × W₂", explanation: "Das zweite Rechteck ist optional; lassen Sie es bei einem einfachen rechteckigen Raum auf 0." },
      { title: "Fläche mit Verschnitt", expression: "A_w = A × (1 + Verschnitt ÷ 100)", explanation: "Der Zuschlag deckt Reststücke an den Wänden, Schnittfehler und beschädigte Dielen ab." },
      { title: "Pakete", expression: "Pakete = ⌈A_w ÷ Deckfläche pro Paket⌉", explanation: "Aufgerundet, weil Bodenbelag nur in ganzen Paketen verkauft wird." },
      { title: "Kosten", expression: "Kosten = Pakete × Deckfläche pro Paket × Preis pro Fläche", explanation: "Sie bezahlen ganze Pakete, daher beruhen die Kosten auf der Fläche in den gekauften Paketen." },
    ],
    examples: [
      {
        title: "Schlafzimmer 14 ft × 12 ft mit Paketen zu 20 ft²",
        steps: ["Fläche = 14 × 12 = 168 ft²", "Mit 10 % Verschnitt: 168 × 1,10 = 184,8 ft²", "184,8 ÷ 20 = 9,24, also 10 Pakete kaufen (200 ft²)"],
      },
      {
        title: "L-förmiges Wohnzimmer im Fischgrätmuster, metrisch",
        steps: ["Fläche = 5 × 4 + 2 × 1,5 = 23 m²", "Mit 15 % Verschnitt: 23 × 1,15 = 26,45 m²", "26,45 ÷ 2,2 ≈ 12,02, also 13 Pakete kaufen"],
      },
      {
        title: "Arbeitszimmer mit Preis pro Quadratfuß",
        steps: ["Fläche = 12 × 10 = 120 ft²; mit 10 % Verschnitt 132 ft²", "132 ÷ 23,4 ≈ 5,64, also 6 Pakete mit 140,4 ft² kaufen", "Kosten = 140,4 ft² × 3,49 $ ≈ 490,00 $"],
      },
    ],
    assumptions: [
      "Der Raum ist ein Rechteck oder zwei Rechtecke, die sich nicht überlappen. Messen Sie andere Formen als mehrere Rechtecke und addieren Sie sie.",
      "Verschnittzuschläge sind Faustregeln. Dielenlänge, Raumform und Verlegemethode beeinflussen, wie viel verloren geht; beachten Sie daher die Herstellerangaben zu Ihrem Produkt.",
      "Einbauschränke, Türdurchgänge und Flächen unter fest eingebauten Möbeln sind nur enthalten, wenn Sie sie zu den Maßen hinzufügen.",
      "Trittschalldämmung, Sockelleisten, Übergangsprofile, Kleber und Arbeitskosten sind in den Kosten nicht enthalten.",
    ],
    faqs: [
      {
        question: "Wie viel Bodenbelag sollte ich zusätzlich kaufen?",
        answer: "Etwa 10 % sind ein üblicher Zuschlag für eine gerade Verlegung in einem einfachen Raum. Diagonal-, Fischgrät- und Chevronmuster oder Räume mit vielen Ecken brauchen meist etwa 15 % oder mehr.",
      },
      {
        question: "Warum sollte ich Reservepakete aufbewahren?",
        answer: "Mit übrigen Dielen können Sie später beschädigte Stücke durch Belag aus derselben Produktionscharge ersetzen, deren Farbe und Oberfläche passen.",
      },
      {
        question: "Wie messe ich einen L-förmigen Raum aus?",
        answer: "Teilen Sie den Boden in zwei Rechtecke, die sich nicht überlappen, messen Sie jeweils Länge und Breite und geben Sie sie als Raum und als zweite Fläche ein.",
      },
    ],
    sourcesUsedFor: ["Der exakte internationale Fuß (0,3048 m) für die Umrechnung zwischen Quadratfuß und Quadratmetern."],
  },
  text: {
    units: "Einheiten",
    unitSystems: { imperial: "US (ft, ft²)", metric: "Metrisch (m, m²)" },
    length: "Raumlänge",
    width: "Raumbreite",
    length2: "Länge der zweiten Fläche",
    width2: "Breite der zweiten Fläche",
    secondHelp: "Optional. Teilen Sie einen L-förmigen Raum in zwei Rechtecke und geben Sie das zweite hier ein. Andernfalls lassen Sie beide Werte auf 0.",
    waste: "Verschnittzuschlag",
    wasteHelp: "Zuschlag für Schnitte, Reststücke und beschädigte Stücke. Etwa 10 % passen zu einer geraden Verlegung; nehmen Sie für Diagonal- oder Fischgrätmuster etwa 15 %.",
    coverage: "Deckfläche pro Paket",
    coverageHelp: "Die Fläche, die ein Paket abdeckt, laut Verpackung oder Produktseite.",
    price: "Preis pro Flächeneinheit",
    priceHelp: "Optional. Der Preis des Bodenbelags pro Quadratfuß oder Quadratmeter.",
    errors: {
      secondPair: "Geben Sie Länge und Breite der zweiten Fläche ein oder setzen Sie beide auf 0.",
    },
    boxes: "Benötigte Pakete",
    caption: "{area} plus {waste} Verschnitt, bei {coverage} pro Paket.",
    floorArea: "Bodenfläche",
    areaWithWaste: "Fläche mit Verschnitt",
    areaBought: "Fläche in den gekauften Paketen",
    leftover: "Rest nach der Verlegung",
    otherUnit: "Bodenfläche in anderen Einheiten",
    cost: "Kosten des Belags (ganze Pakete)",
    costWithWaste: "Kosten der Fläche mit Verschnitt",
    notes: {
      squareFootage: "Brauchen Sie nur die Fläche eines Raums? Der Quadratfußrechner liefert die Fläche ohne Pakete und Verschnitt.",
      extras: "Trittschalldämmung, Sockelleisten, Übergangsprofile und Kleber sind nicht enthalten.",
    },
  },
};

export default de;
