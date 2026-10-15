import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { dataStorageConverterEngine, makeDataStorageConverterEngine } from "./engine";

export const dataStorageConverter = defineCalculator({
  id: "data-storage-converter",
  slug: "data-storage-converter",
  status: "published",
  title: "Data Storage Converter",
  shortTitle: "Data storage",
  category: "conversion",
  collections: ["software-data"],
  summary: "Convert between bits, bytes, kilobytes, megabytes, gigabytes and terabytes, with both decimal (GB) and binary (GiB) prefixes.",
  metaTitle: "Data Storage Converter – GB, GiB, MB, TB and Bits",
  metaDescription: "Convert bits and bytes between decimal units (kB, MB, GB, TB, PB) and binary units (KiB, MiB, GiB, TiB, PiB), plus kilobits, megabits and gigabits.",
  keywords: ["data storage converter", "GB to GiB", "MB to MiB", "bytes to bits", "gigabyte", "gibibyte", "terabyte", "binary prefixes"],
  addedOn: "2026-10-15",
  sources: [
    {
      title: "Prefixes for Binary Multiples",
      publisher: "National Institute of Standards and Technology (NIST Reference on Constants, Units and Uncertainty)",
      url: "https://www.physics.nist.gov/cgi-bin/cuu/Info/Units/binary.html",
      usedFor: "The IEC binary prefixes kibi, mebi, gibi, tebi and pebi (powers of 2¹⁰) and their distinction from the decimal SI prefixes.",
    },
  ],
  intro: [
    "Storage sizes are written with two families of prefixes that look alike but differ. Decimal prefixes (kB, MB, GB, TB) step by 1,000, as SI prefixes do everywhere else. Binary prefixes (KiB, MiB, GiB, TiB) step by 1,024 and were standardized by the IEC so that the two could be told apart.",
    "This explains the familiar puzzle of a new 500 GB drive that a computer reports as about 465 \"GB\": the drive maker counts in powers of 1,000, while the operating system counts in powers of 1,024 and labels the result GiB, or sometimes GB.",
    "Enter a size in any unit to see it in bits, bytes, both prefix families and the kilobit, megabit and gigabit units used for network speeds.",
  ],
  howToUse: [
    "Enter the amount of data.",
    "Choose the unit it is in and the unit you want.",
    "Read the result, or use the table to see the value in every unit.",
  ],
  formulas: [
    { title: "Conversion through bytes", expression: "result = value × (bytes per from-unit) ÷ (bytes per to-unit)", explanation: "Every unit is a fixed number of bytes; one byte is 8 bits." },
    {
      title: "Decimal prefixes (SI)",
      expression: "1 kB = 10³ B\n1 MB = 10⁶ B\n1 GB = 10⁹ B\n1 TB = 10¹² B\n1 PB = 10¹⁵ B",
      explanation: "Kilobits, megabits and gigabits follow the same powers of ten, counted in bits: 1 Mbit = 10⁶ bits = 125,000 B.",
    },
    {
      title: "Binary prefixes (IEC)",
      expression: "1 KiB = 2¹⁰ B = 1,024 B\n1 MiB = 2²⁰ B = 1,048,576 B\n1 GiB = 2³⁰ B\n1 TiB = 2⁴⁰ B\n1 PiB = 2⁵⁰ B",
      explanation: "Each step multiplies by 1,024, so the gap between the two families widens: a GiB is about 7.4% larger than a GB, and a TiB about 10% larger than a TB.",
    },
  ],
  examples: [
    {
      title: "A 500 GB drive in GiB",
      inputs: { value: 500, from: "GB", to: "GiB" },
      steps: ["500 GB = 500 × 10⁹ B = 500,000,000,000 B", "500,000,000,000 ÷ 2³⁰ = 500,000,000,000 ÷ 1,073,741,824 ≈ 465.66 GiB"],
      expectedPrimary: "465.6612873 GiB",
    },
    {
      title: "64 GiB of memory in GB",
      inputs: { value: 64, from: "GiB", to: "GB" },
      steps: ["64 × 1,073,741,824 B = 68,719,476,736 B", "68,719,476,736 ÷ 10⁹ ≈ 68.72 GB"],
      expectedPrimary: "68.71947674 GB",
    },
    {
      title: "100 megabits in megabytes",
      inputs: { value: 100, from: "Mbit", to: "MB" },
      steps: ["100 Mbit = 100 × 10⁶ bits = 100,000,000 bits", "100,000,000 ÷ 8 = 12,500,000 B = 12.5 MB"],
      expectedPrimary: "12.5 MB",
    },
  ],
  assumptions: [
    "kB, MB, GB, TB and PB are decimal (powers of 1,000) as in the SI; KiB, MiB, GiB, TiB and PiB are binary (powers of 1,024) as defined by the IEC.",
    "Some software and older documents write \"KB\" or \"MB\" for binary units. If a figure came from such a source, convert from the matching binary unit instead.",
    "A byte is taken as 8 bits. Results are shown to 10 significant digits.",
  ],
  faqs: [
    { question: "What is the difference between a GB and a GiB?", answer: "A gigabyte (GB) is 1,000,000,000 bytes; a gibibyte (GiB) is 1,073,741,824 bytes (2³⁰). The binary unit is about 7.4% larger." },
    { question: "Why does my new drive show less space than the box says?", answer: "Drive makers state capacity in decimal units, while many operating systems divide by powers of 1,024. A 1 TB drive holds 10¹² bytes, which is about 931 GiB. Formatting also uses a little space." },
    { question: "How do I convert megabits to megabytes?", answer: "Divide by 8, because a byte has 8 bits. A 200 Mbit file is 25 MB." },
  ],
  related: ["download-time-calculator", "length-converter", "scientific-notation-calculator"],
  updated: "2026-10-15",
  engine: dataStorageConverterEngine,
  text,
  makeEngine: makeDataStorageConverterEngine,
  translations,
});
