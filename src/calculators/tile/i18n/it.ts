import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TileText } from "../text/en";

const it: CalculatorTranslation<TileText> = {
  content: {
    title: "Calcolatore delle piastrelle",
    shortTitle: "Piastrelle",
    summary: "Stima quante piastrelle e quante scatole ti servono per un pavimento o una parete in base a superficie, formato, fuga e margine di sfrido.",
    metaTitle: "Calcolatore delle piastrelle – Quante piastrelle e scatole",
    metaDescription:
      "Stima le piastrelle per un pavimento o una parete da superficie, formato e larghezza della fuga, aggiungi lo sfrido e arrotonda a scatole intere.",
    keywords: [
      "calcolo piastrelle",
      "quante piastrelle servono",
      "piastrelle per pavimento",
      "rivestimento parete",
      "fuga",
      "scatole di piastrelle",
      "sfrido",
      "paraschizzi cucina",
    ],
    intro: [
      "Prima di comprare le piastrelle ti serve un numero, non solo una superficie. Questo calcolatore divide la superficie da rivestire per lo spazio occupato da ogni piastrella, fuga compresa, poi aggiunge un margine di sfrido per tagli e rotture.",
      "Inserisci le dimensioni della superficie e di una piastrella, scegli la larghezza della fuga e una percentuale di sfrido e, se vuoi, il numero di piastrelle per scatola. Ottieni il numero di piastrelle da acquistare e, se hai indicato la confezione, il numero di scatole.",
    ],
    howToUse: [
      "Scegli unità statunitensi (superficie in piedi, piastrella e fuga in pollici) o metriche (superficie in metri, piastrella e fuga in millimetri).",
      "Inserisci lunghezza e larghezza della superficie da rivestire. Per una stanza a L, dividila in rettangoli, calcola ciascuno e somma i risultati.",
      "Inserisci lunghezza e larghezza della piastrella e la larghezza della fuga.",
      "Imposta un margine di sfrido e, se lo conosci, il numero di piastrelle per scatola.",
      "Leggi le piastrelle necessarie e le scatole da acquistare.",
    ],
    formulas: [
      {
        title: "Superficie per piastrella con fuga",
        expression: "a = (lunghezza piastrella + g) × (larghezza piastrella + g)",
        explanation: "Ogni piastrella occupa la propria misura più una larghezza di fuga g in ciascuna direzione.",
      },
      {
        title: "Piastrelle necessarie",
        expression: "piastrelle = ⌈superficie ÷ a × (1 + sfrido%)⌉",
        explanation:
          "Dividi la superficie per lo spazio di ogni piastrella, aggiungi lo sfrido e arrotonda per eccesso a una piastrella intera. I formati vengono convertiti con 144 in² per ft² o 1.000.000 mm² per m².",
      },
      { title: "Scatole", expression: "scatole = ⌈piastrelle ÷ piastrelle per scatola⌉", explanation: "Arrotonda per eccesso, perché le scatole si vendono intere." },
    ],
    examples: [
      {
        title: "Un pavimento di 10 × 14 ft con piastrelle da 18 pollici",
        steps: [
          "Superficie = 10 × 14 = 140 ft²",
          "Per piastrella = 18,25 × 18,25 = 333,0625 in² ≈ 2,3129 ft²",
          "140 ÷ 2,3129 ≈ 60,53 piastrelle; × 1,10 ≈ 66,58, arrotondato per eccesso a 67 piastrelle",
        ],
      },
      {
        title: "Un bagno di 3,2 × 2,5 m con piastrelle 600 × 300 mm, 8 per scatola",
        steps: [
          "Superficie = 3,2 × 2,5 = 8 m²",
          "Per piastrella = 602 × 302 = 181.804 mm² = 0,181804 m²",
          "8 ÷ 0,181804 ≈ 44,00; × 1,12 ≈ 49,28, arrotondato per eccesso a 50 piastrelle",
          "50 ÷ 8 = 6,25, quindi 7 scatole",
        ],
      },
      {
        title: "Un paraschizzi di 8 × 5 ft con piastrelle da 4 pollici",
        steps: [
          "Superficie = 8 × 5 = 40 ft²",
          "Per piastrella = 4,0625 × 4,0625 ≈ 16,504 in² ≈ 0,11461 ft²",
          "40 ÷ 0,11461 ≈ 349,01; × 1,15 ≈ 401,36, arrotondato per eccesso a 402 piastrelle",
        ],
      },
    ],
    assumptions: [
      "La superficie è un semplice rettangolo. Le posature reali con molti tagli, bordi, nicchie o schemi come la diagonale o la spina di pesce possono richiedere più piastrelle di questa stima.",
      "Il margine di sfrido lo scegli tu. Circa il 10% è un punto di partenza comune per una posa dritta; è una regola pratica diffusa, non una norma.",
      "La stima riguarda solo le piastrelle. Non include adesivo, stucco per fughe, profili o la preparazione del fondo; per questi segui le istruzioni dei produttori delle piastrelle e dei materiali.",
    ],
    faqs: [
      {
        question: "Perché includere la fuga?",
        answer: "Ogni fuga aggiunge un po' allo spazio coperto da ogni piastrella, quindi ne servono meno. Con piastrelle piccole e fughe larghe la differenza può arrivare a qualche punto percentuale.",
      },
      {
        question: "Quante piastrelle in più dovrei comprare?",
        answer: "Molti posatori aggiungono circa il 10% per una posa dritta e di più per pose in diagonale o a disegno o per stanze con molti angoli. Tenere qualche piastrella di scorta aiuta anche per riparazioni future.",
      },
      {
        question: "Come si misura una stanza a L?",
        answer: "Dividila in due rettangoli, usa il calcolatore per ciascuno con le stesse impostazioni delle piastrelle e somma i due conteggi.",
      },
    ],
    sourcesUsedFor: ["Area del rettangolo, usata sia per la superficie da rivestire sia per ogni piastrella con la sua fuga."],
  },
  text: {
    units: "Unità",
    unitSystems: { imperial: "USA (ft, in)", metric: "Metriche (m, mm)" },
    areaLength: "Lunghezza della superficie",
    areaWidth: "Larghezza della superficie",
    areaHelp: "La superficie del pavimento o della parete da rivestire, misurata come rettangolo.",
    tileLength: "Lunghezza della piastrella",
    tileWidth: "Larghezza della piastrella",
    grout: "Larghezza della fuga",
    groutHelpImperial: "Lo spazio tra le piastrelle. 1/8 in corrisponde a 0,125 in; inserisci 0 se non c'è fuga.",
    groutHelpMetric: "Lo spazio tra le piastrelle. Inserisci 0 se non c'è fuga.",
    waste: "Margine di sfrido",
    wasteHelp: "Piastrelle in più per tagli, rotture e scorte. Circa il 10% è tipico per una posa dritta; le pose in diagonale o a disegno ne richiedono di più.",
    perBox: "Piastrelle per scatola (facoltativo)",
    perBoxHelp: "Lascia vuoto se compri le piastrelle singolarmente.",
    tilesNeeded: "Piastrelle necessarie",
    caption: "{area} a {perTile} per piastrella fuga compresa, più {waste} di sfrido.",
    tilesBeforeWaste: "Piastrelle prima dello sfrido",
    area: "Superficie da rivestire",
    tileFootprint: "Superficie per piastrella con fuga",
    boxes: "Scatole da acquistare",
    boxesCaption: "{boxes} ({tiles})",
    boxesCount: { zero: "{n} scatole", one: "{n} scatola", two: "{n} scatole", few: "{n} scatole", many: "{n} scatole", other: "{n} scatole" },
    tilesCount: {
      zero: "{n} piastrelle",
      one: "{n} piastrella",
      two: "{n} piastrelle",
      few: "{n} piastrelle",
      many: "{n} piastrelle",
      other: "{n} piastrelle",
    },
    spare: "Piastrelle di scorta nelle scatole",
    notes: {
      layout: "Presuppone una superficie rettangolare semplice. Le posature reali con molti tagli, bordi o disegni possono richiedere più piastrelle.",
      batch: "Se puoi, compra tutte le piastrelle dello stesso lotto, perché il colore può variare da un lotto all'altro.",
    },
  },
};

export default it;
