import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HardyWeinbergText } from "../text/en";

const de: CalculatorTranslation<HardyWeinbergText> = {
  content: {
    title: "Hardy-Weinberg-Rechner",
    shortTitle: "Hardy-Weinberg",
    summary: "Bestimmen Sie Allel- und Genotypfrequenzen aus der Häufigkeit eines rezessiven Merkmals oder prüfen Sie Genotypzahlen auf Gleichgewicht.",
    metaTitle: "Hardy-Weinberg-Rechner – Allelfrequenzen und χ²-Test",
    metaDescription: "Berechnen Sie p, q, p², 2pq und q² aus dem Anteil mit rezessivem Merkmal oder prüfen Sie beobachtete AA-, Aa- und aa-Zahlen mit einem Chi-Quadrat-Test.",
    keywords: ["Hardy-Weinberg-Gleichgewicht", "Hardy-Weinberg-Gesetz", "Allelfrequenz", "Genotypfrequenz", "p2 2pq q2", "Heterozygotenfrequenz", "Populationsgenetik", "Chi-Quadrat-Test"],
    intro: [
      "Nach dem Hardy-Weinberg-Gesetz bleiben Allel- und Genotypfrequenzen von Generation zu Generation konstant, solange keine Evolutionsfaktoren wirken. Für ein Gen mit zwei Allelen, A mit der Frequenz p und a mit der Frequenz q, treten die Genotypen dann in den Anteilen p², 2pq und q² auf.",
      "Verwenden Sie den ersten Modus, wenn Sie wissen, wie häufig ein rezessives Merkmal ist, etwa um abzuschätzen, wie viele Menschen Anlageträger sind. Mit dem zweiten Modus prüfen Sie, ob die Genotypzahlen einer Stichprobe zu den vorhergesagten Anteilen passen.",
    ],
    howToUse: [
      "Wählen Sie einen Ausgangspunkt: die Häufigkeit des rezessiven Phänotyps oder Genotypzahlen.",
      "Im Phänotyp-Modus geben Sie den Anteil der Individuen mit dem rezessiven Merkmal in Prozent ein.",
      "Im Zählmodus geben Sie an, wie viele AA-, Aa- und aa-Individuen Sie beobachtet haben.",
      "Lesen Sie die Allelfrequenzen, die Genotyptabelle und bei Zählungen das Ergebnis des Chi-Quadrat-Tests ab.",
    ],
    formulas: [
      { title: "Gleichgewichtsanteile", expression: "p + q = 1;  p² + 2pq + q² = 1", explanation: "p² ist der Anteil AA, 2pq der Anteil Aa und q² der Anteil aa." },
      { title: "Aus dem rezessiven Phänotyp", expression: "q = √q²;  p = 1 − q", explanation: "Nur aa-Individuen zeigen ein rezessives Merkmal, daher entspricht ihr Anteil q²." },
      { title: "Aus Genotypzahlen", expression: "p = (2·AA + Aa) ÷ (2N)", explanation: "Jedes Individuum trägt zwei Allele; N ist die Gesamtzahl der Individuen." },
      {
        title: "Chi-Quadrat-Test",
        expression: "χ² = Σ (O − E)² ÷ E;  p-Wert = erfc(√(χ² ÷ 2))",
        explanation: "E = p²N, 2pqN und q²N. Bei 1 Freiheitsgrad hat der p-Wert diese geschlossene Form.",
      },
    ],
    examples: [
      {
        title: "Eine rezessive Erkrankung bei 1 von 2.500 Menschen",
        steps: ["q² = 0,0004, also q = 0,02 und p = 0,98", "2pq = 2 × 0,98 × 0,02 = 0,0392", "Etwa 3,92 % der Menschen, rund 1 von 25,5, sind Anlageträger"],
      },
      {
        title: "Ein rezessives Merkmal bei 9 % einer Population",
        steps: ["q = √0,09 = 0,3 und p = 0,7", "p² = 49 %, 2pq = 42 %, q² = 9 %"],
      },
      {
        title: "Test von 298 AA, 489 Aa und 213 aa",
        steps: [
          "N = 1.000 und p = (2 × 298 + 489) ÷ 2.000 = 0,5425",
          "Erwartete Zahlen ≈ 294,31, 496,39 und 209,31",
          "χ² ≈ 0,2215, p-Wert ≈ 0,638: mit dem Gleichgewicht vereinbar",
        ],
      },
    ],
    assumptions: [
      "Das Modell setzt eine große Population mit Zufallspaarung voraus, in der weder Mutation, Migration noch Selektion auf das Gen wirken.",
      "Der Phänotyp-Modus setzt ein Gen mit zwei Allelen, vollständige Dominanz und eine Population voraus, die bereits im Gleichgewicht ist.",
      "Die Phänotyphäufigkeit wird in Prozent (0–100) eingegeben, nicht als Bruchteil zwischen 0 und 1.",
      "Der Chi-Quadrat-Test ist eine Näherung, die am besten funktioniert, wenn jede erwartete Zahl mindestens 5 beträgt.",
    ],
    faqs: [
      {
        question: "Warum kann ich nicht einfach den dominanten Phänotyp zählen?",
        answer: "Menschen mit AA und Aa sehen gleich aus, daher umfasst der dominante Phänotyp zwei Genotypen. Der rezessive Phänotyp ist reines aa – deshalb ist q² der Ausgangspunkt.",
      },
      {
        question: "Was bedeutet ein kleiner p-Wert?",
        answer: "Unter 0,05 weichen die beobachteten Genotypzahlen stärker ab, als der Zufall allein üblicherweise erklären würde. Mögliche Ursachen sind Inzucht, Selektion, Migration, Populationsstruktur oder Genotypisierungsfehler.",
      },
      {
        question: "Warum hat der Test nur 1 Freiheitsgrad?",
        answer: "Es gibt drei Genotypklassen. Ein Freiheitsgrad geht verloren, weil die Zahlen zusammen N ergeben müssen, und ein weiterer, weil die Allelfrequenz p aus denselben Daten geschätzt wird.",
      },
    ],
    sourcesUsedFor: ["Das Hardy-Weinberg-Gesetz, p² + 2pq + q² = 1 und seine Annahmen."],
  },
  text: {
    mode: "Ausgangspunkt",
    modeOptions: { phenotype: "Häufigkeit des rezessiven Phänotyps", counts: "Genotypzahlen" },
    q2: "Anteil mit rezessivem Merkmal (q²)",
    q2Help: "Geben Sie einen Prozentwert ein: 1 Person von 2.500 entspricht 0,04 %.",
    countAA: "AA-Individuen (homozygot dominant)",
    countAa: "Aa-Individuen (heterozygot)",
    countaa: "aa-Individuen (homozygot rezessiv)",
    noIndividuals: "Geben Sie mindestens ein Individuum ein.",
    carrier: "Anlageträgerfrequenz (2pq)",
    carrierRatio: "Anlageträger",
    oneIn: "Etwa 1 von {n}",
    none: "Keine",
    alleleA: "Frequenz des Allels A (p)",
    allelea: "Frequenz des Allels a (q)",
    total: "Individuen insgesamt (N)",
    chiSquare: "Chi-Quadrat (χ², 1 Freiheitsgrad)",
    pValue: "p-Wert",
    verdict: "Testergebnis auf dem 5-%-Niveau",
    consistent: "Keine signifikante Abweichung vom Gleichgewicht",
    departure: "Signifikante Abweichung vom Gleichgewicht",
    genotypes: { AA: "AA (homozygot dominant)", Aa: "Aa (heterozygot)", aa: "aa (homozygot rezessiv)" },
    frequencyCaption: "Erwartete Genotypfrequenzen",
    countsCaption: "Beobachtete und erwartete Zahlen",
    colGenotype: "Genotyp",
    colFrequency: "Frequenz",
    colPercent: "Prozent",
    colObserved: "Beobachtet",
    colExpected: "Erwartet",
    phenotypeNote: "Setzt voraus, dass die Population im Hardy-Weinberg-Gleichgewicht ist, sodass q = √q² gilt.",
    monomorphic: "Es ist nur ein Allel vorhanden, daher entspricht jeder Genotyp seiner erwarteten Zahl, und der Chi-Quadrat-Test ist nicht anwendbar.",
    smallExpected: "Mindestens eine erwartete Zahl liegt unter 5, daher ist der p-Wert des Chi-Quadrat-Tests nur ein grober Anhaltspunkt. Für kleine Stichproben ist ein exakter Test zuverlässiger.",
    countsNote: "Die erwarteten Zahlen sind p²N, 2pqN und q²N. Der Test hat 1 Freiheitsgrad: 3 Genotypklassen minus 1, minus 1 für die geschätzte Allelfrequenz.",
  },
};

export default de;
