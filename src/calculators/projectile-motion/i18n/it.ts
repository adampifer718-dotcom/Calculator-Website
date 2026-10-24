import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProjectileMotionText } from "../text/en";

const it: CalculatorTranslation<ProjectileMotionText> = {
  content: {
    title: "Calcolatore del moto del proiettile",
    shortTitle: "Moto del proiettile",
    summary:
      "Trova gittata, tempo di volo, altezza massima e velocità d'impatto di un oggetto lanciato da qualsiasi altezza, sulla Terra, sulla Luna o su Marte.",
    metaTitle: "Calcolatore del moto del proiettile – Gittata, altezza, volo",
    metaDescription:
      "Da velocità, angolo e altezza di lancio ottieni gittata, tempo di volo, altezza massima e velocità d'impatto, e una tabella delle posizioni. Senza resistenza dell'aria.",
    keywords: [
      "moto del proiettile",
      "moto parabolico",
      "traiettoria",
      "gittata",
      "tempo di volo",
      "altezza massima",
      "angolo di lancio",
      "cinematica",
    ],
    intro: [
      "Una palla lanciata, un pallone calciato o un getto d'acqua seguono quasi la stessa curva una volta in aria: continuano a muoversi in orizzontale a velocità costante mentre la gravità li tira verso il basso con un'accelerazione costante. Il risultato è una parabola.",
      "Indica la velocità di lancio, l'angolo sopra l'orizzontale e l'altezza rispetto al suolo di atterraggio. Il calcolatore trova quanta strada percorre l'oggetto, quanto resta in aria, quanto sale e a che velocità arriva a terra, ed elenca la sua posizione in dieci istanti del volo.",
    ],
    howToUse: [
      "Inserisci la velocità di lancio e scegli la sua unità.",
      "Inserisci l'angolo di lancio in gradi sopra l'orizzontale, da 0° (orizzontale) a 90° (verso l'alto).",
      "Inserisci l'altezza di lancio rispetto al suolo di atterraggio e scegli metri o piedi per altezze e distanze.",
      "Scegli Terra, Luna, Marte o un valore di gravità personalizzato, poi leggi la gittata e gli altri risultati.",
    ],
    formulas: [
      {
        title: "Componenti della velocità",
        expression: "vₓ = v·cos θ, v_y = v·sin θ",
        explanation: "La componente orizzontale resta costante; quella verticale cambia di g ogni secondo.",
      },
      {
        title: "Tempo di volo",
        expression: "T = (v_y + √(v_y² + 2·g·h)) ÷ g",
        explanation: "La radice positiva di h + v_y·t − ½·g·t² = 0, che tiene conto dell'altezza di lancio h.",
      },
      {
        title: "Gittata e punto più alto",
        expression: "R = vₓ·T, H = h + v_y² ÷ (2·g), t_apex = v_y ÷ g",
        explanation: "La distanza orizzontale, il punto più alto rispetto al suolo e l'istante in cui viene raggiunto.",
      },
      {
        title: "Impatto",
        expression: "v_impact = √(vₓ² + v_y² + 2·g·h), angolo = atan(√(v_y² + 2·g·h) ÷ vₓ)",
        explanation: "La velocità e l'angolo sotto l'orizzontale con cui l'oggetto colpisce il suolo.",
      },
    ],
    examples: [
      {
        title: "Un pallone calciato da terra a 25 m/s e 35°",
        steps: [
          "vₓ = 25 cos 35° ≈ 20,479 m/s, v_y = 25 sin 35° ≈ 14,339 m/s",
          "T = 2 × 14,339 ÷ 9,80665 ≈ 2,924 s",
          "R = 20,479 × 2,924 ≈ 59,89 m; altezza massima ≈ 10,48 m",
        ],
      },
      {
        title: "Un lancio a 15 m/s e 20° rilasciato a 1,8 m dal suolo",
        steps: [
          "vₓ ≈ 14,095 m/s, v_y ≈ 5,130 m/s",
          "T = (5,130 + √(5,130² + 2 × 9,80665 × 1,8)) ÷ 9,80665 ≈ 1,324 s",
          "R = 14,095 × 1,324 ≈ 18,66 m; atterra a circa 16,13 m/s",
        ],
      },
      {
        title: "Un colpo da golf a 40 m/s e 45° sulla Luna",
        steps: [
          "Su terreno piano R = v² sin(2θ) ÷ g = 1.600 × 1 ÷ 1,62",
          "R ≈ 987,65 m, circa sei volte più lontano che sulla Terra",
          "Tempo di volo ≈ 34,92 s",
        ],
      },
    ],
    assumptions: [
      "Resistenza dell'aria, vento, rotazione e portanza sono ignorati. Le traiettorie reali sono più corte e più basse, e un proiettile reale atterra con un angolo più ripido di quanto preveda questo modello.",
      "La gravità è costante e rivolta verso il basso, e il terreno è piano e orizzontale. Vale bene per le distanze di tutti i giorni, non per la balistica a lunga gittata.",
      "Per la Terra si usa la gravità standard, 9,80665 m/s² (esatta per definizione). La gravità effettiva varia di circa ±0,3% con latitudine e altitudine. I valori di Luna e Marte sono le medie superficiali della NASA.",
      "L'altezza di lancio è misurata rispetto al punto di atterraggio. Un atterraggio più in alto del punto di lancio non è previsto.",
    ],
    faqs: [
      {
        question: "Quale angolo dà la gittata massima?",
        answer:
          "Da terra e senza attrito dell'aria, 45° dà la gittata massima. Lanciare da un'altezza sposta l'angolo migliore sotto i 45°, e nella realtà la resistenza dell'aria lo abbassa ancora.",
      },
      {
        question: "La massa dell'oggetto conta?",
        answer:
          "Non senza resistenza dell'aria: ogni oggetto cade con la stessa accelerazione g, quindi la traiettoria dipende solo da velocità, angolo, altezza e gravità.",
      },
      {
        question: "Perché la velocità d'impatto è maggiore di quella di lancio quando parto da un'altezza?",
        answer:
          "L'oggetto scende più di quanto sia salito, quindi la gravità aggiunge velocità verticale. La velocità orizzontale non cambia mai, perciò l'angolo d'impatto è più ripido dell'angolo di lancio.",
      },
    ],
    sourcesUsedFor: [
      "Scomposizione del moto in parti orizzontale e verticale indipendenti; gittata, tempo di volo, altezza massima e velocità d'impatto senza resistenza dell'aria.",
      "Gravità sulla superficie lunare, 1,62 m/s².",
      "Gravità superficiale media di Marte, 3,73 m/s².",
    ],
  },
  text: {
    speed: "Velocità di lancio",
    speedUnit: "Unità di velocità",
    speedUnits: { ms: "Metri al secondo (m/s)", kmh: "Chilometri orari (km/h)", mph: "Miglia orarie (mph)", fts: "Piedi al secondo (ft/s)" },
    angle: "Angolo di lancio",
    angleHelp: "Misurato verso l'alto a partire dall'orizzontale: 0° è un lancio orizzontale, 90° è verso l'alto in verticale.",
    height: "Altezza di lancio",
    heightHelp: "Altezza rispetto al suolo dove atterra il proiettile. Usa 0 per un lancio da terra.",
    lengthUnit: "Unità di lunghezza",
    lengthUnitHelp: "Usata per l'altezza di lancio e per le distanze e le altezze nei risultati.",
    lengthUnits: { m: "Metri (m)", ft: "Piedi (ft)" },
    gravity: "Gravità",
    gravityOptions: {
      earth: "Terra, standard (9,80665 m/s²)",
      moon: "Luna (1,62 m/s²)",
      mars: "Marte (3,73 m/s²)",
      custom: "Personalizzata",
    },
    customGravity: "Gravità personalizzata",
    customGravityHelp: "Accelerazione verso il basso in metri al secondo quadrato.",
    flatLaunch: "Un lancio orizzontale da terra non si stacca mai dal suolo. Aumenta l'angolo o l'altezza di lancio.",
    range: "Gittata orizzontale",
    caption: "Distanza orizzontale dal punto di lancio al punto in cui colpisce il suolo.",
    flightTime: "Tempo di volo",
    maxHeight: "Altezza massima dal suolo",
    apexTime: "Tempo per raggiungere il punto più alto",
    impactSpeed: "Velocità d'impatto",
    impactAngle: "Angolo d'impatto (sotto l'orizzontale)",
    components: "Componenti della velocità iniziale (orizzontale, verticale)",
    componentsText: "{vx}, {vy}",
    tableCaption: "Posizione durante il volo",
    tableColumns: { time: "Tempo", x: "Distanza orizzontale", y: "Altezza" },
    verticalNote: "A 90° il proiettile sale in verticale e ricade nel punto di lancio, quindi la gittata è 0.",
    note: "La resistenza dell'aria è ignorata. Le traiettorie reali sono più corte e più basse perché l'attrito rallenta il proiettile, soprattutto ad alta velocità.",
  },
};

export default it;
