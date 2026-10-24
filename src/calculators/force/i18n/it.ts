import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ForceText } from "../text/en";

const it: CalculatorTranslation<ForceText> = {
  content: {
    title: "Calcolatore della forza (F = ma)",
    shortTitle: "Forza",
    summary: "Risolvi la seconda legge di Newton per forza, massa o accelerazione in newton, libbre-forza, chilogrammi, libbre o g.",
    metaTitle: "Calcolatore della forza (F = ma) – Forza, massa e a",
    metaDescription:
      "Risolvi F = ma per forza, massa o accelerazione. Usa N, kN, lbf o dyn, kg, g, lb o t e m/s², ft/s² o g, e vedi il risultato in ogni unità.",
    keywords: [
      "calcolo forza",
      "f = ma",
      "seconda legge di Newton",
      "newton",
      "libbra-forza",
      "massa e accelerazione",
      "forza netta",
    ],
    intro: [
      "La seconda legge di Newton lega tre grandezze: la forza netta su un oggetto, la sua massa e l'accelerazione che ne risulta. Spingi due volte più forte e l'accelerazione raddoppia; spingi con la stessa forza qualcosa di due volte più pesante e accelera la metà.",
      "Scegli il valore che vuoi trovare e inserisci gli altri due. Il calcolatore gestisce unità metriche e statunitensi, mostra il risultato in ogni unità dello stesso tipo e indica il peso equivalente della forza: la massa che premerebbe su una bilancia con quella forza in condizioni di gravità standard.",
    ],
    howToUse: [
      "Scegli cosa trovare: forza, massa o accelerazione.",
      "Inserisci i due valori noti e scegli un'unità per ciascuno.",
      "Nell'elenco delle unità del valore cercato, scegli l'unità in cui vuoi il risultato.",
      "Leggi il risultato, le altre unità e il peso equivalente della forza.",
    ],
    formulas: [
      { title: "Forza", expression: "F = m × a", explanation: "La forza netta è uguale alla massa per l'accelerazione. 1 N accelera 1 kg a 1 m/s²." },
      { title: "Massa", expression: "m = F ÷ a", explanation: "Dividi la forza per l'accelerazione che produce." },
      { title: "Accelerazione", expression: "a = F ÷ m", explanation: "Dividi la forza netta per la massa." },
      {
        title: "Fattori di conversione",
        expression: "1 lbf = 0,45359237 kg × 9,80665 m/s² = 4,4482216152605 N; 1 dyn = 10⁻⁵ N; 1 g = 9,80665 m/s²",
        explanation: "Esatti per definizione. Il peso equivalente è |F| ÷ 9,80665 m/s².",
      },
    ],
    examples: [
      {
        title: "Forza per accelerare un'auto di 1.350 kg a 2,8 m/s²",
        steps: ["F = 1.350 kg × 2,8 m/s² = 3.780 N", "3.780 N ÷ 1.000 = 3,78 kN"],
      },
      {
        title: "Massa di una cassa che una spinta di 600 N accelera a 1,5 m/s²",
        steps: ["m = 600 N ÷ 1,5 m/s²", "= 400 kg"],
      },
      {
        title: "Accelerazione in g di un carrello di 20 lb tirato con 30 lbf",
        steps: [
          "30 lbf = 133,4466 N e 20 lb = 9,0718 kg",
          "a = 133,4466 ÷ 9,0718 ≈ 14,71 m/s²",
          "14,71 ÷ 9,80665 = 1,5 g, perché una libbra-forza è il peso di una libbra in condizioni di gravità standard",
        ],
      },
    ],
    assumptions: [
      "F è la forza netta: la somma vettoriale di tutte le forze sull'oggetto, compresi attrito e resistenza. Lo strumento tratta forza e accelerazione lungo una sola retta, quindi un valore negativo indica il verso opposto.",
      "La massa è costante. I razzi che bruciano carburante, o altri sistemi che guadagnano o perdono massa, richiedono la forma della legge basata sulla quantità di moto.",
      "Vale la meccanica classica, precisa per velocità molto inferiori alla velocità della luce.",
      "L'unità di accelerazione g e il peso equivalente usano la gravità standard, 9,80665 m/s². La gravità locale è leggermente diversa.",
    ],
    faqs: [
      {
        question: "Che cos'è un newton?",
        answer: "L'unità SI di forza. Un newton accelera una massa di 1 kg a 1 m/s². Sulla Terra, un oggetto di 1 kg pesa circa 9,81 N.",
      },
      {
        question: "Qual è la differenza tra libbre e libbre-forza?",
        answer:
          "La libbra (lb) è un'unità di massa; la libbra-forza (lbf) è il peso di una libbra in condizioni di gravità standard, 4,4482216152605 N. Hanno lo stesso nome, ed è per questo che 1 lbf su 1 lb dà esattamente 1 g.",
      },
      {
        question: "Perché il risultato è negativo?",
        answer:
          "Una forza o un'accelerazione negativa punta nel verso opposto a quello che hai scelto come positivo, come una forza frenante contraria al senso di marcia.",
      },
    ],
    sourcesUsedFor: [
      "Seconda legge di Newton: la forza esterna netta è uguale alla massa per l'accelerazione.",
      "1 lbf = 4,4482216152605 N, ricavato dalla libbra e dalla gravità standard 9,80665 m/s².",
    ],
  },
  text: {
    solve: "Trova",
    solveOptions: { force: "Forza (F)", mass: "Massa (m)", acceleration: "Accelerazione (a)" },
    force: "Forza (F)",
    forceHelp: "Forza netta. Un valore negativo indica che punta nel verso opposto.",
    forceUnit: "Unità di forza",
    forceUnits: { N: "Newton (N)", kN: "Kilonewton (kN)", lbf: "Libbre-forza (lbf)", dyn: "Dine (dyn)" },
    mass: "Massa (m)",
    massUnit: "Unità di massa",
    massUnits: { kg: "Chilogrammi (kg)", g: "Grammi (g)", lb: "Libbre (lb)", t: "Tonnellate metriche (t)" },
    acceleration: "Accelerazione (a)",
    accelerationHelp: "Un valore negativo indica che l'accelerazione punta nel verso opposto (rallentamento).",
    accelerationUnit: "Unità di accelerazione",
    accelerationUnits: {
      ms2: "Metri al secondo quadrato (m/s²)",
      fts2: "Piedi al secondo quadrato (ft/s²)",
      g: "Gravità standard (g = 9,80665 m/s²)",
    },
    unitHelp: "Per il valore che stai cercando, è l'unità del risultato.",
    zeroAcceleration: "L'accelerazione non può essere 0 quando cerchi la massa.",
    zeroForce: "La forza non può essere 0 quando cerchi la massa.",
    signMismatch: "La forza e l'accelerazione devono puntare nello stesso verso (avere lo stesso segno), perché la massa è positiva.",
    results: { force: "Forza", mass: "Massa", acceleration: "Accelerazione" },
    inUnit: "In {unit}",
    weightKg: "Peso equivalente: massa che ha questo peso in condizioni di gravità standard",
    weightLb: "Peso equivalente in libbre",
    weightNote: "Il peso equivalente è |F| ÷ g₀ con g₀ = 9,80665 m/s²: la massa che una bilancia indicherebbe sotto questa forza sulla Terra.",
    note: "F è la forza netta (totale) sull'oggetto. Se le forze sono più di una, sommale prima come vettori.",
  },
};

export default it;
