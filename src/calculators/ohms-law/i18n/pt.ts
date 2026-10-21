import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OhmsLawText } from "../text/en";

const pt: CalculatorTranslation<OhmsLawText> = {
  content: {
    title: "Calculadora da lei de Ohm",
    shortTitle: "Lei de Ohm",
    summary: "Calcule a tensão, a corrente, a resistência e a potência a partir de quaisquer dois valores de V, I e R.",
    metaTitle: "Calculadora da lei de Ohm – Tensão, corrente e resistência",
    metaDescription:
      "Use a lei de Ohm para calcular a tensão, a corrente ou a resistência a partir dos outros dois valores, bem como a potência dissipada, com fórmulas e exemplos.",
    keywords: ["lei de ohm", "calcular resistência", "tensão elétrica", "intensidade de corrente", "potência elétrica", "volts amperes ohms"],
    intro: [
      "A lei de Ohm relaciona a tensão aos terminais de uma resistência, a corrente que a percorre e o valor da resistência: V = I × R.",
      "Introduza quaisquer dois valores para obter o terceiro, juntamente com a potência dissipada pelo componente.",
    ],
    howToUse: [
      "Escolha os dois valores que conhece.",
      "Introduza-os em volts, amperes ou ohms.",
      "Consulte o valor em falta e a potência em watts.",
    ],
    formulas: [
      { title: "Lei de Ohm", expression: "V = I × R\nI = V ÷ R\nR = V ÷ I", explanation: "V em volts, I em amperes, R em ohms." },
      { title: "Potência", expression: "P = V × I = I² × R = V² ÷ R", explanation: "Potência em watts." },
    ],
    examples: [
      { title: "12 V numa resistência de 4 Ω", steps: ["I = 12 ÷ 4 = 3 A", "P = 12 × 3 = 36 W"] },
      { title: "0,5 A através de 220 Ω", steps: ["V = 0,5 × 220", "= 110 V"] },
    ],
    assumptions: [
      "Aplica-se a componentes óhmicos cuja resistência não varia com a corrente.",
      "Em circuitos de corrente alternada com reatância (condensadores, bobinas), use a impedância.",
      "Trabalhar em circuitos com tensão da rede é perigoso; cumpra as regras técnicas de instalações elétricas e recorra a um eletricista qualificado.",
    ],
    faqs: [
      { question: "O que diz a lei de Ohm?", answer: "A corrente que percorre um condutor é proporcional à tensão entre os seus extremos: V = I × R." },
      { question: "Como calculo a potência a partir da corrente e da resistência?", answer: "P = I² × R. Uma corrente de 2 A através de 10 Ω dissipa 40 W." },
      {
        question: "A lei de Ohm aplica-se aos LED?",
        answer: "Não diretamente. Os LED não são lineares, por isso use a sua tensão direta e calcule uma resistência em série.",
      },
    ],
    sourcesUsedFor: ["A lei de Ohm e os seus limites.", "Fórmulas da potência P = IV = I²R = V²/R."],
  },
  text: {
    known: "Conheço",
    knownOptions: { VR: "Tensão e resistência", VI: "Tensão e corrente", IR: "Corrente e resistência" },
    voltage: "Tensão (V)",
    current: "Corrente (I)",
    resistance: "Resistência (R)",
    currentOut: "Corrente (I = V ÷ R)",
    resistanceOut: "Resistência (R = V ÷ I)",
    voltageOut: "Tensão (V = I × R)",
    power: "Potência (P = V × I)",
    voltageShort: "Tensão",
    currentShort: "Corrente",
    resistanceShort: "Resistência",
    note: "Aplica-se a componentes óhmicos (lineares) e a circuitos de corrente contínua, ou a valores eficazes em cargas de corrente alternada puramente resistivas.",
  },
};

export default pt;
