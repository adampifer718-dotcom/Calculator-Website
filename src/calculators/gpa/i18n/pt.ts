import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { GpaText } from "../text/en";

const pt: CalculatorTranslation<GpaText> = {
  content: {
    title: "Calculadora de GPA",
    shortTitle: "GPA",
    summary: "Calcule a média ponderada por créditos (GPA) a partir de classificações por letras ou pontos, e atualize o seu GPA acumulado.",
    metaTitle: "Calculadora de GPA – Média do semestre e acumulada",
    metaDescription:
      "Calcule o GPA do semestre com classificações por letras e créditos na escala de 4,0 ou 4,3, e combine-o com o GPA atual para obter o novo acumulado.",
    keywords: ["calculadora de GPA", "calcular GPA", "grade point average", "GPA acumulado", "média ponderada", "escala 4.0", "GPA universidade americana"],
    intro: [
      "O GPA (grade point average, a média do sistema americano) pondera os pontos de cada disciplina pelos respetivos créditos, de modo que uma disciplina de 4 créditos conta mais do que uma de 2.",
      "Escreva as suas disciplinas com a classificação e os créditos para ver o GPA deste semestre. Acrescente o seu GPA atual e os créditos já concluídos para ver o novo GPA acumulado.",
    ],
    howToUse: [
      "Escolha a escala de 4,0 ou de 4,3 usada pela sua instituição (só diferem no valor do A+).",
      "Introduza uma disciplina por linha com a classificação e os créditos, por exemplo “Biologia B+ 3”.",
      "Se quiser, introduza o seu GPA acumulado atual e os créditos a que corresponde.",
      "Consulte o GPA do semestre, o novo GPA acumulado e a tabela por disciplina.",
    ],
    formulas: [
      { title: "GPA do semestre", expression: "GPA = Σ(pontos da classificação × créditos) ÷ Σ créditos", explanation: "Os pontos de qualidade de cada disciplina são os pontos da classificação multiplicados pelos créditos." },
      {
        title: "GPA acumulado",
        expression: "Novo GPA = (GPA atual × créditos atuais + pontos de qualidade do semestre) ÷ (créditos atuais + créditos do semestre)",
        explanation: "Combina o seu percurso até agora com o novo semestre, ponderado pelos créditos.",
      },
      {
        title: "Classificações por letras (escala de 4,0)",
        expression: "A = 4,0, A− = 3,7, B+ = 3,3, B = 3,0, B− = 2,7, C+ = 2,3, C = 2,0, C− = 1,7, D+ = 1,3, D = 1,0, D− = 0,7, F = 0",
        explanation: "A escala habitual nos EUA. Na escala de 4,3, A+ = 4,3.",
      },
    ],
    examples: [
      {
        title: "Quatro disciplinas numa escala de 4,0",
        steps: ["Pontos de qualidade: 4,0 × 3 + 3,3 × 4 + 3,7 × 3 + 2,0 × 2 = 40,3", "Créditos: 3 + 4 + 3 + 2 = 12", "GPA = 40,3 ÷ 12 ≈ 3,36"],
      },
      {
        title: "Novo semestre somado a um GPA de 3,2 com 45 créditos",
        steps: ["Semestre: (4,0 × 4 + 3,0 × 3) ÷ 7 = 25 ÷ 7 ≈ 3,57", "Acumulado: (3,2 × 45 + 25) ÷ (45 + 7) = 169 ÷ 52 = 3,25"],
      },
    ],
    assumptions: [
      "As classificações por letras seguem a escala habitual de 4 pontos dos EUA; as instituições que usam outras escalas, sinais de mais ou menos, ou ponderações para disciplinas de honra podem ser diferentes.",
      "Deixe de fora as disciplinas de aprovado/reprovado e as anuladas, porque normalmente não contam para o GPA.",
      "Os resultados são arredondados a duas casas decimais para apresentação; a sua instituição pode arredondar ou truncar de outra forma.",
    ],
    faqs: [
      { question: "Qual é a diferença entre a escala de 4,0 e a de 4,3?", answer: "Apenas o A+: algumas instituições atribuem-lhe 4,0 e outras 4,3. Todas as outras classificações valem os mesmos pontos." },
      {
        question: "Posso introduzir percentagens ou notas numéricas?",
        answer: "Introduza diretamente os pontos da classificação (por exemplo 3,5) em vez de uma letra. A conversão de percentagens em pontos depende das regras da sua instituição.",
      },
      {
        question: "Porque é que uma disciplina com mais créditos altera mais o meu GPA?",
        answer: "O GPA é ponderado pelos créditos, pelo que cada crédito conta o mesmo. Um A numa disciplina de 4 créditos dá o dobro dos pontos de qualidade de um A numa de 2 créditos, e por isso aproxima mais o seu GPA de 4,0, embora não exatamente o dobro.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    scale: "Escala de classificação",
    scales: { "4.0": "Escala de 4,0 (A+ = 4,0)", "4.3": "Escala de 4,3 (A+ = 4,3)" },
    courses: "Disciplinas",
    coursesHelp: "Uma disciplina por linha: um nome opcional, depois a classificação (uma letra como B+ ou pontos como 3,3) e, por fim, os créditos.",
    defaultCourses: "Cálculo A 4\nQuímica B+ 4\nHistória A- 3\nArte C 2",
    priorGpa: "GPA acumulado atual",
    priorGpaHelp: "Opcional. Deixe ambas as caixas vazias para ver apenas este semestre.",
    priorCredits: "Créditos já concluídos",
    errors: {
      empty: "Introduza pelo menos uma disciplina.",
      tooMany: "Introduza no máximo {max} disciplinas.",
      line: "Linha {line}: escreva uma classificação e os créditos, por exemplo “Biologia B+ 3”.",
      grade: "Linha {line}: “{grade}” não é uma classificação desta escala.",
      credits: "Linha {line}: os créditos têm de ser superiores a 0.",
      priorBoth: "Introduza o seu GPA atual e os créditos a que corresponde, ou nenhum dos dois.",
      priorRange: "Introduza um GPA entre 0 e {max} nesta escala.",
    },
    gpa: "GPA do semestre",
    caption: "{credits} créditos e {points} pontos de qualidade.",
    cumulative: "Novo GPA acumulado",
    totalCredits: "Créditos deste semestre",
    qualityPoints: "Pontos de qualidade",
    tableCaption: "Disciplinas",
    columns: { course: "Disciplina", points: "Pontos da classificação", credits: "Créditos", quality: "Pontos de qualidade" },
    unnamed: "Disciplina {line}",
    note: "As classificações por letras usam a escala habitual de 4 pontos dos EUA (A− = 3,7, B+ = 3,3 … D− = 0,7, F = 0). Confirme a escala da sua instituição; algumas ponderam de outra forma as disciplinas de honra ou AP.",
  },
};

export default pt;
