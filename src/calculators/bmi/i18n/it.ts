import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BmiText } from "../text/en";

const it: CalculatorTranslation<BmiText> = {
  content: {
    title: "Calcolatore BMI",
    shortTitle: "BMI",
    summary: "Calcola l'indice di massa corporea dall'altezza e dal peso in unità metriche o imperiali.",
    metaTitle: "Calcolatore BMI – Indice di massa corporea per adulti",
    metaDescription:
      "Calcola il tuo indice di massa corporea (BMI) con altezza e peso in kg e cm o in libbre, piedi e pollici, con la categoria per adulti e il peso salutare.",
    keywords: ["calcolo bmi", "indice di massa corporea", "peso ideale", "sovrappeso", "obesità", "imc adulti"],
    intro: [
      "L'indice di massa corporea (BMI, o IMC) mette in relazione il peso con l'altezza. È una misura di screening rapida per adulti, non una diagnosi.",
      "Inserisci altezza e peso in unità metriche o imperiali per vedere il tuo BMI, la categoria per adulti e l'intervallo di peso che corrisponde a un BMI salutare per la tua altezza.",
    ],
    howToUse: [
      "Scegli unità metriche o imperiali.",
      "Inserisci il tuo peso e la tua altezza.",
      "Leggi il tuo BMI, la categoria e l'intervallo di peso salutare.",
    ],
    formulas: [
      { title: "BMI", expression: "BMI = peso (kg) ÷ altezza (m)²", explanation: "Le unità imperiali si convertono con 1 lb = 0,45359237 kg e 1 in = 2,54 cm." },
      {
        title: "Categorie per adulti",
        expression: "Meno di 18,5: sottopeso\n18,5–24,9: normopeso\n25–29,9: sovrappeso\n30 o più: obesità",
        explanation: "Categorie dell'Organizzazione Mondiale della Sanità per adulti.",
      },
    ],
    examples: [
      { title: "70 kg, 175 cm", steps: ["Altezza = 1,75 m", "BMI = 70 ÷ 1,75² ≈ 22,9: normopeso"] },
      { title: "180 lb, 5 ft 10 in", steps: ["180 lb = 81,65 kg; 70 in = 1,778 m", "BMI = 81,65 ÷ 1,778² ≈ 25,8: sovrappeso"] },
    ],
    assumptions: [
      "Per adulti dai 18 anni in su. Per bambini e adolescenti si usano percentili specifici per età e sesso.",
      "Il BMI non misura direttamente il grasso corporeo e può classificare in modo errato sportivi, anziani e donne in gravidanza.",
      "Questo non è un consiglio medico. Rivolgiti a un professionista sanitario per la tua salute.",
    ],
    faqs: [
      { question: "Qual è un BMI salutare?", answer: "Per la maggior parte degli adulti, tra 18,5 e 24,9." },
      {
        question: "Il BMI è affidabile?",
        answer: "È uno strumento di screening utile a livello di popolazione, ma non distingue i muscoli dal grasso né considera dove si accumula il grasso.",
      },
      {
        question: "Il BMI vale anche per i bambini?",
        answer: "Non con le categorie per adulti. Il BMI dei bambini si confronta con curve di crescita per età e sesso.",
      },
    ],
    sourcesUsedFor: ["Definizione del BMI negli adulti e soglie di ciascuna categoria.", "Fattori esatti di conversione di libbre e pollici."],
  },
  text: {
    units: "Unità",
    unitOptions: { metric: "Metriche (kg, cm)", imperial: "Imperiali (lb, ft, in)" },
    weight: "Peso",
    height: "Altezza",
    heightFt: "Altezza (piedi)",
    heightIn: "Altezza (pollici)",
    heightZero: "Inserisci un'altezza maggiore di 0.",
    primary: "Indice di massa corporea",
    caption: "{category} (intervallo per adulti).",
    category: "Categoria",
    categories: { under: "Sottopeso", healthy: "Normopeso", over: "Sovrappeso", obese: "Obesità" },
    healthyRange: "Peso salutare per questa altezza",
    range: "{low}–{high} {unit}",
    note: "Categorie per adulti: meno di 18,5 sottopeso; 18,5–24,9 normopeso; 25–29,9 sovrappeso; 30 o più obesità. Il BMI non si interpreta allo stesso modo nei bambini, in gravidanza o nelle persone molto muscolose.",
  },
};

export default it;
