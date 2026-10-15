import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DataStorageConverterText } from "../text/en";

const fr: CalculatorTranslation<DataStorageConverterText> = {
  content: {
    title: "Convertisseur d’unités de stockage",
    shortTitle: "Stockage de données",
    summary: "Convertissez entre bits, octets, kilooctets, mégaoctets, gigaoctets et téraoctets, avec les préfixes décimaux (Go) et binaires (Gio).",
    metaTitle: "Convertisseur d’unités de stockage – Go, Gio, Mo, To et bits",
    metaDescription: "Convertissez bits et octets entre unités décimales (ko, Mo, Go, To, Po) et binaires (Kio, Mio, Gio, Tio, Pio), ainsi qu’en kilobits, mégabits et gigabits.",
    keywords: ["convertisseur octets", "conversion Go en Gio", "Mo en Mio", "octets en bits", "gigaoctet", "gibioctet", "téraoctet", "préfixes binaires", "stockage de données"],
    intro: [
      "Les tailles de stockage s’écrivent avec deux familles de préfixes qui se ressemblent mais diffèrent. Les préfixes décimaux (ko, Mo, Go, To) progressent par 1 000, comme les préfixes SI partout ailleurs. Les préfixes binaires (Kio, Mio, Gio, Tio) progressent par 1 024 et ont été normalisés par la CEI pour qu’on puisse distinguer les deux.",
      "Cela explique l’énigme bien connue du disque neuf de 500 Go qu’un ordinateur affiche à environ 465 « Go » : le fabricant compte en puissances de 1 000, tandis que le système d’exploitation compte en puissances de 1 024 et étiquette le résultat Gio, ou parfois Go.",
      "Saisissez une taille dans n’importe quelle unité pour la voir en bits, en octets, dans les deux familles de préfixes et dans les unités en kilobits, mégabits et gigabits utilisées pour les débits réseau.",
    ],
    howToUse: [
      "Saisissez la quantité de données.",
      "Choisissez son unité et l’unité souhaitée.",
      "Lisez le résultat, ou utilisez le tableau pour voir la valeur dans toutes les unités.",
    ],
    formulas: [
      { title: "Conversion via l’octet", expression: "résultat = valeur × (octets par unité de départ) ÷ (octets par unité d’arrivée)", explanation: "Chaque unité vaut un nombre fixe d’octets ; un octet vaut 8 bits." },
      {
        title: "Préfixes décimaux (SI)",
        expression: "1 kB = 10³ B\n1 MB = 10⁶ B\n1 GB = 10⁹ B\n1 TB = 10¹² B\n1 PB = 10¹⁵ B",
        explanation: "Les kilobits, mégabits et gigabits suivent les mêmes puissances de dix, comptées en bits : 1 Mbit = 10⁶ bits = 125 000 B.",
      },
      {
        title: "Préfixes binaires (CEI)",
        expression: "1 KiB = 2¹⁰ B = 1 024 B\n1 MiB = 2²⁰ B = 1 048 576 B\n1 GiB = 2³⁰ B\n1 TiB = 2⁴⁰ B\n1 PiB = 2⁵⁰ B",
        explanation: "Chaque palier multiplie par 1 024, si bien que l’écart entre les deux familles se creuse : un Gio est environ 7,4 % plus grand qu’un Go, et un Tio environ 10 % plus grand qu’un To.",
      },
    ],
    examples: [
      { title: "Un disque de 500 Go en Gio", steps: ["500 GB = 500 × 10⁹ B = 500 000 000 000 B", "500 000 000 000 ÷ 2³⁰ = 500 000 000 000 ÷ 1 073 741 824 ≈ 465,66 GiB"] },
      { title: "64 Gio de mémoire en Go", steps: ["64 × 1 073 741 824 B = 68 719 476 736 B", "68 719 476 736 ÷ 10⁹ ≈ 68,72 GB"] },
      { title: "100 mégabits en mégaoctets", steps: ["100 Mbit = 100 × 10⁶ bits = 100 000 000 bits", "100 000 000 ÷ 8 = 12 500 000 B = 12,5 MB"] },
    ],
    assumptions: [
      "kB, MB, GB, TB et PB (ko, Mo, Go, To, Po) sont décimaux (puissances de 1 000) comme dans le SI ; KiB, MiB, GiB, TiB et PiB (Kio, Mio, Gio, Tio, Pio) sont binaires (puissances de 1 024) selon la définition de la CEI.",
      "Certains logiciels et documents anciens écrivent « Ko » ou « Mo » pour des unités binaires. Si un chiffre provient d’une telle source, convertissez plutôt depuis l’unité binaire correspondante.",
      "Un octet est considéré comme valant 8 bits. Les résultats sont affichés avec 10 chiffres significatifs.",
    ],
    faqs: [
      { question: "Quelle est la différence entre un Go et un Gio ?", answer: "Un gigaoctet (Go) vaut 1 000 000 000 octets ; un gibioctet (Gio) vaut 1 073 741 824 octets (2³⁰). L’unité binaire est environ 7,4 % plus grande." },
      { question: "Pourquoi mon disque neuf affiche-t-il moins d’espace que ce qu’indique la boîte ?", answer: "Les fabricants indiquent la capacité en unités décimales, alors que de nombreux systèmes d’exploitation divisent par des puissances de 1 024. Un disque de 1 To contient 10¹² octets, soit environ 931 Gio. Le formatage occupe aussi un peu d’espace." },
      { question: "Comment convertir des mégabits en mégaoctets ?", answer: "Divisez par 8, car un octet compte 8 bits. Un fichier de 200 Mbit fait 25 Mo." },
    ],
    sourcesUsedFor: ["Les préfixes binaires de la CEI kibi, mébi, gibi, tébi et pébi (puissances de 2¹⁰) et leur distinction avec les préfixes décimaux du SI."],
  },
  text: {
    value: "Valeur",
    from: "De",
    to: "Vers",
    unitNames: {
      bit: "Bits",
      B: "Octets",
      kB: "Kilooctets",
      MB: "Mégaoctets",
      GB: "Gigaoctets",
      TB: "Téraoctets",
      PB: "Pétaoctets",
      KiB: "Kibioctets",
      MiB: "Mébioctets",
      GiB: "Gibioctets",
      TiB: "Tébioctets",
      PiB: "Pébioctets",
      kbit: "Kilobits",
      Mbit: "Mégabits",
      Gbit: "Gigabits",
    },
    primary: "{value} {symbol} en {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} dans toutes les unités de données",
    tableUnit: "Unité",
    tableValue: "Valeur",
    note: "Les résultats sont affichés avec 10 chiffres significatifs. kB, MB, GB… sont des puissances de 1 000 ; KiB, MiB, GiB… des puissances de 1 024.",
  },
};

export default fr;
