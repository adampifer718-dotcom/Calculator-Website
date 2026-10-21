import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AccelerationText } from "../text/en";

const pt: CalculatorTranslation<AccelerationText> = {
  content: {
    title: "Calculadora de aceleração",
    shortTitle: "Aceleração",
    summary: "Calcule a aceleração a partir de uma variação de velocidade, da distância e do tempo ou da força e da massa, em m/s², ft/s² e g.",
    metaTitle: "Aceleração – Por velocidade, distância ou força",
    metaDescription:
      "Calcule a aceleração a partir da variação de velocidade num dado tempo, da distância e do tempo ou da força e da massa (a = F/m), em m/s², ft/s² e g.",
    keywords: ["calcular aceleração", "fórmula da aceleração", "m/s2", "desaceleração", "força g", "a = F/m", "dos 0 aos 100", "cinemática"],
    intro: [
      "A aceleração indica a rapidez com que a velocidade muda. Um automóvel que passa do repouso para 100 km/h em 8 segundos ganha cerca de 3,5 metros por segundo de velocidade em cada segundo, o que se escreve 3,5 m/s².",
      "Esta calculadora obtém a aceleração de três formas: a partir de uma velocidade inicial e de uma velocidade final num dado tempo, a partir da distância percorrida num dado tempo ou a partir da força resultante sobre um objeto e da sua massa. O resultado é apresentado em m/s², em ft/s² e como múltiplo da gravidade padrão g.",
    ],
    howToUse: [
      "Escolha o que sabe: uma variação de velocidade, uma distância e um tempo, ou uma força e uma massa.",
      "Escolha as unidades de velocidade e de distância quando forem pedidas. O tempo é sempre em segundos, a força em newtons e a massa em quilogramas.",
      "Introduza os valores. Uma velocidade negativa indica movimento no sentido oposto.",
      "Consulte a aceleração. Um resultado negativo significa que o objeto está a abrandar.",
    ],
    formulas: [
      { title: "A partir de uma variação de velocidade", expression: "a = (v − v₀) ÷ t", explanation: "A aceleração média durante o tempo t, em que v₀ é a velocidade inicial e v a velocidade final." },
      { title: "A partir da distância e do tempo", expression: "d = v₀t + ½at²  ⇒  a = 2(d − v₀t) ÷ t²", explanation: "Válida quando a aceleração se mantém constante durante todo o intervalo." },
      { title: "A partir da força e da massa", expression: "a = F ÷ m", explanation: "A segunda lei de Newton, com a força resultante F em newtons e a massa m em quilogramas." },
      { title: "Conversão de unidades", expression: "1 ft/s² = 0,3048 m/s²\n1 g = 9,80665 m/s²", explanation: "As velocidades são primeiro convertidas para m/s (1 km/h = 1/3,6 m/s, 1 mph = 0,44704 m/s)." },
    ],
    examples: [
      {
        title: "Um automóvel que vai dos 0 aos 100 km/h em 8 segundos",
        steps: ["100 km/h = 100 ÷ 3,6 ≈ 27,778 m/s", "a = (27,778 − 0) ÷ 8 ≈ 3,472 m/s²", "São cerca de 0,354 g"],
      },
      {
        title: "Travar de 60 mph até parar em 4 segundos",
        steps: ["60 mph = 60 × 0,44704 = 26,8224 m/s", "a = (0 − 26,8224) ÷ 4 = −6,7056 m/s²", "O sinal menos indica uma desaceleração de cerca de 0,684 g"],
      },
      {
        title: "Um empurrão de 450 N num trenó de 75 kg",
        steps: ["a = F ÷ m", "= 450 ÷ 75 = 6 m/s²"],
      },
    ],
    assumptions: [
      "O movimento é retilíneo, e as velocidades e forças no sentido oposto são introduzidas como valores negativos.",
      "O método da variação de velocidade dá a aceleração média no intervalo. O método da distância e do tempo pressupõe que a aceleração é constante.",
      "O método da força e da massa usa a força resultante, depois de subtraídos o atrito, a resistência do ar e outras forças opostas.",
    ],
    faqs: [
      { question: "O que significa uma aceleração negativa?", answer: "Significa que a aceleração aponta no sentido negativo. Se o objeto se desloca para a frente, está a abrandar, o que se costuma chamar desaceleração." },
      { question: "O que é 1 g?", answer: "É a aceleração padrão da gravidade, definida como exatamente 9,80665 m/s² (cerca de 32,17 ft/s²). Exprimir uma aceleração em g compara-a com a atração da gravidade à superfície da Terra." },
      { question: "Porque é que a aceleração se mede em m/s²?", answer: "A aceleração é uma variação de velocidade (m/s) por unidade de tempo (s), pelo que a sua unidade é o metro por segundo por segundo, que se escreve m/s²." },
    ],
    sourcesUsedFor: [
      "Definição da aceleração média como a variação de velocidade dividida pelo tempo decorrido, e a sua unidade SI, o m/s².",
      "A segunda lei de Newton, F = ma.",
      "A aceleração padrão da gravidade, 9,80665 m/s².",
    ],
  },
  text: {
    mode: "Calcular a partir de",
    modes: { velocity: "Variação de velocidade", distance: "Distância e tempo", force: "Força e massa" },
    speedUnit: "Unidade de velocidade",
    speedUnits: { ms: "Metros por segundo (m/s)", kmh: "Quilómetros por hora (km/h)", mph: "Milhas por hora (mph)", fts: "Pés por segundo (ft/s)" },
    initialVelocity: "Velocidade inicial (v₀)",
    initialHelp: "Use um valor negativo para movimento no sentido oposto.",
    finalVelocity: "Velocidade final (v)",
    time: "Tempo (t)",
    distanceUnit: "Unidade de distância",
    distanceUnits: { m: "Metros (m)", km: "Quilómetros (km)", ft: "Pés (ft)", mi: "Milhas (mi)" },
    distance: "Distância percorrida (d)",
    distanceHelp: "O deslocamento em linha reta durante o tempo t.",
    force: "Força resultante (F)",
    forceHelp: "A soma de todas as forças que atuam sobre o objeto, em newtons.",
    mass: "Massa (m)",
    acceleration: "Aceleração",
    formula: { velocity: "a = (v − v₀) ÷ t", distance: "a = 2(d − v₀t) ÷ t²", force: "a = F ÷ m" },
    inFeet: "Em pés por segundo ao quadrado",
    inG: "Em gravidades padrão (g)",
    distanceCovered: "Distância percorrida",
    finalVelocityResult: "Velocidade final",
    notes: {
      negative: "A aceleração é negativa, pelo que o objeto está a abrandar (desacelera) se se deslocar no sentido positivo.",
      zero: "Aceleração nula: a velocidade não muda.",
      constant: "Pressupõe que a aceleração é constante durante todo o intervalo de tempo.",
      average: "É a aceleração média no intervalo de tempo; a aceleração num instante concreto pode ser maior ou menor.",
      g: "1 g é a aceleração padrão da gravidade, 9,80665 m/s², exata por definição.",
    },
  },
};

export default pt;
