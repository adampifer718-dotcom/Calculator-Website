import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PhText } from "../text/en";

const de: CalculatorTranslation<PhText> = {
  content: {
    title: "pH-Rechner",
    shortTitle: "pH",
    summary: "Bestimmen Sie pH, pOH, [H⁺] und [OH⁻] aus der Wasserstoffionenkonzentration, einem pH- oder pOH-Wert oder der Konzentration einer starken Säure, starken Base oder schwachen Säure.",
    metaTitle: "pH-Rechner – pH, pOH, [H⁺] und [OH⁻] bei 25 °C",
    metaDescription: "Berechnen Sie pH und pOH aus [H⁺], aus der Konzentration einer starken Säure oder Base oder aus Konzentration und Ka bzw. pKa einer schwachen Säure.",
    keywords: ["pH-Wert berechnen", "pOH berechnen", "Wasserstoffionenkonzentration", "pH schwache Säure", "pH starke Säure", "pKa", "Ka", "sauer oder basisch"],
    intro: [
      "Der pH-Wert gibt an, wie sauer oder basisch eine wässrige Lösung ist. Er ist der negative dekadische Logarithmus der Wasserstoffionenkonzentration, daher bedeutet jede pH-Einheit eine Änderung um den Faktor zehn: Eine Lösung mit pH 3 enthält zehnmal so viel H⁺ wie eine mit pH 4. Bei 25 °C ist pH 7 neutral, darunter sauer und darüber basisch.",
      "Dieser Rechner rechnet zwischen pH, pOH, [H⁺] und [OH⁻] um und bestimmt den pH-Wert einer starken Säure, einer starken Base oder einer schwachen Säure aus ihrer Konzentration. Die Formeln für starke Säuren und Basen berücksichtigen die Ionen aus dem Wasser selbst, sodass auch extrem verdünnte Lösungen ein sinnvolles Ergebnis liefern.",
    ],
    howToUse: [
      "Wählen Sie, was Sie kennen: [H⁺], pH, pOH oder die Konzentration einer starken Säure, starken Base oder schwachen Säure.",
      "Geben Sie den Wert ein. Konzentrationen werden in mol/L angegeben und akzeptieren E-Notation, sodass sich 3,2 × 10⁻⁵ als 3.2e-5 eingeben lässt.",
      "Geben Sie bei einer schwachen Säure zusätzlich ihre Stärke als pKa oder Ka ein.",
      "Lesen Sie pH, pOH, beide Ionenkonzentrationen und die Angabe ab, ob die Lösung sauer, neutral oder basisch ist.",
    ],
    formulas: [
      { title: "pH und pOH", expression: "pH = −log₁₀[H⁺]   pOH = −log₁₀[OH⁻]\npH + pOH = 14   (Kw = [H⁺][OH⁻] = 1,0 × 10⁻¹⁴ bei 25 °C)", explanation: "Konzentrationen in mol/L." },
      { title: "Starke einprotonige Säure", expression: "[H⁺] = (C + √(C² + 4Kw)) ÷ 2", explanation: "Aus der Ladungsbilanz [H⁺] = C + [OH⁻]. Für C deutlich über 10⁻⁶ mol/L gilt einfach [H⁺] ≈ C. Für eine starke Base gilt dieselbe Formel für [OH⁻]." },
      { title: "Schwache einprotonige Säure", expression: "Ka = x² ÷ (C − x)   ⇒   x = [H⁺] = (−Ka + √(Ka² + 4·Ka·C)) ÷ 2", explanation: "Die exakte Lösung der quadratischen Gleichung, ohne die Näherung x ≪ C, unter Vernachlässigung des H⁺ aus dem Wasser. Ka = 10^(−pKa)." },
    ],
    examples: [
      {
        title: "Eine Salzsäurelösung mit 0,025 mol/L",
        steps: ["[H⁺] = (0,025 + √(0,025² + 4 × 10⁻¹⁴)) ÷ 2 ≈ 0,025 mol/L", "pH = −log₁₀(0,025) ≈ 1,602", "pOH = 14 − 1,602 = 12,398"],
      },
      {
        title: "Eine schwache Säure mit 0,05 mol/L und pKa 4,76",
        steps: ["Ka = 10^(−4,76) ≈ 1,738 × 10⁻⁵", "[H⁺] = (−Ka + √(Ka² + 4 × Ka × 0,05)) ÷ 2 ≈ 9,235 × 10⁻⁴ mol/L", "pH = −log₁₀(9,235 × 10⁻⁴) ≈ 3,035, wobei etwa 1,85 % der Säure dissoziiert sind"],
      },
      {
        title: "Eine Lösung mit [H⁺] = 2,5 × 10⁻⁹ mol/L",
        steps: ["pH = −log₁₀(2,5 × 10⁻⁹) ≈ 8,602", "pOH = 14 − 8,602 = 5,398", "Der pH-Wert liegt über 7, die Lösung ist also basisch"],
      },
    ],
    assumptions: [
      "Alles wird für 25 °C berechnet, wo Kw = 1,0 × 10⁻¹⁴ gilt und neutrales Wasser pH 7 hat. Bei anderen Temperaturen ändert sich Kw und damit auch der Neutralpunkt und pH + pOH.",
      "Statt Aktivitäten werden Konzentrationen verwendet. Das funktioniert gut für verdünnte Lösungen, wird aber oberhalb von etwa 0,1 mol/L ungenau, und pH-Werte unter 0 oder über 14 sind nur grobe Näherungen.",
      "Säuren und Basen sind einprotonig bzw. einwertig: Jede gibt ein einziges H⁺ oder OH⁻ ab. Der Modus für schwache Säuren vernachlässigt das H⁺ aus dem Wasser und ist daher nicht zuverlässig, wenn die Säure extrem verdünnt oder extrem schwach ist.",
    ],
    faqs: [
      { question: "Warum ist der pH-Wert von 10⁻⁸ mol/L HCl nicht 8?", answer: "Weil eine Säure Wasser nicht basisch machen kann. Bei dieser Verdünnung liefert das Wasser selbst etwa 10⁻⁷ mol/L H⁺, mehr als die Säure. Die hier verwendete Formel berücksichtigt den Beitrag des Wassers und ergibt einen pH-Wert von etwa 6,98." },
      { question: "Was ist der Unterschied zwischen Ka und pKa?", answer: "pKa ist −log₁₀ von Ka, so wie pH −log₁₀ von [H⁺] ist. Ein kleinerer pKa (größerer Ka) bedeutet eine stärkere Säure. Ein pKa von 4,76 entspricht einem Ka von etwa 1,74 × 10⁻⁵." },
      { question: "Kann der pH-Wert negativ sein?", answer: "Ja. Eine starke Säure mit mehr als 1 mol/L hat ein [H⁺] über 1, ihr pH-Wert liegt also unter 0. Bei solchen Konzentrationen weichen reale Lösungen allerdings stark von den einfachen Formeln ab, betrachten Sie den Wert daher nur als grobe Orientierung." },
    ],
    sourcesUsedFor: [
      "Kw = 1,0 × 10⁻¹⁴ bei 25 °C, pH = −log[H₃O⁺], pOH = −log[OH⁻] und pH + pOH = 14,00.",
      "Die Säurekonstante Ka und Gleichgewichtsrechnungen für schwache Säuren, einschließlich des Dissoziationsgrads.",
    ],
  },
  text: {
    mode: "Berechnen aus",
    modes: {
      hydrogen: "Wasserstoffionenkonzentration [H⁺]",
      ph: "pH",
      poh: "pOH",
      strongAcid: "Konzentration einer starken Säure",
      strongBase: "Konzentration einer starken Base",
      weakAcid: "Konzentration und Ka einer schwachen Säure",
    },
    hydrogen: "[H⁺]-Konzentration",
    concentrationHelp: "In mol/L. Sie können E-Notation verwenden, z. B. 2.5e-9 für 2,5 × 10⁻⁹.",
    ph: "pH",
    poh: "pOH",
    phRangeHelp: "Meist zwischen 0 und 14. Werte von −2 bis 16 werden akzeptiert.",
    concentration: "Konzentration (C)",
    concentrationModeHelp:
      "Stoffmengenkonzentration in mol/L einer einprotonigen Säure (ein H⁺, etwa HCl oder Essigsäure) oder einer Base mit einem OH⁻ (etwa NaOH). E-Notation wie 1e-8 wird akzeptiert.",
    constantType: "Säurestärke angegeben als",
    constantTypes: { pka: "pKa", ka: "Ka" },
    ka: "Säurekonstante (Ka)",
    kaHelp: "E-Notation wird akzeptiert, z. B. 6.3e-5.",
    pka: "pKa",
    errors: {
      notNumber: "Geben Sie eine positive Zahl ein, etwa 0,001 oder 1e-3.",
      notPositive: "Der Wert muss größer als 0 sein.",
      tooConcentrated: "Geben Sie höchstens {max} mol/L ein. Für konzentriertere Lösungen sind die Formeln nicht aussagekräftig.",
      kaTooLarge: "Geben Sie einen Ka von höchstens {max} ein. Eine so starke Säure verhält sich wie eine starke Säure.",
    },
    phResult: "pH",
    pohResult: "pOH",
    hResult: "Wasserstoffionenkonzentration [H⁺]",
    ohResult: "Hydroxidionenkonzentration [OH⁻]",
    ionization: "Dissoziationsgrad",
    nature: "Sauer, neutral oder basisch (bei 25 °C)",
    natures: { acidic: "Sauer", neutral: "Neutral", basic: "Basisch" },
    captions: {
      hydrogen: "pH = −log₁₀[H⁺]",
      ph: "[H⁺] = 10^(−pH)",
      poh: "pH = 14 − pOH",
      strongAcid: "[H⁺] = (C + √(C² + 4Kw)) ÷ 2",
      strongBase: "[OH⁻] = (C + √(C² + 4Kw)) ÷ 2",
      weakAcid: "[H⁺] = (−Ka + √(Ka² + 4·Ka·C)) ÷ 2",
    },
    notes: {
      kw: "Verwendet Kw = 1,0 × 10⁻¹⁴ bei 25 °C, daher gilt pH + pOH = 14. Konzentrationen ersetzen die Aktivitäten.",
      outside: "Der pH-Wert liegt außerhalb von 0–14. Das kommt nur in sehr konzentrierten Lösungen vor, in denen Konzentrationen die Aktivitäten schlecht wiedergeben und das Ergebnis nur eine Näherung ist.",
      weak: "Die Formel für schwache Säuren vernachlässigt das H⁺, das aus dem Wasser selbst stammt.",
      weakDilute: "Die Säure liefert weniger als 1 × 10⁻⁶ mol/L H⁺, daher sind die Ionen des Wassers nicht vernachlässigbar und der tatsächliche pH-Wert liegt näher an 7 als angezeigt.",
      dilute: "Die Lösung ist so verdünnt, dass die Ionen aus dem Wasser eine Rolle spielen. Die Formel berücksichtigt sie, deshalb bleibt der pH-Wert auf der richtigen Seite von 7.",
    },
  },
};

export default de;
