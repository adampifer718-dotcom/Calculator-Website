import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DnaConcentrationText } from "../text/en";

const it: CalculatorTranslation<DnaConcentrationText> = {
  content: {
    title: "Calcolatore della concentrazione di DNA e RNA",
    shortTitle: "Concentrazione di DNA",
    summary:
      "Trasforma una lettura di assorbanza A260 in una concentrazione di DNA o RNA in ng/µL, con la resa totale e i rapporti A260/A280 e A260/A230.",
    metaTitle: "Concentrazione di DNA e RNA – Da A260 a ng/µL",
    metaDescription:
      "Converti le letture A260 in concentrazione di DNA o RNA in ng/µL con i fattori 50, 33 e 40 µg/mL, con diluizione, resa totale e rapporti di purezza.",
    keywords: [
      "concentrazione DNA",
      "concentrazione RNA",
      "A260",
      "quantificazione acidi nucleici",
      "rapporto 260/280",
      "rapporto 260/230",
      "spettrofotometro",
      "ng/µL",
    ],
    intro: [
      "Gli acidi nucleici assorbono la luce ultravioletta soprattutto intorno a 260 nm. Entro l'intervallo lineare di uno spettrofotometro, l'assorbanza A260 è proporzionale alla concentrazione, quindi una sola lettura e un fattore di conversione danno la quantità di DNA o RNA in un campione.",
      "I fattori standard sono 50 µg/mL per unità di A260 per il DNA a doppio filamento, 33 per il DNA a singolo filamento e 40 per l'RNA, con un cammino ottico di 1 cm. Questo calcolatore applica il fattore, la diluizione e il cammino ottico, e aggiunge la resa totale e i rapporti di purezza A260/A280 e A260/A230.",
    ],
    howToUse: [
      "Scegli il tipo di campione, oppure inserisci un tuo fattore di conversione (ad esempio uno calcolato per un oligonucleotide corto).",
      "Inserisci la lettura A260 corretta per il bianco e il cammino ottico della cuvetta o dello strumento.",
      "Inserisci il fattore di diluizione se hai diluito il campione prima di misurarlo.",
      "Se vuoi, aggiungi A280, A230 e il volume della soluzione madre per ottenere i rapporti di purezza e la quantità totale di acido nucleico.",
    ],
    formulas: [
      {
        title: "Concentrazione",
        expression: "c (ng/µL) = A260 ÷ cammino ottico (cm) × fattore × fattore di diluizione",
        explanation:
          "Il fattore è 50 per il dsDNA, 33 per l'ssDNA e 40 per l'RNA, in µg/mL per unità di assorbanza a 1 cm. 1 µg/mL equivale a 1 ng/µL.",
      },
      {
        title: "Resa totale",
        expression: "quantità (µg) = c (ng/µL) × volume (µL) ÷ 1000",
        explanation: "La concentrazione della soluzione madre non diluita per il suo volume.",
      },
      {
        title: "Rapporti di purezza",
        expression: "A260/A280 e A260/A230",
        explanation:
          "Per A260/A280 si citano comunemente circa 1,8 (DNA) e 2,0 (RNA), e per A260/A230 2,0–2,2. Sono regole empiriche, non limiti rigidi.",
      },
    ],
    examples: [
      {
        title: "DNA plasmidico diluito in una cuvetta da 1 cm",
        steps: [
          "0,65 ÷ 1 cm × 50 µg/mL × 10 = 325 µg/mL = 325 ng/µL",
          "In 50 µL: 325 × 50 ÷ 1000 = 16,25 µg",
          "A260/A280 = 0,65 ÷ 0,36 ≈ 1,81",
        ],
      },
      {
        title: "Un campione di RNA diluito 1 a 20",
        steps: [
          "0,42 × 40 µg/mL × 20 = 336 ng/µL",
          "A260/A280 = 0,42 ÷ 0,21 = 2,00",
          "A260/A230 = 0,42 ÷ 0,20 = 2,10",
          "In 30 µL: 336 × 30 ÷ 1000 = 10,08 µg",
        ],
      },
      {
        title: "DNA a singolo filamento in una cuvetta da 2 mm",
        steps: ["Normalizza a 1 cm: 0,18 ÷ 0,2 = 0,9", "0,9 × 33 µg/mL × 1 = 29,7 ng/µL"],
      },
    ],
    assumptions: [
      "La lettura A260 è corretta per il bianco ed è entro l'intervallo lineare dello strumento.",
      "I fattori standard sono valori medi. L'assorbanza di un oligonucleotide corto dipende dalla sua sequenza di basi, quindi un fattore specifico per la sequenza (inserito come personalizzato) è più preciso.",
      "L'assorbanza conta tutti gli acidi nucleici e i nucleotidi liberi. RNA contaminante in un campione di DNA, o DNA in un campione di RNA, fa aumentare il risultato.",
      "I rapporti di purezza sono valori di riferimento citati comunemente, non soglie di accettazione. Variano con il pH e la forza ionica della soluzione e con il bianco usato.",
    ],
    faqs: [
      {
        question: "Perché ng/µL è uguale a µg/mL?",
        answer:
          "Entrambe le unità moltiplicano numeratore e denominatore per 1.000: un microgrammo è 1.000 nanogrammi e un millilitro è 1.000 microlitri. Quindi 325 µg/mL e 325 ng/µL descrivono la stessa concentrazione.",
      },
      {
        question: "Che cosa significa un rapporto A260/A280 basso?",
        answer:
          "Proteine e fenolo assorbono vicino a 280 nm, quindi un rapporto ben al di sotto di circa 1,8 per il DNA o 2,0 per l'RNA indica spesso contaminanti di questo tipo. Il rapporto non dice nulla sull'integrità dell'acido nucleico.",
      },
      {
        question: "Mi serve il cammino ottico?",
        answer:
          "Solo se non è 1 cm. I fattori presuppongono un cammino di 1 cm. Molti strumenti per microvolumi misurano su un cammino più corto ma riportano già l'assorbanza normalizzata a 1 cm; in quel caso lascia il valore predefinito di 1.",
      },
    ],
    sourcesUsedFor: [
      "La misura della concentrazione di acidi nucleici dall'assorbanza a 260 nm con fattori di conversione standard.",
      "I valori di purezza citati comunemente, circa 1,8 (DNA) e 2,0 (RNA) per A260/A280, e 2,0–2,2 per A260/A230.",
    ],
  },
  text: {
    type: "Tipo di campione",
    types: {
      dsDNA: "DNA a doppio filamento (50 µg/mL per A260)",
      ssDNA: "DNA a singolo filamento (33 µg/mL per A260)",
      rna: "RNA (40 µg/mL per A260)",
      custom: "Fattore di conversione personalizzato",
    },
    sampleNames: { dsDNA: "DNA", ssDNA: "DNA", rna: "RNA" },
    factor: "Fattore di conversione",
    factorHelp:
      "µg/mL di acido nucleico che danno un'assorbanza di 1,0 a 260 nm su 1 cm, ad es. un valore calcolato per un oligonucleotide specifico.",
    a260: "Assorbanza a 260 nm (A260)",
    a260Help: "La lettura corretta per il bianco del campione misurato (eventualmente diluito).",
    pathLength: "Cammino ottico",
    pathLengthHelp:
      "1 cm per una cuvetta standard. Molti strumenti per microvolumi riportano già valori normalizzati a 1 cm; in quel caso lascia 1.",
    dilution: "Fattore di diluizione",
    dilutionHelp:
      "Volume totale ÷ volume del campione. Per 5 µL di campione in 50 µL totali, inserisci 10. Inserisci 1 per un campione non diluito.",
    a280: "Assorbanza a 280 nm (A280)",
    a230: "Assorbanza a 230 nm (A230)",
    optionalHelp: "Facoltativo. Serve per un rapporto di purezza.",
    volume: "Volume del campione",
    volumeHelp: "Facoltativo. Volume della soluzione madre non diluita, per stimare la quantità totale che contiene.",
    result: "Concentrazione di acido nucleico",
    caption: "A260 ÷ cammino ottico × fattore di conversione × fattore di diluizione",
    ugPerMl: "Stessa concentrazione in µg/mL",
    factorUsed: "Fattore di conversione usato",
    a260Normalized: "A260 per 1 cm di cammino ottico",
    totalYield: "Quantità totale in {volume} µL",
    ratio280: "Rapporto A260/A280",
    ratio230: "Rapporto A260/A230",
    notes: {
      ratio280: {
        near: "Il rapporto A260/A280 di {ratio} è vicino al valore di circa {reference} citato comunemente per {sample} puro.",
        below:
          "Il rapporto A260/A280 di {ratio} è inferiore al valore di circa {reference} citato comunemente per {sample} puro. Rapporti più bassi possono indicare proteine, fenolo o altre sostanze che assorbono vicino a 280 nm.",
        above:
          "Il rapporto A260/A280 di {ratio} è superiore al valore di circa {reference} citato comunemente per {sample} puro. Valori leggermente più alti sono frequenti; per il DNA, la presenza di RNA nel campione può far salire il rapporto.",
      },
      ratio280Generic:
        "Come riferimento, per il DNA puro si citano comunemente valori di A260/A280 di circa 1,8 e per l'RNA puro di circa 2,0.",
      ratio230: "Il rapporto A260/A230 di {ratio} rientra nell'intervallo 2,0–2,2 citato comunemente per un acido nucleico puro, o lo supera.",
      ratio230Low:
        "Il rapporto A260/A230 di {ratio} è inferiore all'intervallo 2,0–2,2 citato comunemente per un acido nucleico puro. Valori più bassi possono indicare sali, fenolo, detergenti o altre sostanze che assorbono vicino a 230 nm.",
      range:
        "L'assorbanza per cm è fuori dall'intervallo di circa 0,1–1,0, dove le letture di uno spettrofotometro con cuvetta standard sono spesso meno affidabili. Controlla l'intervallo specificato per il tuo strumento e, se serve, diluisci o concentra il campione.",
      general:
        "L'assorbanza a 260 nm conta allo stesso modo tutti gli acidi nucleici e i nucleotidi liberi, quindi non distingue il DNA dall'RNA. Anche i rapporti di purezza dipendono dal pH e dal bianco usato.",
    },
  },
};

export default it;
