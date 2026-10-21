import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FlooringText } from "../text/en";

const it: CalculatorTranslation<FlooringText> = {
  content: {
    title: "Calcolatore per pavimenti in laminato e vinile",
    shortTitle: "Pavimenti",
    summary: "Calcola quante confezioni di laminato, listoni in vinile o parquet acquistare in base alle dimensioni della stanza, a un margine per gli sfridi e alla copertura per confezione, con costo opzionale.",
    metaTitle: "Calcolatore pavimenti – Confezioni di laminato o vinile",
    metaDescription:
      "Stima le confezioni di pavimento da acquistare per una stanza rettangolare o a L, con margine per sfridi, copertura per confezione e prezzo opzionale.",
    keywords: ["calcolatore pavimenti", "quanto pavimento serve", "calcolo laminato", "calcolo pavimento vinilico", "confezioni di pavimento", "sfridi pavimento", "preventivo parquet"],
    intro: [
      "I pavimenti si vendono a confezione e ogni confezione copre una superficie fissa. Per sapere quante acquistarne ti servono la superficie del pavimento, un margine per i pezzi persi nei tagli e la copertura stampata sulla confezione.",
      "Questo calcolatore somma questi dati per una stanza rettangolare o per una stanza a L formata da due rettangoli, arrotonda per eccesso alle confezioni intere e, se inserisci un prezzo, stima il costo. Se ti serve solo la superficie di una stanza, il calcolatore di superficie in piedi quadrati la fornisce senza confezioni né sfridi.",
    ],
    howToUse: [
      "Scegli le unità USA (piedi) o metriche (metri).",
      "Inserisci lunghezza e larghezza della stanza. Per una stanza a L, inserisci prima il rettangolo principale e poi quello più piccolo come seconda area.",
      "Imposta il margine per gli sfridi: circa il 10% per una posa dritta, circa il 15% per pose in diagonale o a spina di pesce.",
      "Inserisci la copertura per confezione indicata sull'imballaggio e, se vuoi, il prezzo al piede quadrato o al metro quadro.",
    ],
    formulas: [
      { title: "Superficie del pavimento", expression: "A = L₁ × W₁ + L₂ × W₂", explanation: "Il secondo rettangolo è facoltativo; lascialo a 0 per una semplice stanza rettangolare." },
      { title: "Superficie con sfridi", expression: "A_w = A × (1 + sfridi ÷ 100)", explanation: "Il supplemento copre i ritagli lungo le pareti, gli errori di taglio e le doghe danneggiate." },
      { title: "Confezioni", expression: "confezioni = ⌈A_w ÷ copertura per confezione⌉", explanation: "Arrotondato per eccesso perché i pavimenti si vendono a confezioni intere." },
      { title: "Costo", expression: "costo = confezioni × copertura per confezione × prezzo per unità di superficie", explanation: "Paghi confezioni intere, quindi il costo usa la superficie contenuta nelle confezioni acquistate." },
    ],
    examples: [
      {
        title: "Camera da letto di 14 ft × 12 ft con confezioni da 20 ft²",
        steps: ["Superficie = 14 × 12 = 168 ft²", "Con il 10% di sfridi: 168 × 1,10 = 184,8 ft²", "184,8 ÷ 20 = 9,24, quindi acquista 10 confezioni (200 ft²)"],
      },
      {
        title: "Soggiorno a L con posa a spina di pesce, unità metriche",
        steps: ["Superficie = 5 × 4 + 2 × 1,5 = 23 m²", "Con il 15% di sfridi: 23 × 1,15 = 26,45 m²", "26,45 ÷ 2,2 ≈ 12,02, quindi acquista 13 confezioni"],
      },
      {
        title: "Studio in casa con prezzo al piede quadrato",
        steps: ["Superficie = 12 × 10 = 120 ft²; con il 10% di sfridi, 132 ft²", "132 ÷ 23,4 ≈ 5,64, quindi acquista 6 confezioni che coprono 140,4 ft²", "Costo = 140,4 ft² × $3,49 ≈ $490,00"],
      },
    ],
    assumptions: [
      "La stanza è un rettangolo o due rettangoli che non si sovrappongono. Misura le altre forme come più rettangoli e somma le superfici.",
      "I margini per gli sfridi sono regole pratiche. Lunghezza delle doghe, forma della stanza e metodo del posatore cambiano quanto materiale si perde, quindi consulta le indicazioni del produttore per il tuo prodotto.",
      "Armadi a muro, vani porta e zone sotto mobili fissi sono inclusi solo se li aggiungi alle misure.",
      "Sottofondo, battiscopa, profili di transizione, adesivo e manodopera non sono inclusi nel costo.",
    ],
    faqs: [
      {
        question: "Quanto pavimento in più dovrei acquistare?",
        answer: "Circa il 10% è un margine comune per una posa dritta in una stanza semplice. Le pose in diagonale, a spina di pesce e a spina ungherese, o le stanze con molti angoli, richiedono di solito il 15% o più.",
      },
      {
        question: "Perché conviene tenere qualche confezione di scorta?",
        answer: "Le doghe avanzate ti permettono di sostituire in seguito i pezzi danneggiati con pavimento dello stesso lotto di produzione, il cui colore e la cui finitura saranno identici.",
      },
      {
        question: "Come si misura una stanza a L?",
        answer: "Dividi il pavimento in due rettangoli che non si sovrappongono, misura lunghezza e larghezza di ciascuno e inseriscili come stanza e seconda area.",
      },
    ],
    sourcesUsedFor: ["Il piede internazionale esatto (0,3048 m) usato per convertire tra piedi quadrati e metri quadrati."],
  },
  text: {
    units: "Unità",
    unitSystems: { imperial: "USA (ft, ft²)", metric: "Metriche (m, m²)" },
    length: "Lunghezza della stanza",
    width: "Larghezza della stanza",
    length2: "Lunghezza della seconda area",
    width2: "Larghezza della seconda area",
    secondHelp: "Facoltativo. Per una stanza a L, dividila in due rettangoli e inserisci qui il secondo. Altrimenti lascia entrambi i valori a 0.",
    waste: "Margine per sfridi",
    wasteHelp: "Supplemento per tagli, ritagli e pezzi danneggiati. Circa il 10% va bene per una posa dritta; usa circa il 15% per pose in diagonale o a spina di pesce.",
    coverage: "Copertura per confezione",
    coverageHelp: "La superficie coperta da una confezione, stampata sulla confezione o sulla pagina del prodotto.",
    price: "Prezzo per unità di superficie",
    priceHelp: "Facoltativo. Il prezzo del pavimento al piede quadrato o al metro quadro.",
    errors: {
      secondPair: "Inserisci sia la lunghezza sia la larghezza della seconda area, oppure imposta entrambe a 0.",
    },
    boxes: "Confezioni necessarie",
    caption: "{area} più {waste} di sfridi, con {coverage} per confezione.",
    floorArea: "Superficie del pavimento",
    areaWithWaste: "Superficie compresi gli sfridi",
    areaBought: "Superficie nelle confezioni acquistate",
    leftover: "Scorta dopo la posa",
    otherUnit: "Superficie del pavimento in altre unità",
    cost: "Costo del pavimento (confezioni intere)",
    costWithWaste: "Costo della superficie compresi gli sfridi",
    notes: {
      squareFootage: "Ti serve solo la superficie di una stanza? Il calcolatore di superficie in piedi quadrati la fornisce senza confezioni né sfridi.",
      extras: "Sottofondo, battiscopa, profili di transizione e adesivo non sono inclusi.",
    },
  },
};

export default it;
