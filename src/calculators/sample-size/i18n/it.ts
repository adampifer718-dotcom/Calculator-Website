import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SampleSizeText } from "../text/en";

const it: CalculatorTranslation<SampleSizeText> = {
  content: {
    title: "Calcolatore della dimensione del campione",
    shortTitle: "Dimensione del campione",
    summary:
      "Calcola quante risposte a un sondaggio ti servono per un dato livello di confidenza e margine di errore, con una dimensione della popolazione facoltativa.",
    metaTitle: "Calcolatore dimensione del campione – Risposte necessarie",
    metaDescription:
      "Calcola quante risposte complete ti servono in base a livello di confidenza, margine di errore e proporzione attesa, con la correzione per popolazione finita.",
    keywords: [
      "dimensione del campione",
      "calcolo dimensione campione",
      "numerosità campionaria",
      "quante persone intervistare",
      "margine di errore",
      "livello di confidenza",
      "correzione per popolazione finita",
      "campione statistico",
    ],
    intro: [
      "Prima di lanciare un sondaggio o un'indagine devi decidere quante persone interpellare. Con poche risposte il risultato è ampio e impreciso; con troppe si sprecano tempo e denaro. Questo calcolatore trova il numero minimo di risposte complete che stima una percentuale con la precisione che scegli.",
      "Scegli un livello di confidenza, il margine di errore che puoi accettare e, se la conosci, la tua migliore stima del risultato. Se il gruppo che studi è piccolo, come i 600 dipendenti di un'azienda, inserisci anche la sua dimensione: la correzione per popolazione finita riduce il numero necessario.",
    ],
    howToUse: [
      "Scegli un livello di confidenza. Il 95 % è la scelta più comune.",
      "Inserisci il margine di errore in punti percentuali; per esempio 5 per ±5 punti.",
      "Inserisci la proporzione che ti aspetti. Lasciala al 50 % se non sei sicuro: così ottieni il campione più grande.",
      "Se vuoi, inserisci la dimensione della popolazione. Lasciala vuota per una popolazione grande o sconosciuta.",
      "Leggi la dimensione del campione necessaria. Viene sempre arrotondata per eccesso a una risposta intera.",
    ],
    formulas: [
      {
        title: "Dimensione del campione per una popolazione grande",
        expression: "n₀ = z*² × p × (1 − p) ÷ E²",
        explanation:
          "z* è il valore critico del livello di confidenza (1,96 per il 95 %), p la proporzione attesa ed E il margine di errore, entrambi in forma decimale.",
      },
      {
        title: "Correzione per popolazione finita",
        expression: "n = n₀ ÷ (1 + (n₀ − 1) ÷ N)",
        explanation: "N è la dimensione della popolazione. La correzione conta quando il campione è una parte apprezzabile della popolazione.",
      },
      {
        title: "Arrotondamento",
        expression: "dimensione del campione = ⌈n⌉",
        explanation: "Il risultato si arrotonda per eccesso, perché arrotondare per difetto darebbe un margine di errore un po' più ampio di quello richiesto.",
      },
    ],
    examples: [
      {
        title: "Un sondaggio nazionale al 95 % di confidenza e ±5 punti",
        steps: ["z* = 1,95996 per il 95 % di confidenza", "n₀ = 1,95996² × 0,5 × 0,5 ÷ 0,05² ≈ 384,15", "Arrotondamento per eccesso: 385 risposte complete"],
      },
      {
        title: "Un'indagine su 2.400 dipendenti al 99 % di confidenza, ±3 punti e un 30 % atteso",
        steps: [
          "z* = 2,57583 per il 99 % di confidenza",
          "n₀ = 2,57583² × 0,3 × 0,7 ÷ 0,03² ≈ 1.548,14",
          "n = 1.548,14 ÷ (1 + 1.547,14 ÷ 2.400) ≈ 941,32",
          "Arrotondamento per eccesso: 942 risposte",
        ],
      },
      {
        title: "Stimare un 12 % di pezzi difettosi al 90 % di confidenza e ±4 punti",
        steps: ["z* = 1,64485 per il 90 % di confidenza", "n₀ = 1,64485² × 0,12 × 0,88 ÷ 0,04² ≈ 178,57", "Arrotondamento per eccesso: 179 pezzi da ispezionare"],
      },
    ],
    assumptions: [
      "La formula presuppone un campionamento casuale semplice: ogni membro della popolazione ha la stessa probabilità di essere scelto.",
      "Dimensiona un campione per stimare una sola proporzione (una percentuale di risposte sì/no), non una media né una differenza tra gruppi.",
      "Si basa sull'approssimazione normale della distribuzione campionaria di una proporzione, che funziona bene quando il numero atteso di risposte «sì» e «no» è almeno 10 circa in ciascun caso.",
      "Il risultato è il numero di risposte complete. Non tiene conto di mancate risposte, abbandoni o risposte inutilizzabili, quindi conviene contattare più persone.",
      "I valori critici derivano da un'inversione numerica della distribuzione normale con una precisione di circa nove cifre significative.",
    ],
    faqs: [
      {
        question: "Perché il 50 % dà il campione più grande?",
        answer:
          "Il prodotto p × (1 − p) è massimo quando p = 0,5, dove vale 0,25. Qualsiasi altra proporzione attesa richiede meno risposte per lo stesso margine di errore, perciò il 50 % è la scelta sicura quando non hai una stima preliminare.",
      },
      {
        question: "Una popolazione più grande richiede un campione molto più grande?",
        answer:
          "Non proprio. Quando la popolazione è grande, il campione necessario cambia appena: al 95 % di confidenza e ±5 punti servono 383 risposte per una popolazione di 100.000 e 385 per una di 100 milioni. La dimensione della popolazione conta solo quando se ne campiona una parte consistente.",
      },
      {
        question: "Quante persone devo invitare?",
        answer:
          "Dividi la dimensione del campione per il tasso di risposta che ti aspetti. Se ti servono 385 risposte complete e prevedi che risponda il 20 % delle persone, invitane circa 385 ÷ 0,20 ≈ 1.925.",
      },
    ],
    sourcesUsedFor: [
      "Dimensione del campione per stimare una proporzione, n = z²·p(1 − p)/E², e uso di p = 0,5 in assenza di una stima preliminare.",
      "Quando e perché si applica la correzione per popolazione finita.",
    ],
  },
  text: {
    level: "Livello di confidenza",
    levelHelp: "Quanto vuoi essere sicuro che la proporzione vera cada entro il margine di errore.",
    levelOptions: { "80": "80 %", "90": "90 %", "95": "95 %", "98": "98 %", "99": "99 %" },
    margin: "Margine di errore",
    marginHelp: "La distanza ± che puoi accettare, in punti percentuali. Per esempio, 5 significa ±5 punti.",
    proportion: "Proporzione attesa",
    proportionHelp:
      "La tua migliore stima della quota che risponderà «sì». Usa il 50 % se non ne hai idea: dà il campione più grande e sicuro.",
    proportionMax: "Deve essere inferiore al 100 %.",
    population: "Dimensione della popolazione (facoltativa)",
    populationHelp: "Numero totale di persone o elementi che potresti campionare. Lascia vuoto per una popolazione molto grande o sconosciuta.",
    sampleSize: "Dimensione del campione necessaria",
    caption: "Risposte complete necessarie con un livello di confidenza del {level} e ±{margin}.",
    infinite: "Dimensione del campione prima della correzione (n₀)",
    infiniteRounded: "n₀ arrotondato per eccesso",
    critical: "Valore critico (z*)",
    correction: "Correzione per popolazione finita",
    correctionApplied: "Applicata (popolazione di {population})",
    correctionNotApplied: "Non applicata (dimensione della popolazione non indicata)",
    share: "Quota della popolazione campionata",
    responseNote:
      "È il numero di risposte complete. Se prevedi che risponda solo una parte delle persone, dividi per il tasso di risposta atteso per sapere quante invitarne.",
    wholePopulation: "Il campione coincide con tutta la popolazione o quasi, quindi potrebbe essere più semplice intervistare tutti.",
  },
};

export default it;
