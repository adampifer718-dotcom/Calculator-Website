import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AprApyText } from "../text/en";

const de: CalculatorTranslation<AprApyText> = {
  content: {
    title: "APR- und APY-Rechner",
    shortTitle: "APR zu APY",
    summary: "Rechnen Sie einen nominalen Jahreszins (APR) in den effektiven Jahreszins (APY) um oder zurück – für jede Zinsperiode.",
    metaTitle: "APR- und APY-Rechner – Nominal- in Effektivzins umrechnen",
    metaDescription: "Rechnen Sie APR in APY oder APY in APR um – bei jährlicher, vierteljährlicher, monatlicher, täglicher oder stetiger Verzinsung, mit Vergleichstabelle.",
    keywords: ["APR in APY umrechnen", "APY in APR umrechnen", "Nominalzins in Effektivzins", "effektiver Jahreszins", "nominaler Jahreszins", "Zinsperiode", "unterjährige Verzinsung", "stetige Verzinsung"],
    intro: [
      "Banken nennen zwei Arten von Jahreszins. Die APR ist der Nominalzins: der Zinssatz pro Periode mal die Anzahl der Perioden. Die APY ist der effektive Zinssatz: um wie viel ein Guthaben in einem Jahr tatsächlich wächst, wenn Zinsen auf Zinsen anfallen.",
      "Je häufiger die Zinsen gutgeschrieben werden, desto weiter liegt die APY über der APR. Mit diesem Werkzeug vergleichen Sie ein Sparkonto mit angegebener APY und einen Kredit mit angegebener APR auf derselben Grundlage.",
    ],
    howToUse: [
      "Wählen Sie, ob Sie APR in APY oder APY in APR umrechnen.",
      "Geben Sie den bekannten Zinssatz in Prozent ein.",
      "Wählen Sie, wie oft die Zinsen gutgeschrieben werden.",
      "Lesen Sie den umgerechneten Zinssatz, den Zinssatz pro Periode und die Tabelle für die anderen Zinsperioden ab.",
    ],
    formulas: [
      { title: "APR zu APY", expression: "APY = (1 + APR ÷ n)ⁿ − 1", explanation: "n ist die Anzahl der Zinsperioden pro Jahr, und beide Zinssätze sind Dezimalzahlen." },
      { title: "Stetige Verzinsung", expression: "APY = e^APR − 1", explanation: "Der Grenzwert, wenn n unbegrenzt wächst; e ≈ 2,71828." },
      { title: "APY zu APR", expression: "APR = n × ((1 + APY)^(1/n) − 1)", explanation: "Die Umkehrung. Bei stetiger Verzinsung gilt APR = ln(1 + APY)." },
      { title: "Zinssatz pro Periode", expression: "i = APR ÷ n", explanation: "Der Zins, der bei jedem Verzinsungsschritt angewendet wird." },
    ],
    examples: [
      {
        title: "6 % APR bei monatlicher Verzinsung",
        steps: ["Zinssatz pro Monat = 0,06 ÷ 12 = 0,005", "APY = 1,005¹² − 1", "≈ 0,061678, also etwa 6,1678 %"],
      },
      {
        title: "5 % APY zurück in eine monatliche APR",
        steps: ["APR = 12 × (1,05^(1/12) − 1)", "= 12 × 0,0040741", "≈ 4,8889 %"],
      },
      {
        title: "8 % APR bei stetiger Verzinsung",
        steps: ["APY = e^0,08 − 1", "≈ 1,083287 − 1", "≈ 8,3287 %"],
      },
    ],
    assumptions: [
      "Der Zinssatz ist ein Nominalzins, der das ganze Jahr gleich bleibt, ohne Einzahlungen, Abhebungen oder Gebühren.",
      "Bei US-Krediten kann die nach dem Truth in Lending Act (Regulation Z) angegebene APR bestimmte Gebühren enthalten und daher höher sein als der reine Zinssatz. Dieses Werkzeug rechnet nur Nominalzinsen um.",
      "Tägliche Verzinsung verwendet 365 Perioden pro Jahr. Banken rechnen intern mitunter mit 360 oder 366 Tagen.",
      "Dies ist keine Finanzberatung.",
    ],
    faqs: [
      { question: "Warum ist die APY höher als die APR?", answer: "Jedes Mal, wenn Zinsen gutgeschrieben werden, werden die Zinsen der nächsten Periode auf ein größeres Guthaben berechnet. Die APY berücksichtigt dieses zusätzliche Wachstum, die APR nicht. Bei jährlicher Verzinsung sind beide gleich." },
      { question: "Welchen Zinssatz sollte ich zwischen Konten vergleichen?", answer: "Vergleichen Sie bei Sparanlagen APY mit APY, weil sie den Zinseszins bereits enthält. Vergleichen Sie bei Krediten die angegebene APR, die auch viele Gebühren erfasst." },
      { question: "Macht tägliche Verzinsung gegenüber monatlicher einen großen Unterschied?", answer: "Bei üblichen Zinssätzen nur einen kleinen. Bei 5 % APR ergibt monatliche Verzinsung etwa 5,116 % APY und tägliche etwa 5,127 %." },
    ],
    sourcesUsedFor: [
      "Wie die APY (annual percentage yield) den Zinseszins über ein Jahr widerspiegelt.",
      "Der Hinweis, dass eine angegebene Kredit-APR die Kreditkosten misst und von einem Nominalzins abweichen kann.",
    ],
  },
  text: {
    direction: "Umrechnung",
    directions: { aprToApy: "APR zu APY", apyToApr: "APY zu APR" },
    rate: "Zinssatz",
    rateHelp: "Geben Sie die APR (nominaler Jahreszins) ein, um die APY zu erhalten, oder die APY (effektiver Jahreszins), um die APR zu erhalten.",
    compounding: "Verzinsung",
    frequencies: {
      "1": "Jährlich",
      "2": "Halbjährlich",
      "4": "Vierteljährlich",
      "12": "Monatlich",
      "52": "Wöchentlich",
      "365": "Täglich",
      continuous: "Stetig",
    },
    inSentence: {
      "1": "jährlicher",
      "2": "halbjährlicher",
      "4": "vierteljährlicher",
      "12": "monatlicher",
      "52": "wöchentlicher",
      "365": "täglicher",
      continuous: "stetiger",
    },
    apy: "Effektiver Jahreszins (APY)",
    apr: "Nominaler Jahreszins (APR)",
    captionToApy: "{rate} APR ergibt bei {frequency} Verzinsung diesen effektiven Jahreszins.",
    captionToApr: "Der Nominalzins, der bei {frequency} Verzinsung {rate} APY ergibt.",
    periodRate: "Zinssatz pro Zinsperiode",
    periodsPerYear: "Zinsperioden pro Jahr",
    difference: "Differenz zwischen APY und APR",
    tableCaption: "Derselbe Zinssatz bei anderen Zinsperioden",
    tableColumns: { frequency: "Verzinsung", apy: "APY", apr: "APR" },
    notes: {
      continuous: "Stetige Verzinsung ist der Grenzfall immer häufigerer Verzinsung; sie hat keine einzelnen Perioden.",
      regZ: "Bei US-Krediten kann die nach Regulation Z angegebene APR neben den Zinsen auch einige Gebühren enthalten. Dieses Werkzeug rechnet nur Nominalzinsen um und bildet daher keine gebührenhaltige APR eines Kreditgebers nach.",
    },
  },
};

export default de;
