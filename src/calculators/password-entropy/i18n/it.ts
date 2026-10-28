import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PasswordEntropyText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const it: CalculatorTranslation<PasswordEntropyText> = {
  content: {
    title: "Calcolatore dell'entropia delle password",
    shortTitle: "Entropia delle password",
    summary:
      "Stima l'entropia in bit di una password o passphrase generata a caso e il tempo che servirebbe a un attaccante per indovinarla.",
    metaTitle: "Calcolatore entropia password – Bit e tempo per indovinarla",
    metaDescription:
      "Calcola l'entropia in bit di una password casuale o di una passphrase Diceware dalla lunghezza e dal set di caratteri, e il tempo medio per indovinarla.",
    keywords: [
      "entropia password",
      "robustezza password",
      "entropia passphrase",
      "diceware",
      "bit di entropia",
      "tempo attacco forza bruta",
      "lunghezza password",
      "set di caratteri",
    ],
    intro: [
      "L'entropia misura quanto è imprevedibile un segreto. Una password scelta a caso da un insieme di N caratteri possibili guadagna log₂(N) bit per ogni carattere, e ogni bit in più raddoppia il numero di tentativi che potrebbero servire a un attaccante.",
      "Questo calcolatore lavora solo sulla struttura di una password: la sua lunghezza e i tipi di caratteri, oppure il numero di parole e la dimensione dell'elenco di parole. Non chiede, non riceve e non analizza mai una password reale, quindi non scrivere la tua da nessuna parte in questa pagina.",
    ],
    howToUse: [
      "Scegli una password di caratteri casuali o una passphrase di parole casuali.",
      "Per i caratteri, inserisci la lunghezza e scegli i set di caratteri, oppure inserisci una dimensione dell'insieme personalizzata.",
      "Per una passphrase, inserisci il numero di parole e la dimensione dell'elenco (7.776 per un elenco Diceware).",
      "Se vuoi, regola i tentativi al secondo dell'attaccante, poi leggi l'entropia, il numero di combinazioni e i tempi per indovinarla.",
    ],
    formulas: [
      {
        title: "Entropia di una password casuale",
        expression: "H = L × log₂(N)",
        explanation: "L è il numero di caratteri e N la dimensione dell'insieme, per esempio 26 + 26 + 10 + 32 = 94 con tutti e quattro i set.",
      },
      {
        title: "Entropia di una passphrase",
        expression: "H = W × log₂(K)",
        explanation: "W è il numero di parole e K la dimensione dell'elenco. Ogni parola Diceware aggiunge log₂(7.776) ≈ 12,92 bit.",
      },
      {
        title: "Tempo medio per indovinarla",
        expression: "t = 2ᴴ ÷ 2 ÷ g",
        explanation: "2ᴴ è il numero di combinazioni e g i tentativi al secondo. In media bisogna provarne la metà.",
      },
    ],
    examples: [
      {
        title: "16 caratteri casuali da tutti e quattro i set",
        steps: [
          "Insieme = 26 + 26 + 10 + 32 = 94 caratteri",
          "Entropia = 16 × log₂(94) ≈ 16 × 6,5546 ≈ 104,87 bit",
          "Tempo medio a 10¹⁰ tentativi al secondo ≈ 94¹⁶ ÷ 2 ÷ 10¹⁰ s ≈ 5,89 × 10¹³ anni",
        ],
      },
      {
        title: "Passphrase Diceware di sei parole",
        steps: [
          "Entropia = 6 × log₂(7.776) ≈ 6 × 12,925 ≈ 77,55 bit",
          "Combinazioni = 7.776⁶ ≈ 2,21 × 10²³",
          "Tempo medio ≈ 350.270 anni a 10¹⁰ tentativi al secondo",
        ],
      },
      {
        title: "8 lettere minuscole casuali",
        steps: ["Entropia = 8 × log₂(26) ≈ 37,60 bit", "Combinazioni = 26⁸ = 208.827.064.576", "Tempo medio ≈ 208.827.064.576 ÷ 2 ÷ 10¹⁰ ≈ 10 secondi"],
      },
    ],
    assumptions: [
      "Ogni carattere o parola è scelto in modo indipendente e uniformemente casuale, come farebbero un password manager o i dadi. Le password scelte dalle persone sono molto più prevedibili di quanto suggeriscano questi numeri.",
      "La velocità dei tentativi è un'ipotesi che puoi modificare. Le velocità reali vanno da pochi tentativi al secondo contro un login online con limiti di frequenza a molti miliardi al secondo contro password rubate e protette da hash deboli.",
      "L'entropia non copre altri rischi, come il phishing, il riutilizzo della stessa password su più siti o una password già trapelata.",
      "Si tratta di una stima per confronto, non di una consulenza di sicurezza né di una garanzia, e non è stata verificata da professionisti.",
    ],
    faqs: [
      {
        question: "Quanti bit di entropia bastano?",
        answer:
          "Non esiste una soglia unica, perché dipende da come viene conservata la password e da chi potrebbe attaccarla. In linea di massima ogni bit raddoppia il lavoro, quindi una password casuale di 16 o più caratteri, o una passphrase di sei o più parole Diceware, è ben oltre la portata di un attacco a forza bruta pratico alla velocità predefinita.",
      },
      {
        question: "Perché questa pagina non mi permette di controllare la mia password?",
        answer:
          "L'entropia descrive come è stata generata una password, non i caratteri che contiene alla fine. Una password come Summer2025! sembra varia ma è facile da indovinare, perché sono le persone a sceglierla. Inoltre scrivere una password reale in qualsiasi sito web è un rischio, quindi questa pagina non ne chiede mai una.",
      },
      {
        question: "Una passphrase lunga è meglio di una password breve e complessa?",
        answer:
          "Spesso sì. Sei parole casuali da un elenco di 7.776 danno circa 77,5 bit, più di 12 caratteri casuali tra lettere e cifre (circa 71,5 bit), e sono più facili da ricordare e digitare. L'importante è che le parole siano estratte a caso, non scelte come una frase.",
      },
    ],
    sourcesUsedFor: [
      "Le indicazioni attuali statunitensi sulle password, che privilegiano la lunghezza e il confronto con le password già violate rispetto alle regole di composizione.",
      "La dimensione dell'elenco di 7.776 parole (6⁵, cinque lanci di dado per parola) usata come valore predefinito per le passphrase.",
    ],
  },
  text: {
    mode: "Tipo di password",
    modes: { random: "Caratteri casuali", passphrase: "Parole casuali (passphrase)" },
    length: "Lunghezza (caratteri)",
    poolMode: "Insieme di caratteri",
    poolModes: { sets: "Scegli i set di caratteri", custom: "Dimensione dell'insieme personalizzata" },
    lower: "Lettere minuscole a–z (26)",
    upper: "Lettere maiuscole A–Z (26)",
    digits: "Cifre 0–9 (10)",
    symbols: "Simboli",
    yesNo: { yes: "Includi", no: "Escludi" },
    symbolCount: "Numero di simboli possibili",
    symbolCountHelp:
      "32 comprende tutti i simboli ASCII stampabili di una tastiera statunitense, come ! ? # e @. Usa un numero più piccolo se sono ammessi solo alcuni simboli.",
    customPool: "Dimensione dell'insieme (caratteri possibili)",
    customPoolHelp: "Quanti caratteri diversi può assumere ogni posizione.",
    words: "Numero di parole",
    wordList: "Dimensione dell'elenco di parole",
    wordListHelp: "7.776 è la dimensione di un elenco di parole Diceware, pensato per cinque lanci di un dado a sei facce per parola.",
    guessRate: "Tentativi al secondo dell'attaccante",
    guessRateHelp:
      "Un'ipotesi sull'attaccante. 10¹⁰ (10 miliardi) al secondo corrisponde a un attacco offline veloce contro una password protetta da un hash debole; gli attacchi online sono molto più lenti.",
    errors: {
      noSets: "Includi almeno un set di caratteri.",
    },
    entropy: "Entropia",
    bits: "bit",
    captionRandom: "{length} scelti a caso da un insieme di {pool} caratteri.",
    captionPassphrase: "{words} scelte a caso da un elenco di {list} parole.",
    lengthCount: forms("{n} carattere", "{n} caratteri"),
    wordCount: forms("{n} parola", "{n} parole"),
    combinations: "Combinazioni possibili",
    poolSize: "Dimensione dell'insieme per posizione",
    bitsPerItem: "Entropia per carattere o parola",
    averageTime: "Tempo medio per indovinarla",
    worstTime: "Tempo per provare tutte le combinazioni",
    duration: {
      lessThanSecond: "Meno di 1 secondo",
      seconds: forms("{n} secondo", "{n} secondi"),
      minutes: forms("{n} minuto", "{n} minuti"),
      hours: forms("{n} ora", "{n} ore"),
      days: forms("{n} giorno", "{n} giorni"),
      years: forms("{n} anno", "{n} anni"),
    },
    notes: {
      random:
        "Questi valori valgono solo se ogni carattere o parola è scelto in modo davvero casuale, per esempio da un password manager o con i dadi. Le password inventate dalle persone, nomi, date e sostituzioni comuni hanno molta meno entropia.",
      average: "In media un attaccante trova la password dopo aver provato metà delle combinazioni.",
      notCollected: "Questa pagina non chiede mai la tua password. Lavora solo dalla lunghezza e dai tipi di caratteri o parole.",
      zero: "Con una sola scelta possibile per posizione non c'è incertezza, quindi l'entropia è 0 bit.",
    },
  },
};

export default it;
