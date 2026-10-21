import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SpeedConverterText } from "../text/en";

const pt: CalculatorTranslation<SpeedConverterText> = {
  content: {
    title: "Conversor de velocidade",
    shortTitle: "Velocidade",
    summary: "Converta uma velocidade entre metros por segundo, quilómetros por hora, milhas por hora, pés por segundo, nós e centímetros por segundo.",
    metaTitle: "Conversor de velocidade – km/h, mph, m/s, ft/s e nós",
    metaDescription:
      "Converta velocidades entre km/h, mph, m/s, ft/s, nós e cm/s com fatores exatos e veja o seu valor em todas as unidades de uma só vez numa tabela.",
    keywords: ["conversor de velocidade", "km/h para mph", "mph para km/h", "m/s para km/h", "nós para km/h", "pés por segundo", "unidades de velocidade"],
    intro: [
      "As velocidades aparecem em muitas unidades: os sinais de trânsito usam km/h ou mph, os problemas de física usam m/s, os pilotos e os navegadores usam nós e o trabalho de laboratório pode usar cm/s. Este conversor passa um valor de uma destas unidades para outra e apresenta-o nas seis ao mesmo tempo.",
      "Cada unidade corresponde a um número fixo de metros por segundo, pelo que a conversão é uma simples multiplicação e divisão. Todos os fatores são exatos; por exemplo, uma milha por hora é exatamente 0,44704 m/s, porque uma milha tem exatamente 1609,344 m.",
    ],
    howToUse: [
      "Escreva a velocidade que pretende converter.",
      "Escolha a respetiva unidade em De e a unidade pretendida em Para.",
      "Consulte a velocidade convertida ou procure as outras unidades na tabela.",
    ],
    formulas: [
      {
        title: "Conversão através de metros por segundo",
        expression: "resultado = valor × (m/s por unidade de origem) ÷ (m/s por unidade de destino)",
        explanation: "Cada unidade é primeiro convertida em metros por segundo e depois na unidade de destino.",
      },
      {
        title: "Fatores exatos",
        expression: "1 km/h = 1/3,6 m/s ≈ 0,2778 m/s\n1 mph = 0,44704 m/s\n1 ft/s = 0,3048 m/s\n1 kn = 1852/3600 m/s ≈ 0,5144 m/s\n1 cm/s = 0,01 m/s",
        explanation: "Resultam de 1 km = 1000 m, 1 mi = 1609,344 m, 1 ft = 0,3048 m, 1 milha náutica = 1852 m e 1 h = 3600 s.",
      },
    ],
    examples: [
      {
        title: "Velocidade em autoestrada de 100 km/h em mph",
        steps: ["100 km/h = 100 ÷ 3,6 ≈ 27,778 m/s", "27,778 ÷ 0,44704 ≈ 62,137 mph"],
      },
      {
        title: "Um barco a 30 nós em km/h",
        steps: ["1 kn = 1,852 km/h", "30 × 1,852 = 55,56 km/h"],
      },
      {
        title: "25 mph em pés por segundo",
        steps: ["25 × 0,44704 = 11,176 m/s", "11,176 ÷ 0,3048 ≈ 36,667 ft/s"],
      },
    ],
    assumptions: [
      "As milhas e os pés são as unidades internacionais (1 ft = 0,3048 m). O nó usa a milha náutica internacional de 1852 m.",
      "O ritmo de corrida ou de caminhada, como minutos por quilómetro, não está incluído, porque é o inverso da velocidade e não um múltiplo dela. Para o ritmo, use a calculadora de ritmo de corrida.",
      "Os resultados são apresentados com 10 algarismos significativos.",
    ],
    faqs: [
      {
        question: "Como converto km/h em m/s?",
        answer: "Divida por 3,6. Por exemplo, 90 km/h ÷ 3,6 = 25 m/s. Para passar de m/s para km/h, multiplique por 3,6.",
      },
      {
        question: "Um nó é mais rápido do que uma milha por hora?",
        answer:
          "Sim. Um nó é uma milha náutica por hora, e uma milha náutica (1852 m) é mais longa do que uma milha terrestre (1609,344 m), pelo que 1 nó equivale a cerca de 1,151 mph.",
      },
      {
        question: "Porque é que o ritmo não está na lista?",
        answer:
          "O ritmo é tempo por distância, pelo que duplicar a velocidade reduz o ritmo para metade. Essa relação inversa não pode ser escrita como um único fator de conversão, por isso o ritmo é tratado numa calculadora à parte.",
      },
    ],
    sourcesUsedFor: [
      "Fatores de conversão da milha por hora, do pé por segundo e do nó em metros por segundo.",
      "A milha náutica internacional de 1852 m, que define o nó como 1852 m por hora.",
    ],
  },
  text: {
    value: "Valor",
    from: "De",
    to: "Para",
    unitNames: {
      ms: "Metros por segundo",
      kmh: "Quilómetros por hora",
      mph: "Milhas por hora",
      fts: "Pés por segundo",
      kn: "Nós",
      cms: "Centímetros por segundo",
    },
    primary: "{value} {symbol} em {unit}",
    caption: "1 {from} = {factor} {to}",
    tableCaption: "{value} {symbol} em todas as unidades de velocidade",
    tableUnit: "Unidade",
    tableValue: "Valor",
    note: "Os resultados são apresentados com 10 algarismos significativos.",
  },
};

export default pt;
