import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RoiText } from "../text/en";

const de: CalculatorTranslation<RoiText> = {
  content: {
    title: "ROI-Rechner",
    shortTitle: "ROI",
    summary: "Ermitteln Sie die Kapitalrendite in Prozent, mit Nettogewinn oder -verlust und optional der annualisierten Rendite.",
    metaTitle: "ROI-Rechner – Kapitalrendite und annualisierter ROI",
    metaDescription:
      "Berechnen Sie die Kapitalrendite aus investiertem und zurückerhaltenem Betrag. Mit Nettogewinn oder -verlust, Gesamt-ROI und annualisiertem ROI über beliebig viele Jahre.",
    keywords: ["ROI berechnen", "Kapitalrendite", "Return on Investment", "Rendite berechnen", "annualisierte Rendite", "Investitionsrendite", "CAGR"],
    intro: [
      "Die Kapitalrendite (ROI, Return on Investment) vergleicht, was Sie zurückerhalten haben, mit dem, was Sie eingesetzt haben. So lassen sich Investitionen, Projekte oder Anschaffungen unterschiedlicher Größe schnell vergleichen.",
      "Geben Sie zusätzlich die Haltedauer an, um den annualisierten ROI zu sehen. Damit werden Renditen über unterschiedliche Zeiträume vergleichbar.",
    ],
    howToUse: [
      "Geben Sie den gesamten investierten Betrag ein, einschließlich der beim Kauf gezahlten Gebühren.",
      "Geben Sie den zurückerhaltenen Betrag ein: den Endwert oder den Gesamterlös, einschließlich des ursprünglichen Betrags.",
      "Geben Sie optional an, wie viele Jahre Sie die Investition gehalten haben.",
      "Lesen Sie den Gesamt-ROI, den Nettogewinn oder -verlust und den annualisierten ROI ab.",
    ],
    formulas: [
      {
        title: "Kapitalrendite",
        expression: "ROI = (zurückerhaltener Betrag − investierter Betrag) ÷ investierter Betrag × 100",
        explanation: "Ein positiver ROI bedeutet Gewinn, ein negativer ROI Verlust.",
      },
      {
        title: "Annualisierter ROI",
        expression: "Annualisierter ROI = ((zurückerhaltener Betrag ÷ investierter Betrag)^(1 ÷ Jahre) − 1) × 100",
        explanation: "Das ist der gleichbleibende jährliche Zinssatz, mit dem der investierte Betrag im Zeitraum auf den zurückerhaltenen Betrag anwachsen würde, auch CAGR genannt.",
      },
    ],
    examples: [
      {
        title: "10.000 $ wachsen in 3 Jahren auf 12.500 $",
        steps: ["Nettogewinn = 12.500 $ − 10.000 $ = 2.500 $", "ROI = 2.500 $ ÷ 10.000 $ × 100 = 25 %", "Annualisiert = (1,25^(1/3) − 1) × 100 ≈ 7,72 %"],
      },
      {
        title: "5.000 $ fallen auf 4.200 $",
        steps: ["Nettoverlust = 4.200 $ − 5.000 $ = −800 $", "ROI = −800 $ ÷ 5.000 $ × 100 = −16 %"],
      },
    ],
    assumptions: [
      "Steuern, Gebühren, Dividenden und andere Zahlungsströme werden nur berücksichtigt, wenn Sie sie in die eingegebenen Beträge einrechnen.",
      "Der annualisierte ROI setzt ein Wachstum mit konstanter Rate über den Zeitraum voraus. Der Zeitpunkt von Ein- oder Auszahlungen wird nicht berücksichtigt.",
      "Die Wahl der Währung ändert nur die Formatierung. Es findet keine Währungsumrechnung statt.",
      "Vergangene Renditen sind kein Indikator für künftige Ergebnisse. Dieser Rechner stellt keine Anlageberatung dar.",
    ],
    faqs: [
      {
        question: "Was ist ein guter ROI?",
        answer:
          "Das hängt vom Risiko, vom Zeitraum und von den verfügbaren Alternativen ab. Vergleichen Sie bei unterschiedlichen Haltedauern den annualisierten ROI statt des Gesamt-ROI.",
      },
      {
        question: "Was ist der Unterschied zwischen ROI und annualisiertem ROI?",
        answer:
          "Der ROI ist die Gesamtrendite über den gesamten Zeitraum. Der annualisierte ROI rechnet sie in einen gleichwertigen jährlichen Satz um. Eine Rendite von 25 % über 3 Jahre entspricht etwa 7,72 % pro Jahr.",
      },
      {
        question: "Sollte ich Gebühren und Dividenden einbeziehen?",
        answer: "Ja, für einen genauen Wert. Rechnen Sie Kaufgebühren zum investierten Betrag und erhaltene Dividenden oder Zinsen zum zurückerhaltenen Betrag hinzu.",
      },
      {
        question: "Kann der ROI negativ sein?",
        answer: "Ja. Erhalten Sie weniger zurück, als Sie investiert haben, ist der ROI negativ. Der niedrigste mögliche ROI ist −100 %, wenn nichts zurückfließt.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    invested: "Investierter Betrag",
    investedHelp: "Gesamtkosten der Investition.",
    finalValue: "Zurückerhaltener Betrag",
    finalValueHelp: "Endwert oder Gesamterlös, einschließlich des ursprünglichen Betrags.",
    years: "Anlagedauer (optional)",
    yearsHelp: "Geben Sie die Haltedauer in Jahren an, um den annualisierten ROI zu sehen.",
    primary: "Kapitalrendite",
    gainCaption: "Gesamtgewinn im Verhältnis zum investierten Betrag.",
    lossCaption: "Gesamtverlust im Verhältnis zum investierten Betrag.",
    net: "Nettogewinn oder -verlust",
    annualized: "Annualisierter ROI",
    addLength: "Anlagedauer angeben",
    note: "Der ROI berücksichtigt hier keine Steuern, Gebühren und den Zeitpunkt zwischenzeitlicher Zahlungsströme, sofern diese nicht in den Beträgen enthalten sind.",
  },
};

export default de;
