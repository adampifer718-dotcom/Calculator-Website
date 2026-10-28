import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { HendersonHasselbalchText } from "../text/en";

const fr: CalculatorTranslation<HendersonHasselbalchText> = {
  content: {
    title: "Calculateur de pH tampon (Henderson-Hasselbalch)",
    shortTitle: "pH tampon",
    summary: "Trouvez le pH d’une solution tampon à partir des concentrations d’acide et de base, ou le rapport base/acide et la concentration de base nécessaires pour un pH cible.",
    metaTitle: "Calculateur de pH tampon – Équation de Henderson-Hasselbalch",
    metaDescription: "Avec pH = pKa + log([A⁻]/[HA]), obtenez le pH d’un tampon, le rapport base/acide pour un pH cible ou la base à ajouter, avec des pKa courants.",
    keywords: ["Henderson-Hasselbalch", "pH tampon", "solution tampon", "calcul tampon", "pKa", "base conjuguée", "tampon acétate", "tampon phosphate", "tampon Tris"],
    intro: [
      "Une solution tampon est un mélange d’un acide faible HA et de sa base conjuguée A⁻. Elle maintient le pH assez stable lorsqu’on ajoute de petites quantités d’acide fort ou de base forte, car chaque forme neutralise l’un des deux. L’équation de Henderson-Hasselbalch relie le pH du tampon au pKa de l’acide et au rapport entre les deux formes.",
      "Utilisez ce calculateur pour trouver le pH d’un tampon que vous avez préparé, le rapport base/acide qui donne un pH cible, ou la concentration nécessaire de la forme basique pour une concentration d’acide donnée. Des préréglages couvrent les tampons acétate, bicarbonate, phosphate, Tris et ammonium.",
    ],
    howToUse: [
      "Choisissez ce que vous voulez calculer : le pH, le rapport ou la concentration de base.",
      "Choisissez un couple tampon dans la liste, ou choisissez Autre et saisissez le pKa.",
      "Saisissez les concentrations en mol/L (la notation scientifique comme 5e-3 fonctionne) ou le pH cible.",
      "Lisez le résultat et vérifiez si le pH se situe dans la zone efficace pKa ± 1.",
    ],
    formulas: [
      { title: "Équation de Henderson-Hasselbalch", expression: "pH = pKa + log₁₀([A⁻] ÷ [HA])", explanation: "Lorsque les deux formes sont égales, le terme logarithmique vaut 0 et pH = pKa." },
      { title: "Rapport pour un pH cible", expression: "[A⁻] ÷ [HA] = 10^(pH − pKa)", explanation: "Chaque unité de pH au-dessus du pKa multiplie le rapport par 10." },
      { title: "Zone efficace", expression: "pKa − 1 ≤ pH ≤ pKa + 1", explanation: "Dans cette zone, aucune forme ne dépasse 10 fois l’autre : le tampon peut donc absorber aussi bien un ajout d’acide qu’un ajout de base." },
    ],
    examples: [
      {
        title: "Tampon acétate avec plus de base que d’acide",
        steps: ["Rapport = 0,15 ÷ 0,10 = 1,5", "pH = 4,76 + log₁₀(1,5) = 4,76 + 0,1761", "pH ≈ 4,936"],
      },
      {
        title: "Tampon phosphate à pH 7,40",
        steps: ["pH − pKa = 7,40 − 7,21 = 0,19", "[HPO₄²⁻] ÷ [H₂PO₄⁻] = 10^0,19 ≈ 1,549"],
      },
      {
        title: "Tris base nécessaire pour un pH de 7,8",
        steps: ["Rapport = 10^(7,8 − 8,07) = 10^−0,27 ≈ 0,5370", "[Tris base] = 0,05 mol/L × 0,5370 ≈ 0,02685 mol/L"],
      },
    ],
    assumptions: [
      "Les concentrations tiennent lieu d’activités. Dans les solutions concentrées ou très salines, le pH réel peut différer de quelques dixièmes.",
      "Les deux formes doivent être présentes à des concentrations bien supérieures à celles de H⁺ et de OH⁻ : les tampons très dilués et les pH éloignés du pKa sont donc moins précis.",
      "Les pKa prédéfinis s’appliquent à 25 °C. Le pKa varie avec la température et la force ionique, ce qui compte surtout pour le Tris. Vérifiez le pH d’un tampon réel avec un pH-mètre étalonné.",
      "Pour les acides qui ont plusieurs pKa (comme l’acide phosphorique et l’acide carbonique), seul le couple choisi est pris en compte.",
    ],
    faqs: [
      { question: "Pourquoi la zone utile est-elle pKa ± 1 ?", answer: "À une unité de pH du pKa, une forme vaut dix fois l’autre. Au-delà, il reste très peu de l’une des formes dans le tampon, qui ne peut plus guère absorber d’acide ou de base ajoutés dans ce sens." },
      { question: "Quel tampon choisir pour un pH donné ?", answer: "Choisissez un couple dont le pKa est proche du pH recherché, idéalement à moins d’une demi-unité environ. Pour un pH de 7,4, par exemple, le phosphate (pKa 7,21) convient mieux que l’acétate (pKa 4,76)." },
      { question: "Puis-je utiliser des moles au lieu des concentrations ?", answer: "Oui. Les deux formes sont dans le même volume : le rapport des moles est donc égal au rapport des concentrations. Saisissez les quantités en moles dans les deux champs et le pH est le même." },
    ],
    sourcesUsedFor: [
      "L’équation de Henderson-Hasselbalch, ses conditions d’utilisation et le pouvoir tampon.",
      "Les valeurs de pKa des substances tampons courantes à 25 °C.",
    ],
  },
  text: {
    solve: "Calculer",
    solves: {
      ph: "Le pH du tampon à partir des concentrations",
      ratio: "Le rapport base/acide pour un pH cible",
      base: "La concentration de base pour un pH cible",
    },
    acid: "Couple acide faible / base conjuguée",
    acids: {
      acetic: "Acide acétique / acétate (pKa {pka})",
      carbonic: "Acide carbonique / bicarbonate, première acidité (pKa {pka})",
      phosphate: "Dihydrogénophosphate / hydrogénophosphate (pKa {pka})",
      tris: "Tris-H⁺ / Tris base (pKa {pka})",
      ammonium: "Ammonium / ammoniac (pKa {pka})",
      custom: "Autre (saisir le pKa)",
    },
    pka: "pKa de l’acide faible",
    pkaHelp: "−log₁₀ de la constante d’acidité Ka, à la température de votre tampon.",
    base: "Concentration de la base conjuguée [A⁻]",
    acidConc: "Concentration de l’acide faible [HA]",
    concentrationHelp: "En mol/L. La notation scientifique, par exemple 5e-3, est acceptée.",
    targetPh: "pH cible",
    targetPhHelp: "Entre 0 et 14. Les tampons fonctionnent le mieux à moins d’une unité du pKa.",
    errors: {
      notNumber: "Saisissez un nombre positif, par exemple 0,1 ou 1e-3.",
      notPositive: "La concentration doit être supérieure à 0.",
      tooConcentrated: "Saisissez au maximum {max} mol/L.",
    },
    molar: "{value} mol/L",
    results: { ph: "pH du tampon", ratio: "Rapport [A⁻] ÷ [HA]", base: "Concentration de la base conjuguée [A⁻]" },
    captions: {
      ph: "pH = pKa + log₁₀([A⁻] ÷ [HA])",
      ratio: "[A⁻] ÷ [HA] = 10^(pH − pKa)",
      base: "[A⁻] = [HA] × 10^(pH − pKa)",
    },
    ratio: "Rapport [A⁻] ÷ [HA]",
    phUsed: "pH cible",
    pkaUsed: "pKa utilisé",
    range: "Zone tampon efficace (pKa ± 1)",
    rangeText: "pH de {low} à {high}",
    baseShare: "Part du tampon sous forme basique",
    notes: {
      insideRange: "Le pH se situe à moins d’une unité du pKa, là où le tampon résiste bien aux variations de pH.",
      outsideRange: "Le pH est à plus d’une unité du pKa. L’une des formes du couple dépasse alors 10 fois l’autre : le tampon n’a donc plus guère de capacité dans un sens. Un couple dont le pKa est plus proche de la cible convient généralement mieux.",
      tooMuchBase: "La concentration de base requise dépasse 20 mol/L, ce qui n’est pas réalisable. Réduisez la concentration d’acide ou choisissez un couple dont le pKa est plus proche du pH cible.",
      extreme: "Le pH est en dehors de 0 à 14. L’équation de Henderson-Hasselbalch n’est pas fiable aussi loin du pKa.",
      general: "L’équation utilise les concentrations à la place des activités et suppose que les deux formes sont présentes bien au-dessus des concentrations de H⁺ et de OH⁻. Les pKa indiqués s’appliquent à 25 °C ; le pKa varie avec la température et la force ionique, notamment pour le Tris.",
    },
  },
};

export default fr;
