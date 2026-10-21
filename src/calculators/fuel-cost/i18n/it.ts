import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FuelCostText } from "../text/en";

const it: CalculatorTranslation<FuelCostText> = {
  content: {
    title: "Calcolatore del costo del carburante",
    shortTitle: "Costo del carburante",
    summary: "Stima il carburante consumato e il costo di un viaggio in base a distanza, consumo e prezzo del carburante.",
    metaTitle: "Calcolatore costo carburante – Spesa per il viaggio",
    metaDescription:
      "Calcola il costo del carburante di un viaggio da distanza, consumo e prezzo del carburante, in miglia e MPG o in chilometri e litri per 100 km.",
    keywords: ["costo carburante", "costo benzina", "costo del viaggio", "mpg", "l/100km", "benzina", "diesel", "viaggio in auto"],
    intro: [
      "Calcola quanto carburante serve per un viaggio e quanto costerà. Funziona con miglia per gallone o con litri per 100 chilometri.",
      "Per la stima migliore usa il consumo reale della tua auto.",
    ],
    howToUse: [
      "Scegli le unità USA o metriche.",
      "Inserisci la distanza del viaggio.",
      "Inserisci il consumo e il prezzo del carburante.",
      "Leggi il carburante consumato e il costo.",
    ],
    formulas: [
      { title: "Unità USA", expression: "galloni = miglia ÷ MPG\ncosto = galloni × prezzo al gallone", explanation: "MPG significa miglia per gallone." },
      { title: "Unità metriche", expression: "litri = km × (L/100 km) ÷ 100\ncosto = litri × prezzo al litro", explanation: "Un valore di L/100 km più basso indica un consumo minore." },
    ],
    examples: [
      { title: "300 miglia a 30 MPG, $3,50 al gallone", steps: ["300 ÷ 30 = 10 galloni", "10 × $3,50 = $35,00"] },
      { title: "500 km a 6,5 L/100 km, 1,80 € al litro", steps: ["500 × 6,5 ÷ 100 = 32,5 L", "32,5 × 1,80 € = 58,50 €"] },
    ],
    assumptions: [
      "Il consumo varia con velocità, carico, percorso e meteo.",
      "Per gli MPG si usano i galloni USA.",
      "La scelta della valuta cambia solo la formattazione.",
    ],
    faqs: [
      { question: "Come si calcola il costo della benzina per un viaggio?", answer: "Dividi la distanza per gli MPG per ottenere i galloni, poi moltiplica per il prezzo al gallone." },
      { question: "Come converto gli MPG in L/100 km?", answer: "Dividi 235,215 per gli MPG (galloni USA). 30 MPG corrispondono a circa 7,84 L/100 km." },
      { question: "Devo calcolare il viaggio di andata e ritorno?", answer: "Sì, raddoppia la distanza per un viaggio di andata e ritorno." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    units: "Unità",
    unitOptions: { us: "Miglia, MPG e prezzo per gallone USA", metric: "Chilometri, L/100 km e prezzo al litro" },
    distance: "Distanza del viaggio",
    efficiency: "Consumo di carburante",
    efficiencyHelp: "Miglia per gallone oppure litri per 100 km.",
    price: "Prezzo del carburante al gallone o al litro",
    cost: "Costo del carburante",
    fuel: "Carburante consumato",
    perKm: "Costo al chilometro",
    perMile: "Costo al miglio",
    gallons: "gal USA",
  },
};

export default it;
