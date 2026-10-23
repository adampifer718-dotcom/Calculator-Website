import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AreaShapesText } from "../text/en";

const it: CalculatorTranslation<AreaShapesText> = {
  content: {
    title: "Calcolatore dell'area delle figure piane",
    shortTitle: "Area",
    summary:
      "Trova l'area di trapezio, parallelogramma, rombo, ellisse, settore circolare, corona circolare, triangolo dai tre lati o poligono regolare, con il perimetro quando è possibile.",
    metaTitle: "Calcolatore dell'area – Trapezio, ellisse, settore, poligono",
    metaDescription:
      "Calcola l'area di trapezio, parallelogramma, rombo, ellisse, settore circolare, corona, triangolo dai tre lati o poligono regolare in sette unità.",
    keywords: [
      "calcolo area",
      "area del trapezio",
      "area dell'ellisse",
      "area del settore circolare",
      "area della corona circolare",
      "formula di Erone",
      "area poligono regolare",
      "area del rombo",
    ],
    intro: [
      "L'area misura quanta superficie piana occupa una figura. Questo calcolatore gestisce otto figure per cui non basta moltiplicare lunghezza per larghezza: trapezio, parallelogramma, rombo, ellisse, settore circolare, corona circolare, un triangolo di cui conosci solo i tre lati e qualsiasi poligono regolare, dal triangolo alla figura con 1.000 lati.",
      "Rettangoli, cerchi e triangoli con base e altezza note sono già coperti dal Calcolatore della superficie in piedi quadrati, quindi qui non compaiono. Scegli una figura e un'unità di lunghezza, inserisci le misure e l'area appare in quell'unità al quadrato e in metri quadrati, insieme al perimetro ogni volta che si può ricavare dalle stesse misure.",
    ],
    howToUse: [
      "Scegli la figura.",
      "Scegli l'unità in cui hai misurato. Tutte le lunghezze devono usare la stessa unità.",
      "Inserisci le misure richieste per quella figura. Le altezze sono sempre altezze perpendicolari e l'angolo del settore è in gradi.",
      "Leggi l'area, l'area in metri quadrati e le misure aggiuntive come perimetro, lunghezza dell'arco o apotema.",
    ],
    formulas: [
      {
        title: "Trapezio e parallelogramma",
        expression: "A = ½(a + b)h\nA = b × h",
        explanation: "a e b sono i due lati paralleli del trapezio; h è sempre l'altezza perpendicolare.",
      },
      {
        title: "Rombo",
        expression: "A = ½ d₁d₂\nP = 2√(d₁² + d₂²)",
        explanation: "Le diagonali del rombo si incrociano ad angolo retto, quindi i quattro piccoli triangoli rettangoli danno sia l'area sia la lunghezza del lato.",
      },
      {
        title: "Ellisse",
        expression: "A = πab\nP ≈ π(a + b)(1 + 3h ÷ (10 + √(4 − 3h))), h = (a − b)² ÷ (a + b)²",
        explanation: "a e b sono i semiassi. Il perimetro usa la seconda approssimazione di Ramanujan, perché non esiste una formula esatta semplice.",
      },
      {
        title: "Settore circolare e corona circolare",
        expression: "A = ½ r²θ, arco = rθ\nA = π(R² − r²)",
        explanation: "θ è l'angolo al centro convertito in radianti (θ = gradi × π ÷ 180). R e r sono il raggio esterno e quello interno della corona.",
      },
      {
        title: "Triangolo dai tre lati (Erone)",
        expression: "s = (a + b + c) ÷ 2\nA = √(s(s − a)(s − b)(s − c))",
        explanation:
          "s è il semiperimetro. I lati devono rispettare la disuguaglianza triangolare. Il calcolatore usa una forma equivalente che resta precisa anche per triangoli molto sottili.",
      },
      {
        title: "Poligono regolare",
        expression: "A = n s² ÷ (4 tan(π/n))\napotema = s ÷ (2 tan(π/n))\nangolo interno = (n − 2) × 180° ÷ n",
        explanation: "n è il numero di lati uguali e s la lunghezza del lato. Il perimetro è n × s.",
      },
    ],
    examples: [
      {
        title: "Un'aiuola curva a forma di settore di 135° con raggio di 2,5 ft",
        steps: [
          "θ = 135 × π ÷ 180 ≈ 2,35619 rad",
          "A = ½ × 2,5² × 2,35619 ≈ 7,3631 ft²",
          "Arco = 2,5 × 2,35619 ≈ 5,8905 ft, quindi il bordo da delimitare è 5,8905 + 2 × 2,5 ≈ 10,8905 ft",
        ],
      },
      {
        title: "Il piano di un tavolo ottagonale regolare con lati di 30 cm",
        steps: ["tan(π/8) ≈ 0,414214", "A = 8 × 30² ÷ (4 × 0,414214) ≈ 4.345,58 cm²", "Sono circa 0,4346 m², con un perimetro di 240 cm"],
      },
      {
        title: "Un terreno triangolare con lati di 13 m, 14 m e 15 m",
        steps: ["s = (13 + 14 + 15) ÷ 2 = 21", "A = √(21 × 8 × 7 × 6) = √7.056", "A = 84 m²"],
      },
    ],
    assumptions: [
      "Le figure sono ideali: i lati sono dritti, il poligono regolare ha lati e angoli uguali e le figure curve sono cerchi o ellissi perfetti.",
      "Le altezze sono altezze perpendicolari. Il lato obliquo di un trapezio o di un parallelogramma non dà l'area.",
      "Il perimetro dell'ellisse è un'approssimazione, di solito entro circa lo 0,04%. Tutti gli altri risultati usano formule esatte, arrotondate solo per la visualizzazione.",
      "I metri quadrati si ottengono con fattori di lunghezza esatti (1 in = 2,54 cm, 1 ft = 0,3048 m, 1 yd = 0,9144 m).",
    ],
    faqs: [
      {
        question: "Dove sono il rettangolo, il cerchio e il triangolo normale?",
        answer:
          "Il Calcolatore della superficie in piedi quadrati copre già rettangoli, cerchi e triangoli da base e altezza, quindi questa pagina si concentra sulle figure che richiedono una formula diversa.",
      },
      {
        question: "Come trovo l'area di un triangolo se conosco solo i lati?",
        answer:
          "Usa la formula di Erone: scegli «Triangolo dai tre lati». Con lati di 5, 6 e 7 il semiperimetro è 9 e l'area è √(9 × 4 × 3 × 2) = √216 ≈ 14,70.",
      },
      {
        question: "Perché il perimetro dell'ellisse è solo approssimato?",
        answer:
          "Il perimetro esatto di un'ellisse richiede un integrale ellittico, che non ha una forma chiusa. La seconda approssimazione di Ramanujan è abbastanza precisa per quasi ogni uso pratico ed è esatta quando l'ellisse è un cerchio.",
      },
    ],
    sourcesUsedFor: [
      "Formule dell'area del trapezio e di altre figure piane di base.",
      "Formula di Erone per l'area di un triangolo dai suoi tre lati.",
      "Seconda approssimazione di Ramanujan del perimetro dell'ellisse e la sua precisione tipica.",
    ],
  },
  text: {
    shape: "Figura",
    shapes: {
      trapezoid: "Trapezio",
      parallelogram: "Parallelogramma",
      rhombus: "Rombo (dalle diagonali)",
      ellipse: "Ellisse",
      sector: "Settore circolare",
      annulus: "Corona circolare",
      heron: "Triangolo dai tre lati",
      polygon: "Poligono regolare",
    },
    unit: "Unità di lunghezza",
    unitHelp: "Inserisci ogni lunghezza in questa unità. L'area è mostrata nella stessa unità al quadrato.",
    units: {
      mm: "Millimetri (mm)",
      cm: "Centimetri (cm)",
      m: "Metri (m)",
      km: "Chilometri (km)",
      in: "Pollici (in)",
      ft: "Piedi (ft)",
      yd: "Iarde (yd)",
    },
    trapA: "Lato parallelo a",
    trapB: "Lato parallelo b",
    trapH: "Altezza (h)",
    trapHelp: "La distanza perpendicolare tra i due lati paralleli.",
    paraBase: "Base (b)",
    paraH: "Altezza (h)",
    paraHelp: "La distanza perpendicolare dalla base al lato opposto, non il lato obliquo.",
    d1: "Diagonale d₁",
    d2: "Diagonale d₂",
    semiA: "Semiasse a",
    semiB: "Semiasse b",
    semiHelp: "Metà della larghezza o dell'altezza totale dell'ellisse.",
    radius: "Raggio (r)",
    angle: "Angolo al centro (θ)",
    angleHelp: "In gradi, maggiore di 0 e fino a 360. 360° è un cerchio completo.",
    outer: "Raggio esterno (R)",
    inner: "Raggio interno (r)",
    innerHelp: "Può essere 0, il che dà un cerchio completo.",
    sideA: "Lato a",
    sideB: "Lato b",
    sideC: "Lato c",
    sides: "Numero di lati (n)",
    side: "Lunghezza del lato (s)",
    innerTooLarge: "Il raggio interno deve essere minore del raggio esterno.",
    notTriangle: "Questi lati non possono formare un triangolo: ogni lato deve essere più corto della somma degli altri due.",
    area: "Area",
    formula: {
      trapezoid: "A = ½(a + b)h",
      parallelogram: "A = b × h",
      rhombus: "A = ½ d₁d₂",
      ellipse: "A = πab",
      sector: "A = ½ r²θ (θ in radianti)",
      annulus: "A = π(R² − r²)",
      heron: "A = √(s(s − a)(s − b)(s − c)), s = (a + b + c) ÷ 2",
      polygon: "A = n s² ÷ (4 tan(π/n))",
    },
    squareMeters: "Area in metri quadrati",
    perimeter: "Perimetro",
    perimeterApprox: "Perimetro (approssimato)",
    midsegment: "Linea mediana ½(a + b)",
    rhombusSide: "Lunghezza del lato",
    arcLength: "Lunghezza dell'arco",
    ringWidth: "Larghezza della corona (R − r)",
    outerCircumference: "Circonferenza esterna",
    innerCircumference: "Circonferenza interna",
    semiPerimeter: "Semiperimetro (s)",
    apothem: "Apotema (raggio inscritto)",
    circumradius: "Raggio circoscritto",
    interiorAngle: "Angolo interno",
    degrees: "{value}°",
    noPerimeterTrapezoid: "Il perimetro di un trapezio richiede anche le lunghezze dei due lati obliqui, quindi non viene mostrato.",
    noPerimeterParallelogram: "Il perimetro di un parallelogramma richiede anche la lunghezza del lato obliquo, quindi non viene mostrato.",
    ellipseNote:
      "Il perimetro dell'ellisse non ha una formula esatta semplice. Viene stimato con la seconda approssimazione di Ramanujan, che resta entro circa lo 0,04% per la maggior parte delle ellissi ed è esatta per un cerchio.",
    sectorNote: "Il perimetro di un settore è l'arco più i due raggi.",
    annulusNote: "Il perimetro di una corona circolare è la somma delle circonferenze esterna e interna.",
  },
};

export default it;
