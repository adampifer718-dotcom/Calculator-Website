import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PaintText } from "../text/en";

const it: CalculatorTranslation<PaintText> = {
  content: {
    title: "Calcolatore della pittura per pareti",
    shortTitle: "Pittura",
    summary: "Stima quanti galloni o litri di pittura per pareti ti servono in base alle dimensioni delle pareti, a porte, finestre, numero di mani e resa.",
    metaTitle: "Calcolatore pittura – Galloni o litri per le tue pareti",
    metaDescription:
      "Calcola quanta pittura comprare in galloni o litri da lunghezza e altezza delle pareti, togliendo porte e finestre, per qualsiasi numero di mani.",
    keywords: [
      "calcolo pittura",
      "quanta pittura serve",
      "litri di pittura",
      "resa della pittura",
      "galloni di pittura",
      "pittura per pareti",
      "mani di pittura",
      "pittura al metro quadro",
    ],
    intro: [
      "Comprare la pittura è più facile se sai quanta superficie devi coprire. Somma le larghezze delle pareti, moltiplica per l'altezza, togli porte e finestre e dividi per la resa di un gallone o di un litro della tua pittura.",
      "Il calcolatore esegue questo conto per qualsiasi numero di mani e mostra sia la quantità esatta sia il numero intero di galloni o litri da comprare.",
    ],
    howToUse: [
      "Scegli le unità statunitensi (piedi e galloni) o metriche (metri e litri).",
      "Inserisci la lunghezza totale delle pareti da pitturare e la loro altezza. Per una stanza intera la lunghezza totale è il perimetro.",
      "Inserisci quante porte e finestre ci sono. Modifica le dimensioni tipiche delle aperture se le tue sono più grandi o più piccole.",
      "Indica il numero di mani e la resa riportata sulla confezione, poi leggi quanta pittura ti serve.",
    ],
    formulas: [
      {
        title: "Superficie da pitturare",
        expression: "A = L × H − (porte × superficie porta) − (finestre × superficie finestra)",
        explanation: "L è la larghezza totale delle pareti e H la loro altezza.",
      },
      {
        title: "Pittura necessaria",
        expression: "pittura = A × mani ÷ resa",
        explanation: "La resa è la superficie coperta da un gallone o da un litro in una sola mano, secondo il produttore.",
      },
      {
        title: "Quantità da comprare",
        expression: "acquisto = ⌈pittura⌉",
        explanation: "Si arrotonda per eccesso a un gallone o a un litro intero. Confezioni più grandi e quarti di gallone più piccoli permettono di avvicinare il totale al fabbisogno.",
      },
    ],
    examples: [
      {
        title: "Camera da 14 ft × 12 ft con pareti di 9 ft, due mani",
        steps: [
          "Lunghezza pareti = 14 + 12 + 14 + 12 = 52 ft; superficie pareti = 52 × 9 = 468 ft²",
          "Aperture = 2 × 20 + 3 × 15 = 85 ft², quindi la superficie da pitturare è 383 ft²",
          "Pittura = 383 × 2 ÷ 350 ≈ 2,19 gal, quindi vanno comprati 3 galloni",
        ],
      },
      {
        title: "Stanza metrica con 16 m di pareti alte 2,5 m",
        steps: [
          "Superficie pareti = 16 × 2,5 = 40 m²",
          "Aperture = 1,9 + 2 × 1,4 = 4,7 m², quindi restano 35,3 m² da pitturare",
          "Pittura = 35,3 × 2 ÷ 10 = 7,06 L, quindi vanno comprati 8 L",
        ],
      },
      {
        title: "Una parete d'accento, una sola mano di pittura ad alta resa",
        steps: [
          "Superficie = 14 × 9 = 126 ft²",
          "Pittura = 126 × 1 ÷ 400 = 0,315 gal, quindi basta un gallone (un quarto di gallone, 0,25 gal, non sarebbe sufficiente)",
        ],
      },
    ],
    assumptions: [
      "Il valore statunitense predefinito di 350 ft² per gallone è all'estremo basso dell'intervallo di 350–400 ft² indicato di solito per le pitture murali. Il valore metrico predefinito di 10 m² per litro è un dato comune sulle etichette. La resa varia secondo prodotto, finitura e superficie, quindi usa il dato della tua confezione.",
      "Le superfici ruvide, porose, stuccate o mai pitturate assorbono più pittura, e passare da un colore scuro a uno chiaro può richiedere una mano in più o un fondo.",
      "Le dimensioni di porte e finestre sono valori tipici. Le pareti sono trattate come rettangoli piani di altezza unica; per timpani o soffitti inclinati calcola quelle superfici a parte.",
    ],
    faqs: [
      {
        question: "Quante mani di pittura servono?",
        answer: "Di solito si consigliano due mani per una finitura uniforme, soprattutto su un colore diverso. Una sola mano può bastare se ripitturi dello stesso colore una parete in buono stato.",
      },
      {
        question: "Devo togliere porte e finestre?",
        answer: "Sì, per una stima più precisa. Se pitturi anche porte o battiscopa e cornici, stimali a parte, perché per queste parti si usa spesso un prodotto diverso.",
      },
      {
        question: "Quanto copre un gallone di pittura?",
        answer: "La maggior parte delle pitture murali indica circa 350–400 ft² per gallone e per mano su pareti lisce e trattate con fondo, cioè circa 8,5–10 m² per litro. Controlla l'etichetta del tuo prodotto, perché la resa varia.",
      },
    ],
    sourcesUsedFor: [
      "Resa tipica delle pitture murali, circa 350–400 ft² per gallone e per mano, usata per il valore statunitense predefinito.",
    ],
  },
  text: {
    units: "Unità",
    unitSystems: { imperial: "USA (ft, gal)", metric: "Metrico (m, L)" },
    length: "Lunghezza totale delle pareti",
    lengthHelp: "Somma le larghezze di tutte le pareti da pitturare. Per una stanza intera è il perimetro.",
    height: "Altezza delle pareti",
    doors: "Numero di porte",
    doorArea: "Superficie di una porta",
    windows: "Numero di finestre",
    windowArea: "Superficie di una finestra",
    openingHelp: "È inserito un valore tipico; misura le tue aperture per una stima più precisa.",
    coats: "Numero di mani",
    coverage: "Resa",
    coverageHelp: "La superficie coperta da un'unità di pittura in una mano. Controlla l'etichetta o la scheda tecnica della tua pittura: le superfici ruvide, porose o mai pitturate richiedono più pittura.",
    errors: {
      openings: "Porte e finestre insieme coprono almeno tutta la superficie delle pareti. Controlla il loro numero, le dimensioni delle aperture e le misure delle pareti.",
    },
    paintNeeded: "Pittura necessaria",
    caption: "{area} pitturati con {coats} a {coverage}.",
    coatsCount: { zero: "{n} mani", one: "{n} mano", two: "{n} mani", few: "{n} mani", many: "{n} mani", other: "{n} mani" },
    wallArea: "Superficie totale delle pareti",
    openingArea: "Porte e finestre",
    paintableArea: "Superficie da pitturare (una mano)",
    totalCoverage: "Superficie da coprire, tutte le mani",
    wholeGallons: "Galloni interi da comprare",
    wholeLiters: "Litri interi da comprare",
    inLiters: "In litri",
    inGallons: "In galloni USA",
    notes: {
      cans: "La pittura si vende in confezioni di formato fisso; arrotonda per eccesso e tieni un po' di scorta per i ritocchi.",
      surfaces: "Soffitti, cornici e fondo non sono inclusi. Aggiungili a parte se li pitturi.",
    },
  },
};

export default it;
