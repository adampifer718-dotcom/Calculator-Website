import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DataStorageConverterText } from "../text/en";

const es: CalculatorTranslation<DataStorageConverterText> = {
  content: {
    title: "Calculadora de conversión de almacenamiento de datos",
    shortTitle: "Almacenamiento de datos",
    summary: "Convierte entre bits, bytes, kilobytes, megabytes, gigabytes y terabytes, con prefijos decimales (GB) y binarios (GiB).",
    metaTitle: "Conversión de almacenamiento de datos – GB, GiB, MB, TB y bits",
    metaDescription:
      "Convierte bits y bytes entre unidades decimales (kB, MB, GB, TB, PB) y binarias (KiB, MiB, GiB, TiB, PiB), además de kilobits, megabits y gigabits.",
    keywords: [
      "conversor de almacenamiento",
      "conversor de unidades de datos",
      "GB a GiB",
      "MB a MiB",
      "bytes a bits",
      "gigabyte",
      "gibibyte",
      "terabyte",
      "prefijos binarios",
    ],
    intro: [
      "Los tamaños de almacenamiento se escriben con dos familias de prefijos que se parecen pero son distintas. Los prefijos decimales (kB, MB, GB, TB) avanzan de 1000 en 1000, como los prefijos del SI en cualquier otro ámbito. Los prefijos binarios (KiB, MiB, GiB, TiB) avanzan de 1024 en 1024 y los normalizó la IEC para poder distinguir ambas familias.",
      "Esto explica el conocido misterio de un disco nuevo de 500 GB que el ordenador muestra como unos 465 «GB»: el fabricante del disco cuenta en potencias de 1000, mientras que el sistema operativo cuenta en potencias de 1024 y etiqueta el resultado como GiB, o a veces como GB.",
      "Introduce un tamaño en cualquier unidad para verlo en bits, en bytes, en ambas familias de prefijos y en los kilobits, megabits y gigabits que se usan para las velocidades de red.",
    ],
    howToUse: [
      "Introduce la cantidad de datos.",
      "Elige la unidad en la que está y la unidad que quieres.",
      "Consulta el resultado o usa la tabla para ver el valor en todas las unidades.",
    ],
    formulas: [
      {
        title: "Conversión a través del byte",
        expression: "resultado = valor × (bytes por unidad de origen) ÷ (bytes por unidad de destino)",
        explanation: "Cada unidad equivale a un número fijo de bytes; un byte son 8 bits.",
      },
      {
        title: "Prefijos decimales (SI)",
        expression: "1 kB = 10³ B\n1 MB = 10⁶ B\n1 GB = 10⁹ B\n1 TB = 10¹² B\n1 PB = 10¹⁵ B",
        explanation: "Los kilobits, megabits y gigabits siguen las mismas potencias de diez, contadas en bits: 1 Mbit = 10⁶ bits = 125.000 B.",
      },
      {
        title: "Prefijos binarios (IEC)",
        expression: "1 KiB = 2¹⁰ B = 1024 B\n1 MiB = 2²⁰ B = 1.048.576 B\n1 GiB = 2³⁰ B\n1 TiB = 2⁴⁰ B\n1 PiB = 2⁵⁰ B",
        explanation: "Cada paso multiplica por 1024, así que la diferencia entre ambas familias aumenta: un GiB es aproximadamente un 7,4 % mayor que un GB, y un TiB, alrededor de un 10 % mayor que un TB.",
      },
    ],
    examples: [
      {
        title: "Un disco de 500 GB en GiB",
        steps: [
          "500 GB = 500 × 10⁹ B = 500.000.000.000 B",
          "500.000.000.000 ÷ 2³⁰ = 500.000.000.000 ÷ 1.073.741.824 ≈ 465,66 GiB",
        ],
      },
      {
        title: "64 GiB de memoria en GB",
        steps: ["64 × 1.073.741.824 B = 68.719.476.736 B", "68.719.476.736 ÷ 10⁹ ≈ 68,72 GB"],
      },
      {
        title: "100 megabits en megabytes",
        steps: ["100 Mbit = 100 × 10⁶ bits = 100.000.000 bits", "100.000.000 ÷ 8 = 12.500.000 B = 12,5 MB"],
      },
    ],
    assumptions: [
      "kB, MB, GB, TB y PB son decimales (potencias de 1000), como en el SI; KiB, MiB, GiB, TiB y PiB son binarios (potencias de 1024), según los define la IEC.",
      "Algunos programas y documentos antiguos escriben «KB» o «MB» para referirse a unidades binarias. Si una cifra procede de una fuente así, convierte desde la unidad binaria correspondiente.",
      "Se considera que un byte tiene 8 bits. Los resultados se muestran con 10 cifras significativas.",
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre un GB y un GiB?",
        answer: "Un gigabyte (GB) son 1.000.000.000 de bytes; un gibibyte (GiB) son 1.073.741.824 bytes (2³⁰). La unidad binaria es aproximadamente un 7,4 % mayor.",
      },
      {
        question: "¿Por qué mi disco nuevo muestra menos espacio del que indica la caja?",
        answer: "Los fabricantes de discos indican la capacidad en unidades decimales, mientras que muchos sistemas operativos dividen entre potencias de 1024. Un disco de 1 TB contiene 10¹² bytes, que son unos 931 GiB. El formateo también ocupa algo de espacio.",
      },
      {
        question: "¿Cómo convierto megabits a megabytes?",
        answer: "Divide entre 8, porque un byte tiene 8 bits. Un archivo de 200 Mbit ocupa 25 MB.",
      },
    ],
    sourcesUsedFor: [
      "Los prefijos binarios de la IEC kibi, mebi, gibi, tebi y pebi (potencias de 2¹⁰) y su diferencia con los prefijos decimales del SI.",
    ],
  },
  text: {
    value: "Valor",
    from: "De",
    to: "A",
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
    primary: "{value} {symbol} en {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} en todas las unidades de datos",
    tableUnit: "Unidad",
    tableValue: "Valor",
    note: "Los resultados se muestran con 10 cifras significativas. kB, MB, GB… son potencias de 1000; KiB, MiB, GiB… son potencias de 1024.",
  },
};

export default es;
