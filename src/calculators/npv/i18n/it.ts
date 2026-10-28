import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { NpvText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const it: CalculatorTranslation<NpvText> = {
  content: {
    title: "Calcolatore di VAN e TIR",
    shortTitle: "VAN e TIR",
    summary:
      "Attualizza una serie di flussi di cassa annui per trovare il valore attuale netto, il tasso interno di rendimento, l'indice di redditività e il payback attualizzato.",
    metaTitle: "Calcolatore di VAN e TIR – Valore attuale netto dei flussi",
    metaDescription:
      "Calcola il valore attuale netto e il tasso interno di rendimento di un investimento dai flussi di cassa annui, con indice di redditività e payback attualizzato.",
    keywords: [
      "calcolo VAN",
      "valore attuale netto",
      "calcolo TIR",
      "tasso interno di rendimento",
      "flussi di cassa attualizzati",
      "indice di redditività",
      "payback attualizzato",
      "valutazione degli investimenti",
    ],
    intro: [
      "Il denaro che ricevi più avanti vale meno della stessa somma oggi, perché il denaro di oggi potrebbe essere investito nel frattempo. Il valore attuale netto (VAN) riporta ai valori di oggi ogni flusso di cassa futuro di un progetto attualizzandolo al rendimento che richiedi, poi sottrae ciò che paghi all'inizio.",
      "Un VAN positivo significa che ci si aspetta che il progetto renda più di quel tasso; un VAN negativo significa che rende meno. Il tasso interno di rendimento (TIR) è il tasso al quale il VAN è esattamente zero, quindi indica il rendimento annuo proprio del progetto. Questa pagina copre entrambi, quindi non esiste un calcolatore del TIR separato.",
    ],
    howToUse: [
      "Scegli la valuta e inserisci l'investimento iniziale come importo positivo.",
      "Elenca il flusso di cassa netto di ogni anno, a partire dall'anno 1. Usa il segno meno per un anno con un'uscita netta, come una riparazione importante.",
      "Inserisci il tasso di sconto: il rendimento annuo che richiedi o il tuo costo del capitale.",
      "Leggi il VAN, il TIR, l'indice di redditività e il payback attualizzato e controlla la tabella anno per anno.",
    ],
    formulas: [
      {
        title: "Valore attuale netto",
        expression: "VAN = −C₀ + Σ CFₜ ÷ (1 + r)ᵗ",
        explanation:
          "C₀ è l'investimento iniziale, CFₜ il flusso di cassa alla fine dell'anno t e r il tasso di sconto in forma decimale. La somma va dall'anno 1 all'ultimo anno.",
      },
      {
        title: "Tasso interno di rendimento",
        expression: "−C₀ + Σ CFₜ ÷ (1 + TIR)ᵗ = 0",
        explanation:
          "Si trova per bisezione tra −99,99% e 1.000% annuo. Quando i flussi di cassa cambiano segno più di una volta possono esistere più soluzioni, quindi non viene riportato alcun TIR.",
      },
      {
        title: "Indice di redditività",
        expression: "IR = (Σ CFₜ ÷ (1 + r)ᵗ) ÷ C₀",
        explanation: "Il valore attuale ricevuto per ogni unità investita. Un IR superiore a 1 corrisponde a un VAN positivo.",
      },
      {
        title: "Payback attualizzato",
        expression: "k + (−cumulatoₖ) ÷ CF attualizzatoₖ₊₁",
        explanation:
          "k è l'ultimo anno in cui il valore attualizzato cumulato è ancora negativo. La frazione presuppone che il flusso dell'anno successivo arrivi in modo uniforme.",
      },
    ],
    examples: [
      {
        title: "Macchinario da $50.000 con cinque anni di flussi di cassa all'8%",
        steps: [
          "Valori attualizzati: 12.000 ÷ 1,08 ≈ 11.111,11; 15.000 ÷ 1,08² ≈ 12.860,08; 18.000 ÷ 1,08³ ≈ 14.288,98; 20.000 ÷ 1,08⁴ ≈ 14.700,60; 9.000 ÷ 1,08⁵ ≈ 6.125,25",
          "Valore attuale dei flussi di cassa ≈ $59.086,02",
          "VAN = 59.086,02 − 50.000 ≈ $9.086,02 e il TIR è circa il 14,60%",
        ],
      },
      {
        title: "Progetto da 250.000 € con un rendimento richiesto del 12%",
        steps: [
          "Valore attuale dei cinque flussi di cassa ≈ 246.211,12 €",
          "VAN = 246.211,12 − 250.000 ≈ −3.788,88 €",
          "Il TIR è circa l'11,38%, appena sotto il 12% richiesto, ed è per questo che il VAN è negativo",
        ],
      },
      {
        title: "Flussi di cassa che cambiano segno due volte",
        steps: [
          "VAN = −1.000 + 3.000 ÷ 1,1 − 2.200 ÷ 1,1² = −1.000 + 2.727,27 − 1.818,18 ≈ −$90,91",
          "Sia il 27,64% sia il 72,36% rendono nullo il VAN, quindi il TIR risulta non univoco",
        ],
      },
    ],
    assumptions: [
      "Ogni flusso di cassa arriva alla fine del suo anno e l'investimento iniziale si paga all'inizio (anno 0). Con flussi a metà anno o mensili il VAN cambia.",
      "Si usa un unico tasso di sconto costante per tutti gli anni. Imposte, inflazione e costi di finanziamento sono inclusi solo se li hai già considerati nei flussi di cassa o nel tasso.",
      "Il TIR presuppone che i flussi di cassa cambino segno una sola volta. Con più cambi di segno il TIR può avere più valori o nessuno, e il VAN è la guida più affidabile.",
      "Si tratta di una stima per confrontare alternative, non di una consulenza finanziaria o di investimento, e non è stata verificata da professionisti.",
    ],
    faqs: [
      {
        question: "Quale tasso di sconto devo usare?",
        answer:
          "Usa il rendimento che potresti ottenere altrove con un investimento di rischio simile, oppure il costo del capitale della tua organizzazione. Un tasso più alto riduce il valore dei flussi più lontani, quindi ai progetti più rischiosi si applica di solito un tasso più alto.",
      },
      {
        question: "Perché TIR e VAN possono dare risultati diversi quando confronto progetti?",
        answer:
          "Il TIR è una percentuale e ignora la dimensione del progetto, mentre il VAN è un importo. Un progetto piccolo può avere un TIR più alto ma creare meno valore di uno più grande. Quando i due indicatori ordinano i progetti in modo diverso, in genere si preferisce il VAN al tasso richiesto.",
      },
      {
        question: "Perché il TIR risulta non univoco?",
        answer:
          "Quando i flussi di cassa passano da uscite a entrate più di una volta, per esempio con un grosso costo di bonifica alla fine, il VAN può annullarsi a più tassi. In quel caso nessun tasso singolo descrive il progetto, quindi il calcolatore riporta solo il VAN.",
      },
    ],
    sourcesUsedFor: [
      "Le definizioni di valore attuale netto e tasso interno di rendimento e i criteri di accettazione o rifiuto per ciascuno.",
      "La formula di attualizzazione del VAN e la definizione del TIR come tasso al quale il VAN è pari a zero.",
    ],
  },
  text: {
    initial: "Investimento iniziale",
    initialHelp: "L'importo pagato all'inizio (anno 0). Inseriscilo come numero positivo; viene trattato come un'uscita.",
    cashFlows: "Flussi di cassa annui",
    cashFlowsHelp:
      "Flusso di cassa netto alla fine dell'anno 1, dell'anno 2 e così via, separati da virgole, spazi o a capo. Usa il segno meno per un anno con un'uscita netta.",
    rate: "Tasso di sconto",
    rateHelp: "Il rendimento richiesto o il costo del capitale per anno.",
    errors: {
      empty: "Inserisci almeno un flusso di cassa.",
      tooMany: "Inserisci al massimo {max} flussi di cassa.",
      notNumber: "“{token}” non è un numero. Separa i valori con virgole, spazi o a capo.",
      tooLarge: "“{token}” è troppo grande.",
    },
    tooBig: "{value} è troppo grande. Ogni flusso di cassa può valere al massimo {max} in valore assoluto.",
    npv: "Valore attuale netto (VAN)",
    caption: "{count} attualizzati a un tasso annuo di {rate}, dopo un investimento iniziale di {initial}.",
    yearCount: forms("{n} anno di flussi di cassa", "{n} anni di flussi di cassa"),
    irr: "Tasso interno di rendimento (TIR)",
    irrNone: "Non trovato",
    irrNotUnique: "Non univoco",
    irrOutOfRange: "Non trovato tra {low} e {high}",
    pvInflows: "Valore attuale dei flussi di cassa annui",
    profitabilityIndex: "Indice di redditività (VA dei flussi ÷ investimento iniziale)",
    totalUndiscounted: "Flusso di cassa totale non attualizzato (investimento iniziale compreso)",
    payback: "Payback attualizzato",
    paybackYears: forms("{n} anno", "{n} anni"),
    paybackNever: "Non raggiunto con questi flussi di cassa",
    table: {
      caption: "Flussi di cassa per anno",
      year: "Anno",
      cashFlow: "Flusso di cassa",
      discounted: "Valore attualizzato",
      cumulative: "Valore attualizzato cumulato",
      yearLabel: "Anno {n}",
    },
    notes: {
      positive: "Un VAN positivo significa che i flussi di cassa rendono più del tasso di sconto dopo aver recuperato l'investimento iniziale.",
      negative: "Un VAN negativo significa che i flussi di cassa rendono meno del tasso di sconto.",
      zero: "Un VAN pari a zero significa che i flussi di cassa rendono esattamente il tasso di sconto.",
      irrNone: "I flussi di cassa non cambiano mai segno (sono tutti uscite o tutti entrate), quindi nessun tasso rende nullo il VAN.",
      irrNotUnique:
        "I flussi di cassa cambiano segno più di una volta, quindi possono esserci più tassi che rendono nullo il VAN, oppure nessuno. Il TIR non viene riportato; affidati al VAN.",
      irrOutOfRange: "Nessun tasso annuo tra {low} e {high} rende nullo il VAN.",
      payback: "Il payback attualizzato presuppone che, nell'anno in cui si supera lo zero, il flusso di cassa arrivi in modo uniforme durante l'anno.",
      timing: "Si presume che i flussi di cassa arrivino alla fine di ogni anno, attualizzati a un tasso costante.",
    },
  },
};

export default it;
