import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoundingText } from "../text/en";

const it: CalculatorTranslation<RoundingText> = {
  content: {
    title: "Calcolatore di arrotondamento",
    shortTitle: "Arrotondamento",
    summary:
      "Arrotonda un numero a un certo numero di decimali, all'intero, alla decina, al centinaio, al migliaio o a qualsiasi passo, con sei metodi di arrotondamento esatti.",
    metaTitle: "Calcolatore di arrotondamento – Decimali, al pari e altro",
    metaDescription:
      "Arrotonda un numero in modo esatto a decimali, decine, centinaia o a un passo come 0,05, a metà per eccesso, al pari, per eccesso, per difetto o troncando.",
    keywords: [
      "arrotondamento",
      "arrotondare ai decimali",
      "arrotondare al più vicino",
      "arrotondamento bancario",
      "arrotondamento al pari",
      "arrotondamento per eccesso",
      "arrotondamento per difetto",
      "troncamento",
    ],
    intro: [
      "Arrotondare significa sostituire un numero con uno vicino e più semplice: 3,14159 diventa 3,14, un prezzo di 19,97 diventa 19,95 a passi di 5 centesimi e 87.654 diventa 88.000 al migliaio più vicino. Questo calcolatore arrotonda a un numero di decimali, all'intero, alla decina, al centinaio o al migliaio più vicino, oppure a qualsiasi passo tu scelga.",
      "Lavora sulle cifre che digiti, non su un'approssimazione binaria, quindi 1,005 si arrotonda davvero a 1,01 con il metodo «metà per eccesso», un caso in cui molti fogli di calcolo e linguaggi di programmazione danno 1,00. Sei metodi coprono l'arrotondamento scolastico, quello bancario e l'arrotondamento sempre per eccesso, per difetto o verso lo zero. Per arrotondare alle cifre significative, usa invece il Calcolatore di cifre significative.",
    ],
    howToUse: [
      "Digita il numero esattamente come ce l'hai. Ogni cifra viene conservata.",
      "Scegli a cosa arrotondare: decimali, intero, 10, 100, 1.000 o un passo personalizzato come 0,05 o 0,25.",
      "Scegli il metodo di arrotondamento. «Metà per eccesso» è quello insegnato nella maggior parte delle scuole; «metà al pari» è comune in finanza e in statistica.",
      "Leggi il numero arrotondato, di quanto si è spostato rispetto all'originale e i due candidati tra cui è stato scelto.",
    ],
    formulas: [
      {
        title: "Arrotondamento a un passo",
        expression: "k = x ÷ q\narrotondato = round(k) × q",
        explanation:
          "q è il passo: 0,01 per 2 decimali, 1 per un intero, 10, 100, 1.000 o un valore a tua scelta. Il metodo decide come round() tratta k.",
      },
      {
        title: "Regole per i casi a metà",
        expression: "Metà per eccesso: 2,5 → 3, −2,5 → −3\nMetà al pari: 2,5 → 2, 3,5 → 4\nMetà per difetto: 2,5 → 2, −2,5 → −2",
        explanation: "Differiscono solo quando il numero è esattamente a metà tra due candidati. Negli altri casi tutti e tre arrotondano al più vicino.",
      },
      {
        title: "Arrotondamento direzionale",
        expression: "Per eccesso: 2,1 → 3, −2,9 → −2\nPer difetto: 2,9 → 2, −2,1 → −3\nTroncamento: 2,9 → 2, −2,9 → −2",
        explanation:
          "L'arrotondamento per eccesso va sempre verso +∞, quello per difetto verso −∞, e il troncamento elimina semplicemente le cifre in più (verso lo zero).",
      },
      {
        title: "Aritmetica decimale esatta",
        expression: "1,005 = 1005 × 10⁻³ esattamente",
        explanation:
          "Il numero e il passo vengono portati a interi con la stessa potenza di 10 e divisi in modo esatto, così nessun errore di arrotondamento binario può alterare un caso a metà.",
      },
    ],
    examples: [
      {
        title: "Arrotonda 1,005 a 2 decimali, metà per eccesso",
        steps: ["I candidati sono 1,00 e 1,01", "La parte scartata, 0,005, è esattamente metà di 0,01", "Il metodo «metà per eccesso» manda il caso a metà lontano dallo zero: 1,01"],
      },
      {
        title: "Arrotonda 7,325 a 2 decimali con l'arrotondamento bancario",
        steps: ["I candidati sono 7,32 e 7,33", "7,325 è esattamente a metà", "Il metodo «metà al pari» sceglie il candidato con l'ultima cifra pari: 7,32"],
      },
      {
        title: "Arrotonda 3,38 ore al quarto d'ora più vicino",
        steps: ["3,38 ÷ 0,25 = 13,52", "13,52 si arrotonda a 14", "14 × 0,25 = 3,50 ore"],
      },
    ],
    assumptions: [
      "Il numero viene arrotondato esattamente come è digitato, con un massimo di 40 cifre significative. Nulla viene convertito in virgola mobile binaria.",
      "«Metà per eccesso» e «metà per difetto» sono simmetrici rispetto allo zero: −2,5 con metà per eccesso dà −3. L'arrotondamento sempre per eccesso e sempre per difetto non sono simmetrici.",
      "Quando il valore arrotondato è zero, viene mostrato come 0 senza segno.",
      "I risultati sono mostrati con tanti decimali quanti ne ha il passo di arrotondamento, quindi 2,5 arrotondato a 2 decimali appare come 2,50.",
    ],
    faqs: [
      {
        question: "Che cos'è l'arrotondamento bancario?",
        answer:
          "È il metodo «metà al pari»: un caso esattamente a metà va al vicino pari, quindi 2,5 diventa 2 e 3,5 diventa 4. Su molti valori, i casi a metà vengono arrotondati per eccesso e per difetto con la stessa frequenza, evitando una piccola distorsione verso l'alto nei totali.",
      },
      {
        question: "Perché il mio foglio di calcolo arrotonda 1,005 a 1,00?",
        answer:
          "La maggior parte dei software memorizza i numeri in binario, dove 1,005 è in realtà 1,00499999999999989…, appena sotto la metà. Questo calcolatore lavora direttamente sulle cifre decimali, quindi 1,005 è esattamente a metà e il metodo «metà per eccesso» dà 1,01.",
      },
      {
        question: "Come arrotondo un prezzo ai 5 centesimi più vicini?",
        answer: "Scegli «Passo personalizzato più vicino» e inserisci 0,05. Per esempio, con «metà per eccesso» 19,97 diventa 19,95 e 19,98 diventa 20,00.",
      },
    ],
    sourcesUsedFor: [
      "Definizioni dei metodi di arrotondamento (metà per eccesso, metà al pari, metà per difetto, per eccesso, per difetto e verso lo zero) usate per verificare i risultati.",
      "La regola dell'arrotondamento al pari per i casi esattamente a metà usata nella pratica delle misurazioni.",
    ],
  },
  text: {
    number: "Numero",
    numberHelp:
      "Digita il numero esattamente; ogni cifra viene conservata, quindi 1,005 resta 1,005. Usa la virgola per i decimali. È ammessa la notazione e, come 2,5e-3.",
    invalid: "Inserisci un numero come 1234,5678, -0,125 o 2,5e-3.",
    tooLong: "Inserisci al massimo 40 cifre significative, con un esponente tra -40 e 40.",
    target: "Arrotonda a",
    targets: {
      places: "Decimali",
      whole: "Intero più vicino",
      tens: "Decina più vicina (10)",
      hundreds: "Centinaio più vicino (100)",
      thousands: "Migliaio più vicino (1.000)",
      increment: "Passo personalizzato più vicino",
    },
    places: "Decimali",
    increment: "Passo",
    incrementHelp: "Arrotonda a un multiplo di questo valore, per esempio 0,05 per prezzi a 5 centesimi o 0,25 per i quarti d'ora.",
    incrementInvalid: "Inserisci un passo positivo come 0,05, 0,25 o 5.",
    method: "Metodo di arrotondamento",
    methods: {
      halfUp: "Metà per eccesso (la metà si allontana dallo zero)",
      halfEven: "Metà al pari (arrotondamento bancario)",
      halfDown: "Metà per difetto (la metà va verso lo zero)",
      ceiling: "Sempre per eccesso (ceiling)",
      floor: "Sempre per difetto (floor)",
      truncate: "Troncamento (verso lo zero)",
    },
    rounded: "Numero arrotondato",
    caption: "{original} arrotondato con il metodo {method}.",
    methodShort: {
      halfUp: "metà per eccesso",
      halfEven: "metà al pari",
      halfDown: "metà per difetto",
      ceiling: "sempre per eccesso (ceiling)",
      floor: "sempre per difetto (floor)",
      truncate: "del troncamento",
    },
    difference: "Differenza (arrotondato − originale)",
    lower: "Candidato inferiore (floor)",
    upper: "Candidato superiore (ceiling)",
    exact: "Il numero rientra già esattamente in questo arrotondamento, quindi il suo valore non cambia.",
    tie: "Il numero è esattamente a metà tra i due candidati, quindi decide la regola del metodo per i casi a metà.",
    negativeNote:
      "Per i numeri negativi, «sempre per eccesso» va verso +∞ (−2,5 diventa −2) e «sempre per difetto» verso −∞ (−2,5 diventa −3).",
  },
};

export default it;
