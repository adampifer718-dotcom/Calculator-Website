import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DataStorageConverterText } from "../text/en";

const de: CalculatorTranslation<DataStorageConverterText> = {
  content: {
    title: "Datenmengenumrechner",
    shortTitle: "Datenmenge",
    summary: "Rechnen Sie zwischen Bits, Bytes, Kilobytes, Megabytes, Gigabytes und Terabytes um – mit dezimalen (GB) und binären (GiB) Präfixen.",
    metaTitle: "Datenmengenumrechner – GB, GiB, MB, TB und Bits",
    metaDescription: "Rechnen Sie Bits und Bytes zwischen Dezimaleinheiten (kB, MB, GB, TB, PB) und Binäreinheiten (KiB, MiB, GiB, TiB, PiB) um, dazu Kilobit, Megabit und Gigabit.",
    keywords: ["Datenmengen umrechnen", "Speichergröße umrechnen", "GB in GiB", "MB in MiB", "Bytes in Bits", "Gigabyte", "Gibibyte", "Terabyte", "Binärpräfixe"],
    intro: [
      "Speichergrößen werden mit zwei Präfixfamilien angegeben, die ähnlich aussehen, sich aber unterscheiden. Dezimale Präfixe (kB, MB, GB, TB) gehen in Schritten von 1.000 voran, wie SI-Präfixe überall sonst. Binäre Präfixe (KiB, MiB, GiB, TiB) gehen in Schritten von 1.024 voran und wurden von der IEC genormt, damit man beide auseinanderhalten kann.",
      "Das erklärt das bekannte Rätsel einer neuen 500-GB-Festplatte, die ein Computer mit etwa 465 „GB“ anzeigt: Der Hersteller rechnet in Potenzen von 1.000, das Betriebssystem in Potenzen von 1.024 und bezeichnet das Ergebnis als GiB oder manchmal als GB.",
      "Geben Sie eine Größe in einer beliebigen Einheit ein, um sie in Bits, Bytes, beiden Präfixfamilien und den für Netzwerkgeschwindigkeiten gebräuchlichen Einheiten Kilobit, Megabit und Gigabit zu sehen.",
    ],
    howToUse: [
      "Geben Sie die Datenmenge ein.",
      "Wählen Sie die Ausgangseinheit und die gewünschte Zieleinheit.",
      "Lesen Sie das Ergebnis ab oder sehen Sie in der Tabelle den Wert in allen Einheiten.",
    ],
    formulas: [
      {
        title: "Umrechnung über Bytes",
        expression: "Ergebnis = Wert × (Bytes pro Ausgangseinheit) ÷ (Bytes pro Zieleinheit)",
        explanation: "Jede Einheit entspricht einer festen Anzahl von Bytes; ein Byte hat 8 Bits.",
      },
      {
        title: "Dezimale Präfixe (SI)",
        expression: "1 kB = 10³ B\n1 MB = 10⁶ B\n1 GB = 10⁹ B\n1 TB = 10¹² B\n1 PB = 10¹⁵ B",
        explanation: "Kilobit, Megabit und Gigabit folgen denselben Zehnerpotenzen, gezählt in Bits: 1 Mbit = 10⁶ Bits = 125.000 B.",
      },
      {
        title: "Binäre Präfixe (IEC)",
        expression: "1 KiB = 2¹⁰ B = 1.024 B\n1 MiB = 2²⁰ B = 1.048.576 B\n1 GiB = 2³⁰ B\n1 TiB = 2⁴⁰ B\n1 PiB = 2⁵⁰ B",
        explanation: "Jeder Schritt multipliziert mit 1.024, daher wächst der Abstand zwischen beiden Familien: Ein GiB ist etwa 7,4 % größer als ein GB und ein TiB etwa 10 % größer als ein TB.",
      },
    ],
    examples: [
      {
        title: "Eine 500-GB-Festplatte in GiB",
        steps: ["500 GB = 500 × 10⁹ B = 500.000.000.000 B", "500.000.000.000 ÷ 2³⁰ = 500.000.000.000 ÷ 1.073.741.824 ≈ 465,66 GiB"],
      },
      {
        title: "64 GiB Arbeitsspeicher in GB",
        steps: ["64 × 1.073.741.824 B = 68.719.476.736 B", "68.719.476.736 ÷ 10⁹ ≈ 68,72 GB"],
      },
      {
        title: "100 Megabit in Megabyte",
        steps: ["100 Mbit = 100 × 10⁶ Bits = 100.000.000 Bits", "100.000.000 ÷ 8 = 12.500.000 B = 12,5 MB"],
      },
    ],
    assumptions: [
      "kB, MB, GB, TB und PB sind dezimal (Potenzen von 1.000) wie im SI; KiB, MiB, GiB, TiB und PiB sind binär (Potenzen von 1.024) gemäß der Definition der IEC.",
      "Manche Software und ältere Dokumente schreiben „KB“ oder „MB“ für binäre Einheiten. Stammt ein Wert aus einer solchen Quelle, rechnen Sie stattdessen von der entsprechenden binären Einheit um.",
      "Ein Byte wird mit 8 Bits angesetzt. Die Ergebnisse werden mit 10 signifikanten Stellen angezeigt.",
    ],
    faqs: [
      {
        question: "Was ist der Unterschied zwischen einem GB und einem GiB?",
        answer: "Ein Gigabyte (GB) sind 1.000.000.000 Bytes, ein Gibibyte (GiB) 1.073.741.824 Bytes (2³⁰). Die binäre Einheit ist etwa 7,4 % größer.",
      },
      {
        question: "Warum zeigt meine neue Festplatte weniger Speicher an, als auf der Verpackung steht?",
        answer: "Hersteller geben die Kapazität in Dezimaleinheiten an, während viele Betriebssysteme durch Potenzen von 1.024 teilen. Eine 1-TB-Festplatte fasst 10¹² Bytes, das sind etwa 931 GiB. Auch die Formatierung belegt etwas Platz.",
      },
      {
        question: "Wie rechne ich Megabit in Megabyte um?",
        answer: "Teilen Sie durch 8, denn ein Byte hat 8 Bits. Eine Datei mit 200 Mbit hat 25 MB.",
      },
    ],
    sourcesUsedFor: [
      "Die binären IEC-Präfixe Kibi, Mebi, Gibi, Tebi und Pebi (Potenzen von 2¹⁰) und ihre Abgrenzung von den dezimalen SI-Präfixen.",
    ],
  },
  text: {
    value: "Wert",
    from: "Von",
    to: "In",
    unitNames: {
      bit: "Bits",
      B: "Bytes",
      kB: "Kilobytes",
      MB: "Megabytes",
      GB: "Gigabytes",
      TB: "Terabytes",
      PB: "Petabytes",
      KiB: "Kibibytes",
      MiB: "Mebibytes",
      GiB: "Gibibytes",
      TiB: "Tebibytes",
      PiB: "Pebibytes",
      kbit: "Kilobits",
      Mbit: "Megabits",
      Gbit: "Gigabits",
    },
    primary: "{value} {symbol} in {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} in allen Dateneinheiten",
    tableUnit: "Einheit",
    tableValue: "Wert",
    note: "Die Ergebnisse werden mit 10 signifikanten Stellen angezeigt. kB, MB, GB … sind Potenzen von 1.000; KiB, MiB, GiB … sind Potenzen von 1.024.",
  },
};

export default de;
