import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WindTurbineText } from "../text/en";

const it: CalculatorTranslation<WindTurbineText> = {
  content: {
    title: "Calcolatore della potenza di una turbina eolica",
    shortTitle: "Potenza turbina eolica",
    summary:
      "Stima la potenza di una turbina eolica dal diametro del rotore, dalla velocità del vento, dalla densità dell'aria e dal coefficiente di potenza, con un valore indicativo dell'energia annua.",
    metaTitle: "Calcolatore turbina eolica – Potenza in kW e kWh",
    metaDescription:
      "Calcola la potenza di una turbina eolica da diametro del rotore, velocità del vento, densità dell'aria e coefficiente di potenza, confrontala col limite di Betz e stima i kWh annui.",
    keywords: [
      "turbina eolica",
      "potenza eolica formula",
      "producibilità aerogeneratore",
      "area spazzata",
      "coefficiente di potenza",
      "limite di Betz",
      "fattore di capacità",
      "energia eolica kWh",
    ],
    intro: [
      "Una turbina eolica trasforma in elettricità una parte dell'energia cinetica dell'aria in movimento. La potenza disponibile dipende da quanta aria attraversa il cerchio spazzato dalle pale, da quanto è densa quest'aria e soprattutto da quanto velocemente si muove: la potenza cresce con il cubo della velocità del vento, quindi raddoppiando la velocità si ottiene una potenza otto volte maggiore.",
      "Inserisci il diametro del rotore, la velocità del vento e il coefficiente di potenza della turbina per stimarne la potenza. Puoi anche limitare il risultato alla potenza nominale del generatore e aggiungere un fattore di capacità per un valore indicativo dell'energia annua.",
    ],
    howToUse: [
      "Inserisci il diametro del rotore in metri o in piedi.",
      "Inserisci la velocità del vento all'altezza del mozzo e scegli la sua unità.",
      "Mantieni la densità dell'aria standard di 1,225 kg/m³, oppure inserisci un valore adatto alla tua altitudine e temperatura.",
      "Inserisci il coefficiente di potenza Cp. 0,40 è un valore ragionevole per una buona turbina moderna; non può superare il limite di Betz di circa 0,593.",
      "Se vuoi, inserisci la potenza nominale per limitare la potenza erogata e un fattore di capacità per stimare l'energia in un anno.",
    ],
    formulas: [
      { title: "Area spazzata", expression: "A = π × (D ÷ 2)²", explanation: "D è il diametro del rotore. Un rotore di 80 m spazza circa 5.027 m²." },
      {
        title: "Potenza della turbina",
        expression: "P = ½ × ρ × A × v³ × Cp",
        explanation: "ρ è la densità dell'aria in kg/m³, v la velocità del vento in m/s e Cp il coefficiente di potenza. Il risultato è in watt.",
      },
      {
        title: "Limite di Betz",
        expression: "Cp ≤ 16/27 ≈ 0,593",
        explanation:
          "Un rotore ideale può catturare al massimo 16/27 della potenza del vento che lo attraversa. Le turbine reali ne catturano meno, di solito ben al di sotto di 0,5 anche nel loro punto di funzionamento migliore.",
      },
      {
        title: "Energia annua (indicativa)",
        expression: "E = P × 8.760 h × fattore di capacità",
        explanation: "P è la potenza erogata, limitata alla potenza nominale se indicata. Il fattore di capacità tiene conto dei periodi in cui il vento è più debole.",
      },
    ],
    examples: [
      {
        title: "Rotore di 80 m con vento a 10 m/s",
        steps: ["A = π × 40² ≈ 5.026,55 m²", "P = 0,5 × 1,225 × 5.026,55 × 10³ × 0,40 ≈ 1.231.504 W", "Potenza ≈ 1.231,50 kW, circa 1,23 MW"],
      },
      {
        title: "Piccola turbina da 10 ft con una brezza a 12 mph",
        steps: ["D = 10 × 0,3048 = 3,048 m, quindi A ≈ 7,297 m²", "v = 12 × 0,44704 = 5,364 m/s", "P = 0,5 × 1,225 × 7,297 × 5,364³ × 0,35 ≈ 241 W, circa 0,24 kW"],
      },
      {
        title: "Rotore di 100 m da 2.500 kW nominali, vento a 12 m/s, fattore di capacità del 35%",
        steps: [
          "A = π × 50² ≈ 7.853,98 m²",
          "Potenza del rotore = 0,5 × 1,225 × 7.853,98 × 12³ × 0,45 ≈ 3.740,69 kW, oltre i 2.500 kW nominali",
          "La potenza erogata è limitata a 2.500 kW",
          "Energia annua ≈ 2.500 × 8.760 × 0,35 = 7.665.000 kWh",
        ],
      },
    ],
    assumptions: [
      "La velocità del vento è considerata costante e uniforme su tutto il rotore. Il vento reale cambia di secondo in secondo e con l'altezza e, poiché la potenza dipende dal cubo della velocità, la potenza media è maggiore della potenza alla velocità media.",
      "Il coefficiente di potenza è considerato costante. In realtà varia con la velocità del vento, e ogni turbina ha la propria curva di potenza, velocità di avviamento e velocità di arresto.",
      "L'energia annua è una stima indicativa basata sulla formula sopra, non una valutazione del sito. Per progettare un impianto reale servono dati di vento misurati e la curva di potenza del costruttore.",
      "Si presume che le perdite del generatore, del moltiplicatore di giri e dell'impianto elettrico siano già comprese nel coefficiente di potenza che inserisci.",
    ],
    faqs: [
      {
        question: "Che cos'è il limite di Betz?",
        answer:
          "È la quota massima teorica della potenza del vento che un rotore può estrarre: 16/27, cioè circa il 59,3%. Se un rotore fermasse completamente l'aria, non potrebbe più attraversarlo altra aria, quindi nel vento che lascia la turbina deve sempre restare un po' di energia.",
      },
      {
        question: "Perché la velocità del vento conta così tanto?",
        answer:
          "La potenza del vento cresce con il cubo della velocità. Un sito con un vento medio di 7 m/s ha circa il 31% di potenza disponibile in più ((7 ÷ 6,4)³ ≈ 1,31) rispetto a uno con 6,4 m/s, quindi piccole differenze di posizione e di altezza della torre fanno una grande differenza.",
      },
      {
        question: "Quale fattore di capacità devo usare?",
        answer:
          "Dipende molto dal sito, dall'altezza della torre e dalla turbina, quindi non esiste un unico valore corretto. Usa dati di vento misurati nel tuo sito, oppure valori pubblicati per turbine simili nella tua zona. Le piccole turbine in posizioni riparate raggiungono spesso valori molto più bassi delle grandi turbine in siti aperti e ventosi.",
      },
    ],
    sourcesUsedFor: [
      "La potenza del vento, P = ½ρAv³, il coefficiente di potenza e il limite di Betz di 16/27.",
      "La densità dell'aria al livello del mare dell'atmosfera standard internazionale, 1,225 kg/m³.",
    ],
  },
  text: {
    diameter: "Diametro del rotore",
    diameterHelp: "Il diametro del cerchio descritto dalle punte delle pale (due volte la lunghezza della pala più il mozzo).",
    diameterUnit: "Unità del diametro",
    diameterUnits: { m: "Metri (m)", ft: "Piedi (ft)" },
    speed: "Velocità del vento",
    speedHelp: "La velocità del vento all'altezza del mozzo. La potenza cresce con il cubo della velocità, quindi anche una piccola variazione conta molto.",
    speedUnit: "Unità di velocità",
    speedUnits: { ms: "Metri al secondo (m/s)", kmh: "Chilometri orari (km/h)", mph: "Miglia orarie (mph)", kn: "Nodi (kn)" },
    density: "Densità dell'aria",
    densityHelp:
      "1,225 kg/m³ è il valore dell'atmosfera standard internazionale al livello del mare e a 15 °C. In quota e con il caldo l'aria è più rarefatta.",
    cp: "Coefficiente di potenza (Cp)",
    cpHelp:
      "La quota della potenza del vento che il rotore converte in potenza utile. 0,40 è un valore ragionevole per una buona turbina moderna; il massimo teorico è 16/27 ≈ 0,593 (il limite di Betz).",
    ratedPower: "Potenza nominale (facoltativa)",
    ratedPowerHelp: "La potenza di targa del generatore. Se la indichi, la potenza erogata viene limitata a questo valore.",
    capacityFactor: "Fattore di capacità (facoltativo)",
    capacityFactorHelp:
      "La potenza media nell'arco di un anno, in percentuale della potenza usata per la stima. Lascia vuoto per non calcolare l'energia annua.",
    errors: {
      betz: "Il coefficiente di potenza non può superare 16/27 ≈ 0,5926 (il limite di Betz). Nessun rotore può catturare una quota maggiore della potenza del vento.",
    },
    power: "Potenza erogata dalla turbina",
    caption: "Area spazzata {area}, vento {speed}, Cp {cp}.",
    powerW: "Potenza in watt",
    aeroPower: "Potenza del rotore prima del limite di potenza nominale",
    windPower: "Potenza del vento attraverso l'area spazzata (Cp = 1)",
    betzPower: "Potenza massima catturabile da qualsiasi rotore (limite di Betz)",
    sweptArea: "Area spazzata",
    speedMs: "Velocità del vento in m/s",
    annualEnergy: "Energia annua, stima indicativa",
    annualEnergyMwh: "Energia annua in MWh",
    notes: {
      capped:
        "A questa velocità del vento il rotore potrebbe produrre più della potenza nominale, quindi la potenza erogata è limitata ai {rated} nominali.",
      annual:
        "L'energia annua è una stima indicativa: la potenza sopra × 8.760 ore × il fattore di capacità. La produzione reale dipende da come varia la velocità del vento durante l'anno, dalla curva di potenza della turbina, dai fermi e dalle perdite.",
      single:
        "Questa è la potenza a una sola velocità del vento costante. Il vento reale cambia di continuo e le turbine non producono nulla sotto la velocità di avviamento e si fermano sopra la velocità di arresto.",
    },
  },
};

export default it;
