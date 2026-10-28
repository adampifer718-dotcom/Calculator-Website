import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PasswordEntropyText } from "../text/en";

const forms = (one: string, other: string) => ({ zero: other, one, two: other, few: other, many: other, other });

const pt: CalculatorTranslation<PasswordEntropyText> = {
  content: {
    title: "Calculadora de entropia de palavras-passe",
    shortTitle: "Entropia de palavras-passe",
    summary: "Estime a entropia, em bits, de uma palavra-passe ou frase-passe gerada aleatoriamente e quanto tempo um atacante precisaria para a adivinhar.",
    metaTitle: "Calculadora de entropia de palavras-passe – Bits e tempo",
    metaDescription:
      "Calcule a entropia em bits de uma palavra-passe aleatória ou frase-passe Diceware pelo comprimento e conjunto de caracteres, e o tempo médio para a adivinhar.",
    keywords: ["entropia de palavra-passe", "força da palavra-passe", "entropia de frase-passe", "diceware", "bits de entropia", "ataque de força bruta", "comprimento da palavra-passe", "conjunto de caracteres"],
    intro: [
      "A entropia mede o quão imprevisível é um segredo. Uma palavra-passe escolhida aleatoriamente a partir de um conjunto de N caracteres possíveis ganha log₂(N) bits por cada carácter, e cada bit adicional duplica o número de tentativas de que um atacante pode precisar.",
      "Esta calculadora trabalha apenas com a estrutura de uma palavra-passe: o comprimento e os tipos de caracteres, ou o número de palavras e a dimensão da lista de palavras. Nunca pede, recebe ou analisa uma palavra-passe real, por isso não escreva a sua em lado nenhum desta página.",
    ],
    howToUse: [
      "Escolha uma palavra-passe de caracteres aleatórios ou uma frase-passe de palavras aleatórias.",
      "Para caracteres, introduza o comprimento e escolha os conjuntos de caracteres, ou introduza uma dimensão de conjunto personalizada.",
      "Para uma frase-passe, introduza o número de palavras e a dimensão da lista de palavras (7776 para uma lista Diceware).",
      "Se quiser, ajuste as tentativas por segundo do atacante e consulte a entropia, o número de combinações e os tempos para adivinhar.",
    ],
    formulas: [
      { title: "Entropia de uma palavra-passe aleatória", expression: "H = L × log₂(N)", explanation: "L é o número de caracteres e N a dimensão do conjunto, por exemplo 26 + 26 + 10 + 32 = 94 para os quatro conjuntos." },
      { title: "Entropia de uma frase-passe", expression: "H = W × log₂(K)", explanation: "W é o número de palavras e K a dimensão da lista de palavras. Cada palavra Diceware acrescenta log₂(7776) ≈ 12,92 bits." },
      { title: "Tempo médio para adivinhar", expression: "t = 2ᴴ ÷ 2 ÷ g", explanation: "2ᴴ é o número de combinações e g as tentativas por segundo. Em média, é preciso experimentar metade delas." },
    ],
    examples: [
      {
        title: "16 caracteres aleatórios dos quatro conjuntos",
        steps: [
          "Conjunto = 26 + 26 + 10 + 32 = 94 caracteres",
          "Entropia = 16 × log₂(94) ≈ 16 × 6,5546 ≈ 104,87 bits",
          "Tempo médio a 10¹⁰ tentativas por segundo ≈ 94¹⁶ ÷ 2 ÷ 10¹⁰ s ≈ 5,89 × 10¹³ anos",
        ],
      },
      {
        title: "Frase-passe Diceware de seis palavras",
        steps: ["Entropia = 6 × log₂(7776) ≈ 6 × 12,925 ≈ 77,55 bits", "Combinações = 7776⁶ ≈ 2,21 × 10²³", "Tempo médio ≈ 350 270 anos a 10¹⁰ tentativas por segundo"],
      },
      {
        title: "8 letras minúsculas aleatórias",
        steps: ["Entropia = 8 × log₂(26) ≈ 37,60 bits", "Combinações = 26⁸ = 208 827 064 576", "Tempo médio ≈ 208 827 064 576 ÷ 2 ÷ 10¹⁰ ≈ 10 segundos"],
      },
    ],
    assumptions: [
      "Cada carácter ou palavra é escolhido de forma independente e uniformemente aleatória, como faria um gestor de palavras-passe ou um dado. As palavras-passe escolhidas por pessoas são muito mais previsíveis do que estes números sugerem.",
      "A taxa de tentativas é um pressuposto que pode alterar. As taxas reais vão desde algumas tentativas por segundo contra um início de sessão online com limitação de tentativas até muitos milhares de milhões por segundo contra palavras-passe roubadas com hash fraco.",
      "A entropia não abrange outros riscos, como o phishing, a reutilização da mesma palavra-passe em vários sites ou uma palavra-passe que já tenha sido divulgada.",
      "Trata-se de uma estimativa para comparação, não de aconselhamento de segurança nem de uma garantia, e não foi revista por um profissional.",
    ],
    faqs: [
      { question: "Quantos bits de entropia são suficientes?", answer: "Não existe um limiar único, porque depende de como a palavra-passe é armazenada e de quem a pode atacar. Como orientação aproximada, cada bit duplica o trabalho, pelo que uma palavra-passe aleatória com 16 ou mais caracteres, ou uma frase-passe com seis ou mais palavras Diceware, está muito para lá do alcance prático da força bruta à taxa predefinida." },
      { question: "Porque é que esta página não me deixa verificar a minha própria palavra-passe?", answer: "A entropia descreve a forma como uma palavra-passe foi gerada, não os caracteres com que acabou por ficar. Uma palavra-passe como Summer2025! parece variada, mas é fácil de adivinhar porque são as pessoas que a escolhem. Escrever uma palavra-passe real em qualquer site é também um risco, por isso esta página nunca pede nenhuma." },
      { question: "Uma frase-passe longa é melhor do que uma palavra-passe curta e complexa?", answer: "Muitas vezes, sim. Seis palavras aleatórias de uma lista de 7776 dão cerca de 77,5 bits, mais do que 12 caracteres aleatórios de letras e algarismos (cerca de 71,5 bits), e são mais fáceis de memorizar e escrever. O importante é que as palavras sejam sorteadas, e não escolhidas como uma frase." },
    ],
    sourcesUsedFor: [
      "As orientações atuais dos EUA sobre palavras-passe, que privilegiam o comprimento e a verificação contra palavras-passe divulgadas em fugas conhecidas em vez de regras de composição.",
      "A dimensão de 7776 palavras da lista (6⁵, cinco lançamentos de dado por palavra), usada como predefinição para frases-passe.",
    ],
  },
  text: {
    mode: "Tipo de palavra-passe",
    modes: { random: "Caracteres aleatórios", passphrase: "Palavras aleatórias (frase-passe)" },
    length: "Comprimento (caracteres)",
    poolMode: "Conjunto de caracteres",
    poolModes: { sets: "Escolher conjuntos de caracteres", custom: "Dimensão personalizada do conjunto" },
    lower: "Letras minúsculas a–z (26)",
    upper: "Letras maiúsculas A–Z (26)",
    digits: "Algarismos 0–9 (10)",
    symbols: "Símbolos",
    yesNo: { yes: "Incluir", no: "Excluir" },
    symbolCount: "Número de símbolos possíveis",
    symbolCountHelp: "32 abrange todos os símbolos ASCII imprimíveis de um teclado americano, como ! ? # e @. Use um número menor se só forem permitidos alguns símbolos.",
    customPool: "Dimensão do conjunto (caracteres possíveis)",
    customPoolHelp: "Quantos caracteres diferentes pode ter cada posição.",
    words: "Número de palavras",
    wordList: "Dimensão da lista de palavras",
    wordListHelp: "7776 é a dimensão de uma lista de palavras Diceware, feita para cinco lançamentos de um dado de seis faces por palavra.",
    guessRate: "Tentativas do atacante por segundo",
    guessRateHelp: "Um pressuposto sobre o atacante. 10¹⁰ (10 mil milhões) por segundo corresponde a um ataque offline rápido a uma palavra-passe com hash fraco; os ataques online são muito mais lentos.",
    errors: {
      noSets: "Inclua pelo menos um conjunto de caracteres.",
    },
    entropy: "Entropia",
    bits: "bits",
    captionRandom: "{length} escolhidos aleatoriamente num conjunto de {pool} caracteres.",
    captionPassphrase: "{words} escolhidas aleatoriamente numa lista de {list} palavras.",
    lengthCount: forms("{n} carácter", "{n} caracteres"),
    wordCount: forms("{n} palavra", "{n} palavras"),
    combinations: "Combinações possíveis",
    poolSize: "Dimensão do conjunto por posição",
    bitsPerItem: "Entropia por carácter ou palavra",
    averageTime: "Tempo médio para adivinhar",
    worstTime: "Tempo para experimentar todas as combinações",
    duration: {
      lessThanSecond: "Menos de 1 segundo",
      seconds: forms("{n} segundo", "{n} segundos"),
      minutes: forms("{n} minuto", "{n} minutos"),
      hours: forms("{n} hora", "{n} horas"),
      days: forms("{n} dia", "{n} dias"),
      years: forms("{n} ano", "{n} anos"),
    },
    notes: {
      random: "Estes valores só são válidos se cada carácter ou palavra for escolhido de forma verdadeiramente aleatória, por exemplo por um gestor de palavras-passe ou com dados. As palavras-passe inventadas por pessoas, os nomes, as datas e as substituições habituais têm muito menos entropia.",
      average: "Em média, um atacante encontra a palavra-passe depois de experimentar metade das combinações.",
      notCollected: "Esta página nunca pede a sua palavra-passe. Funciona apenas com o comprimento e os tipos de caracteres ou palavras.",
      zero: "Com uma única escolha possível por posição, não há incerteza, pelo que a entropia é de 0 bits.",
    },
  },
};

export default pt;
