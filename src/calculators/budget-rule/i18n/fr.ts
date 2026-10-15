import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { BudgetRuleText } from "../text/en";

const fr: CalculatorTranslation<BudgetRuleText> = {
  content: {
    title: "Calculateur de budget 50/30/20",
    shortTitle: "Budget 50/30/20",
    summary: "Répartissez votre revenu mensuel net entre besoins, envies et épargne avec la règle 50/30/20 ou une autre répartition simple.",
    metaTitle: "Calculateur de budget 50/30/20 – Besoins, envies, épargne",
    metaDescription:
      "Répartissez votre revenu net avec la règle 50/30/20, 70/20/10 ou 80/20, ou votre propre répartition, et voyez chaque poste par mois et par an.",
    keywords: ["règle 50/30/20", "calcul budget", "besoins envies épargne", "budget 70/20/10", "budget 80/20", "budget mensuel", "salaire net"],
    intro: [
      "Une règle en pourcentages permet de démarrer rapidement un budget sans suivre des dizaines de catégories. La plus connue est la règle 50/30/20 : la moitié de votre revenu net pour les besoins, 30 % pour les envies et 20 % pour l’épargne et le remboursement des dettes.",
      "Saisissez votre revenu mensuel après impôts et choisissez une règle, ou définissez vos trois pourcentages. Le calculateur indique le montant de chaque poste chaque mois et sur une année.",
    ],
    howToUse: [
      "Choisissez la devise des montants.",
      "Saisissez votre revenu mensuel net : ce qui arrive sur votre compte bancaire après impôts.",
      "Choisissez une règle de budget, ou choisissez Répartition personnalisée et saisissez trois pourcentages dont la somme fait 100 %.",
      "Lisez le montant de chaque poste par mois et par an.",
    ],
    formulas: [
      { title: "Montant par poste", expression: "poste = revenu × part ÷ 100", explanation: "Pour la règle 50/30/20, les parts sont 50 % pour les besoins, 30 % pour les envies et 20 % pour l’épargne." },
      { title: "Montant annuel", expression: "annuel = mensuel × 12", explanation: "Chaque montant mensuel sur douze mois." },
      { title: "Répartition personnalisée", expression: "besoins % + envies % + épargne % = 100 %", explanation: "Vos propres parts doivent couvrir tout le revenu, ni plus ni moins." },
    ],
    examples: [
      {
        title: "3 850 $US par mois avec la règle 50/30/20",
        steps: ["Besoins = 3 850 × 50 % = 1 925 $US", "Envies = 3 850 × 30 % = 1 155 $US", "Épargne = 3 850 × 20 % = 770 $US"],
      },
      {
        title: "5 200 $US par mois avec la règle 70/20/10",
        steps: ["Dépenses = 5 200 × 70 % = 3 640 $US", "Épargne = 5 200 × 20 % = 1 040 $US", "Remboursement de dettes ou dons = 5 200 × 10 % = 520 $US"],
      },
      {
        title: "2 900 $US par mois avec une répartition personnalisée 55/25/20",
        steps: ["55 + 25 + 20 = 100 %", "Besoins = 2 900 × 55 % = 1 595 $US", "Envies = 725 $US ; épargne = 580 $US"],
      },
    ],
    assumptions: [
      "Ces répartitions sont des règles empiriques, et non des conseils financiers. Elles ne tiennent pas compte de vos dettes, de votre lieu de vie ni de vos objectifs.",
      "Le revenu désigne le salaire net, après impôts et retenues sur salaire. Si votre épargne retraite est déjà prélevée sur votre paie, vous pouvez la compter dans le poste épargne.",
      "La répartition 50/30/20 est couramment attribuée au livre All Your Worth d’Elizabeth Warren et Amelia Warren Tyagi, paru en 2005. Les répartitions 70/20/10 et 80/20 sont des variantes informelles sans source unique.",
      "Les remboursements minimaux de dettes comptent généralement comme des besoins ; tout ce qui est payé au-delà du minimum relève du poste épargne et remboursement des dettes.",
    ],
    faqs: [
      {
        question: "Qu’est-ce qui compte comme un besoin ?",
        answer: "Les besoins sont les factures que vous auriez du mal à cesser de payer : loyer ou crédit immobilier, énergie et eau, courses de base, assurances, transport pour aller travailler et remboursements minimaux de prêts. Les restaurants, les abonnements de streaming, les voyages et les loisirs sont des envies.",
      },
      {
        question: "Et si mes besoins dépassent 50 % ?",
        answer: "C’est fréquent là où le logement est cher. Utilisez une répartition personnalisée qui reflète vos coûts réels, et cherchez avec le temps à réduire vos besoins ou à augmenter vos revenus. La règle est un objectif, pas un examen que l’on réussit ou que l’on rate.",
      },
      {
        question: "Faut-il utiliser le revenu brut ou net ?",
        answer: "Utilisez le revenu net, c’est-à-dire le montant perçu après impôts. La règle est conçue pour l’argent dont vous disposez réellement chaque mois pour dépenser et épargner.",
      },
    ],
    sourcesUsedFor: [
      "Ce qu’est un budget et pourquoi on planifie ses revenus face aux dépenses et à l’épargne.",
      "L’origine de la règle 50/30/20 dans le livre All Your Worth d’Elizabeth Warren et Amelia Warren Tyagi.",
    ],
  },
  text: {
    income: "Revenu mensuel net",
    incomeHelp: "Votre salaire après impôt sur le revenu et autres retenues, pour un mois.",
    rule: "Règle de budget",
    rules: {
      "50-30-20": "50/30/20 (besoins, envies, épargne)",
      "70-20-10": "70/20/10 (dépenses, épargne, dettes ou dons)",
      "80-20": "80/20 (dépenses, épargne)",
      custom: "Répartition personnalisée",
    },
    needsPct: "Besoins",
    wantsPct: "Envies",
    savingsPct: "Épargne et remboursement des dettes",
    customHelp: "La somme des trois pourcentages doit faire 100 %.",
    sumError: "La somme des trois pourcentages fait {sum}. Modifiez-les pour atteindre 100 %.",
    buckets: {
      needs: "Besoins",
      wants: "Envies",
      savings: "Épargne et remboursement anticipé des dettes",
      spending: "Dépenses courantes (besoins et envies)",
      savingsOnly: "Épargne",
      extra: "Remboursement des dettes ou dons",
    },
    primaryCaption: "{percent} de {income} par mois pour ce poste selon la règle {rule}.",
    ruleNames: { "50-30-20": "50/30/20", "70-20-10": "70/20/10", "80-20": "80/20", custom: "personnalisée" },
    yearlyIncome: "Revenu annuel net",
    tableCaption: "Montants mensuels et annuels de chaque poste",
    tableColumns: { bucket: "Poste", share: "Part", monthly: "Par mois", yearly: "Par an" },
    notes: {
      thumb: "Les règles de budget sont des points de départ approximatifs, et non des conseils. Adaptez la répartition à vos propres coûts et objectifs.",
      needs: "Les besoins sont les dépenses que vous devez payer, comme le logement, l’énergie et l’eau, les courses, les assurances et les remboursements minimaux de dettes. Les envies sont tout ce sur quoi vous pourriez réduire.",
    },
  },
};

export default fr;
