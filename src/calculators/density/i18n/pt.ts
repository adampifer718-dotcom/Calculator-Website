import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { DensityText } from "../text/en";

const pt: CalculatorTranslation<DensityText> = {
  content: {
    title: "Calculadora de densidade",
    shortTitle: "Densidade",
    summary: "Calcule a densidade a partir da massa e do volume, ou obtenha a massa ou o volume, em unidades métricas ou norte-americanas.",
    metaTitle: "Calculadora de densidade – Resolva ρ = m/V",
    metaDescription:
      "Resolva ρ = m/V em ordem à densidade, à massa ou ao volume. Use gramas, quilogramas ou libras e cm³, litros, m³ ou ft³; obtenha kg/m³, g/cm³ e lb/ft³.",
    keywords: ["densidade", "calcular densidade", "massa e volume", "rho", "kg/m3", "g/cm3", "densidade relativa", "massa volúmica"],
    intro: [
      "A densidade indica quanta massa cabe num determinado volume. Um litro de água tem uma massa de cerca de um quilograma, enquanto um litro de aço tem quase oito.",
      "Esta calculadora reorganiza ρ = m/V para que possa obter qualquer um dos três valores em falta. As unidades são convertidas automaticamente e o resultado é também apresentado em kg/m³, g/cm³ e lb/ft³ ou nas restantes unidades de massa ou de volume.",
    ],
    howToUse: [
      "Escolha o que pretende calcular: densidade, massa ou volume.",
      "Introduza os dois valores conhecidos e escolha uma unidade para cada um.",
      "Na lista de unidades do valor que procura, escolha a unidade em que quer o resultado.",
      "Consulte o resultado, as suas equivalências noutras unidades e a comparação com a água.",
    ],
    formulas: [
      { title: "Densidade", expression: "ρ = m ÷ V", explanation: "A massa dividida pelo volume que ocupa." },
      { title: "Massa", expression: "m = ρ × V", explanation: "Multiplique a densidade pelo volume." },
      { title: "Volume", expression: "V = m ÷ ρ", explanation: "Divida a massa pela densidade." },
      {
        title: "Fatores de conversão",
        expression: "1 g/cm³ = 1000 kg/m³ ≈ 62,428 lb/ft³",
        explanation: "Baseados nas definições exatas 1 lb = 0,45359237 kg e 1 ft³ = 0,028316846592 m³.",
      },
    ],
    examples: [
      { title: "Um bloco metálico de 810 g e 300 cm³", steps: ["ρ = 810 g ÷ 300 cm³", "= 2,7 g/cm³, ou seja, 2700 kg/m³"] },
      { title: "Massa de 2,5 L de óleo a 0,92 g/cm³", steps: ["0,92 g/cm³ = 920 kg/m³ e 2,5 L = 0,0025 m³", "m = 920 × 0,0025 = 2,3 kg"] },
      { title: "Volume de 39,25 kg de aço a 7850 kg/m³", steps: ["V = 39,25 ÷ 7850 = 0,005 m³", "0,005 m³ = 5 L"] },
    ],
    assumptions: [
      "Considera-se que o material é homogéneo, de modo que uma única densidade descreve toda a amostra.",
      "A comparação com a água usa 1000 kg/m³. A água real é ligeiramente menos densa à temperatura ambiente (cerca de 998 kg/m³ a 20 °C).",
      "A densidade de líquidos e gases depende da temperatura e da pressão. Use uma densidade medida nas suas condições.",
    ],
    faqs: [
      {
        question: "1 g/cm³ é o mesmo que 1 g/mL?",
        answer: "Sim. Um centímetro cúbico e um mililitro são o mesmo volume, pelo que as duas unidades são idênticas.",
      },
      { question: "Como converto g/cm³ em kg/m³?", answer: "Multiplique por 1000. Por exemplo, 2,7 g/cm³ equivalem a 2700 kg/m³." },
      {
        question: "O que é a densidade relativa?",
        answer: "É a densidade de um material dividida pela densidade da água. Um valor superior a 1 significa que o material afunda na água; inferior a 1, que flutua.",
      },
    ],
    sourcesUsedFor: [
      "Definição ρ = m/V e unidade SI kg/m³.",
      "Fatores de conversão da libra, do pé cúbico e de lb/ft³.",
    ],
  },
  text: {
    solve: "Calcular",
    solveOptions: { density: "Densidade (ρ)", mass: "Massa (m)", volume: "Volume (V)" },
    mass: "Massa (m)",
    massUnit: "Unidade de massa",
    massUnits: { g: "Gramas (g)", kg: "Quilogramas (kg)", lb: "Libras (lb)" },
    volume: "Volume (V)",
    volumeUnit: "Unidade de volume",
    volumeUnits: { cm3: "Centímetros cúbicos (cm³ = mL)", L: "Litros (L)", m3: "Metros cúbicos (m³)", ft3: "Pés cúbicos (ft³)" },
    density: "Densidade (ρ)",
    densityUnit: "Unidade de densidade",
    densityUnits: {
      gcm3: "Gramas por centímetro cúbico (g/cm³)",
      kgm3: "Quilogramas por metro cúbico (kg/m³)",
      lbft3: "Libras por pé cúbico (lb/ft³)",
    },
    unitHelp: "Para o valor que está a calcular, é a unidade do resultado.",
    results: { density: "Densidade", mass: "Massa", volume: "Volume" },
    inUnit: "Em {unit}",
    relative: "Em relação à água (1000 kg/m³)",
    floats: "Menos denso do que a água, pelo que flutuaria em água pura.",
    sinks: "Mais denso do que a água, pelo que afundaria em água pura.",
    note: "1 cm³ equivale a 1 mL. A densidade de líquidos e gases varia com a temperatura, e a dos gases também com a pressão.",
  },
};

export default pt;
