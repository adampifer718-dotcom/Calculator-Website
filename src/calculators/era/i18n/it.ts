import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { EraText } from "../text/en";

const it: CalculatorTranslation<EraText> = {
  content: {
    title: "Calcolatore della ERA nel baseball",
    shortTitle: "ERA",
    summary:
      "Calcola la media dei punti guadagnati (ERA) di un lanciatore dai punti guadagnati e dagli inning lanciati, con WHIP, K/9 e BB/9, per partite di baseball da 9 inning o da 7 inning.",
    metaTitle: "Calcolatore ERA – Media punti guadagnati, WHIP e K/9",
    metaDescription:
      "Calcola la ERA di un lanciatore da punti guadagnati, inning ed eliminazioni, con WHIP, strikeout e basi su ball per nove inning, su partite da 9 o 7 inning.",
    keywords: [
      "calcolo ERA",
      "media punti guadagnati",
      "ERA baseball",
      "ERA softball",
      "calcolo WHIP",
      "K/9",
      "BB/9",
      "inning lanciati",
    ],
    intro: [
      "La media dei punti guadagnati (ERA) è il numero di punti guadagnati concessi da un lanciatore per partita completa. Rapporta i punti concessi da un lanciatore a una durata standard della partita, così si possono confrontare partenti e rilievi con carichi di lavoro molto diversi.",
      "Inserisci i punti guadagnati e gli inning lanciati per ottenere la ERA. Gli inning si inseriscono come inning completi più eliminazioni in aggiunta, perché ogni eliminazione è un terzo di inning. Aggiungi valide, basi su ball e strikeout per vedere anche WHIP, K/9 e BB/9. Scegli 7 inning per il softball e per molti campionati giovanili.",
    ],
    howToUse: [
      "Inserisci i punti guadagnati concessi.",
      "Inserisci gli inning completi lanciati e scegli 0, 1 o 2 eliminazioni in aggiunta. Il 5.1 di un tabellino significa 5 inning e 1 eliminazione.",
      "Scegli 9 inning per partita per il baseball o 7 per il softball e molti campionati giovanili.",
      "Se vuoi, inserisci valide, basi su ball e strikeout, poi leggi la ERA e gli altri indici.",
    ],
    formulas: [
      {
        title: "Inning lanciati",
        expression: "IP = inning completi + eliminazioni in aggiunta ÷ 3",
        explanation: "Ogni eliminazione è un terzo di inning, quindi 6.2 nella notazione del tabellino corrisponde a 6⅔ = 6,667 inning.",
      },
      {
        title: "Media dei punti guadagnati",
        expression: "ERA = punti guadagnati × inning per partita ÷ IP",
        explanation: "Gli inning per partita sono 9 nel baseball; 7 si usano per il softball e per molti campionati giovanili.",
      },
      {
        title: "WHIP",
        expression: "WHIP = (basi su ball + valide) ÷ IP",
        explanation: "Corridori concessi per inning tramite valide e basi su ball.",
      },
      {
        title: "Indici per nove inning",
        expression: "K/9 = strikeout × 9 ÷ IP\nBB/9 = basi su ball × 9 ÷ IP",
        explanation: "Strikeout e basi su ball ogni nove inning.",
      },
    ],
    examples: [
      {
        title: "3 punti guadagnati in 6⅔ inning",
        steps: ["IP = 6 + 2 ÷ 3 = 6,667", "ERA = 3 × 9 ÷ 6,667 = 4,05", "WHIP = (2 + 7) ÷ 6,667 = 1,35; K/9 = 8 × 9 ÷ 6,667 = 10,8"],
      },
      {
        title: "Una stagione: 61 punti guadagnati in 187⅓ inning",
        steps: [
          "IP = 187 + 1 ÷ 3 = 187,333",
          "ERA = 61 × 9 ÷ 187,333 ≈ 2,93",
          "WHIP = (45 + 158) ÷ 187,333 ≈ 1,08; K/9 ≈ 9,66; BB/9 ≈ 2,16",
        ],
      },
      {
        title: "Softball: 4 punti guadagnati in una partita completa da 7 inning",
        steps: ["IP = 7", "ERA = 4 × 7 ÷ 7 = 4,00", "WHIP = (3 + 5) ÷ 7 ≈ 1,14"],
      },
    ],
    assumptions: [
      "I punti guadagnati sono quelli registrati dal classificatore ufficiale. I punti segnati a causa di un errore o di una palla mancata non sono guadagnati e non vanno inclusi.",
      "Gli inning si inseriscono come inning completi più eliminazioni, anziché come un decimale tipo 6.2, perché nei tabellini la cifra dopo il punto conta le eliminazioni, non i decimi.",
      "La ERA dipende dalla difesa alle spalle del lanciatore, dal campo e dal campionato, quindi confronta, se possibile, lanciatori dello stesso campionato e della stessa stagione.",
      "K/9 e BB/9 usano sempre 9 inning, come d'abitudine, anche quando per la ERA sono selezionati 7 inning per partita.",
    ],
    faqs: [
      {
        question: "Che cosa significa 6.2 inning lanciati?",
        answer:
          "Significa 6 inning e 2 eliminazioni, cioè 6⅔ inning, non 6,2 come numero decimale. Ogni eliminazione è un terzo di inning, quindi la cifra dopo il punto può essere solo 0, 1 o 2. Qui inserisci 6 inning e 2 eliminazioni in aggiunta.",
      },
      {
        question: "Qual è una buona ERA?",
        answer:
          "Dipende dal campionato e dall'epoca. Nelle stagioni recenti della Major League Baseball la media della lega è stata intorno a 4,00, e una ERA sotto 3,00 su un'intera stagione è generalmente considerata eccellente.",
      },
      {
        question: "Perché il softball usa 7 inning?",
        answer:
          "Le partite di softball, e molte partite di baseball scolastico e giovanile, sono programmate su sette inning, quindi la ERA viene rapportata a una partita da sette inning per mostrare i punti concessi per partita completa in quel formato.",
      },
    ],
    sourcesUsedFor: [
      "La definizione di punto guadagnato e ERA = 9 × punti guadagnati ÷ inning lanciati.",
      "WHIP = (basi su ball + valide) ÷ inning lanciati, senza contare i battitori colpiti e gli errori.",
    ],
  },
  text: {
    earnedRuns: "Punti guadagnati concessi",
    earnedRunsHelp: "Punti segnati senza l'aiuto di un errore o di una palla mancata, secondo il classificatore ufficiale.",
    innings: "Inning lanciati (inning completi)",
    inningsHelp:
      "Inserisci qui gli inning completi e le eventuali eliminazioni in aggiunta nel campo successivo. 6⅔ inning, scritti 6.2 nei tabellini, sono 6 inning e 2 eliminazioni.",
    outs: "Eliminazioni in aggiunta",
    outsOptions: { "0": "0 eliminazioni", "1": "1 eliminazione (⅓ di inning)", "2": "2 eliminazioni (⅔ di inning)" },
    gameLength: "Inning per partita",
    gameLengthHelp: "Usa 9 per il baseball professionistico e per la maggior parte di quello universitario, 7 per il softball e per molti campionati scolastici e giovanili.",
    gameLengths: { "9": "9 inning (baseball)", "7": "7 inning (softball, molti campionati giovanili)" },
    hits: "Valide concesse (facoltativo)",
    walks: "Basi su ball concesse (facoltativo)",
    walksHelp: "Basi su ball. I battitori colpiti non sono contati nel WHIP.",
    strikeouts: "Strikeout (facoltativo)",
    errors: {
      noInnings: "Inserisci almeno un'eliminazione lanciata.",
    },
    era: "Media dei punti guadagnati (ERA)",
    caption: "{er} punti guadagnati × {length} ÷ {ip} inning lanciati ({notation} nella notazione del tabellino).",
    notation: "{whole}.{outs}",
    inningsNotation: "Inning lanciati (notazione del baseball)",
    inningsDecimal: "Inning lanciati in forma decimale",
    totalOuts: "Eliminazioni registrate",
    whip: "WHIP (basi su ball + valide per inning)",
    k9: "Strikeout ogni 9 inning (K/9)",
    bb9: "Basi su ball ogni 9 inning (BB/9)",
    kbb: "Rapporto strikeout/basi su ball",
    notes: {
      notation: "Nei tabellini la cifra dopo il punto conta le eliminazioni, non i decimi: 6.1 significa 6⅓ inning e 6.2 significa 6⅔ inning.",
      whip: "Inserisci sia le valide sia le basi su ball per vedere il WHIP.",
      perNine: "K/9 e BB/9 sono sempre calcolati ogni 9 inning, qualunque sia la durata della partita.",
    },
  },
};

export default it;
