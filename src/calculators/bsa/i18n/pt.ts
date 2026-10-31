import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BsaText } from "../text/en";

const pt: CalculatorTranslation<BsaText> = {
  content: {
    title: "Calculadora de superfície corporal",
    shortTitle: "Superfície corporal",
    summary:
      "Estime a superfície corporal em m² a partir da altura e do peso com a fórmula de Mosteller, comparada com as fórmulas de Du Bois, Haycock e Gehan–George.",
    metaTitle: "Superfície corporal (SC) – Fórmulas de Mosteller e Du Bois",
    metaDescription:
      "Estime a superfície corporal (SC) em m² e ft² a partir da altura e do peso, com a fórmula de Mosteller ao lado das de Du Bois, Haycock e Gehan–George.",
    keywords: ["superfície corporal", "calculadora SC", "área de superfície corporal", "fórmula de Mosteller", "fórmula de Du Bois", "fórmula de Haycock", "Gehan George", "SC m2"],
    intro: [
      "A superfície corporal (SC) é a área total da pele, expressa em metros quadrados. Usa-se em medicina para ajustar algumas medidas ao tamanho do corpo, como o índice cardíaco ou a filtração renal. Medi-la diretamente não é prático, pelo que é estimada a partir da altura e do peso.",
      "Esta calculadora usa a fórmula de Mosteller como resultado principal por ser simples e muito utilizada. As fórmulas de Du Bois, Haycock e Gehan–George são apresentadas ao lado, para que veja quanto diferem as estimativas.",
    ],
    howToUse: [
      "Introduza o peso e escolha quilogramas ou libras.",
      "Introduza a altura e escolha centímetros ou polegadas.",
      "Consulte a estimativa de Mosteller em m² e ft² e compare as quatro fórmulas na tabela.",
    ],
    formulas: [
      { title: "Mosteller", expression: "SC = √(altura × peso ÷ 3600)", explanation: "Altura em cm, peso em kg, resultado em m²." },
      {
        title: "Du Bois e Du Bois",
        expression: "SC = 0,007184 × peso^0,425 × altura^0,725",
        explanation: "A mais antiga das quatro, ajustada a um pequeno grupo de pessoas em 1916.",
      },
      {
        title: "Haycock",
        expression: "SC = 0,024265 × peso^0,5378 × altura^0,3964",
        explanation: "Ajustada a medições desde bebés até adultos.",
      },
      {
        title: "Gehan e George",
        expression: "SC = 0,0235 × peso^0,51456 × altura^0,42246",
        explanation: "Ajustada a um grupo maior, de 401 pessoas.",
      },
      {
        title: "Pés quadrados",
        expression: "ft² = m² ÷ 0,09290304",
        explanation: "1 ft = 0,3048 m exatamente, pelo que 1 ft² = 0,09290304 m².",
      },
    ],
    examples: [
      {
        title: "70 kg, 175 cm",
        steps: [
          "Mosteller: √(175 × 70 ÷ 3600) = √3,4028 ≈ 1,84 m²",
          "Du Bois ≈ 1,848 m², Haycock ≈ 1,847 m², Gehan–George ≈ 1,854 m²",
          "1,8447 m² ÷ 0,09290304 ≈ 19,86 ft²",
        ],
      },
      {
        title: "82 kg, 168 cm",
        steps: [
          "Mosteller: √(168 × 82 ÷ 3600) = √3,8267 ≈ 1,96 m²",
          "Du Bois dá cerca de 1,919 m², o valor mais baixo dos quatro",
          "Haycock dá cerca de 1,979 m², o mais alto",
        ],
      },
      {
        title: "165 lb, 64 in",
        steps: [
          "165 lb × 0,45359237 = 74,84 kg; 64 in × 2,54 = 162,56 cm",
          "Mosteller: √(162,56 × 74,84 ÷ 3600) ≈ 1,84 m²",
          "Du Bois ≈ 1,802 m², Haycock ≈ 1,859 m²",
        ],
      },
    ],
    assumptions: [
      "O resultado é uma estimativa, e não um conselho médico, e esta calculadora ainda não foi revista por profissionais. Nunca a use para calcular a dose de um medicamento sem confirmação por um profissional de saúde qualificado.",
      "As quatro fórmulas são ajustes estatísticos a grupos de pessoas medidas há décadas. Podem diferir entre si e da superfície real de uma pessoa em vários por cento, sobretudo em pessoas muito pequenas, muito altas ou muito pesadas.",
      "São aceites pesos de 0,5 a 500 kg e alturas de 30 a 260 cm. Os hospitais podem usar outra fórmula, ou um peso ajustado, em crianças ou em pessoas com obesidade.",
      "As libras são convertidas com 1 lb = 0,45359237 kg e as polegadas com 1 in = 2,54 cm, ambos valores exatos.",
    ],
    faqs: [
      {
        question: "Qual é uma superfície corporal típica?",
        answer:
          "Nos adultos situa-se normalmente entre cerca de 1,6 e 2,2 m², consoante a altura e o peso. Os valores nas crianças são muito menores, e as fórmulas diferem mais nesses tamanhos.",
      },
      {
        question: "Que fórmula devo usar?",
        answer:
          "A de Mosteller é a mais comum, porque é fácil de calcular e concorda bem com as outras na maioria dos adultos. As clínicas e os protocolos indicam muitas vezes uma fórmula, por isso use a que a sua equipa de saúde utiliza.",
      },
      {
        question: "Porque é que as fórmulas dão resultados diferentes?",
        answer:
          "Cada uma foi ajustada a um grupo diferente de pessoas, com um método diferente de medir a área da pele. As diferenças costumam ser pequenas em adultos médios e maiores em pessoas fora do intervalo com que foram construídas.",
      },
    ],
    sourcesUsedFor: [
      "A fórmula de Mosteller SC = √(altura em cm × peso em kg ÷ 3600).",
      "As constantes de Du Bois 0,007184 × peso^0,425 × altura^0,725.",
      "A fórmula de Haycock 0,024265 × peso^0,5378 × altura^0,3964.",
      "A fórmula de Gehan–George 0,0235 × peso^0,51456 × altura^0,42246.",
    ],
  },
  text: {
    weight: "Peso",
    weightUnit: "Unidade de peso",
    weightUnits: { kg: "Quilogramas (kg)", lb: "Libras (lb)" },
    height: "Altura",
    heightUnit: "Unidade de altura",
    heightUnits: { cm: "Centímetros (cm)", in: "Polegadas (in)" },
    errors: {
      weightRange: "Introduza um peso entre {min} e {max}.",
      heightRange: "Introduza uma altura entre {min} e {max}.",
    },
    bsa: "Superfície corporal (Mosteller)",
    caption: "√({height} cm × {weight} kg ÷ 3600).",
    bsaFt: "Superfície corporal (Mosteller) em pés quadrados",
    spread: "Diferença entre as quatro fórmulas",
    table: {
      caption: "Superfície corporal por fórmula",
      formula: "Fórmula",
      m2: "m²",
      ft2: "ft²",
    },
    formulas: { mosteller: "Mosteller (1987)", duBois: "Du Bois e Du Bois (1916)", haycock: "Haycock et al. (1978)", gehanGeorge: "Gehan e George (1970)" },
    notes: {
      estimate:
        "Cada fórmula é uma estimativa ajustada a um grupo limitado de pessoas; podem diferir entre si e de uma superfície medida em vários por cento, sobretudo nos extremos de tamanho.",
      dosing:
        "Não use este resultado para calcular a dose de um medicamento. As doses baseadas na superfície corporal têm de ser calculadas e verificadas por um profissional de saúde qualificado.",
    },
  },
};

export default pt;
