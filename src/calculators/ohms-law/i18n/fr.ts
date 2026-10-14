import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { OhmsLawText } from "../text/en";

const fr: CalculatorTranslation<OhmsLawText> = {
  content: {
    title: "Calculateur de loi d'Ohm",
    shortTitle: "Loi d'Ohm",
    summary: "Calculez la tension, l'intensité, la résistance et la puissance à partir de deux des valeurs V, I et R.",
    metaTitle: "Calculateur de loi d'Ohm – Tension, intensité, résistance",
    metaDescription:
      "Utilisez la loi d'Ohm pour trouver la tension, l'intensité ou la résistance à partir des deux autres valeurs, ainsi que la puissance dissipée, avec formules et exemples.",
    keywords: ["loi d'Ohm", "calcul loi d'Ohm", "tension", "intensité", "résistance", "puissance électrique", "U = R × I", "électronique"],
    intro: [
      "La loi d'Ohm relie la tension aux bornes d'une résistance, le courant qui la traverse et sa valeur de résistance : V = I × R.",
      "Saisissez deux valeurs quelconques pour trouver la troisième, ainsi que la puissance dissipée par le composant.",
    ],
    howToUse: [
      "Choisissez les deux valeurs que vous connaissez.",
      "Saisissez-les en volts, en ampères ou en ohms.",
      "Lisez la valeur manquante et la puissance en watts.",
    ],
    formulas: [
      { title: "Loi d'Ohm", expression: "V = I × R\nI = V ÷ R\nR = V ÷ I", explanation: "V en volts, I en ampères, R en ohms." },
      { title: "Puissance", expression: "P = V × I = I² × R = V² ÷ R", explanation: "Puissance en watts." },
    ],
    examples: [
      { title: "12 V aux bornes de 4 Ω", steps: ["I = 12 ÷ 4 = 3 A", "P = 12 × 3 = 36 W"] },
      { title: "0,5 A à travers 220 Ω", steps: ["V = 0,5 × 220", "= 110 V"] },
    ],
    assumptions: [
      "S'applique aux composants ohmiques, dont la résistance ne varie pas avec le courant.",
      "Pour les circuits en courant alternatif comportant une réactance (condensateurs, bobines), utilisez plutôt l'impédance.",
      "Intervenir sur des circuits sous tension secteur est dangereux ; respectez les normes électriques locales et faites appel à un électricien qualifié.",
    ],
    faqs: [
      {
        question: "Que dit la loi d'Ohm ?",
        answer: "Le courant qui traverse un conducteur est proportionnel à la tension à ses bornes : V = I × R.",
      },
      {
        question: "Comment calculer la puissance à partir de l'intensité et de la résistance ?",
        answer: "P = I² × R. Un courant de 2 A traversant 10 Ω dissipe 40 W.",
      },
      {
        question: "La loi d'Ohm s'applique-t-elle aux LED ?",
        answer: "Pas directement. Les LED ne sont pas linéaires : utilisez leur tension directe et un calcul de résistance série.",
      },
    ],
    sourcesUsedFor: ["La loi d'Ohm et ses limites.", "Formules de puissance P = IV = I²R = V²/R."],
  },
  text: {
    known: "Valeurs connues",
    knownOptions: { VR: "Tension et résistance", VI: "Tension et intensité", IR: "Intensité et résistance" },
    voltage: "Tension (V)",
    current: "Intensité (I)",
    resistance: "Résistance (R)",
    currentOut: "Intensité (I = V ÷ R)",
    resistanceOut: "Résistance (R = V ÷ I)",
    voltageOut: "Tension (V = I × R)",
    power: "Puissance (P = V × I)",
    voltageShort: "Tension",
    currentShort: "Intensité",
    resistanceShort: "Résistance",
    note: "S'applique aux composants ohmiques (linéaires) et aux circuits en courant continu, ou aux valeurs efficaces pour des charges en courant alternatif purement résistives.",
  },
};

export default fr;
