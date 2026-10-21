import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MarginOfErrorText } from "../text/en";

const it: CalculatorTranslation<MarginOfErrorText> = {
  content: {
    title: "Calcolatore del margine di errore",
    shortTitle: "Margine di errore",
    summary: "Trova il margine di errore ± della percentuale di un sondaggio in base alla dimensione del campione, al risultato e al livello di confidenza.",
    metaTitle: "Calcolatore margine di errore per proporzioni di sondaggi",
    metaDescription:
      "Calcola il margine di errore ± della percentuale di un sondaggio dalla dimensione del campione e dal livello di confidenza, con intervallo ed errore standard.",
    keywords: ["margine di errore", "margine di errore sondaggio", "errore campionario", "più o meno", "intervallo di confidenza proporzione", "errore standard di una proporzione", "sondaggi"],
    intro: [
      "Quando un sondaggio riporta che il 47% degli elettori è favorevole a un piano, «±3 punti» è il suo margine di errore: l'intervallo attorno al risultato in cui probabilmente si trova il vero valore della popolazione. Questo calcolatore trova quel margine per qualsiasi percentuale di sondaggio.",
      "Inserisci quante persone hanno risposto, la quota che ha dato la risposta che stai riportando e il livello di confidenza. Il calcolatore restituisce il margine di errore in punti percentuali, l'intervallo di confidenza e l'errore standard.",
      "Questo strumento è pensato per le proporzioni (percentuali di risposte sì/no). Se stai stimando la media di una misura, come l'altezza o la spesa, usa invece il calcolatore dell'intervallo di confidenza.",
    ],
    howToUse: [
      "Inserisci la dimensione del campione: il numero di risposte completate.",
      "Inserisci la proporzione osservata in percentuale. Usa il 50% per ottenere il margine più ampio possibile per quella dimensione del campione.",
      "Scegli il livello di confidenza.",
      "Se il campione è una quota rilevante di una popolazione nota e limitata, inserisci la dimensione della popolazione per applicare la correzione per popolazione finita.",
      "Leggi il margine di errore e l'intervallo che determina attorno al tuo risultato.",
    ],
    formulas: [
      { title: "Errore standard di una proporzione", expression: "SE = √(p × (1 − p) ÷ n)", explanation: "p è la proporzione osservata in forma decimale e n la dimensione del campione." },
      { title: "Margine di errore", expression: "MOE = z* × SE", explanation: "z* è il valore critico per il livello di confidenza: 1,645 per il 90%, 1,960 per il 95% e 2,576 per il 99%." },
      { title: "Correzione per popolazione finita", expression: "MOE = z* × SE × √((N − n) ÷ (N − 1))", explanation: "Si usa quando viene inserita una dimensione della popolazione N. Riduce il margine quando il campione è una parte consistente della popolazione." },
      { title: "Intervallo di confidenza", expression: "da p − MOE a p + MOE", explanation: "L'intervallo è limitato all'intervallo dallo 0% al 100%." },
    ],
    examples: [
      {
        title: "Un sondaggio su 1.000 persone con risultato del 50% al 95% di confidenza",
        steps: ["SE = √(0,5 × 0,5 ÷ 1.000) ≈ 0,015811", "MOE = 1,95996 × 0,015811 ≈ 0,030990", "Margine ≈ ±3,10 punti; intervallo ≈ dal 46,90% al 53,10%"],
      },
      {
        title: "600 clienti, 42% soddisfatti, al 90% di confidenza",
        steps: ["SE = √(0,42 × 0,58 ÷ 600) ≈ 0,020149", "MOE = 1,64485 × 0,020149 ≈ 0,033143", "Margine ≈ ±3,31 punti; intervallo ≈ dal 38,69% al 45,31%"],
      },
      {
        title: "400 dei 3.000 studenti di una scuola, 35% d'accordo, al 99% di confidenza",
        steps: ["SE prima della correzione = √(0,35 × 0,65 ÷ 400) ≈ 0,023848", "Correzione = √(2.600 ÷ 2.999) ≈ 0,93110", "MOE = 2,57583 × 0,023848 × 0,93110 ≈ 0,057197, quindi circa ±5,72 punti"],
      },
    ],
    assumptions: [
      "Il campione è un campione casuale semplice della popolazione. I sondaggi online ad autoselezione, i campioni per quote e i panel ponderati possono avere errori maggiori di quelli indicati da questa formula.",
      "Il margine copre solo l'errore di campionamento casuale. Non tiene conto delle mancate risposte, di domande formulate in modo distorto o di persone che rispondono in modo non sincero.",
      "Usa l'approssimazione normale (di Wald), poco affidabile quando meno di circa 10 risposte ricadono in una delle due categorie; in quel caso il calcolatore ti avvisa.",
      "I valori critici sono calcolati numericamente e coincidono con le tavole standard per molte più cifre di quelle mostrate.",
    ],
    faqs: [
      { question: "Che cosa significa un margine di errore di ±3 punti?", answer: "Al 95% di confidenza, se ripetessi il sondaggio molte volte con nuovi campioni casuali, circa il 95% degli intervalli costruiti in questo modo conterrebbe la vera percentuale della popolazione. Non significa che il valore vero sia garantito entro 3 punti." },
      { question: "Come dimezzo il margine di errore?", answer: "Il margine diminuisce con la radice quadrata della dimensione del campione, quindi per dimezzarlo servono circa quattro volte più risposte. Passare da ±3,1 punti con 1.000 persone a circa ±1,55 punti richiede all'incirca 4.000 persone." },
      { question: "Posso usarlo per le medie?", answer: "No. Questo calcolatore gestisce percentuali di risposte sì/no. Per la media di una misura numerica usa il calcolatore dell'intervallo di confidenza, che parte dalla media e dalla deviazione standard." },
    ],
    sourcesUsedFor: [
      "Il limite di errore per una proporzione, z·√(p′q′/n), e l'intervallo p′ ± limite di errore.",
      "La correzione per popolazione finita √((N − n)/(N − 1)).",
    ],
  },
  text: {
    n: "Dimensione del campione (n)",
    nHelp: "Numero di risposte completate.",
    proportion: "Proporzione osservata",
    proportionHelp: "Quota del campione che ha dato la risposta che stai riportando. Usa il 50% per il margine più ampio e prudente.",
    level: "Livello di confidenza",
    levelOptions: { "80": "80%", "90": "90%", "95": "95%", "98": "98%", "99": "99%" },
    population: "Dimensione della popolazione (facoltativa)",
    populationHelp: "Dimensione totale del gruppo da cui è stato estratto il campione. Lascia vuoto per una popolazione molto grande o sconosciuta.",
    populationTooSmall: "La popolazione non può essere più piccola del campione ({n}).",
    margin: "Margine di errore (± punti percentuali)",
    caption: "{p} ± {moe} con confidenza del {level}.",
    interval: "Intervallo di confidenza",
    intervalText: "da {lower} a {upper}",
    standardError: "Errore standard",
    critical: "Valore critico (z*)",
    correction: "Fattore di correzione per popolazione finita",
    correctionNone: "Non applicato",
    weakApproximation: "Meno di 10 risposte ricadono da una parte (n × p = {yes}, n × (1 − p) = {no}). Qui l'approssimazione normale è debole, quindi considera questo margine solo indicativo; un intervallo esatto o di Wilson è più affidabile.",
    census: "Il campione copre l'intera popolazione, quindi non c'è errore di campionamento.",
    clipped: "L'intervallo è stato troncato a {bound} perché una proporzione non può andare oltre.",
    meansNote: "Questo margine riguarda una percentuale (proporzione). Per la media di una misura, usa il calcolatore dell'intervallo di confidenza.",
  },
};

export default it;
