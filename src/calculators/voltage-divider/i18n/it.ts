import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { VoltageDividerText } from "../text/en";

const it: CalculatorTranslation<VoltageDividerText> = {
  content: {
    title: "Calcolatore del partitore di tensione",
    shortTitle: "Partitore di tensione",
    summary:
      "Trova la tensione di uscita di un partitore a due resistori, o il resistore necessario per una tensione obiettivo, con corrente, potenza, effetto del carico e il valore E24 più vicino.",
    metaTitle: "Partitore di tensione – Vout, R1, R2 e carico",
    metaDescription:
      "Calcola la tensione di uscita di un partitore resistivo, o ricava R1 o R2, con corrente, potenza nei resistori, uscita sotto carico e il valore E24 più vicino.",
    keywords: [
      "partitore di tensione",
      "partitore resistivo",
      "formula Vout",
      "calcolo R1 R2",
      "rapporto di partizione",
      "partitore sotto carico",
      "resistori E24",
    ],
    intro: [
      "Un partitore di tensione è formato da due resistori in serie collegati a una tensione. Il punto tra i due si trova a una frazione fissa della tensione di ingresso, determinata solo dal rapporto tra i resistori. I partitori servono a ridurre un segnale per l'ingresso di un microcontrollore, a fissare un punto di polarizzazione o a creare un riferimento.",
      "Questo calcolatore trova la tensione di uscita dai due resistori, oppure il resistore che ti serve per un'uscita obiettivo. Mostra anche la corrente nel partitore, la potenza dissipata da ciascun resistore, cosa succede quando si collega un carico e il valore di resistore standard E24 più vicino.",
    ],
    howToUse: [
      "Scegli che cosa calcolare: la tensione di uscita, il resistore inferiore R2 o il resistore superiore R1.",
      "Inserisci la tensione di ingresso e i valori noti, scegliendo Ω, kΩ o MΩ per ciascun resistore.",
      "Se vuoi, inserisci la resistenza del carico collegato all'uscita per vedere di quanto abbassa la tensione.",
      "Leggi il risultato, la corrente e la potenza del partitore e, quando calcoli un resistore, il valore E24 più vicino e l'uscita che darebbe.",
    ],
    formulas: [
      {
        title: "Uscita a vuoto",
        expression: "Vout = Vin × R2 ÷ (R1 + R2)",
        explanation: "R1 è il resistore superiore (dall'ingresso all'uscita) e R2 quello inferiore (dall'uscita a massa).",
      },
      {
        title: "Calcolo di un resistore",
        expression: "R2 = R1 × Vout ÷ (Vin − Vout)\nR1 = R2 × (Vin − Vout) ÷ Vout",
        explanation: "Ricavate dall'equazione del partitore. Vout deve essere compresa tra 0 e Vin.",
      },
      {
        title: "Corrente e potenza",
        expression: "I = Vin ÷ (R1 + R2)\nP1 = I² × R1, P2 = I² × R2",
        explanation: "Quando all'uscita non è collegato nulla, la stessa corrente attraversa entrambi i resistori.",
      },
      {
        title: "Uscita sotto carico",
        expression: "R2′ = R2 × RL ÷ (R2 + RL)\nVout,carico = Vin × R2′ ÷ (R1 + R2′)",
        explanation: "Un carico RL è in parallelo con R2, il che abbassa la resistenza inferiore effettiva e quindi l'uscita.",
      },
    ],
    examples: [
      {
        title: "12 V su 10 kΩ e 4,7 kΩ",
        steps: ["Vout = 12 × 4,7 ÷ (10 + 4,7) = 56,4 ÷ 14,7", "Vout ≈ 3,8367 V", "I = 12 V ÷ 14,7 kΩ ≈ 0,8163 mA"],
      },
      {
        title: "R2 per ottenere 3,3 V da 5 V con R1 = 10 kΩ",
        steps: [
          "R2 = 10 kΩ × 3,3 ÷ (5 − 3,3) = 33 ÷ 1,7 kΩ",
          "R2 ≈ 19,4118 kΩ",
          "Il valore E24 più vicino è 20 kΩ, che dà 5 × 20 ÷ 30 ≈ 3,3333 V (1,01% in più)",
        ],
      },
      {
        title: "R1 per ottenere 2,5 V da 9 V con R2 = 1 kΩ e un carico di 10 kΩ",
        steps: [
          "R1 = 1 kΩ × (9 − 2,5) ÷ 2,5 = 2,6 kΩ",
          "Con il carico, R2 ∥ RL = 1 × 10 ÷ 11 ≈ 0,9091 kΩ",
          "Vout sotto carico = 9 × 0,9091 ÷ (2,6 + 0,9091) ≈ 2,3316 V, circa il 6,74% in meno",
        ],
      },
    ],
    assumptions: [
      "I resistori sono ideali ed esatti. I resistori reali hanno una tolleranza (5% per i componenti E24), quindi l'uscita effettiva può differire dal valore calcolato.",
      "Senza una resistenza di carico il partitore è considerato a vuoto. Qualsiasi cosa collegata all'uscita, compreso un voltmetro, assorbe corrente e abbassa la tensione; mantenere il carico almeno 10 volte la resistenza di uscita del partitore rende l'errore piccolo.",
      "Un partitore non è un alimentatore. La sua uscita cala sotto carico e assorbe corrente in continuazione, quindi per alimentare un circuito usa un regolatore di tensione.",
      "L'ingresso è una tensione continua stabile. Gli effetti in frequenza, come le capacità parassite, non sono considerati.",
    ],
    faqs: [
      {
        question: "Qual è R1 e quale R2?",
        answer:
          "R1 collega l'ingresso al punto di uscita e R2 collega il punto di uscita a massa. L'uscita si preleva ai capi di R2, quindi un R2 più grande dà un'uscita più alta.",
      },
      {
        question: "Perché la tensione che misuro è più bassa di quella calcolata?",
        answer:
          "Qualsiasi cosa collegata all'uscita si comporta come un resistore in parallelo con R2, abbassando l'uscita. Inserisci la sua resistenza come carico per vederne l'effetto, oppure usa resistori più piccoli nel partitore così che il carico conti meno.",
      },
      {
        question: "Come scelgo il valore dei resistori?",
        answer:
          "Il rapporto fissa la tensione, mentre la grandezza fissa la corrente. Resistori piccoli sprecano più potenza ma risentono meno del carico; resistori grandi fanno risparmiare potenza ma sono sensibili al carico e alle correnti di dispersione dell'ingresso. Confronta i valori di potenza con la potenza nominale dei resistori.",
      },
    ],
    sourcesUsedFor: [
      "La relazione del partitore di tensione Vout = Vin × R2 ÷ (R1 + R2) e il modo in cui una resistenza di carico abbassa l'uscita.",
      "La serie E24 di 24 valori preferenziali di resistenza per decade, usata per il valore standard più vicino.",
    ],
  },
  text: {
    solve: "Calcola",
    solveOptions: { vout: "Tensione di uscita (Vout)", r2: "Resistore inferiore (R2)", r1: "Resistore superiore (R1)" },
    vin: "Tensione di ingresso (Vin)",
    vout: "Tensione di uscita desiderata (Vout)",
    r1: "Resistore superiore (R1)",
    r1Help: "Il resistore tra l'ingresso e il nodo di uscita.",
    r2: "Resistore inferiore (R2)",
    r2Help: "Il resistore tra il nodo di uscita e la massa.",
    load: "Resistenza di carico (RL, facoltativa)",
    loadHelp:
      "La resistenza di ciò che è collegato all'uscita. Si trova in parallelo con R2 e abbassa l'uscita. Lascia vuoto per un partitore a vuoto.",
    unit: "Unità",
    units: { ohm: "Ω", kohm: "kΩ", megohm: "MΩ" },
    errors: {
      voutRange: "La tensione di uscita deve essere maggiore di 0 e minore della tensione di ingresso.",
    },
    voutResult: "Tensione di uscita (a vuoto)",
    r2Result: "Resistore inferiore R2",
    r1Result: "Resistore superiore R1",
    captionVout: "{vin} su R1 = {r1} e R2 = {r2}.",
    captionR: "Dà {vout} da {vin} con {known}.",
    knownR1: "R1 = {r}",
    knownR2: "R2 = {r}",
    ratio: "Rapporto di partizione (Vout ÷ Vin)",
    current: "Corrente nel partitore (a vuoto)",
    p1: "Potenza in R1",
    p2: "Potenza in R2",
    rTotal: "Resistenza totale (R1 + R2)",
    rOut: "Resistenza di uscita (R1 ∥ R2)",
    vLoaded: "Tensione di uscita con il carico",
    drop: "Calo dovuto al carico",
    loadCurrent: "Corrente nel carico",
    e24: "Valore E24 più vicino",
    e24Vout: "Tensione di uscita con il valore E24",
    e24Error: "Variazione dell'uscita con il valore E24",
    notes: {
      unloaded:
        "Questi valori si riferiscono a un partitore a vuoto. Qualsiasi cosa collegata all'uscita assorbe corrente e abbassa Vout; inserisci una resistenza di carico per vedere di quanto.",
      loaded: "Con il carico, R2 e RL in parallelo equivalgono a {r} e l'uscita cala di {drop}.",
      heavyLoad:
        "Il carico è meno di 10 volte la resistenza di uscita del partitore, quindi cambia sensibilmente l'uscita. Usa resistori più piccoli nel partitore o un buffer se la tensione deve restare stabile.",
      supply:
        "Un partitore di tensione non è un alimentatore: la sua uscita cambia con il carico e spreca potenza in continuazione. Per alimentare un circuito usa un regolatore.",
      e24: "E24 è la serie standard di 24 valori preferenziali per decade con tolleranza del 5%. Il valore più vicino è scelto in base alla minima differenza assoluta.",
    },
  },
};

export default it;
