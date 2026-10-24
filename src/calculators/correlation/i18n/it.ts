import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CorrelationText } from "../text/en";

const it: CalculatorTranslation<CorrelationText> = {
  content: {
    title: "Calcolatore del coefficiente di correlazione",
    shortTitle: "Correlazione",
    summary: "Misura quanto due elenchi di numeri variano insieme con la r di Pearson, la ρ di Spearman, r² e un test di significatività.",
    metaTitle: "Calcolatore di correlazione – r di Pearson e ρ di Spearman",
    metaDescription:
      "Incolla dati appaiati X e Y per ottenere la r di Pearson, r², la statistica t e il p-value, la correlazione per ranghi di Spearman e la covarianza campionaria.",
    keywords: [
      "coefficiente di correlazione",
      "correlazione di Pearson",
      "rho di Spearman",
      "correlazione per ranghi",
      "r quadro",
      "covarianza",
      "relazione lineare",
      "grafico a dispersione",
    ],
    intro: [
      "Un coefficiente di correlazione riassume, in un solo numero tra −1 e +1, quanto due grandezze misurate seguono un andamento rettilineo. Valori vicini a +1 indicano che a valori di X più grandi corrispondono valori di Y più grandi; valori vicini a −1 indicano il contrario; valori vicini a 0 indicano che l'andamento lineare è scarso.",
      "Inserisci osservazioni appaiate, come ore di esercizio e punteggi ai test. Il calcolatore restituisce la r di Pearson con r², un test t per verificare se la correlazione potrebbe essere nulla, la correlazione per ranghi di Spearman per andamenti monotoni ma curvi e la covarianza campionaria.",
    ],
    howToUse: [
      "Digita i valori di X nella prima casella, separati da punto e virgola, spazi o a capo.",
      "Digita i valori di Y corrispondenti nella seconda casella, nello stesso ordine. I due elenchi devono avere lo stesso numero di valori, almeno 3.",
      "Leggi la r di Pearson e r², poi controlla il p-value per capire se l'andamento potrebbe facilmente essere dovuto al caso.",
      "Confronta r con la ρ di Spearman. Una ρ molto più vicina a ±1 rispetto a r suggerisce una relazione curva ma sempre crescente o sempre decrescente.",
    ],
    formulas: [
      {
        title: "r di Pearson",
        expression: "r = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ √[Σ(xᵢ − x̄)² · Σ(yᵢ − ȳ)²]",
        explanation: "La somma dei prodotti incrociati degli scarti, scalata per la dispersione di ciascun elenco. Va da −1 a +1.",
      },
      {
        title: "Test di significatività",
        expression: "t = r·√[(n − 2) ÷ (1 − r²)], df = n − 2",
        explanation: "Il p-value a due code deriva dalla distribuzione t di Student. Verifica l'ipotesi nulla che la correlazione nella popolazione sia 0.",
      },
      {
        title: "ρ di Spearman",
        expression: "ρ = r di Pearson dei ranghi",
        explanation: "Ogni elenco viene sostituito dai suoi ranghi; i valori a pari merito ricevono la media dei ranghi che occupano.",
      },
      {
        title: "Covarianza campionaria",
        expression: "cov = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ (n − 1)",
        explanation: "La variazione congiunta non scalata, nelle unità di X moltiplicate per le unità di Y.",
      },
    ],
    examples: [
      {
        title: "Ore di esercizio e punteggi ai quiz",
        steps: [
          "x̄ = 6, ȳ = 65,1667; Σ prodotti incrociati = 151, Σ(x − x̄)² = 42, Σ(y − ȳ)² = 550,8333",
          "r = 151 ÷ √(42 × 550,8333) ≈ 0,9928",
          "t = 0,9928 × √(4 ÷ 0,01444) ≈ 16,52 con 4 gradi di libertà, p ≈ 0,0000785",
        ],
      },
      {
        title: "Temperatura esterna e costo settimanale del riscaldamento",
        steps: [
          "Il costo scende quando la temperatura sale, quindi i prodotti incrociati sono per lo più negativi.",
          "r ≈ −0,9924 e r² ≈ 0,9849",
          "I due elenchi hanno lo stesso ordine invertito, quindi la ρ di Spearman = −1.",
        ],
      },
      {
        title: "Un andamento curvo ma sempre crescente (y = x²)",
        steps: ["La r di Pearson ≈ 0,9789, perché i punti si allontanano da una retta.", "I ranghi di x e y sono identici, quindi la ρ di Spearman = 1."],
      },
    ],
    assumptions: [
      "La r di Pearson misura solo l'associazione lineare. Una forte relazione curva può dare una r modesta; la ρ di Spearman coglie qualsiasi andamento sempre crescente o sempre decrescente.",
      "Il p-value presuppone che le coppie siano indipendenti e, per la r di Pearson, che i dati seguano approssimativamente una normale bivariata. I valori anomali possono cambiare molto r.",
      "Le etichette di intensità seguono una regola pratica diffusa (|r| sotto 0,1 trascurabile, da 0,1 debole, da 0,4 moderata, da 0,7 forte, da 0,9 molto forte). Le varie discipline non concordano su cosa sia una correlazione forte.",
      "Correlazione non significa causalità: un terzo fattore, il caso o una causalità inversa possono spiegare un'associazione.",
    ],
    faqs: [
      {
        question: "Qual è la differenza tra r e r²?",
        answer:
          "r indica la direzione e l'intensità di un andamento lineare. r² è la quota della variazione di Y spiegata da una retta di regressione su X, quindi r = 0,8 significa r² = 0,64, cioè il 64%.",
      },
      {
        question: "Quando usare Spearman invece di Pearson?",
        answer:
          "Usa la ρ di Spearman quando i dati sono ranghi, quando la relazione è monotona ma non rettilinea o quando dei valori anomali potrebbero distorcere la r di Pearson.",
      },
      {
        question: "Perché gli elenchi devono avere almeno tre valori e un po' di variazione?",
        answer:
          "Con due punti qualsiasi retta si adatta perfettamente, e il test richiede n − 2 ≥ 1 gradi di libertà. Se tutti i valori di X o tutti quelli di Y sono uguali, la formula divide per zero e r non è definito.",
      },
    ],
    sourcesUsedFor: [
      "Verifica che r sia diverso da zero con n − 2 gradi di libertà.",
      "Definizione del coefficiente di correlazione come misura dell'associazione lineare tra −1 e +1.",
    ],
  },
  text: {
    x: "Valori di X",
    xHelp:
      "Un valore per osservazione, separati da punto e virgola, spazi o a capo. Usa la virgola come separatore decimale; anche una virgola seguita da uno spazio separa i valori.",
    y: "Valori di Y",
    yHelp: "Un valore per osservazione, nello stesso ordine dei valori di X.",
    errors: {
      empty: "Inserisci almeno un numero.",
      tooMany: "Inserisci al massimo {max} numeri.",
      notNumber: "«{token}» non è un numero. Usa la virgola decimale e separa i valori con punto e virgola, spazi o a capo.",
      tooLarge: "«{token}» è troppo grande.",
    },
    tooBig: "{value} è troppo grande. Ogni numero può valere al massimo {max} in valore assoluto.",
    tooFew: "Inserisci almeno {min} coppie di valori.",
    countMismatch: "Inserisci un valore di Y per ogni valore di X: hai {x} e {y}.",
    xCount: {
      zero: "{n} valori di X",
      one: "{n} valore di X",
      two: "{n} valori di X",
      few: "{n} valori di X",
      many: "{n} valori di X",
      other: "{n} valori di X",
    },
    yCount: {
      zero: "{n} valori di Y",
      one: "{n} valore di Y",
      two: "{n} valori di Y",
      few: "{n} valori di Y",
      many: "{n} valori di Y",
      other: "{n} valori di Y",
    },
    pairCount: { zero: "{n} coppie", one: "{n} coppia", two: "{n} coppie", few: "{n} coppie", many: "{n} coppie", other: "{n} coppie" },
    constantX: "Tutti i valori di X sono uguali, quindi la correlazione non è definita. Almeno due valori di X devono essere diversi.",
    constantY: "Tutti i valori di Y sono uguali, quindi la correlazione non è definita. Almeno due valori di Y devono essere diversi.",
    pearson: "Coefficiente di correlazione di Pearson (r)",
    caption: "Calcolato su {count}.",
    rSquared: "Coefficiente di determinazione (r²)",
    tStat: "Statistica t",
    tInfinite: "Infinita (correlazione perfetta)",
    df: "Gradi di libertà (n − 2)",
    pValue: "p-value a due code (H₀: nessuna correlazione)",
    spearman: "Correlazione per ranghi di Spearman (ρ)",
    covariance: "Covarianza campionaria",
    strength: "Intensità e direzione (regola pratica)",
    describe: "{strength}, {direction}",
    strengths: {
      negligible: "Trascurabile",
      weak: "Debole",
      moderate: "Moderata",
      strong: "Forte",
      veryStrong: "Molto forte",
      perfect: "Perfetta",
    },
    directions: { positive: "positiva", negative: "negativa", none: "senza direzione" },
    perfectNote: "I punti giacciono esattamente su una retta, quindi |r| = 1 e il p-value è 0.",
    smallNote: "Con poche coppie, anche una r elevata può nascere per caso. Controlla il p-value.",
    note: "La correlazione misura quanto due variabili variano insieme. Non dimostra che una sia la causa dell'altra.",
  },
};

export default it;
