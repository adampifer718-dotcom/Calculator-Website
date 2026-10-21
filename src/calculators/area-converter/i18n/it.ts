import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AreaConverterText } from "../text/en";

const it: CalculatorTranslation<AreaConverterText> = {
  content: {
    title: "Convertitore di superficie",
    shortTitle: "Superficie",
    summary: "Converte tra metri quadrati, ettari, chilometri quadrati, piedi quadrati, iarde quadrate, acri, miglia quadrate e altro.",
    metaTitle: "Convertitore di superficie – Acri, ettari, m² e ft²",
    metaDescription:
      "Converti superfici tra metri quadrati, ettari, km², pollici, piedi e iarde quadrate, acri e miglia quadrate, con fattori di conversione esatti.",
    keywords: [
      "convertitore di superficie",
      "conversione area",
      "acri in ettari",
      "piedi quadrati in metri quadrati",
      "m2 in ft2",
      "ettaro",
      "acro",
      "miglia quadrate",
      "superficie di un terreno",
    ],
    intro: [
      "Converti una superficie da un'unità all'altra, sia che tu stia confrontando un terreno annunciato in acri con uno in ettari, sia che tu debba calcolare la superficie di una stanza in metri quadrati. La tabella mostra il tuo valore in tutte e dieci le unità contemporaneamente.",
      "Tutti i fattori sono esatti. Le unità quadrate sono il quadrato di un'unità di lunghezza, quindi un piede quadrato vale 0,3048 m × 0,3048 m = 0,09290304 m² e un acro corrisponde a 43.560 piedi quadrati.",
    ],
    howToUse: [
      "Inserisci la superficie da convertire.",
      "Scegli l'unità di partenza e quella di arrivo.",
      "Leggi il valore convertito o consulta la tabella per le altre unità.",
    ],
    formulas: [
      {
        title: "Conversione tramite il metro quadrato",
        expression: "risultato = valore × (m² per unità di partenza) ÷ (m² per unità di arrivo)",
        explanation: "Ogni unità equivale a un numero fisso di metri quadrati, quindi qualsiasi coppia si può convertire passando per il m².",
      },
      {
        title: "Fattori principali",
        expression:
          "1 ha = 10.000 m²\n1 ft² = 0,09290304 m²\n1 yd² = 9 ft² = 0,83612736 m²\n1 acro = 43.560 ft² = 4046,8564224 m²\n1 mi² = 640 acri = 2.589.988,110336 m²",
        explanation: "I valori imperiali derivano dal piede internazionale, pari esattamente a 0,3048 m.",
      },
    ],
    examples: [
      {
        title: "2,5 acri in ettari",
        steps: ["2,5 × 4046,8564224 m² = 10.117,141056 m²", "10.117,141056 ÷ 10.000 ≈ 1,0117 ha"],
      },
      {
        title: "1500 metri quadrati in piedi quadrati",
        steps: ["1 ft² = 0,09290304 m²", "1500 ÷ 0,09290304 ≈ 16.145,87 ft²"],
      },
      {
        title: "640 acri in miglia quadrate",
        steps: ["640 × 4046,8564224 m² = 2.589.988,110336 m²", "2.589.988,110336 ÷ 2.589.988,110336 = 1 mi²"],
      },
    ],
    assumptions: [
      "Acri e miglia quadrate usano il piede internazionale. Il vecchio acro topografico statunitense è più grande di circa 4 parti per milione, differenza che conta solo nei rilievi topografici di precisione.",
      "I risultati sono mostrati con 10 cifre significative.",
    ],
    faqs: [
      {
        question: "Quanti piedi quadrati ci sono in un acro?",
        answer: "Esattamente 43.560 piedi quadrati. Un terreno quadrato di un acro misura circa 208,7 piedi per lato.",
      },
      {
        question: "Un ettaro è più grande di un acro?",
        answer: "Sì. Un ettaro corrisponde a 10.000 m², circa 2,471 acri, quindi un acro vale circa 0,405 ettari.",
      },
      {
        question: "Perché un metro quadrato non vale 3,28 piedi quadrati?",
        answer: "Perché la superficie cresce con il quadrato della lunghezza. Un metro vale circa 3,2808 piedi, quindi un metro quadrato vale circa 3,2808² ≈ 10,764 piedi quadrati.",
      },
    ],
    sourcesUsedFor: [
      "Fattori di conversione in metri quadrati di acro, miglio quadrato, piede quadrato e altre unità di superficie.",
      "Definizioni dell'acro (43.560 ft²) e del miglio quadrato (640 acri).",
    ],
  },
  text: {
    value: "Valore",
    from: "Da",
    to: "A",
    unitNames: {
      mm2: "Millimetri quadrati",
      cm2: "Centimetri quadrati",
      m2: "Metri quadrati",
      ha: "Ettari",
      km2: "Chilometri quadrati",
      in2: "Pollici quadrati",
      ft2: "Piedi quadrati",
      yd2: "Iarde quadrate",
      acre: "Acri",
      mi2: "Miglia quadrate",
    },
    primary: "{value} {symbol} in {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} in tutte le unità di superficie",
    tableUnit: "Unità",
    tableValue: "Valore",
    note: "I risultati sono mostrati con 10 cifre significative.",
  },
};

export default it;
