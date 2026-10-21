import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ZScoreText } from "../text/en";

const it: CalculatorTranslation<ZScoreText> = {
  content: {
    title: "Calcolatore dello z-score",
    shortTitle: "Z-score",
    summary: "Standardizza un valore come z-score e trova il suo percentile e le probabilità delle code sotto la curva normale.",
    metaTitle: "Calcolatore dello z-score – Percentile e probabilità normali",
    metaDescription:
      "Converti un valore in z-score a partire da media e deviazione standard e trova il percentile e le probabilità normali a una coda destra e a due code.",
    keywords: [
      "z-score",
      "punteggio z",
      "punteggio standard",
      "standardizzazione",
      "distribuzione normale",
      "percentile",
      "deviazioni standard dalla media",
      "curva a campana",
    ],
    intro: [
      "Uno z-score indica di quante deviazioni standard un valore si trova sopra o sotto la media. Uno z-score pari a 0 corrisponde esattamente alla media, i punteggi positivi sono sopra la media e quelli negativi sotto.",
      "Poiché eliminano le unità originali, gli z-score permettono di confrontare risultati su scale diverse, come due esami con medie diverse. Se i dati sono approssimativamente normali, lo z-score indica anche la quota di valori sotto o sopra il tuo.",
    ],
    howToUse: [
      "Inserisci il valore che vuoi esaminare.",
      "Inserisci la media e la deviazione standard del gruppo a cui appartiene. La deviazione standard deve essere positiva.",
      "Leggi lo z-score e la posizione descritta a parole.",
      "Usa il percentile per la quota di valori sotto x, P(X > x) per quella sopra e la probabilità a due code per un test bilaterale.",
    ],
    formulas: [
      { title: "Z-score", expression: "z = (x − μ) ÷ σ", explanation: "μ è la media e σ la deviazione standard della distribuzione." },
      {
        title: "Percentile",
        expression: "P(X < x) = Φ(z)",
        explanation: "Φ è la funzione di ripartizione della distribuzione normale standard: l'area sotto la curva a campana a sinistra di z.",
      },
      {
        title: "Coda destra",
        expression: "P(X > x) = 1 − Φ(z) = Φ(−z)",
        explanation: "L'area a destra di z. Viene calcolata come Φ(−z) per mantenere la precisione con z grandi.",
      },
      {
        title: "Probabilità a due code",
        expression: "P(|Z| > |z|) = 2·Φ(−|z|)",
        explanation: "La probabilità di un valore almeno così lontano dalla media in una delle due direzioni.",
      },
    ],
    examples: [
      {
        title: "Un punteggio d'esame di 1.310 con media 1.050 e σ = 210",
        steps: [
          "z = (1.310 − 1.050) ÷ 210 = 260 ÷ 210 ≈ 1,2381",
          "Φ(1,2381) ≈ 0,8922, quindi il punteggio è vicino all'89° percentile",
          "Circa il 10,78% dei punteggi è più alto",
        ],
      },
      {
        title: "Un pezzo che misura 58 mm con media 70 mm e σ = 8 mm",
        steps: [
          "z = (58 − 70) ÷ 8 = −1,5",
          "Φ(−1,5) ≈ 0,0668, quindi circa il 6,68% dei pezzi è più corto",
          "Probabilità a due code = 2 × 0,0668 ≈ 0,1336",
        ],
      },
    ],
    assumptions: [
      "Lo z-score in sé vale per qualsiasi distribuzione, ma il percentile e le probabilità presuppongono che i dati siano distribuiti normalmente.",
      "La media e la deviazione standard che inserisci sono trattate come i veri valori della popolazione. Con un campione piccolo e una σ stimata, può essere più appropriata una distribuzione t.",
      "Le probabilità normali sono calcolate con un'approssimazione numerica precisa a circa sette cifre significative.",
    ],
    faqs: [
      {
        question: "Che cos'è un buon z-score?",
        answer: "Dipende da ciò che si misura. Per i punteggi di un test, uno z-score più alto è migliore; per qualcosa come il tempo di reazione, è meglio più basso. In una distribuzione normale circa il 68% dei valori cade tra z = −1 e z = 1 e circa il 95% tra −2 e 2.",
      },
      {
        question: "Uno z-score può essere negativo?",
        answer: "Sì. Uno z-score negativo significa che il valore è sotto la media. Per esempio, z = −2 si trova due deviazioni standard sotto la media.",
      },
      {
        question: "Come si trasforma uno z-score in un percentile?",
        answer: "Trova l'area sotto la curva normale standard a sinistra di z. Questo calcolatore lo fa per te: z = 1,6 dà circa il 94,52%, quindi il valore supera all'incirca il 94,5% della distribuzione.",
      },
    ],
    sourcesUsedFor: ["Definizione dello z-score, z = (x − μ)/σ, e della distribuzione normale standard."],
  },
  text: {
    x: "Valore (x)",
    xHelp: "L'osservazione che vuoi standardizzare.",
    mean: "Media (μ)",
    sd: "Deviazione standard (σ)",
    sdHelp: "Deve essere maggiore di 0.",
    z: "Z-score",
    above: "{n} deviazioni standard sopra la media",
    below: "{n} deviazioni standard sotto la media",
    atMean: "Esattamente sulla media",
    position: "Posizione",
    percentile: "Percentile, P(X < x)",
    upper: "P(X > x)",
    twoTailed: "A due code, P(|Z| > |z|)",
    note: "Le probabilità presuppongono che i valori seguano una distribuzione normale con questa media e questa deviazione standard.",
    unusual: "|z| è superiore a 3, un valore molto insolito per dati distribuiti normalmente. Controlla se c'è un errore di inserimento o un valore anomalo.",
  },
};

export default it;
