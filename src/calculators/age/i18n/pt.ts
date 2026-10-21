import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { AgeText } from "../text/en";

const years = { zero: "{n} anos", one: "{n} ano", two: "{n} anos", few: "{n} anos", many: "{n} anos", other: "{n} anos" };
const months = { zero: "{n} meses", one: "{n} mês", two: "{n} meses", few: "{n} meses", many: "{n} meses", other: "{n} meses" };
const weeks = { zero: "{n} semanas", one: "{n} semana", two: "{n} semanas", few: "{n} semanas", many: "{n} semanas", other: "{n} semanas" };
const days = { zero: "{n} dias", one: "{n} dia", two: "{n} dias", few: "{n} dias", many: "{n} dias", other: "{n} dias" };

const pt: CalculatorTranslation<AgeText> = {
  content: {
    title: "Calculadora de idade",
    shortTitle: "Idade",
    summary: "Calcule a idade exata em anos, meses e dias em qualquer data, com o total de dias e semanas e o próximo aniversário.",
    metaTitle: "Calculadora de idade – Idade exata em anos, meses e dias",
    metaDescription:
      "Calcule a idade exata a partir da data de nascimento em anos, meses e dias, bem como o total de dias e semanas, o próximo aniversário e o dia em que nasceu.",
    keywords: ["calculadora de idade", "quantos anos tenho", "calcular idade", "data de nascimento", "idade em dias", "idade exata", "próximo aniversário"],
    intro: [
      "Introduza uma data de nascimento para ver a idade exata hoje, ou escolha outra data para saber a idade de alguém nesse dia.",
      "A calculadora conta meses reais do calendário e tem em conta os anos bissextos, os meses de duração diferente e os aniversários a 29 de fevereiro.",
    ],
    howToUse: [
      "Introduza a data de nascimento.",
      "Mantenha a data de hoje ou escolha outra.",
      "Se o aniversário for a 29 de fevereiro, escolha como é contado nos restantes anos.",
      "Consulte a idade, os totais e o próximo aniversário.",
    ],
    formulas: [
      {
        title: "Anos, meses e dias",
        expression: "Idade = o maior número de meses completos desde o nascimento até à data, mais os dias restantes",
        explanation: "Os meses completos são contados no calendário. Se um mês for mais curto do que o dia de nascimento (por exemplo, dia 31), usa-se o último dia desse mês.",
      },
      { title: "Total de dias", expression: "Dias = data − data de nascimento", explanation: "Dias de calendário entre as duas datas, contando cada 29 de fevereiro." },
      {
        title: "Próximo aniversário",
        expression: "Próximo aniversário = data de nascimento + (anos completos + 1) anos",
        explanation: "Um aniversário a 29 de fevereiro calha a 28 de fevereiro ou a 1 de março nos anos não bissextos, conforme a sua escolha.",
      },
    ],
    examples: [
      {
        title: "Nascido a 15 de maio de 1990, idade a 14 de outubro de 2026",
        steps: [
          "15 de maio de 1990 → 15 de maio de 2026: 36 anos",
          "15 de maio → 15 de setembro: 4 meses; 15 de setembro → 14 de outubro: 29 dias",
          "Total: 13 301 dias; próximo aniversário a 15 de maio de 2027, daqui a 213 dias",
        ],
      },
      {
        title: "Nascido a 29 de fevereiro de 2000, idade a 28 de fevereiro de 2025",
        steps: [
          "2025 não é bissexto, por isso o aniversário é considerado a 28 de fevereiro",
          "29 de fevereiro de 2000 → 28 de fevereiro de 2025: 25 anos exatos",
          "Com a regra do 1 de março, a idade seria de 24 anos, 11 meses e 30 dias",
        ],
      },
    ],
    assumptions: [
      "As datas usam o calendário gregoriano, também para datas anteriores à sua adoção em alguns países.",
      "A idade é contada em dias de calendário no seu próprio fuso horário; não se usam a hora de nascimento nem as diferenças horárias entre locais.",
      "Se um mês posterior for mais curto do que o dia de nascimento, o último dia desse mês conta como aniversário mensal.",
    ],
    faqs: [
      {
        question: "Como é tratado um aniversário a 29 de fevereiro?",
        answer: "Nos anos não bissextos, pode contá-lo a 28 de fevereiro ou a 1 de março. A prática varia consoante o país e a finalidade, por isso confirme a regra que se lhe aplica, por exemplo para a maioridade.",
      },
      {
        question: "Porque é que os meses e os dias podem parecer irregulares?",
        answer: "Os meses têm entre 28 e 31 dias, pelo que o mesmo número de dias pode corresponder a um número diferente de meses consoante as datas.",
      },
      {
        question: "O fuso horário tem influência?",
        answer: "Só perto da meia-noite. A calculadora usa datas de calendário; se nasceu ao fim da noite noutro fuso horário, a sua data de nascimento lá pode não coincidir com a hora local.",
      },
    ],
    sourcesUsedFor: [],
  },
  text: {
    birth: "Data de nascimento",
    asOf: "Idade no dia",
    asOfHelp: "Hoje, por predefinição. Altere-a para ver a idade em qualquer data.",
    leapDay: "Aniversário de 29 de fevereiro nos restantes anos",
    leapDayOptions: { feb28: "Celebrar a 28 de fevereiro", mar1: "Celebrar a 1 de março" },
    leapDayHelp: "Só importa se nasceu a 29 de fevereiro. As leis e os costumes variam.",
    units: { years, months, weeks, days },
    ymd: "{years}, {months} e {days}",
    weeksDays: "{weeks} e {days}",
    orderError: "Esta data tem de ser igual ou posterior à data de nascimento.",
    age: "Idade",
    ageCaption: "Data de nascimento: {birth}; idade a {asOf}.",
    totalMonths: "Total de meses",
    totalWeeks: "Total de semanas",
    totalDays: "Total de dias",
    nextBirthday: "Próximo aniversário",
    daysToBirthday: "Dias até ao próximo aniversário",
    bornOn: "Dia da semana em que nasceu",
    weekdays: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
    birthdayToday: "Feliz aniversário! Hoje faz anos a data de nascimento.",
    note: "A idade é calculada com datas de calendário no seu próprio fuso horário; a hora de nascimento não é tida em conta.",
  },
};

export default pt;
