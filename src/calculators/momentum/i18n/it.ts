import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MomentumText } from "../text/en";

const it: CalculatorTranslation<MomentumText> = {
  content: {
    title: "Calcolatore della quantità di moto",
    shortTitle: "Quantità di moto",
    summary: "Risolvi p = mv per quantità di moto, massa o velocità, oppure trova l'impulso di una forza e la variazione di velocità che provoca.",
    metaTitle: "Calcolatore della quantità di moto – p = mv e impulso",
    metaDescription:
      "Trova quantità di moto, massa o velocità da p = mv in unità metriche o USA, con l'energia cinetica, o calcola l'impulso di una forza e il Δv risultante.",
    keywords: [
      "quantità di moto",
      "momento lineare",
      "p = mv",
      "impulso",
      "teorema dell'impulso",
      "kg m/s",
      "newton secondo",
      "variazione di velocità",
    ],
    intro: [
      "La quantità di moto misura quanto è difficile fermare un oggetto in movimento. È la massa per la velocità, quindi sia un camion lento sia una palla da baseball veloce possono averne molta. Poiché ha una direzione, la quantità di moto può essere negativa quando il moto avviene nel verso opposto.",
      "Usa la prima modalità per trovare quantità di moto, massa o velocità dalle altre due; il risultato mostra anche l'energia cinetica. Usa la modalità impulso per vedere l'effetto di una forza che agisce per un breve tempo: l'impulso è uguale alla variazione della quantità di moto e, con una massa, dà la variazione di velocità.",
    ],
    howToUse: [
      "Scegli quantità di moto (p = mv) o impulso (J = FΔt).",
      "Per la quantità di moto, scegli cosa trovare e inserisci gli altri due valori con le loro unità. Usa una velocità o una quantità di moto negativa per un moto nel verso opposto.",
      "Per l'impulso, inserisci la forza media e per quanto tempo agisce. Aggiungi la massa se vuoi la variazione di velocità.",
      "Leggi il risultato e le altre unità, compresi lb·ft/s e l'energia cinetica.",
    ],
    formulas: [
      { title: "Quantità di moto", expression: "p = m × v", explanation: "In kg·m/s. Risolvi per m = p ÷ v o v = p ÷ m." },
      {
        title: "Impulso",
        expression: "J = F × Δt = Δp",
        explanation: "Una forza media che agisce per un certo tempo cambia la quantità di moto esattamente dell'impulso, in N·s (equivalente a kg·m/s).",
      },
      { title: "Variazione di velocità", expression: "Δv = J ÷ m", explanation: "L'impulso diviso per la massa su cui agisce." },
      { title: "Energia cinetica", expression: "KE = p² ÷ (2m)", explanation: "Equivale a ½·m·v², in joule." },
    ],
    examples: [
      {
        title: "Una palla da baseball di 0,145 kg a 40 m/s",
        steps: ["p = 0,145 kg × 40 m/s = 5,8 kg·m/s", "≈ 41,95 lb·ft/s; KE = 5,8² ÷ (2 × 0,145) = 116 J"],
      },
      {
        title: "Velocità di un pattinatore di 60 kg con 900 kg·m/s",
        steps: ["v = 900 ÷ 60 = 15 m/s", "15 m/s × 3,6 = 54 km/h"],
      },
      {
        title: "Un calcio di 250 N che dura 0,02 s su un pallone di 0,16 kg",
        steps: ["J = 250 N × 0,02 s = 5 N·s", "Δv = 5 ÷ 0,16 = 31,25 m/s"],
      },
    ],
    assumptions: [
      "Moto e forze sono lungo una sola retta; il segno indica il verso. Per moti in due o tre dimensioni, applica le formule a ciascuna componente.",
      "In modalità impulso la forza è la forza media nell'intervallo di tempo. Una forza che varia durante l'urto dà lo stesso impulso della sua media.",
      "Vale la meccanica classica, precisa per velocità molto inferiori alla velocità della luce.",
    ],
    faqs: [
      {
        question: "Qual è la differenza tra quantità di moto ed energia cinetica?",
        answer:
          "La quantità di moto (mv) è un vettore e si conserva in ogni urto. L'energia cinetica (½mv²) non ha direzione e nella maggior parte degli urti si trasforma in parte in calore e suono.",
      },
      {
        question: "N·s è uguale a kg·m/s?",
        answer: "Sì. Un newton è un kg·m/s², quindi un newton secondo è un kg·m/s. Impulso e quantità di moto hanno la stessa unità.",
      },
      {
        question: "Perché airbag e imbottiture riducono le lesioni?",
        answer:
          "Rendono l'arresto più lungo. La variazione della quantità di moto è la stessa, quindi un tempo più lungo significa una forza media più piccola, perché F = Δp ÷ Δt.",
      },
    ],
    sourcesUsedFor: [
      "L'impulso come forza per il tempo in cui agisce e il teorema dell'impulso J = Δp.",
      "La forza netta come rapidità di variazione della quantità di moto.",
    ],
  },
  text: {
    mode: "Calcola",
    modes: { momentum: "Quantità di moto (p = mv)", impulse: "Impulso (J = FΔt)" },
    solve: "Trova",
    solveOptions: { momentum: "Quantità di moto (p)", mass: "Massa (m)", velocity: "Velocità (v)" },
    momentum: "Quantità di moto (p)",
    momentumHelp: "In chilogrammo metro al secondo (kg·m/s). Un valore negativo indica un moto nel verso opposto.",
    mass: "Massa (m)",
    impulseMass: "Massa (facoltativa)",
    impulseMassHelp: "Lascia vuoto per ottenere solo l'impulso. Con una massa viene mostrata anche la variazione di velocità.",
    massUnit: "Unità di massa",
    massUnits: { kg: "Chilogrammi (kg)", g: "Grammi (g)", lb: "Libbre (lb)", t: "Tonnellate metriche (t)" },
    velocity: "Velocità (v)",
    velocityHelp: "Un valore negativo indica un moto nel verso opposto.",
    velocityUnit: "Unità di velocità",
    velocityUnits: { ms: "Metri al secondo (m/s)", kmh: "Chilometri orari (km/h)", mph: "Miglia orarie (mph)", fts: "Piedi al secondo (ft/s)" },
    unitHelp: "Per il valore che stai cercando, è l'unità del risultato.",
    force: "Forza media (F)",
    forceHelp: "Un valore negativo indica che la forza punta nel verso opposto.",
    forceUnit: "Unità di forza",
    forceUnits: { N: "Newton (N)", lbf: "Libbre-forza (lbf)" },
    duration: "Tempo di azione della forza (Δt)",
    zeroVelocity: "La velocità non può essere 0 quando cerchi la massa, perché una massa ferma non ha quantità di moto.",
    zeroMomentum: "La quantità di moto non può essere 0 quando cerchi la massa.",
    signMismatch: "La quantità di moto e la velocità devono avere lo stesso segno, perché la massa è positiva.",
    results: { momentum: "Quantità di moto", mass: "Massa", velocity: "Velocità" },
    impulse: "Impulso (J = Δp)",
    inUnit: "In {unit}",
    kineticEnergy: "Energia cinetica (p² ÷ 2m)",
    deltaV: "Variazione di velocità (Δv = J ÷ m)",
    impulseNote:
      "L'impulso è uguale alla variazione della quantità di moto. Lo stesso impulso può venire da una forza grande per un tempo breve o da una forza piccola per un tempo lungo.",
    note: "La quantità di moto è un vettore. Qui è misurata lungo una sola retta, con il segno che indica il verso.",
  },
};

export default it;
