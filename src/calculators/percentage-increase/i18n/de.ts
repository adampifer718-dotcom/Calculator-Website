import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentageIncreaseText } from "../text/en";

const de: CalculatorTranslation<PercentageIncreaseText> = {
  content: {
    title: "Prozentsteigerungsrechner",
    shortTitle: "Prozentuale Steigerung",
    summary: "Berechnen Sie die prozentuale Zu- oder Abnahme von einem Ausgangswert zu einem neuen Wert.",
    metaTitle: "Prozentsteigerungsrechner – prozentuale Veränderung ermitteln",
    metaDescription:
      "Berechnen Sie die prozentuale Zu- oder Abnahme zwischen zwei Zahlen. Mit prozentualer Veränderung, absoluter Differenz, Formel und Rechenbeispielen.",
    keywords: ["prozentuale Steigerung berechnen", "prozentuale Veränderung", "Prozent Zunahme", "Prozent Abnahme", "Wachstum in Prozent", "Preiserhöhung Prozent"],
    intro: [
      "Geben Sie einen Ausgangswert und einen neuen Wert ein, um zu sehen, um wie viel Prozent sich der Wert verändert hat. Ein positives Ergebnis ist eine Zunahme, ein negatives eine Abnahme.",
      "Typische Anwendungen sind Gehaltserhöhungen, Preisänderungen, Umsatzwachstum und verbesserte Testergebnisse.",
    ],
    howToUse: [
      "Geben Sie den Ausgangswert (Startwert) ein.",
      "Geben Sie den neuen Wert ein.",
      "Lesen Sie die prozentuale Veränderung, die absolute Veränderung und den neuen Wert in Prozent des Ausgangswerts ab.",
    ],
    formulas: [
      {
        title: "Prozentuale Veränderung",
        expression: "Veränderung % = (neuer Wert − Ausgangswert) ÷ |Ausgangswert| × 100",
        explanation:
          "Die Veränderung wird an der Größe des Ausgangswerts gemessen. Durch den Betrag (Absolutwert) bleibt das Vorzeichen auch bei negativem Ausgangswert aussagekräftig.",
      },
      {
        title: "Absolute Veränderung",
        expression: "Veränderung = neuer Wert − Ausgangswert",
        explanation: "Die Differenz in derselben Einheit wie Ihre Eingaben.",
      },
    ],
    examples: [
      { title: "Von 80 auf 100", steps: ["Veränderung = 100 − 80 = 20", "20 ÷ 80 × 100 = 25 % Zunahme"] },
      { title: "Von 250 auf 200", steps: ["Veränderung = 200 − 250 = −50", "−50 ÷ 250 × 100 = −20 %, also eine Abnahme um 20 %"] },
      { title: "Von −50 auf −25", steps: ["Veränderung = −25 − (−50) = 25", "25 ÷ |−50| × 100 = 50 % Zunahme"] },
    ],
    assumptions: [
      "Der Ausgangswert darf nicht 0 sein, da eine Veränderung ausgehend von null keinen definierten Prozentsatz hat.",
      "Ist der Ausgangswert negativ, wird die Veränderung durch seinen Betrag geteilt.",
      "Die Ergebnisse werden für die Anzeige gerundet. Gerechnet wird mit voller Genauigkeit.",
    ],
    faqs: [
      {
        question: "Wie berechne ich eine prozentuale Steigerung?",
        answer: "Ziehen Sie den Ausgangswert vom neuen Wert ab, teilen Sie durch den Ausgangswert und multiplizieren Sie mit 100. Von 50 auf 65 ergibt (65 − 50) ÷ 50 × 100 = 30 %.",
      },
      {
        question: "Wie berechne ich eine prozentuale Abnahme?",
        answer: "Mit derselben Formel. Ein negatives Ergebnis ist eine Abnahme. Von 120 auf 90 ergibt (90 − 120) ÷ 120 × 100 = −25 %.",
      },
      {
        question: "Führt eine Steigerung um 50 % und danach eine Senkung um 50 % zum Ausgangswert zurück?",
        answer: "Nein. 100 um 50 % erhöht ergibt 150, und 150 um 50 % gesenkt ergibt 75. Jede Veränderung bezieht sich auf einen anderen Ausgangswert.",
      },
      {
        question: "Was ist, wenn der Ausgangswert null ist?",
        answer: "Dann ist die prozentuale Veränderung nicht definiert, weil man nicht durch null teilen kann. Geben Sie stattdessen die absolute Veränderung an.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    original: "Ausgangswert",
    originalHelp: "Der Startwert. Er darf nicht 0 sein.",
    newValue: "Neuer Wert",
    newValueHelp: "Der Wert nach der Veränderung.",
    originalZero: "Der Ausgangswert darf nicht 0 sein. Eine Veränderung ausgehend von 0 hat keinen Prozentsatz.",
    primary: "Prozentuale Veränderung",
    noChange: "Die Werte sind gleich, es gibt also keine Veränderung.",
    increase: "Eine Zunahme von {from} auf {to}.",
    decrease: "Eine Abnahme von {from} auf {to}.",
    absolute: "Absolute Veränderung",
    ratio: "Neuer Wert in % des Ausgangswerts",
    formula: "Formel: ({to} − {from}) ÷ |{from}| × 100.",
    negativeNote: "Der Ausgangswert ist negativ, daher wird die Veränderung an seinem Betrag gemessen.",
  },
};

export default de;
