import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { ProteinConcentrationText } from "../text/en";

const pt: CalculatorTranslation<ProteinConcentrationText> = {
  content: {
    title: "Calculadora de concentração de proteínas (A280)",
    shortTitle: "Concentração de proteínas",
    summary:
      "Converta uma leitura de absorvância A280 numa concentração de proteína em mg/mL e µM com a lei de Beer–Lambert, a partir de um coeficiente de extinção molar ou mássico.",
    metaTitle: "Concentração de proteínas – A280 para mg/mL",
    metaDescription:
      "Converta leituras A280 em concentração de proteína em mg/mL e µM com um coeficiente de extinção molar ou mássico, ou estime ε a partir de Trp, Tyr e cistinas.",
    keywords: ["concentração de proteínas", "a280", "coeficiente de extinção", "lei de beer-lambert", "absortividade molar", "quantificação de proteínas", "mg/ml"],
    intro: [
      "As proteínas absorvem luz ultravioleta perto dos 280 nm, sobretudo devido aos aminoácidos aromáticos triptofano e tirosina, com uma pequena contribuição das pontes dissulfureto (cistinas). Segundo a lei de Beer–Lambert, a absorvância é proporcional à concentração, ao percurso ótico e a um coeficiente de extinção específico de cada proteína.",
      "Esta calculadora converte uma leitura A280 numa concentração. Pode indicar um coeficiente de extinção molar ε com a massa molecular, um coeficiente de extinção mássico (a absorvância de uma solução a 1 mg/mL) ou o número de Trp, Tyr e cistinas da sequência para estimar ε.",
    ],
    howToUse: [
      "Escolha como vai indicar o coeficiente de extinção.",
      "Introduza a A280 corrigida pelo branco, o percurso ótico e o fator de diluição, se diluiu a amostra antes de a medir.",
      "Introduza ε e a massa molecular, o coeficiente de extinção mássico, ou o número de triptofanos, tirosinas e pontes dissulfureto, juntamente com a massa molecular.",
      "Se quiser, introduza o volume da solução-mãe para obter a quantidade total de proteína.",
    ],
    formulas: [
      {
        title: "Lei de Beer–Lambert",
        expression: "c (M) = A × diluição ÷ (ε × l)",
        explanation: "A é a absorvância medida, ε o coeficiente de extinção molar em M⁻¹ cm⁻¹ e l o percurso ótico em cm.",
      },
      {
        title: "Concentração mássica",
        expression: "c (mg/mL) = c (M) × MW (g/mol)",
        explanation: "Moles por litro vezes gramas por mole dá gramas por litro, o que equivale a miligramas por mililitro.",
      },
      {
        title: "Coeficiente de extinção mássico",
        expression: "c (mg/mL) = A × diluição ÷ (E0.1% × l), com E0.1% = ε ÷ MW",
        explanation: "E0.1% é a absorvância de uma solução a 1 mg/mL (0,1 %) num percurso de 1 cm.",
      },
      {
        title: "ε estimado (Pace et al. 1995)",
        expression: "ε₂₈₀ = 5500 × nTrp + 1490 × nTyr + 125 × nCistina",
        explanation: "Em M⁻¹ cm⁻¹, para uma proteína enovelada em água. Uma cistina é uma ponte dissulfureto entre duas cisteínas.",
      },
    ],
    examples: [
      {
        title: "A partir de um coeficiente de extinção molar conhecido",
        steps: [
          "c = 0,72 ÷ (43 824 × 1) = 1,643 × 10⁻⁵ M = 16,43 µM.",
          "mg/mL = 1,643 × 10⁻⁵ mol/L × 66 463 g/mol = 1,092 g/L = 1,092 mg/mL.",
          "Em 2 mL: 1,092 × 2 ≈ 2,18 mg.",
        ],
      },
      {
        title: "Estimar ε a partir da sequência",
        steps: [
          "ε = 5500 × 6 + 1490 × 3 + 125 × 4 = 37 970 M⁻¹ cm⁻¹.",
          "c = 0,5 ÷ 37 970 = 1,317 × 10⁻⁵ M = 13,17 µM.",
          "mg/mL = 1,317 × 10⁻⁵ × 14 307 ≈ 0,1884 mg/mL.",
        ],
      },
      {
        title: "Com um coeficiente de extinção mássico, um percurso curto e uma diluição",
        steps: ["Corrija a diluição: 0,88 × 4 = 3,52.", "mg/mL = 3,52 ÷ (1,45 × 0,5 cm) ≈ 4,855 mg/mL."],
      },
    ],
    assumptions: [
      "A leitura A280 está corrigida pelo branco contra o mesmo tampão e situa-se dentro da gama linear do aparelho. Muitos espetrofotómetros perdem a linearidade a absorvâncias elevadas, pelo que as amostras muito concentradas devem ser diluídas.",
      "O coeficiente de extinção aplica-se à sua proteína no respetivo tampão. As estimativas a partir da composição em aminoácidos são razoavelmente fiáveis para proteínas que contêm triptofano e menos fiáveis para as que não o contêm; medir ε é melhor do que prevê-lo.",
      "São contabilizadas todas as substâncias que absorvem a 280 nm, incluindo ácidos nucleicos, alguns tampões e a luz dispersa por agregados. Estas fazem com que o resultado fique demasiado alto.",
      "O fator de diluição é aplicado à absorvância antes de calcular a concentração, pelo que o resultado se refere à solução-mãe não diluída.",
    ],
    faqs: [
      {
        question: "Porque é que mg/mL é igual a g/L?",
        answer:
          "Um mililitro é a milésima parte de um litro e um miligrama é a milésima parte de um grama, pelo que as duas milésimas se anulam. É por isso que a molaridade (mol/L) vezes a massa molecular (g/mol) dá diretamente mg/mL.",
      },
      {
        question: "E se não souber o coeficiente de extinção?",
        answer:
          "Se conhecer a sequência, conte os triptofanos, as tirosinas e as pontes dissulfureto e use o modo de estimativa. Para uma mistura desconhecida, usa-se por vezes um coeficiente de extinção mássico de cerca de 1,0 como referência aproximada, mas o resultado pode estar errado por um fator grande.",
      },
      {
        question: "Devo contar cisteínas ou cistinas?",
        answer:
          "Cistinas: cada ponte dissulfureto entre duas cisteínas conta uma vez. As cisteínas livres (tióis reduzidos) absorvem muito pouco a 280 nm. Para uma proteína totalmente reduzida, introduza 0 cistinas.",
      },
    ],
    sourcesUsedFor: [
      "A estimativa ε₂₈₀ = 5500 × Trp + 1490 × Tyr + 125 × cistina para uma proteína enovelada em água, e a sua menor fiabilidade para proteínas sem triptofano.",
      "O cálculo da concentração a partir da A280 com um coeficiente de extinção mássico, e a referência aproximada de que uma solução de proteína a 1 mg/mL dá uma A280 de cerca de 1,0 em 1 cm.",
    ],
  },
  text: {
    mode: "Coeficiente de extinção",
    modes: {
      molar: "ε molar (M⁻¹ cm⁻¹) e massa molecular",
      mass: "Coeficiente de extinção mássico E0.1% (1 mg/mL)",
      residues: "Estimar ε a partir do número de Trp, Tyr e cistinas",
    },
    a280: "Absorvância a 280 nm (A280)",
    a280Help: "A leitura corrigida pelo branco da amostra medida (eventualmente diluída).",
    pathLength: "Percurso ótico",
    pathLengthHelp: "1 cm numa cuvete padrão. Mantenha 1 se o aparelho já indicar a absorvância normalizada para 1 cm.",
    dilution: "Fator de diluição",
    dilutionHelp: "Volume total ÷ volume de amostra, se diluiu a amostra antes de a medir. Introduza 1 para uma amostra não diluída.",
    epsilon: "Coeficiente de extinção molar ε",
    epsilonHelp: "A 280 nm, em M⁻¹ cm⁻¹, obtido por exemplo a partir da sequência da proteína ou de uma entrada de base de dados.",
    mw: "Massa molecular",
    mwHelp: "Em daltons (g/mol). 1 kDa = 1000 Da.",
    mwOptional: "Massa molecular (opcional)",
    mwOptionalHelp: "Opcional, em daltons (g/mol). Necessária para a concentração molar (µM).",
    e01: "Coeficiente de extinção mássico E0.1%",
    e01Help: "A absorvância a 280 nm de uma solução a 1 mg/mL num percurso de 1 cm. Cerca de 1,0 é um valor aproximado habitual para proteínas desconhecidas.",
    trp: "Resíduos de triptofano (Trp, W)",
    tyr: "Resíduos de tirosina (Tyr, Y)",
    cystine: "Cistinas (pontes dissulfureto)",
    cystineHelp: "O número de pontes dissulfureto, cada uma a ligar duas cisteínas. As cisteínas livres quase não absorvem a 280 nm.",
    volume: "Volume da amostra",
    volumeHelp: "Opcional. Volume da solução-mãe não diluída, para obter a quantidade total de proteína.",
    errors: {
      noChromophores: "Sem Trp, Tyr nem cistinas, ε a 280 nm é zero e não é possível calcular a concentração. Use outro método.",
    },
    result: "Concentração de proteína",
    caption: "A280 × diluição ÷ (ε × percurso ótico)",
    micromolar: "Concentração molar",
    totalMass: "Proteína total em {volume} mL",
    epsilonUsed: "ε molar usado",
    e01Used: "Coeficiente de extinção mássico E0.1% usado",
    a280Normalized: "A280 por 1 cm de percurso (tal como medida)",
    notes: {
      range:
        "A absorvância medida por cm está acima de cerca de 1,5. Muitos espetrofotómetros deixam de ser lineares a absorvâncias elevadas, pelo que deve verificar a gama do aparelho e considerar diluir a amostra.",
      low: "A absorvância medida por cm está abaixo de cerca de 0,1, onde as leituras costumam ser menos precisas face ao ruído e aos erros do branco.",
      pace: "ε = 5500 × Trp + 1490 × Tyr + 125 × cistina é uma estimativa para uma proteína enovelada em água (Pace et al., 1995). É menos fiável para proteínas sem triptofano.",
      noTrp: "Esta proteína não tem triptofano, pelo que o ε estimado é menos fiável.",
      general:
        "A A280 contabiliza todas as substâncias que absorvem a 280 nm, incluindo ácidos nucleicos e outros contaminantes, e pressupõe que o coeficiente de extinção é o correto para a sua proteína.",
    },
  },
};

export default pt;
