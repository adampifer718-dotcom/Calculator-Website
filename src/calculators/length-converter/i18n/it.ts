import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LengthConverterText } from "../text/en";

const it: CalculatorTranslation<LengthConverterText> = {
  content: {
    title: "Convertitore di lunghezza",
    shortTitle: "Lunghezza",
    summary: "Converti tra millimetri, centimetri, metri, chilometri, pollici, piedi, iarde, miglia e miglia nautiche.",
    metaTitle: "Convertitore di lunghezza – Unità metriche e imperiali",
    metaDescription:
      "Converti lunghezze tra unità metriche e imperiali: mm, cm, m, km, pollici, piedi, iarde, miglia e miglia nautiche, con fattori di conversione esatti.",
    keywords: ["lunghezza", "distanza", "convertire", "km in miglia", "piedi in metri", "pollici in cm", "convertitore di unità"],
    intro: [
      "Converti qualsiasi lunghezza tra nove unità comuni. La tabella mostra il tuo valore in tutte le unità contemporaneamente.",
      "Tutti i fattori sono esatti per definizione: un pollice è esattamente 2,54 cm e un miglio è esattamente 1.609,344 m.",
    ],
    howToUse: [
      "Inserisci il valore.",
      "Scegli l'unità di partenza e quella di destinazione.",
      "Leggi il risultato, oppure usa la tabella per vedere tutte le unità.",
    ],
    formulas: [
      { title: "Conversione tramite i metri", expression: "risultato = valore × (metri per unità di partenza) ÷ (metri per unità di destinazione)", explanation: "Ogni unità è definita come un numero fisso di metri." },
      { title: "Fattori principali", expression: "1 in = 0,0254 m\n1 ft = 0,3048 m\n1 yd = 0,9144 m\n1 mi = 1.609,344 m\n1 nmi = 1.852 m", explanation: "Valori esatti dall'accordo internazionale del 1959 su iarda e libbra e dal SI." },
    ],
    examples: [
      { title: "10 chilometri in miglia", steps: ["10 × 1.000 m = 10.000 m", "10.000 ÷ 1.609,344 ≈ 6,2137 mi"] },
      { title: "6 piedi in metri", steps: ["6 × 0,3048", "= 1,8288 m"] },
    ],
    assumptions: [
      "Usa le unità internazionali: il piede topografico USA (US survey foot), che differisce di circa 2 parti per milione, non è incluso.",
      "I risultati sono mostrati con 10 cifre significative.",
    ],
    faqs: [
      { question: "Quanti piedi ci sono in un miglio?", answer: "Esattamente 5.280 piedi." },
      { question: "Come converto i pollici in centimetri?", answer: "Moltiplica per 2,54. Ad esempio, 12 in × 2,54 = 30,48 cm." },
      { question: "Che cos'è un miglio nautico?", answer: "Un'unità usata in mare e in aviazione, definita esattamente come 1.852 metri." },
    ],
    sourcesUsedFor: ["Definizioni esatte in metri di pollice, piede, iarda, miglio e miglio nautico."],
  },
  text: {
    value: "Valore",
    from: "Da",
    to: "A",
    unitNames: {
      mm: "Millimetri",
      cm: "Centimetri",
      m: "Metri",
      km: "Chilometri",
      in: "Pollici",
      ft: "Piedi",
      yd: "Iarde",
      mi: "Miglia",
      nmi: "Miglia nautiche",
    },
    primary: "{value} {symbol} in {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} in tutte le unità di lunghezza",
    tableUnit: "Unità",
    tableValue: "Valore",
    note: "I risultati sono mostrati con 10 cifre significative.",
  },
};

export default it;
