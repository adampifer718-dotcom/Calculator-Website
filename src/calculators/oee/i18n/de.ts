import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OeeText } from "../text/en";

const de: CalculatorTranslation<OeeText> = {
  content: {
    title: "OEE-Rechner (Gesamtanlageneffektivität)",
    shortTitle: "OEE",
    summary: "Berechnen Sie die Gesamtanlageneffektivität aus geplanter Zeit, Stillständen, idealer Zykluszeit und Stückzahlen – mit Verfügbarkeit, Leistung, Qualität und der jeweils verlorenen Zeit.",
    metaTitle: "OEE-Rechner – Verfügbarkeit × Leistung × Qualität",
    metaDescription: "Ermitteln Sie die Gesamtanlageneffektivität (OEE) aus geplanter Zeit, Stillständen, idealer Zykluszeit oder Rate und Ausschuss – mit der Zeit für jeden Verlust.",
    keywords: ["OEE berechnen", "Gesamtanlageneffektivität", "OEE Formel", "Verfügbarkeit Leistung Qualität", "ideale Zykluszeit", "Produktionseffizienz", "Maschinenauslastung", "Produktionsverluste"],
    intro: [
      "Die Gesamtanlageneffektivität (Overall Equipment Effectiveness, OEE) misst, wie viel der geplanten Produktionszeit wirklich produktiv ist: nur Gutteile, so schnell wie möglich, ohne Stillstände. Ein Wert von 100 % bedeutet perfekte Produktion; reale Linien verlieren Zeit durch Störungen, langsame Zyklen und Ausschuss.",
      "Die OEE teilt diese Verluste in drei Faktoren auf. Die Verfügbarkeit erfasst die Zeit, in der die Anlage stand, die Leistung das Laufen unterhalb der idealen Geschwindigkeit und die Qualität die Teile, die nicht auf Anhieb gut waren. Dieser Rechner liefert alle drei, die OEE und die jeweils verlorenen Minuten.",
    ],
    howToUse: [
      "Geben Sie die geplante Produktionszeit in Minuten ein, ohne geplante Pausen und Zeiten ohne eingeplante Produktion.",
      "Geben Sie die gesamte Stillstandszeit in diesem Zeitraum ein, etwa Störungen und Rüstvorgänge.",
      "Geben Sie die ideale Geschwindigkeit als Zykluszeit in Sekunden pro Teil oder als Rate in Teilen pro Minute an.",
      "Geben Sie die Gesamtzahl der gefertigten Teile und die Zahl der Ausschussteile ein. OEE und Verlustzeittabelle werden sofort aktualisiert.",
    ],
    formulas: [
      { title: "Verfügbarkeit", expression: "V = Laufzeit ÷ geplante Produktionszeit, Laufzeit = geplant − Stillstandszeit", explanation: "Der Anteil der geplanten Zeit, in dem die Anlage tatsächlich lief." },
      { title: "Leistung", expression: "L = (ideale Zykluszeit × Gesamtmenge) ÷ Laufzeit", explanation: "Wie nah die Anlage an ihrer idealen Geschwindigkeit lief. Bei einer idealen Rate beträgt die ideale Zykluszeit 60 ÷ Rate Sekunden." },
      { title: "Qualität", expression: "Q = Gutmenge ÷ Gesamtmenge, Gutmenge = Gesamtmenge − Ausschuss", explanation: "Der Anteil der Teile, die auf Anhieb gut waren." },
      { title: "OEE", expression: "OEE = V × L × Q = (Gutmenge × ideale Zykluszeit) ÷ geplante Produktionszeit", explanation: "Die voll produktive Zeit (Gutteile mit idealer Geschwindigkeit gefertigt) als Anteil an der geplanten Zeit." },
    ],
    examples: [
      {
        title: "Eine Schicht von 450 Minuten mit 54 Minuten Stillstand",
        steps: [
          "Laufzeit = 450 − 54 = 396 min, also Verfügbarkeit = 396 ÷ 450 = 88 %",
          "Leistung = 1,5 s × 13.200 ÷ (396 × 60 s) = 19.800 ÷ 23.760 = 83,33 %",
          "Qualität = (13.200 − 330) ÷ 13.200 = 97,5 %",
          "OEE = 0,88 × 0,8333 × 0,975 = 71,5 %",
        ],
      },
      {
        title: "Ideale Rate von 25 Teilen pro Minute",
        steps: [
          "Ideale Zykluszeit = 60 ÷ 25 = 2,4 s",
          "Verfügbarkeit = 384 ÷ 420 = 91,43 %; Leistung = 2,4 × 8.800 ÷ (384 × 60) = 91,67 %",
          "Qualität = 8.624 ÷ 8.800 = 98 %",
          "OEE = 0,9143 × 0,9167 × 0,98 ≈ 82,13 %",
        ],
      },
      {
        title: "Zwei 8-Stunden-Schichten an einer langsameren Maschine",
        steps: [
          "Verfügbarkeit = 840 ÷ 960 = 87,5 %",
          "Leistung = 12 × 3.900 ÷ (840 × 60) = 46.800 ÷ 50.400 = 92,86 %",
          "Qualität = 3.815 ÷ 3.900 = 97,82 %",
          "OEE = Gutmenge × ideale Zykluszeit ÷ geplante Zeit = 3.815 × 12 ÷ 57.600 ≈ 79,48 %",
        ],
      },
    ],
    assumptions: [
      "Die geplante Produktionszeit schließt geplante Pausen und Zeiten ohne eingeplante Produktion aus; wie Sie Rüstvorgänge und Wartung behandeln, verändert das Ergebnis, halten Sie die Definitionen beim Vergleichen daher gleich.",
      "Die ideale Zykluszeit ist die kürzeste Zeit, in der die Anlage unter idealen Bedingungen ein Teil fertigen kann. Ist sie zu langsam angesetzt, kann die Leistung über 100 % liegen, was auf einen falschen Idealwert hinweist, nicht auf eine hervorragende Linie.",
      "Ausschuss umfasst jedes Teil, das nicht auf Anhieb gut war, einschließlich nachgearbeiteter Teile. Der oft genannte Wert von 85 % für „Weltklasse“ ist nur ein grober Richtwert.",
    ],
    faqs: [
      { question: "Was ist ein guter OEE-Wert?", answer: "Eine OEE von 85 % wird oft als Weltklasse für die Stückgutfertigung genannt, und viele Werke liegen deutlich darunter. Da der Wert davon abhängt, wie Stillstände und die ideale Geschwindigkeit definiert sind, ist der Verlauf an einer Linie aussagekräftiger als der Vergleich verschiedener Werke." },
      { question: "Warum ergeben die Verlustzeiten zusammen die geplante Zeit?", answer: "Die geplante Produktionszeit teilt sich auf in Stillstände (Verfügbarkeitsverlust), Laufen unterhalb der idealen Geschwindigkeit (Leistungsverlust), Fertigung von Ausschuss (Qualitätsverlust) und die verbleibende voll produktive Zeit. Die OEE ist die voll produktive Zeit geteilt durch die geplante Zeit." },
      { question: "Soll ich die ideale Zykluszeit oder die ideale Rate eingeben?", answer: "Beides geht; es ist dasselbe, nur auf zwei Arten ausgedrückt. Eine ideale Rate von 40 Teilen pro Minute entspricht einer idealen Zykluszeit von 60 ÷ 40 = 1,5 Sekunden pro Teil." },
    ],
    sourcesUsedFor: [
      "Die OEE-Formel als Verfügbarkeit × Leistung × Qualität mit Verfügbarkeit = Laufzeit ÷ geplante Produktionszeit, Leistung = ideale Zykluszeit × Gesamtmenge ÷ Laufzeit und Qualität = Gutmenge ÷ Gesamtmenge sowie der oft genannte Richtwert von 85 %.",
      "Die drei OEE-Faktoren und die Verluste, die jeder von ihnen misst.",
    ],
  },
  text: {
    planned: "Geplante Produktionszeit",
    plannedHelp: "Die Zeit, in der die Anlage laufen sollte, nach Abzug geplanter Pausen und Zeiten ohne eingeplante Produktion.",
    stopTime: "Stillstandszeit (ungeplante und geplante Stopps)",
    stopTimeHelp: "Zeit innerhalb der geplanten Produktionszeit, in der die Anlage nicht lief, zum Beispiel Störungen, Rüstvorgänge und Warten auf Material.",
    speedMode: "Ideale Geschwindigkeit angegeben als",
    speedModes: { cycle: "Ideale Zykluszeit (Sekunden pro Teil)", rate: "Ideale Rate (Teile pro Minute)" },
    idealCycle: "Ideale Zykluszeit",
    idealCycleHelp: "Die kürzeste Zeit, in der die Anlage unter idealen Bedingungen ein Teil fertigen kann.",
    idealRate: "Ideale Ausbringungsrate",
    idealRateHelp: "Die höchste Zahl an Teilen pro Minute, die die Anlage unter idealen Bedingungen fertigen kann.",
    perPiece: "s pro Teil",
    perMinute: "Teile/min",
    totalCount: "Gesamtmenge (alle gefertigten Teile)",
    rejects: "Ausschussmenge",
    rejectsHelp: "Teile, die verschrottet wurden oder nachgearbeitet werden müssen. Sie sind nicht auf Anhieb gut.",
    minutes: "min",
    pieces: "Teile",
    errors: {
      stopTooLong: "Die Stillstandszeit muss kürzer sein als die geplante Produktionszeit.",
      rejectsTooMany: "Die Ausschussmenge kann nicht größer sein als die Gesamtmenge.",
    },
    oee: "Gesamtanlageneffektivität (OEE)",
    caption: "Verfügbarkeit {a} × Leistung {p} × Qualität {q}.",
    availability: "Verfügbarkeit",
    performance: "Leistung",
    quality: "Qualität",
    goodCount: "Gutmenge",
    runTime: "Laufzeit",
    productiveTime: "Voll produktive Zeit",
    idealCycleUsed: "Verwendete ideale Zykluszeit",
    table: {
      caption: "Wohin die geplante Produktionszeit geht",
      item: "Zeit",
      minutes: "Minuten",
      share: "Anteil an der geplanten Zeit",
      planned: "Geplante Produktionszeit",
      availabilityLoss: "Verfügbarkeitsverlust (Stillstände)",
      performanceLoss: "Leistungsverlust (langsame Zyklen und Kurzstillstände)",
      qualityLoss: "Qualitätsverlust (Zeit für Ausschuss)",
      productive: "Voll produktive Zeit",
    },
    notes: {
      overPerformance: "Die Leistung liegt über 100 %, was physikalisch nicht möglich ist. Wahrscheinlich ist die ideale Zykluszeit zu langsam (oder die ideale Rate zu niedrig) angesetzt, oder die Menge enthält Teile, die außerhalb der Laufzeit gefertigt wurden.",
      benchmark: "Eine OEE von 85 % wird oft als „Weltklasse“ für die Stückgutfertigung genannt. Betrachten Sie das nur als groben Richtwert; ein fairer Zielwert hängt vom Prozess und von der Definition der Verluste ab.",
    },
  },
};

export default de;
