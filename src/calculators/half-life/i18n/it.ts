import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HalfLifeText } from "../text/en";

const it: CalculatorTranslation<HalfLifeText> = {
  content: {
    title: "Calcolatore del tempo di dimezzamento",
    shortTitle: "Tempo di dimezzamento",
    summary: "Risolvi il decadimento esponenziale per la quantità residua, la quantità iniziale, il tempo di dimezzamento o il tempo trascorso.",
    metaTitle: "Calcolatore del tempo di dimezzamento – Emivita",
    metaDescription:
      "Risolvi N = N₀(1/2)^(t/T) per quantità residua, quantità iniziale, tempo di dimezzamento o tempo trascorso, con costante di decadimento e vita media.",
    keywords: ["tempo di dimezzamento", "emivita", "decadimento radioattivo", "decadimento esponenziale", "costante di decadimento", "vita media", "datazione al carbonio"],
    intro: [
      "Il tempo di dimezzamento (o emivita) è il tempo necessario perché metà di una quantità in decadimento scompaia. Dopo un tempo di dimezzamento ne resta il 50%, dopo due il 25%, dopo tre il 12,5% e così via.",
      "La stessa regola descrive gli isotopi radioattivi e qualsiasi altro processo con decadimento del primo ordine. Inserisci tre dei quattro valori per trovare quello mancante. Il calcolatore mostra anche la costante di decadimento, la vita media e la quota residua.",
    ],
    howToUse: [
      "Scegli cosa trovare: la quantità residua, la quantità iniziale, il tempo di dimezzamento o il tempo trascorso.",
      "Inserisci gli altri valori. Le quantità possono essere in qualsiasi unità, e così i tempi, purché ogni coppia usi la stessa.",
      "Leggi il risultato nelle stesse unità, insieme al numero di tempi di dimezzamento e alla costante di decadimento.",
    ],
    formulas: [
      { title: "Legge del decadimento", expression: "N = N₀ × (1/2)^(t ÷ T½)", explanation: "N₀ è la quantità iniziale, t il tempo trascorso e T½ il tempo di dimezzamento." },
      { title: "Tempo di dimezzamento e tempo trascorso", expression: "T½ = t × ln 2 ÷ ln(N₀ ÷ N);  t = T½ × log₂(N₀ ÷ N)", explanation: "La legge del decadimento riscritta con i logaritmi." },
      { title: "Costante di decadimento e vita media", expression: "λ = ln 2 ÷ T½;  τ = 1 ÷ λ = T½ ÷ ln 2", explanation: "λ è la frazione che decade per unità di tempo; τ è la vita media, circa 1,4427 tempi di dimezzamento." },
    ],
    examples: [
      {
        title: "40 g di cobalto-60 dopo 15,81 anni (T½ = 5,27 anni)",
        steps: ["t ÷ T½ = 15,81 ÷ 5,27 = 3 tempi di dimezzamento", "N = 40 × (1/2)³ = 5 g"],
      },
      {
        title: "Tempo di dimezzamento da 1.200 conteggi scesi a 150 in 36 ore",
        steps: ["N₀ ÷ N = 1.200 ÷ 150 = 8", "T½ = 36 × ln 2 ÷ ln 8 = 36 ÷ 3 = 12 ore"],
      },
      {
        title: "Età di un campione con il 30% del carbonio-14 residuo (T½ = 5.730 anni)",
        steps: ["N₀ ÷ N = 100 ÷ 30 ≈ 3,333", "t = 5.730 × log₂(3,333) ≈ 9.952,8 anni"],
      },
    ],
    assumptions: [
      "Il decadimento è del primo ordine: il tempo di dimezzamento resta lo stesso indipendentemente da quanto materiale rimane.",
      "I campioni grandi seguono fedelmente la curva; per pochi atomi il decadimento è casuale e il risultato è solo una media.",
      "Questo è uno strumento matematico generico. Non fornisce indicazioni su farmaci, dosaggi o radioprotezione; per questo rivolgiti a un professionista qualificato.",
    ],
    faqs: [
      { question: "L'unità di tempo è importante?", answer: "Conta solo che il tempo di dimezzamento e il tempo trascorso usino la stessa unità. Inseriscili entrambi in giorni, o entrambi in anni, e il risultato sarà in quell'unità." },
      { question: "Quanto ne resta dopo 10 tempi di dimezzamento?", answer: "(1/2)¹⁰ = 1/1.024, cioè poco meno dello 0,1% della quantità iniziale." },
      { question: "Che differenza c'è tra tempo di dimezzamento e vita media?", answer: "Il tempo di dimezzamento è il momento in cui metà del materiale è scomparsa. La vita media è il tempo medio prima che un singolo atomo decada, ed è più lunga: circa 1,4427 volte il tempo di dimezzamento." },
    ],
    sourcesUsedFor: ["Il decadimento del primo ordine, la definizione di tempo di dimezzamento e λ = ln 2 ÷ T½."],
  },
  text: {
    solve: "Trova",
    solveOptions: { N: "Quantità residua (N)", N0: "Quantità iniziale (N₀)", T: "Tempo di dimezzamento (T½)", t: "Tempo trascorso (t)" },
    initial: "Quantità iniziale (N₀)",
    remaining: "Quantità residua (N)",
    amountHelp: "Qualsiasi unità (grammi, atomi, becquerel…), purché N e N₀ usino la stessa.",
    halfLife: "Tempo di dimezzamento (T½)",
    elapsed: "Tempo trascorso (t)",
    timeHelp: "Qualsiasi unità di tempo, purché t e T½ usino la stessa.",
    remainingTooLarge: "La quantità residua non può essere maggiore della quantità iniziale (N ≤ N₀).",
    remainingMustDrop: "Per trovare il tempo di dimezzamento, la quantità residua deve essere minore di quella iniziale.",
    timeMustBePositive: "Per trovare il tempo di dimezzamento, il tempo trascorso deve essere maggiore di 0.",
    tooManyHalfLives: "Sono troppi tempi di dimezzamento: la quantità iniziale sarebbe troppo grande da mostrare.",
    results: { N: "Quantità residua", N0: "Quantità iniziale", T: "Tempo di dimezzamento", t: "Tempo trascorso" },
    amountCaption: "Nella stessa unità dell'altra quantità.",
    timeCaption: "Nella stessa unità di tempo dell'altro valore temporale.",
    percentRemaining: "Percentuale residua (N ÷ N₀)",
    halfLives: "Numero di tempi di dimezzamento (t ÷ T½)",
    decayConstant: "Costante di decadimento λ = ln 2 ÷ T½ (per unità di tempo)",
    meanLifetime: "Vita media τ = 1 ÷ λ (unità di tempo)",
    note: "Presuppone un semplice decadimento esponenziale (del primo ordine) con tempo di dimezzamento costante.",
  },
};

export default it;
