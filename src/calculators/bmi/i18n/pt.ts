import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BmiText } from "../text/en";

const pt: CalculatorTranslation<BmiText> = {
  content: {
    title: "Calculadora de IMC",
    shortTitle: "IMC",
    summary: "Calcule o índice de massa corporal a partir da altura e do peso em unidades métricas ou imperiais.",
    metaTitle: "Calculadora de IMC – Índice de massa corporal (adultos)",
    metaDescription:
      "Calcule o seu IMC com a altura e o peso em kg e cm ou em libras, pés e polegadas, com a categoria para adultos e o intervalo de peso saudável.",
    keywords: ["calcular imc", "índice de massa corporal", "peso ideal", "excesso de peso", "obesidade", "imc adultos"],
    intro: [
      "O índice de massa corporal (IMC) relaciona o peso com a altura. É uma medida rápida de rastreio para adultos, não um diagnóstico.",
      "Introduza a sua altura e o seu peso em unidades métricas ou imperiais para ver o seu IMC, a categoria para adultos e o intervalo de peso que corresponde a um IMC saudável para a sua altura.",
    ],
    howToUse: [
      "Escolha unidades métricas ou imperiais.",
      "Introduza o seu peso e a sua altura.",
      "Consulte o seu IMC, a sua categoria e o seu intervalo de peso saudável.",
    ],
    formulas: [
      { title: "IMC", expression: "IMC = peso (kg) ÷ altura (m)²", explanation: "As unidades imperiais são convertidas com 1 lb = 0,45359237 kg e 1 in = 2,54 cm." },
      {
        title: "Categorias para adultos",
        expression: "Menos de 18,5: baixo peso\n18,5–24,9: peso saudável\n25–29,9: excesso de peso\n30 ou mais: obesidade",
        explanation: "Categorias da Organização Mundial da Saúde para adultos.",
      },
    ],
    examples: [
      { title: "70 kg, 175 cm", steps: ["Altura = 1,75 m", "IMC = 70 ÷ 1,75² ≈ 22,9: peso saudável"] },
      { title: "180 lb, 5 ft 10 in", steps: ["180 lb = 81,65 kg; 70 in = 1,778 m", "IMC = 81,65 ÷ 1,778² ≈ 25,8: excesso de peso"] },
    ],
    assumptions: [
      "Para adultos com 18 anos ou mais. Em crianças e adolescentes usam-se percentis específicos por idade e sexo.",
      "O IMC não mede diretamente a gordura corporal e pode classificar mal desportistas, pessoas idosas e grávidas.",
      "Isto não constitui aconselhamento médico. Consulte um profissional de saúde sobre a sua saúde.",
    ],
    faqs: [
      { question: "Qual é um IMC saudável?", answer: "Para a maioria dos adultos, entre 18,5 e 24,9." },
      {
        question: "O IMC é fiável?",
        answer: "É uma ferramenta de rastreio útil ao nível da população, mas não distingue o músculo da gordura nem tem em conta onde a gordura se acumula.",
      },
      {
        question: "O IMC serve para crianças?",
        answer: "Não com as categorias para adultos. O IMC infantil é comparado com curvas de crescimento segundo a idade e o sexo.",
      },
    ],
    sourcesUsedFor: ["Definição do IMC em adultos e limiares de cada categoria.", "Fatores exatos de conversão de libras e polegadas."],
  },
  text: {
    units: "Unidades",
    unitOptions: { metric: "Métricas (kg, cm)", imperial: "Imperiais (lb, ft, in)" },
    weight: "Peso",
    height: "Altura",
    heightFt: "Altura (pés)",
    heightIn: "Altura (polegadas)",
    heightZero: "Introduza uma altura superior a 0.",
    primary: "Índice de massa corporal",
    caption: "{category} (intervalo para adultos).",
    category: "Categoria",
    categories: { under: "Baixo peso", healthy: "Peso saudável", over: "Excesso de peso", obese: "Obesidade" },
    healthyRange: "Peso saudável para esta altura",
    range: "{low}–{high} {unit}",
    note: "Categorias para adultos: menos de 18,5, baixo peso; 18,5–24,9, saudável; 25–29,9, excesso de peso; 30 ou mais, obesidade. O IMC não se interpreta da mesma forma em crianças, na gravidez nem em pessoas muito musculadas.",
  },
};

export default pt;
