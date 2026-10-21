import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SimpleInterestText } from "../text/en";

const it: CalculatorTranslation<SimpleInterestText> = {
  content: {
    title: "Calcolatore di interesse semplice",
    shortTitle: "Interesse semplice",
    summary: "Calcola l'interesse semplice e il montante dovuto o maturato a partire da capitale, tasso annuo e durata.",
    metaTitle: "Calcolatore di interesse semplice – I = C·r·t",
    metaDescription:
      "Calcola l'interesse semplice con I = C × r × t per una durata in anni, mesi o giorni e scopri il montante, l'interesse annuo e quello mensile.",
    keywords: ["interesse semplice", "formula dell'interesse", "capitale", "tasso di interesse", "montante", "interesse annuo", "regime semplice"],
    intro: [
      "L'interesse semplice si calcola solo sull'importo iniziale. L'interesse di ogni anno è sempre lo stesso, quindi il totale cresce in linea retta invece di aumentare a valanga.",
      "Si usa per molti prestiti a breve termine, alcuni finanziamenti auto, obbligazioni a cedola fissa e negli esercizi di matematica finanziaria. Inserisci il capitale, il tasso annuo e per quanto tempo il denaro è preso in prestito o investito.",
    ],
    howToUse: [
      "Scegli la valuta in cui mostrare gli importi.",
      "Inserisci il capitale: l'importo preso in prestito o depositato.",
      "Inserisci il tasso di interesse annuo in percentuale.",
      "Inserisci la durata e scegli anni, mesi o giorni.",
      "Leggi l'interesse, il montante e l'interesse di ogni anno e di ogni mese.",
    ],
    formulas: [
      { title: "Interesse semplice", expression: "I = C × r × t", explanation: "C è il capitale, r il tasso annuo in forma decimale (5% = 0,05) e t la durata in anni." },
      { title: "Montante", expression: "M = C + I = C × (1 + r × t)", explanation: "Ciò che si rimborsa o si possiede alla fine." },
      { title: "Conversione della durata", expression: "t = mesi ÷ 12, oppure t = giorni ÷ 365", explanation: "Mesi e giorni vengono convertiti in anni prima di applicare la formula." },
    ],
    examples: [
      { title: "$2.500 al 4,2% per 3 anni", steps: ["I = 2.500 × 0,042 × 3", "= $315", "M = 2.500 + 315 = $2.815"] },
      { title: "$8.000 al 6,5% per 18 mesi", steps: ["t = 18 ÷ 12 = 1,5 anni", "I = 8.000 × 0,065 × 1,5", "= $780"] },
      { title: "$1.200 al 9% per 90 giorni", steps: ["t = 90 ÷ 365 ≈ 0,2466 anni", "I = 1.200 × 0,09 × 90 ÷ 365", "≈ $26,63"] },
    ],
    assumptions: [
      "L'interesse è semplice: non viene mai aggiunto al capitale, quindi non si maturano interessi sugli interessi.",
      "I giorni vengono convertiti con un anno di 365 giorni. Alcuni istituti e mercati monetari usano un anno di 360 giorni (anno commerciale), che dà un interesse leggermente più alto a parità di giorni.",
      "Il tasso resta fisso per tutto il periodo. Commissioni, imposte ed estinzione anticipata non sono considerate.",
      "La scelta della valuta cambia solo la formattazione. Questa non è una consulenza finanziaria.",
    ],
    faqs: [
      {
        question: "Che differenza c'è tra interesse semplice e interesse composto?",
        answer: "L'interesse semplice si calcola sempre sul capitale iniziale. L'interesse composto aggiunge al saldo l'interesse di ogni periodo, così gli interessi successivi maturano anche su quelli precedenti e il totale cresce più in fretta.",
      },
      {
        question: "Come trovo il tasso se conosco l'interesse?",
        answer: "Rigira la formula: r = I ÷ (C × t). Per esempio, $90 di interesse su $1.000 in 2 anni significano r = 90 ÷ 2.000 = 0,045, cioè il 4,5% annuo.",
      },
      {
        question: "Perché il dato del mio istituto differisce un po' per un certo numero di giorni?",
        answer: "Gli istituti possono dividere per 360 invece che per 365, oppure contare i giorni effettivi di un anno bisestile. Dividere per 360 aumenta l'interesse di circa l'1,4%.",
      },
    ],
    sourcesUsedFor: ["La formula dell'interesse semplice I = Prt e il significato di ciascuna variabile."],
  },
  text: {
    principal: "Capitale",
    principalHelp: "L'importo preso in prestito o depositato.",
    rate: "Tasso di interesse annuo",
    time: "Durata",
    timeUnit: "Unità di tempo",
    timeUnits: { years: "Anni", months: "Mesi", days: "Giorni" },
    tooLong: "Usa una durata di 100 anni o meno.",
    interest: "Interesse semplice",
    caption: "Interesse su {principal} al {rate} annuo, senza capitalizzazione.",
    total: "Montante (capitale + interesse)",
    perYear: "Interesse annuo",
    perMonth: "Interesse mensile",
    timeInYears: "Durata in anni",
    notes: {
      simple: "L'interesse semplice si applica solo al capitale; gli interessi non producono altri interessi.",
      days: "I giorni vengono convertiti con un anno di 365 giorni. Alcuni istituti usano un anno di 360 giorni, che dà un interesse leggermente più alto.",
    },
  },
};

export default it;
