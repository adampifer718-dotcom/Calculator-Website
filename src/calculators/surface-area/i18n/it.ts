import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SurfaceAreaText } from "../text/en";

const it: CalculatorTranslation<SurfaceAreaText> = {
  content: {
    title: "Calcolatore della superficie dei solidi",
    shortTitle: "Superficie dei solidi",
    summary: "Trova la superficie totale, laterale e di base di cubo, parallelepipedo, cilindro, sfera, semisfera, cono o piramide quadrata.",
    metaTitle: "Superficie dei solidi – Parallelepipedo, cilindro, cono, sfera",
    metaDescription:
      "Calcola la superficie totale di sette solidi, con superficie laterale, area di base e apotema, in mm, cm, m, in o ft, e i totali in m² e ft².",
    keywords: [
      "superficie dei solidi",
      "superficie del cilindro",
      "superficie del cono",
      "superficie della sfera",
      "superficie laterale",
      "apotema",
      "superficie della piramide",
    ],
    intro: [
      "La superficie è l'area complessiva di tutte le facce o superfici curve di un solido. Ti dice quanta vernice, carta da regalo, lamiera o tessuto serve per ricoprire completamente un oggetto.",
      "Scegli uno dei sette solidi e inserisci le dimensioni in un'unica unità. Oltre al totale, il calcolatore mostra la superficie laterale (i lati senza le basi), l'area di base e, per coni e piramidi, l'apotema. Il totale è indicato anche in metri quadrati e piedi quadrati.",
    ],
    howToUse: [
      "Scegli la forma.",
      "Scegli l'unità in cui sono espresse le misure.",
      "Inserisci le dimensioni richieste per quella forma, usando il raggio (metà del diametro) per le forme rotonde e l'altezza perpendicolare per coni e piramidi.",
      "Leggi la superficie totale e le superfici parziali indicate sotto.",
    ],
    formulas: [
      { title: "Cubo e parallelepipedo", expression: "A = 6a²\nA = 2(lw + lh + wh)", explanation: "Somma le aree delle sei facce rettangolari." },
      {
        title: "Cilindro",
        expression: "A = 2πr² + 2πrh",
        explanation: "Le due basi circolari più la superficie laterale, che srotolata diventa un rettangolo largo 2πr e alto h.",
      },
      {
        title: "Sfera e semisfera",
        expression: "A = 4πr²\nA = 2πr² + πr² = 3πr²",
        explanation: "Una semisfera chiusa ha metà della superficie curva della sfera più la base circolare piatta.",
      },
      { title: "Cono", expression: "s = √(r² + h²)\nA = πr² + πrs", explanation: "Il cerchio di base più la superficie laterale πrs, dove s è l'apotema." },
      {
        title: "Piramide quadrata",
        expression: "s = √((a/2)² + h²)\nA = a² + 2as",
        explanation: "La base quadrata più quattro triangoli, ciascuno con base a e altezza s (l'apotema di una faccia).",
      },
    ],
    examples: [
      {
        title: "Una scatola da spedizione di 30 × 20 × 10 cm",
        steps: ["lw = 600, lh = 300, wh = 200", "A = 2 × (600 + 300 + 200) = 2.200 cm²", "2.200 cm² = 0,22 m²"],
      },
      {
        title: "Un cono con raggio di 0,6 m e altezza di 0,8 m",
        steps: ["s = √(0,6² + 0,8²) = 1 m", "Base = π × 0,36 ≈ 1,131 m², laterale = π × 0,6 × 1 ≈ 1,885 m²", "A ≈ 1,131 + 1,885 ≈ 3,016 m²"],
      },
      {
        title: "Una piramide quadrata con base di 6 ft e altezza di 4 ft",
        steps: ["s = √(3² + 4²) = 5 ft", "Laterale = 2 × 6 × 5 = 60 ft², base = 36 ft²", "A = 36 + 60 = 96 ft²"],
      },
    ],
    assumptions: [
      "Le forme sono ideali e rette: coni e piramidi hanno il vertice esattamente sopra il centro della base e le forme rotonde sono cerchi perfetti.",
      "I totali si riferiscono a solidi chiusi. Il cilindro include entrambe le basi, cono e piramide includono la base e la semisfera include la faccia piatta. Per le forme aperte usa la superficie laterale o curva.",
      "Gli oggetti reali hanno giunture, sovrapposizioni e spessore. Quando acquisti il materiale, aggiungi un margine per coprirli.",
    ],
    faqs: [
      {
        question: "Che differenza c'è tra superficie laterale e superficie totale?",
        answer: "La superficie laterale conta solo i lati. La superficie totale aggiunge la base e, per prismi e cilindri, anche la faccia superiore.",
      },
      {
        question: "Che cos'è l'apotema?",
        answer: "È la distanza misurata lungo la superficie inclinata, dal bordo della base fino al vertice. È più lunga dell'altezza verticale e si ricava con il teorema di Pitagora.",
      },
      {
        question: "Come si convertono i cm² in m²?",
        answer: "Dividi per 10.000, perché un metro vale 100 cm e la superficie cresce con il quadrato: 100 × 100 = 10.000.",
      },
    ],
    sourcesUsedFor: [
      "Formule della superficie di parallelepipedo, cilindro, sfera e cono.",
      "Applicazione guidata delle formule della superficie di cilindro e sfera.",
    ],
  },
  text: {
    shape: "Forma",
    shapes: {
      cube: "Cubo",
      box: "Parallelepipedo rettangolo",
      cylinder: "Cilindro (chiuso)",
      sphere: "Sfera",
      hemisphere: "Semisfera (con base piatta)",
      cone: "Cono (con base)",
      pyramid: "Piramide quadrata (con base)",
    },
    unit: "Unità di lunghezza",
    unitHelp: "Inserisci tutte le dimensioni in questa unità. Le superfici sono mostrate nella stessa unità al quadrato.",
    units: { mm: "Millimetri (mm)", cm: "Centimetri (cm)", m: "Metri (m)", in: "Pollici (in)", ft: "Piedi (ft)" },
    edge: "Spigolo (a)",
    length: "Lunghezza (l)",
    width: "Larghezza (w)",
    height: "Altezza (h)",
    heightHelp: "L'altezza perpendicolare, misurata in verticale dalla base, non lungo il lato inclinato.",
    radius: "Raggio (r)",
    radiusHelp: "Metà del diametro.",
    baseSide: "Lato di base (a)",
    total: "Superficie totale",
    formula: {
      cube: "A = 6a²",
      box: "A = 2(lw + lh + wh)",
      cylinder: "A = 2πr² + 2πrh",
      sphere: "A = 4πr²",
      hemisphere: "A = 3πr²",
      cone: "A = πr² + πr√(r² + h²)",
      pyramid: "A = a² + 2a√((a/2)² + h²)",
    },
    lateral: "Superficie laterale (solo i lati)",
    curved: "Superficie curva",
    base: "Area di base",
    eachEnd: "Area di ciascuna base circolare",
    face: "Area di una faccia",
    slant: "Apotema",
    inSquareMeters: "Totale in metri quadrati",
    inSquareFeet: "Totale in piedi quadrati",
    note: "La superficie laterale esclude le facce superiore e inferiore: è quella che ti serve per un'etichetta, una parete o un rivestimento laterale.",
  },
};

export default it;
