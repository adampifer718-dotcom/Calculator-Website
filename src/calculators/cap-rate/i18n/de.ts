import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { CapRateText } from "../text/en";

const de: CalculatorTranslation<CapRateText> = {
  content: {
    title: "Cap-Rate-Rechner",
    shortTitle: "Cap Rate",
    summary: "Bestimmen Sie den Kapitalisierungszinssatz (Cap Rate) einer Mietimmobilie aus Einnahmen, Leerstand und Betriebskosten oder ihren Wert aus einer Ziel-Cap-Rate.",
    metaTitle: "Cap-Rate-Rechner – Nettobetriebsergebnis und Immobilienwert",
    metaDescription: "Berechnen Sie die Cap Rate einer Mietimmobilie aus Miete, Leerstand und Betriebskosten oder schätzen Sie ihren Wert aus NOI und einer Ziel-Cap-Rate.",
    keywords: ["Cap Rate berechnen", "Kapitalisierungszinssatz", "Nettobetriebsergebnis", "NOI", "Mietimmobilie", "Ertragswert", "Immobilieninvestment", "Immobilienwert"],
    intro: [
      "Der Kapitalisierungszinssatz, kurz Cap Rate, setzt die Einnahmen einer Immobilie ins Verhältnis zu ihrem Wert. Er ist das Nettobetriebsergebnis (NOI) eines Jahres geteilt durch den Wert oder Kaufpreis der Immobilie, angegeben in Prozent.",
      "Investoren nutzen ihn, um Immobilien unabhängig von ihrer Finanzierung schnell zu vergleichen. Geben Sie Miete, Leerstand und laufende Kosten ein, um die Cap Rate zu erhalten, oder wechseln Sie den Modus, um aus einem Nettobetriebsergebnis und einer Ziel-Cap-Rate einen indikativen Wert zu ermitteln.",
    ],
    howToUse: [
      "Wählen Sie, ob Sie die Cap Rate oder den Wert berechnen möchten, und wählen Sie die Währung.",
      "Geben Sie für die Cap Rate den Wert oder Angebotspreis der Immobilie, die jährliche Bruttomiete, den Leerstandsabschlag und die jährlichen Betriebskosten ein.",
      "Geben Sie für den Wert das Nettobetriebsergebnis und die angestrebte Cap Rate ein.",
      "Lesen Sie die Cap Rate oder den Wert sowie die effektiven Bruttoeinnahmen, das NOI und die Kostenquote ab.",
    ],
    formulas: [
      { title: "Effektive Bruttoeinnahmen", expression: "EGI = Bruttoeinnahmen × (1 − Leerstand)", explanation: "Der Leerstand ist der Anteil der Einnahmen, der durch leere Einheiten und Mietausfälle verloren geht." },
      { title: "Nettobetriebsergebnis", expression: "NOI = EGI − Betriebskosten", explanation: "Betriebskosten enthalten keine Kreditraten, Abschreibungen und Einkommensteuer." },
      { title: "Cap Rate", expression: "Cap Rate = NOI ÷ Wert × 100 %", explanation: "Die jährliche Rendite, die die Immobilie einem Käufer ohne Fremdkapital vor Steuern bringen würde." },
      { title: "Wert aus einer Cap Rate", expression: "Wert = NOI ÷ Cap Rate", explanation: "Teilen Sie durch den Satz als Dezimalzahl, 6 % sind also 0,06." },
    ],
    examples: [
      { title: "Zweifamilienhaus im Wert von 450.000 $", steps: ["EGI = 48.000 × 0,95 = 45.600 $", "NOI = 45.600 − 16.000 = 29.600 $", "Cap Rate = 29.600 ÷ 450.000 ≈ 6,58 %"] },
      { title: "Kleines Mehrfamilienhaus mit einem Preis von 720.000 $", steps: ["EGI = 62.400 × 0,92 = 57.408 $", "NOI = 57.408 − 21.500 = 35.908 $", "Cap Rate = 35.908 ÷ 720.000 ≈ 4,99 %"] },
      { title: "Wert eines Ladenlokals mit 41.250 $ NOI bei einer Cap Rate von 5,75 %", steps: ["Wert = 41.250 ÷ 0,0575", "≈ 717.391,30 $"] },
    ],
    assumptions: [
      "Die Cap Rate berücksichtigt weder Finanzierung noch Einkommensteuer, Investitionen in die Substanz oder künftige Änderungen von Miete und Wert. Sie ist eine Momentaufnahme der Einnahmen eines Jahres.",
      "Das Ergebnis hängt vollständig von den eingegebenen Einnahmen und Kosten ab. Verwenden Sie realistische Betriebskosten für ein volles Jahr, einschließlich Verwaltung und Instandhaltung, auch wenn Sie diese selbst übernehmen.",
      "Ein negatives Nettobetriebsergebnis ist zulässig und ergibt eine negative Cap Rate; die Immobilie deckt dann ihre laufenden Kosten nicht.",
      "Dies ist eine Schätzung, keine Anlage- oder Finanzberatung, und sie wurde nicht fachlich geprüft.",
    ],
    faqs: [
      { question: "Was ist eine gute Cap Rate?", answer: "Einen allgemein guten Wert gibt es nicht. Cap Rates hängen von Lage, Objektart, Zustand und Zinsniveau ab. Eine höhere Cap Rate bedeutet mehr Einnahmen im Verhältnis zum Preis, meist aber auch mehr Risiko oder weniger erwartetes Wachstum." },
      { question: "Warum gehören Kreditraten nicht zu den Betriebskosten?", answer: "Die Cap Rate beschreibt die Immobilie, nicht den Kredit des Käufers. Ohne Finanzierung lassen sich Immobilien fair vergleichen. Um den Kredit einzubeziehen, betrachten Sie stattdessen die Eigenkapitalrendite (Cash-on-Cash) oder den ROI." },
      { question: "Warum erhöht eine niedrigere Cap Rate den Wert?", answer: "Der Wert ist das NOI geteilt durch die Cap Rate. Bei demselben NOI von 40.000 $ ergibt eine Cap Rate von 5 % einen Wert von 800.000 $, eine von 8 % dagegen 500.000 $. Käufer, die niedrigere Cap Rates akzeptieren, zahlen also mehr." },
    ],
    sourcesUsedFor: [
      "Der Kapitalisierungszinssatz als Verhältnis von Nettobetriebsergebnis zu Wert sowie Wert = Einnahmen ÷ Satz.",
      "Der Zusammenhang I = R × V zwischen Nettobetriebsergebnis, Gesamt-Cap-Rate und Wert.",
    ],
  },
  text: {
    mode: "Berechnen",
    modes: { rate: "Cap Rate aus den Einnahmen", value: "Wert aus einer Ziel-Cap-Rate" },
    value: "Wert oder Preis der Immobilie",
    gross: "Jährliche Bruttomieteinnahmen",
    grossHelp: "Die gesamte Miete, die die Immobilie bei voller Vermietung in einem Jahr einbringen würde, zuzüglich sonstiger Einnahmen wie Stellplätze oder Waschküche.",
    vacancy: "Leerstand und Mietausfall",
    vacancyHelp: "Der Anteil der Bruttoeinnahmen, den Sie durch leere Einheiten und nicht gezahlte Miete voraussichtlich verlieren.",
    expenses: "Jährliche Betriebskosten",
    expensesHelp: "Grundsteuer, Versicherung, Instandhaltung, Verwaltung, von Ihnen getragene Nebenkosten und ähnliche laufende Kosten. Keine Kreditraten, Abschreibungen oder Einkommensteuer einbeziehen.",
    noi: "Nettobetriebsergebnis (NOI) pro Jahr",
    noiHelp: "Einnahmen nach Leerstand und Betriebskosten, vor Kreditraten und Einkommensteuer.",
    targetRate: "Ziel-Cap-Rate",
    errors: {
      noiPositive: "Das Nettobetriebsergebnis muss größer als 0 sein, um einen Wert zu ermitteln.",
    },
    capRate: "Cap Rate",
    capCaption: "Nettobetriebsergebnis von {noi} bei einem Wert von {value}.",
    propertyValue: "Indikativer Immobilienwert",
    valueCaption: "{noi} Nettobetriebsergebnis, kapitalisiert mit {rate}.",
    egi: "Effektive Bruttoeinnahmen",
    noiResult: "Nettobetriebsergebnis (NOI)",
    monthlyNoi: "NOI pro Monat",
    expenseRatio: "Betriebskostenquote (bezogen auf die effektiven Bruttoeinnahmen)",
    grm: "Bruttomietmultiplikator (Wert ÷ Bruttoeinnahmen)",
    valuePerPoint: "Wertänderung bei einer um 1 Prozentpunkt niedrigeren Cap Rate",
    notes: {
      negative: "Die Betriebskosten übersteigen die Einnahmen nach Leerstand, daher sind NOI und Cap Rate negativ: Die Immobilie deckt ihre laufenden Kosten nicht.",
      financing: "Die Cap Rate berücksichtigt weder Finanzierung noch Einkommensteuer oder künftige Wertänderungen.",
    },
  },
};

export default de;
