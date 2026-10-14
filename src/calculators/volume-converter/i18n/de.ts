import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { VolumeConverterText } from "../text/en";

const de: CalculatorTranslation<VolumeConverterText> = {
  content: {
    title: "Volumenumrechner",
    shortTitle: "Volumen",
    summary: "Rechnen Sie zwischen Litern, Millilitern, Kubikmetern, US- und imperialen Gallonen, Quarts, Pints, Tassen, Flüssigunzen, Löffeln und Kubikfuß um.",
    metaTitle: "Volumenumrechner – Liter, Gallonen, Cups und mehr",
    metaDescription:
      "Rechnen Sie Volumen zwischen Litern, Millilitern, Kubikmetern, US- und imperialen Gallonen, Quarts, Pints, Tassen, Flüssigunzen, Tee- und Esslöffeln und Kubikfuß um.",
    keywords: ["Volumenumrechner", "Liter in Gallonen", "Gallonen in Liter", "ml in Cups", "Flüssigunzen", "Kubikfuß", "Raummaße umrechnen"],
    intro: [
      "Rechnen Sie ein beliebiges Volumen zwischen 15 metrischen, US-amerikanischen und imperialen Einheiten um. Die Tabelle zeigt den Wert in allen Einheiten gleichzeitig.",
      "US- und imperiale Einheiten tragen dieselben Namen, sind aber unterschiedlich groß: Eine imperiale Gallone ist etwa 20 % größer als eine US-Gallone, und ein imperiales Pint hat 20 statt 16 Flüssigunzen.",
    ],
    howToUse: [
      "Geben Sie den Wert ein.",
      "Wählen Sie die Ausgangseinheit und die gewünschte Zieleinheit.",
      "Lesen Sie das Ergebnis ab oder vergleichen Sie alle Einheiten in der Tabelle.",
    ],
    formulas: [
      { title: "Umrechnung über Liter", expression: "Ergebnis = Wert × (Liter pro Ausgangseinheit) ÷ (Liter pro Zieleinheit)", explanation: "Jede Einheit ist als feste Anzahl von Litern definiert." },
      {
        title: "Wichtige Faktoren",
        expression: "1 US gal = 231 in³ = 3,785411784 L\n1 US gal = 4 qt = 8 pt = 16 Tassen = 128 fl oz\n1 US fl oz = 2 EL = 6 TL\n1 imp gal = 4,54609 L = 160 imp fl oz",
        explanation: "Exakt per Definition. Ein Kubikfuß sind 28,316846592 L.",
      },
    ],
    examples: [
      { title: "1 US-Gallone in Litern", steps: ["1 US-Gallone = 231 in³ × 0,016387064 L/in³", "= 3,785411784 L"] },
      { title: "500 Milliliter in US-Tassen", steps: ["1 US-Tasse = 236,5882365 ml", "500 ÷ 236,5882365 ≈ 2,113 Tassen"] },
    ],
    assumptions: [
      "Die US-Einheiten sind die üblichen US-Flüssigkeitsmaße; die etwas größeren US-Trockenmaße für Pint und Quart sind nicht enthalten.",
      "Löffel und Tassen entsprechen den US-Größen; metrische Tassen (250 ml) und Esslöffel (15 ml, in Australien 20 ml) weichen leicht ab.",
      "Die Ergebnisse werden für die Anzeige auf 10 signifikante Stellen gerundet.",
    ],
    faqs: [
      { question: "Wie viele Liter hat eine Gallone?", answer: "Eine US-Gallone hat 3,785 Liter, eine imperiale (britische) Gallone 4,546 Liter." },
      { question: "Wie viele Milliliter hat eine Tasse?", answer: "Eine übliche US-Tasse hat 236,6 ml, eine US-Tasse für Nährwertangaben 240 ml und eine metrische Tasse 250 ml." },
      { question: "Warum unterscheiden sich britische und US-Pints?", answer: "Beide Systeme teilen ihre eigene Gallone in 8 Pints, doch die imperiale Gallone ist größer. Ein imperiales Pint hat daher 568 ml, ein US-Pint 473 ml." },
    ],
    sourcesUsedFor: ["Exakte Definitionen der US-Gallone (231 Kubikzoll) und ihrer Untereinheiten sowie der imperialen Gallone (4,54609 Liter)."],
  },
  text: {
    value: "Wert",
    from: "Von",
    to: "In",
    unitNames: {
      ml: "Milliliter",
      l: "Liter",
      m3: "Kubikmeter",
      tsp: "US-Teelöffel",
      tbsp: "US-Esslöffel",
      floz: "US-Flüssigunzen",
      cup: "US-Tassen (Cups)",
      pt: "US-Pints",
      qt: "US-Quarts",
      gal: "US-Gallonen",
      impfloz: "Imperiale Flüssigunzen",
      imppt: "Imperiale Pints",
      impgal: "Imperiale Gallonen",
      in3: "Kubikzoll",
      ft3: "Kubikfuß",
    },
    primary: "{value} {symbol} in {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} in allen Volumeneinheiten",
    tableUnit: "Einheit",
    tableValue: "Wert",
    note: "US- und imperiale Einheiten unterscheiden sich: Eine US-Gallone hat 3,785 L, eine imperiale Gallone 4,546 L. Die Ergebnisse werden mit 10 signifikanten Stellen angezeigt.",
  },
};

export default de;
