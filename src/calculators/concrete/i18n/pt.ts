import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ConcreteText } from "../text/en";

const pt: CalculatorTranslation<ConcreteText> = {
  content: {
    title: "Calculadora de betão",
    shortTitle: "Betão",
    summary: "Calcule quanto betão encomendar para lajes, sapatas, pilares redondos e tubos ocos, com uma margem opcional para desperdício.",
    metaTitle: "Calculadora de betão – Volume de lajes, pilares e tubos",
    metaDescription:
      "Calcule o volume de betão para lajes, sapatas, pilares e tubos em metros cúbicos, jardas cúbicas, pés cúbicos e litros, com margem para desperdício.",
    keywords: ["calculadora de betão", "calcular metros cúbicos de betão", "volume de betão", "betão para laje", "betão para sapatas", "betão para pilares", "betão pronto"],
    intro: [
      "O betão encomenda-se por volume. Introduza as dimensões de uma laje, de uma sapata, de um pilar redondo ou de um tubo oco para ver quanto precisa, nas unidades usadas pelos fornecedores.",
      "Uma margem opcional para desperdício cobre os derrames, o terreno irregular e as cofragens que abaúlam para fora, para que não lhe falte betão na entrega.",
    ],
    howToUse: [
      "Escolha a forma e as unidades métricas ou norte-americanas.",
      "Introduza as dimensões: os lados compridos em metros ou pés, e a espessura e os diâmetros em centímetros ou polegadas.",
      "Introduza quantas peças idênticas vai betonar.",
      "Defina a margem para desperdício (o habitual é entre 5 e 10 %) e consulte o volume que deve encomendar.",
    ],
    formulas: [
      { title: "Laje ou sapata", expression: "V = comprimento × largura × espessura", explanation: "Um bloco retangular. Converta primeiro todas as dimensões para a mesma unidade." },
      { title: "Pilar redondo", expression: "V = π × (diâmetro ÷ 2)² × altura", explanation: "Um cilindro, como um pilar betonado numa cofragem de tubo de cartão." },
      { title: "Tubo oco", expression: "V = π × ((exterior ÷ 2)² − (interior ÷ 2)²) × altura", explanation: "O cilindro exterior menos o núcleo oco." },
      { title: "Com desperdício", expression: "Encomenda = V × número de peças × (1 + % de desperdício ÷ 100)", explanation: "1 yd³ = 0,764555 m³ e 1 m³ = 1000 L." },
    ],
    examples: [
      {
        title: "Laje de pátio de 4 m × 3 m, 10 cm de espessura, 10 % de desperdício",
        steps: ["V = 4 m × 3 m × 0,10 m = 1,2 m³", "Com 10 % de desperdício: 1,2 × 1,10 = 1,32 m³"],
      },
      {
        title: "Pavimento de garagem de 10 ft × 10 ft, 4 in de espessura, sem desperdício",
        steps: ["V = 10 ft × 10 ft × 4/12 ft = 33,33 ft³", "33,33 ft³ ÷ 27 = 1,235 yd³"],
      },
    ],
    assumptions: [
      "As formas são retângulos e cilindros ideais; meça as cofragens reais, porque o terreno e as cofragens raramente são perfeitamente planos ou direitos.",
      "A margem para desperdício é uma percentagem do volume exato; não tem em conta as armaduras, que deslocam uma pequena quantidade de betão.",
      "É apenas uma estimativa do volume, não aconselhamento técnico nem um cálculo estrutural. A espessura, as armaduras e a resistência do betão devem cumprir a regulamentação local ou o projeto de um engenheiro.",
    ],
    faqs: [
      {
        question: "Quanto betão a mais devo encomendar?",
        answer: "Entre 5 e 10 % é uma margem habitual para lajes sobre terreno preparado; as escavações irregulares podem precisar de mais. Ficar sem betão a meio da betonagem cria juntas fracas, por isso os fornecedores costumam recomendar arredondar por excesso.",
      },
      { question: "Quantos pés cúbicos tem uma jarda cúbica?", answer: "27, porque uma jarda mede 3 pés e 3 × 3 × 3 = 27. Uma jarda cúbica equivale a cerca de 0,765 metros cúbicos." },
      { question: "Posso usá-la para sacos de betão pré-misturado?", answer: "Sim: divida o volume pelo rendimento indicado no saco, que varia consoante o produto, e arredonde por excesso." },
    ],
    sourcesUsedFor: ["Fatores de conversão exatos entre pés, polegadas, metros, jardas cúbicas e metros cúbicos."],
  },
  text: {
    shape: "Forma",
    shapes: { slab: "Laje ou sapata", column: "Pilar redondo", tube: "Tubo oco" },
    units: "Unidades",
    unitSystems: { metric: "Métricas (m, cm)", imperial: "EUA (ft, in)" },
    length: "Comprimento",
    width: "Largura",
    thickness: "Espessura",
    diameter: "Diâmetro",
    outerDiameter: "Diâmetro exterior",
    innerDiameter: "Diâmetro interior",
    height: "Altura",
    quantity: "Número de peças idênticas",
    waste: "Margem para desperdício",
    wasteHelp: "Margem para derrames, terreno irregular e escavação a mais. O habitual é entre 5 e 10 %; use 0 para obter o volume exato.",
    errors: { inner: "O diâmetro interior tem de ser inferior ao exterior." },
    volume: "Betão a encomendar",
    caption: "{exact} sem a margem de {waste} para desperdício.",
    exact: "Volume exato (sem desperdício)",
    inCubicMetres: "Em metros cúbicos",
    inCubicYards: "Em jardas cúbicas",
    inCubicFeet: "Em pés cúbicos",
    inLitres: "Em litros",
    notes: {
      order: "O betão pronto é vendido ao metro cúbico ou à jarda cúbica; arredonde por excesso até ao incremento mínimo do fornecedor.",
      structural: "Isto apenas estima o volume. A espessura da laje, as armaduras, a resistência da mistura e as dimensões das sapatas devem seguir a regulamentação de construção local ou o projeto de um engenheiro.",
    },
  },
};

export default pt;
