import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FertilizerText } from "../text/en";

const fr: CalculatorTranslation<FertilizerText> = {
  content: {
    title: "Calculateur d’engrais (N-P-K)",
    shortTitle: "Engrais (N-P-K)",
    summary: "Calculez la quantité d’engrais N-P-K à épandre pour apporter une dose cible d’azote, de phosphate ou de potasse sur une pelouse, un jardin ou un champ.",
    metaTitle: "Calculateur d’engrais (N-P-K) – Quantité pour une dose",
    metaDescription:
      "Calculez la quantité d’engrais à épandre selon sa formule N-P-K, une dose d’élément nutritif par surface et la surface, avec l’azote, le phosphate et la potasse apportés.",
    keywords: ["calcul engrais", "calculateur NPK", "dose d’engrais", "kg N par hectare", "unités d’azote", "P2O5 en P", "K2O en K", "quantité d’engrais"],
    intro: [
      "Les sacs d’engrais portent trois nombres, comme 10-10-10 ou 46-0-0. Ce sont les pourcentages en masse d’azote (N), de phosphate (P₂O₅) et de potasse (K₂O). Les analyses de sol et les guides de culture recommandent généralement une quantité d’élément nutritif par surface, et non une quantité de produit : il faut donc convertir l’une en l’autre.",
      "Saisissez la formule du produit, choisissez l’élément nutritif visé par votre recommandation, puis saisissez la dose et la surface. Le calculateur donne la quantité de produit à épandre et les quantités des trois éléments qu’il apporte, y compris le phosphore et le potassium élémentaires.",
    ],
    howToUse: [
      "Saisissez les trois nombres de la formule de l’engrais indiqués sur le sac, par exemple 10, 20 et 10 pour un produit 10-20-10.",
      "Choisissez l’élément nutritif auquel se rapporte la dose recommandée : azote, phosphate (P₂O₅) ou potasse (K₂O).",
      "Saisissez la dose recommandée et son unité, par exemple 1 lb pour 1 000 ft² ou 120 kg par hectare.",
      "Saisissez la surface et son unité. La quantité de produit s’affiche en livres pour les doses en livres et en kilogrammes pour les doses métriques.",
    ],
    formulas: [
      {
        title: "Produit nécessaire",
        expression: "produit = dose × surface ÷ (formule % ÷ 100)",
        explanation: "La formule % est le nombre indiqué sur le sac pour l’élément choisi. La dose et la surface sont d’abord converties dans une unité commune.",
      },
      {
        title: "Éléments apportés",
        expression: "N = produit × N% ;  P₂O₅ = produit × P₂O₅% ;  K₂O = produit × K₂O%",
        explanation: "Chaque pourcentage est le nombre correspondant de la formule ÷ 100.",
      },
      {
        title: "Phosphore et potassium élémentaires",
        expression: "P = P₂O₅ × 0,4364 ;  K = K₂O × 0,8302",
        explanation: "Les facteurs sont les fractions massiques 2P ÷ P₂O₅ et 2K ÷ K₂O, calculées à partir des masses atomiques standard (P 30,973762, K 39,0983, O 15,999).",
      },
    ],
    examples: [
      {
        title: "10-10-10 sur une pelouse de 5 000 ft² à 1 lb de N pour 1 000 ft²",
        steps: [
          "Azote nécessaire = 1 × 5 000 ÷ 1 000 = 5 lb",
          "Produit = 5 ÷ 0,10 = 50 lb de 10-10-10",
          "Il apporte aussi 5 lb de P₂O₅ (≈ 2,18 lb de P) et 5 lb de K₂O (≈ 4,15 lb de K)",
        ],
      },
      {
        title: "Urée (46-0-0) à 120 kg de N par hectare sur 2,5 ha",
        steps: ["Azote nécessaire = 120 × 2,5 = 300 kg", "Produit = 300 ÷ 0,46 ≈ 652,17 kg d’urée"],
      },
      {
        title: "15-30-15 à 6 g de phosphate par m² sur un massif de 25 m²",
        steps: ["Phosphate nécessaire = 6 × 25 = 150 g", "Produit = 150 ÷ 0,30 = 500 g = 0,5 kg", "Il apporte aussi 75 g de N et 75 g de K₂O"],
      },
    ],
    assumptions: [
      "Il s’agit uniquement d’un calcul arithmétique. Fondez la dose sur une analyse de sol et sur les recommandations locales, et respectez l’étiquette du produit ainsi que les règles locales sur l’utilisation des engrais, les périodes d’épandage et le ruissellement.",
      "La formule est prise comme le pourcentage garanti en masse de N, de P₂O₅ et de K₂O, tel qu’indiqué sur l’étiquette. Pour les produits liquides dont la formule est exprimée en masse, il faut leur masse et non leur volume.",
      "Les quantités supposent un épandage uniforme sur toute la surface. Le réglage de l’épandeur et les recouvrements modifient la quantité réellement appliquée.",
    ],
    faqs: [
      {
        question: "Pourquoi le phosphore et le potassium sont-ils exprimés en P₂O₅ et K₂O ?",
        answer: "C’est une convention d’étiquetage ancienne. La formule exprime le phosphore sous forme d’oxyde P₂O₅ et le potassium sous forme de K₂O, même si le produit ne contient pas ces oxydes en tant que tels. Multipliez par environ 0,436 et 0,830 pour obtenir les quantités élémentaires.",
      },
      {
        question: "Et si ma recommandation porte sur plusieurs éléments ?",
        answer: "Calculez la quantité de produit pour l’élément dont vous avez le plus besoin, puis vérifiez les autres éléments qu’il apporte. S’ils sont trop élevés ou trop faibles, un produit d’un autre équilibre, ou des produits séparés pour chaque élément, conviendront peut-être mieux.",
      },
      {
        question: "Comment convertir des lb par acre en kg par hectare ?",
        answer: "1 lb par acre vaut environ 1,121 kg par hectare, car une livre fait 0,45359237 kg et un acre environ 0,4047 ha. Vous pouvez saisir la dose dans l’une ou l’autre unité : le calculateur la convertit pour vous.",
      },
    ],
    sourcesUsedFor: [
      "La lecture de la formule en pourcentage massique de N, de P₂O₅ et de K₂O, et la division de la dose d’élément par la fraction de la formule.",
      "La formule de l’engrais comme garantie N-P₂O₅-K₂O, et les facteurs de conversion de P₂O₅ en P et de K₂O en K.",
      "Les masses atomiques du phosphore, du potassium et de l’oxygène utilisées pour calculer les facteurs de conversion des oxydes en éléments.",
    ],
  },
  text: {
    gradeN: "Formule : azote (N)",
    gradeNHelp: "Le premier nombre sur le sac, en pourcentage massique. Dans 10-20-10, c’est 10.",
    gradeP: "Formule : phosphate (P₂O₅)",
    gradePHelp: "Le deuxième nombre sur le sac. Les étiquettes expriment le phosphore en phosphate (P₂O₅), et non en P élémentaire.",
    gradeK: "Formule : potasse (K₂O)",
    gradeKHelp: "Le troisième nombre sur le sac. Les étiquettes expriment le potassium en potasse (K₂O), et non en K élémentaire.",
    nutrient: "Élément visé par la dose",
    nutrients: { N: "Azote (N)", P2O5: "Phosphate (P₂O₅)", K2O: "Potasse (K₂O)" },
    rate: "Dose d’élément souhaitée",
    rateHelp: "La quantité de l’élément choisi à apporter par unité de surface, le plus souvent d’après une analyse de sol ou une recommandation locale.",
    rateUnit: "Unité de dose",
    rateUnits: { lb1000ft2: "lb pour 1 000 ft²", lbAcre: "lb par acre", kgHa: "kg par hectare", gM2: "g par m²" },
    area: "Surface à fertiliser",
    areaUnit: "Unité de surface",
    areaUnits: { ft2: "Pieds carrés (ft²)", m2: "Mètres carrés (m²)", acre: "Acres", ha: "Hectares (ha)" },
    areaSymbols: { ft2: "ft²", m2: "m²", acre: "acres", ha: "ha" },
    errors: {
      zeroGrade: "Ce produit ne contient pas l’élément choisi. Choisissez un autre élément ou un produit dont la formule comporte un nombre non nul pour celui-ci.",
      gradeSum: "Les trois nombres de la formule totalisent plus de 100 %. Vérifiez l’étiquette.",
    },
    product: "Engrais nécessaire",
    caption: "{rate} de {nutrient} ÷ {grade} dans un produit {label}, sur {area}.",
    productOther: "Produit nécessaire dans d’autres unités",
    productRate: "Dose de produit",
    applied: {
      N: "Azote (N) apporté",
      P2O5: "Phosphate (P₂O₅) apporté",
      K2O: "Potasse (K₂O) apportée",
      P: "Phosphore élémentaire (P) apporté",
      K: "Potassium élémentaire (K) apporté",
    },
    notes: {
      others: "La même quantité de produit apporte aussi les autres éléments de sa formule, indiqués ci-dessous. Si les doses obtenues ne vous conviennent pas, utilisez des produits séparés pour chaque élément.",
      elemental: "Les quantités élémentaires utilisent P = P₂O₅ × {p} et K = K₂O × {k}, d’après les masses atomiques standard.",
    },
  },
};

export default fr;
