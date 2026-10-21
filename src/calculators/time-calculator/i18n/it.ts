import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TimeCalculatorText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const it: CalculatorTranslation<TimeCalculatorText> = {
  content: {
    title: "Calcolatore di ore e minuti",
    shortTitle: "Tempo",
    summary: "Somma o sottrai due durate espresse in giorni, ore, minuti e secondi e vedi il risultato normalizzato con i totali in ore, minuti e secondi.",
    metaTitle: "Calcolatore di ore e minuti – Somma o sottrai durate",
    metaDescription:
      "Somma o sottrai durate in giorni, ore, minuti e secondi. Ottieni un risultato ordinato e normalizzato e il totale in ore decimali, minuti e secondi.",
    keywords: ["calcolatore del tempo", "sommare ore e minuti", "sottrarre ore", "calcolo durata", "ore minuti secondi", "totale ore", "somma di tempi"],
    intro: [
      "Sommare il tempo a mano è scomodo perché non funziona in base dieci: 60 secondi fanno un minuto, 60 minuti un'ora e 24 ore un giorno. Questo calcolatore fa i riporti al posto tuo.",
      "Inserisci due durate, scegli se sommarle o sottrarle e leggi il risultato in giorni, ore, minuti e secondi, insieme alla stessa quantità espressa come un unico totale in ore, minuti o secondi.",
    ],
    howToUse: [
      "Inserisci la prima durata. Compila solo le parti che ti servono e lascia le altre a 0.",
      "Scegli Somma o Sottrai.",
      "Inserisci la seconda durata.",
      "Leggi il risultato normalizzato. I totali indicati sotto sono comodi per fogli presenze e fogli di calcolo che richiedono ore decimali.",
    ],
    formulas: [
      {
        title: "Durata in secondi",
        expression: "T = giorni × 86.400 + ore × 3.600 + minuti × 60 + secondi",
        explanation: "Ogni durata viene prima trasformata in secondi.",
      },
      { title: "Risultato", expression: "R = T₁ + T₂   oppure   R = T₁ − T₂", explanation: "Un R negativo significa che la seconda durata è più lunga della prima." },
      {
        title: "Normalizzazione",
        expression: "giorni = ⌊|R| ÷ 86.400⌋, ore = ⌊resto ÷ 3.600⌋, minuti = ⌊resto ÷ 60⌋, secondi = ciò che rimane",
        explanation: "Il resto di ogni passaggio viene riportato all'unità immediatamente più piccola.",
      },
    ],
    examples: [
      {
        title: "Due turni di lavoro nella stessa giornata",
        steps: [
          "7 h 45 min = 27.900 s e 2 h 30 min = 9.000 s",
          "27.900 + 9.000 = 36.900 s",
          "36.900 s = 10 ore e 900 s = 10 ore, 15 minuti (10,25 ore)",
        ],
      },
      {
        title: "Tempo rimanente su un lavoro di 3 giorni e 4 ore dopo 1 giorno e 20,5 ore",
        steps: [
          "3 g 4 h = 273.600 s; 1 g 20 h 30 min = 160.200 s",
          "273.600 − 160.200 = 113.400 s",
          "113.400 s = 1 giorno (86.400 s) + 27.000 s = 1 giorno, 7 ore, 30 minuti",
        ],
      },
      {
        title: "Somma di due tempi sul giro",
        steps: [
          "48 min 37 s = 2.917 s e 51 min 52 s = 3.112 s",
          "2.917 + 3.112 = 6.029 s",
          "6.029 s = 1 ora (3.600 s) + 2.429 s = 1 ora, 40 minuti, 29 secondi",
        ],
      },
    ],
    assumptions: [
      "Ogni giorno dura esattamente 24 ore, ogni ora 60 minuti e ogni minuto 60 secondi. I secondi intercalari e i cambi dell'ora legale non sono considerati.",
      "Questo strumento lavora con intervalli di tempo, non con orari o date. Per contare i giorni tra due date, usa il Calcolatore dei giorni tra due date.",
      "Le frazioni di secondo sono mantenute al millisecondo più vicino.",
    ],
    faqs: [
      {
        question: "Come si convertono i minuti in ore decimali?",
        answer: "Dividi i minuti per 60. Per esempio, 45 minuti sono 45 ÷ 60 = 0,75 ore, quindi 7 ore e 45 minuti sono 7,75 ore. Il calcolatore ti mostra questo totale.",
      },
      {
        question: "Posso inserire più di 60 minuti?",
        answer: "Sì. Se inserisci per esempio 135 minuti, il risultato viene riportato a 2 ore e 15 minuti.",
      },
      {
        question: "Che cosa significa un risultato negativo?",
        answer: "Quando sottrai una durata più lunga da una più corta, la differenza è sotto lo zero. Il risultato è mostrato con il segno meno, così vedi di quanto è più lunga la seconda.",
      },
    ],
    sourcesUsedFor: ["Il minuto (60 s), l'ora (3.600 s) e il giorno (86.400 s) come unità ammesse per l'uso con il SI."],
  },
  text: {
    fieldLabels: {
      first: { days: "Giorni (prima durata)", hours: "Ore (prima durata)", minutes: "Minuti (prima durata)", seconds: "Secondi (prima durata)" },
      second: { days: "Giorni (seconda durata)", hours: "Ore (seconda durata)", minutes: "Minuti (seconda durata)", seconds: "Secondi (seconda durata)" },
    },
    partsHelp: "Lascia una parte a 0 se non ti serve. Sono ammessi valori oltre 24 ore, 60 minuti o 60 secondi, che vengono riportati all'unità successiva.",
    operation: "Operazione",
    operations: { add: "Somma (+)", subtract: "Sottrai (−)" },
    operationHelp: "Sottraendo, la seconda durata viene tolta dalla prima. Il risultato è negativo quando la seconda è più lunga.",
    result: "Risultato",
    caption: "{first} {op} {second}.",
    opSymbols: { add: "+", subtract: "−" },
    units: {
      days: forms("{n} giorno", "{n} giorni"),
      hours: forms("{n} ora", "{n} ore"),
      minutes: forms("{n} minuto", "{n} minuti"),
      seconds: forms("{n} secondo", "{n} secondi"),
    },
    separator: ", ",
    negative: "−{duration}",
    totalDays: "Totale in giorni",
    totalHours: "Totale in ore",
    totalMinutes: "Totale in minuti",
    totalSeconds: "Totale in secondi",
    notes: {
      negative: "La seconda durata è più lunga della prima, quindi il risultato è negativo.",
      days: "Un giorno conta esattamente 24 ore. Cambi dell'ora legale e secondi intercalari non sono inclusi.",
      rounding: "Il risultato è arrotondato al millesimo di secondo più vicino.",
    },
  },
};

export default it;
