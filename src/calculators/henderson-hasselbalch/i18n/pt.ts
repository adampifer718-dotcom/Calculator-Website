import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HendersonHasselbalchText } from "../text/en";

const pt: CalculatorTranslation<HendersonHasselbalchText> = {
  content: {
    title: "Calculadora de pH de tampões (Henderson–Hasselbalch)",
    shortTitle: "pH de tampões",
    summary:
      "Calcule o pH de uma solução-tampão a partir das concentrações de ácido e de base, ou a razão base/ácido e a concentração de base necessárias para um pH objetivo.",
    metaTitle: "Calculadora de pH de tampões – Henderson–Hasselbalch",
    metaDescription:
      "Use pH = pKa + log([A⁻]/[HA]) para obter o pH de um tampão, a razão base/ácido para um pH objetivo ou a concentração de base, com valores de pKa comuns.",
    keywords: ["Henderson-Hasselbalch", "pH de tampão", "solução-tampão", "pKa", "base conjugada", "tampão acetato", "tampão fosfato", "tampão Tris"],
    intro: [
      "Uma solução-tampão é uma mistura de um ácido fraco HA e da sua base conjugada A⁻. Mantém o pH relativamente estável quando se adicionam pequenas quantidades de ácido ou base fortes, porque cada forma neutraliza um deles. A equação de Henderson–Hasselbalch relaciona o pH do tampão com o pKa do ácido e com a razão entre as duas formas.",
      "Use esta calculadora para obter o pH de um tampão que preparou, a razão base/ácido que dá um pH objetivo, ou a concentração que a forma básica tem de ter para uma dada concentração de ácido. As opções predefinidas incluem tampões de acetato, bicarbonato, fosfato, Tris e amónio.",
    ],
    howToUse: [
      "Escolha o que pretende calcular: o pH, a razão ou a concentração de base.",
      "Escolha um par tampão na lista, ou escolha Outro e escreva o pKa.",
      "Introduza as concentrações em mol/L (aceita notação e, como 5e-3) ou o pH objetivo.",
      "Consulte o resultado e verifique se o pH está dentro da gama eficaz pKa ± 1.",
    ],
    formulas: [
      {
        title: "Equação de Henderson–Hasselbalch",
        expression: "pH = pKa + log₁₀([A⁻] ÷ [HA])",
        explanation: "Quando as duas formas são iguais, o termo logarítmico é 0 e pH = pKa.",
      },
      {
        title: "Razão para um pH objetivo",
        expression: "[A⁻] ÷ [HA] = 10^(pH − pKa)",
        explanation: "Cada unidade de pH acima do pKa multiplica a razão por 10.",
      },
      {
        title: "Gama eficaz",
        expression: "pKa − 1 ≤ pH ≤ pKa + 1",
        explanation: "Nesta gama, nenhuma das formas excede 10 vezes a outra, pelo que o tampão consegue absorver tanto ácido como base adicionados.",
      },
    ],
    examples: [
      {
        title: "Tampão acetato com mais base do que ácido",
        steps: ["Razão = 0,15 ÷ 0,10 = 1,5", "pH = 4,76 + log₁₀(1,5) = 4,76 + 0,1761", "pH ≈ 4,936"],
      },
      {
        title: "Tampão fosfato a pH 7,40",
        steps: ["pH − pKa = 7,40 − 7,21 = 0,19", "[HPO₄²⁻] ÷ [H₂PO₄⁻] = 10^0,19 ≈ 1,549"],
      },
      {
        title: "Base Tris necessária para pH 7,8",
        steps: ["Razão = 10^(7,8 − 8,07) = 10^−0,27 ≈ 0,5370", "[base Tris] = 0,05 mol/L × 0,5370 ≈ 0,02685 mol/L"],
      },
    ],
    assumptions: [
      "As concentrações substituem as atividades. Em soluções concentradas ou com muito sal, o pH real pode diferir em algumas décimas.",
      "As duas formas têm de estar presentes em concentrações muito superiores às de H⁺ e OH⁻, pelo que tampões muito diluídos e valores de pH afastados do pKa são menos exatos.",
      "Os valores de pKa predefinidos aplicam-se a 25 °C. O pKa varia com a temperatura e a força iónica, o que é especialmente importante no Tris. Verifique o pH de um tampão real com um medidor calibrado.",
      "Para ácidos com vários valores de pKa (como o ácido fosfórico e o ácido carbónico), só se considera o par escolhido.",
    ],
    faqs: [
      {
        question: "Porque é que a gama útil é pKa ± 1?",
        answer: "A uma unidade de pH do pKa, uma forma é dez vezes a outra. Para lá disso, o tampão tem muito pouco de uma das formas, pelo que já não consegue absorver muito ácido ou base adicionados nesse sentido.",
      },
      {
        question: "Que tampão devo escolher para um dado pH?",
        answer: "Escolha um par cujo pKa esteja próximo do pH de que precisa, idealmente a menos de meia unidade. Para pH 7,4, por exemplo, o fosfato (pKa 7,21) é mais adequado do que o acetato (pKa 4,76).",
      },
      {
        question: "Posso usar moles em vez de concentrações?",
        answer: "Sim. As duas formas estão no mesmo volume, pelo que a razão entre as moles é igual à razão entre as concentrações. Introduza as quantidades em moles nos dois campos e o pH é o mesmo.",
      },
    ],
    sourcesUsedFor: [
      "A equação de Henderson–Hasselbalch, as suas condições de utilização e a capacidade tampão.",
      "Valores de pKa de substâncias tampão comuns a 25 °C.",
    ],
  },
  text: {
    solve: "Calcular",
    solves: {
      ph: "pH do tampão a partir das concentrações",
      ratio: "Razão base/ácido para um pH objetivo",
      base: "Concentração de base para um pH objetivo",
    },
    acid: "Par ácido fraco / base conjugada",
    acids: {
      acetic: "Ácido acético / acetato (pKa {pka})",
      carbonic: "Ácido carbónico / bicarbonato, primeira dissociação (pKa {pka})",
      phosphate: "Di-hidrogenofosfato / hidrogenofosfato (pKa {pka})",
      tris: "Tris-H⁺ / base Tris (pKa {pka})",
      ammonium: "Amónio / amoníaco (pKa {pka})",
      custom: "Outro (introduza o pKa)",
    },
    pka: "pKa do ácido fraco",
    pkaHelp: "−log₁₀ da constante de dissociação ácida Ka, à temperatura do seu tampão.",
    base: "Concentração da base conjugada [A⁻]",
    acidConc: "Concentração do ácido fraco [HA]",
    concentrationHelp: "Em mol/L. Aceita notação e, como 5e-3.",
    targetPh: "pH objetivo",
    targetPhHelp: "Entre 0 e 14. Os tampões funcionam melhor a menos de 1 unidade do pKa.",
    errors: {
      notNumber: "Introduza um número positivo, como 0,1 ou 1e-3.",
      notPositive: "A concentração tem de ser superior a 0.",
      tooConcentrated: "Introduza, no máximo, {max} mol/L.",
    },
    molar: "{value} mol/L",
    results: { ph: "pH do tampão", ratio: "Razão [A⁻] ÷ [HA]", base: "Concentração da base conjugada [A⁻]" },
    captions: {
      ph: "pH = pKa + log₁₀([A⁻] ÷ [HA])",
      ratio: "[A⁻] ÷ [HA] = 10^(pH − pKa)",
      base: "[A⁻] = [HA] × 10^(pH − pKa)",
    },
    ratio: "Razão [A⁻] ÷ [HA]",
    phUsed: "pH objetivo",
    pkaUsed: "pKa usado",
    range: "Gama eficaz do tampão (pKa ± 1)",
    rangeText: "pH {low} a {high}",
    baseShare: "Fração do tampão na forma básica",
    notes: {
      insideRange: "O pH está a menos de 1 unidade do pKa, onde o tampão resiste bem às variações de pH.",
      outsideRange:
        "O pH está a mais de 1 unidade do pKa. Uma das formas do par é então mais de 10 vezes a outra, pelo que o tampão tem pouca capacidade num dos sentidos. Um par com um pKa mais próximo do objetivo costuma funcionar melhor.",
      tooMuchBase:
        "A concentração de base necessária é superior a 20 mol/L, o que não é viável. Reduza a concentração de ácido ou escolha um par com um pKa mais próximo do pH objetivo.",
      extreme: "O pH está fora do intervalo 0–14. A equação de Henderson–Hasselbalch não é fiável tão longe do pKa.",
      general:
        "A equação usa concentrações em vez de atividades e pressupõe que as duas formas estão presentes bem acima das concentrações de H⁺ e OH⁻. Os valores de pKa indicados aplicam-se a 25 °C; o pKa varia com a temperatura e a força iónica, sobretudo no Tris.",
    },
  },
};

export default pt;
