import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SampleSizeText } from "../text/en";

const de: CalculatorTranslation<SampleSizeText> = {
  content: {
    title: "Stichprobenrechner",
    shortTitle: "Stichprobengröße",
    summary: "Ermitteln Sie, wie viele Antworten Ihre Umfrage für ein gewähltes Konfidenzniveau und eine Fehlermarge braucht, optional mit der Größe der Grundgesamtheit.",
    metaTitle: "Stichprobenrechner – benötigte Antworten für Umfragen",
    metaDescription: "Berechnen Sie, wie viele vollständige Antworten Sie für Konfidenzniveau, Fehlermarge und erwarteten Anteil brauchen – mit Endlichkeitskorrektur.",
    keywords: ["Stichprobengröße berechnen", "Stichprobenumfang", "Umfrage Stichprobe", "wie viele Befragte", "Fehlermarge", "Konfidenzniveau", "Endlichkeitskorrektur", "repräsentative Stichprobe"],
    intro: [
      "Bevor Sie eine Umfrage durchführen, müssen Sie entscheiden, wie viele Personen Sie befragen. Zu wenige Antworten liefern ein breites, ungenaues Ergebnis; zu viele kosten unnötig Zeit und Geld. Dieser Rechner ermittelt die kleinste Zahl vollständiger Antworten, mit der sich ein Prozentwert mit der gewünschten Genauigkeit schätzen lässt.",
      "Wählen Sie ein Konfidenzniveau, die Fehlermarge, die Sie akzeptieren können, und – falls bekannt – Ihre beste Schätzung des Ergebnisses. Ist die untersuchte Gruppe klein, etwa die 600 Beschäftigten eines Unternehmens, geben Sie auch ihre Größe ein: Die Endlichkeitskorrektur senkt dann die benötigte Zahl.",
    ],
    howToUse: [
      "Wählen Sie ein Konfidenzniveau. 95 % ist die gebräuchlichste Wahl.",
      "Geben Sie die Fehlermarge in Prozentpunkten ein, zum Beispiel 5 für ±5 Punkte.",
      "Geben Sie den erwarteten Anteil ein. Lassen Sie ihn bei 50 %, wenn Sie unsicher sind; das ergibt die größte Stichprobe.",
      "Geben Sie optional die Größe der Grundgesamtheit ein. Lassen Sie das Feld bei einer großen oder unbekannten Grundgesamtheit leer.",
      "Lesen Sie die benötigte Stichprobengröße ab. Sie wird immer auf eine ganze Antwort aufgerundet.",
    ],
    formulas: [
      { title: "Stichprobengröße für eine große Grundgesamtheit", expression: "n₀ = z*² × p × (1 − p) ÷ E²", explanation: "z* ist der kritische Wert für das Konfidenzniveau (1,96 für 95 %), p der erwartete Anteil und E die Fehlermarge, beide als Dezimalzahlen." },
      { title: "Endlichkeitskorrektur", expression: "n = n₀ ÷ (1 + (n₀ − 1) ÷ N)", explanation: "N ist die Größe der Grundgesamtheit. Die Korrektur spielt eine Rolle, wenn die Stichprobe einen merklichen Teil der Grundgesamtheit ausmacht." },
      { title: "Runden", expression: "Stichprobengröße = ⌈n⌉", explanation: "Das Ergebnis wird aufgerundet, denn Abrunden ergäbe eine etwas größere Fehlermarge als gewünscht." },
    ],
    examples: [
      {
        title: "Eine landesweite Umfrage mit 95 % Konfidenz und ±5 Punkten",
        steps: ["z* = 1,95996 für 95 % Konfidenz", "n₀ = 1,95996² × 0,5 × 0,5 ÷ 0,05² ≈ 384,15", "Aufrunden: 385 vollständige Antworten"],
      },
      {
        title: "Eine Mitarbeiterbefragung bei 2.400 Beschäftigten mit 99 % Konfidenz, ±3 Punkten und erwarteten 30 %",
        steps: ["z* = 2,57583 für 99 % Konfidenz", "n₀ = 2,57583² × 0,3 × 0,7 ÷ 0,03² ≈ 1.548,14", "n = 1.548,14 ÷ (1 + 1.547,14 ÷ 2.400) ≈ 941,32", "Aufrunden: 942 Antworten"],
      },
      {
        title: "Schätzung eines Ausschussanteils von 12 % mit 90 % Konfidenz und ±4 Punkten",
        steps: ["z* = 1,64485 für 90 % Konfidenz", "n₀ = 1,64485² × 0,12 × 0,88 ÷ 0,04² ≈ 178,57", "Aufrunden: 179 zu prüfende Teile"],
      },
    ],
    assumptions: [
      "Die Formel setzt eine einfache Zufallsstichprobe voraus: Jedes Mitglied der Grundgesamtheit hat dieselbe Chance, ausgewählt zu werden.",
      "Sie bemisst eine Stichprobe zur Schätzung eines einzelnen Anteils (eines Prozentsatzes von Ja/Nein-Antworten), nicht eines Mittelwerts oder eines Unterschieds zwischen Gruppen.",
      "Sie beruht auf der Normalapproximation der Stichprobenverteilung eines Anteils. Diese funktioniert gut, wenn die erwartete Zahl der Ja- und der Nein-Antworten jeweils mindestens etwa 10 beträgt.",
      "Das Ergebnis ist die Zahl der vollständigen Antworten. Nichtbeantwortung, Abbrüche und unbrauchbare Antworten sind nicht berücksichtigt; planen Sie also, mehr Personen zu kontaktieren.",
      "Die kritischen Werte stammen aus einer numerischen Umkehrung der Normalverteilung, die auf etwa neun signifikante Stellen genau ist.",
    ],
    faqs: [
      { question: "Warum ergibt 50 % die größte Stichprobe?", answer: "Das Produkt p × (1 − p) ist bei p = 0,5 am größten und beträgt dann 0,25. Jeder andere erwartete Anteil braucht für dieselbe Fehlermarge weniger Antworten. Deshalb ist 50 % die sichere Wahl, wenn Sie keine Vorabschätzung haben." },
      { question: "Braucht eine größere Grundgesamtheit eine viel größere Stichprobe?", answer: "Eigentlich nicht. Ist die Grundgesamtheit groß, ändert sich die benötigte Stichprobe kaum: Bei 95 % Konfidenz und ±5 Punkten brauchen Sie 383 Antworten für eine Grundgesamtheit von 100.000 und 385 für eine von 100 Millionen. Die Größe der Grundgesamtheit zählt nur, wenn Sie einen erheblichen Teil davon befragen." },
      { question: "Wie viele Personen sollte ich einladen?", answer: "Teilen Sie die Stichprobengröße durch die erwartete Rücklaufquote. Brauchen Sie 385 vollständige Antworten und erwarten Sie, dass 20 % der Personen antworten, laden Sie etwa 385 ÷ 0,20 ≈ 1.925 Personen ein." },
    ],
    sourcesUsedFor: [
      "Stichprobengröße für die Schätzung eines Anteils, n = z²·p(1 − p)/E², und die Verwendung von p = 0,5, wenn keine Schätzung vorliegt.",
      "Wann und warum eine Endlichkeitskorrektur angewendet wird.",
    ],
  },
  text: {
    level: "Konfidenzniveau",
    levelHelp: "Wie sicher Sie sein möchten, dass der wahre Anteil innerhalb der Fehlermarge liegt.",
    levelOptions: { "80": "80 %", "90": "90 %", "95": "95 %", "98": "98 %", "99": "99 %" },
    margin: "Fehlermarge",
    marginHelp: "Die akzeptable Abweichung ± in Prozentpunkten. Zum Beispiel bedeutet 5 ±5 Punkte.",
    proportion: "Erwarteter Anteil",
    proportionHelp: "Ihre beste Schätzung des Anteils, der mit „Ja“ antworten wird. Nehmen Sie 50 %, wenn Sie keine Vorstellung haben: Das ergibt die größte, sicherste Stichprobe.",
    proportionMax: "Muss kleiner als 100 % sein.",
    population: "Größe der Grundgesamtheit (optional)",
    populationHelp: "Gesamtzahl der Personen oder Einheiten, die Sie befragen könnten. Bei einer sehr großen oder unbekannten Grundgesamtheit leer lassen.",
    sampleSize: "Benötigte Stichprobengröße",
    caption: "Benötigte vollständige Antworten bei {level} Konfidenz und ±{margin}.",
    infinite: "Stichprobengröße vor der Korrektur (n₀)",
    infiniteRounded: "n₀ aufgerundet",
    critical: "Kritischer Wert (z*)",
    correction: "Endlichkeitskorrektur",
    correctionApplied: "Angewendet (Grundgesamtheit von {population})",
    correctionNotApplied: "Nicht angewendet (keine Größe der Grundgesamtheit angegeben)",
    share: "Befragter Anteil der Grundgesamtheit",
    responseNote: "Dies ist die Zahl der vollständigen Antworten. Wenn Sie erwarten, dass nur ein Teil der Personen antwortet, teilen Sie durch die erwartete Rücklaufquote, um zu ermitteln, wie viele Sie einladen müssen.",
    wholePopulation: "Die Stichprobe umfasst die ganze oder fast die ganze Grundgesamtheit; eine Vollerhebung ist daher womöglich einfacher.",
  },
};

export default de;
