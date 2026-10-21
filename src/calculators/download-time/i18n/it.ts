import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DownloadTimeText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const it: CalculatorTranslation<DownloadTimeText> = {
  content: {
    title: "Calcolatore del tempo di download",
    shortTitle: "Tempo di download",
    summary: "Stima quanto tempo serve per scaricare o caricare un file in base alla sua dimensione e alla velocità della connessione.",
    metaTitle: "Calcolatore tempo di download – Dimensione e velocità",
    metaDescription:
      "Stima il tempo di download o upload dalla dimensione del file in MB, GB, GiB o TB e dalla velocità in Mbit/s o Gbit/s, con overhead di protocollo opzionale.",
    keywords: ["tempo di download", "tempo di upload", "tempo di trasferimento", "dimensione file", "mbps", "velocità internet", "banda", "quanto ci vuole a scaricare"],
    intro: [
      "Il tempo di download è la quantità di dati divisa per la velocità con cui viaggiano. Il problema sono le unità: le offerte internet si vendono in megabit al secondo, mentre i file si misurano in megabyte o gigabyte, e un byte vale 8 bit.",
      "Inserisci la dimensione del file e la velocità della connessione nelle unità che hai. Il calcolatore converte entrambe, tiene conto dell'eventuale overhead di protocollo e mostra il tempo in giorni, ore, minuti e secondi.",
    ],
    howToUse: [
      "Inserisci la dimensione del file e scegli la sua unità. Usa GiB o MiB se la dimensione proviene da un sistema che conta in potenze di 1.024.",
      "Inserisci la velocità della connessione e la sua unità. La maggior parte delle offerte e degli speed test indica Mbit/s.",
      "Se vuoi, inserisci una percentuale di overhead di protocollo per tenere conto della velocità persa nella rete.",
      "Leggi il tempo stimato, il totale in secondi e la velocità effettiva.",
    ],
    formulas: [
      { title: "Tempo di download", expression: "tempo = (dimensione in byte × 8) ÷ velocità effettiva in bit/s", explanation: "Moltiplicare per 8 trasforma i byte in bit, così entrambi i lati usano la stessa unità." },
      { title: "Velocità effettiva", expression: "velocità effettiva = velocità × (1 − overhead ÷ 100)", explanation: "L'overhead è la quota della linea occupata da intestazioni e traffico di controllo anziché dai dati del file." },
      { title: "Prefissi", expression: "1 GB = 10⁹ byte; 1 GiB = 2³⁰ = 1.073.741.824 byte", explanation: "I prefissi decimali procedono per 1.000; quelli binari per 1.024." },
    ],
    examples: [
      {
        title: "4,7 GB a 50 Mbit/s",
        steps: ["4,7 GB = 4,7 × 10⁹ × 8 = 37.600 Mbit", "37.600 ÷ 50 = 752 secondi", "752 s = 12 minuti e 32 secondi"],
      },
      {
        title: "2 GiB a 100 Mbit/s con overhead del 10%",
        steps: ["2 GiB = 2 × 1.073.741.824 × 8 ≈ 17.180 Mbit", "Velocità effettiva = 100 × 0,9 = 90 Mbit/s", "17.180 ÷ 90 ≈ 190,89 s, circa 3 minuti e 11 secondi"],
      },
      {
        title: "Backup di 1,5 TB su 1 Gbit/s",
        steps: ["1,5 TB = 1,5 × 10¹² × 8 = 12 × 10¹² bit", "12 × 10¹² ÷ 10⁹ = 12.000 secondi", "12.000 s = 3 ore e 20 minuti"],
      },
    ],
    assumptions: [
      "La connessione mantiene una velocità costante per tutto il trasferimento. Le velocità reali variano con il segnale Wi-Fi, la congestione della rete e i limiti del server.",
      "L'overhead di protocollo è un'unica percentuale scelta da te; il valore predefinito dello 0% dà il tempo minimo teorico.",
      "kbit/s, Mbit/s e Gbit/s usano potenze di 1.000. MB/s indica megabyte (8.000.000 bit) al secondo.",
      "I tempi di 10 secondi o più vengono arrotondati al secondo.",
    ],
    faqs: [
      { question: "Qual è la differenza tra Mbps e MB/s?", answer: "Mbps (Mbit/s) conta i megabit; MB/s conta i megabyte. Un byte vale 8 bit, quindi un'offerta da 200 Mbit/s scarica al massimo 25 MB al secondo." },
      { question: "Perché il computer dice che un file è più piccolo di quanto indicato?", answer: "Molti sistemi operativi dividono per 1.024 anziché per 1.000 ma scrivono comunque GB. Un disco da 500 GB contiene 500 × 10⁹ byte, cioè circa 465,66 GiB." },
      { question: "Quanto overhead dovrei considerare?", answer: "Per una connessione cablata, il 3–10% è un margine ragionevole per intestazioni dei pacchetti e conferme di ricezione. Un Wi-Fi affollato o i trasferimenti a lunga distanza possono perdere di più." },
    ],
    sourcesUsedFor: [
      "I prefissi binari IEC kibi, mebi, gibi e tebi (potenze di 1.024) e come si differenziano dai prefissi decimali del SI.",
      "Il fatto che le velocità di connessione si indichino in megabit al secondo (Mbps).",
    ],
  },
  text: {
    size: "Dimensione del file",
    sizeUnit: "Unità di dimensione",
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
    speed: "Velocità della connessione",
    speedUnit: "Unità di velocità",
    speedUnits: {
      kbps: "Kilobit al secondo (kbit/s)",
      Mbps: "Megabit al secondo (Mbit/s, Mbps)",
      Gbps: "Gigabit al secondo (Gbit/s)",
      MBps: "Megabyte al secondo (MB/s)",
    },
    overhead: "Overhead di protocollo",
    overheadHelp:
      "Quota della velocità persa in intestazioni dei pacchetti, ritrasmissioni e altro traffico. Lascia 0 per il tempo ideale; un margine comune è del 5–10%.",
    time: "Tempo di download",
    caption: "{size} a {speed}.",
    units: {
      days: forms("{n} giorno", "{n} giorni"),
      hours: forms("{n} ora", "{n} ore"),
      minutes: forms("{n} minuto", "{n} minuti"),
      seconds: forms("{n} secondo", "{n} secondi"),
    },
    secondsDecimal: "{n} secondi",
    separator: ", ",
    totalSeconds: "Tempo totale in secondi",
    effectiveSpeed: "Velocità effettiva",
    sizeInBits: "Dimensione del file in megabit",
    notes: {
      bits: "Le velocità di connessione si indicano di solito in bit al secondo, le dimensioni dei file in byte. Un byte vale 8 bit, quindi 100 Mbit/s trasferiscono al massimo 12,5 MB al secondo.",
      prefixes: "kB, MB, GB e TB usano potenze di 1.000; KiB, MiB, GiB e TiB usano potenze di 1.024. I sistemi operativi spesso indicano le dimensioni binarie con i simboli decimali.",
      real: "I download reali sono spesso più lenti della velocità pubblicizzata a causa del Wi-Fi, della congestione della rete e dei limiti del server stesso.",
    },
  },
};

export default it;
