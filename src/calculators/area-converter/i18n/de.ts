import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AreaConverterText } from "../text/en";

const de: CalculatorTranslation<AreaConverterText> = {
  content: {
    title: "Flächenumrechner",
    shortTitle: "Fläche",
    summary: "Rechnen Sie zwischen Quadratmetern, Hektar, Quadratkilometern, Quadratfuß, Quadratyards, Acres, Quadratmeilen und weiteren Einheiten um.",
    metaTitle: "Flächenumrechner – Acre, Hektar, m² und ft²",
    metaDescription: "Rechnen Sie Flächen zwischen Quadratmetern, Hektar, km², Quadratzoll, Quadratfuß, Quadratyards, Acres und Quadratmeilen um – mit exakten Faktoren.",
    keywords: ["Flächenumrechner", "Flächeneinheiten umrechnen", "Acre in Hektar", "Quadratfuß in Quadratmeter", "m2 in ft2", "Hektar", "Acre", "Quadratmeilen", "Grundstücksfläche"],
    intro: [
      "Rechnen Sie eine Fläche von einer Einheit in eine andere um – ob Sie ein Grundstück in Acres mit einem in Hektar vergleichen oder die Grundfläche eines Zimmers in Quadratmetern ermitteln. Die Tabelle zeigt Ihren Wert gleichzeitig in allen zehn Einheiten.",
      "Jeder Faktor ist exakt. Quadrateinheiten sind das Quadrat einer Längeneinheit, also ist ein Quadratfuß 0,3048 m × 0,3048 m = 0,09290304 m², und ein Acre sind 43.560 Quadratfuß.",
    ],
    howToUse: [
      "Geben Sie die Fläche ein, die Sie umrechnen möchten.",
      "Wählen Sie die Ausgangseinheit und die gewünschte Zieleinheit.",
      "Lesen Sie den umgerechneten Wert ab oder sehen Sie in der Tabelle die anderen Einheiten.",
    ],
    formulas: [
      {
        title: "Umrechnung über Quadratmeter",
        expression: "Ergebnis = Wert × (m² pro Ausgangseinheit) ÷ (m² pro Zieleinheit)",
        explanation: "Jede Einheit entspricht einer festen Anzahl von Quadratmetern, daher lässt sich jedes Paar über m² umrechnen.",
      },
      {
        title: "Wichtige Faktoren",
        expression: "1 ha = 10.000 m²\n1 ft² = 0,09290304 m²\n1 yd² = 9 ft² = 0,83612736 m²\n1 acre = 43.560 ft² = 4.046,8564224 m²\n1 mi² = 640 acres = 2.589.988,110336 m²",
        explanation: "Die angloamerikanischen Werte ergeben sich aus dem internationalen Fuß von genau 0,3048 m.",
      },
    ],
    examples: [
      { title: "2,5 Acres in Hektar", steps: ["2,5 × 4.046,8564224 m² = 10.117,141056 m²", "10.117,141056 ÷ 10.000 ≈ 1,0117 ha"] },
      { title: "1.500 Quadratmeter in Quadratfuß", steps: ["1 ft² = 0,09290304 m²", "1.500 ÷ 0,09290304 ≈ 16.145,87 ft²"] },
      { title: "640 Acres in Quadratmeilen", steps: ["640 × 4.046,8564224 m² = 2.589.988,110336 m²", "2.589.988,110336 ÷ 2.589.988,110336 = 1 mi²"] },
    ],
    assumptions: [
      "Acres und Quadratmeilen beruhen auf dem internationalen Fuß. Der ältere US-Survey-Acre ist um etwa 4 Millionstel größer, was nur bei präzisen Landvermessungen eine Rolle spielt.",
      "Die Ergebnisse werden mit 10 signifikanten Stellen angezeigt.",
    ],
    faqs: [
      {
        question: "Wie viele Quadratfuß hat ein Acre?",
        answer: "Genau 43.560 Quadratfuß. Ein quadratisches Grundstück von einem Acre ist etwa 208,7 Fuß lang auf jeder Seite.",
      },
      {
        question: "Ist ein Hektar größer als ein Acre?",
        answer: "Ja. Ein Hektar sind 10.000 m², etwa 2,471 Acres; ein Acre ist also rund 0,405 Hektar.",
      },
      {
        question: "Warum ist ein Quadratmeter nicht 3,28 Quadratfuß?",
        answer: "Weil eine Fläche mit dem Quadrat der Länge wächst. Ein Meter sind etwa 3,2808 Fuß, also ist ein Quadratmeter etwa 3,2808² ≈ 10,764 Quadratfuß.",
      },
    ],
    sourcesUsedFor: [
      "Umrechnungsfaktoren für Acre, Quadratmeile, Quadratfuß und andere Flächeneinheiten in Quadratmeter.",
      "Definitionen des Acre (43.560 ft²) und der Quadratmeile (640 Acres).",
    ],
  },
  text: {
    value: "Wert",
    from: "Von",
    to: "In",
    unitNames: {
      mm2: "Quadratmillimeter",
      cm2: "Quadratzentimeter",
      m2: "Quadratmeter",
      ha: "Hektar",
      km2: "Quadratkilometer",
      in2: "Quadratzoll",
      ft2: "Quadratfuß",
      yd2: "Quadratyards",
      acre: "Acres",
      mi2: "Quadratmeilen",
    },
    primary: "{value} {symbol} in {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} in allen Flächeneinheiten",
    tableUnit: "Einheit",
    tableValue: "Wert",
    note: "Die Ergebnisse werden mit 10 signifikanten Stellen angezeigt.",
  },
};

export default de;
