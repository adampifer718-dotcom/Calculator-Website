import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { LengthConverterText } from "../text/en";

const de: CalculatorTranslation<LengthConverterText> = {
  content: {
    title: "Längenumrechner",
    shortTitle: "Länge",
    summary: "Rechnen Sie zwischen Millimetern, Zentimetern, Metern, Kilometern, Zoll, Fuß, Yards, Meilen und Seemeilen um.",
    metaTitle: "Längenumrechner – metrische und angloamerikanische Einheiten",
    metaDescription:
      "Rechnen Sie Längen zwischen mm, cm, m, km, Zoll, Fuß, Yards, Meilen und Seemeilen um – mit exakten Umrechnungsfaktoren.",
    keywords: ["Längenumrechner", "Einheiten umrechnen", "km in Meilen", "Fuß in Meter", "Zoll in cm", "Längeneinheiten", "Meilen in km"],
    intro: [
      "Rechnen Sie jede Länge zwischen neun gängigen Einheiten um. Die Tabelle zeigt Ihren Wert gleichzeitig in allen Einheiten.",
      "Alle Faktoren sind per Definition exakt: Ein Zoll ist genau 2,54 cm und eine Meile genau 1.609,344 m.",
    ],
    howToUse: [
      "Geben Sie den Wert ein.",
      "Wählen Sie die Ausgangseinheit und die gewünschte Zieleinheit.",
      "Lesen Sie das Ergebnis ab oder sehen Sie in der Tabelle alle Einheiten.",
    ],
    formulas: [
      {
        title: "Umrechnung über Meter",
        expression: "Ergebnis = Wert × (Meter pro Ausgangseinheit) ÷ (Meter pro Zieleinheit)",
        explanation: "Jede Einheit ist als feste Anzahl von Metern definiert.",
      },
      {
        title: "Wichtige Faktoren",
        expression: "1 in = 0,0254 m\n1 ft = 0,3048 m\n1 yd = 0,9144 m\n1 mi = 1.609,344 m\n1 nmi = 1.852 m",
        explanation: "Exakte Werte aus dem internationalen Yard-und-Pfund-Abkommen von 1959 und dem SI.",
      },
    ],
    examples: [
      { title: "10 Kilometer in Meilen", steps: ["10 × 1.000 m = 10.000 m", "10.000 ÷ 1.609,344 ≈ 6,2137 mi"] },
      { title: "6 Fuß in Meter", steps: ["6 × 0,3048", "= 1,8288 m"] },
    ],
    assumptions: [
      "Es werden internationale Einheiten verwendet: Der US-Survey-Fuß, der um etwa 2 Millionstel abweicht, ist nicht enthalten.",
      "Die Ergebnisse werden mit 10 signifikanten Stellen angezeigt.",
    ],
    faqs: [
      { question: "Wie viele Fuß hat eine Meile?", answer: "Genau 5.280 Fuß." },
      { question: "Wie rechne ich Zoll in Zentimeter um?", answer: "Multiplizieren Sie mit 2,54. Zum Beispiel: 12 in × 2,54 = 30,48 cm." },
      { question: "Was ist eine Seemeile?", answer: "Eine in der See- und Luftfahrt verwendete Einheit, definiert als genau 1.852 Meter." },
    ],
    sourcesUsedFor: ["Exakte Definitionen von Zoll, Fuß, Yard, Meile und Seemeile in Metern."],
  },
  text: {
    value: "Wert",
    from: "Von",
    to: "In",
    unitNames: {
      mm: "Millimeter",
      cm: "Zentimeter",
      m: "Meter",
      km: "Kilometer",
      in: "Zoll",
      ft: "Fuß",
      yd: "Yards",
      mi: "Meilen",
      nmi: "Seemeilen",
    },
    primary: "{value} {symbol} in {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} in allen Längeneinheiten",
    tableUnit: "Einheit",
    tableValue: "Wert",
    note: "Die Ergebnisse werden mit 10 signifikanten Stellen angezeigt.",
  },
};

export default de;
