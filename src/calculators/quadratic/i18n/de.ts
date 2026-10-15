import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { QuadraticText } from "../text/en";

const de: CalculatorTranslation<QuadraticText> = {
  content: {
    title: "Rechner für quadratische Gleichungen",
    shortTitle: "Quadratische Gleichung",
    summary: "Lösen Sie ax² + bx + c = 0 nach reellen oder komplexen Nullstellen – mit Diskriminante, Scheitelpunkt und Symmetrieachse.",
    metaTitle: "Rechner für quadratische Gleichungen – Nullstellen, Scheitel",
    metaDescription: "Lösen Sie jede quadratische Gleichung ax² + bx + c = 0: reelle oder komplexe Lösungen, Diskriminante und ihre Bedeutung, Scheitelpunkt und Symmetrieachse.",
    keywords: ["quadratische Gleichung lösen", "Mitternachtsformel", "abc-Formel", "pq-Formel", "Nullstellen berechnen", "Diskriminante", "Scheitelpunkt", "Parabel", "komplexe Lösungen"],
    intro: [
      "Eine quadratische Gleichung hat die Form ax² + bx + c = 0, wobei a nicht null ist. Ihr Graph ist eine Parabel, und die Nullstellen sind die Punkte, an denen diese Parabel die x-Achse schneidet.",
      "Geben Sie die drei Koeffizienten ein, um beide Lösungen auf einmal zu erhalten. Erreicht die Parabel die x-Achse nie, liefert der Rechner stattdessen das Paar komplexer Lösungen. Außerdem zeigt er die Diskriminante, den Scheitelpunkt und die Symmetrieachse.",
    ],
    howToUse: [
      "Formen Sie Ihre Gleichung so um, dass eine Seite 0 ist, zum Beispiel wird 3x² = 7x + 6 zu 3x² − 7x − 6 = 0.",
      "Geben Sie a, b und c ein. Übernehmen Sie die Minuszeichen und verwenden Sie 0 für jeden fehlenden Term.",
      "Lesen Sie die Lösungen ab. Reelle Lösungen werden von der größten zur kleinsten aufgeführt, komplexe Lösungen als Realteil ± Imaginärteil.",
      "Nutzen Sie Diskriminante, Scheitelpunkt und Symmetrieachse, um die Parabel zu skizzieren oder Ihren Rechenweg zu prüfen.",
    ],
    formulas: [
      { title: "Lösungsformel (Mitternachtsformel)", expression: "x = (−b ± √(b² − 4ac)) ÷ 2a", explanation: "Liefert beide Lösungen. Das ± ergibt eine Lösung mit + und eine mit −." },
      { title: "Diskriminante", expression: "D = b² − 4ac", explanation: "D > 0 ergibt zwei reelle Lösungen, D = 0 eine doppelte Lösung und D < 0 zwei konjugiert komplexe Lösungen." },
      { title: "Für die Berechnung verwendete stabile Form", expression: "q = −½(b + sign(b)·√D),  x₁ = q ÷ a,  x₂ = c ÷ q", explanation: "Algebraisch identisch mit der Lösungsformel, vermeidet aber die Subtraktion zweier fast gleicher Zahlen, die Genauigkeit kostet, wenn b² viel größer als 4ac ist." },
      { title: "Komplexe Lösungen", expression: "x = −b ÷ 2a ± (√(−D) ÷ 2|a|)·i", explanation: "Wird bei D < 0 verwendet; i ist die imaginäre Einheit mit i² = −1." },
      { title: "Scheitelpunkt und Achse", expression: "h = −b ÷ 2a,  k = −D ÷ 4a,  Achse: x = h", explanation: "Der Scheitelpunkt (h, k) ist der Umkehrpunkt der Parabel. k ist der Wert von ax² + bx + c an der Stelle x = h." },
      { title: "Summe und Produkt der Lösungen", expression: "x₁ + x₂ = −b ÷ a,  x₁·x₂ = c ÷ a", explanation: "Der Satz von Vieta. Er gilt auch für komplexe Lösungen." },
    ],
    examples: [
      {
        title: "Zwei reelle Lösungen: 3x² − 7x − 6 = 0",
        steps: ["D = (−7)² − 4·3·(−6) = 49 + 72 = 121", "√D = 11, also x = (7 ± 11) ÷ 6", "x₁ = 18 ÷ 6 = 3 und x₂ = −4 ÷ 6 ≈ −0,6667"],
      },
      {
        title: "Eine doppelte Lösung: 4x² + 12x + 9 = 0",
        steps: ["D = 12² − 4·4·9 = 144 − 144 = 0", "x = −12 ÷ (2·4) = −1,5", "Die Parabel berührt die x-Achse genau in ihrem Scheitelpunkt (−1,5; 0)."],
      },
      {
        title: "Komplexe Lösungen: x² − 2x + 10 = 0",
        steps: ["D = (−2)² − 4·1·10 = 4 − 40 = −36", "Realteil: −(−2) ÷ 2 = 1", "Imaginärteil: √36 ÷ 2 = 3, also x = 1 ± 3i"],
      },
    ],
    assumptions: [
      "Die Koeffizienten sind reelle Zahlen. Gleichungen mit komplexen Koeffizienten werden nicht unterstützt.",
      "Ergebnisse werden mit 10 signifikanten Stellen angezeigt. Eine Diskriminante, die bis auf winzige Rundungsfehler null ist, wird als genau null behandelt, sodass die doppelte Lösung ausgegeben wird.",
      "Sehr große oder sehr kleine Koeffizienten werden in doppelter Gleitkommagenauigkeit berechnet, daher können die letzten Stellen extremer Ergebnisse von exakter Arithmetik abweichen.",
    ],
    faqs: [
      { question: "Was ist, wenn a gleich 0 ist?", answer: "Dann gibt es keinen x²-Term und die Gleichung ist linear: bx + c = 0 mit der einzigen Lösung x = −c ÷ b. Der Rechner verlangt ein a ungleich null, weil die Lösungsformel sonst durch null teilen würde." },
      { question: "Was bedeutet eine negative Diskriminante?", answer: "Die Parabel schneidet die x-Achse nie, es gibt also keine reellen Lösungen. Die beiden Lösungen sind komplexe Zahlen, die sich nur im Vorzeichen ihres Imaginärteils unterscheiden." },
      { question: "Warum verwendet der Rechner nicht direkt die Formel aus dem Lehrbuch?", answer: "Ist b² viel größer als 4ac, subtrahiert −b + √D zwei fast gleiche Zahlen und verliert Stellen. Die stabile Form berechnet zuerst die betragsgrößere Lösung und erhält die kleinere über das Produkt der Lösungen, c ÷ a, wodurch die volle Genauigkeit erhalten bleibt." },
    ],
    sourcesUsedFor: ["Die Lösungsformel und wie die Diskriminante Anzahl und Art der Lösungen bestimmt."],
  },
  text: {
    a: "Koeffizient a",
    aHelp: "Die Zahl vor x². Sie darf nicht 0 sein.",
    b: "Koeffizient b",
    bHelp: "Die Zahl vor x. Verwenden Sie 0, wenn es keinen x-Term gibt.",
    c: "Konstante c",
    cHelp: "Die Zahl ohne x. Verwenden Sie 0, wenn es keine gibt.",
    aZero: "Der Koeffizient a darf nicht 0 sein. Mit a = 0 ist die Gleichung linear, nicht quadratisch.",
    roots: "Lösungen",
    twoRoots: "x₁ = {x1}, x₂ = {x2}",
    oneRoot: "x = {x} (doppelte Lösung)",
    complexRoots: "x = {re} ± {im}i",
    imaginaryRoots: "x = ±{im}i",
    discriminant: "Diskriminante (b² − 4ac)",
    meaning: "Was die Diskriminante bedeutet",
    meanings: {
      positive: "Positiv: zwei verschiedene reelle Lösungen",
      zero: "Null: eine doppelte reelle Lösung",
      negative: "Negativ: keine reellen Lösungen, zwei konjugiert komplexe Lösungen",
    },
    vertex: "Scheitelpunkt (h, k)",
    vertexValue: "({h}, {k})",
    axis: "Symmetrieachse",
    axisValue: "x = {h}",
    sum: "Summe der Lösungen (−b/a)",
    product: "Produkt der Lösungen (c/a)",
    opensUp: "Die Parabel ist nach oben geöffnet, der Scheitelpunkt ist also ihr tiefster Punkt.",
    opensDown: "Die Parabel ist nach unten geöffnet, der Scheitelpunkt ist also ihr höchster Punkt.",
  },
};

export default de;
