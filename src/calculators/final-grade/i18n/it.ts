import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FinalGradeText } from "../text/en";

const it: CalculatorTranslation<FinalGradeText> = {
  content: {
    title: "Calcolatore del voto all'esame finale",
    shortTitle: "Voto all'esame finale",
    summary: "Scopri quale punteggio ti serve all'esame finale per raggiungere il voto complessivo del corso che desideri.",
    metaTitle: "Calcolatore voto finale – Quanto ti serve all'esame",
    metaDescription:
      "Calcola quanto ti serve all'esame finale per raggiungere il voto del corso che vuoi, partendo dal voto attuale e dal peso dell'esame finale.",
    keywords: ["voto finale", "esame finale", "quanto mi serve all'esame", "voto necessario", "voto del corso", "media ponderata", "punteggio esame"],
    intro: [
      "Verso la fine di un corso, la grande domanda è spesso quanto ti serve all'esame finale. Il voto complessivo è una media ponderata: il voto attuale conta per una parte e l'esame finale per il resto.",
      "Inserisci il voto ottenuto finora, il peso dell'esame finale e il voto complessivo a cui punti. Il calcolatore indica il punteggio all'esame finale che ti permette di arrivarci e mostra il voto complessivo migliore e peggiore che potresti ottenere.",
    ],
    howToUse: [
      "Inserisci il tuo voto attuale nel corso come percentuale.",
      "Inserisci il peso dell'esame finale, come indicato nel programma del corso.",
      "Inserisci il voto complessivo con cui vuoi chiudere.",
      "Leggi il punteggio che ti serve all'esame finale e il voto complessivo con un punteggio pieno o pari a zero.",
    ],
    formulas: [
      { title: "Punteggio necessario all'esame finale", expression: "necessario = (desiderato − attuale × (1 − w)) ÷ w", explanation: "w è il peso dell'esame finale come frazione (30% = 0,3). I voti sono percentuali." },
      { title: "Voto complessivo", expression: "complessivo = attuale × (1 − w) + finale × w", explanation: "Il voto del corso come media ponderata tra ciò che hai ora e l'esame finale." },
    ],
    examples: [
      {
        title: "78% ora, esame finale al 25%, obiettivo 80%",
        steps: ["w = 0,25, quindi il voto attuale conta per 0,75", "necessario = (80 − 78 × 0,75) ÷ 0,25", "= (80 − 58,5) ÷ 0,25 = 86%"],
      },
      {
        title: "91% ora, esame finale al 40%, obiettivo 90%",
        steps: ["necessario = (90 − 91 × 0,6) ÷ 0,4", "= (90 − 54,6) ÷ 0,4 = 88,5%"],
      },
      {
        title: "65% ora, esame finale al 20%, obiettivo 75%",
        steps: ["necessario = (75 − 65 × 0,8) ÷ 0,2", "= (75 − 52) ÷ 0,2 = 115%", "Più del 100%, quindi questo obiettivo richiede punti extra"],
      },
    ],
    assumptions: [
      "Il voto attuale include già tutte le altre parti del corso, che insieme valgono il 100% meno il peso dell'esame finale.",
      "I voti sono percentuali. Soglie per i voti in lettere, arrotondamenti e curve variano a seconda del docente e non vengono applicati.",
      "Alcuni corsi scartano il voto più basso, lasciano che l'esame finale sostituisca un esame intermedio o richiedono un punteggio minimo all'esame finale. Controlla queste regole nel programma del corso.",
    ],
    faqs: [
      {
        question: "Come trovo il mio voto attuale?",
        answer: "Di solito lo mostrano il sito del corso o il docente. Altrimenti calcola la media ponderata di tutti i voti ottenuti finora, usando i pesi del programma ed escludendo l'esame finale.",
      },
      {
        question: "Che cosa significa se mi serve più del 100%?",
        answer: "Neppure un punteggio pieno all'esame finale porterebbe il voto complessivo all'obiettivo. Potrebbe essere raggiungibile con punti extra; altrimenti punta a un obiettivo più basso.",
      },
      {
        question: "E se il risultato è pari o inferiore allo 0%?",
        answer: "Allora il tuo obiettivo è già al sicuro: anche senza punti all'esame finale, il voto complessivo resta pari o superiore all'obiettivo. Verifica che saltare l'esame sia consentito, perché alcuni corsi lo rendono obbligatorio.",
      },
    ],
    sourcesUsedFor: ["Come il voto di un corso sia una media ponderata delle parti indicate nel programma, compreso l'esame finale."],
  },
  text: {
    current: "Voto attuale",
    currentHelp: "Il tuo voto nel corso finora, prima dell'esame finale.",
    weight: "Peso dell'esame finale",
    weightHelp: "Quanto vale l'esame finale sul voto complessivo, in percentuale. Controlla il programma del corso.",
    desired: "Voto complessivo desiderato",
    weightTooHigh: "L'esame finale deve valere meno del 100% del voto; altrimenti il voto attuale non conta.",
    needed: "Punteggio necessario all'esame finale",
    caption: "Per chiudere con {desired} quando l'esame finale vale {weight} e ora hai {current}.",
    ifFull: "Voto complessivo con il 100% all'esame finale",
    ifZero: "Voto complessivo con lo 0% all'esame finale",
    currentShare: "Quota del voto attuale nel voto complessivo",
    notes: {
      over: "Ti servirebbe più del 100% all'esame finale. È possibile solo con punti extra; altrimenti questo obiettivo è fuori portata.",
      secured: "Hai già questo voto al sicuro: anche con lo 0% all'esame finale resti pari o sopra il tuo obiettivo.",
      rounding: "I docenti possono arrotondare o normalizzare i voti, oppure dare un peso diverso all'esame finale. Controlla il programma del corso.",
    },
  },
};

export default it;
