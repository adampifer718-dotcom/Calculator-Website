import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PotentialEnergyText } from "../text/en";

const it: CalculatorTranslation<PotentialEnergyText> = {
  content: {
    title: "Calcolatore di energia potenziale",
    shortTitle: "Energia potenziale",
    summary:
      "Calcola l'energia potenziale gravitazionale (m·g·h) o l'energia immagazzinata in una molla (½·k·x²), oppure risolvi una delle due formule per il valore mancante.",
    metaTitle: "Calcolatore di energia potenziale – PE = mgh e ½kx²",
    metaDescription:
      "Calcola l'energia potenziale gravitazionale da massa, altezza e gravità, o l'energia elastica di una molla, e ricava massa, altezza, k o x in ogni unità.",
    keywords: [
      "energia potenziale",
      "energia potenziale gravitazionale",
      "PE = mgh",
      "energia potenziale elastica",
      "energia di una molla",
      "1/2 kx^2",
      "joule",
      "energia immagazzinata",
    ],
    intro: [
      "L'energia potenziale è energia immagazzinata per via della posizione di un oggetto o della sua deformazione. Se sollevi una cassa da 12 kg su una piattaforma alta 2,5 m, le fornisci circa 294 joule, che restituisce come movimento se cade. Se comprimi una molla, questa immagazzina energia che libera quando la lasci andare.",
      "Questo calcolatore gestisce entrambi i casi. Per la gravità usa PE = m·g·h, con la gravità della Terra, della Luna, di Marte o un valore personalizzato. Per una molla usa PE = ½·k·x². Puoi anche risolvere le formule al contrario per trovare la massa, l'altezza, la costante elastica o lo spostamento.",
    ],
    howToUse: [
      "Scegli l'energia potenziale gravitazionale o quella elastica.",
      "Scegli che cosa vuoi trovare. Il campo di quel valore scompare.",
      "Inserisci gli altri valori e scegli le loro unità. Per la gravità, scegli un pianeta o inserisci un valore tuo.",
      "Leggi il risultato nell'unità scelta, insieme allo stesso valore nelle altre unità.",
    ],
    formulas: [
      {
        title: "Energia potenziale gravitazionale",
        expression: "PE = m × g × h",
        explanation: "Con m in chilogrammi, g in m/s² e h in metri, PE risulta in joule. h si misura a partire da un livello di riferimento scelto da te.",
      },
      {
        title: "Energia potenziale elastica",
        expression: "PE = ½ × k × x²",
        explanation: "k è la costante elastica in N/m e x l'allungamento o la compressione rispetto alla lunghezza a riposo, in metri.",
      },
      {
        title: "Risolvere al contrario",
        expression: "m = PE ÷ (g·h)   h = PE ÷ (m·g)\nk = 2·PE ÷ x²   x = √(2·PE ÷ k)",
        explanation: "Le stesse formule riordinate per l'incognita.",
      },
      {
        title: "Unità di energia",
        expression: "1 kJ = 1.000 J   1 Wh = 3.600 J   1 kWh = 3.600.000 J\n1 ft·lbf = 1,3558179483314 J",
        explanation: "Un piede-libbra vale 0,3048 m × 4,4482216152605 N, entrambi valori esatti.",
      },
    ],
    examples: [
      {
        title: "Sollevare una cassa da 12 kg su una piattaforma di 2,5 m",
        steps: ["PE = m × g × h", "= 12 × 9,80665 × 2,5", "= 294,1995 J (circa 0,29 kJ)"],
      },
      {
        title: "Quanto in alto 1 kWh può sollevare un'auto da 1.000 kg?",
        steps: ["1 kWh = 3.600.000 J", "h = PE ÷ (m × g) = 3.600.000 ÷ (1.000 × 9,80665)", "≈ 367,10 m"],
      },
      {
        title: "Una molla da 400 N/m compressa di 15 cm",
        steps: ["15 cm = 0,15 m", "PE = ½ × 400 × 0,15²", "= 200 × 0,0225 = 4,5 J"],
      },
    ],
    assumptions: [
      "La gravità è considerata costante lungo tutta l'altezza, il che è preciso vicino alla superficie di un pianeta. Per altezze di centinaia di chilometri conta la diminuzione della gravità con la distanza.",
      "Per la Terra si usa la gravità standard, 9,80665 m/s², esatta per definizione. La gravità reale varia leggermente con latitudine e altitudine. I valori della Luna e di Marte sono valori medi in superficie tratti dalle schede informative della NASA.",
      "La molla è ideale: segue la legge di Hooke e non viene allungata oltre il suo limite elastico. Attrito, resistenza dell'aria ed energia dispersa come calore sono ignorati.",
    ],
    faqs: [
      {
        question: "Da dove devo misurare l'altezza?",
        answer:
          "Da qualsiasi livello tu scelga come zero, ad esempio il pavimento, il terreno o il piano di un tavolo. L'energia potenziale dipende da questa scelta, ma la variazione di energia tra due altezze no, ed è questa variazione che conta in pratica.",
      },
      {
        question: "Che relazione c'è tra energia potenziale ed energia cinetica?",
        answer:
          "Quando un oggetto cade senza resistenza dell'aria, la sua energia potenziale si trasforma in energia cinetica. Una cassa da 12 kg lasciata cadere da 2,5 m arriva al pavimento con circa 294 J di energia cinetica, a una velocità di √(2gh) ≈ 7,0 m/s.",
      },
      {
        question: "Conta se la molla è allungata o compressa?",
        answer:
          "No. L'energia dipende da x², quindi allungare o comprimere una molla ideale della stessa distanza immagazzina la stessa energia.",
      },
    ],
    sourcesUsedFor: [
      "Energia potenziale gravitazionale vicino alla superficie terrestre (mgh), energia potenziale elastica di una molla (½kx²) e scelta del livello zero.",
      "La gravità superficiale della Luna, 1,62 m/s².",
      "La gravità superficiale media di Marte, 3,73 m/s².",
    ],
  },
  text: {
    mode: "Tipo di energia potenziale",
    modes: { gravitational: "Gravitazionale (m·g·h)", elastic: "Molla elastica (½·k·x²)" },
    solve: "Trova",
    gSolveOptions: { energy: "Energia potenziale (PE)", mass: "Massa (m)", height: "Altezza (h)" },
    eSolveOptions: { energy: "Energia immagazzinata (PE)", k: "Costante elastica (k)", x: "Allungamento o compressione (x)" },
    mass: "Massa (m)",
    massUnit: "Unità di massa",
    massUnits: { kg: "Chilogrammi (kg)", g: "Grammi (g)", lb: "Libbre (lb)" },
    height: "Altezza sopra il livello di riferimento (h)",
    heightHelp: "Misurata dal livello che consideri zero, ad esempio il pavimento o il terreno.",
    heightUnit: "Unità di altezza",
    heightUnits: { m: "Metri (m)", cm: "Centimetri (cm)", ft: "Piedi (ft)" },
    gravity: "Gravità (g)",
    gravityOptions: {
      earth: "Terra, standard (9,80665 m/s²)",
      moon: "Luna (1,62 m/s²)",
      mars: "Marte (3,73 m/s²)",
      custom: "Valore personalizzato",
    },
    customG: "Gravità personalizzata",
    energy: "Energia potenziale (PE)",
    energyUnit: "Unità di energia",
    energyUnits: {
      J: "Joule (J)",
      kJ: "Kilojoule (kJ)",
      Wh: "Wattora (Wh)",
      kWh: "Chilowattora (kWh)",
      ftlbf: "Piedi-libbra (ft·lbf)",
    },
    k: "Costante elastica (k)",
    kHelp: "Quanto è rigida la molla: la forza in newton necessaria per allungarla di un metro.",
    x: "Allungamento o compressione (x)",
    xHelp: "La distanza dalla lunghezza a riposo della molla. Compressione e allungamento immagazzinano la stessa energia.",
    xUnit: "Unità di spostamento",
    xUnits: { m: "Metri (m)", cm: "Centimetri (cm)", in: "Pollici (in)" },
    results: {
      gEnergy: "Energia potenziale gravitazionale",
      mass: "Massa necessaria",
      height: "Altezza necessaria",
      eEnergy: "Energia potenziale elastica",
      k: "Costante elastica necessaria",
      x: "Allungamento o compressione necessari",
    },
    captions: {
      gEnergy: "PE = m × g × h",
      mass: "m = PE ÷ (g × h)",
      height: "h = PE ÷ (m × g)",
      eEnergy: "PE = ½ × k × x²",
      k: "k = 2 × PE ÷ x²",
      x: "x = √(2 × PE ÷ k)",
    },
    inUnit: "In {unit}",
    weight: "Peso (forza di gravità, m × g)",
    fallSpeed: "Velocità dopo una caduta dall'altezza h (senza resistenza dell'aria)",
    springForce: "Forza della molla a quello spostamento (k × x)",
    notes: {
      reference: "L'energia potenziale si misura rispetto all'altezza che hai scelto come zero. Contano solo le differenze di altezza.",
      gravity: "Usa g = {g} m/s², considerata costante lungo l'altezza.",
      hooke: "Presuppone una molla ideale che segue la legge di Hooke (F = k × x) e non viene allungata oltre il suo limite elastico.",
    },
  },
};

export default it;
