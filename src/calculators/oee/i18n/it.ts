import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OeeText } from "../text/en";

const it: CalculatorTranslation<OeeText> = {
  content: {
    title: "Calcolatore dell'OEE",
    shortTitle: "OEE",
    summary:
      "Calcola l'efficienza complessiva dell'impianto (OEE) da tempo pianificato, fermi, tempo ciclo ideale e numero di pezzi, con disponibilità, prestazioni, qualità e il tempo perso per ciascuna.",
    metaTitle: "Calcolatore dell'OEE – Disponibilità × prestazioni × qualità",
    metaDescription:
      "Calcola l'OEE da tempo pianificato, fermi, tempo ciclo o cadenza ideale e pezzi scartati, con disponibilità, prestazioni, qualità e il tempo perso per ciascuna.",
    keywords: [
      "calcolo OEE",
      "efficienza complessiva dell'impianto",
      "formula OEE",
      "disponibilità prestazioni qualità",
      "tempo ciclo ideale",
      "efficienza produttiva",
      "utilizzo macchine",
      "perdite di produzione",
    ],
    intro: [
      "L'efficienza complessiva dell'impianto (OEE) misura quanta parte del tempo di produzione pianificato è davvero produttiva: produrre solo pezzi buoni, alla massima velocità, senza fermi. Un punteggio del 100% indica una produzione perfetta; le linee reali perdono tempo per guasti, cicli lenti e scarti.",
      "L'OEE suddivide queste perdite in tre fattori. La disponibilità conta il tempo in cui l'impianto era fermo, le prestazioni contano il funzionamento più lento della velocità ideale e la qualità conta i pezzi non buoni al primo colpo. Questo calcolatore fornisce tutti e tre i fattori, l'OEE e i minuti persi per ciascuno.",
    ],
    howToUse: [
      "Inserisci il tempo di produzione pianificato in minuti, escludendo le pause programmate e i periodi senza produzione prevista.",
      "Inserisci il tempo totale di fermo in quel periodo, come guasti e cambi formato.",
      "Indica la velocità ideale come tempo ciclo in secondi per pezzo oppure come cadenza in pezzi al minuto.",
      "Inserisci il numero totale di pezzi prodotti e quanti di essi sono stati scartati. L'OEE e la tabella delle perdite di tempo si aggiornano subito.",
    ],
    formulas: [
      {
        title: "Disponibilità",
        expression: "A = tempo di funzionamento ÷ tempo di produzione pianificato, tempo di funzionamento = pianificato − tempo di fermo",
        explanation: "La quota del tempo pianificato in cui l'impianto ha effettivamente funzionato.",
      },
      {
        title: "Prestazioni",
        expression: "P = (tempo ciclo ideale × pezzi totali) ÷ tempo di funzionamento",
        explanation: "Quanto l'impianto si è avvicinato alla sua velocità ideale. Con una cadenza ideale, il tempo ciclo ideale è 60 ÷ cadenza secondi.",
      },
      {
        title: "Qualità",
        expression: "Q = pezzi buoni ÷ pezzi totali, buoni = totali − scarti",
        explanation: "La quota di pezzi buoni al primo colpo.",
      },
      {
        title: "OEE",
        expression: "OEE = A × P × Q = (pezzi buoni × tempo ciclo ideale) ÷ tempo di produzione pianificato",
        explanation: "Il tempo pienamente produttivo (pezzi buoni prodotti alla velocità ideale) come quota del tempo pianificato.",
      },
    ],
    examples: [
      {
        title: "Un turno di 450 minuti con 54 minuti di fermi",
        steps: [
          "Tempo di funzionamento = 450 − 54 = 396 min, quindi disponibilità = 396 ÷ 450 = 88%",
          "Prestazioni = 1,5 s × 13.200 ÷ (396 × 60 s) = 19.800 ÷ 23.760 = 83,33%",
          "Qualità = (13.200 − 330) ÷ 13.200 = 97,5%",
          "OEE = 0,88 × 0,8333 × 0,975 = 71,5%",
        ],
      },
      {
        title: "Cadenza ideale di 25 pezzi al minuto",
        steps: [
          "Tempo ciclo ideale = 60 ÷ 25 = 2,4 s",
          "Disponibilità = 384 ÷ 420 = 91,43%; prestazioni = 2,4 × 8.800 ÷ (384 × 60) = 91,67%",
          "Qualità = 8.624 ÷ 8.800 = 98%",
          "OEE = 0,9143 × 0,9167 × 0,98 ≈ 82,13%",
        ],
      },
      {
        title: "Due turni di 8 ore su una macchina più lenta",
        steps: [
          "Disponibilità = 840 ÷ 960 = 87,5%",
          "Prestazioni = 12 × 3.900 ÷ (840 × 60) = 46.800 ÷ 50.400 = 92,86%",
          "Qualità = 3.815 ÷ 3.900 = 97,82%",
          "OEE = pezzi buoni × tempo ciclo ideale ÷ tempo pianificato = 3.815 × 12 ÷ 57.600 ≈ 79,48%",
        ],
      },
    ],
    assumptions: [
      "Il tempo di produzione pianificato esclude le pause programmate e i periodi senza produzione prevista; il modo in cui tratti cambi formato e manutenzione cambia il risultato, quindi mantieni le stesse definizioni quando fai confronti.",
      "Il tempo ciclo ideale è il tempo più breve in cui l'impianto può produrre un pezzo in condizioni ideali. Se è impostato troppo lento, le prestazioni possono superare il 100%, il che segnala un valore ideale sbagliato più che una linea eccellente.",
      "Gli scarti comprendono ogni pezzo non buono al primo colpo, compresi i pezzi rilavorati. Il valore dell'85% spesso citato come “classe mondiale” è solo un riferimento approssimativo.",
    ],
    faqs: [
      {
        question: "Qual è un buon valore di OEE?",
        answer:
          "Un OEE dell'85% è spesso citato come classe mondiale per la produzione discreta, e molti stabilimenti lavorano ben al di sotto. Poiché il punteggio dipende da come sono definiti i fermi e la velocità ideale, l'andamento su una stessa linea è più utile del confronto tra stabilimenti diversi.",
      },
      {
        question: "Perché le perdite di tempo sommate danno il tempo pianificato?",
        answer:
          "Il tempo di produzione pianificato si suddivide nei fermi (perdita di disponibilità), nel funzionamento sotto la velocità ideale (perdita di prestazioni), nella produzione di scarti (perdita di qualità) e nel tempo pienamente produttivo che resta. L'OEE è il tempo pienamente produttivo diviso per il tempo pianificato.",
      },
      {
        question: "Devo inserire il tempo ciclo ideale o la cadenza ideale?",
        answer:
          "L'uno o l'altra; sono la stessa cosa scritta in due modi. Una cadenza ideale di 40 pezzi al minuto equivale a un tempo ciclo ideale di 60 ÷ 40 = 1,5 secondi per pezzo.",
      },
    ],
    sourcesUsedFor: [
      "La formula dell'OEE come disponibilità × prestazioni × qualità, con disponibilità = tempo di funzionamento ÷ tempo di produzione pianificato, prestazioni = tempo ciclo ideale × pezzi totali ÷ tempo di funzionamento e qualità = pezzi buoni ÷ pezzi totali, e il riferimento spesso citato dell'85%.",
      "I tre fattori dell'OEE e le perdite misurate da ciascuno.",
    ],
  },
  text: {
    planned: "Tempo di produzione pianificato",
    plannedHelp: "Il tempo in cui l'impianto doveva funzionare, al netto delle pause programmate e dei periodi senza produzione prevista.",
    stopTime: "Tempo di fermo (fermi non pianificati e pianificati)",
    stopTimeHelp:
      "Il tempo, all'interno del tempo di produzione pianificato, in cui l'impianto non ha funzionato, per esempio guasti, cambi formato e attesa di materiale.",
    speedMode: "Velocità ideale espressa come",
    speedModes: { cycle: "Tempo ciclo ideale (secondi per pezzo)", rate: "Cadenza ideale (pezzi al minuto)" },
    idealCycle: "Tempo ciclo ideale",
    idealCycleHelp: "Il tempo più breve in cui l'impianto può produrre un pezzo in condizioni ideali.",
    idealRate: "Cadenza ideale",
    idealRateHelp: "Il numero massimo di pezzi al minuto che l'impianto può produrre in condizioni ideali.",
    perPiece: "s per pezzo",
    perMinute: "pezzi/min",
    totalCount: "Pezzi totali (tutti i pezzi prodotti)",
    rejects: "Pezzi scartati",
    rejectsHelp: "Pezzi scartati o da rilavorare. Non sono buoni al primo colpo.",
    minutes: "min",
    pieces: "pezzi",
    errors: {
      stopTooLong: "Il tempo di fermo deve essere inferiore al tempo di produzione pianificato.",
      rejectsTooMany: "Il numero di scarti non può superare il numero totale di pezzi.",
    },
    oee: "Efficienza complessiva dell'impianto (OEE)",
    caption: "Disponibilità {a} × prestazioni {p} × qualità {q}.",
    availability: "Disponibilità",
    performance: "Prestazioni",
    quality: "Qualità",
    goodCount: "Pezzi buoni",
    runTime: "Tempo di funzionamento",
    productiveTime: "Tempo pienamente produttivo",
    idealCycleUsed: "Tempo ciclo ideale usato",
    table: {
      caption: "Come si ripartisce il tempo di produzione pianificato",
      item: "Tempo",
      minutes: "Minuti",
      share: "Quota del tempo pianificato",
      planned: "Tempo di produzione pianificato",
      availabilityLoss: "Perdita di disponibilità (fermi)",
      performanceLoss: "Perdita di prestazioni (cicli lenti e microfermate)",
      qualityLoss: "Perdita di qualità (tempo speso a produrre scarti)",
      productive: "Tempo pienamente produttivo",
    },
    notes: {
      overPerformance:
        "Le prestazioni superano il 100%, il che non è fisicamente possibile. Probabilmente il tempo ciclo ideale è impostato troppo lento (o la cadenza ideale troppo bassa), oppure il conteggio include pezzi prodotti al di fuori del tempo di funzionamento.",
      benchmark:
        "Un OEE dell'85% è spesso citato come “classe mondiale” per la produzione discreta. Consideralo solo un riferimento approssimativo; un obiettivo ragionevole dipende dal processo e da come sono definite le perdite.",
    },
  },
};

export default it;
