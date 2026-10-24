import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MolarMassText } from "../text/en";

const pt: CalculatorTranslation<MolarMassText> = {
  content: {
    title: "Calculadora de massa molar",
    shortTitle: "Massa molar",
    summary: "Escreva uma fórmula química, com parênteses e hidratos, e obtenha a massa molar em g/mol, com a contribuição de cada elemento para a massa.",
    metaTitle: "Calculadora de massa molar – g/mol a partir da fórmula",
    metaDescription:
      "Obtenha a massa molar de uma fórmula química em g/mol, com parênteses e hidratos como CuSO4·5H2O, e o número de átomos e a percentagem mássica por elemento.",
    keywords: ["massa molar", "calcular massa molar", "massa molecular", "g/mol", "massa molar de um composto", "composição percentual", "massa molar de hidratos"],
    intro: [
      "A massa molar de uma substância é a massa de uma mole dessa substância, em gramas por mole. Para um composto, é simplesmente a soma das massas atómicas de todos os átomos da fórmula: a água, H2O, tem dois hidrogénios e um oxigénio, ou seja, cerca de 2 × 1,008 + 15,999 = 18,015 g/mol.",
      "Escreva qualquer fórmula e esta calculadora conta os átomos por si, incluindo grupos entre parênteses curvos ou retos, como Ca(OH)2 ou K4[Fe(CN)6], e hidratos como CuSO4·5H2O. Mostra também a parte da massa total que cada elemento representa.",
    ],
    howToUse: [
      "Escreva a fórmula com as maiúsculas corretas: Co é o cobalto, enquanto CO é o monóxido de carbono.",
      "Coloque o índice depois de cada elemento ou grupo entre parênteses, por exemplo Al2(SO4)3. Sem índice, conta como 1.",
      "Num hidrato, separe as partes com ·, . ou * e coloque o número de moléculas de água à frente, como em MgSO4·7H2O.",
      "Consulte a massa molar e a tabela com o número de átomos, as contribuições para a massa e as percentagens mássicas.",
    ],
    formulas: [
      { title: "Massa molar", expression: "M = Σ (nᵢ × Aᵣ,ᵢ)  g/mol", explanation: "nᵢ é o número de átomos do elemento i na fórmula e Aᵣ,ᵢ é a sua massa atómica padrão." },
      { title: "Grupos e hidratos", expression: "(X)ₖ → cada índice no interior × k\nA·nB → átomos de A + n × átomos de B", explanation: "Os multiplicadores dos parênteses aplicam-se a tudo o que está no interior, incluindo grupos aninhados; o coeficiente de um hidrato aplica-se à parte depois do ponto." },
      { title: "Percentagem mássica", expression: "% elemento i = nᵢ × Aᵣ,ᵢ ÷ M × 100", explanation: "A fração da massa molar que provém de cada elemento." },
    ],
    examples: [
      { title: "Glucose, C6H12O6", steps: ["Carbono: 6 × 12,011 = 72,066", "Hidrogénio: 12 × 1,008 = 12,096", "Oxigénio: 6 × 15,999 = 95,994", "M = 72,066 + 12,096 + 95,994 = 180,156 g/mol"] },
      { title: "Sulfato de cobre(II) penta-hidratado, CuSO4·5H2O", steps: ["CuSO4: 63,546 + 32,06 + 4 × 15,999 = 159,602", "5 H2O: 5 × (2 × 1,008 + 15,999) = 5 × 18,015 = 90,075", "M = 159,602 + 90,075 = 249,677 g/mol", "O cobre representa 63,546 ÷ 249,677 ≈ 25,45% da massa"] },
      { title: "Ferrocianeto de potássio, K4[Fe(CN)6]", steps: ["Potássio: 4 × 39,098 = 156,392", "Ferro: 1 × 55,845 = 55,845", "(CN)6: 6 × (12,011 + 14,007) = 156,108", "M = 156,392 + 55,845 + 156,108 = 368,345 g/mol"] },
    ],
    assumptions: [
      "As massas atómicas são as massas atómicas padrão abreviadas da IUPAC/CIAAW. Quando a massa atómica de um elemento varia na natureza e é indicada como um intervalo, usa-se o valor convencional único, pelo que o último algarismo pode diferir de outras tabelas.",
      "Os elementos sem massa atómica padrão, como o tecnécio, o promécio, o polónio e a maioria dos elementos mais pesados do que o bismuto, exceto o tório, o protactínio e o urânio, são rejeitados, porque a sua massa molar depende do isótopo.",
      "Não são suportadas cargas, isótopos (como D ou ¹³C) nem símbolos de estado físico. A fórmula é tratada como uma unidade de fórmula neutra com abundâncias isotópicas naturais; a massa dos eletrões ganhos ou perdidos por um ião é desprezável.",
    ],
    faqs: [
      { question: "A massa molar é o mesmo que a massa molecular?", answer: "Têm o mesmo valor numérico. A massa molecular relativa não tem unidade, enquanto a massa molar se exprime em gramas por mole. A água tem uma massa molecular relativa de 18,015 e uma massa molar de 18,015 g/mol." },
      { question: "Como introduzo um hidrato?", answer: "Escreva o sal, depois um ponto (·, . ou *), depois o número de moléculas de água e H2O, por exemplo CuSO4·5H2O ou Na2CO3*10H2O. O coeficiente multiplica tudo o que está na parte depois do ponto." },
      { question: "Porque é que o meu manual indica um valor ligeiramente diferente?", answer: "As tabelas arredondam as massas atómicas de formas diferentes e algumas usam valores mais antigos. O cloro, por exemplo, aparece aqui como 35,45, mas como 35,453 em tabelas mais antigas, o que altera a última casa decimal do NaCl." },
    ],
    sourcesUsedFor: ["Massas atómicas padrão abreviadas e valores convencionais usados para cada elemento."],
  },
  text: {
    formula: "Fórmula química",
    formulaHelp:
      "Os símbolos dos elementos distinguem maiúsculas de minúsculas (Co é o cobalto, CO é o monóxido de carbono). Use ( ) ou [ ] para grupos e ·, . ou * para hidratos, por exemplo CuSO4·5H2O.",
    formulaPlaceholder: "por exemplo Ca(OH)2",
    errors: {
      empty: "Introduza uma fórmula química.",
      tooLong: "A fórmula é demasiado longa. Use, no máximo, 200 caracteres.",
      invalidChar: "Carácter inválido “{token}” na posição {position}. Use apenas símbolos de elementos, números, parênteses e pontos de hidrato.",
      lowercase: "Letra minúscula inesperada “{token}” na posição {position}. Os símbolos dos elementos começam por maiúscula, por exemplo Na ou Cl.",
      unknownElement: "Símbolo de elemento desconhecido “{token}” na posição {position}.",
      noStandardWeight: "{token} (posição {position}) não tem massa atómica padrão, pelo que não é possível calcular a sua massa molar.",
      unclosed: "Parênteses desequilibrados: o “{token}” na posição {position} nunca é fechado.",
      unexpectedClose: "Parênteses desequilibrados: o “{token}” na posição {position} não tem parêntese de abertura correspondente.",
      mismatched: "Parênteses não correspondentes: o “{token}” na posição {position} não corresponde ao parêntese que fecha.",
      emptyGroup: "O grupo entre parênteses que começa na posição {position} está vazio.",
      zeroCount: "O índice na posição {position} é zero. Os índices têm de ser números inteiros iguais ou superiores a 1.",
      misplacedNumber: "O número na posição {position} não está associado a um elemento nem a um grupo.",
      misplacedDot: "O ponto de hidrato na posição {position} tem de ficar entre duas partes da fórmula, por exemplo CuSO4·5H2O.",
      tooManyAtoms: "A fórmula tem demasiados átomos. Use, no máximo, 1 000 000 de átomos no total.",
    },
    molarMass: "Massa molar",
    caption: "{formula}: soma de cada número de átomos × massa atómica padrão",
    totalAtoms: "Átomos por unidade de fórmula",
    elements: "Elementos diferentes",
    massOfMole: "Massa de uma mole",
    tableCaption: "Composição por elemento",
    columns: { element: "Elemento", count: "Átomos", weight: "Massa atómica", mass: "Massa (g/mol)", percent: "% em massa" },
    note: "As massas atómicas são os valores padrão abreviados da IUPAC. Para elementos com um intervalo natural (como H, C, N, O e S), usa-se o valor convencional único.",
  },
};

export default pt;
