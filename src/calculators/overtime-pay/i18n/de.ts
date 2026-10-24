import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OvertimePayText } from "../text/en";

const de: CalculatorTranslation<OvertimePayText> = {
  content: {
    title: "Überstundenrechner",
    shortTitle: "Überstundenvergütung",
    summary: "Berechnen Sie den Bruttowochenlohn mit Überstunden, einschließlich 50 % Zuschlag, einem optionalen Anteil mit doppeltem Satz und dem effektiven Stundenlohn.",
    metaTitle: "Überstundenrechner – Zuschlag 50 % und doppelter Satz",
    metaDescription: "Berechnen Sie den Bruttowochenlohn mit Überstunden: Grundlohn bis 40 Stunden oder eigener Grenze, 1,5-facher und doppelter Satz sowie effektiver Stundenlohn.",
    keywords: ["Überstunden berechnen", "Überstundenvergütung", "Überstundenzuschlag", "doppelter Stundensatz", "Wochenlohn", "FLSA Überstunden", "40 Stunden"],
    intro: [
      "Die Überstundenvergütung belohnt Stunden, die über eine normale Woche hinaus gearbeitet werden, mit einem höheren Satz. Nach dem US-Bundesgesetz Fair Labor Standards Act müssen erfasste, nicht ausgenommene Beschäftigte für jede Stunde über 40 in einer Arbeitswoche mindestens das 1,5-Fache des regulären Satzes erhalten.",
      "Dieser Rechner teilt eine Woche in reguläre Stunden und Überstunden auf, wendet Ihren Überstundenfaktor an und kann einen Teil der Überstunden mit doppeltem Satz vergüten, wenn Ihr Arbeitgeber oder Vertrag das vorsieht. Passen Sie Schwelle und Faktoren an die für Sie geltenden Regeln an.",
    ],
    howToUse: [
      "Wählen Sie die Währung und geben Sie Ihren regulären Stundenlohn ein.",
      "Geben Sie alle Stunden ein, die Sie in der Woche gearbeitet haben.",
      "Belassen Sie für die US-Bundesregel die Schwelle bei 40 Stunden und den Faktor bei 1,5, oder passen Sie beides an Ihren Vertrag oder das örtliche Recht an.",
      "Wenn ein Teil der Überstunden mit doppeltem Satz vergütet wird, geben Sie an, wie viele. Sie zählen zu den Überstunden.",
      "Lesen Sie den Bruttolohn insgesamt, die Aufteilung in Grund- und Überstundenvergütung sowie den effektiven Stundenlohn ab.",
    ],
    formulas: [
      { title: "Reguläre Stunden und Überstunden", expression: "regulär = min(H, T); Überstunden = max(0, H − T)", explanation: "H sind die in der Woche gearbeiteten Stunden und T die Schwelle für reguläre Stunden." },
      { title: "Bruttolohn", expression: "Lohn = regulär × r + (Überstunden − D) × r × m + D × r × d", explanation: "r ist der Stundenlohn, m der Überstundenfaktor, D die Stunden mit doppeltem Satz und d dessen Faktor." },
      { title: "Effektiver Stundenlohn", expression: "effektiv = Lohn ÷ H", explanation: "Der Durchschnitt, der pro gearbeiteter Stunde einschließlich Überstundenzuschlag gezahlt wird." },
    ],
    examples: [
      { title: "46 Stunden zu 22 $ pro Stunde", steps: ["Grundlohn = 40 × 22 $ = 880 $", "Überstunden = 6 h × 22 $ × 1,5 = 198 $", "Gesamt = 880 $ + 198 $ = 1.078 $"] },
      {
        title: "52 Stunden zu 18,50 $ mit 4 Stunden zum doppelten Satz",
        steps: [
          "Grundlohn = 40 × 18,50 $ = 740 $",
          "Überstunden = 12, davon 8 mit 1,5-fachem Satz: 8 × 27,75 $ = 222 $",
          "Doppelter Satz = 4 × 37 $ = 148 $",
          "Gesamt = 740 $ + 222 $ + 148 $ = 1.110 $, etwa 21,35 $ pro gearbeiteter Stunde",
        ],
      },
      { title: "Vertrag mit 37,5 Stunden und Überstunden zum 1,25-Fachen", steps: ["Grundlohn = 37,5 × 16 £ = 600 £", "Überstunden = 6,5 h × 16 £ × 1,25 = 130 £", "Gesamt = 730 £"] },
    ],
    assumptions: [
      "Dies ist eine Schätzung des Bruttolohns vor Einkommensteuer, Sozialabgaben, Leistungen und anderen Abzügen. Es ist keine Rechts- oder Steuerberatung und wurde nicht fachlich geprüft.",
      "Überstundenregeln unterscheiden sich je nach Land, Bundesstaat und Vertrag. Manche Orte schreiben Überstunden nach einer bestimmten Stundenzahl pro Tag oder den doppelten Satz nach längeren Schichten vor; dieses Werkzeug wendet nur eine wöchentliche Schwelle und die von Ihnen eingegebenen Stunden mit doppeltem Satz an.",
      "Nach der US-Bundesregel kann der reguläre Satz Boni, Provisionen und Schichtzulagen einschließen. Hier ist der reguläre Satz der von Ihnen eingegebene Stundenlohn.",
      "Ausgenommene Beschäftigte, etwa viele fest besoldete Führungskräfte und Fachkräfte, haben unter Umständen gar keinen Anspruch auf Überstundenvergütung.",
    ],
    faqs: [
      { question: "Was bedeutet das 1,5-Fache („time and a half“)?", answer: "Jede Überstunde wird mit dem 1,5-Fachen des regulären Satzes vergütet. Bei 20 $ pro Stunde bringt eine Überstunde 30 $, der Zuschlag beträgt also 10 $ zusätzlich zum Grundlohn." },
      { question: "Darf mein Arbeitgeber die Stunden über zwei Wochen mitteln?", answer: "Nach der US-Bundesregel nicht. Jede Arbeitswoche ist ein fester Zeitraum von 168 Stunden, der für sich steht. 50 Stunden in der einen und 30 in der nächsten Woche bedeuten also trotzdem 10 Überstunden in der ersten Woche." },
      { question: "Werden die Stunden mit doppeltem Satz zu den Überstunden addiert?", answer: "Nein. In diesem Rechner sind die Stunden mit doppeltem Satz ein Teil der Überstunden. Haben Sie 12 Überstunden gearbeitet und 4 davon zum doppelten Satz, werden die übrigen 8 mit dem Überstundenfaktor vergütet." },
    ],
    sourcesUsedFor: [
      "Die US-Bundesregel: Erfasste, nicht ausgenommene Beschäftigte erhalten für Stunden über 40 in einer Arbeitswoche mindestens das 1,5-Fache des regulären Satzes.",
      "Die Arbeitswoche als fester Zeitraum von 168 Stunden, das Verbot, Stunden über mehrere Wochen zu mitteln, und die Ermittlung des regulären Satzes.",
    ],
  },
  text: {
    rate: "Regulärer Stundenlohn",
    rateHelp: "Der Grundsatz für eine Arbeitsstunde, vor einem Überstundenzuschlag.",
    hours: "Gearbeitete Stunden in der Woche insgesamt",
    threshold: "Schwelle für reguläre Stunden",
    thresholdHelp: "Stunden, die zum regulären Satz vergütet werden, bevor Überstunden beginnen. Nach der US-Bundesregel sind das 40 Stunden pro Arbeitswoche.",
    multiplier: "Überstundenfaktor",
    multiplierHelp: "1,5 entspricht einem Zuschlag von 50 %.",
    doubleHours: "Stunden mit doppeltem Satz (optional)",
    doubleHoursHelp: "Stunden, die mit dem höheren doppelten Satz vergütet werden. Sie sind Teil der Überstunden und werden nicht zusätzlich addiert. Leer lassen oder 0, wenn keine.",
    doubleMultiplier: "Faktor für den doppelten Satz",
    errors: {
      doubleExceeds: "Die Stunden mit doppeltem Satz dürfen die Überstunden ({overtime} h) nicht übersteigen.",
    },
    grossPay: "Bruttolohn insgesamt",
    caption: "{hours} h zu {rate} pro Stunde, mit Überstunden ab {threshold} h zum {multiplier}-Fachen des regulären Satzes.",
    regularPay: "Grundlohn",
    overtimePay: "Überstundenvergütung",
    doublePay: "Vergütung zum doppelten Satz",
    regularHours: "Reguläre Stunden",
    overtimeHours: "Überstunden (einschließlich doppeltem Satz)",
    overtimeRate: "Stundenlohn für Überstunden",
    doubleRate: "Stundenlohn zum doppelten Satz",
    effectiveRate: "Effektiver Stundenlohn",
    notes: {
      noOvertime: "Die gearbeiteten Stunden überschreiten die Schwelle nicht, daher fallen keine Überstunden an.",
      gross: "Die Beträge sind Bruttolöhne vor Steuern und Abzügen.",
      rules: "Überstundenregeln hängen von Land, Bundesstaat und Arbeitsvertrag ab; manche Orte schreiben auch tägliche Überstunden vor.",
    },
  },
};

export default de;
