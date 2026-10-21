import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DensityText } from "../text/en";

const it: CalculatorTranslation<DensityText> = {
  content: {
    title: "Calcolatore di densità",
    shortTitle: "Densità",
    summary: "Calcola la densità da massa e volume, oppure ricava la massa o il volume, in unità metriche o statunitensi.",
    metaTitle: "Calcolatore di densità – Risolvi ρ = m/V per ogni valore",
    metaDescription:
      "Risolvi ρ = m/V per densità, massa o volume. Inserisci grammi, chilogrammi o libbre e cm³, litri, m³ o ft³; ottieni kg/m³, g/cm³ e lb/ft³.",
    keywords: ["densità", "calcolo densità", "massa e volume", "rho", "kg/m3", "g/cm3", "lb/ft3", "densità relativa", "peso specifico"],
    intro: [
      "La densità indica quanta massa è contenuta in un certo volume. Un litro d'acqua ha una massa di circa un chilogrammo, mentre un litro di acciaio ne ha quasi otto.",
      "Questo calcolatore riordina ρ = m/V in modo che tu possa trovare uno qualsiasi dei tre valori mancanti. Le unità vengono convertite automaticamente e il risultato è mostrato anche in kg/m³, g/cm³ e lb/ft³ o nelle altre unità di massa o di volume.",
    ],
    howToUse: [
      "Scegli cosa calcolare: densità, massa o volume.",
      "Inserisci i due valori noti e scegli un'unità per ciascuno.",
      "Nell'elenco delle unità del valore cercato, scegli l'unità in cui vuoi il risultato.",
      "Leggi il risultato, le equivalenze in altre unità e il confronto con l'acqua.",
    ],
    formulas: [
      { title: "Densità", expression: "ρ = m ÷ V", explanation: "La massa divisa per il volume che occupa." },
      { title: "Massa", expression: "m = ρ × V", explanation: "Moltiplica la densità per il volume." },
      { title: "Volume", expression: "V = m ÷ ρ", explanation: "Dividi la massa per la densità." },
      {
        title: "Fattori di conversione",
        expression: "1 g/cm³ = 1000 kg/m³ ≈ 62,428 lb/ft³",
        explanation: "Basati sulle definizioni esatte 1 lb = 0,45359237 kg e 1 ft³ = 0,028316846592 m³.",
      },
    ],
    examples: [
      { title: "Un blocco di metallo di 810 g e 300 cm³", steps: ["ρ = 810 g ÷ 300 cm³", "= 2,7 g/cm³, cioè 2700 kg/m³"] },
      { title: "Massa di 2,5 L di olio a 0,92 g/cm³", steps: ["0,92 g/cm³ = 920 kg/m³ e 2,5 L = 0,0025 m³", "m = 920 × 0,0025 = 2,3 kg"] },
      { title: "Volume di 39,25 kg di acciaio a 7850 kg/m³", steps: ["V = 39,25 ÷ 7850 = 0,005 m³", "0,005 m³ = 5 L"] },
    ],
    assumptions: [
      "Il materiale è considerato omogeneo, quindi un'unica densità descrive tutto il campione.",
      "Il confronto con l'acqua usa 1000 kg/m³. L'acqua reale è leggermente meno densa a temperatura ambiente (circa 998 kg/m³ a 20 °C).",
      "La densità di liquidi e gas dipende da temperatura e pressione. Usa una densità misurata nelle tue condizioni.",
    ],
    faqs: [
      {
        question: "1 g/cm³ equivale a 1 g/mL?",
        answer: "Sì. Un centimetro cubo e un millilitro sono lo stesso volume, quindi le due unità sono identiche.",
      },
      { question: "Come converto g/cm³ in kg/m³?", answer: "Moltiplica per 1000. Per esempio, 2,7 g/cm³ equivalgono a 2700 kg/m³." },
      {
        question: "Che cos'è la densità relativa?",
        answer: "È la densità di un materiale divisa per la densità dell'acqua. Un valore maggiore di 1 significa che il materiale affonda in acqua; minore di 1, che galleggia.",
      },
    ],
    sourcesUsedFor: [
      "Definizione ρ = m/V e unità SI kg/m³.",
      "Fattori di conversione della libbra, del piede cubo e di lb/ft³.",
    ],
  },
  text: {
    solve: "Calcola",
    solveOptions: { density: "Densità (ρ)", mass: "Massa (m)", volume: "Volume (V)" },
    mass: "Massa (m)",
    massUnit: "Unità di massa",
    massUnits: { g: "Grammi (g)", kg: "Chilogrammi (kg)", lb: "Libbre (lb)" },
    volume: "Volume (V)",
    volumeUnit: "Unità di volume",
    volumeUnits: { cm3: "Centimetri cubi (cm³ = mL)", L: "Litri (L)", m3: "Metri cubi (m³)", ft3: "Piedi cubi (ft³)" },
    density: "Densità (ρ)",
    densityUnit: "Unità di densità",
    densityUnits: {
      gcm3: "Grammi per centimetro cubo (g/cm³)",
      kgm3: "Chilogrammi per metro cubo (kg/m³)",
      lbft3: "Libbre per piede cubo (lb/ft³)",
    },
    unitHelp: "Per il valore che stai calcolando, è l'unità del risultato.",
    results: { density: "Densità", mass: "Massa", volume: "Volume" },
    inUnit: "In {unit}",
    relative: "Rispetto all'acqua (1000 kg/m³)",
    floats: "Meno denso dell'acqua, quindi galleggerebbe in acqua pura.",
    sinks: "Più denso dell'acqua, quindi affonderebbe in acqua pura.",
    note: "1 cm³ equivale a 1 mL. La densità di liquidi e gas varia con la temperatura, e quella dei gas anche con la pressione.",
  },
};

export default it;
