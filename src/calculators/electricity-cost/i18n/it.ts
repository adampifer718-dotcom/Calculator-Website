import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ElectricityCostText } from "../text/en";

const it: CalculatorTranslation<ElectricityCostText> = {
  content: {
    title: "Calcolatore del costo dell'elettricità",
    shortTitle: "Costo dell'elettricità",
    summary: "Calcola quanto costa far funzionare un elettrodomestico in base alla potenza, alle ore di utilizzo e al prezzo dell'energia.",
    metaTitle: "Calcolatore costo elettricità – Consumo elettrodomestici",
    metaDescription:
      "Calcola l'energia consumata in kWh e il costo di qualsiasi elettrodomestico o dispositivo al giorno, nel periodo e all'anno, dalla potenza e dalla tua tariffa.",
    keywords: ["costo elettricità", "kwh", "costo energia", "elettrodomestico", "potenza", "watt", "bolletta della luce", "costo di funzionamento"],
    intro: [
      "L'elettricità si paga a kilowattora (kWh): l'uso di 1.000 watt per un'ora. Moltiplica l'energia consumata per il prezzo al kWh per ottenere il costo.",
      "Trovi la potenza sull'etichetta dell'elettrodomestico e la tariffa sulla bolletta.",
    ],
    howToUse: [
      "Inserisci la potenza nominale in watt.",
      "Inserisci quante ore al giorno funziona e per quanti giorni.",
      "Inserisci il prezzo al kWh.",
      "Leggi il costo e l'energia consumata.",
    ],
    formulas: [
      { title: "Energia", expression: "kWh = watt × ore al giorno × giorni ÷ 1.000", explanation: "Converte i wattora in kilowattora." },
      { title: "Costo", expression: "costo = kWh × prezzo al kWh", explanation: "Usa il prezzo dell'energia della tua tariffa." },
    ],
    examples: [
      {
        title: "Un dispositivo da 100 W, 5 ore al giorno per 30 giorni a $0,15/kWh",
        steps: ["100 × 5 × 30 ÷ 1.000 = 15 kWh", "15 × $0,15 = $2,25"],
      },
      {
        title: "Una stufa da 1.500 W, 1 ora al giorno per 30 giorni a $0,20/kWh",
        steps: ["1.500 × 1 × 30 ÷ 1.000 = 45 kWh", "45 × $0,20 = $9,00"],
      },
    ],
    assumptions: [
      "Si presume che il dispositivo assorba tutta la potenza nominale quando è acceso. Termostati, cicli di funzionamento e carichi variabili di solito consumano meno.",
      "Quote fisse, imposte, tariffe a fasce orarie e consumi in standby non sono inclusi.",
      "La scelta della valuta cambia solo la formattazione.",
    ],
    faqs: [
      { question: "Che cos'è un kilowattora?", answer: "L'energia consumata da un dispositivo da 1.000 watt che funziona per un'ora." },
      { question: "Dove trovo la potenza di un elettrodomestico?", answer: "Sulla targhetta dei dati o nel manuale. Se sono indicati solo gli ampere, moltiplicali per la tensione per ottenere una potenza approssimativa." },
      { question: "Come posso ridurre i costi di funzionamento?", answer: "Usa elettrodomestici efficienti, riduci le ore di utilizzo e verifica se la tua tariffa prevede fasce orarie più economiche." },
    ],
    sourcesUsedFor: ["Definizione di watt e kilowattora e di come viene fatturato il consumo di elettricità."],
  },
  text: {
    power: "Potenza nominale",
    powerHelp: "Dall'etichetta, ad es. 100 W. Usa 1000 W per ogni kW.",
    hours: "Utilizzo al giorno",
    days: "Numero di giorni",
    rate: "Prezzo dell'elettricità al kWh",
    cost: "Costo per {days} giorni",
    energy: "Energia consumata",
    perDay: "Costo al giorno",
    perYear: "Costo all'anno (365 giorni)",
    note: "Si presume che il dispositivo assorba la potenza nominale ogni volta che è acceso. L'uso reale varia spesso e il consumo in standby non è incluso.",
  },
};

export default it;
