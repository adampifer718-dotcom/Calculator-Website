import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { PhText } from "../text/en";

const it: CalculatorTranslation<PhText> = {
  content: {
    title: "Calcolatore del pH",
    shortTitle: "pH",
    summary:
      "Trova pH, pOH, [H⁺] e [OH⁻] da una concentrazione di ioni idrogeno, da un pH o pOH, o dalla concentrazione di un acido forte, di una base forte o di un acido debole.",
    metaTitle: "Calcolatore del pH – pH, pOH, [H⁺] e [OH⁻] a 25 °C",
    metaDescription:
      "Calcola pH e pOH da [H⁺], dalla concentrazione di un acido o una base forte, o da concentrazione e Ka o pKa di un acido debole, con [H⁺] e [OH⁻].",
    keywords: [
      "calcolo pH",
      "calcolo pOH",
      "concentrazione ioni idrogeno",
      "pH acido debole",
      "pH acido forte",
      "pKa",
      "Ka",
      "acido o basico",
    ],
    intro: [
      "Il pH misura quanto è acida o basica una soluzione acquosa. È il logaritmo in base 10 cambiato di segno della concentrazione di ioni idrogeno, quindi ogni unità di pH corrisponde a un fattore dieci: una soluzione a pH 3 contiene dieci volte più H⁺ di una a pH 4. A 25 °C, pH 7 è neutro, un valore più basso è acido e uno più alto è basico.",
      "Questo calcolatore converte tra pH, pOH, [H⁺] e [OH⁻] e calcola il pH di un acido forte, di una base forte o di un acido debole a partire dalla concentrazione. Le formule per acidi e basi forti includono gli ioni dell'acqua stessa, quindi anche soluzioni estremamente diluite danno un risultato sensato.",
    ],
    howToUse: [
      "Scegli che cosa conosci: [H⁺], pH, pOH o la concentrazione di un acido forte, di una base forte o di un acido debole.",
      "Inserisci il valore. Le concentrazioni sono in mol/L e accettano la notazione e, quindi 3,2 × 10⁻⁵ si può scrivere 3.2e-5.",
      "Per un acido debole, inserisci anche la sua forza come pKa o Ka.",
      "Leggi pH, pOH, le concentrazioni dei due ioni e se la soluzione è acida, neutra o basica.",
    ],
    formulas: [
      {
        title: "pH e pOH",
        expression: "pH = −log₁₀[H⁺]   pOH = −log₁₀[OH⁻]\npH + pOH = 14   (Kw = [H⁺][OH⁻] = 1,0 × 10⁻¹⁴ a 25 °C)",
        explanation: "Le concentrazioni sono in mol/L.",
      },
      {
        title: "Acido forte monoprotico",
        expression: "[H⁺] = (C + √(C² + 4Kw)) ÷ 2",
        explanation:
          "Deriva dal bilancio di carica [H⁺] = C + [OH⁻]. Per C molto superiore a 10⁻⁶ mol/L si riduce semplicemente a [H⁺] ≈ C. Una base forte usa la stessa formula per [OH⁻].",
      },
      {
        title: "Acido debole monoprotico",
        expression: "Ka = x² ÷ (C − x)   ⇒   x = [H⁺] = (−Ka + √(Ka² + 4·Ka·C)) ÷ 2",
        explanation:
          "La soluzione esatta dell'equazione di secondo grado, senza l'approssimazione x ≪ C, trascurando gli H⁺ dell'acqua. Ka = 10^(−pKa).",
      },
    ],
    examples: [
      {
        title: "Una soluzione di acido cloridrico 0,025 mol/L",
        steps: ["[H⁺] = (0,025 + √(0,025² + 4 × 10⁻¹⁴)) ÷ 2 ≈ 0,025 mol/L", "pH = −log₁₀(0,025) ≈ 1,602", "pOH = 14 − 1,602 = 12,398"],
      },
      {
        title: "Un acido debole 0,05 mol/L con pKa 4,76",
        steps: [
          "Ka = 10^(−4,76) ≈ 1,738 × 10⁻⁵",
          "[H⁺] = (−Ka + √(Ka² + 4 × Ka × 0,05)) ÷ 2 ≈ 9,235 × 10⁻⁴ mol/L",
          "pH = −log₁₀(9,235 × 10⁻⁴) ≈ 3,035, con circa l'1,85% dell'acido ionizzato",
        ],
      },
      {
        title: "Una soluzione con [H⁺] = 2,5 × 10⁻⁹ mol/L",
        steps: ["pH = −log₁₀(2,5 × 10⁻⁹) ≈ 8,602", "pOH = 14 − 8,602 = 5,398", "Il pH è superiore a 7, quindi la soluzione è basica"],
      },
    ],
    assumptions: [
      "Tutti i calcoli si riferiscono a 25 °C, dove Kw = 1,0 × 10⁻¹⁴ e l'acqua neutra ha pH 7. A temperature diverse Kw cambia, e con esso il punto di neutralità e pH + pOH.",
      "Si usano le concentrazioni al posto delle attività. Questo funziona bene per soluzioni diluite ma diventa impreciso oltre circa 0,1 mol/L, e i valori di pH inferiori a 0 o superiori a 14 sono solo indicativi.",
      "Acidi e basi sono monoprotici: ciascuno libera un solo H⁺ o OH⁻. La modalità acido debole ignora gli H⁺ provenienti dall'acqua, quindi non è affidabile quando l'acido è estremamente diluito o estremamente debole.",
    ],
    faqs: [
      {
        question: "Perché il pH di HCl 10⁻⁸ mol/L non è 8?",
        answer:
          "Perché un acido non può rendere basica l'acqua. A quella diluizione l'acqua stessa fornisce circa 10⁻⁷ mol/L di H⁺, più dell'acido. La formula usata qui include il contributo dell'acqua e dà un pH di circa 6,98.",
      },
      {
        question: "Che differenza c'è tra Ka e pKa?",
        answer:
          "pKa è −log₁₀ di Ka, così come il pH è −log₁₀ di [H⁺]. Un pKa più piccolo (Ka più grande) indica un acido più forte. Un pKa di 4,76 equivale a una Ka di circa 1,74 × 10⁻⁵.",
      },
      {
        question: "Il pH può essere negativo?",
        answer:
          "Sì. Un acido forte più concentrato di 1 mol/L ha [H⁺] superiore a 1, quindi il suo pH è inferiore a 0. A queste concentrazioni, però, le soluzioni reali si discostano molto dalle formule semplici, quindi considera il numero solo un'indicazione di massima.",
      },
    ],
    sourcesUsedFor: [
      "Kw = 1,0 × 10⁻¹⁴ a 25 °C, pH = −log[H₃O⁺], pOH = −log[OH⁻] e pH + pOH = 14,00.",
      "La costante di ionizzazione acida Ka e i calcoli di equilibrio per gli acidi deboli, compresa la percentuale di ionizzazione.",
    ],
  },
  text: {
    mode: "Calcola da",
    modes: {
      hydrogen: "Concentrazione di ioni idrogeno [H⁺]",
      ph: "pH",
      poh: "pOH",
      strongAcid: "Concentrazione di un acido forte",
      strongBase: "Concentrazione di una base forte",
      weakAcid: "Concentrazione di un acido debole e Ka",
    },
    hydrogen: "Concentrazione di [H⁺]",
    concentrationHelp: "In mol/L. Puoi usare la notazione e, ad es. 2.5e-9 per 2,5 × 10⁻⁹.",
    ph: "pH",
    poh: "pOH",
    phRangeHelp: "Di solito tra 0 e 14. Sono accettati valori da −2 a 16.",
    concentration: "Concentrazione (C)",
    concentrationModeHelp:
      "Concentrazione molare in mol/L di un acido monoprotico (un H⁺, come HCl o acido acetico) o di una base con un OH⁻ (come NaOH). È accettata la notazione e, ad es. 1e-8.",
    constantType: "Forza dell'acido espressa come",
    constantTypes: { pka: "pKa", ka: "Ka" },
    ka: "Costante di dissociazione acida (Ka)",
    kaHelp: "È accettata la notazione e, ad es. 6.3e-5.",
    pka: "pKa",
    errors: {
      notNumber: "Inserisci un numero positivo come 0,001 o 1e-3.",
      notPositive: "Il valore deve essere maggiore di 0.",
      tooConcentrated: "Inserisci al massimo {max} mol/L. Le formule non hanno senso per soluzioni più concentrate.",
      kaTooLarge: "Inserisci una Ka non superiore a {max}. Un acido così forte si comporta come un acido forte.",
    },
    phResult: "pH",
    pohResult: "pOH",
    hResult: "Concentrazione di ioni idrogeno [H⁺]",
    ohResult: "Concentrazione di ioni idrossido [OH⁻]",
    ionization: "Percentuale di ionizzazione",
    nature: "Acida, neutra o basica (a 25 °C)",
    natures: { acidic: "Acida", neutral: "Neutra", basic: "Basica" },
    captions: {
      hydrogen: "pH = −log₁₀[H⁺]",
      ph: "[H⁺] = 10^(−pH)",
      poh: "pH = 14 − pOH",
      strongAcid: "[H⁺] = (C + √(C² + 4Kw)) ÷ 2",
      strongBase: "[OH⁻] = (C + √(C² + 4Kw)) ÷ 2",
      weakAcid: "[H⁺] = (−Ka + √(Ka² + 4·Ka·C)) ÷ 2",
    },
    notes: {
      kw: "Usa Kw = 1,0 × 10⁻¹⁴ a 25 °C, quindi pH + pOH = 14. Le concentrazioni sostituiscono le attività.",
      outside:
        "Il pH è fuori dall'intervallo 0–14. Succede solo in soluzioni molto concentrate, dove le concentrazioni approssimano male le attività e il risultato è solo indicativo.",
      weak: "La formula per l'acido debole ignora gli H⁺ che provengono dall'acqua stessa.",
      weakDilute:
        "L'acido fornisce meno di 1 × 10⁻⁶ mol/L di H⁺, quindi gli ioni dell'acqua non sono trascurabili e il pH reale è più vicino a 7 di quello mostrato.",
      dilute:
        "La soluzione è così diluita che gli ioni dell'acqua contano. La formula li include, ed è per questo che il pH resta dal lato corretto di 7.",
    },
  },
};

export default it;
