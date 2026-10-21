import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { IdealGasLawText } from "../text/en";

const pt: CalculatorTranslation<IdealGasLawText> = {
  content: {
    title: "Calculadora da lei dos gases ideais",
    shortTitle: "Lei dos gases ideais",
    summary: "Resolva PV = nRT para a pressão, o volume, a quantidade de matéria ou a temperatura, com conversão de unidades incluída.",
    metaTitle: "Calculadora da lei dos gases ideais – Resolva PV = nRT",
    metaDescription:
      "Resolva PV = nRT para a pressão, o volume, a quantidade de gás ou a temperatura. Combine Pa, kPa, bar, atm, mmHg, litros, m³, kelvin, °C e °F.",
    keywords: ["lei dos gases ideais", "pv=nrt", "constante dos gases", "pressão", "moles", "kelvin", "leis dos gases", "química"],
    intro: [
      "A lei dos gases ideais relaciona quatro propriedades de um gás: a pressão, o volume, a quantidade em moles e a temperatura absoluta. Se conhecer três, pode determinar a quarta.",
      "Escolha o valor que pretende calcular e introduza os outros três nas unidades que tiver. A calculadora converte tudo para unidades SI, resolve PV = nRT e volta a converter o resultado.",
    ],
    howToUse: [
      "Escolha o que pretende calcular: pressão, volume, quantidade ou temperatura.",
      "Introduza os três valores conhecidos e escolha uma unidade para cada um.",
      "Selecione a unidade do resultado na lista de unidades correspondente.",
      "Consulte o resultado, o mesmo valor noutras unidades e o volume molar.",
    ],
    formulas: [
      { title: "Lei dos gases ideais", expression: "P × V = n × R × T", explanation: "P em pascal, V em metros cúbicos, n em moles e T em kelvin." },
      {
        title: "Constante dos gases",
        expression: "R = Nₐ × k = 8,31446261815324 J/(mol·K)",
        explanation: "É exata desde a redefinição do SI de 2019, porque Nₐ e k têm valores fixos.",
      },
      {
        title: "Kelvin",
        expression: "T(K) = T(°C) + 273,15 = (T(°F) − 32) × 5/9 + 273,15",
        explanation: "A lei exige a temperatura absoluta, pelo que os graus Celsius e Fahrenheit são convertidos primeiro.",
      },
    ],
    examples: [
      {
        title: "Pressão de 2 mol num depósito de 50 L a 25 °C",
        steps: ["T = 25 + 273,15 = 298,15 K e V = 0,05 m³", "P = 2 × 8,314463 × 298,15 ÷ 0,05 ≈ 99 158 Pa", "≈ 99,158 kPa"],
      },
      {
        title: "Volume de 1 mol a 0 °C e 1 atm",
        steps: ["T = 273,15 K e P = 101 325 Pa", "V = 1 × 8,314463 × 273,15 ÷ 101 325 ≈ 0,022414 m³", "≈ 22,414 L"],
      },
      {
        title: "Temperatura de 0,5 mol em 10 L a 200 kPa",
        steps: ["T = 200 000 × 0,01 ÷ (0,5 × 8,314463) ≈ 481,09 K", "481,09 − 273,15 ≈ 207,94 °C"],
      },
    ],
    assumptions: [
      "O gás é tratado como ideal: as suas moléculas não ocupam espaço e não se atraem entre si.",
      "Os gases reais desviam-se de forma apreciável a alta pressão, a baixa temperatura e perto do ponto em que condensam. Nesses casos, use uma equação de estado como a de van der Waals.",
      "A pressão é absoluta, não manométrica. Some primeiro a pressão atmosférica à leitura do manómetro.",
    ],
    faqs: [
      {
        question: "Porque é que a temperatura tem de estar em kelvin?",
        answer: "A lei é proporcional à temperatura absoluta. A 0 °C um gás continua a ter muita energia térmica, pelo que os valores em Celsius ou Fahrenheit dariam resultados errados. A calculadora faz a conversão por si.",
      },
      {
        question: "Que valor de R devo usar?",
        answer: "Em unidades SI, R = 8,314462618 J/(mol·K). Com litros e atmosferas é de aproximadamente 0,082057 L·atm/(mol·K). Esta ferramenta trabalha sempre internamente no SI, pelo que não tem de escolher.",
      },
      {
        question: "O que é o volume molar de um gás?",
        answer: "É o volume ocupado por uma mole. Para um gás ideal a 0 °C e 1 atm é de cerca de 22,414 L; a 25 °C e 1 bar, de cerca de 24,79 L.",
      },
    ],
    sourcesUsedFor: [
      "Valor exato da constante molar dos gases R = Nₐk = 8,314462618… J/(mol·K) e da constante de Avogadro.",
      "A lei dos gases ideais e a sua falta de validade a baixa temperatura e alta pressão.",
    ],
  },
  text: {
    solve: "Calcular",
    solveOptions: { P: "Pressão (P)", V: "Volume (V)", n: "Quantidade (n)", T: "Temperatura (T)" },
    pressure: "Pressão (P)",
    pressureUnit: "Unidade de pressão",
    pressureUnits: {
      Pa: "Pascal (Pa)",
      kPa: "Quilopascal (kPa)",
      bar: "Bar (bar)",
      atm: "Atmosferas padrão (atm)",
      mmHg: "Milímetros de mercúrio (mmHg)",
    },
    volume: "Volume (V)",
    volumeUnit: "Unidade de volume",
    volumeUnits: { L: "Litros (L)", mL: "Mililitros (mL)", m3: "Metros cúbicos (m³)" },
    moles: "Quantidade de gás (n)",
    temperature: "Temperatura (T)",
    temperatureUnit: "Unidade de temperatura",
    temperatureUnits: { K: "Kelvin (K)", C: "Graus Celsius (°C)", F: "Graus Fahrenheit (°F)" },
    unitHelp: "Para o valor que está a calcular, é a unidade do resultado.",
    belowAbsoluteZero: "A temperatura tem de estar acima do zero absoluto (0 K = −273,15 °C = −459,67 °F).",
    results: { P: "Pressão", V: "Volume", n: "Quantidade de gás", T: "Temperatura" },
    inUnit: "Em {unit}",
    molecules: "Número de moléculas (n × Nₐ)",
    molarVolume: "Volume molar (V ÷ n)",
    note: "Usa R = 8,31446261815324 J/(mol·K). Os gases reais afastam-se deste modelo ideal a alta pressão e a baixa temperatura, sobretudo perto da condensação.",
  },
};

export default pt;
