import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ForceText } from "../text/en";

const pt: CalculatorTranslation<ForceText> = {
  content: {
    title: "Calculadora de força (F = ma)",
    shortTitle: "Força",
    summary: "Resolva a segunda lei de Newton em ordem à força, à massa ou à aceleração, em newtons, libras-força, quilogramas, libras ou g.",
    metaTitle: "Calculadora de força (F = ma) – Força, massa ou aceleração",
    metaDescription:
      "Resolva F = ma em ordem à força, à massa ou à aceleração. Use N, kN, lbf ou dyn, kg, g, lb ou t, e m/s², ft/s² ou g, e veja o resultado em todas as unidades.",
    keywords: ["calcular força", "F = ma", "segunda lei de Newton", "newtons", "libra-força", "massa e aceleração", "força resultante", "lei fundamental da dinâmica"],
    intro: [
      "A segunda lei de Newton relaciona três grandezas: a força resultante sobre um objeto, a sua massa e a aceleração daí resultante. Empurre com o dobro da força e a aceleração duplica; empurre algo com o dobro da massa com a mesma força e a aceleração fica reduzida a metade.",
      "Escolha o valor que pretende obter e introduza os outros dois. A calculadora trabalha com unidades métricas e norte-americanas, mostra a resposta em todas as unidades do mesmo tipo e indica o peso equivalente da força: a massa que exerceria essa força sobre uma balança sob a gravidade padrão.",
    ],
    howToUse: [
      "Escolha o que pretende calcular: força, massa ou aceleração.",
      "Introduza os dois valores conhecidos e escolha uma unidade para cada um.",
      "Na lista de unidades do valor que procura, escolha a unidade em que quer o resultado.",
      "Consulte o resultado, as suas equivalências noutras unidades e o peso equivalente da força.",
    ],
    formulas: [
      { title: "Força", expression: "F = m × a", explanation: "A força resultante é igual à massa vezes a aceleração. 1 N acelera 1 kg a 1 m/s²." },
      { title: "Massa", expression: "m = F ÷ a", explanation: "Divida a força pela aceleração que produz." },
      { title: "Aceleração", expression: "a = F ÷ m", explanation: "Divida a força resultante pela massa." },
      {
        title: "Fatores de conversão",
        expression: "1 lbf = 0,45359237 kg × 9,80665 m/s² = 4,4482216152605 N; 1 dyn = 10⁻⁵ N; 1 g = 9,80665 m/s²",
        explanation: "Exatos por definição. O peso equivalente é |F| ÷ 9,80665 m/s².",
      },
    ],
    examples: [
      {
        title: "Força para acelerar um automóvel de 1350 kg a 2,8 m/s²",
        steps: ["F = 1350 kg × 2,8 m/s² = 3780 N", "3780 N ÷ 1000 = 3,78 kN"],
      },
      {
        title: "Massa de uma caixa que um empurrão de 600 N acelera a 1,5 m/s²",
        steps: ["m = 600 N ÷ 1,5 m/s²", "= 400 kg"],
      },
      {
        title: "Aceleração, em g, de um carrinho de 20 lb puxado com 30 lbf",
        steps: [
          "30 lbf = 133,4466 N e 20 lb = 9,0718 kg",
          "a = 133,4466 ÷ 9,0718 ≈ 14,71 m/s²",
          "14,71 ÷ 9,80665 = 1,5 g, porque uma libra-força é o peso de uma libra sob a gravidade padrão",
        ],
      },
    ],
    assumptions: [
      "F é a força resultante: a soma vetorial de todas as forças que atuam sobre o objeto, incluindo o atrito e a resistência do ar. A ferramenta trata a força e a aceleração ao longo de uma linha, pelo que um valor negativo indica o sentido oposto.",
      "A massa é constante. Os foguetões que queimam combustível, ou outros sistemas que ganham ou perdem massa, exigem a forma da lei baseada na quantidade de movimento.",
      "Aplica-se a mecânica clássica, que é precisa para velocidades muito inferiores à da luz.",
      "A unidade de aceleração g e o peso equivalente usam a gravidade padrão, 9,80665 m/s². A gravidade local é ligeiramente diferente.",
    ],
    faqs: [
      {
        question: "O que é um newton?",
        answer: "A unidade SI de força. Um newton acelera uma massa de 1 kg a 1 m/s². Na Terra, um objeto de 1 kg pesa cerca de 9,81 N.",
      },
      {
        question: "Qual é a diferença entre libras e libras-força?",
        answer: "A libra (lb) é uma unidade de massa; a libra-força (lbf) é o peso de uma libra sob a gravidade padrão, 4,4482216152605 N. Partilham o nome, e é por isso que 1 lbf aplicada a 1 lb dá exatamente 1 g.",
      },
      {
        question: "Porque é que a minha resposta é negativa?",
        answer: "Uma força ou aceleração negativa aponta no sentido oposto ao que escolheu como positivo, como uma força de travagem contrária ao sentido do movimento.",
      },
    ],
    sourcesUsedFor: [
      "Segunda lei de Newton: a força externa resultante é igual à massa vezes a aceleração.",
      "1 lbf = 4,4482216152605 N, a partir da libra e da gravidade padrão de 9,80665 m/s².",
    ],
  },
  text: {
    solve: "Calcular",
    solveOptions: { force: "Força (F)", mass: "Massa (m)", acceleration: "Aceleração (a)" },
    force: "Força (F)",
    forceHelp: "Força resultante. Um valor negativo significa que aponta no sentido oposto.",
    forceUnit: "Unidade de força",
    forceUnits: { N: "Newtons (N)", kN: "Quilonewtons (kN)", lbf: "Libras-força (lbf)", dyn: "Dines (dyn)" },
    mass: "Massa (m)",
    massUnit: "Unidade de massa",
    massUnits: { kg: "Quilogramas (kg)", g: "Gramas (g)", lb: "Libras (lb)", t: "Toneladas (t)" },
    acceleration: "Aceleração (a)",
    accelerationHelp: "Um valor negativo significa que a aceleração aponta no sentido oposto (a abrandar).",
    accelerationUnit: "Unidade de aceleração",
    accelerationUnits: {
      ms2: "Metros por segundo ao quadrado (m/s²)",
      fts2: "Pés por segundo ao quadrado (ft/s²)",
      g: "Gravidade padrão (g = 9,80665 m/s²)",
    },
    unitHelp: "Para o valor que está a calcular, é a unidade do resultado.",
    zeroAcceleration: "A aceleração não pode ser 0 quando se calcula a massa.",
    zeroForce: "A força não pode ser 0 quando se calcula a massa.",
    signMismatch: "A força e a aceleração têm de apontar no mesmo sentido (ter o mesmo sinal), porque a massa é positiva.",
    results: { force: "Força", mass: "Massa", acceleration: "Aceleração" },
    inUnit: "Em {unit}",
    weightKg: "Peso equivalente: massa que pesa isto sob a gravidade padrão",
    weightLb: "Peso equivalente em libras",
    weightNote: "O peso equivalente é |F| ÷ g₀, com g₀ = 9,80665 m/s²: a massa que uma balança indicaria sob esta força na Terra.",
    note: "F é a força resultante (total) sobre o objeto. Se houver várias forças, some-as primeiro como vetores.",
  },
};

export default pt;
