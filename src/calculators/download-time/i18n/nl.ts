import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DownloadTimeText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const nl: CalculatorTranslation<DownloadTimeText> = {
  content: {
    title: "Downloadtijdcalculator",
    shortTitle: "Downloadtijd",
    summary: "Schat hoe lang het downloaden of uploaden van een bestand duurt op basis van de bestandsgrootte en je verbindingssnelheid.",
    metaTitle: "Downloadtijdcalculator – bestandsgrootte en snelheid",
    metaDescription:
      "Schat de download- of uploadtijd uit de bestandsgrootte in MB, GB, GiB of TB en de verbindingssnelheid in Mbit/s of Gbit/s, eventueel met protocoloverhead.",
    keywords: ["downloadtijd", "uploadtijd", "overdrachtstijd", "bestandsgrootte", "mbps", "internetsnelheid", "bandbreedte", "hoe lang duurt downloaden"],
    intro: [
      "De downloadtijd is de hoeveelheid data gedeeld door de snelheid waarmee die wordt verstuurd. Het lastige zit in de eenheden: internetabonnementen worden verkocht in megabit per seconde, terwijl bestanden in megabytes of gigabytes worden gemeten, en een byte bestaat uit 8 bits.",
      "Vul de bestandsgrootte en de verbindingssnelheid in met de eenheden die je hebt. De calculator rekent beide om, houdt rekening met eventuele protocoloverhead en toont de tijd in dagen, uren, minuten en seconden.",
    ],
    howToUse: [
      "Vul de bestandsgrootte in en kies de eenheid. Gebruik GiB of MiB als de grootte afkomstig is van een systeem dat in machten van 1024 telt.",
      "Vul de verbindingssnelheid en de eenheid in. De meeste abonnementen en snelheidstests geven Mbit/s.",
      "Vul eventueel een percentage protocoloverhead in voor de snelheid die verloren gaat aan netwerkverkeer.",
      "Lees de geschatte tijd, het totaal in seconden en de effectieve snelheid af.",
    ],
    formulas: [
      {
        title: "Downloadtijd",
        expression: "tijd = (grootte in bytes × 8) ÷ effectieve snelheid in bit/s",
        explanation: "Door met 8 te vermenigvuldigen worden bytes omgezet in bits, zodat beide kanten dezelfde eenheid gebruiken.",
      },
      {
        title: "Effectieve snelheid",
        expression: "effectieve snelheid = snelheid × (1 − overhead ÷ 100)",
        explanation: "Overhead is het deel van de lijn dat wordt gebruikt door headers en besturingsverkeer in plaats van door bestandsdata.",
      },
      {
        title: "Voorvoegsels",
        expression: "1 GB = 10⁹ bytes; 1 GiB = 2³⁰ = 1.073.741.824 bytes",
        explanation: "Decimale voorvoegsels gaan in stappen van 1000; binaire voorvoegsels in stappen van 1024.",
      },
    ],
    examples: [
      {
        title: "4,7 GB bij 50 Mbit/s",
        steps: ["4,7 GB = 4,7 × 10⁹ × 8 = 37.600 Mbit", "37.600 ÷ 50 = 752 seconden", "752 s = 12 minuten en 32 seconden"],
      },
      {
        title: "2 GiB bij 100 Mbit/s met 10% overhead",
        steps: [
          "2 GiB = 2 × 1.073.741.824 × 8 ≈ 17.180 Mbit",
          "Effectieve snelheid = 100 × 0,9 = 90 Mbit/s",
          "17.180 ÷ 90 ≈ 190,89 s, ongeveer 3 minuten en 11 seconden",
        ],
      },
      {
        title: "Back-up van 1,5 TB via 1 Gbit/s",
        steps: ["1,5 TB = 1,5 × 10¹² × 8 = 12 × 10¹² bits", "12 × 10¹² ÷ 10⁹ = 12.000 seconden", "12.000 s = 3 uur en 20 minuten"],
      },
    ],
    assumptions: [
      "De verbinding houdt tijdens de hele overdracht een constante snelheid aan. Echte snelheden variëren met het wifisignaal, drukte op het netwerk en de limieten van de server.",
      "De protocoloverhead is één percentage dat je zelf kiest; de standaardwaarde van 0% geeft de theoretische minimumtijd.",
      "kbit/s, Mbit/s en Gbit/s gebruiken machten van 1000. MB/s betekent megabytes (8.000.000 bits) per seconde.",
      "Tijden van 10 seconden of meer worden afgerond op de dichtstbijzijnde seconde.",
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen Mbps en MB/s?",
        answer: "Mbps (Mbit/s) telt megabits; MB/s telt megabytes. Eén byte is 8 bits, dus met een abonnement van 200 Mbit/s download je hooguit 25 MB per seconde.",
      },
      {
        question: "Waarom geeft mijn computer een bestand kleiner aan dan op het label staat?",
        answer:
          "Veel besturingssystemen delen door 1024 in plaats van 1000, maar schrijven toch GB. Een schijf van 500 GB bevat 500 × 10⁹ bytes, wat ongeveer 465,66 GiB is.",
      },
      {
        question: "Met hoeveel overhead moet ik rekening houden?",
        answer:
          "Bij een bekabelde verbinding is 3–10% een redelijke marge voor pakketheaders en bevestigingen. Bij druk bezette wifi of overdrachten over grote afstand kan het verlies groter zijn.",
      },
    ],
    sourcesUsedFor: [
      "De binaire IEC-voorvoegsels kibi, mebi, gibi en tebi (machten van 1024) en hoe ze verschillen van de decimale SI-voorvoegsels.",
      "Dat verbindingssnelheden worden opgegeven in megabit per seconde (Mbps).",
    ],
  },
  text: {
    size: "Bestandsgrootte",
    sizeUnit: "Eenheid van grootte",
    sizeUnits: {
      B: "Bytes (B)",
      kB: "Kilobytes (kB, 1000 B)",
      MB: "Megabytes (MB)",
      GB: "Gigabytes (GB)",
      TB: "Terabytes (TB)",
      KiB: "Kibibytes (KiB, 1024 B)",
      MiB: "Mebibytes (MiB)",
      GiB: "Gibibytes (GiB)",
      TiB: "Tebibytes (TiB)",
    },
    speed: "Verbindingssnelheid",
    speedUnit: "Eenheid van snelheid",
    speedUnits: {
      kbps: "Kilobit per seconde (kbit/s)",
      Mbps: "Megabit per seconde (Mbit/s, Mbps)",
      Gbps: "Gigabit per seconde (Gbit/s)",
      MBps: "Megabyte per seconde (MB/s)",
    },
    overhead: "Protocoloverhead",
    overheadHelp:
      "Deel van de snelheid dat verloren gaat aan pakketheaders, herverzendingen en ander verkeer. Laat op 0 staan voor de ideale tijd; 5–10% is een gangbare marge.",
    time: "Downloadtijd",
    caption: "{size} bij {speed}.",
    units: {
      days: forms("{n} dag", "{n} dagen"),
      hours: forms("{n} uur", "{n} uur"),
      minutes: forms("{n} minuut", "{n} minuten"),
      seconds: forms("{n} seconde", "{n} seconden"),
    },
    secondsDecimal: "{n} seconden",
    separator: ", ",
    totalSeconds: "Totale tijd in seconden",
    effectiveSpeed: "Effectieve snelheid",
    sizeInBits: "Bestandsgrootte in megabit",
    notes: {
      bits: "Verbindingssnelheden worden meestal opgegeven in bits per seconde, bestandsgroottes in bytes. Eén byte is 8 bits, dus 100 Mbit/s verplaatst hooguit 12,5 MB per seconde.",
      prefixes: "kB, MB, GB en TB gebruiken machten van 1000; KiB, MiB, GiB en TiB gebruiken machten van 1024. Besturingssystemen geven binaire groottes vaak aan met de decimale symbolen.",
      real: "Echte downloads zijn vaak trager dan de geadverteerde snelheid door wifi, drukte op het netwerk en de limieten van de server zelf.",
    },
  },
};

export default nl;
