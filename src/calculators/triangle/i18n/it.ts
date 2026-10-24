import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TriangleText } from "../text/en";

const it: CalculatorTranslation<TriangleText> = {
  content: {
    title: "Calcolatore per risolvere triangoli",
    shortTitle: "Triangolo",
    summary:
      "Risolvi qualsiasi triangolo da tre lati e angoli noti (LLL, LAL, ALA, AAL o LLA) e ottieni area, perimetro, tipo, raggio inscritto e raggio circoscritto.",
    metaTitle: "Calcolatore per risolvere triangoli – LLL, LAL, ALA e LLA",
    metaDescription:
      "Risolvi un triangolo da tre lati, due lati e un angolo o due angoli e un lato. Gestisce il caso ambiguo LLA e trova area, perimetro e tipo di triangolo.",
    keywords: [
      "risolvere un triangolo",
      "teorema dei seni",
      "teorema del coseno",
      "caso ambiguo",
      "area del triangolo",
      "lato mancante",
      "angolo mancante",
      "raggio circoscritto",
    ],
    intro: [
      "Un triangolo è determinato da tre misure, purché almeno una sia un lato. Questo calcolatore accetta qualsiasi combinazione di questo tipo, LLL, LAL, ALA, AAL o LLA (in inglese SSS, SAS, ASA, AAS e SSA), e ricava i lati e gli angoli mancanti con il teorema del coseno e il teorema dei seni.",
      "Trova anche area, perimetro, raggio inscritto e raggio circoscritto, e indica se il triangolo è acutangolo, rettangolo o ottusangolo e se è equilatero, isoscele o scaleno. Nel caso LLA due triangoli diversi possono corrispondere agli stessi valori: il calcolatore li mostra entrambi quando succede e ti avvisa quando non esiste alcun triangolo. Per i triangoli rettangoli da due lati, il Calcolatore del teorema di Pitagora è più rapido.",
    ],
    howToUse: [
      "Scegli quali valori conosci. Il lato a è sempre opposto all'angolo A, b opposto a B e c opposto a C.",
      "Inserisci i lati in un'unica unità e gli angoli in gradi.",
      "Leggi l'area, poi la tabella con tutti e tre i lati e gli angoli.",
      "Nel caso LLA controlla la nota: potrebbe esserci un secondo triangolo, elencato a parte.",
    ],
    formulas: [
      {
        title: "Teorema del coseno",
        expression: "c² = a² + b² − 2ab cos C\ncos A = (b² + c² − a²) ÷ (2bc)",
        explanation: "Trova il terzo lato da due lati e l'angolo compreso (LAL), oppure tutti gli angoli dai tre lati (LLL).",
      },
      {
        title: "Teorema dei seni",
        expression: "a ÷ sin A = b ÷ sin B = c ÷ sin C = 2R",
        explanation: "Trova i lati rimanenti quando sono noti due angoli (ALA, AAL) e il secondo angolo nel caso LLA. R è il raggio circoscritto.",
      },
      {
        title: "Caso ambiguo LLA",
        expression: "h = b sin A\na < h: nessun triangolo; a = h: un triangolo rettangolo\nh < a < b: due triangoli; a ≥ b: un triangolo",
        explanation: "Per un angolo A acuto, sin B = b sin A ÷ a ha due angoli possibili, B e 180° − B. Se A è di 90° o più, un triangolo esiste solo quando a > b.",
      },
      {
        title: "Area e raggi",
        expression: "area = √(s(s − a)(s − b)(s − c)), dove s = (a + b + c) ÷ 2\nr = area ÷ s\nR = abc ÷ (4 × area)",
        explanation: "La formula di Erone dà l'area dai tre lati. r è il raggio della circonferenza inscritta e R quello della circonferenza circoscritta.",
      },
    ],
    examples: [
      {
        title: "Tre lati: 5, 6 e 7",
        steps: [
          "cos A = (36 + 49 − 25) ÷ 84 ≈ 0,7143, quindi A ≈ 44,4153°; allo stesso modo B ≈ 57,1217° e C ≈ 78,4630°",
          "s = 9, Area = √(9 × 4 × 3 × 2) = √216 ≈ 14,6969",
          "Tutti gli angoli sono sotto i 90° e tutti i lati sono diversi: un triangolo acutangolo scaleno",
        ],
      },
      {
        title: "Due lati di 8 e 11 con un angolo compreso di 37°",
        steps: ["c² = 64 + 121 − 176 × cos 37° ≈ 44,4401, quindi c ≈ 6,6663", "Area = ½ × 8 × 11 × sin 37° ≈ 26,4799", "B ≈ 96,7625°, quindi il triangolo è ottusangolo"],
      },
      {
        title: "LLA: a = 6, b = 8 e A = 35° (due triangoli)",
        steps: [
          "h = 8 × sin 35° ≈ 4,5886; poiché 4,5886 < 6 < 8, i triangoli possibili sono due",
          "sin B = 8 × sin 35° ÷ 6 ≈ 0,7648, quindi B ≈ 49,8864° oppure 130,1136°",
          "Triangolo 1: C ≈ 95,1136°, c ≈ 10,4190, area ≈ 23,9045. Triangolo 2: C ≈ 14,8864°, c ≈ 2,6874, area ≈ 6,1657",
        ],
      },
    ],
    assumptions: [
      "Il triangolo è piano (euclideo). Gli angoli sono in gradi e tutti i lati usano la stessa unità di lunghezza.",
      "Ogni angolo deve essere maggiore di 0° e minore di 180°, gli angoli dati devono sommare meno di 180° e tre lati devono rispettare la disuguaglianza triangolare.",
      "Il tipo (acutangolo, rettangolo o ottusangolo) e l'uguaglianza dei lati sono valutati con una tolleranza minima, così gli arrotondamenti interni del computer non nascondono un angolo retto o lati uguali.",
      "I risultati sono arrotondati solo per la visualizzazione.",
    ],
    faqs: [
      {
        question: "Perché il caso LLA può dare due triangoli?",
        answer:
          "Quando il lato opposto all'angolo noto è più corto dell'altro lato noto ma più lungo dell'altezza b × sin A, può incontrare il terzo lato in due punti. Uno dà un angolo B acuto e l'altro il suo supplementare, 180° − B.",
      },
      {
        question: "Perché non c'è l'opzione AAA?",
        answer: "Tre angoli fissano la forma ma non le dimensioni: ogni copia in scala ha gli stessi angoli. Serve almeno la lunghezza di un lato.",
      },
      {
        question: "Come verifico se tre lunghezze formano un triangolo?",
        answer: "Ogni lato deve essere più corto della somma degli altri due. Lunghezze di 3, 4 e 8 non funzionano perché 3 + 4 è minore di 8.",
      },
    ],
    sourcesUsedFor: [
      "Il teorema del coseno per LLL e LAL e la formula di Erone per l'area.",
      "Il teorema dei seni per ALA, AAL e LLA, compreso il caso ambiguo.",
    ],
  },
  text: {
    given: "Valori noti",
    modes: {
      sss: "LLL: tre lati a, b e c",
      sas: "LAL: lati a, b e l'angolo C compreso",
      asa: "ALA: angoli A, B e il lato c compreso",
      aas: "AAL: angoli A, B e il lato a opposto ad A",
      ssa: "LLA: lati a, b e l'angolo A opposto ad a",
    },
    givenHelp: "Il lato a è opposto all'angolo A, il lato b all'angolo B e il lato c all'angolo C.",
    sideA: "Lato a",
    sideB: "Lato b",
    sideC: "Lato c",
    angleA: "Angolo A",
    angleB: "Angolo B",
    angleC: "Angolo C",
    angleHelp: "In gradi, tra 0 e 180.",
    notTriangle: "Questi lati non possono formare un triangolo: ogni lato deve essere più corto della somma degli altri due.",
    angleRange: "Inserisci un angolo minore di 180°.",
    angleSum: "I due angoli devono sommare meno di 180°.",
    noSolution: "Nessun triangolo ha questi valori: il lato a è troppo corto per raggiungere il terzo lato. Deve essere almeno b × sin A.",
    noSolutionObtuse: "Nessun triangolo ha questi valori: quando l'angolo A è di 90° o più, il lato a deve essere più lungo del lato b.",
    area: "Area",
    areaTwo: "Area (triangolo 1)",
    caption: "Trovato con {method}.",
    methods: {
      sss: "il teorema del coseno",
      sas: "il teorema del coseno",
      asa: "la somma degli angoli e il teorema dei seni",
      aas: "la somma degli angoli e il teorema dei seni",
      ssa: "il teorema dei seni",
    },
    perimeter: "Perimetro",
    classification: "Tipo",
    inradius: "Raggio inscritto (r)",
    circumradius: "Raggio circoscritto (R)",
    secondArea: "Area (triangolo 2)",
    secondPerimeter: "Perimetro (triangolo 2)",
    secondClassification: "Tipo (triangolo 2)",
    byAngle: { acute: "acutangolo", right: "rettangolo", obtuse: "ottusangolo" },
    bySide: { equilateral: "equilatero", isosceles: "isoscele", scalene: "scaleno" },
    type: "{angle}, {side}",
    tableCaption: "Lati e angoli",
    tableCaptionN: "Triangolo {n}: lati e angoli",
    colVertex: "Vertice",
    colSide: "Lato opposto",
    colAngle: "Angolo",
    rowA: "A",
    rowB: "B",
    rowC: "C",
    degrees: "{value}°",
    ambiguous: "Due triangoli diversi corrispondono a questi valori (il caso ambiguo LLA). L'angolo B può essere acuto o ottuso; sono mostrati entrambi.",
    tolerance:
      "Il tipo è valutato con una tolleranza minima, così un angolo retto o lati uguali vengono riconosciuti anche quando l'arrotondamento del computer li fa differire alla decima cifra.",
  },
};

export default it;
