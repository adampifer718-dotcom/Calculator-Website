import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SimpleInterestText } from "../text/en";

const fr: CalculatorTranslation<SimpleInterestText> = {
  content: {
    title: "Calculateur d’intérêts simples",
    shortTitle: "Intérêts simples",
    summary: "Calculez les intérêts simples et le montant total dû ou perçu à partir du capital, du taux annuel et de la durée.",
    metaTitle: "Calculateur d’intérêts simples – I = Prt",
    metaDescription:
      "Calculez des intérêts simples avec I = Prt pour une durée en années, en mois ou en jours, avec le montant total et les intérêts par an et par mois.",
    keywords: ["intérêts simples", "calcul intérêts simples", "I = Prt", "formule des intérêts", "capital", "taux d’intérêt", "montant total"],
    intro: [
      "Les intérêts simples sont calculés uniquement sur le montant initial. Les intérêts sont les mêmes chaque année : le total augmente donc de façon linéaire, sans effet boule de neige.",
      "Ils servent pour de nombreux prêts à court terme, certains crédits auto, les obligations à coupon fixe et les exercices de mathématiques financières. Saisissez le capital, le taux annuel et la durée pendant laquelle l’argent est emprunté ou placé.",
    ],
    howToUse: [
      "Choisissez la devise dans laquelle afficher les montants.",
      "Saisissez le capital : la somme empruntée ou déposée.",
      "Saisissez le taux d’intérêt annuel en pourcentage.",
      "Saisissez la durée et choisissez années, mois ou jours.",
      "Lisez les intérêts, le montant total et les intérêts par an et par mois.",
    ],
    formulas: [
      { title: "Intérêts simples", expression: "I = P × r × t", explanation: "P est le capital, r le taux annuel exprimé en décimal (5 % = 0,05) et t la durée en années." },
      { title: "Montant total", expression: "A = P + I = P × (1 + r × t)", explanation: "La somme remboursée ou détenue à la fin." },
      { title: "Conversion de la durée", expression: "t = mois ÷ 12, ou t = jours ÷ 365", explanation: "Les mois et les jours sont convertis en années avant d’appliquer la formule." },
    ],
    examples: [
      {
        title: "2 500 $US à 4,2 % pendant 3 ans",
        steps: ["I = 2 500 × 0,042 × 3", "= 315 $US", "A = 2 500 + 315 = 2 815 $US"],
      },
      {
        title: "8 000 $US à 6,5 % pendant 18 mois",
        steps: ["t = 18 ÷ 12 = 1,5 an", "I = 8 000 × 0,065 × 1,5", "= 780 $US"],
      },
      {
        title: "1 200 $US à 9 % pendant 90 jours",
        steps: ["t = 90 ÷ 365 ≈ 0,2466 an", "I = 1 200 × 0,09 × 90 ÷ 365", "≈ 26,63 $US"],
      },
    ],
    assumptions: [
      "Les intérêts sont simples : ils ne sont jamais ajoutés au capital et ne produisent donc pas eux-mêmes d’intérêts.",
      "Les jours sont convertis sur la base d’une année de 365 jours. Certains prêteurs et le marché monétaire utilisent une année de 360 jours (on parle parfois d’intérêts ordinaires ou bancaires), ce qui donne un peu plus d’intérêts pour le même nombre de jours.",
      "Le taux est fixe sur toute la période. Les frais, les impôts et les remboursements anticipés ne sont pas pris en compte.",
      "Le choix d’une devise ne modifie que la mise en forme. Ceci ne constitue pas un conseil financier.",
    ],
    faqs: [
      {
        question: "Quelle est la différence entre intérêts simples et intérêts composés ?",
        answer: "Les intérêts simples sont toujours calculés sur le capital de départ. Les intérêts composés ajoutent au solde les intérêts de chaque période : les intérêts suivants portent donc aussi sur les intérêts déjà acquis, et le total augmente plus vite.",
      },
      {
        question: "Comment trouver le taux si je connais les intérêts ?",
        answer: "Réarrangez la formule : r = I ÷ (P × t). Par exemple, 90 $US d’intérêts sur 1 000 $US pendant 2 ans donnent r = 90 ÷ 2 000 = 0,045, soit 4,5 % par an.",
      },
      {
        question: "Pourquoi le montant de mon prêteur diffère-t-il légèrement pour un nombre de jours donné ?",
        answer: "Les prêteurs peuvent diviser par 360 au lieu de 365, ou compter les jours réels d’une année bissextile. Diviser par 360 augmente les intérêts d’environ 1,4 %.",
      },
    ],
    sourcesUsedFor: ["La formule des intérêts simples I = Prt et la signification de chaque variable."],
  },
  text: {
    principal: "Capital",
    principalHelp: "La somme empruntée ou déposée.",
    rate: "Taux d’intérêt annuel",
    time: "Durée",
    timeUnit: "Unité de durée",
    timeUnits: { years: "Années", months: "Mois", days: "Jours" },
    tooLong: "Utilisez une durée de 100 ans au maximum.",
    interest: "Intérêts simples",
    caption: "Intérêts sur {principal} à {rate} par an, sans capitalisation.",
    total: "Montant total (capital + intérêts)",
    perYear: "Intérêts par an",
    perMonth: "Intérêts par mois",
    timeInYears: "Durée en années",
    notes: {
      simple: "Les intérêts simples ne portent que sur le capital ; les intérêts ne produisent pas d’intérêts à leur tour.",
      days: "Les jours sont convertis sur la base d’une année de 365 jours. Certains prêteurs utilisent une année de 360 jours, ce qui donne un peu plus d’intérêts.",
    },
  },
};

export default fr;
