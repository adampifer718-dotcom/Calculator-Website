import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LinearRegressionText } from "../text/en";

const it: CalculatorTranslation<LinearRegressionText> = {
  content: {
    title: "Calcolatore di regressione lineare",
    shortTitle: "Regressione lineare",
    summary:
      "Adatta una retta dei minimi quadrati ŷ = a + bx a dati appaiati, con r², l'errore standard della pendenza, un test t e previsioni.",
    metaTitle: "Calcolatore di regressione lineare – Minimi quadrati e r²",
    metaDescription:
      "Incolla dati appaiati X e Y: ottieni la retta dei minimi quadrati ŷ = a + bx, r e r², errore standard della pendenza, statistica t, p-value e una previsione.",
    keywords: [
      "regressione lineare",
      "minimi quadrati",
      "retta di regressione",
      "equazione di regressione",
      "pendenza",
      "intercetta",
      "r quadro",
      "errore standard della pendenza",
    ],
    intro: [
      "La regressione lineare semplice trova la retta che prevede meglio una variabile, Y, a partire da un'altra, X. La retta dei minimi quadrati ordinari è quella che rende il più piccola possibile la somma dei quadrati delle distanze verticali tra i punti e la retta.",
      "Inserisci osservazioni appaiate e il calcolatore restituisce l'equazione ŷ = a + bx, quanta parte della variabilità spiega la retta (r²), l'errore standard della pendenza con un test t per verificare se la pendenza potrebbe essere nulla, e una previsione facoltativa. Se ti serve solo l'intensità della relazione, il Calcolatore del coefficiente di correlazione fornisce da sole la r di Pearson e la ρ di Spearman.",
    ],
    howToUse: [
      "Digita i valori di X (il predittore) nella prima casella, separati da punto e virgola, spazi o a capo.",
      "Digita i valori di Y corrispondenti (la risposta) nella seconda casella, nello stesso ordine. Servono almeno 3 coppie.",
      "Se vuoi, inserisci un valore di x per ottenere la ŷ prevista.",
      "Leggi l'equazione, poi controlla r² e il p-value della pendenza.",
    ],
    formulas: [
      {
        title: "Pendenza e intercetta",
        expression: "b = Σ(xᵢ − x̄)(yᵢ − ȳ) ÷ Σ(xᵢ − x̄)²,  a = ȳ − b·x̄",
        explanation: "La retta dei minimi quadrati passa sempre per il punto delle medie (x̄, ȳ).",
      },
      {
        title: "Errore standard dei residui",
        expression: "s = √[Σ(yᵢ − ŷᵢ)² ÷ (n − 2)]",
        explanation:
          "La distanza verticale tipica dei punti dalla retta, nelle unità di Y. Due gradi di libertà vengono consumati da a e b.",
      },
      {
        title: "Errore standard e test t della pendenza",
        expression: "SE(b) = s ÷ √Σ(xᵢ − x̄)²,  t = b ÷ SE(b),  df = n − 2",
        explanation:
          "Il p-value bilaterale dalla distribuzione t di Student verifica l'ipotesi nulla che la vera pendenza sia 0.",
      },
      {
        title: "Coefficiente di determinazione",
        expression: "r² = 1 − Σ(yᵢ − ŷᵢ)² ÷ Σ(yᵢ − ȳ)²",
        explanation:
          "La quota della variabilità di Y spiegata dalla retta. Nella regressione semplice è uguale al quadrato della r di Pearson.",
      },
    ],
    examples: [
      {
        title: "Ore di studio settimanali e voti d'esame",
        steps: [
          "x̄ = 4,5, ȳ = 66,125; Σ(x − x̄)² = 42 e Σ(x − x̄)(y − ȳ) = 171,5",
          "b = 171,5 ÷ 42 ≈ 4,08333 e a = 66,125 − 4,08333 × 4,5 = 47,75",
          "r² ≈ 0,9935; SE(b) ≈ 0,1349, t ≈ 30,28 con 6 gradi di libertà, p ≈ 8,6 × 10⁻⁸",
        ],
      },
      {
        title: "Prezzo di un'auto usata in base all'età",
        steps: [
          "Il prezzo cala al crescere dell'età, quindi la pendenza è negativa: b ≈ −1.245,26 all'anno.",
          "a ≈ 24.998,8, il prezzo stimato di un'auto nuova.",
          "A 5 anni: ŷ ≈ 24.998,78 − 1.245,26 × 5 ≈ 18.772,5",
        ],
      },
      {
        title: "Retta di taratura di un sensore",
        steps: [
          "b = 5510 ÷ 1750 ≈ 3,14857 unità di segnale per unità di concentrazione",
          "a ≈ 2,28571, il segnale del bianco",
          "r² ≈ 0,9990 e l'errore standard dei residui è circa 2,08",
        ],
      },
    ],
    assumptions: [
      "La relazione è approssimativamente lineare nell'intervallo dei dati. Un andamento curvo richiede un modello diverso anche quando r² sembra alto.",
      "Il p-value e gli errori standard presuppongono osservazioni indipendenti con residui approssimativamente normali e dispersione costante.",
      "X è considerata misurata senza errore; vengono minimizzate solo le distanze verticali. Scambiando X e Y si ottiene una retta diversa.",
      "I valori anomali e i punti con valori di X estremi possono spostare molto la retta. Le previsioni fuori dall'intervallo di X osservato sono estrapolazioni.",
    ],
    faqs: [
      {
        question: "Che differenza c'è con il coefficiente di correlazione?",
        answer:
          "La correlazione dà un solo numero per intensità e direzione di una relazione lineare e tratta X e Y allo stesso modo. La regressione dà un'equazione che prevede Y da X, con una pendenza espressa in unità di Y per unità di X. Usa il Calcolatore del coefficiente di correlazione se ti serve solo r.",
      },
      {
        question: "Che cosa significa il p-value della pendenza?",
        answer:
          "È la probabilità di ottenere una pendenza almeno così lontana da 0 se in realtà Y non variasse linearmente con X. Un p-value piccolo (ad esempio sotto 0,05) suggerisce un andamento lineare reale; non dice nulla su quanto sia grande o importante.",
      },
      {
        question: "Perché i valori di X devono essere diversi?",
        answer:
          "La pendenza si divide per la dispersione dei valori di X. Se tutte le X sono uguali, la dispersione è zero e qualsiasi retta verticale potrebbe adattarsi, quindi non si può calcolare alcuna pendenza.",
      },
    ],
    sourcesUsedFor: [
      "La retta dei minimi quadrati, la sua pendenza e intercetta e il coefficiente di determinazione.",
      "La deviazione standard (errore standard) della pendenza di un adattamento lineare ai minimi quadrati.",
    ],
  },
  text: {
    x: "Valori di X (predittore)",
    xHelp:
      "Un valore per osservazione, separati da punto e virgola, spazi o a capo. Usa la virgola come separatore decimale; anche una virgola seguita da uno spazio separa i valori.",
    y: "Valori di Y (risposta)",
    yHelp: "Un valore per osservazione, nello stesso ordine dei valori di X.",
    x0: "Prevedi y per x =",
    x0Help: "Facoltativo. Un valore di x per cui stimare ŷ dalla retta adattata.",
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
    pairCount: {
      zero: "{n} coppie",
      one: "{n} coppia",
      two: "{n} coppie",
      few: "{n} coppie",
      many: "{n} coppie",
      other: "{n} coppie",
    },
    constantX: "Tutti i valori di X sono uguali, quindi non si può adattare alcuna retta. Almeno due valori di X devono essere diversi.",
    equationLabel: "Retta di regressione",
    equation: "ŷ = {a} {sign} {b}x",
    caption: "Adattamento ai minimi quadrati su {count}.",
    slope: "Pendenza (b)",
    intercept: "Intercetta (a)",
    rSquared: "Coefficiente di determinazione (r²)",
    r: "Coefficiente di correlazione (r)",
    slopeSe: "Errore standard della pendenza",
    tStat: "Statistica t della pendenza",
    tInfinite: "Infinita (adattamento perfetto)",
    df: "Gradi di libertà (n − 2)",
    pValue: "p-value bilaterale (H₀: pendenza = 0)",
    residualSe: "Errore standard dei residui",
    prediction: "ŷ prevista per x = {x0}",
    notDefined: "Non definito (tutti i valori di Y sono uguali)",
    perfectNote:
      "I punti stanno esattamente su una retta, quindi i residui e gli errori standard sono 0 e il p-value è 0.",
    constantYNote:
      "Tutti i valori di Y sono uguali, quindi la retta è orizzontale (pendenza 0) e r, r² e il test sulla pendenza non sono definiti.",
    extrapolationNote:
      "Il valore di x è fuori dall'intervallo dei dati. Le previsioni oltre i valori di X osservati (estrapolazione) possono essere molto lontane dal vero se la relazione cambia.",
    note: "Il p-value presuppone residui indipendenti e approssimativamente normali con dispersione costante. Un buon adattamento non dimostra che X causi Y.",
  },
};

export default it;
