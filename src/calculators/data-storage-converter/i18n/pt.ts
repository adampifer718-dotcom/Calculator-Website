import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DataStorageConverterText } from "../text/en";

const pt: CalculatorTranslation<DataStorageConverterText> = {
  content: {
    title: "Conversor de armazenamento de dados",
    shortTitle: "Armazenamento de dados",
    summary: "Converta entre bits, bytes, kilobytes, megabytes, gigabytes e terabytes, com prefixos decimais (GB) e binários (GiB).",
    metaTitle: "Armazenamento de dados – GB, GiB, MB, TB e bits",
    metaDescription:
      "Converta bits e bytes entre unidades decimais (kB, MB, GB, TB, PB) e binárias (KiB, MiB, GiB, TiB, PiB), bem como kilobits, megabits e gigabits.",
    keywords: [
      "conversor de armazenamento",
      "conversor de unidades de dados",
      "GB para GiB",
      "MB para MiB",
      "bytes para bits",
      "gigabyte",
      "gibibyte",
      "prefixos binários",
    ],
    intro: [
      "Os tamanhos de armazenamento são escritos com duas famílias de prefixos que se parecem, mas são diferentes. Os prefixos decimais (kB, MB, GB, TB) avançam de 1000 em 1000, como os prefixos SI em qualquer outro domínio. Os prefixos binários (KiB, MiB, GiB, TiB) avançam de 1024 em 1024 e foram normalizados pela IEC para que as duas famílias se possam distinguir.",
      "Isto explica o conhecido mistério de um disco novo de 500 GB que o computador mostra como cerca de 465 «GB»: o fabricante do disco conta em potências de 1000, enquanto o sistema operativo conta em potências de 1024 e rotula o resultado como GiB, ou por vezes como GB.",
      "Introduza um tamanho em qualquer unidade para o ver em bits, em bytes, nas duas famílias de prefixos e nos kilobits, megabits e gigabits usados para as velocidades de rede.",
    ],
    howToUse: [
      "Introduza a quantidade de dados.",
      "Escolha a unidade em que está e a unidade que pretende.",
      "Consulte o resultado ou use a tabela para ver o valor em todas as unidades.",
    ],
    formulas: [
      {
        title: "Conversão através do byte",
        expression: "resultado = valor × (bytes por unidade de origem) ÷ (bytes por unidade de destino)",
        explanation: "Cada unidade equivale a um número fixo de bytes; um byte são 8 bits.",
      },
      {
        title: "Prefixos decimais (SI)",
        expression: "1 kB = 10³ B\n1 MB = 10⁶ B\n1 GB = 10⁹ B\n1 TB = 10¹² B\n1 PB = 10¹⁵ B",
        explanation: "Os kilobits, megabits e gigabits seguem as mesmas potências de dez, contadas em bits: 1 Mbit = 10⁶ bits = 125 000 B.",
      },
      {
        title: "Prefixos binários (IEC)",
        expression: "1 KiB = 2¹⁰ B = 1024 B\n1 MiB = 2²⁰ B = 1 048 576 B\n1 GiB = 2³⁰ B\n1 TiB = 2⁴⁰ B\n1 PiB = 2⁵⁰ B",
        explanation: "Cada passo multiplica por 1024, pelo que a diferença entre as duas famílias aumenta: um GiB é cerca de 7,4 % maior do que um GB, e um TiB cerca de 10 % maior do que um TB.",
      },
    ],
    examples: [
      {
        title: "Um disco de 500 GB em GiB",
        steps: [
          "500 GB = 500 × 10⁹ B = 500 000 000 000 B",
          "500 000 000 000 ÷ 2³⁰ = 500 000 000 000 ÷ 1 073 741 824 ≈ 465,66 GiB",
        ],
      },
      {
        title: "64 GiB de memória em GB",
        steps: ["64 × 1 073 741 824 B = 68 719 476 736 B", "68 719 476 736 ÷ 10⁹ ≈ 68,72 GB"],
      },
      {
        title: "100 megabits em megabytes",
        steps: ["100 Mbit = 100 × 10⁶ bits = 100 000 000 bits", "100 000 000 ÷ 8 = 12 500 000 B = 12,5 MB"],
      },
    ],
    assumptions: [
      "kB, MB, GB, TB e PB são decimais (potências de 1000), como no SI; KiB, MiB, GiB, TiB e PiB são binários (potências de 1024), tal como definidos pela IEC.",
      "Alguns programas e documentos antigos escrevem «KB» ou «MB» para se referirem a unidades binárias. Se um valor vier de uma fonte desse tipo, converta a partir da unidade binária correspondente.",
      "Considera-se que um byte tem 8 bits. Os resultados são apresentados com 10 algarismos significativos.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre um GB e um GiB?",
        answer: "Um gigabyte (GB) são 1 000 000 000 bytes; um gibibyte (GiB) são 1 073 741 824 bytes (2³⁰). A unidade binária é cerca de 7,4 % maior.",
      },
      {
        question: "Porque é que o meu disco novo mostra menos espaço do que o indicado na caixa?",
        answer: "Os fabricantes de discos indicam a capacidade em unidades decimais, enquanto muitos sistemas operativos dividem por potências de 1024. Um disco de 1 TB contém 10¹² bytes, que são cerca de 931 GiB. A formatação também ocupa algum espaço.",
      },
      {
        question: "Como converto megabits em megabytes?",
        answer: "Divida por 8, porque um byte tem 8 bits. Um ficheiro de 200 Mbit ocupa 25 MB.",
      },
    ],
    sourcesUsedFor: [
      "Os prefixos binários da IEC kibi, mebi, gibi, tebi e pebi (potências de 2¹⁰) e a sua diferença em relação aos prefixos decimais do SI.",
    ],
  },
  text: {
    value: "Valor",
    from: "De",
    to: "Para",
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
    primary: "{value} {symbol} em {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} em todas as unidades de dados",
    tableUnit: "Unidade",
    tableValue: "Valor",
    note: "Os resultados são apresentados com 10 algarismos significativos. kB, MB, GB… são potências de 1000; KiB, MiB, GiB… são potências de 1024.",
  },
};

export default pt;
