import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DownloadTimeText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const de: CalculatorTranslation<DownloadTimeText> = {
  content: {
    title: "Downloadzeit-Rechner",
    shortTitle: "Downloadzeit",
    summary: "Schätzen Sie, wie lange der Download oder Upload einer Datei bei Ihrer Verbindungsgeschwindigkeit dauert.",
    metaTitle: "Downloadzeit-Rechner – Dateigröße und Geschwindigkeit",
    metaDescription: "Schätzen Sie die Download- oder Uploadzeit aus Dateigröße (MB, GB, GiB, TB) und Geschwindigkeit (Mbit/s, Gbit/s), optional mit Protokoll-Overhead.",
    keywords: ["Downloadzeit berechnen", "Downloaddauer", "Uploadzeit", "Übertragungszeit", "Dateigröße", "Mbit/s", "Internetgeschwindigkeit", "Bandbreite", "wie lange dauert der Download"],
    intro: [
      "Die Downloadzeit ist die Datenmenge geteilt durch die Übertragungsgeschwindigkeit. Der Haken liegt bei den Einheiten: Internettarife werden in Megabit pro Sekunde verkauft, Dateien aber in Megabyte oder Gigabyte gemessen, und ein Byte hat 8 Bit.",
      "Geben Sie Dateigröße und Verbindungsgeschwindigkeit in den Einheiten ein, die Sie kennen. Der Rechner rechnet beide um, berücksichtigt einen eventuellen Protokoll-Overhead und zeigt die Zeit in Tagen, Stunden, Minuten und Sekunden.",
    ],
    howToUse: [
      "Geben Sie die Dateigröße ein und wählen Sie ihre Einheit. Verwenden Sie GiB oder MiB, wenn die Größe von einem System stammt, das in Potenzen von 1.024 zählt.",
      "Geben Sie die Verbindungsgeschwindigkeit und ihre Einheit ein. Die meisten Tarife und Speedtests geben Mbit/s an.",
      "Geben Sie optional einen Protokoll-Overhead in Prozent ein, um den Geschwindigkeitsverlust durch die Netzwerktechnik zu berücksichtigen.",
      "Lesen Sie die geschätzte Zeit, die Gesamtzeit in Sekunden und die effektive Geschwindigkeit ab.",
    ],
    formulas: [
      { title: "Downloadzeit", expression: "Zeit = (Größe in Byte × 8) ÷ effektive Geschwindigkeit in bit/s", explanation: "Die Multiplikation mit 8 wandelt Byte in Bit um, sodass beide Seiten dieselbe Einheit verwenden." },
      { title: "Effektive Geschwindigkeit", expression: "effektive Geschwindigkeit = Geschwindigkeit × (1 − Overhead ÷ 100)", explanation: "Der Overhead ist der Anteil der Leitung, der für Header und Steuerdaten statt für Dateidaten verwendet wird." },
      { title: "Präfixe", expression: "1 GB = 10⁹ Byte; 1 GiB = 2³⁰ = 1.073.741.824 Byte", explanation: "Dezimale Präfixe gehen in Schritten von 1.000, binäre Präfixe in Schritten von 1.024." },
    ],
    examples: [
      {
        title: "4,7 GB bei 50 Mbit/s",
        steps: ["4,7 GB = 4,7 × 10⁹ × 8 = 37.600 Mbit", "37.600 ÷ 50 = 752 Sekunden", "752 s = 12 Minuten und 32 Sekunden"],
      },
      {
        title: "2 GiB bei 100 Mbit/s mit 10 % Overhead",
        steps: ["2 GiB = 2 × 1.073.741.824 × 8 ≈ 17.180 Mbit", "Effektive Geschwindigkeit = 100 × 0,9 = 90 Mbit/s", "17.180 ÷ 90 ≈ 190,89 s, etwa 3 Minuten und 11 Sekunden"],
      },
      {
        title: "Backup von 1,5 TB über 1 Gbit/s",
        steps: ["1,5 TB = 1,5 × 10¹² × 8 = 12 × 10¹² Bit", "12 × 10¹² ÷ 10⁹ = 12.000 Sekunden", "12.000 s = 3 Stunden und 20 Minuten"],
      },
    ],
    assumptions: [
      "Die Verbindung läuft während der gesamten Übertragung mit gleichbleibender Geschwindigkeit. Reale Geschwindigkeiten schwanken je nach WLAN-Signal, Netzauslastung und Grenzen des Servers.",
      "Der Protokoll-Overhead ist ein einzelner Prozentsatz, den Sie wählen; der Standardwert 0 % ergibt die theoretische Mindestzeit.",
      "kbit/s, Mbit/s und Gbit/s verwenden Potenzen von 1.000. MB/s bedeutet Megabyte (8.000.000 Bit) pro Sekunde.",
      "Zeiten ab 10 Sekunden werden auf die volle Sekunde gerundet.",
    ],
    faqs: [
      { question: "Was ist der Unterschied zwischen Mbps und MB/s?", answer: "Mbps (Mbit/s) zählt Megabit, MB/s zählt Megabyte. Ein Byte hat 8 Bit, ein Tarif mit 200 Mbit/s lädt also höchstens 25 MB pro Sekunde herunter." },
      { question: "Warum zeigt mein Computer eine Datei kleiner an als angegeben?", answer: "Viele Betriebssysteme teilen durch 1.024 statt 1.000, schreiben aber trotzdem GB. Ein 500-GB-Laufwerk fasst 500 × 10⁹ Byte, das sind etwa 465,66 GiB." },
      { question: "Mit wie viel Overhead sollte ich rechnen?", answer: "Bei einer kabelgebundenen Verbindung sind 3–10 % ein vernünftiger Zuschlag für Paket-Header und Bestätigungen. Bei ausgelastetem WLAN oder Übertragungen über große Entfernungen kann mehr verloren gehen." },
    ],
    sourcesUsedFor: [
      "Die binären IEC-Präfixe Kibi, Mebi, Gibi und Tebi (Potenzen von 1.024) und wie sie sich von den dezimalen SI-Präfixen unterscheiden.",
      "Die Angabe von Verbindungsgeschwindigkeiten in Megabit pro Sekunde (Mbps).",
    ],
  },
  text: {
    size: "Dateigröße",
    sizeUnit: "Größeneinheit",
    sizeUnits: {
      B: "Byte (B)",
      kB: "Kilobyte (kB, 1.000 B)",
      MB: "Megabyte (MB)",
      GB: "Gigabyte (GB)",
      TB: "Terabyte (TB)",
      KiB: "Kibibyte (KiB, 1.024 B)",
      MiB: "Mebibyte (MiB)",
      GiB: "Gibibyte (GiB)",
      TiB: "Tebibyte (TiB)",
    },
    speed: "Verbindungsgeschwindigkeit",
    speedUnit: "Geschwindigkeitseinheit",
    speedUnits: {
      kbps: "Kilobit pro Sekunde (kbit/s)",
      Mbps: "Megabit pro Sekunde (Mbit/s, Mbps)",
      Gbps: "Gigabit pro Sekunde (Gbit/s)",
      MBps: "Megabyte pro Sekunde (MB/s)",
    },
    overhead: "Protokoll-Overhead",
    overheadHelp: "Anteil der Geschwindigkeit, der durch Paket-Header, erneute Übertragungen und anderen Datenverkehr verloren geht. Lassen Sie 0 für die ideale Zeit stehen; 5–10 % sind ein üblicher Zuschlag.",
    time: "Downloadzeit",
    caption: "{size} bei {speed}.",
    units: {
      days: forms("{n} Tag", "{n} Tage"),
      hours: forms("{n} Stunde", "{n} Stunden"),
      minutes: forms("{n} Minute", "{n} Minuten"),
      seconds: forms("{n} Sekunde", "{n} Sekunden"),
    },
    secondsDecimal: "{n} Sekunden",
    separator: ", ",
    totalSeconds: "Gesamtzeit in Sekunden",
    effectiveSpeed: "Effektive Geschwindigkeit",
    sizeInBits: "Dateigröße in Megabit",
    notes: {
      bits: "Verbindungsgeschwindigkeiten werden meist in Bit pro Sekunde angegeben, Dateigrößen in Byte. Ein Byte hat 8 Bit, 100 Mbit/s übertragen also höchstens 12,5 MB pro Sekunde.",
      prefixes: "kB, MB, GB und TB verwenden Potenzen von 1.000, KiB, MiB, GiB und TiB Potenzen von 1.024. Betriebssysteme beschriften binäre Größen oft mit den dezimalen Symbolen.",
      real: "Reale Downloads sind wegen WLAN, Netzauslastung und der Grenzen des Servers oft langsamer als die beworbene Geschwindigkeit.",
    },
  },
};

export default de;
