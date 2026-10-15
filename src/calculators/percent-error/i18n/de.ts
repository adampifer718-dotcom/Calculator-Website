import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PercentErrorText } from "../text/en";

const de: CalculatorTranslation<PercentErrorText> = {
  content: {
    title: "Rechner für den prozentualen Fehler",
    shortTitle: "Prozentualer Fehler",
    summary: "Vergleichen Sie einen Messwert mit dem wahren Wert als prozentualen Fehler – mit absolutem und vorzeichenbehaftetem relativem Fehler.",
    metaTitle: "Rechner für den prozentualen Fehler – Messwert vs. wahrer Wert",
    metaDescription: "Berechnen Sie den prozentualen Fehler zwischen Mess- und wahrem Wert, mit absolutem Fehler, relativem Fehler mit Vorzeichen und Über- oder Unterschätzung.",
    keywords: ["prozentualer Fehler", "relativer Fehler", "absoluter Fehler", "Messfehler berechnen", "Messwert", "Literaturwert", "Laborprotokoll", "Messgenauigkeit"],
    intro: [
      "Der prozentuale Fehler gibt an, wie weit eine Messung von dem Wert entfernt liegt, den sie hätte ergeben sollen – als Anteil an diesem wahren Wert. Er ist eine übliche Art, die Genauigkeit bei Laborarbeiten anzugeben.",
      "Geben Sie Ihren Messwert und den anerkannten Wert ein. Neben dem prozentualen Fehler zeigt der Rechner die tatsächliche Größe des Fehlers und ob Ihr Ergebnis zu hoch oder zu niedrig ausgefallen ist.",
    ],
    howToUse: [
      "Geben Sie Ihren gemessenen (experimentellen) Wert ein.",
      "Geben Sie den wahren (anerkannten oder theoretischen) Wert in derselben Einheit ein. Er darf nicht 0 sein.",
      "Lesen Sie den prozentualen Fehler ab. Ein kleinerer Prozentsatz bedeutet eine genauere Messung.",
      "Am relativen Fehler mit Vorzeichen oder an der Zeile zur Richtung sehen Sie, ob Sie über- oder unterschätzt haben.",
    ],
    formulas: [
      { title: "Prozentualer Fehler", expression: "prozentualer Fehler = |Messwert − wahrer Wert| ÷ |wahrer Wert| × 100 %", explanation: "Die Größe des Fehlers als Prozentsatz des wahren Werts. Er ist immer null oder positiv." },
      { title: "Absoluter Fehler", expression: "absoluter Fehler = |Messwert − wahrer Wert|", explanation: "Der Fehler in der ursprünglichen Maßeinheit." },
      { title: "Relativer Fehler mit Vorzeichen", expression: "relativer Fehler = (Messwert − wahrer Wert) ÷ |wahrer Wert| × 100 %", explanation: "Positiv, wenn die Messung zu hoch ist, negativ, wenn sie zu niedrig ist." },
    ],
    examples: [
      {
        title: "Messung der Fallbeschleunigung mit einem Pendel",
        steps: ["Absoluter Fehler = |9,62 − 9,81| = 0,19 m/s²", "Prozentualer Fehler = 0,19 ÷ 9,81 × 100 % ≈ 1,9368 %", "Der relative Fehler mit Vorzeichen beträgt etwa −1,9368 %, die Messung ist also zu niedrig."],
      },
      {
        title: "Zeitmessung der Schallgeschwindigkeit",
        steps: ["Absoluter Fehler = |342,5 − 343| = 0,5 m/s", "Prozentualer Fehler = 0,5 ÷ 343 × 100 % ≈ 0,1458 %"],
      },
      {
        title: "Ein negativer Referenzwert: das Elektrodenpotenzial von Zink",
        steps: ["Absoluter Fehler = |−0,79 − (−0,76)| = 0,03 V", "Prozentualer Fehler = 0,03 ÷ |−0,76| × 100 % ≈ 3,9474 %", "Die Messung liegt unter dem anerkannten Wert, der relative Fehler mit Vorzeichen beträgt also etwa −3,9474 %."],
      },
    ],
    assumptions: [
      "Beide Werte verwenden dieselbe Einheit. Der prozentuale Fehler hat keine Einheit, der absolute Fehler aber die von Ihnen eingegebene.",
      "Durch den Betrag des wahren Werts wird geteilt, sodass der prozentuale Fehler auch bei einem negativen Referenzwert positiv bleibt.",
      "Für Größen auf Intervallskalen mit willkürlichem Nullpunkt, etwa Temperaturen in °C oder °F, ist der prozentuale Fehler nicht aussagekräftig, es sei denn, Sie haben einen Grund, mit diesem Nullpunkt zu vergleichen. Kelvin vermeidet das Problem.",
    ],
    faqs: [
      { question: "Kann der prozentuale Fehler negativ sein?", answer: "Nach der üblichen Definition nicht, weil der Betrag der Differenz verwendet wird. Manche Kurse behalten das Vorzeichen, um die Richtung zu zeigen; diese Variante wird hier als relativer Fehler mit Vorzeichen angezeigt." },
      { question: "Was ist ein guter prozentualer Fehler?", answer: "Das hängt vom Experiment und von den Geräten ab. In vielen Schullaboren gelten einige Prozent als gut, während Präzisionsmessungen weit weniger anstreben. Fragen Sie nach, welche Toleranz Ihr Kurs oder Ihre Methode erwartet." },
      { question: "Was ist der Unterschied zwischen prozentualem Fehler und prozentualer Differenz?", answer: "Der prozentuale Fehler vergleicht eine Messung mit einem bekannten wahren Wert. Die prozentuale Differenz vergleicht zwei Messungen miteinander, meist geteilt durch ihren Mittelwert, wenn keine von beiden die Referenz ist." },
    ],
    sourcesUsedFor: ["Definition des prozentualen Fehlers als absoluter Fehler geteilt durch den anerkannten Wert, mal 100 %."],
  },
  text: {
    measured: "Messwert",
    measuredHelp: "Der experimentelle oder beobachtete Wert.",
    trueValue: "Wahrer Wert",
    trueHelp: "Der anerkannte, theoretische oder Referenzwert. Er darf nicht 0 sein.",
    trueZero: "Der wahre Wert darf nicht 0 sein, weil der prozentuale Fehler durch ihn teilt.",
    percentError: "Prozentualer Fehler",
    absoluteError: "Absoluter Fehler |Messwert − wahrer Wert|",
    relativeError: "Relativer Fehler mit Vorzeichen",
    direction: "Richtung",
    over: "Die Messung liegt über dem wahren Wert (Überschätzung).",
    under: "Die Messung liegt unter dem wahren Wert (Unterschätzung).",
    exact: "Die Messung entspricht dem wahren Wert.",
    note: "Der prozentuale Fehler verwendet die Größe des Fehlers und ist daher nie negativ. Der relative Fehler mit Vorzeichen behält die Richtung bei.",
  },
};

export default de;
