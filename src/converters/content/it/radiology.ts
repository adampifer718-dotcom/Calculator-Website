import type { ConverterContent } from "../../types";

const NOT_ADVICE =
  "Questo convertitore cambia solo le unità. Non è un consiglio medico né di radioprotezione; per limiti di dose, valutazione dell'esposizione o questioni di trattamento segui le indicazioni dell'esperto di radioprotezione, del medico o dell'autorità competente.";

/** Radiology converters in this language, keyed by converter id. */
export const radiologyContent: Record<string, ConverterContent> = {
  radiation: {
    title: "Convertitore di dose equivalente di radiazioni",
    shortTitle: "Dose equivalente",
    summary: "Converti la dose equivalente di radiazioni tra sievert, millisievert, microsievert, rem e millirem.",
    metaTitle: "Dose equivalente di radiazioni – Sv, mSv, µSv, rem, mrem",
    metaDescription: "Converti la dose equivalente e la dose efficace tra sievert, millisievert, microsievert, rem e millirem con il valore esatto 1 rem = 0,01 Sv.",
    keywords: ["sievert", "rem", "msv in mrem", "mrem in msv", "microsievert", "dose equivalente", "dose efficace", "dose di radiazioni"],
    intro: [
      "La dose equivalente e la dose efficace descrivono l'effetto biologico delle radiazioni ionizzanti sul corpo. I dosimetri personali, i referti di diagnostica per immagini e le mappe della radiazione di fondo le indicano in millisievert o microsievert, mentre alcune normative statunitensi usano ancora rem e millirem.",
      "Il sievert è l'unità SI e il rem è la sua controparte più vecchia: 1 rem vale esattamente 0,01 Sv, quindi 1 mSv corrisponde a 100 mrem.",
    ],
    formula: {
      expression: "Sv = rem × 0,01    mSv = mrem ÷ 100",
      explanation: "Il rem è stato definito come un centesimo di sievert, quindi ogni conversione è un rapporto esatto per potenze di dieci.",
    },
    assumptions: [
      NOT_ADVICE,
      "Sievert e gray sono grandezze diverse: i sievert includono fattori di ponderazione per il tipo di radiazione e il tessuto, i gray no. Per gray e rad usa il convertitore di dose assorbita.",
      "I ratei di dose (per esempio µSv/h) si convertono allo stesso modo, purché entrambi i lati usino la stessa unità di tempo.",
    ],
    faqs: [
      { question: "Quanti millirem sono 1 millisievert?", answer: "1 mSv vale esattamente 100 mrem, e 1 mrem vale 0,01 mSv (10 µSv)." },
      { question: "Quanti rem ci sono in un sievert?", answer: "1 Sv vale esattamente 100 rem." },
      { question: "Posso convertire i sievert in gray?", answer: "Non con un fattore fisso. I sievert pesano la dose assorbita in gray in base al tipo di radiazione e al tessuto esposto, quindi il rapporto dipende dalla situazione." },
    ],
    units: {
      sv: "Sievert",
      csv: "Centisievert",
      msv: "Millisievert",
      usv: "Microsievert",
      nsv: "Nanosievert",
      rem: "Rem",
      mrem: "Millirem",
      urem: "Microrem",
    },
    sourcesUsedFor: ["Fattore di conversione dal rem al sievert.", "Definizione del sievert."],
  },
  "radiation-activity": {
    title: "Convertitore di radioattività",
    shortTitle: "Radioattività",
    summary: "Converti l'attività di una sorgente radioattiva tra becquerel, curie, rutherford e disintegrazioni al secondo o al minuto.",
    metaTitle: "Convertitore di radioattività – Bq, MBq, GBq, Ci, mCi",
    metaDescription: "Converti la radioattività tra becquerel, kilo-, mega- e gigabecquerel, curie, millicurie, microcurie, picocurie e disintegrazioni al minuto.",
    keywords: ["becquerel", "curie", "mci in mbq", "mbq in mci", "picocurie", "radioattività", "attività", "disintegrazioni al minuto"],
    intro: [
      "L'attività indica quanti atomi di un campione radioattivo decadono ogni secondo. Le dosi di medicina nucleare si prescrivono in megabecquerel o millicurie, il radon nelle abitazioni si riporta in becquerel o picocurie per litro e i contatori di laboratorio mostrano spesso le disintegrazioni al minuto.",
      "Un becquerel è un decadimento al secondo. Il curie, basato sull'attività di un grammo di radio, è fissato esattamente a 37 miliardi di becquerel.",
    ],
    formula: {
      expression: "Bq = Ci × 3,7 × 10¹⁰    1 mCi = 37 MBq",
      explanation: "Il curie è definito come esattamente 3,7 × 10¹⁰ Bq, e 1 dpm è un decadimento al minuto, cioè 1/60 Bq.",
    },
    assumptions: [
      NOT_ADVICE,
      "L'attività misura i decadimenti, non la dose: la stessa attività può dare dosi molto diverse a seconda del nuclide, della distanza, della schermatura e del tempo.",
      "Le concentrazioni come Bq/m³ o pCi/L si convertono allo stesso modo, purché entrambi i lati usino la stessa unità di volume.",
    ],
    faqs: [
      { question: "Quanti megabecquerel ci sono in un millicurie?", answer: "1 mCi vale esattamente 37 MBq; 1 MBq corrisponde a circa 0,027 mCi (27,03 µCi)." },
      { question: "Come converto pCi/L in Bq/m³?", answer: "1 pCi vale 0,037 Bq e 1 m³ contiene 1.000 L, quindi 1 pCi/L corrisponde a 37 Bq/m³. Il livello d'intervento statunitense per il radon di 4 pCi/L corrisponde a 148 Bq/m³." },
      { question: "Che differenza c'è tra dps e dpm?", answer: "Le disintegrazioni al secondo coincidono con i becquerel; le disintegrazioni al minuto sono 60 volte più piccole, quindi 1 Bq = 60 dpm." },
    ],
    units: {
      bq: "Becquerel",
      kbq: "Kilobecquerel",
      mbq: "Megabecquerel",
      gbq: "Gigabecquerel",
      tbq: "Terabecquerel",
      pbq: "Petabecquerel",
      kci: "Kilocurie",
      ci: "Curie",
      mci: "Millicurie",
      uci: "Microcurie",
      nci: "Nanocurie",
      pci: "Picocurie",
      rd: "Rutherford",
      dps: "Disintegrazioni al secondo",
      dpm: "Disintegrazioni al minuto",
    },
    sourcesUsedFor: ["Fattore di conversione dal curie al becquerel.", "Definizione del becquerel."],
  },
  "radiation-exposure": {
    title: "Convertitore di esposizione alle radiazioni",
    shortTitle: "Esposizione alle radiazioni",
    summary: "Converti l'esposizione a raggi X e gamma tra roentgen, milliroentgen e coulomb per chilogrammo.",
    metaTitle: "Esposizione alle radiazioni – R, mR, µR, C/kg",
    metaDescription: "Converti l'esposizione alle radiazioni tra roentgen, milliroentgen, microroentgen e coulomb per chilogrammo con il valore esatto 1 R = 2,58 × 10⁻⁴ C/kg.",
    keywords: ["roentgen", "milliroentgen", "coulomb per chilogrammo", "r in c/kg", "esposizione alle radiazioni", "rivelatore portatile", "mr/h"],
    intro: [
      "L'esposizione misura quanto intensamente i raggi X o gamma ionizzano l'aria: la carica elettrica che liberano in ogni chilogrammo d'aria. I vecchi rivelatori portatili e gli strumenti della protezione civile leggono in roentgen o milliroentgen all'ora.",
      "Il SI esprime l'esposizione in coulomb per chilogrammo. Il roentgen è fissato esattamente a 2,58 × 10⁻⁴ C/kg.",
    ],
    formula: {
      expression: "C/kg = R × 2,58 × 10⁻⁴",
      explanation: "Un roentgen è l'esposizione che libera 2,58 × 10⁻⁴ coulomb di carica per chilogrammo di aria secca.",
    },
    assumptions: [
      NOT_ADVICE,
      "L'esposizione è definita solo per raggi X e gamma in aria. Non è una dose assorbita né una dose equivalente, e la sua conversione in gray o sievert dipende dall'energia della radiazione e dal materiale.",
      "I ratei di esposizione (per esempio mR/h) si convertono allo stesso modo, purché entrambi i lati usino la stessa unità di tempo.",
    ],
    faqs: [
      { question: "Quanti coulomb per chilogrammo sono un roentgen?", answer: "Esattamente 2,58 × 10⁻⁴ C/kg, cioè 258 µC/kg. Un milliroentgen vale 0,258 µC/kg." },
      { question: "Quanti roentgen ci sono in 1 C/kg?", answer: "Circa 3.876 R, perché 1 ÷ 0,000258 ≈ 3.875,97." },
      { question: "Il roentgen è uguale al rem o al rad?", answer: "No. Misurano grandezze diverse. Per i raggi gamma nei tessuti molli, 1 R dà all'incirca da 0,0087 a 0,0096 Gy, ed è per questo che alcune regole pratiche li considerano simili, ma non esiste una conversione fissa." },
    ],
    units: {
      c_kg: "Coulomb per chilogrammo",
      mc_kg: "Millicoulomb per chilogrammo",
      uc_kg: "Microcoulomb per chilogrammo",
      nc_kg: "Nanocoulomb per chilogrammo",
      kr: "Kiloroentgen",
      r: "Roentgen",
      mr: "Milliroentgen",
      ur: "Microroentgen",
    },
    sourcesUsedFor: ["Fattore di conversione dal roentgen ai coulomb per chilogrammo."],
  },
  "radiation-absorbed-dose": {
    title: "Convertitore di dose assorbita",
    shortTitle: "Dose assorbita",
    summary: "Converti la dose di radiazioni assorbita tra gray, centigray, milligray, rad e joule per chilogrammo.",
    metaTitle: "Convertitore di dose assorbita – Gy, cGy, mGy, rad",
    metaDescription: "Converti la dose di radiazioni assorbita tra gray, kilogray, centigray, milligray, rad, kilorad, erg per grammo e joule per chilogrammo.",
    keywords: ["gray", "rad", "gy in rad", "rad in gy", "centigray", "milligray", "dose assorbita", "kilogray"],
    intro: [
      "La dose assorbita è l'energia che le radiazioni ionizzanti depositano in ogni chilogrammo di materiale. I piani di radioterapia usano gray e centigray, gli indici di dose della TC i milligray, e la sterilizzazione di alimenti e dispositivi medici i kilogray.",
      "Un gray è un joule per chilogrammo. Il vecchio rad è esattamente un centesimo di gray, quindi 1 cGy equivale a 1 rad.",
    ],
    formula: {
      expression: "Gy = rad × 0,01    1 Gy = 1 J/kg",
      explanation: "Il rad è stato definito come 100 erg per grammo, cioè esattamente 0,01 J/kg.",
    },
    assumptions: [
      NOT_ADVICE,
      "I gray misurano solo l'energia depositata. Non sono sievert, che aggiungono la ponderazione per tipo di radiazione e tessuto; per sievert e rem usa il convertitore di dose equivalente di radiazioni.",
    ],
    faqs: [
      { question: "Quanti rad ci sono in un gray?", answer: "1 Gy vale esattamente 100 rad, e 1 rad vale 0,01 Gy (1 cGy)." },
      { question: "Perché i referti di radioterapia usano i centigray?", answer: "Poiché 1 cGy equivale a 1 rad, i centigray permettono ai centri di mantenere numeri familiari: una frazione da 2 Gy corrisponde a 200 cGy, cioè 200 rad." },
      { question: "Il gray è uguale al sievert?", answer: "Entrambi sono joule per chilogrammo, ma sono grandezze diverse. Un gray di radiazione alfa ha un effetto biologico molto maggiore di un gray di raggi X, e il sievert ne tiene conto." },
    ],
    units: {
      gy: "Gray",
      kgy: "Kilogray",
      cgy: "Centigray",
      mgy: "Milligray",
      ugy: "Microgray",
      j_kg: "Joule per chilogrammo",
      krad: "Kilorad",
      rad: "Rad",
      mrad: "Millirad",
      erg_g: "Erg per grammo",
    },
    sourcesUsedFor: ["Fattori di conversione del rad e dell'erg per grammo al gray.", "Definizione del gray."],
  },
};
