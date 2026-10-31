import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HemocytometerText } from "../text/en";

const de: CalculatorTranslation<HemocytometerText> = {
  content: {
    title: "Zellzahlrechner (Hämozytometer)",
    shortTitle: "Zellzahl",
    summary: "Rechnen Sie Zählungen in der Zählkammer in Zellen pro mL um – mit Vitalität, Gesamtzahl lebender Zellen in der Probe und dem Volumen für eine gewünschte Aussaat.",
    metaTitle: "Zellzahlrechner (Hämozytometer) – Zellen pro mL",
    metaDescription: "Berechnen Sie lebende und gesamte Zellen pro mL aus Zählungen in der Neubauer-improved-Kammer – mit Verdünnungsfaktor, Trypanblau-Vitalität und Aussaatvolumen.",
    keywords: ["Zellzahl berechnen", "Hämozytometer", "Neubauer-Zählkammer", "Zellen pro mL", "Trypanblau", "Vitalität", "Zellaussaat", "Zelldichte"],
    intro: [
      "Ein Hämozytometer ist ein dicker Glasobjektträger mit einem Zählnetz, das in eine Kammer bekannter Tiefe eingeätzt ist. In einer Neubauer-improved-Kammer misst jedes der neun Großquadrate 1 mm × 1 mm, und die Kammer ist 0,1 mm tief. Die Flüssigkeit über einem Großquadrat beträgt also 0,1 µL, ein Zehntausendstel Milliliter.",
      "Die mittlere Zellzahl pro Großquadrat, multipliziert mit 10⁴ und mit einer etwaigen Verdünnung, ergibt daher die Zellen pro mL. Dieser Rechner macht das für lebende Zellen, addiert tote (gefärbte) Zellen für die Gesamtzahl und die Vitalität und ermittelt, wie viele Zellen eine Probe enthält und wie viel davon Sie für eine bestimmte Zellzahl zur Aussaat entnehmen müssen.",
    ],
    howToUse: [
      "Zählen Sie die lebenden Zellen in mehreren Großquadraten, zum Beispiel den vier Eckquadraten, und geben Sie die Summe und die Anzahl der Quadrate ein.",
      "Wenn Sie die Zellen gefärbt haben, etwa mit Trypanblau, geben Sie auch die in denselben Quadraten gezählten toten (gefärbten) Zellen ein.",
      "Geben Sie den Verdünnungsfaktor ein: 2, wenn Sie gleiche Volumina Zellsuspension und Farbstoff gemischt haben, 1, wenn die Zellen nicht verdünnt wurden.",
      "Geben Sie optional das Volumen der Suspension und die Zahl der Zellen ein, die Sie aussäen möchten.",
    ],
    formulas: [
      {
        title: "Zellkonzentration",
        expression: "Zellen/mL = (gezählte Zellen ÷ gezählte Großquadrate) × Verdünnungsfaktor × 10⁴",
        explanation: "Ein Großquadrat fasst 1 mm × 1 mm × 0,1 mm = 0,1 mm³ = 10⁻⁴ mL, daher ergibt die Zahl pro Quadrat mal 10⁴ die Zellen pro mL.",
      },
      {
        title: "Vitalität",
        expression: "Vitalität % = lebend ÷ (lebend + tot) × 100",
        explanation: "Der Anteil der gezählten Zellen, die den Farbstoff ausschließen.",
      },
      {
        title: "Gesamtzellzahl und Aussaatvolumen",
        expression: "lebende Zellen gesamt = lebende Zellen/mL × Volumen; Aussaatvolumen = gewünschte Zellen ÷ lebende Zellen/mL",
        explanation: "Die Konzentration wird auf die gesamte Suspension hochgerechnet oder auf das Volumen heruntergerechnet, das die benötigte Zellzahl enthält.",
      },
    ],
    examples: [
      {
        title: "Trypanblau-Zählung in vier Eckquadraten",
        steps: [
          "Mittelwert pro Quadrat: 182 ÷ 4 = 45,5 lebende Zellen.",
          "Lebende Zellen/mL: 45,5 × 2 × 10⁴ = 910.000 = 9,1 × 10⁵.",
          "Vitalität: 182 ÷ (182 + 14) = 92,9 %.",
          "Volumen für 1.000.000 Zellen: 1.000.000 ÷ 910.000 ≈ 1,099 mL.",
        ],
      },
      {
        title: "Eine dichte Kultur, 1 : 10 verdünnt",
        steps: ["Mittelwert pro Quadrat: 95 ÷ 5 = 19 Zellen.", "Lebende Zellen/mL: 19 × 10 × 10⁴ = 1,9 × 10⁶."],
      },
      {
        title: "Eine dünne, unverdünnte Probe",
        steps: [
          "Mittelwert pro Quadrat: 37 ÷ 4 = 9,25 Zellen.",
          "Lebende Zellen/mL: 9,25 × 1 × 10⁴ = 9,25 × 10⁴.",
          "Bei nur 37 gezählten Zellen beträgt allein der Zählfehler etwa ±16 % (1 ÷ √37).",
        ],
      },
    ],
    assumptions: [
      "Die Kammer ist vom Typ Neubauer improved mit Großquadraten von 1 mm² und 0,1 mm Tiefe. Andere Kammern wie Fuchs-Rosenthal oder Zählungen in den kleineren Quadraten erfordern einen anderen Faktor.",
      "Die Zellen sind gleichmäßig verteilt, und die Kammer wurde korrekt befüllt, ohne Überlaufen oder Luftblasen.",
      "Die Zellen werden zufällig erfasst, daher folgt die Zählung der Poisson-Statistik: Der relative Fehler beträgt etwa 1 ÷ √(gezählte Zellen). Niedrige Zählungen sind deutlich ungenauer, und Unterschiede zwischen zählenden Personen erhöhen den Fehler weiter.",
      "Die Vitalität aus dem Farbstoffausschluss ist eine Schätzung. Zellen, die den Farbstoff ausschließen, sind nicht unbedingt gesund, und die Färbezeit beeinflusst das Ergebnis.",
    ],
    faqs: [
      {
        question: "Warum wird mit 10⁴ multipliziert?",
        answer: "Ein Großquadrat ist 1 mm lang und breit, die Kammer 0,1 mm tief, es fasst also 0,1 mm³. Das sind 0,1 µL oder 10⁻⁴ mL. Zellen pro Quadrat geteilt durch 10⁻⁴ mL ist dasselbe wie Zellen pro Quadrat mal 10⁴ pro mL.",
      },
      {
        question: "Welchen Verdünnungsfaktor verwende ich mit Trypanblau?",
        answer: "Das Gesamtvolumen geteilt durch das Volumen der Zellsuspension. Gleiche Volumina Zellen und Trypanblau (zum Beispiel 10 µL + 10 µL) ergeben einen Verdünnungsfaktor von 2. Wird er weggelassen, halbiert sich das Ergebnis.",
      },
      {
        question: "Wie viele Zellen sollte ich zählen?",
        answer: "Je mehr Zellen Sie zählen, desto kleiner ist der Zählfehler, der etwa 1 ÷ √(Anzahl gezählt) beträgt. Einige Hundert Zellen über mehrere Quadrate ergeben einen Fehler von etwa 5–6 %; bei 30 Zellen sind es etwa 18 %.",
      },
    ],
    sourcesUsedFor: [
      "Zellen pro mL = mittlere Zahl pro Großquadrat × Verdünnungsfaktor × 10⁴ und der Rat, außerhalb von etwa 20–50 Zellen pro Quadrat mit einer anderen Verdünnung neu zu zählen.",
      "Der Zählfehler von etwa der Quadratwurzel der gezählten Zellen und die Empfehlung, insgesamt einige Hundert Zellen zu zählen.",
    ],
  },
  text: {
    live: "Gezählte lebende (ungefärbte) Zellen",
    liveHelp: "Die Gesamtzahl lebender Zellen in allen gezählten Großquadraten.",
    dead: "Gezählte tote (gefärbte) Zellen",
    deadHelp: "Optional. Zellen, die den Farbstoff aufgenommen haben, etwa Trypanblau, in denselben Quadraten. Wird für die Gesamtzahl und die Vitalität verwendet.",
    squares: "Gezählte Großquadrate",
    squaresHelp: "Jedes Großquadrat einer Neubauer-improved-Kammer misst 1 mm × 1 mm × 0,1 mm Tiefe, also 0,1 µL. Üblicherweise werden die 4 Eckquadrate gezählt.",
    dilution: "Verdünnungsfaktor",
    dilutionHelp: "Gesamtvolumen ÷ Volumen der Zellsuspension. Bei gleichen Volumina Zellen und Trypanblau (1:1) geben Sie 2 ein. Geben Sie 1 ein, wenn unverdünnt.",
    volume: "Probenvolumen",
    volumeHelp: "Optional. Das Volumen der Zellsuspension, um die Gesamtzahl lebender Zellen darin zu erhalten.",
    target: "Für die Aussaat benötigte Zellen",
    targetHelp: "Optional. Die Zahl lebender Zellen, die Sie aussäen möchten, um das zu entnehmende Volumen der Suspension zu erhalten.",
    errors: {
      noLiveForTarget: "Es wurden keine lebenden Zellen gezählt, daher kann das Aussaatvolumen nicht berechnet werden.",
    },
    cellsPerMl: "{value} Zellen/mL",
    cellsPerMlUnit: "Zellen/mL",
    cellsUnit: "Zellen",
    result: "Lebende Zellen pro mL",
    caption: "Lebende Zellen ÷ gezählte Quadrate × Verdünnungsfaktor × 10⁴",
    totalPerMl: "Zellen gesamt pro mL (lebend + tot)",
    viability: "Vitalität",
    averagePerSquare: "Mittlere Zahl lebender Zellen pro Großquadrat",
    totalLive: "Lebende Zellen in {volume} mL",
    volumeNeeded: "Volumen der Suspension für {target} Zellen",
    volumeNeededUl: "Dasselbe Volumen in µL",
    notes: {
      poisson: "Sie haben insgesamt {count} Zellen gezählt. Allein die Zählstatistik ergibt einen relativen Fehler von etwa ±{cv} % (1 ÷ √Anzahl); mehr gezählte Zellen verringern ihn. Häufig wird empfohlen, insgesamt einige Hundert Zellen zu zählen.",
      density: "Der Mittelwert von {average} lebenden Zellen pro Quadrat liegt außerhalb des oft für die Zählung empfohlenen Bereichs von etwa 20–50 Zellen pro Quadrat. Passen Sie gegebenenfalls die Verdünnung an und zählen Sie erneut.",
      noCells: "Es wurden keine lebenden Zellen gezählt, daher ist die Konzentration lebender Zellen null. Prüfen Sie die Probe und die Verdünnung.",
      exceedsSample: "Für die gewünschte Aussaat sind mehr lebende Zellen nötig, als das Probenvolumen enthält.",
      general: "Vorausgesetzt wird eine Neubauer-improved-Kammer mit 0,1 mm Tiefe und Großquadraten von 1 mm². Andere Kammern oder das Zählen der kleinen Quadrate erfordern einen anderen Faktor.",
    },
  },
};

export default de;
