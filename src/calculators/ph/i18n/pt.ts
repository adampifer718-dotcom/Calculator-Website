import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PhText } from "../text/en";

const pt: CalculatorTranslation<PhText> = {
  content: {
    title: "Calculadora de pH",
    shortTitle: "pH",
    summary: "Obtenha o pH, o pOH, [H⁺] e [OH⁻] a partir da concentração de iões hidrogénio, de um pH ou pOH, ou da concentração de um ácido forte, de uma base forte ou de um ácido fraco.",
    metaTitle: "Calculadora de pH – pH, pOH, [H⁺] e [OH⁻] a 25 °C",
    metaDescription:
      "Calcule o pH e o pOH a partir de [H⁺], da concentração de um ácido ou base forte, ou da concentração e do Ka ou pKa de um ácido fraco, com [H⁺] e [OH⁻].",
    keywords: ["calcular pH", "calculadora de pH", "pOH", "concentração de iões hidrogénio", "pH de ácido fraco", "pH de ácido forte", "pKa e Ka", "ácido ou básico"],
    intro: [
      "O pH mede o grau de acidez ou basicidade de uma solução aquosa. É o logaritmo decimal negativo da concentração de iões hidrogénio, pelo que cada unidade de pH corresponde a uma variação de dez vezes: uma solução a pH 3 tem dez vezes mais H⁺ do que uma a pH 4. A 25 °C, pH 7 é neutro, valores inferiores são ácidos e superiores são básicos.",
      "Esta calculadora converte entre pH, pOH, [H⁺] e [OH⁻] e calcula o pH de um ácido forte, de uma base forte ou de um ácido fraco a partir da sua concentração. As fórmulas do ácido e da base fortes incluem os iões da própria água, pelo que mesmo soluções extremamente diluídas dão um resultado coerente.",
    ],
    howToUse: [
      "Escolha o que conhece: [H⁺], pH, pOH ou a concentração de um ácido forte, de uma base forte ou de um ácido fraco.",
      "Introduza o valor. As concentrações são em mol/L e aceitam notação e, pelo que 3,2 × 10⁻⁵ pode ser escrito como 3.2e-5.",
      "Para um ácido fraco, introduza também a sua força como pKa ou Ka.",
      "Consulte o pH, o pOH, as duas concentrações iónicas e se a solução é ácida, neutra ou básica.",
    ],
    formulas: [
      { title: "pH e pOH", expression: "pH = −log₁₀[H⁺]   pOH = −log₁₀[OH⁻]\npH + pOH = 14   (Kw = [H⁺][OH⁻] = 1,0 × 10⁻¹⁴ a 25 °C)", explanation: "As concentrações são em mol/L." },
      { title: "Ácido monoprótico forte", expression: "[H⁺] = (C + √(C² + 4Kw)) ÷ 2", explanation: "Resulta do balanço de cargas [H⁺] = C + [OH⁻]. Para C muito acima de 10⁻⁶ mol/L, fica simplesmente [H⁺] ≈ C. Uma base forte usa a mesma fórmula para [OH⁻]." },
      { title: "Ácido monoprótico fraco", expression: "Ka = x² ÷ (C − x)   ⇒   x = [H⁺] = (−Ka + √(Ka² + 4·Ka·C)) ÷ 2", explanation: "A solução exata da equação do segundo grau, sem a simplificação x ≪ C, ignorando o H⁺ da água. Ka = 10^(−pKa)." },
    ],
    examples: [
      { title: "Uma solução de ácido clorídrico a 0,025 mol/L", steps: ["[H⁺] = (0,025 + √(0,025² + 4 × 10⁻¹⁴)) ÷ 2 ≈ 0,025 mol/L", "pH = −log₁₀(0,025) ≈ 1,602", "pOH = 14 − 1,602 = 12,398"] },
      { title: "Um ácido fraco a 0,05 mol/L com pKa 4,76", steps: ["Ka = 10^(−4,76) ≈ 1,738 × 10⁻⁵", "[H⁺] = (−Ka + √(Ka² + 4 × Ka × 0,05)) ÷ 2 ≈ 9,235 × 10⁻⁴ mol/L", "pH = −log₁₀(9,235 × 10⁻⁴) ≈ 3,035, com cerca de 1,85% do ácido ionizado"] },
      { title: "Uma solução com [H⁺] = 2,5 × 10⁻⁹ mol/L", steps: ["pH = −log₁₀(2,5 × 10⁻⁹) ≈ 8,602", "pOH = 14 − 8,602 = 5,398", "O pH é superior a 7, pelo que a solução é básica"] },
    ],
    assumptions: [
      "Tudo é calculado para 25 °C, temperatura a que Kw = 1,0 × 10⁻¹⁴ e a água neutra tem pH 7. A outras temperaturas, Kw muda, e com ele o ponto neutro e a soma pH + pOH.",
      "Usam-se concentrações em vez de atividades. Isto funciona bem para soluções diluídas, mas torna-se impreciso acima de cerca de 0,1 mol/L, e os valores de pH inferiores a 0 ou superiores a 14 são apenas aproximados.",
      "Os ácidos e as bases são monopróticos: cada um liberta um único H⁺ ou OH⁻. O modo de ácido fraco ignora o H⁺ da água, pelo que não é fiável quando o ácido é extremamente diluído ou extremamente fraco.",
    ],
    faqs: [
      { question: "Porque é que o pH de HCl a 10⁻⁸ mol/L não é 8?", answer: "Porque um ácido não pode tornar a água básica. Nessa diluição, a própria água fornece cerca de 10⁻⁷ mol/L de H⁺, mais do que o ácido. A fórmula usada aqui inclui a contribuição da água e dá um pH de cerca de 6,98." },
      { question: "Qual é a diferença entre Ka e pKa?", answer: "O pKa é o −log₁₀ do Ka, tal como o pH é o −log₁₀ de [H⁺]. Um pKa menor (Ka maior) significa um ácido mais forte. Um pKa de 4,76 equivale a um Ka de cerca de 1,74 × 10⁻⁵." },
      { question: "O pH pode ser negativo?", answer: "Sim. Um ácido forte mais concentrado do que 1 mol/L tem [H⁺] superior a 1, pelo que o seu pH é inferior a 0. Contudo, a essas concentrações as soluções reais afastam-se muito das fórmulas simples, por isso considere o valor apenas uma orientação aproximada." },
    ],
    sourcesUsedFor: [
      "Kw = 1,0 × 10⁻¹⁴ a 25 °C, pH = −log[H₃O⁺], pOH = −log[OH⁻] e pH + pOH = 14,00.",
      "Constante de ionização ácida Ka e cálculos de equilíbrio para ácidos fracos, incluindo a percentagem de ionização.",
    ],
  },
  text: {
    mode: "Calcular a partir de",
    modes: {
      hydrogen: "Concentração de iões hidrogénio [H⁺]",
      ph: "pH",
      poh: "pOH",
      strongAcid: "Concentração de ácido forte",
      strongBase: "Concentração de base forte",
      weakAcid: "Concentração de ácido fraco e Ka",
    },
    hydrogen: "Concentração de [H⁺]",
    concentrationHelp: "Em mol/L. Pode usar notação e, por exemplo 2.5e-9 para 2,5 × 10⁻⁹.",
    ph: "pH",
    poh: "pOH",
    phRangeHelp: "Normalmente entre 0 e 14. São aceites valores de −2 a 16.",
    concentration: "Concentração (C)",
    concentrationModeHelp:
      "Concentração molar em mol/L de um ácido monoprótico (um H⁺, como o HCl ou o ácido acético) ou de uma base com um OH⁻ (como o NaOH). É aceite notação e, como 1e-8.",
    constantType: "Força do ácido indicada como",
    constantTypes: { pka: "pKa", ka: "Ka" },
    ka: "Constante de dissociação ácida (Ka)",
    kaHelp: "É aceite notação e, por exemplo 6.3e-5.",
    pka: "pKa",
    errors: {
      notNumber: "Introduza um número positivo, como 0,001 ou 1e-3.",
      notPositive: "O valor tem de ser superior a 0.",
      tooConcentrated: "Introduza, no máximo, {max} mol/L. As fórmulas não fazem sentido para soluções mais concentradas.",
      kaTooLarge: "Introduza um Ka de, no máximo, {max}. Um ácido tão forte comporta-se como um ácido forte.",
    },
    phResult: "pH",
    pohResult: "pOH",
    hResult: "Concentração de iões hidrogénio [H⁺]",
    ohResult: "Concentração de iões hidróxido [OH⁻]",
    ionization: "Percentagem de ionização",
    nature: "Ácida, neutra ou básica (a 25 °C)",
    natures: { acidic: "Ácida", neutral: "Neutra", basic: "Básica" },
    captions: {
      hydrogen: "pH = −log₁₀[H⁺]",
      ph: "[H⁺] = 10^(−pH)",
      poh: "pH = 14 − pOH",
      strongAcid: "[H⁺] = (C + √(C² + 4Kw)) ÷ 2",
      strongBase: "[OH⁻] = (C + √(C² + 4Kw)) ÷ 2",
      weakAcid: "[H⁺] = (−Ka + √(Ka² + 4·Ka·C)) ÷ 2",
    },
    notes: {
      kw: "Usa Kw = 1,0 × 10⁻¹⁴ a 25 °C, pelo que pH + pOH = 14. As concentrações substituem as atividades.",
      outside: "O pH está fora do intervalo 0–14. Isto só acontece em soluções muito concentradas, em que as concentrações substituem mal as atividades e o resultado é apenas aproximado.",
      weak: "A fórmula do ácido fraco ignora o H⁺ proveniente da própria água.",
      weakDilute: "O ácido fornece menos de 1 × 10⁻⁶ mol/L de H⁺, pelo que os iões da própria água não são desprezáveis e o pH real está mais próximo de 7 do que o indicado.",
      dilute: "A solução é tão diluída que os iões da água contam. A fórmula inclui-os, e é por isso que o pH se mantém do lado correto de 7.",
    },
  },
};

export default pt;
