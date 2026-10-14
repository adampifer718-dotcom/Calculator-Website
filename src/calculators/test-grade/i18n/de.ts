import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { TestGradeText } from "../text/en";

const de: CalculatorTranslation<TestGradeText> = {
  content: {
    title: "Notenrechner",
    shortTitle: "Testnote",
    summary: "Wandeln Sie richtige Antworten oder Punkte in ein Ergebnis in Prozent und eine Buchstabennote um.",
    metaTitle: "Notenrechner – Prozentsatz und Buchstabennote",
    metaDescription:
      "Ermitteln Sie das Testergebnis in Prozent und die Buchstabennote aus der Zahl richtiger oder falscher Antworten oder aus den erreichten Punkten von der Gesamtpunktzahl.",
    keywords: ["Notenrechner", "Testergebnis Prozent", "Punkte in Prozent", "Prüfung Note berechnen", "Klausur Punkte", "Buchstabennote"],
    intro: [
      "Geben Sie ein, wie viele Fragen oder Punkte ein Test hatte und wie viele Sie richtig oder falsch hatten. Der Rechner zeigt das Ergebnis in Prozent und die passende Buchstabennote.",
      "Er eignet sich für Quizze, Prüfungen und Aufgaben, die nach Punkten bewertet werden.",
    ],
    howToUse: [
      "Geben Sie die Gesamtzahl der Fragen oder Punkte ein.",
      "Wählen Sie, ob Sie die Zahl der richtigen oder der falschen Antworten kennen.",
      "Geben Sie diese Zahl ein und lesen Sie Prozentsatz und Buchstabennote ab.",
    ],
    formulas: [
      {
        title: "Ergebnis in Prozent",
        expression: "Ergebnis % = erreichte Punkte ÷ Gesamtpunkte × 100",
        explanation: "Kennen Sie die Zahl der falschen Antworten, gilt: erreichte Punkte = Gesamtpunkte − verlorene Punkte.",
      },
      {
        title: "Buchstabennote",
        expression: "A ≥ 90 %, B ≥ 80 %, C ≥ 70 %, D ≥ 60 %, F < 60 %",
        explanation: "Eine in den USA übliche Skala. Schulen verwenden mitunter Plus- und Minusnoten oder andere Grenzwerte.",
      },
    ],
    examples: [
      { title: "45 von 50 richtig", steps: ["45 ÷ 50 = 0,9", "0,9 × 100 = 90 %, also ein A"] },
      { title: "7 von 30 falsch", steps: ["Richtig = 30 − 7 = 23", "23 ÷ 30 × 100 = 76,67 %, also ein C"] },
    ],
    assumptions: [
      "Jede Frage zählt gleich viel, sofern Sie keine Punkte eingeben.",
      "Die Buchstabennoten folgen der in den USA üblichen Skala; prüfen Sie die Bewertungsrichtlinien Ihrer Schule.",
      "Teilpunkte können als Dezimalzahlen eingegeben werden.",
    ],
    faqs: [
      {
        question: "Wie berechne ich das Testergebnis in Prozent?",
        answer: "Teilen Sie die erreichten Punkte durch die mögliche Gesamtpunktzahl und multiplizieren Sie mit 100. 18 von 20 sind 90 %.",
      },
      { question: "Welche Note sind 75 %?", answer: "Auf der in den USA üblichen Skala sind 75 % ein C." },
      {
        question: "Kann ich Punkte statt Fragen verwenden?",
        answer: "Ja. Geben Sie die Gesamtpunktzahl und die erreichten Punkte ein; die Formel ist dieselbe.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    total: "Gesamtzahl der Fragen oder Punkte",
    mode: "Eingabe über",
    modes: { correct: "Richtige Antworten (erreichte Punkte)", wrong: "Falsche Antworten (verlorene Punkte)" },
    correct: "Richtige Antworten oder erreichte Punkte",
    wrong: "Falsche Antworten oder verlorene Punkte",
    overTotal: "Darf nicht größer als die Gesamtzahl sein.",
    grade: "Ergebnis",
    caption: "{earned} von {total}.",
    letter: "Buchstabennote (Skala A–F)",
    lost: "Verlorene Punkte",
    note: "Die Buchstabennoten folgen der üblichen Skala A ≥ 90 %, B ≥ 80 %, C ≥ 70 %, D ≥ 60 %, F unter 60 %. Die Skala Ihrer Schule kann abweichen.",
  },
};

export default de;
