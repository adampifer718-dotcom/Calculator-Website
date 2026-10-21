import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HardyWeinbergText } from "../text/en";

const it: CalculatorTranslation<HardyWeinbergText> = {
  content: {
    title: "Calcolatore dell'equilibrio di Hardy–Weinberg",
    shortTitle: "Hardy–Weinberg",
    summary: "Trova le frequenze alleliche e genotipiche dalla frequenza di un carattere recessivo, oppure verifica i conteggi dei genotipi rispetto all'equilibrio.",
    metaTitle: "Calcolatore Hardy–Weinberg – Frequenze alleliche e test χ²",
    metaDescription:
      "Ottieni p, q, p², 2pq e q² dalla quota di persone con un carattere recessivo, oppure verifica i conteggi osservati di AA, Aa e aa con un test del chi quadrato.",
    keywords: ["hardy-weinberg", "frequenza allelica", "frequenza genotipica", "p2 2pq q2", "frequenza dei portatori", "genetica di popolazioni", "chi quadrato"],
    intro: [
      "Il principio di Hardy–Weinberg afferma che, in assenza di forze evolutive, le frequenze alleliche e genotipiche restano costanti da una generazione all'altra. Per un gene con due alleli, A con frequenza p e a con frequenza q, i genotipi si presentano allora nelle proporzioni p², 2pq e q².",
      "Usa la prima modalità quando sai quanto è diffuso un carattere recessivo, ad esempio per stimare quante persone ne sono portatrici. Usa la seconda per verificare se i conteggi dei genotipi di un campione corrispondono alle proporzioni previste dal principio.",
    ],
    howToUse: [
      "Scegli un punto di partenza: la frequenza del fenotipo recessivo o i conteggi dei genotipi.",
      "Nella modalità fenotipo, inserisci in percentuale la quota di individui che mostrano il carattere recessivo.",
      "Nella modalità conteggi, inserisci quanti individui AA, Aa e aa hai osservato.",
      "Leggi le frequenze alleliche, la tabella dei genotipi e, per i conteggi, il risultato del chi quadrato.",
    ],
    formulas: [
      { title: "Proporzioni all'equilibrio", expression: "p + q = 1;  p² + 2pq + q² = 1", explanation: "p² è la quota di AA, 2pq quella di Aa e q² quella di aa." },
      { title: "Dal fenotipo recessivo", expression: "q = √q²;  p = 1 − q", explanation: "Solo gli individui aa mostrano un carattere recessivo, quindi la loro quota è uguale a q²." },
      { title: "Dai conteggi dei genotipi", expression: "p = (2·AA + Aa) ÷ (2N)", explanation: "Ogni individuo porta due alleli; N è il numero totale di individui." },
      { title: "Test del chi quadrato", expression: "χ² = Σ (O − E)² ÷ E;  p-value = erfc(√(χ² ÷ 2))", explanation: "E = p²N, 2pqN e q²N. Con 1 grado di libertà il p-value ha questa forma chiusa." },
    ],
    examples: [
      {
        title: "Una condizione recessiva in 1 persona su 2.500",
        steps: ["q² = 0,0004, quindi q = 0,02 e p = 0,98", "2pq = 2 × 0,98 × 0,02 = 0,0392", "Circa il 3,92% delle persone, all'incirca 1 su 25,5, è portatore"],
      },
      {
        title: "Un carattere recessivo osservato nel 9% di una popolazione",
        steps: ["q = √0,09 = 0,3 e p = 0,7", "p² = 49%, 2pq = 42%, q² = 9%"],
      },
      {
        title: "Test su 298 AA, 489 Aa e 213 aa",
        steps: ["N = 1.000 e p = (2 × 298 + 489) ÷ 2.000 = 0,5425", "Conteggi attesi ≈ 294,31, 496,39 e 209,31", "χ² ≈ 0,2215, p-value ≈ 0,638: compatibile con l'equilibrio"],
      },
    ],
    assumptions: [
      "Il modello presuppone una popolazione grande, ad accoppiamento casuale, senza mutazioni, migrazioni o selezione che agiscano sul gene.",
      "La modalità fenotipo presuppone un gene con due alleli, dominanza completa e una popolazione già in equilibrio.",
      "La frequenza del fenotipo si inserisce in percentuale (0–100), non come frazione tra 0 e 1.",
      "Il test del chi quadrato è un'approssimazione che funziona meglio quando ogni conteggio atteso è almeno 5.",
    ],
    faqs: [
      { question: "Perché non posso semplicemente contare il fenotipo dominante?", answer: "Le persone AA e Aa hanno lo stesso aspetto, quindi il fenotipo dominante mescola due genotipi. Il fenotipo recessivo corrisponde solo ad aa, ed è per questo che si parte da q²." },
      { question: "Che cosa significa un p-value piccolo?", answer: "Sotto 0,05, i conteggi genotipici osservati si discostano più di quanto il solo caso spiegherebbe di solito. Le cause possibili includono consanguineità, selezione, migrazione, struttura della popolazione o errori di genotipizzazione." },
      { question: "Perché il test ha solo 1 grado di libertà?", answer: "Le classi genotipiche sono tre. Si perde un grado perché i conteggi devono sommare a N e un altro perché la frequenza allelica p è stimata dagli stessi dati." },
    ],
    sourcesUsedFor: ["Il principio di Hardy–Weinberg, p² + 2pq + q² = 1 e le sue ipotesi."],
  },
  text: {
    mode: "Parti da",
    modeOptions: { phenotype: "Frequenza del fenotipo recessivo", counts: "Conteggi dei genotipi" },
    q2: "Quota con il carattere recessivo (q²)",
    q2Help: "Inserisci una percentuale: 1 persona su 2.500 è lo 0,04%.",
    countAA: "Individui AA (omozigoti dominanti)",
    countAa: "Individui Aa (eterozigoti)",
    countaa: "Individui aa (omozigoti recessivi)",
    noIndividuals: "Inserisci almeno un individuo.",
    carrier: "Frequenza dei portatori (2pq)",
    carrierRatio: "Portatori",
    oneIn: "Circa 1 su {n}",
    none: "Nessuno",
    alleleA: "Frequenza dell'allele A (p)",
    allelea: "Frequenza dell'allele a (q)",
    total: "Totale individui (N)",
    chiSquare: "Chi quadrato (χ², 1 grado di libertà)",
    pValue: "p-value",
    verdict: "Esito del test al livello del 5%",
    consistent: "Nessuno scostamento significativo dall'equilibrio",
    departure: "Scostamento significativo dall'equilibrio",
    genotypes: { AA: "AA (omozigote dominante)", Aa: "Aa (eterozigote)", aa: "aa (omozigote recessivo)" },
    frequencyCaption: "Frequenze genotipiche attese",
    countsCaption: "Conteggi osservati e attesi",
    colGenotype: "Genotipo",
    colFrequency: "Frequenza",
    colPercent: "Percentuale",
    colObserved: "Osservati",
    colExpected: "Attesi",
    phenotypeNote: "Presuppone che la popolazione sia in equilibrio di Hardy–Weinberg, quindi q = √q².",
    monomorphic: "È presente un solo allele, quindi ogni genotipo coincide con il conteggio atteso e il test del chi quadrato non si applica.",
    smallExpected: "Almeno un conteggio atteso è inferiore a 5, quindi il p-value del chi quadrato è solo un'indicazione approssimativa. Per campioni piccoli un test esatto è più affidabile.",
    countsNote: "I conteggi attesi sono p²N, 2pqN e q²N. Il test ha 1 grado di libertà: 3 classi genotipiche meno 1, meno 1 per la frequenza allelica stimata.",
  },
};

export default it;
