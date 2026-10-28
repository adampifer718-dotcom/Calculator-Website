import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoofingText } from "../text/en";

const de: CalculatorTranslation<RoofingText> = {
  content: {
    title: "Dachflächenrechner",
    shortTitle: "Dachfläche",
    summary: "Schätzen Sie Dachfläche, Squares und Schindelpakete für ein einfaches Sattel- oder Walmdach aus Grundfläche, Dachüberstand und Dachneigung.",
    metaTitle: "Dachflächenrechner – Squares, Schindelpakete und Fläche",
    metaDescription: "Schätzen Sie die Dachfläche aus Grundfläche, Überstand und Neigung, dazu Squares, Schindelpakete und Rollen Unterdeckbahn – mit Verschnittzuschlag.",
    keywords: ["Dachfläche berechnen", "Dachrechner", "Schindeln berechnen", "Bitumenschindeln Bedarf", "Dachneigung Faktor", "Unterdeckbahn Rollen", "Satteldach Fläche", "Walmdach Fläche"],
    intro: [
      "Dachschindeln werden in den USA nach Squares verkauft: Ein Square deckt 100 ft² (etwa 9,29 m²) Dachfläche. Ein geneigtes Dach hat mehr Fläche als die Grundfläche darunter, daher wird die Grundrissfläche mit einem Neigungsfaktor multipliziert, der mit der Steilheit des Dachs wächst.",
      "Geben Sie Länge und Breite des Gebäudes, den Dachüberstand und die Neigung ein, um die Dachfläche, die Anzahl der Squares und Schindelpakete und bei Bedarf die Rollen Unterdeckbahn zu schätzen. Ein Verschnittzuschlag deckt Zuschnitte, Anfangsreihen und Firstabdeckungen ab.",
    ],
    howToUse: [
      "Wählen Sie US-Einheiten (Fuß) oder metrische Einheiten (Meter).",
      "Geben Sie Länge und Breite des Gebäudes ein und wie weit das Dach über die Wände hinausragt.",
      "Geben Sie die Neigung als Steigung pro 12 Einheiten Lauf ein (zum Beispiel 6 für ein 6/12-Dach) oder als Winkel.",
      "Wählen Sie Satteldach oder Walmdach und prüfen Sie den Verschnittzuschlag; Walmdächer sind wegen des zusätzlichen Zuschnitts auf 15 % voreingestellt.",
      "Prüfen Sie die Pakete pro Square für Ihre Schindeln und geben Sie bei Bedarf die Deckfläche einer Rolle Unterdeckbahn ein.",
    ],
    formulas: [
      { title: "Grundrissfläche", expression: "Grundriss = (L + 2 × Überstand) × (B + 2 × Überstand)", explanation: "L und B sind die Außenlänge und -breite des Gebäudes." },
      { title: "Neigungsfaktor", expression: "Faktor = √(1 + (Steigung ÷ 12)²)", explanation: "Für ein 6/12-Dach beträgt der Faktor √1,25 ≈ 1,118. Aus einem Winkel θ ergibt sich der Faktor 1 ÷ cos θ." },
      { title: "Dachfläche und Squares", expression: "Fläche = Grundriss × Faktor; Squares = Fläche × (1 + Verschnitt) ÷ 100 ft²", explanation: "Metrische Flächen werden mit 1 ft² = 0,09290304 m² umgerechnet." },
      { title: "Pakete und Rollen", expression: "Pakete = ⌈Squares × Pakete pro Square⌉; Rollen = ⌈Fläche mit Verschnitt ÷ Deckfläche pro Rolle⌉", explanation: "Beide werden auf ganze Einheiten aufgerundet." },
    ],
    examples: [
      {
        title: "Haus 40 × 30 ft, 1 ft Überstand, Satteldach 6/12",
        steps: [
          "Grundrissfläche = 42 × 32 = 1.344 ft²",
          "Dachfläche = 1.344 × √1,25 ≈ 1.502,64 ft²",
          "Mit 10 % Verschnitt: 1.652,90 ft² oder 16,53 Squares",
          "Pakete = ⌈16,53 × 3⌉ = 50",
        ],
      },
      {
        title: "Haus 12 × 9 m, 0,5 m Überstand, Walmdach mit 30°",
        steps: [
          "Grundrissfläche = 13 × 10 = 130 m²",
          "Neigungsfaktor = 1 ÷ cos 30° ≈ 1,1547, also Dachfläche ≈ 150,11 m²",
          "Mit 15 % Verschnitt: 172,63 m² ÷ 0,09290304 ≈ 1.858,15 ft² oder 18,58 Squares",
          "Pakete = ⌈18,58 × 3⌉ = 56",
        ],
      },
      {
        title: "50 × 28 ft, 1,5 ft Überstand, Dach 8/12 mit Unterdeckbahn",
        steps: [
          "Grundrissfläche = 53 × 31 = 1.643 ft²",
          "Neigungsfaktor = √(1 + (8 ÷ 12)²) ≈ 1,2019, also Dachfläche ≈ 1.974,64 ft²",
          "Mit 12 % Verschnitt: 2.211,60 ft² oder 22,12 Squares und ⌈66,35⌉ = 67 Pakete",
          "Unterdeckbahn mit 400 ft² pro Rolle: ⌈5,53⌉ = 6 Rollen",
        ],
      },
    ],
    assumptions: [
      "Das Dach ist im Grundriss ein einfaches Rechteck mit gleicher Neigung auf allen Dachflächen. Gauben, Kehlen, Schornsteine, Dachfenster, L-förmige Grundrisse und Flächen mit unterschiedlicher Neigung brauchen zusätzliches Material und sollten Abschnitt für Abschnitt gemessen werden.",
      "Ein Walmdach und ein Satteldach über derselben Grundfläche und mit derselben Neigung haben dieselbe Dachfläche; der höhere voreingestellte Verschnitt des Walmdachs berücksichtigt seine zusätzlichen Zuschnitte.",
      "Pakete pro Square und Deckfläche der Unterdeckbahn hängen vom Produkt ab. Verwenden Sie die Angaben auf der Verpackung.",
      "Dies ist nur eine Materialschätzung. Dachkonstruktion, Belüftung, Brandschutzklassen und Ausführungsdetails müssen den Herstellerangaben und den örtlichen Bauvorschriften entsprechen.",
    ],
    faqs: [
      { question: "Was ist ein Square?", answer: "Ein Square sind 100 ft² Dachfläche, also eine Fläche von 10 × 10 ft. Dachdecker in den USA kalkulieren und bestellen Schindeln nach Squares; 1 Square entspricht etwa 9,29 m²." },
      { question: "Wie viele Schindelpakete ergeben ein Square?", answer: "Viele Bitumenschindeln sind zu drei Paketen pro Square verpackt, schwerere Produkte können aber in vier oder mehr kleineren Paketen kommen. Die Deckfläche steht auf dem Paketetikett; prüfen Sie sie und passen Sie die Pakete pro Square an." },
      { question: "Warum ist die Dachfläche größer als das Haus?", answer: "Weil das Dach geneigt ist und über die Wände hinausragt. Ein 6/12-Dach hat etwa 12 % mehr Fläche als seine Grundrissfläche und ein 12/12-Dach etwa 41 % mehr – noch bevor der Überstand hinzukommt." },
    ],
    sourcesUsedFor: [
      "Ein Square von 100 ft² und die übliche Verpackung von drei Schindelpaketen pro Square, die je nach Produkt variiert.",
      "Die allgemeine Methode, Dachmaterial aus Dachfläche, Squares und einem Verschnittzuschlag zu schätzen.",
    ],
  },
  text: {
    units: "Einheiten",
    unitSystems: { imperial: "US (ft)", metric: "Metrisch (m)" },
    length: "Gebäudelänge",
    lengthHelp: "Die Außenlänge der Gebäudegrundfläche, ohne Dachüberstand.",
    width: "Gebäudebreite",
    overhang: "Dachüberstand (Traufe und Ortgang)",
    overhangHelp: "Wie weit das Dach auf jeder Seite über die Wände hinausragt. Er wird an beiden Enden der Länge und der Breite hinzugerechnet.",
    pitchMode: "Dachneigung angegeben als",
    pitchModes: { rise: "Steigung auf 12", angle: "Winkel" },
    rise: "Steigung pro 12 Einheiten Lauf",
    riseHelp: "Für ein Dach mit 6 auf 12 (6/12) geben Sie 6 ein. Steigung und Lauf verwenden dieselbe Einheit.",
    angle: "Dachneigungswinkel",
    roofType: "Dachform",
    roofTypes: { gable: "Satteldach", hip: "Walmdach" },
    roofTypeHelp: "Bei gleicher Neigung auf allen Dachflächen haben ein Satteldach und ein Walmdach über derselben Grundfläche dieselbe Dachfläche. Walmdächer erfordern mehr Zuschnitt, daher ist ihr voreingestellter Verschnittzuschlag höher.",
    waste: "Verschnittzuschlag",
    wasteHelp: "Zuschlag für Zuschnitte, Anfangsreihen, First- und Gratabdeckungen sowie Fehler.",
    bundles: "Pakete pro Square",
    bundlesHelp: "Viele Bitumenschindeln kommen zu 3 Paketen pro Square (100 ft²), manche Produkte weichen aber ab. Prüfen Sie die auf dem Paket angegebene Deckfläche.",
    rollCoverage: "Deckfläche der Unterdeckbahn pro Rolle (optional)",
    rollCoverageHelp: "Die auf dem Rollenetikett angegebene Nettodeckfläche nach Abzug der Überlappungen. Leer lassen, um die Rollenzahl auszulassen.",
    errors: {
      angle: "Der Dachneigungswinkel muss kleiner als 90° sein.",
    },
    squares: "Squares (einschließlich Verschnitt)",
    caption: "{area} Dachfläche plus {waste} Verschnitt; 1 Square = 100 ft² (9,29 m²).",
    planArea: "Grundfläche einschließlich Überstand",
    pitchFactor: "Neigungsfaktor (Dachfläche ÷ Grundrissfläche)",
    pitchText: "Neigung",
    pitchValue: "{rise} auf 12",
    angleOut: "Dachneigungswinkel",
    roofArea: "Dachfläche",
    roofAreaOther: "Dachfläche in anderen Einheiten",
    areaWithWaste: "Dachfläche einschließlich Verschnitt",
    squaresNoWaste: "Squares ohne Verschnitt",
    bundlesOut: "Schindelpakete",
    rolls: "Rollen Unterdeckbahn",
    notes: {
      hip: "Ein Walmdach mit gleicher Neigung auf allen vier Dachflächen hat dieselbe Fläche wie ein Satteldach über derselben Grundfläche; es braucht nur mehr Zuschnitte und Gratabdeckungen.",
      shape: "Dies setzt ein einfaches rechteckiges Dach voraus. Gauben, Kehlen, Schornsteine, Dachfenster und L-förmige Grundrisse brauchen zusätzliches Material; messen Sie in diesen Fällen jeden Abschnitt einzeln.",
      bundles: "Pakete werden auf ganze Pakete aufgerundet. Firstabdeckungen, Anfangsstreifen, Tropfkanten, Anschlussbleche und Nägel sind nicht enthalten.",
    },
  },
};

export default de;
