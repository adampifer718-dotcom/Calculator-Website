import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CoffeeRatioText } from "../text/en";

const de: CalculatorTranslation<CoffeeRatioText> = {
  content: {
    title: "Rechner für das Kaffee-Wasser-Verhältnis",
    shortTitle: "Kaffeeverhältnis",
    summary: "Berechnen Sie, wie viel gemahlenen Kaffee Sie für eine bestimmte Wassermenge brauchen oder wie viel Wasser für Ihren Kaffee – für Filterkaffee, French Press, Espresso und Cold Brew.",
    metaTitle: "Kaffeeverhältnis-Rechner – Gramm Kaffee pro Tasse",
    metaDescription: "Wie viel Gramm Kaffee für Ihr Wasser oder wie viel Wasser für Ihren Kaffee? Mit anpassbaren Verhältnissen für Filter, French Press, Espresso und Cold Brew.",
    keywords: ["Kaffee Wasser Verhältnis", "Kaffeemenge berechnen", "wie viel Kaffee pro Tasse", "Pour Over Verhältnis", "French Press Verhältnis", "Cold Brew Verhältnis", "Brew Ratio Espresso", "Gramm Kaffee"],
    intro: [
      "Das Verhältnis von Kaffee zu Wasser ist der einfachste Weg, damit Kaffee jedes Mal gleich schmeckt. Man schreibt es als 1 : n, also n Gramm Wasser für jedes Gramm gemahlenen Kaffee: Bei 1:16 gehören zu 20 g Kaffee 320 g Wasser. Ein kleineres n ergibt stärkeren Kaffee.",
      "Wählen Sie eine Zubereitungsart, um mit einem typischen Verhältnis zu beginnen, passen Sie es an Ihren Geschmack an, und der Rechner ermittelt den Kaffee für Ihr Wasser oder das Wasser für Ihren Kaffee – in Gramm, Millilitern, Flüssigunzen oder Tassen.",
    ],
    howToUse: [
      "Wählen Sie die Zubereitungsart. Ihr typisches Verhältnis wird eingetragen; ändern Sie es, wenn Sie Ihren Kaffee stärker oder milder mögen.",
      "Wählen Sie, ob Sie den Kaffee aus dem Wasser oder das Wasser aus dem Kaffee berechnen möchten.",
      "Geben Sie die Menge ein und wählen Sie die Einheit. Das Ergebnis erscheint in der Einheit, die für die andere Zutat gewählt ist.",
      "Wiegen Sie den Kaffee mit einer Küchenwaage ab, um möglichst gleichmäßige Ergebnisse zu erzielen.",
    ],
    formulas: [
      { title: "Kaffee aus Wasser", expression: "Kaffee (g) = Wasser (g) ÷ n", explanation: "Für ein Verhältnis von 1 : n. Wasser wird mit 1 g pro mL angesetzt." },
      { title: "Wasser aus Kaffee", expression: "Wasser (g) = Kaffee (g) × n", explanation: "1 US-Tasse = 8 US fl oz = 236,5882365 mL und 1 oz = 28,349523125 g." },
      { title: "Stärke in Gramm pro Liter", expression: "g/L = Kaffee (g) ÷ Wasser (mL) × 1.000", explanation: "Ein Verhältnis von 1:18 entspricht etwa 55,6 g Kaffee pro Liter Wasser." },
    ],
    examples: [
      {
        title: "Handfilter mit 500 mL Wasser bei 1:16",
        steps: ["500 mL Wasser wiegen 500 g", "Kaffee = 500 ÷ 16 = 31,25 g"],
      },
      {
        title: "French Press mit 30 g Kaffee bei 1:12, Wasser in Tassen",
        steps: ["Wasser = 30 × 12 = 360 g = 360 mL", "In US-Tassen: 360 ÷ 236,588 ≈ 1,52 Tassen"],
      },
      {
        title: "Cold-Brew-Konzentrat mit 4 Tassen Wasser bei 1:8",
        steps: ["4 US-Tassen = 4 × 236,588 ≈ 946,35 mL Wasser", "Kaffee = 946,35 ÷ 8 ≈ 118,29 g, etwa 4,17 oz"],
      },
    ],
    assumptions: [
      "Die angebotenen Verhältnisse je Zubereitungsart sind typische Ausgangswerte, keine Regeln. Geschmack, Röstgrad, Mahlgrad und Brühzeit verändern das beste Verhältnis.",
      "Wasser wird mit 1 g pro mL angesetzt. Das Kaffeemehl hält etwas Wasser zurück, sodass Sie etwas weniger fertigen Kaffee erhalten, als Sie Wasser verwendet haben.",
      "Bei Espresso wird das Verhältnis als trockener Kaffee zum Gewicht des Getränks in der Tasse verstanden, wie es Baristas üblicherweise angeben.",
      "Kaffeemengen gelten nach Gewicht. Messlöffel fassen je nach Mahlgrad und Röstung unterschiedlich viel, daher werden sie nicht umgerechnet.",
    ],
    faqs: [
      { question: "Was ist das beste Verhältnis von Kaffee zu Wasser?", answer: "Ein einziges bestes Verhältnis gibt es nicht. Für Filterkaffee und Handfilter beginnen viele zwischen 1:15 und 1:17 und passen dann an; die oft zitierte Golden-Cup-Richtlinie der Specialty Coffee Association entspricht etwa 1:18. Schmeckt der Kaffee dünn, verringern Sie n; ist er zu stark, erhöhen Sie es." },
      { question: "Wie viel Kaffee brauche ich für eine Tasse?", answer: "Für eine US-Tasse (etwa 237 mL) bei 1:16 brauchen Sie etwa 14,8 g Kaffee. Viele Becher fassen mehr als eine US-Tasse; messen Sie daher das Volumen Ihres Bechers für eine genauere Antwort." },
      { question: "Warum Kaffee wiegen statt Messlöffel verwenden?", answer: "Ein Löffel Kaffee kann je nach Bohne, Röstung und Mahlgrad ganz unterschiedlich viel wiegen. Wenn Sie Kaffee und Wasser wiegen, können Sie eine gelungene Tasse viel leichter wiederholen." },
    ],
    sourcesUsedFor: ["Die viel zitierte Golden-Cup-Richtlinie von etwa 55 g Kaffee pro Liter Wasser (ungefähr 1:18), nur zum Vergleich angegeben."],
  },
  text: {
    method: "Zubereitungsart",
    methods: {
      drip: "Filterkaffee oder Handfilter",
      frenchPress: "French Press",
      espresso: "Espresso",
      coldBrew: "Cold-Brew-Konzentrat",
      custom: "Eigenes Verhältnis",
    },
    ratio: "Verhältnis 1 : n (Wasser pro Gramm Kaffee)",
    ratioHelp: {
      drip: "Typische Verhältnisse für Filterkaffee und Handfilter reichen von etwa 1:15 (stärker) bis 1:17 (milder). Passen Sie es nach Geschmack an.",
      frenchPress: "Ein typisches Verhältnis für die French Press ist etwa 1:12. Passen Sie es nach Geschmack an.",
      espresso: "Bei Espresso bezieht sich das Verhältnis meist auf Kaffee zum Gewicht des Getränks in der Tasse; etwa 1:2 ist ein typischer Ausgangswert.",
      coldBrew: "Etwa 1:8 ergibt ein Konzentrat, das vor dem Trinken meist verdünnt wird.",
      custom: "Gramm Wasser pro Gramm gemahlenen Kaffee.",
    },
    solve: "Berechnen",
    solveOptions: { coffee: "Kaffee aus Wasser", water: "Wasser aus Kaffee" },
    water: "Wassermenge",
    waterUnit: "Einheit des Wassers",
    waterUnits: { mL: "Milliliter (mL)", g: "Gramm (g)", floz: "US-Flüssigunzen (fl oz)", cup: "US-Tassen" },
    coffee: "Menge gemahlener Kaffee",
    coffeeUnit: "Einheit des Kaffees",
    coffeeUnits: { g: "Gramm (g)", oz: "Unzen (oz)" },
    coffeeNeeded: "Benötigter gemahlener Kaffee",
    waterNeeded: "Benötigtes Wasser",
    caption: "Bei einem Verhältnis von {ratio}: {coffee} Kaffee auf {water} Wasser.",
    ratioText: "1:{n}",
    ratioOut: "Verhältnis Kaffee zu Wasser",
    coffeeG: "Kaffee in Gramm",
    coffeeOz: "Kaffee in Unzen",
    waterMl: "Wasser in mL (= Gramm)",
    waterFloz: "Wasser in US-Flüssigunzen",
    waterCups: "Wasser in US-Tassen",
    strength: "Kaffee pro Liter Wasser",
    cupsUnit: "Tassen",
    notes: {
      golden: "Zum Vergleich: Die viel zitierte Golden-Cup-Richtlinie der Specialty Coffee Association liegt bei etwa 55 g Kaffee pro Liter Wasser, ungefähr 1:18. Betrachten Sie jedes Verhältnis als Ausgangspunkt und passen Sie es nach Geschmack an.",
      espresso: "Bei Espresso vergleicht das Verhältnis meist den trockenen Kaffee mit dem Gewicht des fertigen Getränks, nicht mit dem durchgepumpten Wasser; die angezeigte Menge ist daher das Zielgewicht des Getränks.",
      coldBrew: "Cold-Brew-Konzentrat ist stark; es wird vor dem Trinken meist nach Geschmack mit Wasser oder Milch verdünnt.",
      water: "Wasser wird mit 1 g pro mL angesetzt. Etwas Wasser bleibt im Kaffeesatz, daher ist der fertige Kaffee etwas weniger als das verwendete Wasser.",
    },
  },
};

export default de;
