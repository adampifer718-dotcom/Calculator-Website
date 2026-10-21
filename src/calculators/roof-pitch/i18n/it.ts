import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoofPitchText } from "../text/en";

const it: CalculatorTranslation<RoofPitchText> = {
  content: {
    title: "Calcolatore della pendenza del tetto",
    shortTitle: "Pendenza del tetto",
    summary: "Converti alzata e proiezione orizzontale di un tetto, o il suo angolo, in pendenza su 12, gradi, percentuale e lunghezza del puntone.",
    metaTitle: "Calcolatore pendenza tetto – X su 12, angolo e puntone",
    metaDescription:
      "Converti alzata e proiezione, o l'angolo del tetto, in pendenza in pollici su 12, gradi e percentuale, oltre al moltiplicatore e alla lunghezza del puntone.",
    keywords: [
      "pendenza del tetto",
      "inclinazione della copertura",
      "pendenza falda",
      "pendenza 4/12",
      "angolo del tetto",
      "lunghezza del puntone",
      "calcolo pendenza tetto",
    ],
    intro: [
      "L'inclinazione di un tetto si indica spesso come alzata su 12 di proiezione orizzontale: un tetto 6 su 12 sale di 6 pollici ogni 12 pollici in orizzontale. La stessa pendenza si può esprimere anche come angolo in gradi o come percentuale.",
      "Inserisci alzata e proiezione misurate, oppure l'angolo letto su un progetto, e il calcolatore ti dà tutte e tre le forme. Aggiungi la proiezione orizzontale del tetto per ottenere la lunghezza del puntone dalla linea del muro al colmo.",
    ],
    howToUse: [
      "Scegli se conosci alzata e proiezione oppure l'angolo.",
      "Inserisci alzata e proiezione nella stessa unità, oppure l'angolo in gradi.",
      "Se vuoi, inserisci la proiezione del tetto, cioè metà della luce dell'edificio, per ottenere la lunghezza del puntone.",
      "Leggi la pendenza su 12, l'angolo, la pendenza percentuale e i valori del puntone.",
    ],
    formulas: [
      { title: "Pendenza su 12", expression: "pendenza = 12 × alzata ÷ proiezione", explanation: "Riporta la pendenza a una proiezione di 12 unità." },
      { title: "Angolo", expression: "θ = arctan(alzata ÷ proiezione)", explanation: "All'inverso, alzata ÷ proiezione = tan θ." },
      { title: "Pendenza percentuale", expression: "pendenza % = 100 × alzata ÷ proiezione", explanation: "Un tetto 12 su 12 ha una pendenza del 100 %, cioè 45°." },
      {
        title: "Lunghezza del puntone",
        expression: "puntone = proiezione del tetto × √(1 + (alzata ÷ proiezione)²)",
        explanation: "Teorema di Pitagora: la radice quadrata è il moltiplicatore del puntone.",
      },
    ],
    examples: [
      {
        title: "6 pollici di alzata su 12 pollici di proiezione",
        steps: ["pendenza = 12 × 6 ÷ 12 = 6 su 12", "θ = arctan(0,5) ≈ 26,57°, pendenza del 50 %", "moltiplicatore = √1,25 ≈ 1,1180"],
      },
      {
        title: "5 ft di alzata su 8 ft, con una proiezione del tetto di 14 ft",
        steps: ["pendenza = 12 × 5 ÷ 8 = 7,5 su 12", "moltiplicatore = √(1 + 0,625²) ≈ 1,1792", "puntone = 14 × 1,1792 ≈ 16,509 ft"],
      },
      {
        title: "Un tetto a 30°",
        steps: ["alzata ÷ proiezione = tan 30° ≈ 0,5774", "pendenza = 12 × 0,5774 ≈ 6,93 su 12", "pendenza ≈ 57,74 %"],
      },
    ],
    assumptions: [
      "È solo geometria. Il dimensionamento dei puntoni, il progetto strutturale, le pendenze minime per ogni manto di copertura e le norme edilizie locali richiedono un professionista qualificato.",
      "Alzata e proiezione devono essere nella stessa unità. La lunghezza del puntone usa l'unità scelta e non include sporto di gronda, trave di colmo né margine di taglio.",
      "Il tetto è trattato come un piano liscio con un puntone dritto dalla linea del muro al colmo.",
    ],
    faqs: [
      {
        question: "Che cosa significa una pendenza 4/12?",
        answer: "Il tetto sale di 4 unità ogni 12 unità di proiezione orizzontale, cioè circa 18,43° o una pendenza del 33,3 %.",
      },
      {
        question: "«Pitch» e pendenza sono la stessa cosa?",
        answer: "Nell'uso comune sì. In senso stretto, alcuni carpentieri definiscono il «pitch» come alzata totale divisa per la luce intera, cioè metà della pendenza alzata/proiezione. Questo calcolatore usa l'alzata su 12 di proiezione.",
      },
      {
        question: "Come misuro alzata e proiezione?",
        answer: "Appoggia una livella in orizzontale contro il tetto o un puntone, segna 12 pollici lungo di essa e misura in verticale da quel segno fino alla superficie del tetto. Quella distanza verticale è l'alzata su 12.",
      },
    ],
    sourcesUsedFor: ["Espressione della pendenza del tetto come alzata su 12 unità di proiezione, e significato della proiezione."],
  },
  text: {
    mode: "Parti da",
    modeOptions: { riseRun: "Alzata e proiezione", angle: "Angolo" },
    unit: "Unità di lunghezza",
    units: { in: "Pollici (in)", ft: "Piedi (ft)", cm: "Centimetri (cm)", m: "Metri (m)" },
    rise: "Alzata",
    riseHelp: "Altezza verticale guadagnata lungo la proiezione.",
    run: "Proiezione orizzontale",
    runHelp: "Distanza orizzontale, nella stessa unità dell'alzata.",
    angle: "Angolo del tetto",
    angleTooSteep: "L'angolo deve essere inferiore a 90°.",
    roofRun: "Proiezione del tetto (facoltativa)",
    roofRunHelp: "Metà della luce dell'edificio, dal filo esterno del muro alla verticale del colmo. Serve per la lunghezza del puntone.",
    pitch: "Pendenza del tetto",
    pitchText: "{rise} su 12",
    pitchCaption: "Pollici di alzata ogni 12 pollici di proiezione (va bene qualsiasi unità, purché sia la stessa per entrambe).",
    angleOut: "Angolo",
    slopePercent: "Pendenza",
    multiplier: "Moltiplicatore della lunghezza del puntone",
    rafter: "Lunghezza del puntone (senza sporto)",
    roofRise: "Alzata sulla proiezione del tetto",
    note: "La lunghezza del puntone è misurata lungo la falda dalla linea del muro al colmo, senza sporto di gronda, trave di colmo né margini di taglio.",
  },
};

export default it;
