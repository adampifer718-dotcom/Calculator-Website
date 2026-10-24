import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PhText } from "../text/en";

const fr: CalculatorTranslation<PhText> = {
  content: {
    title: "Calculateur de pH",
    shortTitle: "pH",
    summary: "Trouvez le pH, le pOH, [H⁺] et [OH⁻] à partir de la concentration en ions hydrogène, d’un pH ou d’un pOH, ou de la concentration d’un acide fort, d’une base forte ou d’un acide faible.",
    metaTitle: "Calculateur de pH – pH, pOH, [H⁺] et [OH⁻] à 25 °C",
    metaDescription:
      "Calculez le pH et le pOH à partir de [H⁺], de la concentration d’un acide ou d’une base forte, ou d’un acide faible avec son Ka ou pKa, avec [H⁺] et [OH⁻].",
    keywords: ["calcul pH", "calculateur de pH", "pOH", "concentration en ions hydrogène", "pH acide faible", "pH acide fort", "pKa", "Ka", "acide ou basique"],
    intro: [
      "Le pH mesure l’acidité ou la basicité d’une solution aqueuse. C’est l’opposé du logarithme décimal de la concentration en ions hydrogène : chaque unité de pH correspond donc à un facteur dix. Une solution à pH 3 contient dix fois plus de H⁺ qu’une solution à pH 4. À 25 °C, un pH de 7 est neutre, une valeur inférieure est acide et une valeur supérieure est basique.",
      "Ce calculateur convertit entre pH, pOH, [H⁺] et [OH⁻], et calcule le pH d’un acide fort, d’une base forte ou d’un acide faible à partir de sa concentration. Les formules de l’acide fort et de la base forte tiennent compte des ions de l’eau elle-même, si bien que même des solutions extrêmement diluées donnent un résultat cohérent.",
    ],
    howToUse: [
      "Choisissez ce que vous connaissez : [H⁺], pH, pOH, ou la concentration d’un acide fort, d’une base forte ou d’un acide faible.",
      "Saisissez la valeur. Les concentrations sont en mol/L et acceptent la notation scientifique : 3,2 × 10⁻⁵ peut s’écrire 3,2e-5.",
      "Pour un acide faible, saisissez aussi sa force sous forme de pKa ou de Ka.",
      "Lisez le pH, le pOH, les deux concentrations d’ions et le caractère acide, neutre ou basique de la solution.",
    ],
    formulas: [
      { title: "pH et pOH", expression: "pH = −log₁₀[H⁺]   pOH = −log₁₀[OH⁻]\npH + pOH = 14   (Kw = [H⁺][OH⁻] = 1,0 × 10⁻¹⁴ à 25 °C)", explanation: "Les concentrations sont en mol/L." },
      { title: "Monoacide fort", expression: "[H⁺] = (C + √(C² + 4Kw)) ÷ 2", explanation: "D’après l’électroneutralité [H⁺] = C + [OH⁻]. Pour C nettement supérieure à 10⁻⁶ mol/L, on a simplement [H⁺] ≈ C. Une base forte utilise la même formule pour [OH⁻]." },
      { title: "Monoacide faible", expression: "Ka = x² ÷ (C − x)   ⇒   x = [H⁺] = (−Ka + √(Ka² + 4·Ka·C)) ÷ 2", explanation: "La solution exacte de l’équation du second degré, sans l’approximation x ≪ C, en négligeant les H⁺ de l’eau. Ka = 10^(−pKa)." },
    ],
    examples: [
      { title: "Une solution d’acide chlorhydrique à 0,025 mol/L", steps: ["[H⁺] = (0,025 + √(0,025² + 4 × 10⁻¹⁴)) ÷ 2 ≈ 0,025 mol/L", "pH = −log₁₀(0,025) ≈ 1,602", "pOH = 14 − 1,602 = 12,398"] },
      {
        title: "Un acide faible à 0,05 mol/L de pKa 4,76",
        steps: ["Ka = 10^(−4,76) ≈ 1,738 × 10⁻⁵", "[H⁺] = (−Ka + √(Ka² + 4 × Ka × 0,05)) ÷ 2 ≈ 9,235 × 10⁻⁴ mol/L", "pH = −log₁₀(9,235 × 10⁻⁴) ≈ 3,035, avec environ 1,85 % de l’acide ionisé"],
      },
      { title: "Une solution avec [H⁺] = 2,5 × 10⁻⁹ mol/L", steps: ["pH = −log₁₀(2,5 × 10⁻⁹) ≈ 8,602", "pOH = 14 − 8,602 = 5,398", "Le pH est supérieur à 7 : la solution est basique"] },
    ],
    assumptions: [
      "Tous les calculs sont faits pour 25 °C, où Kw = 1,0 × 10⁻¹⁴ et où l’eau neutre a un pH de 7. À d’autres températures, Kw change, tout comme le point neutre et la somme pH + pOH.",
      "Les concentrations sont utilisées à la place des activités. Cela fonctionne bien pour les solutions diluées, mais devient imprécis au-delà d’environ 0,1 mol/L, et les pH inférieurs à 0 ou supérieurs à 14 ne sont qu’approximatifs.",
      "Les acides et les bases sont monoprotiques : chacun libère un seul H⁺ ou OH⁻. Le mode acide faible néglige les H⁺ de l’eau ; il n’est donc pas fiable lorsque l’acide est extrêmement dilué ou extrêmement faible.",
    ],
    faqs: [
      { question: "Pourquoi le pH de HCl à 10⁻⁸ mol/L n’est-il pas de 8 ?", answer: "Parce qu’un acide ne peut pas rendre l’eau basique. À cette dilution, l’eau elle-même fournit environ 10⁻⁷ mol/L de H⁺, plus que l’acide. La formule utilisée ici tient compte de la contribution de l’eau et donne un pH d’environ 6,98." },
      { question: "Quelle est la différence entre Ka et pKa ?", answer: "Le pKa est −log₁₀ du Ka, de même que le pH est −log₁₀ de [H⁺]. Un pKa plus petit (Ka plus grand) signifie un acide plus fort. Un pKa de 4,76 équivaut à un Ka d’environ 1,74 × 10⁻⁵." },
      { question: "Le pH peut-il être négatif ?", answer: "Oui. Un acide fort plus concentré que 1 mol/L a une [H⁺] supérieure à 1 : son pH est donc inférieur à 0. À de telles concentrations, cependant, les solutions réelles s’écartent fortement des formules simples ; considérez le résultat comme un ordre de grandeur." },
    ],
    sourcesUsedFor: [
      "Kw = 1,0 × 10⁻¹⁴ à 25 °C, pH = −log[H₃O⁺], pOH = −log[OH⁻] et pH + pOH = 14,00.",
      "La constante d’acidité Ka et les calculs d’équilibre des acides faibles, y compris le pourcentage d’ionisation.",
    ],
  },
  text: {
    mode: "Calculer à partir de",
    modes: {
      hydrogen: "Concentration en ions hydrogène [H⁺]",
      ph: "pH",
      poh: "pOH",
      strongAcid: "Concentration d’un acide fort",
      strongBase: "Concentration d’une base forte",
      weakAcid: "Concentration d’un acide faible et Ka",
    },
    hydrogen: "Concentration [H⁺]",
    concentrationHelp: "En mol/L. Vous pouvez utiliser la notation scientifique, par exemple 2,5e-9 pour 2,5 × 10⁻⁹.",
    ph: "pH",
    poh: "pOH",
    phRangeHelp: "Généralement entre 0 et 14. Les valeurs de −2 à 16 sont acceptées.",
    concentration: "Concentration (C)",
    concentrationModeHelp:
      "Concentration molaire en mol/L d’un monoacide (un seul H⁺, comme HCl ou l’acide acétique) ou d’une base à un seul OH⁻ (comme NaOH). La notation scientifique, par exemple 1e-8, est acceptée.",
    constantType: "Force de l’acide exprimée en",
    constantTypes: { pka: "pKa", ka: "Ka" },
    ka: "Constante d’acidité (Ka)",
    kaHelp: "La notation scientifique est acceptée, par exemple 6,3e-5.",
    pka: "pKa",
    errors: {
      notNumber: "Saisissez un nombre positif, par exemple 0,001 ou 1e-3.",
      notPositive: "La valeur doit être supérieure à 0.",
      tooConcentrated: "Saisissez au maximum {max} mol/L. Les formules n’ont pas de sens pour des solutions plus concentrées.",
      kaTooLarge: "Saisissez un Ka d’au plus {max}. Un acide aussi fort se comporte comme un acide fort.",
    },
    phResult: "pH",
    pohResult: "pOH",
    hResult: "Concentration en ions hydrogène [H⁺]",
    ohResult: "Concentration en ions hydroxyde [OH⁻]",
    ionization: "Pourcentage d’ionisation",
    nature: "Acide, neutre ou basique (à 25 °C)",
    natures: { acidic: "Acide", neutral: "Neutre", basic: "Basique" },
    captions: {
      hydrogen: "pH = −log₁₀[H⁺]",
      ph: "[H⁺] = 10^(−pH)",
      poh: "pH = 14 − pOH",
      strongAcid: "[H⁺] = (C + √(C² + 4Kw)) ÷ 2",
      strongBase: "[OH⁻] = (C + √(C² + 4Kw)) ÷ 2",
      weakAcid: "[H⁺] = (−Ka + √(Ka² + 4·Ka·C)) ÷ 2",
    },
    notes: {
      kw: "Utilise Kw = 1,0 × 10⁻¹⁴ à 25 °C, donc pH + pOH = 14. Les concentrations remplacent les activités.",
      outside: "Le pH est en dehors de l’intervalle 0–14. Cela ne se produit que dans des solutions très concentrées, où les concentrations remplacent mal les activités et où le résultat n’est qu’approximatif.",
      weak: "La formule de l’acide faible néglige les H⁺ provenant de l’eau elle-même.",
      weakDilute: "L’acide fournit moins de 1 × 10⁻⁶ mol/L de H⁺ : les ions de l’eau ne sont donc pas négligeables et le pH réel est plus proche de 7 que la valeur affichée.",
      dilute: "La solution est si diluée que les ions de l’eau comptent. La formule en tient compte, c’est pourquoi le pH reste du bon côté de 7.",
    },
  },
};

export default fr;
