import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FinalGradeText } from "../text/en";

const pt: CalculatorTranslation<FinalGradeText> = {
  content: {
    title: "Calculadora de nota do exame final",
    shortTitle: "Nota do exame final",
    summary: "Calcule a nota de que precisa no exame final para alcançar a nota global que pretende na disciplina.",
    metaTitle: "Calculadora de nota do exame final – Nota necessária",
    metaDescription:
      "Calcule que nota precisa de tirar no exame final para chegar à nota global pretendida, a partir da sua nota atual e do peso do exame final.",
    keywords: ["nota do exame final", "exame final", "que nota preciso no exame", "nota necessária", "nota da disciplina", "média ponderada", "calcular nota final"],
    intro: [
      "Perto do fim de uma disciplina, a grande pergunta costuma ser que nota precisa de tirar no exame final. A sua nota global é uma média ponderada: a nota atual conta uma parte e o exame final conta o resto.",
      "Introduza a sua nota até agora, quanto vale o exame final e a nota global que pretende. A calculadora indica a nota do exame final que lhe permite alcançá-la e mostra a melhor e a pior nota global que poderá obter.",
    ],
    howToUse: [
      "Introduza a sua nota atual na disciplina em percentagem.",
      "Introduza o peso do exame final, tal como consta do programa ou da ficha da disciplina.",
      "Introduza a nota global com que pretende terminar.",
      "Consulte a nota de que precisa no exame final e a nota global com uma classificação perfeita ou com zero.",
    ],
    formulas: [
      { title: "Nota necessária no exame final", expression: "necessária = (pretendida − atual × (1 − w)) ÷ w", explanation: "w é o peso do exame final em fração (30 % = 0,3). As notas são percentagens." },
      { title: "Nota global", expression: "global = atual × (1 − w) + final × w", explanation: "A nota da disciplina como média ponderada do que tem agora e do exame final." },
    ],
    examples: [
      {
        title: "78 % agora, o exame final vale 25 % e pretende 80 %",
        steps: ["w = 0,25, pelo que a nota atual conta 0,75", "necessária = (80 − 78 × 0,75) ÷ 0,25", "= (80 − 58,5) ÷ 0,25 = 86 %"],
      },
      {
        title: "91 % agora, o exame final vale 40 % e pretende 90 %",
        steps: ["necessária = (90 − 91 × 0,6) ÷ 0,4", "= (90 − 54,6) ÷ 0,4 = 88,5 %"],
      },
      {
        title: "65 % agora, o exame final vale 20 % e pretende 75 %",
        steps: ["necessária = (75 − 65 × 0,8) ÷ 0,2", "= (75 − 52) ÷ 0,2 = 115 %", "Mais de 100 %, pelo que este objetivo exige pontos extra"],
      },
    ],
    assumptions: [
      "A sua nota atual já reflete todas as outras componentes da disciplina, que no conjunto valem 100 % menos o peso do exame final.",
      "As notas são percentagens. Não se aplicam escalas de classificação por letras, arredondamentos nem ajustes de curva, que variam consoante o docente.",
      "Algumas disciplinas descartam a nota mais baixa, permitem que o exame final substitua um teste intercalar ou exigem uma nota mínima no exame final. Consulte o programa para ver se existem regras deste tipo.",
    ],
    faqs: [
      {
        question: "Como sei qual é a minha nota atual?",
        answer: "Costuma aparecer na plataforma da disciplina ou pode ser-lhe indicada pelo docente. Caso contrário, calcule a média ponderada de todas as notas que tem até agora, com os pesos do programa e sem contar o exame final.",
      },
      {
        question: "O que significa precisar de mais de 100 %?",
        answer: "Nem mesmo uma classificação perfeita no exame final elevaria a sua nota global até ao objetivo. Talvez ainda o consiga com pontos extra; caso contrário, aponte para um objetivo mais baixo.",
      },
      {
        question: "E se o resultado for 0 % ou menos?",
        answer: "Nesse caso o objetivo já está garantido: mesmo sem obter qualquer ponto no exame final, a sua nota global fica no objetivo ou acima dele. Confirme se é permitido não comparecer ao exame, porque algumas disciplinas o tornam obrigatório.",
      },
    ],
    sourcesUsedFor: ["A forma como a nota de uma disciplina é uma média ponderada das componentes indicadas no programa, incluindo o exame final."],
  },
  text: {
    current: "Nota atual",
    currentHelp: "A sua nota na disciplina até agora, antes do exame final.",
    weight: "Peso do exame final",
    weightHelp: "Que parte da nota global vale o exame final, em percentagem. Consulte o programa da disciplina.",
    desired: "Nota global pretendida",
    weightTooHigh: "O exame final tem de valer menos de 100 % da nota; caso contrário, a sua nota atual não conta.",
    needed: "Nota necessária no exame final",
    caption: "Para terminar com {desired} quando o exame final conta {weight} e tem agora {current}.",
    ifFull: "Nota global se tirar 100 % no exame final",
    ifZero: "Nota global se tirar 0 % no exame final",
    currentShare: "Peso da nota atual na nota global",
    notes: {
      over: "Precisaria de mais de 100 % no exame final. Isso só é possível com pontos extra; caso contrário, este objetivo está fora do seu alcance.",
      secured: "Já tem esta nota garantida: mesmo com 0 % no exame final fica no seu objetivo ou acima dele.",
      rounding: "Os docentes podem arredondar ou ajustar as notas, ou ponderar o exame final de outra forma. Consulte o programa da disciplina.",
    },
  },
};

export default pt;
