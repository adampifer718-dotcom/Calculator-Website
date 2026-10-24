import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { GravelMulchText } from "../text/en";

const de: CalculatorTranslation<GravelMulchText> = {
  content: {
    title: "Kies- und Mulchrechner",
    shortTitle: "Kies und Mulch",
    summary: "Berechnen Sie, wie viele Kubikyard oder Kubikmeter Kies, Schotter oder Mulch Sie bestellen müssen, mit Gewicht, Anzahl der Säcke und Kosten.",
    metaTitle: "Kies- und Mulchrechner – Volumen, Tonnen und Säcke",
    metaDescription: "Schätzen Sie Kies, Schotter oder Mulch für eine rechteckige oder runde Fläche in Kubikyard oder m³, mit Gewicht in Tonnen, Anzahl der Säcke und Kosten.",
    keywords: ["Kies berechnen", "Mulch berechnen", "wie viel Kies", "Kies Kubikmeter", "Kies Tonnen", "Schotter berechnen", "Rindenmulch Säcke"],
    intro: [
      "Kies, Schotter und Mulch werden nach Volumen (Kubikyard oder Kubikmeter) oder nach Gewicht (US-Tonnen oder metrische Tonnen) verkauft. Um die Bestellmenge zu ermitteln, multiplizieren Sie die zu bedeckende Fläche mit der Schichtdicke und rechnen dieses Volumen anschließend mit der Schüttdichte des Materials in ein Gewicht um.",
      "Dieser Rechner verarbeitet rechteckige und runde Beete in US- oder metrischen Einheiten und zeigt das Volumen in beiden Systemen, das Gewicht, die Anzahl der Säcke bei Sackware und die Kosten bei einem Preis pro Tonne oder pro Kubikyard.",
    ],
    howToUse: [
      "Wählen Sie US-Einheiten (Fuß und Zoll) oder metrische Einheiten (Meter und Zentimeter).",
      "Wählen Sie Rechteck oder Kreis und geben Sie die Maße ein.",
      "Geben Sie die Dicke der Schicht ein, die Sie ausbringen möchten.",
      "Wählen Sie das Material. Eine typische Schüttdichte ist vorausgefüllt; ersetzen Sie sie durch den Wert Ihres Lieferanten, wenn Sie ihn kennen.",
      "Geben Sie optional eine Sackgröße und einen Preis pro Tonne oder pro Kubikyard (metrisch pro Tonne oder m³) ein, um Säcke und Kosten zu sehen.",
    ],
    formulas: [
      { title: "Fläche", expression: "A = L × B, oder A = π × d² ÷ 4 für einen Kreis", explanation: "L und B sind Länge und Breite, d der Durchmesser." },
      { title: "Volumen", expression: "V = A × Dicke", explanation: "Mit Fuß und Zoll gilt V (ft³) = A × Dicke (in) ÷ 12 und 1 yd³ = 27 ft³. Mit Metern und Zentimetern gilt V (m³) = A × Dicke (cm) ÷ 100." },
      { title: "Gewicht", expression: "Gewicht = V × Schüttdichte", explanation: "1 US-Tonne (short ton) = 2.000 lb; 1 metrische Tonne = 1.000 kg." },
      { title: "Säcke", expression: "Säcke = ⌈V ÷ Sackgröße⌉", explanation: "Auf einen ganzen Sack aufgerundet." },
    ],
    examples: [
      { title: "Kiesweg mit 20 ft × 4 ft, 3 in dick", steps: ["Volumen = 20 × 4 × 3 ÷ 12 = 20 ft³", "= 20 ÷ 27 ≈ 0,74 yd³", "Gewicht = 20 × 100 = 2.000 lb = 1 US-Tonne, also etwa 45 $ bei 45 $ pro Tonne"] },
      { title: "Runde Baumscheibe mit 3 m Durchmesser und 8 cm Rindenmulch in 50-L-Säcken", steps: ["Fläche = π × 3² ÷ 4 ≈ 7,07 m²", "Volumen = 7,07 × 0,08 ≈ 0,565 m³ (565 L)", "Säcke = 565 ÷ 50 ≈ 11,3, also 12 Säcke kaufen; Gewicht ≈ 170 kg"] },
      { title: "Schotterfläche mit 12 ft × 10 ft, 4 in dick, zu 38 $ pro Kubikyard", steps: ["Volumen = 12 × 10 × 4 ÷ 12 = 40 ft³ ≈ 1,48 yd³", "Gewicht = 40 × 92,6 = 3.704 lb ≈ 1,85 US-Tonnen", "Kosten = 1,48 × 38 $ ≈ 56,30 $"] },
    ],
    assumptions: [
      "Die Schüttdichten sind typische Werte für lockeres, trockenes Material, gerundet aus veröffentlichten Tabellen. Tatsächliche Dichten schwanken mit Gesteinsart, Feuchtigkeit, Körnung und Verdichtung; nasses Material kann deutlich mehr wiegen. Fragen Sie Ihren Lieferanten.",
      "Die Fläche wird als eben und die Schicht als gleichmäßig dick behandelt. Verdichtete Tragschichten benötigen mehr loses Material als ihr fertiges Volumen.",
      "Die Preise sind die von Ihnen eingegebenen Werte; die Kosten enthalten weder Lieferung noch Steuern, Beeteinfassungen oder Vlies.",
    ],
    faqs: [
      { question: "Wie dick sollte Kies oder Mulch sein?", answer: "Dekorativer Mulch wird oft etwa 2–4 in (5–10 cm) dick ausgebracht, dekorativer Kies 2–3 in. Einfahrten und Wege mit verdichtetem Unterbau brauchen dickere Schichten; richten Sie sich nach den Vorgaben für Ihr Vorhaben." },
      { question: "Wie viele Quadratfuß deckt ein Kubikyard ab?", answer: "Ein Kubikyard deckt bei 1 in Dicke 324 ft² ab, bei 3 in 108 ft² und bei 4 in 81 ft². Teilen Sie 324 durch die Dicke in Zoll." },
      { question: "Warum nennt mein Lieferant ein anderes Gewicht?", answer: "Die Schüttdichte hängt vom Gestein, der Korngröße und der Feuchtigkeit des Materials ab. Lieferanten kennen das Gewicht ihrer eigenen Produkte, verwenden Sie daher deren Wert, wenn Sie nach Tonnen bestellen." },
    ],
    sourcesUsedFor: [
      "Typische Gewichte von etwa 2.700 lb pro Kubikyard für Kies und 2.500 lb pro Kubikyard für Schotter, verwendet für die voreingestellten Dichten.",
      "Ein typisches Gewicht von etwa 500 lb pro Kubikyard für gehäckselte Holzschnitzel, verwendet für den Mulch-Standardwert.",
    ],
  },
  text: {
    units: "Einheiten",
    unitSystems: { imperial: "US (ft, in)", metric: "Metrisch (m, cm)" },
    shape: "Form der Fläche",
    shapes: { rectangle: "Rechteck", circle: "Kreis" },
    length: "Länge",
    width: "Breite",
    diameter: "Durchmesser",
    depth: "Schichtdicke",
    depthHelp: "Die fertige Dicke der Schicht. Dekorativer Kies und Mulch werden oft etwa 2–4 in (5–10 cm) dick ausgebracht.",
    material: "Material",
    materials: { gravel: "Kies", crushedStone: "Schotter", woodMulch: "Holzschnitzel oder Rindenmulch", custom: "Anderes (Dichte eingeben)" },
    density: "Schüttdichte",
    densityHelp: "Gewicht pro Einheit lockeren Volumens. Ein typischer Wert ist vorausgefüllt; der Wert Ihres Lieferanten für das genaue Produkt ist besser, weil Feuchtigkeit und Körnung ihn verändern.",
    bag: "Sackgröße (optional)",
    bagHelp: "Ausfüllen, um zu sehen, wie viele Säcke Sie statt einer losen Lieferung kaufen müssen.",
    priceBasis: "Preis gilt",
    priceBases: { weight: "Pro US-Tonne / Tonne", volume: "Pro Kubikyard / m³" },
    price: "Preis (optional)",
    priceHelp: "Leer lassen, um die Kostenschätzung zu überspringen.",
    volume: "Benötigtes Volumen",
    caption: "{area}, {depth} dick bedeckt.",
    area: "Bedeckte Fläche",
    volumeCubicFeet: "Volumen in Kubikfuß",
    volumeOther: "Volumen im anderen System",
    weightShortTons: "Gewicht in US-Tonnen (short tons)",
    weightTonnes: "Gewicht in metrischen Tonnen",
    weightPounds: "Gewicht in Pfund",
    weightKilograms: "Gewicht in Kilogramm",
    bags: "Benötigte Säcke",
    shortTonUnit: "sh tn",
    cost: "Geschätzte Kosten",
    notes: {
      density: "Das Gewicht beruht auf einer Schüttdichte von {density}. Dichten schwanken mit Feuchtigkeit, Körnung und Verdichtung; fragen Sie Ihren Lieferanten.",
      order: "Lieferanten verkaufen meist in festen Mengenschritten, runden Sie die Bestellung daher auf und planen Sie etwas mehr für Setzung und unebenen Boden ein.",
      shortTon: "Eine US-Tonne (short ton) sind 2.000 lb (907,18474 kg); eine metrische Tonne sind 1.000 kg.",
    },
  },
};

export default de;
