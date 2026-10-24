import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { RaceTimePredictorText } from "../text/en";

const pt: CalculatorTranslation<RaceTimePredictorText> = {
  content: {
    title: "Calculadora de previsão de tempos de corrida",
    shortTitle: "Tempo de corrida",
    summary: "Preveja o seu tempo final numa milha, 5K, 10K, meia maratona, maratona ou qualquer distância a partir de uma prova recente, com a fórmula de resistência de Riegel.",
    metaTitle: "Calculadora de previsão de tempos de corrida – 5K a maratona",
    metaDescription:
      "Preveja o tempo e o ritmo de uma prova a partir de um resultado recente com a fórmula de Riegel, T₂ = T₁ × (D₂/D₁)^1,06, para 5K, 10K, meia maratona e maratona.",
    keywords: ["previsão de tempo de corrida", "previsão de tempo na maratona", "fórmula de Riegel", "previsão meia maratona", "5K para maratona", "equivalência de provas", "tempo final previsto"],
    intro: [
      "Se sabe a que velocidade correu uma prova, pode estimar a que velocidade conseguiria correr outra. Os corredores abrandam um pouco à medida que a distância aumenta e, em 1981, o engenheiro Peter Riegel mostrou que os tempos dos recordes mundiais em muitas distâncias se ajustam a uma única lei de potência simples.",
      "Introduza uma prova recente e o respetivo tempo final, escolha a distância que pretende correr e esta ferramenta prevê o seu tempo e o seu ritmo com a fórmula de Riegel. Apresenta também previsões para todas as distâncias padrão, da milha à maratona.",
    ],
    howToUse: [
      "Escolha a distância de uma prova recente que tenha corrido no máximo das suas capacidades, ou introduza uma distância personalizada em km ou milhas.",
      "Introduza o seu tempo final em horas, minutos e segundos.",
      "Escolha a distância que pretende prever.",
      "Mantenha o expoente de fadiga em 1,06, a não ser que saiba que perde mais rendimento (experimente 1,08) ou menos nas distâncias longas.",
      "Consulte o tempo previsto, o ritmo necessário e a tabela de previsões para outras distâncias.",
    ],
    formulas: [
      { title: "Fórmula de Riegel", expression: "T₂ = T₁ × (D₂ ÷ D₁)^k", explanation: "T₁ é o seu tempo na distância D₁ e T₂ o tempo previsto na distância D₂. Com k = 1,06, duplicar a distância multiplica o tempo por 2^1,06 ≈ 2,085." },
      { title: "Ritmo", expression: "ritmo por km = T₂ ÷ D₂ (km)\nritmo por milha = ritmo por km × 1,609344", explanation: "O ritmo médio necessário para correr o tempo previsto." },
    ],
    examples: [
      { title: "De uns 10K em 50:00 para uma meia maratona", steps: ["T₁ = 3000 s, D₂ ÷ D₁ = 21,0975 ÷ 10 = 2,10975", "T₂ = 3000 × 2,10975^1,06 ≈ 6619 s", "6619 s = 1:50:19, um ritmo de cerca de 5:14 por km"] },
      { title: "De uns 5K em 22:30 para uma maratona", steps: ["T₁ = 1350 s, D₂ ÷ D₁ = 42,195 ÷ 5 = 8,439", "T₂ = 1350 × 8,439^1,06 ≈ 12 948 s = 3:35:48", "A maratona tem mais do que quatro vezes a distância dos 5K, por isso considere este valor otimista"] },
      { title: "De uma meia maratona em 1:45:00 para uns 10K, com k = 1,08", steps: ["T₁ = 6300 s, D₂ ÷ D₁ = 10 ÷ 21,0975 ≈ 0,474", "T₂ = 6300 × 0,474^1,08 ≈ 2813 s", "2813 s = 0:46:53"] },
    ],
    assumptions: [
      "Está igualmente bem treinado para a distância pretendida. Uns 5K rápidos não significam que tenha resistência para uma maratona sem treinos longos suficientes.",
      "As previsões são menos precisas para distâncias mais de cerca de quatro vezes mais longas ou mais curtas do que a sua prova, e para provas com duração superior a cerca de 4 horas, em que tendem a ser demasiado rápidas.",
      "Ambas as provas são corridas em percursos semelhantes e planos, com condições meteorológicas semelhantes. Subidas, calor, vento e altitude não são tidos em conta.",
    ],
    faqs: [
      { question: "Porque é que o expoente é 1,06?", answer: "Riegel ajustou o expoente aos tempos dos recordes mundiais e obteve cerca de 1,06 para a corrida. Um valor de 1 significaria que conseguiria manter o mesmo ritmo em qualquer distância; qualquer valor acima de 1 significa que abranda à medida que a prova se torna mais longa." },
      { question: "Que prova devo usar como ponto de partida?", answer: "Use uma prova recente que tenha corrido com esforço máximo, de preferência com uma distância mais próxima da pretendida. Uma meia maratona prevê melhor uma maratona do que uma milha." },
      { question: "Porque é que a minha maratona real é mais lenta do que o previsto?", answer: "A maratona depende muito do treino de resistência, da alimentação e da gestão do ritmo, que uma prova curta não põe à prova. Muitos corredores correm mais devagar do que a fórmula prevê, pelo que alguns treinadores usam um expoente mais alto, como 1,07 a 1,08, para a maratona." },
    ],
    sourcesUsedFor: ["Equação de resistência T = a·D^b, que relaciona o tempo e a distância, com um expoente de cerca de 1,06 para a corrida."],
  },
  text: {
    knownRace: "Distância da prova recente",
    targetRace: "Distância a prever",
    races: { mile: "1 milha", "5k": "5K", "10k": "10K", half: "Meia maratona (21,0975 km)", marathon: "Maratona (42,195 km)", custom: "Distância personalizada" },
    knownDistance: "Distância da prova recente",
    targetDistance: "Distância a prever",
    unit: "Unidade de distância",
    units: { km: "Quilómetros (km)", mi: "Milhas (mi)" },
    hours: "Tempo final: horas",
    minutes: "Minutos",
    seconds: "Segundos",
    exponent: "Expoente de fadiga (k)",
    exponentHelp: "O valor de Riegel para a corrida é 1,06. Um valor mais alto pressupõe que abranda mais à medida que a distância aumenta.",
    timeZero: "Introduza um tempo final superior a zero.",
    predicted: "Tempo final previsto",
    caption: "{time} em {known} → {target}, k = {k}",
    perKm: "Ritmo previsto por quilómetro",
    perMile: "Ritmo previsto por milha",
    speed: "Velocidade média",
    tableCaption: "Previsões para distâncias padrão",
    columns: { distance: "Distância", time: "Tempo previsto", perKm: "Ritmo /km", perMile: "Ritmo /mi" },
    tableRaces: { mile: "1 milha", "5k": "5K", "10k": "10K", half: "Meia maratona", marathon: "Maratona" },
    notes: {
      far: "A distância pretendida é mais de quatro vezes mais longa ou mais curta do que a sua prova, pelo que a previsão é menos fiável.",
      long: "O tempo previsto ultrapassa cerca de 4 horas, situação em que a fórmula tende a ser otimista.",
      same: "As duas distâncias são iguais, pelo que a previsão é igual ao seu tempo final.",
      training: "Pressupõe que está igualmente bem treinado para a distância pretendida, por exemplo com treinos longos suficientes para uma maratona.",
    },
  },
};

export default pt;
