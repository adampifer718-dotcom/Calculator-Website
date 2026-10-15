import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FinalGradeText } from "../text/en";

const de: CalculatorTranslation<FinalGradeText> = {
  content: {
    title: "Endnotenrechner",
    shortTitle: "Endnote",
    summary: "Ermitteln Sie, welches Ergebnis Sie in der Abschlussprüfung brauchen, um die gewünschte Gesamtnote im Kurs zu erreichen.",
    metaTitle: "Endnotenrechner – nötiges Ergebnis in der Abschlussprüfung",
    metaDescription: "Berechnen Sie, was Sie in der Abschlussprüfung brauchen, um eine Zielnote im Kurs zu erreichen – aus Ihrer aktuellen Note und der Gewichtung der Prüfung.",
    keywords: ["Endnote berechnen", "Abschlussprüfung", "welche Note brauche ich", "nötige Prüfungsnote", "Kursnote", "gewichtete Note", "Prüfungsergebnis"],
    intro: [
      "Gegen Ende eines Kurses lautet die große Frage oft, was man in der Abschlussprüfung braucht. Ihre Gesamtnote ist ein gewichteter Durchschnitt: Ihre aktuelle Note zählt zu einem Teil, die Abschlussprüfung zum Rest.",
      "Geben Sie Ihre bisherige Note ein, wie stark die Abschlussprüfung zählt und welche Gesamtnote Sie anstreben. Der Rechner nennt das nötige Prüfungsergebnis und zeigt die beste und die schlechteste Gesamtnote, die Sie erreichen können.",
    ],
    howToUse: [
      "Geben Sie Ihre aktuelle Note im Kurs in Prozent ein.",
      "Geben Sie die Gewichtung der Abschlussprüfung laut Kursplan ein.",
      "Geben Sie die Gesamtnote ein, mit der Sie abschließen möchten.",
      "Lesen Sie das nötige Prüfungsergebnis ab sowie die Gesamtnote bei voller oder null Punktzahl.",
    ],
    formulas: [
      { title: "Nötiges Ergebnis in der Abschlussprüfung", expression: "nötig = (Ziel − aktuell × (1 − w)) ÷ w", explanation: "w ist die Gewichtung der Prüfung als Bruchteil (30 % = 0,3). Noten sind Prozentwerte." },
      { title: "Gesamtnote", expression: "gesamt = aktuell × (1 − w) + Prüfung × w", explanation: "Die Kursnote als gewichteter Durchschnitt aus Ihrem jetzigen Stand und der Abschlussprüfung." },
    ],
    examples: [
      {
        title: "Aktuell 78 %, Prüfung zählt 25 %, Ziel 80 %",
        steps: ["w = 0,25, also zählt die aktuelle Note mit 0,75", "nötig = (80 − 78 × 0,75) ÷ 0,25", "= (80 − 58,5) ÷ 0,25 = 86 %"],
      },
      {
        title: "Aktuell 91 %, Prüfung zählt 40 %, Ziel 90 %",
        steps: ["nötig = (90 − 91 × 0,6) ÷ 0,4", "= (90 − 54,6) ÷ 0,4 = 88,5 %"],
      },
      {
        title: "Aktuell 65 %, Prüfung zählt 20 %, Ziel 75 %",
        steps: ["nötig = (75 − 65 × 0,8) ÷ 0,2", "= (75 − 52) ÷ 0,2 = 115 %", "Mehr als 100 %, dieses Ziel erfordert also Zusatzpunkte"],
      },
    ],
    assumptions: [
      "Ihre aktuelle Note bildet bereits alle anderen Kursteile ab, und diese zählen zusammen 100 % minus der Gewichtung der Abschlussprüfung.",
      "Noten sind Prozentwerte. Notengrenzen, Rundungen und Anpassungen an die Notenverteilung unterscheiden sich je nach Lehrkraft und werden nicht angewendet.",
      "Manche Kurse streichen ein schlechtes Ergebnis, lassen die Abschlussprüfung eine Zwischenprüfung ersetzen oder verlangen eine Mindestpunktzahl in der Abschlussprüfung. Prüfen Sie Ihren Kursplan auf solche Regeln.",
    ],
    faqs: [
      {
        question: "Wie finde ich meine aktuelle Note heraus?",
        answer: "Meist zeigt sie die Kurswebsite oder die Lehrkraft an. Falls nicht, bilden Sie den gewichteten Durchschnitt aller bisherigen Noten mit den Gewichtungen aus dem Kursplan, ohne die Abschlussprüfung.",
      },
      {
        question: "Was bedeutet es, wenn ich mehr als 100 % brauche?",
        answer: "Selbst eine perfekte Abschlussprüfung würde Ihre Gesamtnote nicht auf das Ziel heben. Mit Zusatzpunkten ist es vielleicht noch erreichbar, andernfalls sollten Sie ein niedrigeres Ziel ansetzen.",
      },
      {
        question: "Was, wenn das Ergebnis 0 % oder weniger ist?",
        answer: "Dann ist Ihr Ziel bereits gesichert: Auch ohne Punkte in der Abschlussprüfung bleibt Ihre Gesamtnote auf oder über dem Ziel. Klären Sie, ob Sie der Prüfung fernbleiben dürfen, denn manche Kurse schreiben die Teilnahme vor.",
      },
    ],
    sourcesUsedFor: ["Wie sich eine Kursnote als gewichteter Durchschnitt der im Kursplan aufgeführten Teile einschließlich der Abschlussprüfung ergibt."],
  },
  text: {
    current: "Aktuelle Note",
    currentHelp: "Ihre bisherige Note im Kurs, vor der Abschlussprüfung.",
    weight: "Gewichtung der Abschlussprüfung",
    weightHelp: "Wie viel der Gesamtnote die Abschlussprüfung ausmacht, in Prozent. Sehen Sie in Ihrem Kursplan nach.",
    desired: "Gewünschte Gesamtnote",
    weightTooHigh: "Die Abschlussprüfung muss weniger als 100 % der Note ausmachen, sonst zählt Ihre aktuelle Note nicht.",
    needed: "Nötiges Ergebnis in der Prüfung",
    caption: "Um mit {desired} abzuschließen, wenn die Prüfung {weight} zählt und Sie jetzt bei {current} stehen.",
    ifFull: "Gesamtnote bei 100 % in der Prüfung",
    ifZero: "Gesamtnote bei 0 % in der Prüfung",
    currentShare: "Anteil der aktuellen Note an der Gesamtnote",
    notes: {
      over: "Sie bräuchten mehr als 100 % in der Abschlussprüfung. Das ist nur mit Zusatzpunkten möglich; andernfalls ist dieses Ziel nicht erreichbar.",
      secured: "Diese Note haben Sie bereits sicher: Selbst mit 0 % in der Abschlussprüfung bleiben Sie auf oder über Ihrem Ziel.",
      rounding: "Lehrkräfte können Noten runden, an die Verteilung anpassen oder die Abschlussprüfung anders gewichten. Sehen Sie in Ihrem Kursplan nach.",
    },
  },
};

export default de;
