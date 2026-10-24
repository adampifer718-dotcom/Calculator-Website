import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DepreciationText } from "../text/en";

const it: CalculatorTranslation<DepreciationText> = {
  content: {
    title: "Calcolatore dell'ammortamento",
    shortTitle: "Ammortamento",
    summary:
      "Crea un piano di ammortamento annuale con il metodo a quote costanti, a quote decrescenti o della somma delle cifre degli anni.",
    metaTitle: "Calcolatore dell'ammortamento – Quote costanti, decrescenti e SYD",
    metaDescription:
      "Calcola l'ammortamento annuale e il valore contabile a quote costanti, a quote decrescenti doppie o al 150% o con la somma delle cifre degli anni, con il piano completo.",
    keywords: [
      "calcolo ammortamento",
      "ammortamento a quote costanti",
      "ammortamento a quote decrescenti",
      "quote decrescenti doppie",
      "somma delle cifre degli anni",
      "valore contabile",
      "piano di ammortamento",
      "valore residuo",
    ],
    intro: [
      "L'ammortamento ripartisce il costo di un bene durevole, come un macchinario, un veicolo o un computer, sugli anni in cui viene utilizzato. Ogni anno una parte del costo diventa una spesa e il valore contabile del bene scende fino a raggiungere il valore residuo previsto.",
      "Questo calcolatore confronta quattro metodi contabili comuni. Il metodo a quote costanti imputa lo stesso importo ogni anno. Le quote decrescenti e la somma delle cifre degli anni imputano di più nei primi anni e di meno in seguito, il che si adatta ai beni che perdono valore rapidamente.",
    ],
    howToUse: [
      "Scegli la valuta e inserisci il costo del bene.",
      "Inserisci il valore residuo che prevedi alla fine della sua vita utile, oppure 0.",
      "Inserisci la vita utile in anni interi.",
      "Scegli un metodo e leggi l'ammortamento del primo anno e il piano completo con ammortamento, fondo ammortamento e valore contabile.",
    ],
    formulas: [
      {
        title: "Quote costanti",
        expression: "D = (C − S) ÷ N",
        explanation: "C è il costo, S il valore residuo e N la vita utile in anni. La quota è la stessa ogni anno.",
      },
      {
        title: "Quote decrescenti",
        expression: "Dₖ = min(Bₖ₋₁ × f ÷ N, Bₖ₋₁ − S)",
        explanation:
          "Bₖ₋₁ è il valore contabile all'inizio dell'anno k e f vale 2 (quote decrescenti doppie) o 1,5. Nell'ultimo anno la quota è tutto ciò che resta sopra il valore residuo.",
      },
      {
        title: "Somma delle cifre degli anni",
        expression: "Dₖ = (C − S) × (N − k + 1) ÷ (N(N + 1) ÷ 2)",
        explanation: "Per una vita utile di 5 anni le cifre sommano a 15, quindi le frazioni annuali sono 5/15, 4/15, 3/15, 2/15 e 1/15.",
      },
      {
        title: "Valore contabile",
        expression: "Bₖ = C − (D₁ + … + Dₖ)",
        explanation: "Il costo meno il fondo ammortamento. Termina al valore residuo.",
      },
    ],
    examples: [
      {
        title: "Quote costanti: furgone da $30.000, valore residuo $3.000, 5 anni",
        steps: [
          "Importo ammortizzabile = 30.000 − 3.000 = $27.000",
          "Ammortamento annuo = 27.000 ÷ 5 = $5.400",
          "Valore contabile dopo il 5° anno = $3.000",
        ],
      },
      {
        title: "Quote decrescenti doppie: attrezzatura da $12.000, valore residuo $1.500, 5 anni",
        steps: [
          "Aliquota = 2 ÷ 5 = 40% del valore contabile ogni anno",
          "Anno 1 = 12.000 × 0,40 = $4.800, restano $7.200",
          "Anni 2–4 = $2.880, $1.728 e $1.036,80, restano $1.555,20",
          "L'anno 5 prende i restanti $55,20, così il valore contabile termina a $1.500",
        ],
      },
      {
        title: "Somma delle cifre degli anni: macchinario da 50.000 €, valore residuo 5.000 €, 10 anni",
        steps: ["Cifre = 10 × 11 ÷ 2 = 55", "Anno 1 = 45.000 × 10 ÷ 55 ≈ 8.181,82 €", "Anno 2 = 45.000 × 9 ÷ 55 ≈ 7.363,64 €"],
      },
    ],
    assumptions: [
      "Si tratta di metodi contabili con la convenzione dell'anno intero: nel primo anno si imputa un anno completo di ammortamento, senza convenzioni di metà anno, metà trimestre o metà mese.",
      "Negli Stati Uniti l'ammortamento fiscale della maggior parte dei beni aziendali usa il MACRS, descritto nella Publication 946 dell'IRS, con propri periodi di recupero, convenzioni e tabelle percentuali. Questo strumento non calcola il MACRS, la Section 179 né il bonus depreciation, e gli altri paesi hanno le proprie regole fiscali.",
      "Con le quote decrescenti, il valore contabile non scende mai sotto il valore residuo e l'importo rimanente viene imputato nell'ultimo anno. Alcune aziende passano invece alle quote costanti a metà periodo; questo strumento no.",
      "Si tratta di una stima, non di una consulenza fiscale o contabile, e non è stata verificata da professionisti.",
    ],
    faqs: [
      {
        question: "Quale metodo di ammortamento dovrei usare?",
        answer:
          "Il metodo a quote costanti è il più semplice e il più diffuso nei bilanci. I metodi accelerati si adattano ai beni che perdono gran parte del loro valore o della loro utilità all'inizio, come veicoli e computer. Il tuo commercialista e le norme locali stabiliscono quale puoi usare ai fini fiscali.",
      },
      {
        question: "Perché l'ultimo anno a quote decrescenti sembra diverso?",
        answer:
          "Una percentuale fissa di un saldo che diminuisce non raggiunge mai esattamente il valore residuo. Il calcolatore imputa nell'ultimo anno tutto ciò che resta sopra il valore residuo, che può essere maggiore o minore dell'anno precedente.",
      },
      {
        question: "Il valore residuo si sottrae prima di applicare l'aliquota a quote decrescenti?",
        answer:
          "No. L'aliquota a quote decrescenti si applica all'intero valore contabile. Il valore residuo funziona solo da limite minimo: il valore contabile non può scendere al di sotto.",
      },
    ],
    sourcesUsedFor: [
      "Il fatto che negli Stati Uniti l'ammortamento fiscale della maggior parte dei beni aziendali usi il MACRS, diverso dai metodi contabili calcolati qui, e i concetti generali di ammortamento a quote costanti e decrescenti.",
    ],
  },
  text: {
    cost: "Costo del bene",
    costHelp: "Il prezzo d'acquisto più i costi per rendere il bene pronto all'uso, come trasporto e installazione.",
    salvage: "Valore residuo",
    salvageHelp: "Quanto prevedi che varrà il bene alla fine della sua vita utile. Usa 0 se non avrà alcun valore.",
    life: "Vita utile",
    method: "Metodo",
    methods: {
      straightLine: "Quote costanti",
      declining200: "Quote decrescenti doppie (200%)",
      declining150: "Quote decrescenti al 150%",
      sumOfYears: "Somma delle cifre degli anni",
    },
    errors: {
      salvage: "Il valore residuo deve essere inferiore al costo del bene.",
    },
    firstYear: "Ammortamento del primo anno",
    caption: "{method}: costo {cost}, valore residuo {salvage}, {life}.",
    lifeYears: { zero: "{n} anni", one: "{n} anno", two: "{n} anni", few: "{n} anni", many: "{n} anni", other: "{n} anni" },
    base: "Importo ammortizzabile (costo − valore residuo)",
    rateStraight: "Aliquota applicata (quota dell'importo ammortizzabile per anno)",
    rateDeclining: "Aliquota applicata ogni anno al valore contabile",
    rateSumOfYears: "Frazione dell'importo ammortizzabile nel primo anno",
    total: "Ammortamento totale sulla vita utile",
    finalYear: "Ammortamento dell'ultimo anno",
    table: {
      caption: "Piano di ammortamento",
      year: "Anno",
      depreciation: "Ammortamento",
      accumulated: "Fondo ammortamento",
      bookValue: "Valore contabile a fine anno",
      yearLabel: "Anno {n}",
    },
    notes: {
      fullYear: "Nel primo anno si imputa un anno intero di ammortamento, qualunque sia la data di acquisto.",
      declining:
        "La quota di ogni anno è l'aliquota per il valore contabile all'inizio dell'anno, limitata in modo che il valore contabile non scenda mai sotto il valore residuo. Ciò che resta viene imputato nell'ultimo anno.",
      macrs: "Negli Stati Uniti l'ammortamento fiscale usa il MACRS (IRS Publication 946), che questo strumento non calcola.",
    },
  },
};

export default it;
