import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ConfidenceIntervalText } from "../text/en";

const de: CalculatorTranslation<ConfidenceIntervalText> = {
  content: {
    title: "Konfidenzintervallrechner",
    shortTitle: "Konfidenzintervall",
    summary: "Berechnen Sie ein Konfidenzintervall für einen Mittelwert aus Stichprobenmittelwert, Standardabweichung und Stichprobengröße.",
    metaTitle: "Konfidenzintervallrechner – für einen Mittelwert",
    metaDescription: "Berechnen Sie ein Konfidenzintervall für einen Mittelwert aus Mittelwert, Standardabweichung, Stichprobengröße und Konfidenzniveau – mit Fehlermarge und z*.",
    keywords: ["Konfidenzintervall berechnen", "Vertrauensintervall", "Fehlermarge", "Standardfehler", "95-%-Konfidenzintervall", "Statistik Mittelwert"],
    intro: [
      "Ein Konfidenzintervall gibt einen Bereich plausibler Werte für den Mittelwert einer Grundgesamtheit an. Ein 95-%-Intervall ist so konstruiert, dass 95 % der auf diese Weise gebildeten Intervalle den wahren Mittelwert enthalten würden.",
      "Geben Sie Stichprobenmittelwert, Standardabweichung, Stichprobengröße und Konfidenzniveau ein.",
    ],
    howToUse: [
      "Geben Sie den Stichprobenmittelwert ein.",
      "Geben Sie die Standardabweichung und die Stichprobengröße ein.",
      "Wählen Sie das Konfidenzniveau, zum Beispiel 95 %.",
      "Lesen Sie das Intervall, die Fehlermarge und den kritischen Wert ab.",
    ],
    formulas: [
      { title: "Konfidenzintervall", expression: "KI = x̄ ± z* × σ ÷ √n", explanation: "z* ist der kritische Wert für das Konfidenzniveau." },
      { title: "Kritischer Wert", expression: "z* = Φ⁻¹(1 − (1 − Niveau) ÷ 2)", explanation: "Für 95 % ist z* ≈ 1,96, für 99 % ist z* ≈ 2,576." },
    ],
    examples: [
      { title: "Mittelwert 100, σ 15, n 36, 95 %", steps: ["SF = 15 ÷ √36 = 2,5", "FM = 1,96 × 2,5 ≈ 4,9", "KI ≈ 95,1 bis 104,9"] },
      { title: "Mittelwert 50, σ 8, n 64, 99 %", steps: ["SF = 8 ÷ √64 = 1", "FM = 2,576 × 1", "KI ≈ 47,42 bis 52,58"] },
    ],
    assumptions: [
      "Verwendet die Normalverteilung (z): geeignet, wenn σ bekannt ist oder die Stichprobe groß ist (n ≥ 30). Kleine Stichproben mit geschätztem σ erfordern ein t-Intervall, das breiter ist.",
      "Setzt eine Zufallsstichprobe unabhängiger Beobachtungen voraus.",
    ],
    faqs: [
      {
        question: "Was bedeutet 95 % Konfidenz?",
        answer: "Würden Sie die Stichprobenziehung viele Male wiederholen, enthielten etwa 95 % der Intervalle den wahren Mittelwert. Es ist keine 95-%-Wahrscheinlichkeit für ein einzelnes, bestimmtes Intervall.",
      },
      { question: "Wie mache ich das Intervall schmaler?", answer: "Vergrößern Sie die Stichprobe oder akzeptieren Sie ein niedrigeres Konfidenzniveau." },
      { question: "Was ist die Fehlermarge?", answer: "Die halbe Breite des Intervalls: z* × σ ÷ √n." },
    ],
    sourcesUsedFor: ["Konfidenzintervall für einen Mittelwert und kritische z-Werte."],
  },
  text: {
    mean: "Stichprobenmittelwert (x̄)",
    sd: "Standardabweichung (σ)",
    n: "Stichprobengröße (n)",
    level: "Konfidenzniveau",
    primary: "{level}-Konfidenzintervall",
    interval: "{lower} bis {upper}",
    margin: "Fehlermarge",
    standardError: "Standardfehler",
    critical: "Kritischer Wert (z*)",
    note: "Verwendet die Normalverteilung (z), die eine bekannte Standardabweichung der Grundgesamtheit oder eine große Stichprobe (n ≥ 30) voraussetzt.",
  },
};

export default de;
