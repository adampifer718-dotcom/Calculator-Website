import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RunningPaceText } from "../text/en";

const pt: CalculatorTranslation<RunningPaceText> = {
  content: {
    title: "Calculadora de ritmo de corrida",
    shortTitle: "Ritmo de corrida",
    summary: "Calcule o seu ritmo de corrida por quilómetro e por milha, e a velocidade média, a partir da distância e do tempo final.",
    metaTitle: "Calculadora de ritmo de corrida – Ritmo por km e por milha",
    metaDescription:
      "Calcule o ritmo de corrida por quilómetro e por milha e a velocidade média a partir do seu tempo em 5 km, 10 km, meia maratona, maratona ou outra distância.",
    keywords: ["ritmo", "ritmo de corrida", "min por km", "min por milha", "ritmo de maratona", "5 km", "10 km", "corrida"],
    intro: [
      "O ritmo é o tempo que demora a percorrer um quilómetro ou uma milha. É a forma como a maioria dos corredores planeia e compara provas.",
      "Escolha a distância de uma prova ou introduza a sua, acrescente o tempo final e veja o ritmo e a velocidade.",
    ],
    howToUse: [
      "Escolha a distância da prova, ou Distância personalizada e introduza-a.",
      "Introduza o tempo final em horas, minutos e segundos.",
      "Consulte o ritmo por km e por milha e a velocidade média.",
    ],
    formulas: [
      { title: "Ritmo", expression: "ritmo = tempo ÷ distância", explanation: "Apresentado como minutos:segundos por km ou por milha." },
      { title: "Velocidade", expression: "velocidade = distância ÷ tempo", explanation: "Apresentada em km/h e mph." },
    ],
    examples: [
      { title: "10 km em 50 minutos", steps: ["3000 s ÷ 10 km = 300 s", "= 5:00 por km"] },
      { title: "Maratona em 3 h 30 min", steps: ["12 600 s ÷ 42,195 km ≈ 298,6 s", "≈ 4:59 por km"] },
    ],
    assumptions: [
      "Pressupõe uma média constante ao longo de toda a distância; os parciais variam com o terreno e o esforço.",
      "Os ritmos são arredondados ao segundo mais próximo.",
      "Distâncias das provas: meia maratona 21,0975 km, maratona 42,195 km.",
    ],
    faqs: [
      {
        question: "O que é um bom ritmo nos 5 km?",
        answer: "Depende da idade, da experiência e do terreno. Acompanhe a evolução do seu próprio ritmo em vez de se comparar com os outros.",
      },
      {
        question: "Como converto o ritmo por km em ritmo por milha?",
        answer: "Multiplique por 1,609344. Um ritmo de 5:00/km corresponde a cerca de 8:03/mi.",
      },
      {
        question: "Como encontro um tempo final objetivo?",
        answer: "Escolha um ritmo objetivo e multiplique-o pela distância, ou ajuste aqui o tempo até o ritmo corresponder ao seu objetivo.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    race: "Distância",
    races: { "5k": "5 km", "10k": "10 km", half: "Meia maratona", marathon: "Maratona", custom: "Distância personalizada" },
    distance: "Distância personalizada",
    unit: "Unidade",
    units: { km: "Quilómetros", mi: "Milhas" },
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
    timeZero: "Introduza um tempo final superior a zero.",
    perKm: "Ritmo por quilómetro",
    caption: "Tempo final de {time} em {km} km.",
    perMile: "Ritmo por milha",
    speed: "Velocidade média",
    speedMph: "Velocidade média (mph)",
  },
};

export default pt;
