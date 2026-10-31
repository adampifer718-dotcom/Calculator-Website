import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FeedConversionRatioText } from "../text/en";

const pt: CalculatorTranslation<FeedConversionRatioText> = {
  content: {
    title: "Calculadora do índice de conversão alimentar",
    shortTitle: "Índice de conversão alimentar",
    summary:
      "Calcule o índice de conversão alimentar (ICA) de gado, aves ou peixes a partir da ração consumida e do peso ganho, com o ICA ajustado à mortalidade e o custo de ração por unidade de ganho.",
    metaTitle: "Índice de conversão alimentar – Calculadora de ICA (FCR)",
    metaDescription:
      "Calcule o ICA como ração consumida ÷ ganho de peso vivo, com ICA ajustado à mortalidade, eficiência alimentar, ganho por cabeça e custo de ração por kg ou lb ganho.",
    keywords: ["índice de conversão alimentar", "ica", "fcr", "eficiência alimentar", "pecuária", "avicultura", "aquacultura", "custo da ração"],
    intro: [
      "O índice de conversão alimentar (ICA) indica quanta ração os animais precisam para ganhar uma unidade de peso vivo. Um ICA de 2 significa 2 kg de ração por cada quilograma ganho, ou 2 lb por libra: a unidade anula-se desde que a ração e o peso usem a mesma. Um ICA mais baixo significa que a ração é transformada em crescimento de forma mais eficiente.",
      "Introduza a ração consumida durante um período e o peso vivo total do grupo no início e no fim. Se alguns animais morreram ou foram retirados, junte o peso deles para obter o ICA ajustado à mortalidade, que não conta a ração que consumiram como desperdiçada. Com o preço da ração e o número de animais obtém também o custo de ração por unidade de ganho e o ganho por animal.",
    ],
    howToUse: [
      "Escolha quilogramas ou libras e use essa unidade para a ração e para todos os pesos.",
      "Introduza a ração total consumida no período e o peso vivo conjunto do grupo no início e no fim.",
      "Se houve animais que morreram ou foram retirados durante o período, introduza o seu peso conjunto para obter o ICA ajustado à mortalidade.",
      "Se quiser, introduza o preço da ração por kg ou lb e o número de animais.",
    ],
    formulas: [
      {
        title: "Ganho de peso vivo",
        expression: "ganho = peso final − peso inicial + peso dos animais retirados",
        explanation: "Deixe o peso retirado em branco para obter o ganho simples dos animais ainda presentes.",
      },
      {
        title: "Índice de conversão alimentar",
        expression: "ICA = ração consumida ÷ ganho de peso vivo",
        explanation: "A ração e os pesos usam a mesma unidade, pelo que o índice não tem unidade.",
      },
      {
        title: "Eficiência alimentar",
        expression: "eficiência alimentar = ganho ÷ ração × 100 %",
        explanation: "O inverso do ICA, apresentado em percentagem.",
      },
      {
        title: "Custo de ração por unidade de ganho",
        expression: "custo por kg (ou lb) de ganho = ração × preço ÷ ganho = ICA × preço",
        explanation: "O custo de ração de cada unidade de peso vivo produzida.",
      },
    ],
    examples: [
      {
        title: "Um grupo de porcos durante um período de crescimento",
        steps: ["Ganho: 2850 − 900 = 1950 kg.", "ICA: 4200 ÷ 1950 ≈ 2,15.", "Eficiência alimentar: 1950 ÷ 4200 ≈ 46,4 %."],
      },
      {
        title: "Um bando de frangos com perdas e ração com preço",
        steps: [
          "Ganho incluindo as aves retiradas: 4510 − 1080 + 160 = 3590 kg.",
          "ICA ajustado à mortalidade: 5300 ÷ 3590 ≈ 1,48 (sem as aves retiradas: 5300 ÷ 3430 ≈ 1,55).",
          "Custo de ração por kg de ganho: 5300 × 0,21 US$ ÷ 3590 ≈ 0,31 US$.",
        ],
      },
      {
        title: "Borregos pesados em libras",
        steps: ["Ganho: 612 − 410 = 202 lb.", "ICA: 380 ÷ 202 ≈ 1,88 lb de ração por lb de ganho."],
      },
    ],
    assumptions: [
      "A ração e todos os pesos estão na mesma unidade, e o valor da ração é o que os animais efetivamente comeram (ou a ração fornecida menos as sobras ou o desperdício, se for assim que regista).",
      "Os pesos são pesos vivos totais do grupo. Pesos limpos ou de carcaça dão um índice diferente.",
      "O ICA ajustado à mortalidade soma ao ganho o peso dos animais que morreram ou foram retirados. Alguns produtores registam isto de outra forma, por exemplo com o peso no início ou excluindo os animais refugados, por isso verifique o método antes de comparar valores.",
      "Não são indicados valores de referência, porque os ICA típicos variam muito com a espécie, a idade, a raça, a alimentação e o método de registo.",
    ],
    faqs: [
      {
        question: "É melhor um ICA mais baixo ou mais alto?",
        answer:
          "Mais baixo. Um ICA de 1,5 significa 1,5 unidades de ração por unidade de ganho, enquanto 2,0 significa 2 unidades. A eficiência alimentar, o inverso, funciona ao contrário: quanto mais alta, melhor.",
      },
      {
        question: "Porque se soma o peso dos animais que morreram?",
        answer:
          "Esses animais comeram ração e cresceram antes de morrerem ou serem retirados. Deixar o peso deles de fora faz a ração parecer menos eficiente do que foi, misturando as perdas por mortalidade no ICA. Mostrar os dois valores mantém os dois efeitos separados.",
      },
      {
        question: "A unidade faz diferença?",
        answer:
          "Não, desde que a ração e os pesos usem a mesma. O ICA é uma razão, pelo que 2,15 kg/kg é o mesmo que 2,15 lb/lb. Só o custo de ração por unidade de ganho depende da unidade, porque o preço é por kg ou por lb.",
      },
    ],
    sourcesUsedFor: [
      "ICA = ração total fornecida ÷ peso ganho, na mesma unidade, em que valores mais baixos significam um crescimento mais eficiente.",
      "A conversão alimentar como o peso de ração necessário para uma unidade de ganho, e o custo de ração por unidade de ganho.",
    ],
  },
  text: {
    unit: "Unidade de massa",
    units: { kg: "Quilogramas (kg)", lb: "Libras (lb)" },
    feed: "Ração consumida",
    feedHelp: "Ração total comida pelo grupo durante o período, na unidade escolhida.",
    initial: "Peso vivo total inicial",
    initialHelp: "Peso conjunto dos animais no início do período.",
    final: "Peso vivo total final",
    finalHelp: "Peso conjunto dos animais ainda presentes no fim do período.",
    removed: "Peso dos animais que morreram ou foram retirados",
    removedHelp: "Opcional. O peso que tinham quando morreram ou saíram do grupo. Ao somá-lo obtém o ICA ajustado à mortalidade.",
    price: "Preço da ração por unidade de massa",
    priceHelp: "Opcional. O preço de 1 kg ou 1 lb de ração, na unidade de massa escolhida acima. Usado para o custo de ração por unidade de ganho.",
    head: "Número de animais",
    headHelp: "Opcional. Usado para o ganho por cabeça.",
    errors: {
      noGain: "O ganho de peso vivo é zero ou negativo, pelo que não é possível calcular o índice de conversão alimentar. Verifique os pesos.",
    },
    result: "Índice de conversão alimentar (ICA)",
    resultAdjusted: "Índice de conversão alimentar (ICA), ajustado à mortalidade",
    caption: "Ração consumida ÷ ganho de peso vivo",
    unadjusted: "ICA sem os animais retirados",
    unadjustedNone: "Sem significado (sem ganho nos animais restantes)",
    efficiency: "Eficiência alimentar (ganho ÷ ração)",
    gain: "Ganho total de peso vivo",
    gainUnadjusted: "Ganho apenas dos animais restantes",
    gainPerHead: "Ganho por cabeça",
    feedCost: "Custo total da ração",
    costPerGain: "Custo de ração por {unit} de ganho",
    notes: {
      meaning: "Um ICA de {fcr} significa {fcr} {unit} de ração por {unit} de ganho de peso vivo. Quanto mais baixo, mais eficiente.",
      adjusted:
        "O peso dos animais retirados é somado ao ganho, pelo que a ração que consumiram não é contada como desperdiçada. O valor não ajustado é apresentado para comparação.",
      general:
        "Os valores típicos variam muito com a espécie, a idade, a raça, a alimentação e a forma como a ração e os pesos são medidos, por isso compare ICA apenas quando forem medidos da mesma maneira.",
    },
  },
};

export default pt;
