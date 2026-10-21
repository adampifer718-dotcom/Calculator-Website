import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SquareFootageText } from "../text/en";

const it: CalculatorTranslation<SquareFootageText> = {
  content: {
    title: "Calcolatore della superficie in piedi quadrati",
    shortTitle: "Piedi quadrati",
    summary: "Trova la superficie di un rettangolo, un cerchio o un triangolo in piedi quadrati, metri quadrati e iarde quadrate.",
    metaTitle: "Calcolatore di piedi quadrati – Superficie in ft² e m²",
    metaDescription:
      "Calcola la superficie in piedi quadrati di rettangoli, cerchi e triangoli da misure in piedi, pollici, iarde, metri o centimetri, anche in m² e iarde quadrate.",
    keywords: ["piedi quadrati", "ft²", "superficie", "superficie del pavimento", "metratura stanza", "pavimentazione", "metri quadrati", "m2"],
    intro: [
      "La superficie in piedi quadrati è l'area di una superficie misurata in piedi quadrati. Si usa per pavimenti, pittura, piastrelle, moquette e annunci immobiliari.",
      "Misura ogni dimensione, scegli la forma e l'unità, e il calcolatore converte la superficie in piedi quadrati, metri quadrati e iarde quadrate.",
    ],
    howToUse: [
      "Scegli la forma: rettangolo, cerchio o triangolo.",
      "Scegli l'unità in cui hai misurato.",
      "Inserisci le dimensioni e, se serve, quante superfici identiche ci sono.",
      "Leggi la superficie in piedi quadrati, metri quadrati e iarde quadrate.",
    ],
    formulas: [
      { title: "Rettangolo", expression: "Superficie = lunghezza × larghezza", explanation: "Per stanze quadrate e rettangolari." },
      { title: "Cerchio", expression: "Superficie = π × (diametro ÷ 2)²", explanation: "Metà del diametro è il raggio." },
      { title: "Triangolo", expression: "Superficie = base × altezza ÷ 2", explanation: "L'altezza si misura perpendicolarmente alla base." },
      {
        title: "Conversione di unità",
        expression: "1 ft = 12 in = 0,3048 m\n1 ft² = 0,09290304 m²\n1 yd² = 9 ft²",
        explanation: "Le superfici si convertono con il quadrato del fattore di lunghezza.",
      },
    ],
    examples: [
      { title: "Una stanza di 12 ft × 15 ft", steps: ["Superficie = 12 × 15 = 180 ft²", "180 × 0,09290304 = 16,72 m²"] },
      { title: "Una stanza di 4 m × 3,5 m", steps: ["Superficie = 4 × 3,5 = 14 m²", "14 ÷ 0,09290304 = 150,69 ft²"] },
      { title: "Un patio circolare di 10 ft di diametro", steps: ["Raggio = 10 ÷ 2 = 5 ft", "Superficie = π × 5² = 78,54 ft²"] },
    ],
    assumptions: [
      "Le misure sono prese ad angolo retto e la forma è regolare.",
      "Per stanze a L o irregolari, dividi lo spazio in rettangoli e somma i risultati.",
      "Aggiungi materiale in più (spesso il 5–10%) per tagli e sfridi; questo calcolatore fornisce solo la superficie esatta.",
    ],
    faqs: [
      { question: "Come si calcolano i piedi quadrati?", answer: "Moltiplica la lunghezza per la larghezza in piedi. Una stanza di 10 ft per 12 ft misura 120 piedi quadrati." },
      {
        question: "Come si convertono i metri quadrati in piedi quadrati?",
        answer: "Dividi per 0,09290304, oppure moltiplica per circa 10,764. Quindi 20 m² sono circa 215,3 ft².",
      },
      { question: "Come si misura una stanza a L?", answer: "Dividila in due rettangoli, calcola la superficie di ciascuno e sommale." },
    ],
    sourcesUsedFor: ["Fattori esatti di conversione delle lunghezze (1 ft = 0,3048 m, 1 in = 2,54 cm)."],
  },
  text: {
    shape: "Forma",
    shapes: { rectangle: "Rettangolo o quadrato", circle: "Cerchio", triangle: "Triangolo" },
    unit: "Unità di misura",
    units: { ft: "Piedi (ft)", in: "Pollici (in)", yd: "Iarde (yd)", m: "Metri (m)", cm: "Centimetri (cm)" },
    length: "Lunghezza",
    width: "Larghezza",
    diameter: "Diametro",
    base: "Base",
    height: "Altezza",
    quantity: "Numero di superfici",
    quantityHelp: "Per più stanze o pezzi identici.",
    area: "Superficie",
    quantityCaption: "Totale per {count} superfici identiche.",
    sqM: "Metri quadrati",
    sqYd: "Iarde quadrate",
    sqUnit: "Superficie in {unit}²",
    sqFtSuffix: "ft²",
    sqYdSuffix: "yd²",
  },
};

export default it;
