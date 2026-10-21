import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SpeedConverterText } from "../text/en";

const it: CalculatorTranslation<SpeedConverterText> = {
  content: {
    title: "Convertitore di velocità",
    shortTitle: "Velocità",
    summary: "Converti una velocità tra metri al secondo, chilometri orari, miglia orarie, piedi al secondo, nodi e centimetri al secondo.",
    metaTitle: "Convertitore di velocità – km/h, mph, m/s, ft/s e nodi",
    metaDescription:
      "Converti velocità tra km/h, mph, m/s, ft/s, nodi e cm/s con fattori esatti e vedi il tuo valore in tutte le unità insieme in un'unica tabella.",
    keywords: ["convertitore di velocità", "km/h in mph", "mph in km/h", "m/s in km/h", "nodi in km/h", "piedi al secondo", "unità di velocità"],
    intro: [
      "Le velocità si esprimono in molte unità: i cartelli stradali usano km/h o mph, i problemi di fisica i m/s, piloti e marinai i nodi e in laboratorio si possono usare i cm/s. Questo convertitore trasforma un valore da una di queste unità a un'altra e lo mostra in tutte e sei contemporaneamente.",
      "Ogni unità corrisponde a un numero fisso di metri al secondo, quindi la conversione è una sola moltiplicazione e divisione. Tutti i fattori sono esatti: per esempio, un miglio orario vale esattamente 0,44704 m/s perché un miglio misura esattamente 1.609,344 m.",
    ],
    howToUse: [
      "Digita la velocità da convertire.",
      "Scegli la sua unità in Da e l'unità desiderata in A.",
      "Leggi la velocità convertita o consulta la tabella per le altre unità.",
    ],
    formulas: [
      {
        title: "Conversione tramite i metri al secondo",
        expression: "risultato = valore × (m/s per unità di partenza) ÷ (m/s per unità di arrivo)",
        explanation: "Ogni unità viene prima trasformata in metri al secondo e poi nell'unità di arrivo.",
      },
      {
        title: "Fattori esatti",
        expression: "1 km/h = 1/3,6 m/s ≈ 0,2778 m/s\n1 mph = 0,44704 m/s\n1 ft/s = 0,3048 m/s\n1 kn = 1.852/3.600 m/s ≈ 0,5144 m/s\n1 cm/s = 0,01 m/s",
        explanation: "Derivano da 1 km = 1.000 m, 1 mi = 1.609,344 m, 1 ft = 0,3048 m, 1 miglio nautico = 1.852 m e 1 h = 3.600 s.",
      },
    ],
    examples: [
      { title: "Velocità autostradale di 100 km/h in mph", steps: ["100 km/h = 100 ÷ 3,6 ≈ 27,778 m/s", "27,778 ÷ 0,44704 ≈ 62,137 mph"] },
      { title: "Una barca a 30 nodi in km/h", steps: ["1 kn = 1,852 km/h", "30 × 1,852 = 55,56 km/h"] },
      { title: "25 mph in piedi al secondo", steps: ["25 × 0,44704 = 11,176 m/s", "11,176 ÷ 0,3048 ≈ 36,667 ft/s"] },
    ],
    assumptions: [
      "Miglia e piedi sono le unità internazionali (1 ft = 0,3048 m). Il nodo usa il miglio nautico internazionale di 1.852 m.",
      "Il passo di corsa o di camminata, come i minuti al chilometro, non è incluso perché è l'inverso della velocità e non un suo multiplo. Per il passo usa il Calcolatore del passo di corsa.",
      "I risultati sono mostrati con 10 cifre significative.",
    ],
    faqs: [
      {
        question: "Come si convertono i km/h in m/s?",
        answer: "Dividi per 3,6. Per esempio, 90 km/h ÷ 3,6 = 25 m/s. Per passare dai m/s ai km/h, moltiplica per 3,6.",
      },
      {
        question: "Un nodo è più veloce di un miglio orario?",
        answer: "Sì. Un nodo è un miglio nautico all'ora e il miglio nautico (1.852 m) è più lungo del miglio terrestre (1.609,344 m), quindi 1 nodo vale circa 1,151 mph.",
      },
      {
        question: "Perché il passo non è nell'elenco?",
        answer: "Il passo è un tempo per distanza, quindi se raddoppi la velocità il passo si dimezza. Questa relazione inversa non si può esprimere con un unico fattore di conversione, perciò il passo è gestito da un calcolatore a parte.",
      },
    ],
    sourcesUsedFor: [
      "Fattori di conversione in metri al secondo del miglio orario, del piede al secondo e del nodo.",
      "Il miglio nautico internazionale di 1.852 m, che definisce il nodo come 1.852 m all'ora.",
    ],
  },
  text: {
    value: "Valore",
    from: "Da",
    to: "A",
    unitNames: {
      ms: "Metri al secondo",
      kmh: "Chilometri orari",
      mph: "Miglia orarie",
      fts: "Piedi al secondo",
      kn: "Nodi",
      cms: "Centimetri al secondo",
    },
    primary: "{value} {symbol} in {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} in tutte le unità di velocità",
    tableUnit: "Unità",
    tableValue: "Valore",
    note: "I risultati sono mostrati con 10 cifre significative.",
  },
};

export default it;
