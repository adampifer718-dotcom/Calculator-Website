import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ClockDurationText } from "../text/en";

const it: CalculatorTranslation<ClockDurationText> = {
  content: {
    title: "Calcolatore delle ore lavorate",
    shortTitle: "Ore lavorate",
    summary:
      "Conta ore e minuti tra un orario di inizio e uno di fine, meno una pausa non retribuita, anche per i turni notturni, con ore decimali e paga facoltativa.",
    metaTitle: "Calcolatore delle ore lavorate – Tempo tra due orari",
    metaDescription:
      "Calcola le ore tra due orari, meno le pause, anche oltre la mezzanotte. Ottieni h:mm, le ore decimali per il foglio presenze e la paga alla tua tariffa oraria.",
    keywords: [
      "calcolo ore lavorate",
      "calcolatore ore di lavoro",
      "calcolo turni",
      "tempo tra due orari",
      "foglio presenze",
      "ore decimali",
      "ore turno notturno",
    ],
    intro: [
      "Quanto dura un turno dalle 9:00 alle 17:30 con mezz'ora di pausa pranzo? Contare le ore a mano porta facilmente a errori, soprattutto quando il turno finisce dopo mezzanotte o ti serve il totale in ore decimali per il foglio presenze.",
      "Scrivi un orario di inizio e uno di fine nel formato 24 ore o am/pm, aggiungi l'eventuale pausa non retribuita e questo calcolatore mostra il tempo lavorato in ore e minuti, in ore decimali e in minuti totali. Aggiungi una tariffa oraria per vedere la paga del turno.",
    ],
    howToUse: [
      "Scrivi l'orario di inizio, ad esempio 9:00 am, 9 am o 09:00.",
      "Scrivi l'orario di fine. Se è precedente all'inizio, il turno viene considerato terminato il giorno dopo.",
      "Inserisci la pausa non retribuita in minuti, oppure 0 se non c'è.",
      "Se vuoi, scegli una valuta e inserisci la tua tariffa oraria.",
      "Leggi il tempo lavorato, le ore decimali per il foglio presenze e la paga.",
    ],
    formulas: [
      {
        title: "Intervallo tra i due orari",
        expression: "intervallo = fine − inizio   (aggiungi 24 h se fine ≤ inizio)",
        explanation: "Entrambi gli orari vengono prima convertiti in minuti dopo la mezzanotte.",
      },
      {
        title: "Tempo lavorato",
        expression: "lavorato = intervallo − pausa",
        explanation: "La pausa non retribuita viene sottratta dall'intervallo.",
      },
      {
        title: "Ore decimali e paga",
        expression: "ore decimali = minuti lavorati ÷ 60\npaga = ore decimali × tariffa oraria",
        explanation: "Ad esempio, 7 h 30 min corrispondono a 450 ÷ 60 = 7,5 ore.",
      },
    ],
    examples: [
      {
        title: "Una giornata dalle 9:00 am alle 5:30 pm con 30 minuti di pranzo",
        steps: [
          "9:00 am = 540 min e 5:30 pm = 17:30 = 1.050 min dopo la mezzanotte",
          "Intervallo = 1.050 − 540 = 510 min",
          "Lavorato = 510 − 30 = 480 min = 8:00, ovvero 8 ore decimali",
        ],
      },
      {
        title: "Un turno di notte dalle 22:00 alle 6:15 con 45 minuti di pausa, a $18,50 all'ora",
        steps: [
          "6:15 è prima delle 22:00, quindi il turno supera la mezzanotte: 375 + 1.440 − 1.320 = 495 min",
          "Lavorato = 495 − 45 = 450 min = 7:30, ovvero 7,5 ore",
          "Paga = 7,5 × $18,50 = $138,75",
        ],
      },
      {
        title: "Una mattina dalle 8:45 alle 12:10 senza pausa",
        steps: ["8:45 = 525 min e 12:10 = 730 min", "Lavorato = 730 − 525 = 205 min", "205 min = 3:25, ovvero circa 3,42 ore decimali"],
      },
    ],
    assumptions: [
      "Un turno dura meno di 24 ore. Se l'orario di fine è uguale o precedente a quello di inizio, si considera che cada il giorno dopo.",
      "I cambi dell'ora legale durante il turno vengono ignorati, quindi un turno notturno che ne attraversa uno risulta sbagliato di un'ora.",
      "La paga è una semplice stima della retribuzione lorda: ore × tariffa. Non include maggiorazioni per straordinari, tasse o le regole di arrotondamento del tuo datore di lavoro. Per gli straordinari settimanali, usa il Calcolatore della paga degli straordinari.",
    ],
    faqs: [
      {
        question: "Come converto ore e minuti in ore decimali?",
        answer:
          "Dividi i minuti per 60 e aggiungili alle ore. 7 ore e 30 minuti sono 7 + 30 ÷ 60 = 7,5 ore, e 3 ore e 25 minuti sono circa 3,42 ore.",
      },
      {
        question: "Come inserisco un turno che finisce dopo mezzanotte?",
        answer:
          "Scrivi semplicemente l'orario di fine reale, ad esempio 6:15 o 6:15 am. Quando l'orario di fine è precedente a quello di inizio, il calcolatore aggiunge 24 ore e mostra una nota.",
      },
      {
        question: "Quali formati di orario posso scrivere?",
        answer:
          "Orari a 24 ore come 9:30, 09:30 o 21:30, e orari a 12 ore con am o pm come 9:30 pm, 9 pm o 9 am. I minuti, se indicati, devono avere due cifre.",
      },
    ],
    sourcesUsedFor: ["L'ora (60 minuti) e il minuto (60 secondi) usati per convertire tra orario e ore decimali."],
  },
  text: {
    start: "Orario di inizio",
    end: "Orario di fine",
    timeHelp: "Scrivi un orario a 24 ore come 9:30, 09:30 o 21:30, oppure un orario a 12 ore con am/pm come 9:30 pm o 9 am.",
    breakMinutes: "Pausa non retribuita",
    breakHelp: "Durata totale delle pause non retribuite in minuti, ad esempio la pausa pranzo. Inserisci 0 se non ce ne sono.",
    rate: "Tariffa oraria (facoltativa)",
    rateHelp: "Lascia vuoto se ti servono solo le ore.",
    errors: {
      format: "Inserisci un orario come 9:30, 21:30, 9:30 pm o 9 am.",
      hour24: "L'ora deve essere compresa tra 0 e 23.",
      hour12: "Con am o pm, l'ora deve essere compresa tra 1 e 12.",
      minute: "I minuti devono essere compresi tra 00 e 59.",
      breakTooLong: "La pausa deve essere più breve del tempo tra inizio e fine ({span}).",
    },
    worked: "Tempo lavorato",
    caption: "Dalle {start} alle {end}, meno {break} min di pausa",
    decimalHours: "Ore decimali",
    totalMinutes: "Minuti totali",
    span: "Tempo tra inizio e fine",
    pay: "Paga per questo turno",
    notes: {
      overnight:
        "L'orario di fine non è successivo a quello di inizio, quindi il turno viene considerato proseguire oltre la mezzanotte fino al giorno dopo (aggiunte 24 ore).",
      fullDay: "Inizio e fine coincidono, quindi viene conteggiato un intervallo completo di 24 ore.",
      rounding: "La paga è ore decimali × tariffa, al lordo di tasse, maggiorazioni per straordinari o regole di arrotondamento che il tuo datore di lavoro può applicare.",
    },
  },
};

export default it;
