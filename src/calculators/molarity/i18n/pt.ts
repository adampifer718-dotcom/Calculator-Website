import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MolarityText } from "../text/en";

const pt: CalculatorTranslation<MolarityText> = {
  content: {
    title: "Calculadora de molaridade",
    shortTitle: "Molaridade",
    summary: "Calcule a concentração molar de uma solução a partir da massa de soluto, da sua massa molar e do volume.",
    metaTitle: "Calculadora de molaridade – Concentração molar (mol/L)",
    metaDescription:
      "Calcule a molaridade em mol/L a partir da massa de soluto, da sua massa molar e do volume da solução, com as moles e a concentração em milimolar.",
    keywords: ["molaridade", "calcular molaridade", "concentração molar", "mol/L", "moles de soluto", "soluções química"],
    intro: [
      "A molaridade é o número de moles de soluto por litro de solução. É a forma mais habitual de exprimir a concentração nos laboratórios de química.",
      "Introduza a massa que pesou, a massa molar do soluto e o volume final da solução.",
    ],
    howToUse: [
      "Introduza a massa de soluto em gramas.",
      "Introduza a sua massa molar em g/mol.",
      "Introduza o volume final da solução e escolha litros ou mililitros.",
      "Consulte a molaridade e as moles de soluto.",
    ],
    formulas: [
      { title: "Moles", expression: "n = massa ÷ massa molar", explanation: "Dá as moles a partir dos gramas." },
      { title: "Molaridade", expression: "M = n ÷ V", explanation: "V é o volume da solução em litros." },
    ],
    examples: [
      { title: "58,44 g de NaCl em 1 L", steps: ["n = 58,44 ÷ 58,44 = 1 mol", "M = 1 ÷ 1 = 1 mol/L"] },
      { title: "5 g de glicose em 250 mL", steps: ["n = 5 ÷ 180,16 ≈ 0,02775 mol", "M = 0,02775 ÷ 0,25 ≈ 0,111 mol/L"] },
    ],
    assumptions: [
      "O volume é o volume final da solução depois de dissolvido o soluto.",
      "A massa molar tem de corresponder à forma exata utilizada, incluindo a água de hidratação.",
    ],
    faqs: [
      {
        question: "Qual é a diferença entre molaridade e molalidade?",
        answer: "A molaridade corresponde às moles por litro de solução; a molalidade, às moles por quilograma de solvente.",
      },
      {
        question: "Como preparo uma solução 1 M?",
        answer: "Dissolva tantos gramas de soluto quanto a sua massa molar e acrescente solvente até o volume total ser de 1 litro.",
      },
      { question: "O que significa mM?", answer: "Milimolar: uma milésima de mole por litro." },
    ],
    sourcesUsedFor: ["Definição de molaridade e relação entre massa e moles."],
  },
  text: {
    mass: "Massa de soluto",
    molarMass: "Massa molar",
    molarMassHelp: "Da tabela periódica; por exemplo, NaCl = 58,44 g/mol.",
    volume: "Volume da solução",
    volumeUnit: "Unidade de volume",
    volumeUnits: { L: "Litros (L)", mL: "Mililitros (mL)" },
    molarity: "Molaridade",
    amount: "Quantidade de soluto",
    millimolar: "Em milimolar",
    note: "O volume é o volume final da solução, não o volume de solvente adicionado.",
  },
};

export default pt;
