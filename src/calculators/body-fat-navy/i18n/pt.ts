import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BodyFatText } from "../text/en";

const pt: CalculatorTranslation<BodyFatText> = {
  content: {
    title: "Calculadora de gordura corporal",
    shortTitle: "Gordura corporal",
    summary:
      "Estime a percentagem de gordura corporal a partir da altura e dos perímetros do pescoço, da cintura e da anca, com o método de perímetros da Marinha dos EUA.",
    metaTitle: "Calculadora de gordura corporal – Método da Marinha dos EUA",
    metaDescription:
      "Estime a percentagem de gordura corporal com uma fita métrica e as equações de perímetros da Marinha dos EUA, em cm ou polegadas, com massa gorda e magra.",
    keywords: ["gordura corporal", "percentagem de gordura corporal", "método da Marinha", "fita métrica", "método dos perímetros", "massa magra", "massa gorda"],
    intro: [
      "A percentagem de gordura corporal é a parte do seu peso corporal que corresponde a gordura. Os métodos laboratoriais medem-na diretamente, mas uma fita métrica permite obter uma estimativa rápida.",
      "Esta calculadora usa o método de perímetros da Marinha dos EUA, desenvolvido por Hodgdon e Beckett em 1984. Precisa da sua altura e dos perímetros do pescoço e da cintura, e ainda da anca na equação para mulheres. Acrescente o seu peso para ver quanto corresponde a massa gorda e quanto a massa magra.",
    ],
    howToUse: [
      "Escolha centímetros ou polegadas e o sexo usado na equação.",
      "Introduza a sua altura e os perímetros do pescoço e da cintura (e o perímetro da anca na equação para mulheres).",
      "Se quiser, introduza o seu peso para o dividir em massa gorda e massa magra.",
      "Consulte a percentagem de gordura corporal estimada.",
    ],
    formulas: [
      {
        title: "Homens (comprimentos em polegadas)",
        expression: "%GC = 86,010 × log₁₀(cintura − pescoço) − 70,041 × log₁₀(altura) + 36,76",
        explanation: "A cintura é medida à volta do abdómen, à altura do umbigo.",
      },
      {
        title: "Mulheres (comprimentos em polegadas)",
        expression: "%GC = 163,205 × log₁₀(cintura + anca − pescoço) − 97,684 × log₁₀(altura) − 78,387",
        explanation: "A cintura é medida no ponto mais estreito e a anca no ponto mais largo.",
      },
      {
        title: "Centímetros",
        expression: "comprimento (in) = comprimento (cm) ÷ 2,54",
        explanation: "As medidas em centímetros são convertidas em polegadas antes de se aplicarem as equações.",
      },
      {
        title: "Massa gorda e massa magra",
        expression: "massa gorda = peso × %GC ÷ 100\nmassa magra = peso − massa gorda",
        explanation: "Aqui, massa magra significa tudo exceto a gordura: músculo, osso, órgãos e água.",
      },
    ],
    examples: [
      {
        title: "Homem, 178 cm de altura, pescoço 38 cm, cintura 88 cm, peso 80 kg",
        steps: [
          "Em polegadas: altura 70,08, pescoço 14,96, cintura 34,65",
          "86,010 × log₁₀(19,69) − 70,041 × log₁₀(70,08) + 36,76 ≈ 18,8 %",
          "Massa gorda ≈ 80 × 0,188 = 15,0 kg; massa magra ≈ 65,0 kg",
        ],
      },
      {
        title: "Mulher, 65 in de altura, pescoço 13 in, cintura 29 in, anca 39 in, peso 140 lb",
        steps: [
          "cintura + anca − pescoço = 29 + 39 − 13 = 55 in",
          "163,205 × log₁₀(55) − 97,684 × log₁₀(65) − 78,387 ≈ 28,6 %",
          "Massa gorda ≈ 140 × 0,2856 = 40,0 lb; massa magra ≈ 100,0 lb",
        ],
      },
    ],
    assumptions: [
      "O resultado é uma estimativa, não um aconselhamento médico, e esta calculadora ainda não foi revista por profissionais. Fale com um profissional de saúde sobre o que a sua gordura corporal significa para si.",
      "As equações foram desenvolvidas com militares adultos da Marinha dos EUA. Ficam normalmente a cerca de 3–4 pontos percentuais das medições laboratoriais e podem ser menos precisas em pessoas muito musculadas, muito magras ou mais velhas, e na gravidez.",
      "Pequenos erros de medição alteram visivelmente o resultado, sobretudo na cintura. Meça com cuidado e sempre da mesma forma.",
      "Não se apresentam categorias de saúde, porque nenhuma tabela de classificação foi verificada para esta página.",
    ],
    faqs: [
      {
        question: "Qual é a precisão do método da Marinha?",
        answer: "Na maioria dos adultos, fica a poucos pontos percentuais de métodos como a pesagem hidrostática, mas os erros individuais podem ser maiores. É mais útil para acompanhar a evolução ao longo do tempo, com a mesma técnica de medição.",
      },
      {
        question: "Porque é que a equação para mulheres usa a anca?",
        answer: "As mulheres tendem a acumular mais gordura na anca e nas coxas, por isso acrescentar o perímetro da anca melhorou o ajuste da equação para mulheres.",
      },
      {
        question: "Porque é que a altura baixa a estimativa?",
        answer: "Uma pessoa mais alta com a mesma cintura e o mesmo pescoço tem, em proporção, menos perímetro para a sua estrutura, por isso a equação subtrai um termo baseado na altura.",
      },
    ],
    sourcesUsedFor: [
      "O método de perímetros para homens, a partir dos perímetros do pescoço e do abdómen e da altura, e a sua precisão face à pesagem hidrostática.",
      "Contexto sobre o método da fita métrica usado pelas forças armadas e sobre os pontos onde se medem o pescoço, a cintura e a anca.",
    ],
  },
  text: {
    unit: "Unidade de medida",
    units: { cm: "Centímetros (cm)", in: "Polegadas (in)" },
    sex: "Sexo usado na equação",
    sexHelp: "O método tem equações diferentes para homens e mulheres; a das mulheres usa também o perímetro da anca.",
    sexes: { male: "Homem", female: "Mulher" },
    height: "Altura",
    heightHelp: "Altura em pé, sem sapatos.",
    neck: "Perímetro do pescoço",
    neckHelp: "Logo abaixo da laringe (maçã de Adão), com a fita ligeiramente inclinada para baixo na frente.",
    waist: "Perímetro da cintura",
    waistHelp: "Homens: à volta do abdómen, à altura do umbigo. Mulheres: no ponto mais estreito da cintura.",
    hip: "Perímetro da anca",
    hipHelp: "À volta da parte mais larga da anca e das nádegas.",
    weight: "Peso corporal",
    weightHelp: "Opcional. Serve para dividir o seu peso em massa gorda e massa magra.",
    weightUnit: "Unidade de peso",
    weightUnits: { kg: "Quilogramas (kg)", lb: "Libras (lb)" },
    bodyFat: "Gordura corporal estimada",
    caption: "{method}; altura {height}, pescoço {neck}, cintura {waist}.",
    captionHip: "{method}; altura {height}, pescoço {neck}, cintura {waist}, anca {hip}.",
    method: "Método",
    methodName: "Método de perímetros da Marinha dos EUA (Hodgdon e Beckett, 1984)",
    methodShort: "Método da Marinha dos EUA",
    fatMass: "Massa gorda",
    leanMass: "Massa magra (tudo exceto a gordura)",
    errors: {
      range: "Introduza um valor entre {min} e {max} {unit}.",
      waistNeck: "Nesta equação, a cintura tem de ser maior do que o pescoço.",
      logArgument: "Cintura + anca − pescoço tem de ser superior a 0.",
      outOfRange:
        "Estas medidas dão uma estimativa de {value}, fora do intervalo que a equação consegue descrever. Verifique as medidas e a unidade.",
    },
    notes: {
      estimate:
        "Uma estimativa a partir de medições com fita métrica. Em comparação com os métodos laboratoriais, as equações de perímetros diferem normalmente cerca de 3–4 pontos percentuais, e mais em pessoas muito magras ou muito musculadas.",
      measure: "Meça sobre a pele, descontraído e sem encolher a barriga, e faça a média de duas ou três leituras.",
      noCategories: "Não se indicam aqui categorias de saúde; peça a um profissional de saúde que interprete o seu resultado.",
      extreme: "Este resultado está perto do limite daquilo para que a equação foi desenvolvida, pelo que é menos fiável.",
    },
  },
};

export default pt;
