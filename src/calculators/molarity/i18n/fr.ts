import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MolarityText } from "../text/en";

const fr: CalculatorTranslation<MolarityText> = {
  content: {
    title: "Calculateur de molarité",
    shortTitle: "Molarité",
    summary: "Calculez la concentration molaire d’une solution à partir de la masse de soluté, de sa masse molaire et du volume.",
    metaTitle: "Calculateur de molarité – Concentration molaire (mol/L)",
    metaDescription:
      "Calculez la molarité en mol/L à partir de la masse de soluté, de sa masse molaire et du volume de solution, avec la quantité de matière et la valeur en mmol/L.",
    keywords: ["molarité", "concentration molaire", "calcul concentration molaire", "mol/L", "quantité de matière", "solution", "chimie"],
    intro: [
      "La molarité est le nombre de moles de soluté par litre de solution. C’est la façon la plus courante d’exprimer une concentration en laboratoire de chimie.",
      "Saisissez la masse pesée, la masse molaire du soluté et le volume final de la solution.",
    ],
    howToUse: [
      "Saisissez la masse de soluté en grammes.",
      "Saisissez sa masse molaire en g/mol.",
      "Saisissez le volume final de la solution et choisissez litres ou millilitres.",
      "Lisez la molarité et la quantité de soluté en moles.",
    ],
    formulas: [
      { title: "Quantité de matière", expression: "n = masse ÷ masse molaire", explanation: "Donne le nombre de moles à partir de la masse en grammes." },
      { title: "Molarité", expression: "M = n ÷ V", explanation: "V est le volume de la solution en litres." },
    ],
    examples: [
      { title: "58,44 g de NaCl dans 1 L", steps: ["n = 58,44 ÷ 58,44 = 1 mol", "M = 1 ÷ 1 = 1 mol/L"] },
      { title: "5 g de glucose dans 250 mL", steps: ["n = 5 ÷ 180,16 ≈ 0,02775 mol", "M = 0,02775 ÷ 0,25 ≈ 0,111 mol/L"] },
    ],
    assumptions: [
      "Le volume est le volume final de la solution, une fois le soluté dissous.",
      "La masse molaire doit correspondre à la forme exacte utilisée, eau d’hydratation comprise le cas échéant.",
    ],
    faqs: [
      {
        question: "Quelle est la différence entre molarité et molalité ?",
        answer: "La molarité s’exprime en moles par litre de solution ; la molalité, en moles par kilogramme de solvant.",
      },
      {
        question: "Comment préparer une solution à 1 M ?",
        answer: "Dissolvez une quantité de soluté égale à sa masse molaire en grammes, puis ajoutez du solvant jusqu’à obtenir un volume total de 1 litre.",
      },
      { question: "Que signifie mM ?", answer: "Millimolaire : un millième de mole par litre." },
    ],
    sourcesUsedFor: ["Définition de la molarité et relation entre masse et quantité de matière."],
  },
  text: {
    mass: "Masse de soluté",
    molarMass: "Masse molaire",
    molarMassHelp: "D’après le tableau périodique, par exemple NaCl = 58,44 g/mol.",
    volume: "Volume de la solution",
    volumeUnit: "Unité de volume",
    volumeUnits: { L: "Litres (L)", mL: "Millilitres (mL)" },
    molarity: "Molarité",
    amount: "Quantité de soluté",
    millimolar: "En millimolaire",
    note: "Le volume est le volume final de la solution, et non le volume de solvant ajouté.",
  },
};

export default fr;
