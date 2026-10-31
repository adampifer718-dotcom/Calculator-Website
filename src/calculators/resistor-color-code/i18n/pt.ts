import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ResistorColorCodeText } from "../text/en";

const pt: CalculatorTranslation<ResistorColorCodeText> = {
  content: {
    title: "Calculadora do código de cores de resistências",
    shortTitle: "Código de cores de resistências",
    summary:
      "Leia o valor, a tolerância e o coeficiente de temperatura de uma resistência de 4, 5 ou 6 bandas a partir das cores, ou encontre as bandas de cor para uma resistência.",
    metaTitle: "Código de cores de resistências – 4, 5 e 6 bandas",
    metaDescription:
      "Descodifique as cores de resistências de 4, 5 e 6 bandas em ohms, tolerância e coeficiente de temperatura, ou encontre as bandas para um valor como 4,7k.",
    keywords: ["código de cores de resistências", "cores das resistências", "resistência de 4 bandas", "resistência de 5 bandas", "resistência de 6 bandas", "iec 60062", "tolerância da resistência"],
    intro: [
      "As pequenas resistências de montagem convencional são demasiado pequenas para ter o valor impresso, por isso têm bandas coloridas. A norma internacional IEC 60062 atribui a cada cor um algarismo de 0 (preto) a 9 (branco); as bandas a seguir aos algarismos indicam um multiplicador em potência de dez, a tolerância e, nas peças de precisão, o coeficiente de temperatura.",
      "Escolha 4, 5 ou 6 bandas e selecione as cores para ler a resistência, o seu intervalo de tolerância e o coeficiente de temperatura. Ou faça o inverso: escreva um valor como 4,7k e obtenha as cores para uma resistência de 4 ou 5 bandas.",
    ],
    howToUse: [
      "Para ler uma resistência, escolha «Das cores para o valor» e o número de bandas. Segure a resistência com a banda de tolerância (muitas vezes dourada, prateada ou afastada das outras) à direita.",
      "Selecione as cores da esquerda para a direita: as bandas dos algarismos, o multiplicador, a tolerância e, nas peças de 6 bandas, o coeficiente de temperatura. Cada lista mostra apenas as cores válidas para essa banda.",
      "Para encontrar as cores de um valor, escolha «Do valor para as cores», escreva a resistência (por exemplo 470, 4,7k, 4k7 ou 2,2M) e escolha 4 ou 5 bandas e uma tolerância.",
    ],
    formulas: [
      {
        title: "Resistência",
        expression: "R = (algarismos significativos) × 10ⁿ Ω",
        explanation:
          "Duas bandas de algarismos numa resistência de 4 bandas, três nas de 5 e 6 bandas. A banda do multiplicador define n, de −2 (prateado) e −1 (dourado) até 9 (branco).",
      },
      {
        title: "Intervalo de tolerância",
        expression: "R_mín = R × (1 − tol);  R_máx = R × (1 + tol)",
        explanation: "Por exemplo, ±5 % para o dourado. Sem banda de tolerância, a tolerância é de ±20 %.",
      },
      {
        title: "Coeficiente de temperatura",
        expression: "ΔR = R × TCR × ΔT",
        explanation: "O TCR é expresso em partes por milhão por kelvin: 100 ppm/K significa que a resistência varia 0,1 % para uma variação de 10 K.",
      },
    ],
    examples: [
      {
        title: "Amarelo, violeta, vermelho, dourado (4 bandas)",
        steps: ["Algarismos: amarelo 4, violeta 7, ou seja, 47", "Multiplicador vermelho: × 100, ou seja, 4700 Ω = 4,7 kΩ", "Tolerância dourada ±5 %: de 4465 Ω a 4935 Ω"],
      },
      {
        title: "Castanho, preto, preto, vermelho, castanho, vermelho (6 bandas)",
        steps: [
          "Algarismos: 1, 0, 0, ou seja, 100",
          "Multiplicador vermelho: × 100, ou seja, 10 000 Ω = 10 kΩ",
          "Tolerância castanha ±1 %: de 9,9 kΩ a 10,1 kΩ",
          "Sexta banda vermelha: 50 ppm/K, cerca de 5 Ω a mais ou a menos por cada 10 K",
        ],
      },
      {
        title: "Cores para 4k7 numa resistência de 5 bandas e 1 %",
        steps: ["4k7 = 4700 Ω = 470 × 10¹", "Algarismos 4, 7, 0: amarelo, violeta, preto", "Multiplicador 10¹: castanho; tolerância 1 %: castanho"],
      },
    ],
    assumptions: [
      "O significado das cores segue a IEC 60062 para os algarismos, os multiplicadores, as cores de tolerância habituais e a banda do coeficiente de temperatura. Algumas cores raramente usadas e variantes antigas ou próprias de fabricantes não estão incluídas.",
      "A conversão de valor para cores só aceita valores que o número escolhido de bandas de algarismos consegue representar exatamente, a partir de 0,1 Ω. Não verifica se o valor pertence a uma série E normalizada.",
      "As cores são difíceis de distinguir com alguma iluminação e em peças antigas ou danificadas pelo calor. Um multímetro dá o valor definitivo.",
    ],
    faqs: [
      {
        question: "Por que extremidade começo a ler?",
        answer:
          "Comece pela extremidade onde as bandas estão mais perto da borda e mantenha à direita a banda de tolerância, que é muitas vezes dourada ou prateada, afastada das outras ou mais larga. O dourado e o prateado nunca iniciam o código, por isso, se um deles estiver numa extremidade, leia a partir da outra.",
      },
      {
        question: "Qual é a diferença entre resistências de 4, 5 e 6 bandas?",
        answer:
          "Uma resistência de 4 bandas tem dois algarismos significativos, para valores como 4,7 kΩ. Uma de 5 bandas tem três, para valores de precisão como 4,99 kΩ, e normalmente uma tolerância mais apertada. Uma de 6 bandas acrescenta ao código de 5 bandas uma banda de coeficiente de temperatura.",
      },
      {
        question: "Porque não consigo obter as cores de 4,99k com 4 bandas?",
        answer:
          "4,99k tem três algarismos significativos, mas um código de 4 bandas só tem duas bandas de algarismos. Escolha 5 bandas, ou arredonde para o valor mais próximo que dois algarismos consigam representar.",
      },
    ],
    sourcesUsedFor: [
      "Que as cores de preto a branco marcam os algarismos de 0 a 9 e, com o dourado e o prateado, as bandas do multiplicador, da tolerância e do coeficiente de temperatura.",
      "As cores de tolerância: castanho ±1 %, vermelho ±2 %, verde ±0,5 %, azul ±0,25 %, violeta ±0,1 %, dourado ±5 % e prateado ±10 %.",
      "Que uma resistência de 4 bandas sem banda de tolerância tem ±20 %.",
      "As cores do coeficiente de temperatura da sexta banda em ppm/K.",
    ],
  },
  text: {
    mode: "O que pretende fazer?",
    modes: { decode: "Das cores para o valor", encode: "Do valor para as cores" },
    bands: "Número de bandas",
    bandCounts: { "4": "4 bandas", "5": "5 bandas", "6": "6 bandas" },
    encodeBandCounts: { "4": "4 bandas (2 algarismos)", "5": "5 bandas (3 algarismos)" },
    band1: "Banda 1: primeiro algarismo",
    band2: "Banda 2: segundo algarismo",
    band3: "Banda 3: terceiro algarismo",
    multiplier: "Banda do multiplicador",
    tolerance: "Banda de tolerância",
    tcr: "Banda do coeficiente de temperatura (6.ª banda)",
    value: "Resistência",
    valueHelp:
      "Por exemplo 470, 4,7k, 4k7, 2,2M ou 0,47. Use k para quilo, M para mega e G para giga; R, uma vírgula ou um ponto marcam a posição decimal.",
    colors: {
      black: "Preto",
      brown: "Castanho",
      red: "Vermelho",
      orange: "Laranja",
      yellow: "Amarelo",
      green: "Verde",
      blue: "Azul",
      violet: "Violeta",
      grey: "Cinzento",
      white: "Branco",
      gold: "Dourado",
      silver: "Prateado",
      none: "Nenhuma (sem banda)",
    },
    colorOption: "{color} – {meaning}",
    errors: {
      invalidValue: "Introduza uma resistência como 470, 4,7k, 4k7 ou 2,2M.",
      ambiguousM: "Use um M maiúsculo para megaohms. Para valores abaixo de 1 Ω, use um decimal como 0,47 ou R47.",
      zero: "A resistência tem de ser superior a 0 Ω.",
      tooManyDigits:
        "{value} precisa de {digits} algarismos significativos, mas uma resistência de {bands} bandas só mostra {max}. Escolha 5 bandas ou arredonde o valor.",
      tooSmall: "Este valor é demasiado pequeno para o código de cores. O multiplicador mais pequeno é o prateado (× 0,01).",
      tooLarge: "Este valor é demasiado grande para o código de cores. O multiplicador maior é o branco (× 1 000 000 000).",
      noneNeedsFour: "Só as resistências de 4 bandas podem não ter banda de tolerância (±20 %). Escolha uma cor de tolerância.",
    },
    valueText: "{value} {prefix}Ω",
    resistance: "Resistência",
    bandsResult: "Bandas de cor",
    captionDecode: "{bands}: {digits} × {multiplier}, tolerância ±{tolerance}.",
    captionEncode: "{value} como resistência de {bands} bandas com tolerância de ±{tolerance}.",
    bandSeparator: " – ",
    ohms: "Resistência em ohms",
    toleranceResult: "Tolerância",
    toleranceText: "±{value}",
    minimum: "Mínimo dentro da tolerância",
    maximum: "Máximo dentro da tolerância",
    tcrResult: "Coeficiente de temperatura",
    tcrText: "{value} ppm/K",
    tcrChange: "Variação com um aumento de temperatura de 10 K (10 °C)",
    significantDigits: "Algarismos significativos",
    multiplierResult: "Multiplicador",
    table: {
      caption: "Banda a banda",
      band: "Banda",
      color: "Cor",
      meaning: "Significado",
      bandLabel: "Banda {n}",
    },
    meanings: {
      digit: "Algarismo {n}",
      multiplier: "× {n}",
      tolerance: "Tolerância ±{n}",
      tcr: "{n} ppm/K",
    },
    notes: {
      reading:
        "Leia a partir da extremidade com as bandas agrupadas; a banda de tolerância costuma estar afastada e é muitas vezes mais larga. O dourado e o prateado nunca são a primeira banda.",
      noTolerance: "Sem banda de tolerância, a resistência tem ±20 %.",
      colors:
        "Algumas cores podem parecer iguais com certa iluminação, sobretudo vermelho, laranja e castanho, ou cinzento e branco. Em caso de dúvida, meça a resistência com um multímetro.",
      tcr: "O coeficiente de temperatura indica quanto a resistência varia com a temperatura: {value} significa uma variação de {percent} por cada 10 K.",
    },
  },
};

export default pt;
