import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BatteryLifeText } from "../text/en";

const pt: CalculatorTranslation<BatteryLifeText> = {
  content: {
    title: "Calculadora de autonomia da bateria",
    shortTitle: "Autonomia da bateria",
    summary: "Estime durante quanto tempo uma bateria alimenta um dispositivo a partir da capacidade em mAh, Ah ou Wh e do consumo em mA, A ou W.",
    metaTitle: "Calculadora de autonomia da bateria – mAh, Ah ou Wh",
    metaDescription:
      "Estime a autonomia de uma bateria a partir da capacidade (mAh, Ah ou Wh) e do consumo (mA, A ou W), com a profundidade de descarga, horas, dias e energia.",
    keywords: ["autonomia da bateria", "duração da bateria", "mAh para horas", "capacidade da bateria", "watt-hora", "ampere-hora", "profundidade de descarga", "quanto dura uma bateria"],
    intro: [
      "A capacidade de uma bateria indica quanta carga (em miliamperes-hora ou amperes-hora) ou energia (em watts-hora) armazena. Dividir a parte dessa capacidade que pode realmente usar pelo consumo do dispositivo dá uma primeira estimativa de quanto tempo vai funcionar.",
      "Esta calculadora aceita a capacidade em mAh, Ah ou Wh e o consumo em mA, A ou W. Quando um é uma carga e o outro uma potência, usa a tensão da bateria para converter entre eles. Use-a para dimensionar a bateria de um sensor, de uma luz de campismo, de um powerbank ou de uma alimentação de reserva.",
    ],
    howToUse: [
      "Introduza a capacidade da bateria e escolha mAh, Ah ou Wh.",
      "Introduza a tensão nominal da bateria. É necessária quando um valor está em mAh ou Ah e o outro em W ou Wh, e permite à calculadora mostrar a energia.",
      "Introduza o consumo médio do dispositivo em mA, A ou W.",
      "Defina a capacidade utilizável (80% por predefinição) e consulte a autonomia em horas e minutos, em horas decimais e em dias.",
    ],
    formulas: [
      { title: "Autonomia a partir da carga", expression: "t (h) = capacidade (mAh) ÷ consumo (mA) × fração utilizável", explanation: "Com amperes-hora e amperes funciona da mesma forma. A fração utilizável é a profundidade de descarga, por exemplo 0,8." },
      { title: "Autonomia a partir da energia", expression: "t (h) = energia (Wh) ÷ consumo (W) × fração utilizável", explanation: "Use esta fórmula quando a capacidade está em watts-hora e o consumo em watts." },
      { title: "Da carga para a energia", expression: "Wh = mAh × V ÷ 1000", explanation: "V é a tensão nominal da bateria. Da mesma forma, um consumo em watts corresponde a W ÷ V amperes." },
    ],
    examples: [
      { title: "Célula de 3000 mAh a alimentar um dispositivo de 150 mA", steps: ["Autonomia ideal = 3000 ÷ 150 = 20 h", "Autonomia utilizável = 20 × 0,80 = 16 h", "Energia = 3000 × 3,7 ÷ 1000 = 11,1 Wh"] },
      { title: "Bateria de chumbo-ácido de 100 Ah e 12 V com uma carga de 45 W, descarregada até 50%", steps: ["Energia = 100 Ah × 12 V = 1200 Wh", "Energia utilizável = 1200 × 0,50 = 600 Wh", "Autonomia = 600 ÷ 45 ≈ 13,33 h = 13 h 20 min"] },
      { title: "Bateria de portátil de 74 Wh com um consumo médio de 18 W", steps: ["Energia utilizável = 74 × 0,90 = 66,6 Wh", "Autonomia = 66,6 ÷ 18 = 3,7 h", "0,7 h × 60 = 42 min, ou seja, cerca de 3 h 42 min"] },
    ],
    assumptions: [
      "O consumo é constante. Para um dispositivo que alterna entre repouso e atividade, introduza a corrente ou a potência média.",
      "A capacidade real diminui com o frio, com o envelhecimento da bateria e com taxas de descarga elevadas (o efeito Peukert, mais forte nas baterias de chumbo-ácido). Estes efeitos não são modelados, pelo que as cargas elevadas funcionarão durante menos tempo do que o indicado.",
      "As conversões de tensão usam a tensão nominal, embora a tensão desça durante a descarga, e as perdas de conversores ou inversores não estão incluídas, a menos que reduza a capacidade utilizável para as ter em conta.",
    ],
    faqs: [
      { question: "Que capacidade utilizável devo introduzir?", answer: "As baterias de iões de lítio podem muitas vezes usar 80–90% da capacidade nominal, enquanto as de chumbo-ácido duram mais se forem regularmente descarregadas só até cerca de 50%. Se não souber, 80% é um ponto de partida prudente para pequenos aparelhos eletrónicos." },
      { question: "Porque preciso da tensão?", answer: "Os miliamperes-hora medem carga, enquanto os watts e os watts-hora medem potência e energia. Converter entre eles exige a tensão: os watts-hora são iguais aos amperes-hora vezes os volts. Se a capacidade estiver em mAh e o consumo em mA, a tensão não é necessária para a autonomia." },
      { question: "Porque é que o meu powerbank fornece menos do que a capacidade em mAh sugere?", answer: "Os powerbanks são classificados à tensão interna das células, de cerca de 3,7 V, mas a saída USB é de 5 V ou mais, e o conversor de tensão perde alguma energia em calor. Compare em watts-hora e reduza a capacidade utilizável para ter em conta essas perdas." },
    ],
    sourcesUsedFor: [
      "A energia da bateria em watts-hora como volts × amperes-hora.",
      "A conversão de uma capacidade em miliamperes-hora para amperes-hora, dividindo por 1000 antes de multiplicar pela tensão.",
      "O facto de a capacidade utilizável diminuir com correntes de descarga mais elevadas (o efeito Peukert), que esta calculadora não modela.",
    ],
  },
  text: {
    capacity: "Capacidade da bateria",
    capacityUnit: "Unidade de capacidade",
    capacityUnits: { mAh: "Miliamperes-hora (mAh)", Ah: "Amperes-hora (Ah)", Wh: "Watts-hora (Wh)" },
    voltage: "Tensão da bateria",
    voltageHelp: "A tensão nominal, como 3,7 V para uma célula de iões de lítio ou 12 V para uma bateria de chumbo-ácido. Necessária quando a capacidade e o consumo usam unidades diferentes (carga e potência) e para mostrar a energia.",
    load: "Consumo do dispositivo",
    loadUnit: "Unidade de consumo",
    loadUnits: { mA: "Miliamperes (mA)", A: "Amperes (A)", W: "Watts (W)" },
    depth: "Capacidade utilizável (profundidade de descarga)",
    depthHelp: "A fração da capacidade nominal que pode realmente usar. 80% é uma margem habitual para perdas e para proteger a bateria; use 100% para o valor ideal.",
    errors: {
      voltageNeeded: "Introduza a tensão da bateria para converter entre carga (mAh ou Ah) e potência ou energia (W ou Wh).",
    },
    runtime: "Autonomia estimada (h:mm)",
    runtimeText: "{h}:{mm}",
    caption: "Bateria de {capacity} a alimentar um consumo de {load}, usando {depth} da sua capacidade.",
    hours: "Autonomia em horas",
    days: "Autonomia em dias",
    energy: "Energia nominal",
    usableEnergy: "Energia utilizável",
    current: "Corrente consumida",
    power: "Potência consumida",
    notes: {
      constant: "Pressupõe-se um consumo constante. Um dispositivo que entra em repouso e volta a ativar-se consome uma corrente média; use essa média.",
      peukert: "A capacidade real diminui com o frio, com o envelhecimento da bateria e com correntes de descarga elevadas (o efeito Peukert, não modelado aqui), por isso conte com menos autonomia sob cargas elevadas.",
      conversion: "A tensão foi usada para converter entre carga e energia (Wh = Ah × V); isto ignora a descida da tensão à medida que a bateria descarrega.",
    },
  },
};

export default pt;
