import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SwimPaceText } from "../text/en";

const pt: CalculatorTranslation<SwimPaceText> = {
  content: {
    title: "Calculadora de ritmo de natação",
    shortTitle: "Ritmo de natação",
    summary:
      "Calcule o seu ritmo de natação por 100 m ou 100 jardas a partir de uma distância e de um tempo, ou o tempo para uma distância a um dado ritmo.",
    metaTitle: "Calculadora de ritmo de natação – Ritmo aos 100 m e 100 jd",
    metaDescription:
      "Calcule o seu ritmo de natação por 100 metros ou 100 jardas a partir da distância e do tempo, ou o tempo final a partir de um ritmo, com velocidade e parciais.",
    keywords: ["ritmo de natação", "ritmo aos 100 m", "ritmo por 100 jardas", "velocidade de natação", "tempo de natação", "natação no triatlo", "natação"],
    intro: [
      "Os nadadores medem habitualmente o ritmo como o tempo que demoram a nadar cada 100 metros ou 100 jardas. Isso permite comparar uma sessão na piscina com uma travessia em águas abertas ou uma prova, seja qual for a distância total.",
      "Introduza uma distância e um tempo para obter o ritmo nas duas unidades, a velocidade e os tempos que faria em distâncias habituais a esse ritmo. Ou mude de modo, introduza um ritmo objetivo e veja quanto tempo demorará a nadar uma distância.",
    ],
    howToUse: [
      "Escolha se quer calcular o ritmo ou o tempo total.",
      "Introduza a distância e escolha metros ou jardas.",
      "Introduza o tempo em horas, minutos e segundos, ou o ritmo por 100 m ou 100 yd.",
      "Consulte o ritmo, a velocidade e os tempos projetados de 50 m a 1 500 m.",
    ],
    formulas: [
      {
        title: "Ritmo",
        expression: "ritmo por 100 m = tempo (s) ÷ distância (m) × 100",
        explanation: "Apresentado como minutos:segundos, arredondado ao segundo mais próximo.",
      },
      {
        title: "Tempo a partir do ritmo",
        expression: "tempo = ritmo por 100 m × distância (m) ÷ 100",
        explanation: "Um ritmo por 100 yd é primeiro dividido por 0,9144 para obter o ritmo por 100 m.",
      },
      {
        title: "Jardas e metros",
        expression: "1 yd = 0,9144 m exatamente\nritmo por 100 yd = ritmo por 100 m × 0,9144",
        explanation: "100 jardas são um pouco menos do que 100 metros, por isso o ritmo por 100 yd é mais rápido.",
      },
      {
        title: "Velocidade",
        expression: "velocidade (m/s) = 100 ÷ ritmo por 100 m (s)\nkm/h = m/s × 3,6",
        explanation: "Velocidade média em todo o percurso.",
      },
    ],
    examples: [
      {
        title: "1 500 m em 27:30",
        steps: [
          "27:30 = 1 650 s",
          "1 650 ÷ 1 500 × 100 = 110 s = 1:50 por 100 m",
          "Por 100 yd: 110 × 0,9144 ≈ 101 s = 1:41; velocidade ≈ 0,909 m/s",
        ],
      },
      {
        title: "500 yd em 7:05",
        steps: ["7:05 = 425 s", "425 ÷ 500 × 100 = 85 s = 1:25 por 100 yd", "Por 100 m: 85 ÷ 0,9144 ≈ 93 s = 1:33"],
      },
      {
        title: "1 650 yd a 1:30 por 100 yd",
        steps: ["1 650 yd ÷ 100 = 16,5 troços de 100 yd", "16,5 × 90 s = 1 485 s", "1 485 s = 24:45"],
      },
    ],
    assumptions: [
      "O ritmo é uma média ao longo de toda a distância; os tempos projetados pressupõem que conseguiria manter esse ritmo em cada distância, o que raramente acontece em percursos muito mais longos.",
      "O comprimento da piscina e o número de viragens influenciam os tempos: o mesmo percurso costuma ser um pouco mais rápido numa piscina de 25 m do que numa de 50 m.",
      "Os tempos são arredondados ao segundo mais próximo na apresentação.",
    ],
    faqs: [
      {
        question: "Porque é que o meu ritmo por 100 yd é mais rápido do que por 100 m?",
        answer: "100 jardas são 91,44 metros, por isso demoram menos tempo a nadar. À mesma velocidade, o ritmo por 100 yd é cerca de 8,6 % inferior ao ritmo por 100 m.",
      },
      {
        question: "O que é um bom ritmo de natação?",
        answer: "Depende da idade, da experiência e da distância. Muitos nadadores recreativos nadam a cerca de 2 a 3 minutos por 100 m, enquanto nadadores de fundo treinados ficam muitas vezes bem abaixo de 1:30.",
      },
      {
        question: "Posso usar esta calculadora em águas abertas?",
        answer: "Sim, se souber a distância. As distâncias medidas por GPS em águas abertas podem ser imprecisas, por isso o ritmo só é tão fiável quanto a distância medida.",
      },
    ],
    sourcesUsedFor: ["A conversão exata 1 yd = 0,9144 m, usada entre piscinas em jardas e em metros."],
  },
  text: {
    mode: "Calcular",
    modes: { pace: "Ritmo a partir da distância e do tempo", time: "Tempo a partir da distância e do ritmo" },
    distance: "Distância",
    unit: "Unidade de distância",
    units: { m: "Metros (m)", yd: "Jardas (yd)" },
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    timeZero: "Introduza um tempo superior a 0.",
    paceMinutes: "Ritmo: minutos",
    paceSeconds: "Ritmo: segundos",
    paceUnit: "Ritmo por",
    paceUnits: { m: "100 m", yd: "100 yd" },
    paceZero: "Introduza um ritmo superior a 0.",
    pace: "Ritmo por 100 {unit}",
    time: "Tempo total",
    caption: "{distance} em {time}.",
    pace100m: "Ritmo por 100 m",
    pace100yd: "Ritmo por 100 yd",
    speedMs: "Velocidade (m/s)",
    speedKmh: "Velocidade (km/h)",
    distanceM: "Distância em metros",
    table: {
      caption: "Tempos projetados ao mesmo ritmo constante",
      distance: "Distância",
      time: "Tempo",
    },
    notes: {
      even: "Os tempos projetados pressupõem o mesmo ritmo em toda a distância. Os percursos mais longos costumam ser mais lentos por 100, e as viragens diferem entre piscinas de 25 m, 50 m e 25 yd.",
    },
  },
};

export default pt;
