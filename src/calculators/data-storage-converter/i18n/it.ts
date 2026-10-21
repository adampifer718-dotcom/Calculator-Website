import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DataStorageConverterText } from "../text/en";

const it: CalculatorTranslation<DataStorageConverterText> = {
  content: {
    title: "Convertitore di unità di archiviazione dati",
    shortTitle: "Archiviazione dati",
    summary: "Converti tra bit, byte, kilobyte, megabyte, gigabyte e terabyte, con prefissi decimali (GB) e binari (GiB).",
    metaTitle: "Convertitore di archiviazione dati – GB, GiB, MB, TB e bit",
    metaDescription:
      "Converti bit e byte tra unità decimali (kB, MB, GB, TB, PB) e binarie (KiB, MiB, GiB, TiB, PiB), oltre a kilobit, megabit e gigabit.",
    keywords: [
      "convertitore archiviazione dati",
      "convertitore unità di dati",
      "GB in GiB",
      "MB in MiB",
      "byte in bit",
      "gigabyte",
      "gibibyte",
      "terabyte",
      "prefissi binari",
    ],
    intro: [
      "Le dimensioni di archiviazione si scrivono con due famiglie di prefissi simili ma diverse. I prefissi decimali (kB, MB, GB, TB) procedono di 1000 in 1000, come i prefissi SI in qualsiasi altro ambito. I prefissi binari (KiB, MiB, GiB, TiB) procedono di 1024 in 1024 e sono stati normalizzati dalla IEC per distinguere le due famiglie.",
      "Questo spiega il noto mistero del disco nuovo da 500 GB che il computer mostra come circa 465 «GB»: il produttore del disco conta in potenze di 1000, mentre il sistema operativo conta in potenze di 1024 ed etichetta il risultato come GiB, o talvolta come GB.",
      "Inserisci una dimensione in qualsiasi unità per vederla in bit, in byte, in entrambe le famiglie di prefissi e nei kilobit, megabit e gigabit usati per le velocità di rete.",
    ],
    howToUse: [
      "Inserisci la quantità di dati.",
      "Scegli l'unità di partenza e quella di arrivo.",
      "Leggi il risultato o usa la tabella per vedere il valore in tutte le unità.",
    ],
    formulas: [
      {
        title: "Conversione tramite il byte",
        expression: "risultato = valore × (byte per unità di partenza) ÷ (byte per unità di arrivo)",
        explanation: "Ogni unità equivale a un numero fisso di byte; un byte corrisponde a 8 bit.",
      },
      {
        title: "Prefissi decimali (SI)",
        expression: "1 kB = 10³ B\n1 MB = 10⁶ B\n1 GB = 10⁹ B\n1 TB = 10¹² B\n1 PB = 10¹⁵ B",
        explanation: "Kilobit, megabit e gigabit seguono le stesse potenze di dieci, contate in bit: 1 Mbit = 10⁶ bit = 125.000 B.",
      },
      {
        title: "Prefissi binari (IEC)",
        expression: "1 KiB = 2¹⁰ B = 1024 B\n1 MiB = 2²⁰ B = 1.048.576 B\n1 GiB = 2³⁰ B\n1 TiB = 2⁴⁰ B\n1 PiB = 2⁵⁰ B",
        explanation: "Ogni passo moltiplica per 1024, quindi la differenza tra le due famiglie cresce: un GiB è circa il 7,4% più grande di un GB e un TiB circa il 10% più grande di un TB.",
      },
    ],
    examples: [
      {
        title: "Un disco da 500 GB in GiB",
        steps: [
          "500 GB = 500 × 10⁹ B = 500.000.000.000 B",
          "500.000.000.000 ÷ 2³⁰ = 500.000.000.000 ÷ 1.073.741.824 ≈ 465,66 GiB",
        ],
      },
      {
        title: "64 GiB di memoria in GB",
        steps: ["64 × 1.073.741.824 B = 68.719.476.736 B", "68.719.476.736 ÷ 10⁹ ≈ 68,72 GB"],
      },
      {
        title: "100 megabit in megabyte",
        steps: ["100 Mbit = 100 × 10⁶ bit = 100.000.000 bit", "100.000.000 ÷ 8 = 12.500.000 B = 12,5 MB"],
      },
    ],
    assumptions: [
      "kB, MB, GB, TB e PB sono decimali (potenze di 1000), come nel SI; KiB, MiB, GiB, TiB e PiB sono binari (potenze di 1024), secondo la definizione della IEC.",
      "Alcuni programmi e documenti meno recenti scrivono «KB» o «MB» per indicare unità binarie. Se un valore proviene da una fonte del genere, converti dall'unità binaria corrispondente.",
      "Si considera che un byte sia formato da 8 bit. I risultati sono mostrati con 10 cifre significative.",
    ],
    faqs: [
      {
        question: "Che differenza c'è tra un GB e un GiB?",
        answer: "Un gigabyte (GB) corrisponde a 1.000.000.000 di byte; un gibibyte (GiB) a 1.073.741.824 byte (2³⁰). L'unità binaria è più grande di circa il 7,4%.",
      },
      {
        question: "Perché il mio disco nuovo mostra meno spazio di quello indicato sulla confezione?",
        answer: "I produttori di dischi indicano la capacità in unità decimali, mentre molti sistemi operativi dividono per potenze di 1024. Un disco da 1 TB contiene 10¹² byte, cioè circa 931 GiB. Anche la formattazione occupa un po' di spazio.",
      },
      {
        question: "Come converto i megabit in megabyte?",
        answer: "Dividi per 8, perché un byte è formato da 8 bit. Un file da 200 Mbit occupa 25 MB.",
      },
    ],
    sourcesUsedFor: [
      "I prefissi binari IEC kibi, mebi, gibi, tebi e pebi (potenze di 2¹⁰) e la loro differenza rispetto ai prefissi decimali del SI.",
    ],
  },
  text: {
    value: "Valore",
    from: "Da",
    to: "A",
    unitNames: {
      bit: "Bit",
      B: "Byte",
      kB: "Kilobyte",
      MB: "Megabyte",
      GB: "Gigabyte",
      TB: "Terabyte",
      PB: "Petabyte",
      KiB: "Kibibyte",
      MiB: "Mebibyte",
      GiB: "Gibibyte",
      TiB: "Tebibyte",
      PiB: "Pebibyte",
      kbit: "Kilobit",
      Mbit: "Megabit",
      Gbit: "Gigabit",
    },
    primary: "{value} {symbol} in {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} in tutte le unità di dati",
    tableUnit: "Unità",
    tableValue: "Valore",
    note: "I risultati sono mostrati con 10 cifre significative. kB, MB, GB… sono potenze di 1000; KiB, MiB, GiB… sono potenze di 1024.",
  },
};

export default it;
