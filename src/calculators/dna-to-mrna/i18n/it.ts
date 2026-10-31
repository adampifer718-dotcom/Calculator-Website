import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DnaToMrnaText } from "../text/en";

const leftover = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const it: CalculatorTranslation<DnaToMrnaText> = {
  content: {
    title: "Calcolatore da DNA a mRNA e proteina",
    shortTitle: "Da DNA a mRNA",
    summary:
      "Trascrivi una sequenza di DNA in mRNA e traducila in proteina con il codice genetico standard, con il filamento complementare e il contenuto in GC.",
    metaTitle: "Da DNA a mRNA – Trascrizione e traduzione in proteina",
    metaDescription:
      "Trasforma un filamento di DNA codificante o stampo in mRNA e poi in proteina, con codici a una e tre lettere secondo il codice genetico standard e il contenuto in GC.",
    keywords: [
      "da DNA a mRNA",
      "trascrizione",
      "traduzione",
      "codone",
      "codice genetico",
      "complementare inverso",
      "sequenza proteica",
      "contenuto GC",
    ],
    intro: [
      "Un gene viene copiato in RNA messaggero (trascrizione) e l'mRNA viene letto tre basi alla volta per costruire una proteina (traduzione). Questo strumento esegue entrambi i passaggi sulla sequenza di DNA che incolli, usando il codice genetico standard condiviso dalla maggior parte degli organismi.",
      "L'mRNA ha la stessa sequenza del filamento codificante (senso), con l'uracile (U) al posto della timina (T). Se invece hai il filamento stampo (antisenso), l'mRNA è il suo complementare inverso. Ottieni anche il filamento di DNA complementare, la proteina nei codici a una e a tre lettere, il numero di codoni e il contenuto in GC.",
    ],
    howToUse: [
      "Incolla la sequenza di DNA. Vanno bene sia le maiuscole sia le minuscole; spazi, a capo e numeri di posizione di un file di sequenza vengono ignorati.",
      "Indica se la sequenza è il filamento codificante o il filamento stampo. Entrambi si leggono 5′→3′, come si scrivono di solito le sequenze.",
      "Scegli dove inizia la traduzione: dalla prima base o dal primo codone di inizio AUG nell'mRNA.",
      "Scegli se la traduzione si ferma al primo codone di stop oppure prosegue oltre e segna ogni stop con *.",
    ],
    formulas: [
      {
        title: "Trascrizione (filamento codificante)",
        expression: "mRNA = filamento codificante con T → U",
        explanation:
          "L'mRNA viene sintetizzato sul filamento stampo, quindi corrisponde base per base al filamento codificante, tranne che l'RNA usa U al posto di T.",
      },
      {
        title: "Trascrizione (filamento stampo)",
        expression: "mRNA = complementare inverso dello stampo, con T → U",
        explanation: "Ogni base viene appaiata (A–U, T–A, C–G, G–C) e il risultato viene invertito, così si legge 5′→3′.",
      },
      {
        title: "Traduzione",
        expression: "codone (3 basi) → amminoacido, dall'inizio al primo UAA, UAG o UGA",
        explanation:
          "I codoni vengono cercati nel codice genetico standard (tabella di traduzione NCBI 1). AUG codifica la metionina ed è il consueto codone di inizio.",
      },
      {
        title: "Contenuto in GC",
        expression: "GC % = (G + C) ÷ basi totali × 100",
        explanation: "La quota di basi del DNA che sono guanina o citosina. È la stessa per entrambi i filamenti.",
      },
    ],
    examples: [
      {
        title: "Un filamento codificante tradotto dal primo AUG",
        steps: [
          "Sostituisci T con U: GCAUGCCGUGGAAAUAGC.",
          "Il primo AUG inizia alla base 3, quindi la cornice di lettura è AUG CCG UGG AAA UAG, con una base (C) avanzata.",
          "AUG = Met, CCG = Pro, UGG = Trp, AAA = Lys, UAG = stop.",
          "Proteina: MPWK (Met-Pro-Trp-Lys).",
        ],
      },
      {
        title: "Un filamento stampo",
        steps: [
          "Complementare inverso di TCACTTAGCCAT: ATGGCTAAGTGA.",
          "Sostituisci T con U: AUG GCU AAG UGA.",
          "AUG = Met, GCU = Ala, AAG = Lys, UGA = stop, quindi MAK.",
        ],
      },
      {
        title: "Lettura oltre i codoni di stop",
        steps: [
          "Maiuscole, spazi rimossi e T → U: AUG UAA CAG UGG UAG.",
          "AUG = Met, UAA = stop, CAG = Gln, UGG = Trp, UAG = stop.",
          "Proseguendo oltre gli stop, la proteina viene mostrata come M*QW*.",
        ],
      },
    ],
    assumptions: [
      "Si usa il codice genetico standard (tabella di traduzione NCBI 1). I mitocondri e alcuni microrganismi usano altri codici, in cui alcuni codoni hanno un significato diverso.",
      "La sequenza è trattata come un'unica regione codificante continua. Introni, splicing, editing dell'RNA e altre modifiche dei geni reali non sono considerati.",
      "Quando parti dal primo AUG, solo AUG è usato come codone di inizio; i rari codoni di inizio alternativi sono ignorati.",
      "Entrambi i filamenti vengono inseriti e mostrati 5′→3′. Il filamento complementare è mostrato come complementare inverso, quindi si legge anch'esso 5′→3′.",
    ],
    faqs: [
      {
        question: "Quale filamento devo scegliere?",
        answer:
          "La maggior parte delle banche dati riporta il filamento codificante (senso), la cui sequenza corrisponde all'mRNA salvo U al posto di T. Scegli il filamento stampo (antisenso) solo se la tua sequenza è quella letta dall'RNA polimerasi, cioè il filamento complementare all'mRNA.",
      },
      {
        question: "Perché la proteina si interrompe presto?",
        answer:
          "La traduzione termina al primo codone di stop (UAA, UAG o UGA) nella cornice di lettura. Se ti aspettavi una proteina più lunga, controlla di aver scelto il filamento e il punto di inizio giusti, oppure attiva la lettura oltre gli stop per vedere dove si trovano.",
      },
      {
        question: "Che cosa sono le basi avanzate alla fine?",
        answer:
          "I codoni sono lunghi tre basi. Se il numero di basi dopo l'inizio non è un multiplo di tre, le ultime una o due basi non possono formare un codone e quindi non vengono tradotte.",
      },
    ],
    sourcesUsedFor: [
      "La tabella dei codoni: quale amminoacido codifica ciascuno dei 64 codoni e i codoni di stop UAA, UAG e UGA.",
      "La trascrizione dal filamento stampo, l'mRNA che corrisponde al filamento codificante con U al posto di T e la lettura dei codoni da un codone di inizio a un codone di stop.",
    ],
  },
  text: {
    sequence: "Sequenza di DNA",
    sequenceHelp: "Lettere A, C, G e T, maiuscole o minuscole. Spazi, a capo e numeri di posizione vengono ignorati.",
    strand: "La sequenza è il…",
    strands: {
      coding: "Filamento codificante (senso), 5′→3′",
      template: "Filamento stampo (antisenso), 5′→3′",
    },
    frame: "Inizia la traduzione da",
    frames: {
      first: "La prima base",
      aug: "Il primo AUG (codone di inizio)",
    },
    stops: "A un codone di stop",
    stopModes: {
      stop: "Interrompi la traduzione",
      readThrough: "Prosegui oltre e segnalo con *",
    },
    errors: {
      invalidChar: "“{char}” (carattere {position}) non è una base del DNA. Usa solo A, C, G e T.",
      empty: "Inserisci almeno una base (A, C, G o T).",
      tooLong: "Inserisci al massimo {max} basi.",
      noAug: "L'mRNA non contiene alcun codone di inizio AUG. Scegli “La prima base” per tradurlo comunque.",
    },
    result: "mRNA (5′→3′)",
    caption: "Raggruppato in codoni dall'inizio della cornice di lettura.",
    complement: "Filamento di DNA complementare (5′→3′)",
    proteinOne: "Proteina (codice a una lettera)",
    proteinThree: "Proteina (codice a tre lettere)",
    noProtein: "(nessun codone completo tradotto)",
    length: "Lunghezza dell'mRNA",
    bases: "basi",
    codonsInFrame: "Codoni completi nella cornice di lettura",
    codonsTranslated: "Codoni tradotti",
    aminoAcids: "Amminoacidi nella proteina",
    gc: "Contenuto in GC",
    notes: {
      stopped: "La traduzione si è fermata al codone {codon} ({stop}), un codone di stop. La proteina qui sopra termina prima di esso.",
      noStop: "Non è stato raggiunto alcun codone di stop prima della fine della sequenza, quindi la proteina potrebbe essere incompleta.",
      readThrough: "I codoni di stop sono stati superati e sono mostrati come * (Ter nel codice a tre lettere).",
      augStart: "Il primo AUG inizia alla base {position} dell'mRNA. Le basi precedenti non vengono tradotte.",
      leftover: leftover(
        "{n} base alla fine non forma un codone completo e non viene tradotta.",
        "{n} basi alla fine non formano un codone completo e non vengono tradotte.",
      ),
      template: "L'mRNA è il complementare inverso del filamento stampo che hai inserito, con U al posto di T.",
      general:
        "Si usa il codice genetico standard (tabella NCBI 1) e si ignorano introni, splicing e codoni di inizio alternativi. I geni reali possono richiedere un codice o un'elaborazione diversi.",
    },
  },
};

export default it;
