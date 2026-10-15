import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MarginOfErrorText } from "../text/en";

const de: CalculatorTranslation<MarginOfErrorText> = {
  content: {
    title: "Rechner für die Fehlermarge",
    shortTitle: "Fehlermarge",
    summary: "Ermitteln Sie die Fehlermarge ± eines Umfrageergebnisses in Prozent aus Stichprobengröße, Ergebnis und Konfidenzniveau.",
    metaTitle: "Rechner für die Fehlermarge – Anteile in Umfragen",
    metaDescription: "Berechnen Sie die Fehlermarge ± eines Umfrageergebnisses in Prozent aus Stichprobengröße und Konfidenzniveau – mit Intervall und Standardfehler.",
    keywords: ["Fehlermarge berechnen", "Fehlermarge Umfrage", "Schwankungsbreite", "statistische Fehlertoleranz", "Stichprobenfehler", "Konfidenzintervall Anteil", "Standardfehler Anteil"],
    intro: [
      "Wenn eine Umfrage meldet, dass 47 % der Wähler einen Plan befürworten, ist „±3 Punkte“ ihre Fehlermarge: der Bereich um das Ergebnis, in dem der wahre Wert der Grundgesamtheit wahrscheinlich liegt. Dieser Rechner ermittelt diese Marge für jeden Prozentwert aus einer Umfrage.",
      "Geben Sie ein, wie viele Personen geantwortet haben, welcher Anteil die berichtete Antwort gegeben hat und welches Konfidenzniveau gilt. Der Rechner liefert die Fehlermarge in Prozentpunkten, das Konfidenzintervall und den Standardfehler.",
      "Dieses Werkzeug ist für Anteile gedacht (Prozentsätze von Ja/Nein-Antworten). Wenn Sie den Mittelwert einer Messgröße schätzen, etwa Körpergröße oder Ausgaben, verwenden Sie stattdessen den Konfidenzintervallrechner.",
    ],
    howToUse: [
      "Geben Sie die Stichprobengröße ein: die Zahl der vollständigen Antworten.",
      "Geben Sie den beobachteten Anteil in Prozent ein. Mit 50 % erhalten Sie die größtmögliche Marge für diese Stichprobengröße.",
      "Wählen Sie das Konfidenzniveau.",
      "Macht die Stichprobe einen großen Teil einer bekannten, begrenzten Grundgesamtheit aus, geben Sie deren Größe ein, um die Endlichkeitskorrektur anzuwenden.",
      "Lesen Sie die Fehlermarge und das daraus folgende Intervall um Ihr Ergebnis ab.",
    ],
    formulas: [
      { title: "Standardfehler eines Anteils", expression: "SF = √(p × (1 − p) ÷ n)", explanation: "p ist der beobachtete Anteil als Dezimalzahl und n die Stichprobengröße." },
      { title: "Fehlermarge", expression: "FM = z* × SF", explanation: "z* ist der kritische Wert für das Konfidenzniveau: 1,645 für 90 %, 1,960 für 95 % und 2,576 für 99 %." },
      { title: "Endlichkeitskorrektur", expression: "FM = z* × SF × √((N − n) ÷ (N − 1))", explanation: "Wird verwendet, wenn eine Größe N der Grundgesamtheit eingegeben ist. Sie verkleinert die Marge, wenn die Stichprobe einen großen Teil der Grundgesamtheit ausmacht." },
      { title: "Konfidenzintervall", expression: "p − FM bis p + FM", explanation: "Das Intervall ist auf den Bereich von 0 % bis 100 % begrenzt." },
    ],
    examples: [
      {
        title: "Eine Umfrage unter 1.000 Personen mit 50 % Ergebnis bei 95 % Konfidenz",
        steps: ["SF = √(0,5 × 0,5 ÷ 1.000) ≈ 0,015811", "FM = 1,95996 × 0,015811 ≈ 0,030990", "Marge ≈ ±3,10 Punkte; Intervall ≈ 46,90 % bis 53,10 %"],
      },
      {
        title: "600 Kunden, 42 % zufrieden, bei 90 % Konfidenz",
        steps: ["SF = √(0,42 × 0,58 ÷ 600) ≈ 0,020149", "FM = 1,64485 × 0,020149 ≈ 0,033143", "Marge ≈ ±3,31 Punkte; Intervall ≈ 38,69 % bis 45,31 %"],
      },
      {
        title: "400 von 3.000 Schülern einer Schule, 35 % stimmen zu, bei 99 % Konfidenz",
        steps: ["SF vor der Korrektur = √(0,35 × 0,65 ÷ 400) ≈ 0,023848", "Korrektur = √(2.600 ÷ 2.999) ≈ 0,93110", "FM = 2,57583 × 0,023848 × 0,93110 ≈ 0,057197, also etwa ±5,72 Punkte"],
      },
    ],
    assumptions: [
      "Die Stichprobe ist eine einfache Zufallsstichprobe der Grundgesamtheit. Selbstselektierte Online-Umfragen, Quotenstichproben und gewichtete Panels können größere Fehler haben, als diese Formel zeigt.",
      "Die Marge erfasst nur den zufälligen Stichprobenfehler. Nichtbeantwortung, verzerrende Fragestellungen oder unwahre Antworten berücksichtigt sie nicht.",
      "Sie verwendet die Normalapproximation (Wald), die schwach ist, wenn weniger als etwa 10 Antworten in eine der beiden Kategorien fallen; der Rechner warnt Sie in diesem Fall.",
      "Die kritischen Werte werden numerisch berechnet und stimmen mit Standardtabellen auf weit mehr Stellen überein als angezeigt.",
    ],
    faqs: [
      { question: "Was bedeutet eine Fehlermarge von ±3 Punkten?", answer: "Bei 95 % Konfidenz gilt: Würden Sie die Umfrage viele Male mit neuen Zufallsstichproben wiederholen, enthielten etwa 95 % der so gebildeten Intervalle den wahren Prozentwert der Grundgesamtheit. Es bedeutet nicht, dass der wahre Wert garantiert innerhalb von 3 Punkten liegt." },
      { question: "Wie halbiere ich die Fehlermarge?", answer: "Die Marge sinkt mit der Quadratwurzel der Stichprobengröße; zum Halbieren brauchen Sie also etwa viermal so viele Antworten. Um von ±3,1 Punkten bei 1.000 Personen auf etwa ±1,55 Punkte zu kommen, sind rund 4.000 Personen nötig." },
      { question: "Kann ich das für Mittelwerte verwenden?", answer: "Nein. Dieser Rechner behandelt Prozentsätze von Ja/Nein-Antworten. Für den Mittelwert einer numerischen Messgröße verwenden Sie den Konfidenzintervallrechner, der mit Mittelwert und Standardabweichung arbeitet." },
    ],
    sourcesUsedFor: [
      "Fehlergrenze für einen Anteil, z·√(p′q′/n), und das Intervall p′ ± Fehlergrenze.",
      "Die Endlichkeitskorrektur √((N − n)/(N − 1)).",
    ],
  },
  text: {
    n: "Stichprobengröße (n)",
    nHelp: "Zahl der vollständigen Antworten.",
    proportion: "Beobachteter Anteil",
    proportionHelp: "Anteil der Stichprobe, der die berichtete Antwort gegeben hat. Mit 50 % erhalten Sie die breiteste, vorsichtigste Marge.",
    level: "Konfidenzniveau",
    levelOptions: { "80": "80 %", "90": "90 %", "95": "95 %", "98": "98 %", "99": "99 %" },
    population: "Größe der Grundgesamtheit (optional)",
    populationHelp: "Gesamtgröße der Gruppe, aus der die Stichprobe gezogen wurde. Bei einer sehr großen oder unbekannten Grundgesamtheit leer lassen.",
    populationTooSmall: "Die Grundgesamtheit kann nicht kleiner sein als die Stichprobe ({n}).",
    margin: "Fehlermarge (± Prozentpunkte)",
    caption: "{p} ± {moe} bei {level} Konfidenz.",
    interval: "Konfidenzintervall",
    intervalText: "{lower} bis {upper}",
    standardError: "Standardfehler",
    critical: "Kritischer Wert (z*)",
    correction: "Faktor der Endlichkeitskorrektur",
    correctionNone: "Nicht angewendet",
    weakApproximation: "Weniger als 10 Antworten fallen auf eine Seite (n × p = {yes}, n × (1 − p) = {no}). Die Normalapproximation ist hier schwach; betrachten Sie diese Marge daher als grob. Ein exaktes oder ein Wilson-Intervall ist zuverlässiger.",
    census: "Die Stichprobe umfasst die gesamte Grundgesamtheit, daher gibt es keinen Stichprobenfehler.",
    clipped: "Das Intervall wurde bei {bound} abgeschnitten, weil ein Anteil diesen Wert nicht überschreiten kann.",
    meansNote: "Diese Marge gilt für einen Prozentsatz (Anteil). Für den Mittelwert einer Messgröße verwenden Sie den Konfidenzintervallrechner.",
  },
};

export default de;
