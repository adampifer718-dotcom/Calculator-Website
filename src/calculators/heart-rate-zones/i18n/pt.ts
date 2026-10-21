import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HeartRateZonesText } from "../text/en";

const pt: CalculatorTranslation<HeartRateZonesText> = {
  content: {
    title: "Calculadora de zonas de frequência cardíaca",
    shortTitle: "Zonas de frequência cardíaca",
    summary: "Estime a sua frequência cardíaca máxima a partir da idade e consulte cinco zonas de treino em batimentos por minuto, por percentagem do máximo ou pelo método de Karvonen.",
    metaTitle: "Calculadora de zonas de frequência cardíaca – FC máx.",
    metaDescription:
      "Estime a frequência cardíaca máxima com 220 − idade ou a fórmula de Tanaka e obtenha cinco zonas de treino em bpm, por percentagem do máximo ou com Karvonen.",
    keywords: ["zonas de frequência cardíaca", "frequência cardíaca alvo", "frequência cardíaca máxima", "fórmula de Karvonen", "zonas de treino", "zona de queima de gordura", "reserva de frequência cardíaca", "batimentos por minuto"],
    intro: [
      "As zonas de frequência cardíaca dividem a intensidade do exercício em faixas baseadas na sua frequência cardíaca máxima. Treinar numa zona concreta ajuda a dosear corridas leves, passeios de bicicleta a ritmo constante ou séries intensas sem ir às cegas.",
      "Esta calculadora estima a sua frequência cardíaca máxima a partir da idade, ou usa um máximo que tenha medido, e converte-o em cinco zonas em batimentos por minuto. Mostra também os intervalos de intensidade moderada e vigorosa propostos pela American Heart Association.",
    ],
    howToUse: [
      "Introduza a sua idade e escolha uma fórmula para a frequência cardíaca máxima.",
      "Se conhecer o seu máximo real graças a uma prova de esforço, introduza-o; substitui a fórmula.",
      "Para usar o método de Karvonen, introduza a sua frequência cardíaca em repouso e escolha Karvonen como método de zonas.",
      "Consulte o máximo estimado e o intervalo em bpm de cada zona na tabela.",
    ],
    formulas: [
      { title: "Frequência cardíaca máxima (Fox)", expression: "FCmáx = 220 − idade", explanation: "A regra prática tradicional." },
      { title: "Frequência cardíaca máxima (Tanaka)", expression: "FCmáx = 208 − 0,7 × idade", explanation: "Resulta de uma análise de 2001 de 351 estudos; dá valores mais altos do que 220 − idade nos adultos mais velhos." },
      { title: "Percentagem do máximo", expression: "alvo = FCmáx × intensidade", explanation: "Cada zona abrange 10 pontos percentuais, de 50–60 % (zona 1) a 90–100 % (zona 5)." },
      {
        title: "Karvonen (reserva de frequência cardíaca)",
        expression: "alvo = FCrepouso + intensidade × (FCmáx − FCrepouso)",
        explanation: "A reserva de frequência cardíaca é FCmáx − FCrepouso. Este método dá alvos mais altos a intensidades baixas do que o método da percentagem do máximo.",
      },
    ],
    examples: [
      {
        title: "40 anos com 220 − idade",
        steps: ["FCmáx = 220 − 40 = 180 bpm", "Zona 2 (60–70 %) = 108–126 bpm", "Intervalo moderado da AHA (50–70 %) = 90–126 bpm; vigoroso (70–85 %) = 126–153 bpm"],
      },
      {
        title: "55 anos com a fórmula de Tanaka",
        steps: ["FCmáx = 208 − 0,7 × 55 = 169,5 bpm, apresentado como 170 bpm", "Zona 3 (70–80 %) = 118,65–135,6, arredondado para 119–136 bpm", "Com 220 − idade obter-se-iam 165 bpm, um pouco menos"],
      },
      {
        title: "30 anos, frequência em repouso de 60 bpm, Karvonen",
        steps: ["FCmáx = 220 − 30 = 190 bpm; reserva = 190 − 60 = 130 bpm", "Limite inferior da zona 3 = 60 + 0,7 × 130 = 151 bpm; superior = 60 + 0,8 × 130 = 164 bpm", "Assim, a zona 3 vai de 151 a 164 bpm"],
      },
    ],
    assumptions: [
      "Estes resultados são estimativas, não um conselho médico, e esta calculadora não foi revista por profissionais.",
      "As fórmulas baseadas na idade descrevem médias da população. A frequência cardíaca máxima real de uma pessoa pode diferir da estimativa em 10 bpm ou mais, pelo que um máximo medido é mais preciso.",
      "Medicamentos como os betabloqueantes, bem como o calor, a desidratação, a cafeína e as doenças, alteram a frequência cardíaca. As zonas baseadas num máximo estimado podem não ser adequadas para si.",
      "Se tiver uma doença cardíaca, outros problemas de saúde ou sintomas como dor no peito ou tonturas, fale com um médico antes de começar a fazer exercício vigoroso.",
      "Os nomes das zonas e as faixas de 10 pontos são uma convenção habitual; treinadores e dispositivos usam vários sistemas de zonas diferentes.",
    ],
    faqs: [
      {
        question: "Que fórmula de frequência cardíaca máxima devo usar?",
        answer: "220 − idade é simples e muito utilizada. A fórmula de Tanaka, 208 − 0,7 × idade, foi ajustada a um conjunto de dados muito maior e dá valores mais altos nos adultos mais velhos. Nenhuma substitui um máximo medido numa prova de esforço supervisionada.",
      },
      {
        question: "O que é o método de Karvonen?",
        answer: "Define os alvos a partir da reserva de frequência cardíaca, a diferença entre a sua frequência máxima e a de repouso. Como tem em conta a frequência em repouso, pode ajustar-se melhor às pessoas com uma frequência cardíaca em repouso baixa do que uma simples percentagem do máximo.",
      },
      {
        question: "Que frequência cardíaca corresponde ao exercício moderado?",
        answer: "A American Heart Association indica cerca de 50–70 % da frequência cardíaca máxima para a atividade de intensidade moderada e cerca de 70–85 % para a atividade vigorosa. A calculadora mostra ambos os intervalos em batimentos por minuto.",
      },
    ],
    sourcesUsedFor: [
      "A equação 208 − 0,7 × idade para a frequência cardíaca máxima.",
      "Os intervalos-alvo de cerca de 50–70 % da frequência cardíaca máxima para a atividade moderada e de 70–85 % para a vigorosa, e a estimativa 220 − idade.",
    ],
  },
  text: {
    age: "Idade",
    ageSuffix: "anos",
    formula: "Fórmula da frequência cardíaca máxima",
    formulas: { fox: "220 − idade", tanaka: "208 − 0,7 × idade (Tanaka)" },
    formulaHelp: "Ambas as fórmulas estimam uma média para as pessoas da sua idade. A versão de Tanaka dá valores mais altos nos adultos mais velhos.",
    measuredMax: "Frequência cardíaca máxima medida",
    measuredMaxHelp: "Opcional. Se conhecer o seu máximo graças a uma prova de esforço, introduza-o aqui; substitui a fórmula.",
    resting: "Frequência cardíaca em repouso",
    restingHelp: "Opcional, mas necessária para o método de Karvonen. Conte o pulso durante um minuto completo ao acordar, antes de se levantar.",
    method: "Método de zonas",
    methods: { percentMax: "Percentagem da frequência cardíaca máxima", karvonen: "Karvonen (reserva de frequência cardíaca)" },
    methodHelp: "O método de Karvonen aplica as percentagens à diferença entre a frequência cardíaca máxima e a de repouso, e depois volta a somar a de repouso.",
    errors: {
      restingRequired: "Introduza a sua frequência cardíaca em repouso para usar o método de Karvonen.",
      restingTooHigh: "A frequência cardíaca em repouso tem de ser inferior à máxima ({max} bpm).",
    },
    maxHr: "Frequência cardíaca máxima estimada",
    maxHrMeasured: "Frequência cardíaca máxima (medida)",
    captionFormula: "Estimada com {formula} para {age} anos.",
    captionMeasured: "O seu máximo medido, usado em vez de uma fórmula.",
    zonesCaption: "Zonas de treino por frequência cardíaca",
    zonesCaptionKarvonen: "Zonas de treino por frequência cardíaca (Karvonen)",
    columns: { zone: "Zona", intensity: "Intensidade", heartRate: "Frequência cardíaca" },
    zoneNames: ["Zona 1 – muito leve", "Zona 2 – leve", "Zona 3 – moderada", "Zona 4 – intensa", "Zona 5 – máxima"],
    percentRange: "{low}–{high}",
    bpmRange: "{low}–{high} bpm",
    ahaModerate: "Intensidade moderada segundo a AHA ({range} do máximo)",
    ahaVigorous: "Intensidade vigorosa segundo a AHA ({range} do máximo)",
    reserve: "Reserva de frequência cardíaca",
    notes: {
      aha: "A American Heart Association sugere cerca de 50–70 % da frequência cardíaca máxima para a atividade moderada e cerca de 70–85 % para a vigorosa. Estes intervalos são apresentados em percentagem da frequência cardíaca máxima.",
      restingIgnored: "A frequência cardíaca em repouso só é usada pelo método de Karvonen.",
      estimate: "As fórmulas dão médias da população; o seu máximo real pode diferir em 10 bpm ou mais. Medicamentos como os betabloqueantes baixam a frequência cardíaca.",
      doctor: "Se tiver uma doença cardíaca ou outros problemas de saúde, fale com um médico antes de começar a fazer exercício vigoroso.",
    },
  },
};

export default pt;
