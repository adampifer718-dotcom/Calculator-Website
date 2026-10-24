import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DrywallText } from "../text/en";

const it: CalculatorTranslation<DrywallText> = {
  content: {
    title: "Calcolatore del cartongesso",
    shortTitle: "Cartongesso",
    summary:
      "Stima quante lastre di cartongesso ti servono per le pareti e, se vuoi, il soffitto, togliendo porte e finestre e aggiungendo una quota di sfrido.",
    metaTitle: "Calcolatore del cartongesso – Lastre di gesso rivestito",
    metaDescription:
      "Calcola quante lastre di cartongesso da 4×8, 4×10 o 4×12 ft (o metriche) comprare per pareti e soffitto, tolte porte e finestre, più lo sfrido.",
    keywords: [
      "calcolo cartongesso",
      "lastre di cartongesso",
      "quante lastre di cartongesso",
      "lastre in gesso rivestito",
      "stucco per cartongesso",
      "preventivo cartongesso",
      "pareti in cartongesso",
    ],
    intro: [
      "Il cartongesso, detto anche lastra in gesso rivestito o con nomi commerciali come Sheetrock, si vende in lastre di formato fisso. Per sapere quante comprarne, calcola la superficie delle pareti (e del soffitto, se lo rivesti), togli porte e finestre, aggiungi un po' di margine per gli sfridi e dividi per la superficie di una lastra.",
      "Questo calcolatore lo fa per i formati di lastra più comuni, statunitensi e metrici, e arrotonda per eccesso a lastre intere. Fornisce anche una stima approssimativa dello stucco pronto necessario per rifinire i giunti.",
    ],
    howToUse: [
      "Scegli le unità statunitensi (piedi) o quelle metriche (metri).",
      "Inserisci la lunghezza totale delle pareti da rivestire e la loro altezza. Per un'intera stanza, la lunghezza totale è il perimetro.",
      "Scegli se includere il soffitto; in tal caso, inserisci lunghezza e larghezza della stanza.",
      "Inserisci quante porte e finestre ci sono e, se serve, modifica le loro dimensioni tipiche.",
      "Scegli il formato della lastra e una quota di sfrido, poi leggi il numero di lastre da comprare.",
    ],
    formulas: [
      {
        title: "Superficie netta",
        expression: "A = L × H + lunghezza soffitto × larghezza soffitto − aperture",
        explanation: "L è la lunghezza totale delle pareti e H la loro altezza. Le aperture sono porte e finestre moltiplicate per le rispettive superfici.",
      },
      {
        title: "Lastre necessarie",
        expression: "lastre = ⌈A × (1 + sfrido) ÷ superficie lastra⌉",
        explanation: "Arrotondato per eccesso a una lastra intera. Una lastra da 4 × 8 ft copre 32 ft² e una da 1,2 × 2,4 m copre 2,88 m².",
      },
      {
        title: "Stucco per giunti (approssimativo)",
        expression: "stucco ≈ A × 9 gal ÷ 1.000 ft² (≈ 0,37 L/m²)",
        explanation: "Una regola pratica per lo stucco pronto; la scheda tecnica del prodotto fornisce un valore più preciso.",
      },
    ],
    examples: [
      {
        title: "Pareti di una stanza con 50 ft di parete, alte 8 ft",
        steps: [
          "Superficie pareti = 50 × 8 = 400 ft²",
          "Aperture = 20 + 2 × 15 = 50 ft², quindi la superficie netta è 350 ft²",
          "Con il 10% di sfrido: 385 ft² ÷ 32 ft² ≈ 12,03, quindi compra 13 lastre",
        ],
      },
      {
        title: "Stanza di 14 × 12 ft con pareti di 9 ft e soffitto, lastre da 4 × 12",
        steps: [
          "Pareti = 52 × 9 = 468 ft²; soffitto = 14 × 12 = 168 ft²",
          "Aperture = 2 × 20 + 2 × 15 = 70 ft², quindi la superficie netta è 566 ft²",
          "Con il 12% di sfrido: 633,92 ft² ÷ 48 ft² ≈ 13,21, quindi compra 14 lastre",
          "Stucco per giunti ≈ 566 × 9 ÷ 1.000 ≈ 5,1 gal",
        ],
      },
      {
        title: "Stanza metrica con 15,6 m di parete, alta 2,6 m, con soffitto",
        steps: [
          "Pareti = 15,6 × 2,6 = 40,56 m²; soffitto = 4,5 × 3,3 = 14,85 m²",
          "Aperture = 1,9 + 1,4 = 3,3 m², quindi la superficie netta è 52,11 m²",
          "Con il 10% di sfrido: 57,32 m² ÷ 2,88 m² ≈ 19,9, quindi compra 20 lastre",
        ],
      },
    ],
    assumptions: [
      "Pareti e soffitti sono trattati come rettangoli piani. Calcola a parte timpani, soffitti inclinati e controsoffitti e aggiungili alla lunghezza delle pareti o come superficie di soffitto in più.",
      "Il conteggio si basa sulla superficie. Una posa pianificata lastra per lastra può richiedere qualche lastra in più, soprattutto quando l'altezza della parete non si adatta alla lunghezza della lastra.",
      "Le dimensioni di porte e finestre sono valori tipici. Misura le tue per una stima più precisa.",
      "Il dato sullo stucco è approssimativo e si basa sulla regola pratica di un produttore per lo stucco pronto. Viti, nastro e paraspigoli non sono stimati.",
    ],
    faqs: [
      {
        question: "Quanto sfrido devo prevedere per il cartongesso?",
        answer:
          "Per stanze rettangolari semplici è comune circa il 10%. Le stanze con molti angoli, aperture, soffitti inclinati o tratti di parete corti producono più sfridi, quindi lì è più sicuro il 15% o più.",
      },
      {
        question: "Conviene usare lastre più lunghe?",
        answer:
          "Le lastre più lunghe, come quelle da 4 × 12 ft, significano meno giunti da nastrare e rifinire, con risparmio di tempo e di stucco. Sono però più pesanti e più difficili da far passare dalle porte e da portare su per le scale, quindi sono adatte a stanze aperte e a squadre di due persone.",
      },
      {
        question: "Devo sottrarre porte e finestre?",
        answer:
          "Sì, per la superficie. Molti installatori rivestono direttamente le aperture piccole e le ritagliano dopo, quindi la quota di sfrido copre i ritagli.",
      },
    ],
    sourcesUsedFor: [
      "La regola pratica di circa due secchi da 4,5 galloni di stucco pronto per rifinire 1.000 ft² di lastre in gesso rivestito.",
    ],
  },
  text: {
    units: "Unità",
    unitSystems: { imperial: "USA (ft)", metric: "Metriche (m)" },
    length: "Lunghezza totale delle pareti",
    lengthHelp: "Somma le larghezze di tutte le pareti da rivestire. Per un'intera stanza è il perimetro.",
    height: "Altezza delle pareti",
    ceiling: "Includere il soffitto?",
    ceilingOptions: { no: "No", yes: "Sì" },
    roomLength: "Lunghezza della stanza (soffitto)",
    roomWidth: "Larghezza della stanza (soffitto)",
    doors: "Numero di porte",
    doorArea: "Superficie di una porta",
    windows: "Numero di finestre",
    windowArea: "Superficie di una finestra",
    openingHelp: "È inserito un valore tipico; misura il tuo per una stima più precisa.",
    sheet: "Formato della lastra",
    waste: "Quota di sfrido",
    wasteHelp:
      "Margine per ritagli, errori e lastre danneggiate. Circa il 10% va bene per stanze rettangolari semplici; usane di più con molti angoli, aperture o soffitti inclinati.",
    errors: {
      openings:
        "Porte e finestre sommate raggiungono almeno l'intera superficie delle pareti. Controlla i numeri, le dimensioni delle aperture e le misure delle pareti.",
    },
    sheets: "Lastre di cartongesso necessarie",
    caption: "{area} di lastre più {waste} di sfrido, in lastre da {sheet} ({sheetArea} ciascuna).",
    wallArea: "Superficie delle pareti",
    ceilingArea: "Superficie del soffitto",
    openingArea: "Porte e finestre",
    netArea: "Superficie netta da rivestire",
    areaWithWaste: "Superficie compreso lo sfrido",
    sheetArea: "Superficie di una lastra",
    compound: "Stucco per giunti, approssimativo (pronto all'uso)",
    notes: {
      compound:
        "Il dato sullo stucco usa una regola pratica di circa 9 galloni USA (due secchi da 4,5 galloni) di stucco pronto ogni 1.000 ft² di lastre, cioè circa 0,37 L per m². La quantità varia in base al prodotto e al livello di finitura, quindi controlla la scheda tecnica del prodotto.",
      layout:
        "Questa è una stima basata sulla superficie. Pianificare la posa lastra per lastra, soprattutto per pareti alte e intorno alle aperture, può cambiare il conteggio.",
      extras: "Viti, nastro e paraspigoli non sono inclusi.",
    },
  },
};

export default it;
