import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CircumferenceText } from "../text/en";

const de: CalculatorTranslation<CircumferenceText> = {
  content: {
    title: "Kreisumfangrechner",
    shortTitle: "Kreisumfang",
    summary: "Ermitteln Sie den Umfang eines Kreises aus Radius, Durchmesser oder Fläche – zusammen mit den übrigen Maßen.",
    metaTitle: "Kreisumfangrechner – Radius, Durchmesser, Fläche",
    metaDescription: "Berechnen Sie den Umfang eines Kreises aus Radius, Durchmesser oder Fläche und sehen Sie die übrigen Maße – mit der Formel C = 2πr.",
    keywords: ["Kreisumfang berechnen", "Umfang Kreis", "Radius berechnen", "Durchmesser berechnen", "Kreisfläche", "Kreis berechnen", "Pi"],
    intro: [
      "Der Umfang ist die Länge der Linie um einen Kreis herum. Er beträgt π mal den Durchmesser bzw. 2π mal den Radius.",
      "Geben Sie das Maß ein, das Sie kennen, und der Rechner ermittelt die übrigen in derselben Einheit.",
    ],
    howToUse: [
      "Wählen Sie, welches Maß Sie kennen.",
      "Geben Sie seinen Wert ein.",
      "Lesen Sie Umfang, Radius, Durchmesser und Fläche ab.",
    ],
    formulas: [
      { title: "Umfang", expression: "C = 2πr = πd", explanation: "π ≈ 3,14159265." },
      { title: "Aus der Fläche", expression: "r = √(A ÷ π)", explanation: "Anschließend C = 2πr verwenden." },
    ],
    examples: [
      { title: "Radius 5", steps: ["C = 2 × π × 5", "≈ 31,415927"] },
      { title: "Durchmesser 10", steps: ["C = π × 10", "≈ 31,415927"] },
    ],
    assumptions: [
      "Die Ergebnisse verwenden π mit voller Genauigkeit und werden mit 6 Nachkommastellen angezeigt.",
      "Die Fläche wird in Quadrateinheiten Ihrer Eingabe angegeben.",
    ],
    faqs: [
      { question: "Wie berechne ich den Umfang aus dem Durchmesser?", answer: "Multiplizieren Sie den Durchmesser mit π. Ein Durchmesser von 20 cm ergibt etwa 62,83 cm." },
      { question: "Wie berechne ich den Radius aus dem Umfang?", answer: "Teilen Sie den Umfang durch 2π." },
      { question: "Was ist der Unterschied zwischen Umfang und Fläche?", answer: "Der Umfang ist die Länge rund um den Kreis, die Fläche ist der Raum innerhalb des Kreises." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    known: "Bekanntes Maß",
    options: { radius: "Radius", diameter: "Durchmesser", area: "Fläche" },
    radius: "Radius (r)",
    diameter: "Durchmesser (d)",
    area: "Fläche (A)",
    circumference: "Umfang",
    caption: "In derselben Einheit wie Ihre Eingabe.",
    radiusOut: "Radius",
    diameterOut: "Durchmesser",
    areaOut: "Fläche",
  },
};

export default de;
