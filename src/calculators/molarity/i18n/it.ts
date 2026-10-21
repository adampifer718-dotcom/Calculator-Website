import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MolarityText } from "../text/en";

const it: CalculatorTranslation<MolarityText> = {
  content: {
    title: "Calcolatore di molarità",
    shortTitle: "Molarità",
    summary: "Calcola la concentrazione molare di una soluzione dalla massa del soluto, dalla massa molare e dal volume.",
    metaTitle: "Calcolatore di molarità – Concentrazione molare (mol/L)",
    metaDescription:
      "Calcola la molarità in mol/L dalla massa del soluto, dalla sua massa molare e dal volume della soluzione, con moli e millimolare.",
    keywords: ["molarità", "concentrazione molare", "mol/L", "moli", "soluzione", "chimica", "concentrazione"],
    intro: [
      "La molarità è il numero di moli di soluto per litro di soluzione. È il modo più comune di esprimere la concentrazione nei laboratori di chimica.",
      "Inserisci la massa che hai pesato, la massa molare del soluto e il volume finale della soluzione.",
    ],
    howToUse: [
      "Inserisci la massa del soluto in grammi.",
      "Inserisci la sua massa molare in g/mol.",
      "Inserisci il volume finale della soluzione e scegli litri o millilitri.",
      "Leggi la molarità e le moli di soluto.",
    ],
    formulas: [
      { title: "Moli", expression: "n = massa ÷ massa molare", explanation: "Ricava le moli dai grammi." },
      { title: "Molarità", expression: "M = n ÷ V", explanation: "V è il volume della soluzione in litri." },
    ],
    examples: [
      { title: "58,44 g di NaCl in 1 L", steps: ["n = 58,44 ÷ 58,44 = 1 mol", "M = 1 ÷ 1 = 1 mol/L"] },
      { title: "5 g di glucosio in 250 mL", steps: ["n = 5 ÷ 180,16 ≈ 0,02775 mol", "M = 0,02775 ÷ 0,25 ≈ 0,111 mol/L"] },
    ],
    assumptions: [
      "Il volume è quello finale della soluzione dopo che il soluto si è sciolto.",
      "La massa molare deve riferirsi alla forma esatta utilizzata, compresa l'eventuale acqua di idratazione.",
    ],
    faqs: [
      { question: "Che differenza c'è tra molarità e molalità?", answer: "La molarità è il numero di moli per litro di soluzione; la molalità è il numero di moli per chilogrammo di solvente." },
      { question: "Come preparo una soluzione 1 M?", answer: "Sciogli una quantità di soluto pari alla sua massa molare in grammi e aggiungi solvente fino a un volume totale di 1 litro." },
      { question: "Che cosa significa mM?", answer: "Millimolare: un millesimo di mole per litro." },
    ],
    sourcesUsedFor: ["Definizione di molarità e relazione tra massa e moli."],
  },
  text: {
    mass: "Massa del soluto",
    molarMass: "Massa molare",
    molarMassHelp: "Dalla tavola periodica, ad es. NaCl = 58,44 g/mol.",
    volume: "Volume della soluzione",
    volumeUnit: "Unità di volume",
    volumeUnits: { L: "Litri (L)", mL: "Millilitri (mL)" },
    molarity: "Molarità",
    amount: "Quantità di soluto",
    millimolar: "In millimolare",
    note: "Il volume è quello finale della soluzione, non il volume di solvente aggiunto.",
  },
};

export default it;
