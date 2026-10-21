import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { IdealGasLawText } from "../text/en";

const it: CalculatorTranslation<IdealGasLawText> = {
  content: {
    title: "Calcolatore della legge dei gas ideali",
    shortTitle: "Legge dei gas ideali",
    summary: "Risolvi PV = nRT per pressione, volume, moli o temperatura, con le conversioni di unità integrate.",
    metaTitle: "Calcolatore legge dei gas ideali – Risolvi PV = nRT",
    metaDescription:
      "Risolvi PV = nRT per pressione, volume, quantità di gas o temperatura. Combina liberamente Pa, kPa, bar, atm, mmHg, litri, m³, kelvin, °C e °F.",
    keywords: ["legge dei gas ideali", "pv=nrt", "costante dei gas", "pressione", "moli", "kelvin", "leggi dei gas", "chimica"],
    intro: [
      "La legge dei gas ideali collega quattro proprietà di un gas: pressione, volume, quantità in moli e temperatura assoluta. Conoscendone tre puoi trovare la quarta.",
      "Scegli il valore da calcolare, inserisci gli altri tre nelle unità che hai e il calcolatore converte tutto in unità SI, risolve PV = nRT e riconverte il risultato.",
    ],
    howToUse: [
      "Scegli cosa trovare: pressione, volume, quantità o temperatura.",
      "Inserisci i tre valori noti e scegli un'unità per ciascuno.",
      "Imposta l'unità che vuoi per il risultato con il relativo elenco di unità.",
      "Leggi il risultato, lo stesso valore in altre unità e il volume molare.",
    ],
    formulas: [
      { title: "Legge dei gas ideali", expression: "P × V = n × R × T", explanation: "P in pascal, V in metri cubi, n in moli e T in kelvin." },
      { title: "Costante dei gas", expression: "R = Nₐ × k = 8,31446261815324 J/(mol·K)", explanation: "Esatta dalla ridefinizione del SI del 2019, perché Nₐ e k sono fissati." },
      { title: "Kelvin", expression: "T(K) = T(°C) + 273,15 = (T(°F) − 32) × 5/9 + 273,15", explanation: "La legge richiede la temperatura assoluta, quindi Celsius e Fahrenheit vengono convertiti prima." },
    ],
    examples: [
      {
        title: "Pressione di 2 mol in un serbatoio da 50 L a 25 °C",
        steps: ["T = 25 + 273,15 = 298,15 K e V = 0,05 m³", "P = 2 × 8,314463 × 298,15 ÷ 0,05 ≈ 99.158 Pa", "≈ 99,158 kPa"],
      },
      {
        title: "Volume di 1 mol a 0 °C e 1 atm",
        steps: ["T = 273,15 K e P = 101.325 Pa", "V = 1 × 8,314463 × 273,15 ÷ 101.325 ≈ 0,022414 m³", "≈ 22,414 L"],
      },
      {
        title: "Temperatura di 0,5 mol in 10 L a 200 kPa",
        steps: ["T = 200.000 × 0,01 ÷ (0,5 × 8,314463) ≈ 481,09 K", "481,09 − 273,15 ≈ 207,94 °C"],
      },
    ],
    assumptions: [
      "Il gas è trattato come ideale: le sue molecole non occupano spazio e non si attraggono.",
      "I gas reali si discostano sensibilmente ad alta pressione, a bassa temperatura e vicino al punto di condensazione. In questi casi usa un'equazione di stato come quella di van der Waals.",
      "La pressione è quella assoluta, non quella relativa. Aggiungi prima la pressione atmosferica alla lettura di un manometro.",
    ],
    faqs: [
      { question: "Perché la temperatura deve essere in kelvin?", answer: "La legge è proporzionale alla temperatura assoluta. A 0 °C un gas possiede ancora molta energia termica, quindi valori in Celsius o Fahrenheit darebbero risultati sbagliati. Il calcolatore li converte per te." },
      { question: "Quale valore di R devo usare?", answer: "In unità SI R = 8,314462618 J/(mol·K). Con litri e atmosfere vale circa 0,082057 L·atm/(mol·K). Questo strumento lavora sempre internamente in SI, quindi non devi scegliere." },
      { question: "Che cos'è il volume molare di un gas?", answer: "È il volume occupato da una mole. Per un gas ideale a 0 °C e 1 atm è circa 22,414 L; a 25 °C e 1 bar è circa 24,79 L." },
    ],
    sourcesUsedFor: [
      "Valore esatto della costante molare dei gas R = Nₐk = 8,314462618… J/(mol·K) e della costante di Avogadro.",
      "La legge dei gas ideali e i suoi limiti a bassa temperatura e alta pressione.",
    ],
  },
  text: {
    solve: "Trova",
    solveOptions: { P: "Pressione (P)", V: "Volume (V)", n: "Quantità (n)", T: "Temperatura (T)" },
    pressure: "Pressione (P)",
    pressureUnit: "Unità di pressione",
    pressureUnits: { Pa: "Pascal (Pa)", kPa: "Kilopascal (kPa)", bar: "Bar (bar)", atm: "Atmosfere standard (atm)", mmHg: "Millimetri di mercurio (mmHg)" },
    volume: "Volume (V)",
    volumeUnit: "Unità di volume",
    volumeUnits: { L: "Litri (L)", mL: "Millilitri (mL)", m3: "Metri cubi (m³)" },
    moles: "Quantità di gas (n)",
    temperature: "Temperatura (T)",
    temperatureUnit: "Unità di temperatura",
    temperatureUnits: { K: "Kelvin (K)", C: "Gradi Celsius (°C)", F: "Gradi Fahrenheit (°F)" },
    unitHelp: "Per il valore che stai cercando, questa è l'unità del risultato.",
    belowAbsoluteZero: "La temperatura deve essere superiore allo zero assoluto (0 K = −273,15 °C = −459,67 °F).",
    results: { P: "Pressione", V: "Volume", n: "Quantità di gas", T: "Temperatura" },
    inUnit: "In {unit}",
    molecules: "Numero di molecole (n × Nₐ)",
    molarVolume: "Volume molare (V ÷ n)",
    note: "Usa R = 8,31446261815324 J/(mol·K). I gas reali si discostano da questo modello ideale ad alta pressione e a bassa temperatura, soprattutto vicino alla condensazione.",
  },
};

export default it;
