import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DensityText } from "../text/en";

const de: CalculatorTranslation<DensityText> = {
  content: {
    title: "Dichterechner",
    shortTitle: "Dichte",
    summary: "Berechnen Sie die Dichte aus Masse und Volumen oder umgekehrt eine Masse oder ein Volumen – in metrischen oder US-Einheiten.",
    metaTitle: "Dichterechner – ρ = m/V nach jedem Wert lösen",
    metaDescription: "Lösen Sie ρ = m/V nach Dichte, Masse oder Volumen. Eingabe in g, kg oder lb und cm³, L, m³ oder ft³; Ergebnis in kg/m³, g/cm³ und lb/ft³.",
    keywords: ["Dichte berechnen", "Dichterechner", "Masse und Volumen", "Rho", "kg/m3", "g/cm3", "lb/ft3", "relative Dichte", "Wichte"],
    intro: [
      "Die Dichte gibt an, wie viel Masse in einem bestimmten Volumen steckt. Ein Liter Wasser hat eine Masse von etwa einem Kilogramm, ein Liter Stahl dagegen fast acht.",
      "Dieser Rechner stellt ρ = m/V um, sodass Sie den jeweils fehlenden der drei Werte bestimmen können. Die Einheiten werden für Sie umgerechnet, und das Ergebnis wird zusätzlich in kg/m³, g/cm³ und lb/ft³ bzw. in den anderen Masse- oder Volumeneinheiten angezeigt.",
    ],
    howToUse: [
      "Wählen Sie, was Sie berechnen möchten: Dichte, Masse oder Volumen.",
      "Geben Sie die beiden bekannten Werte ein und wählen Sie für jeden eine Einheit.",
      "Wählen Sie in der Einheitenliste des gesuchten Werts die Einheit, in der das Ergebnis erscheinen soll.",
      "Lesen Sie das Ergebnis, seine Werte in anderen Einheiten und den Vergleich mit Wasser ab.",
    ],
    formulas: [
      { title: "Dichte", expression: "ρ = m ÷ V", explanation: "Masse geteilt durch das Volumen, das sie einnimmt." },
      { title: "Masse", expression: "m = ρ × V", explanation: "Dichte mal Volumen." },
      { title: "Volumen", expression: "V = m ÷ ρ", explanation: "Masse geteilt durch Dichte." },
      {
        title: "Umrechnungsfaktoren",
        expression: "1 g/cm³ = 1.000 kg/m³ ≈ 62,428 lb/ft³",
        explanation: "Beruht auf den exakten Definitionen 1 lb = 0,45359237 kg und 1 ft³ = 0,028316846592 m³.",
      },
    ],
    examples: [
      { title: "Ein Metallblock mit 810 g und 300 cm³", steps: ["ρ = 810 g ÷ 300 cm³", "= 2,7 g/cm³, also 2.700 kg/m³"] },
      { title: "Masse von 2,5 L Öl mit 0,92 g/cm³", steps: ["0,92 g/cm³ = 920 kg/m³ und 2,5 L = 0,0025 m³", "m = 920 × 0,0025 = 2,3 kg"] },
      { title: "Volumen von 39,25 kg Stahl mit 7.850 kg/m³", steps: ["V = 39,25 ÷ 7.850 = 0,005 m³", "0,005 m³ = 5 L"] },
    ],
    assumptions: [
      "Das Material wird als homogen betrachtet, sodass eine einzige Dichte die gesamte Probe beschreibt.",
      "Der Vergleich mit Wasser verwendet 1.000 kg/m³. Echtes Wasser ist bei Raumtemperatur etwas weniger dicht (etwa 998 kg/m³ bei 20 °C).",
      "Die Dichte von Flüssigkeiten und Gasen hängt von Temperatur und Druck ab. Verwenden Sie eine Dichte, die unter Ihren Bedingungen gemessen wurde.",
    ],
    faqs: [
      {
        question: "Ist 1 g/cm³ dasselbe wie 1 g/mL?",
        answer: "Ja. Ein Kubikzentimeter und ein Milliliter sind dasselbe Volumen, daher sind beide Einheiten identisch.",
      },
      { question: "Wie rechne ich g/cm³ in kg/m³ um?", answer: "Multiplizieren Sie mit 1.000. Zum Beispiel entsprechen 2,7 g/cm³ genau 2.700 kg/m³." },
      {
        question: "Was ist die relative Dichte?",
        answer: "Die Dichte eines Materials geteilt durch die Dichte von Wasser. Ein Wert über 1 bedeutet, dass das Material in Wasser sinkt; ein Wert unter 1, dass es schwimmt.",
      },
    ],
    sourcesUsedFor: [
      "Definition ρ = m/V und die SI-Einheit kg/m³.",
      "Umrechnungsfaktoren für das Pfund, den Kubikfuß und lb/ft³.",
    ],
  },
  text: {
    solve: "Gesuchter Wert",
    solveOptions: { density: "Dichte (ρ)", mass: "Masse (m)", volume: "Volumen (V)" },
    mass: "Masse (m)",
    massUnit: "Masseeinheit",
    massUnits: { g: "Gramm (g)", kg: "Kilogramm (kg)", lb: "Pfund (lb)" },
    volume: "Volumen (V)",
    volumeUnit: "Volumeneinheit",
    volumeUnits: { cm3: "Kubikzentimeter (cm³ = mL)", L: "Liter (L)", m3: "Kubikmeter (m³)", ft3: "Kubikfuß (ft³)" },
    density: "Dichte (ρ)",
    densityUnit: "Dichteeinheit",
    densityUnits: {
      gcm3: "Gramm pro Kubikzentimeter (g/cm³)",
      kgm3: "Kilogramm pro Kubikmeter (kg/m³)",
      lbft3: "Pfund pro Kubikfuß (lb/ft³)",
    },
    unitHelp: "Beim gesuchten Wert ist dies die Einheit des Ergebnisses.",
    results: { density: "Dichte", mass: "Masse", volume: "Volumen" },
    inUnit: "In {unit}",
    relative: "Relativ zu Wasser (1.000 kg/m³)",
    floats: "Weniger dicht als Wasser, würde also in reinem Wasser schwimmen.",
    sinks: "Dichter als Wasser, würde also in reinem Wasser sinken.",
    note: "1 cm³ entspricht 1 mL. Die Dichte von Flüssigkeiten und Gasen ändert sich mit der Temperatur, bei Gasen zusätzlich mit dem Druck.",
  },
};

export default de;
