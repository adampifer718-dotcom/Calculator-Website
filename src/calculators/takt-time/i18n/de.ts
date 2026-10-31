import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TaktTimeText } from "../text/en";

const de: CalculatorTranslation<TaktTimeText> = {
  content: {
    title: "Taktzeitrechner",
    shortTitle: "Taktzeit",
    summary: "Ermitteln Sie die Taktzeit, also das Produktionstempo für den Kundenbedarf, aus Schichtlänge, Pausen, Schichten und Bedarf – mit der Mindestzahl an Mitarbeitenden.",
    metaTitle: "Taktzeitrechner – Produktionstempo pro Einheit",
    metaDescription: "Berechnen Sie die Taktzeit aus Schichtlänge, Pausen, Schichten und Kundenbedarf – mit Einheiten pro Stunde, Mindestbesetzung und Abgleich mit der Zykluszeit.",
    keywords: ["Taktzeit berechnen", "Taktzeit Formel", "Lean Production", "verfügbare Produktionszeit", "Kundenbedarf", "Zykluszeit und Taktzeit", "Austaktung", "Mindestzahl Mitarbeiter"],
    intro: [
      "Die Taktzeit ist der Rhythmus, den eine Produktionslinie halten muss, um genau das herzustellen, was die Kunden brauchen: Wollen die Kunden 645 Einheiten an einem Tag mit 860 Minuten Arbeitszeit, muss alle 80 Sekunden eine Einheit vom Band laufen. Der Begriff stammt vom deutschen Wort „Takt“ aus der Musik.",
      "Dieser Rechner ermittelt die verfügbare Nettozeit aus Schichtlänge, Pausen, Zahl der Schichten und Arbeitstagen, teilt sie durch den Bedarf und zeigt die Taktzeit in Sekunden und Minuten. Mit dem gesamten Arbeitsinhalt pro Einheit schätzt er die Mindestzahl an Mitarbeitenden, und mit einer gemessenen Zykluszeit zeigt er, ob die Linie das Tempo halten kann.",
    ],
    howToUse: [
      "Geben Sie die Länge einer Schicht in Stunden und Minuten und die geplanten Pausen pro Schicht in Minuten ein.",
      "Geben Sie die Zahl der Schichten pro Tag und die Zahl der Arbeitstage im Zeitraum ein, für den der Bedarf gilt.",
      "Geben Sie den Kundenbedarf für diesen Zeitraum ein.",
      "Ergänzen Sie optional den gesamten Arbeitsinhalt pro Einheit und die tatsächliche Zykluszeit, beide in Sekunden, um die Mindestbesetzung zu sehen und ob die Linie den Takt hält.",
    ],
    formulas: [
      { title: "Verfügbare Nettozeit", expression: "verfügbar = (Schichtlänge − Pausen) × Schichten pro Tag × Tage", explanation: "In Minuten. Es zählt nur die Zeit, in der die Linie laufen soll." },
      { title: "Taktzeit", expression: "Takt = verfügbare Zeit ÷ Kundenbedarf", explanation: "In Sekunden pro Einheit angezeigt. Die Einheiten pro Stunde sind 3.600 ÷ Takt." },
      { title: "Mindestbesetzung", expression: "Mitarbeitende = ⌈Arbeitsinhalt ÷ Takt⌉", explanation: "Die gesamte manuelle Arbeit pro Einheit geteilt durch die Taktzeit, aufgerundet auf eine ganze Person oder Station." },
    ],
    examples: [
      {
        title: "Zwei 8-Stunden-Schichten für 645 Einheiten am Tag",
        steps: ["Verfügbar = (480 − 50) × 2 × 1 = 860 min = 51.600 s", "Takt = 51.600 ÷ 645 = 80 s pro Einheit (1:20)", "Mitarbeitende = ⌈300 ÷ 80⌉ = ⌈3,75⌉ = 4"],
      },
      {
        title: "Ein Wochenbedarf von 1.400 Einheiten in einer Schicht",
        steps: ["Verfügbar = (450 − 30) × 1 × 5 = 2.100 min = 126.000 s", "Takt = 126.000 ÷ 1.400 = 90 s pro Einheit", "Eine tatsächliche Zykluszeit von 95 s ist 5 s länger als der Takt, daher lassen sich etwa 1.326 statt 1.400 Einheiten fertigen"],
      },
      {
        title: "Eine 10-Stunden-Schicht für 216 Einheiten",
        steps: ["Verfügbar = 600 − 60 = 540 min = 32.400 s", "Takt = 32.400 ÷ 216 = 150 s pro Einheit, also 2:30", "Einheiten pro Stunde = 3.600 ÷ 150 = 24"],
      },
    ],
    assumptions: [
      "Die Taktzeit wird vom Bedarf bestimmt, nicht von der Anlage. Sie setzt voraus, dass sich der Bedarf gleichmäßig über den Zeitraum verteilt.",
      "Nur die Pausen werden von der Schicht abgezogen. Rechnen Sie geplante Wartung, Besprechungen oder Anlaufzeit zu den Pausen, wenn die Linie in dieser Zeit nicht läuft.",
      "Die Mindestzahl an Mitarbeitenden ist eine Untergrenze. Ungleich verteilte Arbeit, Wege und schwankende Arbeitszeiten erfordern meist mehr.",
    ],
    faqs: [
      { question: "Was ist der Unterschied zwischen Taktzeit und Zykluszeit?", answer: "Die Taktzeit ist das von den Kunden geforderte Tempo: verfügbare Zeit geteilt durch Bedarf. Die Zykluszeit ist die Zeit, die der Prozess tatsächlich pro Einheit braucht. Ist die Zykluszeit länger als die Taktzeit, kann die Linie ohne Überstunden oder Änderungen nicht mithalten." },
      { question: "Sollte die Taktzeit Störungen berücksichtigen?", answer: "Nein. Die Taktzeit verwendet die geplante verfügbare Zeit. Ungeplante Stillstände verlangsamen die Linie, daher muss die Zykluszeit kürzer als der Takt sein, um Raum dafür zu lassen. Die Gesamtanlageneffektivität (OEE) misst diese Verluste." },
      { question: "Was, wenn sich der Bedarf im Laufe des Monats ändert?", answer: "Berechnen Sie den Takt für jeden Zeitraum mit seinem eigenen Bedarf neu. Viele Werke überprüfen die Taktzeit wöchentlich oder monatlich und verteilen die Arbeit zwischen den Stationen neu, wenn sie sich stark ändert." },
    ],
    sourcesUsedFor: [
      "Die Definition der Taktzeit als verfügbare Produktionszeit geteilt durch den Kundenbedarf.",
      "Die verfügbare Nettozeit nach Pausen und der Vergleich der Zykluszeit mit der Taktzeit.",
    ],
  },
  text: {
    shiftHours: "Schichtlänge: Stunden",
    shiftMinutes: "Schichtlänge: Minuten",
    breaks: "Pausen pro Schicht",
    breaksHelp: "Geplante Pausen, Mahlzeiten und Besprechungen, in denen die Linie nicht läuft, in Minuten pro Schicht.",
    shifts: "Schichten pro Tag",
    days: "Arbeitstage im Zeitraum",
    daysHelp: "Verwenden Sie 1 für einen Tagesbedarf, 5 für einen Wochenbedarf bei einer Fünftagewoche und so weiter.",
    demand: "Kundenbedarf im Zeitraum",
    demandHelp: "Die Zahl der Einheiten, die die Kunden im selben Zeitraum brauchen.",
    workContent: "Gesamter Arbeitsinhalt pro Einheit (optional)",
    workContentHelp: "Die Summe aller manuellen Arbeitszeiten für eine Einheit, in Sekunden. Ergibt die Mindestzahl an Mitarbeitenden oder Stationen.",
    actualCycle: "Tatsächliche Zykluszeit (optional)",
    actualCycleHelp: "Die gemessene Zeit der langsamsten Station in Sekunden pro Einheit, zum Vergleich mit der Taktzeit.",
    minutes: "min",
    seconds: "s",
    units: "Einheiten",
    errors: {
      noShift: "Geben Sie eine Schichtlänge von mehr als 0 Minuten ein.",
      breaksTooLong: "Die Pausen müssen kürzer sein als die Schicht.",
      tooManyHours: "Die Schichten ergeben zusammen mehr als 24 Stunden pro Tag.",
    },
    takt: "Taktzeit",
    perUnit: "s pro Einheit",
    caption: "{available} verfügbare Zeit ÷ {demand}.",
    demandUnits: {
      zero: "{n} Einheiten",
      one: "{n} Einheit",
      two: "{n} Einheiten",
      few: "{n} Einheiten",
      many: "{n} Einheiten",
      other: "{n} Einheiten",
    },
    minutesText: "{n} min",
    taktClock: "Taktzeit (m:ss)",
    clockText: "{m}:{ss}",
    clockTextHours: "{h}:{mm}:{ss}",
    unitsPerHour: "Einheiten pro Stunde verfügbarer Zeit",
    available: "Verfügbare Nettozeit im Zeitraum",
    availablePerShift: "Verfügbare Zeit pro Schicht",
    operators: "Mindestzahl an Mitarbeitenden oder Stationen",
    capacity: "Mögliche Einheiten bei der tatsächlichen Zykluszeit",
    gap: "Tatsächliche Zykluszeit minus Taktzeit",
    meetsTakt: "Kann die Linie den Takt halten?",
    verdict: {
      yes: "Ja: Die Zykluszeit liegt innerhalb der Taktzeit",
      no: "Nein: Die Zykluszeit ist länger als die Taktzeit",
    },
    notes: {
      operators: "Mindestbesetzung = Arbeitsinhalt ÷ Taktzeit, aufgerundet ({ratio} → {operators}). Reale Linien brauchen meist mehr, weil sich die Arbeit nicht perfekt austakten lässt.",
      slower: "Bei dieser Zykluszeit fertigt die Linie im Zeitraum etwa {capacity} und bleibt damit unter dem Bedarf von {demand}. Möglich sind eine kürzere Zykluszeit, eine zusätzliche Station oder mehr verfügbare Zeit.",
      faster: "Die Zykluszeit lässt {gap} Spielraum pro Einheit, der kleine Störungen auffängt.",
      plannedStops: "Nur Pausen werden von der Schicht abgezogen. Planen Sie auch Wartung oder Besprechungen ein, rechnen Sie sie für eine realistischere Taktzeit zu den Pausen.",
    },
  },
};

export default de;
