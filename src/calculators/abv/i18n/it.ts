import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AbvText } from "../text/en";

const it: CalculatorTranslation<AbvText> = {
  content: {
    title: "Calcolatore del grado alcolico in volume (ABV)",
    shortTitle: "ABV dalla densità",
    summary:
      "Stima il contenuto alcolico di birra, vino o sidro fatti in casa dalla densità iniziale e finale, in peso specifico o in gradi Plato.",
    metaTitle: "Calcolatore ABV – Grado alcolico da OG e FG",
    metaDescription:
      "Stima l'ABV della tua birra fatta in casa da densità iniziale e finale (SG o °Plato) con la formula standard e quella alternativa, più ABW e attenuazione apparente.",
    keywords: [
      "calcolo ABV",
      "grado alcolico in volume",
      "densità iniziale",
      "densità finale",
      "birra fatta in casa",
      "densimetro birra",
      "gradi Plato",
      "attenuazione apparente",
    ],
    intro: [
      "Il lievito trasforma lo zucchero in alcol e anidride carbonica e, poiché l'alcol è più leggero dell'acqua, la densità di una birra, di un vino o di un sidro diminuisce durante la fermentazione. Chi produce birra, vino o sidro in casa misura questa densità con un densimetro o un rifrattometro prima e dopo la fermentazione: la densità iniziale (OG) e la densità finale (FG).",
      "Inserisci le due letture, in peso specifico o in gradi Plato, per stimare il grado alcolico in volume. Il calcolatore mostra la diffusa formula standard, una formula alternativa che molti birrai preferiscono per le birre forti, un grado alcolico in peso approssimativo e l'attenuazione apparente.",
    ],
    howToUse: [
      "Scegli se le tue letture sono in peso specifico (come 1,050) o in gradi Plato (come 12 °P).",
      "Inserisci la densità iniziale, misurata prima di aggiungere il lievito.",
      "Inserisci la densità finale, misurata a fermentazione terminata.",
      "Leggi l'ABV calcolato con la formula standard e confrontalo con quello della formula alternativa, riportato sotto.",
    ],
    formulas: [
      {
        title: "Formula standard",
        expression: "ABV = (OG − FG) × 131,25",
        explanation: "La stima più usata nella birrificazione casalinga. Con OG 1,050 e FG 1,010 dà 0,040 × 131,25 = 5,25%.",
      },
      {
        title: "Formula alternativa",
        expression: "ABV = 76,08 × (OG − FG) ÷ (1,775 − OG) × FG ÷ 0,794",
        explanation: "Attribuita a Ritchie Products (Zymurgy, 1995). Per le birre forti dà valori più alti della formula standard.",
      },
      {
        title: "Da Plato a peso specifico",
        expression: "SG = 1 + P ÷ (258,6 − (P ÷ 258,2) × 227,1)",
        explanation: "Si usa quando le letture sono in gradi Plato. 12 °P corrispondono a circa 1,0484.",
      },
      {
        title: "Grado alcolico in peso e attenuazione",
        expression: "ABW ≈ ABV × 0,789 ÷ FG;  attenuazione = (OG − FG) ÷ (OG − 1) × 100",
        explanation:
          "0,789 è la densità dell'etanolo rispetto all'acqua a 20 °C. L'attenuazione è apparente perché l'alcol abbassa la lettura del densimetro sotto l'estratto residuo reale.",
      },
    ],
    examples: [
      {
        title: "Una pale ale da 1,050 a 1,010",
        steps: ["Calo = 1,050 − 1,010 = 0,040", "ABV = 0,040 × 131,25 = 5,25%", "Attenuazione apparente = 0,040 ÷ 0,050 = 80%"],
      },
      {
        title: "Una strong ale da 1,092 a 1,021",
        steps: [
          "Standard: (1,092 − 1,021) × 131,25 ≈ 9,32%",
          "Alternativa: 76,08 × 0,071 ÷ (1,775 − 1,092) × 1,021 ÷ 0,794 ≈ 10,17%",
          "A questa gradazione le due formule differiscono di quasi un punto percentuale",
        ],
      },
      {
        title: "Una lager misurata in Plato: da 12 °P a 2,5 °P",
        steps: [
          "OG = 1 + 12 ÷ (258,6 − (12 ÷ 258,2) × 227,1) ≈ 1,04838",
          "FG = 1 + 2,5 ÷ (258,6 − (2,5 ÷ 258,2) × 227,1) ≈ 1,00975",
          "ABV = (1,04838 − 1,00975) × 131,25 ≈ 5,07%",
        ],
      },
    ],
    assumptions: [
      "Questa è solo una stima per la produzione casalinga. Non è adatta all'etichettatura legale o commerciale, che richiede un metodo di laboratorio tarato.",
      "Non viene applicata alcuna correzione della temperatura del densimetro. Correggi prima le tue letture alla temperatura di taratura del densimetro.",
      "Le letture sono considerate pesi specifici reali. Una lettura al rifrattometro presa dopo l'inizio della fermentazione è falsata dall'alcol e richiede una correzione a parte.",
      "Lo zucchero aggiunto all'imbottigliamento, o qualsiasi zucchero aggiunto dopo la misura della densità iniziale, non è considerato.",
    ],
    faqs: [
      {
        question: "Quale formula dovrei usare?",
        answer:
          "Per la maggior parte delle birre tra circa 1,040 e 1,060 le due danno risultati molto simili. Per le birre più forti divergono, e molti birrai preferiscono allora la formula alternativa. Nessuna delle due sostituisce una misura di laboratorio.",
      },
      {
        question: "Che differenza c'è tra ABV e ABW?",
        answer:
          "L'ABV è il volume di alcol in percentuale del volume della bevanda. L'ABW è il suo peso in percentuale del peso della bevanda. L'alcol è più leggero dell'acqua, quindi l'ABW è più basso, circa l'80% dell'ABV per una birra tipica.",
      },
      {
        question: "Che cos'è l'attenuazione apparente?",
        answer:
          "È la quota della densità iniziale sopra 1,000 che è scomparsa durante la fermentazione. Si dice apparente perché l'alcol è meno denso dell'acqua e fa risultare la lettura finale più bassa del contenuto reale di zuccheri residui.",
      },
    ],
    sourcesUsedFor: [
      "La formula standard ABV = (OG − FG) × 131,25, la formula alternativa 76,08 (OG − FG) ÷ (1,775 − OG) × FG ÷ 0,794 e l'esempio svolto con OG 1,092 e FG 1,021.",
      "La conversione SG = 1 + P ÷ (258,6 − (P ÷ 258,2) × 227,1).",
      "L'origine della formula alternativa (Ritchie Products, Zymurgy 1995).",
      "La conversione tra ABV e ABW con il peso specifico della bevanda e la densità dell'etanolo (circa 0,789).",
    ],
  },
  text: {
    scale: "Scala di densità",
    scales: { sg: "Peso specifico (SG)", plato: "Gradi Plato (°P)" },
    og: "Densità iniziale (OG)",
    ogHelp: "Il peso specifico prima della fermentazione, per esempio 1,050. Intervallo ammesso da 0,980 a 1,200.",
    fg: "Densità finale (FG)",
    fgHelp: "Il peso specifico dopo la fermentazione, per esempio 1,010.",
    ogPlato: "Estratto iniziale",
    ogPlatoHelp: "La densità iniziale in gradi Plato, per esempio 12.",
    fgPlato: "Estratto finale apparente",
    fgPlatoHelp: "La lettura finale del densimetro in gradi Plato, per esempio 2,5. Per birre molto secche può essere leggermente sotto 0.",
    errors: {
      fgAboveOg: "La densità finale non può essere più alta della densità iniziale.",
      sgRange: "Corrisponde a un peso specifico di {sg}, fuori dall'intervallo ammesso da 0,980 a 1,200.",
    },
    abv: "Grado alcolico in volume (formula standard)",
    caption: "OG {og} − FG {fg} = {drop} punti di densità.",
    abvAlt: "Grado alcolico in volume (formula alternativa)",
    abw: "Grado alcolico in peso (approssimativo)",
    attenuation: "Attenuazione apparente",
    ogSg: "Densità iniziale come SG",
    fgSg: "Densità finale come SG",
    notes: {
      estimate:
        "Questa è una stima per la produzione casalinga basata su letture del densimetro, non un valore per l'etichettatura legale. Non viene applicata alcuna correzione della temperatura del densimetro.",
      high: "Per i mosti molto densi le due formule danno risultati sensibilmente diversi. Molti birrai preferiscono la formula alternativa ad alte densità.",
      noAttenuation: "L'attenuazione apparente richiede una densità iniziale superiore a 1,000.",
    },
  },
};

export default it;
