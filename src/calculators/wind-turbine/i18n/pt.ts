import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { WindTurbineText } from "../text/en";

const pt: CalculatorTranslation<WindTurbineText> = {
  content: {
    title: "Calculadora de potência de turbina eólica",
    shortTitle: "Potência eólica",
    summary: "Estime a potência de uma turbina eólica a partir do diâmetro do rotor, da velocidade do vento, da densidade do ar e do coeficiente de potência, com um valor aproximado de energia anual.",
    metaTitle: "Calculadora de potência de turbina eólica – kW e kWh",
    metaDescription:
      "Obtenha a potência de uma turbina eólica pelo diâmetro do rotor, o vento, a densidade do ar e o Cp, compare-a com o limite de Betz e estime os kWh anuais.",
    keywords: ["turbina eólica", "potência eólica", "aerogerador", "fórmula da energia eólica", "área varrida", "coeficiente de potência", "limite de Betz", "fator de capacidade"],
    intro: [
      "Uma turbina eólica transforma parte da energia cinética do ar em movimento em eletricidade. A potência disponível depende da quantidade de ar que atravessa o círculo varrido pelas pás, da densidade desse ar e, sobretudo, da sua velocidade: a potência cresce com o cubo da velocidade do vento, pelo que duplicar a velocidade dá oito vezes mais potência.",
      "Introduza o diâmetro do rotor, a velocidade do vento e o coeficiente de potência da turbina para estimar a sua produção. Pode também limitar o resultado à potência nominal do gerador e acrescentar um fator de capacidade para obter um valor aproximado de energia anual.",
    ],
    howToUse: [
      "Introduza o diâmetro do rotor em metros ou em pés.",
      "Introduza a velocidade do vento à altura do cubo e escolha a respetiva unidade.",
      "Mantenha a densidade do ar padrão de 1,225 kg/m³ ou introduza um valor adequado à sua altitude e temperatura.",
      "Introduza o coeficiente de potência Cp. 0,40 é um valor razoável para uma boa turbina moderna; não pode exceder o limite de Betz, de cerca de 0,593.",
      "Opcionalmente, introduza a potência nominal para limitar a produção e um fator de capacidade para estimar a energia ao longo de um ano.",
    ],
    formulas: [
      { title: "Área varrida", expression: "A = π × (D ÷ 2)²", explanation: "D é o diâmetro do rotor. Um rotor de 80 m varre cerca de 5 027 m²." },
      { title: "Potência da turbina", expression: "P = ½ × ρ × A × v³ × Cp", explanation: "ρ é a densidade do ar em kg/m³, v a velocidade do vento em m/s e Cp o coeficiente de potência. O resultado vem em watts." },
      { title: "Limite de Betz", expression: "Cp ≤ 16/27 ≈ 0,593", explanation: "Um rotor ideal consegue captar, no máximo, 16/27 da potência do vento que o atravessa. As turbinas reais captam menos, normalmente bem abaixo de 0,5, mesmo no seu melhor ponto de funcionamento." },
      { title: "Energia anual (aproximada)", expression: "E = P × 8760 h × fator de capacidade", explanation: "P é a produção, limitada à potência nominal se esta for indicada. O fator de capacidade tem em conta o tempo em que o vento é mais fraco." },
    ],
    examples: [
      {
        title: "Rotor de 80 m com vento de 10 m/s",
        steps: ["A = π × 40² ≈ 5 026,55 m²", "P = 0,5 × 1,225 × 5 026,55 × 10³ × 0,40 ≈ 1 231 504 W", "Produção ≈ 1 231,50 kW, cerca de 1,23 MW"],
      },
      {
        title: "Pequena turbina de 10 ft com uma brisa de 12 mph",
        steps: ["D = 10 × 0,3048 = 3,048 m, pelo que A ≈ 7,297 m²", "v = 12 × 0,44704 = 5,364 m/s", "P = 0,5 × 1,225 × 7,297 × 5,364³ × 0,35 ≈ 241 W, cerca de 0,24 kW"],
      },
      {
        title: "Rotor de 100 m com 2500 kW de potência nominal, vento de 12 m/s e fator de capacidade de 35%",
        steps: [
          "A = π × 50² ≈ 7 853,98 m²",
          "Potência do rotor = 0,5 × 1,225 × 7 853,98 × 12³ × 0,45 ≈ 3 740,69 kW, acima da potência nominal de 2500 kW",
          "A produção fica limitada a 2500 kW",
          "Energia anual ≈ 2500 × 8760 × 0,35 = 7 665 000 kWh",
        ],
      },
    ],
    assumptions: [
      "Considera-se que a velocidade do vento é constante e uniforme em todo o rotor. O vento real varia de segundo para segundo e com a altura e, como a potência depende do cubo da velocidade, a potência média é superior à potência à velocidade média.",
      "O coeficiente de potência é tratado como constante. Na realidade, varia com a velocidade do vento, e cada turbina tem a sua própria curva de potência, velocidade de arranque e velocidade de corte.",
      "A energia anual é uma estimativa aproximada obtida com a fórmula acima, não uma avaliação do local. Planear uma instalação real exige dados de vento medidos e a curva de potência do fabricante.",
      "Considera-se que as perdas do gerador, da caixa de velocidades e elétricas estão incluídas no coeficiente de potência que introduz.",
    ],
    faqs: [
      { question: "O que é o limite de Betz?", answer: "É a fração máxima teórica da potência do vento que qualquer rotor consegue extrair: 16/27, ou cerca de 59,3%. Se um rotor travasse o ar por completo, deixaria de passar ar através dele, pelo que tem sempre de ficar alguma energia no vento que sai da turbina." },
      { question: "Porque é que a velocidade do vento é tão importante?", answer: "A potência do vento cresce com o cubo da velocidade. Um local com vento médio de 7 m/s tem cerca de 31% mais potência disponível ((7 ÷ 6,4)³ ≈ 1,31) do que um com 6,4 m/s, pelo que pequenas diferenças de localização e de altura da torre fazem uma grande diferença." },
      { question: "Que fator de capacidade devo usar?", answer: "Depende muito do local, da altura da torre e da turbina, pelo que não existe um único valor correto. Use dados de vento medidos no seu local ou valores publicados para turbinas semelhantes na sua região. As turbinas pequenas em locais abrigados atingem frequentemente valores muito inferiores aos das turbinas grandes em locais abertos e ventosos." },
    ],
    sourcesUsedFor: [
      "A potência do vento, P = ½ρAv³, o coeficiente de potência e o limite de Betz de 16/27.",
      "A densidade do ar ao nível do mar da Atmosfera Padrão Internacional, 1,225 kg/m³.",
    ],
  },
  text: {
    diameter: "Diâmetro do rotor",
    diameterHelp: "O diâmetro do círculo descrito pelas pontas das pás (duas vezes o comprimento da pá mais o cubo).",
    diameterUnit: "Unidade do diâmetro",
    diameterUnits: { m: "Metros (m)", ft: "Pés (ft)" },
    speed: "Velocidade do vento",
    speedHelp: "A velocidade do vento à altura do cubo. A potência aumenta com o cubo da velocidade, pelo que uma pequena variação conta muito.",
    speedUnit: "Unidade de velocidade",
    speedUnits: { ms: "Metros por segundo (m/s)", kmh: "Quilómetros por hora (km/h)", mph: "Milhas por hora (mph)", kn: "Nós (kn)" },
    density: "Densidade do ar",
    densityHelp: "1,225 kg/m³ é o valor da Atmosfera Padrão Internacional ao nível do mar e a 15 °C. O ar é mais rarefeito em altitude e com tempo quente.",
    cp: "Coeficiente de potência (Cp)",
    cpHelp: "A fração da potência do vento que o rotor converte em produção. 0,40 é um valor razoável para uma boa turbina moderna; o máximo teórico é 16/27 ≈ 0,593 (o limite de Betz).",
    ratedPower: "Potência nominal (opcional)",
    ratedPowerHelp: "A potência indicada na chapa do gerador. Se for indicada, a produção fica limitada a este valor.",
    capacityFactor: "Fator de capacidade (opcional)",
    capacityFactorHelp: "A produção média ao longo de um ano, em percentagem da potência usada na estimativa. Deixe em branco para não calcular a energia anual.",
    errors: {
      betz: "O coeficiente de potência não pode ser superior a 16/27 ≈ 0,5926 (o limite de Betz). Nenhum rotor consegue captar uma fração maior da potência do vento.",
    },
    power: "Potência produzida pela turbina",
    caption: "Área varrida {area}, vento {speed}, Cp {cp}.",
    powerW: "Potência em watts",
    aeroPower: "Potência do rotor antes do limite da potência nominal",
    windPower: "Potência do vento através da área varrida (Cp = 1)",
    betzPower: "Potência máxima que qualquer rotor poderia captar (limite de Betz)",
    sweptArea: "Área varrida",
    speedMs: "Velocidade do vento em m/s",
    annualEnergy: "Energia anual, estimativa aproximada",
    annualEnergyMwh: "Energia anual em MWh",
    notes: {
      capped: "A esta velocidade do vento, o rotor poderia produzir mais do que a potência nominal, pelo que a produção fica limitada aos {rated} nominais.",
      annual: "A energia anual é uma estimativa aproximada: a potência acima × 8760 horas × o fator de capacidade. A produção real depende da variação da velocidade do vento ao longo do ano, da curva de potência da turbina, das paragens e das perdas.",
      single: "Esta é a produção a uma única velocidade de vento constante. O vento real muda constantemente, e as turbinas não produzem nada abaixo da velocidade de arranque e desligam-se acima da velocidade de corte.",
    },
  },
};

export default pt;
