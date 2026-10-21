import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DownloadTimeText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const pt: CalculatorTranslation<DownloadTimeText> = {
  content: {
    title: "Calculadora de tempo de transferência",
    shortTitle: "Tempo de transferência",
    summary: "Calcule quanto tempo demora a descarregar ou a carregar um ficheiro a partir do seu tamanho e da velocidade da ligação.",
    metaTitle: "Calculadora de tempo de transferência – Tamanho e velocidade",
    metaDescription:
      "Calcule o tempo de transferência a partir do tamanho em MB, GB, GiB ou TB e da velocidade em Mbit/s ou Gbit/s, com sobrecarga de protocolo opcional.",
    keywords: [
      "tempo de transferência",
      "tempo de descarga",
      "tempo de carregamento",
      "tamanho do ficheiro",
      "mbps",
      "velocidade da internet",
      "largura de banda",
      "quanto tempo demora a descarregar",
    ],
    intro: [
      "O tempo de transferência é a quantidade de dados a dividir pela velocidade a que são transmitidos. A armadilha está nas unidades: os tarifários de internet são vendidos em megabits por segundo, enquanto os ficheiros se medem em megabytes ou gigabytes, e um byte tem 8 bits.",
      "Introduza o tamanho do ficheiro e a velocidade da ligação nas unidades que tiver. A calculadora converte ambos os valores, tem em conta a sobrecarga de protocolo que indicar e mostra o tempo em dias, horas, minutos e segundos.",
    ],
    howToUse: [
      "Introduza o tamanho do ficheiro e escolha a unidade. Use GiB ou MiB se o tamanho vier de um sistema que conta em potências de 1024.",
      "Introduza a velocidade da ligação e a respetiva unidade. A maioria dos tarifários e dos testes de velocidade indica-a em Mbit/s.",
      "Se quiser, introduza uma percentagem de sobrecarga de protocolo para descontar a velocidade perdida na rede.",
      "Consulte o tempo estimado, o total em segundos e a velocidade efetiva.",
    ],
    formulas: [
      {
        title: "Tempo de transferência",
        expression: "tempo = (tamanho em bytes × 8) ÷ velocidade efetiva em bit/s",
        explanation: "Multiplicar por 8 converte os bytes em bits, para que ambos os lados usem a mesma unidade.",
      },
      {
        title: "Velocidade efetiva",
        expression: "velocidade efetiva = velocidade × (1 − sobrecarga ÷ 100)",
        explanation: "A sobrecarga é a parte da linha ocupada pelos cabeçalhos e pelo tráfego de controlo em vez dos dados do ficheiro.",
      },
      {
        title: "Prefixos",
        expression: "1 GB = 10⁹ bytes; 1 GiB = 2³⁰ = 1 073 741 824 bytes",
        explanation: "Os prefixos decimais avançam de 1000 em 1000; os binários, de 1024 em 1024.",
      },
    ],
    examples: [
      {
        title: "4,7 GB a 50 Mbit/s",
        steps: ["4,7 GB = 4,7 × 10⁹ × 8 = 37 600 Mbit", "37 600 ÷ 50 = 752 segundos", "752 s = 12 minutos e 32 segundos"],
      },
      {
        title: "2 GiB a 100 Mbit/s com 10 % de sobrecarga",
        steps: [
          "2 GiB = 2 × 1 073 741 824 × 8 ≈ 17 180 Mbit",
          "Velocidade efetiva = 100 × 0,9 = 90 Mbit/s",
          "17 180 ÷ 90 ≈ 190,89 s, cerca de 3 minutos e 11 segundos",
        ],
      },
      {
        title: "Cópia de segurança de 1,5 TB a 1 Gbit/s",
        steps: ["1,5 TB = 1,5 × 10¹² × 8 = 12 × 10¹² bits", "12 × 10¹² ÷ 10⁹ = 12 000 segundos", "12 000 s = 3 horas e 20 minutos"],
      },
    ],
    assumptions: [
      "A ligação mantém uma velocidade constante durante toda a transferência. As velocidades reais variam com o sinal Wi-Fi, o congestionamento da rede e os limites do servidor.",
      "A sobrecarga de protocolo é uma única percentagem escolhida por si; o valor predefinido de 0 % dá o tempo mínimo teórico.",
      "kbit/s, Mbit/s e Gbit/s usam potências de 1000. MB/s significa megabytes (8 000 000 bits) por segundo.",
      "Os tempos de 10 segundos ou mais são arredondados ao segundo mais próximo.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre Mbps e MB/s?",
        answer: "Mbps (Mbit/s) conta megabits; MB/s conta megabytes. Um byte tem 8 bits, pelo que um tarifário de 200 Mbit/s descarrega no máximo 25 MB por segundo.",
      },
      {
        question: "Porque é que o meu computador diz que um ficheiro é mais pequeno do que indica a etiqueta?",
        answer:
          "Muitos sistemas operativos dividem por 1024 em vez de 1000, mas continuam a escrever GB. Um disco de 500 GB guarda 500 × 10⁹ bytes, o que corresponde a cerca de 465,66 GiB.",
      },
      {
        question: "Quanta sobrecarga devo prever?",
        answer:
          "Numa ligação por cabo, entre 3 % e 10 % é uma margem razoável para os cabeçalhos dos pacotes e as confirmações de receção. Com uma rede Wi-Fi saturada ou em transferências de longa distância, pode perder-se mais.",
      },
    ],
    sourcesUsedFor: [
      "Os prefixos binários da IEC kibi, mebi, gibi e tebi (potências de 1024) e a forma como diferem dos prefixos decimais do SI.",
      "O facto de as velocidades de ligação serem indicadas em megabits por segundo (Mbps).",
    ],
  },
  text: {
    size: "Tamanho do ficheiro",
    sizeUnit: "Unidade de tamanho",
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
    speed: "Velocidade da ligação",
    speedUnit: "Unidade de velocidade",
    speedUnits: {
      kbps: "Kilobits por segundo (kbit/s)",
      Mbps: "Megabits por segundo (Mbit/s, Mbps)",
      Gbps: "Gigabits por segundo (Gbit/s)",
      MBps: "Megabytes por segundo (MB/s)",
    },
    overhead: "Sobrecarga de protocolo",
    overheadHelp:
      "Parte da velocidade perdida em cabeçalhos de pacotes, retransmissões e outro tráfego. Deixe em 0 para obter o tempo ideal; uma margem habitual é de 5 % a 10 %.",
    time: "Tempo de transferência",
    caption: "{size} a {speed}.",
    units: {
      days: forms("{n} dia", "{n} dias"),
      hours: forms("{n} hora", "{n} horas"),
      minutes: forms("{n} minuto", "{n} minutos"),
      seconds: forms("{n} segundo", "{n} segundos"),
    },
    secondsDecimal: "{n} segundos",
    separator: ", ",
    totalSeconds: "Tempo total em segundos",
    effectiveSpeed: "Velocidade efetiva",
    sizeInBits: "Tamanho do ficheiro em megabits",
    notes: {
      bits: "As velocidades de ligação costumam ser indicadas em bits por segundo e os tamanhos de ficheiro em bytes. Um byte tem 8 bits, pelo que 100 Mbit/s transferem no máximo 12,5 MB por segundo.",
      prefixes: "kB, MB, GB e TB usam potências de 1000; KiB, MiB, GiB e TiB usam potências de 1024. Os sistemas operativos rotulam muitas vezes os tamanhos binários com os símbolos decimais.",
      real: "As transferências reais são muitas vezes mais lentas do que a velocidade anunciada, devido ao Wi-Fi, ao congestionamento da rede e aos limites do próprio servidor.",
    },
  },
};

export default pt;
