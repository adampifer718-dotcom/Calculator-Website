import type { TaxonomyText } from "./types";

/** European Portuguese (Portugal) category and industry collection texts. */
const pt: TaxonomyText = {
  categories: {
    biology: {
      name: "Biologia",
      description: "Taxas de crescimento, populações e quantidades de laboratório para as ciências da vida.",
      metaTitle: "Calculadoras de biologia",
      metaDescription: "Calculadoras de biologia gratuitas para crescimento de populações, tempo de duplicação e outras grandezas das ciências da vida, com fórmula e exemplos.",
    },
    chemistry: {
      name: "Química",
      description: "Cálculos de concentração, diluição e soluções para o laboratório e a sala de aula.",
      metaTitle: "Calculadoras de química",
      metaDescription: "Calculadoras de química gratuitas para molaridade, diluição de soluções e concentração, com fórmulas, unidades e exemplos resolvidos.",
    },
    construction: {
      name: "Construção",
      description: "Ferramentas de área e medição para projetos em casa e obras.",
      metaTitle: "Calculadoras de construção",
      metaDescription: "Calculadoras de construção gratuitas, incluindo a área de retângulos, círculos e triângulos em pés, polegadas, jardas ou metros.",
    },
    conversion: {
      name: "Conversão",
      description: "Conversores de unidades baseados em fatores de conversão exatos e publicados.",
      metaTitle: "Calculadoras de conversão de unidades",
      metaDescription: "Conversores de unidades gratuitos de comprimento, massa e temperatura com fatores de conversão exatos do SI, fórmulas e tabelas de conversão.",
    },
    ecology: {
      name: "Ecologia",
      description: "Estimativas de água, energia e recursos para casas e jardins mais sustentáveis.",
      metaTitle: "Calculadoras de ecologia e ambiente",
      metaDescription: "Calculadoras de ecologia gratuitas para o aproveitamento de águas pluviais e outras estimativas de recursos, com pressupostos claros e exemplos resolvidos.",
    },
    "everyday-life": {
      name: "Dia a dia",
      description: "Respostas rápidas para gorjetas, descontos, combustível, notas e outras contas do quotidiano.",
      metaTitle: "Calculadoras para o dia a dia",
      metaDescription: "Calculadoras gratuitas para o dia a dia: gorjetas e divisão da conta, descontos, gastos com combustível e notas de testes, com a fórmula à vista.",
    },
    finance: {
      name: "Finanças",
      description: "Salários, empréstimos, juros, rentabilidade, impostos e margens empresariais com fórmulas transparentes.",
      metaTitle: "Calculadoras financeiras",
      metaDescription: "Calculadoras financeiras gratuitas de salário por hora, empréstimos, juros compostos, ROI, imposto sobre vendas, margem de lucro e ponto de equilíbrio.",
    },
    food: {
      name: "Culinária",
      description: "Contas de cozinha para ajustar receitas e planear refeições.",
      metaTitle: "Calculadoras de culinária e alimentação",
      metaDescription: "Calculadoras de culinária gratuitas, incluindo um ajustador de receitas que adapta as quantidades dos ingredientes a qualquer número de doses.",
    },
    health: {
      name: "Saúde",
      description: "Indicadores gerais de saúde com intervalos e limitações claros. Não substituem o aconselhamento médico.",
      metaTitle: "Calculadoras de saúde",
      metaDescription: "Calculadoras de saúde gratuitas de IMC e taxa metabólica basal (TMB), com unidades métricas e imperiais e limitações claramente indicadas.",
    },
    math: {
      name: "Matemática",
      description: "Percentagens, raízes, potências, logaritmos, geometria e formatação de números, com a fórmula por trás de cada resposta.",
      metaTitle: "Calculadoras de matemática",
      metaDescription: "Calculadoras de matemática gratuitas de percentagens, logaritmos, potências, raízes quadradas, declive, perímetro, algarismos significativos e mais.",
    },
    physics: {
      name: "Física",
      description: "Cálculos de movimento, energia e eletricidade com unidades do SI.",
      metaTitle: "Calculadoras de física",
      metaDescription: "Calculadoras de física gratuitas de velocidade, distância e tempo, energia cinética e lei de Ohm, com fórmulas e conversão de unidades.",
    },
    sports: {
      name: "Desporto",
      description: "Valores de treino e desempenho para corredores, ciclistas e atletas.",
      metaTitle: "Calculadoras de desporto",
      metaDescription: "Calculadoras de desporto gratuitas, incluindo uma de ritmo de corrida para calcular ritmo, velocidade e tempos finais nas distâncias mais comuns.",
    },
    statistics: {
      name: "Estatística",
      description: "Estatística descritiva, valores p e intervalos de confiança com todos os pressupostos indicados.",
      metaTitle: "Calculadoras de estatística",
      metaDescription: "Calculadoras de estatística gratuitas de média, mediana e moda, desvio-padrão, valores p e intervalos de confiança, com fórmulas.",
    },
    other: {
      name: "Outras",
      description: "Ferramentas úteis que não se enquadram noutras categorias, como o custo da energia em casa.",
      metaTitle: "Outras calculadoras",
      metaDescription: "Calculadoras gratuitas diversas, incluindo uma calculadora do custo da eletricidade de eletrodomésticos e aparelhos.",
    },
  },
  collections: {
    business: {
      name: "Negócios e empreendedorismo",
      description: "Preços, margens, ponto de equilíbrio e rentabilidade para gerir e fazer crescer um negócio.",
      metaTitle: "Calculadoras para negócios e empreendedorismo",
      metaDescription: "Calculadoras para empreendedores e pequenas empresas: margem de lucro, ponto de equilíbrio, ROI, imposto sobre vendas, descontos e variação percentual.",
    },
    "accounting-finance": {
      name: "Contabilidade e finanças",
      description: "Juros, empréstimos, rentabilidade e conversões salariais para trabalho de finanças e contabilidade.",
      metaTitle: "Calculadoras de contabilidade e finanças",
      metaDescription: "Calculadoras de contabilidade e finanças: prestações de empréstimos, juros compostos, ROI, margem de lucro, imposto sobre vendas e conversões de salário.",
    },
    "hr-payroll": {
      name: "RH, processamento salarial e emprego",
      description: "Converta entre salários anuais, salários por hora e períodos de pagamento para propostas, orçamentos e verificação de salários.",
      metaTitle: "Calculadoras de RH, salários e emprego",
      metaDescription: "Calculadoras de RH e salários: de salário anual para valor por hora, de valor por hora para salário e todos os períodos de pagamento, com o seu horário.",
    },
    "marketing-ecommerce": {
      name: "Marketing digital e comércio eletrónico",
      description: "Rentabilidade de campanhas, descontos, margens e estatísticas de conversão para vendedores online e profissionais de marketing.",
      metaTitle: "Calculadoras de marketing digital e e-commerce",
      metaDescription: "Calculadoras para marketing e lojas online: ROI, descontos, imposto sobre vendas, margem de lucro, variação percentual e intervalos de confiança.",
    },
    "real-estate": {
      name: "Imobiliário",
      description: "Área, prestações de empréstimos do tipo crédito à habitação e rentabilidade de investimentos para decisões imobiliárias.",
      metaTitle: "Calculadoras para o setor imobiliário",
      metaDescription: "Calculadoras para o setor imobiliário: área, prestações de empréstimos e crédito à habitação, ROI e aproveitamento de águas pluviais em imóveis.",
    },
    "construction-engineering": {
      name: "Construção e engenharia civil",
      description: "Áreas, triângulos retângulos, declives e conversões de unidades para obra e projeto.",
      metaTitle: "Calculadoras de construção e engenharia civil",
      metaDescription: "Calculadoras de construção e engenharia civil: área, teorema de Pitágoras, declive, perímetro do círculo e conversão de unidades.",
    },
    "education-research": {
      name: "Educação e investigação académica",
      description: "Ferramentas de matemática, estatística e ciências para estudantes, professores e investigadores.",
      metaTitle: "Calculadoras de educação e investigação",
      metaDescription: "Calculadoras para estudantes e investigadores: estatística, valores p, logaritmos, algarismos significativos e fórmulas de química e física.",
    },
    healthcare: {
      name: "Saúde e profissionais de saúde",
      description: "Indicadores gerais de saúde e cálculos de laboratório. Aplique sempre o critério clínico e as orientações locais.",
      metaTitle: "Calculadoras para profissionais de saúde",
      metaDescription: "Calculadoras para contextos de saúde e laboratório: IMC, TMB, molaridade, diluição e valores p, com fontes e limitações indicadas.",
    },
    "agriculture-gardening": {
      name: "Agricultura e jardinagem",
      description: "Estimativas de área, água e crescimento para explorações agrícolas, terrenos e jardins.",
      metaTitle: "Calculadoras de agricultura e jardinagem",
      metaDescription: "Calculadoras para agricultores e jardineiros: área, aproveitamento de águas pluviais, tempo de duplicação de populações e conversão de unidades.",
    },
    "food-hospitality": {
      name: "Restauração e hotelaria",
      description: "Ajuste de receitas, gorjetas, preços e margens para cozinhas, restaurantes e anfitriões.",
      metaTitle: "Calculadoras de restauração e hotelaria",
      metaDescription: "Calculadoras para cozinhas e restaurantes: ajustador de receitas, gorjetas e divisão da conta, margem de lucro, descontos e conversão de temperatura.",
    },
    "manufacturing-operations": {
      name: "Indústria e operações",
      description: "Conversões de unidades, volumes de equilíbrio, custos energéticos e geometria para a produção.",
      metaTitle: "Calculadoras de indústria e operações",
      metaDescription: "Calculadoras de indústria e operações: ponto de equilíbrio, conversão de unidades, custo da eletricidade, lei de Ohm e perímetro do círculo.",
    },
    "software-data": {
      name: "Software, TI e dados",
      description: "Ferramentas de estatística, logaritmos e notação para engenheiros e analistas de dados.",
      metaTitle: "Calculadoras de software, TI e dados",
      metaDescription: "Calculadoras para engenheiros e analistas: desvio-padrão, média e mediana, valores p, intervalos de confiança, logaritmos e potências.",
    },
    "environment-energy": {
      name: "Ambiente e energia",
      description: "Consumo de eletricidade, captação de água e gastos com combustível para decisões sustentáveis.",
      metaTitle: "Calculadoras de ambiente e energia",
      metaDescription: "Calculadoras de energia e ambiente: custo da eletricidade, aproveitamento de águas pluviais, gastos com combustível e energia cinética.",
    },
    "fitness-sports": {
      name: "Fitness e desporto",
      description: "Ritmo, medidas corporais e necessidades energéticas para os seus objetivos de treino e forma física.",
      metaTitle: "Calculadoras de fitness e desporto",
      metaDescription: "Calculadoras de fitness e desporto: ritmo de corrida, IMC, TMB e velocidade, distância e tempo, com fórmulas claras.",
    },
    "personal-finance": {
      name: "Finanças pessoais e casa",
      description: "Decisões financeiras do dia a dia: salário, empréstimos, poupanças, compras, faturas e despesas da casa.",
      metaTitle: "Calculadoras de finanças pessoais e domésticas",
      metaDescription: "Calculadoras para a casa: salário, empréstimos, juros compostos, descontos, gorjetas, imposto sobre vendas e gastos com combustível e eletricidade.",
    },
  },
};

export default pt;
