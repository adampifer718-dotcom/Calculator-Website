import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { MortgageText } from "../text/en";

const fr: CalculatorTranslation<MortgageText> = {
  content: {
    title: "Calculateur de prêt immobilier",
    shortTitle: "Prêt immobilier",
    summary: "Estimez le coût mensuel complet d’un crédit immobilier : capital et intérêts, plus taxe foncière, assurance habitation, charges de copropriété et assurance hypothécaire.",
    metaTitle: "Calculateur de prêt immobilier – Mensualité, taxes et PMI",
    metaDescription:
      "Estimez la mensualité de votre crédit immobilier : capital et intérêts, taxe foncière, assurance habitation, charges et PMI, présentés séparément.",
    keywords: ["simulation prêt immobilier", "calcul mensualité crédit immobilier", "crédit immobilier", "prêt hypothécaire", "taxe foncière", "apport personnel", "assurance hypothécaire pmi"],
    intro: [
      "La mensualité d’un prêt immobilier ne se limite pas au remboursement de l’emprunt. Aux États-Unis, les prêteurs prélèvent souvent la taxe foncière et l’assurance habitation avec chaque mensualité, et certains acheteurs paient aussi des charges de copropriété (HOA) ou une assurance hypothécaire.",
      "Ce calculateur sépare le capital et les intérêts de ces autres coûts : vous voyez ainsi ce qui est fixé par le prêt et ce qui dépend des impôts et de l’assurance de votre localité.",
    ],
    howToUse: [
      "Saisissez le prix du logement et votre apport personnel.",
      "Saisissez le taux d’intérêt et la durée du prêt.",
      "Saisissez la taxe foncière et l’assurance habitation annuelles, ainsi que les éventuelles charges mensuelles de copropriété ou de services.",
      "Saisissez le taux d’assurance hypothécaire si votre apport est inférieur à 20 %, ou 0 si elle ne s’applique pas.",
      "Consultez la mensualité totale et sa décomposition.",
    ],
    formulas: [
      { title: "Capital et intérêts", expression: "M = L × r ÷ (1 − (1 + r)^(−n))", explanation: "L est le montant du prêt (prix − apport), r le taux mensuel (taux annuel ÷ 12) et n le nombre de mensualités." },
      { title: "Mensualité", expression: "Mensualité = M + taxe foncière ÷ 12 + assurance ÷ 12 + HOA + PMI", explanation: "Les impôts et l’assurance sont répartis uniformément sur 12 mois, comme avec un compte séquestre (escrow) classique." },
      { title: "Assurance hypothécaire", expression: "PMI = L × taux de PMI ÷ 12, tant que L ÷ prix > 80 %", explanation: "Elle s’arrête dès que le capital restant dû prévu atteint 78 % du prix du logement. Selon la loi américaine, elle prend aussi fin au plus tard à la moitié de la durée du prêt." },
    ],
    examples: [
      {
        title: "Logement à 400 000, apport de 20 %, 6,5 % sur 30 ans",
        steps: [
          "Prêt = 400 000 $US − 80 000 $US = 320 000 $US ; r = 0,065 ÷ 12 ; n = 360",
          "Capital et intérêts ≈ 2 022,62 $US",
          "Taxe de 400 $US + assurance de 125 $US par mois ; pas de PMI avec un ratio prêt/valeur de 80 %",
          "Total ≈ 2 547,62 $US par mois",
        ],
      },
      {
        title: "Logement à 300 000, apport de 5 %, 6 % sur 30 ans avec PMI",
        steps: [
          "Prêt = 285 000 $US ; capital et intérêts ≈ 1 708,72 $US",
          "PMI = 285 000 $US × 0,5 % ÷ 12 = 118,75 $US pendant les 129 premières mensualités",
          "Total ≈ 1 708,72 $US + 300 $US + 100 $US + 50 $US + 118,75 $US = 2 277,47 $US",
        ],
      },
    ],
    assumptions: [
      "Taux d’intérêt fixe et mensualités constantes ; les prêts à taux variable et les prêts in fine (intérêts seuls) ne sont pas modélisés.",
      "La taxe foncière, l’assurance, les charges de copropriété et le taux de PMI sont vos estimations ; ils varient selon la localité et le prêteur et changent souvent chaque année.",
      "Les règles de PMI suivent celles des prêts conventionnels américains : facturée au-delà d’un ratio prêt/valeur de 80 % et arrêtée à 78 % selon l’échéancier. Les prêts FHA, VA et ceux d’autres pays diffèrent.",
      "Les frais de notaire et de dossier, les points, les factures d’énergie et l’entretien ne sont pas inclus. Il s’agit d’une estimation, et non d’un conseil financier ni d’une offre de prêt.",
    ],
    faqs: [
      { question: "Que signifie PITI ?", answer: "Principal, interest, taxes and insurance, soit capital, intérêts, impôts et assurance : les quatre composantes d’une mensualité immobilière type aux États-Unis lorsque le prêteur prélève les impôts et l’assurance sur un compte séquestre." },
      { question: "Pourquoi la mensualité de mon prêteur est-elle différente ?", answer: "Les prêteurs utilisent les montants réels des impôts et de l’assurance, peuvent ajouter une réserve au compte séquestre et peuvent annoncer un TAEG (APR) qui inclut les frais. Demandez une estimation de prêt (Loan Estimate) pour obtenir les chiffres exacts." },
      { question: "Comment éviter l’assurance hypothécaire ?", answer: "Pour de nombreux prêts conventionnels américains, un apport d’au moins 20 % permet d’éviter la PMI. Certains prêteurs proposent d’autres options, souvent avec un taux plus élevé." },
    ],
    sourcesUsedFor: [
      "Formule du prêt à mensualités constantes et formule du capital restant dû.",
      "Moment où la PMI prend fin automatiquement (78 % de la valeur initiale du logement) pour les prêts conventionnels américains.",
      "Fin définitive de la PMI à la moitié de la période d’amortissement selon le Homeowners Protection Act.",
    ],
  },
  text: {
    price: "Prix du logement",
    down: "Apport personnel",
    rate: "Taux d’intérêt",
    rateHelp: "Taux annuel du prêt (et non le TAEG incluant les frais).",
    years: "Durée du prêt",
    propertyTax: "Taxe foncière par an",
    insurance: "Assurance habitation par an",
    hoa: "Charges de copropriété (HOA) ou de services par mois",
    pmiRate: "Taux d’assurance hypothécaire (PMI)",
    pmiHelp: "Taux annuel appliqué au montant du prêt tant que l’apport est inférieur à 20 %. Saisissez 0 si elle ne s’applique pas.",
    errors: { downTooLarge: "L’apport doit être inférieur au prix du logement.", termTooShort: "Saisissez une durée d’au moins un mois." },
    monthly: "Mensualité estimée",
    caption: "Capital et intérêts de {pi}, plus {extras} d’impôts, d’assurance et d’autres frais.",
    principalInterest: "Capital et intérêts",
    monthlyTax: "Taxe foncière",
    monthlyInsurance: "Assurance habitation",
    monthlyHoa: "Charges de copropriété ou de services",
    monthlyPmi: "Assurance hypothécaire (PMI)",
    pmiMonths: "Mois avec PMI",
    loanAmount: "Montant du prêt",
    downShare: "Part de l’apport",
    totalInterest: "Total des intérêts",
    totalCost: "Total des mensualités sur la durée",
    tableCaption: "Capital restant dû par année",
    tableColumns: { year: "Année", principal: "Capital remboursé", interest: "Intérêts payés", balance: "Capital restant dû" },
    notes: {
      fixed: "Avec un prêt à taux fixe, le capital et les intérêts restent identiques pendant toute la durée ; les impôts, l’assurance et les charges de copropriété sont vos estimations et évoluent généralement avec le temps.",
      pmi: "La PMI est supposée s’appliquer tant que le prêt dépasse 80 % du prix du logement et s’arrêter dès que le capital restant dû prévu atteint 78 % de ce prix, comme pour la plupart des prêts conventionnels américains. Les prêts FHA et les autres prêts obéissent à des règles différentes. Selon la loi américaine, elle prend aussi fin au plus tard à la moitié de la durée du prêt.",
      noPmi: "Aucune assurance hypothécaire n’est incluse, car le prêt représente au plus 80 % du prix du logement.",
      excluded: "Les frais de notaire et de dossier, les points, les factures d’énergie, l’entretien et les éventuelles variations de taux ne sont pas inclus.",
    },
  },
};

export default fr;
