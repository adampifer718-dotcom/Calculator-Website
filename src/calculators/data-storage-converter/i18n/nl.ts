import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DataStorageConverterText } from "../text/en";

const nl: CalculatorTranslation<DataStorageConverterText> = {
  content: {
    title: "Opslagcapaciteit omrekenen",
    shortTitle: "Gegevensopslag",
    summary: "Reken om tussen bits, bytes, kilobytes, megabytes, gigabytes en terabytes, met zowel decimale (GB) als binaire (GiB) voorvoegsels.",
    metaTitle: "Opslagcapaciteit omrekenen – GB, GiB, MB, TB en bits",
    metaDescription:
      "Reken bits en bytes om tussen decimale eenheden (kB, MB, GB, TB, PB) en binaire eenheden (KiB, MiB, GiB, TiB, PiB), plus kilobit, megabit en gigabit.",
    keywords: ["opslag omrekenen", "GB naar GiB", "MB naar MiB", "bytes naar bits", "gigabyte", "gibibyte", "terabyte", "binaire voorvoegsels"],
    intro: [
      "Opslaggroottes worden geschreven met twee families voorvoegsels die op elkaar lijken, maar verschillen. Decimale voorvoegsels (kB, MB, GB, TB) gaan in stappen van 1.000, zoals SI-voorvoegsels overal elders. Binaire voorvoegsels (KiB, MiB, GiB, TiB) gaan in stappen van 1.024 en zijn door de IEC gestandaardiseerd, zodat je de twee uit elkaar kunt houden.",
      "Dat verklaart het bekende raadsel van een nieuwe schijf van 500 GB die een computer als ongeveer 465 \"GB\" weergeeft: de fabrikant telt in machten van 1.000, terwijl het besturingssysteem in machten van 1.024 telt en het resultaat GiB noemt, of soms GB.",
      "Vul een grootte in een willekeurige eenheid in om die te zien in bits, bytes, beide families voorvoegsels en de eenheden kilobit, megabit en gigabit die voor netwerksnelheden worden gebruikt.",
    ],
    howToUse: [
      "Vul de hoeveelheid gegevens in.",
      "Kies de eenheid waarin die staat en de eenheid die je wilt.",
      "Lees het resultaat af, of gebruik de tabel om de waarde in elke eenheid te zien.",
    ],
    formulas: [
      { title: "Omrekenen via bytes", expression: "resultaat = waarde × (bytes per broneenheid) ÷ (bytes per doeleenheid)", explanation: "Elke eenheid is een vast aantal bytes; één byte is 8 bits." },
      {
        title: "Decimale voorvoegsels (SI)",
        expression: "1 kB = 10³ B\n1 MB = 10⁶ B\n1 GB = 10⁹ B\n1 TB = 10¹² B\n1 PB = 10¹⁵ B",
        explanation: "Kilobit, megabit en gigabit volgen dezelfde machten van tien, geteld in bits: 1 Mbit = 10⁶ bits = 125.000 B.",
      },
      {
        title: "Binaire voorvoegsels (IEC)",
        expression: "1 KiB = 2¹⁰ B = 1.024 B\n1 MiB = 2²⁰ B = 1.048.576 B\n1 GiB = 2³⁰ B\n1 TiB = 2⁴⁰ B\n1 PiB = 2⁵⁰ B",
        explanation: "Elke stap vermenigvuldigt met 1.024, dus het verschil tussen de twee families wordt groter: een GiB is ongeveer 7,4% groter dan een GB, en een TiB ongeveer 10% groter dan een TB.",
      },
    ],
    examples: [
      {
        title: "Een schijf van 500 GB in GiB",
        steps: ["500 GB = 500 × 10⁹ B = 500.000.000.000 B", "500.000.000.000 ÷ 2³⁰ = 500.000.000.000 ÷ 1.073.741.824 ≈ 465,66 GiB"],
      },
      {
        title: "64 GiB geheugen in GB",
        steps: ["64 × 1.073.741.824 B = 68.719.476.736 B", "68.719.476.736 ÷ 10⁹ ≈ 68,72 GB"],
      },
      {
        title: "100 megabit in megabytes",
        steps: ["100 Mbit = 100 × 10⁶ bits = 100.000.000 bits", "100.000.000 ÷ 8 = 12.500.000 B = 12,5 MB"],
      },
    ],
    assumptions: [
      "kB, MB, GB, TB en PB zijn decimaal (machten van 1.000) zoals in het SI; KiB, MiB, GiB, TiB en PiB zijn binair (machten van 1.024) zoals gedefinieerd door de IEC.",
      "Sommige software en oudere documenten schrijven \"KB\" of \"MB\" voor binaire eenheden. Komt een getal uit zo'n bron, reken dan om vanuit de bijbehorende binaire eenheid.",
      "Een byte telt als 8 bits. Resultaten worden getoond met 10 significante cijfers.",
    ],
    faqs: [
      { question: "Wat is het verschil tussen een GB en een GiB?", answer: "Een gigabyte (GB) is 1.000.000.000 bytes; een gibibyte (GiB) is 1.073.741.824 bytes (2³⁰). De binaire eenheid is ongeveer 7,4% groter." },
      { question: "Waarom toont mijn nieuwe schijf minder ruimte dan op de doos staat?", answer: "Fabrikanten geven de capaciteit in decimale eenheden, terwijl veel besturingssystemen delen door machten van 1.024. Een schijf van 1 TB bevat 10¹² bytes, ongeveer 931 GiB. Formatteren kost ook wat ruimte." },
      { question: "Hoe reken ik megabit om naar megabyte?", answer: "Deel door 8, omdat een byte 8 bits heeft. Een bestand van 200 Mbit is 25 MB." },
    ],
    sourcesUsedFor: ["De binaire IEC-voorvoegsels kibi, mebi, gibi, tebi en pebi (machten van 2¹⁰) en het onderscheid met de decimale SI-voorvoegsels."],
  },
  text: {
    value: "Waarde",
    from: "Van",
    to: "Naar",
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
      kbit: "Kilobit",
      Mbit: "Megabit",
      Gbit: "Gigabit",
    },
    primary: "{value} {symbol} in {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} in elke gegevenseenheid",
    tableUnit: "Eenheid",
    tableValue: "Waarde",
    note: "Resultaten worden getoond met 10 significante cijfers. kB, MB, GB… zijn machten van 1.000; KiB, MiB, GiB… zijn machten van 1.024.",
  },
};

export default nl;
