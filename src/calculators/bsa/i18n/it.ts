import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BsaText } from "../text/en";

const it: CalculatorTranslation<BsaText> = {
  content: {
    title: "Calcolatore della superficie corporea",
    shortTitle: "Superficie corporea",
    summary:
      "Stima la superficie corporea in m² da altezza e peso con la formula di Mosteller, confrontata con le formule di Du Bois, Haycock e Gehan-George.",
    metaTitle: "Calcolatore della superficie corporea – Mosteller e Du Bois",
    metaDescription:
      "Stima la superficie corporea (BSA) in m² e ft² da altezza e peso con la formula di Mosteller, affiancata da quelle di Du Bois, Haycock e Gehan-George.",
    keywords: [
      "superficie corporea",
      "calcolo BSA",
      "formula di Mosteller",
      "formula di Du Bois",
      "formula di Haycock",
      "Gehan George",
      "BSA m2",
    ],
    intro: [
      "La superficie corporea (BSA) è l'area totale della pelle, espressa in metri quadrati. In medicina si usa per rapportare alle dimensioni del corpo alcune misure, come l'indice cardiaco o la filtrazione renale. Misurarla direttamente non è pratico, quindi la si stima da altezza e peso.",
      "Questo calcolatore usa la formula di Mosteller come risultato principale perché è semplice e molto diffusa. Le formule di Du Bois, Haycock e Gehan-George sono mostrate accanto, così puoi vedere quanto differiscono le stime.",
    ],
    howToUse: [
      "Inserisci il peso e scegli chilogrammi o libbre.",
      "Inserisci l'altezza e scegli centimetri o pollici.",
      "Leggi la stima di Mosteller in m² e ft² e confronta le quattro formule nella tabella.",
    ],
    formulas: [
      {
        title: "Mosteller",
        expression: "BSA = √(altezza × peso ÷ 3600)",
        explanation: "Altezza in cm, peso in kg, risultato in m².",
      },
      {
        title: "Du Bois e Du Bois",
        expression: "BSA = 0,007184 × peso^0,425 × altezza^0,725",
        explanation: "La più antica delle quattro, ricavata nel 1916 su un piccolo gruppo di persone.",
      },
      {
        title: "Haycock",
        expression: "BSA = 0,024265 × peso^0,5378 × altezza^0,3964",
        explanation: "Ricavata da misure su persone dall'età neonatale all'età adulta.",
      },
      {
        title: "Gehan e George",
        expression: "BSA = 0,0235 × peso^0,51456 × altezza^0,42246",
        explanation: "Ricavata su un gruppo più ampio di 401 persone.",
      },
      {
        title: "Piedi quadrati",
        expression: "ft² = m² ÷ 0,09290304",
        explanation: "1 ft = 0,3048 m esatti, quindi 1 ft² = 0,09290304 m².",
      },
    ],
    examples: [
      {
        title: "70 kg, 175 cm",
        steps: [
          "Mosteller: √(175 × 70 ÷ 3600) = √3,4028 ≈ 1,84 m²",
          "Du Bois ≈ 1,848 m², Haycock ≈ 1,847 m², Gehan-George ≈ 1,854 m²",
          "1,8447 m² ÷ 0,09290304 ≈ 19,86 ft²",
        ],
      },
      {
        title: "82 kg, 168 cm",
        steps: [
          "Mosteller: √(168 × 82 ÷ 3600) = √3,8267 ≈ 1,96 m²",
          "Du Bois dà circa 1,919 m², il valore più basso dei quattro",
          "Haycock dà circa 1,979 m², il più alto",
        ],
      },
      {
        title: "165 lb, 64 in",
        steps: [
          "165 lb × 0,45359237 = 74,84 kg; 64 in × 2,54 = 162,56 cm",
          "Mosteller: √(162,56 × 74,84 ÷ 3600) ≈ 1,84 m²",
          "Du Bois ≈ 1,802 m², Haycock ≈ 1,859 m²",
        ],
      },
    ],
    assumptions: [
      "Il risultato è una stima, non un consiglio medico, e questo calcolatore non è ancora stato verificato da professionisti. Non usarlo mai per calcolare la dose di un farmaco senza la conferma di un medico qualificato.",
      "Tutte e quattro le formule sono adattamenti statistici a gruppi di persone misurate decenni fa. Possono differire tra loro e dalla superficie reale di una persona di diversi punti percentuali, soprattutto per persone molto piccole, molto alte o molto pesanti.",
      "Sono accettati pesi da 0,5 a 500 kg e altezze da 30 a 260 cm. Gli ospedali possono usare una formula diversa, o un peso corretto, per i bambini o per le persone con obesità.",
      "Le libbre sono convertite con 1 lb = 0,45359237 kg e i pollici con 1 in = 2,54 cm, entrambi valori esatti.",
    ],
    faqs: [
      {
        question: "Qual è una superficie corporea tipica?",
        answer:
          "Negli adulti è di solito compresa tra circa 1,6 e 2,2 m², a seconda di altezza e peso. I valori dei bambini sono molto più piccoli, e a quelle dimensioni le formule differiscono di più.",
      },
      {
        question: "Quale formula dovrei usare?",
        answer:
          "Mosteller è la più comune perché è facile da calcolare e concorda bene con le altre per la maggior parte degli adulti. Ambulatori e protocolli spesso indicano una formula specifica, quindi usa quella adottata dalla tua équipe di cura.",
      },
      {
        question: "Perché le formule danno risultati diversi?",
        answer:
          "Ciascuna è stata ricavata su un gruppo di persone diverso con un metodo diverso di misurare la superficie della pelle. Le differenze sono di solito piccole per gli adulti di corporatura media e maggiori per chi è fuori dall'intervallo su cui sono state costruite.",
      },
    ],
    sourcesUsedFor: [
      "La formula di Mosteller BSA = √(altezza in cm × peso in kg ÷ 3600).",
      "Le costanti di Du Bois 0,007184 × peso^0,425 × altezza^0,725.",
      "La formula di Haycock 0,024265 × peso^0,5378 × altezza^0,3964.",
      "La formula di Gehan-George 0,0235 × peso^0,51456 × altezza^0,42246.",
    ],
  },
  text: {
    weight: "Peso",
    weightUnit: "Unità di peso",
    weightUnits: { kg: "Chilogrammi (kg)", lb: "Libbre (lb)" },
    height: "Altezza",
    heightUnit: "Unità di altezza",
    heightUnits: { cm: "Centimetri (cm)", in: "Pollici (in)" },
    errors: {
      weightRange: "Inserisci un peso tra {min} e {max}.",
      heightRange: "Inserisci un'altezza tra {min} e {max}.",
    },
    bsa: "Superficie corporea (Mosteller)",
    caption: "√({height} cm × {weight} kg ÷ 3600).",
    bsaFt: "Superficie corporea (Mosteller) in piedi quadrati",
    spread: "Differenza tra le quattro formule",
    table: {
      caption: "Superficie corporea per formula",
      formula: "Formula",
      m2: "m²",
      ft2: "ft²",
    },
    formulas: {
      mosteller: "Mosteller (1987)",
      duBois: "Du Bois e Du Bois (1916)",
      haycock: "Haycock et al. (1978)",
      gehanGeorge: "Gehan e George (1970)",
    },
    notes: {
      estimate:
        "Ogni formula è una stima ricavata su un gruppo limitato di persone; le formule possono differire tra loro e da una superficie misurata di diversi punti percentuali, soprattutto agli estremi delle dimensioni corporee.",
      dosing:
        "Non usare questo risultato per calcolare la dose di un farmaco. Le dosi basate sulla superficie corporea devono essere calcolate e verificate da un medico qualificato.",
    },
  },
};

export default it;
