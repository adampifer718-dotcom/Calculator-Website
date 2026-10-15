import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DownloadTimeText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const es: CalculatorTranslation<DownloadTimeText> = {
  content: {
    title: "Calculadora de tiempo de descarga",
    shortTitle: "Tiempo de descarga",
    summary: "Calcula cuánto tarda un archivo en descargarse o subirse a partir de su tamaño y la velocidad de tu conexión.",
    metaTitle: "Calculadora de tiempo de descarga – Tamaño y velocidad",
    metaDescription:
      "Calcula el tiempo de descarga o subida según el tamaño en MB, GB, GiB o TB y la velocidad en Mbit/s o Gbit/s, con sobrecarga de protocolo opcional.",
    keywords: [
      "tiempo de descarga",
      "tiempo de subida",
      "tiempo de transferencia",
      "tamaño de archivo",
      "mbps",
      "velocidad de internet",
      "ancho de banda",
      "cuánto tarda en descargarse",
    ],
    intro: [
      "El tiempo de descarga es la cantidad de datos dividida entre la velocidad a la que se transmiten. La trampa está en las unidades: las tarifas de internet se venden en megabits por segundo, mientras que los archivos se miden en megabytes o gigabytes, y un byte son 8 bits.",
      "Introduce el tamaño del archivo y la velocidad de la conexión en las unidades que tengas. La calculadora convierte ambos valores, tiene en cuenta la sobrecarga de protocolo que indiques y muestra el tiempo en días, horas, minutos y segundos.",
    ],
    howToUse: [
      "Introduce el tamaño del archivo y elige su unidad. Usa GiB o MiB si el tamaño procede de un sistema que cuenta en potencias de 1024.",
      "Introduce la velocidad de la conexión y su unidad. La mayoría de las tarifas y de los test de velocidad la indican en Mbit/s.",
      "Si quieres, introduce un porcentaje de sobrecarga de protocolo para descontar la velocidad que se pierde en la red.",
      "Consulta el tiempo estimado, el total en segundos y la velocidad efectiva.",
    ],
    formulas: [
      {
        title: "Tiempo de descarga",
        expression: "tiempo = (tamaño en bytes × 8) ÷ velocidad efectiva en bit/s",
        explanation: "Multiplicar por 8 convierte los bytes en bits para que ambos lados usen la misma unidad.",
      },
      {
        title: "Velocidad efectiva",
        expression: "velocidad efectiva = velocidad × (1 − sobrecarga ÷ 100)",
        explanation: "La sobrecarga es la parte de la línea que ocupan las cabeceras y el tráfico de control en lugar de los datos del archivo.",
      },
      {
        title: "Prefijos",
        expression: "1 GB = 10⁹ bytes; 1 GiB = 2³⁰ = 1.073.741.824 bytes",
        explanation: "Los prefijos decimales avanzan de 1000 en 1000; los binarios, de 1024 en 1024.",
      },
    ],
    examples: [
      {
        title: "4,7 GB a 50 Mbit/s",
        steps: ["4,7 GB = 4,7 × 10⁹ × 8 = 37.600 Mbit", "37.600 ÷ 50 = 752 segundos", "752 s = 12 minutos y 32 segundos"],
      },
      {
        title: "2 GiB a 100 Mbit/s con un 10 % de sobrecarga",
        steps: [
          "2 GiB = 2 × 1.073.741.824 × 8 ≈ 17.180 Mbit",
          "Velocidad efectiva = 100 × 0,9 = 90 Mbit/s",
          "17.180 ÷ 90 ≈ 190,89 s, unos 3 minutos y 11 segundos",
        ],
      },
      {
        title: "Copia de seguridad de 1,5 TB a 1 Gbit/s",
        steps: ["1,5 TB = 1,5 × 10¹² × 8 = 12 × 10¹² bits", "12 × 10¹² ÷ 10⁹ = 12.000 segundos", "12.000 s = 3 horas y 20 minutos"],
      },
    ],
    assumptions: [
      "La conexión mantiene una velocidad constante durante toda la transferencia. Las velocidades reales varían según la señal wifi, la congestión de la red y los límites del servidor.",
      "La sobrecarga de protocolo es un único porcentaje que eliges tú; el valor predeterminado del 0 % da el tiempo mínimo teórico.",
      "kbit/s, Mbit/s y Gbit/s usan potencias de 1000. MB/s significa megabytes (8.000.000 bits) por segundo.",
      "Los tiempos de 10 segundos o más se redondean al segundo más próximo.",
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre Mbps y MB/s?",
        answer: "Mbps (Mbit/s) cuenta megabits; MB/s cuenta megabytes. Un byte son 8 bits, así que una tarifa de 200 Mbit/s descarga como máximo 25 MB por segundo.",
      },
      {
        question: "¿Por qué mi ordenador dice que un archivo es más pequeño de lo que indica la etiqueta?",
        answer:
          "Muchos sistemas operativos dividen entre 1024 en lugar de 1000, pero siguen escribiendo GB. Un disco de 500 GB almacena 500 × 10⁹ bytes, que son unos 465,66 GiB.",
      },
      {
        question: "¿Cuánta sobrecarga debo prever?",
        answer:
          "En una conexión por cable, entre un 3 % y un 10 % es un margen razonable para las cabeceras de los paquetes y los acuses de recibo. Con una wifi saturada o en transferencias a larga distancia se puede perder más.",
      },
    ],
    sourcesUsedFor: [
      "Los prefijos binarios de la IEC kibi, mebi, gibi y tebi (potencias de 1024) y en qué se diferencian de los prefijos decimales del SI.",
      "Que las velocidades de conexión se indican en megabits por segundo (Mbps).",
    ],
  },
  text: {
    size: "Tamaño del archivo",
    sizeUnit: "Unidad de tamaño",
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
    speed: "Velocidad de la conexión",
    speedUnit: "Unidad de velocidad",
    speedUnits: {
      kbps: "Kilobits por segundo (kbit/s)",
      Mbps: "Megabits por segundo (Mbit/s, Mbps)",
      Gbps: "Gigabits por segundo (Gbit/s)",
      MBps: "Megabytes por segundo (MB/s)",
    },
    overhead: "Sobrecarga de protocolo",
    overheadHelp:
      "Parte de la velocidad que se pierde en cabeceras de paquetes, retransmisiones y otro tráfico. Déjalo en 0 para el tiempo ideal; un margen habitual es del 5 % al 10 %.",
    time: "Tiempo de descarga",
    caption: "{size} a {speed}.",
    units: {
      days: forms("{n} día", "{n} días"),
      hours: forms("{n} hora", "{n} horas"),
      minutes: forms("{n} minuto", "{n} minutos"),
      seconds: forms("{n} segundo", "{n} segundos"),
    },
    secondsDecimal: "{n} segundos",
    separator: ", ",
    totalSeconds: "Tiempo total en segundos",
    effectiveSpeed: "Velocidad efectiva",
    sizeInBits: "Tamaño del archivo en megabits",
    notes: {
      bits: "Las velocidades de conexión suelen indicarse en bits por segundo y los tamaños de archivo, en bytes. Un byte son 8 bits, así que 100 Mbit/s transfieren como máximo 12,5 MB por segundo.",
      prefixes: "kB, MB, GB y TB usan potencias de 1000; KiB, MiB, GiB y TiB usan potencias de 1024. Los sistemas operativos suelen etiquetar los tamaños binarios con los símbolos decimales.",
      real: "Las descargas reales suelen ser más lentas que la velocidad anunciada por la wifi, la congestión de la red y los límites del propio servidor.",
    },
  },
};

export default es;
