import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SolarPanelOutputText } from "../text/en";

const it: CalculatorTranslation<SolarPanelOutputText> = {
  content: {
    title: "Calcolatore della produzione dei pannelli solari",
    shortTitle: "Produzione pannelli solari",
    summary:
      "Stima quanti kilowattora producono dei pannelli solari al giorno, al mese e all'anno, e quanto deve essere grande un impianto per coprire i tuoi consumi elettrici.",
    metaTitle: "Produzione pannelli solari – kWh al giorno e all'anno",
    metaDescription:
      "Stima la produzione dei pannelli solari in kWh al giorno, al mese e all'anno da watt, ore di picco solare e perdite, e dimensiona l'impianto sui consumi annui.",
    keywords: [
      "calcolo pannelli solari",
      "produzione pannelli solari",
      "kWh fotovoltaico all'anno",
      "ore di picco solare",
      "dimensionamento impianto fotovoltaico",
      "quanti pannelli solari servono",
      "perdite impianto fotovoltaico",
      "stima energia solare",
    ],
    intro: [
      "La potenza nominale di un pannello solare indica quanto produce in condizioni di prova standard: piena luce solare di 1.000 watt per metro quadrato con una temperatura delle celle di 25 °C. La produzione reale dipende da quanta luce solare raggiunge davvero i pannelli nel corso della giornata, di solito riassunta nelle ore di picco solare, e dalle perdite nel resto dell'impianto.",
      "Inserisci la potenza del pannello, il numero di pannelli, le ore di picco solare e le perdite dell'impianto per stimare l'energia prodotta al giorno, al mese e all'anno. Aggiungi il tuo consumo elettrico annuo per vedere la quota coperta dall'impianto e quanti pannelli servirebbero per coprirlo tutto.",
    ],
    howToUse: [
      "Inserisci la potenza di un pannello in watt, come indicata sull'etichetta o sulla scheda tecnica, e il numero di pannelli.",
      "Inserisci le ore di picco solare del tuo sito. Il valore predefinito di 4,5 è solo un esempio; cerca un valore per la tua località o usa uno strumento sulla risorsa solare.",
      "Mantieni il valore predefinito del 14% di perdite dell'impianto oppure inserisci una tua stima delle perdite dovute a inverter, cablaggi, calore, sporcizia e ombreggiamento.",
      "Se vuoi, inserisci il tuo consumo elettrico annuo in kWh dalle bollette per vedere la quota coperta e la taglia dell'impianto necessaria.",
    ],
    formulas: [
      {
        title: "Energia giornaliera",
        expression: "E(giorno) = potenza (W) × pannelli ÷ 1.000 × ore di picco solare × (1 − perdite ÷ 100)",
        explanation:
          "Potenza × pannelli ÷ 1.000 è la taglia dell'impianto in kW. Moltiplicando per le ore di picco solare si ottengono i kWh a piena potenza nominale, e il fattore di perdita li riduce a quanto arriva a casa tua.",
      },
      {
        title: "Energia annua e mensile",
        expression: "E(anno) = E(giorno) × 365;  E(mese) = E(anno) ÷ 12",
        explanation: "Il dato mensile è una media. La produzione reale è più alta d'estate e più bassa d'inverno.",
      },
      {
        title: "Taglia dell'impianto per i tuoi consumi",
        expression: "taglia (kW) = consumo annuo ÷ (365 × ore di picco solare × (1 − perdite ÷ 100))",
        explanation: "I pannelli necessari sono questa taglia × 1.000 ÷ potenza del pannello, arrotondati per eccesso a un pannello intero.",
      },
    ],
    examples: [
      {
        title: "Dieci pannelli da 400 W con 4,5 ore di picco solare",
        steps: [
          "Taglia dell'impianto = 400 × 10 ÷ 1.000 = 4 kW",
          "Energia giornaliera = 4 × 4,5 × (1 − 0,14) = 15,48 kWh",
          "Energia annua = 15,48 × 365 = 5.650,2 kWh",
        ],
      },
      {
        title: "Sedici pannelli da 350 W, 5,2 ore di sole, consumo di 11.000 kWh all'anno",
        steps: [
          "Taglia dell'impianto = 350 × 16 ÷ 1.000 = 5,6 kW",
          "Energia giornaliera = 5,6 × 5,2 × 0,86 = 25,0432 kWh, quindi 25,0432 × 365 ≈ 9.140,77 kWh all'anno",
          "Quota coperta = 9.140,77 ÷ 11.000 ≈ 83,1%",
          "Taglia necessaria = 11.000 ÷ (365 × 5,2 × 0,86) ≈ 6,74 kW, cioè 6.739 ÷ 350 ≈ 19,25, arrotondato per eccesso a 20 pannelli",
        ],
      },
      {
        title: "Sei pannelli da 450 W in una zona più nuvolosa con il 10% di perdite",
        steps: [
          "Taglia dell'impianto = 450 × 6 ÷ 1.000 = 2,7 kW",
          "Energia giornaliera = 2,7 × 3,2 × 0,90 = 7,776 kWh",
          "Energia annua = 7,776 × 365 = 2.838,24 kWh",
        ],
      },
    ],
    assumptions: [
      "Le ore di picco solare dipendono dalla località, dall'inclinazione e dall'orientamento dei pannelli, dall'ombreggiamento e dalla stagione. Il valore che inserisci viene usato come media sull'intero anno. Per una stima reale, usa uno strumento locale sulla risorsa solare come PVWatts dell'NREL.",
      "Il valore predefinito del 14% di perdite è un valore di uso comune che comprende perdite come inverter, cablaggi, sporcamento, disaccoppiamento tra moduli e disponibilità. Il tuo impianto può perdere di più o di meno.",
      "La produzione dei pannelli cala anche con temperature elevate delle celle e lentamente con l'invecchiamento. Questi effetti sono inclusi solo nella misura in cui fanno parte del valore di perdita che inserisci.",
      "La quota dei consumi coperta confronta solo i totali annui. Non tiene conto di quando l'energia viene prodotta e quando viene consumata, né di accumuli a batteria e regole di immissione in rete.",
    ],
    faqs: [
      {
        question: "Che cosa sono le ore di picco solare?",
        answer:
          "Esprimono l'energia solare di una giornata come numero di ore di piena luce solare a 1.000 W/m² che fornirebbero la stessa energia. Un sito che riceve 5 kWh per metro quadrato in un giorno ha 5 ore di picco solare, anche se il sole resta sopra l'orizzonte molto più a lungo.",
      },
      {
        question: "Perché la produzione è inferiore a potenza × ore?",
        answer:
          "La potenza dei pannelli è misurata in condizioni di laboratorio ideali. Nell'uso reale, si perde energia nell'inverter e nei cablaggi, a causa di calore, polvere e ombreggiamento, e per piccole differenze tra i pannelli. La percentuale di perdita tiene conto di tutto questo insieme.",
      },
      {
        question: "Quanti pannelli mi servono?",
        answer:
          "Inserisci il tuo consumo elettrico annuo. Il calcolatore lo divide per l'energia che un kW di pannelli produce in un anno con le tue ore di sole e perdite, poi converte questa taglia in pannelli interi della potenza che hai inserito.",
      },
    ],
    sourcesUsedFor: ["Il modello PVWatts e le sue perdite totali dell'impianto predefinite del 14%."],
  },
  text: {
    panelWatts: "Potenza del pannello",
    panelWattsHelp: "La potenza nominale di un pannello in condizioni di prova standard (STC), riportata sull'etichetta o sulla scheda tecnica.",
    panels: "Numero di pannelli",
    sunHours: "Ore di picco solare al giorno",
    sunHoursHelp:
      "L'energia solare giornaliera del tuo sito espressa in ore di pieno sole (1 kW/m²). 4,5 è solo un esempio; il valore giusto dipende dalla località, dall'inclinazione e dall'orientamento dei pannelli e dalla stagione.",
    losses: "Perdite dell'impianto",
    lossesHelp: "Perdite dovute a inverter, cablaggi, calore, sporcizia, ombreggiamento e disaccoppiamento tra moduli. Il 14% è un valore predefinito di uso comune.",
    annualUsage: "Consumo elettrico annuo (facoltativo)",
    annualUsageHelp:
      "Il tuo consumo annuo dalle bollette dell'elettricità, per vedere quanta parte ne copre l'impianto e quale taglia lo coprirebbe tutto.",
    errors: {
      losses: "Le perdite dell'impianto devono essere inferiori al 100%.",
    },
    annual: "Energia stimata all'anno",
    caption: "Impianto da {size} × {hours} ore di picco solare × {factor} dopo il {losses} di perdite.",
    daily: "Energia al giorno",
    monthly: "Energia media al mese",
    systemSize: "Taglia dell'impianto (DC)",
    specificYield: "Energia per kW installato all'anno",
    coverage: "Quota del consumo annuo coperta",
    sizeNeeded: "Taglia dell'impianto per coprire tutto il consumo",
    panelsNeeded: "Pannelli necessari per coprire tutto il consumo",
    panelsMore: "Pannelli aggiuntivi necessari",
    notes: {
      estimate:
        "Questa è una stima semplice. Uno strumento locale sulla risorsa solare come PVWatts dell'NREL usa dati meteo orari per il tuo sito e dà un valore migliore.",
      covered:
        "L'impianto inserito produce in un anno almeno tanta energia quanta ne consumi. Produzione e consumo raramente coincidono ora per ora, quindi potresti comunque prelevare un po' di energia dalla rete.",
      panelsRounded: "Il numero di pannelli è arrotondato per eccesso a pannelli interi da {watts}.",
    },
  },
};

export default it;
