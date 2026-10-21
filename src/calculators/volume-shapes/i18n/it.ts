import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { VolumeShapesText } from "../text/en";

const it: CalculatorTranslation<VolumeShapesText> = {
  content: {
    title: "Calcolatore del volume dei solidi",
    shortTitle: "Volume dei solidi",
    summary: "Trova il volume di cubo, parallelepipedo, cilindro, sfera, semisfera, cono o piramide quadrata, con il risultato in litri, metri cubi e galloni USA.",
    metaTitle: "Calcolatore del volume – Cilindro, sfera, cono e altro",
    metaDescription:
      "Calcola il volume di cubo, parallelepipedo, cilindro, sfera, semisfera, cono o piramide quadrata in mm, cm, m, in o ft, anche in litri e galloni USA.",
    keywords: [
      "calcolo volume",
      "volume del cilindro",
      "volume della sfera",
      "volume del cono",
      "metri cubi",
      "litri",
      "piedi cubi",
      "volume della piramide",
    ],
    intro: [
      "Il volume è lo spazio occupato da un solido. Questo calcolatore copre sette solidi comuni, dal semplice cubo al cono o alla piramide quadrata, così puoi dimensionare un serbatoio, una fioriera, una scatola o una figura di un compito.",
      "Scegli una forma e un'unità di lunghezza, poi digita le dimensioni richieste. Il risultato compare in quell'unità al cubo ed è convertito anche in litri, metri cubi e galloni USA, utile quando devi sapere quanto liquido o materiale ci sta dentro.",
    ],
    howToUse: [
      "Scegli la forma.",
      "Scegli l'unità in cui hai misurato. Tutte le dimensioni devono usare la stessa unità.",
      "Inserisci le dimensioni richieste per quella forma. Per le forme rotonde usa il raggio, cioè metà del diametro.",
      "Leggi il volume e le sue conversioni in litri, metri cubi e galloni USA.",
    ],
    formulas: [
      {
        title: "Cubo e parallelepipedo",
        expression: "V = a³\nV = l × w × h",
        explanation: "Un cubo ha tre spigoli uguali a; un parallelepipedo moltiplica lunghezza, larghezza e altezza.",
      },
      {
        title: "Cilindro e cono",
        expression: "V = πr²h\nV = 1/3 πr²h",
        explanation: "Un cono contiene esattamente un terzo del cilindro con lo stesso raggio di base r e la stessa altezza h.",
      },
      { title: "Sfera e semisfera", expression: "V = 4/3 πr³\nV = 2/3 πr³", explanation: "Una semisfera è metà di una sfera di raggio r." },
      { title: "Piramide quadrata", expression: "V = 1/3 a²h", explanation: "Un terzo dell'area di base a² per l'altezza perpendicolare h." },
      {
        title: "Conversioni di unità",
        expression: "1 m³ = 1.000 L\n1 gal USA = 3,785411784 L",
        explanation: "Il volume nella tua unità al cubo viene convertito in metri cubi con il fattore di lunghezza esatto, poi in litri e galloni.",
      },
    ],
    examples: [
      {
        title: "Un serbatoio d'acqua cilindrico alto 1,2 m con raggio di 0,5 m",
        steps: ["V = π × 0,5² × 1,2", "= π × 0,3 ≈ 0,94248 m³", "0,94248 m³ × 1.000 ≈ 942,48 L, circa 248,98 gal USA"],
      },
      {
        title: "Una palla con raggio di 4 pollici",
        steps: ["V = 4/3 × π × 4³", "= 4/3 × π × 64 ≈ 268,08 in³", "Cioè circa 4,39 L o 1,16 gal USA"],
      },
      {
        title: "Una piramide quadrata con base di 9 cm e altezza di 15 cm",
        steps: ["Area di base = 9² = 81 cm²", "V = 1/3 × 81 × 15 = 405 cm³", "405 cm³ = 0,405 L"],
      },
    ],
    assumptions: [
      "Le forme sono ideali: gli spigoli sono dritti, le forme rotonde perfettamente circolari, e cilindro, cono e piramide sono retti (il vertice o la sommità si trova esattamente sopra il centro della base).",
      "Il risultato è lo spazio racchiuso dalle dimensioni esterne. Per un contenitore con pareti spesse, misura l'interno per sapere quanto contiene.",
      "I galloni USA sono galloni per liquidi da 3,785411784 L. I galloni imperiali non sono mostrati.",
    ],
    faqs: [
      {
        question: "Come trovo il volume se conosco solo il diametro?",
        answer: "Dividi il diametro per due per ottenere il raggio, poi inserisci il raggio. Un vaso largo 30 cm ha un raggio di 15 cm.",
      },
      {
        question: "Quanti litri ci sono in un metro cubo?",
        answer: "Esattamente 1.000. Un litro è il volume di un cubo di 10 cm di lato, quindi 1.000 cm³ fanno 1 L.",
      },
      {
        question: "Perché un cono è un terzo di un cilindro?",
        answer: "Un cono si restringe in modo uniforme fino a una punta, e sommando le sue sezioni circolari dalla base al vertice si ottiene esattamente un terzo di πr²h. Lo stesso ragionamento rende una piramide un terzo del parallelepipedo con la stessa base e la stessa altezza.",
      },
    ],
    sourcesUsedFor: [
      "Formule del volume di parallelepipedo, cilindro, sfera e cono.",
      "Il gallone USA di 231 pollici cubi (3,785411784 L) e il pollice di 2,54 cm.",
    ],
  },
  text: {
    shape: "Forma",
    shapes: {
      cube: "Cubo",
      box: "Parallelepipedo rettangolo",
      cylinder: "Cilindro",
      sphere: "Sfera",
      hemisphere: "Semisfera",
      cone: "Cono",
      pyramid: "Piramide quadrata",
    },
    unit: "Unità di lunghezza",
    unitHelp: "Inserisci tutte le dimensioni in questa unità. Il volume è mostrato nella stessa unità al cubo.",
    units: { mm: "Millimetri (mm)", cm: "Centimetri (cm)", m: "Metri (m)", in: "Pollici (in)", ft: "Piedi (ft)" },
    edge: "Spigolo (a)",
    length: "Lunghezza (l)",
    width: "Larghezza (w)",
    height: "Altezza (h)",
    heightHelp: "L'altezza perpendicolare, dalla base dritta fino alla sommità o al vertice.",
    radius: "Raggio (r)",
    radiusHelp: "Metà del diametro.",
    baseSide: "Lato di base (a)",
    volume: "Volume",
    formula: {
      cube: "V = a³",
      box: "V = l × w × h",
      cylinder: "V = πr²h",
      sphere: "V = 4/3 πr³",
      hemisphere: "V = 2/3 πr³",
      cone: "V = 1/3 πr²h",
      pyramid: "V = 1/3 a²h",
    },
    liters: "In litri",
    cubicMeters: "In metri cubi",
    usGallons: "In galloni USA",
    note: "1 litro equivale a 1.000 cm³ e 1 gallone USA a 3,785411784 litri.",
  },
};

export default it;
