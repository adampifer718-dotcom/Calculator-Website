import type { ConverterContent } from "../../types";

const CGS_NOTE =
  "Le unità CGS (gilbert, oersted, maxwell, gauss) sono convertite con le loro corrispondenze di definizione con le unità SI, che contengono 4π dove il sistema CGS non è razionalizzato.";

/** Magnetism converters in this language, keyed by converter id. */
export const magnetismContent: Record<string, ConverterContent> = {
  "magnetomotive-force": {
    title: "Convertitore di forza magnetomotrice",
    shortTitle: "Forza magnetomotrice",
    summary: "Converti la forza magnetomotrice tra amperspire, ampere, gilbert e abamperspire.",
    metaTitle: "Convertitore di forza magnetomotrice – At, A, Gb",
    metaDescription: "Converti la forza magnetomotrice tra amperspire, ampere, kiloamperspire, gilbert e abamperspire per bobine, elettromagneti e circuiti magnetici.",
    keywords: ["forza magnetomotrice", "amperspire", "gilbert", "fmm", "gilbert in amperspire", "circuito magnetico", "bobina"],
    intro: [
      "La forza magnetomotrice (fmm) è ciò che spinge il flusso magnetico lungo un circuito magnetico, così come la tensione spinge la corrente. In una bobina è semplicemente la corrente per il numero di spire, quindi una bobina da 200 spire percorsa da 2 A fornisce 400 amperspire.",
      "Testi meno recenti e alcuni dati sui magneti usano l'unità CGS gilbert. Un gilbert vale 10/(4π), circa 0,796, amperspire.",
    ],
    formula: {
      expression: "F = N × I\n1 Gb = 10 ÷ (4π) At ≈ 0,795775 At",
      explanation: "N è il numero di spire e I la corrente; le spire non hanno unità, quindi l'unità SI della fmm è l'ampere.",
    },
    assumptions: [
      "Amperspire e ampere sono la stessa unità SI; il nome amperspira ricorda solo che si sono contate le spire.",
      CGS_NOTE,
    ],
    faqs: [
      { question: "Quante amperspire sono un gilbert?", answer: "Circa 0,795775 At. Nel senso opposto, 1 At vale circa 1,256637 Gb (4π/10)." },
      { question: "Qual è la fmm di una bobina?", answer: "Moltiplica la corrente per il numero di spire. 500 spire percorse da 0,3 A danno 150 amperspire." },
      { question: "Che relazione c'è tra forza magnetomotrice e intensità del campo?", answer: "L'intensità del campo H è la fmm per unità di lunghezza del percorso magnetico, quindi 150 At distribuite su 0,1 m di nucleo danno 1.500 A/m." },
    ],
    units: {
      a: "Ampere",
      ma: "Milliampere",
      ka: "Kiloampere",
      at: "Amperspire",
      mat: "Milliamperspire",
      kat: "Kiloamperspire",
      gilbert: "Gilbert",
      abat: "Abamperspire",
    },
    sourcesUsedFor: ["Fattori di conversione per il gilbert e l'abampere.", "L'ampere come unità SI della forza magnetomotrice."],
  },
  "magnetic-field-strength": {
    title: "Convertitore di intensità del campo magnetico",
    shortTitle: "Intensità del campo magnetico",
    summary: "Converti l'intensità del campo magnetico (H) tra ampere al metro, amperspire per pollice o per centimetro e oersted.",
    metaTitle: "Convertitore di intensità del campo magnetico – A/m, Oe, kOe",
    metaDescription: "Converti l'intensità del campo magnetico H tra A/m, kA/m, A/cm, amperspire per pollice, oersted e kilo-oersted. Gauss e tesla sono in un altro convertitore.",
    keywords: ["intensità del campo magnetico", "oersted in a/m", "a/m in oersted", "koe in ka/m", "campo h", "coercività", "amperspire per pollice"],
    intro: [
      "L'intensità del campo magnetico, indicata con H, descrive l'effetto magnetizzante delle correnti. È ciò che una bobina produce per metro della sua lunghezza, ed è il modo in cui i produttori di magneti indicano la coercività, per esempio un magnete al neodimio con circa 950 kA/m (circa 12 kOe).",
      "L'unità SI è l'ampere al metro. L'unità CGS è l'oersted, e 1 Oe vale 1000/(4π), circa 79,58, A/m.",
    ],
    formula: {
      expression: "H = N × I ÷ l\n1 Oe = 1000 ÷ (4π) A/m ≈ 79,5775 A/m",
      explanation: "N × I sono le amperspire della bobina e l è la lunghezza del percorso magnetico in metri.",
    },
    assumptions: [
      "H (intensità del campo) e B (densità di flusso) sono grandezze diverse, quindi gauss e tesla non sono disponibili qui. Nel vuoto, e solo lì, a 1 Oe di H corrisponde 1 G di B in unità CGS, ed è per questo che i due vengono spesso confusi; nel ferro o in un magnete il rapporto B/H dipende dal materiale.",
      CGS_NOTE,
    ],
    faqs: [
      { question: "Quanti A/m sono un oersted?", answer: "Circa 79,5775 A/m. Nel senso opposto, 1 kA/m vale circa 12,566 Oe (4π)." },
      { question: "Un oersted è uguale a un gauss?", answer: "No. L'oersted misura l'intensità del campo H e il gauss la densità di flusso B. Solo nel vuoto (e, con buona approssimazione, in aria) un campo di 1 Oe produce una densità di flusso di 1 G in unità CGS. Usa il convertitore di densità di flusso magnetico per gauss e tesla." },
      { question: "Come converto i kOe in kA/m per la coercività di un magnete?", answer: "Moltiplica per circa 79,58. Una coercività di 12 kOe corrisponde a circa 955 kA/m." },
    ],
    units: {
      a_m: "Ampere al metro",
      ma_m: "Milliampere al metro",
      ka_m: "Kiloampere al metro",
      a_cm: "Ampere al centimetro",
      a_mm: "Ampere al millimetro",
      at_m: "Amperspire al metro",
      at_cm: "Amperspire al centimetro",
      at_in: "Amperspire per pollice",
      oe: "Oersted",
      koe: "Kilo-oersted",
      moe: "Milli-oersted",
      gb_cm: "Gilbert al centimetro",
    },
    sourcesUsedFor: ["Fattore di conversione per l'oersted.", "L'ampere al metro come unità SI dell'intensità del campo magnetico."],
  },
  "magnetic-flux": {
    title: "Convertitore di flusso magnetico",
    shortTitle: "Flusso magnetico",
    summary: "Converti il flusso magnetico tra weber, milliweber, microweber, volt-secondi, maxwell e linee.",
    metaTitle: "Convertitore di flusso magnetico – Wb, mWb, µWb, Mx",
    metaDescription: "Converti il flusso magnetico tra weber, milliweber, microweber, nanoweber, volt-secondi, tesla metro quadrato, maxwell, kilomaxwell e linee.",
    keywords: ["flusso magnetico", "weber", "maxwell", "weber in maxwell", "volt secondo", "flusso concatenato", "flussometro"],
    intro: [
      "Il flusso magnetico è la quantità totale di campo magnetico che attraversa una superficie: la densità di flusso per l'area. È ciò che misurano un flussometro e una bobina esploratrice, ed è ciò che varia quando un trasformatore o un generatore induce una tensione.",
      "L'unità SI è il weber, pari a un volt-secondo. L'unità CGS è il maxwell, detto anche linea, e 1 Wb vale esattamente 100.000.000 Mx.",
    ],
    formula: {
      expression: "Φ = B × A\n1 Wb = 1 V·s = 1 T·m² = 10⁸ Mx",
      explanation: "B è la densità di flusso in tesla e A l'area in metri quadrati, per un campo perpendicolare alla superficie.",
    },
    assumptions: [
      "I valori sono flussi attraverso una superficie, non densità di flusso; per convertire tesla o gauss usa il convertitore di densità di flusso magnetico.",
      "1 maxwell = 10⁻⁸ Wb esatti per definizione delle unità CGS e SI; una linea equivale a un maxwell.",
    ],
    faqs: [
      { question: "Quanti maxwell ci sono in un weber?", answer: "Esattamente 100.000.000 (10⁸). Un maxwell vale 10 nWb." },
      { question: "Perché un weber è uguale a un volt-secondo?", answer: "Per la legge di Faraday, un flusso che varia di 1 Wb ogni secondo attraverso una singola spira induce 1 V." },
      { question: "Come ottengo il flusso dalla densità di flusso?", answer: "Moltiplica per l'area. Un campo di 0,5 T attraverso 20 cm² (0,002 m²) dà 1 mWb, ovvero 100.000 Mx." },
    ],
    units: {
      wb: "Weber",
      mwb: "Milliweber",
      uwb: "Microweber",
      nwb: "Nanoweber",
      v_s: "Volt-secondi",
      t_m2: "Tesla metro quadrato",
      mx: "Maxwell",
      kmx: "Kilomaxwell",
      g_cm2: "Gauss centimetro quadrato",
      line: "Linee",
    },
    sourcesUsedFor: ["Fattore di conversione per il maxwell.", "Il weber come unità SI del flusso magnetico."],
  },
  "magnetic-flux-density": {
    title: "Convertitore di densità di flusso magnetico",
    shortTitle: "Densità di flusso magnetico",
    summary: "Converti la densità di flusso magnetico (B) tra tesla, millitesla, microtesla, gauss, milligauss, gamma e linee per pollice quadrato.",
    metaTitle: "Convertitore di densità di flusso magnetico – T, mT, G, mG",
    metaDescription: "Converti l'induzione magnetica B tra tesla, mT, µT, nT, gauss, kilogauss, milligauss, gamma e linee per pollice quadrato. Gli oersted si convertono a parte.",
    keywords: ["densità di flusso magnetico", "induzione magnetica", "tesla in gauss", "gauss in tesla", "milligauss", "microtesla", "campo magnetico", "gamma nT"],
    intro: [
      "La densità di flusso magnetico, o induzione magnetica, indicata con B, è ciò che di solito si intende per intensità di un campo magnetico. La leggono i gaussmetri e i magnetometri dei telefoni, le risonanze magnetiche sono classificate in base a essa (1,5 T o 3 T) e i misuratori di campi elettromagnetici la mostrano in milligauss o microtesla.",
      "L'unità SI è il tesla e l'unità CGS è il gauss: 1 T vale esattamente 10.000 G. Il campo terrestre in superficie è di circa 25–65 µT, ovvero 0,25–0,65 G.",
    ],
    formula: {
      expression: "1 T = 1 Wb/m² = 10.000 G\n1 G = 1 Mx/cm² = 100 µT",
      explanation: "La densità di flusso è il flusso magnetico per unità di area perpendicolare al campo.",
    },
    assumptions: [
      "B (densità di flusso) e H (intensità del campo) sono grandezze diverse, quindi oersted e A/m non sono disponibili qui. Solo nel vuoto, in unità CGS, 1 G di B corrisponde a 1 Oe di H; nei materiali magnetici il rapporto dipende dalla permeabilità del materiale.",
      "Il gamma (γ) usato in geofisica vale esattamente 1 nT.",
      CGS_NOTE,
    ],
    faqs: [
      { question: "Quanti gauss ci sono in un tesla?", answer: "Esattamente 10.000. Un gauss vale 100 µT e un milligauss 0,1 µT (100 nT)." },
      { question: "Quanto è intenso il campo magnetico terrestre?", answer: "Circa da 25 a 65 µT in superficie a seconda del luogo, cioè da 0,25 a 0,65 G." },
      { question: "Posso convertire i gauss in oersted?", answer: "In generale no, perché misurano grandezze diverse. Nel vuoto o in aria, in unità CGS, un campo di 1 Oe dà una densità di flusso di 1 G; nel ferro o in un magnete i valori differiscono. Usa il convertitore di intensità del campo magnetico per gli oersted." },
    ],
    units: {
      t: "Tesla",
      mt: "Millitesla",
      ut: "Microtesla",
      nt: "Nanotesla",
      wb_m2: "Weber per metro quadrato",
      gauss: "Gauss",
      kgauss: "Kilogauss",
      mgauss: "Milligauss",
      gamma: "Gamma",
      mx_cm2: "Maxwell per centimetro quadrato",
      line_in2: "Linee per pollice quadrato",
      kline_in2: "Kilolinee per pollice quadrato",
    },
    sourcesUsedFor: ["Fattori di conversione per gauss, gamma e maxwell.", "Il tesla come unità SI della densità di flusso magnetico."],
  },
};
