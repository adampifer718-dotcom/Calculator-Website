import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { GpaText } from "../text/en";

const de: CalculatorTranslation<GpaText> = {
  content: {
    title: "GPA-Rechner",
    shortTitle: "GPA",
    summary: "Berechnen Sie den nach Credits gewichteten Notendurchschnitt (GPA, US-amerikanischer Grade Point Average) aus Buchstabennoten oder Notenpunkten und aktualisieren Sie Ihren Gesamt-GPA.",
    metaTitle: "GPA-Rechner – US-Notendurchschnitt für Semester und Studium",
    metaDescription:
      "Berechnen Sie Ihren Semester-GPA aus US-Buchstabennoten und Credits auf der 4,0- oder 4,3-Skala und kombinieren Sie ihn mit Ihrem bisherigen GPA zum neuen Gesamtdurchschnitt.",
    keywords: ["GPA Rechner", "GPA berechnen", "Grade Point Average", "Notendurchschnitt USA", "GPA umrechnen", "Credits", "Auslandssemester USA"],
    intro: [
      "Der Grade Point Average (GPA) ist der in den USA übliche Notendurchschnitt. Er gewichtet die Notenpunkte jedes Kurses mit seinen Credits, sodass ein Kurs mit 4 Credits stärker zählt als einer mit 2 Credits.",
      "Listen Sie Ihre Kurse mit Noten und Credits auf, um den GPA dieses Semesters zu sehen. Ergänzen Sie Ihren bisherigen GPA und die bereits erworbenen Credits, um Ihren neuen Gesamt-GPA zu erhalten.",
    ],
    howToUse: [
      "Wählen Sie die 4,0- oder 4,3-Skala Ihrer Hochschule (sie unterscheiden sich nur im Wert von A+).",
      "Geben Sie pro Zeile einen Kurs mit Note und Credits ein, zum Beispiel „Biologie B+ 3“.",
      "Geben Sie optional Ihren bisherigen Gesamt-GPA und die zugehörigen Credits ein.",
      "Lesen Sie den Semester-GPA, den neuen Gesamt-GPA und die Tabelle mit allen Kursen ab.",
    ],
    formulas: [
      { title: "Semester-GPA", expression: "GPA = Σ(Notenpunkte × Credits) ÷ Σ Credits", explanation: "Die Qualitätspunkte eines Kurses sind seine Notenpunkte multipliziert mit seinen Credits." },
      { title: "Gesamt-GPA", expression: "Neuer GPA = (bisheriger GPA × bisherige Credits + Qualitätspunkte des Semesters) ÷ (bisherige Credits + Credits des Semesters)", explanation: "Verbindet Ihre bisherigen Leistungen mit dem neuen Semester, gewichtet nach Credits." },
      { title: "Buchstabennoten (4,0-Skala)", expression: "A = 4,0, A− = 3,7, B+ = 3,3, B = 3,0, B− = 2,7, C+ = 2,3, C = 2,0, C− = 1,7, D+ = 1,3, D = 1,0, D− = 0,7, F = 0", explanation: "Die übliche US-Skala. Auf der 4,3-Skala gilt A+ = 4,3." },
    ],
    examples: [
      {
        title: "Vier Kurse auf der 4,0-Skala",
        steps: ["Qualitätspunkte: 4,0 × 3 + 3,3 × 4 + 3,7 × 3 + 2,0 × 2 = 40,3", "Credits: 3 + 4 + 3 + 2 = 12", "GPA = 40,3 ÷ 12 ≈ 3,36"],
      },
      {
        title: "Neues Semester zu einem GPA von 3,2 aus 45 Credits",
        steps: ["Semester: (4,0 × 4 + 3,0 × 3) ÷ 7 = 25 ÷ 7 ≈ 3,57", "Gesamt: (3,2 × 45 + 25) ÷ (45 + 7) = 169 ÷ 52 = 3,25"],
      },
    ],
    assumptions: [
      "Die Buchstabennoten folgen der üblichen US-amerikanischen 4-Punkte-Skala; Hochschulen mit anderen Skalen, Plus-Abstufungen oder höherer Gewichtung von Honors-Kursen können abweichen.",
      "Kurse mit „Pass/Fail“-Bewertung und abgebrochene Kurse sollten weggelassen werden, da sie meist nicht in den GPA eingehen.",
      "Die Ergebnisse werden für die Anzeige auf zwei Nachkommastellen gerundet; Ihre Hochschule rundet oder kürzt möglicherweise anders.",
    ],
    faqs: [
      { question: "Was ist der Unterschied zwischen der 4,0- und der 4,3-Skala?", answer: "Nur die Note A+: Manche Hochschulen bewerten sie mit 4,0, andere mit 4,3. Alle anderen Noten haben dieselben Punkte." },
      { question: "Kann ich Prozentwerte oder Zahlennoten eingeben?", answer: "Geben Sie statt eines Buchstabens direkt die Notenpunkte ein (zum Beispiel 3,5). Wie Prozentwerte in Notenpunkte umgerechnet werden, legt Ihre Hochschule fest." },
      { question: "Warum verändert ein Kurs mit mehr Credits meinen GPA stärker?", answer: "Der GPA wird nach Credits gewichtet, jede Credit-Stunde zählt also gleich viel. Ein A in einem Kurs mit 4 Credits bringt doppelt so viele Qualitätspunkte wie ein A in einem Kurs mit 2 Credits und zieht Ihren GPA daher stärker in Richtung 4,0 – allerdings nicht genau doppelt so stark." },
    ],
    sourcesUsedFor: [],
  },
  text: {
    scale: "Notenskala",
    scales: { "4.0": "4,0-Skala (A+ = 4,0)", "4.3": "4,3-Skala (A+ = 4,3)" },
    courses: "Kurse",
    coursesHelp: "Ein Kurs pro Zeile: optional ein Name, dann die Note (ein Buchstabe wie B+ oder Notenpunkte wie 3,3), dann die Credits.",
    defaultCourses: "Analysis A 4\nChemie B+ 4\nGeschichte A- 3\nKunst C 2",
    priorGpa: "Bisheriger Gesamt-GPA",
    priorGpaHelp: "Optional. Lassen Sie beide Felder leer, um nur dieses Semester zu sehen.",
    priorCredits: "Bereits erworbene Credits",
    errors: {
      empty: "Geben Sie mindestens einen Kurs ein.",
      tooMany: "Geben Sie höchstens {max} Kurse ein.",
      line: "Zeile {line}: Geben Sie eine Note und die Credits an, zum Beispiel „Biologie B+ 3“.",
      grade: "Zeile {line}: „{grade}“ ist keine Note auf dieser Skala.",
      credits: "Zeile {line}: Die Credits müssen größer als 0 sein.",
      priorBoth: "Geben Sie sowohl Ihren bisherigen GPA als auch die zugehörigen Credits ein – oder keines von beiden.",
      priorRange: "Geben Sie einen GPA zwischen 0 und {max} auf dieser Skala ein.",
    },
    gpa: "Semester-GPA",
    caption: "{credits} Credits und {points} Qualitätspunkte.",
    cumulative: "Neuer Gesamt-GPA",
    totalCredits: "Credits in diesem Semester",
    qualityPoints: "Qualitätspunkte",
    tableCaption: "Kurse",
    columns: { course: "Kurs", points: "Notenpunkte", credits: "Credits", quality: "Qualitätspunkte" },
    unnamed: "Kurs {line}",
    note: "Die Buchstabennoten folgen der üblichen US-amerikanischen 4-Punkte-Skala (A− = 3,7, B+ = 3,3 … D− = 0,7, F = 0). Prüfen Sie die Skala Ihrer Hochschule; manche gewichten Honors- oder AP-Kurse anders.",
  },
};

export default de;
