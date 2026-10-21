import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { KineticEnergyText } from "../text/en";

const it: CalculatorTranslation<KineticEnergyText> = {
  content: {
    title: "Calcolatore di energia cinetica",
    shortTitle: "Energia cinetica",
    summary: "Calcola l'energia cinetica di un oggetto in movimento a partire dalla sua massa e dalla sua velocità.",
    metaTitle: "Calcolatore di energia cinetica – KE = ½mv²",
    metaDescription:
      "Calcola l'energia cinetica da massa e velocità in kg o lb e in m/s, km/h o mph. Risultati in joule, kilojoule e wattora.",
    keywords: ["energia cinetica", "energia", "joule", "massa", "velocità", "fisica", "1/2 mv2"],
    intro: [
      "L'energia cinetica è l'energia che un oggetto possiede perché è in movimento. Cresce con il quadrato della velocità, quindi raddoppiare la velocità quadruplica l'energia.",
      "Inserisci la massa e la velocità nelle unità che hai.",
    ],
    howToUse: [
      "Inserisci la massa e scegli chilogrammi o libbre.",
      "Inserisci la velocità e scegli m/s, km/h o mph.",
      "Leggi l'energia cinetica in joule e in altre unità.",
    ],
    formulas: [
      { title: "Energia cinetica", expression: "KE = ½ × m × v²", explanation: "m in chilogrammi, v in metri al secondo, KE in joule." },
    ],
    examples: [
      { title: "1.000 kg a 20 m/s", steps: ["KE = 0,5 × 1.000 × 20²", "= 200.000 J"] },
      { title: "Auto da 1.500 kg a 100 km/h", steps: ["100 km/h ≈ 27,78 m/s", "KE = 0,5 × 1.500 × 27,78² ≈ 578.704 J"] },
    ],
    assumptions: [
      "Usa la meccanica classica, precisa per velocità molto inferiori a quella della luce.",
      "L'energia di rotazione (ad esempio delle ruote) non è inclusa.",
    ],
    faqs: [
      { question: "Perché la velocità conta più della massa?", answer: "L'energia cinetica dipende dal quadrato della velocità. Passare da 50 a 100 km/h quadruplica l'energia." },
      { question: "In quale unità si misura l'energia cinetica?", answer: "In joule (J). Un joule è un chilogrammo per metro quadrato al secondo quadrato." },
      { question: "L'energia cinetica può essere negativa?", answer: "No. La massa è positiva e la velocità è al quadrato, quindi l'energia cinetica è zero o positiva." },
    ],
    sourcesUsedFor: ["Definizione KE = ½mv².", "Fattori di conversione esatti per libbre, km/h e mph."],
  },
  text: {
    mass: "Massa",
    massUnit: "Unità di massa",
    massUnits: { kg: "Chilogrammi (kg)", lb: "Libbre (lb)" },
    velocity: "Velocità",
    velocityUnit: "Unità di velocità",
    velocityUnits: { "m/s": "Metri al secondo (m/s)", "km/h": "Chilometri orari (km/h)", mph: "Miglia orarie (mph)" },
    energy: "Energia cinetica",
    kj: "In kilojoule",
    wh: "In wattora",
    mps: "Velocità in m/s",
    note: "Energia cinetica classica (non relativistica), precisa per le velocità di tutti i giorni.",
  },
};

export default it;
