import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AccelerationText } from "../text/en";

const it: CalculatorTranslation<AccelerationText> = {
  content: {
    title: "Calcolatore di accelerazione",
    shortTitle: "Accelerazione",
    summary: "Calcola l'accelerazione da una variazione di velocità, da distanza e tempo o da forza e massa, in m/s², ft/s² e g.",
    metaTitle: "Calcolatore di accelerazione – Da velocità, distanza o forza",
    metaDescription:
      "Calcola l'accelerazione da una variazione di velocità in un certo tempo, da distanza e tempo o da forza e massa (a = F/m), in m/s², ft/s² e g.",
    keywords: ["calcolo accelerazione", "formula dell'accelerazione", "m/s2", "decelerazione", "forza g", "a = F/m", "da 0 a 100", "cinematica"],
    intro: [
      "L'accelerazione indica quanto rapidamente cambia la velocità. Un'auto che passa da ferma a 100 km/h in 8 secondi guadagna circa 3,5 metri al secondo di velocità ogni secondo, cioè 3,5 m/s².",
      "Questo calcolatore ricava l'accelerazione in tre modi: da una velocità iniziale e una finale in un certo tempo, dalla distanza percorsa in un certo tempo oppure dalla forza netta che agisce su un oggetto e dalla sua massa. Il risultato è mostrato in m/s², in ft/s² e come multiplo dell'accelerazione di gravità standard g.",
    ],
    howToUse: [
      "Scegli cosa conosci: una variazione di velocità, una distanza e un tempo, oppure una forza e una massa.",
      "Scegli le unità di velocità e di distanza quando richiesto. Il tempo è sempre in secondi, la forza in newton e la massa in chilogrammi.",
      "Inserisci i valori. Una velocità negativa indica un moto nel verso opposto.",
      "Leggi l'accelerazione. Un risultato negativo significa che l'oggetto sta rallentando.",
    ],
    formulas: [
      { title: "Da una variazione di velocità", expression: "a = (v − v₀) ÷ t", explanation: "L'accelerazione media nel tempo t, dove v₀ è la velocità iniziale e v quella finale." },
      { title: "Da distanza e tempo", expression: "d = v₀t + ½at²  ⇒  a = 2(d − v₀t) ÷ t²", explanation: "Vale quando l'accelerazione resta costante per tutto l'intervallo." },
      { title: "Da forza e massa", expression: "a = F ÷ m", explanation: "Il secondo principio della dinamica di Newton, con la forza netta F in newton e la massa m in chilogrammi." },
      { title: "Conversione delle unità", expression: "1 ft/s² = 0,3048 m/s²\n1 g = 9,80665 m/s²", explanation: "Le velocità vengono prima convertite in m/s (1 km/h = 1/3,6 m/s, 1 mph = 0,44704 m/s)." },
    ],
    examples: [
      {
        title: "Un'auto che passa da 0 a 100 km/h in 8 secondi",
        steps: ["100 km/h = 100 ÷ 3,6 ≈ 27,778 m/s", "a = (27,778 − 0) ÷ 8 ≈ 3,472 m/s²", "Pari a circa 0,354 g"],
      },
      {
        title: "Frenare da 60 mph fino all'arresto in 4 secondi",
        steps: ["60 mph = 60 × 0,44704 = 26,8224 m/s", "a = (0 − 26,8224) ÷ 4 = −6,7056 m/s²", "Il segno meno indica una decelerazione di circa 0,684 g"],
      },
      {
        title: "Una spinta di 450 N su una slitta di 75 kg",
        steps: ["a = F ÷ m", "= 450 ÷ 75 = 6 m/s²"],
      },
    ],
    assumptions: [
      "Il moto è rettilineo; velocità e forze nel verso opposto si inseriscono come valori negativi.",
      "Il metodo della variazione di velocità fornisce l'accelerazione media nell'intervallo. Il metodo distanza e tempo presuppone un'accelerazione costante.",
      "Il metodo forza e massa usa la forza netta, cioè al netto di attrito, resistenza dell'aria e altre forze contrarie.",
    ],
    faqs: [
      { question: "Che cosa significa un'accelerazione negativa?", answer: "Significa che l'accelerazione è diretta nel verso negativo. Se l'oggetto si muove in avanti, sta rallentando: in questo caso si parla spesso di decelerazione." },
      { question: "Che cos'è 1 g?", answer: "È l'accelerazione di gravità standard, definita esattamente come 9,80665 m/s² (circa 32,17 ft/s²). Esprimere un'accelerazione in g permette di confrontarla con l'attrazione gravitazionale sulla superficie terrestre." },
      { question: "Perché l'accelerazione si misura in m/s²?", answer: "L'accelerazione è una variazione di velocità (m/s) per unità di tempo (s), quindi la sua unità è il metro al secondo al secondo, scritto m/s²." },
    ],
    sourcesUsedFor: [
      "Definizione dell'accelerazione media come variazione di velocità divisa per il tempo trascorso, e la sua unità SI, il m/s².",
      "Il secondo principio della dinamica di Newton, F = ma.",
      "L'accelerazione di gravità standard, 9,80665 m/s².",
    ],
  },
  text: {
    mode: "Calcola da",
    modes: { velocity: "Variazione di velocità", distance: "Distanza e tempo", force: "Forza e massa" },
    speedUnit: "Unità di velocità",
    speedUnits: { ms: "Metri al secondo (m/s)", kmh: "Chilometri orari (km/h)", mph: "Miglia orarie (mph)", fts: "Piedi al secondo (ft/s)" },
    initialVelocity: "Velocità iniziale (v₀)",
    initialHelp: "Usa un valore negativo per un moto nel verso opposto.",
    finalVelocity: "Velocità finale (v)",
    time: "Tempo (t)",
    distanceUnit: "Unità di distanza",
    distanceUnits: { m: "Metri (m)", km: "Chilometri (km)", ft: "Piedi (ft)", mi: "Miglia (mi)" },
    distance: "Distanza percorsa (d)",
    distanceHelp: "Lo spostamento in linea retta nel tempo t.",
    force: "Forza netta (F)",
    forceHelp: "La somma di tutte le forze che agiscono sull'oggetto, in newton.",
    mass: "Massa (m)",
    acceleration: "Accelerazione",
    formula: { velocity: "a = (v − v₀) ÷ t", distance: "a = 2(d − v₀t) ÷ t²", force: "a = F ÷ m" },
    inFeet: "In piedi al secondo quadrato",
    inG: "In accelerazioni di gravità standard (g)",
    distanceCovered: "Distanza percorsa",
    finalVelocityResult: "Velocità finale",
    notes: {
      negative: "L'accelerazione è negativa: se l'oggetto si muove nel verso positivo, sta rallentando (decelera).",
      zero: "Accelerazione nulla: la velocità non cambia.",
      constant: "Presuppone che l'accelerazione resti costante per tutto l'intervallo di tempo.",
      average: "È l'accelerazione media nell'intervallo di tempo; in un istante preciso l'accelerazione può essere maggiore o minore.",
      g: "1 g è l'accelerazione di gravità standard, 9,80665 m/s², esatta per definizione.",
    },
  },
};

export default it;
